

# **Midas (midas.app) 投资评估报告：连接传统资产与去中心化金融的桥梁**

**执行摘要**

本报告旨在对 Midas (midas.app) 协议进行全面、深入的投资评估。Midas 定位为一个受监管的现实世界资产（Real World Asset, RWA）代币化平台，致力于将机构级的金融产品通过合规的法律框架引入链上，并与去中心化金融（DeFi）协议实现深度整合。其核心价值主张在于，通过发行一系列名为“流动性收益代币”（Liquid Yield Tokens, LYTs）的 ERC-20 代币，为投资者提供与传统金融市场挂钩的、透明且可组合的收益机会。

主要分析发现如下：

* **核心优势：** Midas 最显著的护城河在于其强大的监管合规性，特别是其获得了列支敦士登金融市场管理局（FMA）批准的欧盟基础招股说明书，使其能够合法地向欧洲经济区的散户投资者提供产品，且无高额的最低投资门槛。项目由一支经验丰富的团队领导，其背景横跨传统金融（高盛）、加密原生 DeFi（Ondo Finance）和欧洲金融科技领域，为项目的战略执行提供了坚实基础。此外，Midas 已与 BlackRock、Fasanara Capital、Edge Capital 等顶级机构建立合作关系，并通过与 Morpho 等领先 DeFi 协议的深度整合，展现了其卓越的 DeFi 可组合性。  
* **关键风险：** 尽管拥有强大的合规外衣，Midas 的运营模式仍存在显著的中心化风险。智能合约审计报告揭示了团队保留了强大的管理权限，例如可以销毁用户代币，这反映了其为满足现实世界法律要求而做出的去中心化妥协。投资者的风险敞口是多重的，不仅包括 Midas 平台自身的技术和运营风险，还延伸至其托管行（Maerki Baumann & Co. AG）、资产管理伙伴（如 Fasanara）以及其深度整合的 DeFi 协议（如 Morpho）的交易对手风险。其法律结构（如“合格次级”债权）在极端情况下对投资者的保护存在不确定性。  
* **市场表现与潜力：** 链上数据显示，Midas 在 RWA 赛道中已占据重要地位，其总锁定价值（TVL）和用户活跃度均名列前茅。其多链部署战略和与前沿技术（如 AI 区块链 0G）的合作，展示了其长远的战略眼光。与竞争对手 Ondo Finance 相比，Midas 在 TVL 规模上处于劣势，但在欧洲零售市场准入和深度 DeFi 整合方面形成了差异化优势。

投资机会与建议：  
本报告识别出多种投资参与途径，从直接持有 mTokens 获取稳定收益，到利用 mTBILL 在 Morpho 协议上进行高阶杠杆挖矿，再到参与其空投活动以博取未来治理代币的潜在价值。对于具备开发背景的投资者，利用 Midas 的 RWA 基础设施和其合作伙伴（如 0G）的平台构建新的 DeFi 应用，则代表了最高阶的参与方式。  
**最终投资评级：建议**

Midas 是 RWA 赛道中一个设计精良、战略清晰且具备强大合规优势的协议。它成功地在传统金融的信任与 DeFi 的创新之间找到了一个平衡点。然而，投资者必须清醒地认识到其中心化和复杂的交易对手风险。对于能够理解并接受这些特定风险、寻求合规 RWA 敞口、并希望利用其 DeFi 可组合性获取超额收益的欧洲成熟 DeFi 投资者而言，Midas 提供了一个极具吸引力的投资标的。对于寻求纯粹去中心化投资或无法承担复杂法律和交易对手风险的投资者，则应持谨慎态度。

---

## **第一节：项目深度剖析 \- Midas RWA 协议**

### **1.1. 核心概念：为链上经济代币化现实世界资产 (RWA)**

Midas.app 是一个专注于链上私人信贷并将现实世界资产（Real World Assets, RWA）引入去中心化货币市场的互联网原生投资平台 \[1\]。其核心业务是作为一个资产代币化协议，旨在为链上机构级资产提供符合法规的敞口，并解锁 RWA 的 DeFi 可组合性 \[2, 3\]。简而言之，Midas 致力于成为连接传统金融（TradFi）的稳定、可预测收益与去中心化金融（DeFi）的高效、可组合基础设施之间的桥梁。

在深入分析之前，必须明确本报告的研究对象。通过初步检索发现，市场上存在多个名为“Midas”的项目，这可能给投资者带来困惑。这些项目包括：

* **Midas of DeFi (MIDAS):** 一个以 PAXG（代币化黄金）作为奖励的以太坊代币项目 \[4, 5, 6\]。  
* **Midas.Investments:** 一个中心化的加密货币投资托管平台 \[7, 8\]。  
* **MIDAS (MDS):** 一个基于 Solana 的、由 NFT 支持的稳定币项目 \[9\]。  
* 其他非加密领域的品牌，如汽车维修服务、音频设备等 \[10, 11\]。

本报告将严格聚焦于总部位于德国柏林的 RWA 代币化平台 **Midas.app** \[1, 12, 13\]。该平台通过其德国子公司 Midas Software GmbH 运营，专注于发行与现实世界资产挂钩的、受监管的金融产品。这种品牌名称上的重叠构成了潜在的品牌稀释风险，要求投资者在进行研究时必须格外谨慎，以确保信息的准确性。

### **1.2. “流动性收益代币” (Liquid Yield Token \- LYT) 生态系统：mTBILL, mF-ONE, mEDGE 及其他产品详解**

Midas 平台的核心产品是一系列被称为“mTokens”或“流动性收益代币”（Liquid Yield Tokens, LYT）的 ERC-20 代币 \[1, 14\]。这些代币旨在为链上投资者提供多样化的、与现实世界资产或复杂金融策略挂钩的收益来源。每一个 mToken 都由专业的资产管理合作伙伴进行风险管理，而 Midas 则提供代币化和合规基础设施 \[14\]。

该生态系统主要包括以下产品：

* **mTBILL:** 这是 Midas 的旗舰产品之一，是一种追踪短期美国国库券收益的代币化凭证。Midas 与全球最大的资产管理公司 BlackRock（贝莱德）及 SuperState 合作，其底层资产主要为 BlackRock 管理的短期美国国债 ETF，如 iShares $ Treasury Bond 0-1yr UCITS ETF (IB01) \[1, 15, 16, 17\]。该产品为投资者提供了一个在链上获取接近“无风险利率”的稳定收益渠道。  
* **mF-ONE:** 该代币追踪由机构资产管理公司 Fasanara Capital 运营的 F-ONE 策略。这是一个多元化的基金，投资组合包括金融科技公司发放的应收账款、中小企业贷款、房地产支持的信贷以及 delta 中性的数字资产策略 \[18, 19\]。由于其涉及私人信贷等复杂资产，mF-ONE 的投资门槛较高，目前仅对合格投资者或投资额超过 15 万美元的投资者开放 \[1, 20\]。  
* **mBASIS & mEDGE:** 这些是与市场中性对冲基金 Edge Capital 合作推出的稳定币策略代币 \[1\]。其中，mBASIS 采用 delta 中性基差交易策略，通过捕捉现货与永续合约之间的价差来获利，旨在提供与市场方向无关的收益 \[21\]。  
* **mMEV, mRe7YIELD, mRe7SOL:** Midas 与其他专业的 DeFi 基金管理公司合作推出的产品，分别与 MEV Capital, Re7 Capital, 和 Re7 Labs 合作，提供基于不同市场中性或特定收益策略的代币 \[1, 22\]。  
* **mBTC:** 这是一个与领先的主要经纪商合作推出的比特币策略代币。与传统将 BTC 包装后赚取稳定币收益不同，mBTC 旨在为持有者提供以 BTC 计价的收益，满足了加密原生投资者在熊市中增持比特币的需求 \[1, 23, 24\]。

这种多元化的产品矩阵揭示了 Midas 的核心运营模式：平台本身专注于代币化技术、合规框架和 DeFi 集成，而将具体的资产管理和收益生成策略外包给各个领域的专业合作伙伴。这种模式允许 Midas 快速扩展其产品线，并为投资者提供由专业机构管理的投资机会。然而，这也引入了双重风险：投资者不仅要信任 Midas 平台的技术和运营安全，还必须评估每个 mToken 背后资产管理伙伴的投资表现和信用风险。对任何一个 mToken 的投资，都等同于对其相应合作伙伴的间接投资。

### **1.3. 技术与多链战略：Ethereum、Base、Algorand 及与 0G 的战略合作**

Midas 的技术基础是建立在以太坊虚拟机（EVM）兼容的区块链上，其发行的 mTokens 均为 ERC-20 标准代币，确保了与广阔 DeFi 生态系统的互操作性 \[1\]。

DeFiLlama 的数据显示，Midas RWA 协议已经采取了积极的多链部署战略，其业务已扩展至 Ethereum, Base, Etherlink, Rootstock, Oasis Sapphire, 和 Plume Mainnet 等多个网络 \[2, 25\]。这一策略旨在利用不同区块链的特性，如更低的交易费用、更快的确认速度或特定的生态系统优势，来扩大其 RWA 产品的覆盖范围和应用场景。

值得关注的几个战略部署包括：

* **Algorand 整合:** Midas 在 Algorand 上推出了 mTBILL，这是其首次在非 EVM 兼容链上进行的重要部署 \[16\]。Algorand 基金会对此进行了高调宣传，强调了此次合作旨在将其 DeFi 生态系统引入合规的高质量资产。一笔价值 200 万美元的 USDC 与 mTBILL 的原子交换在 Algorand 上以极低的成本（约 0.0004 美元）和极快的速度（2 秒）完成，展示了高性能链在处理 RWA 交易方面的潜力 \[16\]。  
* **与 0G 的前瞻性合作:** 近期，Midas 宣布与模块化 AI 区块链 0G 建立战略合作伙伴关系 \[26, 27, 28\]。根据公告，Midas 计划在 0G 主网（预计 2025 年第三季度末上线）启动后，部署其完整的代币化基础设施 \[28, 29\]。此次合作的战略意图超越了简单的多链扩展，旨在将 RWA 与人工智能相结合，探索前沿用例，例如：  
  * **AI 增强的风险分析：** 利用 0G 的计算能力对 RWA 的风险进行更智能的评估。  
  * **自动化信贷敞口：** 创建能够根据市场信号自动调整的信贷产品。  
  * **智能借贷金库：** 开发能够根据 AI 驱动的风险信号实时调整抵押率的借贷协议 \[27, 29\]。

Midas 的技术路径显示出一种从“多链部署”向“战略性生态系统整合”演进的清晰趋势。它并非简单地将代币复制到不同网络，而是通过与具有特定技术优势（如 Algorand 的低费用或 0G 的 AI 计算能力）的 L1/L2 链进行深度绑定，来创造新的、独特的价值主张和应用场景。这对具备开发背景的投资者而言是一个重要的积极信号，因为它预示着未来可能出现基于 Midas RWA 和特定链功能的、难以在其他地方复制的独特投资或开发机会。

### **1.4. 团队与创始人：评估 Dennis Dinkelmeyer、Fabrice Grinda 及领导团队的专业能力**

一个项目的长期成功在很大程度上取决于其背后的团队。Midas 在这方面拥有显著的优势，其领导团队汇集了来自传统金融、加密原生 DeFi 和欧洲金融科技领域的顶尖人才，形成了强大的复合背景 \[30\]。

* **Dennis Dinkelmeyer (创始人):** 作为项目的领军人物，Dennis Dinkelmeyer 拥有深厚的传统金融背景。他曾在全球知名的资产管理公司 Capital Group 和投资银行高盛（Goldman Sachs）担任投资相关职务。其职业生涯中积累了大量关于科技公司的投资、咨询和合作经验，这为 Midas 驾驭复杂的金融产品和机构合作奠定了坚实的基础 \[30, 31\]。  
* **Fabrice Grinda (联合创始人兼执行主席):** Fabrice Grinda 是全球知名的市场企业家和天使投资人，作为 FJ Labs 的创始合伙人，他拥有超过 1000 项天使投资和 300 次成功退出的辉煌记录 \[30\]。他的加入为 Midas 带来了宝贵的创业经验和广泛的行业网络。  
* **核心领导团队:** Midas 的其他核心成员同样背景显赫 \[30\]：  
  * **产品负责人 Romain Bourgois:** 曾任 RWA 赛道头部项目 Ondo Finance 的产品负责人，并在此之前于大型科技公司 Criteo 拥有九年的产品领导经验。他的经验对于 Midas 在竞争激烈的 RWA 市场中设计出有竞争力的产品至关重要。  
  * **幕僚长 Jonas Konstandin:** 曾在欧洲最大的银行即服务（BaaS）提供商 Solaris Group SE 建立了数字资产部门，服务过 Coinbase、Binance 等行业巨头，对欧洲的金融监管和运营环境有深刻理解。  
  * **销售与合作负责人 Greg Feibus:** 曾在第一家获得美国联邦特许的数字资产银行 Anchorage Digital 和 RWA 领导者 Ondo Finance 担任关键角色，具备丰富的机构加密市场经验。  
  * **财务与运营负责人 Felix Stremmer:** 作为代币化服务商 Bitbond 的前首席运营官，他曾负责德国首个获得 BaFin（德国联邦金融监管局）批准的证券型代币发行（STO），在代币化和合规运营方面拥有实践经验。

团队的构成清晰地反映了公司的战略方向。来自 Ondo Finance 的高管表明 Midas 正在与 RWA 领域的顶级项目直接竞争人才和战略思路。来自 Solaris 和 Bitbond 的成员则极大地增强了其在德国乃至整个欧洲市场的合规运营能力。创始团队的传统金融背景则为获取机构信任、建立合作伙伴关系以及设计复杂的、符合监管的金融产品提供了信誉保证。这种为执行其“合规、机构级、DeFi 可组合”的 RWA 战略而精心构建的团队，是投资者信心的重要来源，表明该项目具备将宏大愿景付诸实践的专业能力。

### **1.5. 法律与监管框架：解析德国 SPV、列支敦士登招股说明书及破产隔离结构**

Midas 最核心的护城河在于其精心构建的、跨越多个司法管辖区的法律与监管框架。这不仅使其区别于大多数野蛮生长的 DeFi 协议，也为其在机构和零售市场的扩张奠定了基础。

* **发行主体与司法管辖区:** Midas 通过其在德国注册的子公司 Midas Software GmbH 作为特殊目的载体（SPV）来发行其代币化产品 \[17, 32, 33\]。这一安排使其能够在欧盟的监管框架内运营。  
* **欧盟招股说明书:** Midas 的一个关键里程碑是获得了列支敦士登金融市场管理局（FMA）批准的基础招股说明书（Base Prospectus） \[32, 33\]。根据欧盟的法规，获得一个成员国监管机构批准的招股说明书，可以在整个欧洲经济区（EEA）内“通行”（passporting），向其他成员国的投资者发售产品。这使得 Midas 能够合法地向广大的欧洲市场提供其 RWA 代币。  
* **零售市场准入:** 基于上述监管批准，Midas 得以取消此前针对合格投资者设立的 100,000 美元（或欧元）的最低投资门槛，向欧洲的散户投资者开放其 mTBILL 和 mBASIS 等产品 \[34, 35, 36, 37\]。这在 RWA 领域是一个重大的差异化优势，因为许多竞争对手的产品（如 Ondo Finance 的 OUSG）仍然主要面向机构或合格投资者 \[38\]。  
* **法律结构与破产隔离:** 对其法律文件的深入分析揭示了其复杂的结构。  
  * **代币性质:** 根据其最终条款文件（Final Terms），mTBILL 在法律上被定义为一种根据德国法律发行的“代币化不记名债券证书”（tokenized bearer bond certificate），属于债务工具 \[32, 39\]。投资者购买的并非底层资产（如国债 ETF）的直接所有权，而是 Midas Software GmbH 发行的、追踪这些资产表现的债务凭证。  
  * **合格次级债权 (Qualified Subordination):** 基础招股说明书 \[32\] 中一个至关重要的条款是，代币持有者对发行人的债权是“合格次级”的。这意味着，如果 Midas Software GmbH 濒临破产，代币持有者将不能提出偿付要求，以避免触发公司的破产程序。他们的求偿权排在其他非次级债权人之后。这是一个保护发行人免于因市场波动而轻易破产的机制，但同时也降低了投资者在极端情况下的求偿顺位。  
  * **抵押与安全代理 (Security & Security Agent):** 为了增强投资者保护，Midas 设计了一个抵押机制。发行人将其持有的底层资产（如 ETF 份额）存放在托管行（如 Maerki Baumann & Co. AG）\[32\]，并将这些资产质押给一个独立的“安全代理”（Security Agent）\[32\]。在发行人违约或破产的情况下，安全代理有权控制和清算这些抵押品，并将所得款项分配给代币持有者。  
  * **破产隔离的局限性:** 尽管上述结构旨在实现“破产隔离”，即发行人的破产不应影响到底层资产的安全性，但招股说明书本身也坦诚地指出了其局限性。文件明确警示，这些安全安排可能不足以在发行人破产或清算时完全保护代币持有者，并且强制执行抵押品的过程可能会出现延迟，甚至因法律挑战而无法执行 \[32\]。

综上所述，“受监管”和“破产隔离”为 Midas 提供了强大的合规性和市场信誉，但并非万无一失的保险。投资者需要理解，他们投资的是一种结构化金融产品，其安全性依赖于一个由德国法律、列支敦士登监管、瑞士托管行和安全代理共同构成的复杂法律网络。这要求投资者具备比投资纯粹的链上 DeFi 协议更高的法律风险认知水平，并认识到这种 Web2.5 模式在带来合规性的同时，也带来了传统金融世界中固有的复杂性和对手方风险。

## **第二节：市场与财务分析**

### **2.1. 链上表现指标：通过 DeFiLlama & Token Terminal 进行数据驱动分析**

对 Midas 链上数据的分析揭示了其在 RWA 赛道中的强劲表现和活跃的用户基础。

* 总锁定价值 (TVL):  
  根据 DeFiLlama 的数据，截至分析时，Midas RWA 协议的总锁定价值约为 1.86 亿美元 \[2\]。这一价值分布在多个区块链上，其中以太坊占据主导地位（约 1.58 亿美元），其次是 Etherlink（约 1037 万美元）、Rootstock（约 567 万美元）以及 Base 等其他链 \[2\]。DappRadar 提供的数据则显示 TVL 约为 1.63 亿美元 \[40\]。值得注意的是，Midas 官网自行展示的各个 mToken 的 TVL 总和（例如 mEDGE 约 5892 万美元，mMEV 约 8216 万美元，mTBILL 约 1352 万美元等 \[1\]）远高于第三方数据平台，这可能源于统计口径的差异或数据更新延迟。尽管存在差异，但所有数据源均表明 Midas 已达到数亿美元的 TVL 规模，在 RWA 领域站稳了脚跟。  
* 用户活动与交易量:  
  Token Terminal 提供了衡量协议使用情况的关键指标，其数据显示 Midas 在用户活跃度方面表现突出。在 RWA 发行商类别中，Midas 的周活跃地址数（Weekly Active Addresses）为 445 个，年化交易计数（Transaction count）为 7.21 万次，这两项数据均排名第二，仅次于赛道领导者 Ondo Finance \[41, 42\]。这表明 Midas 不仅吸引了大量资金，还拥有一个相当活跃的用户群体，他们频繁地与协议的智能合约进行交互。

这种强劲的用户活动背后，可能存在多重驱动因素。首先，mTBILL 等产品提供的稳定、合规的链上收益，对于在波动的市场中寻求避险或稳定回报的 DeFi 用户具有天然的吸引力。其次，也是更重要的一点，Midas 积极推动其代币的 DeFi 可组合性。例如，通过与 Morpho 等借贷协议的深度整合，并提供额外的流动性激励 \[43\]，Midas 鼓励用户不仅仅是被动地持有 mTokens，而是主动地将它们用作抵押品进行借贷、杠杆操作等。这些 DeFi 活动直接驱动了链上交易的发生，从而显著提升了活跃地址数和交易计数。

因此，Midas 的链上活跃度是由“被动持有 RWA”和“主动参与 DeFi”双轮驱动的。这是一个非常健康的信号，表明 Midas 不仅仅是一个静态的资产发行平台，更是一个充满活力的、深度融入 DeFi 生态的活跃参与者。这种高用户粘性和互动性为其长期发展和网络效应的形成奠定了良好基础。

### **2.2. 竞争格局分析：Midas vs. Ondo Finance 及其他 RWA 协议**

RWA 赛道正迅速成为加密市场中最受关注的领域之一，吸引了众多参与者，从加密原生协议到传统金融巨头。为了准确评估 Midas 的市场地位，必须将其与主要竞争对手进行横向对比。

* 市场地位:  
  根据 DeFiLlama 的 RWA 类别排名，按 TVL 计算，市场由 BlackRock 的 BUIDL 基金、Ethena 和 Ondo Finance 等巨头主导 \[44\]。Midas RWA 在该榜单中排名约第 15 位，TVL 约为 1.86 亿美元，与头部项目存在数量级上的差距 \[2, 44\]。然而，TVL 只是衡量项目规模的一个维度，战略定位和产品差异化同样重要。  
* 主要竞争对手 \- Ondo Finance:  
  Ondo Finance 无疑是 RWA 领域最直接和最强大的竞争对手之一 \[45\]。Ondo 的 TVL 接近 14 亿美元，远超 Midas \[44\]。其产品线包括面向合格投资者的 OUSG（代币化美国国债基金）和面向非美国个人及机构的 USDY（由短期美国国债和银行存款支持的计息代币）\[46, 47\]。Ondo 已经发行了治理代币 ONDO，市值巨大，并在主流交易所上市，拥有强大的品牌知名度和市场影响力 \[48\]。  
* Midas 的差异化优势:  
  面对 Ondo 这样的强劲对手，Midas 采取了差异化的竞争策略：  
  1. **欧洲零售市场合规准入:** 这是 Midas 最核心的优势。通过获得欧盟监管机构批准的招股说明书，Midas 能够向欧洲散户提供无最低投资门槛的产品 \[34, 36, 37\]。相比之下，Ondo 的旗舰产品 OUSG 主要面向需要认证的合格投资者 \[38\]，这为 Midas 在欧洲零售市场创造了一个独特的窗口。  
  2. **深度 DeFi 可组合性:** Midas 极度强调其代币的 DeFi 原生属性和可组合性。其与借贷协议 Morpho 的深度整合便是一个典型例子，Midas 不仅将 mTBILL 部署为抵押品，还主动提供流动性激励来引导市场 \[17, 43\]。这种策略旨在将 Midas 的 RWA 代币打造成为 DeFi 世界中的基础“积木”，而不仅仅是静态的价值储存工具。  
  3. **无治理代币的灵活性:** 目前，Midas 没有发行治理代币，这使其在运营上更像一个中心化的金融科技公司。虽然这带来了治理风险，但在项目早期阶段，这有助于快速决策和灵活的战略调整，特别是在应对复杂的监管和机构合作时。

下表对主流 RWA 协议进行了综合对比，以更清晰地展示 Midas 的市场定位：

| 特征 | Midas | Ondo Finance | Franklin Templeton | Centrifuge |
| :---- | :---- | :---- | :---- | :---- |
| **核心产品** | mTBILL, mF-ONE, mEDGE 等 | OUSG, USDY | FOBXX (BENJI) | Tinlake Pools, Centrifuge Prime |
| **底层资产** | 美国国债ETF, 私人信贷, 市场中性策略 \[1, 17\] | 短期美国国债, 银行存款 \[46\] | 美国政府货币市场基金 \[49\] | 发票, 抵押贷款, 贸易融资等 \[50\] |
| **目标客户** | 欧洲零售用户, DeFi 专业用户, 机构 \[36\] | 合格投资者, 机构, 非美国用户 \[38\] | 传统金融投资者, 机构 \[49\] | DeFi 用户, 企业 (寻求融资) \[51\] |
| **监管框架** | 德国SPV, 列支敦士登FMA批准的欧盟招股说明书 \[32\] | 美国证券法框架 (合格投资者) \[52\] | 美国 SEC 监管的共同基金 \[49\] | 法律结构多样，依赖于资产发起人 |
| **TVL** | 约 1.86 亿美元 \[2\] | 约 13.9 亿美元 \[44\] | 约 7.98 亿美元 \[53\] | 约 4.47 亿美元 \[44\] |
| **DeFi 可组合性** | 非常高，与 Morpho 深度整合，提供激励 \[43\] | 较高，已扩展至 Solana 等多链 \[54\] | 较低，主要作为价值储存 | 非常高，协议本身就是为 DeFi 构建的 |
| **治理模式** | 中心化团队控制，无治理代币 \[55\] | ONDO 代币持有者通过 DAO 治理 \[48\] | 传统基金公司治理 | CFG 代币持有者通过 DAO 治理 |
| **主要优势** | 欧洲零售市场合规，深度 DeFi 整合 | 市场领导者地位，高 TVL，品牌知名度 | 传统金融巨头背书，极高信誉 | 真正的去中心化 RWA 融资，资产类别多样 |
| **主要风险** | 中心化风险，复杂的交易对手网络 | 监管不确定性，对美国市场依赖 | DeFi 集成度低，创新速度较慢 | 借款人违约风险，资产质量参差不齐 |

通过此表可以看出，Midas 在 RWA 赛道中选择了一条独特的路径。它不像 Franklin Templeton 那样保守，也不像 Centrifuge 那样完全去中心化，而是试图在 Ondo Finance 所开创的机构级 RWA 模式基础上，通过欧洲合规和深度 DeFi 集成来开辟新的市场空间。

### **2.3. 融资与投资者信心分析：剖析种子轮及战略合作**

项目的融资情况和投资者背景是衡量市场信心和项目潜力的重要指标。Midas 在这方面表现出色，成功吸引了加密货币领域一些最知名的风险投资机构和战略合作伙伴的支持。

* 种子轮融资:  
  Midas 于 2024 年 3 月宣布完成一轮价值 875 万美元的种子轮融资 \[33, 36, 56, 57\]。此轮融资由三家顶级机构共同领投：  
  * **Framework Ventures:** DeFi 领域最活跃和最成功的风险投资公司之一。  
  * **BlockTower Capital (现 Strobe Ventures):** 一家领先的加密资产投资和交易公司。  
  * **HV Capital:** 德国领先的风险投资公司之一。

此外，参投方阵容同样星光熠熠，包括 **Coinbase Ventures**（Coinbase 的投资部门）、**GSR**（顶级的加密做市商和投资公司）、**Hack VC**、**6th Man Ventures**、**Lattice Capital** 等 \[33, 56\]。

* 战略赠款:  
  除了股权融资，Midas 还获得了来自 Oasis 基金会的 500 万美元战略赠款承诺 \[58, 59, 60, 61, 62\]。这笔资金旨在支持 Midas 将其合规的代币化国债基金引入 Oasis 的隐私计算网络 Sapphire，从而为 RWA 带来隐私保护功能。

对这些融资事件的分析揭示了超越资金本身的重要信息：

1. **强大的信誉背书:** 获得如此众多顶级 VC 的投资，本身就是对 Midas 团队、技术和战略方向的强烈认可。这些投资者以其严格的尽职调查而闻名，他们的参与为项目增添了巨大的信誉。  
2. **战略协同效应:** Midas 的投资者不仅仅是财务支持者，更是其生态系统中的战略合作伙伴。  
   * Framework Ventures 和 GSR 在 DeFi 领域拥有深厚的根基和广泛的网络，可以为 Midas 的产品提供流动性支持，并促进其与更多 DeFi 协议的集成。  
   * Coinbase Ventures 的参与可能为 Midas 未来的产品在美国市场的合规路径探索，以及在 Coinbase 平台上架的可能性提供了潜在的便利。  
   * Oasis 基金会的赠款则是一次典型的战略结盟，Oasis 需要高质量的资产来丰富其隐私链生态，而 Midas 则通过此次合作，将其 RWA 产品扩展到了隐私计算这一前沿领域，探索新的应用场景。

综上所述，Midas 的融资背景非常强大。其投资者组合不仅为其提供了充足的财务资源，更重要的是，这些投资者本身就是其生态系统的一部分，能够为其在 DeFi 流动性、交易所关系、监管探索和技术整合等方面提供宝贵的战略资源。这对于一个旨在连接 TradFi 和 DeFi 的项目来说，是其长期成功的关键因素之一。

## **第三节：全面风险与安全审计**

对于任何 DeFi 投资，风险评估都是至关重要的一环。Midas 作为一个横跨传统金融和去中心化金融的协议，其风险剖面尤为复杂，涉及智能合约安全、交易对手风险、中心化治理以及监管合规等多个层面。

### **3.1. 智能合约安全：Hacken 审计报告及其发现的批判性审查**

Midas 对其核心的 Vaults 合约进行了安全审计，并选择了知名的审计公司 Hacken \[55\]。

* 审计结果概述:  
  Hacken 的审计报告给予了 Midas 项目一个看似完美的 10/10 的总体安全评分，并指出其代码测试覆盖率达到了 100% \[55\]。这表明项目在文档质量、代码质量和测试方面都达到了很高的标准。  
* 深入审查审计发现:  
  然而，对投资者而言，仅仅关注总体评分是远远不够的，甚至具有误导性。关键在于审查具体的审计发现及其处理状态。报告中披露了多个漏洞，其中一些关键漏洞的状态被标记为“已接受 (accepted)”，这意味着 Midas 团队在知晓风险的情况下，出于业务或设计上的权衡，决定不进行修复。  
  * **高严重性 (已接受): F-2023-0292 \- 未能正确处理具有自定义小数位的 USD 代币。** 这可能导致在处理非标准稳定币时出现计算错误，从而引发资产损失 \[55\]。  
  * **中严重性 (已接受): F-2023-0299 \- 不正确的 1:1 价格假设可能导致数据不一致。** 该漏洞表明，如果协议依赖的稳定币与美元发生脱钩，可能会导致系统内部价值计算出现偏差 \[55\]。  
  * **低严重性 (已接受): F-2023-0290 \- 高度许可的角色可以从用户处销毁代币。** 这是一个极其关键的中心化风险点。它意味着协议的管理员有权单方面销毁（burn）任何用户的 mToken 代币 \[55\]。  
* 中心化与安全性的根本权衡:  
  “管理员可销毁用户代币”这一权限的存在，揭示了 Midas 项目在去中心化和现实世界合规性之间的根本权衡。在纯粹的 DeFi 世界中，这种权限是不可接受的。但在 RWA 领域，这很可能是一个经过深思熟虑的设计。当现实世界的底层资产发生法律纠纷、被冻结或被制裁时，Midas 作为受监管的发行方，可能需要一个链上的“超级权限”来执行相应的法律裁决，例如冻结或销毁与问题资产相关的代币。  
  这种设计意味着，Midas 的安全性并非纯粹的技术问题，而是技术、法律和运营风险的复杂结合体。投资者信任的不仅仅是不可篡改的代码，更是 Midas 团队对这些强大中心化权限的审慎和负责任的使用。这是 RWA 项目普遍面临的“去中心化不彻底”的困境，也是其与纯 DeFi 协议的核心区别之一。  
* 审计范围的局限性:  
  同样重要的是，Hacken 的审计报告明确指出，其审计范围 不包括 与外部合约的交互，特别是提到了 /contracts/ManageableVault.sol 中的 tokensReceiver 地址 \[55\]。这个地址是接收用户所有存款资金的目的地。由于该地址指向的合约或实体未经审计，这意味着资金流向的最终端点存在一个潜在的风险盲区。

综上，尽管 Midas 的智能合约在代码质量和测试方面表现良好，但其存在的中心化权限和未被审计的外部交互点构成了显著的风险。投资者必须认识到，对 Midas 的投资在很大程度上是一种对 Midas 团队及其治理能力的信任投票。

### **3.2. 交易对手与系统性风险：审视对托管行和资产管理伙伴的依赖**

Midas 的运营模式高度依赖于一个由多个第三方机构组成的网络。任何一个关键合作伙伴的失败都可能通过风险传染，对投资者造成损失。

* 托管行风险:  
  Midas 的底层资产由瑞士的 Maerki Baumann & Co. AG 银行进行托管 \[32\]。虽然选择一家受监管的瑞士银行作为托管方增强了资产的安全性，但也引入了传统的金融对手方风险。如果该银行出现运营问题、财务危机或合规丑闻，可能会影响到底层资产的安全性和流动性。  
* 资产管理伙伴风险:  
  每个 mToken 的收益和风险都直接与其背后的资产管理伙伴挂钩 \[1\]。例如：  
  * 投资 **mF-ONE** 的风险与 **Fasanara Capital** 的投资表现和信用状况直接相关。如果 Fasanara 的私人信贷基金出现大规模违约或投资亏损，mF-ONE 的净值将受到严重影响 \[18\]。  
  * 投资 **mEDGE** 或 **mBASIS** 的风险则与 **Edge Capital** 的市场中性策略的有效性和风险控制能力相关 \[1\]。

投资者在购买任何一个 mToken 之前，都需要对相应的资产管理公司进行独立的尽职调查，评估其历史业绩、风险管理框架和市场声誉。

* DeFi 协议依赖风险:  
  Midas 的核心价值主张之一是其 DeFi 可组合性，特别是与 Morpho 借贷协议的深度整合 \[17, 43\]。虽然这为用户创造了额外的收益机会，但也引入了新的风险层面。如果 Morpho 协议的智能合约出现漏洞被黑客攻击，那么存入其中作为抵押品的 mTBILL 等资产可能会被盗或被错误清算，从而给 Midas 的用户带来直接损失。

总而言之，对 Midas 的投资风险评估必须超越 Midas 本身，扩展到对其所有关键合作伙伴的综合评估。投资者需要清晰地认识到，他们购买的产品同时暴露在传统金融的信用风险和去中心化金融的技术风险的双重环境中。这是一个复杂的风险矩阵，要求投资者具备跨领域的风险识别能力。

### **3.3. 中心化与治理风险：评估管理员角色的权力及去中心化治理的缺失**

如前所述，Midas 协议在当前阶段表现出高度的中心化特征，这既是其应对复杂监管环境的策略，也是投资者需要关注的风险点。

* 强大的管理员权限:  
  Hacken 的审计报告揭示了协议中存在强大的管理员角色 \[55\]。DEFAULT\_ADMIN\_ROLE 可以随意管理用户的白名单和黑名单，而 vaultAdmin 可以无限制地设定最低存款门槛，这都为潜在的滥用或操纵留下了空间。最关键的是，管理员拥有销毁用户代币的权限 \[55\]。虽然这可能是出于合规需要，但它从根本上违背了 DeFi 的“资产所有权不可剥夺”原则。  
* 缺乏去中心化治理:  
  截至目前，没有公开信息表明 Midas 拥有一个去中心化的治理结构，例如 DAO（去中心化自治组织）或治理代币 \[1, 8\]。所有关于协议升级、产品上线、参数调整等关键决策都由核心团队做出。这意味着普通用户对协议的未来发展方向没有发言权，其利益完全依赖于团队的善意和专业判断。

这种中心化的治理模式在项目早期阶段有助于提高决策效率和执行力，特别是在与传统金融机构和监管机构打交道时。然而，从长远来看，它也带来了风险：

1. **单点故障风险:** 过度依赖核心团队，如果关键成员离开或做出错误决策，可能会对项目造成重大打击。  
2. **利益冲突风险:** 团队的利益可能与用户的利益不完全一致。  
3. **社区参与度受限:** 缺乏治理参与感可能会抑制一个强大、有粘性的社区的形成。

一个值得关注的未来动向是 Midas 是否会以及如何走向去中心化。许多 DeFi 项目都会在发展到一定阶段后，通过发行治理代币并将部分管理权限移交给 DAO 来实现去中心化。Midas 正在进行的空投活动 \[63, 64\] 可能就是这一进程的前兆。对于投资者而言，这既是潜在的机遇（可能获得空投），也引入了新的不确定性：未来的代币经济学模型是否可持续？DAO 的治理效率如何？这些都是未来需要持续关注的关键问题。

### **3.4. 监管与司法管辖区风险：欧盟中心模式及对美国投资者限制的影响**

Midas 的合规策略是其核心竞争力，但同时也界定了其市场边界和潜在的监管风险。

* 明确的司法管辖区限制:  
  Midas 的所有法律文件和公告都明确指出，其产品 不向美国个人和实体，以及其他受制裁国家的用户提供 \[34, 37, 65\]。其 KYC/AML（了解你的客户/反洗钱）流程会严格执行这一限制 \[3\]。这一策略的核心目的是规避美国证券交易委员会（SEC）等监管机构的复杂且不确定的监管环境。  
* 以欧盟为中心的合规模式:  
  Midas 的整个合规框架是围绕欧盟法律构建的。其发行主体在德国，并获得了列支敦士登（作为 EEA 成员国）监管机构批准的招股说明书 \[17, 32\]。这使其在欧洲市场拥有了强大的法律基础和运营许可。

这种策略带来了双重影响，可以被视为“监管护城河”与“市场天花板”的并存：

* **监管护城河:** Midas 在欧洲建立的合规地位，是许多以美国为中心或监管模糊的 RWA 项目难以复制的优势。这为其在欧洲吸引机构和零售用户提供了强大的信任背书。  
* **市场天花板:** 主动放弃全球最大的加密货币市场——美国，无疑限制了其潜在的用户和资金规模。项目的长期增长在很大程度上将依赖于欧洲 RWA 市场的成熟和发展速度。

因此，投资 Midas 在某种程度上是押注于欧洲 RWA 市场的未来。投资者需要密切关注欧盟对加密资产的监管动态，特别是《加密资产市场法规》（MiCA）的全面实施对 RWA 领域的影响。此外，也应关注 Midas 是否有计划通过合规的方式扩展到亚洲（如新加坡、香港）等其他主要市场，以突破对单一监管区域的依赖，打开新的增长空间。

## **第四节：社区与市场情绪**

### **4.1. 官方沟通渠道分析（网站、Twitter 等）**

Midas 的官方对外沟通渠道展现出高度的专业性和信息透明度，与其机构级的定位相符。

* **官方网站 (midas.app):** 网站设计现代、专业，清晰地展示了其系列 mToken 产品、APY、TVL 以及重要的机构合作伙伴 \[1\]。网站提供了对法律文件（如招股说明书）的访问入口 \[66\]，并设有联系表单 \[67\] 和隐私政策页面，其中包含了官方联系邮箱 team@midas.app \[68, 69\]。  
* **官方 Twitter (@MidasRWA):** Midas 在 Twitter 上的活动频繁且内容聚焦。其推文主要围绕几个核心主题：  
  1. **合作公告:** 宣布与 0G、Fasanara Capital、Morpho 等新伙伴的合作 \[70\]。  
  2. **产品发布:** 推广新的 mToken，如 mBTC \[24\]。  
  3. **生态整合:** 宣传其代币在 DeFi 协议中的新用例。  
  4. **行业活动:** 分享团队成员参与的行业会议和圆桌讨论，如关于 RWA 和通胀保护的讨论 \[71\]。

整体而言，官方渠道的沟通策略清晰、专业，旨在建立一个可靠、合规、与 DeFi 深度融合的品牌形象。

### **4.2. 评估有机社区讨论和情绪（Reddit、Morpho 论坛等）**

与专业的官方形象相比，Midas 的有机社区讨论呈现出明显的两极分化特征，这揭示了其当前的市场采用阶段。

* 专业 DeFi 社区 (如 Morpho 论坛):  
  在 Morpho 的治理论坛上，可以找到关于 Midas 的深度技术和激励机制的讨论。例如，Midas 官方人员发起了关于在其 mTBILL/USDC 市场上提供 3 万 USDC 激励的提案，并希望 Morpho DAO 能够匹配 MORPHO 代币作为额外激励 \[43\]。这类讨论表明，Midas 正在积极地、深入地参与到核心 DeFi 协议的治理和生态建设中。参与者是协议开发者、专业流动性提供者和 DAO 成员，讨论内容聚焦于市场参数、激励分配和风险管理，情绪偏向技术性和建设性。  
* 广泛散户社区 (如 Reddit, YouTube):  
  在 Reddit 等更广泛的散户投资者社区中，关于 Midas.app 平台的深度产品分析和有机讨论非常有限。搜索结果更多地指向了其他同名项目，或者是一些关于 Midas Telegram Bot 空投活动的讨论 \[63, 64\]。这些讨论的焦点通常是如何完成任务、获取 GM 代币以“撸空投”，而非对 Midas RWA 产品本身的价值、风险和投资策略的深入探讨。YouTube 上也存在类似情况，部分视频将其作为空投机会进行介绍 \[63\]。

这种社区结构的分化，清晰地勾勒出 Midas 目前的市场渗透阶段。它仍处于早期采用阶段，其核心用户群是那些能够理解其复杂产品结构和 DeFi 整合策略的专业人士、开发者和寻求整合 RWA 的其他协议。这与 Midas 通过机构合作和深度 DeFi 集成来打下基础，然后再逐步走向更广泛市场的策略是完全一致的。

对于早期投资者而言，这可能是一个在项目被大众市场充分认知之前介入的机会。然而，这也意味着项目的品牌认知度和社区共识尚未形成坚固的护城河，其产品和经济模型也尚未经过大规模市场牛熊周期的全面考验。Midas 未来的核心挑战之一，将是如何有效地将其复杂的价值主张传递给更广泛的受众，成功地从专业的小圈子“出圈”，走向更广阔的用户市场。

## **第五节：可行的投资机会与策略**

基于对 Midas 协议的全面分析，可以为不同风险偏好和技术背景的投资者识别出多种可行的投资与参与策略。这些策略从简单的被动收益到复杂的杠杆挖矿，再到最高阶的生态系统共建，覆盖了广泛的风险收益频谱。

### **5.1. 直接投资 mTokens：以收益为核心的分析**

这是最直接、最简单的参与方式，适合寻求稳定、被动链上收益的投资者。投资者可以根据自身的风险承受能力，选择不同的 mToken 产品。

* **低风险稳定收益 (mTBILL):**  
  * **操作方式:** 购买并持有 mTBILL 代币。  
  * **收益来源:** 其价值与短期美国国库券 ETF 挂钩，提供约 4.06% 的年化收益率（APY）\[1, 16\]。这部分收益来源于美国政府债券，被认为是传统金融中的“无风险”收益。  
  * **适合投资者:** 风险规避型投资者，希望将资金停泊在比稳定币收益更高、风险极低的资产上。  
* **中高风险多元化收益 (mF-ONE, mEDGE, mMEV 等):**  
  * **操作方式:** 购买并持有 mF-ONE、mEDGE、mMEV 等代币。  
  * **收益来源:** 这些代币的收益来源于其背后专业的资产管理伙伴所执行的更复杂的策略。例如，mF-ONE 来源于 Fasanara Capital 的私人信贷和数字资产基金 \[18\]；mEDGE 和 mMEV 则来源于 Edge Capital 和 MEV Capital 的市场中性策略，官网显示的 APY 分别为 8.50% 和 8.55% \[1\]。  
  * **适合投资者:** 能够承受更高风险、寻求超越国债收益的投资者。需要注意的是，mF-ONE 等产品可能设有合格投资者门槛 \[1\]。

### **5.2. 高级 DeFi 策略：可组合性与收益最大化**

对于熟悉 DeFi 操作的成熟投资者，Midas 的 mTokens，特别是 mTBILL，可以作为高效的“乐高积木”，在其他 DeFi 协议中构建出更复杂的、潜在收益更高的策略。

#### **5.2.1. 在 Morpho 上进行借贷：使用 mTBILL 作为高质量抵押品**

Midas 积极推动其 mTBILL 在领先的借贷协议 Morpho Blue 上的应用，并联合项目方提供流动性激励 \[43\]。由于 mTBILL 底层资产是高信用的美国国债，其价格稳定且持续增值，因此被 Morpho 等协议认可为高质量抵押品 \[17\]。

在 Morpho 平台上的 mTBILL/verUSDC 市场，其清算贷款价值比（Liquidation Loan-To-Value, LLTV）高达 96.5% \[72\]。这意味着用户每存入价值 100 美元的 mTBILL，最多可以借出价值 96.5 美元的 USDC，极大地提高了资本效率。

#### **5.2.2. 探索杠杆和对冲收益农场组合**

结合 mTBILL 的基础收益和其在 Morpho 上的高 LTV 特性，可以构建一个典型的杠杆收益农场（Leverage Yield Farming）策略，这直接满足了用户对高 APR 策略组合的需求。

**策略构想（套利挖矿/借贷挖矿）：**

1. **买入 mTBILL:** 投资者首先在市场上购买 mTBILL，开始赚取约 4.06% 的基础国债收益 \[1\]。  
2. **存入 Morpho:** 将 mTBILL 作为抵押品存入 Morpho Blue 的 mTBILL/USDC 市场 \[43\]。  
3. **借出 USDC:** 利用其高达 96.5% 的 LLTV，以一个相对安全的 LTV（例如 80%-90%）借出 USDC 稳定币。  
4. **循环/再投资:** 将借出的 USDC 在去中心化交易所（DEX）上换成更多的 mTBILL，然后将这些新的 mTBILL 再次存入 Morpho，并重复步骤 2-3。这个过程被称为“循环”（Looping）或杠杆化。  
5. **收益分析:** 每次循环，投资者都在用借来的资金赚取 mTBILL 的基础收益，以及可能的 MORPHO 代币激励，同时需要支付 USDC 的借款利息。只要 (mTBILL APY \+ 额外激励 APY) \> USDC 借款利率，该策略就是正收益的。通过多次循环，可以显著放大净收益率。  
6. **风险管理:**  
   * **清算风险:** 这是该策略的核心风险。尽管 mTBILL 价格波动极小，但如果其与 USDC 的价格出现微小脱钩，或者 USDC 的借款利率因市场需求激增而大幅上涨，都可能导致杠杆头寸的健康因子（Health Factor）下降，最终被清算。投资者必须使用 DeFi 仪表盘工具密切监控其头寸的健康状况。  
   * **智能合约风险:** 该策略依赖于 Midas 和 Morpho 两个协议的智能合约安全。任一协议出现漏洞都可能导致资金损失。

该策略的吸引力在于，它在低风险的国债资产基础上，通过 DeFi 的可组合性和杠杆，创造了获取更高回报的潜力，是为经验丰富的 DeFi 用户量身定制的核心 alpha 机会。

### **5.3. 开发者机会：在 Midas 基础设施上构建（API、SDK 及 0G 合作）**

对于具备开发背景的投资者，Midas 提供了超越单纯金融投资的参与机会，即成为其生态系统的建设者。

* **利用现有基础设施:** Midas 正在积极将其代币化基础设施推广到更多平台。在其向 Arbitrum DAO 提交的提案中，Midas 提到了其“一流的代币化基础设施” \[17\]。其合作伙伴 Morpho 也提供了丰富的 API 和 SDK，允许开发者跟踪头寸、计算 APY、管理市场等 \[73, 74\]。开发者可以利用这些工具来构建第三方的分析仪表盘、头寸管理工具或自动化策略机器人。  
* **探索前沿机会 (与 0G 合作):** Midas 与 AI 区块链 0G 的战略合作 \[27, 28, 29\] 为开发者打开了全新的想象空间。公告明确指出，此次合作旨在服务开发者，让他们能够利用 Midas 的 RWA 作为基础“积木”，结合 0G 的 AI 计算能力，创造出全新的 DeFi 应用。

**潜在的开发方向：**

1. **创建智能金库 (Smart Vaults):** 开发者可以创建一个自动化金库，该金库能够根据 AI 对市场情绪、链上数据或宏观经济指标的分析，自动调整其在 Morpho 上的杠杆率或在不同 mToken 之间的资产配置。  
2. **构建自动化代理 (Agents):** 可以创建一个自动化代理，代表用户执行复杂的 RWA 杠杆策略、监控清算风险并在达到特定阈值时自动去杠杆。

这种参与方式将投资者的角色从被动的资本提供者转变为主动的价值创造者。通过创建自己的应用或服务并向其他用户收取管理费或业绩费，开发者可以创造主动收入流。这是最高阶的参与形式，风险和技术门槛最高，但潜在的回报也最为可观。

### **5.4. 评估空投和生态系统激励**

参与项目早期的空投和激励活动，是低成本获取未来潜在价值的有效途径。

* **Telegram Bot 空投:** Midas 正在进行一个基于 Telegram Bot 的空投活动，用户可以通过完成简单的社交任务和邀请朋友来赚取“GM”代币 \[63, 64\]。虽然这些代币目前的价值尚不明确，但它们很可能在未来 Midas 发行治理代币时按一定比例兑换。  
* **DeFi 协议激励:** Midas 及其合作伙伴正在积极地为在其他 DeFi 协议中使用其代币的用户提供激励。例如，在 Morpho 的 mTBILL 市场上的流动性提供者和借款人可以获得 MORPHO 代币奖励 \[43\]。

参与这些活动不仅是为了直接的代币奖励。更重要的是，它在链上留下了与项目早期交互的记录。在许多项目的历史空投中，那些早期、深度参与的用户（例如，不仅参与了社交媒体活动，还在核心 DeFi 场景中使用了项目产品）往往能获得更高的代币分配权重。考虑到 Midas 目前没有治理代币，但其 DeFi 协议的性质强烈暗示了未来走向去中心化治理的可能性，因此，早期参与和深度交互是博取未来更大空投份额的重要策略。

### **Midas 投资机会综合对比表**

下表汇总了上述所有投资机会，旨在为投资者提供一个清晰的决策框架。

| 机会类型 | 操作方式 | 目标投资者 | 预期收益/APY | 主要优势 | 核心风险 | 所需技能/资本 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **被动收益** | 直接购买并持有 mTBILL | 风险规避型，寻求稳定收益 | 约 4.06% \[1\] | 风险极低，操作简单，资产合规 | Midas 平台及托管行交易对手风险，智能合约风险 | 低技能，任意资本 |
| **被动收益** | 直接购买并持有 mF-ONE/mEDGE 等 | 风险偏好较高，寻求多元化收益 | 约 8.50% \- 9.85% \[1\] | 收益率较高，专业基金管理 | 资产管理伙伴的业绩风险和信用风险，可能存在合格投资者门槛 | 低技能，可能需要较高资本和合格投资者身份 |
| **高阶 DeFi** | 在 Morpho 上进行 mTBILL 杠杆挖矿 | 熟悉 DeFi 的成熟投资者 | 可变，取决于杠杆率和利差，可能远高于基础 APY | 资本效率极高，潜在回报高 | 清算风险，智能合约风险（Midas \+ Morpho），利率波动风险 | 高 DeFi 操作技能，需要资本进行抵押 |
| **早期参与** | 参与 Telegram Bot 空投和协议激励 | 所有对项目感兴趣的用户 | 不确定，取决于未来代币价值和分配规则 | 成本极低或为零，潜在回报高 | 时间成本，项目方不发币或空投价值低的风险 | 低技能，无需资本 |
| **生态共建** | 作为开发者构建应用/策略 | 具备开发能力的投资者/团队 | 不确定，取决于所构建产品的成功与否 | 创造主动收入流，潜在回报极高 | 开发成本和时间投入高，市场竞争风险，技术实现难度大 | 高度专业的开发技能，需要投入开发资源 |

## **第六节：最终结论与投资评级**

### **6.1. 发现综合：优势与劣势的平衡视角**

经过对 Midas.app 的全面、多维度评估，可以总结其核心优势与劣势如下：

**核心优势:**

1. **强大的监管护城河:** Midas 最大的差异化优势在于其在欧洲建立的合规框架。通过获得列支敦士登 FMA 批准的欧盟招股说明书，Midas 能够合法地向欧洲广大的零售市场提供 RWA 产品，这是其许多竞争对手难以复制的 \[36, 37\]。  
2. **经验丰富的复合型团队:** 团队背景横跨传统金融、加密原生 DeFi 和欧洲金融科技，为驾驭 RWA 这一复杂领域提供了必要的专业知识和行业网络 \[30\]。  
3. **高质量的机构合作伙伴:** 与 BlackRock, Fasanara Capital, Edge Capital 等顶级机构的合作，不仅提升了其产品的信誉，也确保了底层资产管理的专业性 \[1\]。  
4. **创新的 DeFi 可组合性:** Midas 并非仅仅将 RWA 代币化，而是积极地将其深度整合到 Morpho 等领先的 DeFi 协议中，通过提供激励来创造真实的链上用例和收益机会，展现了其深刻的 DeFi 原生理解 \[17, 43\]。  
5. **清晰的战略定位与前瞻性:** Midas 专注于 RWA 赛道，并通过与 0G 等 AI 区块链的合作，展现了其对未来技术融合趋势的思考和布局 \[28\]。

**劣势与核心风险:**

1. **高度的中心化风险:** 为了满足监管要求，Midas 在协议层面保留了强大的中心化权限，例如管理员可以销毁用户代币 \[55\]。这与 DeFi 的核心精神相悖，投资者的资产安全在一定程度上依赖于对团队的信任。  
2. **复杂的交易对手风险网络:** 投资 Midas 的产品意味着同时暴露于多个交易对手的风险之下，包括 Midas 平台本身、其托管银行（Maerki Baumann）、各资产管理伙伴（Fasanara, Edge Capital 等）以及其集成的 DeFi 协议（Morpho）\[1, 32, 43\]。  
3. **复杂的法律结构风险:** 其“合格次级债权”的法律结构在发行人破产等极端情况下，对投资者的保护存在不确定性 \[32\]。  
4. **项目仍处早期阶段:** 尽管发展迅速，但 Midas 的品牌认知度在广大散户中仍然有限，社区共识尚在形成阶段，其经济模型和产品尚未经过完整的市场牛熊周期的考验。  
5. **市场增长的潜在限制:** 严格的司法管辖区限制（特别是排除了美国市场）虽然保证了合规性，但也可能成为其长期增长的天花板 \[65\]。

### **6.2. 投资论点与最终评级**

**投资论点:**

Midas 代表了 RWA 赛道中一条独特的、以合规为基石、以 DeFi 可组合性为驱动力的发展路径。它并非试图建立一个完全去中心化的乌托邦，而是在现实世界的法律框架内，最大限度地利用区块链技术来提高传统金融产品的效率、透明度和可及性。

其核心投资价值在于，它成功地将传统金融世界所看重的**信任与合规性**，与去中心化金融世界所追求的**效率与创新性**结合了起来。对于相信 RWA 是下一个重要叙事，并认为合规是机构和大规模采用前提的投资者来说，Midas 提供了一个逻辑自洽且执行力强的投资标的。

**最终投资评级：建议**

综合以上所有分析，本报告对 **Midas.app** 的总体投资评级为 **建议**。

此评级基于以下核心判断：

* **对于寻求稳定收益且熟悉 DeFi 风险的欧洲投资者：** Midas 提供了市场上稀有的、合规的、面向零售的 RWA 投资渠道。直接持有 mTBILL 或参与其在 Morpho 上的低杠杆借贷，是在当前市场环境下获取稳定收益的优质选择。**（强烈建议探索）**  
* **对于追求高回报的成熟 DeFi 投资者：** Midas 的可组合性提供了创造 Alpha 的机会。利用 mTBILL 在 Morpho 上进行杠杆挖矿等高阶策略，有望在可控风险下获得显著高于市场基准的回报。但这要求投资者具备高超的 DeFi 操作技能和风险管理能力。**（建议，但需极度谨慎）**  
* **对于寻求高度去中心化和无法承受复杂法律及交易对手风险的投资者：** Midas 的中心化特性和复杂的风险网络可能不符合这类投资者的偏好。对于这类投资者，应持**中立**或**不建议**的态度。  
* **对于具备开发能力的投资者/团队：** Midas 及其合作伙伴（特别是 0G）所构建的基础设施提供了一个充满机遇的沙盒。利用其 RWA 资产和 AI 计算能力来构建新的 DeFi 应用或策略，是一个高风险但潜在回报极高的探索方向。**（强烈建议关注和参与生态建设）**  
* **对于所有类型的投资者：** 参与其成本较低的空投和激励活动，是分享项目未来成长红利的一种低风险方式。**（建议参与）**

总而言之，Midas 是一个基本面扎实、战略清晰、团队优秀且在关键赛道上占据了独特优势的项目。尽管风险不容忽视，但其展现出的潜力和价值，使其成为值得当前阶段 DeFi 投资者认真考虑并纳入投资组合的标的。

#### **引用的著作**

1. Midas: Internet Native Investing, 访问时间为 七月 13, 2025， [https://midas.app/](https://midas.app/)  
2. Midas RWA \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/midas-rwa](https://defillama.com/protocol/midas-rwa)  
3. How does the Midas protocol integrate traditional finance with DeFi? \- ChainCatcher, 访问时间为 七月 13, 2025， [https://www.chaincatcher.com/en/article/2127655](https://www.chaincatcher.com/en/article/2127655)  
4. Midas of DeFi (MIDAS) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 七月 13, 2025， [https://www.forbes.com/digital-assets/assets/midas-of-defi-midas/](https://www.forbes.com/digital-assets/assets/midas-of-defi-midas/)  
5. Midas of DeFi Price, MIDAS Price, Live Charts, and Marketcap \- Coinbase India, 访问时间为 七月 13, 2025， [https://www.coinbase.com/en-in/price/midas-of-defi](https://www.coinbase.com/en-in/price/midas-of-defi)  
6. Midas of DeFi Price: MIDAS Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 13, 2025， [https://www.bybit.com/en/price/midas-of-defi/](https://www.bybit.com/en/price/midas-of-defi/)  
7. MIDAS Price \- Coinbase, 访问时间为 七月 13, 2025， [https://www.coinbase.com/price/midas](https://www.coinbase.com/price/midas)  
8. Midas price today, MIDAS to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/midas/](https://coinmarketcap.com/currencies/midas/)  
9. MIDAS price today, MDS to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/midas-mds/](https://coinmarketcap.com/currencies/midas-mds/)  
10. Downloads \- Midas, 访问时间为 七月 13, 2025， [https://www.midasconsoles.com/downloads.html](https://www.midasconsoles.com/downloads.html)  
11. Midas : Brakes, Tires, Oil Change, All of Your Auto Repair Needs., 访问时间为 七月 13, 2025， [https://www.midas.com/](https://www.midas.com/)  
12. Midas \- 2025 Company Profile, Funding & Competitors \- Tracxn, 访问时间为 七月 13, 2025， [https://tracxn.com/d/companies/midas/\_\_ZHBK4LliS9SvXJrFrc0o9O8x\_pB3wYX6QTkP74OZYm8](https://tracxn.com/d/companies/midas/__ZHBK4LliS9SvXJrFrc0o9O8x_pB3wYX6QTkP74OZYm8)  
13. AMLBot \- FinTech Consult, 访问时间为 七月 13, 2025， [https://fintech-consult.com/fintech/amlbot](https://fintech-consult.com/fintech/amlbot)  
14. Midas Liquid Yield Tokens (LYT): A New Era of Tokenized Yield Strategies \- Fabrice Grinda, 访问时间为 七月 13, 2025， [https://fabricegrinda.com/midas-liquid-yield-tokens-lyt-a-new-era-of-tokenized-yield-strategies/](https://fabricegrinda.com/midas-liquid-yield-tokens-lyt-a-new-era-of-tokenized-yield-strategies/)  
15. Midas mTBILL Price, MTBILL Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 13, 2025， [https://www.coinbase.com/price/midas-mtbill](https://www.coinbase.com/price/midas-mtbill)  
16. Midas, a fully regulated German tokenization platform, launches the mTBILL token on Algorand, 访问时间为 七月 13, 2025， [https://algorand.co/blog/midas-a-fully-regulated-german-tokenization-platform-launches-the-mtbill-token-on-algorand](https://algorand.co/blog/midas-a-fully-regulated-german-tokenization-platform-launches-the-mtbill-token-on-algorand)  
17. Midas \- STEP Application \- Arbitrum Governance Forum, 访问时间为 七月 13, 2025， [https://forum.arbitrum.foundation/t/midas-step-application/23635](https://forum.arbitrum.foundation/t/midas-step-application/23635)  
18. Midas mF-ONE Price \- CoinGecko, 访问时间为 七月 13, 2025， [https://www.coingecko.com/en/coins/midas-mf-one](https://www.coingecko.com/en/coins/midas-mf-one)  
19. Midas mF-ONE \- Coinbase, 访问时间为 七月 13, 2025， [https://www.coinbase.com/price/midas-mf-one](https://www.coinbase.com/price/midas-mf-one)  
20. Internet Native Investing \- Midas, 访问时间为 七月 13, 2025， [https://midas.app/mfone](https://midas.app/mfone)  
21. Midas launches new yield-bearing token mBASIS to compete with Ethena | The Block, 访问时间为 七月 13, 2025， [https://www.theblock.co/post/301070/tokenization-midas-yield-bearing-token-mbasis-ethena](https://www.theblock.co/post/301070/tokenization-midas-yield-bearing-token-mbasis-ethena)  
22. Internet Native Investing \- Midas, 访问时间为 七月 13, 2025， [https://midas.app/mre7sol](https://midas.app/mre7sol)  
23. Midas mBTC Price, MBTC Price, Live Charts, and Marketcap: midas yielder listing date, midas token price, midas yielder token price \- Coinbase, 访问时间为 七月 13, 2025， [https://www.coinbase.com/price/midas-btc-yield-token](https://www.coinbase.com/price/midas-btc-yield-token)  
24. Midas Launches the mBTC Yield-Bearing Token for Bitcoin-Dominated Assets \- NFTgators, 访问时间为 七月 13, 2025， [https://www.nftgators.com/midas-launches-the-mbtc-yield-bearing-token-for-bitcoin-dominated-assets/](https://www.nftgators.com/midas-launches-the-mbtc-yield-bearing-token-for-bitcoin-dominated-assets/)  
25. Midas RWA Crypto Analytics & User Data \- AlphaGrowth, 访问时间为 七月 13, 2025， [https://alphagrowth.io/midas-rwa](https://alphagrowth.io/midas-rwa)  
26. Midas and 0G partner to bring real-world assets to AI-native blockchain infrastructure, 访问时间为 七月 13, 2025， [https://invezz.com/news/2025/07/01/midas-and-0g-partner-to-bring-real-world-assets-to-ai-native-blockchain-infrastructure/](https://invezz.com/news/2025/07/01/midas-and-0g-partner-to-bring-real-world-assets-to-ai-native-blockchain-infrastructure/)  
27. Midas partners with 0G to integrate tokenized real-world assets on AI-native blockchain, 访问时间为 七月 13, 2025， [https://sp-edge.com/updates/46539](https://sp-edge.com/updates/46539)  
28. Midas And 0G Partner To Bring Real-World Assets To AI-Native Blockchain Infrastructure, 访问时间为 七月 13, 2025， [https://www.barchart.com/story/news/33136646/midas-and-0g-partner-to-bring-real-world-assets-to-ai-native-blockchain-infrastructure](https://www.barchart.com/story/news/33136646/midas-and-0g-partner-to-bring-real-world-assets-to-ai-native-blockchain-infrastructure)  
29. Midas and 0G Partner to Bring Real-World Assets to AI-Native Blockchain Infrastructure, 访问时间为 七月 13, 2025， [https://thedefiant.io/news/press-releases/midas-and-0g-partner-to-bring-real-world-assets-to-ai-native-blockchain-infrastructure](https://thedefiant.io/news/press-releases/midas-and-0g-partner-to-bring-real-world-assets-to-ai-native-blockchain-infrastructure)  
30. Internet Native Investing \- Midas, 访问时间为 七月 13, 2025， [https://midas.app/team](https://midas.app/team)  
31. Dennis Dinkelmeyer, Midas \- Speaker Details: Paris Blockchain Week 2025, 访问时间为 七月 13, 2025， [https://tickets.parisblockchainweek.com/2025/speaker/1600481/dennis-dinkelmeyer](https://tickets.parisblockchainweek.com/2025/speaker/1600481/dennis-dinkelmeyer)  
32. Program on the Issuance and Offer of Blockchain-based ... \- MFSA, 访问时间为 七月 13, 2025， [https://www.mfsa.mt/wp-content/uploads/2024/11/Midas-Software-GmbH-Base-Prospectus-Document-dated-17-July-2024.pdf](https://www.mfsa.mt/wp-content/uploads/2024/11/Midas-Software-GmbH-Base-Prospectus-Document-dated-17-July-2024.pdf)  
33. Detailed Information on Midas Tokenized Real World Assets \- Readi, 访问时间为 七月 13, 2025， [https://readi.fi/issuer/tokenized-real-world-assets-issuer-midas/](https://readi.fi/issuer/tokenized-real-world-assets-issuer-midas/)  
34. RWA issuer Midas has obtained approval from European regulators to expand its range of tokenized products \- ChainCatcher, 访问时间为 七月 13, 2025， [https://www.chaincatcher.com/en/article/2146300](https://www.chaincatcher.com/en/article/2146300)  
35. RWA Issuer Midas Receives European Regulator Approval to Expand Tokenized Offerings to Retail Users | Bitget News, 访问时间为 七月 13, 2025， [https://www.bitget.com/news/detail/12560604255996](https://www.bitget.com/news/detail/12560604255996)  
36. In an EU first, tokenization firm Midas opens mTBILL and mBASIS tokens to retail traders, 访问时间为 七月 13, 2025， [https://www.theblock.co/post/320120/in-an-eu-first-tokenization-firm-midas-opens-mtbill-and-mbasis-tokens-to-retail-traders](https://www.theblock.co/post/320120/in-an-eu-first-tokenization-firm-midas-opens-mtbill-and-mbasis-tokens-to-retail-traders)  
37. Midas Receives EU Regulatory Approval to Offer Tokenised Assets to Retail Investors, 访问时间为 七月 13, 2025， [https://www.nftgators.com/midas-receives-eu-regulatory-approval-to-offer-tokenised-assets-to-retail-investors/](https://www.nftgators.com/midas-receives-eu-regulatory-approval-to-offer-tokenised-assets-to-retail-investors/)  
38. Ondo Short-Term US Government Bond Fund | OUSG \- RWA.xyz, 访问时间为 七月 13, 2025， [https://app.rwa.xyz/assets/OUSG](https://app.rwa.xyz/assets/OUSG)  
39. FORM OF FINAL TERMS \- MFSA, 访问时间为 七月 13, 2025， [https://www.mfsa.mt/wp-content/uploads/2024/11/Midas-Software-GmbH-Final-Terms-Document-dated-7-October-2024.pdf](https://www.mfsa.mt/wp-content/uploads/2024/11/Midas-Software-GmbH-Final-Terms-Document-dated-7-October-2024.pdf)  
40. Midas DeFi Stats \- TVL and Token Data \- DappRadar, 访问时间为 七月 13, 2025， [https://dappradar.com/dapp/midas/defi](https://dappradar.com/dapp/midas/defi)  
41. Active addresses (weekly) \- Midas \- Token Terminal, 访问时间为 七月 13, 2025， [https://tokenterminal.com/explorer/projects/midas/metrics/active-addresses-weekly](https://tokenterminal.com/explorer/projects/midas/metrics/active-addresses-weekly)  
42. Transaction count (contracts) \- Midas \- Token Terminal, 访问时间为 七月 13, 2025， [https://tokenterminal.com/explorer/projects/midas/metrics/transaction-count-contracts](https://tokenterminal.com/explorer/projects/midas/metrics/transaction-count-contracts)  
43. Midas \<\> Morpho Blue \- Incentives in the mTBILL market, 访问时间为 七月 13, 2025， [https://forum.morpho.org/t/midas-morpho-blue-incentives-in-the-mtbill-market/522](https://forum.morpho.org/t/midas-morpho-blue-incentives-in-the-mtbill-market/522)  
44. RWA TVL Rankings \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocols/rwa](https://defillama.com/protocols/rwa)  
45. Real-World Asset Sector Led by Ondo Finance Is Best-Performing Month-to-Date, 访问时间为 七月 13, 2025， [https://unchainedcrypto.com/real-world-asset-sector-led-by-ondo-finance-is-best-performing-month-to-date/](https://unchainedcrypto.com/real-world-asset-sector-led-by-ondo-finance-is-best-performing-month-to-date/)  
46. Ondo Finance Review: An Ideal Platform to Enter the RWA Market | Crypto Economy в Binance Square, 访问时间为 七月 13, 2025， [https://www.binance.com/bg/square/post/19761069277594](https://www.binance.com/bg/square/post/19761069277594)  
47. Ondo Finance, 访问时间为 七月 13, 2025， [https://ondo.finance/](https://ondo.finance/)  
48. Ondo Finance Price, ONDO Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 13, 2025， [https://www.coinbase.com/price/ondo-finance](https://www.coinbase.com/price/ondo-finance)  
49. Real-World Asset Tokens Surge 65% as Smart Money Floods In \- CoinCentral, 访问时间为 七月 13, 2025， [https://coincentral.com/real-world-asset-tokens-surge-65-as-smart-money-floods-in/](https://coincentral.com/real-world-asset-tokens-surge-65-as-smart-money-floods-in/)  
50. Real-World Assets (RWA) Tokenization: Complete Web3 Guide \- Webisoft, 访问时间为 七月 13, 2025， [https://webisoft.com/articles/real-world-assets-rwa-tokenization-guide/](https://webisoft.com/articles/real-world-assets-rwa-tokenization-guide/)  
51. Is the tokenization of real-world assets going mainstream? \- Sygnum Bank, 访问时间为 七月 13, 2025， [https://www.sygnum.com/blog/2024/05/27/is-the-tokenization-of-real-world-assets-going-mainstream/](https://www.sygnum.com/blog/2024/05/27/is-the-tokenization-of-real-world-assets-going-mainstream/)  
52. Beyond U.S. Treasuries RWA, Ondo Finance Needs More \- Gate.com, 访问时间为 七月 13, 2025， [https://www.gate.com/learn/articles/beyond-u-s-treasuries-rwa-ondo-finance-needs-more/1648](https://www.gate.com/learn/articles/beyond-u-s-treasuries-rwa-ondo-finance-needs-more/1648)  
53. RWA.xyz | Analytics on Tokenized Real-World Assets, 访问时间为 七月 13, 2025， [https://app.rwa.xyz/](https://app.rwa.xyz/)  
54. Ondo Finance Bridges to Solana: Will ONDO Lead the RWA Boom? \- 99Bitcoins, 访问时间为 七月 13, 2025， [https://99bitcoins.com/news/ondo-finance-bridges-to-solana-will-the-next-rwa-boom-be-driven-on-this-meme-coin-hub/](https://99bitcoins.com/news/ondo-finance-bridges-to-solana-will-the-next-rwa-boom-be-driven-on-this-meme-coin-hub/)  
55. Midas audit by Hacken, 访问时间为 七月 13, 2025， [https://hacken.io/audits/midas/sca-midas-vault-dec2023/](https://hacken.io/audits/midas/sca-midas-vault-dec2023/)  
56. Midas \- 2025 Funding Rounds & List of Investors \- Tracxn, 访问时间为 七月 13, 2025， [https://tracxn.com/d/companies/midas/\_\_ZHBK4LliS9SvXJrFrc0o9O8x\_pB3wYX6QTkP74OZYm8/funding-and-investors](https://tracxn.com/d/companies/midas/__ZHBK4LliS9SvXJrFrc0o9O8x_pB3wYX6QTkP74OZYm8/funding-and-investors)  
57. Midas Funding Rounds, Token Sale Review & Tokenomics Analysis | CryptoRank.io, 访问时间为 七月 13, 2025， [https://cryptorank.io/ico/midas-app](https://cryptorank.io/ico/midas-app)  
58. RWA issuer Midas receives $5 million funding from Oasis Foundation \- Gate.com, 访问时间为 七月 13, 2025， [https://www.gate.com/post/status/8066083](https://www.gate.com/post/status/8066083)  
59. Oasis Foundation to provide $5 million grant to bring Midas' compliant tokenized treasury fund to Sapphire chain | The Block, 访问时间为 七月 13, 2025， [https://www.theblock.co/post/329436/oasis-foundation-to-provide-5-million-grant-to-bring-midas-compliant-tokenized-treasury-fund-to-sapphire-chain](https://www.theblock.co/post/329436/oasis-foundation-to-provide-5-million-grant-to-bring-midas-compliant-tokenized-treasury-fund-to-sapphire-chain)  
60. The Oasis Foundation will provide a grant of $5 million to help Midas launch a yield-generating tokenized treasury fund on its network \- ChainCatcher, 访问时间为 七月 13, 2025， [https://www.chaincatcher.com/en/article/2155200](https://www.chaincatcher.com/en/article/2155200)  
61. Oasis Approves $5 Million Commitment for Midas to Bring Treasury Bills to Sapphire, 访问时间为 七月 13, 2025， [https://oasis.net/blog/midas-treasury-bills-sapphire](https://oasis.net/blog/midas-treasury-bills-sapphire)  
62. RWA publisher Midas receives $5 million in funding from Oasis Foundation | Bitget News, 访问时间为 七月 13, 2025， [https://www.bitget.com/news/detail/12560604403393](https://www.bitget.com/news/detail/12560604403393)  
63. 2 Free Crypto Airdrops | Midas RWA Airdrop \- Momo AI (NO ONE TELLS YOU) \- DICloak, 访问时间为 七月 13, 2025， [https://dicloak.com/video-insights-detail/2-free-crypto-airdrops-midas-rwa-airdrop-momo-ai-no-one-tells-you](https://dicloak.com/video-insights-detail/2-free-crypto-airdrops-midas-rwa-airdrop-momo-ai-no-one-tells-you)  
64. Get Free $GM Token Airdrop | Midas RWA Project Airdrop | $14 Million Funding \- DICloak, 访问时间为 七月 13, 2025， [https://dicloak.com/blog-detail/get-free-gm-token-airdrop--midas-rwa-project-airdrop--14-million-funding--confirmed-airdrop-](https://dicloak.com/blog-detail/get-free-gm-token-airdrop--midas-rwa-project-airdrop--14-million-funding--confirmed-airdrop-)  
65. Coinbase bets on Midas, RWA is making waves again | Odaily星球日报 on Binance Square, 访问时间为 七月 13, 2025， [https://www.binance.com/en/square/post/6047019914594](https://www.binance.com/en/square/post/6047019914594)  
66. Internet Native Investing \- Midas, 访问时间为 七月 13, 2025， [https://midas.app/geo-block](https://midas.app/geo-block)  
67. Contact Us \- Midas, 访问时间为 七月 13, 2025， [https://midas.app/contact-us](https://midas.app/contact-us)  
68. Privacy Policy \- Midas, 访问时间为 七月 13, 2025， [https://midas.app/privacy-policy](https://midas.app/privacy-policy)  
69. Imprint \- Midas.app, 访问时间为 七月 13, 2025， [https://midas.app/imprint](https://midas.app/imprint)  
70. Midas and 0G Unite to Power AI-Driven Onchain Finance \- CoinTrust, 访问时间为 七月 13, 2025， [https://www.cointrust.com/market-news/midas-and-0g-unite-to-power-ai-driven-onchain-finance](https://www.cointrust.com/market-news/midas-and-0g-unite-to-power-ai-driven-onchain-finance)  
71. Nuon Monthly Update: March \- April 2025, 访问时间为 七月 13, 2025， [https://blog.nuon.fi/nuon-community-update-march-april-2025/](https://blog.nuon.fi/nuon-community-update-march-april-2025/)  
72. mTBILL/verUSDC market \- Morpho | Earn, 访问时间为 七月 13, 2025， [https://app.morpho.org/base/market/0xca2e6f878e273f6587276b44470467f94175e92840ad0d7231e9deb64c190591/mtbill-verusdc](https://app.morpho.org/base/market/0xca2e6f878e273f6587276b44470467f94175e92840ad0d7231e9deb64c190591/mtbill-verusdc)  
73. Track Positions | Morpho, 访问时间为 七月 13, 2025， [https://docs.morpho.org/morpho/tutorials/track-positions/](https://docs.morpho.org/morpho/tutorials/track-positions/)  
74. Morpho | The most trusted network for onchain loans, 访问时间为 七月 13, 2025， [https://morpho.org/](https://morpho.org/)