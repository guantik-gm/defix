---
Protocol: '[[Bucket Protocol]]'
Type: Deposit
Chain:
- Sui
Risk: 低风险
Token: USDC
APR-Low: 0.1
APR-High: 0.15
Market:
- 通用
---
**Underlying**

将 USDC 通过协议的稳定模块（PSM）兑换成其原生稳定币 BUCK，然后将 BUCK 存入储蓄池（Saving Pool）中以赚取利息。收益来源于协议的借贷利息和清算罚金等。

**Danger**

- **智能合约风险**: 协议代码可能存在未被发现的漏洞。
- **BUCK 脱锚风险**: 虽然 BUCK 由多种资产超额抵押，但在极端市场情况下，仍存在与美元脱钩的理论风险。
- **平台手续费**: 注意进入和退出仓位的方式与平台手续费。

**Scenarios**

- **U本位稳定收益**: 适合追求稳定美元本位回报的投资者，是 Sui 生态中的一个基础收益来源。

**Remark**

Bucket Protocol 是 Sui 生态中的核心 CDP（抵押债仓）协议之一，信誉较好。
