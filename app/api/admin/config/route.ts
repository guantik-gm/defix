import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 从服务端环境变量获取管理员密码
    const adminPassword = process.env.ADMIN_PASSWORD || 'defix2024';
    
    return NextResponse.json({
      success: true,
      password: adminPassword
    });
  } catch (error) {
    console.error('Error getting admin config:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to get admin config',
        password: 'defix2024' // 后备密码
      },
      { status: 500 }
    );
  }
}