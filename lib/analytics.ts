// Google Analytics 高级追踪工具库

declare global {
  interface Window {
    gtag: (command: string, targetId: string | Date, config?: any) => void;
    dataLayer: any[];
  }
}

// 检查 Google Analytics 是否已加载
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// 页面访问追踪 (已在 layout.tsx 中自动处理)
export const trackPageView = (url: string, title?: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!, {
    page_title: title || document.title,
    page_location: url,
  });
};

// 自定义事件追踪
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  try {
    if (!isGALoaded()) return;
    
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    // 静默处理追踪错误，不影响用户体验
    console.warn('Analytics tracking error:', error);
  }
};

// 收益池相关事件追踪
export const trackPoolEvent = {
  // 查看收益池详情
  viewPoolDetail: (poolName: string, protocolName: string) => {
    trackEvent('view_pool_detail', 'pool_interaction', `${protocolName}_${poolName}`);
  },
  
  // 筛选操作
  filterPools: (filterType: string, filterValue: string) => {
    trackEvent('filter_pools', 'pool_interaction', `${filterType}:${filterValue}`);
  },
  
  // 排序操作
  sortPools: (sortField: string, sortOrder: string) => {
    trackEvent('sort_pools', 'pool_interaction', `${sortField}_${sortOrder}`);
  },
  
  // 搜索操作
  searchPools: (searchTerm: string) => {
    trackEvent('search_pools', 'pool_interaction', searchTerm);
  },
  
  // 分页操作
  changePage: (page: number, totalPages: number) => {
    trackEvent('change_page', 'pool_interaction', `page_${page}_of_${totalPages}`);
  },
};

// 报告相关事件追踪
export const trackReportEvent = {
  // 查看调研报告
  viewResearchReport: (protocolName: string) => {
    trackEvent('view_research_report', 'report_interaction', protocolName);
  },
  
  // 查看分析报告
  viewAnalysisReport: (protocolName: string) => {
    trackEvent('view_analysis_report', 'report_interaction', protocolName);
  },
  
  // 报告阅读时长 (需要在页面中实现)
  reportReadingTime: (protocolName: string, timeSpent: number) => {
    trackEvent('report_reading_time', 'report_engagement', protocolName, timeSpent);
  },
};

// 用户互动事件追踪
export const trackUserInteraction = {
  // 表单提交
  submitRequest: (requestType: string) => {
    trackEvent('submit_request', 'user_action', requestType);
  },
  
  // 外部链接点击
  clickExternalLink: (linkUrl: string, linkType: string) => {
    trackEvent('click_external_link', 'user_action', `${linkType}:${linkUrl}`);
  },
  
  // 协议官网访问
  visitProtocolWebsite: (protocolName: string, websiteUrl: string) => {
    trackEvent('visit_protocol_website', 'user_action', protocolName);
  },
  
  // 社交媒体分享
  shareContent: (contentType: string, contentId: string, platform: string) => {
    trackEvent('share_content', 'user_action', `${contentType}_${contentId}_${platform}`);
  },
};

// 转化目标追踪
export const trackConversion = {
  // 用户请求提交完成
  requestSubmitted: (requestType: string) => {
    trackEvent('conversion_request_submitted', 'conversion', requestType);
    
    // 设置转化目标
    window.gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      event_category: 'form_submission',
      event_label: requestType,
    });
  },
  
  // 用户深度参与 (浏览多个报告)
  deepEngagement: (reportsViewed: number) => {
    if (reportsViewed >= 3) {
      trackEvent('conversion_deep_engagement', 'conversion', `${reportsViewed}_reports`);
    }
  },
  
  // 用户回访
  returnVisitor: () => {
    trackEvent('conversion_return_visitor', 'conversion');
  },
};

// 用户行为流分析
export const trackUserFlow = {
  // 入口页面记录
  setEntryPage: (pagePath: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('ga_entry_page', pagePath);
    }
  },
  
  // 用户路径追踪
  trackNavigationPath: (fromPage: string, toPage: string) => {
    trackEvent('navigation_path', 'user_flow', `${fromPage}_to_${toPage}`);
  },
  
  // 退出页面记录
  setExitPage: (pagePath: string) => {
    trackEvent('exit_page', 'user_flow', pagePath);
  },
};

// 性能追踪
export const trackPerformance = {
  // 页面加载时间
  pageLoadTime: (loadTime: number, pagePath: string) => {
    trackEvent('page_load_time', 'performance', pagePath, Math.round(loadTime));
  },
  
  // API 响应时间
  apiResponseTime: (endpoint: string, responseTime: number) => {
    trackEvent('api_response_time', 'performance', endpoint, Math.round(responseTime));
  },
  
  // 错误追踪
  trackError: (errorType: string, errorMessage: string, pagePath: string) => {
    trackEvent('error', 'performance', `${errorType}:${errorMessage}:${pagePath}`);
  },
};

// 初始化用户会话追踪
export const initializeSessionTracking = () => {
  if (typeof window === 'undefined') return;
  
  // 记录会话开始时间
  const sessionStart = Date.now();
  sessionStorage.setItem('ga_session_start', sessionStart.toString());
  
  // 页面卸载时追踪会话时长
  window.addEventListener('beforeunload', () => {
    const sessionEnd = Date.now();
    const sessionDuration = sessionEnd - sessionStart;
    trackEvent('session_duration', 'user_engagement', '', Math.round(sessionDuration / 1000));
  });
  
  // 追踪滚动深度
  let maxScrollDepth = 0;
  window.addEventListener('scroll', () => {
    const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > maxScrollDepth) {
      maxScrollDepth = scrollDepth;
      
      // 追踪 25%, 50%, 75%, 100% 滚动深度
      if ([25, 50, 75, 100].includes(scrollDepth)) {
        trackEvent('scroll_depth', 'user_engagement', `${scrollDepth}%`);
      }
    }
  });
};

// 电商增强功能 (适用于 DeFi 投资追踪)
export const trackInvestmentInterest = {
  // 投资兴趣追踪
  viewInvestmentOpportunity: (protocolName: string, poolType: string, aprRange: string) => {
    window.gtag('event', 'view_item', {
      currency: 'USD',
      value: 0,
      items: [{
        item_id: `${protocolName}_${poolType}`,
        item_name: `${protocolName} ${poolType}`,
        item_category: 'DeFi Pool',
        item_brand: protocolName,
        price: 0,
        quantity: 1,
        item_variant: aprRange,
      }]
    });
  },
  
  // 收益策略比较
  compareStrategies: (strategies: string[]) => {
    trackEvent('compare_strategies', 'investment_research', strategies.join('_vs_'));
  },
};