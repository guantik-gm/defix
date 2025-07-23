import { NextApiRequest, NextApiResponse } from 'next';
import { DataLoader } from '@/lib/dataLoader';
import { Pool, SearchFilters, PoolsResponse, ErrorResponse } from '@/types';
import { HTTP_STATUS, ERROR_MESSAGES, DEFAULT_PAGINATION } from '@/lib/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PoolsResponse | ErrorResponse>
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
      path: req.url || '/api/pools'
    });
  }

  try {
    const {
      page = DEFAULT_PAGINATION.page,
      limit = DEFAULT_PAGINATION.limit,
      search,
      chain,
      risk,
      type,
      token,
      market,
      aprMin,
      aprMax,
      sortBy = 'name',
      sortOrder = 'asc'
    } = req.query;

    // 验证分页参数
    const pageNum = Math.max(1, parseInt(page as string) || 1);
    const limitNum = Math.min(
      Math.max(1, parseInt(limit as string) || DEFAULT_PAGINATION.limit),
      DEFAULT_PAGINATION.maxLimit
    );

    // 加载所有池数据
    const allPools = await DataLoader.loadAllPools();
    
    // 应用搜索过滤器
    let filteredPools = allPools;
    
    // 文本搜索
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase().trim();
      filteredPools = filteredPools.filter(pool =>
        pool.name.toLowerCase().includes(searchTerm) ||
        pool.protocol.name.toLowerCase().includes(searchTerm) ||
        pool.type.toLowerCase().includes(searchTerm) ||
        pool.token.toLowerCase().includes(searchTerm)
      );
    }
    
    // 区块链过滤
    if (chain) {
      const chains = Array.isArray(chain) ? chain : [chain];
      filteredPools = filteredPools.filter(pool =>
        pool.chain.some(c => chains.includes(c))
      );
    }
    
    // 风险等级过滤
    if (risk) {
      const risks = Array.isArray(risk) ? risk : [risk];
      filteredPools = filteredPools.filter(pool =>
        risks.includes(pool.risk)
      );
    }

    // 类型过滤
    if (type) {
      const types = Array.isArray(type) ? type : [type];
      filteredPools = filteredPools.filter(pool =>
        types.includes(pool.type)
      );
    }

    // Token过滤
    if (token) {
      const tokens = Array.isArray(token) ? token : [token];
      filteredPools = filteredPools.filter(pool =>
        tokens.includes(pool.token)
      );
    }

    // 市场过滤
    if (market) {
      const markets = Array.isArray(market) ? market : [market];
      filteredPools = filteredPools.filter(pool =>
        pool.market.some(m => markets.includes(m))
      );
    }
    
    // APR范围过滤
    if (aprMin || aprMax) {
      filteredPools = filteredPools.filter(pool => {
        const poolApr = (pool.aprRange.low + pool.aprRange.high) / 2;
        const minApr = aprMin ? parseFloat(aprMin as string) : 0;
        const maxApr = aprMax ? parseFloat(aprMax as string) : Infinity;
        
        return poolApr >= minApr && poolApr <= maxApr;
      });
    }
    
    // 应用排序
    filteredPools.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'apr':
          aValue = (a.aprRange.low + a.aprRange.high) / 2;
          bValue = (b.aprRange.low + b.aprRange.high) / 2;
          break;
        case 'risk':
          const riskOrder = { '低风险': 1, '中风险': 2, '高风险': 3, '极高风险': 4 };
          aValue = riskOrder[a.risk as keyof typeof riskOrder] || 999;
          bValue = riskOrder[b.risk as keyof typeof riskOrder] || 999;
          break;
        case 'createdAt':
          aValue = a.createdAt.getTime();
          bValue = b.createdAt.getTime();
          break;
        default: // name
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      
      if (sortOrder === 'desc') {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    });
    
    // 应用分页
    const total = filteredPools.length;
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedPools = filteredPools.slice(startIndex, endIndex);
    
    // 生成过滤器选项
    const filters = await DataLoader.generateFilterOptions(allPools);
    
    // 设置缓存头
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    );

    const response: PoolsResponse = {
      pools: paginatedPools,
      total,
      page: pageNum,
      limit: limitNum,
      filters
    };

    res.status(HTTP_STATUS.OK).json(response);
    
  } catch (error) {
    console.error('API Error in /api/pools:', error);
    
    const errorResponse: ErrorResponse = {
      error: 'Internal server error',
      message: ERROR_MESSAGES.INTERNAL_ERROR,
      timestamp: new Date().toISOString(),
      path: req.url || '/api/pools'
    };

    if (process.env.NODE_ENV === 'development') {
      errorResponse.details = error instanceof Error ? error.message : 'Unknown error';
    }

    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}