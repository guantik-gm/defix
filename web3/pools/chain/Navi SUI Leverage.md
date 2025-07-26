---
Protocol: '[[Navi Protocol]]'
Type: Leverage
Chain:
- Sui
Risk: 中风险
Token:
- SUI
APR-Low: 0.03
APR-High: 0.7
Market:
- 通用
---
**Underlying**

这是一种杠杆化的流动性质押（Leveraged Staking）策略。用户存入 SUI 的流动性质押代币（LSTs，如 vSUI, haSUI），然后从 Navi 借入 SUI，再将借来的 SUI 换成更多的 LST 并再次存入，通过循环贷来放大 LST 本身的质押收益。

**Danger**

- **LST脱锚风险**: 核心风险。如果 vSUI 或 haSUI 等 LST 相对 SUI 的价格发生脱锚，将可能导致仓位被清算。
- **借贷利率风险**: 如果借入 SUI 的利率高于 LST 的原生质押收益率，将会产生亏损。
- **多层协议风险**: 风险叠加，需要同时信任 Navi、LST 协议以及预言机的安全性。

**Scenarios**

- **放大质押收益**: 适合希望在承担一定风险的前提下，放大 SUI 基础质押收益的投资者。

**Remark**

SUI 需要套保或低价抄底持币理财。这是一个相对复杂的策略，投资者需要对 LST 的脱锚风险和利差变化有清晰的认识。
