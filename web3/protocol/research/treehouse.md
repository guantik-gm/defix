

# **Treehouse Finance (TREE) 深度投资分析报告：构建DeFi的基准利率层**

## **I. 执行摘要**

Treehouse Finance旨在为去中心化金融（DeFi）构建一个基础性的链上固定收益基础设施层。其核心是通过其基准性的去中心化报价利率（Decentralized Offered Rates, DOR）和可产生收益的tAssets，为DeFi世界引入可靠、透明的利率标准，从而解锁更复杂的金融产品 1。

本报告的核心结论是，Treehouse Finance拥有一个宏大且极具潜力的愿景，并得到了顶级机构投资者的支持、强大的安全审计背书和经验丰富的团队。然而，该项目也面临着巨大的挑战，主要集中在其核心产品（DOR）能否被市场广泛采用，以及其复杂的经济模型所带来的固有风险。

下表总结了该项目的关键指标，为投资者提供快速参考。

**表1：Treehouse Finance (TREE) \- 关键项目指标**

| 指标 | 数值/信息 | 来源 |
| :---- | :---- | :---- |
| 代币符号 | TREE | 3 |
| 当前价格 (USD) | 约 $0.50 \- $0.64 | 3 |
| 市值 (Market Cap) | 约 $78M \- $99M | 3 |
| 完全稀释估值 (FDV) | 约 $492M \- $504M | 5 |
| 24小时交易量 | 约 $123M \- $379M | 4 |
| 流通供应量 | 156.12M TREE | 3 |
| 总供应量 | 1,000,000,000 TREE | 3 |
| 总锁仓价值 (TVL) | $531.85M | 6 |
| 主要部署链 | Ethereum, Mantle | 6 |
| 核心技术 | DOR (去中心化报价利率), tAssets (杠杆化LST) | 1 |
| 安全审计 | Trail of Bits, Sigma Prime, Fuzzland, WatchPug | 8 |

**最终投资评级：建议**

对于寻求高增长潜力的长线风险投资者而言，Treehouse Finance是一个值得关注的标的。该项目正试图解决DeFi领域的一个根本性问题，其成功将意味着捕获一个全新且庞大的市场。强大的机构背景和顶级的安全实践为其提供了坚实的基础。然而，投资者必须清醒地认识到其面临的巨大采用风险和经济模型复杂性，并应将其作为多元化投资组合中的高风险部分进行配置。

## **II. 项目深度剖析：从数据分析到固收基建的蜕变**

### **战略转型：一次深思熟虑的进化**

Treehouse Finance最初于2021年成立，定位为一个DeFi投资组合分析平台 8。在2022年3月，该项目成功完成了由一家未披露的大型金融科技投资者领投，Binance、Lightspeed、Wintermute和Jump Capital等顶级机构参投的1800万美元种子轮融资 11。其最初的旗舰产品名为“Harvest”，旨在解构和可视化用户的DeFi投资组合，提供损益（P\&L）和风险指标等深度分析 10。

然而，项目方随后进行了一次重大的战略转型。2024年9月，项目正式推出了Treehouse Protocol，标志着其从一个应用层的分析工具，全面转向构建DeFi的底层固定收益基础设施 2。这次转型并非一时兴起，而是对市场格局的深刻洞察。DeFi分析赛道已相当拥挤，DeBank、Zapper等产品已占据领先地位。相比于在“红海”中激烈竞争，开创一个关于链上基准利率的“蓝海”市场，无疑是一个更具想象空间但挑战也更大的选择。

这次转型的成功与否，很大程度上取决于能否获得资本市场的认可。事实证明，项目方做到了。在转型后，Treehouse Finance成功完成了一轮新的战略融资，吸引了MassMutual Ventures（美国万通保险公司旗下风投）等传统金融巨头的目光 14。这表明，顶级资本不仅认可了团队的适应能力，更对这个全新的、更为宏大的愿景投下了信任票。这并非一次无奈之举，而是一次瞄准更大市场机会的战略重新定位。

### **核心价值主张：构建DeFi的利率基准**

#### **去中心化报价利率 (DOR)：加密世界的SOFR**

Treehouse的核心价值主张是其去中心化报价利率（DOR）系统。该系统被明确设计为加密世界的原生基准利率，对标传统金融（TradFi）中的伦敦银行同业拆借利率（LIBOR）和有担保隔夜融资利率（SOFR）1。它的目标是解决DeFi中利率碎片化、缺乏统一标准的问题。

DOR的架构是一个由多方参与的共识驱动过程 9：

* **Panelists (报价方)**：质押$TREE代币或tAssets，提交他们对未来利率的预测数据。  
* **Operators (运营方)**：负责监督利率信息流（feed），设定参数并协调Panelists以确保数据完整性。Treehouse是首个Operator。  
* **Referencers (参考方)**：提供参考数据以验证Panelists提交的数据。

该系统的首个实现是“Treehouse以太坊质押利率曲线”（Treehouse Ethereum Staking Rate, TESR），它为ETH质押收益率提供了一个结构化的、前瞻性的视图 1。整个DOR系统的设计遵循三大原则：

**准确性**（通过博弈论和经济激励保证）、**去中心化**（开放参与）和**不可知性**（理论上可用于任何资产的利率定价）1。

#### **tAssets与tETH引擎：产生收益的核心动力**

tAssets是Treehouse生态的另一个核心组件，其首个产品是tETH。tETH被定位为“LST 2.0”，即第二代流动性质押代币。它不仅代表了质押的ETH，更通过一套杠杆化的利率套利策略，旨在为用户提供超越基础质押率的“真实收益” 1。

根据项目白皮书，tETH v1.0版本的核心策略如下：整合Lido（获取stETH）和Aave（借出ETH），通过循环操作（将借出的ETH再次质押为stETH并存入Aave作为抵押品）来放大收益 7。

tETH在生态中扮演着双重角色：它既是一个面向用户的、提供增强收益的金融产品，又是为DOR/TESR系统提供加密经济安全和关键数据输入的底层资产 1。这种设计形成了一个潜在的增长飞轮：

tETH通过高收益吸引用户和TVL；更多的TVL和活跃度为TESR提供了更可靠的数据基础；一个可靠的TESR会吸引更多DeFi协议集成；而广泛的集成会增加对$TREE代币的需求（用于支付查询费用），并进一步验证整个生态，从而吸引更多用户使用tETH。

然而，这种共生关系也构成了一个潜在的单点故障。如果tETH的收益策略表现不佳、出现安全漏洞或被恶意利用，不仅会损害tETH持有者的利益，更会从根本上动摇DOR系统的可信度，导致整个飞轮机制失灵。因此，tETH策略的安全性和表现是整个项目成功的基石。

## **III. 市场与竞争格局**

### **DeFi固定收益领域：一个价值数万亿美元的机遇**

Treehouse所瞄准的市场潜力是巨大的。在传统金融世界，固定收益市场的规模高达数百万亿美元，远超股票和商品市场 15。相比之下，DeFi的固定收益市场仍处于非常早期的阶段，发展受限的主要原因之一就是缺乏类似Treehouse正在构建的底层基础设施，特别是可靠的基准利率 15。一个被广泛认可的基准利率是构建利率互换、固定利率贷款、远期利率协议和链上债券等复杂金融产品的先决条件 1。

### **竞争分析：Treehouse vs. Pendle Finance**

在DeFi收益领域，Pendle Finance是Treehouse最常被提及的竞争对手，DeFiLlama也将其列为TVL最高的竞争者 19。然而，两者的核心逻辑存在根本性差异：

* **Treehouse的根本方法**：旨在创建和标准化**基准利率本身**（好比制造一把“尺子”）。其核心产品是DOR，供其他协议用于定价。tETH则是一个产生收益并*反哺*基准利率的工具 1。  
* **Pendle的根本方法**：旨在**代币化和交易未来收益**（好比交易债券的“票息”）。它将一个生息资产拆分为本金代币（PT）和收益代币（YT），为用户创造了一个可以对未来收益进行投机或锁定的市场 22。

两者的关键区别在于：Treehouse在构建基础设施（一项公共产品），而Pendle在构建一个交易市场（一个交易场所）。尽管它们目前在争夺DeFi收益领域的资本和用户注意力，但从长远来看，它们并非直接的零和竞争关系，反而具有很强的互补性。

一个成熟的DeFi固定收益市场需要Treehouse这样的“利率制定者”，也需要Pendle这样的“利率交易者”。Treehouse的DOR可以为Pendle上的YT定价提供更高效、透明的参考基准。反之，Pendle市场上的交易活动和隐含收益率，也可以成为Treehouse的DOR系统中Panelists报价的重要数据来源。因此，长期来看，两者共存甚至集成的可能性，远大于一方取代另一方。

### **其他竞争者**

DeFiLlama的“Yield”类别中还包括Aura Finance和StakeDAO等协议 19。这些协议的机制（如投票锁定、流动性贿赂等）与Treehouse专注于构建基准利率的核心方向不同，因此不构成直接竞争。

## **IV. 财务、代币经济学与链上健康状况**

### **$TREE代币经济学：效用与价值捕获**

* **总供应量**：1,000,000,000 (10亿) 枚$TREE 3。  
* **代币分配**：根据第三方研究报告，分配方案旨在实现长期激励对齐 9。其中，社区奖励占20%，战略投资者占17.5%，核心团队占12.5%（多年线性解锁），DAO财库占12.5%，初始社区空投占10%。这种分配结构相对合理，为社区和生态发展预留了充足的代币。  
* **核心效用**：$TREE代币的价值捕获机制设计清晰：  
  1. **治理**：持有者可对协议的关键参数和升级进行投票 9。  
  2. **质押与安全**：DOR的Panelists必须质押$TREE才能参与报价，这确保了他们的“利益捆绑”，并能抵抗女巫攻击 9。  
  3. **费用与回购**：DeFi协议或dApp在查询使用DOR数据时，需要支付TREE作为费用。协议收入的约25TREE，这为代币创造了直接的通缩和价值支撑 9。

### **融资历史与投资者背景**

* **种子轮 (2022年3月)**：为最初的分析平台融资1800万美元。投资者阵容堪称豪华，包括Binance, Lightspeed, Wintermute, Jump Capital, GSR, Mirana Ventures, 和 MassMutual Ventures等顶级加密原生VC和做市商 11。  
* **战略轮 (2024年底完成, 2025年4月宣布)**：融资金额未披露，但代币估值（FDV）达到4亿美元。此轮融资由一家大型保险公司的风投部门（暗示为MassMutual Ventures）领投，并吸引了如Ethena创始人Guy Young和Paxos创始人Rich Teo等知名天使投资人 2。

投资者的质量，尤其是在战略轮中，是评估项目潜力的一个强有力信号。种子轮验证了团队在加密原生圈的能力和人脉。而战略轮则成功引入了传统金融巨头（MassMutual）和成功的DeFi项目创始人的资本。保险公司是全球固定收益市场的最大参与者，它们的直接投资（即使通过风投部门）表明了对链上固收作为未来资产类别的认真探索。这不仅为Treehouse带来了资金，更带来了通往机构世界的宝贵桥梁和信誉背书。

### **链上表现评估**

* **TVL分析**：在DeFiLlama上，与项目相关的主要有两个实体。投资者应关注名为“Treehouse Protocol”的条目，其TVL为\*\*$531.85M\*\*，主要分布在以太坊（$425.26M）和Mantle（$106.58M）6。另一个名为“Treehouse Finance”且TVL极低的条目应被视为无关或已废弃的项目 19。  
* **增长轨迹**：项目自2024年9月启动以来，表现出强劲的早期增长势头。其tETH金库曾在一天内吸引了8600万美元的TVL，并已累计吸引超过3万个独立钱包地址和12万枚ETH的存款 2。  
* **市场数据分析**：$TREE代币上线后交易活跃。其24小时交易量与市值的比率一度超过160% 5，这表明市场对其高度关注和流动性充足，但同时也暗示了早期阶段可能存在较高的投机性波动。

## **V. 全面风险与安全审计**

### **智能合约安全：顶级防护标准**

Treehouse在智能合约安全方面投入巨大，展现了其“安全第一”的开发文化。

* **第三方审计**：项目已通过多家行业顶级安全公司的审计，包括**Trail of Bits, Sigma Prime, Fuzzland, 和 WatchPug** 8。与单一审计相比，多家顶级公司的交叉验证大大降低了代码层面的技术风险。  
* **漏洞赏金计划**：项目在**HackenProof**平台上设立了活跃的漏洞赏金计划，为发现严重智能合约漏洞的白帽黑客提供高达25万美元的奖励 8。这是一种持续性的安全保障措施。  
* **保险基金**：项目还设立了一个专门的**DAO保险基金**，作为应对黑天鹅事件的额外保障层 1。

这种全方位的安全投入使Treehouse在技术安全方面处于DeFi协议的第一梯队。这虽然是其复杂系统成功的必要条件，但并非充分条件。技术安全无法完全消除经济模型风险或预言机操纵风险，这些是同样致命的独立风险领域。

### **协议与经济风险**

* **tETH策略风险 (源自白皮书)**：  
  * **LST脱锚风险**：核心风险在于stETH与ETH的价格脱钩，可能导致在Aave上的杠杆头寸被清算。白皮书的回测分析显示，其策略可以抵御15.79%的价格下跌，远超历史上最严重的约6.7%的脱钩事件，显示出较强的鲁棒性 7。  
  * **利率风险**：当Aave的借款利率飙升并超过stETH的质押收益时，策略将面临亏损。白皮书指出这种情况很少见，且协议内置的安全机制（如主动偿还部分债务）能有效缓解其影响 7。  
* **DOR预言机风险**：DOR本质上是一个定制化的预言机系统。如果Panelists的经济激励（质押$TREE的收益）不足以覆盖其发动攻击的潜在利润，那么该系统就可能面临合谋攻击或数据操纵的风险。这是一个长期且关键的风险点。  
* **采用与网络效应风险**：正如项目方自身和本报告多次指出的，整个商业模式的成功最终取决于DOR能否被市场广泛采用，形成网络效应。如果失败，Treehouse将沦为一个“有解决方案但没有问题”的项目，其代币价值也将难以支撑 9。

### **历史事件尽调**

对Treehouse Finance的历史进行尽职调查，未发现任何与项目方相关的安全漏洞、欺诈或重大负面争议。调研过程中的主要挑战是过滤掉大量来自同名实体（如食品公司或教育平台）的无关信息 29。

## **VI. 团队、社区与生态系统**

### **核心团队评估**

* **领导层**：项目由联合创始人兼CEO **Brandon Goh** 领导 21，其他核心创始人包括  
  **Ben L.** (产品/运营), **Bryan Goh** (TradFi和RWA专家), 和技术负责人 **Thu Như Anh** (DOR和tAssets的构建者) 9。  
* **团队背景**：团队成员拥有传统金融、数字资产和链上数据工程的复合背景 9。尤其值得注意的是，部分联合创始人拥有在Tier-1区块链项目Polkadot的工作经历 8。这种背景组合与项目旨在连接TradFi概念和DeFi基础设施的宏大目标高度契合，是项目非常宝贵的无形资产。

### **社区与社交媒体情绪**

* **激励计划**：项目通过名为“GoNuts”的奖励计划（已进行两季）来引导社区和驱动早期参与。该计划通过积分（“Nuts”）、乘数（“Buffs”）和NFT（“TSC NFTs”）等游戏化方式，激励用户持有tETH和提供流动性 33。  
* **空投策略**：项目实施了清晰的空投策略，包括基于GoNuts计划的追溯性空投，以及面向币安BNB持有者的战略性空投 16。这表明项目方致力于代币的广泛分发，以在初期建立庞大的用户基础。  
* **社交媒体**：官方渠道包括Discord (discord.gg/treehousefi), X (Twitter) (x.com/TreehouseFi) 和官方博客 10。由于名称混淆，从Reddit等平台评估有机社区情绪较为困难，但其官方Subreddit  
  r/Treehousefinance 36 是一个规模虽小但专注的社区中心。

### **项目动能与路线图**

* **近期动态**：项目近期最重要的里程碑事件是2025年4月宣布的战略轮融资，以及2025年7月在Binance、Coinbase等顶级交易所的代币生成事件（TGE）和上线交易 15。  
* **路线图**：项目规划了清晰的未来发展路径，包括tETH的L2扩展、DOR主网上线，以及一个名为“Project Bamboo”的远期利率协议市场 8。这展示了项目在产品迭代和生态扩展方面的持续规划。

## **VII. 可行的投资策略与机会**

本节为不同类型的投资者，特别是具备开发背景的投资者，提供与Treehouse生态系统互动的多种可行策略。

### **直接代币投资 ($TREE)**

* **看涨逻辑**：项目成功构建DeFi利率基础层，DOR被广泛采用。这将通过查询费和质押需求驱动对$TREE代币的巨大需求，导致价格大幅升值。这是一个对团队、愿景和机构背景的长期押注。  
* **看跌逻辑**：DOR未能形成网络效应，tETH仅作为一个小众的高收益产品存在，核心叙事失败。$TREE因缺乏实用场景和费用收入而价值停滞。主要风险在于采用失败。

### **收益耕作与流动性提供 (高APR机会)**

* **基础策略**：直接持有tETH，赚取基础的LST收益和杠杆策略带来的额外套利收益 7。这是参与生态最简单、风险相对较低的方式。  
* **进阶策略**：参与“GoNuts”奖励计划，通过在指定金库或LP池中持有tETH或gtETH来赚取“Nuts”积分，这些积分可能在未来兑换为空投或其它奖励 34。  
* **高级策略**：在Uniswap或Curve等DEX上为$TREE或tETH的交易对提供流动性 5。这类策略通常在早期提供非常高的APR，但投资者需承担无常损失（Impermanent Loss）的风险。  
* **复杂策略（套期保值）**：对于高阶玩家，可以构建德尔塔中性策略。例如，在为TREE/ETH池提供流动性的同时，在Bybit等支持永续合约的交易所上做空等值的TREE合约\[4\]。此举旨在对冲TREE价格下跌的风险，从而专注于赚取交易手续费和流动性挖矿奖励。这是一种高技术门槛、高操作复杂度的策略。

### **协议参与**

* **质押$TREE**：将$TREE质押到“预存款金库”（Pre-Deposit Vaults）中，以支持（back）可信的DOR Panelists，并分享他们的报价奖励。据称年化收益率（APR）可高达75% 38。这相当于直接押注于预言机系统的准确性。  
* **成为Panelist**：对于资金雄厚且具备技术能力的实体，可以申请成为DOR的Panelist。这需要运行基础设施并质押大量资本，但能直接从协议中获得奖励。

### **开发者生态参与**

* **资助计划与生态基金**：项目计划设立一个“八位数”（即超过1000万美元）的生态基金以支持生态发展 15。开发者可以申请资助（Grants），用于在Treehouse之上构建新产品、将DOR集成到现有dApp或开发工具 16。  
* **创建自定义代理/资产**：对于有开发背景的投资者，最直接的参与方式是构建与协议交互的dApp。例如，可以开发一个自动复投tETH收益的“收益优化器”，或一个使用DOR作为定价输入的结构化产品。这是为生态系统增加价值并可能创造收入的最佳途径。开发者应参考官方文档站 docs.treehouse.finance 1 获取集成所需的核心原语信息。

**表2：Treehouse Finance：投资策略矩阵**

| 策略 | 潜在回报 (APR/APY) | 主要优势 | 主要劣势 | 主要风险 | 投资者画像 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **长期持有 $TREE** | 价格增值 | 潜在回报高，直接押注核心愿景 | 波动性高，价值实现周期长 | 采用失败风险，市场整体风险 | 高风险偏好，长线价值投资者 |
| **持有 tETH** | 中-高 (LST收益+套利) | 收益稳定，风险相对较低（已审计） | 收益率受市场利率影响 | 智能合约风险，LST脱锚风险 | 风险偏好较低，寻求稳定增强收益的DeFi用户 |
| **提供流动性 (LP)** | 高-极高 (初期) | APR极高，赚取交易费和挖矿奖励 | 操作复杂，需要主动管理 | 无常损失风险，智能合约风险 | 高风险偏好，经验丰富的DeFi农民 |
| **质押$TREE (支持Panelist)** | 高 (可达75% APR) | 直接参与协议核心机制，收益率高 | 资金有锁定期，与Panelist表现挂钩 | Panelist表现不佳或作恶的风险 | 对协议机制有深入理解的投资者 |
| **开发者资助/构建** | 资助金/项目收入 | 获取非稀释性资金，深度参与生态 | 开发周期长，成功不确定性高 | 项目失败风险，技术实现难度 | 具备区块链开发能力的个人或团队 |

## **VIII. 结论与最终投资建议**

### **综合评估**

Treehouse Finance代表了DeFi领域一种极具雄心的尝试：为混乱的链上世界建立一套有序的、可信的利率标准。这个愿景极具吸引力，因为它触及了DeFi走向成熟、与机构资本融合的根本性障碍。项目拥有一个背景匹配的强大团队、来自顶级加密风投和传统金融巨头的双重背书，以及堪称典范的智能合约安全实践。这些因素共同构成了其强大的基本面。

然而，与巨大的潜力并存的是同等量级的挑战。项目的核心价值——DOR——的成功，完全依赖于能否引导一个双边网络（数据提供方和数据使用方）并实现广泛的市场采用，这是一个极其困难的过程。此外，其tETH收益策略的内在复杂性也带来了无法完全消除的经济风险。

### **最终投资建议**

综合以上所有分析，本报告对Treehouse Finance的投资评级为：**建议 (Recommend)**。

此评级基于以下分层逻辑，以适应不同类型的投资者：

* **对于长线、高风险偏好的风险投资者**：**建议**将Treehouse Finance作为投资组合的一部分。该项目具备成为DeFi基础层协议的潜力，一旦成功，其回报将是巨大的。这是一个典型的“高风险、高回报”的VC式押注。  
* **对于寻求稳健收益的普通DeFi用户**：建议采取\*\*中立 (Neutral)\*\*立场。可以考虑通过其经过多重审计的tETH金库参与，以获取增强型收益，但应将主要仓位投入更成熟的协议，并密切关注DOR的采用进展，再做进一步决策。  
* **对于具备开发背景的投资者或团队**：\*\*强烈建议 (Strongly Recommend)\*\*关注其生态系统基金和资助计划。这是一个获得非稀释性资金、在一个极具潜力的新兴赛道上进行构建的绝佳机会。参与构建本身就是一种深度投资，其潜在回报可能远超单纯的代币投机。

## **IX. 参考文献**

1

#### **引用的著作**

1. Treehouse Finance \- Decentralized Finance \- IQ.wiki, 访问时间为 七月 31, 2025， [https://iq.wiki/wiki/treehouse-finance](https://iq.wiki/wiki/treehouse-finance)  
2. TreeHouse Finance: Project Guide | Latest Updates, Presale & Airdrop \- Bitget Wallet, 访问时间为 七月 31, 2025， [https://web3.bitget.com/th/dapp/treehouse-finance-25090](https://web3.bitget.com/th/dapp/treehouse-finance-25090)  
3. Treehouse Price: TREE Live Price Today | Market Cap & Chart Analysis | Bybit, 访问时间为 七月 31, 2025， [https://www.bybit.com/en/price/treehouse](https://www.bybit.com/en/price/treehouse)  
4. Treehouse Price Today | TREE Price Chart & Market Cap | Phemex, 访问时间为 七月 31, 2025， [https://phemex.com/price/treehouse](https://phemex.com/price/treehouse)  
5. Treehouse price today, TREE to USD live price, marketcap and chart ..., 访问时间为 七月 31, 2025， [https://coinmarketcap.com/currencies/treehouse/](https://coinmarketcap.com/currencies/treehouse/)  
6. Treehouse Protocol \- DefiLlama, 访问时间为 七月 31, 2025， [https://defillama.com/protocol/treehouse-protocol](https://defillama.com/protocol/treehouse-protocol)  
7. tAsset Whitepaper v1.0 \- Treehouse Finance, 访问时间为 七月 31, 2025， [https://www.treehouse.finance/tAsset\_Whitepaper.pdf](https://www.treehouse.finance/tAsset_Whitepaper.pdf)  
8. Treehouse Finance Analysis | Rating, Review & Stats \- Coinlaunch, 访问时间为 七月 31, 2025， [https://coinlaunch.space/projects/treehouse-finance/](https://coinlaunch.space/projects/treehouse-finance/)  
9. Research Report｜Treehouse Project Overview & $TREE Token ..., 访问时间为 七月 31, 2025， [https://www.bitget.com/news/detail/12560604886331](https://www.bitget.com/news/detail/12560604886331)  
10. How Treehouse Can Help Maximize Your DeFi Assets \[Waitlist OPEN\] \- Medium, 访问时间为 七月 31, 2025， [https://medium.com/@treehousefinance/how-treehouse-finance-can-help-maximize-your-defi-assets-waitlist-open-b3dc03faa4db](https://medium.com/@treehousefinance/how-treehouse-finance-can-help-maximize-your-defi-assets-waitlist-open-b3dc03faa4db)  
11. treehouse Seed round, March 16, 2022 \- Seedtable, 访问时间为 七月 31, 2025， [https://seedtable.com/funding-round/treehouse\_Seed\_round%2C\_March\_16%2C\_2022-REYGDE9](https://seedtable.com/funding-round/treehouse_Seed_round%2C_March_16%2C_2022-REYGDE9)  
12. DeFi analytics platform Treehouse raises $18M in seed funding ..., 访问时间为 七月 31, 2025， [https://cryptonary.com/defi-analytics-platform-treehouse-raises-18m-in-seed-funding/](https://cryptonary.com/defi-analytics-platform-treehouse-raises-18m-in-seed-funding/)  
13. treehouse Company Information \- Funding, Investors, and More \- Seedtable, 访问时间为 七月 31, 2025， [https://seedtable.com/startups/treehouse-MN4XY4N](https://seedtable.com/startups/treehouse-MN4XY4N)  
14. DeFi Fixed Income Platform Treehouse Finance Completes New Funding Round, with Ethena Founder Guy Young Among Investors \- Tiger Brokers, 访问时间为 七月 31, 2025， [https://www.itiger.com/news/2527210449](https://www.itiger.com/news/2527210449)  
15. Treehouse Finance reaches $400 million token valuation in new funding round \- The Block, 访问时间为 七月 31, 2025， [https://www.theblock.co/post/350816/defi-treehouse-finance-400-million-token-valuation-funding](https://www.theblock.co/post/350816/defi-treehouse-finance-400-million-token-valuation-funding)  
16. What Is Treehouse (TREE)? \- Binance Academy, 访问时间为 七月 31, 2025， [https://academy.binance.com/en/articles/what-is-treehouse-tree](https://academy.binance.com/en/articles/what-is-treehouse-tree)  
17. Treehouse Finance, 访问时间为 七月 31, 2025， [https://www.treehouse.finance/](https://www.treehouse.finance/)  
18. Treehouse Finance \- Decentralized Finance \- IQ.wiki, 访问时间为 七月 31, 2025， [https://iq.wiki/zh/wiki/treehouse-finance](https://iq.wiki/zh/wiki/treehouse-finance)  
19. TreeHouse Finance \- DefiLlama, 访问时间为 七月 31, 2025， [https://defillama.com/protocol/treehouse-finance](https://defillama.com/protocol/treehouse-finance)  
20. TreeHouse Finance \- DefiLlama, 访问时间为 七月 31, 2025， [https://defillama.com/protocol/treehouse-finance?pool2=true](https://defillama.com/protocol/treehouse-finance?pool2=true)  
21. Treehouse Finance \- The Decentralized Fixed Income Layer \- YouTube, 访问时间为 七月 31, 2025， [https://www.youtube.com/watch?v=f6p62caoxrY](https://www.youtube.com/watch?v=f6p62caoxrY)  
22. What is PENDLE? \- Uphold, 访问时间为 七月 31, 2025， [https://uphold.com/blog/crypto-basics/what-is-pendle](https://uphold.com/blog/crypto-basics/what-is-pendle)  
23. What is Pendle Finance? Yield Tokenization Explained & How to Earn | Nansen, 访问时间为 七月 31, 2025， [https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn](https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn)  
24. What Is Pendle Finance? Introducing Yield Tokenization \- ByteTree, 访问时间为 七月 31, 2025， [https://www.bytetree.com/research/2024/05/what-is-pendle-finance-introducing-yield-tokenization/](https://www.bytetree.com/research/2024/05/what-is-pendle-finance-introducing-yield-tokenization/)  
25. Yield TVL Rankings \- DefiLlama, 访问时间为 七月 31, 2025， [https://defillama.com/protocols/yield](https://defillama.com/protocols/yield)  
26. Binance Rewards $12.5M in TREE Airdrops: Fixed Income DeFi Set to Shake Crypto Markets \- CryptoNinjas, 访问时间为 七月 31, 2025， [https://www.cryptoninjas.net/news/binance-rewards-12-5m-in-tree-airdrops-fixed-income-defi-set-to-shake-crypto-markets/](https://www.cryptoninjas.net/news/binance-rewards-12-5m-in-tree-airdrops-fixed-income-defi-set-to-shake-crypto-markets/)  
27. Treehouse (Financial Software) 2025 Company Profile: Valuation, Funding & Investors, 访问时间为 七月 31, 2025， [https://pitchbook.com/profiles/company/493698-25](https://pitchbook.com/profiles/company/493698-25)  
28. Treehouse Finance | HackenProof, 访问时间为 七月 31, 2025， [https://hackenproof.com/companies/treehouse-finance](https://hackenproof.com/companies/treehouse-finance)  
29. About Us \- Leadership Team \- TreeHouse Foods, Inc., 访问时间为 七月 31, 2025， [https://www.treehousefoods.com/about-us/leadership-team-1/default.aspx](https://www.treehousefoods.com/about-us/leadership-team-1/default.aspx)  
30. TreeHouse Foods, Inc. \- Investors, 访问时间为 七月 31, 2025， [https://www.treehousefoods.com/investors/investor-overview/default.aspx](https://www.treehousefoods.com/investors/investor-overview/default.aspx)  
31. Treehouse / new private club : r/Marin \- Reddit, 访问时间为 七月 31, 2025， [https://www.reddit.com/r/Marin/comments/17gmfuf/treehouse\_new\_private\_club/](https://www.reddit.com/r/Marin/comments/17gmfuf/treehouse_new_private_club/)  
32. Treehouse Launches TREE Token Across Binance, OKX, Coinbase, and Top Exchanges Following Token Generation Event \- PR Newswire, 访问时间为 七月 31, 2025， [https://www.prnewswire.com/news-releases/treehouse-launches-tree-token-across-binance-okx-coinbase-and-top-exchanges-following-token-generation-event-302517520.html](https://www.prnewswire.com/news-releases/treehouse-launches-tree-token-across-binance-okx-coinbase-and-top-exchanges-following-token-generation-event-302517520.html)  
33. From Roots to Gaia: TREE Airdrop Checker \- Treehouse Finance, 访问时间为 七月 31, 2025， [https://www.treehouse.finance/blog/tree-airdrop-checker](https://www.treehouse.finance/blog/tree-airdrop-checker)  
34. Into the Dark Forest: Your Guide to GoNuts Season 2, 访问时间为 七月 31, 2025， [https://www.treehouse.finance/blog/s2-nuts-guide](https://www.treehouse.finance/blog/s2-nuts-guide)  
35. Binance Announces Treehouse (TREE) HODLer Airdrop and Upcoming Listing, 访问时间为 七月 31, 2025， [https://www.binance.com/en/square/post/07-28-2025-binance-announces-treehouse-tree-hodler-airdrop-and-upcoming-listing-27555645529026](https://www.binance.com/en/square/post/07-28-2025-binance-announces-treehouse-tree-hodler-airdrop-and-upcoming-listing-27555645529026)  
36. Treehouse (u/TreehouseFinance) \- Reddit, 访问时间为 七月 31, 2025， [https://www.reddit.com/user/TreehouseFinance/submitted/](https://www.reddit.com/user/TreehouseFinance/submitted/)  
37. Is Treehouse, invested by Binance, about to have its TGE?, 访问时间为 七月 31, 2025， [https://www.binance.com/en-IN/square/post/26752730493153](https://www.binance.com/en-IN/square/post/26752730493153)  
38. Treehouse Finance Airdrop Guide: How to Claim Your TREE Tokens After July 29, 2025, 访问时间为 七月 31, 2025， [https://bingx.com/en/learn/how-to-claim-treehouse-finance-tree-airdrop-tokens](https://bingx.com/en/learn/how-to-claim-treehouse-finance-tree-airdrop-tokens)  
39. FAQ | Treehouse Protocol, 访问时间为 七月 31, 2025， [https://www.treehouse.finance/faq](https://www.treehouse.finance/faq)  
40. Treehouse ETH Price: TETH Live Price Today | Market Cap & Chart Analysis | Bybit, 访问时间为 七月 31, 2025， [https://www.bybit.com/en/price/treehouse-eth/](https://www.bybit.com/en/price/treehouse-eth/)  
41. TREEHOUSE ETH Live Price Chart, Market Cap & News Today | LCX, 访问时间为 七月 31, 2025， [https://lcx.com/prices/treehouse-eth](https://lcx.com/prices/treehouse-eth)  
42. DefiLlama \- DeFi Dashboard, 访问时间为 七月 31, 2025， [https://defillama.com/](https://defillama.com/)  
43. Treehouse Price History and Historical Data \- CoinMarketCap, 访问时间为 七月 31, 2025， [https://coinmarketcap.com/currencies/treehouse/historical-data/](https://coinmarketcap.com/currencies/treehouse/historical-data/)  
44. Cosmo price today, COSMO to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 31, 2025， [https://coinmarketcap.com/currencies/cosmo/](https://coinmarketcap.com/currencies/cosmo/)  
45. CoinGecko: Cryptocurrency Prices, Charts, and Crypto Market Cap, 访问时间为 七月 31, 2025， [https://coingecko.com/](https://coingecko.com/)  
46. Quoll Finance price today, QUO to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 31, 2025， [https://coinmarketcap.com/currencies/quoll-finance/](https://coinmarketcap.com/currencies/quoll-finance/)  
47. Inside the Rise of $TREE : Why TreehouseFi Is Becoming th | Crypto\_Alchemy on Binance Square, 访问时间为 七月 31, 2025， [https://www.binance.com/en/square/post/27635184938041](https://www.binance.com/en/square/post/27635184938041)  
48. Tether-Focused Blockchain Stable Raises $28 Million in Seed Round to Boost USDT Adoption \- AInvest, 访问时间为 七月 31, 2025， [https://www.ainvest.com/news/tether-focused-blockchain-stable-raises-28-million-seed-boost-usdt-adoption-2507/](https://www.ainvest.com/news/tether-focused-blockchain-stable-raises-28-million-seed-boost-usdt-adoption-2507/)  
49. Marketing Intern, 访问时间为 七月 31, 2025， [https://treehouse.freshteam.com/jobs/iCgXC0lythVn/marketing-summer-intern](https://treehouse.freshteam.com/jobs/iCgXC0lythVn/marketing-summer-intern)  
50. Treehouse Finance (TREE) token sale analytics and information, private/seed sale price, tokenomics, 访问时间为 七月 31, 2025， [https://icoanalytics.org/projects/treehouse-finance/](https://icoanalytics.org/projects/treehouse-finance/)  
51. TreeHouse Foods Q2 Earnings Summary \- Nasdaq, 访问时间为 七月 31, 2025， [https://www.nasdaq.com/articles/treehouse-foods-q2-earnings-summary](https://www.nasdaq.com/articles/treehouse-foods-q2-earnings-summary)  
52. TreeHouse Foods (THS) Latest News & Stock Updates \- Page 1, 访问时间为 七月 31, 2025， [https://public.com/stocks/ths/news](https://public.com/stocks/ths/news)  
53. TreeHouse Foods Q2 Profit, Revenue Beat Estimates; Raises Annual Sales Outlook, 访问时间为 七月 31, 2025， [https://www.nasdaq.com/articles/treehouse-foods-q2-profit-revenue-beat-estimates-raises-annual-sales-outlook](https://www.nasdaq.com/articles/treehouse-foods-q2-profit-revenue-beat-estimates-raises-annual-sales-outlook)  
54. Treehouse Foods stock hits 52-week low at 19.08 USD \- Investing.com, 访问时间为 七月 31, 2025， [https://www.investing.com/news/company-news/treehouse-foods-stock-hits-52week-low-at-1908-usd-93CH-4163493](https://www.investing.com/news/company-news/treehouse-foods-stock-hits-52week-low-at-1908-usd-93CH-4163493)  
55. UK Holidays & Travel Guides 2023 | The Independent, 访问时间为 七月 31, 2025， [https://www.the-independent.com/travel/uk](https://www.the-independent.com/travel/uk)  
56. Treehouse has changed my life : r/teamtreehouse \- Reddit, 访问时间为 七月 31, 2025， [https://www.reddit.com/r/teamtreehouse/comments/1ga0f2x/treehouse\_has\_changed\_my\_life/](https://www.reddit.com/r/teamtreehouse/comments/1ga0f2x/treehouse_has_changed_my_life/)  
57. hey what do you think of Treehouse Techdegree : r/webdev \- Reddit, 访问时间为 七月 31, 2025， [https://www.reddit.com/r/webdev/comments/xwk4q0/hey\_what\_do\_you\_think\_of\_treehouse\_techdegree/](https://www.reddit.com/r/webdev/comments/xwk4q0/hey_what_do_you_think_of_treehouse_techdegree/)  
58. Is TreeHouse worth it? : r/webdev \- Reddit, 访问时间为 七月 31, 2025， [https://www.reddit.com/r/webdev/comments/8ixgl1/is\_treehouse\_worth\_it/](https://www.reddit.com/r/webdev/comments/8ixgl1/is_treehouse_worth_it/)  
59. Team Treehouse due to shut down down to “running out of cash” by 2022, and not paying employees : r/learnprogramming \- Reddit, 访问时间为 七月 31, 2025， [https://www.reddit.com/r/learnprogramming/comments/qfgx8r/team\_treehouse\_due\_to\_shut\_down\_down\_to\_running/](https://www.reddit.com/r/learnprogramming/comments/qfgx8r/team_treehouse_due_to_shut_down_down_to_running/)  
60. Developer Guide \- Treehouse, 访问时间为 七月 31, 2025， [https://treehouse.sh/docs/dev/](https://treehouse.sh/docs/dev/)  
61. treehousedev/treehouse \- GitHub, 访问时间为 七月 31, 2025， [https://github.com/treehousedev/treehouse](https://github.com/treehousedev/treehouse)  
62. Just-in-Time Funding Guidelines \- Treehouse, 访问时间为 七月 31, 2025， [https://www.treehouseforkids.org/just-in-time-funding-guidelines/](https://www.treehouseforkids.org/just-in-time-funding-guidelines/)  
63. Just in Time Funding for Extracurricular and School Activities \- Treehouse, 访问时间为 七月 31, 2025， [https://www.treehouseforkids.org/our-services/just-in-time-funding/](https://www.treehouseforkids.org/our-services/just-in-time-funding/)  
64. Treehouse Finance Reaches $400M Token Valuation in New Funding Round, 访问时间为 七月 31, 2025， [https://www.wellesleyhillsfinancial.com/2025/04/20/treehouse-finance-reaches-400m-token-valuation-in-new-funding-round/](https://www.wellesleyhillsfinancial.com/2025/04/20/treehouse-finance-reaches-400m-token-valuation-in-new-funding-round/)  
65. Yield Farming | Definition, Strategies, & Risks | Britannica Money, 访问时间为 七月 31, 2025， [https://www.britannica.com/money/cryptocurrency-yield-farming](https://www.britannica.com/money/cryptocurrency-yield-farming)  
66. Yield Farming in DeFi Explained: Possibilities, Risks & Strategies \- Cointelegraph, 访问时间为 七月 31, 2025， [https://cointelegraph.com/explained/defi-yield-farming-explained](https://cointelegraph.com/explained/defi-yield-farming-explained)  
67. The Ultimate DeFi Yield Farming Guide \- Arbismart, 访问时间为 七月 31, 2025， [https://arbismart.com/blog/the-ultimate-defi-yield-farming-guide/](https://arbismart.com/blog/the-ultimate-defi-yield-farming-guide/)  
68. Yield Farming∗, 访问时间为 七月 31, 2025， [https://econ.ntu.edu.tw/wp-content/uploads/2023/12/HKBU\_1111020.pdf](https://econ.ntu.edu.tw/wp-content/uploads/2023/12/HKBU_1111020.pdf)  
69. DeFi Yield Farming: A Beginner's Guide, 访问时间为 七月 31, 2025， [https://www.arkhamintelligence.com/research/defi-yield-farming-beginners](https://www.arkhamintelligence.com/research/defi-yield-farming-beginners)  
70. DeFi Yield Farming Strategies and Risks \- Finance Magnates, 访问时间为 七月 31, 2025， [https://www.financemagnates.com/cryptocurrency/education-centre/defi-yield-farming-strategies-and-risks/](https://www.financemagnates.com/cryptocurrency/education-centre/defi-yield-farming-strategies-and-risks/)  
71. 访问时间为 一月 1, 1970， [https.treehouse.finance/blog/tree-airdrop-checker](http://docs.google.com/https.treehouse.finance/blog/tree-airdrop-checker)