import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { RiskLevel } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 格式化APR范围
export function formatAPRRange(low: number, high: number): string {
  return `${(low * 100).toFixed(1)}% - ${(high * 100).toFixed(1)}%`
}

// 格式化数字为百分比
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(2)}%`
}

// 格式化日期
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

// 获取风险等级颜色
export function getRiskLevelColor(risk: RiskLevel): string {
  switch (risk) {
    case RiskLevel.LOW:
      return 'bg-green-100 text-green-800 border border-green-200'
    case RiskLevel.MEDIUM:
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
    case RiskLevel.HIGH:
      return 'bg-red-100 text-red-800 border border-red-200'
    case RiskLevel.VERY_HIGH:
      return 'bg-red-600 text-red-50 border border-red-700 font-semibold'
    default:
      return 'bg-gray-100 text-gray-800 border border-gray-200'
  }
}

// 获取链标签颜色
export function getChainColor(chain: string): string {
  const chainColors: Record<string, string> = {
    'Ethereum': 'bg-blue-100 text-blue-800',
    'Aptos': 'bg-purple-100 text-purple-800', 
    'Solana': 'bg-green-100 text-green-800',
    'BNB': 'bg-yellow-100 text-yellow-800',
    'Polygon': 'bg-indigo-100 text-indigo-800',
    'Arbitrum': 'bg-cyan-100 text-cyan-800',
    'Optimism': 'bg-red-100 text-red-800',
    'Sui': 'bg-teal-100 text-teal-800',
  }
  
  return chainColors[chain] || 'bg-gray-100 text-gray-800'
}

// 延迟函数
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 去除字符串中的 markdown 链接格式
export function cleanMarkdownLinks(text: string): string {
  return text.replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
}

// 提取协议名称（去除链接语法）
export function extractProtocolName(protocolText: string): string {
  return cleanMarkdownLinks(protocolText)
}

// 标准化数组数据
export function normalizeArray(value: string | string[]): string[] {
  if (Array.isArray(value)) {
    return value
  }
  if (typeof value === 'string') {
    return [value]
  }
  return []
}

// 生成唯一ID
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

// 计算APR平均值
export function calculateAverageAPR(low: number, high: number): number {
  return (low + high) / 2
}

// 搜索文本匹配
export function matchesSearch(text: string, search: string): boolean {
  if (!search) return true
  return text.toLowerCase().includes(search.toLowerCase())
}

// 深拷贝对象
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T
  if (Array.isArray(obj)) return obj.map(item => deepClone(item)) as unknown as T
  
  const cloned = {} as T
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key])
    }
  }
  return cloned
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}