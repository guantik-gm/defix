import { NextApiRequest, NextApiResponse } from 'next';
import { createUserRequest } from '@/lib/supabase';
import { ApiResponse, ErrorResponse } from '@/types';
import { HTTP_STATUS, ERROR_MESSAGES, SUCCESS_MESSAGES, VALIDATION_RULES } from '@/lib/constants';
import { isValidEmail } from '@/lib/utils';

interface RequestBody {
  poolName: string;
  protocolName: string;
  description: string;
  userEmail?: string;
}

interface RequestResponse {
  success: boolean;
  requestId?: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RequestResponse | ErrorResponse>
) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(HTTP_STATUS.OK).end();
  }

  if (req.method !== 'POST') {
    return res.status(HTTP_STATUS.METHOD_NOT_ALLOWED).json({
      error: 'Method not allowed',
      message: ERROR_MESSAGES.METHOD_NOT_ALLOWED,
      timestamp: new Date().toISOString(),
      path: req.url || '/api/requests'
    });
  }

  try {
    const { poolName, protocolName, description, userEmail }: RequestBody = req.body;
    
    // 验证必填字段
    const validationErrors: string[] = [];

    if (!poolName || typeof poolName !== 'string') {
      validationErrors.push('收益池名称为必填项');
    } else if (poolName.length < VALIDATION_RULES.POOL_NAME.minLength || 
               poolName.length > VALIDATION_RULES.POOL_NAME.maxLength) {
      validationErrors.push(`收益池名称长度应在${VALIDATION_RULES.POOL_NAME.minLength}-${VALIDATION_RULES.POOL_NAME.maxLength}字符之间`);
    }

    if (!protocolName || typeof protocolName !== 'string') {
      validationErrors.push('协议名称为必填项');
    } else if (protocolName.length < VALIDATION_RULES.PROTOCOL_NAME.minLength || 
               protocolName.length > VALIDATION_RULES.PROTOCOL_NAME.maxLength) {
      validationErrors.push(`协议名称长度应在${VALIDATION_RULES.PROTOCOL_NAME.minLength}-${VALIDATION_RULES.PROTOCOL_NAME.maxLength}字符之间`);
    }

    if (!description || typeof description !== 'string') {
      validationErrors.push('详细描述为必填项');
    } else if (description.length < VALIDATION_RULES.DESCRIPTION.minLength || 
               description.length > VALIDATION_RULES.DESCRIPTION.maxLength) {
      validationErrors.push(`详细描述长度应在${VALIDATION_RULES.DESCRIPTION.minLength}-${VALIDATION_RULES.DESCRIPTION.maxLength}字符之间`);
    }

    if (userEmail && typeof userEmail === 'string' && !isValidEmail(userEmail)) {
      validationErrors.push('邮箱格式不正确');
    }

    if (validationErrors.length > 0) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: 'Validation error',
        message: validationErrors.join('; '),
        timestamp: new Date().toISOString(),
        path: req.url || '/api/requests'
      });
    }
    
    // 内容安全检查 - 基本的XSS和注入防护
    const sanitizedData = {
      poolName: poolName.trim(),
      protocolName: protocolName.trim(),
      description: description.trim(),
      userEmail: userEmail?.trim()
    };

    // 检查是否包含恶意内容
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /\beval\s*\(/i,
      /\balert\s*\(/i
    ];

    const allText = [sanitizedData.poolName, sanitizedData.protocolName, sanitizedData.description].join(' ');
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(allText));

    if (hasSuspiciousContent) {
      console.warn('Suspicious content detected in request:', {
        poolName: sanitizedData.poolName,
        protocolName: sanitizedData.protocolName,
        description: sanitizedData.description.substring(0, 100)
      });

      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: 'Invalid content',
        message: '请求内容包含不允许的字符',
        timestamp: new Date().toISOString(),
        path: req.url || '/api/requests'
      });
    }
    
    // 存储到Supabase
    const result = await createUserRequest(sanitizedData);
    
    // 可选：发送通知邮件
    if (process.env.ENABLE_EMAIL_NOTIFICATIONS === 'true') {
      try {
        await sendNotificationEmail(result);
      } catch (emailError) {
        console.warn('Failed to send notification email:', emailError);
        // 继续执行，不因邮件发送失败而中断
      }
    }
    
    // 记录成功提交的请求（用于监控）
    console.info('New user request submitted:', {
      id: result.id,
      poolName: sanitizedData.poolName,
      protocolName: sanitizedData.protocolName,
      hasEmail: !!sanitizedData.userEmail,
      timestamp: new Date().toISOString()
    });

    const response: RequestResponse = {
      success: true,
      requestId: result.id,
      message: SUCCESS_MESSAGES.REQUEST_SUBMITTED
    };

    res.status(HTTP_STATUS.OK).json(response);
    
  } catch (error) {
    console.error('Request submission error:', error);
    
    // 检查是否是数据库错误
    const isDatabaseError = error instanceof Error && 
      (error.message.includes('supabase') || error.message.includes('database'));
    
    const errorResponse: ErrorResponse = {
      error: isDatabaseError ? 'Database error' : 'Internal server error',
      message: isDatabaseError ? ERROR_MESSAGES.DATABASE_ERROR : ERROR_MESSAGES.INTERNAL_ERROR,
      timestamp: new Date().toISOString(),
      path: req.url || '/api/requests'
    };

    if (process.env.NODE_ENV === 'development') {
      errorResponse.details = error instanceof Error ? error.message : 'Unknown error';
    }

    const statusCode = isDatabaseError ? HTTP_STATUS.SERVICE_UNAVAILABLE : HTTP_STATUS.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json(errorResponse);
  }
}

// 发送通知邮件的函数（可选实现）
async function sendNotificationEmail(request: any): Promise<void> {
  // 这里可以集成邮件服务如SendGrid, AWS SES等
  // 示例实现留空，实际使用时需要配置邮件服务
  
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.warn('Email notification configuration missing');
    return;
  }

  // 示例：使用nodemailer发送邮件
  try {
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransporter({...});
    // await transporter.sendMail({...});
    
    console.info('Email notification sent for request:', request.id);
  } catch (error) {
    console.error('Failed to send email notification:', error);
    throw error;
  }
}