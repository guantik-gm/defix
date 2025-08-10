

# **Cetus Protocol (CETUS) 深度投资评估报告**

## **第一部分：执行摘要**

本报告旨在对基于 Sui 和 Aptos 区块链的去中心化交易所（DEX）及集中流动性协议 Cetus Protocol（代币：CETUS）进行全面、深入的投资评估。Cetus Protocol 定位于成为 Move 生态系统的核心基础设施，通过其创新的集中流动性做市商（CLMM）模型，为用户提供高资本效率的交易和流动性解决方案。

分析的核心发现表明，Cetus Protocol 不仅仅是一个交易平台，其战略定位是成为 Sui 生态系统的基础“流动性即服务”（Liquidity as a Service）层。通过提供强大的、模块化的软件开发工具包（SDK），Cetus 鼓励第三方开发者在其流动性之上构建应用，从而创建了强大的网络效应和显著的竞争壁垒。

尽管该协议在 2025 年 5 月经历了一场灾难性的、价值约 2.23 亿美元的安全漏洞事件，但该事件及其后续处理过程，反而成为了对其运营韧性、团队危机管理能力以及生态系统支持（特别是来自 Sui 基金会的支持）的一次极限压力测试。协议不仅在事件中幸存下来，还成功追回了大部分资金，对所有受影响用户进行了 100% 的补偿，并进行了彻底的安全升级后重新上线。这一“浴火重生”的经历，在很大程度上为协议未来的发展消除了部分不确定性。

本报告评估了多种投资途径，包括直接购买并持有 CETUS 代币、通过质押获取 xCETUS 参与治理、参与不同风险等级的流动性挖矿（从被动全范围策略到主动窄范围策略），以及利用借贷协议进行杠杆挖矿等高级策略。此外，报告特别为具备开发背景的投资者分析了利用 Cetus SDK 构建自动化工具或应用的潜在机会。

然而，投资 Cetus Protocol 仍面临显著风险。其核心团队与此前在 Solana 上同样遭受攻击的 Crema Finance 项目的关联，揭示了其在安全开发生命周期中可能存在的系统性问题。此外，为追回被盗资金而采取的 Sui 验证节点干预措施，虽然有效，但也引发了关于网络中心化风险的深刻讨论。

综合评估，Cetus Protocol 凭借其在 Sui 生态中的市场领先地位、先进的技术架构、经过严峻考验的运营韧性以及强大的投资者和生态支持，构成了一个具有吸引力的投资标的。其当前市值与总锁定价值（MC/TVL）比率等指标显示其可能被低估。

**最终投资等级：建议（Recommend）**

此评级基于以下判断：尽管历史安全事件构成了主要风险点，但协议的成功恢复、安全强化措施以及其在 Sui 生态中不可或缺的基础设施地位，为能够理解并管理相关风险的成熟投资者提供了潜在的高回报机会。建议投资者根据自身的风险偏好和技术背景，在本文探讨的多种投资途径中进行多元化配置。

---

## **第二部分：项目概述与核心价值主张**

### **2.1 Cetus Protocol 简介：使命与愿景**

Cetus Protocol 是一个建立在 Sui 和 Aptos 这两个基于 Move 语言的高性能区块链之上的去中心化交易所（DEX）和集中流动性协议 1。其核心使命是构建一个强大而灵活的底层流动性网络，旨在为任何用户和资产的交易提供便利，并简化交易流程 1。Cetus 致力于通过其创新的集中流动性协议和一系列可互操作的功能模块，为去中心化金融（DeFi）用户提供卓越的交易体验和更高的流动性效率。

### **2.2 在 Sui 生态系统中的定位**

Cetus Protocol 将自身定位为 Sui 生态的“先锋 DEX”和“生态系统基础设施的关键组成部分” 2。自上线以来，它已成为网络上交易量、总锁定价值（TVL）和用户数量方面最受欢迎的 DEX 之一 7。其与 Coinbase 的合作，为用户提供了直接使用法定货币购买 SUI 代币的入口，进一步巩固了其作为进入 Sui 生态系统关键门户的地位 7。截至报告撰写时，该协议的总交易量已超过 570 亿美元，累计交互账户数超过 1500 万，这些数据充分证明了其在生态系统中的广泛采用和深度渗透 5。

### **2.3 核心差异化优势**

Cetus Protocol 的设计理念和功能实现围绕三大核心原则，这使其在众多 DEX 中脱颖而出：

* **无需许可（Permissionless）**：Cetus 的所有核心工具和功能都遵循无需许可的标准。这意味着任何用户或第三方应用程序都可以自由地利用其协议来满足自身的需求，例如创建新的交易池或分配激励以从公开市场租用流动性，整个过程无需任何中心化实体的批准 1。  
* **可编程性（Programmable）**：协议基于一个高度可定制的集中流动性做市商（CLMM）模型。通过对交换（Swap）、范围订单（Range Order）和限价订单（Limit Order）等功能的灵活组合，用户能够执行各种复杂的交易策略，其复杂程度可与中心化交易所（CEXs）相媲美。同时，流动性提供者（LPs）也能够利用 CLMM 执行多样化的做市策略，以最大化其资本效率 1。  
* **可组合性（Composability）**：Cetus 积极倡导“流动性即服务”（Liquidity as a Service）的理念。协议在产品构建时极度重视易于集成的特性，允许开发者通过其软件开发工具包（SDK）轻松地将 Cetus 的流动性集成到自己的产品中，例如构建流动性金库、衍生品或杠杆挖矿等应用 1。

Cetus 的战略并非仅仅停留在成为另一个用户界面友好的 DEX。其更深层次的目标是成为 Sui 网络的“流动性基础设施”或“流动性公用事业”。通过将“流动性即服务”作为核心战略，并辅以全面的开发者工具，Cetus 鼓励并赋能其他协议在其流动性层之上进行创新。当生态系统中其他重要的 DeFi 应用（如借贷、衍生品、收益聚合器）选择基于 Cetus 的流动性来构建其产品时，Cetus 便能从整个生态系统的经济活动中捕获价值，而不仅仅是其自有前端的交易用户。这种深度嵌入的模式，创造了一个强大的网络效应和难以被竞争对手轻易取代的护城河。一个新的 DEX 不仅需要提供更优的用户体验，还必须说服整个开发者生态系统迁移其底层集成，这是一个极高的进入壁垒。

---

## **第三部分：技术架构与机制分析**

### **3.1 基于 Move 语言区块链的基础**

Cetus Protocol 战略性地选择在 Sui 和 Aptos 这两个新兴的 Layer 1 区块链上构建。这两个网络均采用 Move 编程语言，该语言专为安全和可验证的智能合约而设计。选择这些平台的主要原因是它们具备高交易吞吐量、近乎即时的交易结算能力以及独特的以资产为中心（或称对象为中心）的架构 1。这种架构允许交易并行处理，极大地提升了网络的可扩展性，使其成为承载高频交易和复杂 DeFi 应用的理想环境，从而为 Cetus 提供了坚实的技术基础。

### **3.2 深度解析：集中流动性做市商（CLMM）模型**

Cetus 的核心技术创新是其集中流动性做市商（CLMM）模型，其设计灵感来源于 Uniswap V3 4。与传统的自动做市商（AMM）模型（如

x×y=k 模型）相比，CLMM 带来了革命性的资本效率提升。

在传统 AMM 中，流动性被均匀地分布在从零到无穷大的整个价格曲线上。这意味着在任何给定时间，只有价格附近的少量流动性被实际用于交易，而大部分资金处于闲置状态，导致资本利用率极低 11。

CLMM 模型允许流动性提供者（LPs）将其资金集中在自定义的价格区间内。例如，对于一个 SUI/USDC 交易对，如果当前 SUI 的价格为 4.0 美元，LP 可以选择仅在 3.5 美元至 4.5 美元的价格区间内提供流动性 1。这样做的好处是：

1. **资本效率最大化**：在指定的活跃交易区间内，LP 的资金被更频繁地用于促成交易，从而能够赚取远高于传统 AMM 的交易费用 8。  
2. **交易滑点降低**：对于交易者而言，集中的流动性意味着在特定价格点上有更深的交易深度，从而减少了大额交易的价格影响（滑点）。

然而，这种高效率也伴随着相应的风险和要求。当市场价格超出 LP 设定的范围时，其流动性将变为“非活跃”状态，不再赚取任何交易费。此时，LP 的头寸将完全由价格较低的资产（如果价格上涨超过范围上限）或价格较高的资产（如果价格下跌低于范围下限）组成，从而面临显著的**无常损失**（Impermanent Loss）风险。因此，采用窄区间的 CLMM 策略需要 LP 对市场进行更积极的监控和头寸管理（即“再平衡”，Rebalancing） 11。

### **3.3 “流动性即服务”：Cetus SDK 与开发者生态**

Cetus 将其可组合性理念物化为一套全面且设计精良的开发者工具，这对于吸引和留住具备技术背景的深度用户至关重要 13。其开发者生态系统主要通过两种方式提供服务：

* **模块化 TypeScript SDK**：Cetus 提供了一系列独立的 npm 软件包，每个软件包都针对协议的不同功能模块。这种模块化的设计极大地降低了第三方集成的复杂性 15。主要模块包括：  
  * @cetusprotocol/sui-clmm-sdk：核心模块，用于处理流动性池查询、头寸管理、奖励计算等。  
  * @cetusprotocol/vaults-sdk：用于与 Cetus 自动流动性管理金库进行交互。  
  * @cetusprotocol/farms-sdk：用于管理质押和挖矿操作。  
  * @cetusprotocol/xcetus-sdk：处理 CETUS 代币质押和治理相关的操作。  
  * @cetusprotocol/limit-sdk 和 @cetusprotocol/dca-sdk：分别用于集成限价单和定投（DCA）功能。  
* **直接智能合约集成**：对于需要更高定制化和更低层级控制的开发者，Cetus 提供了详细的智能合约接口文档，允许他们直接与链上合约进行交互 16。

这种模块化的 SDK 架构，而非一个庞大臃肿的单一工具包，清晰地反映了团队对未来生态发展的深思熟虑。它要求更多的前期规划和开发投入，但回报是显著降低了其他项目集成的门槛。例如，一个专注于收益聚合的协议可能只需要 vaults-sdk，而无需引入其他不相关的功能，这减少了代码的复杂性和潜在的依赖冲突。这种策略有效地鼓励了更广泛的生态系统采用，从而巩固了 Cetus 作为 Sui 网络“流动性公用事业”的地位。

### **3.4 超级聚合器（Super Aggregator）**

除了作为流动性来源，Cetus 还构建了一个强大的交易聚合器。该功能整合了 Sui 生态系统中多个主流 DEX 的流动性，包括 FlowX, Kriya, Aftermath, Turbos 等 5。当用户在 Cetus 界面上进行交易时，聚合器会自动寻找最优的交易路径，可能将一笔交易拆分到多个 DEX 中执行，以确保用户获得最佳的成交价格和最低的滑点。

聚合器功能是一项兼具进攻性和防御性的战略举措。从进攻层面看，它能捕获那些原本可能直接流向竞争对手 DEX 的交易量和用户，并将他们留在 Cetus 的生态系统内。从防御层面看，即使某个竞争对手在特定交易对上暂时拥有更优的流动性，Cetus 依然可以通过路由交易至该对手方来保持自身的竞争力，同时将用户体验和交互流程锁定在自己的平台之上。这使得 Cetus 成为了一个综合性的交易入口，而不仅仅是一个孤立的流动性池。

---

## **第四部分：市场表现与财务健康**

### **4.1 CETUS 代币市场分析**

截至本报告撰写时，CETUS 代币的价格在 0.11 美元至 0.12 美元区间波动，其流通市值约为 9000 万至 1.01 亿美元 6。24 小时交易量保持活跃，通常在数千万美元级别。回顾其历史价格，CETUS 曾达到约 0.49 美元的历史高点，也曾跌至约 0.027 美元的历史低点 6。当前价格远低于历史高点，表明市场情绪在经历 2025 年 5 月的黑客事件后尚未完全恢复，但也为潜在的价值投资者提供了可能的切入点。

### **4.2 链上协议核心指标分析**

通过 DeFiLlama 等链上数据分析平台，可以深入评估 Cetus Protocol 的财务健康状况和市场地位 6。

* **总锁定价值（TVL）**：Cetus 目前的 TVL 稳定在 1.04 亿至 1.08 亿美元之间 22。值得注意的是，在遭受 2.23 亿美元的攻击后，协议的 TVL 曾在短时间内恢复至峰值的 50% 以上，约 1.2 亿美元，这显示了社区和流动性提供者在团队成功实施恢复计划后迅速恢复了信心 25。TVL 是衡量一个 DeFi 协议流动性深度和市场信任度的关键指标，Cetus 在经历巨大冲击后能维持上亿美元的 TVL，证明了其强大的市场韧性。  
* **交易量、费用与收入**：Cetus Protocol 展现了强大的创收能力。其 30 天 DEX 交易量高达数十亿美元（例如，数据显示为 54.47 亿美元），这产生了可观的交易费用 6。根据协议模型，80% 的交易费用直接分配给流动性提供者，而剩余的 20% 则作为协议收入 12。数据显示，协议的年化费用约为 3900 万美元，相应的年化协议收入约为 790 万美元 6。这表明 Cetus 拥有一个健康且可持续的商业模式，能够通过实际的经济活动产生真实收益，而非仅仅依赖代币激励。这种高比例的费用分成（80%给 LP）是吸引和留住流动性的关键因素，它创造了一个正向循环：更高的 LP 收益吸引更深的流动性，更深的流动性带来更好的交易体验（低滑点），从而吸引更多的交易量，最终产生更多的费用。

### **4.3 竞争格局分析**

在 Sui 生态系统中，DEX 赛道竞争激烈。为了客观评估 Cetus 的市场地位，我们将其与几个主要竞争对手进行横向对比，包括 Turbos Finance, KriyaDEX 和 Aftermath Finance。

**表 4.1：Sui 生态 DEX 竞争格局矩阵**

| 协议 (Protocol) | TVL (总锁定价值) | 30日交易量 (30d Volume) | 年化协议收入 (Annualized Revenue) | 流通市值 (Market Cap) | 市值/TVL比率 (MC/TVL Ratio) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Cetus Protocol** | $108.4 M | $5.447 B | $7.89 M | $101.2 M | **0.93** |
| **Turbos Finance** | $21.54 M | $626.22 M | *未明确提供* | $8.0 M | **0.37** |
| **Aftermath Finance** | $58.27 M | *未明确提供* | *未明确提供* | *未明确提供* | *N/A* |
| **KriyaDEX** | $6.78 M | *未明确提供* | *未明确提供* | $0.678 M | **0.10** |

数据来源：DeFiLlama 6。数据截至报告撰写时，可能会有波动。

从上表数据可以看出：

1. **市场领导地位**：Cetus 在 TVL 和 30 日交易量方面遥遥领先于其他竞争对手，确立了其在 Sui DEX 赛道中的绝对领导地位。其交易量是 Turbos Finance 的近 9 倍，TVL 是其 5 倍。  
2. **创收能力**：Cetus 是少数几个能清晰展示其强大协议收入的 DEX 之一，证明了其商业模式的成功。  
3. **估值分析**：市值与 TVL 的比率（MC/TVL Ratio）是一个重要的估值指标。一个低于 1.0 的比率通常被认为该协议可能被低估，因为它所管理的资产价值高于其自身的市场估值。Cetus 的 MC/TVL 比率约为 0.93 22，虽然高于其部分规模较小的竞争对手，但考虑到其市场主导地位和巨大的交易量，这一估值水平仍然具有吸引力。相比之下，KriyaDEX 和 Turbos Finance 的比率极低，这可能反映了市场对它们未来增长潜力的不确定性或较低的收入捕获能力。

综合来看，Cetus 不仅在规模上占据主导，其财务健康状况和估值指标也显示出相对的稳健性和投资潜力。

---

## **第五部分：代币经济学、解锁机制与投资者背景**

### **5.1 CETUS 与 xCETUS 双代币系统**

Cetus Protocol 采用了一种双代币经济模型，旨在平衡流动性激励与长期治理的稳定性 1。

* **CETUS**：是协议的原生功能型代币。其主要用途是在协议内作为支付和结算媒介，并且是流动性挖矿（Liquidity Mining）的主要奖励代币。用户通过为指定的流动性池提供流动性来赚取 CETUS 1。  
* **xCETUS**：是一种不可转让的、托管的治理代币。用户通过将 CETUS 代币进行质押（staking）来获得 xCETUS。持有 xCETUS 赋予用户参与协议治理的权利，例如对关键参数修改、资金使用等提案进行投票。此外，xCETUS 的持有者有权分享协议的部分收入（分红） 1。

这种模型的设计旨在鼓励用户将他们赚取的 CETUS 奖励进行质押，从而成为协议的长期利益相关者，而不是立即在二级市场出售。这有助于减少 CETUS 的抛售压力，并将治理权交到那些对协议有长期承诺的用户手中。

### **5.2 代币供应、分配与分发**

CETUS 的最大供应量被设定为 10 亿枚 4。其初始分配方案如下 40：

* **社区与流动性提供者（Community & LP）**：50% (5亿 CETUS)。这是最大的一部分，主要用于通过流动性挖矿、交易挖矿和其他激励计划来引导和维持协议的流动性，并奖励社区的积极参与者。  
* **团队与顾问（Team & Advisors）**：20% (2亿 CETUS)。用于激励核心开发团队和顾问的长期贡献。  
* **投资者（Investors）**：15% (1.5亿 CETUS)。分配给参与种子轮和私募轮的早期投资者。  
* **流动性财库（Liquidity Treasury）**：15% (1.5亿 CETUS)。用于提供初始流动性，以及在中心化和去中心化交易所进行长期的流动性维护。

将高达 50% 的代币分配给社区和流动性提供者，这是一个非常积极的信号。它表明协议致力于实现长期的去中心化，并将大部分价值回馈给生态系统的实际使用者和贡献者。相比于团队和投资者的份额，如此高的社区分配比例，有助于在长期内形成一个更加公平和分布式的治理结构，降低内部人员抛售对市场造成巨大冲击的风险。

### **5.3 锁仓与解锁机制分析**

代币的解锁计划对于评估未来的潜在抛售压力至关重要。Cetus Protocol 为团队和投资者设置了相对长期的锁仓和线性释放计划 40：

* **投资者份额**：有 6 个月的锁仓期（cliff），之后在 12 个月内线性解锁。  
* **团队与顾问份额**：有 12 个月的锁仓期（cliff），之后在 24 个月内线性解锁。

这种设计确保了早期支持者和核心团队的利益与协议的长期发展深度绑定。特别是团队长达一年的锁仓期和随后的两年线性释放，有效地防止了项目早期因团队抛售而导致币价崩溃的风险。根据解锁时间表，下一次针对团队的较大规模解锁预计在 2025 年 8 月之后，这为市场提供了相对充足的消化时间 40。截至报告撰写时，已有超过 82% 的代币供应被解锁，这意味着未来由解锁带来的大规模抛压已显著减小。

### **5.4 主要投资者与战略合作伙伴**

Cetus Protocol 获得了多家业内知名风险投资机构的支持，这为其项目的可信度和发展潜力提供了强有力的背书。其种子轮融资由 **OKX Ventures** 和 **KuCoin Ventures** 领投，其他参投方包括 **NGC Ventures**, **Animoca Brands**, **Coin98 Ventures**, **IDG Capital** 等 39。这些机构不仅提供了资金支持，更带来了宝贵的行业资源、战略指导和生态系统合作机会。强大的投资者阵容表明，专业的机构投资者对 Cetus 的技术、团队和市场前景抱有高度信心。

---

## **第六部分：2025 年 5 月黑客事件：全面复盘与韧性测试**

2025 年 5 月 22 日，Cetus Protocol 遭遇了一场毁灭性的安全攻击，损失金额高达约 2.23 亿美元 6。这一事件不仅是 Cetus 历史上的至暗时刻，也成为了对项目团队、Sui 网络乃至整个 DeFi 行业的一次深刻考验。本节将对该事件进行全面复盘，分析其技术根源、危机应对、恢复过程以及对未来的深远影响。

### **6.1 攻击剖析：整数溢出漏洞的技术分解**

此次攻击的根源并非 Cetus Protocol 自身核心逻辑的缺陷，而是一个被其集成的、名为 integer-mate 的第三方开源数学库中存在的整数溢出漏洞 45。Move 语言本身对大多数算术运算提供了原生溢出保护，但位移运算（bit shifts）是例外，需要开发者手动进行安全检查。

攻击者利用的正是这个库中一个名为 checked\_shlw 的函数。该函数本应用于检查一个数值在进行 64 位左移位操作时是否会发生溢出，但其实现存在一个致命错误：它错误地将输入值与一个过大的掩码（0xffff... \<\< 192）进行比较，而不是正确的边界值（0x1 \<\< 192）48。这导致一个本应被判定为会溢出的、精心构造的巨大流动性数值，却成功通过了安全检查。

攻击过程大致如下 45：

1. **注入“幽灵代币”（Spoof Tokens）**：攻击者首先向流动性池中注入了少量几乎没有价值的“幽灵代币”（如 BULLA, MOJO）。  
2. **利用漏洞创建虚假流动性**：攻击者通过闪电贷获取大量资金，并利用上述 checked\_shlw 函数的漏洞，以极小的真实资产（例如，仅一个单位的代币）作为输入，在计算流动性时触发整数溢出。由于溢出，系统错误地为其分配了一个天文数字般的流动性头寸（LP Position）。  
3. **耗尽真实资产**：攻击者随后开始从池中“移除”他们虚构的巨大流动性头寸。协议根据这个虚假的头寸规模，将池中真实的、有价值的资产（如 SUI 和 USDC）返还给攻击者。  
4. **重复攻击**：攻击者在不到 15 分钟内对超过 200 个流动性池重复了此过程，最终导致了约 2.23 亿美元的巨额损失 46。

### **6.2 危机响应与管理**

事件发生后，Cetus 团队的反应堪称迅速且果断：

* **快速检测与停机**：在攻击开始后的 30 分钟内，团队的监控系统便发现了异常活动，并立即暂停了所有核心 CLMM 智能合约的运行，有效阻止了损失的进一步扩大 44。  
* **生态系统协作**：团队迅速与 Sui 基金会、生态系统内的其他项目方以及安全公司（如 OtterSec, Inca Digital）取得联系，启动了全生态范围的应急响应 47。

### **6.3 Sui 验证节点的干预：资金冻结与中心化争议**

在 Cetus 团队和 Sui 基金会的协调下，Sui 网络的验证节点采取了一项史无前例且备受争议的行动。通过一次快速的链下协调和链上投票，超过三分之一的验证节点同意“忽略”或“审查”来自攻击者钱包地址的所有交易 53。这一行动成功地将约 1.62 亿美元的被盗资金“冻结”在了 Sui 链上，使其无法被转移或洗白。

此举虽然在保护用户资产方面取得了巨大成功，但也引发了社区关于“去中心化”本质的激烈辩论 57。批评者认为，验证节点联合审查特定地址的交易，本质上是一种中心化的干预行为，违背了区块链不可篡改和抗审查的核心原则。支持者则认为，在面临大规模盗窃的极端情况下，采取果断措施保护用户是必要的，体现了生态系统的责任感。这一事件暴露了在去中心化理想与现实安全需求之间的复杂权衡。

### **6.4 重建蓝图：赔偿、贷款与社区投票**

尽管约 6000 万美元的资金已被攻击者通过跨链桥转移至以太坊并兑换成 ETH 43，Cetus 团队依然制定并执行了一项全面的恢复计划：

1. **白帽悬赏**：团队首先向黑客发出了公开信，提供了 600 万美元的“白帽赏金”，希望其归还剩余资金，但未获回应 53。  
2. **Sui 基金会关键贷款**：为了弥补已被转移出 Sui 网络的资金缺口，Sui 基金会向 Cetus Protocol 提供了一笔数额可观的担保贷款（有报道称为 3000 万美元），专项用于赔偿用户损失 25。这笔贷款是整个恢复计划的基石，彰显了 Sui 官方对核心生态项目不遗余力的支持。  
3. **社区投票与资金回收**：对于被冻结在链上的 1.62 亿美元资金，Cetus 提请进行了一次全网范围的链上社区投票。投票最终以 90.9% 的支持率通过了一项协议升级提案，授权将这些资金从黑客地址转移到一个由 Cetus、Sui 基金会和安全公司 OtterSec 共同管理的多签钱包中，用于后续的用户赔偿 55。  
4. **100% 用户赔偿**：结合协议财库资金、Sui 基金会贷款以及成功回收的链上资金，Cetus 承诺并实施了对所有受影响流动性提供者的 100% 赔偿计划 25。

### **6.5 事后安全体系全面升级**

在完成资金恢复和用户赔偿后，Cetus Protocol 进行了深刻反思，并对安全体系进行了全面升级 47：

* **强化实时监控**：部署了更先进的链上活动实时监控和警报系统。  
* **严格风险控制**：引入了更严格的风险管理配置和资产流速限制，以防止类似攻击的快速蔓延。  
* **扩大审计范围**：与多家安全审计公司合作，对所有升级后的合约代码进行了重新且更深入的审计。  
* **加强漏洞赏金计划**：推出了奖励高达 30 万美元的漏洞赏金计划，激励白帽黑客发现并报告潜在漏洞 65。

### **6.6 团队历史关联：Crema Finance 事件**

深入调查发现，Cetus Protocol 的核心团队（由联合创始人 Henry Du 领导）与此前在 Solana 生态系统中的 Crema Finance 项目存在关联 72。Crema Finance 在 2022 年也曾遭受过一次约 900 万美元的黑客攻击，当时团队同样通过与黑客谈判并支付白帽赏金的方式成功追回了大部分资金。

这一发现揭示了一个重要的模式：该团队既有构建出被黑客成功利用漏洞的项目的历史，也有一套行之有效的危机处理和资金追回的经验。这既是优点也是缺点。一方面，它证明了团队在极端压力下的危机管理能力并非偶然。另一方面，它也引发了对其安全开发流程和代码审查严谨性的严重质疑——为何由其主导的多个项目都出现了严重的安全漏洞？这是评估该项目时必须考虑的一个关键风险因素。

总而言之，这场黑客攻击虽然是一次惨痛的安全失败，但从投资分析的角度看，它也成为了一次全面的压力测试。Cetus 不仅没有崩溃，反而在强大的生态支持下，通过一系列专业、透明的操作，成功地化解了危机，并借此机会强化了自身的安全防线。对于今天的投资者而言，他们所面对的是一个经历过“战火洗礼”并证明了其生存能力的协议，这在某种程度上，反而降低了未来因类似事件而彻底失败的风险。

---

## **第七部分：投资机会与战略评估**

基于对 Cetus Protocol 的全面分析，投资者可以从多个层面参与其生态系统，每种方式都对应着不同的风险、回报和技术要求。

### **7.1 途径一：直接代币投资（CETUS / xCETUS）**

这是最直接的投资方式，即在二级市场购买并持有 CETUS 代币，以期从协议的未来增长和代币价格升值中获利。

* **投资逻辑**：  
  * **价值捕获**：随着 Cetus 交易量和 TVL 的增长，其协议收入也会增加，这将提升 CETUS 代币的内在价值。  
  * **生态龙头**：作为 Sui 生态的头部 DEX，CETUS 代币是分享整个 Sui 生态增长红利的核心标的之一。  
  * **治理与分红**：对于长期看好协议的投资者，可以将持有的 CETUS 质押为 xCETUS。这不仅能参与协议的治理决策，还有资格分享协议收入分红，实现“持币生息” 39。  
* **风险**：  
  * 市场波动风险：CETUS 价格受整体加密市场情绪和 Sui 生态发展状况的显著影响。  
  * 通胀压力：尽管大部分代币已解锁，但社区激励部分的持续释放仍可能带来一定的抛压。

### **7.2 途径二：收益耕作与流动性提供**

为 Cetus 的流动性池提供资金（即成为 LP）是获取被动收入的主要方式，其收益来源多样，策略也灵活多变。

* **收益来源评估**：  
  * **交易费用**：LP 可以赚取其所在池子交易额一定比例的费用（通常是 80% 的协议手续费） 12。这部分收益与交易量直接挂钩，波动性较大。  
  * **挖矿奖励（Farming Rewards）**：协议或项目方会为特定池子提供额外的 CETUS 或其他代币作为奖励，通常以年化收益率（APR）的形式展示。这部分收益相对稳定，是早期吸引流动性的主要手段 73。  
* **CLMM 流动性策略**：Cetus 的 CLMM 模型为 LP 提供了多种策略选择，以平衡收益与风险 11：  
  * **被动策略（全范围 Full Range）**：将流动性分布在整个价格曲线上。这种策略类似于传统 AMM，无常损失风险最低，几乎无需管理，但资本效率和收益率也最低。适合寻求简单、低维护方式的投资者。  
  * **平衡策略（保守型 Conservative / 自定义宽范围）**：选择一个相对较宽的价格范围。这种策略在资本效率和管理难度之间取得了平衡，是多数 LP 的入门选择。  
  * **主动策略（积极型 Active / 自定义窄范围）**：将流动性高度集中在当前价格附近的一个非常窄的范围内。这种策略可以实现极高的资本效率，赚取远高于其他策略的交易费 APR。但缺点是，一旦价格移出该范围，头寸将迅速变为 100% 的单一资产，无常损失风险极高，且需要投资者进行频繁的、主动的头寸再平衡。适合能够密切关注市场并具备专业知识的高级用户。  
* **高级收益策略（多协议组合）**：对于寻求更高收益且愿意承担更高风险的资深 DeFi 用户，可以采用跨协议的杠杆挖矿策略。社区中讨论的一种典型策略是 74：  
  1. **抵押借贷**：在 Sui 生态的借贷协议（如 NAVI Protocol）中，存入稳定币（如 USDC）或 SUI 作为抵押品。  
  2. **循环借贷**：借出另一种资产（例如，存入 USDC 借出 SUI）。  
  3. **提供流动性**：将借出的 SUI 与自己持有的 USDC 组合，在 Cetus 上为 SUI/USDC 池提供流动性。  
  4. **收益放大**：通过这种方式，投资者不仅能赚取借贷协议的存款利息，还能赚取 Cetus 上的 LP 交易费和挖矿奖励，从而放大了整体收益。  
  * **核心风险**：此策略引入了**清算风险**。如果抵押品的价值下跌或借出资产的价值上涨，导致抵押率低于清算阈值，投资者在借贷协议中的头寸将被清算，造成本金损失。

### **7.3 途径三：自动化流动性管理（Cetus Vaults）**

对于希望享受 CLMM 高资本效率但又缺乏时间或专业知识进行主动管理的投资者，Cetus Vaults 提供了理想的解决方案 76。

* **核心功能**：  
  * **自动复投（Auto-compounding）**：金库会自动收集 LP 赚取的交易费和挖矿奖励，并将其重新投入到流动性池中，实现复利增长。  
  * **自动匹配（Auto-matching）**：允许用户使用单一资产（如仅 USDC）存入金库。金库会自动将其中一部分兑换成所需的另一种资产（如 SUI），以满足流动性池的配比要求。  
  * **自动再平衡（Auto-rebalancing）**：金库会根据预设的策略，在市场价格变动时自动调整流动性所在的范围，以确保其始终处于活跃且高效的区间。  
* **适用人群**：Cetus Vaults 是一种“一键式”的解决方案，极大地降低了参与 CLMM 的门槛，适合希望“设置后就不用管”（set-and-forget）的投资者。

### **7.4 途径四：生态系统开发（面向技术型投资者）**

对于具备开发背景的投资者，Cetus 强大的 SDK 和开放的协议架构提供了超越传统投资的独特机会 15。

* **潜在开发方向**：  
  * **自动化交易机器人**：利用 Cetus 的 Swap 和 Aggregator 功能，开发套利机器人或执行特定交易策略的自动化程序。  
  * **高级流动性管理代理**：构建能够根据市场波动率、交易量变化或其他链上指标，自动调整和再平衡 CLMM 头寸的智能代理，实现比 Cetus Vaults 更复杂的自定义策略。  
  * **结构化产品与利基金库**：基于 Cetus 的流动性层，开发新的 DeFi 产品，例如带有期权性质的流动性头寸，或针对特定资产（如 LSTs）的优化收益金库。

### **投资策略对比分析**

为了帮助投资者根据自身情况做出决策，下表对上述投资途径进行了多维度对比。

**表 7.1：Cetus Protocol 投资策略对比分析**

| 投资途径 | 潜在回报 (APR/APY) | 主要风险 | 所需资本 | 所需专业知识/精力 |
| :---- | :---- | :---- | :---- | :---- |
| **直接持有 CETUS** | 价格升值 | 市场风险、协议风险 | 灵活 | 低 |
| **质押 xCETUS** | 治理权 \+ 协议分红 | 同上，外加锁仓风险 | 灵活 | 低 |
| **被动 LP (全范围)** | 较低 (主要为交易费) | 无常损失 (低)、智能合约风险 | 中等 | 低 |
| **主动 LP (窄范围)** | 极高 (交易费 \+ 挖矿奖励) | 无常损失 (高)、智能合约风险、管理风险 | 中等 | 高，需持续监控 |
| **杠杆 LP (多协议)** | 最高 (杠杆放大) | 清算风险、无常损失 (高)、多重智能合约风险 | 中等至高 | 极高，需精通 DeFi |
| **Cetus Vaults** | 中等至高 (自动复利) | 智能合约风险、策略风险 | 灵活 | 低 |
| **生态系统开发** | 潜在极高 (应用收益) | 开发风险、市场风险、智能合约风险 | 灵活 (时间投入为主) | 极高，需编程能力 |

---

## **第八部分：综合风险评估**

尽管 Cetus Protocol 展现出强大的潜力和韧性，但任何投资决策都必须建立在对风险的清醒认识之上。以下是对该协议面临的主要风险的综合评估。

* **技术与安全风险**：这是 Cetus Protocol 最突出的风险。  
  * **历史漏洞**：2025 年 5 月的黑客事件证明，即使经过多轮审计，复杂的 DeFi 协议及其依赖的第三方库仍可能存在致命漏洞 46。  
  * **团队履历**：核心团队与 Crema Finance 的关联，表明其历史上曾不止一次构建出存在严重安全漏洞的项目 72。虽然团队在事后处理上表现出色，但这确实引发了对其安全开发文化和流程的担忧。尽管协议在事后加强了安全措施，但新漏洞的风险永远无法完全消除。  
* **市场与金融风险**：  
  * **系统性风险**：作为 DeFi 协议，Cetus 的价值与整个加密货币市场的健康状况高度相关。熊市周期会导致交易量萎缩、TVL 下降，从而影响协议收入和 CETUS 代币价格。  
  * **生态依赖风险**：Cetus 的成功与 Sui 生态系统的发展紧密相连。如果 Sui 未能吸引到足够的用户和开发者，或者其自身技术出现问题，Cetus 的增长将受到严重制约。  
* **治理与中心化风险**：  
  * **验证节点干预**：在黑客事件中，Sui 验证节点通过审查交易来冻结被盗资金的行为，虽然结果是积极的，但也开创了一个危险的先例 54。这表明在极端情况下，网络并非完全不可审查，这可能会让追求绝对去中心化的用户和资本望而却步。长期来看，这种治理模式的模糊地带可能成为一个潜在的风险点。  
* **竞争风险**：  
  * **赛道内卷**：DEX 是 DeFi 领域竞争最激烈的赛道之一。虽然 Cetus 目前在 Sui 上占据主导地位，但新的、更具创新性或提供更高激励的竞争对手随时可能出现，并侵蚀其市场份额 26。协议需要持续创新和优化，才能维持其领先地位。

---

## **第九部分：结论与最终投资论点**

经过对 Cetus Protocol 的技术架构、市场表现、代币经济学、历史风险事件以及未来机遇的全面和深入分析，本报告得出以下结论性投资论点。

Cetus Protocol 不仅仅是 Sui 生态系统中的一个领先的去中心化交易所，它已通过其“流动性即服务”的战略定位，将自身打造为生态不可或缺的金融基础设施。其先进的 CLMM 技术为资本效率设定了高标准，而全面的开发者工具套件则为其构建了强大的护城河，吸引着生态内外的项目方基于其流动性进行构建。

2025 年 5 月的黑客攻击事件，无疑是协议历史上的一次严峻考验。然而，这一事件的最终结果，却以一种非同寻常的方式，强化了 Cetus 的投资叙事。它暴露了安全审计的局限性和对开源库的依赖风险，但更重要的是，它展示了团队卓越的危机管理能力、Sui 基金会坚定不移的支持，以及一个能够通过链上治理实现集体行动以保护用户资产的强大生态系统。协议不仅在财务上完全恢复，更在安全上进行了系统性升级，使其在某种意义上比攻击前更加稳固。

从财务和市场数据来看，Cetus 展现了健康的创收能力和在竞争中的绝对优势。其市值与总锁定价值（MC/TVL）比率等估值指标，结合其市场领导地位，表明其当前估值可能存在上升空间。

然而，投资风险同样不容忽视。核心团队在安全开发方面的历史记录是一个无法回避的警示信号。此外，Sui 网络在危机处理中展现出的中心化干预能力，可能会让部分原教旨主义的去中心化投资者感到不安。

最终投资论点：  
Cetus Protocol 代表了一个典型的高风险、高潜在回报的 DeFi 投资机会。其核心优势在于其在快速增长的 Layer 1 生态中的市场主导地位、先进且具网络效应的技术架构、经过实践证明的运营韧性，以及强大的机构和生态系统支持。其主要劣势在于历史上的重大安全失误（这似乎是团队的一个模式），以及由其恢复过程所凸显的治理模型争议。  
**最终投资等级：建议（Recommend）**

此评级是基于对所有因素的综合权衡。对于了解并能够承受 DeFi 固有风险（特别是智能合约风险）的成熟投资者而言，Cetus Protocol 提供了一个引人注目的投资机会。其在“浴火重生”后所展现的实力，加上其作为 Sui 生态流动性核心的战略地位，使其未来的增长潜力大于其已知的、并已在很大程度上得到缓解的风险。

建议投资者采取多元化的投资策略，例如，将一部分资金用于直接持有 CETUS 代币以捕捉生态增长，同时将另一部分资金投入到 Cetus Vaults 或风险可控的流动性池中以获取稳健的现金流收益。对于具备开发能力的投资者，探索利用其 SDK 构建应用，可能是在更高层面上参与并从协议成功中获益的最佳途径。

---

## **第十部分：参考文献**

1839197713141178782579808115310458297114883621484222022418562546434354665560596768578687888944904915658504292616226364527539394707165262423959662728293031323334353637384977498767599100101401021036910412105731061071085241094743934611049111112511131141158311671177211811916

#### **引用的著作**

1. What Is the Cetus Protocol (CETUS)? \- Binance Academy, 访问时间为 七月 27, 2025， [https://academy.binance.com/en/articles/what-is-the-cetus-protocol-cetus](https://academy.binance.com/en/articles/what-is-the-cetus-protocol-cetus)  
2. Cetus \- Sui Directory, 访问时间为 七月 27, 2025， [https://sui.directory/project/cetus/](https://sui.directory/project/cetus/)  
3. What is Cetus Protocol (CETUS)| How To Get & Use Cetus Protocol \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/cetus-protocol/what-is](https://www.bitget.com/price/cetus-protocol/what-is)  
4. Cetus Protocol price today, CETUS to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/cetus-protocol/](https://coinmarketcap.com/currencies/cetus-protocol/)  
5. Cetus, where On-Chain Trading happens, 访问时间为 七月 27, 2025， [https://www.cetus.zone/](https://www.cetus.zone/)  
6. Cetus \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/cetus](https://defillama.com/protocol/cetus)  
7. How Cetus Protocol integrated Coinbase Onramp to onboard new customers, 访问时间为 七月 27, 2025， [https://www.coinbase.com/developer-platform/discover/customer-stories/cetus](https://www.coinbase.com/developer-platform/discover/customer-stories/cetus)  
8. What is Cetus Protocol? \- Gate.io, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/what-is-cetus-protocol/2090](https://www.gate.com/learn/articles/what-is-cetus-protocol/2090)  
9. What Is Cetus Protocol (CETUS)? How Does It Work? \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/academy/what-is-cetus-protocol-cetus-and-how-does-it-work](https://www.bitget.com/academy/what-is-cetus-protocol-cetus-and-how-does-it-work)  
10. Cetus Protocol (CETUS) Price Prediction & Forecast For 2024 To 2030 | Mudrex Learn, 访问时间为 七月 27, 2025， [https://mudrex.com/learn/cetus-protocol-cetus-price-prediction-forecast-for-2024-to-2030/](https://mudrex.com/learn/cetus-protocol-cetus-price-prediction-forecast-for-2024-to-2030/)  
11. Cetus Library: Concentrated Liquidity (CLMM) | by CetusProtocol \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@CetusProtocol/cetus-library-concentrated-liquidity-clmm-bd63936dfa0](https://medium.com/@CetusProtocol/cetus-library-concentrated-liquidity-clmm-bd63936dfa0)  
12. Cetus New Farms: Everything you should know about it | by CetusProtocol \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@CetusProtocol/cetus-new-farms-everything-you-should-know-about-it-c6b60e6a6ae5](https://medium.com/@CetusProtocol/cetus-new-farms-everything-you-should-know-about-it-c6b60e6a6ae5)  
13. CetusProtocol \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/CetusProtocol](https://github.com/CetusProtocol)  
14. @cetusprotocol/cetus-sui-clmm-sdk \- npm, 访问时间为 七月 27, 2025， [https://www.npmjs.com/package/@cetusprotocol/cetus-sui-clmm-sdk](https://www.npmjs.com/package/@cetusprotocol/cetus-sui-clmm-sdk)  
15. Getting started | Cetus Developer Docs, 访问时间为 七月 27, 2025， [https://cetus-1.gitbook.io/cetus-developer-docs/developer/cetus-aggregator/getting-started](https://cetus-1.gitbook.io/cetus-developer-docs/developer/cetus-aggregator/getting-started)  
16. Dev Overview | Cetus Developer Docs, 访问时间为 七月 27, 2025， [https://cetus-1.gitbook.io/cetus-developer-docs/](https://cetus-1.gitbook.io/cetus-developer-docs/)  
17. CetusProtocol/cetus-clmm-interface \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/CetusProtocol/cetus-clmm-interface](https://github.com/CetusProtocol/cetus-clmm-interface)  
18. Cetus Protocol (CETUS) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 七月 27, 2025， [https://www.forbes.com/digital-assets/assets/cetus-protocol-cetus/](https://www.forbes.com/digital-assets/assets/cetus-protocol-cetus/)  
19. Cetus Protocol price today \- CETUS price chart & live trends \- Kraken, 访问时间为 七月 27, 2025， [https://www.kraken.com/prices/cetus-protocol](https://www.kraken.com/prices/cetus-protocol)  
20. Cetus Protocol Price: CETUS Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/cetus-protocol](https://www.coingecko.com/en/coins/cetus-protocol)  
21. Cetus \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/cetus?denomination=APT](https://defillama.com/protocol/cetus?denomination=APT)  
22. CETUS to USD: Cetus Protocol Price in US Dollar \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/cetus-protocol/usd](https://www.coingecko.com/en/coins/cetus-protocol/usd)  
23. Dexs TVL Rankings \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocols/Dexs](https://defillama.com/protocols/Dexs)  
24. Sui \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/sui](https://defillama.com/chain/sui)  
25. Cetus Protocol Relaunches, Restores Over 50% TVL After $220 Million Exploit \- The Defiant, 访问时间为 七月 27, 2025， [https://thedefiant.io/news/defi/cetus-protocol-relaunches-restores-over-50-tvl-after-usd220-million-exploit](https://thedefiant.io/news/defi/cetus-protocol-relaunches-restores-over-50-tvl-after-usd220-million-exploit)  
26. Turbos \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/turbos](https://defillama.com/protocol/turbos)  
27. KriyaDEX: Project Guide | Latest Updates, Presale & Airdrop \- Bitget Wallet, 访问时间为 七月 27, 2025， [https://web3.bitget.com/en/dapp/kriyadex-29272](https://web3.bitget.com/en/dapp/kriyadex-29272)  
28. Kriya (KDX): A Comprehensive DeFi Protocol in the Sui Ecosystem \- Gate.io, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/kriya-kdx-a-comprehensive-de-fi-protocol-in-the-sui-ecosystem/5836](https://www.gate.com/learn/articles/kriya-kdx-a-comprehensive-de-fi-protocol-in-the-sui-ecosystem/5836)  
29. KriyaDEX Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/KriyaDEX?k=Nzc2OQ%3D%3D](https://www.rootdata.com/Projects/detail/KriyaDEX?k=Nzc2OQ%3D%3D)  
30. KriyaDEX \- Sui Directory, 访问时间为 七月 27, 2025， [https://sui.directory/project/kriyadex/](https://sui.directory/project/kriyadex/)  
31. Kriya \- KDX Live Price Chart, Market Cap & News Today \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/kriya](https://www.coingecko.com/en/coins/kriya)  
32. Kriya DEX — The fastest derivatives exchange on-chain | by Sui Detective | Medium, 访问时间为 七月 27, 2025， [https://medium.com/@suidetective/kriya-dex-the-fastest-derivatives-exchange-on-chain-978405c10f78](https://medium.com/@suidetective/kriya-dex-the-fastest-derivatives-exchange-on-chain-978405c10f78)  
33. Turbos Finance price today, TURBOS to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/turbos-finance/](https://coinmarketcap.com/currencies/turbos-finance/)  
34. Turbo (finance) \- Wikipedia, 访问时间为 七月 27, 2025， [https://en.wikipedia.org/wiki/Turbo\_(finance)](https://en.wikipedia.org/wiki/Turbo_\(finance\))  
35. Intuit®: Complete Financial Confidence, 访问时间为 七月 27, 2025， [https://www.intuit.com/](https://www.intuit.com/)  
36. Turbos Finance Price USD, TURBOS Price Live Charts, Market Cap & News \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/turbos-finance](https://www.bitget.com/price/turbos-finance)  
37. Turbos Finance: A DEX for the next billion web3 users | Sui Builder House Denver, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=chFn3uM4QDY](https://www.youtube.com/watch?v=chFn3uM4QDY)  
38. Turbos Finance price today \- TURBOS price chart & live trends \- Kraken, 访问时间为 七月 27, 2025， [https://www.kraken.com/prices/turbos-finance](https://www.kraken.com/prices/turbos-finance)  
39. Cetus Protocol (CETUS) Price, Live Chart and Data \- KuCoin, 访问时间为 七月 27, 2025， [https://www.kucoin.com/price/CETUS](https://www.kucoin.com/price/CETUS)  
40. Cetus Protocol (CETUS) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 七月 27, 2025， [https://tokenomist.ai/cetus-protocol](https://tokenomist.ai/cetus-protocol)  
41. Cetus Protocol (CETUS) Price, Investors & Funding, Charts, Market Cap | Chain Broker, 访问时间为 七月 27, 2025， [https://chainbroker.io/projects/cetus-protocol/](https://chainbroker.io/projects/cetus-protocol/)  
42. OKX Ventures Announces Investment in Cetus Protocol \- LiquidityFinder, 访问时间为 七月 27, 2025， [https://liquidityfinder.com/news/okx-ventures-announces-investment-in-cetus-protocol](https://liquidityfinder.com/news/okx-ventures-announces-investment-in-cetus-protocol)  
43. Cetus Protocol hacked for more than $200 million \- Elliptic, 访问时间为 七月 27, 2025， [https://www.elliptic.co/blog/cetus-protocol-hacked-for-more-than-200-million](https://www.elliptic.co/blog/cetus-protocol-hacked-for-more-than-200-million)  
44. Crypto DeFi Project Cetus Protocol Suffers Security Breach \- Insurance Journal, 访问时间为 七月 27, 2025， [https://www.insurancejournal.com/news/international/2025/05/23/824934.htm](https://www.insurancejournal.com/news/international/2025/05/23/824934.htm)  
45. The $223 Million Cetus Protocol Hack: How a Simple Bug Cost Everything | by Chronos Vault | Jun, 2025 | CoinsBench, 访问时间为 七月 27, 2025， [https://coinsbench.com/the-223-million-cetus-protocol-hack-how-a-simple-bug-cost-everything-b610ce1173a8](https://coinsbench.com/the-223-million-cetus-protocol-hack-how-a-simple-bug-cost-everything-b610ce1173a8)  
46. Hack Track: How a Shared Library Bug Triggered the $223M Cetus Hack \- Merkle Science, 访问时间为 七月 27, 2025， [https://www.merklescience.com/blog/hack-track-how-a-shared-library-bug-triggered-the-223m-cetus-hack](https://www.merklescience.com/blog/hack-track-how-a-shared-library-bug-triggered-the-223m-cetus-hack)  
47. Sui DEX Cetus says overlooked flaw in open-source library used by smart contract led to $223 million exploit | The Block, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/355795/sui-dex-cetus-open-source-library-flaw-smart-contract-223-million-usd-exploit](https://www.theblock.co/post/355795/sui-dex-cetus-open-source-library-flaw-smart-contract-223-million-usd-exploit)  
48. Shadow Liquidity: How Cetus protocol was drained for $22 million. \- CoinsBench, 访问时间为 七月 27, 2025， [https://coinsbench.com/shadow-liquidity-how-cetus-protocol-was-drained-for-22-million-4623da460785](https://coinsbench.com/shadow-liquidity-how-cetus-protocol-was-drained-for-22-million-4623da460785)  
49. Explained: The Cetus Hack (May 2025\) \- Halborn, 访问时间为 七月 27, 2025， [https://www.halborn.com/blog/post/explained-the-cetus-hack-may-2025](https://www.halborn.com/blog/post/explained-the-cetus-hack-may-2025)  
50. $223M Exploit Halts Cetus Protocol: Here's What We Know So Far \- The Cyber Express, 访问时间为 七月 27, 2025， [https://thecyberexpress.com/223m-exploit-halts-cetus-protocol/](https://thecyberexpress.com/223m-exploit-halts-cetus-protocol/)  
51. How $220M was stolen in minutes: Understanding the Cetus DEX exploit on Sui, 访问时间为 七月 27, 2025， [https://cointelegraph.com/explained/how-220m-was-stolen-in-minutes-understanding-the-cetus-dex-exploit-on-sui](https://cointelegraph.com/explained/how-220m-was-stolen-in-minutes-understanding-the-cetus-dex-exploit-on-sui)  
52. Crypto DeFi Project Cetus Protocol Suffers Security Breach \- Claims Journal, 访问时间为 七月 27, 2025， [https://www.claimsjournal.com/news/national/2025/05/23/330762.htm](https://www.claimsjournal.com/news/national/2025/05/23/330762.htm)  
53. Cetus offers $6 million white hat deal to recover stolen ETH after hacker's activity is blocked on Sui, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/355511/cetus-protocol-sui-bounty](https://www.theblock.co/post/355511/cetus-protocol-sui-bounty)  
54. Cryptohack Roundup: $223M Cetus Exploit \- BankInfoSecurity, 访问时间为 七月 27, 2025， [https://www.bankinfosecurity.com/cryptohack-roundup-223m-cetus-exploit-a-28538](https://www.bankinfosecurity.com/cryptohack-roundup-223m-cetus-exploit-a-28538)  
55. Crypto platform mulls 100% compensation after $223M hack \- Cybernews, 访问时间为 七月 27, 2025， [https://cybernews.com/cybercrime/crypto-platform-mulls-223m-hack/](https://cybernews.com/cybercrime/crypto-platform-mulls-223m-hack/)  
56. Cetus Hack Exposes AMM Flaw, Sparks Debate on Decentralization \- CoinTrust, 访问时间为 七月 27, 2025， [https://www.cointrust.com/market-news/cetus-hack-exposes-amm-flaw-sparks-debate-on-decentralization](https://www.cointrust.com/market-news/cetus-hack-exposes-amm-flaw-sparks-debate-on-decentralization)  
57. The Cetus hacker originates from the Aptos ecosystem？ : r/sui \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/sui/comments/1l7ozuz/the\_cetus\_hacker\_originates\_from\_the\_aptos/](https://www.reddit.com/r/sui/comments/1l7ozuz/the_cetus_hacker_originates_from_the_aptos/)  
58. Blockchain security firm releases Cetus hack post-mortem report \- Cointelegraph, 访问时间为 七月 27, 2025， [https://cointelegraph.com/news/dedaub-cetus-hack-post-mortem](https://cointelegraph.com/news/dedaub-cetus-hack-post-mortem)  
59. Cetus to Fully Compensate Users After $223M Hack, Backed by Sui Foundation, 访问时间为 七月 27, 2025， [https://cryptopotato.com/cetus-to-fully-compensate-users-after-223m-hack-backed-by-sui-foundation/](https://cryptopotato.com/cetus-to-fully-compensate-users-after-223m-hack-backed-by-sui-foundation/)  
60. Cetus Protocol Secures $500K Loan from Sui Foundation to Compensate Hack Victims, Vows Relaunch \- CryptoNinjas, 访问时间为 七月 27, 2025， [https://www.cryptoninjas.net/news/cetus-protocol-secures-500k-loan-from-sui-foundation-to-compensate-hack-victims-vows-relaunch/](https://www.cryptoninjas.net/news/cetus-protocol-secures-500k-loan-from-sui-foundation-to-compensate-hack-victims-vows-relaunch/)  
61. SUI Foundation Grants Loan to Cetus After $233M Hack | Todayq News on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/24847965641273](https://www.binance.com/en/square/post/24847965641273)  
62. Sui Foundation Loans Funds to Cetus Protocol After 40% Token Drop \- AInvest, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/sui-foundation-loans-funds-cetus-protocol-40-token-drop-2505/](https://www.ainvest.com/news/sui-foundation-loans-funds-cetus-protocol-40-token-drop-2505/)  
63. Sui Foundation Offers Secured Loan to Cetus for User Compensation \- Binance, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/05-28-2025-sui-foundation-offers-secured-loan-to-cetus-for-user-compensation-24834470760618](https://www.binance.com/en/square/post/05-28-2025-sui-foundation-offers-secured-loan-to-cetus-for-user-compensation-24834470760618)  
64. Response to the Cetus Incident – Onchain Community Vote \- The Sui Blog, 访问时间为 七月 27, 2025， [https://blog.sui.io/cetus-incident-response-onchain-community-vote/](https://blog.sui.io/cetus-incident-response-onchain-community-vote/)  
65. The Cetus Protocol, a decentralized exchange (DEX) on the Su | DecyX on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-IN/square/post/24985450194257](https://www.binance.com/en-IN/square/post/24985450194257)  
66. Cetus Protocol Plans Full Compensation for Hack Victims \- Binance, 访问时间为 七月 27, 2025， [https://www.binance.com/da-DK/square/post/24833863885937](https://www.binance.com/da-DK/square/post/24833863885937)  
67. Cetus (CETUS) Announces Plan to "Fully Compensate" Hacking Victims, 访问时间为 七月 27, 2025， [https://bloomingbit.io/en/feed/news/88975](https://bloomingbit.io/en/feed/news/88975)  
68. Cetus Protocol Plans Full Compensation for Hack Victims \- Binance, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/05-28-2025-cetus-protocol-plans-full-compensation-for-hack-victims-24833863885937](https://www.binance.com/en/square/post/05-28-2025-cetus-protocol-plans-full-compensation-for-hack-victims-24833863885937)  
69. Cetus Protocol Relaunches After $223M Hack With Full Audits | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604804069](https://www.bitget.com/news/detail/12560604804069)  
70. \[New Bug Bounty\] Cetus Has Launched Bug Bounty With Up to $300,000 Reward Per Critical Vulnerability \- HackenProof, 访问时间为 七月 27, 2025， [https://hackenproof.com/blog/for-hackers/cetus-bug-bounty-reward](https://hackenproof.com/blog/for-hackers/cetus-bug-bounty-reward)  
71. $10 Million Fix? SUI Network Moves Fast After Cetus Exploit Scare \- TradingView, 访问时间为 七月 27, 2025， [https://www.tradingview.com/news/newsbtc:1cca3bbe7094b:0-10-million-fix-sui-network-moves-fast-after-cetus-exploit-scare/](https://www.tradingview.com/news/newsbtc:1cca3bbe7094b:0-10-million-fix-sui-network-moves-fast-after-cetus-exploit-scare/)  
72. Twice lucky? Cetus' recovery plan on Sui mirrors a Solana blueprint, 访问时间为 七月 27, 2025， [https://cointelegraph.com/news/cetus-hack-sui-successful-solana](https://cointelegraph.com/news/cetus-hack-sui-successful-solana)  
73. Tutorial: How to participate in Farming on Cetus beta CLMM | by CetusProtocol \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@CetusProtocol/tutorial-how-to-participate-in-farming-on-cetus-beta-clmm-a1f3adfd8e19](https://medium.com/@CetusProtocol/tutorial-how-to-participate-in-farming-on-cetus-beta-clmm-a1f3adfd8e19)  
74. ‍ NAVX Yield Farming Guide on Cetus | by NAVI Protocol | Medium, 访问时间为 七月 27, 2025， [https://medium.com/@navi.protocol/navx-yield-farming-guide-on-cetus-63e27e19da72](https://medium.com/@navi.protocol/navx-yield-farming-guide-on-cetus-63e27e19da72)  
75. Yield Farming \- Strategies / Success Stories / Lessons Learned? : r/defi \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/defi/comments/1hs8mnz/yield\_farming\_strategies\_success\_stories\_lessons/](https://www.reddit.com/r/defi/comments/1hs8mnz/yield_farming_strategies_success_stories_lessons/)  
76. Cetus Vaults: Automate your liquidity to earn high yield with ease \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@CetusProtocol/cetus-vaults-automate-your-liquidity-to-earn-high-yield-with-ease-ed655e68122e](https://medium.com/@CetusProtocol/cetus-vaults-automate-your-liquidity-to-earn-high-yield-with-ease-ed655e68122e)  
77. Live Cetus Protocol to Tether USDT Rate \- CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/cetus-protocol/cetus/usdt/](https://coinmarketcap.com/currencies/cetus-protocol/cetus/usdt/)  
78. Cetus Protocol Price Prediction \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/cetus-protocol/price-prediction](https://www.bitget.com/price/cetus-protocol/price-prediction)  
79. Cetus, derived from MySQL Proxy, is a high-performance, stable, and protocol-aware proxy for MySQL Group Replication. \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/enhancedformysql/cetus](https://github.com/enhancedformysql/cetus)  
80. session-replay-tools/cetus: Cetus is high-performance middleware designed to provide transparent routing between your application and backend MySQL servers. \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/session-replay-tools/cetus](https://github.com/session-replay-tools/cetus)  
81. cetus · GitHub Topics, 访问时间为 七月 27, 2025， [https://github.com/topics/cetus](https://github.com/topics/cetus)  
82. Cetus Protocol (CETUS) Price and Chart: Market Analysis and Trends \- Meria, 访问时间为 七月 27, 2025， [https://www.meria.com/price/CETUS?locale=EN](https://www.meria.com/price/CETUS?locale=EN)  
83. Cetus Protocol | The Leading DEX & CLMM on SUI \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=lE\_cn1RN3Ew](https://www.youtube.com/watch?v=lE_cn1RN3Ew)  
84. Cetus trade volume and market listings | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/exchanges/cetus/](https://coinmarketcap.com/exchanges/cetus/)  
85. Cetus Protocol \- Project Overview, Analytics, and Data \- DappRadar, 访问时间为 七月 27, 2025， [https://dappradar.com/dapp/cetus-protocol](https://dappradar.com/dapp/cetus-protocol)  
86. Community Vote Critical in Cetus Hack Recovery | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604782218](https://www.bitget.com/news/detail/12560604782218)  
87. Cetus Protocol Recovers Majority Funds After $223M Hack | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604804223](https://www.bitget.com/news/detail/12560604804223)  
88. Wtf is that? : r/sui \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/sui/comments/1ksq26k/wtf\_is\_that/](https://www.reddit.com/r/sui/comments/1ksq26k/wtf_is_that/)  
89. Has Anyone Successfully Exited a Liquid Pool on Cetus After the Hack? \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/sui/comments/1ksozi8/has\_anyone\_successfully\_exited\_a\_liquid\_pool\_on/](https://www.reddit.com/r/sui/comments/1ksozi8/has_anyone_successfully_exited_a_liquid_pool_on/)  
90. Decentralized crypto platform Cetus hit with $223 million hack \- The Record, 访问时间为 七月 27, 2025， [https://therecord.media/decentralized-crypto-platform-cetus-theft](https://therecord.media/decentralized-crypto-platform-cetus-theft)  
91. The Fallout from the Cetus Protocol Hack: Will It Change Crypto? \- OneSafe Blog, 访问时间为 七月 27, 2025， [https://www.onesafe.io/blog/cetus-protocol-hack-lessons-and-strategies](https://www.onesafe.io/blog/cetus-protocol-hack-lessons-and-strategies)  
92. Breaking\! Cetus Protocol Suffers $260M Exploit Using Fake Tokens—DEX Pauses All Trading \- Crypto Economy, 访问时间为 七月 27, 2025， [https://crypto-economy.com/breaking-cetus-protocol-suffers-260m-exploit-using-fake-tokens-dex-pauses-all-trading/](https://crypto-economy.com/breaking-cetus-protocol-suffers-260m-exploit-using-fake-tokens-dex-pauses-all-trading/)  
93. Hackers Stole $223 Million from Cetus Crypto Exchange \- Bitdefender, 访问时间为 七月 27, 2025， [https://www.bitdefender.com/en-au/blog/hotforsecurity/hackers-223-million-cetus-crypto-exchange](https://www.bitdefender.com/en-au/blog/hotforsecurity/hackers-223-million-cetus-crypto-exchange)  
94. Ledger Supported Coins & Tokens, 访问时间为 七月 27, 2025， [https://www.ledger.com/supported-crypto-assets](https://www.ledger.com/supported-crypto-assets)  
95. All Chains DeFi TVL \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chains](https://defillama.com/chains)  
96. DEX Volume \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/dexs](https://defillama.com/dexs)  
97. Yield Farming: Top Strategies, Risks & Security Tips \- Hacken, 访问时间为 七月 27, 2025， [https://hacken.io/discover/yield-farming/](https://hacken.io/discover/yield-farming/)  
98. Aptos \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/aptos](https://defillama.com/chain/aptos)  
99. Token Unlocks | Track The Most Updated Data and Complete Vesting Schedules, 访问时间为 七月 27, 2025， [https://tokenomist.ai/](https://tokenomist.ai/)  
100. Token Unlocks and Vesting Schedules \- CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/token-unlocks/](https://coinmarketcap.com/token-unlocks/)  
101. Sui price today, SUI to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/sui/](https://coinmarketcap.com/currencies/sui/)  
102. Token Release Schedule (Update). Introduction | by EverestDotOrg \- Medium, 访问时间为 七月 27, 2025， [https://everestdotorg.medium.com/token-release-schedule-7db4d4aed964](https://everestdotorg.medium.com/token-release-schedule-7db4d4aed964)  
103. An update to ROUTE tokenomics: Extending vesting timeframe by 4x across key categories, 访问时间为 七月 27, 2025， [https://routerprotocol.medium.com/an-update-to-route-tokenomics-extending-vesting-timeframe-by-4x-across-key-categories-2affa8425d87](https://routerprotocol.medium.com/an-update-to-route-tokenomics-extending-vesting-timeframe-by-4x-across-key-categories-2affa8425d87)  
104. CETUS pool \- SUI/USDC effective APR and rewards \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/sui/comments/1bvl5gx/cetus\_pool\_suiusdc\_effective\_apr\_and\_rewards/](https://www.reddit.com/r/sui/comments/1bvl5gx/cetus_pool_suiusdc_effective_apr_and_rewards/)  
105. Sui-based Cetus Protocol suspends operations following $260 million oracle exploit \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604771230](https://www.bitget.com/news/detail/12560604771230)  
106. Cetus Protocol Hacked for $200M+ – SUI Price Crashes as $60M USDC Moved to Ethereum, 访问时间为 七月 27, 2025， [https://cryptonews.com/news/cetus-protocol-hacked-for-200m-sui-price-crashes-as-60m-usdc-moved-to-ethereum/](https://cryptonews.com/news/cetus-protocol-hacked-for-200m-sui-price-crashes-as-60m-usdc-moved-to-ethereum/)  
107. Cetus Protocol (CETUS) Staking Rewards Calculator, 访问时间为 七月 27, 2025， [https://www.stakingrewards.com/asset/cetus-protocol](https://www.stakingrewards.com/asset/cetus-protocol)  
108. What are the best ways to farm Cetus, Fortuna and Deimos Standing? : r/Warframe \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/Warframe/comments/12k0mwt/what\_are\_the\_best\_ways\_to\_farm\_cetus\_fortuna\_and/](https://www.reddit.com/r/Warframe/comments/12k0mwt/what_are_the_best_ways_to_farm_cetus_fortuna_and/)  
109. SSUI Live Price Chart, Market Cap & News Today \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/ssui](https://www.coingecko.com/en/coins/ssui)  
110. SlowMist \- Focusing on Blockchain Ecosystem Security (Exchange Security Audit | Wallet Security Audit | Blockchain Security Audit | Smart Contract Security Audit | Security Consulting | Defense Deployment | Blockchain Threat Intelligence | Blockchain Security), 访问时间为 七月 27, 2025， [https://www.slowmist.com/](https://www.slowmist.com/)  
111. Hack3d: The Web3 Security Report 2024 \- CertiK, 访问时间为 七月 27, 2025， [https://www.certik.com/resources/blog/hack3d-the-web3-security-report-2024](https://www.certik.com/resources/blog/hack3d-the-web3-security-report-2024)  
112. Hacking Losses Surge Thanks To Bybit, Cetus: CertiK | Crowdfund Insider, 访问时间为 七月 27, 2025， [https://www.crowdfundinsider.com/2025/07/243940-hacking-losses-surge-thanks-to-bybit-cetus-certik/](https://www.crowdfundinsider.com/2025/07/243940-hacking-losses-surge-thanks-to-bybit-cetus-certik/)  
113. DeFi hacks accounted for most of May's $302 million crypto losses: Certik | The Block, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/356608/defi-hacks-accounted-for-most-of-mays-302-million-crypto-losses-certik](https://www.theblock.co/post/356608/defi-hacks-accounted-for-most-of-mays-302-million-crypto-losses-certik)  
114. SUI Price Stuck Under $4 as $223M Cetus Hack Sparks Market Concerns \- Cryptomus, 访问时间为 七月 27, 2025， [https://cryptomus.com/blog/sui-price-stuck-under-4-as-223m-cetus-hack-sparks-market-concerns-news](https://cryptomus.com/blog/sui-price-stuck-under-4-as-223m-cetus-hack-sparks-market-concerns-news)  
115. Exposing Wallet Drainer Scammers: Zentoh & Co. \- CertiK, 访问时间为 七月 27, 2025， [https://www.certik.com/resources/blog/exposing-wallet-drainer-scammers-zentoh-and-co](https://www.certik.com/resources/blog/exposing-wallet-drainer-scammers-zentoh-and-co)  
116. How the CETUS hack impacts Sui \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=JphDNvSuirw](https://www.youtube.com/watch?v=JphDNvSuirw)  
117. Cetus — Sui Themed AMA Recap. Guests | by CetusProtocol \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@CetusProtocol/cetus-sui-themed-ama-recap-6b6400e249d5](https://medium.com/@CetusProtocol/cetus-sui-themed-ama-recap-6b6400e249d5)  
118. Gem Project Analysis\! \#DeFi on \#Sui & \#Aptos \#Blockchain Gem Project Cetus Protocol (CETUS) | Crypto Simbha on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/7054571661722](https://www.binance.com/en/square/post/7054571661722)  
119. Cetus \- Empower liquidity. Built for DeFi., 访问时间为 七月 27, 2025， [https://app.cetus.zone](https://app.cetus.zone)