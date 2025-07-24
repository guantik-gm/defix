import { NextRequest, NextResponse } from 'next/server';
import { parsePools, generateFilterOptions, apiDelay } from '@/lib/file-data-parser';
import { filterPools, sortPools } from '@/lib/data-parser';
import { RiskLevel, SortField } from '@/types';

export async function GET(request: NextRequest) {
  try {
    // 模拟API延迟
    await apiDelay(300);
    
    const { searchParams } = new URL(request.url);
    
    // 解析查询参数
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    
    // 解析多字段排序参数
    let sorts: SortField[] = [];
    const sortsParam = searchParams.get('sorts');
    if (sortsParam) {
      try {
        sorts = JSON.parse(sortsParam);
      } catch (error) {
        console.error('Error parsing sorts parameter:', error);
        sorts = [];
      }
    }
    
    // 解析过滤参数
    const chains = searchParams.get('chains') ? searchParams.get('chains')!.split(',').filter(Boolean) : [];
    const risks = searchParams.get('risks') ? searchParams.get('risks')!.split(',').filter(Boolean) as RiskLevel[] : [];
    const types = searchParams.get('types') ? searchParams.get('types')!.split(',').filter(Boolean) : [];
    const tokens = searchParams.get('tokens') ? searchParams.get('tokens')!.split(',').filter(Boolean) : [];
    const markets = searchParams.get('markets') ? searchParams.get('markets')!.split(',').filter(Boolean) : [];
    const aprMin = searchParams.get('aprMin') ? parseFloat(searchParams.get('aprMin')!) : undefined;
    const aprMax = searchParams.get('aprMax') ? parseFloat(searchParams.get('aprMax')!) : undefined;
    
    // 从文件系统获取真实数据
    const allPools = await parsePools();
    
    // 应用过滤器
    let filteredPools = filterPools(allPools, {
      search,
      chains: chains.length > 0 ? chains : undefined,
      risks: risks.length > 0 ? risks : undefined,
      types: types.length > 0 ? types : undefined,
      tokens: tokens.length > 0 ? tokens : undefined,
      markets: markets.length > 0 ? markets : undefined,
      aprMin,
      aprMax,
    });
    
    // 应用多字段排序
    filteredPools = sortPools(filteredPools, sorts);
    
    // 应用分页
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPools = filteredPools.slice(startIndex, endIndex);
    
    // 生成过滤器选项
    const filters = await generateFilterOptions();
    
    return NextResponse.json({
      success: true,
      data: {
        pools: paginatedPools,
        total: filteredPools.length,
        page,
        limit,
        totalPages: Math.ceil(filteredPools.length / limit),
        filters,
      }
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: '获取收益池数据失败'
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { 
      success: false,
      error: 'Method not allowed',
      message: '不支持的请求方法' 
    },
    { status: 405 }
  );
}