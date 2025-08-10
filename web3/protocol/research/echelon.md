

# **Echelon Market (app.echelon.market) 深度投资评估报告**

## **第一部分：执行摘要**

### **1.1. 项目概要**

Echelon Market是一个专为Move语言生态系统（特别是Aptos）设计的去中心化、非托管借贷协议。其核心定位是成为一个高资本效率的货币市场，旨在解决传统DeFi借贷协议中普遍存在的资本利用率低下的问题。通过引入创新的机制，Echelon Market为用户提供了一个能够实现高级杠杆策略和收益优化的平台，致力于成为连接Aptos、Movement及其他Move系公链流动性的基础金融设施 1。

### **1.2. 核心投资论点**

本报告的核心投资论点在于，Echelon Market凭借其卓越的资本效率架构（如E-Mode和资产再抵押功能）、强劲的早期增长势头（由积分计划和即将到来的代币生成事件TGE驱动），具备在高速发展的Move生态系统中占据主导借贷协议地位的巨大潜力。该协议不仅吸引了寻求高收益的资深DeFi用户，还获得了顶级风险投资机构的支持，为其长期发展和机构合作奠定了坚实基础。

### **1.3. 关键优势与机遇**

* **战略定位精准**：专注于高性能的Move生态系统（Aptos、Movement、Initia），这是一个与EVM差异化竞争且增长潜力巨大的赛道 2。  
* **创新功能驱动**：其E-Mode和支持杠杆循环（Leveraged Looping）等功能，极大地提高了资本效率，吸引了大量寻求alpha收益的专业用户和“雇佣兵资本” 3。  
* **顶级资本背书**：获得了由Amber Group领投，包括野村证券旗下Laser Digital在内的多家知名风投机构的350万美元种子轮融资，这为项目提供了资金和行业网络双重支持 5。  
* **强劲的市场表现**：自2024年4月上线以来，总锁仓价值（TVL）和协议收入均实现快速增长，显示出强大的产品市场契合度（Product-Market Fit） 3。

### **1.4. 核心风险与挑战**

* **严峻的智能合约风险**：由知名审计公司Zellic执行的安全审计发现了两项“高”风险等级的漏洞。这是项目当前面临的最严重威胁 8。  
* **缺乏透明的漏洞修复验证**：截至本报告撰写之时，项目方尚未在任何公开渠道提供这两处高危漏洞已被修复并验证的明确证据，这给投资带来了巨大的、难以量化的安全隐患 9。  
* **匿名团队**：项目创始人背景不公开，增加了“Rug Pull”或管理不善的风险，尽管顶级VC的背书在一定程度上缓解了这一担忧 11。  
* **系统性与市场风险**：协议的成功与Aptos生态的繁荣深度绑定。同时，其对流动性质押代币（LSTs）和真实世界资产（RWAs）的支持也引入了资产脱锚和预言机被操控的风险 2。  
* **空投后的抛压风险**：当前TVL的增长很大程度上由空投预期驱动。TGE之后，若代币经济模型缺乏足够的吸引力，可能面临大规模的资本流出。

### **1.5. 最终投资评级：建议（面向高风险偏好投资者）**

综合评估，Echelon Market是一个高风险与高回报并存的投资标的。其创新的产品设计、强劲的市场牵引力和顶级VC背书使其具备成为Move生态龙头协议的潜力。然而，**未经公开验证的高危安全漏洞是其致命的短板**。

因此，最终评级为\*\*“建议”**，但此建议**仅适用于能够深刻理解并主动管理相关风险、具备高风险承受能力且技术背景深厚的投资者\*\*。强烈建议潜在投资者在项目方就高危漏洞修复提供完全透明的证据之前，保持谨慎或仅投入可承受损失的资金。

## **第二部分：协议深度拆解与技术分析**

### **2.1. 项目定义与市场辨析**

#### **2.1.1. Echelon Market的准确定义**

Echelon Market是一个建立在Move编程语言之上的去中心化、非托管（Non-Custodial）借贷协议。它允许用户以无需许可的方式存入加密资产以赚取利息，或抵押资产进行超额借贷 2。该协议目前已部署在Aptos、Movement以及其自有的Echelon Chain上，其战略目标是成为整个Move生态系统的通用货币市场和流动性枢纽 3。

#### **2.1.2. 关键市场辨析：Echelon Market vs. Echelon Prime**

在进行深入分析之前，必须进行一项至关重要的市场辨析。市场上存在一个名为**Echelon Prime**（代币为$PRIME）的项目，这是一个专注于科幻题材交易卡牌游戏 *Parallel* 的Web3游戏生态系统 12。

**Echelon Prime与本报告分析的Echelon Market是两个完全独立、毫无关联的项目**。这种命名上的相似性极易引起市场混淆，专业的投资者必须能够清晰地区分两者，避免因信息错配导致错误的投资决策。本报告的全部内容仅针对DeFi借贷协议Echelon Market (app.echelon.market)。

### **2.2. 核心机制与价值主张**

Echelon Market的核心价值主张是解决现有DeFi借贷协议中的资本效率低下问题 3。传统借贷协议（如Aave、Compound）为了保证系统安全，通常对抵押物设置较为保守的贷款价值比（Loan-to-Value, LTV），这限制了用户资金的利用率。Echelon Market通过一系列创新设计，旨在安全的前提下最大化用户的资本效率。

### **2.3. 核心技术特性剖析**

#### **2.3.1. E-Mode（效率模式）**

E-Mode是Echelon Market最具创新性的功能之一。当用户抵押的资产与希望借出的资产价格高度相关时（例如，使用Aptos的流动性质押代币stAPT作为抵押品来借入原生$APT），E-Mode允许用户以极高的LTV（例如超过90%）进行借贷 3。由于两种资产价格走势趋同，清算风险被大幅降低，这极大地释放了资本的流动性，为套利、对冲和杠杆化收益策略提供了强大的工具。

#### **2.3.2. 隔离池（Isolated Pools）**

为了平衡创新与风险，协议采用了双池模型。主池（Main Pool）仅支持流动性好、信誉高的“蓝筹”资产（如$USDC、$APT等）。而对于风险较高、波动性更大的长尾资产（Long-tail Assets），协议为其设立隔离池 3。这种设计将高风险资产的风险限制在各自的池子内，有效防止了某一长尾资产的崩盘对主市场造成系统性冲击，实现了风险隔离。

#### **2.3.3. 资产再抵押（Rehypothecation）**

协议的底层架构允许对用户存入的抵押品进行“再利用”，以创造复合收益，这是其实现卓越收益率的核心理念之一 2。这意味着用户的存款不仅能赚取基础的供应利息，还能作为杠杆操作的基石，进一步放大收益。

#### **2.3.4. 预言机（Oracles）**

作为借贷协议的生命线，预言机负责提供准确、实时的资产价格，以触发清算机制。协议的安全性高度依赖于其所选预言机方案的稳健性和抗操纵能力 2。任何预言机的延迟或被攻击都可能给协议带来灾难性后果。

### **2.4. 多链战略**

Echelon Market的愿景超越了单一公链。它首先在Aptos上取得了成功，并已扩展至Movement和Echelon Chain 5。这一战略布局表明，其目标是成为整个Move生态系统的跨链流动性中心，而非仅仅是Aptos上的一个应用。这本质上是对“Move语言将成为下一代智能合约平台重要一极”这一宏大叙事的押注。这种雄心壮志也带来了挑战：协议的安全性不仅取决于其自身代码，还取决于其部署的各条链以及连接它们的跨链桥或消息传递协议的安全性，这无疑增加了其整体的攻击面。

## **第三部分：市场表现与竞争格局**

### **3.1. 链上财务健康状况分析**

Echelon Market自上线以来展现出惊人的增长速度，各项链上数据均表现优异。

* **总锁仓价值 (TVL)**：截至最新数据，协议总TVL已达到**1.4918亿美元**，对于一个上线不足一年的新协议而言，这是一个非常亮眼的成绩，证明了其强大的市场吸引力 3。  
* **TVL分链解析**：其TVL主要集中在Aptos链上，达到**1.2602亿美元**，而Movement和Echelon Chain的部署尚处于早期阶段，分别为**1766万美元**和**550万美元**。这表明Aptos是其当前的基本盘，而多链扩张的成效仍有待观察 5。  
* **协议费用与收入**：协议已建立起健康的商业模式。24小时内产生约**3.3万美元**的费用和**9000美元**的收入。30天累计费用超过**103万美元**，收入约**31.2万美元**。年化费用超过**1200万美元**，显示出强大的盈利能力 5。其费用来源于借款的初始费用、利息和清算罚金，收入则是协议从中提取的分成 17。

### **3.2. 竞争格局基准分析（Aptos生态）**

在Aptos生态内部，借贷赛道竞争激烈。Echelon Market的主要竞争对手包括Aries Markets (TVL约2.2亿美元) 和Echo Lending (TVL约2.84亿美元) 等 5。虽然从原始TVL数据看，Echelon Market并非第一，但其独特的竞争优势在于对资本效率的极致追求。其他协议可能吸引的是寻求稳定收益的普通用户，而Echelon Market则通过E-Mode和杠杆循环等功能，精准地捕获了对收益率和资本效率要求更高的专业交易者和收益农夫。

Aptos生态本身正处于上升期，TVL稳定在历史高位附近，DEX交易量持续增长，这为所有借贷协议提供了肥沃的土壤 18。

#### **表3.1：Aptos借贷协议竞争矩阵**

| 协议名称 | 总TVL (Aptos) | 核心差异化优势 | 支持的关键资产类型 | 审计方 | 治理状态 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Echelon Market** | 1.26亿美元 | 极致资本效率 (E-Mode, 杠杆循环) | LSTs, RWAs (计划中), BTC | Zellic | 积分计划 (空投预期) |
| **Aries Markets** | 约2.2亿美元 | 综合性DeFi平台 (交易, 借贷) | 广泛的主流资产 | Halborn, Ottersec | 已发行代币 |
| **Echo Lending** | 约2.84亿美元 | 专注于BTCfi和LSTs | BTC锚定资产, LSTs | 不详 | 不详 |
| **Aptin Finance** | 约1553万美元 | 早期借贷协议 | 主流资产 | 不详 | 已发行代币 |

数据来源: 5

### **3.3. 投资者背景与资本实力**

Echelon Market于2024年8月成功完成了一轮**350万美元**的种子轮融资 6。此轮融资的投资方阵容堪称豪华，由加密原生顶级做市商和投资机构

**Amber Group**领投，参投方包括传统金融巨头野村证券的加密部门**Laser Digital**、**Saison Capital**、**Selini Capital**、**Interop Ventures**，以及**LayerZero**创始团队和知名KOL **DCF God**等 5。

这种强大的VC背书不仅仅是资金支持。对于一个匿名团队来说，这些顶级机构在投前进行的尽职调查，实际上为市场提供了一种信誉代理。它暗示了团队成员可能在业内拥有深厚的背景和良好的声誉，即使他们选择保持匿名。此外，这些投资方还能为项目带来宝贵的行业网络，例如与RWA发行方（如Ondo Finance）或机构级合作伙伴建立联系，这在项目文档中也有所提及 3。

## **第四部分：综合风险与安全评估**

### **4.1. 智能合约安全审计**

Echelon Market已由业内声誉良好的安全公司**Zellic**于2024年6月24日至7月1日期间进行了正式的安全审计 8。

审计结果显示，代码库中存在：

* **高风险 (High) 漏洞：2个**  
* 中风险 (Medium) 漏洞：0个  
* 低风险 (Low) 漏洞：1个  
* 信息类 (Informational) 漏洞：0个

### **4.2. 高危漏洞分析：关键的信息缺失**

**这是评估Echelon Market时最严峻的风险点。** 尽管我们知道存在两处高危漏洞，但Zellic发布的公开审计报告摘要并未提供这些漏洞的详细描述、潜在的攻击场景或修复建议。更令人担忧的是，所有可公开访问的渠道，包括项目官网、文档和GitHub仓库，均**无法找到**关于这些漏洞已被修复的**任何证据或声明** 8。

对于一个处理上亿美元资产的借贷协议而言，这种在关键安全问题上的信息不透明是极不寻常且不可接受的。它迫使投资者在无法独立验证协议安全性的情况下，进行盲目信任。这不仅是一个巨大的潜在财务风险，也与加密世界所倡导的“不信任，去验证 (Don't trust, verify)”的核心精神背道而驰。

#### **表4.1：Zellic安全审计结果摘要**

| 漏洞ID | 风险等级 | 简要描述 | Zellic修复建议 | 修复状态 |
| :---- | :---- | :---- | :---- | :---- |
| ZEL-ECH-001 | **高** | 不可用 | 不可用 | **修复情况未经公开验证** |
| ZEL-ECH-002 | **高** | 不可用 | 不可用 | **修复情况未经公开验证** |
| ZEL-ECH-003 | 低 | 不可用 | 不可用 | **修复情况未经公开验证** |

数据来源: 8

### **4.3. 团队、治理与中心化风险**

* **匿名团队**：创始人身份的未知性是DeFi领域的双刃剑。虽然它保护了开发者，但也为潜在的恶意行为（如卷款跑路）敞开了大门，并使得投资者在发生问题时无法追责 11。  
* **前代币时期的中心化治理**：在治理代币正式上线前，协议的参数修改、资产上线、资金库管理等所有关键决策都由核心开发团队中心化控制 3。用户资产的安全完全依赖于这个匿名团队的善意和能力。

### **4.4. 协议与市场风险**

* **清算瀑布风险**：协议主打的高杠杆特性，在市场极端波动时会显著放大清算风险。一旦大规模清算被触发，可能导致链上拥堵、预言机价格延迟、滑点增大，形成恶性的清算瀑布，造成协议坏账。  
* **预言机依赖风险**：协议的清算机制完全依赖于外部预言机提供的价格。如果预言机被攻击（如闪电贷攻击）或出现故障，将直接威胁到协议的偿付能力 2。  
* **资产脱锚风险**：协议支持LSTs（如stAPT）和计划支持RWAs，这引入了新的风险维度。如果任何一种作为抵押品的LST或RWA稳定币发生脱锚，其价值将无法覆盖对应的债务，从而在协议中产生坏账。

## **第五部分：空投催化剂与未来代币分析**

### **5.1. Echelon积分计划**

Echelon Market正在进行一个积分计划，这被市场普遍认为是其TGE和空投的前奏，也是驱动其TVL短期内快速增长的核心引擎 4。

该计划的规则明确激励用户进行借贷活动，特别是借款。例如，用户每供应价值1美元的资产可获得1个积分，而每借出价值1美元的资产则可获得3个积分 23。这种激励结构清晰地表明，项目方希望最大化协议的借贷活动，因为这直接关系到协议费用的产生。

### **5.2. 空投挖矿与高收益策略**

对于追求高回报的投资者，利用Echelon的机制最大化积分和收益是当前的核心玩法。

* **杠杆循环 (Leveraged Looping)**：这是最高效的积分/收益放大策略。用户可以存入一种资产（如$USDC），以此为抵押借出另一种稳定币（如$USDT），然后将借来的$USDT在DEX上换成$USDC再次存入，循环往复。每一次循环都会增加用户的总供应和总借款头寸，从而成倍地累积积分和基础收益 4。  
* **高收益资产策略 (以sUSDe为例)**：一个具体的复合收益策略是利用Ethena的生息稳定币$sUSDe。  
  1. 通过跨链桥（如Stargate）将$sUSDe从以太坊桥接到Aptos 23。  
  2. 在Echelon Market上供应$sUSDe。  
  3. 以此为抵押，借出其他资产。  
     这个策略可以同时捕获$sUSDe的自身收益、Echelon的供应APY以及通过借款获得的放大积分 4。  
* **跨协议组合策略**：更高级的玩法是组合多个DeFi协议。例如：  
  1. 在Amnis Finance或Thala等协议中质押$APT，获得流动性质押代币amAPT或thAPT。  
  2. 将amAPT/thAPT存入Echelon，赚取供应利息和Echelon积分。  
  3. 利用E-Mode的高LTV，借出$APT或其他资产。  
  4. 将借出的资产再次投入到其他协议中（如DEX LP或再次质押），实现多重收益叠加 4。

### **5.3. 未来代币经济学（推测性分析）**

尽管官方尚未公布其原生代币的详细经济模型 1，但我们可以基于行业惯例和协议性质进行合理推测：

* **核心功能**：该代币几乎可以肯定会作为协议的**治理代币**。持有者将能够对协议的关键参数（如利率模型、LTV、清算门槛）、新资产的上线以及协议金库资金的使用进行投票。  
* **价值捕获**：为了激励长期持有，代币模型可能会包含价值捕获机制，例如：  
  * **费用分红**：将一部分协议收入分配给代币质押者。  
  * **回购与销毁**：用协议收入在公开市场回购代币并销毁，从而减少供应，实现通缩。  
* **长期挑战**：代币经济模型设计的成败，将直接决定协议在空投后能否留住用户和流动性。如果代币缺乏持续的、有吸引力的效用，将面临巨大的“挖卖提”抛压，导致TVL和币价的螺旋下跌。

## **第六部分：社区与生态系统分析**

### **6.1. 社交媒体活跃度与社区情绪**

Echelon Market主要通过其官方X (Twitter) 账户和Discord服务器与社区进行沟通 1。其X账户会定期发布关于项目进展、合作伙伴关系和新功能集成的公告 5。然而，由于其Discord服务器的邀请链接失效，无法深入评估社区内部的讨论氛围、用户情绪以及对关键问题（如安全审计）的反应，这构成了又一个信息缺口 24。

### **6.2. 战略合作伙伴与生态整合**

Echelon Market的合作伙伴选择显示出清晰的战略意图，旨在捕获DeFi领域最核心的几大流动性来源。

* **生态系统支柱**：  
  * 与**Ethena**的合作，引入了高收益的合成美元$sUSDe，吸引了寻求稳定币高收益的庞大用户群体 4。  
  * 与Aptos生态原生协议**Thala**的深度集成，不仅支持其LST代币，还为用户提供额外的$THL奖励，深度绑定了Aptos原生用户 25。  
  * 计划在**Movement**主网上线，提前布局Move生态的未来发展 7。  
* **核心资产支持**：  
  * 通过**LayerZero**等跨链技术，协议已支持$WBTC，旨在接入加密世界中最大的单一资产——比特币的流动性 26。  
* **机构与RWA布局**：  
  * 项目方明确表示正在寻求与**Franklin Templeton**和**Ondo Finance**等机构的合作，以扩大对真实世界资产（RWA）的支持 3。这表明其长远目标是打通传统金融与去中心化金融的桥梁，这是一个具有巨大想象空间的叙事。

这一系列合作并非随机，而是构成了一个连贯的、旨在全方位捕获流动性的战略蓝图。通过Ethena吸引稳定币用户，通过Thala绑定Aptos原生用户，通过LayerZero接入比特币用户，再通过RWA布局吸引传统资本，Echelon Market正在构建一个多元化的流动性获取矩阵。

## **第七部分：投资论点与可执行策略**

### **7.1. 最终投资建议**

综合以上所有分析，Echelon Market展现了一个典型的**高风险、高潜在回报**的投资画像。

**正面因素**包括其作为Move生态资本效率龙头的清晰定位、已被市场验证的强劲增长、顶级VC的雄厚背书，以及即将到来的TGE这一强大催化剂。

**负面因素**则更为致命，主要集中在**安全和透明度**上：两处未经公开验证修复的高危漏洞，叠加匿名团队，构成了一个随时可能引爆的“定时炸弹”。

因此，最终的投资建议是**有条件的“建议”**。此建议仅适用于符合以下全部条件的投资者：

1. **高风险承受能力**：愿意接受可能因智能合约漏洞导致投资全部损失的风险。  
2. **技术背景深厚**：能够理解杠杆、清算、LST脱锚等复杂DeFi风险，并有能力自行构建风险对冲或监控工具。  
3. **主动的风险管理者**：能够持续跟踪项目动态，一旦关于漏洞修复的负面信息出现或市场环境恶化，能果断退出。

对于普通或风险厌恶型投资者，目前的评级应为\*\*“不建议”\*\*，直到项目方就安全问题提供完全的透明度。

### **7.2. 开发者生态系统机遇**

对于具备开发背景的投资者，Echelon Market的组合性提供了超越单纯代币投资的机会：

* **构建自动化策略库 (Vaults)**：可以开发智能合约，将复杂的杠杆循环或跨协议收益策略自动化，打包成“一键式”产品，向其他用户提供服务并收取管理费。  
* **协议集成**：如果你正在开发其他DeFi应用（如收益聚合器、DEX），可以将Echelon作为后端，为你的用户提供借贷和杠杆功能。  
* **创建“代理” (Agents)**：  
  * **清算机器人**：编写并运行机器人，监控协议中的抵押不足头寸，在第一时间触发清算以赚取清算奖金。  
  * **套利机器人**：监控Echelon与其他DEX或借贷协议之间的利率或价格差异，进行自动化套利。  
  * **高级仓位管理器**：开发工具来管理自身或他人的复杂多腿头寸，实现动态风险调整和收益优化。

### **7.3. 高收益策略深度拆解与投资矩阵**

以下表格详细列出了参与Echelon Market生态的各种投资策略，旨在为不同风险偏好和技术水平的投资者提供清晰的决策参考。

#### **表7.1：Echelon Market投资机会矩阵**

| 策略名称 | 策略描述 | 主要目标 | 预期收益 (APY/积分) | 核心风险 | 所需专业知识 | 优点 | 缺点 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. 简单供应** | 将$USDC或$APT等主流资产存入主池。 | 稳定收益 | 低至中等 (APY 2-10%) | 智能合约风险、协议整体风险。 | 初级 | 操作简单，风险相对最低。 | 收益率有限，无法最大化利用协议优势。 |
| **2\. 空投积分挖矿** | 供应和借出资产以最大化累积积分。 | 空投代币 | 收益取决于未来代币价格和空投份额。 | 除合约风险外，还有空投规则不确定性、代币上线后价格暴跌风险。 | 中级 | 潜在回报极高，是当前参与的核心动机。 | 投入的资金和时间成本可能无法被空投覆盖。 |
| **3\. 杠杆循环 (稳定币)** | 在稳定币对之间（如USDC/USDT）反复存入和借出，放大头寸。 | 放大收益和积分 | 高 (APY和积分均被杠杆倍数放大) | 清算风险、稳定币脱锚风险、智能合约风险。 | 高级 | 资本效率极高，收益和积分累积速度最快。 | 操作复杂，风险极高，市场微小波动都可能导致清算。 |
| **4\. 杠杆化LST策略** | 抵押LST (如thAPT)，借出原生资产 ($APT)，再次质押或提供LP。 | 复合收益和积分 | 非常高 (质押收益+供应收益+借款积分) | LST脱锚风险、清算风险、多协议交互风险。 | 高级 | 可获得多重收益来源，深度参与生态。 | 风险敞口多元化，一个环节出问题就可能导致连锁损失。 |
| **5\. 跨协议套利/挖矿** | 结合Echelon与Thala、Aries等其他协议进行复杂的收益耕作。 | 极致Alpha收益 | 极高，动态变化 | 所有上述风险的总和，且更为复杂。 | 专家级 | 潜在收益率最高，能捕捉市场瞬时机会。 | 需要持续监控和极高的技术能力，风险管理难度极大。 |
| **6\. 开发者参与** | 创建清算机器人、套利机器人或自动化策略库。 | 技术驱动型收益 | 收益取决于策略效率和市场机会。 | 代码Bug风险、机器人运行成本、市场竞争。 | 专家级 (需编程能力) | 收益来源与币价波动关联度较低。 | 技术门槛最高，需要持续的开发和维护。 |

## **第八部分：结论与未来展望**

Echelon Market无疑是当前DeFi领域最值得关注的新兴项目之一。它精准地切入了Move生态这一高增长赛道，并以解决“资本效率”这一行业痛点为突破口，成功吸引了大量的资本和用户关注。其产品设计精巧，增长数据亮眼，并有顶级资本加持，这一切都预示着其光明的未来。

然而，光环之下是巨大的阴影。项目在核心的安全和透明度问题上存在严重瑕疵。两处未经验证修复的高危漏洞，如同悬在协议之上的达摩克利斯之剑，使得任何对其的投资都变成了一场高风险的赌博。

展望未来，Echelon Market的成功轨迹将取决于几个关键节点：

1. **安全问题的解决与透明化**：这是项目能否从“投机者的乐园”转变为“投资者的可靠选择”的决定性一步。项目方必须尽快就Zellic审计发现的高危漏洞提供详尽的修复报告和链上验证证据。  
2. **代币生成事件 (TGE) 的成功**：精心设计的代币经济模型是留住空投后流动性的关键。协议需要为代币赋予足够强大的治理和价值捕获能力。  
3. **路线图的执行**：能否按计划推进在Movement等新链的部署，以及成功整合RWA等机构级资产，将决定其能否实现成为Move生态通用货币市场的宏大愿景。

对于投资者而言，Echelon Market提供了一个观察DeFi前沿创新的绝佳案例。但在此刻，参与其中需要的不止是资金，更是与之匹配的风险认知、技术能力和持续的警惕。

---

### **附录：数据来源与引用**

* 27 CoinMarketCap & Crypto.com: ECH代币信息（注意与PRIME区分）  
* 12 Coinbase, Uphold, Whitepaper, etc.: Echelon Prime (PRIME) 项目信息，用于辨析  
* 1 ICO Analytics & Official Website: Echelon Market项目基本信息、融资情况  
* 2 Echelon Market Official Documentation: 核心机制、技术特性  
* 5 DeFiLlama: TVL、费用、收入、多链部署、竞争对手数据  
* 8 Zellic Audit Report: 安全审计结果  
* 9 GitHub: 代码库与开发活动（信息有限）  
* 6 PR Newswire, VC News Daily: 种子轮融资新闻  
* 56 BrokerChooser, Reddit, etc.: "Echelon"名称相关的其他市场评价（用于排除无关信息）  
* 25 Xangle, Gate.io: 合作伙伴关系与资产整合信息  
* 3 Bybit Learn, OKX, Delphi Digital, Blockworks Research, AlphaGrowth: 竞争格局与Aptos生态分析  
* 4 Xangle, Binance Square, Tokenomics-Learning: 空投策略、积分系统、杠杆循环分析

#### **引用的著作**

1. Echelon Market token sale analytics and information, private/seed sale price, tokenomics, 访问时间为 七月 27, 2025， [https://icoanalytics.org/projects/echelon-market/](https://icoanalytics.org/projects/echelon-market/)  
2. Echelon Protocol | Echelon, 访问时间为 七月 27, 2025， [https://docs.echelon.market/echelon-v1](https://docs.echelon.market/echelon-v1)  
3. Echelon: A simpler way to borrow and lend on Aptos | Bybit Learn, 访问时间为 七月 27, 2025， [https://learn.bybit.com/en/defi/what-is-echelon](https://learn.bybit.com/en/defi/what-is-echelon)  
4. Aptos Ecosystem Guide, Part 1, 访问时间为 七月 27, 2025， [https://xangle.io/en/research/detail/2212](https://xangle.io/en/research/detail/2212)  
5. Echelon Market \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/echelon-market](https://defillama.com/protocol/echelon-market)  
6. Echelon Nabs $3.5M Seed Funding Round \- VC News Daily, 访问时间为 七月 27, 2025， [https://vcnewsdaily.com/echelon/venture-capital-funding/rtsvnfhfxh](https://vcnewsdaily.com/echelon/venture-capital-funding/rtsvnfhfxh)  
7. Echelon Secures $3.5 Million in Seed Funding to Revolutionize DeFi Lending on Move Based Blockchains \- PR Newswire, 访问时间为 七月 27, 2025， [https://www.prnewswire.com/news-releases/echelon-secures-3-5-million-in-seed-funding-to-revolutionize-defi-lending-on-move-based-blockchains-302231755.html](https://www.prnewswire.com/news-releases/echelon-secures-3-5-million-in-seed-funding-to-revolutionize-defi-lending-on-move-based-blockchains-302231755.html)  
8. Zellic \- Audit Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/publications/echelon](https://reports.zellic.io/publications/echelon)  
9. Echelon · GitHub, 访问时间为 七月 27, 2025， [https://github.com/EchelonMarket](https://github.com/EchelonMarket)  
10. 访问时间为 一月 1, 1970， [https://reports.zellic.io/publications/echelon/findings/high-main-pool-incorrect-interest-rate-updates-on-rebalance](https://reports.zellic.io/publications/echelon/findings/high-main-pool-incorrect-interest-rate-updates-on-rebalance)  
11. Echelon Market: Project Guide | Latest Updates, Presale & Airdrop, 访问时间为 七月 27, 2025， [https://web3.bitget.com/en/dapp/echelon-market-28585](https://web3.bitget.com/en/dapp/echelon-market-28585)  
12. Echelon Prime Price, PRIME Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/prime](https://www.coinbase.com/price/prime)  
13. Echelon Prime (PRIME) Price | PRIME Price To USD Live \- Uphold, 访问时间为 七月 27, 2025， [https://uphold.com/prices/crypto/prime](https://uphold.com/prices/crypto/prime)  
14. Echelon Prime, 访问时间为 七月 27, 2025， [https://echelon.io/](https://echelon.io/)  
15. Echelon Whitepaper, 访问时间为 七月 27, 2025， [https://paper.echelon.io/echelon-whitepaper.pdf](https://paper.echelon.io/echelon-whitepaper.pdf)  
16. Echelon Chain \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/echelon-chain](https://defillama.com/chain/echelon-chain)  
17. Echelon Market Fees \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/fees/echelon-market](https://defillama.com/fees/echelon-market)  
18. Inside the Ecosystem: Fueling Aptos' Global Trading Engine \- Delphi Digital, 访问时间为 七月 27, 2025， [https://members.delphidigital.io/reports/inside-the-ecosystem-fueling-aptos-global-trading-engine](https://members.delphidigital.io/reports/inside-the-ecosystem-fueling-aptos-global-trading-engine)  
19. Aptos Accelerates | Blockworks Research, 访问时间为 七月 27, 2025， [https://app.blockworksresearch.com/unlocked/aptos-accelerates](https://app.blockworksresearch.com/unlocked/aptos-accelerates)  
20. Aptos \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/aptos](https://defillama.com/chain/aptos)  
21. Highest TVL Projects on Aptos \- AlphaGrowth, 访问时间为 七月 27, 2025， [https://alphagrowth.io/highest-tvl-aptos](https://alphagrowth.io/highest-tvl-aptos)  
22. 访问时间为 一月 1, 1970， [https://github.com/EchelonMarket/echelon-v1](https://github.com/EchelonMarket/echelon-v1)  
23. Echelon Airdrop Guide: The Move ecosystem lending protocol i | 币链快报 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/21133865681362/](https://www.binance.com/en/square/post/21133865681362/)  
24. 访问时间为 一月 1, 1970， [https://discord.gg/echelonmarket](https://discord.gg/echelonmarket)  
25. Four Major Stablecoin Yield Products Safeguard the Turbulent Market: Low-Risk Strategy Analysis | FlashLoanLarry on Gate Square, 访问时间为 七月 27, 2025， [https://www.gate.com/de/post/status/11970389](https://www.gate.com/de/post/status/11970389)  
26. Aptos Network Supports $WBTC... Expanding Multi-Chain Bitcoin Utility | Xangle, 访问时间为 七月 27, 2025， [https://xangle.io/en/insight/events/687f3819d25e600561fa7526](https://xangle.io/en/insight/events/687f3819d25e600561fa7526)  
27. Echelon price today, ECH to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/echelon/](https://coinmarketcap.com/currencies/echelon/)  
28. Echelon Price | ECH Price, Charts \- Crypto.com, 访问时间为 七月 27, 2025， [https://crypto.com/price/echelon](https://crypto.com/price/echelon)  
29. Echelon Price, ECH Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/echelon](https://www.coinbase.com/price/echelon)  
30. Echelon (ECH) मूल्य , चार्ट , मार्केट कैप , और अन्य मैट्रिक्स | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/hi/currencies/echelon/](https://coinmarketcap.com/hi/currencies/echelon/)  
31. Harga Echelon DAO (ECHO), grafik, kap pasar, dan metrik lainnya | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/id/currencies/echelon-dao/](https://coinmarketcap.com/id/currencies/echelon-dao/)  
32. Echelon Prime (PRIME) Price, Coin Market Cap, & Token Supply \- De.Fi, 访问时间为 七月 27, 2025， [https://de.fi/token/echelon-prime](https://de.fi/token/echelon-prime)  
33. Echelon Whitepaper Addendum V2.docx, 访问时间为 七月 27, 2025， [https://paper.echelon.io/Echelon%20Whitepaper%20Addendum%2001.pdf](https://paper.echelon.io/Echelon%20Whitepaper%20Addendum%2001.pdf)  
34. Echelon Prime Foundation Price \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/echelon/metrics/price](https://tokenterminal.com/explorer/projects/echelon/metrics/price)  
35. Echelon Prime price today, PRIME to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/echelon-prime/](https://coinmarketcap.com/currencies/echelon-prime/)  
36. Echelon Prime Smart Contract Audit | Cyberscope, 访问时间为 七月 27, 2025， [https://www.cyberscope.io/audits/coin-echelon-prime?slug=coin-echelon-prime](https://www.cyberscope.io/audits/coin-echelon-prime?slug=coin-echelon-prime)  
37. Echelon Prime (PRIME) Tokenomics: Structure, Utility, and Insights, 访问时间为 七月 27, 2025， [https://www.findas.org/tokenomics-review/coins/the-tokenomics-of-echelon-prime-prime/r/F3gWTx7h7aQP4s6yFmT61p](https://www.findas.org/tokenomics-review/coins/the-tokenomics-of-echelon-prime-prime/r/F3gWTx7h7aQP4s6yFmT61p)  
38. Echelon Prime (PRIME) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 七月 27, 2025， [https://tokenomist.ai/echelon-prime](https://tokenomist.ai/echelon-prime)  
39. Fully diluted market cap \- Echelon Prime Foundation \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/echelon/metrics/market-cap-fully-diluted](https://tokenterminal.com/explorer/projects/echelon/metrics/market-cap-fully-diluted)  
40. What is Echelon Prime？ \- Gate.io, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/what-is-echelon-prime/2897](https://www.gate.com/learn/articles/what-is-echelon-prime/2897)  
41. Echelon Prime (PRIME) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 七月 27, 2025， [https://www.forbes.com/digital-assets/assets/echelon-prime-prime/](https://www.forbes.com/digital-assets/assets/echelon-prime-prime/)  
42. Capture PRIME KEY via Echelon PRIME Governance's Token Surge: Complete Claim Guide \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@dailyville67/capture-your-share-of-echelon-prime-governances-token-surge-and-enjoy-top-tier-returns-24a1bbb22aeb](https://medium.com/@dailyville67/capture-your-share-of-echelon-prime-governances-token-surge-and-enjoy-top-tier-returns-24a1bbb22aeb)  
43. Echelon Prime \- Cryptohopper, 访问时间为 七月 27, 2025， [https://www.cryptohopper.com/currencies/detail?currency=PRIME](https://www.cryptohopper.com/currencies/detail?currency=PRIME)  
44. Echelon Prime (PRIME) Price | PRIME Price To USD Live \- Uphold, 访问时间为 七月 27, 2025， [https://uphold.com/en-us/prices/crypto/prime](https://uphold.com/en-us/prices/crypto/prime)  
45. What is Echelon (ECH)| How To Get & Use Echelon \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/echelon/what-is](https://www.bitget.com/price/echelon/what-is)  
46. What is Echelon Prime (PRIME)| How To Get & Use Echelon Prime \- Bitget Exchange, 访问时间为 七月 27, 2025， [https://www.bitget.site/price/echelon-prime/what-is](https://www.bitget.site/price/echelon-prime/what-is)  
47. Dashboard \- Echelon Market, 访问时间为 七月 27, 2025， [https://app.echelon.market](https://app.echelon.market)  
48. Echelon Prime \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/echelon-prime](https://defillama.com/protocol/echelon-prime)  
49. Echelon Bridge \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/echelon-bridge](https://defillama.com/protocol/echelon-bridge)  
50. Projects \- DefiLlama Yield, 访问时间为 七月 27, 2025， [https://defillama.com/yields/projects](https://defillama.com/yields/projects)  
51. datmedevil17/echelon: Echelon is a next-gen NFT Brand Launchpad that allows users to create brands, mint & sell NFTs, and leverage AI-driven price predictions & originality checks. It also features: Real-time NFT market sentiment dashboard Cross-chain NFT gallery Blockchain performance analytics \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/datmedevil17/echelon](https://github.com/datmedevil17/echelon)  
52. mlevit/echelon: A flexible and scalable metadata and governance framework \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/mlevit/echelon](https://github.com/mlevit/echelon)  
53. EchelonAISol/EchelonAI \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/EchelonAISol/EchelonAI](https://github.com/EchelonAISol/EchelonAI)  
54. Echelon Blockchain Node \- Cosmos SDK, IBC, and EVM compatible \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/echelonfoundation/echelon](https://github.com/echelonfoundation/echelon)  
55. Echelon \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/echelon-theme](https://github.com/echelon-theme)  
56. Is Echelon Capital safe or a scam broker? \- BrokerChooser, 访问时间为 七月 27, 2025， [https://brokerchooser.com/safety/echelon-capital-broker-safe-or-scam](https://brokerchooser.com/safety/echelon-capital-broker-safe-or-scam)  
57. Tested By Fitness Experts: 10 Best Adjustable Dumbbells (2025) | Garage Gym Reviews, 访问时间为 七月 27, 2025， [https://www.garagegymreviews.com/best-adjustable-dumbbells](https://www.garagegymreviews.com/best-adjustable-dumbbells)  
58. Recommendations and Advice : r/CCW \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/CCW/comments/1m6txm0/recommendations\_and\_advice/](https://www.reddit.com/r/CCW/comments/1m6txm0/recommendations_and_advice/)  
59. Best exercise bikes 2025: for home workouts and spin classes \- Cycling Weekly, 访问时间为 七月 27, 2025， [https://www.cyclingweekly.com/news/best-exercise-bikes-407424](https://www.cyclingweekly.com/news/best-exercise-bikes-407424)  
60. Wall Of Fame \- Echelonn, 访问时间为 七月 27, 2025， [https://www.echelonn.io/reviews](https://www.echelonn.io/reviews)  
61. Aptos and the Rise of BTCfi: How Bitcoin-Backed DeFi is Reshaping the Multichain Ecosystem | OKX, 访问时间为 七月 27, 2025， [https://www.okx.com/learn/aptos-btcfi-bitcoin-defi-multichain](https://www.okx.com/learn/aptos-btcfi-bitcoin-defi-multichain)  
62. Airdrop strategy: impact on the market and tokenomics, 访问时间为 七月 27, 2025， [https://tokenomics-learning.com/en/airdrop-impact-market-tokenomics/](https://tokenomics-learning.com/en/airdrop-impact-market-tokenomics/)