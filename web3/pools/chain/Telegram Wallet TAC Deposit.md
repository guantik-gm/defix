---
Protocol: "[[Telegram Wallet]]"
Type: Deposit
Chain:
  - Ton
Risk: 低风险
Token: TAC
APR-Low: 0.5
APR-High: 0.7
Market:
  - 通用
---
**Underlying**

这是一个基于 TAC Protocol 原生代币 $TAC 的 Delta Neutral（德尔塔中性）对冲策略。收益主要来源于 Telegram钱包的 Earn 活动奖励。

操作方式如下：
1.  **TAC存款**: 购买TAC 现货并提现到 Telegram 钱包参加 Earn 活动。
2.  **对冲风险**: 同时，在支持 $TAC 永续合约的交易所（如 Binance, MEXC, Bitget 等）上，开立等值的 $TAC 空头头寸。

此策略旨在剥离 $TAC 代币本身的价格波动风险，将高额的 APR 转化为相对稳定的 U 本位收益。最终收益约等于 `APR` + `资金费率` - `交易成本`。

**Danger**

1.  **合约爆仓风险**: 核心风险。当 $TAC 价格在短时间内剧烈上涨，永续合约的空头头寸可能因保证金不足而被强制平仓，导致对冲失败和重大亏损。
2.  **资金费率风险**: 虽然牛市中做空通常能收到正资金费率，但在市场转变时，费率可能变为负数，从而侵蚀甚至超过 Staking 收益。

**Scenarios**

- **高级套利策略**: 当奖励 APR 远高于资金费率成本时，可作为一种有效的套利手段。
- **矿工/长期持有者套保**: 对于持有大量 $TAC 的用户，这是一种有效的风险对冲和持币生息工具。

**Remark**


