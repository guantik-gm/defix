

# **BasisOS (BIOS) 机枪池深度投资分析报告**

报告日期: 2025年6月25日  
分析师: 金融分析与区块链安全专家团队  
最终投资评级: 强烈不建议 (Strongly Do Not Recommend)

---

## **第一部分：执行摘要与最终投资论点**

### **1.1. 概述**

本报告旨在对DeFi项目BasisOS及其核心产品——位于basisos.org/vaults的机枪池，进行全面、深入的投资分析与风险评估。BasisOS自我定位为一个在Base网络上运行、由人工智能（AI）驱动的基差交易协议，由其母公司Virtuals Protocol开发 1。该项目旨在通过自动化策略，为用户捕捉所谓的“长尾基差收益” 1。

### **1.2. 核心发现**

经过对公开数据、链上指标、项目文档及相关生态的详尽调查，本报告得出以下关键结论，这些结论共同构成了我们最终投资评级的基石：

* **关键安全缺失：** 项目的核心资金池（Vaults）智能合约**未经任何公开的安全审计**，且其代码**完全闭源**。这构成了不可接受的、灾难性的安全风险，用户的资金完全暴露在潜在的漏洞或项目方恶意行为之下。  
* **误导性项目叙事：** BasisOS同时宣传自身为“为Web3时代打造的去中心化操作系统” 3 和一个具体的“AI交易代理” 1。前者缺乏任何技术证据支撑，是一种高度夸大和误导性的营销包装，旨在混淆其真实但风险更高的产品形态。  
* **极端中心化的代币经济学：** 高达46%的代币供应量被分配给“团队与贡献者” 4，且  
  **没有任何公开的锁仓或释放计划（Vesting Schedule）**。这为潜在的市场操纵和毁灭性的抛售压力埋下了伏笔。  
* **开发活动停滞：** 链上数据显示，项目的代码库开发活动极为有限，每周仅有少量提交，且贡献者单一 5。这与一个积极发展中项目的状态严重不符。  
* **缺乏真实社区：** 项目未能建立起一个独立的、有机的用户社区。其社交媒体热度完全依赖于母公司Virtuals Protocol的投机性炒作，而非产品本身的价值和吸引力。

### **1.3. 最终投资论点与评级**

综合上述发现，本报告的最终结论是明确且坚定的。BasisOS在安全性、透明度、代币经济学和项目治理等多个核心维度上均未能达到任何专业投资机构所能接受的最低标准。该项目呈现出的特征更接近于一个高风险的、缺乏基本保障的金融实验，而非一个值得信赖的投资标的。

因此，本报告给予BasisOS的投资评级为：**强烈不建议 (Strongly Do Not Recommend)**。

我们强烈建议投资者规避此项目的所有相关投资机会，包括但不限于购买$BIOS代币、向其机枪池存入资金或参与任何形式的生态交互。下文将对支撑此结论的证据和分析进行详细阐述。

---

## **第二部分：项目深度剖析：解构BasisOS的叙事与策略**

### **2.1. 双重叙事：去中心化操作系统 vs. AI交易代理**

对BasisOS的初步研究揭示了一个核心的矛盾：项目存在两种截然不同且互不兼容的自我描述。

第一种叙事，主要见于一些第三方平台和营销文案，将BasisOS描绘成一个宏大的“为Web3时代精心打造的开源、去中心化操作系统” 3。这些描述充满了“强大的、可扩展的、开发者友好的基础设施层”、“简化dApp的创建、部署和管理”等行业流行语 3。然而，这种说法缺乏最基本的证据支持。一个真正的操作系统项目，例如在研究中发现的另一个完全无关的项目“Bass OS”，其GitHub仓库展示了复杂的构建要求（如至少16核CPU、32GB内存）和详尽的构建指令 7。相比之下，BasisOS的公开代码库几乎为空，开发活动极度稀少 5，完全不具备一个操作系统应有的技术深度和开发规模。

第二种叙事则更为具体和可信，将其定义为“一个在Base网络上的AI代理，使用Virtuals协议创建” 1，其核心功能是“为AI代理和人类自主捕获长尾基差收益” 1。DefiLlama等专业数据平台也将其明确归类为“基差交易”协议 6。

这种叙事上的冲突并非偶然，它揭示了项目方可能存在的意图。宏伟而模糊的“操作系统”叙事，很可能是一种营销策略，旨在人为拔高项目的定位和估值预期，吸引那些对技术细节不甚了解的投资者。而“AI交易代理”才是其产品的真实面目。这种信息上的不对称和刻意引导，从一开始就损害了项目的可信度。因此，本报告将完全忽略其“操作系统”的伪装，仅从一个专注于基差交易的收益协议的角度对其进行严格评估。

### **2.2. 核心产品：AI管理的基差交易机枪池**

BasisOS的核心产品是其AI管理的机枪池，其宣称的策略是“AI管理的跨链基差交易金库，专注于Hyperliquid上的奇异资产” 10。这种策略在DeFi领域被称为“现金与套利”（Cash and Carry），或更通俗的“基差交易”。

其基本原理是：

1. **持有现货多头：** 协议持有某种加密资产的现货（例如ETH）。  
2. **开设永续合约空头：** 同时，在衍生品交易所（如Hyperliquid）上，开设等值的该资产永续合约空头头寸。  
3. **赚取资金费率：** 在大多数市场情况下，由于交易者更倾向于使用杠杆做多，永续合约的资金费率（Funding Rate）为正。这意味着多头方需要定期向空头方支付费用。作为空头方的BasisOS协议，便可以稳定地赚取这部分资金费率。

这种多空对冲的结构旨在剥离资产价格波动的风险（Delta中性），理论上可以创造一种相对稳定的、以美元计价的收益。这一模式因Ethena协议的USDe而广为人知，Ethena也为此提供了详尽的风险管理文档 11。

BasisOS的主要差异化卖点在于其“AI优化”和“AI管理” 14。然而，这恰恰是项目最大的“黑箱”。项目方没有提供任何白皮书（其官网的白皮书链接指向一个空的GitHub仓库 15）、技术文档或博客文章来解释其AI模型的工作原理、决策逻辑、风险控制参数或历史回测表现。相比之下，Ethena等同类协议会详细说明其对冲系统、储备金机制和清算风险管理流程 17。

这种完全缺乏透明度的做法，使得外部投资者无法评估其AI策略的真实有效性。所谓的“AI”究竟是一个复杂的优化算法，还是仅仅是一个执行简单规则的脚本，外界无从得知。投资者无法判断这个AI是能产生超额回报（Alpha），还是会因为错误的决策而引入新的、未知的风险。将资金投入这样一个不透明的、闭源的自动化交易系统中，本质上不是在参与一个DeFi协议，而是在对一个匿名团队的、未经证实的交易机器人进行盲目押注。这是透明度上的一个致命缺陷。

---

## **第三部分：财务与链上表现分析**

### **3.1. 关键协议指标 (TVL, 交易量, 费用, 收入)**

根据多个数据聚合平台的信息，我们可以勾勒出BasisOS的财务状况。

* **总锁仓价值 (TVL):** 项目的TVL在约390万美元至450万美元之间波动 4。对于一个新兴协议而言，这是一个不大不小的规模，表明市场上有一定的早期参与者。  
* **交易量:** 24小时交易量在20万美元至71万美元之间浮动，并且几乎全部来自于去中心化交易所（DEX），如Uniswap V2 (Base) 和 Aerodrome SlipStream 4。这表明代币的流动性主要存在于链上，而非中心化交易所。  
* **费用与收入:** DefiLlama的数据显示，协议的年化收入约为16万至18万美元 5。值得注意的是，协议费用与协议收入的数额完全相同，这表明所有捕获的费用都归于协议（或其所有者），而没有设计如财库分红、用户返还等机制。

然而，在收益率（APY/APR）这一关键指标上，存在着令人警惕的矛盾。项目官方网站 basisos.org/vaults 明确显示APR为 **0.00%** 14。与此同时，DefiLlama却追踪到其池子的平均APY在

**5.18%** 至 **6.33%** 之间 6。这种官方渠道与权威第三方平台之间的数据冲突，是一个严重的危险信号。它可能意味着：

1. 官网数据未更新或错误。  
2. DefiLlama的计算方法与协议实际收益不符。  
3. 协议的收益机制不稳定或已暂停，但第三方平台数据存在延迟。

无论原因为何，这种核心数据的混乱都极大地增加了投资者的决策难度，并可能构成误导。

### **3.2. 估值分析 ($BIOS 代币)**

$BIOS代币的市场估值为我们提供了另一个审视该项目的视角。

* **市值 (Market Cap):** 约在220万美元至350万美元之间 4。  
* **完全稀释估值 (FDV):** 约在410万美元至650万美元之间 5。

基于这些数据，我们可以计算出两个关键的估值比率：

* **市值/总锁仓价值比率 (MC/TVL Ratio):** 以DefiLlama的数据为例（市值$2.19M / TVL $4.47M），该比率约为 **0.49** 6。  
* **市销率 (P/S Ratio):** 以完全稀释估值和年化收入计算（FDV $4.06M / 年化收入 $163,578），该比率约为 **24.9** 6。

从表面上看，这些指标似乎很有吸引力。MC/TVL比率低于1.0通常被认为是项目被低估的信号，意味着市场对协议的估值低于其管理的资产价值。然而，这种解读在这里是极其危险的，因为它基于一个错误的前提：即TVL是安全的。

实际上，市场给出的低估值并非偶然。它反映了市场参与者对该协议所包含的巨大、未被缓解的风险的理性定价。当一个协议的智能合约未经审计、代码闭源、团队匿名性高时，其TVL随时可能因黑客攻击、协议漏洞或项目方跑路而瞬间归零。因此，这个看似“便宜”的MC/TVL比率，实际上是市场对项目极高“死亡率”的定价。投资者看到的不是一个价值洼地，而是一个价值陷阱。

### **3.3. 竞争格局**

BasisOS所处的基差交易赛道并非蓝海。DefiLlama的数据清晰地展示了其竞争对手，其中不乏规模远超于它的协议 6。为了更直观地理解BasisOS的市场地位，下表将其与部分同类协议进行了横向对比。

基差交易协议竞争分析表  
| 协议 (Protocol) | TVL (总锁仓价值) | 年化收入 (Annualized Revenue) | MC/TVL 比率 | 代码审计 (Audit) | 代码状态 (Code Status) | 数据来源 |  
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |  
| BasisOS | \~$4.47M | \~$163k | \~0.49 | 无 (None) | 闭源 (Closed) | 6 |

| Stables Labs USDX | \~$667.34M | 未提供 | 未提供 | 已审计 | 未提供 | 6 |

| Solv Basis Trading | \~$162.9M | 未提供 | 未提供 | 已审计 | 未提供 | 6 |

| DeSyn Basis Trading | \~$85.59M | 未提供 | 未提供 | 已审计 | 未提供 | 6 |  
这张表格清晰地揭示了BasisOS的真实处境。与动辄数亿美元TVL的竞争对手相比，BasisOS只是一个微不足道的参与者。更重要的是，主流竞争对手通常都经过了严格的安全审计，这是获取用户信任和大规模资金的基础。BasisOS在这方面完全是空白。将它置于竞争格局中进行考察，其高风险、低可信度的本质暴露无遗。

---

## **第四部分：$BIOS 代币经济学深度评估**

一个DeFi协议的代币经济学（Tokenomics）是其价值捕获能力和长期可持续性的核心。在这方面，BasisOS的设计存在着致命的缺陷。

### **4.1. 代币效用与价值捕获**

在所有已搜集的研究资料中，**没有任何信息明确定义$BIOS代币的实际效用（Utility）** 8。一个健康的DeFi代币通常具备以下一种或多种功能：

* **治理：** 代币持有者可以对协议的重大决策进行投票。  
* **费用分享：** 协议收入的一部分会分配给代币质押者。  
* **质押奖励：** 通过质押代币可以获得额外的代币释放作为奖励。  
* **功能性用途：** 作为协议内特定操作（如支付费用）的必需品。

$BIOS代币似乎不具备以上任何一种功能。它的存在更像是一种纯粹的投机工具，其价格波动完全由市场情绪和炒作驱动，缺乏任何内在价值的支撑。对于一个旨在长期发展的项目而言，这是一个根本性的设计失败。

### **4.2. 供应、分配与通胀风险**

$BIOS代币的供应和分配结构进一步加剧了投资风险。

* **代币供应：** 总供应量和最大供应量均为10亿枚$BIOS 4。  
* **流通供应：** 当前流通量为5.4亿枚，占总量的54% 4。  
* **内部分配：** 惊人的是，剩余的4.6亿枚代币（占总量的46%）被归入一个名为“团队与贡献者、挖矿”（Team & Contributors, Mining）的地址 4。

46%的团队与内部人员持有比例，在行业内属于极高的水平。这赋予了项目方对代币价格的绝对控制力。然而，比高比例更危险的是**完全缺乏透明的锁仓和释放计划（Vesting Schedule）**。

一个负责任的项目，会通过白皮书或官方文档公布详细的团队代币释放规则，例如“在项目上线后锁定1年，然后在后续3年内线性解锁”。这种机制旨在将团队的利益与项目的长期成功绑定，防止团队在项目早期就抛售代币砸盘，损害外部投资者的利益。

BasisOS没有白皮书 15，也没有任何关于这4.6亿枚代币如何解锁的公开信息。这意味着，这笔巨额代币可以

**在任何时间点、以任何数量流入市场**。这就像一颗悬在所有$BIOS持有者头上的“定时炸弹”。一旦团队决定套现，其造成的抛售压力足以使代币价格瞬间崩溃，导致外部投资者血本无归。这种设计不仅对投资者极不公平，也反映出项目方可能并未考虑项目的长远发展。

---

## **第五部分：综合风险评估：安全、团队与策略**

### **5.1. 安全与智能合约风险 (关键风险)**

**这是评估BasisOS时最致命的风险点，也是本报告给出“强烈不建议”评级的核心依据。**

DefiLlama页面上标注的“Audits: Yes” 6 具有极大的误导性。经过深入核查，所有能找到的审计报告，如PeckShield和Halborn出具的报告，均是针对其

**母公司Virtuals Protocol**的 26。

**没有任何一份公开的审计报告是专门针对BasisOS机枪池（Vaults）本身的智能合约的。**

这意味着，用户直接将资金存入的、负责执行复杂交易逻辑和保管资产的合约，是完全未经专业安全公司审查的。DeFi投资的第一原则是“不要相信，要去验证”（Don't trust, verify）。而BasisOS从根本上违背了这一原则。

雪上加霜的是，这些未经审计的合约代码还是**完全闭源的**。在DefiLlama上提供的官方GitHub链接 6 指向一个几乎空洞的组织页面，其中包含的几个仓库与核心的机枪池逻辑毫无关系 7。

“未经审计”与“代码闭源”的组合，对于一个DeFi协议来说是死刑判决。

1. **无法独立验证：** 闭源使得社区中的白帽黑客和安全研究员无法对代码进行审查，无法发现潜在的致命漏洞。  
2. **缺乏第三方背书：** 没有审计报告意味着没有任何专业的第三方机构为代码的安全性背书。  
3. **巨大的道德风险：** 闭源合约为项目方留下了植入后门、窃取用户资金的可能，而外界对此一无所知。

将资金存入BasisOS的机枪池，无异于将钱包的私钥交给一个你不认识、不了解、且不受任何监督的人。其风险等级是最高的，资金损失的可能性极大。

### **5.2. 团队、背景与运营安全**

BasisOS是Virtuals Protocol的产物，其创始人Jansen Teng和Weekee Tiew拥有公开的身份和履历，包括波士顿咨询公司（BCG）和帝国理工学院的背景，并且曾运营过游戏公会PathDAO 29。与完全匿名的团队相比，这是一个积极的信号。

然而，团队的运营安全记录存在污点。有新闻报道指出，Virtuals Protocol的Discord服务器在过去曾遭受过网络钓鱼攻击 32。虽然这只是一个社交媒体平台的安全事件，但它可能反映出团队在整体安全文化和流程上的薄弱。保护社区服务器是加密项目的基本功。如果连这一点都出现疏漏，那么他们如何管理更关键的资产，如合约部署的私钥、交易所API密钥等，就不得不令人担忧。

### **5.3. 内在策略风险**

即便我们假设协议是100%安全的，其所采用的基差交易策略本身也包含多种固有风险。而BasisOS项目方并未向其用户充分披露这些风险。

* **资金费率风险：** 策略的盈利核心是正的资金费率。在市场下行或长期横盘的熊市中，资金费率可能转为负数并持续很长时间。届时，作为空头方的协议将需要向多头方支付费用，导致策略亏损 12。  
* **交易对手风险：** 该策略严重依赖中心化衍生品交易所（如Hyperliquid）来执行空头头寸。如果交易所出现被盗、破产、监管查封或API故障等问题，协议部署在其中的资金可能面临全部或部分损失。  
* **清算风险：** 尽管策略是Delta中性的，但在极端市场波动下，抵押品价值的剧烈下跌可能导致保证金不足，从而触发交易所的强制清算机制，造成实际亏损 18。  
* **资产脱锚风险：** 协议可能使用流动性质押衍生品（如stETH）作为现货抵押品。如果这类衍生品与其标的资产（ETH）发生价格脱锚，将破坏对冲结构，导致亏损。

一个负责任的协议，应当像Ethena那样，在其文档中清晰地向用户阐明这些风险。BasisOS在这方面是完全缺位的。

---

## **第六部分：社区与生态系统分析**

### **6.1. 社交媒体存在感与市场情绪**

BasisOS缺乏一个独立的、围绕其产品建立的真实社区。尽管在一些聚合网站上能找到指向Twitter、Discord的通用链接 33，但深入探寻后发现，并没有一个活跃的、专门讨论BasisOS产品、策略和发展的官方社群。相关的讨论和新闻热点，几乎都集中在对其母公司代币

VIRTUAL的价格炒作上，而BIOS和BasisOS本身只是作为附属品被偶尔提及 32。

这种现象表明，项目的市场关注度并非源于其自身的产品力或愿景，而是完全寄生于其母公司的炒作周期。一个无法独立吸引并维系用户的项目，其生命力是极其脆弱的。当母公司的热度褪去，BasisOS很可能被市场迅速遗忘。

### **6.2. 生态系统整合与依赖性**

BasisOS的生存和运作高度依赖于外部实体，形成了多个潜在的单点故障：

1. **对Virtuals Protocol的依赖：** 它的技术、品牌和初始用户流量完全来自于其母公司 1。Virtuals Protocol的任何战略转向、技术失败或声誉危机都将直接宣判BasisOS的死刑。  
2. **对Base链的依赖：** 作为部署在Base链上的协议，它受制于Base链的性能、安全性和稳定性 4。  
3. **对中心化交易所的依赖：** 其核心策略依赖于在Hyperliquid等平台上执行交易 10。这些平台的运营状况直接决定了BasisOS能否正常运作。

这种多重依赖性使其抗风险能力非常低，任何一个环节出现问题都可能导致整个协议的瘫痪。

---

## **第七部分：可行的投资机会与战略分解**

尽管本报告的总体结论是强烈不建议投资，但为了完整地回应用户的请求，本节将对所有理论上可能的参与方式进行分解，并明确标记其风险等级。

### **7.1. 投资机会对比表**

BasisOS 投资途径：风险/回报分析  
| 投资途径 | 描述 | 优点 | 缺点与风险 | 风险等级 | 预期 APY/APR & 来源 |  
| :--- | :--- | :--- | :--- | :--- | :--- |  
| 购买$BIOS代币 | 在DEX上购买$BIOS代币，押注项目未来成功。 | \- 潜在高回报（如果项目成功）。 | \- 极高的价格波动性。

\- **灾难性抛压风险**：46%未锁仓的内部分配随时可能砸盘。

\- **缺乏明确效用**：代币无内在价值支撑。

\- 市场操纵风险高。 | 关键 (Critical) | N/A |  
| 机枪池挖矿 | 将资产（如USDC, ETH）存入basisos.org/vaults以赚取基差交易收益。 | \- 理论上可获得与市场波动无关的稳定收益。 | \- 关键智能合约风险：合约未经审计且代码闭源，资金可能被盗或永久锁定。

\- **策略风险**：资金费率可能转负导致亏损。

\- **交易对手风险**：依赖中心化交易所。

\- **收益率不透明**：官网与第三方数据严重矛盾。 | **关键 (Critical)** | 0% 14 vs. 5-6% 6 |

| 空投/生态交互 | 与协议进行少量交互，以博取未来可能发放的空投奖励。 | \- 潜在的低成本获利机会。 | \- 纯粹投机：项目方从未承诺过空投。

\- **高机会成本**：时间与精力可能完全浪费。

\- 交互过程仍需承担钱包被恶意合约攻击的风险。 | 低 (财务)

中 (时间) | N/A |  
| 开发者机会 | (面向有开发背景的投资者) 在其母公司Virtuals Protocol上创建自己的AI代理并尝试变现。 | \- 参与一个更广泛的AI+Crypto生态。

\- 潜在的收入来源独立于BasisOS。 | \- **需要专业开发技能**。

\- 成功与否取决于Virtuals Protocol这个未经充分市场验证的平台的成败。

\- 并非直接投资BasisOS。 | **中 (Medium)** | N/A |

### **7.2. 高级收益策略分析**

用户问询中提到了“套保挖矿”和“借贷挖矿”等高级策略。理论上，投资者可以从其他借贷协议（如Aave）借入资产，再存入BasisOS的机枪池，以实现杠杆挖矿。

然而，**在当前BasisOS的风险状况下，任何形式的杠杆操作都是极度不负责任的金融自杀行为。** 将借来的资金投入一个未经审计、代码闭源的协议中，相当于将风险放大了数倍。一旦协议出问题，投资者不仅会损失本金，还将背负沉重的债务。因此，本报告强烈反对在BasisOS上实施任何高级或杠杆策略。

### **7.3. 面向开发者的机会**

对于具备开发背景的投资者，唯一值得考虑的、风险相对较低的路径，是完全绕开BasisOS，而去探索其母公司**Virtuals Protocol**提供的平台 36。Virtuals Protocol的核心理念是让开发者能够创建、代币化并运营自己的AI代理。

这提供了一个完全不同的参与模式：从一个被动的“投资者”转变为一个主动的“建设者”。虽然这同样面临着平台风险和市场不确定性，但它至少是一个基于自身技能创造价值的途径，而不是将资金盲目地托付给一个不透明的黑箱。这应被视为一个独立的、与投资BasisOS无关的商业探索机会。

---

## **第八部分：最终裁决与建议**

### **8.1. 调查结果综合**

本报告通过对BasisOS的多维度、深层次剖析，揭示了一系列连锁的、不可忽视的致命缺陷。这些缺陷共同指向一个结论：该项目在当前阶段完全不具备投资价值。其核心问题可以归结为：

1. **安全真空 (Security Vacuum):** 核心资金池合约未经审计、代码闭源，将用户的资金置于极高的风险之中。  
2. **透明度缺失 (Lack of Transparency):** 无论是AI策略的运作原理，还是团队代币的释放计划，项目方都选择了完全不透明的“黑箱”模式。  
3. **扭曲的代币经济学 (Distorted Tokenomics):** 缺乏实际效用的代币，加上巨额且不受约束的内部分配，为投资者埋下了巨大的隐患。  
4. **停滞的开发与虚假的叙事 (Stagnant Development & False Narrative):** 项目开发活动寥寥，却用宏大的“操作系统”叙事来包装其简单而高风险的真实产品。  
5. **脆弱的生态 (Fragile Ecosystem):** 没有独立的社区支持，完全依赖母公司的热度和外部平台的稳定性。

### **8.2. 最终建议**

**强烈不建议 (Strongly Do Not Recommend)**

BasisOS项目未能通过任何一项基本的尽职调查标准。它在DeFi世界所倡导的透明、可验证、去信任的核心价值观上，表现得格格不入。投资该项目，意味着投资者需要同时承担智能合约被攻击、策略失效、交易对手跑路以及项目方砸盘等多重、且概率极高的风险。

潜在的回报，无论被描绘得多么诱人，都无法与这些几乎是确定性的风险相匹配。对于任何理性的、以风险管理为首要原则的投资者而言，正确的决策只有一个：**远离BasisOS**。将资金和精力投入到那些经过严格审计、代码开源、社区活跃、经济模型合理的项目中，才是明智之举。

#### **引用的著作**

1. BasisOS by Virtuals Price | BIOS Price Today, Live Chart, USD converter, Market Capitalization | CryptoRank.io, 访问时间为 六月 25, 2025， [https://cryptorank.io/price/basis-os-by-virtuals](https://cryptorank.io/price/basis-os-by-virtuals)  
2. BasisOS by Virtuals (BIOS) Price Chart \- Buy and Sell on Phantom, 访问时间为 六月 25, 2025， [https://phantom.com/tokens/base/0x73cb479f2ccf77bad90bcda91e3987358437240a](https://phantom.com/tokens/base/0x73cb479f2ccf77bad90bcda91e3987358437240a)  
3. BasisOS by Virtuals (BIOS) Price \- Live Chart, Index, Market Cap | CoinPaprika, 访问时间为 六月 25, 2025， [https://coinpaprika.com/coin/bios-basisos-by-virtuals/](https://coinpaprika.com/coin/bios-basisos-by-virtuals/)  
4. BasisOS by Virtuals Price: BIOS Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/en/coins/basisos-by-virtuals](https://www.coingecko.com/en/coins/basisos-by-virtuals)  
5. BasisOS \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/basisos?tvl=false\&events=false\&incentives=true](https://defillama.com/protocol/basisos?tvl=false&events=false&incentives=true)  
6. BasisOS \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/basisos](https://defillama.com/protocol/basisos)  
7. Bliss-Bass/bass-os \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/Bliss-Bass/bass-os](https://github.com/Bliss-Bass/bass-os)  
8. BasisOS by Virtuals (BIOS) Price, Chart & News | Crypto prices & trends on MEXC, 访问时间为 六月 25, 2025， [https://www.mexc.co/en-IN/price/basisos-by-virtuals](https://www.mexc.co/en-IN/price/basisos-by-virtuals)  
9. BasisOS \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/basisos?tvl=false\&events=false\&fees=true](https://defillama.com/protocol/basisos?tvl=false&events=false&fees=true)  
10. @basisos, 访问时间为 六月 25, 2025， [https://dune.com/basisos](https://dune.com/basisos)  
11. Ethena: Stablecoin Innovation\! Pioneering synthetic d | Grayhoood on Binance Square, 访问时间为 六月 25, 2025， [https://www.binance.com/square/post/25796336112465](https://www.binance.com/square/post/25796336112465)  
12. What is Ethena? | Exponential DeFi, 访问时间为 六月 25, 2025， [https://exponential.fi/protocols/ethena/0e521601-7896-42a8-8a7b-af743b5d2b66](https://exponential.fi/protocols/ethena/0e521601-7896-42a8-8a7b-af743b5d2b66)  
13. ethena-labs/bbp-public-assets \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/ethena-labs/bbp-public-assets](https://github.com/ethena-labs/bbp-public-assets)  
14. BasisOS, 访问时间为 六月 25, 2025， [https://basisos.org/vaults](https://basisos.org/vaults)  
15. XT Announcement on Launching BIOS (BasisOS by Virtuals), 访问时间为 六月 25, 2025， [https://xtsupport.zendesk.com/hc/en-us/articles/48214003525913-XT-Announcement-on-Launching-BIOS-BasisOS-by-Virtuals](https://xtsupport.zendesk.com/hc/en-us/articles/48214003525913-XT-Announcement-on-Launching-BIOS-BasisOS-by-Virtuals)  
16. Issues · Logarithm-Labs/basisos-whitepaper \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/Logarithm-Labs/basisos-whitepaper/issues](https://github.com/Logarithm-Labs/basisos-whitepaper/issues)  
17. Audits \- Ethena Overview, 访问时间为 六月 25, 2025， [https://docs.ethena.fi/resources/audits](https://docs.ethena.fi/resources/audits)  
18. Liquidation Risk \- Ethena Overview, 访问时间为 六月 25, 2025， [https://docs.ethena.fi/solution-overview/risks/liquidation-risk](https://docs.ethena.fi/solution-overview/risks/liquidation-risk)  
19. BIOS to USD: BasisOS by Virtuals Price in US Dollar | CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/en/coins/basisos-by-virtuals/usd](https://www.coingecko.com/en/coins/basisos-by-virtuals/usd)  
20. Tokenomics 101 \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/learn/wallet/tokenomics-101](https://www.coinbase.com/learn/wallet/tokenomics-101)  
21. Tokenomics Guide for Beginners: How It Shapes Crypto Value \- Bitcoinsensus, 访问时间为 六月 25, 2025， [https://www.bitcoinsensus.com/learn/tokenomics-guide-for-beginners-how-it-shapes-crypto-value/](https://www.bitcoinsensus.com/learn/tokenomics-guide-for-beginners-how-it-shapes-crypto-value/)  
22. Tokenomics |The Ultimate Guide to Crypto Economy Design \- Rapid Innovation, 访问时间为 六月 25, 2025， [https://www.rapidinnovation.io/post/tokenomics-guide-mastering-blockchain-token-economics-2024](https://www.rapidinnovation.io/post/tokenomics-guide-mastering-blockchain-token-economics-2024)  
23. Master Tokenomics: Crypto Insights & Trading Tools | Bitsgap blog, 访问时间为 六月 25, 2025， [https://bitsgap.com/blog/what-is-crypto-tokenomics-and-how-does-tokenomics-analysis-work](https://bitsgap.com/blog/what-is-crypto-tokenomics-and-how-does-tokenomics-analysis-work)  
24. Beginner's Guide to Tokenomics | Tangem Blog, 访问时间为 六月 25, 2025， [https://tangem.com/en/blog/post/tokenomics-in-crypto/](https://tangem.com/en/blog/post/tokenomics-in-crypto/)  
25. BasisOS by Virtuals (BIOS) Price Chart, related dapps, projects & news | DappRadar, 访问时间为 六月 25, 2025， [https://dappradar.com/token/basisos-by-virtuals](https://dappradar.com/token/basisos-by-virtuals)  
26. Security Audits | Virtuals Protocol Whitepaper, 访问时间为 六月 25, 2025， [https://whitepaper.virtuals.io/info-hub/important-links-and-resources/security-audits](https://whitepaper.virtuals.io/info-hub/important-links-and-resources/security-audits)  
27. Virtual Rollup Smart Contract Assessment, 访问时间为 六月 25, 2025， [https://cdn.prod.website-files.com/652e8c95469da61877613547/65f4217375110061b91805c3\_Virtual%20Rollup%20Audit\_compressed%20(2).pdf](https://cdn.prod.website-files.com/652e8c95469da61877613547/65f4217375110061b91805c3_Virtual%20Rollup%20Audit_compressed%20\(2\).pdf)  
28. Pull requests 0 \- Logarithm-Labs/basisos-whitepaper \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/Logarithm-Labs/basisos-whitepaper/pulls](https://github.com/Logarithm-Labs/basisos-whitepaper/pulls)  
29. Virtuals Protocol \- 2025 Company Profile, Funding & Competitors, 访问时间为 六月 25, 2025， [https://tracxn.com/d/companies/virtuals-protocol/\_\_inUmNSNZKdv6daxl2MUvXhLHGvKKvhM\_YTwQyZZPyyw](https://tracxn.com/d/companies/virtuals-protocol/__inUmNSNZKdv6daxl2MUvXhLHGvKKvhM_YTwQyZZPyyw)  
30. What is Virtuals Protocol? (VIRTUAL) \- Bitstamp, 访问时间为 六月 25, 2025， [https://www.bitstamp.net/learn/cryptocurrency-guide/what-is-virtuals-protocol-virtual/](https://www.bitstamp.net/learn/cryptocurrency-guide/what-is-virtuals-protocol-virtual/)  
31. Why Virtuals Protocol is a Decacorn in the Making \- LongHash Ventures, 访问时间为 六月 25, 2025， [https://www.longhash.vc/post/why-virtuals-protocol-is-a-decacorn-in-the-making](https://www.longhash.vc/post/why-virtuals-protocol-is-a-decacorn-in-the-making)  
32. Virtuals Protocol Surges 95% in Wallet Activity, Boosted by BasisOS Integration and Binance.US Listing \- AInvest, 访问时间为 六月 25, 2025， [https://www.ainvest.com/news/virtuals-protocol-surges-95-wallet-activity-boosted-basisos-integration-binance-listing-2504/](https://www.ainvest.com/news/virtuals-protocol-surges-95-wallet-activity-boosted-basisos-integration-binance-listing-2504/)  
33. Cena BasisOS by Virtuals: wykres ceny, kapitalizacja rynkowa i dzisiejsze wiadomości o BIOS | CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/pl/waluty/basisos-by-virtuals](https://www.coingecko.com/pl/waluty/basisos-by-virtuals)  
34. BasisOS by Virtuals (BIOS) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 六月 25, 2025， [https://www.forbes.com/digital-assets/assets/basisos-by-virtuals-bios/](https://www.forbes.com/digital-assets/assets/basisos-by-virtuals-bios/)  
35. VIRTUAL Price Pumps \+24% As GAME, VADER And BIOS Bounce Hard: Best AI Crypto to Buy? \- 99Bitcoins, 访问时间为 六月 25, 2025， [https://99bitcoins.com/news/presales/virtual-price-pumps-24-as-game-vader-and-bios-bounce-hard-best-ai-crypto-to-buy/](https://99bitcoins.com/news/presales/virtual-price-pumps-24-as-game-vader-and-bios-bounce-hard-best-ai-crypto-to-buy/)  
36. VIRTUALS Protocol, 访问时间为 六月 25, 2025， [https://www.virtuals.io/](https://www.virtuals.io/)  
37. Virtuals Protocol \- Dapps \- IQ.wiki, 访问时间为 六月 25, 2025， [https://iq.wiki/wiki/virtuals-protocol](https://iq.wiki/wiki/virtuals-protocol)