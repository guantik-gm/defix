

# **LP Agent 深度投资评估报告：一个高风险、不透明的DeFi工具剖析**

报告日期： 2025年7月28日  
分析师： DeFi投资与安全专家团队  
评估项目： LP Agent (lpagent.io)  
最终评级： 强烈不建议

---

## **摘要**

本报告对基于Solana生态的DeFi工具LP Agent进行了全面、深入的尽职调查。分析核心结论显示，**LP Agent是一个构建于Meteora协议之上的、具有极高风险、未经任何安全审计、由完全匿名团队运营的自动化流动性管理前端工具**。其唯一可识别的价值主张是作为简化Meteora协议空投/积分 farming（挖矿）过程的潜在工具。

然而，本报告将系统性地揭示，该项目引入了巨大且不透明的安全风险，包括但不限于：**灾难性的智能合约风险、团队匿名导致的零问责制、社区真空状态下的无网络效应、开发活动停滞所暗示的高放弃风险，以及对单一协议的寄生性依赖**。与市场上如Kamino Finance等成熟、透明且经过审计的竞争对手相比，LP Agent在所有关键维度上都处于绝对劣势。

综上所述，LP Agent对任何级别的审慎投资者都构成了一个不应被接受的威胁。任何与之的资金交互行为，都无异于一场风险与回报极度不对等的赌博。本报告的最终投资评级为**强烈不建议**，旨在为投资者的决策提供清晰、明确的风险警示。

---

## **第一部分 项目概述与核心价值主张解构**

### **1.1 项目定位：揭示LP Agent的真实面目**

根据其官方文档，LP Agent将自身定位为“一个AI驱动的DeFi自动化工具”，并明确指出其“专为Solana上的Meteora打造” 1。这直接揭示了其本质：LP Agent并非一个如去中心化交易所（DEX）或借贷市场那样的基础DeFi协议，而是一个

**应用层工具**或**聚合器前端**。它的全部价值主张——简化流动性管理、优化收益——完全依附于其集成的唯一后端协议：Meteora。

这种定位带来了两个不可忽视的战略性弱点：

1. **寄生性风险**：LP Agent的命运与Meteora完全绑定。它的成功前提是Meteora本身具有足够的吸引力（例如高收益、高交易量）且其操作足够复杂以至于用户需要一个简化工具。如果Meteora失去热度或变得更易于使用，LP Agent将瞬间失去其存在的根基。  
2. **有限的市场规模**：该工具的潜在市场规模（Total Addressable Market, TAM）被严格限制在Meteora的用户群内。更进一步，其生命周期极有可能与Meteora的特定激励周期（尤其是其正在进行的空投活动）高度同步，缺乏独立的、可持续的增长逻辑。

### **1.2 “AI驱动”的承诺：营销术语与技术现实**

项目大力宣传其“AI头寸建议”（AI Position Suggestions）功能，声称能基于用户的风险偏好提供个性化的流动性部署方案 1。在当前的DeFi市场环境中，“AI”一词往往被用作营销噱头，其背后通常并非真正的机器学习智能，而是一个基于

**预设规则的决策引擎**。该引擎大概率是通过分析链上数据（如特定流动性池的交易量、手续费收入、资产波动率等）来推荐一个“最优”的LP价格范围。

然而，这种“AI”标签不仅是营销，更可能是一个**新型的、隐蔽的攻击向量**。用户被引导去信任这个自动化、智能化的建议。其决策过程如下：

1. “AI”引擎需要数据输入来做出判断，这些数据源自链上。  
2. 链上数据，尤其是特定池子的交易量和费用，可以被短期、局部地操纵，例如通过闪电贷攻击制造大量虚假交易。  
3. 攻击者可以花费少量成本来“污染”AI的数据输入源，使其误判某个池子具有极高的“真实”交易活跃度和费用收入。  
4. 被误导的“AI”随后向所有用户推荐这个被操纵的池子作为“最佳选择”。  
5. 当用户根据“AI建议”将大量真实流动性存入该池后，攻击者便可以利用这些流动性完成更复杂的攻击、套利，或直接通过拉高出货获利。

在这种情况下，LP Agent的用户在不知情中，成为了攻击者作恶的棋子和燃料。

### **1.3 目标用户与解决的痛点**

LP Agent的文档明确指出了手动管理集中流动性（CLMM）头寸的痛点，如“耗时”、“错过最佳出入点”、“市场动态复杂”等 1。同时，文档中对“Meteora Airdrop”（Meteora空投）的直接提及，是一个揭示其真实意图的关键信号 1。

综合分析，该项目的核心目标用户画像清晰地指向两类人群：

* **空投农民 (Airdrop Farmers)**：他们追求以最高效率获取协议积分，以博取未来的空投回报。  
* **DeFi新手**：他们被高APY和自动化概念吸引，但缺乏深入研究协议安全性的专业知识和意识。

这两类用户群体往往更注重效率和潜在回报，容易在“AI自动化”和“高收益”的诱惑下，系统性地忽视或低估了其背后隐藏的、致命的智能合约和团队风险。LP Agent这类未经审计的工具，对他们构成了精准的威胁。

---

## **第二部分 技术与安全深度剖析（或其缺失）**

### **2.1 系统架构与工作流程：代理合约的阴影**

LP Agent宣称的“一键zap-in和zap-out”功能 1，在DeFi协议中通常意味着用户可以用单一资产（如SOL）进行存取，而协议的智能合约会自动在后端执行一系列复杂操作（例如，将SOL的一部分兑换成USDC，然后将SOL和USDC配对添加入流动性池，最后质押LP代币）。

要实现这一流程，用户必须将其代币的使用权限（通过approve交易）授予一个能够执行所有这些步骤的中心合约。这个合约就是LP Agent的**代理合约 (Proxy Contract)** 或 **路由合约 (Router Contract)**。这引入了一个致命的问题：用户的资金安全不再仅仅依赖于久经考验的Meteora协议，而是**完全依赖于LP Agent这个未经审计、核心逻辑代码不开源的“黑箱”**。

一旦用户将资金的控制权授予LP Agent的代理合约，该合约便在技术上获得了全权处理这些资金的能力。如果该合约存在漏洞，或其所有者账户拥有恶意的管理员权限（例如一个可以被团队单方面调用的emergencyWithdraw函数），开发团队或外部攻击者可以瞬间卷走所有通过该平台存入的资金。这在去中心化应用中引入了一个**极端的、中心化的单点故障风险**，与DeFi“不信任，去验证”（Don't trust, verify）的基本原则背道而驰。

### **2.2 GitHub代码库评估：停滞的开发与可疑的来源**

对项目官方GitHub主页的审查揭示了多个严重的危险信号 2：

* **代码库缺失**：核心的智能合约代码库是**不公开的**。投资者和安全研究员无法审查其最重要的部分——处理用户资金的逻辑。这在DeFi世界中是不可接受的。  
* **开发活动停滞**：该项目仅展示了两个公开仓库：docs和game-node。docs仓库虽然最近有更新记录，但其“过去一年的提交活动为零”的图表显示，这可能只是修改了配置文件或文档描述，并无实质性的代码开发。一个健康的DeFi项目理应有持续的、公开的代码提交、问题修复和功能迭代。  
* **可疑的仓库来源**：game-node仓库是一个数月前从一个名为game-by-virtuals/game-node的外部项目fork（复刻）而来的 2。这不仅与DeFi流动性管理的核心业务无关，还进一步引发了对团队技术原创性和项目严肃性的怀疑。这可能表明团队成员的背景与游戏开发相关，或者他们只是在利用现成的代码模板快速拼凑项目，而非从头构建一个安全可靠的金融应用。

### **2.3 安全审计：缺失的信任基石**

经过对所有指定研究网站及通用审计平台（如CertiK, Quantstamp, Chainlink等）的全面检索，**可以确认LP Agent没有任何公开的安全审计报告** 3。

**这是对投资者最直接、最致命的警告。** 在DeFi领域，一个处理用户资金的智能合约未经信誉良好的第三方安全公司审计，就等同于一个公开邀请黑客攻击的靶子，或是一个为团队“留有后门”的潜在陷阱。任何审慎的投资者都不应将任何有价值的资金投入一个未经审计的协议中。

缺乏审计本身也反映了团队的核心价值观。一个负责任的团队会将用户资金安全置于最高优先级，并将审计视为产品上线的**强制性前置条件**。一个选择不进行审计的团队，其动机不外乎以下几种，且都对投资者极为不利：

1. **极度不专业**：不了解或不尊重DeFi安全的基本准则。  
2. **对代码缺乏信心**：害怕审计会暴露其代码中存在的严重漏洞。  
3. **完全不在乎用户资金安全**：这与潜在的欺诈（Rug Pull）意图高度一致。

---

## **第三部分 核心投资机会与收益策略详解**

### **3.1 主要机会：Meteora协议空投/积分 Farming**

LP Agent最直接的“投资”用例，是作为获取Meteora协议空投的工具。根据外部信息，Meteora正在进行一个长期的积分空投活动（从2023年12月持续至2025年8月），用户的积分主要通过两个途径获得：提供流动性（按TVL大小和时长）和赚取手续费。其中，手续费的权重极高，每赚取1美元手续费可获得1000点XP积分 9。

LP Agent的逻辑是，利用其宣称的自动化功能（如自动复投、自动调整LP范围），理论上可以比手动管理更高效地赚取Meteora的手续费，从而以更高的乘数累积XP积分，以期在Meteora未来发币时获得更多空投代币。

**策略评估**：

* **优点**：如果其自动化策略真实有效，可能比手动管理赚取更多费用，从而加速积分获取，同时节省用户的时间和精力。  
* **缺点**：这是一个**风险与收益极度不对等的赌博**。为了博取一个价值不确定的未来空投，用户需要将自己全部本金的控制权，交给一个由匿名团队开发的、未经任何安全审计的智能合约。

### **3.2 高APR DeFi收益策略探索（纯理论推演）**

Meteora的动态流动性做市商（DLMM）池作为一种先进的集中流动性AMM，为高级收益策略提供了技术基础 10。LP Agent宣称的功能，如“自动复投”、“止盈止损” 1，理论上可以作为执行这些策略的工具层。潜在的策略组合包括：

1. **杠杆挖矿**：将在Meteora中获得的LP头寸（如果能被代币化为类似Kamino的kToken）作为抵押品，在其他借贷协议中借出稳定币或SOL，再次购买资产并投入流动性池，通过循环操作放大收益和积分。  
2. **套期保值挖矿**：在为高波动性资产对（如SOL/USDC）提供流动性的同时，在永续合约交易所（如Drift, Zeta）开立等值的空头头寸，以对冲资产价格下跌的风险（无常损失的主要来源），专注于纯粹赚取LP手续费和Meteora积分。

**执行此类复杂策略是极度不明智的。** 这些策略本身就涉及跨协议的复合风险（协议漏洞风险、清算风险、预言机喂价风险等）。在所有这些风险之上，再叠加LP Agent这个最不可靠、最不透明的“黑箱”风险，无异于在已经危险的钢丝上进行蒙眼杂技，失败的概率和后果都是灾难性的。

### **3.3 开发者生态参与潜力评估**

在所有研究材料中，均未发现任何关于LP Agent为开发者提供API、SDK或允许创建自定义“Agent”功能的信息。其GitHub仓库也未显示出任何支持第三方集成的迹象 2。

**结论：对于有开发背景的投资者而言，LP Agent目前不提供任何有意义的生态系统参与机会。** 它是一个完全封闭的、面向终端用户的产品，而非一个可供建设和扩展的平台。这极大地限制了其长期增长潜力和网络效应的形成。

### **表格1：LP Agent 投资机会矩阵**

| 投资策略 | 目标 | 预期收益形式 | 优点 | 缺点/核心风险 | 推荐指数 (1-5) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **策略A: 基础Meteora空投Farming** | 获取Meteora未来空投 | Meteora XP积分, LP手续费 (APR) | 操作可能被简化，节省时间。 | **灾难性的智能合约风险 (LP Agent本身)**, 无常损失风险, Meteora协议风险, 空投不确定性。 | **1** (仅适用于愿意承担100%本金损失的纯粹赌博行为) |
| **策略B: 杠杆/套保挖矿 (理论)** | 放大收益 / 对冲风险 | 高倍数XP积分, 理论上的高APR | 理论上收益更高或风险更低。 | **不可接受的复合风险 (LP Agent \+ 外部协议)**, 清算/基差风险, 极高的操作复杂性。 | **0** (强烈禁止) |
| **策略C: 参与项目生态** | 成为生态贡献者 | 无 | 无 | **项目为封闭系统，无此机会。** | **0** (无此选项) |

---

## **第四部分 全面风险评估：红色警报**

### **4.1 团队风险：匿名的致命缺陷**

在对项目官网、文档、GitHub、LinkedIn以及其他公开渠道进行地毯式搜索后，**无法找到任何关于创始人或核心开发团队成员的真实身份信息** 1。

在金融领域，匿名意味着**零问责制**。如果项目方作恶（例如，通过预留的后门卷走用户资金，即Rug Pull）或因疏忽导致资金损失，投资者将求告无门，无法进行任何法律追索。

更深层次地看，匿名性并非一个孤立的风险点。它与项目缺乏审计、缺乏社区、缺乏开发活动等问题相互印证，形成了一个完整的\*\*“高欺诈风险项目画像”\*\*。这些并非独立的疏忽，而是一个系统性问题的不同表现，共同指向一个令人不安的结论：该项目极有可能是一个低成本、短期的投机性工具，而非一个严肃的长期项目。一个严肃的团队需要通过公开身份、接受第三方审计、积极建设社区等方式来建立信任以吸引用户和资本。LP Agent在所有这些方面都选择了反向操作，其真实目标极不可能是建立长期信任。

### **4.2 市场与竞争风险：与Kamino Finance的正面比较**

在Solana生态中，存在着成熟且声誉良好的自动化流动性管理协议，其中最具代表性的是Kamino Finance。将LP Agent与之进行直接比较，可以清晰地看到其在市场中的真实地位。

* **LP Agent**: 专注于Meteora，功能单一，匿名，未经审计，无社区 1。  
* **Kamino Finance**: Solana上领先的自动化流动性协议，提供借贷、杠杆、自动化LP管理等综合服务，集成了包括Orca、Raydium在内的多个DEX，其LP头寸被代币化为kTokens，可作为抵押品，团队公开/半公开，经过多次审计，社区庞大且活跃 15。

在与Kamino的直接比较中，LP Agent在几乎所有关键维度上都处于**压倒性的劣势**。一个理性的用户，在了解两者信息后，几乎没有任何理由会选择LP Agent而不是Kamino。

### **表格2：LP Agent vs. Kamino Finance 竞争力分析**

| 特性/维度 | LP Agent | Kamino Finance | 结论：LP Agent的劣势 |
| :---- | :---- | :---- | :---- |
| **核心功能** | 仅Meteora LP自动化 | 多DEX LP自动化, 借贷, 杠杆 | 功能单一，无法满足复杂需求，生态可组合性差。 |
| **安全性 (审计)** | **无公开审计** | **有多次公开审计** | **存在致命的安全隐患，用户资金安全无法保障。** |
| **团队** | **完全匿名** | **公开/半公开，声誉良好** | **缺乏信任基础，高欺诈风险。** |
| **社区与网络效应** | **几乎为零** | **庞大且活跃的社区** | 毫无用户粘性、品牌护城河和外部支持。 |
| **透明度** | 极低（核心代码不开源） | 较高（核心逻辑可验证） | “黑箱”操作，用户无法验证其行为。 |
| **可持续性** | 依赖单一协议热度 | 拥有独立经济模型和品牌 | 商业模式脆弱，生命周期极可能短暂。 |

### **4.3 项目可持续性风险**

尽管文档中提到了“费用结构”（Fee Structure）1，但并未提供任何具体细节。该项目唯一的潜在收入来源是向用户收取服务费。然而，在一个存在如Kamino Finance这样强大、声誉更好且功能更丰富的竞争对手的市场中，一个匿名、未经审计的新进入者其定价能力几乎为零。这导致了其商业模式的悖论：收费则无人使用，不收费则无以为继。

因此，可以合理推断该项目预设的生命周期：在Meteora空投热度最高时上线 \-\> 吸引一小撮信息不对称的空投农民 \-\> 为团队自己的钱包farm积分或赚取少量费用 \-\> Meteora空投结束后，项目被迅速放弃，网站和服务器关闭。这是一个典型的“追热点”的投机工具，不具备任何长期价值。

---

## **第五部分 社区、市场情绪与影响力分析**

### **5.1 社交媒体足迹：一片沉寂的数字荒漠**

一个DeFi项目的生命力很大程度上体现在其社区的活跃度上。然而，LP Agent在这方面表现为空白。

* **无官方渠道**：尽管其GitHub页面上提供了一个Twitter链接@lpagent\_io 2，但对Twitter、Discord、Telegram等主流社交平台的广泛搜索，未能找到任何活跃的、官方的社区渠道。用户遇到问题将无处求助。  
* **信息污染**：搜索“LP Agent”或“Pageant”会产生大量关于SSH认证代理工具(PuTTY Pageant)或各类选美比赛(Pageant)的无关信息 20。这种极易混淆的命名选择，令人怀疑其是否有意为之，以增加尽职调查的难度。  
* **市场定位**：在一个讨论memecoin交易策略的YouTube视频描述中，LP Agent的链接与一长串用于高风险交易的工具（如交易机器人、新币狙击工具等）并列 25。这从侧面印证了市场对它的看法：它没有被归类为严肃的DeFi基础设施，而是被视为一种高风险的交易/投机辅助工具。

### **5.2 市场声量与情绪：闻所未闻**

在主流的加密货币新闻网站、数据分析平台（如The Block, Messari）和核心论坛（如Reddit的r/solana）中，几乎没有关于LP Agent的任何深入讨论或分析。一个项目如果真的具备创新或价值，通常会在Twitter上的核心DeFi用户（所谓的“DeFi Degen”）群体中引发讨论。LP Agent的沉寂表明，它要么完全未被市场发现，要么被发现后因其显而易见的众多危险信号而被直接忽略。其市场情绪不是中性，而是**真空**。

---

## **第六部分 总结论与最终投资评级**

### **6.1 综合评估：优势、劣势、机会、威胁 (SWOT)**

* **优势 (Strengths):**  
  * （理论上）可能简化在Meteora上进行LP操作的流程。这是一个极其微弱且被巨大风险所完全抵消的“优势”。  
* **劣势 (Weaknesses):**  
  * **团队完全匿名，零问责制。**  
  * **无任何公开安全审计，存在灾难性的智能合约风险。**  
  * **几乎没有社区，无网络效应，用户支持为零。**  
  * **GitHub开发活动停滞，核心代码不开源，透明度为零。**  
  * **与主要竞争对手Kamino相比，在所有维度都处于绝对劣势。**  
  * **品牌名称选择极差，信息检索困难，有故意混淆视听之嫌。**  
* **机会 (Opportunities):**  
  * 作为工具，帮助用户更高效地farm Meteora协议的空投/积分（但需承担本金100%损失的风险）。  
* **威胁 (Threats):**  
  * **项目方欺诈（Rug Pull）的风险极高。**  
  * **智能合约被黑客攻击导致用户资金完全损失的风险极高。**  
  * **来自Kamino等成熟平台的降维打击。**  
  * **Meteora协议空投结束后，项目被立即放弃的风险极高。**

### **6.2 最终投资评级**

**评级：强烈不建议 (Strongly Disrecommend)**

**核心理由：** LP Agent完美地集合了DeFi领域几乎所有的重大危险信号。它所提供的唯一潜在好处（简化Meteora airdrop farming）完全无法与其可能导致用户本金全部损失的巨大风险相提并论。**使用LP Agent无异于将资金存入一个由蒙面陌生人控制的、没有锁、结构不明的保险箱里。** 鉴于市场上存在如Kamino Finance或直接与Meteora交互等更安全、更透明、功能更强大的替代方案，任何情况下选择LP Agent都是一个非理性的、将资产置于极度危险境地的决策。

### **6.3 面向不同投资者的行动指南**

* 对于所有审慎的投资者 (包括有开发背景的投资者):  
  严格禁止，彻底远离。 不要以任何形式与其智能合约进行交互。其风险是不可估量的，任何投入都应被视为100%的潜在损失。  
* 对于极度风险偏好的空投农民 (Airdrop Farmers):  
  即使对于最激进的投机者，本项目也应被视为禁区。所谓的“机会”是建立在沙堡之上的。更好的选择是使用Kamino Finance或直接在Meteora上进行操作，虽然可能需要更多手动管理，但至少保证了基本的资产安全。将本金暴露在LP Agent这种级别的风险之下，去博取一个不确定的空投，是典型的“捡了芝麻，丢了西瓜”的错误决策。

#### **引用的著作**

1. Introduction \- LP Agent Documentation, 访问时间为 七月 27, 2025， [https://lpagent.mintlify.app/](https://lpagent.mintlify.app/)  
2. LP Agent · GitHub, 访问时间为 七月 27, 2025， [https://github.com/lpagent](https://github.com/lpagent)  
3. Smart Contract Audit \- CertiK, 访问时间为 七月 27, 2025， [https://www.certik.com/products/smart-contract-audit](https://www.certik.com/products/smart-contract-audit)  
4. How To Audit a Smart Contract? \- Chainlink, 访问时间为 七月 27, 2025， [https://chain.link/education-hub/how-to-audit-smart-contract](https://chain.link/education-hub/how-to-audit-smart-contract)  
5. What Is a Smart Contract Audit? | Hedera, 访问时间为 七月 27, 2025， [https://hedera.com/learning/smart-contracts/smart-contract-audit](https://hedera.com/learning/smart-contracts/smart-contract-audit)  
6. Consensys Diligence: Smart Contract Audits, 访问时间为 七月 27, 2025， [https://diligence.consensys.io/](https://diligence.consensys.io/)  
7. Audits \- Quantstamp, 访问时间为 七月 27, 2025， [https://quantstamp.com/audits](https://quantstamp.com/audits)  
8. AuditAgent, 访问时间为 七月 27, 2025， [https://auditagent.nethermind.io/](https://auditagent.nethermind.io/)  
9. Meteora Airdrop (Retrodrop): All Info, Data & Stats \- Coinlaunch, 访问时间为 七月 27, 2025， [https://coinlaunch.space/events-contests/meteora-retrodrop/](https://coinlaunch.space/events-contests/meteora-retrodrop/)  
10. Meteora Airdrop: How to Earn Yield and Qualify for Future Rewards | BitPinas, 访问时间为 七月 27, 2025， [https://bitpinas.com/learn-how-to-guides/meteora-airdrop/](https://bitpinas.com/learn-how-to-guides/meteora-airdrop/)  
11. Why and How to use Meteora's DLMM (Dynamic Liquidity Market Maker) \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/coinmonks/why-and-how-to-use-meteoras-dlmm-dynamic-liquidity-market-maker-320cac1e0ce8](https://medium.com/coinmonks/why-and-how-to-use-meteoras-dlmm-dynamic-liquidity-market-maker-320cac1e0ce8)  
12. LP Agent Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/LP%20Agent?k=MTczMTc%3D](https://www.rootdata.com/Projects/detail/LP%20Agent?k=MTczMTc%3D)  
13. Micomyiza Leads Grassroots Land Restoration in Rwanda \- Alabama A\&M University, 访问时间为 七月 27, 2025， [https://www.aamu.edu/about/inside-aamu/news/micomyiza-leads-grassroots-land-restoration-in-rwanda.html](https://www.aamu.edu/about/inside-aamu/news/micomyiza-leads-grassroots-land-restoration-in-rwanda.html)  
14. Verified Rights Owner (VeRO) profiles | Seller Center \- eBay, 访问时间为 七月 27, 2025， [https://www.ebay.com/sellercenter/resources/verified-rights-owner-profiles](https://www.ebay.com/sellercenter/resources/verified-rights-owner-profiles)  
15. Anyone here use Kamino Finance? Is it legit? : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/105r7pm/anyone\_here\_use\_kamino\_finance\_is\_it\_legit/](https://www.reddit.com/r/solana/comments/105r7pm/anyone_here_use_kamino_finance_is_it_legit/)  
16. Unlocking New Possibilities: Borrowing Against LP Positions with Kamino Finance \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@fitraeth/unlocking-new-possibilities-borrowing-against-lp-positions-with-kamino-finance-ab2af1a82c31](https://medium.com/@fitraeth/unlocking-new-possibilities-borrowing-against-lp-positions-with-kamino-finance-ab2af1a82c31)  
17. What is Kamino Finance? A Protocol Involved in Two Airdrops | BitPinas, 访问时间为 七月 27, 2025， [https://bitpinas.com/learn-how-to-guides/kamino-finance-airdrop/](https://bitpinas.com/learn-how-to-guides/kamino-finance-airdrop/)  
18. Kamino Finance Review: Top Defi Stategies For 2025 \- Soladex, 访问时间为 七月 27, 2025， [https://www.soladex.io/project/kamino-finance](https://www.soladex.io/project/kamino-finance)  
19. Liquidity | Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/products/liquidity](https://docs.kamino.finance/products/liquidity)  
20. The Authentication Page (Advanced Site Settings dialog) \- WinSCP, 访问时间为 七月 27, 2025， [https://winscp.net/eng/docs/ui\_login\_authentication](https://winscp.net/eng/docs/ui_login_authentication)  
21. How To Use Pageant to Streamline SSH Key Authentication with PuTTY | DigitalOcean, 访问时间为 七月 27, 2025， [https://www.digitalocean.com/community/tutorials/how-to-use-pageant-to-streamline-ssh-key-authentication-with-putty](https://www.digitalocean.com/community/tutorials/how-to-use-pageant-to-streamline-ssh-key-authentication-with-putty)  
22. Download PuTTY: latest release (0.83) \- Chiark.greenend.org.uk, 访问时间为 七月 27, 2025， [https://www.chiark.greenend.org.uk/\~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)  
23. Social Media Strategy For Pageant Women \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=8Xfaqq17wf8](https://www.youtube.com/watch?v=8Xfaqq17wf8)  
24. 47 Pageant Titleholder ideas | marketing strategy social media, social media marketing business, social media business \- Pinterest, 访问时间为 七月 27, 2025， [https://www.pinterest.com/designerbees/pageant-titleholder/](https://www.pinterest.com/designerbees/pageant-titleholder/)  
25. How to Win With Memecoins \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=y8JVyHuQRLw](https://www.youtube.com/watch?v=y8JVyHuQRLw)