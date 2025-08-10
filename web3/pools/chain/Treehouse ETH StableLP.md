---
Protocol: "[[Treehouse Finance]]"
Type: StableLP
Chain:
  - Ethereum
Risk: 低风险
Token: ETH
APR-Low: 0.05
APR-High: 0.1
Market:
  - 通用
---
**Underlying**

该产品是 Treehouse 的核心生息资产 tETH，被定位为“LST 2.0”。其收益机制基于一套杠杆化的利率套利策略，旨在提供超越基础 ETH 质押率的“真实收益”。

核心策略如下：
1.  **整合头部 LST**: 将用户的 ETH 在 Lido 中质押，换取 stETH。
2.  **杠杆借贷**: 将获取的 stETH 存入 Aave 作为抵押品。
3.  **循环放大**: 从 Aave 中借出 ETH，并重复步骤 1 和 2，通过循环操作来放大杠杆，从而提高整体收益率。

这种设计旨在为用户提供一个经过优化的、高于市场平均水平的 ETH 质押收益。

**Danger**

尽管经过多家顶级机构审计，但该产品固有的复杂性带来了多层面的风险：

- **智能合约风险**: 作为复杂的 DeFi 协议，即使经过多重审计（Trail of Bits, Sigma Prime 等），代码漏洞的理论风险依然存在。
- **LST 脱锚风险**: 核心风险。策略依赖于 stETH 与 ETH 价格的稳定。一旦 stETH 发生严重脱锚（例如，价格下跌超过 15%），在 Aave 上的杠杆头寸可能面临大规模清算。
- **利率风险**: 当 Aave 的 ETH 借款利率飙升并超过 stETH 的质押收益率时，整个套利策略将产生亏损。这种情况虽然少见，但在极端的市场条件下可能发生。
- **系统性风险**: tETH 不仅是生息产品，也是 Treehouse 核心预言机（DOR）的关键抵押品。tETH 的任何重大问题都可能传导至整个 Treehouse 生态系统，构成单点故障风险。

**Scenarios**

- **增强型 ETH 收益**: 适合能承受中等风险、寻求比传统质押更高 ETH 本位回报的投资者。
- **DeFi 乐高组合**: 可作为有经验的 DeFi 用户构建复杂收益策略的基础模块，以最大化其 ETH 资产的资本效率。
- **参与早期生态**: 持有 tETH 是参与 Treehouse "GoNuts" 激励计划、博取未来空投预期的核心方式之一。

**Remark**

Treehouse ETH StableLP (tETH) 是一个由顶级团队和资本（Binance, MassMutual Ventures）支持的创新产品，旨在成为 DeFi 固定收益市场的基础设施。其杠杆策略设计精巧，但复杂性也带来了显著高于普通 LST 的风险。

**建议**: 适合对 DeFi 杠杆机制有深入理解且风险承受能力较强的投资者。不建议初学者或风险规避型用户大额参与。



