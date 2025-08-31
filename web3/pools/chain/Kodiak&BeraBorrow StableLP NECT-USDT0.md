---
Protocol: "[[Bera Borrow]]"
Type: StableLP
Chain:
  - Bera
Risk: 中风险
Token: USDT
APR-Low: 0.1
APR-High: 0.35
Market:
  - 通用
---
**Underlying**

该池在 [[Kodiak Finance]] 上将 [[Bera Borrow]] 的超额抵押稳定币 NECT 与 USDT0 配对。其高收益主要来源于 [[Infrared Finance]] 的 iBGT 代币奖励。收益机制分解如下：
1.  **LP 手续费**: 赚取池子交易产生的基础手续费。
2.  **iBGT 激励**: 主要收益来源。iBGT 是 Berachain 治理代币 BGT 的流动性质押衍生品。用户通过为该池提供流动性，获得 iBGT 奖励，这与 Berachain 的流动性证明 (Proof-of-Liquidity) 共识机制深度绑定。

**Danger**

这是一个涉及多个新兴协议的复杂策略，风险极高。
- **稳定币风险 (NECT)**: NECT 是一个与 Berachain 生态深度绑定的新生稳定币，其锚定机制尚未经过大规模市场压力测试，存在脱锚风险。
- **系统性风险**: 整个策略的收益和安全都依赖于 Berachain 生态的正常运行，包括 PoL 机制、BGT 代币价值、Infrared Finance 的 iBGT 协议等。任何一环出现问题都可能导致资产损失。

**Scenarios**

- **Berachain 生态早期投机**: 适合对 Berachain 生态有深入了解并能承受极高风险的专业投资者，旨在博取生态早期的超额红利。
- **iBGT 挖矿**: 主要目标是尽可能多地积累 iBGT 资产。

**Remark**

NECT 本身可能存在脱锚风险，建议可以从 [[Euler Finance]] 等协议借币挖矿。
[池子地址](https://app.kodiak.finance/#/liquidity/pools/0x8ef48ae9df6165acc9754297bf28f5877c229c03?farm=0xf02d129c35f3b4be77c15449e95000baa13b85a0&chain=berachain_mainnet)

