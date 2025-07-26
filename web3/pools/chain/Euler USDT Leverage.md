---
Protocol: "[[Euler Finance]]"
Type: Leverage
Chain:
  - Ethereum
  - Arbitrum
  - BSC
  - Base
  - Unichain
  - Bera
Risk: 高风险
Token: USDT
APR-Low: 0.07
APR-High: 0.6
Market:
  - 通用
---
**Underlying**

通过在 Euler V2 的借贷市场中，反复进行“存款-借款”操作（即循环贷），以实现对稳定币或生息资产的杠杆挖矿。例如，存入一种稳定币，借出另一种，再将借出的稳定币存入，以赚取利差或协议奖励。

**Danger**

- **协议曾被巨额盗用**: Euler V1 曾遭受近2亿美元的黑客攻击，虽然 V2 在安全上进行了重新设计，但这依然是重要的风险考量点。
- **清算风险**: 核心风险。如果抵押品或借出资产的价格发生剧烈波动（例如稳定币脱锚），导致抵押率不健康，仓位将被清算。
- **智能合约风险**: V2 是新上线的协议，代码可能存在未被发现的漏洞。
- **借贷成本**: 需关注循环贷借贷成本。

**Scenarios**

- **杠杆稳定币挖矿**: 适合追求高收益、能承受较高风险的投资者，通过杠杆放大稳定币之间的利差或挖矿奖励。

**Remark**

直接用 Strategies 循环贷功能，使用过滤器功能只看流动性大于10w 的
- ETH：USDT/USDC-0.6
- BSC：USDe/USDT-1.7
- Uni：USDT0/USDC-5
- Arb：USDT0/USDC-0.5
- Bera：USDC.e/USDC.e-0.6
**高 APY 都是昙花一现很快就没了！**

需要时刻关注资金池中的抵押品足够、循环贷利率正常，有很多不同的资金池管理者需要区分过滤，有很多不同的稳定币需要一一调研
