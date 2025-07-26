# 收益池详情弹窗功能实现文档

## 📋 概述

收益池详情弹窗功能为用户提供了一个快速查看收益池详细信息的交互界面。用户可以通过点击收益池名称来打开弹窗，查看包括底层收益、风险提示、适用场景和附加说明在内的详细信息。

## 🎯 功能特性

### 核心功能
- ✅ **点击触发**: 点击收益池名称打开详情弹窗
- ✅ **信息展示**: 显示收益池的完整详细信息
- ✅ **动态内容**: 根据数据可用性动态显示信息区域
- ✅ **文件内容**: 自动获取并显示收益池文件的正文内容
- ✅ **响应式设计**: 适配桌面端和移动端设备

### 交互体验
- **悬停效果**: 收益池名称悬停时显示蓝色链接效果和信息图标
- **键盘支持**: 支持 ESC 键关闭弹窗
- **遮罩关闭**: 点击弹窗外部区域关闭
- **滚动优化**: 弹窗内容支持垂直滚动

## 🏗️ 技术架构

### 组件结构
```
收益池详情弹窗系统
├── PoolTable.tsx (主表格组件)
│   ├── 点击事件处理
│   ├── 弹窗状态管理
│   └── API 数据获取
├── PoolDetailDialog.tsx (弹窗组件)
│   ├── 信息展示区域
│   ├── 条件渲染逻辑
│   └── 响应式布局
├── ui/dialog.tsx (基础弹窗组件)
│   ├── Radix UI 集成
│   ├── 无障碍支持
│   └── 动画效果
└── api/pool-content/route.ts (API 路由)
    ├── 文件搜索逻辑
    ├── Markdown 解析
    └── 内容提取
```

### 数据流
```
用户点击收益池名称
    ↓
设置选中池子并打开弹窗
    ↓
异步获取池子文件内容
    ↓
API 搜索对应的 .md 文件
    ↓
解析 frontmatter 提取正文
    ↓
更新弹窗显示内容
```

## 📁 文件结构

### 新增文件
- `components/ui/dialog.tsx` - 基础弹窗组件
- `components/PoolDetailDialog.tsx` - 收益池详情弹窗组件  
- `app/api/pool-content/route.ts` - 获取池子文件内容的 API

### 修改文件
- `components/PoolTable.tsx` - 添加点击事件和弹窗集成

## 🎨 UI 设计

### 信息展示区域

#### 1. 基本信息区域
- **收益池名称**: 大标题显示，带风险等级标签
- **协议信息**: 协议名称和类型
- **收益数据**: 收益范围和 Token 类型
- **标签展示**: 所属链和适用市场的 Badge

#### 2. 详细信息区域（条件显示）

**🔵 底层收益 (underlying)**
```tsx
{pool.underlying && pool.underlying.trim() !== '' && (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
    <h4 className="flex items-center gap-2">
      <InfoIcon className="w-4 h-4 text-blue-500" />
      底层收益
    </h4>
    <p className="text-gray-700 text-sm">{pool.underlying}</p>
  </div>
)}
```

**⚠️ 风险提示 (danger)**
```tsx
{pool.danger && pool.danger.trim() !== '' && (
  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
    <h4 className="flex items-center gap-2">
      <AlertTriangle className="w-4 h-4 text-amber-500" />
      风险提示
    </h4>
    <p className="text-gray-700 text-sm">{pool.danger}</p>
  </div>
)}
```

**🎯 适用场景 (scenarios)**
```tsx
{pool.scenarios && pool.scenarios.trim() !== '' && (
  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
    <h4 className="flex items-center gap-2">
      <Target className="w-4 h-4 text-green-500" />
      适用场景
    </h4>
    <p className="text-gray-700 text-sm">{pool.scenarios}</p>
  </div>
)}
```

**📄 附加说明 (文件正文)**
```tsx
{poolContent && poolContent.trim() && (
  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
    <h4 className="flex items-center gap-2">
      <FileText className="w-4 h-4 text-purple-500" />
      附加说明
    </h4>
    <div className="text-gray-700 text-sm whitespace-pre-wrap">
      {poolContent}
    </div>
  </div>
)}
```

#### 3. 协议信息区域
- 协议详细信息网格展示
- 包含协议名称、简称、描述等信息

### 样式特点
- **颜色区分**: 不同信息类型使用不同颜色主题
- **图标标识**: 每个信息区域都有相应的图标
- **圆角设计**: 使用 rounded-lg 保持现代感
- **间距统一**: 使用一致的 padding 和 margin
- **响应式**: 在移动端自动适配布局

## 🔌 API 设计

### 端点信息
- **路径**: `GET /api/pool-content`
- **参数**: `fileName` (字符串) - 收益池文件名
- **响应**: 纯文本内容 (text/plain)

### 文件搜索逻辑
```typescript
// 定义可能的文件路径
const possiblePaths = [
  path.join(process.cwd(), 'web3', 'pools', 'cex', fileName),
  path.join(process.cwd(), 'web3', 'pools', 'chain', fileName),
];

// 智能匹配算法
if (!filePath) {
  const searchDirs = ['web3/pools/cex', 'web3/pools/chain'];
  for (const dir of searchDirs) {
    const files = fs.readdirSync(dir);
    const baseFileName = fileName.replace('.md', '');
    
    // 部分匹配逻辑
    const matchedFile = files.find(file => 
      file.includes(baseFileName.split(' ')[0]) || // 匹配协议名
      file.includes(baseFileName.split(' ')[1]) || // 匹配类型
      baseFileName.includes(file.replace('.md', ''))
    );
  }
}
```

### Markdown 解析
```typescript
// 解析 frontmatter 并提取正文
const lines = rawContent.split('\n');
let frontmatterEnd = -1;

// 找到 frontmatter 结束位置
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '---') {
    if (!inFrontmatter) {
      inFrontmatter = true;
    } else {
      frontmatterEnd = i;
      break;
    }
  }
}

// 提取正文内容
if (frontmatterEnd > -1) {
  fileContent = lines.slice(frontmatterEnd + 1).join('\n').trim();
}
```

## 📊 数据结构

### Pool 接口扩展
```typescript
interface Pool {
  // ... 现有字段
  underlying?: string;  // 底层收益描述
  danger?: string;      // 风险提示信息
  scenarios?: string;   // 适用场景说明
}
```

### 弹窗组件接口
```typescript
interface PoolDetailDialogProps {
  pool: Pool | null;          // 当前选中的收益池
  isOpen: boolean;            // 弹窗开启状态
  onClose: () => void;        // 关闭弹窗回调
  poolContent?: string;       // 收益池文件的正文内容
}
```

## 🎯 使用场景

### 用户操作流程
1. **浏览表格**: 用户在收益池表格中浏览不同的收益池
2. **点击名称**: 点击感兴趣的收益池名称
3. **查看详情**: 弹窗打开，显示详细信息
4. **深入了解**: 查看底层收益、风险提示、适用场景等信息
5. **阅读附加**: 如果有文件正文，可以了解更多背景信息
6. **关闭弹窗**: 通过关闭按钮、ESC 键或点击遮罩关闭

### 适用数据类型
- **完整数据**: 如 "Cetus StableLP" 有完整的 underlying、danger、scenarios 数据
- **部分数据**: 只有部分字段有数据的收益池
- **最小数据**: 只有基本信息的收益池也能正常显示

## 🔧 技术依赖

### 前端依赖
- `@radix-ui/react-dialog` - 弹窗基础功能
- `lucide-react` - 图标组件
- `tailwindcss` - 样式框架
- `clsx` 和 `tailwind-merge` - 样式工具

### 后端依赖  
- `fs` - 文件系统操作
- `path` - 路径处理
- Next.js API Routes - 服务端 API

## 🐛 错误处理

### 文件不存在
```typescript
if (!filePath) {
  return NextResponse.json(
    { error: '未找到对应的收益池文件' }, 
    { status: 404 }
  );
}
```

### 网络错误
```typescript
try {
  const response = await fetch(`/api/pool-content?fileName=${fileName}`);
  if (response.ok) {
    const content = await response.text();
    setPoolContent(content);
  } else {
    setPoolContent('');
  }
} catch (error) {
  console.warn('无法获取收益池文件内容:', error);
  setPoolContent('');
}
```

### 数据验证
- 空字符串检查: `pool.danger && pool.danger.trim() !== ''`
- undefined 检查: 通过可选链操作符处理
- 容错显示: 当数据不完整时优雅降级

## 🚀 性能优化

### 懒加载策略
- 只在点击时才加载文件内容
- 避免在表格加载时预加载所有文件内容

### 缓存机制
- 浏览器缓存文件内容响应
- 会话内重复点击时减少网络请求

### 响应式优化
- 使用 CSS Grid 和 Flexbox 实现自适应布局
- 移动端优化的触摸目标大小

## 📈 后续扩展

### 可能的增强功能
1. **收藏功能**: 允许用户收藏感兴趣的收益池
2. **分享功能**: 生成分享链接，直接跳转到特定收益池的弹窗
3. **比较功能**: 支持多个收益池的并排比较
4. **历史记录**: 记录用户查看过的收益池
5. **深色模式**: 支持暗黑主题切换

### 数据增强
1. **实时数据**: 集成实时 APR 数据
2. **历史图表**: 显示收益率历史变化
3. **用户评价**: 集成社区评价和评分系统
4. **风险评估**: 更详细的风险评估指标

## 🔄 更新日志

### v1.0.0 (2025-07-25)
- ✅ 实现基础弹窗功能
- ✅ 集成收益池详情展示
- ✅ 添加文件内容获取 API
- ✅ 实现响应式设计
- ✅ 完成错误处理机制

---

**维护者**: Claude Code Assistant  
**最后更新**: 2025-07-25  
**版本**: 1.0.0