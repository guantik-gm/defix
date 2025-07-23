

# **Bless Network 深度投资分析报告：DePIN赛道下的“共享计算机”机遇与风险评估**

## **报告摘要**

### **核心观点**

Bless Network是一个处于激励测试网阶段的DePIN（去中心化物理基础设施网络）项目，旨在构建一个由日常设备闲置计算资源（CPU/GPU）驱动的“共享计算机”。项目由经验丰富的团队领导，并获得了知名加密风投的800万美元融资，基本面强劲。其核心价值主张在于聚合高价值的计算资源，而非仅仅是带宽，这为其在AI驱动的未来市场中奠定了更高的价值天花板。

### **投资机会**

当前核心机会在于参与激励测试网，通过“0成本”挖矿（贡献计算时间）以博取未来的代币（预计为$BLS）空投。这是一个非对称的投资机会，风险极低而潜在回报可观。主网上线后，预计将出现代币交易、流动性挖矿、代币质押及为开发者提供的生态系统参与等多种投资与收益途径。对于具备开发背景的投资者，利用其SDK构建应用或插件，可能成为更高阶的“生产者”投资策略。

### **主要风险**

1. **安全审计缺失 (Lack of Security Audit):** 截至本报告撰写之时，未发现任何针对其核心协议的第三方公开安全审计报告。考虑到其业务模式涉及在用户设备上执行代码，这构成了最严重的安全风险。  
2. **品牌高度混淆 (Severe Brand Confusion):** “Bless”名称极为普遍，市场上存在多个同名或相似名称的无关代币（如BLEC, Base链上的bless等），这对投资者构成极大的混淆和欺诈风险，尤其是在代币生成事件（TGE）前后。  
3. **执行与竞争风险 (Execution and Competition Risk):** 项目尚处早期，面临将宏大愿景转化为稳定、高效产品的巨大挑战。同时，在用户获取层面，它与Grass等项目存在直接竞争，且面临空投驱动型社区在TGE后大规模抛售的压力。

### **最终评级**

综合评估后，本报告对Bless Network的投资评级为 **建议 (Recommend)**，但附有强烈警告和前提条件。其强大的基本面使其成为值得关注和参与的优质早期项目，但投资者必须对当前的安全审计缺失和品牌混淆风险保持最高警惕。

---

## **第一章：项目深度解析**

### **1.1 项目概述与核心愿景**

Bless Network将自身清晰地定位为“世界首个共享计算机” 1。其核心理念是聚合全球范围内个人用户设备——包括笔记本电脑、台式机乃至其他智能设备——的闲置计算能力，特别是中央处理器（CPU）和图形处理器（GPU）的算力，从而构建一个庞大且去中心化的边缘计算网络 3。

该项目的目标市场是那些对低延迟、低成本计算资源有强烈需求的新一代应用，尤其是人工智能（AI）、机器学习、大规模数据分析等算力密集型领域。通过这种模式，Bless Network意图挑战目前由亚马逊网络服务（AWS）、谷歌云和微软Azure等科技巨头主导的中心化云计算市场格局 1。

其价值主张对生态中的两类核心参与者具有不同的吸引力：

* **对于普通用户：** Bless提供了一种将闲置设备资源“变废为宝”的途径，用户通过贡献算力即可自动获得被动收入。这实现了其“拥有你的互联网份额”（Own your share of the internet）的核心口号，让普通人也能从互联网基础设施的运营中获益 1。  
* **对于开发者：** Bless旨在提供一个成本效益高、弹性伸缩能力强的去中心化应用部署平台。开发者可以摆脱传统云服务的高昂费用和中心化风险，利用全球分布的节点资源来运行其应用和服务 1。

值得注意的是，Bless Network项目的前身是Blockless 3。根据公开信息，这次品牌重塑发生在2024年11月，标志着项目发展进入了一个新的阶段 5。

在DePIN（去中心化物理基础设施网络）赛道中，众多项目如其主要竞争对手Grass，主要聚焦于共享相对低价值的“网络带宽”资源，用于网页抓取等特定任务 6。相比之下，Bless明确其核心共享资源为“CPU和GPU”计算能力，这是一个至关重要的、具有更高价值的差异化定位。带宽在当前技术环境下已逐渐商品化，而计算能力，特别是能够支持AI模型训练和推理的GPU算力，是数字经济时代最稀缺、价值最高的战略资源之一。这意味着，如果Bless能够成功实现其技术构想，其网络所能承载的商业价值和潜在市场规模（Total Addressable Market, TAM）将远超仅共享带宽的同类项目。当然，这也预示着Bless的技术实现难度、尤其是在安全和任务调度方面，将面临远比带宽共享网络更为严峻的挑战。

### **1.2 技术架构与实现**

Bless Network的技术架构设计精良，体现了团队对安全性和效率的高度重视。其核心技术栈由几个关键组件构成：

* **核心组件 (Core Components):**  
  * **b7s (Bless Network Daemon):** 这是运行在每个贡献者设备上的核心客户端软件，即节点守护进程。它采用Go语言编写，负责处理网络连接、任务的接收与分发、以及向网络报告资源使用情况。Go语言以其卓越的并发处理能力和高效的网络编程模型而著称，是构建此类大规模点对点（P2P）网络守护进程的理想选择。该项目的官方GitHub仓库显示了b7s的持续开发活动，表明其技术迭代正在稳步进行 8。  
  * **bls-runtime (Secure Runtime):** 这是Bless技术栈的基石，也是其安全模型的核心。它是一个基于WebAssembly (WASM) 的安全运行时环境，采用Rust语言编写 9。其主要功能是创建一个严格隔离的“沙箱”（Sandbox），确保从网络接收的计算任务只能在其中执行。这个沙箱环境被设计为只能访问指定的计算资源（CPU/GPU周期、内存），而无法触及用户的任何个人文件、浏览历史或其他敏感数据，从而在根本上保障用户隐私和设备安全 1。  
* **网络中立与链无关性 (Network Neutrality & Chain Agnosticism):** Bless在设计上追求网络中立和区块链无关性，不将自身捆绑于任何单一的公链生态系统。这种架构为开发者提供了极大的灵活性，使他们能够利用Bless的计算网络，同时将其应用的链上部分部署在最适合其业务的区块链上 2。项目早期资料曾提及使用Cosmos SDK构建其原生网络，并选择在Solana上启动其激励测试网，这进一步印证了其跨链兼容的战略意图 3。  
* **工作流程 (Workflow):** 一个典型的计算流程如下：开发者通过API向Bless网络提交计算任务 \-\> 网络的调度系统（Orchestrator）评估任务对CPU、内存等资源的需求 \-\> 系统在全球节点网络中智能匹配地理位置接近且资源充足的设备 \-\> 任务被分发并在这些设备的安全沙箱内执行 \-\> 任务执行期间所有数据传输均经过加密，计算完成后，结果会由网络中的其他节点进行交叉验证，以确保结果的准确性和防作弊 2。

对项目官方GitHub组织（blessnetwork）的分析显示，其下属的多个代码仓库，如b7s、bls-runtime、sdk-ts等，均保持着活跃的开发状态。频繁的提交历史和一定数量的贡献者表明，项目背后拥有一支积极投入的开发团队，技术开发并非停留在概念阶段 8。

从技术选型的角度看，团队的决策显示出高度的专业性和深思熟虑。选择Go语言开发网络守护进程b7s，是利用其在并发和网络I/O方面的优势；而选择Rust语言开发安全运行时bls-runtime，则是对安全性的极致追求。Rust语言通过其独特的所有权系统和借用检查器，能够在编译阶段就消除一整类常见的内存安全漏洞（如空指针解引用、数据竞争等），而无需依赖垃圾回收机制。在一个需要在全球数百万不受信任的个人设备上执行任意外部代码的DePIN项目中，安全性是其能否存在的生命线。采用Rust构建安全沙箱，是解决这一核心信任问题的最强有力的技术保障之一。这一系列技术决策，向具备技术背景的投资者传递了一个强烈的积极信号：团队不仅具备实现其宏大愿景的技术实力，而且将网络安全置于其架构设计的最高优先级。

### **1.3 创始团队与投资者背景**

一个项目的长期潜力，很大程度上取决于其创始团队的经验、视野和执行力，以及背后资本的支持。Bless Network在这两方面都展现了坚实的基础。

* **创始团队 (Founding Team):**  
  * **Butian Li (CEO):** 其履历完美融合了技术与商业。她不仅拥有加州大学伯克利分校的工程学背景和宾夕法尼亚大学沃顿商学院的量化金融MBA学位，还曾在知名的加密风险投资机构NGC Ventures担任投资人，并曾在物联网项目Wabi担任首席运营官（COO）。这种跨领域的经验使她能够深刻理解技术的可行性、商业模式的构建以及加密市场的运作逻辑 3。  
  * **Derek Anderson (CTO):** 一位资深的程序员和架构师，其职业生涯的亮点是曾担任知名去中心化计算项目Akash Network的首席技术官（CTO）。这表明他对分布式计算网络的设计与实现拥有第一手的、经过市场检验的实战经验。他的个人GitHub账户（dmikey）也展示了其深厚的技术积累和对开源社区的持续贡献 3。  
  * **Michael Chen (COO):** 曾任全球顶级加密货币交易所Binance的研究部门（Binance Labs 和 Binance Research）研究员。他的核心工作是进行项目尽职调查和市场分析，这意味着他对数以百计的Web3项目有过深入研究，对行业的成功与失败模式有独到的见解 3。  
  * **Liam Zhang:** 曾任纽约大学（NYU）研究员，为团队带来了学术研究的严谨性 3。  
* **融资情况 (Funding):** Bless Network（在其前身Blockless时期）已成功完成两轮早期融资，累计筹集资金800万美元。其中包括2022年3月完成的300万美元Pre-Seed轮融资，以及2024年5月完成的500万美元Seed轮融资 5。  
* **投资者 (Investors):** 领投机构包括在亚洲加密投资领域颇具影响力的NGC Ventures和M31 Capital。其他参投方还包括MH Ventures, No Limit Holdings, Interop Ventures, Plassa Capital等一批活跃在Web3领域的专业投资机构 5。

该项目的团队和投资者构成呈现出一个显著特点：**“加密原生”精英团队与专业二线VC的结合**。团队核心成员均来自加密行业的知名项目（Akash Network）、顶级平台（Binance）和专业风投（NGC Ventures），这与许多从传统Web2领域转型而来的创业团队截然不同。他们对加密世界的经济模型、社区文化、技术挑战和监管环境有着与生俱来的深刻理解。他们的公开身份和过往声誉，在很大程度上为项目提供了信誉背书，极大地降低了项目方欺诈或跑路（Rug Pull）的风险。

同时，虽然其投资者名单中并未出现如a16z、Paradigm等被市场视为最顶级的VC，但NGC Ventures、M31 Capital等机构均是在加密领域深耕多年、拥有丰富投资经验和行业资源的专业参与者。他们的投资意味着Bless Network已经通过了严格的专业尽职调查，其基本面得到了认可。这种组合对投资者而言，是一个“基本盘稳固，但向上突破高度仍待观察”的信号。项目拥有可靠的执行基础，但在未来获取全球最顶级的行业资源（如顶级交易所的首发上市、与蓝筹项目的战略合作等）方面，可能不具备绝对的领先优势。

---

## **第二章：市场与竞争格局分析**

### **2.1 DePIN赛道：现状与未来**

DePIN（去中心化物理基础设施网络）是当前加密市场中最受关注和最具增长潜力的叙事之一。其核心逻辑在于利用代币激励，以众包模式构建和运营现实世界中的物理基础设施网络，从而挑战传统中心化服务提供商。

* **市场驱动力 (Market Drivers):** DePIN赛道的爆发式增长，其根本驱动力源于人工智能（AI）的崛起对数据和算力近乎无限的需求 2。传统的中心化云计算服务虽然成熟，但其成本高昂、存在数据主权争议和单点故障风险，这为更具成本效益、更具弹性和抗审查性的去中心化替代方案创造了巨大的市场机会 2。  
* **增长趋势 (Growth Trends):** DePIN被广泛认为是2024至2025年加密货币领域的主导性叙事之一。在众多公链中，Solana凭借其高性能、低交易成本和活跃的开发者社区，已成为DePIN项目（尤其是需要高吞吐量的项目）的首选部署平台 20。此外，像Bless这样通过浏览器插件等低门槛方式吸引用户参与的模式，已被证明是实现网络效应和大规模用户增长的有效策略 20。  
* **相关项目 (Similar Projects):** DePIN赛道已经涌现出众多项目，它们各自聚焦于不同的物理资源领域，形成了一个多元化的生态系统。例如，存储领域的Filecoin和Arweave，无线网络领域的Helium，地理测绘领域的Hivemapper，以及与Bless直接相关的计算资源领域，包括带宽共享（如Grass, OpenLoop, DAWN）和算力市场（如Akash, Render Network）4。

### **2.2 主要竞争对手横向对比**

在众多DePIN项目中，就用户获取策略和产品形态而言，Grass是Bless Network当前最直接、最相似的竞争对手。两者都采用了“安装浏览器插件，贡献闲置资源，赚取未来空投积分”的模式，成功吸引了大量早期用户的关注和参与 22。然而，深入分析两者在核心资源、技术路径和市场定位上的差异，对于评估Bless的长期竞争力至关重要。

下表对Bless Network与Grass进行了多维度的横向对比：

**Table 1: 竞争格局对比：Bless vs. Grass**

| 特性 | Bless Network | Grass |
| :---- | :---- | :---- |
| **核心资源** | 闲置计算能力 (CPU/GPU) | 闲置网络带宽 |
| **主要用例** | 通用计算、AI推理、数据处理 | 网页抓取、AI数据源收集 |
| **技术复杂度** | **非常高** (需安全沙箱、任务调度、结果验证) | **较高** (需流量路由、隐私保护) |
| **资源价值** | **高** (尤其是GPU算力) | **中** |
| **融资额** | 800万美元 5 | 450万美元 26 |
| **知名投资方** | NGC Ventures, M31 Capital 5 | Polychain Capital, Tribe Capital 26 |
| **当前状态** | 激励测试网 | 已发币，主网运行 |
| **用户获取模式** | 浏览器插件，贡献时间赚取积分 | 浏览器插件，贡献带宽赚取积分 |
| **用户数据** | 已有超过10万用户参与测试网 20 | 超过300万用户 27 |

从上表可以看出，Bless选择了一条更艰难但可能更有价值的道路。它所聚合的计算资源，其市场价值和稀缺性远高于带宽。这意味着如果成功，Bless的商业模式将更具防御性，护城河也更深。然而，这也带来了更高的技术实现门槛和更长的开发周期。相比之下，Grass的技术路径相对简单，使其能够更快地推向市场并积累庞大的用户基础。目前Grass在用户数量上遥遥领先，这既是其优势，也可能成为Bless在争夺用户注意力时的挑战。

### **2.3 Bless Network的独特优势与创新点**

尽管面临激烈的竞争，Bless Network依然凭借其独特的设计和战略定位，展现出强大的发展潜力。

* **高价值资源聚合 (High-Value Resource Aggregation):** 这是Bless最核心的创新点。通过专注于聚合CPU和GPU算力，Bless直接切入了AI时代最有价值的资源市场。随着AI模型变得越来越复杂，对分布式、低成本的推理算力的需求将呈指数级增长。Bless的网络如果能够提供稳定可靠的服务，将有望捕获这一巨大市场的价值。  
* **开发者友好 (Developer-Friendly):** Bless的架构设计充分考虑了开发者的体验。其采用的WebAssembly (WASM) 技术允许使用多种编程语言编写的代码在其网络上运行。其链无关（Chain-Agnostic）的设计理念，使开发者不必锁定在某一个特定的区块链生态中，可以自由地将其智能合约和链上逻辑部署在以太坊、Solana或任何其他公链上，同时利用Bless作为其去中心化的计算后端。这种灵活性旨在最大程度地降低开发者进入Web3的门槛，使他们能够专注于应用逻辑本身，而无需过多地处理底层区块链的复杂性，如Gas费和网络拥堵问题 4。  
* **强大的团队背景 (Strong Team Background):** 如前文所述，Bless的创始团队在分布式系统、加密货币投资、市场研究和社区运营方面拥有全面且深厚的综合经验。这构成了其相对于许多匿名或经验不足的竞争对手的显著软实力优势，为其在技术研发、战略规划和市场拓展方面提供了坚实的保障。

---

## **第三章：代币经济学（Tokenomics）与市场数据分析**

### **3.1 代币模型前瞻**

尽管Bless Network尚未发布其完整的代币经济学白皮书，但根据现有信息和行业惯例，我们可以对其代币模型进行前瞻性分析。

* **代币符号 (Token Ticker):** 多个信息源指向，项目未来的原生代币符号将是 **$BLS** 2。  
* **核心功用 (Core Utility):** $BLS代币预计将围绕以下三个核心功能构建，以驱动整个生态系统的运转：  
  1. **激励奖励 (Incentive Rewards):** 这是代币最基础的功用，用于奖励那些将个人设备连接到网络、贡献闲置计算资源的用户（节点运营者）。奖励的多少可能会与贡献的时长、资源的质量（如CPU/GPU性能）以及任务完成的可靠性等因素挂钩 2。  
  2. **交易支付 (Transaction Payments):** 对于需要使用Bless网络计算资源的开发者和企业而言，BLS将成为主要的支付媒介。他们需要购买并支付BLS来运行其应用程序、处理数据或进行AI模型推理。  
  3. **生态治理 (Ecosystem Governance):** 作为去中心化网络，Bless预计将逐步过渡到社区治理模式。$BLS的持有者将拥有投票权，能够参与网络关键参数的设定、技术升级路线的决策、以及协议金库资金使用等重大事项的治理 2。

然而，一个关键的问题在于**价值捕获机制的不确定性**。虽然代币的功用明确，但其长期价值如何有效地从网络增长中捕获，目前尚不清晰。例如，开发者支付的BLS费用将如何分配？是100BLS代币（通缩模型），还是会以分红的形式分配给BLS的质押者（收益模型）？这些细节设计将直接决定BLS代币的长期投资价值。一个缺乏清晰、强大价值回流机制的治理代币，其价格支撑往往是脆弱的。这是当前评估项目长期价值的一个核心盲点，投资者需要密切关注未来发布的更详细的代币经济学文档。

### **3.2 市场数据真空与品牌混淆风险**

由于$BLS代币尚未发行，目前在所有主流的DeFi和加密货币数据聚合平台（如DeFiLlama, CoinMarketCap, CoinGecko）上，均无法找到关于Bless Network的真实链上数据，包括总锁定价值（TVL）、市值、代币价格、交易量等 29。投资者目前处于一个市场数据的“真空期”。

更为严峻的是，该项目面临着**严重的品牌混淆风险**。选择“Bless”这样一个极为常见且含义广泛的词汇作为项目名称，可以被视为一个重大的战略失误。这不仅给市场营销带来挑战，更创造了一个持续的、极易被恶意行为者利用的安全漏洞。经查证，市场上已存在多个与Bless Network完全无关但名称相似的代币：

* **Bless Global Credit (BLEC):** 这是一个MMORPG手机游戏的效用代币，在CoinGecko和Gate.io等平台上有交易数据，但与Bless Network项目毫无关联 33。  
* **bless (Base链):** Coinbase上列出了一个部署在Base链上的同名代币，其合约地址与本项目无关，市值极低，属于社区Meme币或欺诈币 37。  
* **BLESS (Solana链):** Phantom钱包的数据显示，Solana链上也存在一个名为BLESS的代币，但其项目信息与Bless Network不符，同样是无关项目 38。

这种高度的品牌混淆，对普通投资者构成了直接的资金安全威胁。在TGE前后，市场情绪高涨，不法分子极有可能利用这种混淆，在去中心化交易所（DEX）上创建假的$BLS代币交易池，通过社交媒体散播虚假合约地址，诱骗急于“抢头矿”的投资者购买，从而盗取其资金。这个风险将长期存在，对项目方的社区管理、信息披露的清晰度和及时性提出了极高的要求。**投资者在TGE初期必须极度谨慎，并且只能通过官方发布的渠道（官方网站、官方X、官方Discord公告）获取唯一的、正确的代币合约地址。**

### **3.3 空投机制与潜在价值评估**

Bless Network的早期用户增长主要由其激励测试网和强烈的空投预期驱动。

* **空投机制 (Airdrop Mechanism):** 参与方式非常简单。用户只需访问官网，注册账户，然后下载并安装其Chrome浏览器插件。保持插件在线运行，即可开始贡献计算资源，并累积一种名为“时间（Time）”的积分 3。这些“时间”积分是未来获得$BLS代币空投的主要凭证。此外，项目方还设计了激励机制以加速积分获取，例如：邀请好友加入可以获得其所赚取积分的10%作为提成；在官方仪表盘完成特定任务（如关于项目的知识问答）可以获得一次性的积分加成 3。  
* **主网与TGE时间表 (Mainnet & TGE Timeline):** 多个信息源，包括项目方访谈和社区分析，都将主网上线和代币生成事件（TGE）的时间点指向2025年第一季度 3。  
* **潜在风险 (Potential Risks):**  
  * **女巫攻击 (Sybil Attack):** 这种低门槛的挖矿模式天然吸引了大量的“科学家”和“羊毛党”。在代码托管平台GitHub上，已经出现了多个由社区开发者创建的、用于批量注册和自动化挖矿的脚本（Bots）42。如果项目方没有设计出有效、严格的女巫攻击检测和地址清洗机制，那么大量的虚假账户将会严重稀释真实、早期贡献用户的空投份额。  
  * **空投价值不确定性 (Airdrop Value Uncertainty):** 最终每个用户获得的空投价值是高度不确定的。它取决于多个变量：TGE时的整体市场环境（牛市还是熊市）、项目自身的市场热度、代币的初始流通市值（FDV）、以及项目方最终的空投分配方案。

---

## **第四章：风险评估与安全审计**

### **4.1 综合风险矩阵**

对Bless Network的风险进行综合评估，可以从以下几个维度展开：

* **技术风险 (Technical Risk):** **高**。项目的愿景是调度全球数百万个异构（不同操作系统、不同硬件配置）的设备节点，并保证网络的稳定性、高效性和安全性。这是一个巨大的技术挑战，涉及到复杂的P2P网络管理、任务调度算法、容错机制和安全隔离技术。任何环节的实现不力都可能导致网络瘫痪或性能不达标。  
* **市场风险 (Market Risk):** **中高**。DePIN赛道虽然前景广阔，但也意味着竞争日益激烈。Bless不仅要与其他计算类DePIN项目竞争，还要与所有争夺用户注意力和资金的加密项目竞争。此外，加密市场整体的周期性波动将直接影响$BLS代币的价格和项目的融资能力。  
* **安全风险 (Security Risk):** **极高**。这是当前阶段最突出的风险。首先，项目缺乏公开的第三方安全审计。其次，其核心业务是在用户电脑上运行外部代码，一旦其沙箱环境存在任何可被利用的漏洞，后果将是灾难性的，可能导致大规模的用户设备被入侵或数据泄露。  
* **品牌风险 (Brand Risk):** **高**。前述的品牌混淆问题，不仅影响市场营销，更直接转化为投资者的资金安全风险，对项目声誉构成持续威胁。  
* **团队风险 (Team Risk):** **低**。创始团队背景强大且身份公开，其个人和职业声誉与项目深度绑定。核心成员均有在知名加密项目或机构的成功履历，因此团队主观作恶（如跑路）的风险极低。

### **4.2 安全性深度分析**

安全性是任何DeFi和DePIN项目的基石，对于Bless Network这种需要在用户设备上执行代码的项目而言，其重要性无论如何强调都不为过。

* **核心风险点 (Core Risk Point):** **截至本报告完成时，经过全网信息检索，未能发现任何由信誉良好的第三方安全审计公司（如CertiK, Trail of Bits, OpenZeppelin, SlowMist等）出具的、针对Bless Network核心协议或智能合约的公开审计报告。** 这是本项目当前最大的、最不可忽视的“硬伤”。  
* **缓解因素 (Mitigating Factors):** 尽管缺乏外部审计，但项目方在设计和沟通中也体现出对安全的重视，这些可被视为一定的缓解因素：  
  1. 项目方在其官网和技术文档中反复强调，其系统采用安全的运行时和沙箱环境，旨在实现计算任务与用户个人数据的严格隔离，承诺只使用计算能力 1。  
  2. 如前文所述，其安全运行时bls-runtime采用Rust语言编写。Rust语言的内存安全特性从底层减少了许多潜在安全漏洞的产生 9。  
  3. 项目方在其网站上发布了详细的隐私政策，说明了其数据收集的范围和使用方式，向用户提供了透明度承诺 45。  
* **第三方工具风险 (Third-Party Tool Risk):** 在GitHub等平台上流传的各种第三方“挖矿机器人”或自动化脚本，对用户构成了巨大的安全隐患 42。这些脚本通常要求用户提供账户的认证令牌（  
  B7S\_AUTH\_TOKEN），这相当于交出了账户的完整控制权。恶意脚本开发者可以利用这个令牌盗取用户的挖矿收益，甚至将用户的节点用于非法活动，给用户带来潜在的法律风险。**强烈建议用户不要使用任何来路不明的第三方工具。**

在去中心化和“不信任，去验证”（Don't Trust, Verify）的加密世界精神下，项目方的安全承诺和技术选型固然是积极信号，但它们远不能替代由独立、专业第三方进行的客观、严格的安全审计。一份详尽的、无高危漏洞的审计报告，是项目方证明其系统安全性的黄金标准，也是投资者保护自身资金安全的重要依据。在看到这样一份报告之前，任何对该项目的投资都应被定性为高风险投机。

### **4.3 历史事件审查**

经对所有公开可查的创始人背景资料进行审查，包括其在之前项目（如Akash Network, NGC Ventures, Binance）的任职经历，均未发现任何与项目方跑路、欺诈、或导致重大安全漏洞等相关的负面历史记录 5。可以认为，该核心团队拥有良好的行业信誉记录。

---

## **第五章：社区分析与市场情绪**

### **5.1 官方渠道活跃度与透明度**

Bless Network建立了多个官方渠道，用于信息发布和社区互动，整体运营展现出较高的活跃度和透明度。

* **Medium/Blog:** 项目方在Medium平台上发布了一系列高质量的深度文章，特别是对几位创始人的专访。这些文章不仅介绍了项目，更深入地探讨了创始团队的背景、技术理念、创业心路历程以及对行业未来的看法 12。这种沟通方式超越了简单的营销宣传，体现了团队愿意与社区进行深度、真诚的交流，透明度较高。  
* **X (Twitter) / Discord:** 官方X账号（@theblessnetwork）和官方Discord服务器是项目最主要的日常互动和公告发布平台 25。目前，这两个平台上的讨论内容高度集中于激励测试网的参与细节，如如何安装插件、如何解决连接问题、如何最大化积分收益，以及对未来空投的猜测和期待 47。  
* **官方链接 (Official Links):** 为避免品牌混淆带来的风险，投资者务必通过以下经过验证的官方链接获取信息：  
  * **官方网站:** https://bless.network 53  
  * **官方 X (Twitter):** https://x.com/theblessnetwork 25  
  * **官方 Discord:** https://discord.com/invite/blessnetwork 15  
  * **官方 GitHub:** https://github.com/blessnetwork 9  
  * **官方 Medium:** https://blessnetwork.medium.com/ 12

### **5.2 社区情绪与讨论质量**

* **当前情绪 (Current Sentiment):** 社区情绪目前处于一种普遍的、由强烈空投预期驱动的高涨状态。在各大加密社区，包括Binance Square等内容平台上，可以找到大量关于如何参与Bless空投的教程和热烈讨论，项目热度非常高 54。这表明其早期的市场营销和用户获取策略是极为成功的。  
* **讨论质量 (Discussion Quality):** 然而，高热度之下，社区讨论的深度略显不足。绝大多数的对话都围绕着“如何挖矿”、“我的积分有多少”、“什么时候快照/空投”等偏向投机的表层问题。关于项目长期价值、技术架构细节、未来生态发展方向、以及与竞争对手比较等更具深度的讨论相对较少。

这种现象揭示了**空投驱动型社区的双刃剑效应**。一方面，强烈的、明确的空投预期是项目在启动初期快速吸引海量用户、获得市场关注度的最有效手段。Bless在这方面无疑取得了巨大成功。但另一方面，这种社区的根基往往是脆弱的。其绝大多数早期参与者是“空投猎人”（Airdrop Hunters），他们的核心目标是在TGE后第一时间出售代币获利，而对项目本身的技术、愿景或长期发展缺乏真正的信念和忠诚度。

这对项目方在TGE后提出了巨大的挑战：如何将这数以十万计的投机者，转化为真正的、有粘性的网络用户、社区贡献者甚至是生态建设者。这需要项目方在TGE时，不仅仅是发行一个代币，而是要同步推出有吸引力的产品功能、清晰且可持续的代币质押激励计划、以及切实可行的生态发展路线图。如果无法实现这种转化，TGE之后由空投猎人引发的巨大抛售压力，可能会对$BLS的初始价格造成毁灭性打击。因此，投资者需要密切关注项目方在临近TGE前后的运营策略和产品发布计划。

---

## **第六章：投资机会与策略矩阵**

基于以上全面分析，可以为不同风险偏好和技术背景的投资者，梳理出围绕Bless Network的多种潜在投资机会。

### **6.1 投资机会全面评估**

下表系统性地评估了从当前到项目主网上线后可能出现的各种投资机会。

**Table 2: Bless Network 投资机会矩阵**

| 投资机会 | 操作方式 | 优点 | 缺点 | 风险等级 | 潜在回报 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **参与激励测试网 (Airdrop Farming)** | 注册账户，安装Chrome插件，保持在线贡献时间，完成官方任务，邀请好友。 | **零成本或极低成本**；非对称回报，潜在收益高；参与门槛低。 | 时间成本；空投份额可能被女巫攻击稀释；最终价值不确定。 | **低** | **中至高** |
| **TGE后购买代币 (Post-TGE Token Purchase)** | 在$BLS上线中心化(CEX)或去中心化(DEX)交易所后，直接购买代币。 | 操作简单，流动性好；可抓住早期价格发现机会。 | 面临巨大空投抛压，初始价格波动极大；受市场情绪影响严重。 | **高** | **高** |
| **提供流动性 (Liquidity Providing)** | 在DEX上为BLS/ETH或BLS/USDC等交易对提供流动性，赚取交易手续费和可能的LP挖矿奖励。 | 可能获得极高的初始APR奖励；赚取交易手续费。 | **无常损失风险**；智能合约风险；$BLS价格剧烈波动风险。 | **极高** | **极高** |
| **质押代币 (Token Staking)** | 主网上线后，将$BLS代币质押到官方或第三方质押池中，获取治理权和协议收益分成。 | 相对稳定地赚取协议收益；参与社区治理；风险低于提供流动性。 | 质押有锁定期，损失流动性；协议收入不及预期风险。 | **中** | **中** |
| **开发者生态参与 (Developer Ecosystem)** | 利用官方SDK构建应用；创建和运营收费的Agent/Plugin；争取官方Grant。 | **成为生态生产者而非消费者**；潜在回报天花板极高；可能获得早期生态系统奖励。 | 技术门槛高；投入时间精力巨大；商业模式成功与否不确定。 | **中** | **极高** |

### **6.2 高APR DeFi策略深度探讨**

本节内容基于对同类DePIN或Cosmos生态项目启动后DeFi玩法的观察，对Bless主网上线后可能出现的高收益（高APR/APY）策略进行前瞻性推演。这些策略通常伴随着高风险，仅适合经验丰富的DeFi玩家。

1. **基础流动性挖矿 (Basic LP Farming):** 这是最常见的早期激励手段。项目方为了在DEX上建立充足的代币流动性，通常会在TGE初期，为BLS的关键交易对（如BLS/ETH,BLS/USDC）提供极其丰厚的BLS代币作为流动性挖矿奖励。此时的年化收益率（APR）可能高达三位数甚至四位数，但会随着参与资金的增加而快速下降。  
2. **杠杆挖矿 (Leveraged Farming):** 如果BLS及其LP代币被主流的借贷协议（如Aave,Compound等）所支持，投资者就可以进行杠杆操作。典型流程是：存入一定资产（如ETH）−\>借出BLS和稳定币 \-\> 组成LP代币并存入挖矿池 \-\> 将LP代币作为抵押品再次借款 \-\> 重复以上步骤。此操作可以数倍放大基础APR，但风险也急剧增加，一旦$BLS价格或LP代币价值剧烈下跌，将面临强制清算的风险。  
3. **套期保值挖矿 (Hedged Farming):** 此策略旨在剥离BLS代币价格波动的风险，纯粹赚取LP手续费和挖矿奖励。操作方法是：在DEX提供价值10,000的BLS/USDC流动性（即持有价值5,000的BLS和5,000的USDC）的同时，在支持BLS的永续合约交易所（如dYdX, GMX等）开立价值5,000的BLS空头头寸。这样，$BLS价格上涨的亏损可由空头头寸的亏损抵消，价格下跌的盈利可由空头头寸的盈利抵消，从而对冲掉价格风险。此策略的难点在于资金利用率、合约资金费率的计算和动态平衡的维持，对操作精度要求极高。  
4. **流动性质押衍生品 (Liquid Staking Derivatives \- LSD):** 这是更进一步的玩法。如果未来出现类似Lido或Jito的协议支持BLS的流动性质押，投资者可以质押BLS并获得一种生息凭证代币（例如stBLS）。stBLS代表了质押的BLS及其持续产生的收益，并且可以在DeFi协议中自由流通。投资者可以将stBLS再次作为抵押品进行借贷，或者与BLS组成LP参与流动性挖矿，实现“一鱼多吃”，在赚取基础质押收益的同时，参与其他DeFi活动，最大化资本效率。

### **6.3 开发者参与机会分析**

此部分专门针对具备开发背景的投资者进行分析，探讨如何从“生产者”的角度参与Bless生态。

1. **使用SDK构建应用 (Building dApps with SDK):** Bless Network提供了TypeScript/JavaScript的软件开发工具包（SDK），名为sdk-ts 9。开发者可以利用这个SDK，构建各类需要去中心化计算能力的应用，例如去中心化AI服务、分布式数据处理工具、或需要低延迟计算的游戏后端等。作为早期在Bless网络上成功构建并运营应用的开发者，极有可能获得来自Bless基金会的Grant（资金资助）或丰厚的早期生态系统建设者奖励。  
2. **创建和运营Agent/Plugin (Creating and Monetizing Agents/Plugins):** 对Bless官方GitHub的深入分析揭示了elizaos-bless-plugin和javy-bless-plugins等代码仓库的存在 9。这强烈暗示Bless的网络架构将支持第三方开发者创建插件（Plugin）或代理（Agent）的生态系统。这意味着开发者可以针对特定需求，开发专门的功能插件，例如特定领域的AI模型推理服务、高效的数据清洗和格式化工具、或者专业的渲染服务等。开发者可以为自己创建的这些插件或代理设定收费模型，向其他调用其服务的用户收取$BLS代币。这相当于在Bless这个“去中心化操作系统”上，建立自己的微服务（Micro-SaaS）业务。

对于具备开发技能的投资者而言，最高级的投资范式并非作为被动的“消费者”（购买和持有代币），而是转变为主动的“生产者”（构建生态的一部分）。通过早期在Bless网络上投入时间和智力，构建有价值的应用或服务，开发者不仅可能获得协议的早期空投和奖励，更有机会建立起属于自己的、可持续的商业模式。这种投资方式的潜在回报天花板，可能远非单纯的代币价格投机所能比拟。这是一种投入较高，但风险收益比可能更优的非对称投资机会。

---

## **第七章：总结与投资评级**

### **7.1 核心优势与风险总结**

**优势 (Strengths):**

* **强大的创始团队与VC背景:** 核心团队来自Akash, Binance, NGC等加密原生机构，经验丰富且声誉良好。800万美元的融资额和专业的VC背书为项目提供了坚实的基础。  
* **高增长的DePIN赛道:** 项目处于当前市场最热门的叙事之一，受益于AI发展带来的对算力和数据的巨大需求。  
* **差异化的高价值资源定位:** 专注于聚合CPU/GPU计算能力，而非普通带宽，使其潜在市场价值和护城河远高于多数竞争者。  
* **积极的开发进展:** 官方GitHub显示项目处于持续、活跃的开发状态，技术选型专业且合理。

**风险 (Risks):**

* **致命的审计缺失:** 缺乏第三方公开安全审计是当前最严重、最不可接受的风险，直接威胁用户和协议的资金安全。  
* **严重的品牌混淆问题:** “Bless”名称的普遍性导致市场极度混乱，为投资者带来了巨大的识别困难和被欺诈的风险。  
* **TGE后的巨大抛压:** 由空投驱动的社区可能在TGE后形成巨大的、集中的卖压，对代币初始价格构成严峻考验。  
* **技术实现路径的挑战:** 将全球异构设备整合成一个稳定、高效的计算网络，技术挑战巨大，存在执行风险。

### **7.2 最终投资建议与评级**

综合评估 (Overall Assessment):  
Bless Network无疑是一个基本面非常扎实、团队背景优异、且处在黄金赛道上的高潜力早期项目。其愿景、技术方向和战略定位都值得高度肯定。然而，项目在当前阶段存在两个不容忽视的“硬伤”：一是缺乏最关键的安全审计，二是由品牌选择失误导致的严重市场混淆。这两个问题直接关系到投资者的资金安全。  
**投资评级 (Investment Rating):**

### **建议 (Recommend)**

**评级理由 (Justification):**

* 之所以给予“建议”评级，是因为其强大的基本面（团队、融资、赛道、技术愿景）使其成为一个不容错过的、值得投入精力去关注和参与的优质早期项目。特别是对于能够理解并承受早期项目高风险的投资者而言，当前通过“零成本”参与激励测试网以博取空投的方式，是一个风险极低、潜在回报可观的切入点。  
* **然而，此“建议”评级必须附带以下极强的警告和前提条件：**  
  1. **安全审计是关键观察点:** 在项目方正式公布由一家或多家顶级审计公司出具的、无高危漏洞的完整审计报告之前，任何形式的大规模资金投入（例如在TGE后大额购买代币或提供流动性）都应被视为极高风险的投机行为。**安全审计是决定是否将“关注”升级为“重仓”的分水岭。**  
  2. **谨慎识别官方信息:** 投资者必须对品牌混淆风险有清醒的认识。所有操作，包括下载插件、获取代币合约地址、关注官方公告等，都**必须且只能**通过上文列出的官方渠道进行。对任何来自非官方社群、私信或不明链接的信息，都应保持最高警惕，将其视为潜在骗局。  
  3. **为开发者特别建议:** 对于具备开发背景的投资者，本报告的建议更为积极。除了参与基础的空投挖矿，更应将关注重点放在研究其技术文档、SDK和潜在的插件生态上。探索作为生态建设者参与的机会，可能是风险收益比更优的、更具战略性的投资路径。

---

## **附录：引用与数据来源**

1

#### **引用的著作**

1. Bless Network, 访问时间为 七月 6, 2025， [https://bless.network/](https://bless.network/)  
2. The World's First Shared Computer: How Bless Turns Idle Devices into Passive Income, 访问时间为 七月 6, 2025， [https://www.gate.com/learn/articles/the-world-s-first-shared-computer-how-bless-turns-idle-devices-into-passive-income/7674](https://www.gate.com/learn/articles/the-world-s-first-shared-computer-how-bless-turns-idle-devices-into-passive-income/7674)  
3. Potential Bless Airdrop Guide: Everything You Need to Know | CoinMarketCap, 访问时间为 七月 6, 2025， [https://coinmarketcap.com/academy/article/potential-bless-airdrop-guide-everything-you-need-to-know](https://coinmarketcap.com/academy/article/potential-bless-airdrop-guide-everything-you-need-to-know)  
4. SailLens: The World's First Shared Computer Driving the DePIN Revolution | by Parasail, 访问时间为 七月 6, 2025， [https://medium.com/@parasailnetwork/saillens-the-worlds-first-shared-computer-driving-the-depin-revolution-cd3bf9736b1d](https://medium.com/@parasailnetwork/saillens-the-worlds-first-shared-computer-driving-the-depin-revolution-cd3bf9736b1d)  
5. Bless Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 6, 2025， [https://www.rootdata.com/Projects/detail/Bless?k=NTk5OA%3D%3D](https://www.rootdata.com/Projects/detail/Bless?k=NTk5OA%3D%3D)  
6. GRASS | Grass \- GitBook, 访问时间为 七月 6, 2025， [https://grass-foundation.gitbook.io/grass-docs/introduction/grass](https://grass-foundation.gitbook.io/grass-docs/introduction/grass)  
7. Grass (GRASS) Live Tokenomics, Charts, Ratings & News | TokenInsight, 访问时间为 七月 6, 2025， [https://tokeninsight.com/en/coins/grass/tokenomics](https://tokeninsight.com/en/coins/grass/tokenomics)  
8. blessnetwork/b7s: b7s is the BLESS Network worker/node ... \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/blessnetwork/b7s](https://github.com/blessnetwork/b7s)  
9. BLESS \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/blessnetwork](https://github.com/blessnetwork)  
10. dmikey (Derek Anderson) · GitHub, 访问时间为 七月 6, 2025， [https://github.com/dmikey](https://github.com/dmikey)  
11. DePIN project Blockless raises $8 million in pre-seed and seed funding rounds | The Block, 访问时间为 七月 6, 2025， [https://www.theblock.co/post/295495/depin-project-blockless-crypto-funding](https://www.theblock.co/post/295495/depin-project-blockless-crypto-funding)  
12. Bless – Medium, 访问时间为 七月 6, 2025， [https://blessnetwork.medium.com/](https://blessnetwork.medium.com/)  
13. Founders, failsafes and swimming against the tide with Butian Li | by Bless, 访问时间为 七月 6, 2025， [https://blessnetwork.medium.com/building-the-shared-computer-001-b5ae60001934](https://blessnetwork.medium.com/building-the-shared-computer-001-b5ae60001934)  
14. Blockless, the First Network Powered by Everyday Devices, Begins Phase 2 of its Incentivised Test... | CoinLive on Binance Square, 访问时间为 七月 6, 2025， [https://www.binance.com/en/square/post/11747871684794](https://www.binance.com/en/square/post/11747871684794)  
15. The future of the internet with Derek Anderson | by Bless \- Medium, 访问时间为 七月 6, 2025， [https://blessnetwork.medium.com/the-future-of-the-internet-with-derek-anderson-25b0c417e741](https://blessnetwork.medium.com/the-future-of-the-internet-with-derek-anderson-25b0c417e741)  
16. Binance Square платформасындағы CoinLive | Blockless, the First, 访问时间为 七月 6, 2025， [https://www.binance.com/kk-KZ/square/post/11747871684794](https://www.binance.com/kk-KZ/square/post/11747871684794)  
17. The can, can't and Kant of Bless with Michael Chen \- Medium, 访问时间为 七月 6, 2025， [https://blessnetwork.medium.com/the-can-cant-and-kant-of-bless-with-michael-chen-c535d566aae0](https://blessnetwork.medium.com/the-can-cant-and-kant-of-bless-with-michael-chen-c535d566aae0)  
18. Bless (BLS) Funding Rounds, Token Sale Review & Tokenomics Analysis | CryptoRank.io, 访问时间为 七月 6, 2025， [https://cryptorank.io/ico/blockless](https://cryptorank.io/ico/blockless)  
19. Bless Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 6, 2025， [https://www2049.rootdata.com/Projects/detail/Bless?k=NTk5OA%3D%3D](https://www2049.rootdata.com/Projects/detail/Bless?k=NTk5OA%3D%3D)  
20. Crypto Theses 2025 \- Scribd, 访问时间为 七月 6, 2025， [https://fr.scribd.com/document/808988023/Messari-Crypto-Theses-2025-1735306615](https://fr.scribd.com/document/808988023/Messari-Crypto-Theses-2025-1735306615)  
21. New 10 DePIN Projects with AirDrop Guide on How to Turn Your PC into a Farming Machine | Daosnik on Binance Square, 访问时间为 七月 6, 2025， [https://www.binance.com/en/square/post/19037926683714](https://www.binance.com/en/square/post/19037926683714)  
22. 3 DEPIN Projects With Airdrop Opportunities — Cryptobuch \- Mirror.xyz, 访问时间为 七月 6, 2025， [https://mirror.xyz/cryptobuch.eth/jZ0G5t0antNmAZsJEIa4Lf9ReE7rKqtI35wW55JQ9hA](https://mirror.xyz/cryptobuch.eth/jZ0G5t0antNmAZsJEIa4Lf9ReE7rKqtI35wW55JQ9hA)  
23. Exploring some innovative DePIN Projects : r/DePINside \- Reddit, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/DePINside/comments/1gzvemp/exploring\_some\_innovative\_depin\_projects/](https://www.reddit.com/r/DePINside/comments/1gzvemp/exploring_some_innovative_depin_projects/)  
24. TOP BEST Free-to-Mine DePIN Crypto Projects of 2024 | by Shelley Mae \- Medium, 访问时间为 七月 6, 2025， [https://medium.com/@shelleymae/top-best-free-to-mine-depin-crypto-projects-of-2024-7fe5811881ca](https://medium.com/@shelleymae/top-best-free-to-mine-depin-crypto-projects-of-2024-7fe5811881ca)  
25. Bless: a DePIN airdrop similar to Grass that allows you to obtain free crypto, 访问时间为 七月 6, 2025， [https://en.cryptonomist.ch/2024/11/24/bless-a-depin-airdrop-similar-to-grass-that-allows-you-to-obtain-free-crypto/](https://en.cryptonomist.ch/2024/11/24/bless-a-depin-airdrop-similar-to-grass-that-allows-you-to-obtain-free-crypto/)  
26. Grass (GRASS) Project Analysis-CoinW Institute \- Zendesk, 访问时间为 七月 6, 2025， [https://coinw.zendesk.com/hc/en-us/articles/39347993646361-Grass-GRASS-Project-Analysis-CoinW-Institute](https://coinw.zendesk.com/hc/en-us/articles/39347993646361-Grass-GRASS-Project-Analysis-CoinW-Institute)  
27. Grass: Rent Your Unused Internet, 访问时间为 七月 6, 2025， [https://www.grass.io/](https://www.grass.io/)  
28. Bless (BLS) Strategic Funding Rounds, Token Sale Review & Tokenomics Analysis | CryptoRank.io, 访问时间为 七月 6, 2025， [https://cryptorank.io/ico/bless](https://cryptorank.io/ico/bless)  
29. Base \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/chain/base](https://defillama.com/chain/base)  
30. DefiLlama \- DeFi Dashboard, 访问时间为 七月 6, 2025， [https://defillama.com/](https://defillama.com/)  
31. Blast \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/chain/Blast](https://defillama.com/chain/Blast)  
32. All Chains DeFi TVL \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/chains](https://defillama.com/chains)  
33. Bless Global Credit(BLEC) Price Live Chart \- Gate.com, 访问时间为 七月 6, 2025， [https://www.gate.com/price/bless-global-credit-blec](https://www.gate.com/price/bless-global-credit-blec)  
34. BLEC to NGN: Bless Global Credit Price in Nigerian Naira | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/bless-global-credit/ngn](https://www.coingecko.com/en/coins/bless-global-credit/ngn)  
35. BLEC to SGD: Bless Global Credit Price in Singapore Dollar | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/bless-global-credit/sgd](https://www.coingecko.com/en/coins/bless-global-credit/sgd)  
36. Bless Global Credit (BLEC) Live Tokenomics, Charts, Ratings & News | TokenInsight, 访问时间为 七月 6, 2025， [https://tokeninsight.com/en/coins/bless-global-credit/tokenomics](https://tokeninsight.com/en/coins/bless-global-credit/tokenomics)  
37. bless Price, BLESS Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 6, 2025， [https://www.coinbase.com/price/base-bless](https://www.coinbase.com/price/base-bless)  
38. BLESS (BLESS) Price Chart \- Buy and Sell on Phantom, 访问时间为 七月 6, 2025， [https://phantom.com/tokens/solana/B8p4FbN7pr2365Hzb4mBrc2QoKp4CWRZNG43aXzG1qte](https://phantom.com/tokens/solana/B8p4FbN7pr2365Hzb4mBrc2QoKp4CWRZNG43aXzG1qte)  
39. Bless Airdrop guide: Steps to potential Reward | CryptoRank.io, 访问时间为 七月 6, 2025， [https://cryptorank.io/drophunting/blockless-activity533](https://cryptorank.io/drophunting/blockless-activity533)  
40. Potential Bless Airdrop » How to be eligible?, 访问时间为 七月 6, 2025， [https://airdrops.io/bless/](https://airdrops.io/bless/)  
41. Strict-origin-when-cross-origin help \!\!\!\! : r/django \- Reddit, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/django/comments/1i8gna5/strictoriginwhencrossorigin\_help/](https://www.reddit.com/r/django/comments/1i8gna5/strictoriginwhencrossorigin_help/)  
42. airdropinsiders/Bless-Bot \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/airdropinsiders/Bless-Bot](https://github.com/airdropinsiders/Bless-Bot)  
43. Zlkcyber/bless-bot: script automates network or node operations for Blockless Bless Network Bot. \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/Zlkcyber/bless-bot](https://github.com/Zlkcyber/bless-bot)  
44. recitativonika/blockless-bless-network-bot \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/recitativonika/blockless-bless-network-bot](https://github.com/recitativonika/blockless-bless-network-bot)  
45. Privacy Policy \- The Bless Network, 访问时间为 七月 6, 2025， [https://blessnet.org/privacy-policy](https://blessnet.org/privacy-policy)  
46. Privacy Policy \- Bless Network, 访问时间为 七月 6, 2025， [https://bless.network/privacy-policy](https://bless.network/privacy-policy)  
47. Server Boosting FAQ \- Discord Support, 访问时间为 七月 6, 2025， [https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ)  
48. Discord link : r/BlessUnleashedSteam \- Reddit, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/BlessUnleashedSteam/comments/1ajk7i7/discord\_link/](https://www.reddit.com/r/BlessUnleashedSteam/comments/1ajk7i7/discord_link/)  
49. Our Telegram and Discord channels \- General Forum, 访问时间为 七月 6, 2025， [https://forum.bless.gs/index.php?/topic/53402-our-telegram-and-discord-channels/\&do=getLastComment](https://forum.bless.gs/index.php?/topic/53402-our-telegram-and-discord-channels/&do=getLastComment)  
50. Bless Global \- Discord, 访问时间为 七月 6, 2025， [https://discord.com/invite/Pp8SQVXwPn](https://discord.com/invite/Pp8SQVXwPn)  
51. Bless Unleashed General Discussions \- Steam Community, 访问时间为 七月 6, 2025， [https://steamcommunity.com/app/1254120/discussions/](https://steamcommunity.com/app/1254120/discussions/)  
52. The Batman Vs. Superman Debate Makes No Sense — Here's Why \- Comic Book Movie, 访问时间为 七月 6, 2025， [https://comicbookmovie.com/superman/the-batman-vs-superman-debate-makes-no-sense-heres-why-a222505](https://comicbookmovie.com/superman/the-batman-vs-superman-debate-makes-no-sense-heres-why-a222505)  
53. Bless, 访问时间为 七月 6, 2025， [https://bless.network](https://bless.network)  
54. The Bless mining airdrop mission, which ranked first on the hot search list, raised $8 million in financing and went online yesterday\! | 空投分享者 on Binance Square, 访问时间为 七月 6, 2025， [https://www.binance.com/en/square/post/16272688688538](https://www.binance.com/en/square/post/16272688688538)  
55. Latest \#bless News, Opinions and Feed Today | Binance Square, 访问时间为 七月 6, 2025， [https://www.binance.com/en-JP/square/hashtag/bless](https://www.binance.com/en-JP/square/hashtag/bless)  
56. Latest \#bless News, Opinions and Feed Today | Binance Square, 访问时间为 七月 6, 2025， [https://www.binance.com/en/square/hashtag/bless](https://www.binance.com/en/square/hashtag/bless)