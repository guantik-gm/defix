---
Protocol: "[[Hyperlend Finance]]"
Type: Deposit
Chain:
  - Hyper
Risk: 低风险
Token: USDe
APR-Low: 0.05
APR-High: 0.12
Market:
  - 通用
---
**Underlying**

该池是 [[Hyperlend Finance]] 上的 [[Ethena Finance]] USDe 单币存款池。其收益是复合的，来源于多个层面：
1.  **USDe 原生收益**: 这是基础收益层。USDe 通过持有现货加密资产（如 stETH）和做空等值的永续合约来产生收益。这部分收益主要来自 **stETH 的质押收益** 和 **永续合约的资金费率**。
2.  **Hyperlend 借贷利差**: 用户存入的 USDe 会被借给其他用户，由此产生的借贷利息是第二层收益。
3.  **Hyperlend 积分奖励**: 参与存款可以获得 Hyperlend 的积分，预期未来可兑换为空投。

**Danger**

投资者同时面临来自核心资产（USDe）和借贷平台（Hyperlend）的双重风险。
- **USDe 核心风险**: 
    - **资金费率风险**: 这是 USDe 最大的风险。在熊市中，资金费率可能长期为负，这将侵蚀 Ethena 的储备金，并可能导致 USDe 脱锚。
    - **交易对手风险**: Ethena 依赖中心化交易所（CEX）执行对冲，并依赖第三方托管机构保管资产。任何一方的失败（如FTX事件）都将对 USDe 造成灾难性影响。
- **Hyperlend 平台风险**:
    - **匿名团队**: Hyperlend 团队是匿名的，这带来了额外的对手方风险。
    - **智能合约风险**: 尽管经过审计，但 Hyperlend 历史上曾出现过关键漏洞，其代码库的复杂性使其始终面临潜在的智能合约风险。

**Scenarios**

- **获取杠杆化的 USDe 收益**: 适合充分理解并认可 USDe 风险模型的专业投资者，通过在 Hyperlend 存款，可以在 USDe 的原生收益之上，额外叠加一份借贷利息和平台空投预期。
- **高风险积分挖矿**: 将其作为获取 Hyperlend 积分的一种方式，但需要承受 USDe 的价格波动风险。

**Remark**

投资此池前，必须深度研究 [[Ethena Finance]] 的运作模式和风险。该池提供的 APR 是对用户承担 USDe 复杂风险（资金费率、交易对手、脱锚）和 Hyperlend 平台风险（匿名团队、合约历史）的补偿。



