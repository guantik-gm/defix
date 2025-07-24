#!/usr/bin/env node

/**
 * 测试后端功能完整性脚本
 * 验证文件系统数据解析和Supabase集成是否正常工作
 */

const fs = require('fs');
const path = require('path');

// 测试文件系统数据解析
async function testFileSystemParsing() {
  console.log('🔍 测试文件系统数据解析...\n');
  
  try {
    // 动态导入ES模块
    const { parsePools, parseProtocols, generateFilterOptions } = await import('../lib/file-data-parser.js');
    
    // 测试解析池数据
    console.log('📊 解析池数据...');
    const pools = await parsePools();
    console.log(`✅ 成功解析 ${pools.length} 个池`);
    
    if (pools.length > 0) {
      const samplePool = pools[0];
      console.log('📄 示例池数据:');
      console.log(`   - 协议: ${samplePool.protocol}`);
      console.log(`   - 类型: ${samplePool.type}`);
      console.log(`   - 链: ${samplePool.chain}`);
      console.log(`   - APR范围: ${samplePool.aprLow}% - ${samplePool.aprHigh}%`);
      console.log(`   - 风险等级: ${samplePool.risk}`);
    }
    
    // 测试解析协议数据
    console.log('\n🏢 解析协议数据...');
    const protocols = await parseProtocols();
    console.log(`✅ 成功解析 ${protocols.length} 个协议`);
    
    if (protocols.length > 0) {
      const sampleProtocol = protocols[0];
      console.log('📄 示例协议数据:');
      console.log(`   - 名称: ${sampleProtocol.name}`);
      console.log(`   - 网站: ${sampleProtocol.website}`);
      console.log(`   - 昵称: ${sampleProtocol.nickname}`);
    }
    
    // 测试过滤器生成
    console.log('\n🔧 生成过滤器选项...');
    const filters = await generateFilterOptions();
    console.log(`✅ 生成过滤器选项:`);
    console.log(`   - 协议数量: ${filters.protocols.length}`);
    console.log(`   - 链数量: ${filters.chains.length}`);
    console.log(`   - 类型数量: ${filters.types.length}`);
    console.log(`   - 风险等级数量: ${filters.riskLevels.length}`);
    
    return true;
  } catch (error) {
    console.error('❌ 文件系统解析测试失败:', error.message);
    return false;
  }
}

// 测试API端点
async function testAPIEndpoints() {
  console.log('\n\n🌐 测试API端点...\n');
  
  const baseUrl = 'http://localhost:3000';
  
  try {
    // 测试池数据API
    console.log('📊 测试池数据API...');
    const poolsResponse = await fetch(`${baseUrl}/api/pools`);
    
    if (!poolsResponse.ok) {
      throw new Error(`池数据API返回状态: ${poolsResponse.status}`);
    }
    
    const poolsData = await poolsResponse.json();
    console.log(`✅ 池数据API响应成功 - 获取到 ${poolsData.data?.pools?.length || 0} 个池`);
    
    // 测试过滤器API
    console.log('🔧 测试过滤器API...');
    const filtersResponse = await fetch(`${baseUrl}/api/filters`);
    
    if (!filtersResponse.ok) {
      throw new Error(`过滤器API返回状态: ${filtersResponse.status}`);
    }
    
    const filtersData = await filtersResponse.json();
    console.log(`✅ 过滤器API响应成功`);
    
    // 测试用户请求提交API (仅测试GET方法)
    console.log('📝 测试用户请求API...');
    const requestsResponse = await fetch(`${baseUrl}/api/requests`);
    
    if (!requestsResponse.ok) {
      console.log(`⚠️  用户请求API返回状态: ${requestsResponse.status} (可能需要Supabase配置)`);
    } else {
      const requestsData = await requestsResponse.json();
      console.log(`✅ 用户请求API响应成功`);
    }
    
    return true;
  } catch (error) {
    console.error('❌ API测试失败:', error.message);
    console.log('💡 提示: 请确保开发服务器正在运行 (npm run dev)');
    return false;
  }
}

// 检查环境配置
function checkEnvironmentConfig() {
  console.log('\n\n⚙️  检查环境配置...\n');
  
  const envPath = path.join(__dirname, '../.env.local');
  const envExamplePath = path.join(__dirname, '../.env.example');
  
  if (!fs.existsSync(envPath)) {
    console.log('⚠️  .env.local 文件不存在');
    if (fs.existsSync(envExamplePath)) {
      console.log('💡 发现 .env.example 文件，请复制并配置为 .env.local');
      console.log('📋 需要配置的环境变量:');
      const exampleContent = fs.readFileSync(envExamplePath, 'utf8');
      console.log(exampleContent);
    }
    return false;
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const requiredVars = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'];
  
  for (const varName of requiredVars) {
    if (!envContent.includes(varName) || envContent.includes(`${varName}=your_`)) {
      console.log(`⚠️  环境变量 ${varName} 未正确配置`);
      return false;
    }
  }
  
  console.log('✅ 环境配置检查通过');
  return true;
}

// 主测试函数
async function runTests() {
  console.log('🚀 开始后端功能完整性测试\n');
  console.log('=' .repeat(50));
  
  const configOk = checkEnvironmentConfig();
  const parsingOk = await testFileSystemParsing();
  
  let apiOk = false;
  if (parsingOk) {
    apiOk = await testAPIEndpoints();
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📋 测试结果总结:');
  console.log(`   环境配置: ${configOk ? '✅ 通过' : '❌ 失败'}`);
  console.log(`   文件解析: ${parsingOk ? '✅ 通过' : '❌ 失败'}`);
  console.log(`   API端点: ${apiOk ? '✅ 通过' : '❌ 失败'}`);
  
  if (configOk && parsingOk && apiOk) {
    console.log('\n🎉 所有测试通过！后端功能已成功替换mock数据');
  } else {
    console.log('\n⚠️  部分测试失败，请检查上述错误信息');
    if (!configOk) {
      console.log('💡 首先配置 .env.local 文件');
    }
  }
}

// 运行测试
runTests().catch(console.error);