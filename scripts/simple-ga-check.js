#!/usr/bin/env node

const https = require('https');

async function checkGA() {
  console.log('🔍 验证 Google Analytics 4 配置状态\n');
  
  return new Promise((resolve, reject) => {
    https.get('https://defi.web3x.icu', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // 检查关键要素
        const hasGAScript = data.includes('googletagmanager.com/gtag/js?id=G-DNCNH8HPFE');
        const hasGtagConfig = data.includes('gtag(\'config\', \'G-DNCNH8HPFE\'');
        const hasDataLayer = data.includes('dataLayer');
        const hasStructuredData = data.includes('application/ld+json');
        
        console.log('📊 Google Analytics 4 检查结果:');
        console.log(`${hasGAScript ? '✅' : '❌'} GA脚本加载: ${hasGAScript ? '正常' : '未找到'}`);
        console.log(`${hasGtagConfig ? '✅' : '❌'} GA配置: ${hasGtagConfig ? '正常' : '未找到'}`);
        console.log(`${hasDataLayer ? '✅' : '❌'} DataLayer: ${hasDataLayer ? '已初始化' : '未找到'}`);
        console.log(`${hasStructuredData ? '✅' : '❌'} 结构化数据: ${hasStructuredData ? '已配置' : '未找到'}`);
        
        const allPassed = hasGAScript && hasGtagConfig && hasDataLayer;
        
        console.log(`\n🎯 总体状态: ${allPassed ? '✅ Google Analytics 4 已正确配置' : '❌ 需要检查配置'}\n`);
        
        if (allPassed) {
          console.log('🎉 恭喜！GA4配置成功！\n');
          console.log('📋 后续验证步骤:');
          console.log('1. 打开 https://analytics.google.com/');
          console.log('2. 选择属性 G-DNCNH8HPFE');
          console.log('3. 查看"实时"报告');
          console.log('4. 在新标签页访问你的网站');
          console.log('5. 观察实时用户数是否增加');
          console.log('\n🔧 测试事件追踪:');
          console.log('• 点击收益池名称 (触发 view_pool_detail)');
          console.log('• 使用筛选功能 (触发 filter_pools)');
          console.log('• 搜索收益池 (触发 search_pools)');
          console.log('• 提交请求 (触发 submit_request)');
        }
        
        resolve(allPassed);
      });
    }).on('error', reject);
  });
}

checkGA().catch(console.error);