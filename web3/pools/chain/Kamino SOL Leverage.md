---
Protocol: "[[Kamino Finance]]"
Type: Leverage
Chain:
  - Solana
Risk: 低风险
Token: SOL
APR-Low: 0.05
APR-High: 0.2
Market:
  - 通用
---
**Underlying**

这是一种杠杆化的流动性质押（Leveraged Staking）策略。用户存入 SOL 的流动性质押代币（LSTs，如 mSOL, JitoSOL），然后从 Kamino 借入 SOL，再将借来的 SOL 换成更多的 LST 并再次存入，通过循环贷来放大 LST 本身的质押收益和 LP 收益。

**Danger**

- **LST脱锚风险**: 核心风险。如果 mSOL 或 JitoSOL 等 LST 相对 SOL 的价格发生脱锚，将可能导致仓位被清算。
- **借贷利率风险**: 如果借入 SOL 的利率高于 LST 的原生质押收益率，将会产生亏损。
- **多层协议风险**: 风险叠加，需要同时信任 Kamino、LST 协议（如 Marinade, Jito）以及预言机的安全性。

**Scenarios**

- **放大质押收益**: 适合希望在承担一定风险的前提下，放大 SOL 基础质押收益的投资者。

**Remark**

开平仓手续费损耗很大。这是一个相对复杂的策略，投资者需要对 LST 的脱锚风险和利差变化有清晰的认识。
