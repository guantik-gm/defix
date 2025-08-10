import { NextRequest, NextResponse } from 'next/server';
import { getPairedReportInfo } from '@/lib/reports';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const currentType = searchParams.get('type') as 'research' | 'analysis';
    
    if (!currentType || !['research', 'analysis'].includes(currentType)) {
      return NextResponse.json(
        { error: 'Invalid type parameter. Must be "research" or "analysis"' },
        { status: 400 }
      );
    }

    const pairedReport = getPairedReportInfo(params.slug, currentType);
    
    return NextResponse.json({
      success: true,
      data: pairedReport
    });
    
  } catch (error) {
    console.error('Error checking paired report:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}