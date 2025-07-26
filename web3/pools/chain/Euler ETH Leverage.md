---
Protocol: "[[Euler Finance]]"
Type: Leverage
Chain:
  - Base
  - Arbitrum
  - BSC
  - Unichain
Risk: 高风险
Token: ETH
APR-Low: 0.05
APR-High: 0.34
Market:
  - 通用
---
**Underlying**

通过在 Euler V2 的借贷市场中，反复进行“存款-借款”操作（即循环贷），以实现对 ETH 的杠杆做多。用户存入 ETH，借出稳定币，再用稳定币买入 ETH 并再次存入，循环往复以放大杠杆倍数。

**Danger**

- **协议曾被巨额盗用**: Euler V1 曾遭受近2亿美元的黑客攻击，虽然 V2 在安全上进行了重新设计，但这依然是重要的风险考量点。
- **清算风险**: 核心风险。如果 ETH 价格下跌，导致抵押率不健康，仓位将被清算。
- **智能合约风险**: V2 是新上线的协议，代码可能存在未被发现的漏洞。
- **借贷成本**: 需关注循环贷借贷成本。

**Scenarios**

- **杠杆做多ETH**: 适合在强烈看涨 ETH 时，通过加杠杆来放大潜在收益。

**Remark**

- Euler V2 的模块化设计旨在隔离风险，但投资者仍需谨慎。
- 详见：[Euler USDT Leverage](Euler%20USDT%20Leverage.md)
