import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * 过滤掉结构化字段内容，只保留附加说明等非结构化内容
 */
function filterNonStructuredContent(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let inStructuredField = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 检查是否是结构化字段标题
    const isStructuredField = /^\*\*(Underlying|Danger|Scenarios|Remark)\*\*\s*$/.test(line);
    
    if (isStructuredField) {
      inStructuredField = true;
      continue;
    }
    
    // 检查是否遇到分隔符（表示结构化内容结束）
    if (line === '---' || line.startsWith('##') || line.startsWith('#')) {
      inStructuredField = false;
      result.push(lines[i]); // 保留分隔符或标题
      continue;
    }
    
    // 检查是否遇到下一个结构化字段（表示当前字段结束）
    const isNextStructuredField = /^\*\*(Underlying|Danger|Scenarios|Remark)\*\*/.test(line);
    if (isNextStructuredField) {
      inStructuredField = true;
      continue;
    }
    
    // 如果不在结构化字段中，保留内容
    if (!inStructuredField) {
      result.push(lines[i]);
    }
  }
  
  return result.join('\n').trim();
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get('fileName');
    
    if (!fileName) {
      return NextResponse.json(
        { error: '缺少文件名参数' }, 
        { status: 400 }
      );
    }

    // 定义可能的文件路径
    const possiblePaths = [
      // Chain 路径
      path.join(process.cwd(), 'web3', 'pools', 'chain', fileName),
    ];

    let fileContent = '';
    let filePath = '';

    // 尝试在不同路径中查找文件
    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        filePath = possiblePath;
        break;
      }
    }

    if (!filePath) {
      // 如果找不到完全匹配的文件，尝试查找包含关键词的文件
      const searchDirs = [
        path.join(process.cwd(), 'web3', 'pools', 'chain'),
      ];

      for (const dir of searchDirs) {
        if (fs.existsSync(dir)) {
          const files = fs.readdirSync(dir);
          const baseFileName = fileName.replace('.md', '');
          
          // 尝试部分匹配
          const matchedFile = files.find(file => 
            file.includes(baseFileName.split(' ')[0]) || // 匹配协议名
            file.includes(baseFileName.split(' ')[1]) || // 匹配类型
            baseFileName.includes(file.replace('.md', ''))
          );

          if (matchedFile) {
            filePath = path.join(dir, matchedFile);
            break;
          }
        }
      }
    }

    if (!filePath) {
      return NextResponse.json(
        { error: '未找到对应的收益池文件' }, 
        { status: 404 }
      );
    }

    // 读取文件内容
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    
    // 解析 markdown frontmatter，提取正文内容
    const lines = rawContent.split('\n');
    let inFrontmatter = false;
    let frontmatterEnd = -1;
    
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
    
    // 提取正文内容（frontmatter 之后的内容）
    if (frontmatterEnd > -1) {
      const bodyContent = lines.slice(frontmatterEnd + 1).join('\n').trim();
      // 过滤掉结构化字段内容，只保留附加说明
      fileContent = filterNonStructuredContent(bodyContent);
    } else {
      // 如果没有 frontmatter，过滤整个文件内容
      fileContent = filterNonStructuredContent(rawContent.trim());
    }

    // 返回文件内容作为纯文本
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });

  } catch (error) {
    console.error('获取收益池文件内容时出错:', error);
    return NextResponse.json(
      { error: '服务器内部错误' }, 
      { status: 500 }
    );
  }
}