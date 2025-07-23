import { NextApiRequest, NextApiResponse } from 'next';
import { DataLoader } from '@/lib/dataLoader';
import { Pool, ErrorResponse } from '@/types';
import { HTTP_STATUS, ERROR_MESSAGES } from '@/lib/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pool | ErrorResponse>
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
      path: req.url || `/api/pools/${req.query.id}`
    });
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: 'Invalid request',
        message: ERROR_MESSAGES.INVALID_REQUEST,
        timestamp: new Date().toISOString(),
        path: req.url || `/api/pools/${id}`
      });
    }

    const pool = await DataLoader.getPoolById(id);

    if (!pool) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        error: 'Pool not found',
        message: ERROR_MESSAGES.POOL_NOT_FOUND,
        timestamp: new Date().toISOString(),
        path: req.url || `/api/pools/${id}`
      });
    }

    // 设置缓存头
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    );

    res.status(HTTP_STATUS.OK).json(pool);

  } catch (error) {
    console.error(`API Error in /api/pools/${req.query.id}:`, error);
    
    const errorResponse: ErrorResponse = {
      error: 'Internal server error',
      message: ERROR_MESSAGES.INTERNAL_ERROR,
      timestamp: new Date().toISOString(),
      path: req.url || `/api/pools/${req.query.id}`
    };

    if (process.env.NODE_ENV === 'development') {
      errorResponse.details = error instanceof Error ? error.message : 'Unknown error';
    }

    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}