

# **Space and Time (SXT) 深度投资评估报告：潜力与风险的博弈**

## **I. 执行摘要**

* **项目概述**：Space and Time (SxT) 是一个去中心化的数据仓库和可验证计算层，旨在为智能合约、人工智能（AI）和企业级应用连接链上与链下数据。其核心创新是“SQL证明”（Proof of SQL）协议，这是一种零知识证明（ZK-SNARK），能够以密码学方式保证SQL查询结果的准确性及其所依据数据的防篡改性 1。  
* **核心研究发现**：本项目呈现出典型的高风险、高回报特征。它拥有包括微软（Microsoft）和Chainlink在内的顶级投资者支持，由来自企业数据领域的资深团队领导，并掌握着突破性的技术。然而，一个公开审计报告揭示的、未经解决的关键安全漏洞，以及团队对此事令人担忧的沉默，都极大地削弱了其巨大的发展潜力。  
* **核心投资论点**：对SxT的投资，本质上是押注其团队有能力解决关键的安全缺陷，并利用其强大的战略合作伙伴关系，在Web3数据基础设施市场中占据重要份额。其潜在的上升空间是巨大的，但其安全性和透明度风险也同样突出，不容忽视。  
* **最终投资评级**：**中立**。在团队公开解决并修复已知的关键安全漏洞之前，任何投资都伴随着极高的风险。

## **II. 项目深潜：Web3的可验证计算层**

### **核心概念：去中心化数据仓库与ZK协处理器**

Space and Time将自身定位为Web3的“可验证计算层”（Verifiable Compute Layer）4。它通过将一个去中心化的数据仓库与一个零知识（ZK）协处理器相结合，旨在为智能合约、大型语言模型（LLM）和企业提供无需信任的数据处理能力 3。

该平台致力于解决一个根本性问题：智能合约原生无法处理海量数据，也无法以无需信任的方式访问历史数据或链下数据 1。SxT充当了一个“查询协处理器”的角色，将这些繁重的计算任务转移到链下执行，然后将经过ZK证明的结果安全地返回到链上 1。这一机制催生了新一代数据驱动的去中心化应用（dApps），应用场景涵盖了从复杂的DeFi衍生品到链上AI代理等多个领域 1。

### **战略生态系统与顶级机构背书**

Space and Time的成功不仅依赖其技术，更离不开其强大的战略合作伙伴网络。这种由行业巨头组成的联盟，构建了一个竞争对手难以复制的、自我强化的生态系统。

首先，与**微软**的合作关系远不止于财务投资。该项目获得了微软风险投资基金M12的支持 11，更重要的是，SxT已集成到Microsoft Azure市场 14。这一整合为SxT打开了通往企业级客户的直接渠道，这些客户通常对加密技术持谨慎态度，但对Azure平台却高度信任。此外，双方还在合作开发AI工具，例如一个名为“Houston”的、由OpenAI驱动的自然语言查询界面 11，这极大地降低了企业用户使用区块链数据的门槛。

其次，与**Chainlink**的合作关系是其Web3市场战略的基石。作为Chainlink BUILD项目的一员，SxT与Chainlink Labs建立了战略顾问关系 15。其核心技术“SQL证明”的ZK验证器将原生运行在Chainlink节点上，利用Chainlink成熟的去中心化预言机网络来无需信任地验证计算证明 15。对于已经在使用Chainlink预言机的dApp开发者而言，采用SxT成为一个自然而然的选择，这为SxT在庞大的Web3开发者社区中提供了无与伦比的信誉和市场切入点。

最后，与**NVIDIA**的合作是其技术性能的保障。“SQL证明”协议由NVIDIA的加速计算技术驱动，实现了在百万行数据表上进行分析查询时，证明生成时间低于一秒 18。这一合作关系至关重要，它使SxT“亚秒级ZK证明”的宣称从学术理论变为商业现实，确保了平台能够满足实时应用所需的高性能和低延迟要求。

这三大合作关系形成了一个强大的飞轮效应：通过微软吸引的企业客户会要求强大的去中心化安全性，而这恰好由Chainlink的集成提供；通过Chainlink吸引的Web3开发者会要求企业级的性能，而这又由NVIDIA的合作实现。每一个合作伙伴都增强了对其他合作伙伴目标受众的价值主张，从而构建了坚实的护城河。

## **III. 技术架构与创新：解构SQL证明**

### **SXT链：为特定目的而生的L1**

Space and Time是一个开源的、去中心化的Layer 1区块链 8。它采用双层架构，由一个验证者层（Validator Layer）和一个数据仓库（Data Warehouse）组成 3。其链上部分（SXT链）本身不存储原始数据，而是存储对数据的密码学承诺（即数据的“数字指纹”），这些承诺由验证者的共识来保护。这种设计避免了传统区块链常见的状态膨胀问题 1。而繁重的数据存储和计算任务则由链下组件处理。

选择构建一个定制化的L1，而非在现有L1/L2上部署智能合约，是该项目一项关键的架构决策。正如其首席技术官Scott Dykstra所解释的，团队的目标是创建一个为数据交付而优化的专用链，而不是成为一个通用的L1竞争者 19。这一决策为平台带来了对协议经济学（如数据插入的Gas费）和技术路线图的完全控制权，使其能够针对数据仓库和ZK证明生成进行深度优化。然而，这也带来了巨大的挑战，即需要从零开始引导自己的验证者网络和安全性，这是部署在以太坊等成熟网络上的协议所不必面对的。因此，SXT代币的经济模型和质押激励机制变得至关重要。代币不仅是支付媒介，更是整个数据完整性层的安全保障。代币价值或质押参与度的失败，将直接转化为网络安全的失败——这是一种比典型dApp代币更为紧密和关键的耦合关系。

### **网络角色：去中心化的三驾马车**

网络由三种不同角色的、用户操作的节点组成，它们协同工作以确保平台的正常运行：

1. **验证者（Validators）**：作为SXT链的安全骨干，验证者负责运行网络、参与DPoS共识，并对接收到的数据进行签名以生成密码学承诺，从而保证数据的防篡改性 1。  
2. **索引者（Indexers）**：这些节点负责从各大主流区块链（如以太坊、比特币、Polygon、Sui等）冗余地抓取、处理和格式化数据，并将其提交到SXT链 1。  
3. **证明者（Provers）**：这些是GPU驱动的高性能节点，是网络的计算主力。它们在链下执行SQL查询，使用“SQL证明”协议为计算结果生成ZK证明，然后将结果和证明一同交付给客户端或智能合约 1。

### **SQL证明：项目的技术瑰宝**

“SQL证明”是项目的核心技术，由团队的研究负责人Jay White博士开发，是一种新颖的ZK-SNARK协议 2。它旨在保证两件事：第一，查询是准确计算的；第二，查询所依据的底层数据是未经篡改的 22。

该协议为高性能而设计，利用GPU加速（通过其自研的Blitzar框架 2）实现了亚秒级的证明生成速度，比通用的zkVM快一个数量级 2。其完整流程包括解析SQL、执行查询以生成“见证”（witness）、创建多项式约束，并使用sum-check协议来证明这些关系成立，最后通过对数据承诺（例如Dory、HyperKZG）的验证来完成整个过程 1。

## **IV. 市场与竞争分析**

### **SXT代币市场表现**

* **代币信息**：Space and Time (SXT) 是部署在以太坊上的ERC-20代币 9。  
* **市场数据（截至2025年6月下旬）**：  
  * 市值：约1.0252亿美元 25  
  * 流通供应量：14亿 SXT (占总供应量的28%) 4  
  * 24小时交易量：约4870万美元 25  
  * 历史最高价：$0.1621 (2025年5月) 9  
  * 历史最低价：$0.05933 (2025年6月) 9  
* **交易所**：已上线多家主流中心化交易所，包括币安（Binance）、Gate.io、MEXC、Bybit和KuCoin，确保了良好的流动性和投资者的可及性.9

### **竞争格局：SxT vs. The Graph (GRT) vs. Covalent (CQT)**

Space and Time所在的赛道是Web3数据服务，其主要竞争对手是数据索引领域的领先者The Graph和Covalent。

* **The Graph (GRT)**：是去中心化数据索引领域的现有领导者。它使用GraphQL查询语言，并通过一个由索引者、策展人和委托人组成的网络来运作。其安全性依赖于一种名为“索引证明”（Proof of Indexing）的经济博弈机制，这在密码学层面上的保证弱于SxT的ZK证明 26。GRT的核心是为开发者提供按需定制的、通过“子图”（subgraphs）实现的数据索引服务。  
* **Covalent (CQT)**：专注于为数十个区块链提供统一的API，以访问丰富、精细的链上数据。它采用“提取-加载-转换”（ELT）模型，与The Graph的“提取-转换-加载”（ETL）模型不同，这使其在处理全链历史数据的查询时更具灵活性 27。Covalent的主要优势在于其广泛的、无需编码的数据可访问性。  
* **Space and Time的差异化**：SxT最核心的差异化在于**可验证计算**。GRT和Covalent解决了“数据访问”的问题，而SxT解决了“数据信任”的问题。它不仅索引数据，还能证明对这些数据进行的**计算**是正确的。此外，它使用标准的SQL语言，这对于企业开发者来说比GraphQL更为熟悉。其ZK证明模型提供了更高等级的安全性和无需信任的保证 26。

这种差异化意味着Space and Time实际上在开创一个新的市场类别——“可验证计算”，它位于数据层和智能合约层之间。其真正的竞争对手最终可能是其他ZK协处理器和zkVM项目。这一定位使其潜在市场空间（TAM）远大于单纯的数据索引，能够赋能那些仅靠数据索引无法实现的复杂应用，如无需信任的链上信用评分、复杂的金融衍生品或可验证的AI模型。然而，这也意味着其技术风险和复杂性要高得多。它的成功与更复杂的、数据密集型dApp的兴起息息相关，而GRT和Covalent则服务于当前大多数相对简单的dApp的需求。因此，投资SxT可以看作是对dApp未来复杂化演进方向的押注。

| 特性 | Space and Time (SXT) | The Graph (GRT) | Covalent (CQT) |
| :---- | :---- | :---- | :---- |
| **核心功能** | 可验证计算 | 数据索引 | 统一数据API |
| **查询语言** | SQL | GraphQL | REST API |
| **安全模型** | ZK证明 (SQL证明) | 经济/惩罚机制 (索引证明) | 中心化/专有 |
| **目标用户** | 企业 & DeFi开发者 | Web3开发者 | Web3开发者 & 分析师 |
| **链上验证** | 原生支持，Gas成本低 | 不支持查询验证 | 不适用 |
| **关键伙伴** | 微软, NVIDIA, Chainlink | 广泛的Web3生态 | 广泛的Web3生态 |

## **V. 代币经济学与财务状况尽职调查**

### **SXT经济模型与代币效用**

* **总供应量**：5,000,000,000 SXT (固定上限) 4。  
* **核心效用** 20：  
  1. **质押与安全**：验证者和委托人通过质押SXT来保护SXT链的安全并赚取奖励。这是其最主要的密码经济安全机制。  
  2. **协议支付**：SXT是网络内所有交易的原生支付代币，包括查询费、数据插入费以及数据市场内的支付。  
  3. **数据激励**：数据提供者（Table Owners）可以通过向网络提供高质量数据集来赚取SXT。  
  4. **治理**：SXT持有者将能够参与链上投票，以指导协议的未来发展 24。

### **代币分配与解锁计划**

代币的分配旨在平衡各方利益，但其解锁计划中存在一个可能对市场产生重大影响的关键节点。

* **分配情况** 29：  
  * 生态系统与社区：39.2% (19.6亿 SXT)  
  * 投资者：25.9% (12.96亿 SXT)  
  * 团队：22.4% (11.22亿 SXT)  
  * 社区空投：6.0% (3亿 SXT)  
  * 币安用户：4.5% (2.25亿 SXT)  
  * 做市商：2.0% (1亿 SXT)  
* **解锁计划** 29：  
  * **团队与投资者**：这是最值得关注的部分。他们的代币有为期12个月的锁仓期（cliff），之后有4年的线性解锁。在锁仓期结束时，将有15%的代币被解锁。  
  * **生态系统与社区**：在TGE时有38%的悬崖解锁，之后是4年的线性解锁。  
  * **空投、币安、做市商**：在TGE时100%解锁。

| 类别 | 代币数量 (SXT) | 百分比 | 解锁详情 |
| :---- | :---- | :---- | :---- |
| **生态系统与社区** | 1,957,500,000 | 39.2% | TGE时解锁38%，剩余部分4年线性解锁 |
| **投资者** | 1,295,500,000 | 25.9% | 12个月锁仓，之后4年线性解锁（第12个月解锁15%） |
| **团队** | 1,122,000,000 | 22.4% | 12个月锁仓，之后4年线性解锁（第12个月解锁15%） |
| **社区空投** | 300,000,000 | 6.0% | TGE时100%解锁 |
| **币安用户** | 225,000,000 | 4.5% | TGE时100%解锁 |
| **做市商** | 100,000,000 | 2.0% | TGE时100%解锁 |

团队和投资者的解锁计划共同构成了一个可预测的“解锁悬崖”。TGE发生在2025年5月 6，这意味着在2026年5月左右，将有一个大规模的代币解锁事件。团队和投资者的总份额为48.3%（24.155亿SXT），届时将解锁其中的15%。计算可得：

2,415,500,000×15%=362,325,000 SXT。这批超过3.62亿的SXT代币将首次变为流动状态，其数量约占初始流通供应量（14亿SXT）的25%。对于战略投资者而言，必须密切关注项目在该日期前的表现和市场情绪。如果协议得到广泛采用并产生可观收入，市场或许能够吸收这部分新增供应。反之，若项目表现不佳或市场情绪悲观，这次解锁很可能引发显著的价格下跌。这是一个需要重点标记的未来风险事件。

### **融资与投资者背景**

* **总融资金额**：通过三轮融资共筹集了5000万美元 12。  
* **种子轮（2022年7月，1000万美元）**：由Framework Ventures领投，参投方包括HashKey Capital、Digital Currency Group (DCG)等 30。  
* **战略轮（2022年9月，2000万美元）**：由微软的M12基金领投，参投方包括Framework、HashKey、Polygon Ventures等 30。  
* **A轮（2024年8月，2000万美元）**：由Framework、Arrington Capital、Faction、Hivemind领投，参投方包括DCG、OKX Ventures等 30。  
* **投资者质量**：投资者阵容堪称顶级，融合了加密原生风投（Framework、Arrington）、企业风投（微软M12）以及战略生态参与者（OKX、Polygon）。这为项目提供了强有力的市场验证和坚实的行业支持网络。

## **VI. 风险评估：团队、历史与治理**

### **创始人与团队分析**

Space and Time的领导团队拥有非凡的背景，是企业软件、企业技术架构和前沿密码学领域的罕见组合，这使其在众多加密项目中脱颖而出。

* **Nate Holiday (联合创始人兼CEO)**：拥有丰富的企业级市场经验。曾任Teradata和Vista Equity Partners的高级副总裁，同时也是Chainlink Labs和Bain & Co.的战略顾问 16。他的专长在于市场进入（GTM）策略和规模化大型企业解决方案，这与项目的目标完美契合。  
* **Scott Dykstra (联合创始人兼CTO)**：同样来自Teradata（全球云业务副总裁），并拥有加州大学伯克利分校的数据科学硕士学位。他在数据仓库、云计算和分布式系统方面拥有深厚的专业知识 5，为构建企业级数据平台提供了坚实的技术领导力。  
* **Jay White, PhD (联合创始人兼研究负责人)**：团队的学术核心。他是数学博士、前大学教授，也是“SQL证明”协议的发明者 21。他在计算数学和密码学方面的背景是项目核心技术创新的源泉。  
* **Craig Holiday (联合创始人)**：在资料中被提及为联合创始人之一 12，但公开信息较少。

### **历史事件审查**

对所有可用资料的审查显示，**没有证据表明Space and Time项目或其核心创始人存在任何过往的被攻击、黑客事件、欺诈行为或任何其他负面历史记录**。该项目相对较新，于2021年构思，2022年开始融资 13。需要分析的主要历史风险事件是其安全审计结果，将在下一节中详细讨论。

### **治理与Space and Time基金会**

Space and Time基金会于2024年底成立，旨在引导网络的长期发展和去中心化 37。其宣称的使命是通过提供赠款、教育和技术支持来赋能开发者和创造者 38。

基金会模式是行业内实现去中心化的标准路径。然而，在项目早期阶段，这种模式实际上将对大量代币（占总供应量39.2%的生态系统与社区基金）的控制权集中在基金会手中。投资者必须信任该基金会能够作为这些资金的善意管理者，以促进真正的生态系统增长为目的进行分配，而非用于内部人牟利。其赠款发放过程的透明度，将是衡量该项目对去-中心化承诺的关键指标。

## **VII. 安全审计深度剖析：一次关键的审视**

### **Cyberscope审计发现（2024年6月28日迭代）**

* **总体评分**：86%（极低风险），位列前10% 39。其中，安全专项评分为94% 39。  
* **核心问题**：审计发现了**8个未解决的问题**，其中包括\*\*1个“关键”（Critical）**和**1个“中等”（Medium）\*\*级别的漏洞 39。这是本报告中识别出的最重大的风险因素。  
* **关键级未解决漏洞 (PQMR): "潜在的查询操纵风险" (Potential Query Manipulation Risk)** 39。尽管现有资料未提供完整的技术细节，但仅凭其标题就足以构成一个巨大的警示信号。一个以“可验证的、防篡改的查询”为全部价值主张的协议，却存在一个与“查询操纵”相关的、未解决的关键风险，这直接动摇了项目的根基。  
* **中等级未解决漏洞 (PU): "潜在的下溢风险" (Potential Underflow)** 39。这是一个在智能合约中常见但严重的漏洞，可能导致错误的计算结果，并可能引发资金损失或逻辑中断。  
* **低等级未解决漏洞**：包括“合约中心化风险”、“缺少事件触发”等 39。虽然级别较低，但“中心化风险”这一项仍需关注，因为它可能指向某些所有者权限，从而削弱协议的去中心化承诺。

### **影响分析与团队回应评估**

* **影响**：“潜在的查询操纵风险”是一个关乎生存的威胁。如果恶意行为者能够利用此漏洞，他们可能向智能合约提供看似经过验证的虚假数据。这将导致DeFi协议的灾难性失败、AI模型的错误训练，并最终导致平台信誉的彻底丧失。  
* **团队回应**：对所有可得资料（包括官方博客、推特、AMA摘要）的彻底检索显示，**Space and Time团队没有就Cyberscope审计的具体发现，特别是关键漏洞，发布任何公开声明、承认或修复计划** 40。这与行业最佳实践形成鲜明对比，例如Venus Protocol等项目会积极公布其审计分数并详细说明对审计发现的回应 40。

这种沉默在风险沟通和透明度方面构成了严重缺陷，为有辨识能力的投资者制造了一个巨大的“信任鸿沟”。项目的核心承诺是通过密码学实现“无需信任” 7，但一份来自信誉良好公司的公开审计报告却指出了一个直接违背这一承诺的关键漏洞 39。团队对此保持沉默，迫使潜在投资者在“相信项目的市场宣传”和“相信第三方审计报告”之间做出选择。对于任何具备技术素养的投资者来说，审计报告的权重必须被置于极高的位置。这种情况造成了信息不对称：不够老练的投资者可能只看到86%的总体高分和强大的合作伙伴阵容便贸然投资，而本报告的目标用户这类成熟投资者，则会将这个未解决的关键漏洞视为在问题解决前完全规避该项目的理由。因此，项目当前的价值可能部分建立在投资者对其最深层风险不知情的基础之上，这是一个不稳定的结构。团队必须发布一份官方的、详细的回应，才能弥合这一信任鸿沟。

## **VIII. 生态系统与社区健康状况**

### **开发者活动与资源**

* **GitHub**：项目维护着两个主要的GitHub组织：spaceandtimefdn和spaceandtimelabs 48。代码库显示出非常活跃的开发活动，尤其是在Rust（  
  sxt-proof-of-sql, blitzar）和C++等语言上，这表明团队专注于高性能的底层工程 48。  
* **SDKs**：至关重要的是，项目为包括Go、NodeJS和Python在内的主流编程语言提供了SDK 48。这体现了团队通过满足开发者现有技术栈来推动采用的认真承诺。例如，其NodeJS SDK文档完善，已获得超过3300个星标 50。  
* **文档**：项目提供了全面的文档资源，包括详细的白皮书 1、快速入门指南 8 和API参考 38。

### **社交情绪与社区**

* **社交媒体影响力**：项目在推特（超过45万关注者）和Discord（超过27万成员）上拥有庞大的社群，表明市场兴趣浓厚 39。  
* **市场情绪**：CoinGecko指出社区情绪普遍“看涨” 9。新闻报道也强调，每当有新的合作（如与微软的集成）公布时，代币价格都会出现上涨 25。  
* **空投与社区奖励**：项目通过名为“Gigaclaim 0”的活动，向早期贡献者、测试网用户和生态伙伴（包括Chainlink质押者）空投了3.75亿SXT（占总供应量的7.5%）28。这是引导社区、奖励早期支持者的标准且有效的方法。

值得注意的是，普遍积极的社交情绪与审计报告中揭示的关键技术风险之间存在明显脱节。这表明广大社区成员可能没有意识到，或者低估了未解决安全问题的严重性。看涨情绪很可能更多地是由高调的合作伙伴关系和市场营销驱动，而非基于普通社区成员的深度技术尽职调查。

## **IX. 战略投资机会**

### **直接购买代币 (SXT)**

* **优点**：流动性最高，进入门槛最低，无锁仓期。便于捕捉由新合作公告等叙事驱动的短期或中期价格波动。  
* **缺点**：完全暴露于市场波动和本报告中详述的各项风险，尤其是未解决的关键安全漏洞。无被动收益。

### **DeFi收益与质押（关注高APR机会）**

* **标准质押**：  
  * **机制**：委托权益证明（DPoS）51。  
  * **预估APR**：约7.9%（浮动，需扣除10%的验证者佣金）51。  
  * **条件**：最低质押100 SXT，7天解绑期 51。  
  * **关键风险**：质押仪表盘明确指出，**解绑功能将在2025年第三季度进行新一轮安全审计后才会开放** 51。这意味着  
    **当前质押的资金实际上处于无限期锁定状态**，这是一个重大的流动性风险。  
* **创世验证者奖励计划（高APR机会）**：  
  * **预估APR**：年化高达约30%（在9个月的计划期内，实际收益率约为22%）52。  
  * **条件**：必须在主网上线后的前14天内完成质押（此窗口期很可能已经关闭）。必须**连续质押9个月且中途不得解绑**。必须满足验证者的性能要求（如正常运行时间）52。  
  * **风险**：这是一个高投入、高风险的策略。长达9个月的锁仓期使投资者面临巨大的市场和协议风险。未能满足性能要求将导致丧失增强奖励的资格。

### **面向开发者的机会（针对技术背景投资者）**

* **运行节点**：具备技术背景的投资者可以运行验证者或证明者节点。这需要大量的技术专长和硬件投入（特别是证明者节点需要GPU），但可以直接参与网络并获得奖励。  
* **发布数据**：项目的经济模型奖励那些发布高质量数据集的“数据表所有者” 20。拥有有价值链下数据（如游戏、金融、AI领域）的开发者，可以通过在SxT市场上提供数据来创造收入来源。  
* **构建可验证的dApp/代理**：生态系统的最终目标是让开发者在其之上构建应用。开发者可以利用“SQL证明”协议创建自己独特的可验证dApp、AI代理或分析仪表盘。虽然目前未发现明确的开发者赠款计划 38，但其价值在于能够创造出在其他平台上无法实现的、无需信任的独特产品。

### **SxT投资策略对比**

| 投资策略 | 所需资本 | 所需技术技能 | 潜在ROI (APR) | 风险等级 | 锁仓期 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. 直接购买SXT代币** | 灵活 | 低 | 无（价格增值） | 高 | 无 |
| **2\. 标准质押（委托人）** | 较低 (\>=100 SXT) | 低 | \~7.9% | 极高 | 未知 (至少到2025年Q3) |
| **3\. 创世验证者计划** | 高 | 高 | 高达 \~30% | 极高 | 9个月 |
| **4\. 运行证明者/验证者节点** | 很高（硬件+质押） | 很高 | 协议奖励 | 极高 | 协议规定 |
| **5\. 发布数据（生态参与）** | 灵活 | 中到高 | 市场决定 | 高 | 无 |

## **X. 最终结论与投资评级**

### **综合分析**

Space and Time是一个充满巨大野心和潜力的项目。其技术具有真正的创新性，领导团队堪称世界级，与微软、Chainlink和NVIDIA的战略联盟构建了强大的竞争壁垒。该项目正在解决Web3领域的一个根本性难题——缺乏可验证的计算能力——如果成功，将可能释放数万亿美元的价值。

然而，这座宏伟的建筑完全建立在“无需信任的验证”这一基石之上。其公开审计报告中存在一个与“潜在查询操纵”相关的、未解决的关键安全漏洞，这无异于在地基上留下了一道裂缝。团队未能公开回应这一关键发现，造成了严重的治理和透明度风险，也与其所倡导的“无需信任”精神背道而驰。

### **投资建议**

在权衡了其巨大潜力与关键的、未被解决的风险后，当前最合适的投资评级为**中立 (Neutral)**。

这个项目前景广阔，不应被轻易否定；但其安全隐患也极其严重，不容被忽视。通往“建议”或“强烈建议”评级的路径是明确的：**团队必须公开承认Cyberscope的审计发现，提供详细的技术风险解释，并提出一个透明的、可验证的修复计划。** 在此之前，任何投资都将伴随着对于一个以“可验证性”为核心承诺的项目而言，高到无法接受的风险。

#### **引用的著作**

1. Space and Time (SXT Chain) white paper-v2 (External) \- NET, 访问时间为 六月 24, 2025， [https://sxtdocspub.blob.core.windows.net/docs/sxt-whitepaper.pdf](https://sxtdocspub.blob.core.windows.net/docs/sxt-whitepaper.pdf)  
2. spaceandtimefdn/sxt-proof-of-sql: Space and Time \- GitHub, 访问时间为 六月 24, 2025， [https://github.com/spaceandtimefdn/sxt-proof-of-sql](https://github.com/spaceandtimefdn/sxt-proof-of-sql)  
3. In-Depth Analysis of the Space and Time Project | \_Wendy on Binance Square, 访问时间为 六月 24, 2025， [https://www.binance.com/en/square/post/23799383503242](https://www.binance.com/en/square/post/23799383503242)  
4. Space and Time Price | SXT Price Today, Live Chart, USD converter, Market Capitalization | CryptoRank.io, 访问时间为 六月 24, 2025， [https://cryptorank.io/price/space-and-time](https://cryptorank.io/price/space-and-time)  
5. Scott Dykstra Speaker Profile \- Blockworks, 访问时间为 六月 24, 2025， [https://blockworks.co/speaker/scott-dykstra](https://blockworks.co/speaker/scott-dykstra)  
6. New Mainnet, New Whitepaper: Space and Time Launches With a Bang \- Crypto Daily, 访问时间为 六月 24, 2025， [https://cryptodaily.co.uk/2025/05/new-mainnet-new-whitepaper-space-and-time-launches-with-a-bang](https://cryptodaily.co.uk/2025/05/new-mainnet-new-whitepaper-space-and-time-launches-with-a-bang)  
7. The Problem with Smart Contracts | Space and Time, 访问时间为 六月 24, 2025， [https://www.spaceandtime.io/blog/the-problem-with-smart-contracts](https://www.spaceandtime.io/blog/the-problem-with-smart-contracts)  
8. What is Space and Time? \- Quick Intro, 访问时间为 六月 24, 2025， [https://docs.spaceandtime.io/docs/what-is-space-and-time-quick-intro](https://docs.spaceandtime.io/docs/what-is-space-and-time-quick-intro)  
9. Space and Time Price: SXT Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 六月 24, 2025， [https://www.coingecko.com/en/coins/space-and-time](https://www.coingecko.com/en/coins/space-and-time)  
10. Space And Time Crypto Mainnet Launches, Paving The Way For AI-Driven Blockchain Applications, 访问时间为 六月 24, 2025， [https://blockchainmagazine.net/space-and-time-crypto-mainnet-launches-paving-the-way-for-ai-driven-blockchain-applications/](https://blockchainmagazine.net/space-and-time-crypto-mainnet-launches-paving-the-way-for-ai-driven-blockchain-applications/)  
11. Space and Time helps customers decode blockchain data with Microsoft Azure Open AI, 访问时间为 六月 24, 2025， [https://www.microsoft.com/en/customers/story/1729595843821189195-space-and-time-microsoft-azure-open-ai-united-states](https://www.microsoft.com/en/customers/story/1729595843821189195-space-and-time-microsoft-azure-open-ai-united-states)  
12. What Is Space and Time (SXT)? \- Gate.com, 访问时间为 六月 24, 2025， [https://www.gate.com/learn/articles/what-is-space-and-time-sxt/8512](https://www.gate.com/learn/articles/what-is-space-and-time-sxt/8512)  
13. What Is Space and Time (SXT)? The Verifiable Compute Layer for Web3 \- Phemex, 访问时间为 六月 24, 2025， [https://phemex.com/academy/what-is-space-and-time-sxt-the-verifiable-compute-layer-for-web3](https://phemex.com/academy/what-is-space-and-time-sxt-the-verifiable-compute-layer-for-web3)  
14. Space and Time Data Warehouse \- Microsoft Azure Marketplace, 访问时间为 六月 24, 2025， [https://azuremarketplace.microsoft.com/en-us/marketplace/apps/spaceandtimelabsinc1674586360724.spaceandtimedb?tab=overview](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/spaceandtimelabsinc1674586360724.spaceandtimedb?tab=overview)  
15. Space And Time CEO Nate Holiday On Building The Future With Verifiable Data, 访问时间为 六月 24, 2025， [https://chainlinktoday.com/space-and-time-ceo-nate-holiday-on-building-the-future-with-verifiable-data/](https://chainlinktoday.com/space-and-time-ceo-nate-holiday-on-building-the-future-with-verifiable-data/)  
16. Nate Holiday \- CEO & Co-founder at Space and Time | The Org, 访问时间为 六月 24, 2025， [https://theorg.com/org/space-and-time-io/org-chart/nate-holiday](https://theorg.com/org/space-and-time-io/org-chart/nate-holiday)  
17. Nate Holiday Research by SuperAGI, 访问时间为 六月 24, 2025， [https://sales.superagi.com/contact/nate-holiday](https://sales.superagi.com/contact/nate-holiday)  
18. Space and Time Delivers Sub-Second Zero-Knowledge Prover for SQL Powered by NVIDIA Accelerated Computing \- Chainwire, 访问时间为 六月 24, 2025， [https://chainwire.org/2025/05/15/space-and-time-delivers-sub-second-zero-knowledge-prover-for-sql-powered-by-nvidia-accelerated-computing/](https://chainwire.org/2025/05/15/space-and-time-delivers-sub-second-zero-knowledge-prover-for-sql-powered-by-nvidia-accelerated-computing/)  
19. A conversation with Scott Dykstra, co-founder and CTO at Space and Time \- DL News, 访问时间为 六月 24, 2025， [https://www.dlnews.com/research/internal/a-conversation-scott-dykstra-co-founder-cto-space-time/](https://www.dlnews.com/research/internal/a-conversation-scott-dykstra-co-founder-cto-space-time/)  
20. Introducing the Space and Time (SXT) Token | Space and Time, 访问时间为 六月 24, 2025， [https://www.spaceandtime.io/blog/introducing-the-space-and-time-sxt-token](https://www.spaceandtime.io/blog/introducing-the-space-and-time-sxt-token)  
21. Exploring Space and Time: Proof of SQL \- SpaceandTime.io, 访问时间为 六月 24, 2025， [https://www.spaceandtime.io/blog/exploring-space-and-time-proof-of-sql](https://www.spaceandtime.io/blog/exploring-space-and-time-proof-of-sql)  
22. Proof of SQL 101 | Space and Time \- SpaceandTime.io, 访问时间为 六月 24, 2025， [https://www.spaceandtime.io/blog/proof-of-sql-101](https://www.spaceandtime.io/blog/proof-of-sql-101)  
23. \[SXT\] Space and Time Token price, ERC20 history and chart \- Ethereum contract address 0xE6Bfd33F52d82Ccb5b37E16D3dD81f9FFDAbB195 \- Ethplorer, 访问时间为 六月 24, 2025， [https://ethplorer.io/address/0xe6bfd33f52d82ccb5b37e16d3dd81f9ffdabb195](https://ethplorer.io/address/0xe6bfd33f52d82ccb5b37e16d3dd81f9ffdabb195)  
24. Space and Time (SXT) Price, Live Chart and Data \- KuCoin, 访问时间为 六月 24, 2025， [https://www.kucoin.com/price/SXT](https://www.kucoin.com/price/SXT)  
25. Space and Time price today, SXT to USD live price, marketcap and ..., 访问时间为 六月 24, 2025， [https://coinmarketcap.com/currencies/space-and-time/](https://coinmarketcap.com/currencies/space-and-time/)  
26. Fundamental Analysis of GRT Competitor Space and Time (SXT) | 朱老师讲区块链 on Binance Square, 访问时间为 六月 24, 2025， [https://www.binance.com/en/square/post/24186460172737](https://www.binance.com/en/square/post/24186460172737)  
27. Covalent Network: A hidden gem in the decentralized infrastructure space | MarsBit News on Binance Square, 访问时间为 六月 24, 2025， [https://www.binance.com/en/square/post/3167328171017](https://www.binance.com/en/square/post/3167328171017)  
28. What Is Space and Time ($SXT)? A Complete Guide to the $SXT Airdrop, Tokenomics, and Roadmap \- BingX Academy, 访问时间为 六月 24, 2025， [https://bingx.com/en/learn/what-is-space-and-time-sxt-how-to-claim-your-sxt-token-airdrop/](https://bingx.com/en/learn/what-is-space-and-time-sxt-how-to-claim-your-sxt-token-airdrop/)  
29. Space and Time (SXT) | Tokenomics, Supply & Release Schedule, 访问时间为 六月 24, 2025， [https://tokenomist.ai/space-and-time](https://tokenomist.ai/space-and-time)  
30. Space and Time (SXT) Funding Rounds, Token Sale Review ..., 访问时间为 六月 24, 2025， [https://cryptorank.io/ico/space-and-time](https://cryptorank.io/ico/space-and-time)  
31. Nathan Holiday \- NFT Paris 2023, 访问时间为 六月 24, 2025， [https://www.nftparis.xyz/ai-x-web3-speakers/nathan-holiday](https://www.nftparis.xyz/ai-x-web3-speakers/nathan-holiday)  
32. Scott Dykstra \- CTO and Co-Founder at Space and Time | The Org, 访问时间为 六月 24, 2025， [https://theorg.com/org/space-and-time-io/org-chart/scott-dykstra](https://theorg.com/org/space-and-time-io/org-chart/scott-dykstra)  
33. Scott Dykstra \- Strategic Advisor at Sotero \- The Org, 访问时间为 六月 24, 2025， [https://theorg.com/org/sotero/org-chart/scott-dykstra](https://theorg.com/org/sotero/org-chart/scott-dykstra)  
34. Jay White \- Head of Research and Co-Founder at Space and Time | The Org, 访问时间为 六月 24, 2025， [https://theorg.com/org/space-and-time-io/org-chart/jay-white](https://theorg.com/org/space-and-time-io/org-chart/jay-white)  
35. In-Depth Analysis of the Space and Time Project | \_Wendy on Binance Square, 访问时间为 六月 24, 2025， [https://www.binance.com/en-NG/square/post/23799383503242](https://www.binance.com/en-NG/square/post/23799383503242)  
36. What is SXT Coin from Space and Time? Future of DeFi and Onchain AI \- Bitrue, 访问时间为 六月 24, 2025， [https://www.bitrue.com/blog/what-is-sxt-coin-space-and-time](https://www.bitrue.com/blog/what-is-sxt-coin-space-and-time)  
37. What Is Space And Time (SXT)? The Complete Guide To Crypto's First ZK-Proven Database, 访问时间为 六月 24, 2025， [https://blog.mexc.com/what-is-sxt-space-and-time/](https://blog.mexc.com/what-is-sxt-space-and-time/)  
38. ZK Coprocessor Blog \- Space and Time, 访问时间为 六月 24, 2025， [https://www.spaceandtime.io/blog](https://www.spaceandtime.io/blog)  
39. Space and Time Smart Contract Audit | Cyberscope, 访问时间为 六月 24, 2025， [https://www.cyberscope.io/audits/sxt](https://www.cyberscope.io/audits/sxt)  
40. Venus Protocol and the Architecture of Trust: How a 91% Audit Score Signals DeFi's Maturing Moment \- CoinStats, 访问时间为 六月 24, 2025， [https://coinstats.app/news/f9b890d0904d47f334f1554004f2d2f0790e5c6dfea40c4b86e3d75e5036e4bc\_Venus-Protocol-and-the-Architecture-of-Trust-How-a-91-Audit-Score-Signals-DeFis-Maturing-Moment/](https://coinstats.app/news/f9b890d0904d47f334f1554004f2d2f0790e5c6dfea40c4b86e3d75e5036e4bc_Venus-Protocol-and-the-Architecture-of-Trust-How-a-91-Audit-Score-Signals-DeFis-Maturing-Moment/)  
41. STAC: Space/Time Analysis for Cybersecurity \- DARPA, 访问时间为 六月 24, 2025， [https://www.darpa.mil/research/programs/space-time-analysis-cybersecurity](https://www.darpa.mil/research/programs/space-time-analysis-cybersecurity)  
42. I'm the CTO of Container Security at Wiz, AMA\! : r/cybersecurity \- Reddit, 访问时间为 六月 24, 2025， [https://www.reddit.com/r/cybersecurity/comments/1iba3cp/im\_the\_cto\_of\_container\_security\_at\_wiz\_ama/](https://www.reddit.com/r/cybersecurity/comments/1iba3cp/im_the_cto_of_container_security_at_wiz_ama/)  
43. Dependable Experimentation for Space/Time Analysis for Cyber Security \- DTIC, 访问时间为 六月 24, 2025， [https://apps.dtic.mil/sti/citations/AD1097796](https://apps.dtic.mil/sti/citations/AD1097796)  
44. Stream and filter Windows DNS logs with the AMA connector | Microsoft Learn, 访问时间为 六月 24, 2025， [https://learn.microsoft.com/en-us/azure/sentinel/connect-dns-ama](https://learn.microsoft.com/en-us/azure/sentinel/connect-dns-ama)  
45. CertiK x Seedify.fund AMA, 访问时间为 六月 24, 2025， [https://www.certik.com/resources/blog/certikxseedifyfundama](https://www.certik.com/resources/blog/certikxseedifyfundama)  
46. Summary of SpaceX Software AMA \- Reddit, 访问时间为 六月 24, 2025， [https://www.reddit.com/r/spacex/comments/nd9ipw/summary\_of\_spacex\_software\_ama/](https://www.reddit.com/r/spacex/comments/nd9ipw/summary_of_spacex_software_ama/)  
47. Space and Time (@SpaceandTimeDB) / X, 访问时间为 六月 24, 2025， [https://x.com/SpaceandTimeDB](https://x.com/SpaceandTimeDB)  
48. Space and Time \- GitHub, 访问时间为 六月 24, 2025， [https://github.com/spaceandtimefdn](https://github.com/spaceandtimefdn)  
49. spaceandtimelabs \- GitHub, 访问时间为 六月 24, 2025， [https://github.com/spaceandtimelabs](https://github.com/spaceandtimelabs)  
50. spaceandtimelabs/SxT-NodeJS-SDK: NodeJS based SDK for interacting with the Space and Time API. \- GitHub, 访问时间为 六月 24, 2025， [https://github.com/spaceandtimelabs/SxT-NodeJS-SDK](https://github.com/spaceandtimelabs/SxT-NodeJS-SDK)  
51. Space and Time Staking Dashboard, 访问时间为 六月 24, 2025， [https://staking.spaceandtime.io/](https://staking.spaceandtime.io/)  
52. Introducing Space and Time's Genesis Validator Rewards Program ..., 访问时间为 六月 24, 2025， [https://www.spaceandtime.io/blog/introducing-space-and-times-genesis-validator-rewards-program](https://www.spaceandtime.io/blog/introducing-space-and-times-genesis-validator-rewards-program)