import { NextApiRequest, NextApiResponse } from 'next';
import { DataLoader } from '@/lib/dataLoader';
import { ReportResponse, ErrorResponse } from '@/types';
import { HTTP_STATUS, ERROR_MESSAGES } from '@/lib/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReportResponse | ErrorResponse>
) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(HTTP_STATUS.OK).end();
  }

  if (req.method !== 'GET') {
    return res.status(HTTP_STATUS.METHOD_NOT_ALLOWED).json({
      error: 'Method not allowed',
      message: ERROR_MESSAGES.METHOD_NOT_ALLOWED,
      timestamp: new Date().toISOString(),
      path: req.url || `/api/reports/analysis/${req.query.nickname}`
    });
  }

  try {
    const { nickname } = req.query;

    if (!nickname || typeof nickname !== 'string') {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: 'Invalid request',
        message: ERROR_MESSAGES.INVALID_REQUEST,
        timestamp: new Date().toISOString(),
        path: req.url || `/api/reports/analysis/${nickname}`
      });
    }

    const report = await DataLoader.loadAnalysisReport(nickname);

    // 设置适当的内容类型和缓存头
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    );

    res.status(HTTP_STATUS.OK).json(report);

  } catch (error) {
    console.error(`API Error in /api/reports/analysis/${req.query.nickname}:`, error);
    
    // 检查是否是文件不存在错误
    const isNotFound = error instanceof Error && error.message.includes('not found');
    const statusCode = isNotFound ? HTTP_STATUS.NOT_FOUND : HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const errorMessage = isNotFound ? ERROR_MESSAGES.REPORT_NOT_FOUND : ERROR_MESSAGES.INTERNAL_ERROR;
    
    const errorResponse: ErrorResponse = {
      error: isNotFound ? 'Report not found' : 'Internal server error',
      message: errorMessage,
      timestamp: new Date().toISOString(),
      path: req.url || `/api/reports/analysis/${req.query.nickname}`
    };

    if (process.env.NODE_ENV === 'development') {
      errorResponse.details = error instanceof Error ? error.message : 'Unknown error';
    }

    res.status(statusCode).json(errorResponse);
  }
}