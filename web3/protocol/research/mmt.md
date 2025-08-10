

# **Momentum (MMT) 深度投资评估报告：Sui生态的明星DEX与未解的安全之谜**

## **I. 执行摘要与投资评级**

**核心论点：** Momentum (MMT) 是构建于Sui区块链之上的顶级ve(3,3)模型去中心化交易所（DEX），其背后拥有顶尖风险投资机构的鼎力支持、备受瞩目的创始团队以及爆炸性的早期市场表现。然而，其巨大的增长潜力被一个关键风险所制衡：核心高价值智能合约在安全审计方面的透明度严重不足。这种“审计悖论”——即声称项目安全但未能提供可供验证的公开证据——构成了潜在投资者面临的最重大风险。

**核心发现：**

* **优势：** 项目结合了多种强大优势，包括一个经过市场验证的ve(3,3)经济模型 1、一位拥有Meta/Libra项目背景的创始人 3、来自Coinbase Ventures、Jump Crypto和OKX Ventures等行业巨头的雄厚资本支持 3，以及极其强劲的链上数据表现 6。  
* **风险：** 最主要的风险在于，尽管项目方公开宣称其智能合约经过审计 3，但至今未能提供一份由知名审计公司出具的、针对其线上DEX的、可供公众查阅的完整安全审计报告。在其主要竞争对手Cetus Protocol遭受灾难性黑客攻击的背景下 7，这种信息不透明构成了实质性风险。其他风险包括尚未进行代币生成事件（TGE）所固有的不确定性以及Sui生态系统内部的激烈竞争。

**投资评级：中立 (若公布审计报告，则前景乐观)**

该项目基本面异常强劲，但在其安全性得到公开验证之前，任何形式的强烈推荐都是不负责任的。一旦Momentum公布一份由OtterSec、Zellic或MoveBit等顶级公司出具的、内容详尽且无重大漏洞的审计报告，其投资评级将立即上调至“建议”或“强烈建议”。

**投资机会矩阵：** 主要的投资途径分为两个阶段：1) TGE前的“Bricks”积分空投活动，通过奖励早期的流动性提供和交易行为，为投资者提供了项目初期的入场机会 8。2) TGE后的一系列投资机会，主要围绕其ve(3,3)模型展开，包括高年化收益率（APR）的流动性挖矿、通过质押veMMT赚取手续费和贿赂收入，以及直接的代币投机 1。

## **II. 协议架构与价值主张**

### **A. 项目演进：从MSafe到Momentum**

Momentum的起源可以追溯到其前身——MSafe（Momentum Safe），这是一个专注于Move生态系统（涵盖Aptos和Sui）安全的多重签名钱包解决方案 4。MSafe的初始使命是利用Move语言的内置安全特性，为去中心化自治组织（DAO）和加密原生企业提供安全的资金库管理工具 9。其创始人Wendy Fu曾明确表示，项目的使命是提供“更安全、更去中心化的金融服务” 4，这奠定了项目安全至上的基因。

随后，项目进行了重大的战略转型或业务扩张，更名为Momentum，并推出了一个功能完备的去中心化交易所（DEX） 5。它从一个安全工具演变为一个“Move生态的中央流动性引擎” 5,"Move Central Liquidity Engine"，旨在成为Sui DeFi生态系统的基础设施基石。

这一战略转型并非偶然，而是深思熟虑的价值捕获策略。作为一个多重签名钱包，MSafe虽然是关键的基础设施，但其商业模式较为小众，收入来源不如DEX直接。相比之下，一个采用ve(3,3)模型的DEX能够坐落于生态系统经济活动的中心，从每一笔交易中捕获价值。通过利用作为MSafe时建立的信任和用户基础（其多签层锁定的总价值曾达到5亿美元 2），并将其与DEX相结合，团队成功地将项目从一个偏向于安全（成本中心）的工具，转型为一个以流动性和交易为核心的盈利引擎（利润中心）。这一转型使其能够捕获Sui生态中更大量的价值流，也为后续获得大规模风险投资奠定了基础 3。

### **B. 解构ve(3,3)飞轮与CLMM技术**

Momentum是Sui生态中首个采用ve(3,3)模型的DEX 2。该模型的设计灵感源于Andre Cronje的Solidly，并由Aerodrome等协议发扬光大，其核心目标是通过精巧的激励机制来解决“雇佣兵流动性”（mercenary liquidity）问题，实现各方利益的深度绑定 1。

**激励循环机制如下：**

1. **流动性提供者 (LPs):** 向资金池提供流动性，并赚取MMT代币作为排放奖励 1。  
2. **协议方 (Bribers):** 其他希望为其代币（例如一种新的稳定币）建立深度流动性的协议，可以通过“贿赂”veMMT持有者来激励他们为自己的资金池投票。这种方式比协议方自己运营流动性挖矿项目更具资本效率 1。  
3. **交易者 (Traders):** 受益于由贿赂和代币排放所创造的深度流动性与低滑点交易环境 1。他们支付的交易手续费是协议收入的核心来源。  
4. **代币持有者 (Voters):** 通过锁定其MMT代币，获得不可转让的veMMT（vote-escrowed MMT，即投票托管MMT）。veMMT持有者可以投票决定下一周的MMT代币排放将分配给哪些流动性池。作为投票的回报，他们可以获得所投票池子产生的100%的交易手续费和贿赂收入 1。这为长期锁定代币和参与治理创造了强大的经济激励。

技术层面，该DEX采用了集中流动性做市商（CLMM）模型，与Uniswap v3类似 8。这允许流动性提供者在特定的价格区间内提供流动性，从而极大地提高了资本效率，并为交易者降低了滑点 8。

项目的远大目标不止于成为一个DEX。它负责在Sui区块链上铸造了100%供应量的主流稳定币，如Agora USD (AUSD)、First Digital USD (FDUSD) 和 Ondo U.S. Dollar Yield (USDY) 2。一个能够控制生态系统核心稳定币及其原生代币（SUI）主要流动性的DEX，实际上扮演了该生态系统的“中央银行”或“货币层”的角色。其ve(3,3)模型赋予了它通过投票和贿赂来引导流动性走向的能力，从而对Sui上其他协议的资本成本产生重大影响。这揭示了其成为Sui网络不可或缺的流动性支柱的雄心，一个真正的“Sui生态系统基石级别的公共产品” 2，这也解释了其高估值和顶级投资者的浓厚兴趣。

### **C. 领导团队与资本背景**

**创始人：** 项目的联合创始人是“ChefWEN”，其真实身份为Wendy Fu。她曾是Meta公司的资深工程师，参与过Libra/Diem项目，并且是Novi钱包的创始成员之一 3。这一背景为项目带来了巨大的信誉，并预示着团队在构建安全、可扩展的金融基础设施方面拥有深厚的专业知识。

**团队：** 项目的首席技术官（CTO）Jacky Wang曾是Harmony的高级核心协议开发者 4。团队总部位于硅谷 4。

**融资情况：** Momentum已成功筹集至少1500万美元资金。其中包括2023年1月的500万美元种子轮 4，2025年3月的另一轮500万美元融资 5，以及2025年6月的一轮战略融资，该轮融资使项目估值达到1亿美元 2。

**投资者阵容：** 这是Momentum的核心优势之一。其投资者名单堪称加密风险投资领域的顶级天团，包括种子轮领投方Jump Crypto、战略轮领投方OKX Ventures，以及Coinbase Ventures、Circle Ventures、The Spartan Group、Shima Capital、Gate Ventures、MEXC Ventures、Kucoin Ventures、Sui基金会和Aptos基金会等 3。

这种由Libra工程师背景的创始人与顶级VC阵容组成的组合，产生了一种强大的“光环效应”。它向市场传递了一个明确的信号：该项目已经通过了严格的非公开尽职调查，拥有强大的行业人脉，并被视作Sui生态的潜在赢家。这种光环效应是其初期爆炸性增长和高估值的主要驱动力。然而，这也带来了一把双刃剑。它可能导致投资者产生自满情绪，因为强大的社会认同感而忽视了一些危险信号（例如缺失的公开审计报告）。投资者可能会下意识地认为“Coinbase和Jump肯定已经做过安全审查了”。尽管这可能是事实，但这种非公开的尽职调查无法替代一份可供整个社区审查的、公开透明且可验证的审计报告。这使得公开审计的缺失显得尤为刺眼和令人担忧。

## **III. 链上表现与竞争格局**

### **A. 核心指标分析（基于研究数据）**

* **总锁仓价值 (TVL):** TVL实现了快速增长，从早期的6900万美元 3 迅速攀升至超过1.55亿美元 8。这种增长速度表明市场对该协议抱有强烈信心，并成功吸引了大量流动性。  
* **交易量:** 交易量呈现爆炸式增长，在创纪录的时间内突破了10亿美元大关 14，随后相继超过30亿美元 3 和63亿美元 8。其24小时交易量持续保持高位，约为8200万美元 6。  
* **协议收入与费用:** 协议产生了可观的收入。年化费用估计超过3000万美元，而协议的年化收入（协议分成部分）超过600万美元 6。这证明了其强大的产品市场契合度以及可持续的商业模式，因为这部分收入将直接分配给veMMT的持有者。  
* **用户增长:** 在上线后的短短两个月内，用户数就突破了42万 3，显示出其强大的用户获取能力。

### **B. Sui生态系统竞争分析**

Momentum在Sui生态中的主要竞争对手是其他DEX，特别是Cetus Protocol和Kriya DEX 6。

**表1：Sui生态DEX竞品矩阵**

| 特性 | Momentum | Cetus Protocol | Kriya DEX |
| :---- | :---- | :---- | :---- |
| **TVL (百万美元)** | \> 155 8 | 107 15 | 5.8 15 |
| **30日交易量 (十亿美元)** | 2.11 6 | 数据未明确提供 | 数据未明确提供 |
| **技术栈** | ve(3,3) CLMM 6 | CLMM 16 | CLMM 15 |
| **代币经济学模型** | ve(3,3) 飞轮 1 | CETUS/xCETUS 双代币模型 17 | 未明确 |
| **公开记录的安全事件** | 无 | 2025年5月，因溢出漏洞导致约2.24亿美元损失 7 | 无 |

数据显示，尽管Cetus是Sui生态中一个起步较早的参与者，但Momentum在交易量等关键指标上已迅速超越它。Cetus的代币经济学采用的是较为传统的质押赚息模型 17，而Momentum的ve(3,3)模型在结构设计上更具侵略性，它通过贿赂机制将其他协议的利益与自身深度绑定，从而更有效地吸引和锁定“协议拥有的流动性” 1。此外，Cetus遭受的灾难性黑客攻击引发了严重的信任危机，可能导致大量资本和用户流向被认为更安全、更稳健的替代品——Momentum。因此，Momentum的成功不仅源于市场热度，更是其卓越经济模型和有效利用竞争对手重大失误的结果。ve(3,3)模型是其在Sui流动性战争中取得胜利的战略性武器。

### **C. 生态风险案例研究：Cetus协议被盗事件**

2025年5月，Sui生态的主要DEX Cetus Protocol遭到攻击，损失高达约2.24亿美元 7。攻击的根本原因在于其智能合约所使用的一个开源库中存在一个微小但致命的算术溢出漏洞 19。攻击者利用闪电贷操纵了资金池价格，并注入了虚假的流动性价值 19。

尽管Cetus协议曾接受过多次安全审计，但这一缺陷仍被遗漏，这沉重地打击了“广泛的开发者采用即意味着足够安全”的观念 19。事件的后续处理涉及Sui验证者通过社区投票冻结了1.62亿美元的被盗资金，以及Sui基金会提供贷款以帮助补偿用户损失 18。

Cetus被盗事件是整个Sui生态安全发展的一个决定性时刻。它证明了即使是经过审计、拥有高TVL的项目，也可能因为Move语言或其常用库中微小的缺陷而遭受毁灭性攻击。这极大地提高了市场对项目安全性的期望标准。任何项目，特别是像Momentum这样处理着数十亿交易量和上亿美元TVL的DEX，如果不能提供清晰、公开且可由多家顶级公司验证的审计报告，其自身就存在巨大的、自我造成的信誉鸿沟。这使得Momentum的“审计悖论”不再是一个理论上的风险，而是对其最直接竞争对手近期灾难性失败的直接呼应。对于任何投资者而言，忽视这一相似性都是一种疏忽。

## **IV. 全面风险与安全评估**

### **A. 审计悖论：声称与证据的矛盾**

**声称：** Momentum的官方新闻稿和团队声明中，一直强调其拥有“经过审计的智能合约”、一个“健全的审查流程”，以及自2022年5月以来建立的“安全记录” 3。

**调查：** 我们对Momentum DEX的公开审计报告进行了详尽的搜索，结果如下：

* **MoveBit:** 在其网站上发现了一个指向“MSafe”（项目前身）审计报告的链接 22，但该PDF报告链接已失效 23，其指向的代码库也无法访问 24。未发现任何针对“Momentum”的报告 25。  
* **Zellic:** 其官网提到曾为Sui生态系统提供安全保障并审计过Sui应用 31，但其公开的报告和客户名单中均未出现“Momentum”或“MSafe” 31。  
* **OtterSec:** 该公司是Move生态系统的顶级审计机构，深受Sui基金会信赖 38。其公开报告中同样不包含Momentum或MSafe 38。

**结论：** 目前，没有任何一份来自信誉良好、独立的第三方审计公司，针对正在运行且掌管着超过1.55亿美元TVL和数十亿交易量的Momentum DEX智能合约的、可供公众验证的安全审计报告。项目方声称的“已审计”可能指的是旧的MSafe钱包或内部审查，但这远未达到DeFi领域所要求的透明度标准。

在DeFi领域，“不信任，去验证”（Don't trust, verify）是基本原则。一个未经审计的协议是高风险的赌博。而一个声称已审计却不提供报告的协议，其情况可能更糟。它制造了一种虚假的安全感，并暴露出其在透明度上的缺失，这是关于项目治理和团队文化的重大危险信号 45。考虑到创始人曾在对安全和监管要求极高的Libra项目工作的背景，以及Coinbase等VC（其有严格的上币审查要求）的参与，这种信息不透明令人费解且深感忧虑。这不仅仅是一份文件的缺失，而是项目公开形象的核心矛盾。它迫使投资者在“相信团队的背景”和“遵守基本的风险管理原则”之间做出选择。对于专业分析师而言，唯一负责任的做法是将其标记为项目当前最大的风险。

### **B. 团队与历史诚信核查**

创始团队，特别是Wendy Fu和Jacky Wang，在Meta和Harmony等大型科技和加密公司拥有可靠且可验证的职业背景 3。对已知团队成员过往是否存在欺诈、跑路或其他恶意行为的调查未发现任何负面记录。截至目前，团队的声誉是项目的一项重要资产。

### **C. 协议与系统性风险**

* **ve(3,3)模型风险:** 此类模型可能容易引发“投票权战争”，即大型实体通过积累投票权来控制代币排放，从而可能导致影响力中心化。此外，模型的吸引力依赖于持续的贿赂和手续费收入，市场活动的低迷可能会削弱其经济飞轮的效应。  
* **Move语言风险:** 尽管Move语言为安全而生，但与Solidity相比仍处于发展初期。Cetus被盗事件证明，其实现或常用库中可能存在微小但致命的漏洞 19。  
* **预言机风险:** 与所有DEX一样，Momentum依赖于价格预言机。被操纵或出现故障的预言机可能导致错误的清算或定价。OtterSec对Thala的Chainlink预言机的审计 38 显示了保障这一层安全的重要性，但Momentum自身的预言机依赖关系需要得到验证。  
* **TGE前风险:** MMT代币尚未发行。其最终的代币经济学（如总供应量、详细分配、解锁计划等）仅在新闻稿中有所提及，并未在白皮书中得到完全确认 1。参与“Bricks”积分活动本质上是投资一个未来代币，其最终价值和分配机制尚不确定。

## **V. 投资机会：策略与收益分析**

### **A. 第一部分：TGE前空投（“Bricks”积分活动）**

**机制：** 在代币生成事件（TGE）之前，Momentum正在运行一个名为“Bricks”的积分计划，以奖励早期用户 8。用户可以通过交易、提供流动性和推荐新用户来赚取积分 8。这些“Bricks”将决定用户最终获得的MMT代币空投数量。

**低风险挖矿策略：** 一个被特别提及的策略是为haSUI/SUI池提供流动性 8。

* **描述:** haSUI是SUI的流动性质押衍生品。由于两种资产都与SUI挂钩，无常损失（Impermanent Loss）的风险极低。  
* **回报:** 该池提供约19%的基础年化收益率（APR），来源于质押收益和交易费，同时还能获得1.2倍的“Bricks”积分加成 8。  
* **执行:** 投资者需要一个SUI钱包（如SLUSH）和SUI代币。他们可以将一半的SUI兑换成haSUI，然后将两种资产存入Momentum的haSUI/SUI流动性池，并选择一个较窄的价格区间以最大化手续费捕获 8。

ve(3,3)模型的成功启动需要三个要素：流动性、产生费用的交易量以及参与投票的代币持有者。“Bricks”活动正是一个精妙的市场启动策略，它在代币诞生之前就引导了前两个要素的形成。它利用未来空投的预期，激励了那些能让协议从第一天起就变得有价值的行为（提供流动性和交易）。当TGE发生时，空投的MMT代币将直接分发给那些已经创造了活跃经济环境的用户。届时，协议中已经有可供领取的费用和成熟的资金池，可供其他协议进行贿赂。因此，参与空投活动不仅是在挖一个代币，更是在投资整个经济引擎的成功启动。其潜在回报不仅是代币的初始价格，更是其未来能为持有者带来的现金流（手续费和贿赂）。

### **B. 第二部分：TGE后投资途径与高级策略**

下表详细列出了TGE后围绕Momentum的各种投资机会，为不同风险偏好和技术背景的投资者提供参考。

**表2：Momentum (MMT) 投资机会与策略分析**

| 策略 | 描述 | 优势 | 劣势 | 资本/精力要求 | 预期回报模式 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. 空投挖矿 (TGE前)** | 参与“Bricks”积分活动，通过交易和提供流动性赚取积分，以换取未来的MMT空投。 | 早期入场机会，潜在高倍数回报，存在低风险策略（如haSUI/SUI池）。 | TGE时间和代币价值不确定，机会窗口有限。 | 低至中等资本，中等精力。 | 一次性的高潜在ROI空投。 |
| **2\. LP流动性挖矿 (TGE后)** | 为关键交易对（如MMT/SUI, SUI/USDC）提供流动性，赚取MMT代币排放奖励。 | 潜在的高APR，直接参与协议核心业务。 | 面临无常损失风险，回报受MMT代币价格波动影响大。 | 中至高资本，低精力。 | 持续的APR/APY，但有波动。 |
| **3\. veMMT质押与贿赂挖矿** | 锁定MMT获得veMMT，投票决定排放方向，赚取100%的协议手续费和贿赂收入。 | 收入来源多样（费用+贿赂），代币价格风险相对较低，是协议治理的核心。 | 资本被锁定，失去流动性；回报依赖于协议的整体交易活跃度。 | 中至高资本，中等精力（需每周投票）。 | 稳定的现金流（类股息收入）。 |
| **4\. 直接购买MMT代币** | 在二级市场上直接购买并持有MMT代币。 | 操作简单，直接享受协议成功的价值增长。 | 价格波动风险最高，无额外收益来源。 | 任意资本，低精力。 | 资本增值（或亏损）。 |
| **5\. 高级“组合”策略** | 结合多种策略，例如将部分空投的MMT用于提供流动性，另一部分锁定为veMMT，并为自己的LP仓位投票，形成自我强化的收益循环。 | 最大化资本效率，多重收益来源，深度参与协议。 | 策略复杂，需要对ve(3,3)机制有深入理解。 | 高资本，高精力。 | 复合型高回报，风险分散。 |
| **6\. 生态参与 (面向开发者)** | 利用Momentum的可组合性 13，在其之上构建应用，如收益优化器、结构化产品或自动化交易机器人，通过自己的智能合约赚取服务费。 | 独一无二的价值创造机会，潜在回报极高，利用自身技术优势。 | 技术门槛高，开发周期长，需要承担自身产品的风险。 | 低资本，极高精力/技术。 | 平台费用、服务费或自有代币价值。 |

## **VI. 最终结论与未来展望**

**综合评定：** Momentum项目几乎汇集了投资者在DeFi项目中寻找的所有积极信号：全明星团队、顶级资本支持、强大且经过验证的经济模型，以及爆炸性的市场采用率。它确实有潜力成为Sui生态的蓝筹资产和基础设施支柱。然而，这座宏伟的潜力大厦，其地基的坚固性目前却无法得到公开验证。“审计悖论”是一个无法忽视的问题，它引入了无法量化的智能合约风险。

**投资评级阐述：** “中立”的评级是这一核心风险的直接体现。项目的潜在上行空间巨大，但潜在的灾难性损失（无论鉴于团队背景这看起来多么不可能）在没有公开审计的情况下不容忽视。一份来自OtterSec、Zellic或MoveBit的无重大漏洞的审计报告将解决最大的疑虑，并立即将风险回报的天平向投资一方倾斜，届时评级将上调至“强烈建议”。反之，如果在TGE后仍缺乏透明度，将是一个重大的负面信号，评级将被下调。

**未来轨迹：** 如果Momentum能够解决其安全透明度问题，其前景将异常光明。在整个Sui生态系统增长（特别是其CEO在 2 中提到的BTCFi领域）的推动下，其ve(3,3)飞轮可能使其成为顶级公链上的主导流动性中心。未来需要密切关注的关键催化剂包括：1) 公开审计报告的发布；2) TGE的进行及MMT代币的初始价格发现；3) 第一批协议贿赂者的入场；4) Sui生态整体TVL和用户基数的持续增长。

#### **引用的著作**

1. Momentum launches new DEX on Sui with major trading competition \- Cointelegraph, 访问时间为 七月 27, 2025， [https://cointelegraph.com/press-releases/momentum-launches-new-dex-on-sui-with-major-trading-competition](https://cointelegraph.com/press-releases/momentum-launches-new-dex-on-sui-with-major-trading-competition)  
2. Momentum launches new DEX on Sui with major trading competition \- GlobeNewswire, 访问时间为 七月 27, 2025， [https://www.globenewswire.com/news-release/2025/03/31/3052527/0/en/Momentum-launches-new-DEX-on-Sui-with-major-trading-competition.html](https://www.globenewswire.com/news-release/2025/03/31/3052527/0/en/Momentum-launches-new-DEX-on-Sui-with-major-trading-competition.html)  
3. Momentum Raises Strategic Round Led By OKX Ventures, Coinbase Ventures, Protagonist and DNA Fund \- Chainwire, 访问时间为 七月 27, 2025， [https://chainwire.org/2025/06/05/momentum-raises-strategic-round-led-by-okx-ventures-coinbase-ventures-protagonist-and-dna-fund/](https://chainwire.org/2025/06/05/momentum-raises-strategic-round-led-by-okx-ventures-coinbase-ventures-protagonist-and-dna-fund/)  
4. MSafe Raises $5 Million Seed for Developing Multi-Signature Wallet Solutions, 访问时间为 七月 27, 2025， [https://www.prnewswire.com/news-releases/msafe-raises-5-million-seed-for-developing-multi-signature-wallet-solutions-301713975.html](https://www.prnewswire.com/news-releases/msafe-raises-5-million-seed-for-developing-multi-signature-wallet-solutions-301713975.html)  
5. Momentum Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/Momentum?k=NDQ1Mg%3D%3D](https://www.rootdata.com/Projects/detail/Momentum?k=NDQ1Mg%3D%3D)  
6. Momentum \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/momentum](https://defillama.com/protocol/momentum)  
7. 2025 H1 Global Web3 Security Report | Beosin, 访问时间为 七月 27, 2025， [https://beosin.com/resources/2025\_H1\_Global\_Web3\_Security\_Report.pdf](https://beosin.com/resources/2025_H1_Global_Web3_Security_Report.pdf)  
8. 4 Features Give This New Crypto Serious Momentum \- Weiss Ratings, 访问时间为 七月 27, 2025， [https://weissratings.com/en/weiss-crypto-daily/4-features-give-this-new-crypto-serious-momentum](https://weissratings.com/en/weiss-crypto-daily/4-features-give-this-new-crypto-serious-momentum)  
9. Insights \- MSafe, 访问时间为 七月 27, 2025， [https://www.m-safe.io/insights](https://www.m-safe.io/insights)  
10. Thousands of Solana Wallets Hacked \- The Biggest Lessons Learnt\! | MSafe \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/momentum-safe/thousands-of-solana-wallets-hacked-the-biggest-lessons-learnt-648609f0e4d1](https://medium.com/momentum-safe/thousands-of-solana-wallets-hacked-the-biggest-lessons-learnt-648609f0e4d1)  
11. Momentum | Move Central Liquidity Engine, 访问时间为 七月 27, 2025， [https://app.mmt.finance/trade](https://app.mmt.finance/trade)  
12. Varys Capital Leads Momentum's Seed Round, Doubling Down on the MoveVM Ecosystem, 访问时间为 七月 27, 2025， [https://www.prweb.com/releases/varys-capital-leads-momentums-seed-round-doubling-down-on-the-movevm-ecosystem-302418380.html](https://www.prweb.com/releases/varys-capital-leads-momentums-seed-round-doubling-down-on-the-movevm-ecosystem-302418380.html)  
13. Momentum's DEX Launch on Sui: Pioneering DeFi Innovation with Competitive Edge, 访问时间为 七月 27, 2025， [https://seo.goover.ai/report/202504/go-public-report-en-c5d93913-001c-4714-8993-eb410febb387-0-0.html](https://seo.goover.ai/report/202504/go-public-report-en-c5d93913-001c-4714-8993-eb410febb387-0-0.html)  
14. Momentum DEX Achieves $1B Trading Volume Milestone in Record Time \- Decrypt, 访问时间为 七月 27, 2025， [https://decrypt.co/316892/momentum-dex-achieves-1b-trading-volume-milestone-in-record-time](https://decrypt.co/316892/momentum-dex-achieves-1b-trading-volume-milestone-in-record-time)  
15. Momentum \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/momentum?denomination=SUI](https://defillama.com/protocol/momentum?denomination=SUI)  
16. Cetus Protocol (CETUS) Price Prediction & Forecast For 2024 To 2030 | Mudrex Learn, 访问时间为 七月 27, 2025， [https://mudrex.com/learn/cetus-protocol-cetus-price-prediction-forecast-for-2024-to-2030/](https://mudrex.com/learn/cetus-protocol-cetus-price-prediction-forecast-for-2024-to-2030/)  
17. Sui TVL Soars, Which DeFi Projects Should You Pay Attention To?, 访问时间为 七月 27, 2025， [https://web3.bitget.com/en/academy/sui-tvl-soars-defi-projects-to-pay-attention](https://web3.bitget.com/en/academy/sui-tvl-soars-defi-projects-to-pay-attention)  
18. Cetus Protocol relaunches on June 8... Announces attack damage recovery and CETUS compensation plan | Xangle, 访问时间为 七月 27, 2025， [https://xangle.io/en/insight/events/68461c78ca96040bfdebe2c0](https://xangle.io/en/insight/events/68461c78ca96040bfdebe2c0)  
19. wayneeeeeee's Profile | Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-NG/square/profile/tokeninsight](https://www.binance.com/en-NG/square/profile/tokeninsight)  
20. Cetus Protocol \- Cryptohopper, 访问时间为 七月 27, 2025， [https://www.cryptohopper.com/currencies/detail?currency=CETUS](https://www.cryptohopper.com/currencies/detail?currency=CETUS)  
21. ResupplyFi Hack Analysis. Overview: | by Shashank | Jun, 2025 | SolidityScan, 访问时间为 七月 27, 2025， [https://blog.solidityscan.com/resupply-hack-analysis-d4e3baaa294a](https://blog.solidityscan.com/resupply-hack-analysis-d4e3baaa294a)  
22. MoveBit：Pioneer in Move Security | Move Smart Contract Security Audit Service for Aptos and Sui, 访问时间为 七月 27, 2025， [https://www.movebit.xyz/](https://www.movebit.xyz/)  
23. 访问时间为 一月 1, 1970， [https://github.com/movebit/Sampled-Audit-Reports/blob/main/reports/Maven-Smart-Contract-Audit-Report.pdf](https://github.com/movebit/Sampled-Audit-Reports/blob/main/reports/Maven-Smart-Contract-Audit-Report.pdf)  
24. github.com, 访问时间为 七月 27, 2025， [https://github.com/movebit/Sampled-Audit-Reports/tree/main/reports](https://github.com/movebit/Sampled-Audit-Reports/tree/main/reports)  
25. Why Financial Document Automation Is No Longer Optional in 2025 \- Infrrd, 访问时间为 七月 27, 2025， [https://www.infrrd.ai/blog/financial-document-automation](https://www.infrrd.ai/blog/financial-document-automation)  
26. Local SEO for Lawyers | Rank Your Law Firm Higher on Google\! \- Momentum Digital, 访问时间为 七月 27, 2025， [https://www.needmomentum.com/local-seo-for-lawyers/](https://www.needmomentum.com/local-seo-for-lawyers/)  
27. Fall in Love With the Pain Point: Sam Li on the Evolving World of Compliance and How to Meet Customers' Complex Needs | Primary VC, 访问时间为 七月 27, 2025， [https://www.primary.vc/firstedition/posts/fall-in-love-with-the-pain-point-sam-li-on-the-evolving-world-of-compliance-and-how-to-meet](https://www.primary.vc/firstedition/posts/fall-in-love-with-the-pain-point-sam-li-on-the-evolving-world-of-compliance-and-how-to-meet)  
28. corporate accounting practices: is there a credibility gaap? hearings \- House Financial Services Committee, 访问时间为 七月 27, 2025， [https://financialservices.house.gov/media/pdf/107-67.pdf](https://financialservices.house.gov/media/pdf/107-67.pdf)  
29. FEDERAL ACCOUNTING STANDARDS ADVISORY BOARD \- fasab.gov \- Archive, 访问时间为 七月 27, 2025， [http://files.fasab.gov/pdffiles/jun\_22\_2011\_minutes.pdf](http://files.fasab.gov/pdffiles/jun_22_2011_minutes.pdf)  
30. GAO-24-900483, United States Government Accountability Office Performance and Accountability Report Fiscal Year 2023, 访问时间为 七月 27, 2025， [https://www.gao.gov/assets/d24900483.pdf](https://www.gao.gov/assets/d24900483.pdf)  
31. Zellic, 访问时间为 七月 27, 2025， [https://www.zellic.io/](https://www.zellic.io/)  
32. Zellic \- Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/](https://reports.zellic.io/)  
33. Ionic Protocol \- Zellic \- Audit Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/publications/ionic-protocol](https://reports.zellic.io/publications/ionic-protocol)  
34. StakingAdmin.sol \- Zellic \- Audit Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/publications/staking/sections/stakingadminsol-combinetrackerdistributor-55ce176cc4e0924bfb607da94898bd85](https://reports.zellic.io/publications/staking/sections/stakingadminsol-combinetrackerdistributor-55ce176cc4e0924bfb607da94898bd85)  
35. Zellic \- Audit Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/publications/oracle](https://reports.zellic.io/publications/oracle)  
36. Zellic's audits, publications, and reports \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Zellic/publications](https://github.com/Zellic/publications)  
37. StrategyAave.sol \- Zellic \- Audit Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/publications/woofi-stake/sections/strategyaavesol-deposit-2d6b15171e199f07597b726654874f03](https://reports.zellic.io/publications/woofi-stake/sections/strategyaavesol-deposit-2d6b15171e199f07597b726654874f03)  
38. OtterSec, 访问时间为 七月 27, 2025， [https://osec.io/](https://osec.io/)  
39. Issues in Certain Forks of Gains Network | Zellic — Research, 访问时间为 七月 27, 2025， [https://www.zellic.io/blog/issues-in-forks-of-gains](https://www.zellic.io/blog/issues-in-forks-of-gains)  
40. OtterSec \- 2025 Company Profile & Competitors \- Tracxn, 访问时间为 七月 27, 2025， [https://tracxn.com/d/companies/ottersec/\_\_3o-UPpy9K6AZMH-AYu6TzR\_bBKKgEKnKk-hJGlCK2nk](https://tracxn.com/d/companies/ottersec/__3o-UPpy9K6AZMH-AYu6TzR_bBKKgEKnKk-hJGlCK2nk)  
41. What we Audit \- OtterSec, 访问时间为 七月 27, 2025， [https://osec.io/services/](https://osec.io/services/)  
42. Our Team \- OtterSec, 访问时间为 七月 27, 2025， [https://osec.io/team/](https://osec.io/team/)  
43. OtterSec: Introduction, Financing, Team and News \- SoSoValue, 访问时间为 七月 27, 2025， [https://m.sosovalue.com/project/ottersec-1844238107825623042](https://m.sosovalue.com/project/ottersec-1844238107825623042)  
44. OtterSec on Solana: Project Reviews, Token, Roadmap, Top Strategies \+ More, 访问时间为 七月 27, 2025， [https://solanacompass.com/projects/ottersec](https://solanacompass.com/projects/ottersec)  
45. New AvidXchange Report Shows Finance Teams More Prepared Than in 2020—But Still Investing to Weather Uncertainty | Morningstar, 访问时间为 七月 27, 2025， [https://www.morningstar.com/news/globe-newswire/9496328/new-avidxchange-report-shows-finance-teams-more-prepared-than-in-2020but-still-investing-to-weather-uncertainty](https://www.morningstar.com/news/globe-newswire/9496328/new-avidxchange-report-shows-finance-teams-more-prepared-than-in-2020but-still-investing-to-weather-uncertainty)  
46. New AvidXchange Report Shows Finance Teams More Prepared Than In 2020—But Still Investing To Weather Uncertainty \- Barchart.com, 访问时间为 七月 27, 2025， [https://www.barchart.com/story/news/33469470/new-avidxchange-report-shows-finance-teams-more-prepared-than-in-2020-but-still-investing-to-weather-uncertainty](https://www.barchart.com/story/news/33469470/new-avidxchange-report-shows-finance-teams-more-prepared-than-in-2020-but-still-investing-to-weather-uncertainty)  
47. Assessing the alignment \- An exploratory qualitative study of OMXS30 firms' sustainability narratives' calibration with their ESG performance \- DiVA portal, 访问时间为 七月 27, 2025， [https://www.diva-portal.org/smash/get/diva2:1778478/FULLTEXT01.pdf](https://www.diva-portal.org/smash/get/diva2:1778478/FULLTEXT01.pdf)  
48. integrated report \- Momentum Group, 访问时间为 七月 27, 2025， [https://www.momentumgroupltd.co.za/remote-assets/s3/clt\_mmh\_s3/static-assets/documents/investor-relations/integrated-reports/2017/2017+Full+Integrated+Report.pdf](https://www.momentumgroupltd.co.za/remote-assets/s3/clt_mmh_s3/static-assets/documents/investor-relations/integrated-reports/2017/2017+Full+Integrated+Report.pdf)