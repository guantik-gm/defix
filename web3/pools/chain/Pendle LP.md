---
Protocol: '[[Pendle Finance]]'
Type: LP
Chain:
- Arbitrum
- BSC
- Ethereum
Risk: 高风险
Token: USDT
APR-Low: 0.1
APR-High: 2
Market:
- 横盘
- 震荡向上
- 震荡向下
---
**Underlying**

Pendle 将生息资产（如 stETH）的未来收益代币化，拆分为本金代币（PT）和收益代币（YT）。用户可以通过为 PT/Underlying Asset 的流动性池提供流动性来赚取收益。收益来源于：
- **交易手续费**: LP 池的交易费分成。
- **协议奖励**: PENDLE 代币奖励。
- **固定利息**: PT 在到期时可以1:1兑换回本金，其间的价差构成了固定利息部分。

**Danger**

- **无常损失 (IL)**: 尽管 PT 与其底层资产高度相关，能有效降低无常损失，但风险依然存在。
- **多层协议风险**: 风险叠加，需要同时信任 Pendle 和其集成的底层生息资产协议（如 Lido, Aave）的安全性。
- **智能合约风险**: Pendle 协议本身的代码可能存在漏洞。

**Scenarios**

- **低风险套利**: 在 PT 价格大幅折价时买入并持有至到期，可以锁定一个固定的无风险回报。
- **做多/做空收益率**: 通过买卖 YT，可以对未来收益率进行杠杆化的做多或做空。
- **LP挖矿**: 为 PT/Underlying Asset 提供流动性，赚取多种收益。

**Remark**

Pendle 是一个复杂的利率互换协议，为DeFi带来了固定利率产品和收益率交易市场。PT 固定期限无风险、YT 博空投、LP 固定期限无 IL，这句总结非常精辟，但投资者需要深入理解其机制才能有效利用。
