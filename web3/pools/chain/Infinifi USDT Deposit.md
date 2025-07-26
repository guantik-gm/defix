---
Protocol: "[[keepgoing/web3/protocol/Infinifi|Infinifi]]"
Type: Deposit
Chain:
  - Arbitrum
Risk: 低风险
Token: USDT
APR-Low: 0.05
APR-High: 0.14
Market:
  - 通用
---
**Underlying**

Infinifi 协议模仿了传统银行的“部分准备金”制度。用户存入稳定币后，协议会将其大部分资金（特别是选择高收益锁仓的用户资金）投入到其他 DeFi 协议（如 Aave, Pendle）中进行挖矿，同时保留一部分资金作为准备金以应对用户取款。

**Danger**

- **智能合约风险**: 协议代码可能存在未被发现的漏洞。
- **系统性风险**: 协议的收益和安全依赖于其投资的多个底层 DeFi 协议，存在风险敞口。
- **策略风险**: 协议的自动挖矿策略在极端市场下可能失效或产生亏损。

**Scenarios**

- **分层风险投资**: 适合能够理解其风险分层模型（高风险锁仓用户为低风险活期用户提供缓冲）的投资者。
- **U本位稳定收益**: 参与其活期池（siUSD），可以获取相对稳健的收益。

**Remark**

协议提供两种选择：低风险、可随时取款的 siUSD 和高风险、高收益、需要锁仓的 liUSD。高收益需要通过锁仓承担更高的风险。
