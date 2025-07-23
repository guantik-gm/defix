import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { REGEX_PATTERNS } from "./constants";

/**
 * 合并Tailwind CSS类名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 验证邮箱格式
 */
export function isValidEmail(email: string): boolean {
  return REGEX_PATTERNS.EMAIL.test(email);
}

/**
 * 格式化数字为百分比
 */
export function formatPercentage(value: number, precision: number = 2): string {
  return `${(value * 100).toFixed(precision)}%`;
}

/**
 * 格式化APR范围显示
 */
export function formatAPRRange(low: number, high: number): string {
  return `${formatPercentage(low)} - ${formatPercentage(high)}`;
}

/**
 * 延迟函数
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 安全的JSON解析
 */
export function safeJSONParse<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

/**
 * 去除字符串首尾空格并转换为小写
 */
export function normalizeString(str: string): string {
  return str.trim().toLowerCase();
}

/**
 * 从数组中去除重复项
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * 深度合并对象
 */
export function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {} as any, source[key] as any);
    } else if (source[key] !== undefined) {
      result[key] = source[key] as any;
    }
  }
  
  return result;
}

/**
 * 截断字符串
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * 生成随机ID
 */
export function generateId(prefix: string = '', length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix ? `${prefix}_${result}` : result;
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

/**
 * 格式化时间戳
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  });
}

/**
 * 格式化相对时间
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);
  
  if (diffInSeconds < 60) return '刚刚';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}分钟前`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}小时前`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}天前`;
  
  return formatDate(d);
}

/**
 * 清理Markdown内容，提取纯文本
 */
export function cleanMarkdown(content: string): string {
  return content
    .replace(REGEX_PATTERNS.MARKDOWN_HEADERS, '')
    .replace(REGEX_PATTERNS.MARKDOWN_BOLD, '$1')
    .replace(REGEX_PATTERNS.MARKDOWN_ITALIC, '$1')
    .replace(REGEX_PATTERNS.MARKDOWN_LINKS, '$1')
    .replace(REGEX_PATTERNS.MARKDOWN_CODE, '$1')
    .replace(/\n+/g, ' ')
    .trim();
}

/**
 * 提取关键词
 */
export function extractKeywords(content: string, maxKeywords: number = 10): string[] {
  const commonKeywords = ['DeFi', 'APR', 'APY', '收益池', '流动性挖矿', '风险评估'];
  const cleanContent = cleanMarkdown(content);
  const words = cleanContent.toLowerCase().split(/\s+/);
  const wordCount: Record<string, number> = {};
  
  // 统计词频
  words.forEach(word => {
    if (word.length > 3) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });
  
  // 取出现频率最高的词
  const sortedWords = Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([word]) => word);
  
  return [...commonKeywords, ...sortedWords].slice(0, maxKeywords);
}

/**
 * 创建防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * 创建节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * 异步重试函数
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxAttempts) {
        throw lastError;
      }
      
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  
  throw lastError!;
}

/**
 * 创建LRU缓存
 */
export class LRUCache<K, V> {
  private cache = new Map<K, V>();
  private maxSize: number;
  
  constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }
  
  get(key: K): V | undefined {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)!;
      // 重新插入以更新顺序
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return undefined;
  }
  
  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // 删除最旧的项目
      const firstKey = this.cache.keys().next().value as K;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    
    this.cache.set(key, value);
  }
  
  has(key: K): boolean {
    return this.cache.has(key);
  }
  
  delete(key: K): boolean {
    return this.cache.delete(key);
  }
  
  clear(): void {
    this.cache.clear();
  }
  
  get size(): number {
    return this.cache.size;
  }
}

/**
 * 计算字符串哈希值
 */
export function hashString(str: string): number {
  let hash = 0;
  if (str.length === 0) return hash;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 转换为32位整数
  }
  
  return Math.abs(hash);
}

/**
 * 验证对象是否为空
 */
export function isEmpty(obj: any): boolean {
  if (obj == null) return true;
  if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  return false;
}