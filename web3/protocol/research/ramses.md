

# **Ramses Exchange (RAM): 深度投资与安全分析报告**

## **I. 执行摘要**

### **高层概要**

本报告对部署在Arbitrum网络上的去中心化金融（DeFi）协议Ramses Exchange（及其原生代幣RAM）进行全面、详尽的投资评估与安全分析。Ramses Exchange定位为Arbitrum的中央流动性枢纽，其核心技术融合了两种复杂的DeFi原语：基于Uniswap V3的集中流动性做市商（CLMM）机制与Andre Cronje开创的ve(3,3)代币经济模型。这种混合设计旨在实现极高的资本效率，但同时也引入了显著的技术复杂性和安全风险。

分析表明，Ramses在资本效率方面表现出色，其交易量与总锁定价值（TVL）之比常常远超竞争对手。然而，协议的财务状况显示其长期处于负盈利状态，即代币激励的成本超过了其产生的协议收入，这引发了对其经济模型可持续性的严重质疑。安全方面，本报告深入剖析了2024年10月发生的一起导致超过9万美元损失的真实攻击事件，并详细审查了由Consensys Diligence和Code4rena进行的多次安全审计。审计结果揭示了协议核心逻辑中存在关键和重大的漏洞，尽管大部分已修复，但这暴露了其高度定制化的代码库所固有的脆弱性。

### **核心投资论点**

Ramses Exchange代表了一种典型的高风险、高回报的DeFi投资机会。其潜力在于，如果其创新的“飞轮”模型能够成功启动并达到可持续的正反馈循环，早期参与者可能会获得超额回报。然而，这一潜力被重大的、已验证的风险所抵消。这些风险包括：**极高的智能合约风险**，源于其复杂且非“久经考验”的定制代码，并已在真实攻击中得到证实；**不可持续的经济模型**，目前依赖于代币通胀来补贴流动性；以及**两极分化的社区声誉**，其治理模式似乎更倾向于协议合作伙伴而非广泛的散户社区。

### **SWOT分析**

* **优势 (Strengths):**  
  * **高资本效率:** 交易量与TVL之比（Volume/TVL）表现优异，证明其流动性利用率高 1。  
  * **创新混合模型:** 结合了集中流动性与ve(3,3)激励机制，为寻求高收益的成熟用户提供了强大工具 3。  
  * **强大的合作伙伴支持:** 获得了包括Gravita、ICHI在内的多个Arbitrum生态协议的公开支持与集成 5。  
* **劣势 (Weaknesses):**  
  * **已证实的严重安全漏洞:** 经历过一次公开的资金被盗事件，且顶级审计公司发现其核心逻辑中存在关键漏洞 7。  
  * **协议持续亏损:** 协议的激励支出长期高于其收入，导致负盈利，依赖代币价格维持运营 1。  
  * **总锁定价值（TVL）绝对值低:** TVL长期在数百万美元级别徘徊，与其“流动性枢纽”的定位不符 1。  
* **机会 (Opportunities):**  
  * **Arbitrum生态系统增长:** 作为Arbitrum原生协议，将受益于整个生态系统的持续扩张 11。  
  * **贿赂市场成熟:** 如果其贿赂市场能吸引更多协议参与，可能成为veRAM持有者的稳定收入来源。  
  * **开发者生态:** 协议的复杂性为第三方开发者创造了构建自动化工具和分析平台的机会 12。  
* **威胁 (Threats):**  
  * **激烈的市场竞争:** 面临来自Uniswap、Camelot等成熟DEX的巨大竞争压力 2。  
  * **ve(3,3)模型的可持续性风险:** 类似模型（如Chronos）已有失败先例，存在“雇佣军资本”流失和代币死亡螺旋的风险 15。  
  * **声誉风险:** 匿名团队、有争议的激励金申请历史以及对内部人士有利的模式，可能限制其获得更广泛的社区信任 6。

### **最终投资评级**

**不建议 (Not Recommended)**

**理由:** 尽管Ramses Exchange在资本效率和激励机制设计上展现出创新，但其安全记录中已证实的严重漏洞和真实资金损失事件，构成了不可忽视的根本性风险。协议的经济模型目前处于不可持续的负盈利状态，其长期价值高度依赖于一个尚未被证明能够自我维持的投机性飞轮。对于寻求将资本部署于安全、稳健协议的投资者而言，其风险敞口过高。虽然高级用户可能通过积极管理和复杂策略获取短期高收益，但这并不能抵消其核心智能合约和经济模型中存在的根本性缺陷。

---

## **II. 项目与技术深度剖析**

本章节将深入解构Ramses Exchange的基本构成，不仅阐述其功能，更将剖析其各组件如何协同工作以创造价值。

### **1\. 核心定位：Arbitrum流动性枢纽**

Ramses Exchange将自身定位为Arbitrum生态系统的中央流动性枢纽，旨在为用户提供深度流动性、低交易费用和最小化的滑点，尤其是在相关资产（如稳定币）的交易中 10。该协议是一个完全去中心化的交易所（DEX），构建于以太坊领先的Layer 2扩容方案——Arbitrum One网络之上 3。

项目方明确表示，其目标是复兴由DeFi领域知名但富有争议的开发者Andre Cronje所开创的Solidly项目的“最初愿景”。为此，Ramses强调了三个核心宗旨：**社区（Community）、去中心化（Decentralization）和功能性（Functionality）** 18。这种品牌叙事是一种战略性的举措，意图将自身与一位公认的DeFi创新者及其理念联系起来，从而在拥挤的市场中建立独特性。

### **2\. ve(3,3)飞轮：解构激励引擎**

协议的经济模型是所谓的“ve(3,3)”系统，这是一种源自Solidly的复杂激励结构，旨在协调协议参与者（流动性提供者、代币持有者、协议本身）的利益 3。其机制可以分解为以下几个步骤：

1. **流动性提供 (Liquidity Provision):** 流动性提供者（LPs）将他们的资产（如ETH、USDC）存入平台的流动性池中，并获得代表其份额的LP代币 26。  
2. **赚取RAM激励:** LPs可以将这些LP代币质押（stake）到相应的“计量器”（Gauges）中，从而开始赚取协议的原生代币RAM作为奖励 26。  
3. **投票托管 (Vote-Escrow):** 用户可以选择将他们赚取或购买的RAM代币进行锁定，以换取一个代表投票权的NFT，即veRAM（vote-escrowed RAM）18。锁定的时间越长，获得的veRAM投票权重越大。  
4. **引导排放 (Directing Emissions):** veRAM持有者每周可以进行投票，决定下一周期（epoch）的RAM代币排放将分配给哪些流动性池 25。  
5. **veRAM持有者收益:** 作为锁定代币和参与治理的回报，veRAM持有者可以获得三方面的收益：  
   * **交易费用 (Trading Fees):** 按比例分享他们所投票的池子产生的部分交易费用 25。  
   * **外部贿赂 (Bribes):** 其他协议为了吸引流动性到自己的代币池，会向投票给他们池子的veRAM持有者支付“贿赂”（通常以稳定币或其自身代币的形式）25。  
   * **反稀释リベート (Rebase):** 获得额外的veRAM奖励，以防止其投票权因新的RAM代币被锁定而稀释 25。

这个过程旨在创造一个正向的“飞轮效应”：其他协议通过**贿赂**veRAM持有者来为自己的池子争取RAM**排放**，这会提高该池子LPs的年化收益率（APR），从而吸引更多的**流动性**（TVL）。更深的流动性会吸引更多的**交易量**，为veRAM持有者产生更多的**交易费**，这使得持有veRAM变得更有利可图，进而激励更多人锁定RAM，增强了整个系统的正反馈循环 6。

### **3\. 集中流动性（CL）的实现**

Ramses V2及V3版本在基础的ve(3,3)模型之上，集成了一个集中流动性做市商（CLMM），其架构基于“久经考验”的Uniswap V3 3。这一关键升级允许流动性提供者（LPs）将其资金集中在特定的价格区间内进行做市，相比于传统的

x⋅y=k 全范围做市池，这极大地提高了资本效率 4。在Ramses中，这些集中流动性头寸被铸造成NFTs，便于管理和交易 4。

该协议同时支持传统的“遗产”（Legacy）池（即Uniswap V2风格）和集中的CL池，为不同需求的用户提供了灵活性，但这也显著增加了系统的整体复杂性 4。为了更好地服务不同类型的资产，Ramses提供了多种费率等级，例如为USDC-DAI这类超稳定资产对设计的0.005%费率，以及为竞争激烈的蓝筹资产对设计的0.025%费率 28。

这种混合模型的核心创新在于，它试图将Uniswap V3的资本效率与ve(3,3)的激励引导能力相结合。理论上，协议可以通过贿赂和RAM排放来精确激励在最需要的价格范围内提供流动性的LPs，从而用更少的资本实现更低的交易滑点。然而，这种创新也带来了巨大的技术挑战。Consensys的审计报告特别强调，Ramses团队在UniV3核心代码之上构建了一个“新的会计系统”，用于按周跟踪每个头寸的有效流动性以计算奖励 8。正是这个高度定制化的、连接两个复杂系统的“胶水”代码，成为了协议最主要的风险来源。审计发现的“债务被错误相加而非相减”的关键漏洞 8，正是这个复杂奖励会计逻辑失败的直接体现。对于投资者而言，这意味着协议的成败不仅取决于市场接受度，更取决于团队驾驭这种极高技术复杂性的能力。其出现新颖、未被发现的漏洞的风险，远高于标准DEX。

### **4\. 团队与治理结构**

* **团队:** Ramses的创始团队使用假名，由联合创始人“Dog”和“North”领导 26。据报道，他们来自Fantom上早期的Solidly团队和DEUS Finance团队 17。这一背景表明团队具备DeFi领域的开发经验，但也使他们与一些经历过挑战的项目联系在一起，例如DEUS的稳定币DEI曾发生脱锚，并导致用户在Ramses上无法正常提款 30。根据IQ.wiki的资料，完整团队还包括前端开发者、智能合约开发者和社区管理员等角色 28。  
* **治理:** 尽管协议宣称致力于去中心化，但为了应对紧急情况，它设立了一个由社区中“受信任的实体”组成的理事会 18。这是一种为安全而做出的务实的中心化权衡。然而，Consensys的审计报告指出，一个单一地址保留了单方面修改流动性池费用的权力，这是一个重大的中心化风险 8。此外，协议提及使用OpenZeppelin的AccessManager来限制特定功能，最初由核心贡献者的多签钱包控制，并计划未来过渡到去中心化治理模型 31。

---

## **III. 市场分析与竞争定位**

本节将利用链上数据评估Ramses的财务表现及其在竞争激烈的Arbitrum DEX生态中的地位。

### **1\. 链上财务健康状况**

截至最新数据，Ramses的各项财务指标呈现出复杂的图景：

* **总锁定价值 (TVL):** 协议的TVL一直处于较低水平，在约**250万美元至570万美元**之间波动 1。对于一个旨在成为流动性枢纽的DEX而言，这是一个非常小的规模。  
* **交易量 (Volume):** 交易量波动较大，但相对于其TVL而言通常表现亮眼。24小时交易量曾被记录在**508万美元、536万美元、571万美元，甚至高达765万美元** 1。30天累计交易量曾超过  
  **1亿美元** 1。  
* **费用与收入 (Fees & Revenue):** 根据DeFiLlama的数据，协议的年化交易费用（用户支付）约为**47万美元至51.4万美元**，而年化协议收入（协议分成）约为**38万美元至41.1万美元** 1。累计费用已超过622万美元 1。  
* **协议盈利 (Protocol Earnings):** 这是一个关键的负面指标。DeFiLlama的数据持续显示协议的**年化盈利为负**（例如，-35.4万美元、-37.5万美元）1。这明确表明，协议为激励流动性而支付的RAM代币价值，超过了协议从交易费中获得的收入。  
* **代币指标 (RAM):**  
  * **市值 (Market Cap):** 市值较低，约在**170万美元至250万美元**之间 1。  
  * **质押价值 (Staked Value):** 质押的RAM代币价值远高于其市值，曾报告高达**1000万美元或1170万美元** 1。质押价值与市值之比（Staked/Mcap）极高，通常超过450% 1。

### **2\. 资本效率分析**

每日交易量与TVL的比率是衡量资本效率的核心指标。对于Ramses而言，该比率频繁**大于1.0**（例如，571万美元交易量 / 416万美元TVL ≈ 1.37）1。这种高效率是团队在Arbitrum治理论坛中反复强调的核心优势，他们认为其模型使流动性比那些拥有更高原始TVL的竞争对手“工作得更努力” 2。

然而，这种高效率的背后隐藏着一个悖论。一方面，高Volume/TVL比率 1 表明Ramses的模型在路由交易和利用资本方面非常有效。另一方面，持续为负的协议盈利 1 证明了这种效率是通过RAM代币排放进行补贴的。换言之，激励这种“高效”流动性的成本目前高于其产生的收入。这使得整个经济模型在当前状态下是不可持续的，它依赖于市场对所发行RAM代币的估值高于协议的运营赤字。

此外，质押的RAM价值是其流通市值的4.5倍以上 1，这意味着绝大多数“活跃”供应实际上是被锁定且非流动的。虽然这可能表明veRAM持有者的高度信念，但它也造成了流通盘（float）极小。因此，RAM代币的价格对小额买卖订单极为敏感，具有极高的波动性。这对纯粹的现货持有者构成了高风险，但可能对交易者有吸引力。同时，这也将治理权力集中在少数大型锁定者手中，加剧了“内部人 vs. 外部人”的动态。

### **3\. Arbitrum竞争格局**

Arbitrum是领先的Layer 2解决方案，占据了以太坊L2总TVL的46%以上，并拥有一个庞大而活跃的DEX生态系统 11。

* **主要竞争对手:** 包括市场领导者Uniswap、同为Arbitrum原生的Camelot，以及另一个ve(3,3) DEX——Chronos。  
* **与Camelot的比较:** 在Arbitrum的治理论坛中，Ramses的支持者曾直接比较：Camelot的交易量/费用约高出35%，但申请的激励金是Ramses的3倍 2。Camelot拥有远高于Ramses的TVL（超过5000万美元）和总交易量（超过32.5亿美元）13。Camelot的模型更侧重于为合作伙伴提供灵活的流动性解决方案和强大的支持 13。  
* **Chronos的警示:** Chronos是Arbitrum上另一个ve(3,3) DEX，其TVL在上线后一周内因高额质押激励而爆炸式增长至超过2.17亿美元 15。然而，其TVL此后暴跌至仅剩约10万美元 16。这生动地展示了ve(3,3)模型面临的“雇佣军资本”问题：流动性是短暂的，只追逐短期的高APR，一旦激励下降便会迅速撤离。Chronos的失败为Ramses的长期可持续性画上了一个巨大的问号。

### **4\. 用户指标 (Dune Analytics)**

Dune Analytics上的仪表板提供了一些关键的用户数据。由用户@xplorer创建的仪表板显示，协议拥有**27,189个独立用户**和**10,540个代币持有者** 38。每周和每日的用户数及交易量图表显示出活动的峰值，但缺乏持续的、指数级的增长，表明其用户基础相对小众但保持活跃 38。存在其他用于追踪veRAM和veNFT持有者的仪表板，这表明有一个由数据驱动的用户社区在密切监控协议的治理动态 47。

### **表格：Arbitrum DEX 竞争矩阵**

| 协议 (Protocol) | 模型 (Model) | TVL (approx.) | 30日交易量 (30d Vol) | 30日收入 (30d Rev) | 交易量/TVL比率 (Vol/TVL Ratio) | 关键差异化 (Key Differentiator) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Ramses Exchange** | ve(3,3) CL Hybrid | $4.16M 1 | $110.74M 1 | $32.1k 1 | \~26.6x | 极高的资本效率，复杂的贿赂和排放引导机制。 |
| **Uniswap (Arbitrum)** | CL AMM | $271.31M 14 | $12.719B 50 | $3.21M 14 | \~46.9x | 市场领导者，品牌效应强，流动性最深。 |
| **Camelot** | Custom AMM (v2/v3) | $52.56M 14 | $1.302B 50 | $67k 14 | \~24.8x | Arbitrum原生，生态系统中心，为合作伙伴提供定制化流动性方案。 |
| **Chronos** | ve(3,3) | $107k 16 | $26.9k 16 | $0 16 | \~0.25x | 失败的ve(3,3)案例，TVL在激励枯竭后崩溃。 |

*注：数据基于报告撰写时可用的最新信息，可能会有变动。交易量/TVL比率根据30日交易量和当前TVL估算，用于展示相对资本效率。*

---

## **IV. RAM与veRAM代币经济学**

本节将分析RAM代币的经济设计、价值捕获机制，以及与其供应动态相关的风险。

### **1\. RAM代币：效用与供应**

* **效用 (Utility):** RAM代币的核心效用是用于锁定以换取veRAM。veRAM赋予持有者治理权（即引导RAM排放的能力）和协议收入的索取权（交易费和贿赂）26。同时，它也是激励流动性提供者的主要工具 26。  
* **供应动态与数据差异:** 这是本报告发现的一个主要风险点。关于RAM代币的供应量，各大主流数据平台提供了相互矛盾的信息：  
  * **CoinMarketCap** 报告最大供应量为2亿枚，自报流通供应量为1.2亿枚 18。  
  * **CoinGecko** 报告最大供应量为**无限（∞）**，总供应量约8.17亿枚，流通供应量约1.4亿枚 52。  
  * **DeFiLlama** 的数据与CoinGecko更为一致，其市值约250万美元，全稀释估值（FDV）约1430万美元，暗示了庞大的总供应量 10。  
  * 一个**Dune Analytics**仪表板则报告最大供应量为5亿枚，流通供应量约1.52亿枚 38。

这种在关键数据上的不一致是一个严重的透明度问题。它可能源于极其复杂且文档记录不佳的排放/解锁计划，或是团队未能主动确保数据聚合器获取正确信息。这种基本的不确定性使得进行可靠的全稀释估值（FDV）分析几乎不可能，从而显著增加了投资风险，并反映出该项目缺乏机构级的透明度 53。在本报告的后续分析中，将基于其排放模型，假定其供应是高度通胀的。

### **2\. veRAM的价值捕获模型**

veRAM持有者通过以下方式捕获协议价值：

* 按其投票权重比例，分享他们所投票池子产生的交易费用的75%（根据DeFiLlama的方法论注释，该比例可能是动态的）1。  
* 获得100%的外部协议为这些池子支付的贿赂 25。  
* 获得veRAM形式的リベート（rebase），以保护其治理权和收益份额免受新锁定者的稀释 25。

### **3\. 代币分配与排放计划**

* **初始分配:** 项目通过一次改良的“公平启动”（Fair Launch）拍卖活动来确定初始价格并去中心化地分配初始供应量 54。计划的代币分配如下：排放（60%）、veRAM分配（15%）、团队（10%）、生态系统（10%），以及另外一个5%的部分 54。  
* **排放计划:** RAM的排放由每周的veRAM投票决定。协议设计了一个可调整的指数衰减机制，以随时间推移逐步减少排放量。每周排放量的5%（此比例可调）将直接分配给团队的运营多签钱包，用于支付运营开销。此外，排放量可以根据协议收入进行调整，以管理通胀水平 3。

### **4\. 估值分析**

使用DeFiLlama的数据对协议进行估值分析：

* **市销率 (Price-to-Sales, P/S Ratio):** 该指标将协议市值与其年化收入进行比较。  
  * 市值 ≈ 218万美元 1  
  * 年化收入 ≈ 39.2万美元 1  
  * P/S Ratio ≈ $2.18M / 392k≈5.56  
* **市费率 (Price-to-Fees, P/F Ratio):** 该指标将协议市值与用户支付的总年化费用进行比较。  
  * 市值 ≈ 218万美元 1  
  * 年化费用 ≈ 49万美元 1  
  * P/F Ratio ≈ $2.18M / 490k≈4.45

这些比率相对较低，可能暗示协议被低估。然而，这一结论必须在协议负盈利和高代币通胀的背景下进行审视。低估值可能是市场对其可持续性风险的定价反映。

---

## **V. 全面风险与安全评估**

鉴于投资者对历史风险事件和审计数据的高度重视，本章节是报告中最为关键的部分。

### **1\. 历史安全事件：2024年10月的攻击**

* **事件:** 2024年10月24日，Ramses Exchange遭到攻击，损失超过**9万美元** 7。  
* **漏洞:** 攻击者利用了FeeDistributor合约中奖励分发逻辑的一个关键缺陷。根本原因是，在每次奖励被领取后，合约中的tokenTotalSupplyByPeriod变量没有相应减少，这使得攻击者可以重复领取奖励 7。  
* **攻击路径:** 攻击者使用了多个不同的NFT tokenId来绕过基于单个NFT的领取记录（veWithdrawnTokenAmountByPeriod），并反复调用getPeriodReward()函数。此外，该函数缺乏对所请求奖励周期是否为过去周期的验证，使得攻击者能够领取旧的、未被认领的奖励，最终耗尽了奖励池 7。  
* **影响:** 这次事件不仅造成了直接的资金损失，更严重损害了协议的声誉。它将审计报告中指出的理论风险，活生生地转变成了实际且可被利用的攻击。

### **2\. 安全审计深度剖析**

Ramses V3版本经历了多次审计，包括来自Consensys Diligence的正式审计和Code4rena的社区审计竞赛。这些审计报告揭示了协议深层的安全问题，并且这些问题高度集中于协议最创新的部分——即团队为连接ve(3,3)和集中流动性而编写的定制化奖励会计系统。这表明，协议的风险并非来自其“久经考验”的、分叉自Uniswap V3或Solidly的部分，而恰恰在于团队原创的“胶水”代码。

#### **A. Consensys Diligence (V3) 报告 (2024年7月-9月)**

8

* **总体结论:** 审计发现了“复杂的漏洞”，并对“潜在未被发现的问题”表示担忧，主要原因是系统的**复杂性极高**以及**缺乏足够的测试覆盖** 8。  
* **关键级发现 (6.1 \- 已修复):** 在positionPeriodSecondsInRange函数中，本应被减去的债务值（secondsDebtX96）被错误地**相加**了。这是一个根本性的逻辑错误，会导致奖励计算被极度夸大，从而允许恶意用户通过特定操作骗取远超其应得的奖励。  
* **主要/中等风险发现:**  
  * 在同一周期内销毁并重新铸造头寸时，会导致会计计算错误 8。  
  * Oracle.periodCumulativesInside函数在一个unchecked代码块中可能因下溢而返回错误结果 8。  
  * 如果某个奖励周期被跳过（无任何交易活动），会导致奖励被夸大（团队已确认该问题，计划在审计范围外修复）8。  
  * 债务计算的舍入方向不一致，总是对用户有利而非协议（已修复）8。  
  * 工厂合约部署过程中存在被抢先交易攻击（griefing attack）的风险（已修复）8。  
* **团队响应:** 团队对审计报告反应积极，并修复了大部分已发现的关键和中等风险问题。然而，报告本身就强调了其定制代码的脆弱性。

#### **B. Code4rena (V3) 竞赛 (2024年10月)**

9

* **总体结论:** 这场由71名社区审计员参与的竞赛，共发现了2个独特的中等风险漏洞和多个低风险问题 9。  
* **中等风险发现 (M-01):** 再次确认了“跳过周期”的问题。报告详细描述了如果一个周期的**后续**周期没有交易活动，那么该周期的奖励计算将被夸大。该问题最初被法官降级，但在审计员提供了清晰的、可被恶意利用的攻击路径后，被重新升级为中等风险 9。  
* **中等风险发现 (M-02):** 闪电贷（flash()）函数中的协议费用计算完全错误。代码中使用了除法而非乘法，导致协议只能收到其应得费用的一小部分（例如，应收80%但实收1/80），严重影响了协议从闪电贷中获取收入的能力 9。  
* **团队响应:** 团队确认了这些发现的有效性，并承认闪电贷费用计算是移植代码时的疏忽。

### **3\. 综合风险因素**

* **技术与智能合约风险 (非常高):** 一次真实的资金被盗事件，加上顶级审计公司在其核心创新逻辑中发现的关键漏洞，共同构成了一个清晰且现实的资本损失风险。协议是分叉代码和定制逻辑的复杂混合体，这是已知的漏洞温床 31。此外，Arbiscan扫描也提示了潜在的编译器相关漏洞 57。  
* **中心化风险 (中等):** 单一地址可以更改费用 8，紧急理事会/多签钱包拥有巨大权力 18。Code4rena报告还指出，一个被盗的财库地址可能永久性地阻止协议升级或窃取协议资金 9。  
* **模型可持续性风险 (高):** 如前文分析，协议的负盈利状态和对代币通胀的依赖，使其经济模型非常脆弱，容易陷入类似其竞争对手Chronos所经历的死亡螺旋 16。  
* **团队与声誉风险 (中等-高):** 团队匿名，且与过往成败参半的项目有关联 17。他们在Arbitrum论坛上备受争议的激励金申请，表明他们可能缺乏广泛的草根社区支持，更多地依赖于一个由合作伙伴组成的联盟 5。

---

## **VI. 社区与生态系统情绪**

本节评估项目的社会层面，这对于一个将“社区”作为其核心宗旨之一的协议至关重要。

### **1\. 社交媒体表现**

协议在Twitter、Discord、Medium和Telegram等平台都设有官方渠道 23。Bitget的一份研究报告曾指出，RAM代币价格在24小时内上涨超过50%，显示出当时“极高的人气” 17。然而，从现有资料来看，很难对整体社交媒体情绪进行量化分析，因为大部分内容是价格播报或通用描述 18。Reddit上的讨论也较为稀少，多为技术支持或特定问题求助 30。

### **2\. 治理论坛话语：两极分化的阵营**

Arbitrum STIP（短期激励计划）的治理论坛是观察Ramses社区动态的最佳窗口，其中呈现出明显的两极分化：

* **强大的合作伙伴支持:** Ramses的生态合作伙伴，如Gravita、ICHI、oath.eco等，在论坛中给予了强有力的支持。他们称赞Ramses团队是优秀的合作伙伴，技术能力强，并致力于推动Arbitrum生态的成长 2。  
* **尖锐的社区批评:** 与此同时，许多独立的社区成员对Ramses的激励金申请提出了严厉批评。他们称其提案是“最糟糕的之一”、“掠夺性的”，并认为其设计目的是为了让veRAM持有者（内部人）致富，而非真正惠及LPs或整个生态系统。批评者指出，协议极低的市场和TVL证明了其用户接纳度不高，并质疑一个市值远低于申请金额的项目凭何获得如此大额的资助 2。  
* **团队的反驳:** 面对质疑，Ramses团队及其支持者主要以“资本效率”作为辩护的核心。他们认为，Ramses的TVL比其他DEX的“死流动性”更“有用”，其激励模型创造了更好的利益一致性 2。

### **3\. 整体生态系统认知**

从这些讨论中可以得出一个重要结论：Ramses所谓的“社区驱动” 18，在很大程度上指的是一个由

**协议合作伙伴**组成的“B2B”（企业对企业）社区，而非广泛的个人用户基础。治理讨论清晰地展示了这种分野：持有veRAM并能从贿赂市场中获益的协议是其坚定的支持者 6，而无直接利益关联的社区成员则普遍持怀疑态度 6。协议的初始代币分配也明确提到，会向“Arbitrum上的顶级协议”提供veNFTs 18。

因此，投资者不应将Ramses的“社区”理解为传统意义上庞大而热情的用户群体。其成功更多地与它建立和维护一个协议联盟的能力有关——这个联盟中的成员认为，通过贿赂来获取流动性比传统的流动性挖矿更有效。这意味着，Ramses的增长依赖于其“B2B销售渠道”，而非散户的草根采用。

---

## **VII. 可行的投资策略**

本节为投资者提供一份按策略和风险承受能力划分的实用指南，直接回应用户的核心需求。

### **1\. 投资机会矩阵**

为了将所有潜在的投资途径整合到一个单一的、可比较的框架中，下表对不同的Ramses投资策略进行了分析。

#### **表格：Ramses投资策略比较**

| 策略 | 描述 | 主要目标 | 预期收益来源 (APR/APY) | 优势 | 劣势与风险 | 技术门槛 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. 现货购买RAM代币** | 直接在DEX购买并持有RAM代币。 | 投机性价格增值。 | 无 | 操作简单，流动性尚可。 | 价格波动性极高，代币通胀严重，缺乏内在价值支撑。 | 低 |
| **2\. 被动LP (通过收益聚合器)** | 将资产存入如Beefy Finance等平台的Ramses机枪池。 | 自动复利，被动收益。 | LP交易费 \+ RAM奖励（自动复利）。 | 无需主动管理，节省Gas费和时间。 | 聚合器自身的智能合约风险，收益率可能低于主动管理。 | 低 |
| **3\. 主动LP (传统池)** | 在V2风格的传统池中提供流动性。 | 赚取交易费和RAM排放。 | LP交易费 \+ RAM奖励。 | 概念简单，无常损失（IL）相对可控。 | 资本效率低，收益率通常低于集中流动性池。 | 中 |
| **4\. 主动LP (集中流动性池)** | 在V3风格的CL池中主动管理头寸。 | 最大化费用捕获和RAM奖励。 | 高额LP交易费 \+ RAM奖励。 | 资本效率极高，潜在收益率最高。 | 极高的无常损失风险，需要持续主动管理和调整价格范围。 | 高 |
| **5\. veRAM锁定与贿赂挖矿** | 锁定RAM换取veRAM，每周投票。 | 捕获协议收入和外部贿赂。 | 交易费分成 \+ 外部贿赂 \+ veRAMリベート。 | 参与协议治理，获得与LP无关的收益流。 | 资本被长期锁定，RAM价格风险，贿赂市场不稳定。 | 高 |
| **6\. 杠杆/对冲策略** | 结合借贷协议和衍生品进行复杂操作。 | 放大收益或对冲风险。 | 多重协议的复合收益。 | 潜在收益极高，可实现市场中性。 | 极高的清算风险、多重智能合约风险、资金费率成本，操作极其复杂。 | 非常高 |
| **7\. 生态系统开发** | 为Ramses构建增值工具或协议。 | 创造新的收入来源。 | 服务费、治理代币、潜在的激励金。 | 填补市场空白，成为生态核心部分。 | 开发成本高，需要深厚的技术背景，成功不确定。 | 非常高 |

### **2\. 高APR DeFi策略详解**

#### **A. 集中流动性（CL）供应**

这是在Ramses V3上实现高收益的核心。通过将流动性集中在当前价格附近的一个狭窄区间，LPs可以比在全范围的V2池中赚取多得多的交易费用 4。

* **风险:** 如果资产价格移出设定的范围，将面临巨大的无常损失（IL）。这需要LPs进行积极的头寸管理和再平衡。  
* **策略:** 识别交易量大的波动性资产对（如RAM/WETH）或交易量大的稳定资产对，并在一个狭窄的价格带内提供流动性。定期收获（harvest）奖励，并根据市场情况决定是复投还是出售。

#### **B. 贿赂与费用最大化 (veRAM持有者策略)**

这是Ramses的“元博弈”（meta-game）。策略的重点不仅仅是提供流动性，而是获取足够大的veRAM头寸来影响RAM的排放方向，从而捕获贿赂。

* **策略:** 每周密切关注贿赂市场，分析哪些池子提供的贿赂收益相对于其产生的费用最具吸引力。将自己的veRAM投票给这些最高效的池子。这种收益独立于直接的LPing。像Ennead这样的协议已经建立了流动性包装器（如neadRAM），以优化这一过程，使用户无需直接管理veRAM NFT 47。

#### **C. 杠杆与对冲挖矿 (高级策略)**

* **杠杆借贷/LPing:** 正如Reddit上的讨论所示 66，一个高级用户可以在Aave等借贷平台上存入蓝筹资产（如ETH），然后以其为抵押借出稳定币，再用这些稳定币在Ramses上组建LP头寸。这种方式可以放大收益，但同时也放大了清算风险。  
* **Delta中性策略:** 对于最成熟的用户，可以构建Delta中性头寸来赚取收益，同时对冲基础资产的价格波动风险 67。  
  * **概念示例:** 对于一个RAM/WETH池，用户可以在提供流动性的同时，在永续合约交易所做空等量的RAM和WETH。其目标是使LP费用和RAM排放的净收益大于维持空头头寸的资金费率成本。这是一个极其复杂且风险极高的策略，涉及资金费率风险、清算风险和多重智能合约风险。

### **3\. 开发者机遇**

对于具备开发背景的投资者，Ramses的复杂性本身就创造了机遇。

* **自动化流动性管理器:** 主动管理CL头寸的复杂性为自动化策略保险库创造了市场。开发者可以构建智能合约，为用户自动重新平衡CL头寸，并从中收取管理费，类似于Gamma或DeFi Edge为其他DEX所做的工作 13。一个针对Ramses分叉项目的机器人管理器的存在证实了这种需求 12。  
* **收益聚合器与流动性包装器:** 可以在Beefy Finance等平台上构建机枪池 73，或者创建新颖的流动性锁定代币（如El Ramses或neadRAM 49），将管理veRAM头寸和收取贿赂的复杂过程抽象化，为普通用户提供便利。  
* **分析与工具:** 协议的数据差异和系统复杂性催生了对更好分析工具的需求。开发者可以构建一个全面的Dune仪表板、一个贿赂效率计算器，或者一个专门为Ramses LPs设计的无常损失追踪工具。  
* **激励计划:** 虽然没有找到Ramses自身的开发者激励计划，但他们积极参与Arbitrum STIP 2，并且DeFi生态系统的普遍结构表明，在Ramses之上构建有价值工具的协议，可以向Ramses的生态系统基金 54 或更广泛的Arbitrum基金会寻求资金支持。

---

## **VIII. 结论与最终建议**

### **综合分析**

本报告的分析将所有关键线索汇集在一起，描绘出一幅复杂的画面。Ramses Exchange是一个技术上雄心勃勃的协议，它展示了卓越的资本效率，但同时也被严重的安全缺陷历史、一个可疑且不可持续的经济模型，以及两极分化的社区声誉所困扰。其投资价值完全取决于一个信念：团队能够克服这些重大障碍，并且其ve(3,3)飞轮最终能达到可持续的“逃逸速度”。

**看涨观点（Bull Case）** 认为，协议的创新模型如果成功，将使其成为Arbitrum上最高效的流动性层。对于能够驾驭其复杂性的高级用户和协议而言，其贿赂市场和集中流动性挖矿提供了独特的alpha机会。如果协议能够解决其安全和经济问题，早期参与者可能会获得巨大回报。

**看跌观点（Bear Case）** 则认为，已证实的、可被利用的智能合约漏洞是不可逾越的红线。协议的负盈利模式是一颗定时炸弹，依赖于一个通胀代币的投机价值，极易陷入类似Chronos的死亡螺旋。其“B2B”式的社区模式也限制了其获得广泛采用的潜力。

### **最终投资评级与理由**

**投资评级：不建议 (Not Recommended)**

理由:  
本分析的核心结论是，Ramses Exchange目前展现出的风险远大于其潜在回报。对于任何理性的投资者而言，资本安全应是首要考量。

1. **不可接受的安全风险:** 协议不仅在顶级审计中被发现存在关键逻辑漏洞 8，而且这些漏洞的同类问题已在一次真实的攻击中被利用，导致了资金损失 7。这表明其核心代码库的安全性尚未达到可信赖的水平。对于DeFi协议而言，这是最根本的缺陷。  
2. **不可持续的经济模型:** 协议的财务数据显示，它在用价值更高的激励（RAM排放）换取价值更低的收入（交易费），导致持续亏损 1。这种模式能否扭转，完全取决于投机性的“飞轮”能否启动，这是一个没有保证的假设。  
3. **缺乏透明度与广泛信任:** 关键的代币经济学数据在各大平台上的巨大差异 18，以及在治理论坛上与广大社区的紧张关系 6，都表明该项目缺乏成为一个可信赖的公共基础设施所需的透明度和社区共识。

虽然高级交易者和DeFi“科学家”或许能通过积极的、高风险的策略从中获利，但这更像是利用一个不稳定系统中的套利机会，而非一项稳健的长期投资。对于绝大多数投资者，包括那些具备技术背景的投资者，将资金投入一个已被证明存在根本性安全和经济模型缺陷的协议中，是不明智的。市场上有大量更安全、更透明、模型更成熟的替代方案。

### **最终思考**

Ramses Exchange的未来充满了不确定性。它会重蹈Chronos的覆辙，在激励枯竭后归于沉寂，还是能浴火重生，解决其根本问题，最终成为Arbitrum DeFi基础设施的关键部分？答案很可能更多地取决于其团队能否彻底修复其安全隐患和不可持续的经济模型，而非仅仅依赖其创新的设计。在此之前，观望是唯一审慎的选择。

---

## **IX. 参考文献**

* 75 Bybit. "Ramses Exchange Price."  
* 18 CoinMarketCap. "Ramses Exchange."  
* 76 Binance. "Ramses Exchange Price."  
* 77 Crypto.com. "Ramses Exchange Price."  
* 78 Kraken. "Ramses Exchange price."  
* 79 CoinMarketCap. "Ramifi Protocol."  
* 80 Read the Docs. "Ramses Documentation."  
* 81 UNECE. "HLG-MOS Work Programme 2025."  
* 82 GitHub. "RamsesExchange/ramses-assets."  
* 27 GitHub Pages. "Ramses Exchange."  
* 3 Ramses Exchange Docs. "Ramses V3 Docs."  
* 12 Scribd. "Shadow Exchange Bot\_ Data Extraction."  
* 83 Read the Docs. "Ramses Core overview."  
* 22 Coinbase. "About Ramses Exchange."  
* 19 DIA Data. "DIA Partners with Ramses Exchange."  
* 8 Consensys Diligence. "Ramses V3 Audit."  
* 84 CEC Research. "An architecture that enables cross-chain interoperability..."  
* 85 IACR ePrint Archive. "TOOP: A Protocol for Cross-Chain Asset Ownership Transfer."  
* 37 Coinbase. "Ramses Exchange Price, RAM Price, Live Charts, and Marketcap."  
* 25 CoinMarketCap. "Ramses v2 Exchange."  
* 86 CoinMarketCap. "Ramses Exchange (old)."  
* 87 CoinMarketCap. "Pharaoh Exchange."  
* 88 CoinMarketCap. "Top Decentralized Exchanges (DEX) Ranked by Volume."  
* 89 CoinMarketCap. "Sitemap Exchanges."  
* 20 Coinpaprika. "Ramses Exchange (RAM)."  
* 23 Forbes. "Ramses Exchange (RAM) Price, Charts & News."  
* 90 CoinMarketCal. "Crypto Calendar."  
* 26 Token Terminal. "Ramses Exchange About."  
* 52 CoinGecko. "Ramses Exchange Price."  
* 91 MEXC. "Ramses Exchange (RAM) Tokenomics."  
* 4 Gate.io Learn. "Understanding Shadow Exchange."  
* 51 Bitget. "What is Ramses Exchange (RAM)?"  
* 53 Coinbase Learn. "Tokenomics 101."  
* 27 GitHub Pages. "Ramses Exchange." 27  
* 8 Consensys Diligence. "Ramses V3 Audit." 8  
* 92 GitHub. "RamsesExchange."  
* 93 GitHub. "RamsesExchange/ramses-v3-core."  
* 9 Code4rena. "Ramses Exchange Report."  
* 31 GitHub. "code-423n4/2024-10-ramses-exchange."  
* 65 Arc.ai. "Publications Protocol."  
* 94 DIA Data. "2024 in Review: Product Development."  
* 21 Ramses Exchange Docs. "What is RAMSES?"  
* 95 IQ.wiki. "Cruize Finance."  
* 96 Arbitrum Foundation Forum. "Kwenta X Perennial Arbitrum Onboarding Incentives."  
* 97 Cryptohopper. "The Morning Cup: You, Me, and the SEC."  
* 98 Ramses Exchange Website. (Inaccessible)  
* 3 Ramses V3 Docs. "Tokenomics & Emissions."  
* 10 DeFi Llama. "Ramses Exchange (RAM) \- DEX Volume."  
* 1 DeFi Llama. "Ramses Exchange (RAM)."  
* 32 DeFi Llama. "Ramses Exchange \- Denomination USD."  
* 33 DeFi Llama. "Ramses Exchange (RAM) \- Incentives."  
* 35 DeFi Llama. "DEXs \- Ramses Exchange."  
* 99 DeFi Llama. "Yields \- Ramses CL."  
* 100 Token Terminal. "Explorer \- ARPU."  
* 36 DeFi Llama. "Ramses Exchange (RAM) \- Holders Revenue."  
* 26 Token Terminal. "Ramses Exchange About." 26  
* 34 Token Terminal. "Explorer."  
* 101 Token Terminal. "Ramses Exchange \- Gas Used."  
* 102 Token Terminal. "Uniswap Labs \- ARPU."  
* 56 Code4rena. "Ramses Exchange Audit."  
* 103 CoinMarketCal. "Messari Reports Strong Q1 for TRON..."  
* 52 CoinGecko. "Ramses Exchange Price." 52  
* 23 Forbes. "Ramses Exchange (RAM) Price, Charts & News." 23  
* 18 CoinMarketCap. "Ramses Exchange." 18  
* 104 FXEmpire. "Ramses Exchange (RAM) Profile & Statistics."  
* 76 Binance. "Ramses Exchange Price." 76  
* 8 Consensys Diligence. "Ramses V3 Audit." 8  
* 38 Dune Analytics. "@xplorer/Ramses Exchange Dashboard."  
* 47 Dune Analytics. "Discover Content."  
* 48 Dune Analytics. "ramses-exchange."  
* 49 Dune Analytics. "Eliteness."  
* 37 Coinbase. "Ramses Exchange Price." 37  
* 8 Consensys Diligence. "Ramses V3 Audit Summary."  
* 9 Code4rena. "Ramses Exchange Report Summary."  
* 55 Ramses V3 Docs. "Audits."  
* 7 QuillAudits. "Hack Analysis: Ramses Exchange Exploit."  
* 9 Code4rena. "Ramses Exchange Report." 9  
* 29 Consensys Diligence. "Ramses V3 Audit PDF."  
* 56 Code4rena. "Ramses Exchange Audit." 56  
* 8 Consensys Diligence. "Ramses V3 Audit." 8  
* 31 GitHub. "code-423n4/2024-10-ramses-exchange." 31  
* 105 Arbitrum Foundation Forum. "Alchemix LTIPP Application."  
* 28 IQ.wiki. "Ramses."  
* 18 CoinMarketCap. "Ramses Exchange." 18  
* 24 DappRadar. "Ramses Exchange DeFi stats."  
* 17 Bitget News. "Ramses Exchange (DApp)."  
* 5 Arbitrum Foundation Forum. "Ramses Final STIP Round 1."  
* 54 Cryptorank. "RAMSES Token Sale Info."  
* 30 Reddit. "Question about Ramses Exchange dei/frax LP."  
* 60 Bitget. "RAM to ILS Converter."  
* 61 Bitget. "RAM to MAD Converter."  
* 62 Bitget. "RAM to EUR Converter."  
* 18 CoinMarketCap. "Ramses Exchange." 18  
* 17 Bitget News. "Ramses Exchange news." 17  
* 11 QuickNode. "Top 10 Decentralized Exchanges on Arbitrum."  
* 23 Forbes. "Ramses Exchange Resources." 23  
* 58 Ramses Exchange Docs. "dApp and Socials."  
* 59 Dropstab. "Ramses Exchange (RAM)."  
* 6 Arbitrum Foundation Forum. "Ramses Final STIP Round 1." 5  
* 57 Arbiscan. "Token Ramses (RAM)."  
* 63 Reddit. "Learn about nextgen automated market makers."  
* 64 Reddit. "How increase revenue as a solo stacker."  
* 64 Reddit. "How increase revenue as a solo stacker." 64  
* 17 Bitget News. "Ramses Exchange (DApp)." 17  
* 8 Consensys Diligence. "Ramses V3 Audit." 8  
* 2 Arbitrum Foundation Forum. "Ramses Final STIP Round 1." (Page 10\)  
* 106 Reddit. "Yesterday more transactions were made on the..."  
* 13 Arbitrum Foundation Forum. "Camelot Final STIP Round 1."  
* 14 DeFi Llama. "Protocols \- Dexs \- Arbitrum."  
* 50 DeFi Llama. "DEXs by Chain \- Arbitrum."  
* 39 DeFi Llama. "Compare Chains \- OP Mainnet & Arbitrum."  
* 40 DeFi Llama. "DEXs by Chains."  
* 107 Alchemy. "List of 37 Decentralized Exchanges (DEXs) on Arbitrum."  
* 108 Reddit. "Ostium, a top perpetual DEX on Arbitrum..."  
* 109 CoinGecko. "Top Arbitrum One DEXs by 24-Hour Trading Volume."  
* 110 DappRadar. "Top Arbitrum Exchanges."  
* 111 Alchemy. "List of decentralized derivatives on Arbitrum."  
* 23 Forbes. "Ramses Exchange (RAM) Price, Charts & News." 23  
* 18 CoinMarketCap. "Ramses Exchange." 18  
* 112 Tracxn. "Ramses Exchange \- About the company."  
* 17 Bitget News. "Ramses Exchange news." 17  
* 21 Ramses Exchange Docs. "What is RAMSES?" 21  
* 41 CoinMarketCap. "Camelot Token (GRAIL)."  
* 42 Idea Usher. "Develop DEX Platform like Camelot."  
* 43 Arbitrum Portal. "Projects \- Camelot."  
* 44 The Bored Ape Gazette. "The Decentralized Exchange Camelot Is Coming To Apechain..."  
* 113 CryptoRank. "Chronos: Latest News..."  
* 15 The Defiant. "Chronos DEX Attracts $230M..."  
* 45 Cointelegraph. "Arbitrum's Chronos reaches $217M TVL..."  
* 46 Binance Square. "Arbitrum's Chronos Reaches 217 Million USD TVL..."  
* 16 DeFi Llama. "Chronos (CHR)."  
* 114 CoinGecko. "Ramses Exchange (RAM) to CHF."  
* 17 Bitget News. "Ramses Exchange (DApp)." 17  
* 115 Ankr Blog. "Understanding Liquidity Pools..."  
* 116 Arbitrum Foundation Forum. "PancakeSwap LTIPP Application."  
* 117 Reddit. "Liquidity pool pixel ron."  
* 22 Coinbase. "About Ramses Exchange." 22  
* 7 QuillAudits. "Hack Analysis: Ramses Exchange Exploit." 7  
* 4 Gate.io Learn. "Understanding Shadow Exchange." 4  
* 66 Reddit. "Yield Farming Strategies Success Stories & Lessons."  
* 52 CoinGecko. "Ramses Exchange Price." 52  
* 118 Kairon Labs. "A Quick Guide to Yield Farming..."  
* 119 Kriptomat. "Ramses Exchange Price."  
* 67 Reddit. "I Have a (Nearly) Risk-Free Strategy Generating 28% Yield..."  
* 68 Reddit. "Market neutral strategies."  
* 69 Reddit. "Need help with Delta Neutral position."  
* 70 Reddit. "Optimizing Delta Neutral Strategy."  
* 71 Reddit. "Delta Neutral Strategies and Profit From Volatility."  
* 72 Reddit. "Delta neutral strategy."  
* 112 Tracxn. "Ramses Exchange \- About the company." 112  
* 23 Forbes. "Ramses Exchange (RAM) Price, Charts & News." 23  
* 2 Arbitrum Foundation Forum. "Ramses Final STIP Round 1." (Page 10\) 2  
* 19 DIA Data. "DIA Partners with Ramses Exchange." 19  
* 73 Nansen. "What is Beefy Protocol."  
* 74 Beefy Finance Docs. "Vaults."  
* 120 Beefy. "Beefy Multichain Yield Optimizer."  
* 121 Beefy Articles. "Earn GLP with Beefy's new GLP strategy and Vaults."  
* 122 BIM Finance Docs. "STAKE."  
* 43 Arbitrum Portal. "Projects \- RAMSES."  
* 1 DeFi Llama. "Ramses Exchange (RAM)." 1  
* 123 Alchemy. "List of 17 DeFi Yield Aggregators on Arbitrum."  
* 124 Alchemy. "List of 17 DeFi Yield Farming Platforms on Arbitrum."  
* 125 DeFi Llama. "Ramses CL."  
* 126 DeFi Prime. "Yield Aggregators."

#### **引用的著作**

1. Ramses Exchange (RAM) \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/ramses-exchange](https://defillama.com/protocol/ramses-exchange)  
2. \[RAMSES\] \[FINAL\] \[STIP \- Round 1\] \- Page 10 \- Short Term Incentives Program (STIP) Round 1 \- Arbitrum, 访问时间为 六月 25, 2025， [https://forum.arbitrum.foundation/t/ramses-final-stip-round-1/16856?page=10](https://forum.arbitrum.foundation/t/ramses-final-stip-round-1/16856?page=10)  
3. R A M S E S | DOCS \- Ramses Exchange, 访问时间为 六月 25, 2025， [https://v3-docs.ramses.exchange/](https://v3-docs.ramses.exchange/)  
4. Understanding Shadow Exchange \- Gate.com, 访问时间为 六月 25, 2025， [https://www.gate.com/learn/articles/understanding-shadow-exchange/8105](https://www.gate.com/learn/articles/understanding-shadow-exchange/8105)  
5. \[RAMSES\] \[FINAL\] \[STIP \- Round 1\] \- Page 11 \- Short Term Incentives Program (STIP) Round 1 \- Arbitrum Governance Forum, 访问时间为 六月 25, 2025， [https://forum.arbitrum.foundation/t/ramses-final-stip-round-1/16856?page=11](https://forum.arbitrum.foundation/t/ramses-final-stip-round-1/16856?page=11)  
6. \[RAMSES\] \[FINAL\] \[STIP \- Round 1\] \- Arbitrum Governance Forum, 访问时间为 六月 25, 2025， [https://forum.arbitrum.foundation/t/ramses-final-stip-round-1/16856](https://forum.arbitrum.foundation/t/ramses-final-stip-round-1/16856)  
7. Unraveling the $90K Mystery: Inside Ramses Exchange's Reward Exploit \- QuillAudits, 访问时间为 六月 25, 2025， [https://www.quillaudits.com/blog/hack-analysis/ramses-exchange-exploit](https://www.quillaudits.com/blog/hack-analysis/ramses-exchange-exploit)  
8. Ramses V3 \- Consensys Diligence, 访问时间为 六月 25, 2025， [https://diligence.consensys.io/audits/2024/08/ramses-v3/](https://diligence.consensys.io/audits/2024/08/ramses-v3/)  
9. Ramses Exchange \- Code4rena, 访问时间为 六月 25, 2025， [https://code4rena.com/reports/2024-10-ramses-exchange](https://code4rena.com/reports/2024-10-ramses-exchange)  
10. Ramses Exchange (RAM) \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/ramses-exchange?tvl=false\&events=false\&dexVolume=true](https://defillama.com/protocol/ramses-exchange?tvl=false&events=false&dexVolume=true)  
11. Top 10 Decentralized Exchanges (DEXs) on Arbitrum \- QuickNode, 访问时间为 六月 25, 2025， [https://www.quicknode.com/builders-guide/top-10-decentralized-exchanges-on-arbitrum](https://www.quicknode.com/builders-guide/top-10-decentralized-exchanges-on-arbitrum)  
12. Shadow Exchange Bot\_ Data Extraction | PDF \- Scribd, 访问时间为 六月 25, 2025， [https://www.scribd.com/document/856076622/Shadow-Exchange-Bot-Data-Extraction](https://www.scribd.com/document/856076622/Shadow-Exchange-Bot-Data-Extraction)  
13. \[Camelot\] \[FINAL\] \[STIP \- Round 1\] \- Arbitrum Governance Forum, 访问时间为 六月 25, 2025， [https://forum.arbitrum.foundation/t/camelot-final-stip-round-1/17200](https://forum.arbitrum.foundation/t/camelot-final-stip-round-1/17200)  
14. Arbitrum \- Dexs TVL Rankings \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocols/Dexs/Arbitrum](https://defillama.com/protocols/Dexs/Arbitrum)  
15. Chronos DEX Attracts $230M With Modified ve(3,3) Tokenomics \- The Defiant, 访问时间为 六月 25, 2025， [https://thedefiant.io/news/defi/chronos-dex-attracts-usd230m](https://thedefiant.io/news/defi/chronos-dex-attracts-usd230m)  
16. Chronos \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/chronos?revenue=true\&mcap=true\&tokenPrice=true\&tokenVolume=true\&volume=true\&fees=true\&transactions=true\&newUsers=true\&activeUsers=true\&usdInflows=true](https://defillama.com/protocol/chronos?revenue=true&mcap=true&tokenPrice=true&tokenVolume=true&volume=true&fees=true&transactions=true&newUsers=true&activeUsers=true&usdInflows=true)  
17. Ramses Exchange News Today | Latest RAM Updates \- Bitget, 访问时间为 六月 25, 2025， [https://www.bitget.com/price/ramses-exchange/news](https://www.bitget.com/price/ramses-exchange/news)  
18. Ramses Exchange price today, RAM to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/currencies/ramses-exchange/](https://coinmarketcap.com/currencies/ramses-exchange/)  
19. DIA Partners with Ramses Exchange, 访问时间为 六月 25, 2025， [https://www.diadata.org/blog/post/dia-partners-with-ramses-exchange/](https://www.diadata.org/blog/post/dia-partners-with-ramses-exchange/)  
20. Ramses Exchange (RAM) Price \- Live Chart, Index, Market Cap \- CoinPaprika, 访问时间为 六月 25, 2025， [https://coinpaprika.com/coin/ram-ramses-exchange/](https://coinpaprika.com/coin/ram-ramses-exchange/)  
21. What is RAMSES? | RAMSES, 访问时间为 六月 25, 2025， [https://docs.ramses.exchange/](https://docs.ramses.exchange/)  
22. Ramses Exchange \- Onchain App (Earn) \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/web3/dapps/ramses-exchange](https://www.coinbase.com/web3/dapps/ramses-exchange)  
23. Ramses Exchange (RAM) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 六月 25, 2025， [https://www.forbes.com/digital-assets/assets/ramses-exchange-ram/](https://www.forbes.com/digital-assets/assets/ramses-exchange-ram/)  
24. Ramses Exchange \- DeFi Overview, TVL Analysis \- DappRadar, 访问时间为 六月 25, 2025， [https://dappradar.com/dapp/ramses-exchange](https://dappradar.com/dapp/ramses-exchange)  
25. Ramses v2 trade volume and market listings | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/exchanges/ramses-v2/](https://coinmarketcap.com/exchanges/ramses-v2/)  
26. Ramses Exchange about | Token Terminal, 访问时间为 六月 25, 2025， [https://tokenterminal.com/explorer/projects/ramses/about](https://tokenterminal.com/explorer/projects/ramses/about)  
27. Ramses Exchange | Ramses Arbitrum™ | Home, 访问时间为 六月 25, 2025， [https://ramsese-xchange.github.io/](https://ramsese-xchange.github.io/)  
28. Ramses \- Decentralized Finance \- IQ.wiki, 访问时间为 六月 25, 2025， [https://iq.wiki/wiki/ramses](https://iq.wiki/wiki/ramses)  
29. Ramses V3 \- Consensys Diligence, 访问时间为 六月 25, 2025， [https://diligence.consensys.io/audits/2024/08/ramses-v3/ramses-v3-audit-2024-07.pdf](https://diligence.consensys.io/audits/2024/08/ramses-v3/ramses-v3-audit-2024-07.pdf)  
30. Question about Ramses Exchange Dei/Frax LP : r/defi \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/defi/comments/147a00g/question\_about\_ramses\_exchange\_deifrax\_lp/](https://www.reddit.com/r/defi/comments/147a00g/question_about_ramses_exchange_deifrax_lp/)  
31. code-423n4/2024-10-ramses-exchange \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/code-423n4/2024-10-ramses-exchange](https://github.com/code-423n4/2024-10-ramses-exchange)  
32. Ramses Exchange \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/ramses-exchange?denomination=USD](https://defillama.com/protocol/ramses-exchange?denomination=USD)  
33. Ramses Exchange (RAM) \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/ramses-exchange?tvl=false\&events=false\&incentives=true](https://defillama.com/protocol/ramses-exchange?tvl=false&events=false&incentives=true)  
34. Dashboard \- Token Terminal, 访问时间为 六月 25, 2025， [https://tokenterminal.com/explorer](https://tokenterminal.com/explorer)  
35. Ramses Exchange Volume \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/dexs/ramses-exchange](https://defillama.com/dexs/ramses-exchange)  
36. Ramses Exchange \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/ramses-exchange?tvl=false\&events=false\&holdersRevenue=true](https://defillama.com/protocol/ramses-exchange?tvl=false&events=false&holdersRevenue=true)  
37. Ramses Exchange Price, RAM Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/price/ramses-exchange](https://www.coinbase.com/price/ramses-exchange)  
38. Ramses Exchange Dashboard \- Dune Analytics, 访问时间为 六月 25, 2025， [https://dune.com/xplorer/ramses-exchange-dashboard](https://dune.com/xplorer/ramses-exchange-dashboard)  
39. Compare Chains \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/compare-chains?chains=OP+Mainnet\&chains=Arbitrum](https://defillama.com/compare-chains?chains=OP+Mainnet&chains=Arbitrum)  
40. DEXs by chain \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/dexs/chains](https://defillama.com/dexs/chains)  
41. Camelot Token price today, GRAIL to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/currencies/camelot-token/](https://coinmarketcap.com/currencies/camelot-token/)  
42. How to Develop a DEX Platform like Camelot? \- IdeaUsher, 访问时间为 六月 25, 2025， [https://ideausher.com/blog/develop-dex-platform-like-camelot/](https://ideausher.com/blog/develop-dex-platform-like-camelot/)  
43. Bebop \- Arbitrum Portal, 访问时间为 六月 25, 2025， [https://portal.arbitrum.io/projects?chains=arbitrum-one\_arbitrum-nova\_apechain\_cheese\_degen\_ebi-xyz\_pop-apex\_reya\_sanko\_xai\_xchain\&subcategories=defi-other\_defi-tool\_derivatives\_dex\_dex-aggregator\_insurance\_liquidity-management\_options\_portfolio\_rwa\_stablecoin\&project=bebop](https://portal.arbitrum.io/projects?chains=arbitrum-one_arbitrum-nova_apechain_cheese_degen_ebi-xyz_pop-apex_reya_sanko_xai_xchain&subcategories=defi-other_defi-tool_derivatives_dex_dex-aggregator_insurance_liquidity-management_options_portfolio_rwa_stablecoin&project=bebop)  
44. HEAR YE, HEAR YE\!: The Decentralized Exchange Camelot Is Coming To Apechain Later This Year\! \- Bored Ape Gazette, 访问时间为 六月 25, 2025， [https://www.theboredapegazette.com/post/hear-ye-hear-ye-the-decentralized-exchange-camelot-is-coming-to-apechain-later-this-year](https://www.theboredapegazette.com/post/hear-ye-hear-ye-the-decentralized-exchange-camelot-is-coming-to-apechain-later-this-year)  
45. Arbitrum's Chronos reaches $217M TVL with staking, becomes 8th largest DEX, 访问时间为 六月 25, 2025， [https://cointelegraph.com/news/arbitrum-s-chronos-reaches-217m-tvl-with-staking-becomes-8th-largest-dex](https://cointelegraph.com/news/arbitrum-s-chronos-reaches-217m-tvl-with-staking-becomes-8th-largest-dex)  
46. Arbitrum's Chronos Reaches 217 Million USD TVL In Staking, Becoming 8th Largest DEX, 访问时间为 六月 25, 2025， [https://www.binance.com/en/square/post/499073](https://www.binance.com/en/square/post/499073)  
47. Most popular | Content \- Dune Analytics, 访问时间为 六月 25, 2025， [https://dune.com/discover/content/popular?q=UENFT\&tags=Defi\&order=favorites\&time\_range=all\&dune\_tag=Zora\&timeframe=24h](https://dune.com/discover/content/popular?q=UENFT&tags=Defi&order=favorites&time_range=all&dune_tag=Zora&timeframe=24h)  
48. ramses-exchange \- Dune Analytics, 访问时间为 六月 25, 2025， [https://dune.com/ramses-exchange](https://dune.com/ramses-exchange)  
49. Eliteness.Network \- Dune Analytics, 访问时间为 六月 25, 2025， [https://dune.com/eliteness](https://dune.com/eliteness)  
50. Arbitrum DEX Volume \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/dexs/chain/arbitrum](https://defillama.com/dexs/chain/arbitrum)  
51. What is Ramses Exchange (RAM) \- Bitget, 访问时间为 六月 25, 2025， [https://www.bitget.com/price/ramses-exchange/what-is](https://www.bitget.com/price/ramses-exchange/what-is)  
52. Ramses Exchange Price: RAM Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/en/coins/ramses-exchange](https://www.coingecko.com/en/coins/ramses-exchange)  
53. Tokenomics 101 \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/learn/wallet/tokenomics-101](https://www.coinbase.com/learn/wallet/tokenomics-101)  
54. RAMSES (RAM) IDO Token Sale Review & Tokenomics Analysis | CryptoRank.io, 访问时间为 六月 25, 2025， [https://cryptorank.io/ico/ramses](https://cryptorank.io/ico/ramses)  
55. Audits | Docs \- ramses exchange, 访问时间为 六月 25, 2025， [https://v3-docs.ramses.exchange/pages/audits](https://v3-docs.ramses.exchange/pages/audits)  
56. Ramses Exchange Audit | Code4rena, 访问时间为 六月 25, 2025， [https://code4rena.com/audits/2024-10-ramses-exchange](https://code4rena.com/audits/2024-10-ramses-exchange)  
57. Ramses (RAM) Token Tracker | Arbitrum One \- Arbiscan, 访问时间为 六月 25, 2025， [https://arbiscan.io/token/0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418](https://arbiscan.io/token/0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418)  
58. dApp and Socials \- Ramses Exchange, 访问时间为 六月 25, 2025， [https://docs.ramses.exchange/resources/dapp-and-socials](https://docs.ramses.exchange/resources/dapp-and-socials)  
59. Ramses Exchange Price Today | RAM USD Price Live Chart & Market Cap \- DropsTab, 访问时间为 六月 25, 2025， [https://dropstab.com/coins/ramses-exchange](https://dropstab.com/coins/ramses-exchange)  
60. Convert Ramses Exchange (RAM) to Israeli New Shekel (ILS) \- Bitget, 访问时间为 六月 25, 2025， [https://www.bitget.site/price/ramses-exchange/ils](https://www.bitget.site/price/ramses-exchange/ils)  
61. Convert Ramses Exchange (RAM) to Moroccan Dirham (MAD) \- Bitget, 访问时间为 六月 25, 2025， [https://www.bitget.site/price/ramses-exchange/mad](https://www.bitget.site/price/ramses-exchange/mad)  
62. Convert Ramses Exchange (RAM) to Euro (EUR) \- Bitget, 访问时间为 六月 25, 2025， [https://www.bitgetapp.com/price/ramses-exchange/eur](https://www.bitgetapp.com/price/ramses-exchange/eur)  
63. Learn about Next-gen Automated Market Makers \- Ramses Exachange (Concentrated liquidity) : r/beehiiv \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/beehiiv/comments/1elaklk/learn\_about\_nextgen\_automated\_market\_makers/](https://www.reddit.com/r/beehiiv/comments/1elaklk/learn_about_nextgen_automated_market_makers/)  
64. how increase revenue as a solo stacker : r/ethstaker \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/ethstaker/comments/1dmokcv/how\_increase\_revenue\_as\_a\_solo\_stacker/](https://www.reddit.com/r/ethstaker/comments/1dmokcv/how_increase_revenue_as_a_solo_stacker/)  
65. Protocol Publications \- ARC's AI, 访问时间为 六月 25, 2025， [https://www.arc.ai/publications-protocol?9d048d7b\_page=56](https://www.arc.ai/publications-protocol?9d048d7b_page=56)  
66. Yield Farming \- Strategies / Success Stories / Lessons Learned? : r/defi \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/defi/comments/1hs8mnz/yield\_farming\_strategies\_success\_stories\_lessons/](https://www.reddit.com/r/defi/comments/1hs8mnz/yield_farming_strategies_success_stories_lessons/)  
67. I Have a (Nearly) Risk-Free Strategy Generating 28% Yield in Any Market—How Can I Get Connected to Big Investors? : r/quant \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/quant/comments/1jg3n6d/i\_have\_a\_nearly\_riskfree\_strategy\_generating\_28/](https://www.reddit.com/r/quant/comments/1jg3n6d/i_have_a_nearly_riskfree_strategy_generating_28/)  
68. Market Neutral strategies : r/quant \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/quant/comments/1gzbcdd/market\_neutral\_strategies/](https://www.reddit.com/r/quant/comments/1gzbcdd/market_neutral_strategies/)  
69. Need help with Delta Neutral position. : r/defi \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/defi/comments/1c0j0g0/need\_help\_with\_delta\_neutral\_position/](https://www.reddit.com/r/defi/comments/1c0j0g0/need_help_with_delta_neutral_position/)  
70. Optimizing Delta Neutral Strategy : r/algotrading \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/algotrading/comments/wm87ra/optimizing\_delta\_neutral\_strategy/](https://www.reddit.com/r/algotrading/comments/wm87ra/optimizing_delta_neutral_strategy/)  
71. Delta Neutral Strategies and Profit From Volatility : r/quant \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/quant/comments/17lvrgm/delta\_neutral\_strategies\_and\_profit\_from/](https://www.reddit.com/r/quant/comments/17lvrgm/delta_neutral_strategies_and_profit_from/)  
72. Delta neutral strategy : r/defi \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/defi/comments/ut0rh4/delta\_neutral\_strategy/](https://www.reddit.com/r/defi/comments/ut0rh4/delta_neutral_strategy/)  
73. What is Beefy Protocol? Ultimate Guide to Automated Yield Farming \- Nansen, 访问时间为 六月 25, 2025， [https://www.nansen.ai/post/what-is-beefy-protocol](https://www.nansen.ai/post/what-is-beefy-protocol)  
74. Vaults | Beefy, 访问时间为 六月 25, 2025， [https://docs.beefy.finance/beefy-products/vaults](https://docs.beefy.finance/beefy-products/vaults)  
75. Ramses Exchange Price: RAM Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 六月 25, 2025， [https://www.bybit.com/en/coin-price/ramses-exchange/](https://www.bybit.com/en/coin-price/ramses-exchange/)  
76. Ramses Exchange Price Today | RAM to USD Live Price, Market Cap & Chart \- Binance, 访问时间为 六月 25, 2025， [https://www.binance.com/en/price/ramses-exchange](https://www.binance.com/en/price/ramses-exchange)  
77. Ramses Exchange Price | RAM Price, Charts \- Crypto.com, 访问时间为 六月 25, 2025， [https://crypto.com/price/ramses-exchange](https://crypto.com/price/ramses-exchange)  
78. Ramses Exchange price today \- RAMX price chart & live trends \- Kraken, 访问时间为 六月 25, 2025， [https://www.kraken.com/prices/ramses-exchange](https://www.kraken.com/prices/ramses-exchange)  
79. Ramifi Protocol price today, RAM to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/currencies/ramifi-protocol/](https://coinmarketcap.com/currencies/ramifi-protocol/)  
80. Ramses Documentation — Ramses, 访问时间为 六月 25, 2025， [https://ramses-organisation.readthedocs.io/](https://ramses-organisation.readthedocs.io/)  
81. High-Level Group for the Modernisation of Official Statistics (HLG-MOS) Work Programme for 2025 \- UNECE, 访问时间为 六月 25, 2025， [https://unece.org/sites/default/files/2025-02/HLG-MOS%20Work%20Programme%202025.pdf](https://unece.org/sites/default/files/2025-02/HLG-MOS%20Work%20Programme%202025.pdf)  
82. RamsesExchange/ramses-assets: Assets that Ramses supports, and their logos/token information to support the DEX. Forked from trust-wallet's database/uniswap's token list. \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/RamsesExchange/ramses-assets](https://github.com/RamsesExchange/ramses-assets)  
83. Ramses Core overview — ramses documentation \- Read the Docs, 访问时间为 六月 25, 2025， [https://ramses-sdk.readthedocs.io/en/latest/core.html](https://ramses-sdk.readthedocs.io/en/latest/core.html)  
84. An Architecture That Enables Cross-Chain Interoperability for Next-Gen Blockchain Systems \- University of South Carolina, 访问时间为 六月 25, 2025， [https://research.cec.sc.edu/files/cyberinfra/files/an\_architecture\_that\_enables\_cross-chain\_interoperability\_for\_next-gen\_blockchain\_systems.pdf](https://research.cec.sc.edu/files/cyberinfra/files/an_architecture_that_enables_cross-chain_interoperability_for_next-gen_blockchain_systems.pdf)  
85. TOOP: A transfer of ownership protocol over Bitcoin \- Cryptology ePrint Archive, 访问时间为 六月 25, 2025， [https://eprint.iacr.org/2025/964.pdf?ref=blog.citrea.xyz](https://eprint.iacr.org/2025/964.pdf?ref=blog.citrea.xyz)  
86. Ramses trade volume and market listings | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/exchanges/ramses-exchange/](https://coinmarketcap.com/exchanges/ramses-exchange/)  
87. Pharaoh Exchange trade volume and market listings \- CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/exchanges/pharaoh-exchange/](https://coinmarketcap.com/exchanges/pharaoh-exchange/)  
88. Top Cryptocurrency Decentralized Exchanges Ranked \- CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/rankings/exchanges/dex/](https://coinmarketcap.com/rankings/exchanges/dex/)  
89. Exchanges Sitemap \- CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/sitemap/exchanges/](https://coinmarketcap.com/sitemap/exchanges/)  
90. CoinMarketCal \- Cryptoasset Calendar, 访问时间为 六月 25, 2025， [https://coinmarketcal.com/en/](https://coinmarketcal.com/en/)  
91. Ramses Exchange (ramses-exchange) Tokenomics: Market Insights, Token Supply, Distribution & Price Data | MEXC, 访问时间为 六月 25, 2025， [https://www.mexc.com/en-GB/price/ramses-exchange/tokenomics](https://www.mexc.com/en-GB/price/ramses-exchange/tokenomics)  
92. The Kingdom \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/RamsesExchange](https://github.com/RamsesExchange)  
93. RamsesExchange/ramses-v3-core: Core smart contract suite for RamsesV3 \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/RamsesExchange/ramses-v3-core](https://github.com/RamsesExchange/ramses-v3-core)  
94. 2024 in Review: Product Development | DIA, Cross-Chain Oracles for Web3, 访问时间为 六月 25, 2025， [https://www.diadata.org/blog/post/2024-product-development/](https://www.diadata.org/blog/post/2024-product-development/)  
95. Cruize Finance \- Decentralized Finance \- IQ.wiki, 访问时间为 六月 25, 2025， [https://iq.wiki/wiki/cruize-finance](https://iq.wiki/wiki/cruize-finance)  
96. Kwenta x Perennial: Arbitrum Onboarding Incentives (UPDATED) \- Finalized AIPs, 访问时间为 六月 25, 2025， [https://forum.arbitrum.foundation/t/kwenta-x-perennial-arbitrum-onboarding-incentives-updated/22736](https://forum.arbitrum.foundation/t/kwenta-x-perennial-arbitrum-onboarding-incentives-updated/22736)  
97. The Morning Cup: You, me, and the SEC \- Cryptohopper, 访问时间为 六月 25, 2025， [https://www.cryptohopper.com/zh-cn/news/the-morning-cup-you-me-and-the-sec-9128](https://www.cryptohopper.com/zh-cn/news/the-morning-cup-you-me-and-the-sec-9128)  
98. 访问时间为 一月 1, 1970， [https.www.ramses.exchange/](http://docs.google.com/https.www.ramses.exchange/)  
99. Ramses CL \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/yields/ramses-cl](https://defillama.com/protocol/yields/ramses-cl)  
100. Average revenue per user (ARPU) \- Token Terminal, 访问时间为 六月 25, 2025， [https://tokenterminal.com/explorer/metrics/arpu](https://tokenterminal.com/explorer/metrics/arpu)  
101. Gas used \- Ramses Exchange \- Token Terminal, 访问时间为 六月 25, 2025， [https://tokenterminal.com/explorer/projects/ramses/metrics/gas-used](https://tokenterminal.com/explorer/projects/ramses/metrics/gas-used)  
102. Average revenue per user (ARPU) \- Uniswap Labs \- Token Terminal, 访问时间为 六月 25, 2025， [https://tokenterminal.com/explorer/projects/uniswap-labs/metrics/arpu](https://tokenterminal.com/explorer/projects/uniswap-labs/metrics/arpu)  
103. Календарь криптоактивов \- CoinMarketCal, 访问时间为 六月 25, 2025， [https://www.coinmarketcal.com/ru/?form%5Bdate\_range%5D=12/10/2022%20-%2001/08/2024\&form%5Bsort\_by%5D=significant\_events\&form%5Bsubmit%5D=\&page=727](https://www.coinmarketcal.com/ru/?form%5Bdate_range%5D=12/10/2022+-+01/08/2024&form%5Bsort_by%5D=significant_events&form%5Bsubmit%5D&page=727)  
104. Ramses Exchange (RAM) Coin Profile, Info and Statistics \- FXEmpire, 访问时间为 六月 25, 2025， [https://www.fxempire.com/crypto/ramses-exchange/profile](https://www.fxempire.com/crypto/ramses-exchange/profile)  
105. \[Alchemix\] LTIPP Application \- FINAL \- Arbitrum Governance Forum, 访问时间为 六月 25, 2025， [https://forum.arbitrum.foundation/t/alchemix-ltipp-application-final/21395](https://forum.arbitrum.foundation/t/alchemix-ltipp-application-final/21395)  
106. Yesterday, more transactions were made on the Arbitrum on-chain DEX than on Ethereum. : r/ethtrader \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/ethtrader/comments/1e2j6cd/yesterday\_more\_transactions\_were\_made\_on\_the/](https://www.reddit.com/r/ethtrader/comments/1e2j6cd/yesterday_more_transactions_were_made_on_the/)  
107. List of 37 Decentralized Exchanges (DEXs) on Arbitrum \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/dapps/list-of/decentralized-exchanges-dexs-on-arbitrum](https://www.alchemy.com/dapps/list-of/decentralized-exchanges-dexs-on-arbitrum)  
108. Ostium, a top perpetual DEX on Arbitrum, has surpassed $5B in total crypto trading volume powered by Chainlink Data Streams : r/ethtrader \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/ethtrader/comments/1le5qsw/ostium\_a\_top\_perpetual\_dex\_on\_arbitrum\_has/](https://www.reddit.com/r/ethtrader/comments/1le5qsw/ostium_a_top_perpetual_dex_on_arbitrum_has/)  
109. Top Arbitrum One DEXs by 24-Hour Trading Volume \- CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/en/exchanges/decentralized/arbitrum-one](https://www.coingecko.com/en/exchanges/decentralized/arbitrum-one)  
110. Top Arbitrum Exchanges \- DappRadar, 访问时间为 六月 25, 2025， [https://dappradar.com/rankings/protocol/arbitrum/category/exchanges](https://dappradar.com/rankings/protocol/arbitrum/category/exchanges)  
111. List of 16 Decentralized Derivatives on Arbitrum (2024) \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/list-of/decentralized-derivatives-on-arbitrum](https://www.alchemy.com/list-of/decentralized-derivatives-on-arbitrum)  
112. Ramses Exchange \- 2025 Company Profile & Competitors \- Tracxn, 访问时间为 六月 25, 2025， [https://tracxn.com/d/companies/ramses-exchange/\_\_9wf5kG3Y3RGbRL75UX3byn\_cPC3N3Vwj6RwYR7Pf0Os](https://tracxn.com/d/companies/ramses-exchange/__9wf5kG3Y3RGbRL75UX3byn_cPC3N3Vwj6RwYR7Pf0Os)  
113. Chronos: Latest News, Social Media Updates and Insights | CryptoRank.io, 访问时间为 六月 25, 2025， [https://cryptorank.io/news/chronos](https://cryptorank.io/news/chronos)  
114. RAM to CHF: Ramses Exchange Price in Swiss Franc \- CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/en/coins/ramses-exchange/chf](https://www.coingecko.com/en/coins/ramses-exchange/chf)  
115. Understanding Liquidity Pools: The Impact of Concentrated Liquidity \- Ankr | Blog, 访问时间为 六月 25, 2025， [https://www.ankr.com/blog/understanding-liquidity-pools-the-impact-of-concentrated-liquidity/](https://www.ankr.com/blog/understanding-liquidity-pools-the-impact-of-concentrated-liquidity/)  
116. \[PancakeSwap\] LTIPP Application \- FINAL \- Arbitrum Governance Forum, 访问时间为 六月 25, 2025， [https://forum.arbitrum.foundation/t/pancakeswap-ltipp-application-final/21755](https://forum.arbitrum.foundation/t/pancakeswap-ltipp-application-final/21755)  
117. Liquidity Pool Pixel RON : r/AxieInfinity \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/AxieInfinity/comments/1axxkr3/liquidity\_pool\_pixel\_ron/](https://www.reddit.com/r/AxieInfinity/comments/1axxkr3/liquidity_pool_pixel_ron/)  
118. A Quick Guide to Yield Farming in Decentralized Finance \- Kairon Labs, 访问时间为 六月 25, 2025， [https://kaironlabs.com/blog/a-quick-guide-to-yield-farming-in-decentralized-finance](https://kaironlabs.com/blog/a-quick-guide-to-yield-farming-in-decentralized-finance)  
119. Ramses Exchange Price Today \- Current RAM Value to Euro & Live Chart \- Kriptomat, 访问时间为 六月 25, 2025， [https://kriptomat.io/cryptocurrency-prices/ramses-exchange-ram-price/](https://kriptomat.io/cryptocurrency-prices/ramses-exchange-ram-price/)  
120. Beefy, 访问时间为 六月 25, 2025， [https://beefy.com/](https://beefy.com/)  
121. Earn GLP with Beefy's new GLP strategy and Vaults \- Beefy, 访问时间为 六月 25, 2025， [https://beefy.com/articles/earn-glp-with-beefy-s-new-glp-strategy-and-vaults/](https://beefy.com/articles/earn-glp-with-beefy-s-new-glp-strategy-and-vaults/)  
122. STAKE | Whitepaper \- BIM Finance, 访问时间为 六月 25, 2025， [https://docs.bim.finance/whitepaper/overview/bim-exchange-dex-cex/stake](https://docs.bim.finance/whitepaper/overview/bim-exchange-dex-cex/stake)  
123. List of 17 DeFi Yield Aggregators on Arbitrum (2025) \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/dapps/list-of/defi-yield-aggregators-on-arbitrum](https://www.alchemy.com/dapps/list-of/defi-yield-aggregators-on-arbitrum)  
124. List of 17 DeFi Yield Farming Platforms on Arbitrum (2025) \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/dapps/list-of/defi-yield-farming-platforms-on-arbitrum](https://www.alchemy.com/dapps/list-of/defi-yield-farming-platforms-on-arbitrum)  
125. Ramses CL \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/ramses-cl](https://defillama.com/protocol/ramses-cl)  
126. Complete Yield Aggregators List \- DeFi Prime, 访问时间为 六月 25, 2025， [https://defiprime.com/yield-aggregators](https://defiprime.com/yield-aggregators)