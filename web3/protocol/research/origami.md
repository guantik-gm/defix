

# **Origami Finance 深度投资评估报告**

## **I. 执行摘要与投资评级**

* **投资评级：** 建议（针对高风险偏好且经验丰富的DeFi投资者）  
* **投资论述：** Origami Finance 为经验丰富的DeFi投资者提供了一个高风险、潜在高回报的投资机会。其核心投资渠道并非直接购买代币，而是通过两种主要方式实现：（1）参与其高年化收益率（APY）的杠杆化收益农场（Leveraged Yield Farming）金库，特别是那些具有多层激励结构（如空投叠加）的金库；（2）通过参与其“Ori Points”积分活动，博取未来大概率会发生的代币空投。

该项目近期成功完成由多家加密原生策略投资者参投的150万美元种子轮融资，并采取了透明且多层次的安全审计策略，这为其提供了相当的信誉背书 1。然而，其风险同样显著，主要源于对BeraChain等新兴生态系统的依赖、杠杆策略固有的高风险，以及由匿名团队带来的运营风险。

对于具备开发背景的投资者而言，该项目提供了通过贡献代码（如开发新金库或预言机适配器）来参与生态建设并获取价值的独特途径，尽管这需要更深度的参与。总体而言，Origami Finance并非适合所有人的投资标的，而是为那些能够理解并管理复杂DeFi风险、寻求超额回报的专业投资者量身打造的“淘金”机会。

## **II. 协议分析：自动化杠杆（“折叠”）的机制**

### **1\. 核心概念：“财富偏爱折叠者”**

Origami Finance 的核心定位是一个自动化杠杆协议 4。它旨在将“折叠”（Folding）或“循环”（Looping）这一复杂且高操作强度的DeFi策略，通过一个简洁的金库用户体验（Vault UX）实现自动化 5。

具体机制如下：用户将一种生息代币（Yield-Bearing Token, YBT），例如流动性质押代币（LST），存入Origami的一个金库中。协议随后会自动将这笔资产作为抵押物，在第三方借贷市场（如Spark Finance或Morpho）上借出其基础资产（例如，存入stETH，借出ETH）。接着，协议将借来的资产换成更多的生息代币（将ETH换成stETH），并重新存入金库作为抵押。此过程可以循环多次，从而为用户的初始头寸加上杠杆 5。

该协议的核心价值主张在于，它将收益的复投、杠杆头寸的风险管理（如监控健康度以避免清算）等繁琐操作完全自动化，为用户提供了一种“一键式”的复杂收益农场体验，旨在最大化资本效率，同时最小化清算风险 5。

### **2\. 技术架构与多链策略**

Origami Finance 采取了多链部署的战略，目前已在以太坊（Ethereum）、Arbitrum上线，并计划在备受期待的BeraChain主网上线后成为其关键协议 10。这种策略表明，项目方意图从成熟的L1/L2生态以及高热度的新兴公链中捕获流动性和用户。

该协议的功能与外部货币市场深度绑定，使其成为一个构建于现有DeFi基础之上的“元层”（Meta-layer）协议。其关键集成伙伴包括：

* **Spark Finance：** 一个由MakerDAO支持的借贷协议，是Origami流动性来源之一 5。  
* **Morpho：** 一个点对点借贷协议，Origami通过其实现杠杆操作，并与其在生态系统层面有深度合作 7。

值得注意的是，Origami Finance团队自行开发了符合Chainlink接口标准的预言机适配器（Oracle Adapters）13。这是其核心技术贡献之一，对于准确地为抵押品和债务定价至关重要，特别是在Morpho Blue这类需要自定义预言机的平台上。这使得协议能够安全地将新型或小众的生息代币引入借贷市场，极大地扩展了其潜在的策略范围。这种模式在资本上是高效的，因为它无需从零开始引导自身的庞大流动性。然而，这也引入了显著的依赖性风险——任何其集成的底层协议（如Morpho）若发生安全漏洞或运营失败，将直接对Origami的金库造成灾难性影响。因此，投资Origami不仅是押注其自身团队和技术，更是对一篮子其核心集成伙伴（如Morpho、Ethena）安全性和稳定性的捆绑式押注。

### **3\. 关键产品与差异化**

* **金库代币 (lovTokens):** Origami为其杠杆金库发行“Leveraged Vault Tokens”（简称lovTokens），这些代币代表了用户在特定策略金库中的份额 5。这些代币本身就是生息资产，并且具有可组合性，理论上可以在其他DeFi协议中作为抵押品使用。已知的例子包括：  
  * hOHM (Origami hOHM): 代表某个特定金库头寸的代币，从其名称推断，可能与OlympusDAO的OHM生态相关 6。该代币已在Uniswap V3等去中心化交易所（DEX）上交易 15。  
  * oriBGT (Origami iBGT Auto-Compounder): BeraChain上的一个金库代币，用于自动复投BGT（Berachain治理代币）奖励 16。该代币已在BeraChain生态的DEX——Kodiak上线 16。  
* **自动化框架:** 协议使用名为“Overlord”的框架来执行每日的自动化任务，例如复利操作 18。这表明项目致力于实现稳健、可预测的链上定时操作，是其“自动化”承诺的技术保障。

## **III. 市场与竞争格局**

### **1\. 链上指标分析**

根据DeFi Llama和Token Terminal等专业数据平台的信息，可以勾勒出Origami Finance的市场表现：

* **总锁仓价值 (TVL):** 近期数据显示，Origami Finance的总锁仓价值约为7075万美元。这部分资金主要分布在以太坊（约5790万美元）和BeraChain（约1286万美元），在Arbitrum上也有少量部署 11。值得注意的是，BeraChain尚处在测试网阶段，其高额的TVL表明市场对其有极高的早期兴趣和投机性资本流入。  
* **借贷规模:** 协议的总借贷金额约为5500万美元 11。TVL与借贷规模之间的高度相关性，验证了该协议的核心用例确实是杠杆借贷。  
* **用户活动:** Token Terminal的数据显示，协议拥有稳定但尚不算庞大的用户基础，其日活/周活/月活地址数、交易笔数和Gas消耗量等指标均有记录 19。虽然绝对数值在整个借贷板块中不突出，但能在这些专业平台上被追踪，本身就增加了一层透明度。

### **2\. 竞争定位**

Origami Finance所处的赛道是**杠杆收益农场**（Leveraged Farming）10。这是一个竞争激烈的领域，DeFi Llama明确列出了其主要竞争对手，包括Homora V2、Extra Finance Leverage Farming、Arkis、DeltaPrime等 11。

**表1：杠杆收益农场协议竞争格局分析**

| 协议名称 | 总锁仓价值 (TVL) | 主要链 | 核心机制 | 关键差异点 | 安全记录 | 原生代币 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Origami Finance** | \~$71M 24 | Ethereum, BeraChain, Arbitrum | 自动化生息代币（YBT）循环杠杆 | 深度集成新兴生态（BeraChain）、与Morpho等协议的“元层”策略、强大的安全审计背景 | 多家机构审计，无已知被盗事件 3 | 否（有积分计划）8 |
| **Homora V2** | \~$109M 24 | Ethereum, Avalanche, Fantom等 | 提供杠杆化的流动性挖矿和借贷 | 市场领导者之一，支持多种主流DEX的LP头寸 | 曾有被盗历史，但协议持续运营 | HOMORA |
| **Extra Finance** | \~$82M 24 | Base, OP Mainnet, Berachain | 杠杆化收益农场与借贷，社区驱动 | 深度耕耘Optimism生态（Base, OP），与Velodrome/Aerodrome紧密集成 | 无重大被盗事件 | EXTRA |
| **DeltaPrime** | \~$12M 11 | Arbitrum, Avalanche | 提供跨保证金账户的借贷，允许用多种资产组合作为抵押 | 创新的跨资产保证金系统 | 曾遭受多次安全事件，总损失超千万美元 26 | PRIME |
| **Arkis** | \~$26M 11 | Hyperliquid L1 | 专注于链上衍生品市场的杠杆流动性提供 | 赛道垂直，专注于Hyperliquid生态 | 较新，安全记录待观察 | 未知 |

从竞争格局来看，Origami Finance的一个核心战略是其对BeraChain的深度押注。虽然其整体TVL低于Homora V2或Extra Finance等成熟竞争对手，但其在BeraChain测试网上的TVL在同类协议中占据绝对主导地位 27。这一“抢滩”策略如果成功，即BeraChain主网上线后能吸引大量用户和资本，Origami Finance将有可能凭借其先发优势和生态内深度合作关系（其投资方多为BeraChain生态核心参与者），成为该链上的头部杠杆协议。因此，对Origami Finance的投资在很大程度上与对BeraChain生态未来成功的预期相挂钩。

## **IV. 代币经济学、融资与空投潜力**

### **1\. 融资情况：一轮战略性种子轮**

Origami Finance于2024年8月宣布成功完成一轮150万美元的种子轮融资 1。此轮融资的参投方极具战略意义，并非传统的Web2 VC，而是由一批加密原生基金和个人组成，包括Ouroboros Capital, Fjord Foundry, TempleDAO, 以及在社区中极具影响力的KOL如Smokey The Bera和janitooor.eth 1。

这种投资者构成清晰地揭示了项目的市场策略：并非广撒网，而是精准地嵌入高热度的DeFi社区，特别是BeraChain生态系统。这些投资者不仅提供了早期资金，更重要的是带来了战略合作资源和社区分发渠道，为其未来的启动和发展铺平了道路。

### **2\. 代币结构：TGE前期**

截至本报告撰写时，Origami Finance**尚未发行其原生的治理或效用代币** 8。这是一个至关重要的信息，意味着投资者目前无法在公开市场上购买到所谓的“ORI”代币。在CoinMarketCap等网站上出现的“Origami (ORI)”或“Origami Coin (ori)”等代币均属于其他不相关的项目 30。

然而，协议为其金库发行了可交易的、可组合的凭证代币（lovTokens），这些代币本身就是生息资产。例如：

* **hOHM (Origami hOHM):** 一种代表特定金库头寸的ERC-20代币，可在Uniswap V3上交易 15。  
* **oriBGT (Origami iBGT Auto-Compounder):** 一种在BeraChain上代表自动复投BGT奖励金库份额的代币，可在BeraChain的DEX上交易 16。

这些可交易的金库代币是一个复杂而精巧的设计，它允许用户在不解除杠杆头寸的情况下退出，或者将这些生息资产用于DeFi领域的其他地方（例如作为新的抵押品），充分体现了“金钱乐高”的可组合性。但目前，这些代币的链上流动性极低（例如oriBGT的24小时交易量仅为几美元），对于大额交易而言尚不现实 17。

### **3\. “Ori Points”积分活动：空投的主要载体**

当前参与Origami Finance生态最直接的方式是其\*\*“Ori campaign Season 1”\*\*积分活动 8。这是一个典型的空投预热活动，其机制清晰：

* **积分获取：** 用户通过向协议的各个金库中存入资产来赚取“Ori points” 8。  
* **活动周期：** 活动有明确的结束时间，即持续到2024年9月20日或BeraChain主网上线时，以较早者为准 8。这种与主网上线挂钩的时间点设置，是未来将进行代币生成事件（TGE）并根据积分进行空投的强烈信号。  
* **空投叠加（Airdrop-on-Airdrop）：** 部分金库为用户提供了赚取多重奖励的机会。例如，存入Ethena相关的金库，用户不仅能赚取Ori积分，还能同时获得Ethena协议自身的奖励（如“Sats”或“Shards”）8。Morpho的生态页面也提到，Origami的Ethena金库可以维持高达5倍的杠杆和100倍的Sats乘数 7。这种“一层资产，多层空投”的策略对收益农场玩家具有极强的吸引力。

对于潜在投资者而言，短期至中期最明确的盈利策略就是参与空投农场，目标是在TGE之前，通过投入资金和时间，最大化地积累Ori积分，以期在未来获得可观的治理代币份额。

## **V. 综合风险与安全评估**

### **1\. 团队与治理：匿名团队的双刃剑**

* **团队背景：** 项目的联合创始人署名为Lux Lux和Miri Temple，这很可能是化名 8。项目与TempleDAO关系密切，可以看作是由其孵化或支持的项目 1。  
* **风险：** 匿名团队天然存在更高的“跑路”（Rug Pull）或项目遗弃风险。一旦发生恶意事件，投资者的法律追索途径非常有限。  
* **风险缓解因素：**  
  1. 与TempleDAO的关联提供了一定程度的声誉抵押。TempleDAO作为一个已建立（尽管小众）的协议，其声誉与Origami绑定。  
  2. 种子轮投资方均为加密原生领域的知名实体和个人 1。这些经验丰富的投资者在投资前大概率已进行了自己的尽职调查，这为项目提供了重要的社会证明（Social Proof）。

### **2\. 智能合约安全：多层次的防御体系**

Origami Finance在安全方面投入了大量资源，这是一个非常积极的信号，也是其核心竞争力之一。

* **专业审计：**  
  * **v1版本审计：** 由yAudit于2023年2月完成 5。  
  * **v2版本审计：** 由顶级安全公司Zellic于2024年1月完成 3。完整的审计报告已在Zellic的GitHub上公开，供任何人查阅 32。任何严肃的投资者都应将详细阅读此报告作为尽职调查的关键一步。  
* **公开审计竞赛：** 项目通过Hats Finance平台举办了公开的审计竞赛，利用社区白帽黑客的力量来寻找潜在漏洞，进一步增强了代码的安全性 18。  
* **基础设施安全评估：** 项目聘请了Rivanorth对其AWS云基础设施和API进行了安全评估，重点关注“深度防御”原则 34。这种超越智能合约本身、关注后端安全的做法在DeFi项目中较为罕见，显示了团队的成熟度和对安全的全面重视。  
* **GoPlus安全警告：** 尽管有上述众多积极举措，CoinGecko上针对hOHM代币合约的一条来自GoPlus的安全警报值得高度关注。该警报指出，合约创建者可能拥有修改代币合约的权限，例如禁止卖出、修改费用、增发代币等 15。这是一个  
  **严重的技术红旗**，因为它暗示了可能存在的“上帝模式”或中心化风险。这可能是标准的可升级代理合约（Upgradeable Proxy）的正常特性，但也可能是真正的后门。投资者在与任何特定金库交互前，必须对该金库合约的所有权、管理员权限和升级机制进行深入的技术审查。

### **3\. 协议与系统性风险**

* **清算风险：** 作为杠杆协议，清算是最主要的内在风险。尽管协议声称能自动化管理风险，但在极端的市场波动下，用户的头寸仍可能被清算，导致本金损失 4。  
* **坏账风险：** 如果抵押品价值下跌过快，导致清算无法有效执行，协议可能会产生坏账，从而损害借出方的利益 4。  
* **预言机风险：** 协议依赖预言机获取资产价格。预言机被操纵、延迟或失灵都可能导致不公正的清算或协议资不抵债 13。  
* **智能合约漏洞风险：** 没有任何协议是100%安全的。尽管经过多轮审计，Origami自身的代码或其深度集成的第三方协议（Morpho, Spark, Ethena等）中仍可能存在未被发现的漏洞，可能导致用户资金的全部损失。

## **VI. 投资机会：战略性分解**

为了给投资者提供清晰、可操作的决策依据，我们将所有可行的投资策略汇总如下。

**表2：Origami Finance 投资机会矩阵**

| 投资机会 | 描述 | 风险等级 | 资本要求 | 潜在回报 | 所需专业知识 | 优点 | 缺点 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. 空投农场** | 通过向协议金库存款来积累“Ori Points”，以期在未来获得代币空投。 | 中-高 | 中-高 | 空投代币价值（高度不确定） | DeFi基础操作 | 潜在回报高，参与门槛相对较低，可能获得多重空投。 | 回报不确定，资金有锁仓机会成本，面临协议所有风险。 |
| **2\. 高收益金库策略 (Ethena USDe)** | 存入USDe，通过协议在Morpho上实现高达5倍的杠杆，赚取Ethena原生收益和多倍Sats奖励。 | 极高 | 中-高 | 潜在APY \> 100% | 高级DeFi，风险管理 | 极高的潜在APY，空投积分和Sats奖励叠加。 | 风险极高：涉及3个协议，USDe脱锚风险，负资金费率风险，清算风险。 |
| **3\. 生态系统策略 (BeraChain oriBGT)** | 在BeraChain测试网上存入资产到oriBGT金库，博取BeraChain生态早期红利和Origami空投。 | 高 | 低-中 | 空投+Bera生态潜在收益 | DeFi，对新生态敏感 | 成为BeraChain生态早期参与者，双重奖励预期（Bera+Ori）。 | BeraChain主网上线时间不确定，生态发展失败风险，测试网资产价值低。 |
| **4\. 开发者贡献** | 利用开发技能为协议做贡献，如构建新金库、预言机适配器或自动化机器人。 | 中 | 低（时间投入） | 潜在的追溯性空投、Grants、DAO职位 | 软件开发 (Solidity, TS) | 可能获得超额回报（大额空投），深度参与项目，建立行业声誉。 | 耗时耗力，回报不直接且不保证，需要高水平技术能力。 |

### **1\. 深度剖析：高收益金库策略**

对于追求极致收益且风险承受能力极强的投资者，Origami的Ethena USDe金库提供了一个典型的高风险高回报范例。

* **策略机制：** 该策略的核心是利用Ethena的“互联网债券”USDe。用户存入USDe，Origami协议在Morpho上将其作为抵押品，借入稳定币（如DAI），再将DAI换成更多USDe并存入，循环此过程以建立杠杆 7。其收益来源是多重的：  
  1. **Ethena原生收益：** 来自于质押ETH的收益和期货市场的资金费率，这是USDe的基础收益 36。  
  2. **杠杆放大：** 协议将此基础收益进行杠杆放大（例如5倍）7。  
  3. **多重积分/奖励：** 用户同时获得Origami的Ori积分和Ethena的Sats奖励（可能有高达100倍的乘数）7。  
* **潜在APY：** 虽然没有明确的数字，但将Ethena的基础APY（例如10-20%）乘以5倍杠杆，再加上多重空投奖励的预期价值，其综合年化回报率有潜力达到三位数。  
* **风险对冲（套保挖矿）：** 对于更专业的投资者，可以构建一个市场中性的头寸来对冲风险。例如，在通过Origami做多5倍杠杆的USDe的同时，可以在中心化交易所（CEX）或去中心化永续合约平台（Perps DEX）上开立等值的USDe空头合约。此举旨在对冲USDe本身的价格波动风险（包括脱锚风险），从而尝试分离并捕获其纯粹的资金费率收益。这是一个专家级的策略，增加了操作复杂性和跨平台风险，但能显著降低市场方向性风险。

### **2\. 深度剖析：空投农场指南**

对于多数寻求参与的投资者而言，空投农场是当前阶段最核心的策略。

* **核心目标：** 在TGE前最大化Ori积分。  
* **执行战术：**  
  1. **选择金库：** 优先选择那些提供“空投叠加”机会的金库，如Ethena USDe金库（赚Ori积分+Ethena Sats）或BeraChain上的金库（赚Ori积分+未来潜在的BeraChain生态空投）。  
  2. **资金与时间：** 空投分配权重通常与存入资金量和锁仓时长正相关。因此，早期参与并投入可观的资金是关键。  
  3. **社区参与：** 积极参与项目的官方Discord和Twitter 5。DeFi项目通常会通过社区角色或额外奖励来回馈活跃的早期支持者。

### **3\. 深度剖析：生态系统参与（开发者专属）**

拥有软件开发背景的投资者可以利用其技术优势，通过更深层次的参与来获取潜在的超额回报。

* **参与途径：**  
  1. **构建新金库：** 利用Morpho等平台的无需许可特性，开发者可以为一种新的、有前景的生息代币创建杠杆策略，并将其打包成一个新的Origami金库 38。  
  2. **开发预言机适配器：** 为协议尚不支持的资产开发新的预言机适配器，提交给社区，以扩展协议的功能边界 13。  
  3. **运行自动化工具：** 协议的自动化依赖于Keeper机器人。开发者可以构建并运行自己的Keeper机器人来执行复投或清算任务，并可能从中赚取服务费。  
  4. **GitHub贡献：** 直接为项目的开源代码库做贡献，例如修复Bug、优化代码或提出改进方案 39。  
* **回报形式：** 这种路径的回报可能不是直接的APY，而更多是项目方提供的Grants（开发补助金）、因“贡献者”身份而获得的更大额度的追溯性空投，或是在未来DAO成立后获得一个有影响力的职位。这是一条高投入、长周期但潜在回报极高的路径。

## **VII. 结论：综合投资论述**

综合以上分析，Origami Finance是一个设计精巧、战略清晰的DeFi协议，它精准地切入了杠杆收益农场这一高需求赛道。它通过自动化复杂的循环杠杆操作，为用户提供了便利，并通过与Morpho、Ethena等前沿协议的集成，创造了获取多重收益和空投的诱人机会。

**项目的核心优势在于：**

1. **清晰的产品市场契合度：** 满足了DeFi资深用户对高收益和高资本效率的追求。  
2. **强大的安全承诺：** 多轮专业审计、公开竞赛和后端基础设施评估，展示了团队对安全的重视，这在DeFi领域是重要的加分项。  
3. **战略性的生态布局：** 深度绑定BeraChain这一备受期待的新兴公链，并获得了该生态关键参与者的投资，为其占据先发优势奠定了基础。  
4. **明确的空投预期：** “Ori Points”活动为早期参与者提供了清晰的盈利路径。

**然而，投资者必须清醒地认识到其相伴的重大风险：**

1. **系统性风险：** 作为一个“元层”协议，其安全性高度依赖于其集成的所有底层协议，形成了风险的连锁。  
2. **杠杆固有风险：** 任何杠杆策略都面临着清算和市场剧烈波动带来的本金损失风险。  
3. **匿名团队风险：** 尽管有社会证明作为缓解，但匿名团队始终是一个潜在的中心化风险点。  
4. **技术细节风险：** 如GoPlus揭示的hOHM合约权限问题，表明投资者需要对每个交互的合约进行独立的技术审查。

**最终投资建议：**

对于**风险承受能力极高、经验丰富且具备深度研究能力的DeFi投资者**，Origami Finance是一个值得\*\*“建议”**参与的项目。主要的参与方式应是**空投农场\*\*，通过向其金库（特别是具有多重奖励的金库）存入一部分风险投资组合资金，以博取未来的代币空投。

对于**具备开发背景的投资者**，这是一个\*\*“强烈建议”\*\*关注并尝试贡献的项目。通过技术贡献建立的联系和声誉，可能带来的回报将远超单纯的资金投入。

对于**风险厌恶型或DeFi新手投资者**，则应\*\*“不建议”\*\*参与。其复杂的机制和多层次的风险，远超普通投资者能够有效管理的范畴。投资Origami Finance，本质上是在投资一个由前沿技术、新兴生态和巨大风险交织而成的复杂机会。

#### **引用的著作**

1. Origami Finance Secures $1.5 Million in Seed Funding for Automated Leverage Protocol, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/2024-08-27-origami-finance-secures-1-5-million-in-seed-funding-for-automated-leverage-protocol-12713591275417](https://www.binance.com/en/square/post/2024-08-27-origami-finance-secures-1-5-million-in-seed-funding-for-automated-leverage-protocol-12713591275417)  
2. BeraChain Ecosystem Automated Leverage Protocol Origami Finance Completes $1.5 Million Seed Round Financing | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604176011](https://www.bitget.com/news/detail/12560604176011)  
3. Zellic \- Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/](https://reports.zellic.io/)  
4. Origami Finance \- CRYPTO fundraising, 访问时间为 七月 27, 2025， [https://crypto-fundraising.info/projects/origami-finance/](https://crypto-fundraising.info/projects/origami-finance/)  
5. origami-public/docs/README.md at main · TempleDAO/origami ..., 访问时间为 七月 27, 2025， [https://github.com/TempleDAO/origami-public/blob/main/docs/README.md](https://github.com/TempleDAO/origami-public/blob/main/docs/README.md)  
6. www.mexc.co, 访问时间为 七月 27, 2025， [https://www.mexc.co/en-IN/price/origami-hohm/tokenomics\#:\~:text=Origami%20hOHM%20(HOHM)%20Information,via%20a%20familiar%20vault%20UX.](https://www.mexc.co/en-IN/price/origami-hohm/tokenomics#:~:text=Origami%20hOHM%20\(HOHM\)%20Information,via%20a%20familiar%20vault%20UX.)  
7. Morpho x Origami, 访问时间为 七月 27, 2025， [https://legacy.morpho.org/ecosystem/origami](https://legacy.morpho.org/ecosystem/origami)  
8. Origami Finance: Project Guide | Latest Updates, Presale & Airdrop \- Bitget Wallet, 访问时间为 七月 27, 2025， [https://web3.bitget.com/de/dapp/origami-finance-25474](https://web3.bitget.com/de/dapp/origami-finance-25474)  
9. Origami hOHM Price Today | HOHM Price Chart And Index Real Time \- RevenueBOT, 访问时间为 七月 27, 2025， [https://revenuebot.io/real-time-crypto-prices/coin/origami-hohm-EUR-price-today/](https://revenuebot.io/real-time-crypto-prices/coin/origami-hohm-EUR-price-today/)  
10. Origami Finance: Introduction, Financing, Team and News \- SoSoValue, 访问时间为 七月 27, 2025， [https://m.sosovalue.com/project/origami-finance-1844239193353441281](https://m.sosovalue.com/project/origami-finance-1844239193353441281)  
11. Origami Finance \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/origami-finance](https://defillama.com/protocol/origami-finance)  
12. Origami Finance \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/origami-finance?denomination=USD](https://defillama.com/protocol/origami-finance?denomination=USD)  
13. TempleDAO/origami-oracle-adapters \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/TempleDAO/origami-oracle-adapters](https://github.com/TempleDAO/origami-oracle-adapters)  
14. Origami hOHM (HOHM) Price, Chart & News | Crypto prices & trends on MEXC, 访问时间为 七月 27, 2025， [https://www.mexc.com/price/origami-hohm](https://www.mexc.com/price/origami-hohm)  
15. Origami hOHM Price: HOHM Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/origami-hohm](https://www.coingecko.com/en/coins/origami-hohm)  
16. Kodiak v3 trade volume and market listings | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/exchanges/kodiak-v3/](https://coinmarketcap.com/exchanges/kodiak-v3/)  
17. Origami iBGT Auto-Compounder ORIBGT Price \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/origami-ibgt-auto-compounder](https://www.coingecko.com/en/coins/origami-ibgt-auto-compounder)  
18. hats-finance/Origami-0x998f1b716a5022be026ca6b919c0ddf45ca31abd \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/hats-finance/Origami-0x998f1b716a5022be026ca6b919c0ddf45ca31abd](https://github.com/hats-finance/Origami-0x998f1b716a5022be026ca6b919c0ddf45ca31abd)  
19. Gas used \- Origami Finance \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/origamifinance/metrics/gas-used](https://tokenterminal.com/explorer/projects/origamifinance/metrics/gas-used)  
20. Origami Finance Active addresses (daily) | Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/origamifinance/metrics/active-addresses-daily](https://tokenterminal.com/explorer/projects/origamifinance/metrics/active-addresses-daily)  
21. Origami Finance metrics \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/origamifinance/metrics/all](https://tokenterminal.com/explorer/projects/origamifinance/metrics/all)  
22. Origami Finance Active addresses (weekly) | Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/origamifinance/metrics/active-addresses-weekly](https://tokenterminal.com/explorer/projects/origamifinance/metrics/active-addresses-weekly)  
23. Token Usage \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/token-usage?token=sky](https://defillama.com/token-usage?token=sky)  
24. Extra Finance Leverage Farming \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/extra-finance-leverage-farming](https://defillama.com/protocol/extra-finance-leverage-farming)  
25. Marginal \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/marginal](https://defillama.com/protocol/marginal)  
26. DeltaPrime \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/deltaprime?denomination=USD](https://defillama.com/protocol/deltaprime?denomination=USD)  
27. Berachain \- Leveraged Farming TVL Rankings \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocols/leveraged-farming/berachain](https://defillama.com/protocols/leveraged-farming/berachain)  
28. Origami Finance 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 七月 27, 2025， [https://pitchbook.com/profiles/company/639918-73](https://pitchbook.com/profiles/company/639918-73)  
29. Ouroboros Capital Overview: Portfolio, Team and News \- RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Investors/detail/Ouroboros%20Capital?k=MTIzOTU%3D](https://www.rootdata.com/Investors/detail/Ouroboros%20Capital?k=MTIzOTU%3D)  
30. Origami Coin (ori) Price Chart \- Buy and Sell on Phantom, 访问时间为 七月 27, 2025， [https://phantom.com/tokens/solana/BRRedFyZcaxsnmWE2ZMfXNdqjdB2a3svfPZHpaHEpump](https://phantom.com/tokens/solana/BRRedFyZcaxsnmWE2ZMfXNdqjdB2a3svfPZHpaHEpump)  
31. Origami price today, ORI to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/origami/](https://coinmarketcap.com/currencies/origami/)  
32. Zellic/publications: Zellic's audits, publications, and reports \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Zellic/publications](https://github.com/Zellic/publications)  
33. Web3 Bug Bounties | HatsFinance, 访问时间为 七月 27, 2025， [https://app.hats.finance/](https://app.hats.finance/)  
34. Web3 Defence In Depth: Origami Finance Case Study \- Rivanorth, 访问时间为 七月 27, 2025， [https://rivanorth.com/blog/web3-defence-in-depth-origami-finance-case-study](https://rivanorth.com/blog/web3-defence-in-depth-origami-finance-case-study)  
35. The Terra ORIGAMI Strategy —How to multiply your money with Terra, by DrCle4n \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@Cle4ncuts/the-terra-origami-strategy-by-drcle4n-621d0d25d2e9](https://medium.com/@Cle4ncuts/the-terra-origami-strategy-by-drcle4n-621d0d25d2e9)  
36. Ethena ecosystem, 访问时间为 七月 27, 2025， [https://ethena.fi/ecosystem](https://ethena.fi/ecosystem)  
37. Origami iBGT Auto-Compounder (ORIBGT) Coin Profile, Info and Statistics | FXEmpire, 访问时间为 七月 27, 2025， [https://www.fxempire.com/crypto/origami-ibgt-auto-compounder/profile](https://www.fxempire.com/crypto/origami-ibgt-auto-compounder/profile)  
38. Morpho | The most trusted network for onchain loans, 访问时间为 七月 27, 2025， [https://morpho.org/](https://morpho.org/)  
39. TempleDAO/origami-public \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/TempleDAO/origami-public](https://github.com/TempleDAO/origami-public)  
40. TempleDAO \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/TempleDAO](https://github.com/TempleDAO)