#!/usr/bin/env node

const https = require('https');
const cheerio = require('cheerio');

async function verifyGA(url = 'https://defi.web3x.icu') {
  console.log('🔍 正在验证 Google Analytics 配置...\n');
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const $ = cheerio.load(data);
        
        // 检查 GA 脚本是否存在
        const gaScript = $('script[src*="googletagmanager.com/gtag/js"]').length;
        const gaConfig = data.includes('gtag(\'config\'');
        const gaId = data.match(/G-[A-Z0-9]{10}/);
        
        console.log('📊 Google Analytics 检查结果:');
        console.log(`✅ GA 脚本加载: ${gaScript > 0 ? '已加载' : '❌ 未找到'}`);
        console.log(`✅ GA 配置代码: ${gaConfig ? '已配置' : '❌ 未找到'}`);
        console.log(`✅ Measurement ID: ${gaId ? gaId[0] : '❌ 未找到'}`);
        
        // 检查追踪库
        const analyticsLib = data.includes('lib/analytics') || data.includes('trackEvent');
        console.log(`✅ 追踪工具库: ${analyticsLib ? '已集成' : '❌ 未找到'}`);
        
        // 检查 Vercel Analytics
        const vercelAnalytics = data.includes('_vercel/insights') || data.includes('@vercel/analytics');
        console.log(`✅ Vercel Analytics: ${vercelAnalytics ? '已启用' : '❌ 未找到'}`);
        
        console.log('\n🌐 网络请求验证:');
        console.log('1. 访问网站后在浏览器 Network 标签查看:');
        console.log('   - https://www.googletagmanager.com/gtag/js?id=G-DNCNH8HPFE');
        console.log('   - https://www.google-analytics.com/g/collect (数据发送)');
        
        console.log('\n📱 实时测试建议:');
        console.log('1. 打开 https://defi.web3x.icu');
        console.log('2. 点击收益池名称 (触发 view_pool_detail 事件)');
        console.log('3. 使用筛选功能 (触发 filter_pools 事件)');
        console.log('4. 搜索收益池 (触发 search_pools 事件)');
        console.log('5. 切换页面 (触发 change_page 事件)');
        
        const allPassed = gaScript > 0 && gaConfig && gaId;
        resolve(allPassed);
      });
    }).on('error', reject);
  });
}

// Google Analytics Real-time API 检查 (需要认证)
function checkGARealtime() {
  console.log('\n📊 Google Analytics 实时报告检查:');
  console.log('1. 访问 https://analytics.google.com/');
  console.log('2. 选择属性 (G-DNCNH8HPFE)');
  console.log('3. 查看 "实时" 报告');
  console.log('4. 在另一个标签页访问网站，观察实时用户数变化');
}

async function main() {
  try {
    const passed = await verifyGA();
    checkGARealtime();
    
    console.log(`\n${passed ? '✅' : '❌'} 总体状态: ${passed ? 'Google Analytics 配置正常' : '需要检查配置'}`);
    
    if (!passed) {
      console.log('\n🔧 问题排查建议:');
      console.log('1. 检查环境变量 NEXT_PUBLIC_GOOGLE_ANALYTICS_ID 是否设置');
      console.log('2. 确认 app/layout.tsx 中的 GA 代码是否正确');
      console.log('3. 验证 lib/analytics.ts 是否正确导入');
      console.log('4. 检查网络连接和广告拦截器设置');
    }
    
  } catch (error) {
    console.error('❌ 验证失败:', error.message);
  }
}

main();