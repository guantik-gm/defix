import fs from 'fs';
import path from 'path';

/**
 * 检测指定slug的报告文件是否存在
 */
export function checkReportExists(slug: string, type: 'markdown' | 'html'): boolean {
  const extension = type === 'markdown' ? 'md' : 'html';
  const filePath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${slug}.${extension}`);
  
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    console.error(`Error checking ${type} report existence for slug "${slug}":`, error);
    return false;
  }
}

/**
 * 检测调研报告（Markdown）是否存在
 */
export function checkResearchReportExists(slug: string): boolean {
  return checkReportExists(slug, 'markdown');
}

/**
 * 检测分析报告（HTML）是否存在
 */
export function checkAnalysisReportExists(slug: string): boolean {
  return checkReportExists(slug, 'html');
}

/**
 * 获取与当前报告配对的另一种类型报告的信息
 */
export function getPairedReportInfo(slug: string, currentType: 'research' | 'analysis') {
  if (currentType === 'research') {
    // 当前是调研报告，检查是否有对应的分析报告
    const hasAnalysis = checkAnalysisReportExists(slug);
    return {
      exists: hasAnalysis,
      url: hasAnalysis ? `/reports/analysis/${slug}` : null,
      title: '查看交互式报告',
      type: 'analysis' as const
    };
  } else {
    // 当前是分析报告，检查是否有对应的调研报告
    const hasResearch = checkResearchReportExists(slug);
    return {
      exists: hasResearch,
      url: hasResearch ? `/reports/research/${slug}` : null,
      title: '查看详细调研报告',
      type: 'research' as const
    };
  }
}