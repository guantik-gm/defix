# 报告系统技术设计文档

## 概述

DeFi收益池聚合系统的报告系统采用双格式支持策略，为用户提供最优的阅读和交互体验。

## 设计原则

### 用户体验优先
- **调研报告**：优化的Markdown阅读体验，支持表格等富文本格式
- **分析报告**：一键直达完整交互式HTML报告，无中间页面

### 技术实现简洁
- **直接文件服务**：减少不必要的数据处理和转换
- **原生功能保留**：完整保持HTML文件的JavaScript交互能力

## 文件格式处理

### Markdown文件（调研报告）

**技术栈**
- `remark` - Markdown解析器
- `remark-gfm` - GitHub风格Markdown支持（表格）
- `remark-html` - HTML输出
- `gray-matter` - Frontmatter解析

**处理流程**
```typescript
// 1. 文件读取和Frontmatter解析
const { data, content: markdownContent } = matter(fileContent);

// 2. Markdown转HTML处理管道
const processedContent = await remark()
  .use(remarkGfm)  // 启用表格支持
  .use(html, { sanitize: false })
  .process(markdownContent);
```

**样式优化**
```css
/* 表格渲染样式 */
.prose table {
  @apply w-full border-collapse border border-gray-300 my-6;
}
.prose table thead {
  @apply bg-gray-50;
}
.prose table th {
  @apply border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900;
}
.prose table td {
  @apply border border-gray-300 px-4 py-3 text-gray-800;
}
```

### HTML文件（分析报告）

**直接跳转设计**
- **无中间页面**：用户点击直接打开完整报告
- **完整功能保留**：Chart.js图表、动画、交互卡片
- **新窗口独立运行**：避免与主应用冲突

**技术实现**
```typescript
// PoolTable.tsx - 分析报告按钮
onClick={() => {
  const slug = pool.reports.analysis?.url?.split('/').pop();
  if (slug) {
    window.open(`/api/reports/analysis/${slug}/raw`, '_blank');
  }
}}

// API端点 - 直接服务原始HTML
export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const content = fs.readFileSync(htmlFilePath, 'utf8');
  
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
```

## API设计

### 端点结构
```
# 统一的用户访问URL
/reports/research/[slug]          # 调研报告页面（Markdown渲染）
/reports/analysis/[slug]          # 分析报告页面（直接HTML服务）

# 后端API端点（用于数据获取）
/api/reports/research/[slug]      # 调研报告API（返回JSON）
/api/reports/analysis/[slug]      # 分析报告API（返回JSON）
```

### 统一文件结构
```typescript
// 所有报告文件统一存储在research目录
web3/protocol/research/
├── [slug].md      # 调研报告（Markdown格式）
└── [slug].html    # 分析报告（HTML格式）

// 文件查找顺序
- 分析报告：优先HTML格式，备用Markdown格式
- 调研报告：仅Markdown格式
```

## 用户交互流程

### 调研报告流程
```
用户点击"查看报告" → 打开报告页面 → 服务器处理Markdown → 渲染HTML页面 → 显示格式化内容
```

### 分析报告流程
```
用户点击"查看分析" → 打开统一URL(/reports/analysis/[slug]) → 直接返回完整交互式HTML（无重定向）
```

## 性能优化

### 缓存策略
- **静态文件缓存**：1小时HTTP缓存
- **API响应缓存**：减少重复文件读取
- **客户端缓存**：浏览器标准缓存机制

### 响应时间目标
- **HTML文件服务**：<100ms
- **Markdown处理**：<200ms
- **首屏渲染**：<2秒

## 安全考虑

### 文件访问安全
- **路径验证**：防止目录遍历攻击
- **文件类型检查**：仅允许.md和.html文件
- **内容安全**：HTML文件通过可信源管理

### 同源策略
- **API端点服务**：符合浏览器同源策略
- **新窗口隔离**：避免跨域安全问题
- **CSP兼容**：与内容安全策略兼容

## 扩展性设计

### 多格式支持
- 当前：Markdown + HTML
- 未来可扩展：PDF、图片、视频等

### 动态内容支持
- 当前：静态文件服务
- 未来可扩展：数据库存储、动态生成

### 国际化支持
- 文件命名支持：[slug]_[lang].md
- 多语言路由：/reports/[lang]/research/[slug]

## 维护和监控

### 错误处理
- **404处理**：友好的文件未找到提示
- **500处理**：服务器错误恢复机制
- **日志记录**：访问日志和错误日志

### 性能监控
- **响应时间监控**：API响应时间统计
- **错误率监控**：404和500错误率跟踪
- **用户行为分析**：报告访问模式分析

---

## URL统一化设计 (v2.1)

### 设计目标
- **统一用户体验**：调研报告和分析报告使用一致的URL格式
- **保持现有功能**：所有页面渲染和跳转功能完全保留
- **交互性完整**：HTML分析报告的所有交互功能正常工作

### 实现方案
1. **调研报告**：`/reports/research/[slug]` - Next.js页面渲染Markdown内容
2. **分析报告**：`/reports/analysis/[slug]` - 路由处理器直接返回HTML内容

### URL映射关系
```
Pool Table 数据源:
├── research.url: '/reports/research/[slug]'    → Next.js页面渲染
└── analysis.url: '/reports/analysis/[slug]'    → 路由处理器直接返回HTML

用户访问路径:
/reports/analysis/tapp → 直接返回完整HTML（零重定向，最优性能）
```

### 技术架构优化
- **调研报告**: 使用 `page.tsx` + remark 处理Markdown
- **分析报告**: 使用 `route.ts` 直接返回HTML文件内容
- **性能提升**: 消除了重定向步骤，减少一次HTTP请求

---

*文档更新时间：2025-01-24*  
*版本：v2.3 - URL统一化 + 零重定向架构优化*