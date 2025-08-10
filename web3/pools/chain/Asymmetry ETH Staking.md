---
Protocol: "[[Asymmetry Finance]]"
Type: Staking
Chain:
  - Ethereum
Risk: 中风险
Token: ETH
APR-Low: 0.08
APR-High: 0.12
Market:
  - 通用
---
**Underlying**

afETH 是一种高收益的流动性质押代币（LST）。其收益来源于一种混合策略：用户存入的 ETH 大约 70% 被兑换为 sfrxETH 以获取稳定的基础质押收益；另外 30% 则被用于购买 CVX 代币，并将其投票锁定为 vlCVX。协议通过在 Votium 等“贿赂市场”出售 vlCVX 的投票权来捕获超额治理收益。所有收益最终会通过“收益平滑器”合约，线性、平滑地计入 afETH 的总价值中，以防止 MEV 攻击。

**Danger**

1.  **市场风险**: afETH 的超额收益高度依赖 Convex 生态的健康状况和 CVX 代币的价格。如果贿赂市场萎缩或 CVX 价格大幅下跌，afETH 的收益率和价值将受到严重影响。
2.  **系统性风险**: 协议深度依赖于 Frax Finance 和 Convex Finance。这两个底层协议的任何安全或经济问题都会直接波及 afETH。
3.  **智能合约风险**: 协议本身的智能合约存在代码漏洞风险，尽管经过审计。
4.  **LST De-peg 风险**: 在市场极端波动时，afETH 在二级市场的交易价格可能与其资产净值脱钩。

**Scenarios**

- **高收益 ETH 质押**: 适合能承受额外市场风险，并寻求高于标准 ETH 质押回报（约 4-5%）的资深 DeFi 用户。
- **看好 Curve/Convex 生态**: 投资 afETH 等同于对“Curve/Convex 战争”的持续性和盈利能力下注。
- **DeFi 乐高组合**: afETH 作为一种可组合的生息资产，可以被用于其他 DeFi 协议中进行借贷、提供流动性等操作，以实现更复杂的收益策略。

**Remark**

质押 ETH 获取的 afETH 是一种高风险高回报的 LST 凭证。其收益机制使其区别于传统的 LSTs，但风险也相应增加。**风险等级从“低风险”调整为“中风险”**，以反映其对 CVX 价格和 Convex 生态的高度依赖。APR 范围也根据报告中约 10% 的目标进行了调整。