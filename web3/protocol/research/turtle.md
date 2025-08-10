

# **Turtle.club：幻影流动性协议的机构级尽职调查报告**

**免责声明：** 本报告的分析对象为DeFi协议Turtle.club。为保持分析的专注性，本报告将明确排除与以下无关实体相关的信息：基于Solana的meme币“Turtle on Speed ($TURT)” 1、著名的“海龟交易法则”（Turtle Trading）2 以及其他名为“Turtle Club”的非DeFi实体 4。

## **I. 执行摘要**

Turtle.club 协议（以下简称“Turtle Club”）将自身定位为一个创新的“链上资本配置器”（Onchain Capital Allocator）8，其核心在于采用一种基于API、无智能合约的模式来协调整个去中心化金融（DeFi）领域的流动性激励 10。该协议旨在解决流动性碎片化和激励模型不可持续的核心行业痛点。

本报告的关键发现如下：该项目拥有强大的机构背景，其种子轮融资获得了包括 **ConsenSys、Susquehanna (SIG)** 以及以太坊联合创始人 **Joseph Lubin** 在内的顶级投资者支持 13。自2024年3月启动以来，其用户增长指标表现亮眼，但其宣传的“引导价值”（bootstrapped value）与行业标准的总锁仓价值（TVL）存在显著差异，可能具有误导性 13。其安全模型独树一帜，通过避免链上智能合约降低了特定类型的风险，但将信任转移到了一个中心化的后端系统。最值得警惕的是，尽管项目方声称已通过顶级公司的审计，但目前缺乏公开的审计报告，这构成了一个重大的透明度风险 11。

目前，主要的投资机会在于一个投机性的空投博弈，即通过参与其生态系统活动来积累“海龟积分”（Turtle Points），并预期这些积分未来能以有利的比例兑换为治理代币 12。

综合评估，本报告最终给出的投资评级为 **投机性买入（Speculative Buy）**。此评级基于其强大的投资者阵容、经验丰富的团队以及解决真实市场需求的创新理念。然而，该评级严格限定于能够承受高度风险的资深投资者，并且投资者必须清楚地认识到，他们正在投资一个在安全和技术架构上极度不透明的“黑箱”系统。该评级的前提是项目方未来会公布其安全审计报告，否则评级将被下调。

## **II. 协议解构：流动性分配的新范式**

Turtle Club 的核心创新在于其独特的架构和价值主张，它试图在不直接托管用户资产的情况下，重塑DeFi协议吸引和维持流动性的方式。

### **2.1 “幻影流动性”与“无智能合约”架构**

Turtle Club 将其模型描述为一种“幻影流动性协议”，其显著特征是“无智能合约”运作 10。协议的功能并非通过部署在区块链上的复杂合约逻辑来实现，而是通过API接口来追踪用户在各个DeFi平台上的行为 12，这些行为包括提供流动性（LP）、代币交换和质押等 16。这种设计使其能够提供“免手续费”和“自我托管”的体验，因为协议本身“从不控制用户的资金” 11。所有用户的交易都直接与Turtle Club的合作协议进行交互 11。

这种架构的本质是将信任从可公开审计的链上智能合约，转移到了一个由项目方（Phantom Protocol AG）运营的中心化、不透明的链下API和数据库系统。虽然项目方声称其模型“最大限度地降低了技术风险” 11，并且是“无需信任的”（trustless）12，但这实际上是对“信任”概念的重新定义，而非消除。用户无需信任智能合约不会被黑客攻击，但他们必须信任Turtle Club的后端系统能够：

1. **准确追踪**：其API能无误地监控和记录用户在多个链和协议上的复杂活动。  
2. **公正计算**：其内部数据库能正确地计算和分配“海龟积分”。  
3. **保持稳健和安全**：其中心化服务器不会遭受传统网络攻击（如DDoS、API注入）、数据篡改或因内部操作失误而宕机。

因此，该模型并未消除风险，而是将风险从透明但可能存在漏洞的链上领域，转移到了不透明但可能更易于控制的链下领域。对于外部投资者而言，这意味着对项目方运营安全（OpSec）的绝对信任，这是一个无法通过链上数据进行验证的“黑箱”。

### **2.2 对流动性提供者（LP）和协议的价值主张**

对于流动性提供者（LP），Turtle Club 的核心吸引力在于提供“独家机会”和增强的奖励 11。用户通过Turtle Club参与活动，可以用同一笔资金在多个协议中同时赚取奖励，从而显著提升资本效率 13。

对于其他DeFi协议而言，Turtle Club扮演着“流动性即服务”（Liquidity-as-a-Service, LaaS）的角色。它帮助新协议解决“冷启动”问题，即在不依赖于不可持续的高额代币释放（通常被称为“流动性挖矿”）的情况下，吸引并引导高质量的初始流动性 12。其模式旨在重新平衡LP、开发者、风险投资（VC）和审计方之间的激励机制 10。正如其首席执行官（CEO）Essi Lagevardi所言，其使命是“为LP提供最优质的交易流和最好的服务” 13。

这种模式形成了一个共生关系：

* **协议方**：获得了一个高效的用户获取和流动性引导渠道。它们无需自己承担高昂的营销成本，只需向Turtle Club的财库分配一部分原生代币。  
* **用户方**：通过一个统一的平台，参与多个项目的早期激励计划，最大化其潜在回报（通常是多重空投预期）。  
* **Turtle Club**：作为中间层，通过其网络效应捕获价值，并建立自身的生态系统。它将自己定位为DeFi世界中至关重要的“流量入口”和“激励分配中心”。

### **2.3 公司与司法管辖区概览**

Turtle Club协议由 **Phantom Protocol AG** 公司运营 13，总部位于瑞士的苏黎世/楚格州（Zurich/Zug）18。该公司成立于2024年，目前拥有14名员工 18。

选择瑞士作为总部所在地是一项深思熟虑的战略决策。楚格州的“加密谷”以其对数字资产相对清晰和友好的监管框架而闻名。对于一个运营着处理数十亿美元价值流的中心化API服务的实体而言，法律和监管风险是其面临的主要挑战之一。在瑞士成立法人实体（AG，相当于股份有限公司），为项目提供了传统金融世界所认可的法律确定性和治理结构。这不仅增强了其在机构投资者（如ConsenSys和SIG）眼中的可信度，也从侧面再次印证了其运营模式的中心化本质。

## **III. 市场格局与竞争分析**

### **3.1 链上指标与增长轨迹**

自2024年3月推出以来，Turtle Club公布了一系列引人注目的增长数据：超过 **315,000个注册钱包**，引导了超过 **23亿美元的总价值**，并集成了 **51个协议** 13。其首次链引导活动在45天内部署了5.5亿美元的资金 13。

然而，对这些数据需要进行批判性审视。“23亿美元引导价值”是一个营销指标，而非行业通用的总锁仓价值（TVL）。由于Turtle Club的非托管性质，DeFiLlama等数据平台并未为其统计TVL 8。该数据更可能代表的是，在一段时间内通过其平台流入合作伙伴协议的总资金流水，这个数字可能因用户的重复存取而被放大。一个更可靠的链上指标是其在DeFiLlama上可追踪的财库规模，目前约为827万美元，其中主要由稳定币（约533万美元）和其它代币（约279万美元）构成 9。宣传数据与可验证的链上财库之间的巨大差异，是投资者需要警惕的一个信号。同时，注册钱包数量的快速增长虽然可观，但也可能受到空投猎人进行女巫攻击（Sybil Attack）的影响。

### **3.2 竞争定位**

DeFiLlama将Turtle Club归类为“链上资本配置器” 8。其列出的主要竞争对手包括

**Veda**（TVL 38.4亿美元）、**Spark Liquidity Layer**（TVL 35.8亿美元）和 **ether.fi Liquid**（TVL 10.28亿美元）9。

**表格：竞争格局对比**

| 协议 | TVL | 核心模型 | 关键差异化 |
| :---- | :---- | :---- | :---- |
| **Turtle Club** | 不适用 (非托管) | 基于API的流动性分配和激励元层 | 无智能合约；广泛的合作伙伴网络；基于积分的Pre-TGE奖励 |
| **Veda** | 38.4亿美元 | 链上资产管理协议 | 作为一个独立的DeFi协议运作，自身产生收益 20 |
| **Spark Liquidity Layer** | 35.8亿美元 | 针对USDS/sUSDS的自动化流动性供应 | 深度集成Sky的稳定币生态；多链部署 21 |
| **ether.fi Liquid** | 10.28亿美元 | 流动性再质押代币(LRT)协议 | 专注于LRT (eETH)的发行和原生再质押；深度DeFi集成 23 |

与竞争对手不同，Turtle Club并非一个独立的收益来源协议，而是一个协议无关（protocol-agnostic）的分发网络。它的成功不依赖于某个特定资产或生态的成败，而是取决于其网络效应的广度——即能否连接最多的协议方和最广的用户群。它在市场中扮演的是“造王者”（Kingmaker）的角色，而非亲自称王。

### **3.3 生态系统与合作伙伴**

Turtle Club已与超过51个协议集成 13，其中最引人注目的是与流动性再质押（LRT）领域的头部项目建立了深度合作，如

**Ether.fi、Renzo、Kelp DAO** 和 **Swell** 25。此外，它还为特定的区块链生态（如

**Linea** 和 **TON**）发起了专属的激励活动 27。与

**InceptionLRT** 的合作尤为突出，为参与者提供了高达 **50%的海龟积分加成** 15。

这种对LRT赛道的战略聚焦是极其明智的。LRT和再质押叙事是2024年DeFi领域吸引资本的核心引擎。这些协议之间对流动性和用户的竞争异常激烈，使它们成为Turtle Club“流动性即服务”的理想客户。通过与所有主要LRT项目合作，Turtle Club将自己定位为该热门赛道不可或缺的元层协议。它为用户创造了一个强大的激励循环：在赚取LRT协议自身空投预期的同时，还能叠加Turtle Club的空投预期，从而实现了收益最大化。

## **IV. 财务状况与投资者背景**

### **4.1 种子轮深度分析**

Turtle Club于2025年5月12日宣布完成一轮 **620万美元的种子轮融资** 10。此轮融资由

**THEIA** 领投，参投方阵容堪称豪华，包括了顶级的加密原生基金和量化交易公司，如 **ConsenSys、Susquehanna (SIG)、Laser Digital、Selini Capital、Chorus One** 等 10。天使投资人名单同样星光熠熠，包括以太坊联合创始人

**Joseph Lubin**、Wintermute联合创始人 **Yoann Turpin** 和Ankr联合创始人 **Ryan Fang** 13。

**表格：关键种子轮投资者及其战略价值**

| 投资者 | 类型 | 战略价值 |
| :---- | :---- | :---- |
| **THEIA** | VC (领投) | 领投方，提供强有力的市场验证和可能的董事会层面指导 10 |
| **ConsenSys** | 战略投资者 | 以太坊生态系统巨头，提供深厚的技术专长和潜在的生态集成（如Linea、MetaMask）10。其审计部门Diligence也被项目方提及 11 |
| **Susquehanna (SIG)** | 量化交易公司 | 顶尖做市商，提供深度流动性、金融市场专业知识，验证了模型在财务上的可行性 13 |
| **Joseph Lubin** | 天使投资人 | 以太坊联合创始人的身份带来了巨大的信誉、网络和生态系统内的认可 13 |
| **Chorus One** | 质押服务商/VC | 在质押基础设施、节点运营方面拥有专业知识，是潜在的财库管理合作伙伴 10 |
| **Auros, Selini Capital** | 交易公司 | 未来代币的潜在早期流动性合作伙伴和做市商 10 |

如此高质量的投资者阵容与项目当前在技术透明度上的缺失形成了鲜明对比。像ConsenSys和SIG这样成熟的投资者通常会在投资前进行深入的技术和安全尽职调查。这极有可能意味着他们已经审阅了非公开的安全审计报告，并接触了公众无法获得的技术架构信息。这种情况为公众投资者创造了严重的信息不对称。乐观的看法是，这些“聪明钱”已经验证了模型的安全性；悲观的看法是，即使是顶尖投资者也可能判断失误，而公众正被要求在信息不全的情况下承担风险。这是整个投资论证中的核心矛盾点。

### **4.2 领导层与团队评估**

团队由创始人兼CEO **Esfandiar "Essi" Lagevardi** 和 **Benedikt "Ben" Schulz** 领导 19。在公开访谈中，Essi展示了对DeFi流动性激励核心问题的深刻理解，他将传统的高排放挖矿模式比作“协议层面的高利贷”，并致力于构建更可持续的模型 26。团队的愿景是最终将协议过渡到一个完全去中心化的自治组织（DAO）26。团队清晰、明确的愿景以及解决真实行业痛点的决心，是评估其质量的一个强有力的积极信号。

## **V. 全面风险与安全评估**

### **5.1 API中心化安全模型：一把双刃剑**

Turtle Club的“无智能合约”模型在规避了一类常见DeFi风险的同时，也引入了新的、更为中心化的风险向量。它将攻击面从链上智能合约转移到了链下中心化基础设施。

* **降低的链上风险**：由于不直接通过智能合约持有用户资金，该协议天然地免疫了重入攻击、闪电贷操纵价格预言机等常见的合约层漏洞。这是一个实在的安全优势。  
* **增加的链下风险**：新的风险点包括：  
  * **API安全**：用于追踪用户活动的API是否可能受到Web2世界的常见攻击？  
  * **数据库完整性**：“海龟积分”账本的安全性如何保障？是否存在内部或外部篡改的风险？  
  * **单点故障**：如果Turtle Club的服务器宕机，整个奖励分配系统将陷入停滞。  
  * **内部人员风险**：Phantom Protocol AG的恶意或受胁迫的员工是否可能操纵积分数据库？

该模型要求投资者对项目方公司的运营安全（OpSec）给予极大的信任，而这对于外部投资者来说是一个完全的黑箱。

### **5.2 审计验证与关键的透明度差距**

项目方在多个渠道声称其“通过ConsenSys Diligence、Omniscia.io、Code4Arena和Creed等审计公司确保安全” 11。然而，对这些顶级审计公司公开报告库的检索，并未发现任何与Turtle Club相关的审计报告 32。此外，其官方GitHub仓库也无法访问，这阻碍了任何形式的社区代码审查 36。

对于一个处理着数十亿美元价值流、并声称与ConsenSys（其Diligence部门是行业顶级审计机构）有合作关系的项目而言，缺乏公开审计报告是透明度上的一个致命缺陷，也是最严重的危险信号。安全审计是DeFi信任的基石。声称已完成审计却不公布报告，这种“请相信我”的做法与加密世界的精神背道而驰。无论原因为何（例如，审计发现了尚未修复的严重问题，或审计内容涉及不愿公开的专有后端架构），这都意味着当前阶段的投资需要接受一个因信息缺失而无法量化的安全风险。

### **5.3 系统性与交易对手风险**

Turtle Club的整个商业模式都建立在引导用户将资金存入第三方协议之上 11。这意味着，虽然Turtle Club自身非托管，但其用户的资金安全完全依赖于其51个以上合作伙伴的安全性。任何一个合作伙伴协议的智能合约被攻击，都可能导致遵循Turtle Club指引的用户的资金全部损失。因此，Turtle Club的声誉和用户的资产安全，与其生态系统中最薄弱的一环紧密相连，这构成了显著的、被放大的交易对手风险。

### **5.4 Pre-TGE与代币经济学风险**

目前，投资者参与的唯一激励是“海龟积分”，这些积分“预计将兑换为治理代币” 12。然而，关于未来代币（据称为$TURTLE 26）的官方信息，包括其具体效用、总供应量、分配机制和TGE（代币生成事件）日期，均未公布 16。这意味着当前的投资完全是建立在一个未知数之上。其风险在于，未来积分与代币的兑换比例可能对早期用户不利，或者代币本身未能设计出有效的价值捕获机制，导致其价格在上线后表现不佳。

## **VI. 可行的投资与收益策略**

### **6.1 “海龟积分”空投博弈**

在当前阶段，“投资”Turtle Club的唯一途径就是通过执行特定操作来积累“海龟积分”。整个策略的核心是空投挖矿（Airdrop Farming），目标是在TGE之前，以单位资本投入最大化积分的获取量，并寄望于这些积分在未来能兑换成高价值的代币。

### **6.2 高收益挖矿手册**

基于现有信息，可以制定一个多层次的积分最大化策略，核心是利用Turtle Club与合作伙伴的协同激励。

**表格：高收益策略矩阵**

| 合作协议 | 所需操作 | 原生奖励 | Turtle Club奖励 | 加成/乘数 | 关键风险 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **InceptionLRT** | 通过Turtle Club仪表板质押LST (stETH, rETH) 15 | InceptionLRT Totems, EigenLayer积分 15 | 海龟积分 | **50%海龟积分加成** 15 | InceptionLRT的智能合约风险；LRT脱锚风险 |
| **Ether.fi** | 质押ETH获得eETH，并在合作的DeFi协议中提供流动性 23 | ether.fi忠诚度积分, EigenLayer积分, DeFi收益 | 海龟积分 | 视活动而定 | Ether.fi及其DeFi集成伙伴的智能合约风险 |
| **Renzo Protocol** | 质押ETH/LST获得ezETH 39 | Renzo ezPoints, EigenLayer积分 | 海龟积分 | 视活动而定 | Renzo的智能合约风险；LRT脱锚风险 |
| **Kelp DAO** | 质押LST获得rsETH 41 | Kelp Miles, EigenLayer积分 | 海龟积分 | 视活动而定 | Kelp DAO的智能合约风险；LRT脱锚风险 |
| **Linea** | 在Linea链上持有资产，通过Turtle Club赚取LXP-L积分 27 | Linea LXP-L | 通过Turtle Club获得额外LXP-L积分 | 不适用 | L2跨链桥风险；Linea生态系统风险 |
| **TON (via TAC)** | 将ETH存入以太坊主网上的TAC Vaults，以备未来跨链 28 | TAC奖励，固定回报率 | 海龟积分 | 不适用 | 跨链桥风险（未经测试）；TON生态风险；存在短期锁仓 28 |

### **6.3 开发者与生态系统参与**

对于开发者而言，与Turtle Club“集成”并非使用一个公开的SDK进行无需许可的开发。相反，这是一个商业合作过程。希望获得流动性引导的协议需要与Turtle Club团队进行接洽，商定一个代币分配方案（即将其协议的部分代币提供给Turtle Club财库），以换取在Turtle Club平台上被推荐，并接触其庞大的用户群。这是一个封闭的、需要许可的集成模式，目前没有公开的开发者文档或API接口 8。

## **VII. 综合评估与最终投资建议**

### **7.1 SWOT综合分析**

* **优势 (Strengths)**：拥有顶级投资者（ConsenSys, SIG, Lubin）背书；经验丰富的领导团队；创新的商业模式，解决了DeFi领域的真实痛点；强大的早期用户采纳率；资本效率高且非托管。  
* **劣势 (Weaknesses)**：透明度严重不足（无公开审计报告，GitHub无法访问）；名为“无需信任”实为中心化的架构；依赖可能具有误导性的营销指标；尚未发行代币，经济模型不明。  
* **机会 (Opportunities)**：如果能成为DeFi流动性分发的主导层，其潜力巨大；即将到来的TGE和空投可能为早期用户带来丰厚回报；强大的网络效应一旦形成将难以被超越。  
* **威胁 (Threats)**：中心化后端或主要合作伙伴的安全漏洞可能引发灾难性后果；面临来自其中心化运营模式的监管风险；可能出现更透明的链上解决方案的竞争；代币经济学设计失败，无法有效捕获价值。

### **7.2 牛市与熊市论据**

* **牛市论据（The Bull Case）**：投资者正在押注一个由业内最顶尖资本支持的、经验丰富的团队来解决一个价值数十亿美元的市场问题。当前的信息不对称本身就是一种机会——VC已经完成了他们的尽职调查。通过参与积分挖矿，投资者正在以极低的成本进入一个可能成为未来DeFi基础设施基石的项目，并期待通过巨额空投获得回报。  
* **熊市论据（The Bear Case）**：投资者正在投资一个完全的“黑箱”。“无智能合约”是“中心化、基于信任的系统”的委婉说法。缺乏公开审计报告在DeFi领域是不可原谅的透明度失败。引人注目的增长指标可能是营销的产物。投资者正在用真金白银的资本，去承担51个以上其他协议的交易对手风险，以换取一个价值未知的未来代币。

### **7.3 投资等级：投机性买入 (Speculative Buy)**

综合上述所有因素，本报告给予Turtle.club **“投机性买入”** 的投资评级。

评级理由：  
该投资具有典型的高风险、高回报特征。一方面，其投资者阵容的质量、团队清晰的愿景以及其商业模式的创新性，共同构成了一个不容忽视的、强大的基本面。另一方面，其在安全审计方面的极端不透明，以及其核心架构的中心化本质，使其不适合任何风险规避型或保守型投资者。  
此评级明确指向具有高风险承受能力、深刻理解DeFi内在风险的资深投资者。他们必须清楚地认识到，这是一场关于团队执行力和未来空投价值的投机性博弈。因此，任何投资头寸都应受到严格的风险管理，其规模应与这种高度的不确定性相匹配。

最后，本评级具有一个**关键的附加条件**：项目方必须在未来某个时间点（理想情况下在TGE之前）公开发布由其声称的顶级审计公司出具的完整安全审计报告。如果项目方持续无法满足这一基本的透明度要求，本报告的投资评级将立即下调至 **“避免”（Avoid）**。

#### **引用的著作**

1. Turtle on Speed Price: TURT Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 13, 2025， [https://www.coingecko.com/en/coins/turtle-on-speed](https://www.coingecko.com/en/coins/turtle-on-speed)  
2. The Turtle Trading Experiment: A Successful Market Legend \- Investopedia, 访问时间为 七月 13, 2025， [https://www.investopedia.com/articles/trading/08/turtle-trading.asp](https://www.investopedia.com/articles/trading/08/turtle-trading.asp)  
3. The Turtle Trading Strategy: What Is It and How to Use It? \- HowToTrade, 访问时间为 七月 13, 2025， [https://howtotrade.com/trading-strategies/turtle-trading/](https://howtotrade.com/trading-strategies/turtle-trading/)  
4. Turtle Club Us Coin, 访问时间为 七月 13, 2025， [https://turtleclub.us/product/turtle-club-us-coin/](https://turtleclub.us/product/turtle-club-us-coin/)  
5. Site Help (Turtle Club Baseball and Softball), 访问时间为 七月 13, 2025， [https://turtleclubbaseball.com/Help/](https://turtleclubbaseball.com/Help/)  
6. The Turtle Club | Beachfront Dining | Naples, 访问时间为 七月 13, 2025， [https://www.turtleclubnaples.com/](https://www.turtleclubnaples.com/)  
7. Is Turtle Club Us legit? : r/freemasonry \- Reddit, 访问时间为 七月 13, 2025， [https://www.reddit.com/r/freemasonry/comments/1le8dno/is\_turtle\_club\_us\_legit/](https://www.reddit.com/r/freemasonry/comments/1le8dno/is_turtle_club_us_legit/)  
8. Turtle Club \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/turtle-club?denomination=USD](https://defillama.com/protocol/turtle-club?denomination=USD)  
9. Turtle Club \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/turtle-club](https://defillama.com/protocol/turtle-club)  
10. Turtle Club Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 13, 2025， [https://www.rootdata.com/Projects/detail/Turtle%20Club?k=MTQ5MTE%3D](https://www.rootdata.com/Projects/detail/Turtle%20Club?k=MTQ5MTE%3D)  
11. Turtle.Club: The Distribution Protocol Revolutionizing the Web3 World | Bilgi Kripto on Binance Square, 访问时间为 七月 13, 2025， [https://www.binance.com/en/square/post/22103629776777](https://www.binance.com/en/square/post/22103629776777)  
12. What is Turtle Club? Why Are DeFi Users Paying Attention? \- BitKan.com, 访问时间为 七月 13, 2025， [https://bitkan.com/learn/what-is-turtle-club-why-are-defi-users-paying-attention-54574](https://bitkan.com/learn/what-is-turtle-club-why-are-defi-users-paying-attention-54574)  
13. Turtle Club raises $6.2M to advance onchain liquidity distribution protocol \- GlobeNewswire, 访问时间为 七月 13, 2025， [https://www.globenewswire.com/news-release/2025/05/12/3078947/0/en/Turtle-Club-raises-6-2M-to-advance-onchain-liquidity-distribution-protocol.html](https://www.globenewswire.com/news-release/2025/05/12/3078947/0/en/Turtle-Club-raises-6-2M-to-advance-onchain-liquidity-distribution-protocol.html)  
14. Turtle Club raises $6.2M to advance on-chain liquidity distribution protocol \- Cointelegraph, 访问时间为 七月 13, 2025， [https://cointelegraph.com/press-releases/turtle-club-raises-6-2-m-to-advance-on-chain-liquidity-distribution-protocol](https://cointelegraph.com/press-releases/turtle-club-raises-6-2-m-to-advance-on-chain-liquidity-distribution-protocol)  
15. InceptionLRT & Turtle Club Join Forces | The Unifying Layer for Decentralized Liquid Staking, 访问时间为 七月 13, 2025， [https://www.inceptionlrt.com/blog/inceptionlrt-and-turtleclub/](https://www.inceptionlrt.com/blog/inceptionlrt-and-turtleclub/)  
16. Turtle Club token sale analytics and information, private/seed sale ..., 访问时间为 七月 13, 2025， [https://icoanalytics.org/projects/turtle-club/](https://icoanalytics.org/projects/turtle-club/)  
17. Turtle Club raises $6.2M seed for DeFi liquidity protocol \- TechNews180, 访问时间为 七月 13, 2025， [https://technews180.com/funding-news/turtle-club-raises-6-2m-seed-for-defi-liquidity-protocol/](https://technews180.com/funding-news/turtle-club-raises-6-2m-seed-for-defi-liquidity-protocol/)  
18. Turtle Club 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 七月 13, 2025， [https://pitchbook.com/profiles/company/616279-42](https://pitchbook.com/profiles/company/616279-42)  
19. Turtle Club Raises $6.2M in Seed Funding \- FinSMEs, 访问时间为 七月 13, 2025， [https://www.finsmes.com/2025/05/turtle-club-raises-6-2m-in-seed-funding.html](https://www.finsmes.com/2025/05/turtle-club-raises-6-2m-in-seed-funding.html)  
20. Veda \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/veda](https://defillama.com/protocol/veda)  
21. Spark Liquidity Layer \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/spark-liquidity-layer](https://defillama.com/protocol/spark-liquidity-layer)  
22. Spark Liquidity Layer To Unlock Multi-Chain Functionality For Sky's USDS Stablecoin, 访问时间为 七月 13, 2025， [https://thedefiant.io/news/defi/spark-liquidity-layer-to-unlock-multi-chain-functionality-for-sky-s-usds-stablecoin](https://thedefiant.io/news/defi/spark-liquidity-layer-to-unlock-multi-chain-functionality-for-sky-s-usds-stablecoin)  
23. How to Get Started with Ether.fi Staking: A Comprehensive Guide | KuCoin Learn, 访问时间为 七月 13, 2025， [https://www.kucoin.com/learn/web3/earn-higher-eth-staking-rewards-with-ether-fi](https://www.kucoin.com/learn/web3/earn-higher-eth-staking-rewards-with-ether-fi)  
24. Save, Grow, Spend. Do more with your crypto | ether.fi, 访问时间为 七月 13, 2025， [https://www.ether.fi/](https://www.ether.fi/)  
25. Turtle Club Integration \- Rewards \- Euler Governance Forum, 访问时间为 七月 13, 2025， [https://forum.euler.finance/t/turtle-club-integration/1156](https://forum.euler.finance/t/turtle-club-integration/1156)  
26. Unlocking liquidity and incentivizing users: Turtle Club's vision for sustainable Web3 growth, 访问时间为 七月 13, 2025， [https://cryptoslate.com/podcasts/unlocking-liquidity-and-incentivizing-users-turtle-clubs-vision-for-sustainable-web3-growth/](https://cryptoslate.com/podcasts/unlocking-liquidity-and-incentivizing-users-turtle-clubs-vision-for-sustainable-web3-growth/)  
27. Linea Airdrop Guide: What Is Linea and How to Earn LXP & LXP-L \- CoinGecko, 访问时间为 七月 13, 2025， [https://www.coingecko.com/learn/how-to-earn-the-linea-airdrop-for-h2-2024](https://www.coingecko.com/learn/how-to-earn-the-linea-airdrop-for-h2-2024)  
28. The Summoning Begins\! TAC Hybrid dApps Liquidity Mobilization with Turtle Club \- Binance, 访问时间为 七月 13, 2025， [https://www.binance.com/en/square/post/22337175976050](https://www.binance.com/en/square/post/22337175976050)  
29. On-chain Liquidity Allocation Protocol Turtle Club Completes $6.2 Million Seed Round Financing, Led by THEIA | Bitget News, 访问时间为 七月 13, 2025， [https://www.bitget.com/news/detail/12560604751571](https://www.bitget.com/news/detail/12560604751571)  
30. Turtle Club: Helping Web3 Users Monetize Their On-Chain Activity \- Esfandiar Lagevardi. Ep. 586 \- YouTube, 访问时间为 七月 13, 2025， [https://www.youtube.com/watch?v=vhb6ThRXG3A](https://www.youtube.com/watch?v=vhb6ThRXG3A)  
31. Turtle Club \- Luma, 访问时间为 七月 13, 2025， [https://lu.ma/user/TurtleClub](https://lu.ma/user/TurtleClub)  
32. Consensys Diligence: Smart Contract Audits, 访问时间为 七月 13, 2025， [https://diligence.consensys.io/](https://diligence.consensys.io/)  
33. Public Smart Contract Audits and Security Reviews | ConsenSys Diligence Staging, 访问时间为 七月 13, 2025， [https://consensys-diligence.younetco.com/diligence/audits/](https://consensys-diligence.younetco.com/diligence/audits/)  
34. Blockchain Security Audit Reports \- Omniscia, 访问时间为 七月 13, 2025， [https://omniscia.io/reports.html](https://omniscia.io/reports.html)  
35. Audits | Code4rena, 访问时间为 七月 13, 2025， [https://code4rena.com/audits](https://code4rena.com/audits)  
36. 访问时间为 一月 1, 1970， [https://github.com/turtleclubhouse](https://github.com/turtleclubhouse)  
37. InceptionLRT v2 Launches as the First Liquid Restaking SuperDapp | CryptoSlate, 访问时间为 七月 13, 2025， [https://cryptoslate.com/press-releases/inceptionlrt-v2-launches-as-the-first-liquid-restaking-superdapp/](https://cryptoslate.com/press-releases/inceptionlrt-v2-launches-as-the-first-liquid-restaking-superdapp/)  
38. ETHFI Staking | ether.fi \- GitBook, 访问时间为 七月 13, 2025， [https://etherfi.gitbook.io/etherfi/ethfi/ethfi-staking](https://etherfi.gitbook.io/etherfi/ethfi/ethfi-staking)  
39. Guide on Earning Renzo Points: Potential Renzo Protocol Airdrop \- CoinGecko, 访问时间为 七月 13, 2025， [https://www.coingecko.com/learn/earn-renzo-points-potential-renzo-protocol-airdrop](https://www.coingecko.com/learn/earn-renzo-points-potential-renzo-protocol-airdrop)  
40. What Is Renzo? Leading ETH Liquid Restaking Protocol With $3.3B in TVL | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/academy/article/what-is-renzo-protocol-ethereum-liquid-restaking](https://coinmarketcap.com/academy/article/what-is-renzo-protocol-ethereum-liquid-restaking)  
41. What is Kelp DAO? The Ultimate Guide to Liquid Restaking for Modern Crypto Investors, 访问时间为 七月 13, 2025， [https://www.nansen.ai/post/what-is-kelp-dao](https://www.nansen.ai/post/what-is-kelp-dao)  
42. How to Earn Eigenlayer Points with Kelp DAO's rsETH \- Flywheel DeFi, 访问时间为 七月 13, 2025， [https://www.flywheeldefi.com/article/kelp-dao/](https://www.flywheeldefi.com/article/kelp-dao/)  
43. Robots/TurtleBot/SDK Setup \- ROS Wiki, 访问时间为 七月 13, 2025， [http://wiki.ros.org/Robots/TurtleBot/SDK%20Setup](http://wiki.ros.org/Robots/TurtleBot/SDK%20Setup)  
44. Explore Linea gas-free with Sumsub ID, 访问时间为 七月 13, 2025， [https://linea.build/hub/events/explore-linea-gas-free-with-sumsub-id](https://linea.build/hub/events/explore-linea-gas-free-with-sumsub-id)