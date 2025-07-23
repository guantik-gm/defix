import { NextApiRequest, NextApiResponse } from 'next';
import { DataLoader } from '@/lib/dataLoader';
import { FilterOptions, ErrorResponse } from '@/types';
import { HTTP_STATUS, ERROR_MESSAGES } from '@/lib/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FilterOptions | ErrorResponse>
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
      path: req.url || '/api/filters'
    });
  }

  try {
    const filters = await DataLoader.generateFilterOptions();

    // 设置长期缓存，因为过滤器选项变化不频繁
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=7200, stale-while-revalidate=86400'
    );

    res.status(HTTP_STATUS.OK).json(filters);

  } catch (error) {
    console.error('API Error in /api/filters:', error);
    
    const errorResponse: ErrorResponse = {
      error: 'Internal server error',
      message: ERROR_MESSAGES.INTERNAL_ERROR,
      timestamp: new Date().toISOString(),
      path: req.url || '/api/filters'
    };

    if (process.env.NODE_ENV === 'development') {
      errorResponse.details = error instanceof Error ? error.message : 'Unknown error';
    }

    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}