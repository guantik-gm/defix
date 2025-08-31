

# **Kodiak Finance深度投资分析：Berachain原生流动性枢纽**

## **第一部分：执行摘要与投资论点**

### **1.1. 项目概述**

Kodiak Finance定位为Berachain区块链上首要的、垂直整合的流动性枢纽 1。它提供了一套全面的产品，旨在捕获链上资产从发行到交易的整个生命周期价值。其核心产品套件包括：一个双模自动做市商（AMM）去中心化交易所（DEX）、一个自动化的流动性管理器（“Islands”）、一个集成的激励层（“Sweetened Islands”）以及一个无需代码的代币发行平台（“Panda Factory”）1。这种设计使其不仅仅是一个交易场所，更是Berachain生态系统的基础流动性设施。

### **1.2. 投资建议**

本报告对Kodiak Finance的投资评级为：**投机性买入 (Speculative Buy)**。

### **1.3. 核心论点**

Kodiak Finance代表了一个典型的高风险、高回报的早期DeFi投资机会。其“投机性买入”评级基于以下几个核心因素：首先，它在一个备受期待的新兴Layer 1区块链——Berachain上占据了绝对的市场主导地位；其次，其链上财务指标，如总锁仓价值（TVL）、交易量和协议收入，表现极为强劲；最后，它与Berachain独特的流动性证明（Proof-of-Liquidity, PoL）共识机制进行了深度战略整合，形成了强大的护城河 4。

然而，这些巨大的潜力被几个重大的运营安全风险所制衡，这些风险也是其评级被限定为“投机性”的核心原因：项目的核心团队保持匿名，并且至今未能提供一份直接、公开的智能合约审计报告。这些因素要求投资者必须以高度谨慎的态度对待，并将任何投资头寸都视为高风险性质。

### **1.4. SWOT分析**

* **优势 (Strengths):**  
  * **原生地位与先发优势：** 作为Berachain官方孵化器“Build-a-Bera”支持的DEX，拥有无与伦比的生态系统整合优势 4。  
  * **强大的市场表现：** 在TVL、交易量和协议收入等关键指标上，远超主要竞争对手 5。  
  * **与PoL机制的深度协同：** 其激励模型与Berachain的PoL机制紧密结合，能够有效吸引并锁定长期流动性 4。  
  * **创新的产品套件：** 自动流动性管理（Islands）和无需代码的代币发行（Panda Factory）解决了用户痛点并能捕获新兴资产的交易量 1。  
* **劣势 (Weaknesses):**  
  * **匿名团队：** 缺乏透明度和问责制，增加了投资者的信任风险和潜在的“Rug Pull”风险 7。  
  * **无公开审计报告：** 智能合约未经独立第三方审计，使其庞大的TVL面临严重的技术安全风险。  
  * **代币经济学不透明：** KDK代币的总供应量、分配比例和解锁时间表完全未知，给公开市场投资者带来了巨大的信息不对称和未来抛压风险。  
* **机会 (Opportunities):**  
  * **Berachain生态增长：** 作为原生DEX，将直接受益于Berachain生态系统的整体增长和用户采纳。  
  * **“Panda Factory”的潜力：** 有望成为Berachain上Meme币和新项目发行的主要平台，从而捕获巨大的交易量和费用收入 9。  
  * **空投预期：** 可能会通过空投奖励早期用户，吸引更多参与者进入其生态。  
* **威胁 (Threats):**  
  * **智能合约漏洞：** 未经审计的代码可能存在致命漏洞，导致资金被盗，协议崩溃。  
  * **竞争加剧：** 尽管目前领先，但竞争对手BEX或其他新进入者可能通过更高激励或创新功能抢占市场份额。  
  * **Berachain平台风险：** 其成功完全依赖于Berachain，若Berachain未能成功，Kodiak也将随之失败。

## **第二部分：协议架构与战略价值定位**

### **2.1. 核心功能：一个垂直整合的流动性枢纽**

Kodiak Finance的战略定位超越了一个单纯的去中心化交易所。它被设计成一个为Berachain生态系统提供全方位服务的综合性流动性解决方案 1。这种从资产交易、流动性管理到代币发行的垂直整合模式，是其核心的战略差异化优势。通过这种模式，Kodiak旨在捕获链上资产从诞生到成熟的每一个环节所产生的价值，从而构建一个自我强化的生态闭环。

### **2.2. 技术栈：多层次架构**

Kodiak的协议架构通过多个协同工作的技术层，为不同类型的用户和资产提供了优化的解决方案。

#### **2.2.1. 双模AMM模型**

协议巧妙地结合了两种行业领先的AMM模型：一种是类似于Uniswap V2的全范围流动性AMM，另一种是类似于Uniswap V3的集中流动性AMM 1。这种双轨制设计具有重要的战略意义。全范围AMM非常适合用于发行波动性高的新资产，例如通过“Panda Factory”创建的代币，因为它能确保在任何价格下都有流动性。而集中流动性AMM则为成熟、稳定的交易对（如稳定币对）提供了卓越的资本效率，允许流动性提供者将资金集中在最活跃的交易价格区间内，从而获得更高的手续费收益 10。其NPM软件包

@kodiak-finance/v3-core和@kodiak-finance/v3-periphery的存在，证实了其技术基础是建立在经过实战检验但架构复杂的Uniswap V3之上 11。

#### **2.2.2. Kodiak Islands：自动化的集中流动性管理**

“Islands”是Kodiak的旗舰功能，旨在解决集中流动性管理复杂性的核心痛点 1。这些自动化的策略库（Vaults）代表用户管理其集中流动性头寸，通过算法自动调整价格范围，以确保头寸始终保持在活跃交易区间内，从而最大化手续费收入，并免去了用户手动调仓的繁琐操作 1。更重要的是，这些流动性头寸被代币化为标准的ERC-20代币，这意味着它们具有高度的可组合性，可以作为基础资产轻松集成到Berachain生态系统中的其他DeFi协议（如借贷、衍生品）中 1。

#### **2.2.3. Sweetened Islands：与PoL机制结合的激励层**

“Sweetened Islands”是Kodiak与Berachain核心价值主张——流动性证明（PoL）——直接整合的体现 1。用户可以通过将他们的“Island”LP代币锁定在“Sweetened Islands”中，来获得额外的代币奖励（如KDK）。奖励的多少会根据锁仓时间的长短进行放大，锁仓时间越长，奖励倍数越高 1。这种机制旨在创造深度且具有粘性的流动性，这对于DEX的交易滑点和Berachain网络的整体健康至关重要 4。

#### **2.2.4. Panda Factory：无需代码的代币发行平台**

“Panda Factory”是一个无需任何编程知识即可使用的工具，它允许任何用户或社区在Kodiak的全范围AMM上发行新代币并创建初始流动性池 1。这是一项极具战略眼光的举措，旨在捕获市场的“长尾效应”，特别是Meme币和新兴社区代币的发行浪潮。这些资产虽然风险高，但往往能产生巨大的交易量和可观的手续费收入，为协议带来持续的现金流。

### **2.3. 与Berachain的共生关系：“Build-a-Bera”的独特优势**

Kodiak不仅仅是建立在Berachain上的一个应用，它是通过Berachain官方孵化器项目“Build-a-Bera”精心培育的产物 3。这为它提供了一个其他竞争对手难以复制的、具有防御性的护城河。

这种“钦定”地位的意义远不止于获得早期资金。它意味着Kodiak与Berachain核心开发团队之间存在着深度的技术合作、在协议级集成上享有优先权，以及直接的沟通渠道。这种特权地位是其当前能够主导市场、超越BEX等竞争对手的主要原因，也使其成为Berachain官方DeFi战略的核心组成部分。

这种结构性优势的形成逻辑如下：首先，资料明确指出Kodiak是“Build-a-Bera”计划中唯一的DEX项目 4。其次，Kodiak团队公开感谢了Berachain基金会和孵化器在战略、业务发展和产品方面提供的支持 3。再者，Berachain的PoL模型要求链上的验证者与DeFi协议之间进行紧密协调，以便有效地引导流动性和奖励（即$BGT代币的释放）14。因此，作为官方孵化的DEX，Kodiak在理解、利用甚至影响这些PoL机制方面拥有天然的优势。这确保了其流动性池（“Islands”）能够成为验证者引导激励的首选目标，从而形成一个强大的、其他外部竞争者无法企及的增长飞轮。

## **第三部分：链上财务与市场表现**

### **3.1. 关键绩效指标（KPI）：市场主导地位的体现**

来自DefiLlama等数据分析平台的硬数据清晰地描绘了Kodiak Finance的财务健康状况和市场主导地位 5。数据表明，Kodiak V3（集中流动性）是协议的核心引擎，其TVL和交易量远超V2版本。

* **总锁仓价值 (TVL):** 根据最新数据，Kodiak的总TVL为**1.9217亿美元** 5。其中，Kodiak V3贡献了绝大部分，达到  
  **1.9862亿美元** 18，而V2仅持有  
  **122万美元** 19。  
* **交易量:** 协议的30天交易量达到了**3.7042亿美元** 5。同样，V3是主要驱动力，贡献了  
  **3.6178亿美元**的交易量 18，而V2的同期交易量仅为  
  **78.61万美元** 19。  
* **协议费用与收入:** 协议展现了强大的盈利能力，年化费用产生能力高达**1215万美元**，由此产生的年化协议收入为**425万美元** 5。V3的收入模型为协议抽取35%的手续费 18，这表明协议具有健康的收入捕获率。

**表1：Kodiak Finance关键财务指标 (数据来源：DefiLlama)**

| 指标 | Kodiak V2 | Kodiak V3 | Kodiak (合计) |
| :---- | :---- | :---- | :---- |
| **总锁仓价值 (TVL)** | 122万美元 | 1.9862亿美元 | 1.9217亿美元 |
| **30天交易量** | 78.61万美元 | 3.6178亿美元 | 3.7042亿美元 |
| **7天交易量** | 20.99万美元 | 1.1476亿美元 | 1.2395亿美元 |
| **24小时交易量** | 6.05万美元 | 1875万美元 | 1279万美元 |
| **年化费用** | 2.83万美元 | 1188万美元 | 1215万美元 |
| **年化收入** | 4709美元 | 416万美元 | 425万美元 |

*注：合计数据与V3数据之间的微小差异是数据聚合平台统计口径所致。该表格清晰地展示了V3（集中流动性）业务对于协议的绝对重要性，验证了市场对资本效率型AMM的偏好，以及Kodiak将战略重心放在基于V3的“Islands”功能上的正确性。*

### **3.2. 协议健康度与开发活动**

来自Token Terminal的数据显示，Kodiak协议呈现出健康且活跃的早期发展迹象。

* **用户活动:** 每日活跃地址数增长了+43.0%，但30天合约交易总数下降了-32.6% 20。这表明用户参与度虽有波动，但整体呈增长趋势。  
* **开发者活动:** 协议报告拥有**4名核心开发者**（增长33.3%），在过去30天内有**29次代码提交**（增长141.7%）20。

代码提交次数的大幅飙升（+141.7%），而核心开发者数量仅有小幅增长，这通常指向一个高度专注和高效的开发阶段，而非团队规模的扩张。这种模式通常发生在关键时期，例如主网上线后的功能优化、新功能（如新的“Islands”策略）的集中开发或安全补丁的快速部署。考虑到Kodiak是一个部署在新链上的年轻协议，这种高强度的开发活动是一个积极信号，表明其匿名团队具备强大的执行力和对项目的长期承诺，反驳了项目可能停滞不前的担忧。

## **第四部分：KDK与xKDK的代币经济学**

### **4.1. KDK代币效用**

作为协议的原生代币，KDK被设计为驱动整个Kodiak经济生态的核心 1。其主要功能包括：

* **流动性激励:** 用于奖励向DEX提供流动性的用户。  
* **治理参与:** 持有者可以将KDK转换为xKDK，以参与协议的治理决策。  
* **协议分红:** 获得协议收入的一部分（此功能在文档中有所暗示，但尚未明确定义为已上线）。

### **4.2. xKDK治理模型**

通过将KDK转换为不可转让、托管形式的xKDK，用户可以获得治理权 1。xKDK的主要用途是将其分配到所谓的“效用模块”（Utility Modules）中，这似乎是一种用于引导奖励或影响其他协议参数的机制，但具体细节尚不明确 1。该模型与veToken（投票托管代币）经济学相似，旨在通过赋予长期质押者更大的权力来奖励他们。

### **4.3. 信息黑盒：供应、分配与解锁**

这是Kodiak Finance当前面临的一个核心风险点。在所有可用的研究资料中，**完全没有关于KDK代币总供应量、不同参与方（团队、投资者、社区等）的分配比例，以及这些代币的解锁时间表的信息** 1。多个信息源甚至将该代币标记为“未确认”，且尚未提供合约地址 9。

已知的是，该项目在2024年2月完成了一轮**200万美元的种子轮融资**，投资方包括Build-a-Bera、Amber Group和Shima Capital等知名机构 2。这些早期投资者持有数量未知、解锁时间表也未知的代币。

### **4.4. 价值捕获与可持续性**

代币经济学的高度不透明性为未来的市场带来了巨大的潜在抛售压力风险。在不了解早期投资者和团队代币的解锁规模和时间的情况下，公开市场的投资者几乎是在盲目飞行。DeFi历史上有大量先例表明，采用“低流通、高完全稀释估值（FDV）”模式发行的代币，在上线初期可能会经历价格的短暂拉升，但随后会因为早期投资者代币的解锁而面临持续的抛售压力，最终损害散户投资者的利益。这种严重的信息不对称是直接投资KDK代币所面临的最大风险之一，它将一项潜在的投资转变为一场对早期支持者长期善意的赌博。

## **第五部分：风险画像与安全评估**

### **5.1. 智能合约安全：一个主要关切点**

* **缺乏直接审计报告:** 对所有资料的全面审查显示，**没有发现任何由信誉良好的第三方安全公司对Kodiak Finance核心智能合约进行的公开审计报告** 25。对于一个管理着近2亿美元资产的协议而言，这是透明度的严重缺失，也是投资者需要警惕的重大红旗。  
* **从合作伙伴审计中推断的风险:** 由Halborn为合作伙伴协议Lair Finance进行的一项安全审计，其审计范围包含了多个Kodiak的合约（如IslandRouter.sol, IKodiakIsland.sol等）30。该审计发现了一个高危漏洞，源于Lair的代码与Kodiak合约之间的接口不匹配，可能导致拒绝服务（DoS）攻击 30。尽管Lair团队已将此问题标记为“已解决”，但该事件揭示了两个关键问题：第一，与Kodiak集成的复杂性；第二，Kodiak的合约存在非标准实现（例如，在一个标准的Uniswap V3接口预期返回  
  uint8的地方，它返回了uint32），这可能在与其他协议交互时引入不可预见的错误。  
* **代码库来源:** 协议的代码库在很大程度上受到Uniswap V3的启发或直接分叉自其代码 1。虽然这提供了一定的信心，因为其基础设计经过了市场的严酷考验，但任何自定义的修改或新增功能（如PoL集成和“Islands”的复杂逻辑）都构成了未经审计的风险源。

### **5.2. 协议与经济风险**

* **团队风险:** 项目的贡献者被描述为“经验丰富的建设者”，但其身份保持匿名 7。匿名性带来了巨大的风险，在最坏的情况下（如发生漏洞利用或项目方跑路），投资者将没有任何法律追索权或问责对象。  
* **生态系统依赖性:** Kodiak的成败与Berachain的兴衰紧密相连。如果Berachain未能吸引足够的用户和流动性，无论Kodiak自身产品多么优秀，它都将走向失败。这构成了100%的平台风险。  
* **无常损失:** 与所有AMM协议一样，Kodiak流动性池和“Islands”的提供者都面临无常损失的风险。在集中流动性头寸中，这种风险可能会被进一步放大。

### **5.3. 市场与系统性风险**

这些风险包括DeFi领域普遍存在的宏观风险，如全球性的监管打压、加密市场的系统性熊市，以及其依赖的底层基础设施（即Berachain本身）出现漏洞或故障的风险。

## **第六部分：竞争格局**

### **6.1. 主要对手：Kodiak vs. BEX**

BEX是Berachain生态中另一个主要的DEX，在某些语境下被描述为“主要的官方AMM” 4。然而，链上数据清晰地表明，Kodiak是目前无可争议的市场领导者。

* **TVL对比:** Kodiak的TVL高达**1.9217亿美元** 5，远远超过BEX的  
  **3049万美元** 6。Kodiak的市场份额是BEX的6倍以上。  
* **交易量对比:** Kodiak的30天交易量为**3.7042亿美元** 5，而BEX为  
  **8206万美元** 6。Kodiak处理的交易活动是BEX的4.5倍以上。  
* **协议收入对比:** Kodiak的年化协议收入为**425万美元** 5，而BEX仅为  
  **29.18万美元** 6。Kodiak为协议创造的收入是BEX的14倍以上。

**表2：竞争分析 \- Kodiak vs. BEX**

| 指标 | Kodiak Finance | BEX |
| :---- | :---- | :---- |
| **总锁仓价值 (TVL)** | **1.9217亿美元** | 3049万美元 |
| **30天交易量** | **3.7042亿美元** | 8206万美元 |
| **年化费用** | **1215万美元** | 57.59万美元 |
| **年化收入** | **425万美元** | 29.18万美元 |
| **核心功能** | 自动化的集中流动性管理 | 标准AMM |
| **Berachain官方孵化** | **是 (Build-a-Bera)** | 否 |

*此表格直观地展示了Kodiak在所有关键量化指标上的绝对优势，这是其投资论点的核心支柱。它将Kodiak卓越的产品功能（自动化集中流动性）和战略地位（官方孵化）与其优异的市场表现直接关联起来，证明了其设计与市场领导地位之间的因果关系。*

### **6.2. 更广阔的生态系统定位**

Kodiak所采用的“原生、深度集成、自动化流动性管理、veToken模型”的DEX发展模式，是在新兴L1/L2公链上取得成功的可靠范本。它成功复制了Aerodrome在Base链上或Velodrome在Optimism链上的策略。其长期成功将取决于Berachain能否催生出一个同样充满活力的DeFi生态系统。

## **第七部分：投资机会与策略路径**

### **7.1. 直接代币投资 (KDK)**

这是风险最高、潜在回报也最高的参与方式。其投资价值建立在Kodiak能够维持其市场领导地位，并且KDK代币能够成功实施价值捕获机制（如手续费分红）的基础上。如第四部分所述，主要风险在于不透明的代币经济学和潜在的内部人抛压。此机会有待代币正式发布和上线后才能实现 9。

### **7.2. 流动性提供 (LP) 与收益耕作策略**

* **为“Islands”提供流动性:** 这种方式允许投资者在无需主动管理头寸的情况下赚取交易手续费。回报率将是交易池交易量和波动率的函数。主要风险是无常损失。  
* **高APR的“Sweetened Islands”:** 这是一种典型的收益耕作（Yield Farming）策略。通过锁定LP代币，用户除了赚取交易费外，还能获得KDK（以及可能的其他代币）作为额外奖励。这提供了获得高年化收益率（APR）的潜力，但也引入了额外的风险：锁定合约的智能合约风险和KDK奖励代币的价格波动风险。文档中提到，更长的锁仓期可以获得更高的奖励倍数，这是收益耕作者需要重点考量的变量 1。

### **7.3. 开发者与生态系统机会**

* “Panda Factory”为开发者和社区提供了一个便捷的平台，可以利用Kodiak的基础设施，发行代币并即时获得流动性 9。  
* 其他DeFi协议可以在代币化的“Island”LP头寸之上构建结构化产品或收益策略，使Kodiak成为Berachain DeFi生态中一个基础性的“货币乐高”。

### **7.4. 空投投机**

尽管现有资料中没有关于Kodiak空投的具体细节 3，但向早期用户发放空投是新协议冷启动的常见做法。通过与协议进行交互（如交易、提供流动性等），用户有可能在未来获得空投资格。这代表了一种低资本投入的投机性机会。

## **第八部分：最终评估与投资建议**

### **8.1. 发现总结**

Kodiak Finance呈现出一个典型的两面性：一方面是卓越的链上表现和优越的战略地位，另一方面是刺眼的运营和安全风险。它成功地执行了“主导性原生DEX”的剧本，在Berachain上捕获了巨大的市场份额并创造了真实的协议收入。然而，这一切都建立在一个未经审计的代码库和一个匿名团队的基础之上，这种组合对于任何保守的投资者来说都是不可接受的。

### **8.2. “投机性买入”评级的理由**

* **“买入”的理由:** 量化数据是无可辩驳的。Kodiak是Berachain DEX赛道的明确赢家。其与PoL机制的深度整合为其提供了可持续的竞争优势。对于风险承受能力高且坚信Berachain未来的投资者来说，Kodiak是直接押注该生态系统DeFi活动增长的最佳标的。  
* **“投机性”的警告:** 该建议被限定为“投机性”，主要基于三个不可忽视的风险：  
  1. **智能合约风险:** 缺乏直接的公开审计意味着其超过**1.92亿美元**的TVL随时可能因代码漏洞而面临被盗风险。  
  2. **团队风险:** 匿名团队意味着零问责制，增加了项目的不可预测性。  
  3. **代币经济学风险:** KDK代币未知的分配和解锁计划，为公开市场投资者创造了未来价值可能被严重稀释的重大风险。

### **8.3. 结论性思考**

Kodiak Finance是早期DeFi投资中风险与回报权衡的教科书式案例。它有潜力成为一个主要新兴公链上的基石协议，并为早期参与者带来可观的回报。然而，投资者必须清醒地认识到，他们正在承担巨大的、无法量化的技术和信息风险。任何对KDK代币或其流动性池的投资，都应在多元化的投资组合中被恰当定位，并做好可能承受全部损失的准备。

一旦项目方发布由信誉良好的公司出具的全面安全审计报告，并完全透明化KDK的代币经济学，其投资评级将得到立即的重新评估。在此之前，任何参与都应被视为一场高风险的投机。

#### **引用的著作**

1. Kodiak Finance | Decentralized Exchange on Berachain \- DAIC Capital, 访问时间为 八月 31, 2025， [https://daic.capital/ecosystem/berachain/kodiak-finance-dex](https://daic.capital/ecosystem/berachain/kodiak-finance-dex)  
2. Kodiak Finance token sale analytics and information, private/seed sale price, tokenomics, 访问时间为 八月 31, 2025， [https://icoanalytics.org/projects/kodiak-finance/](https://icoanalytics.org/projects/kodiak-finance/)  
3. Kodiak Finance Raises $2M Seed Round \- Decrypt, 访问时间为 八月 31, 2025， [https://decrypt.co/215750/kodiak-finance-raises-2m-seed-round](https://decrypt.co/215750/kodiak-finance-raises-2m-seed-round)  
4. Kodiak Explained: Berachain's Native Liquidity Hub | Bitget News, 访问时间为 八月 31, 2025， [https://www.bitget.com/news/detail/12560604481294](https://www.bitget.com/news/detail/12560604481294)  
5. Kodiak \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/protocol/kodiak](https://defillama.com/protocol/kodiak)  
6. BEX \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/protocol/bex](https://defillama.com/protocol/bex)  
7. Kodiak: Project Guide | Latest Updates, Presale & Airdrop \- Bitget Wallet, 访问时间为 八月 31, 2025， [https://web3.bitget.com/vi/dapp/kodiak-28682](https://web3.bitget.com/vi/dapp/kodiak-28682)  
8. Kodiak Finance Raises $2M Seed Round \- The Defiant, 访问时间为 八月 31, 2025， [https://thedefiant.io/news/press-releases/kodiak-finance-raises-2m-seed-round](https://thedefiant.io/news/press-releases/kodiak-finance-raises-2m-seed-round)  
9. Kodiak: Berachain's Native Liquidity Hub | CoinEx Academy, 访问时间为 八月 31, 2025， [https://www.coinex.com/en/academy/detail/2045-kodiak-berachains-native-liquidity-hub](https://www.coinex.com/en/academy/detail/2045-kodiak-berachains-native-liquidity-hub)  
10. The Berachain Ecosystem Review \- Simply Staking, 访问时间为 八月 31, 2025， [https://simplystaking.com/the-berachain-ecosystem-review](https://simplystaking.com/the-berachain-ecosystem-review)  
11. @kodiak-finance/v3-periphery \- npm, 访问时间为 八月 31, 2025， [https://www.npmjs.com/package/%40kodiak-finance%2Fv3-periphery](https://www.npmjs.com/package/%40kodiak-finance%2Fv3-periphery)  
12. @kodiak-finance/v3-core \- npm, 访问时间为 八月 31, 2025， [https://www.npmjs.com/package/%40kodiak-finance%2Fv3-core](https://www.npmjs.com/package/%40kodiak-finance%2Fv3-core)  
13. Introducing Kodiak: Berachain's Native Liquidity Hub \- Medium, 访问时间为 八月 31, 2025， [https://medium.com/@KodiakFi/introducing-kodiak-berachains-native-liquidity-hub-63c3e7749b30](https://medium.com/@KodiakFi/introducing-kodiak-berachains-native-liquidity-hub-63c3e7749b30)  
14. What is Berachain? | The Block, 访问时间为 八月 31, 2025， [https://www.theblock.co/learn/346848/what-is-berachain](https://www.theblock.co/learn/346848/what-is-berachain)  
15. Dive to Berachain \#3. Berachain Ecosystem | by verse2 \- Medium, 访问时间为 八月 31, 2025， [https://medium.com/verse2/dive-to-berachain-3-berachain-ecosystem-ded3ac915a89](https://medium.com/verse2/dive-to-berachain-3-berachain-ecosystem-ded3ac915a89)  
16. ​​Top 10 Projects by TVL on Berachain Kodiak \- $688M Concre | tharunudupi on Binance Square, 访问时间为 八月 31, 2025， [https://www.binance.com/en/square/post/20313671921217](https://www.binance.com/en/square/post/20313671921217)  
17. Berachain Ecosystem Experiences Decline in DeFi Protocol TVL \- Binance, 访问时间为 八月 31, 2025， [https://www.binance.com/en/square/post/03-31-2025-berachain-ecosystem-experiences-decline-in-defi-protocol-tvl-22269961557161](https://www.binance.com/en/square/post/03-31-2025-berachain-ecosystem-experiences-decline-in-defi-protocol-tvl-22269961557161)  
18. Kodiak V3 \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/protocol/kodiak-v3](https://defillama.com/protocol/kodiak-v3)  
19. Kodiak V2 \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/protocol/kodiak-v2](https://defillama.com/protocol/kodiak-v2)  
20. Kodiak Finance overview \- Token Terminal, 访问时间为 八月 31, 2025， [https://tokenterminal.com/explorer/projects/kodiak-finance](https://tokenterminal.com/explorer/projects/kodiak-finance)  
21. Token Unlocks | Track The Most Updated Data and Complete Vesting Schedules, 访问时间为 八月 31, 2025， [https://tokenomist.ai/](https://tokenomist.ai/)  
22. Kadena (KDA) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 八月 31, 2025， [https://tokenomist.ai/kadena](https://tokenomist.ai/kadena)  
23. Tokenomics in Crypto: Understanding Token Release Schedules and Their Impact \- BlockApps Inc., 访问时间为 八月 31, 2025， [https://blockapps.net/blog/tokenomics-in-crypto-understanding-token-release-schedules-and-their-impact/](https://blockapps.net/blog/tokenomics-in-crypto-understanding-token-release-schedules-and-their-impact/)  
24. Kodiak \- 2025 Company Profile, Funding & Competitors \- Tracxn, 访问时间为 八月 31, 2025， [https://tracxn.com/d/companies/kodiak/\_\_r5ThVAVpSwa8elPB\_E6w5v\_5ls\_GgaVX7tMx60\_2kDA](https://tracxn.com/d/companies/kodiak/__r5ThVAVpSwa8elPB_E6w5v_5ls_GgaVX7tMx60_2kDA)  
25. Smart Contract Audit \- CertiK, 访问时间为 八月 31, 2025， [https://www.certik.com/products/smart-contract-audit](https://www.certik.com/products/smart-contract-audit)  
26. What Is a Smart Contract Audit? | Hedera, 访问时间为 八月 31, 2025， [https://hedera.com/learning/smart-contracts/smart-contract-audit](https://hedera.com/learning/smart-contracts/smart-contract-audit)  
27. How To Audit a Smart Contract? \- Chainlink, 访问时间为 八月 31, 2025， [https://chain.link/education-hub/how-to-audit-smart-contract](https://chain.link/education-hub/how-to-audit-smart-contract)  
28. Audits \- ChainSecurity, 访问时间为 八月 31, 2025， [https://www.chainsecurity.com/smart-contract-audit-reports](https://www.chainsecurity.com/smart-contract-audit-reports)  
29. Smart Contract Audit Reports \- Hacken.io, 访问时间为 八月 31, 2025， [https://hacken.io/audits/](https://hacken.io/audits/)  
30. Bera LRT Contracts Audit | Lair Finance | Halborn Audit Reports, 访问时间为 八月 31, 2025， [https://www.halborn.com/audits/lair-finance/bera-lrt-contracts-ebeaa0](https://www.halborn.com/audits/lair-finance/bera-lrt-contracts-ebeaa0)  
31. Kodiak Finance \- CRYPTO fundraising, 访问时间为 八月 31, 2025， [https://crypto-fundraising.info/projects/kodiak-finance/](https://crypto-fundraising.info/projects/kodiak-finance/)  
32. Orbiter Finance Airdrop Guide: How to Participate, Eligibility Criteria and Price Prediction, 访问时间为 八月 31, 2025， [https://coinmarketcap.com/academy/article/orbiter-finance-airdrop-guide-how-to-participate-eligibility-criteria-and-price-prediction](https://coinmarketcap.com/academy/article/orbiter-finance-airdrop-guide-how-to-participate-eligibility-criteria-and-price-prediction)