---
Protocol: "[[keepgoing/web3/protocol/Extrafi|Extrafi]]"
Type: Leverage
Chain:
  - Optimism
  - Base
  - Bera
Risk: 高风险
Token: USDT
APR-Low: 0.1
APR-High: 0.2
Market:
  - 通用
---
**Underlying**

通过在 Extra Finance 协议中存入本金，并从其借贷池中借入额外资金（最高可达7倍杠杆），然后将全部资金投入到其集成的 DEX（如 Velodrome, Aerodrome）的流动性池（LP）中进行挖矿，以实现收益放大。

**Danger**

- **清算风险**: 核心风险。当LP代币的价值下跌，导致债务头寸的健康度低于清算线时，仓位将被强制平仓。
- **无常损失 (IL)**: 在提供非稳定币对的流动性时，无常损失会被杠杆放大，可能导致严重亏损。
- **多层协议风险**: 风险叠加，需要同时信任 Extra Finance 和其集成的底层 DEX（如 Velodrome）的智能合约安全性。
- **借贷成本**: 需关注循环贷借贷成本。

**Scenarios**

- **杠杆挖矿**: 适合能承受高风险的资深用户，通过借贷来放大其在 LP 挖矿中的收益。
- **对冲策略**: 可以构建复杂的市场中性策略，例如通过借入一种资产来对冲另一种资产的风险，专注于赚取交易费和挖矿奖励。

**Remark**

Extra Finance 提供了一键式的杠杆做多/做空/中性策略，简化了用户的操作，但用户必须深刻理解杠杆和无常损失背后的风险。
