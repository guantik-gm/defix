---
Protocol: '[[Bucket Protocol]]'
Type: Leverage
Chain:
- Sui
Risk: 高风险
Token: SUI
APR-Low: 0.1
APR-High: 0.9
Market:
- 通用
---
**Underlying**

通过在 Bucket Protocol 中抵押 SUI，借出其稳定币 BUCK，再用 BUCK 买入更多的 SUI，从而实现对 SUI 的杠杆做多。这是一种循环贷（Looping）的杠杆策略。

**Danger**

- **清算风险**: 核心风险。如果 SUI 价格下跌，导致抵押率低于协议要求的最低值（如110%），抵押品将被清算以偿还债务。
- **借贷成本**: 借出 BUCK 需要支付利息，这会侵蚀杠杆策略的收益。

**Scenarios**

- **杠杆做多**: 适合在强烈看涨 SUI 时，通过加杠杆来放大潜在收益。
- **持币生息**: 在看涨的同时，通过杠杆策略赚取额外的质押或流动性挖矿收益（如果协议支持）。

**Remark**

- 需要密切关注抵押率（Collateralization Ratio），及时补充抵押品或偿还部分贷款，以避免被清算。
- Bucket Protocol 提供了“一键杠杆”功能，简化了手动循环贷的操作。
