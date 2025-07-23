

# **Kai Finance 深度投资评估报告：Sui生态中的高杠杆收益引擎**

## **I. 执行摘要**

### **项目概要**

Kai Finance是一个部署在Sui区块链上的下一代杠杆收益耕作（Leveraged Yield Farming）协议 1。它通过一个创新的双金库（Dual-Vault）系统，为不同风险偏好的投资者提供收益解决方案。该系统包括为寻求稳定被动收入的投资者设计的单资产金库（Single Asset Vaults），以及为追求高回报的活跃投资者设计的、可提供高达11倍杠杆的流动性提供者金库（Liquidity Provider Vaults）2。协议的核心吸引力在于其高杠杆能力、自动复利机制以及在Sui高性能网络上的资本效率 2。

### **核心发现与投资论点**

本报告经过深入调研，得出以下核心发现：Kai Finance是一个典型的高风险、高回报DeFi协议，其投资价值主要集中在通过杠杆策略获取超额收益以及对未来潜在空投的投机。然而，这种高回报潜力伴随着显著的智能合约风险、市场风险以及项目方在关键信息披露上的透明度问题。

核心投资论点是：对于能够深刻理解并主动管理杠杆清算、无常损失等复杂风险，且具备较高风险承受能力的资深DeFi投资者而言，Kai Finance提供了一个在Sui生态中获取超额收益的独特机会。但对于普通或风险规避型投资者，其固有的复杂性和不确定性构成了重大障碍。

### **机会与主要风险摘要**

| 类别 | 摘要 |  |  |
| :---- | :---- | :---- | :---- |
| **主要机会** | **高额年化收益（APY）**：通过杠杆LP金库，特定交易对的年化收益率（APR）可达三位数 4。 |  潜在空投：项目方暗示在总锁仓价值（TVL）达到1亿美元后可能发行代币，为早期参与者带来空投预期 5。 |  开发者生态：项目方提供了公开的TypeScript SDK和清算机器人示例，为有技术背景的投资者开辟了独特的参与和盈利渠道 6。 |
| **主要风险** | **安全审计信息矛盾**：项目在不同渠道发布的审计信息存在严重冲突，这是最重大的危险信号，暴露了其运营透明度和专业性的不足 3。 |  市场与清算风险：高杠杆极大地放大了市场波动风险，价格的剧烈变动可能导致用户头寸被迅速清算，造成本金永久损失 3。 |  无原生代币与治理：协议目前没有原生代币和去中心化治理机制，完全依赖中心化团队运营，存在单点故障和中心化风险。 |

### **最终投资等级与理由**

**投资等级：中立（Neutral）**

**理由：** Kai Finance提供了极具吸引力的杠杆收益机会和空投预期，其在Sui生态中的TVL增长也证明了其初步的产品市场契合度。然而，项目在安全审计信息披露上存在的严重矛盾，构成了无法忽视的信任风险。结合高杠杆策略固有的清算和无常损失风险，使得该项目的整体风险/回报状况趋于平衡。因此，我们给予“中立”评级，建议仅限于能够承担极端风险并具备深度DeFi操作经验的专业投资者在充分尽职调查后，以小部分资金参与。

---

## **II. 项目深度剖析：Kai Finance，Sui的杠杆收益引擎**

### **1\. 项目概述与价值定位**

#### **定义Kai Finance**

Kai Finance明确将自身定位为建立在Sui区块链网络上的“下一代杠杆收益平台” 1。其核心使命是为去中心化金融（DeFi）用户提供创新的收益耕作解决方案，同时满足被动投资者和主动交易者的需求 2。协议旨在通过简化的用户界面和自动化的收益优化策略，让用户能够“存入、放松、赚取”（Deposit. Relax. Earn.），从而降低参与复杂DeFi策略的门槛 9。

其核心价值主张围绕三个关键点展开：

1. **高杠杆**：提供高达11倍的杠杆，显著放大潜在收益 3。  
2. **自动复利**：所有金库的收益每30分钟自动进行再投资，实现收益最大化，无需用户手动操作 2。  
3. **资本效率**：利用Sui网络的高性能和低交易成本，优化资产的使用效率。

#### **澄清名称混淆**

在进行深入分析之前，必须首先澄清一个关键问题：市场上存在大量使用“KAI”作为代币符号或名称一部分的项目，这些项目与本次调研的目标——Sui链上的Kai Finance——**完全无关**。这些无关项目包括：

* **KardiaChain (KAI)**：一个专注于互操作性的区块链平台 10。  
* **Kinetix Finance (KAI)**：一个基于EVM链的、整合了AI功能的DeFi平台 13。  
* **Kaia (KAIA)**：由Klaytn和Finschia合并而成的区块链 16。  
* **各类Meme币及其他项目**：如Kai Ken (KAI), KAI INU (KAIINU), Kai Meme (KAI) 等 18。

这种命名上的高度重叠对Kai Finance的品牌建设和用户发现构成了潜在的障碍和风险，投资者在搜索信息时极易混淆。本报告的分析对象**仅限于**官方网站为 kai.finance 的Sui生态协议。

### **2\. 核心协议机制：双金库架构**

Kai Finance的架构核心是其双金库系统，旨在服务于两种截然不同的投资策略和风险偏好 2。

#### **单资产金库 (Single Asset Vaults, SAVs)**

* **机制**：用户存入单一类型的资产，例如SUI、USDC或USDT，以赚取被动收益。这些收益来源于协议内另一部分用户（即LP金库的杠杆耕作者）支付的借款利息 2。这本质上是一个点对池（Peer-to-Pool）的借贷市场，SAV的存款人是贷方。  
* **风险特征**：这被定位为一种低维护、被动型的投资策略。其最显著的优势在于**规避了无常损失（Impermanent Loss）**，因为金库中只持有单一资产，不存在资产对价格相对变动带来的损失风险 2。主要风险则在于协议的智能合约安全风险以及当借款需求下降时收益率降低的风险。

#### **流动性提供者金库 (Liquidity Provider, LP Vaults)**

* **机制**：此金库专为寻求更高回报的活跃用户设计。用户存入资产对（如SUI-USDC）作为抵押品，并从单资产金库中借入额外的资金，以建立一个杠杆化的流动性提供（LP）头寸 2。例如，一个用户可以存入价值100美元的资产，再借入价值200美元的资产，从而建立一个3倍杠杆（总头寸300美元）的LP仓位。  
* **杠杆水平**：协议为不同的资产对提供不同的最高杠杆率。对于价格波动相对稳定的资产对（如USDC-USDT），最高杠杆可达11倍。而对于波动性较高的资产对（如SUI-USDC），杠杆率则会相应降低，以控制风险 3。  
* **风险特征**：这是典型的高风险、高回报策略。它引入了多种复杂风险：  
  * **清算风险 (Liquidation Risk)**：当市场价格剧烈波动，导致用户抵押品的价值不足以支撑其债务时，其头寸将被强制清算，可能导致本金的永久性损失 3。  
  * **无常损失风险 (Impermanent Loss Risk)**：与所有LP头寸一样，当资产对中的两种资产价格发生相对变动时，LP头寸的价值可能会低于简单持有这两种资产的价值。杠杆会进一步放大无常损失的影响 2。

#### **共享特性**

* **自动复利**：无论是SAV还是LP金库，所产生的收益（利息或LP费用）都会每隔30分钟自动被协议重新投资到相应的头寸中，从而实现复利效应，最大化长期收益 2。  
* **风险管理工具**：协议声称内置了自动去杠杆（auto-deleveraging）和实时的头寸健康度提醒等机制，旨在帮助用户管理和降低清算风险 2。

### **3\. 链上表现分析：增长的叙事**

Kai Finance在链上数据的表现展示了一个快速增长的轨迹，这反映了其在Sui生态中获得了显著的早期关注。

* **总锁仓价值 (Total Value Locked, TVL)**：TVL是衡量DeFi协议规模和用户信任度的核心指标。Kai Finance的TVL经历了爆发式增长。数据显示，其TVL曾在短短一个月内增长超过2200%，从约100万美元增长至1270万美元 4。根据DeFiLlama的最新数据，该协议的TVL已稳定在  
  **4114万美元**左右 1。这一规模使其成为Sui生态系统中排名前列的DeFi协议之一，位列第11位 22，显示出强大的产品市场契合度。  
* **资产构成**：推动TVL增长的主要资产是Sui生态的核心资产，包括SUI、USDT和USDC。历史数据显示，SUI的存款额曾从12万美元增长到超过480万美元，而USDC的存款额则从零增长到超过300万美元，显示出用户对使用这些主流资产参与协议的强烈意愿 4。  
* **开发活动**：DeFiLlama的数据显示，该项目保持着持续但规模不大的开发活动，每周和每月的开发者数量约为2-3名，提交次数（commits）也维持在相似水平 1。最近一次代码提交发生在一个月前，这需要投资者保持关注，以确保项目仍在积极维护和迭代中。

#### **TVL增长可持续性质疑**

Kai Finance TVL的爆炸式增长固然令人印象深刻，但其背后的驱动力值得深思。这种增长是源于用户对协议长期价值的有机信任，还是由追求短期利益的“雇佣资本”（mercenary capital）所驱动？

分析显示，协议提供的高额年化收益率，特别是杠杆金库中动辄超过100%的APR（例如SUI-USDC池的APR在122%至312%之间）4，以及社区中关于未来可能发行代币并进行空投的强烈预期 5，是吸引资本流入的主要磁石。这意味着，当前的高TVL可能并不稳固。一旦市场环境变化导致收益率下降，或者空投预期兑现或落空，大量寻求短期高回报的流动性可能会迅速撤离，导致TVL大幅缩水。因此，在评估该项目时，不能仅看TVL的绝对值，更要理解其构成的脆弱性，并将其视为一项潜在的波动性风险。

---

## **III. 竞争与生态系统分析**

### **1\. Kai Finance在Sui DeFi生态中的定位**

Kai Finance已成为Sui DeFi生态系统中一个不容忽视的参与者。在DeFiLlama等数据平台的排名中，它时常与Suilend、NAVI Protocol、Cetus和Scallop等头部协议并列 22。

它的定位非常明确，属于“杠杆耕作”（Leveraged Farming）这一细分赛道 1。与提供通用借贷服务的协议不同，Kai Finance专注于为能够承受更高风险的用户提供放大收益的工具。其所在的Sui区块链，以其高性能、低延迟和可水平扩展的特性著称，为运行像Kai Finance这样需要快速清算和复杂计算的DeFi应用提供了理想的底层基础设施 25。

### **2\. 与主要竞争对手的正面比较**

在Sui生态中，Kai Finance面临着来自几个强大对手的竞争，它们在流动性、功能和用户基础上都具有优势。

* **Scallop Protocol (SCA)**：这是与Kai Finance关系最密切、最具可比性的竞争对手。Scallop是Sui上领先的货币市场协议，TVL超过1.08亿美元，并且是首个获得Sui基金会官方资助的DeFi项目，这为其提供了强大的信誉背书 29。至关重要的是，Scallop  
  **开源了其代码**，这直接促成了Kai Finance等项目的诞生 29。Scallop提供基础的借贷服务，并拥有其原生代币$SCA，该代币采用veToken模型（vote-escrowed token）来激励长期持有者和提升用户收益 30。  
* **NAVI Protocol (NAVX)**：作为Sui生态的“一站式流动性协议”，NAVI的TVL一度超过6亿美元，是生态系统中的巨头 22。NAVI的产品线更为广泛，整合了借贷、DEX聚合器和流动性质押（Liquid Staking）三大功能 36。它拥有原生代币$NAVX，并获得了OKX、Bybit等顶级交易所和Sui Network的投资，背景实力雄厚 36。相比之下，NAVI追求的是大而全的平台战略，而Kai Finance则专注于杠杆收益这一垂直领域。  
* **Suilend**：Suilend是Sui上另一个顶级的借贷协议，TVL一度超过6.5亿美元 22。其核心业务是简单的借贷，并通过引入SEND积分系统来激励用户，这强烈暗示了未来可能进行的空投计划，与Kai Finance的空投预期形成了直接竞争 38。

### **表格 3.1：Sui生态头部收益协议对比分析**

为了直观地评估Kai Finance的竞争地位，下表从多个维度对其与主要竞争对手进行了比较。这张表格的价值在于，它能帮助投资者清晰地识别Kai Finance的独特卖点（USP）及其相对的优劣势，从而回答一个核心问题：“在众多成熟的选项中，为什么我应该选择Kai Finance？”

通过结构化对比，我们可以发现，Kai Finance的核心差异化在于其对**高杠杆**的专注，这既是其吸引力所在，也是其风险来源。同时，其**没有原生代币**的现状，使其在激励机制和社区治理方面落后于竞争对手。

| 协议 | TVL (约) | 核心功能 | 原生代币 | 关键差异化 | 空投潜力 | 主要风险 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Kai Finance** | 4100万美元 1 | 杠杆收益耕作 | **无** | 专注于高达11倍的杠杆策略，双金库系统 | **高** (TVL达1亿美元后考虑发币) 5 | 审计信息不透明，高杠杆清算风险 |
| **Scallop Protocol** | 1.08亿美元 39 | 借贷市场 | **SCA** | 首个获Sui基金会资助，veSCA代币模型提升收益 30 | 中 (已有代币，但可能有新激励) | 市场竞争，代币价格波动 |
| **NAVI Protocol** | 6.27亿美元 22 | 综合流动性协议 (借贷, DEX聚合, LST) | **NAVX** | 生态系统最全面，获顶级机构投资 36 | 中 (已有代币，但可能有新激励) | 协议复杂性带来的合约风险 |
| **Suilend** | 6.56亿美元 22 | 借贷市场 | **无** | TVL领先，通过SEND积分系统明确激励早期用户 38 | **高** (积分系统明确指向空投) | 协议中心化，智能合约风险 |

---

## **IV. 技术架构与代码溯源**

### **1\. 基于Sui与Move语言的底层构建**

Kai Finance的技术基石是Sui区块链及其原生智能合约语言Move 40。Move语言的设计哲学将“安全”置于首位，其独特的资源模型（Resource Model）和所有权系统在语言层面旨在消除一整类常见的智能合约漏洞，例如重入攻击（Re-entrancy）和双花（Double-spending）31。这为Kai Finance提供了一个相对稳固和安全的底层环境。

项目方声称其智能合约是使用“惯用的Move”（idiomatic Move）编写的 3，这暗示开发团队对Move语言的最佳实践有深入的理解，并遵循了其设计范式。然而，需要强调的是，底层语言的安全性并不能完全豁免应用层逻辑错误的风险 42。

### **2\. 剖析与Scallop协议的关系：分叉、创新还是共生？**

分析Kai Finance的技术来源，无法绕开其与Sui头部借贷协议Scallop的关系。多个信息源证实，Scallop Protocol开源了其智能合约代码，并明确允许Kai Finance和SuiPearl等其他项目在其基础上进行构建 29。

这一关系具有双重含义：

* **积极层面**：Kai Finance的底层借贷逻辑建立在一个经过市场检验、获得Sui基金会资助且经过审计的成熟代码库之上。这在很大程度上降低了从零开始开发可能引入的未知技术风险，可以看作是站在了巨人的肩膀上。  
* **消极层面**：这也引发了关于Kai Finance原创性和长期护城河的质疑。它究竟是一个简单的代码分叉（Fork），仅更换了前端界面和参数，还是在Scallop的基础上进行了有意义的创新？从现有信息来看，Kai Finance的核心创新在于**专注于杠杆耕作这一细分领域**，并可能对Scallop的基础借贷模型进行了针对性的扩展和优化。这种依赖关系也意味着，如果Scallop的原始代码中存在任何未被发现的潜在漏洞，Kai Finance可能会一并继承这些风险。

### **3\. 核心智能合约逻辑一瞥**

Kai Finance协议的核心运作，包括杠杆的实现、收益的自动复利以及清算机制，均由其智能合约集群精确执行。根据项目方的描述，其机制涉及**集中流动性（Concentrated Liquidity）和保证金机制** 3，这通常意味着协议与一个或多个去中心化交易所（DEX）深度集成，以提供流动性并执行交易。

在流动性管理方面，协议设计了一个**10%的流动性缓冲池**，以确保单资产金库（SAVs）的储户能够随时提取资金。然而，项目方也坦承，在协议利用率极高的时期，即大量资金被借出用于杠杆耕作时，储户的提款可能会面临暂时的延迟 2。这是一个需要贷方用户注意的流动性风险。更深层次的技术细节，需要查阅其在Reddit帖子中提及的技术白皮书 3。

---

## **V. 全面风险与安全评估**

对任何DeFi协议的投资决策，都必须以严格的安全评估为前提。Kai Finance在此方面呈现出复杂且矛盾的信号，需要投资者给予最高级别的关注。

### **1\. 核心焦点：安全审计信息的矛盾**

这是本报告发现的最严重的危险信号。项目方在不同公开渠道上关于其安全审计状况的陈述存在直接冲突。

* **相互矛盾的证据**：  
  1. **声称已审计**：在一个Reddit社区的推广帖子中，一位与项目关联的用户明确表示，协议的智能合约“已经过审计”，并提供了指向知名Move生态安全公司**MoveBit**出具的两份PDF审计报告的直接链接。这两份报告分别针对“单资产金库”和“杠杆”核心组件 3。  
  2. **声称未审计**：然而，在开发团队Kuna Labs的官方GitHub代码库 sui-smart-contracts 中，却包含一条明确的免责声明，指出“代码未经审计”（the code has not been audited）8。  
* 调查与分析：  
  为了厘清这一矛盾，必须对两方面信息进行交叉验证。理想的流程是：首先，访问并下载上述PDF审计报告；其次，详细分析报告内容，记录审计的范围、发现的漏洞、修复建议以及最重要的——被审计代码的commit hash（代码版本号）；最后，将此commit hash与Kuna Labs的GitHub代码库的提交历史进行比对，以确认当前线上运行的代码是否与审计过的版本一致。  
* “信任鸿沟”作为实质性风险：  
  无论技术验证的结果如何，这种信息披露上的巨大差异本身就构成了一个重大的运营风险和信任风险。  
  1. **根源分析**：最善意的解释是，项目团队在运营和沟通上存在疏忽。GitHub上的免责声明可能是一个过时的模板，在完成审计后忘记移除。然而，也存在另一种更令人担忧的可能性：线上运行的代码在审计之后又进行了修改，导致免责声明在技术上是“正确”的，而Reddit上的帖子则具有误导性。  
  2. **对投资者的影响**：这种模糊性在投资者和项目方之间制造了一道“信任鸿沟”。对于一个将用户资金安全作为生命线的DeFi协议而言，如此不专业的沟通方式是不可接受的。它严重削弱了投资者对团队严谨性和透明度的信心。即便最终证实审计报告是真实且有效的，团队在公开文档管理上的失职行为也已经损害了其声誉。在最终的投资决策中，这一“信任风险”必须被赋予极高的权重。  
* **审计公司信誉**：MoveBit作为一家专注于Move生态的安全公司，在社区内享有良好声誉。它曾为多个Sui和Aptos上的重要项目提供审计服务，甚至帮助发现并修复了Sui官方跨链协议中的漏洞 43。这为审计报告本身的专业性提供了一定的保障，但并不能消除由项目方沟通混乱所带来的不确定性。

### **2\. 历史背景调查：审查Kuna Labs及其创始人**

* **开发团队**：Kai Finance由**Kuna Labs**团队开发 6。其GitHub代码库显示，该团队深度耕耘于Sui生态，其开源项目包括为Kai Finance开发的TypeScript SDK、一个清算机器人示例，以及一个旨在将MetaMask钱包接入Sui网络的Sui Snap工具 6。这表明团队具备较强的技术实力和生态贡献意愿。  
* **创始人背景**：团队创始人为**Krešimir Klas** 49。通过其公开的社交媒体（推特账号  
  @kklas\_ 和Medium博客）可以发现，他是一位热衷于技术的开发者，发表过多篇关于Move与Rust等智能合约语言对比的深度技术文章 40。更重要的是，他曾作为嘉宾出席Sui官方举办的开发者大会  
  **Sui Basecamp**，并与来自Suilend和Scallop等头部协议的创始人同台进行开发者座谈 47。  
* **评估**：创始人的公开身份以及与Sui官方生态的深度互动，在很大程度上降低了项目方匿名跑路（Rug Pull）的风险，为其信誉提供了一定的背书。然而，这并不能保证项目免于技术漏洞或商业失败的风险。创始人的技术声誉与团队在审计信息披露上的草率形成了鲜明对比，这也是评估中的一个矛盾点。

### **3\. 固有风险框架**

除了上述特定风险外，投资者还必须认识到Kai Finance所包含的DeFi协议固有风险。

* **智能合约与技术风险**：即使经过审计，任何复杂的智能合约系统都无法完全排除存在未知漏洞的风险 3。其对Scallop开源代码的依赖也可能成为继承性风险的来源。  
* **市场与系统性风险**：  
  * **杠杆与清算**：这是协议最核心的风险。高杠杆在放大收益的同时，也以同等倍数放大了亏损。市场的突然剧烈波动可能在短时间内触发大规模的强制清算，导致用户本金的永久性损失 3。  
  * **无常损失（IL）**：这是LP金库用户面临的另一大风险，尤其是在SUI-USDC这类波动性资产对中。当SUI价格相对于USDC大幅上涨或下跌时，LP头寸的价值增长会慢于单独持有这两种资产，甚至可能出现亏损。  
  * **预言机风险**：协议的清算机制高度依赖预言机（Oracle）提供的资产价格。如果预言机被操纵、数据延迟或发生故障，将导致错误的清算，给用户带来损失。Scallop协议采用了整合Pyth、Switchboard和SupraOracles的多预言机策略以增强安全性 53。Kai Finance是否继承或实现了同样稳健的预言机机制，是评估其安全性的一个关键点。  
* **中心化与治理风险**：  
  * **无DAO治理**：目前，Kai Finance没有发行原生代币，也未建立去中心化的自治组织（DAO）进行治理。协议的所有参数修改、金库增设、安全升级等关键决策完全由Kuna Labs中心化团队控制。这构成了严重的单点故障风险和中心化风险。  
  * **提款限制**：协议设计的10%流动性缓冲机制，意味着在极端情况下（如市场恐慌导致借贷需求激增），单资产金库的储户可能无法立即提出全部资金，面临流动性风险 2。

---

## **VI. KAI代币：一个未来的前景**

尽管Kai Finance目前没有原生代币，但对未来发行代币的预期是吸引用户和流动性的关键驱动力之一。本节将基于现有信息，对这一前景进行分析。

### **1\. 空投潜力分析**

* **触发条件**：项目方在其文档的FAQ部分明确提到，当协议的**总锁仓价值（TVL）达到1亿美元**后，团队将“开始考虑”发行代币 5。这是一个相对明确的、可量化的里程碑。  
* **当前进展**：以目前约4100万美元的TVL计算，该项目已经接近这个非正式目标的一半。这使得与协议的早期交互成为一种非常可行的空投耕作（Airdrop Farming）策略。  
* **社区与市场预期**：关于Kai Finance空投的讨论已经在社区中广泛传播。包括Bankless、MEXC等在内的加密媒体和平台，已将Kai Finance列为具有潜在空投机会的项目，并发布了相关的参与教程 5。这种市场预期本身就会吸引更多投机性流动性进入协议。  
* **资格获取方式**：根据这些教程和协议机制，获取潜在空投资格最直接的方式就是与协议进行深度交互，即向单资产金库或LP金库中存入资金并保持活跃 54。

### **2\. 未来代币的效用与价值捕获推演**

本部分内容具有推测性，但可以通过分析其竞争对手（如Scallop的SCA和NAVI的NAVX）的代币模型来进行合理推断。如果Kai Finance未来发行KAI代币，其可能具备以下核心效用：

* **治理（Governance）**：代币持有者将有权对协议的关键参数进行投票，例如调整杠杆率、利率模型、增加新的金库类型、以及决定协议财库资金的用途等。这是DeFi协议实现去中心化的标准路径。  
* **收益提升（Yield Boosting）**：极有可能引入**投票托管（Vote-Escrowed, ve）模型**，形成veKAI。用户通过锁定KAI代币获得veKAI，veKAI的数量和锁仓时间将决定其在协议中享受的收益加成。这与Scallop的veSCA机制类似 30，可以极大地激励用户借款或存款，从而提升协议的资本效率和TVL。  
* **费用分享（Fee Sharing）**：协议运营会产生收入（例如借贷利差、清算罚金等）。一部分协议收入可能会被分配给KAI代币的质押者，使代币能够直接捕获协议的增长价值。

---

## **VII. 社区信任与市场情绪**

### **1\. 数字足迹与团队互动**

* **官方渠道**：对项目官方网站（kai.finance）、推特和Discord等渠道的持续监控是评估其运营健康度的关键 1。团队的活跃度、对社区问题的回应速度和透明度，都是衡量其专业性的重要指标。  
* **创始人公众形象**：创始人Krešimir Klas在推特（@kklas\_）和Medium等平台保持着技术专家的公开形象，这为项目提供了一定程度的公众问责制 40。  
* **线下活动**：项目团队曾通过举办“Sui越南见面会”等线下活动与社区成员直接交流，这有助于建立更紧密的社区关系和信任 57。

### **2\. 媒体叙事与社交情绪**

* **新闻与文章**：Kai Finance在加密货币媒体中的曝光，主要集中于其TVL的快速增长，并被普遍视为Sui生态中一个有潜力的新兴项目 4。叙事基调总体偏向积极，但多为描述性报道，缺乏深度批判性分析。  
* **Reddit社区情绪**：在r/defi等社区，关于Kai Finance的讨论主要围绕其高收益策略展开。项目方关联人员发布的推广帖子（尽管存在审计信息问题）为社区提供了包括审计报告和白皮书在内的关键信息链接，起到了一定的信息分发作用 3。总体情绪是机会与风险并存，用户普遍被高收益吸引，但也有对杠杆风险的担忧。  
* **综合情绪评估**：当前市场情绪的主要驱动力是**高收益预期**和**空投预期**。这是一个双刃剑，它为项目带来了早期的流动性和关注度，但也使其用户基础可能不够稳定。目前最大的负面情绪信号源于前文详述的**审计信息披露矛盾**，这在注重安全的资深DeFi用户群体中造成了疑虑。

---

## **VIII. 投资机会实用指南**

本节将所有分析综合为针对不同类型投资者的具体、可操作的投资策略。

### **1\. 投资机会矩阵**

下表详细列出了参与Kai Finance的几种主要途径，并对每种策略的风险、回报和适用人群进行了剖析。此表格旨在为投资者的决策提供一个清晰的框架，帮助其根据自身的资金状况、技术能力和风险偏好，选择最合适的参与方式。

### **表格 8.1：Kai Finance投资机会分解**

| 策略名称 | 具体操作 | 预期APY/回报 | 优势 | 劣势/主要风险 | 投资者画像 |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **被动收益 \- 单资产金库 (SAV)** | 在协议中存入单边资产，如USDC、USDT或SUI。 | 稳定币APY约为**13.57%** (以USDC为例) 58。 | 1\. 操作简单，低维护成本。 2\. 无无常损失风险。 3\. 相对安全的被动收入来源。 | 1\. 收益率相对较低，存在机会成本。 2\. 存在协议智能合约风险。 3\. 极端情况下可能出现提款延迟 2。 | 风险规避型、寻求稳定收益的DeFi投资者。 |  |
| **主动收益 \- 杠杆LP金库** | 提供资产对（如SUI-USDC），并选择合适的杠杆倍数（如3x）建立LP头寸。 | 高波动性，APR可达**122% \- 312%** (以SUI-USDC为例) 4。 | 1\. 极高的潜在回报，资本效率最大化。 2\. 可深度参与DeFi乐高组合。 | 1\. **极高的风险**，包括**强制清算**和**杠杆放大的无常损失** 3。 |  2\. 需要持续监控头寸健康度，操作复杂。 | 风险承受能力极高、经验丰富的资深DeFi交易员。 |
| **策略性空投耕作** | 与协议进行多方面交互，如在多个金库中存入少量资金，保持长期活跃度。 | 回报不确定，但潜在空投价值可能很高（参考其他头部协议）。 | 1\. 以较小本金博取高额回报的潜力。 2\. 参与Sui生态的早期建设。 | 1\. 空投不保证发生，可能浪费时间和Gas费。 2\. 空投规则未知，可能无法满足快照条件。 | 投机型投资者，专业的“空投猎人”。 |  |
| **开发者生态参与** | 1\. 使用官方TS-SDK构建工具。 2\. 部署和运行清算机器人。 | 1\. 工具可能无直接回报。 2\. 清算机器人可赚取清算罚金（通常为债务的5-10%）。 | 1\. 独特的盈利渠道，竞争较少。 2\. 深度理解协议机制，可能获得团队关注或额外奖励。 | 1\. 需要专业的编程和开发能力。 2\. 运行机器人需要技术维护和资金成本。 3\. 清算市场存在竞争。 | **具备开发背景的投资者**，寻求非传统Alpha收益。 |  |

### **2\. 开发者专属参与途径：一个独特的视角**

鉴于您具备开发背景，Kai Finance提供了超越普通用户的独特参与和盈利机会。

* **利用kai-ts-sdk进行二次开发**：Kuna Labs在GitHub上开源了名为@kunalabs-io/kai的TypeScript SDK 6。这个工具包允许开发者通过代码与Kai Finance协议进行编程交互。您可以利用它来：  
  * **构建自定义监控面板**：实时跟踪您自己或协议整体的头寸健康度、TVL、利率变化等关键指标。  
  * **开发自动化策略**：编写脚本，根据预设条件（如健康因子低于某个阈值）自动增加抵押品、降低杠杆或平仓，实现更精细的风险管理。  
  * 数据分析与套利：通过SDK获取链上数据，分析利率变化规律，寻找潜在的套利机会。  
    其代码库中提供的获取金库统计数据和钱包信息的示例代码，是您上手的绝佳起点 7。  
* **运行清算机器人赚取收益**：项目方直接提供了一个kai-liquidation-bot-example代码库 6，这无异于向社区开发者发出了参与协议清算、维护系统健康的邀请。清算是DeFi借贷协议重要的组成部分。当某个用户的抵押物价值不足以覆盖其债务时，清算人可以介入，代为偿还部分债务，并以折扣价获得该用户的部分抵-押品。这其中的差价，即  
  **清算罚金**，就是清算机器人的利润来源。通过部署和运行自己的清算机器人，您不仅能为协议的稳定性做出贡献，还能开辟一个潜在的、与市场方向无关的收入来源。

---

## **IX. 最终结论与战略建议**

### **综合发现与SWOT分析**

在对Kai Finance进行全面深入的剖析后，可将其核心要素总结为以下SWOT分析：

* **优势 (Strengths)**：  
  * **高收益潜力**：核心产品——杠杆收益金库，提供了市场上极具竞争力的年化收益率。  
  * **TVL快速增长**：在短时间内吸引了可观的流动性，证明了其对特定用户群体的吸引力。  
  * **公开的创始人**：创始人Krešimir Klas在Sui生态中具有一定的知名度和技术声誉，降低了匿名团队跑路的风险。  
  * **技术基础扎实**：构建于高性能的Sui链和安全的Move语言之上，并借鉴了成熟的Scallop协议代码。  
* **劣势 (Weaknesses)**：  
  * **审计信息混乱**：在审计状态上的公开信息自相矛盾，严重损害了项目的透明度和可信度。  
  * **无代币与去中心化治理**：协议目前完全由中心化团队控制，缺乏社区治理机制，存在单点故障风险。  
  * **原创性存疑**：核心代码建立在Scallop的开源项目之上，长期来看可能缺乏足够宽的护城河。  
* **机会 (Opportunities)**：  
  * **明确的空投预期**：项目方设定的1亿美元TVL发币里程碑，为早期参与者提供了强烈的空投预期。  
  * **开发者生态**：开放的SDK和清算机器人示例为技术型用户提供了独特的参与和盈利途径。  
  * **Sui生态增长红利**：作为Sui生态的一部分，Kai Finance将受益于整个生态系统的用户和资本增长。  
* **威胁 (Threats)**：  
  * **市场剧烈波动**：加密市场的高波动性是杠杆策略的天敌，可能引发大规模清算事件。  
  * **激烈的同赛道竞争**：面临来自Scallop、NAVI、Suilend等资金实力更雄厚、产品线更全面的对手的激烈竞争。  
  * **监管不确定性**：全球对DeFi，特别是高杠杆衍生品协议的监管政策尚不明朗，存在潜在的合规风险。

### **投资等级推荐：中立 (Neutral)**

### **详细理由与最终建议**

综合考量Kai Finance的巨大收益潜力和同等显著的多维度风险，本报告最终给予\*\*“中立”\*\*的投资等级。

这一评级的核心逻辑是：**项目的潜在回报（高APY \+ 空投）虽然诱人，但其在最关键的安全透明度环节存在重大瑕疵，同时叠加了杠杆策略本身固有的极端市场风险。**

**对于寻求投资的您，我们提出以下战略建议：**

1. **将安全透明度作为决策的首要前提**：在项目方Kuna Labs就其审计状况给出清晰、一致且可验证的公开声明之前，任何大规模的资金投入都应被视为高风险赌博。建议您通过其官方Discord或Twitter渠道，直接向团队质询此问题。  
2. **风险分层，小额参与**：如果您决定参与，务必将Kai Finance视为投资组合中风险最高的一档。建议使用**小额、可承受完全损失的资金**进行尝试。可以采取分层策略：  
   * **低风险层**：将少量稳定币（如USDC）存入**单资产金库**，体验协议的基本运作，同时累积空投权重。此策略风险相对可控。  
   * **高风险层**：如果您对杠杆耕作有深刻理解，可以尝试用极小部分资金在**LP金库**中开启一个低杠杆（如2x-3x）的头寸，切忌追求最大杠杆。  
3. **发挥您的技术优势**：对您而言，最具吸引力的机会可能并非直接存贷，而是**参与其开发者生态**。研究其TS-SDK，尝试构建一个头寸监控工具；或者更进一步，分析并部署一个清算机器人。这不仅能让您以更低的资本风险参与其中，还能从一个独特的维度获取潜在收益和对协议的深度理解。

**总结**：Kai Finance是一个充满矛盾的协议。它既有成为Sui生态“收益放大器”的潜力，也展现出初创项目在运营专业性上的不足。在当前的状况下，它更适合被看作一个高风险的实验场，而非一个稳健的价值投资标的。对于具备专业知识和风险管理能力的投资者，它可以是一个值得小额探索的“Alpha”机会；但对于任何其他人，保持观望是更为审慎的选择。

#### **引用的著作**

1. Kai Finance \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/kai-finance](https://defillama.com/protocol/kai-finance)  
2. Kai Finance | Leveraged Yield Platform | SUI Blockchain \- DAIC Capital, 访问时间为 七月 13, 2025， [https://daic.capital/ecosystem/sui/kai-finance-leveraged-yield-platform-sui](https://daic.capital/ecosystem/sui/kai-finance-leveraged-yield-platform-sui)  
3. Kai Finance \- Leveraged Yield Platform on the Sui Network : r/defi \- Reddit, 访问时间为 七月 13, 2025， [https://www.reddit.com/r/defi/comments/1h9rlez/kai\_finance\_leveraged\_yield\_platform\_on\_the\_sui/](https://www.reddit.com/r/defi/comments/1h9rlez/kai_finance_leveraged_yield_platform_on_the_sui/)  
4. Kai Finance, a leveraged yield platform on the Sui blockchai | NFT Angels on Binance Square, 访问时间为 七月 13, 2025， [https://www.binance.com/en/square/post/16720095424809](https://www.binance.com/en/square/post/16720095424809)  
5. Kai Finance Airdrop Guide: How to Qualify for Potential Rewards \- Bankless, 访问时间为 七月 13, 2025， [https://www.bankless.com/es/airdrops/kai-finance](https://www.bankless.com/es/airdrops/kai-finance)  
6. Kuna Labs \- GitHub, 访问时间为 七月 13, 2025， [https://github.com/kunalabs-io](https://github.com/kunalabs-io)  
7. kunalabs-io/kai-ts-sdk: TypeScript SDK for interacting with the Kai Finance protocol \- GitHub, 访问时间为 七月 13, 2025， [https://github.com/kunalabs-io/kai-ts-sdk](https://github.com/kunalabs-io/kai-ts-sdk)  
8. kunalabs-io/sui-smart-contracts \- GitHub, 访问时间为 七月 13, 2025， [https://github.com/kunalabs-io/sui-smart-contracts](https://github.com/kunalabs-io/sui-smart-contracts)  
9. Kai Finance \- DeFi Overview, TVL Analysis \- DappRadar, 访问时间为 七月 13, 2025， [https://dappradar.com/dapp/kai-finance](https://dappradar.com/dapp/kai-finance)  
10. KardiaChain Price USD, KAI Price Live Charts, Market Cap & News \- Bitget, 访问时间为 七月 13, 2025， [https://www.bitget.com/price/kardiachain](https://www.bitget.com/price/kardiachain)  
11. KardiaChain price today, KAI to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/kardiachain/](https://coinmarketcap.com/currencies/kardiachain/)  
12. KardiaChain | Accessible Blockchain For Millions, 访问时间为 七月 13, 2025， [https://kardiachain.io/](https://kardiachain.io/)  
13. Kinetix Finance Token Price: KAI Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 13, 2025， [https://www.bybit.com/en/price/kinetixfi/](https://www.bybit.com/en/price/kinetixfi/)  
14. Kinetix Finance Token Price, KAI Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 13, 2025， [https://www.coinbase.com/price/kinetixfi](https://www.coinbase.com/price/kinetixfi)  
15. Kinetix Finance Token price today, KAI to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/kinetixfi/](https://coinmarketcap.com/currencies/kinetixfi/)  
16. kaiachain/awesome-kaia: This page introduces all links related to kaia's core development and ecosystem \- GitHub, 访问时间为 七月 13, 2025， [https://github.com/kaiachain/awesome-kaia](https://github.com/kaiachain/awesome-kaia)  
17. Kaia, 访问时间为 七月 13, 2025， [https://www.kaia.io/](https://www.kaia.io/)  
18. Kai Ken Price (KAI), Market Cap, Price Today & Chart History \- Blockworks, 访问时间为 七月 13, 2025， [https://blockworks.co/price/kai](https://blockworks.co/price/kai)  
19. Kai Ken Price: KAI Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 13, 2025， [https://www.bybit.com/en/price/kai-ken/](https://www.bybit.com/en/price/kai-ken/)  
20. KAI INU price today, KAIINU to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/kai-inu/](https://coinmarketcap.com/currencies/kai-inu/)  
21. Kai Meme price today, KAI to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/kai-meme/](https://coinmarketcap.com/currencies/kai-meme/)  
22. Sui \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/chain/Sui](https://defillama.com/chain/Sui)  
23. Sui \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/chain/sui](https://defillama.com/chain/sui)  
24. Top Protocols by Chain \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/top-protocols](https://defillama.com/top-protocols)  
25. Sui Blockchain: Powering The Future Of Web3 \- Bitso Blog, 访问时间为 七月 13, 2025， [https://blog.bitso.com/bitso/sui-the-next-generation-of-web3](https://blog.bitso.com/bitso/sui-the-next-generation-of-web3)  
26. Sui | Deliver the Benefits of Web3 with the Ease of Web2, 访问时间为 七月 13, 2025， [https://sui.io/](https://sui.io/)  
27. SUI Token Supply and Circulation, 访问时间为 七月 13, 2025， [https://sui.io/token-schedule](https://sui.io/token-schedule)  
28. BTCfi on Sui | Earn Yield on Your Bitcoin, 访问时间为 七月 13, 2025， [https://sui.io/btcfi-bitcoin-defi-on-sui](https://sui.io/btcfi-bitcoin-defi-on-sui)  
29. Scallop \- Decentralized Finance \- IQ.wiki, 访问时间为 七月 13, 2025， [https://iq.wiki/wiki/scallop](https://iq.wiki/wiki/scallop)  
30. What Is Scallop? Sui's Top DeFi Lending Protocol with $SCA Token and veSCA Rewards, 访问时间为 七月 13, 2025， [https://learn.backpack.exchange/articles/what-is-scallop-institutional-grade-defi-lending-on-sui](https://learn.backpack.exchange/articles/what-is-scallop-institutional-grade-defi-lending-on-sui)  
31. Scallop price today, SCA to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/scallop-protocol/](https://coinmarketcap.com/currencies/scallop-protocol/)  
32. Scallop Protocol on Sui Raises $3M From CMS Holdings, 6th Man Ventures, Kucoin Labs & UOB Venture \- Decrypt, 访问时间为 七月 13, 2025， [https://decrypt.co/220005/scallop-protocol-on-sui-raises-3m-from-cms-holdings-6th-man-ventures-kucoin-labs-uob-venture](https://decrypt.co/220005/scallop-protocol-on-sui-raises-3m-from-cms-holdings-6th-man-ventures-kucoin-labs-uob-venture)  
33. Scallop Protocol on Sui raises $3M from CMS Holdings, 6th Man Ventures, Kucoin Labs & UOB Venture \- Cointelegraph, 访问时间为 七月 13, 2025， [https://cointelegraph.com/press-releases/scallop-protocol-on-sui-raises-3m-from-cms-holdings-6th-man-ventures-kucoin-labs-uob-venture](https://cointelegraph.com/press-releases/scallop-protocol-on-sui-raises-3m-from-cms-holdings-6th-man-ventures-kucoin-labs-uob-venture)  
34. Detailed explanation of scallop, a good place to mine on Sui, with a maximum return of 100% and a basic return of 40%+ | 链研社lianyanshe on Binance Square, 访问时间为 七月 13, 2025， [https://www.binance.com/en/square/post/20744110415937](https://www.binance.com/en/square/post/20744110415937)  
35. NAVI Protocol \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/navi-protocol](https://defillama.com/protocol/navi-protocol)  
36. NAVI Protocol is the first native liquidity protocol in the Sui ecosystem. | 10 on Binance Square, 访问时间为 七月 13, 2025， [https://www.binance.com/en/square/post/22278039037321](https://www.binance.com/en/square/post/22278039037321)  
37. NAVI Protocol: Sui's Leading DeFi Hub for Lending, Staking & Trading (2025) \- Backpack Learn, 访问时间为 七月 13, 2025， [https://learn.backpack.exchange/articles/what-is-navi](https://learn.backpack.exchange/articles/what-is-navi)  
38. "SUI Yield Secrets: Unlock Your Crypto Profits Now\!", 访问时间为 七月 13, 2025， [https://yield-quest.beehiiv.com/p/sui-yield-secrets-unlock-your-crypto-profits-now](https://yield-quest.beehiiv.com/p/sui-yield-secrets-unlock-your-crypto-profits-now)  
39. Scallop, 访问时间为 七月 13, 2025， [https://scallop.io/](https://scallop.io/)  
40. Sui and Move: The Dynamic Duo Shaping the Future of Digital Assets \- Medium, 访问时间为 七月 13, 2025， [https://medium.com/@silverhard/sui-and-move-the-dynamic-duo-shaping-the-future-of-digital-assets-6681c926a384](https://medium.com/@silverhard/sui-and-move-the-dynamic-duo-shaping-the-future-of-digital-assets-6681c926a384)  
41. Krešimir Klas \- Smart Contract Development — Move vs. Rust (Highlights) \- \~iany/kb, 访问时间为 七月 13, 2025， [https://kb.iany.me/robot/Readwise+Library/Articles/Kre%C5%A1imir+Klas+-+Smart+Contract+Development%E2%80%8A%E2%80%94%E2%80%8AMove+vs.+Rust+(Highlights)](https://kb.iany.me/robot/Readwise+Library/Articles/Kre%C5%A1imir+Klas+-+Smart+Contract+Development%E2%80%8A%E2%80%94%E2%80%8AMove+vs.+Rust+\(Highlights\))  
42. Analysis of Sui Contract Security and Ecosystem challenges \- Gate.com, 访问时间为 七月 13, 2025， [https://www.gate.com/learn/articles/analysis-of-sui-contract-security-and-ecosystem-challenges/5112](https://www.gate.com/learn/articles/analysis-of-sui-contract-security-and-ecosystem-challenges/5112)  
43. Greater Ecosystem Security Through Audits and Move Registry \- The Sui Blog, 访问时间为 七月 13, 2025， [https://blog.sui.io/security-audits-and-move-registry/](https://blog.sui.io/security-audits-and-move-registry/)  
44. MoveBit \- Sui Directory, 访问时间为 七月 13, 2025， [https://sui.directory/project/movebit/](https://sui.directory/project/movebit/)  
45. MoveBit：Pioneer in Move Security | Move Smart Contract Security Audit Service for Aptos and Sui, 访问时间为 七月 13, 2025， [https://www.movebit.xyz/](https://www.movebit.xyz/)  
46. MoveBit Completes Security Audits for Streamflow Finance on Sui and Aptos Protocols, 访问时间为 七月 13, 2025， [https://www.movebit.xyz/blog/post/MoveBit-Streamflow-audit.html](https://www.movebit.xyz/blog/post/MoveBit-Streamflow-audit.html)  
47. developer experience | Kuna Labs, Suilend & Scallop at Sui Basecamp 2024 \- YouTube, 访问时间为 七月 13, 2025， [https://www.youtube.com/watch?v=D6bamwa38ZY](https://www.youtube.com/watch?v=D6bamwa38ZY)  
48. Kuna Labs and Sayfer Enable 30 Million MetaMask Users to Enter the Sui Network Securely, 访问时间为 七月 13, 2025， [https://chainwire.org/2024/02/07/kuna-labs-and-sayfer-enable-30-million-metamask-users-to-enter-the-sui-network-securely/](https://chainwire.org/2024/02/07/kuna-labs-and-sayfer-enable-30-million-metamask-users-to-enter-the-sui-network-securely/)  
49. Sui Basecamp | Sui's Inaugural Flagship Conference, 访问时间为 七月 13, 2025， [https://sui.io/basecamp-copy](https://sui.io/basecamp-copy)  
50. Medium, 访问时间为 七月 13, 2025， [https://medium.com/@BlockRunner/following](https://medium.com/@BlockRunner/following)  
51. Solana para Desenvolvedores Sem Experiência em Contratos Inteligentes \- WEB3DEV, 访问时间为 七月 13, 2025， [https://pt.w3d.community/paulogio/solana-para-desenvolvedores-sem-experiencia-em-contratos-inteligentes-1mbh](https://pt.w3d.community/paulogio/solana-para-desenvolvedores-sem-experiencia-em-contratos-inteligentes-1mbh)  
52. the next evolution in Move | Tim Zakian at Sui Basecamp 2024 \- YouTube, 访问时间为 七月 13, 2025， [https://www.youtube.com/watch?v=fZfnLwVlQmM](https://www.youtube.com/watch?v=fZfnLwVlQmM)  
53. Everything You Need to Know About Scallop (SCA) \- Gate.com, 访问时间为 七月 13, 2025， [https://www.gate.com/learn/articles/everything-you-need-to-know-about-scallop/4840](https://www.gate.com/learn/articles/everything-you-need-to-know-about-scallop/4840)  
54. Missed the Walrus airdrop? Don't worry, there are 5 more Sui ecological projects worth participating in | MEXC News, 访问时间为 七月 13, 2025， [https://www.mexc.com/news/157](https://www.mexc.com/news/157)  
55. The Ultimate Guide To Crypto, 访问时间为 七月 13, 2025， [https://www.bankless.com/](https://www.bankless.com/)  
56. 访问时间为 一月 1, 1970， [https.daic.capital/ecosystem/sui/kai-finance-leveraged-yield-platform-sui](http://docs.google.com/https.daic.capital/ecosystem/sui/kai-finance-leveraged-yield-platform-sui)  
57. Sui Vietnam Meetup: Kai Finance – Navigating DeFi with Confidence \- Luma, 访问时间为 七月 13, 2025， [https://lu.ma/86lp6c59](https://lu.ma/86lp6c59)  
58. USDC(Kai Finance \- Sui) \- Yield Chart \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/yields/pool/1213b66c-82c8-4085-9047-6c962f5479a0](https://defillama.com/yields/pool/1213b66c-82c8-4085-9047-6c962f5479a0)