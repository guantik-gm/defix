---
Protocol: "[[Ether Finance]]"
Type: Staking
Chain:
  - Ethereum
Risk: 低风险
Token: ETH
APR-Low: 0.02
APR-High: 0.04
Market:
  - 通用
---
**Underlying**

这是一种流动性再质押（Liquid Restaking）策略。用户将 ETH 存入 Ether.fi，协议会将其在以太坊主网进行质押，并通过 EigenLayer 进行再质押，以获取多重收益。用户会收到 eETH 作为流动性凭证。

**Danger**

- **智能合约风险**: 协议代码可能存在未被发现的漏洞。
- **罚没风险 (Slashing)**: 如果 Ether.fi 或 EigenLayer 的验证节点出现问题，可能会导致质押的 ETH 被罚没。
- **eETH 脱锚风险**: 作为流动性凭证，eETH 在二级市场的价格可能与 ETH 发生脱锚。
- **多层协议风险**: 收益和风险都依赖于以太坊、EigenLayer 和 Ether.fi 三层协议，风险是叠加的。

**Scenarios**

- **ETH 币本位生息**: 适合长期看好并持有 ETH 的用户，在获取基础质押收益的同时，博取额外的再质押收益和潜在空投。

**Remark**

- Ether.fi 是流动性再质押赛道的龙头协议之一，安全性相对较高。
- 直接赎回 ETH 通常需要约7天的等待期。
