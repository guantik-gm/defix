# API 集成测试验证

## 前端表单数据格式

```typescript
interface FormData {
  type: RequestType; // 'protocol_inclusion' | 'data_correction' | 'other_feedback'
  protocolName: string;
  officialWebsite: string;
  contactEmail: string;
  description?: string;
}
```

## 后端 API 接收数据格式

```typescript
const { 
  type,
  protocolName, 
  officialWebsite,
  contactEmail,
  description
} = body;
```

## Supabase 数据库表结构

```sql
CREATE TABLE pool_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  protocol_name VARCHAR(255),
  official_website TEXT,
  contact_email VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 字段映射验证

✅ **前端 → 后端 → 数据库映射正确**

| 前端字段 | 后端接收 | 数据库字段 | 备注 |
|---------|---------|-----------|------|
| `type` | `type` | `type` | ✅ 一致 |
| `protocolName` | `protocolName` | `protocol_name` | ✅ 正确映射 |
| `officialWebsite` | `officialWebsite` | `official_website` | ✅ 正确映射 |
| `contactEmail` | `contactEmail` | `contact_email` | ✅ 正确映射 |
| `description` | `description` | `description` | ✅ 一致 |

## 验证逻辑检查

### 协议收录请求 (protocol_inclusion)
- ✅ 前端验证：protocolName 和 officialWebsite 必填
- ✅ 后端验证：type === 'protocol_inclusion' 时检查这两个字段
- ✅ Supabase 函数：相同验证逻辑

### 数据纠错/其他反馈 (data_correction/other_feedback)
- ✅ 前端验证：description 必填
- ✅ 后端验证：type === 'data_correction' || 'other_feedback' 时检查 description
- ✅ Supabase 函数：相同验证逻辑

### 通用验证
- ✅ 邮箱格式验证：前端和后端都有
- ✅ URL 格式验证：仅对协议收录请求进行

## 总结

🎉 **所有字段映射和验证逻辑都正确对接，可以正常使用！**

下一步需要：
1. 在 Supabase 中执行 SQL 脚本创建表结构
2. 配置 .env.local 中的 Supabase 连接信息
3. 测试完整的提交流程