import { NextApiRequest, NextApiResponse } from 'next';
import { healthCheck } from '@/lib/supabase';
import { DataLoader } from '@/lib/dataLoader';
import { HTTP_STATUS } from '@/lib/constants';

interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  version: string;
  services: {
    database: {
      status: 'ok' | 'error';
      message: string;
    };
    fileSystem: {
      status: 'ok' | 'error';
      message: string;
      cacheStats?: {
        pools: number;
        protocols: number;
        reports: number;
      };
    };
  };
  uptime?: number;
}

// 应用启动时间
const startTime = Date.now();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  if (req.method !== 'GET') {
    return res.status(HTTP_STATUS.METHOD_NOT_ALLOWED).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: { status: 'error', message: 'Method not allowed' },
        fileSystem: { status: 'error', message: 'Method not allowed' }
      }
    });
  }

  const timestamp = new Date().toISOString();
  const version = process.env.npm_package_version || '1.0.0';
  
  // 检查数据库连接
  const dbHealth = await healthCheck();
  
  // 检查文件系统和数据加载
  let fileSystemHealth: { status: 'ok' | 'error'; message: string } = { 
    status: 'ok' as const, 
    message: 'File system accessible' 
  };
  let cacheStats;
  
  try {
    // 尝试加载一些数据来验证文件系统
    const pools = await DataLoader.loadAllPools();
    cacheStats = DataLoader.getCacheStats();
    
    if (pools.length === 0) {
      fileSystemHealth = {
        status: 'error' as const,
        message: 'No pools data found - check web3 directory'
      };
    } else {
      fileSystemHealth = {
        status: 'ok' as const,
        message: `File system ok - ${pools.length} pools loaded`
      };
    }
  } catch (error) {
    fileSystemHealth = {
      status: 'error' as const,
      message: error instanceof Error ? error.message : 'File system error'
    };
  }

  const overallStatus = dbHealth.status === 'ok' && fileSystemHealth.status === 'ok' ? 'ok' as const : 'error' as const;
  const uptime = Math.floor((Date.now() - startTime) / 1000);

  const response: HealthResponse = {
    status: overallStatus,
    timestamp,
    version,
    services: {
      database: dbHealth,
      fileSystem: {
        ...fileSystemHealth,
        ...(cacheStats && { cacheStats })
      }
    },
    uptime
  };

  // 设置适当的状态码
  const statusCode = overallStatus === 'ok' ? HTTP_STATUS.OK : HTTP_STATUS.SERVICE_UNAVAILABLE;
  
  // 不缓存健康检查响应
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.status(statusCode).json(response);
}