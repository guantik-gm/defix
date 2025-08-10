

# **Equilibria Finance (EQB)：一份机构级尽职调查报告**

## **第 1 节：执行摘要**

### **1.1. Equilibria Finance 概要**

Equilibria Finance (equilibria.fi) 是一个构建在 Pendle Finance 之上的去中心化金融（DeFi）协议，其核心定位是作为 Pendle 生态系统的收益和治理抽象层 1。该协议旨在通过聚合 vePENDLE（投票托管 PENDLE）的投票权，为 Pendle 的流动性提供者（LPs）和 PENDLE 代币持有者实现收益最大化 4。通过其精心设计的机制，Equilibria 允许 LPs 在无需自己持有 vePENDLE 的情况下获得更高的 PENDLE 奖励，同时为 PENDLE 持有者提供一种名为 ePENDLE 的流动性质押衍生品，从而释放其资本的流动性并赚取额外收益。

### **1.2. 核心投资论点 (看涨 vs. 看跌)**

* **看涨情景：** Equilibria 有潜力成为快速增长的 Pendle 生态系统中的“Convex”，通过其在收益增强和治理贿选市场中的核心地位捕获巨大价值。其主要竞争对手 Penpie 近期因严重的安全漏洞而失败，为 Equilibria 提供了一个千载难逢的市场整合机会，有望实现“赢家通吃”的局面。  
* **看跌情景：** 该协议的成功完全依赖于 Pendle Finance，这构成了其最大的系统性风险。同时，其原生代币 EQB 存在极端的流动性不足问题，使其价格极易受到操纵且不适合大规模资金部署。Penpie 被盗事件凸显了此类协议固有的智能合约风险，任何类似事件都可能对 Equilibria 造成致命打击。

### **1.3. 关键发现与风险总结**

本报告的关键发现包括：Equilibria 的原生代币 EQB 拥有极高的质押率（超过流通供应量的 80%），这表明现有持有者具有高度信心，但也造成了严重的流动性短缺。协议本身已实现可观的年化收入，证明了其商业模式的有效性。然而，其极低的日交易量构成了重大风险。安全方面，尽管协议经过了多家知名机构的审计，但其竞争对手的遭遇警示我们，审计并不能完全消除智能合约风险。

### **1.4. 最终投资评级与建议概览**

综合评估后，本报告将 Equilibria (EQB) 评定为 **“投机性买入”** 级别，该评级主要针对具备高风险承受能力、深刻理解 DeFi 机制且寻求超额回报的专业投资者。对于风险偏好较低或需要高流动性的机构投资者，建议采取观望态度。报告将详细阐述多种投资策略，包括直接购买并质押 EQB、参与流动性挖矿以及利用其贿选市场等，并为不同类型的投资者提供具体的操作建议。

## **第 2 节：协议概述与核心机制**

### **2.1. Equilibria 简介：Pendle Finance 的收益抽象层**

Equilibria Finance 的根本目标是作为 Pendle Finance 的一个增效层，它通过利用 veToken（投票托管代币）和增益收益模型，为 Pendle 用户提供增强的收益策略 1。作为一个专为 PENDLE 持有者和流动性提供者设计的平台，Equilibria 致力于通过其独特的机制简化收益优化过程，并最大化用户利润 4。该协议并非局限于单一区块链，而是在以太坊、Arbitrum、BNB Chain、Base 等多条链上进行了部署，显示了其多链发展的战略意图和广泛的生态系统布局 3。

### **2.2. “Pendle Wars” 背景：vePENDLE 的竞争驱动**

Equilibria 的崛起并非孤立现象，而是被称为“Pendle Wars”的更广泛竞争格局的一部分 7。这场“战争”的核心是像 Equilibria 及其主要竞争对手 Penpie 这样的协议，争相积累尽可能多的 vePENDLE 7。vePENDLE 是通过锁定 PENDLE 代币获得的治理代币，持有它意味着拥有对 Pendle Finance 流动性挖矿奖励（即 PENDLE 排放）分配的投票权。

积累 vePENDLE 的协议能够将其投票权引导至自身的流动性池，从而为这些池中的 LPs 提供更高的 PENDLE 奖励。这种增益效应会吸引更多的 TVL（总锁仓价值）流入，而更多的 TVL 又能为协议带来更多收入，进而有更多资金去获取更多的 PENDLE。这就形成了一个强大的正向飞轮效应。这种模式在 DeFi 领域已有先例，例如围绕 Curve 的“Curve Wars”（以 Convex 为主导）和围绕 Balancer 的“Balancer Wars”（以 Aura 为主导），历史经验表明，这类竞争最终往往会形成“赢家通吃”或寡头垄断的市场结构 7。

### **2.3. 双代币系统**

Equilibria 的核心机制围绕两个关键代币构建：ePENDLE 和 EQB。

#### **2.3.1. ePENDLE：PENDLE 的流动性质押衍生品**

PENDLE 持有者可以在 Equilibria 平台上以 1:1 的比例将其 PENDLE 兑换为 ePENDLE。这个过程是单向且不可逆的，但用户可以在去中心化交易所（DEX）上将 ePENDLE 换回 PENDLE 1。Equilibria 会将收集到的 PENDLE 永久锁定，以换取最大期限的 vePENDLE，从而最大化其在 Pendle 生态系统中的治理影响力 7。

对于用户而言，持有 ePENDLE 有多重好处。首先，它是一种流动性资产，避免了直接锁定 PENDLE 长达两年的资本效率低下问题。其次，ePENDLE 持有者可以分享协议的部分收入（包括 PENDLE 和 EQB 奖励），并且可以质押 ePENDLE 以获得额外的收益 1。ePENDLE 本身作为一个独立的代币，拥有自己的市值，约为 1880 万美元 10。

#### **2.3.2. EQB：原生治理与效用代币**

EQB 是 Equilibria 协议的原生治理代币 1。其核心效用在于通过锁定它来获得

vlEQB（投票锁仓 EQB）。持有 vlEQB 的用户不仅可以分享协议的大部分收入，还获得了协议的治理权——即投票决定 Equilibria 所持有的庞大 vePENDLE 票权应投向哪些 Pendle 流动性池 1。

### **2.4. 关键利益相关者的价值主张**

Equilibria 为生态系统中的不同参与者提供了明确的价值：

* **对于 Pendle 流动性提供者 (LPs)：** LPs 可以将其在 Pendle 上的 LP 代币存入 Equilibria，即使他们自己不持有任何 vePENDLE，也能获得被增益的 PENDLE 奖励。此外，他们还会获得额外的 EQB 代币作为激励 1。这极大地降低了获取高收益的门槛。  
* **对于 PENDLE 代币持有者：** 他们可以通过将 PENDLE 转换为 ePENDLE 来获得流动性，同时赚取协议收入分成，避免了长期锁仓带来的机会成本 4。

深入分析可以发现，Equilibria 的整个价值体系是衍生性的。它是一个“元协议”，其成败完全取决于底层协议——Pendle Finance 的成功与发展。这一事实意味着，投资 EQB 不仅仅是投资 Equilibria 这个项目本身，更是一种对 Pendle 未来的高 Beta 杠杆押注。如果 Pendle 协议失败、停滞或遭受攻击，Equilibria 的 TVL、收入和代币价值将随之崩溃，因为它失去了存在的根本理由。因此，任何对 EQB 的看涨分析都必须建立在对 PENDLE 长期看好的基础之上。这种深度的依赖性是该协议面临的最重要的系统性风险。

## **第 3 节：深入解析：vlEQB 质押、治理与贿选机制**

### **3.1. vlEQB (投票锁仓 EQB) 机制**

vlEQB 是 Equilibria 治理和价值捕获的核心。用户通过锁定其持有的 EQB 代币来获得 vlEQB，这是参与协议治理和赚取收入分成的唯一途径 1。用户持有的

vlEQB 数量决定了其在每周投票中的权重，从而影响 Equilibria 庞大的 vePENDLE 资产的投票方向 9。

一个极为引人注目的数据是，EQB 的质押率非常之高。根据 DefiLlama 的数据，流通中的 EQB 有大约 79% 至 84% 被锁定为 vlEQB 2。这一数据强烈表明，当前的核心持有者对协议的未来抱有极大的信心和参与度，愿意放弃流动性以换取治理权和收益权。

### **3.2. 治理流程：引导 Pendle 的 Gauge 排放**

vlEQB 持有者的核心治理活动是每周参与投票，决定将 Equilibria 控制的 vePENDLE 投票权分配给哪些 Pendle 的流动性池（即 Gauge）9。这些投票直接决定了 Pendle 的 PENDLE 代币排放将流向何处，从而影响各个池子的年化收益率（APR）。

为了保证治理的透明度，协议提供了一个公开的 API 接口，允许任何人查询每周的投票结果。该接口的格式为 https://equilibria.fi/api/vote-info/\[week\]/\[Pendle Market LP contract address\]，其中 \[week\] 代表投票周期（Epoch），\[Pendle Market LP contract address\] 代表特定的池子合约地址 11。

### **3.3. 协议收入来源与分配**

Equilibria 通过其核心业务（为 LPs 提供收益增强服务）产生费用，这些费用构成了协议的收入 3。DefiLlama 的数据显示，该协议的收入相当可观，年化费用曾高达 934 万美元，对应的年化协议收入为 311 万美元 3。这表明协议已经找到了与其产品市场契合的有效商业模式。

协议收入被分配给三个主要的利益相关方：ePENDLE 质押者、使用增益服务的 LPs 以及 vlEQB 持有者 5。一份 Nansen 的研究报告具体指出了部分收入的分配比例：协议收入的 12.5% 分配给 ePENDLE 质押者，7.5% 分配给

vlEQB 持有者 7。这证实了

vlEQB 持有者有权直接分享协议的经营成果。

### **3.4. 贿选市场**

为了进一步激励治理参与，Equilibria 引入了贿选机制。该机制允许其他协议或大型 LP（“贿选者”）向 vlEQB 持有者提供“贿赂”（通常以稳定币或其他代币的形式），以换取他们将票投向特定的 Pendle 池 1。这为

vlEQB 持有者创造了除协议收入分成之外的第二层收益。

Equilibria 已经与成熟的贿选市场平台 Hidden Hand 进行了集成，并且其路线图明确指出，计划推出一个自营的、自助式的贿选市场 5。一个活跃的贿选市场的建立，对于提升持有

vlEQB 的价值至关重要。正如在 Curve/Convex 生态中所见，当对流动性引导的竞争加剧时，贿选收入可能远超协议本身的分成，成为治理代币持有者的主要收益来源 9。

这种机制设计背后存在着深刻的逻辑。一方面，极高的质押率虽然展示了社区的信心，但也创造了一个“流动性荒漠”。超过 80% 的代币被锁定 3，意味着市场上可供交易的 EQB 极少。结合其长期低于 10 万美元的日交易量 3，任何一笔稍大的买卖订单都可能导致剧烈的价格滑点。这使得 EQB 的价格处于一种脆弱的平衡状态，其稳定性完全依赖于少数“巨鲸”持有者的持续锁定。一旦其中一两个大户决定退出，可能会引发踩踏式抛售，对市场造成毁灭性打击。

另一方面，贿选市场是协议未来价值增长的真正引擎。vlEQB 的核心权力在于引导 PENDLE 的排放 9。对于希望在 Pendle 上建立流动性的新兴协议而言，获得这些排放是提供有竞争力的 APR 的关键。相比于自己购买并锁定大量的 EQB，直接贿赂

vlEQB 持有者是成本效益更高的方式。随着 Pendle 生态的繁荣，对 PENDLE 排放的竞争将日趋激烈，从而推高贿赂的价值。因此，vlEQB 持有者的长期总收益将是“协议收入分成”加上“贿选收入”的总和。后者具备巨大的增长潜力，使其成为 EQB 代币价值捕获的最重要催化剂。

## **第 4 节：财务与代币经济学分析**

### **4.1. EQB 代币经济学**

* **供应量：** EQB 代币的最大供应量和总供应量均为 1 亿枚 4。截至本报告撰写时，其流通供应量约为 3384 万枚 6。  
* **分配：** 尽管缺乏官方的详细分配图表，但现有信息提供了一些线索。一份对比 Equilibria 和 Penpie 的分析文章指出，Equilibria 将 45% 的代币用于激励 Pendle 的 LPs，另有 10% 用于流动性挖矿 16。这表明其代币分配严重倾向于生态系统的增长和 TVL 的吸引。此外，CoinMarketCap 提到项目有私募投资者，这意味着一部分代币已分配给早期支持者 4。

### **4.2. 链上指标分析 (TVL、费用、收入)**

* **总锁仓价值 (TVL)：** TVL 是衡量 DeFi 协议规模的关键指标。根据 DefiLlama 的数据，Equilibria 在所有链上的总 TVL 稳定在 1.4 亿至 1.5 亿美元之间 2。其 TVL 分布于多条链，其中以太坊占据最大份额，其次是 Base、Arbitrum 和 BSC 3。  
* **费用与收入：** 协议已证明其具有强大的创收能力。DefiLlama 的数据显示其年化费用一度达到 934 万美元，年化协议收入为 311 万美元 3。这表明其核心业务具有可持续性。  
* **市值/总锁仓价值比率 (MC/TVL)：** 该比率非常低，约为 0.09 17。在 DeFi 估值模型中，低 MC/TVL 比率通常被视为价值低估的信号，意味着协议相对于其管理的资产规模，自身市值较小。

### **4.3. 市场分析：价格表现、波动性与流动性**

* **价格：** EQB 当前价格在 0.37 美元至 0.40 美元区间波动 3。其历史最高价约为 1.18 美元，历史最低价约为 0.01 美元 3。从历史最低点至今，价格经历了超过 3500% 的惊人涨幅，显示出极高的波动性 17。  
* **市值：** 当前流通市值约为 1200 万至 1300 万美元，而完全稀释估值（FDV）则高达 3700 万至 3900 万美元 3。流通市值与 FDV 之间的巨大差距表明，仍有大量代币尚未进入市场，这构成了未来的通胀压力。  
* **流动性与交易量：** 这是该项目最令人担忧的方面。24 小时交易量持续处于极低水平，通常低于 10 万美元，有时甚至低至 2.6 万美元 3。其交易量/市值比率仅为 0.0022 左右，这是一个非常低的数字 12。交易主要集中在 DEX，占总交易量的 90% 以上，这表明在中心化交易所（CEX）上缺乏足够的流动性深度 3。

### **4.4. 交易所上架情况**

EQB 未在任何一家顶级 CEX（如 Binance、Coinbase、Kraken）上市交易 13。其主要交易场所是 Arbitrum 上的 Camelot 和 BSC 上的 PancakeSwap 等 DEX，以及 MEXC 等二线 CEX 4。其中，Camelot 上的 EQB/WETH 交易对是流动性最集中的市场 17。

### **4.5. 支持者与主要投资者**

项目的私募投资者包括 GBV Capital、Incuba Alpha Capital、Dewhales Capital，以及来自 OKX Ventures 和 Y2Z Ventures 的个人投资者 4。这些知名加密风投机构的参与为项目提供了一定程度的背书，但其代币的解锁时间表未知，可能构成未来的潜在抛压。

### **表 1：EQB 关键财务与代币经济学指标**

| 指标 | 当前数值 | 数据来源 |
| :---- | :---- | :---- |
| 价格 (USD) | \~$0.39 | 3 |
| 流通市值 (USD) | \~$13.2M | 3 |
| 完全稀释估值 (FDV) (USD) | \~$39.2M | 3 |
| 流通供应量 | \~33.84M EQB | 6 |
| 最大/总供应量 | 100M EQB | 4 |
| 24小时交易量 (USD) | \< $100k | 3 |
| 交易量/市值比率 | \~0.002-0.007 | 12 |
| 总锁仓价值 (TVL) (USD) | \~$140M | 3 |
| 市值/TVL 比率 | \~0.09 | 17 |
| EQB 质押率 (% of Circ. Supply) | \~79-84% | 2 |
| 年化协议收入 (USD) | \~$3.11M | 3 |

## **第 5 节：竞争格局：Equilibria vs. Penpie**

### **5.1. 正面对比分析**

Equilibria 与 Penpie 之间的竞争被业界称为“Pendle Wars” 7。这两个项目几乎在同一时间（2023年6月）启动，并迅速成为争夺 vePENDLE 主导权的两个主要竞争者 7。

* **核心指标对比：** 在竞争最激烈时，双方各有优势。数据显示，Equilibria 在锁定的 PENDLE 总量上有时略占上风，而 Penpie 则通过其 LP 激励吸引了更高的 TVL 7。专门用于追踪这场战争的 Dune 数据面板显示，双方在锁定代币数量和其流动性质押衍生品（ePENDLE vs mPENDLE）的汇率稳定性方面展开了激烈角逐 9。  
* **估值与市场偏好：** Nansen 的分析指出，与 Curve 生态的 Convex (CVX) 和 Balancer 生态的 Aura (AURA) 相比，Equilibria (EQB) 和 Penpie (PNP) 的相对估值都较低，这暗示着两者都有显著的增长空间 7。然而，在 Nansen 的报告发布时，其追踪的“聪明钱”（Smart Money）地址持有 PNP 的数量远超 EQB，表明当时更老练的投资者群体可能更倾向于 Penpie 7。

### **5.2. 战略差异**

* **代币经济学：** 两者在代币分配上存在明显差异。据报道，Equilibria 将 45% 的代币用于激励 Pendle LP，而 Penpie 则将 35% 用于流动性挖矿，另有 20% 用于其 IDO（首次 DEX 发行）16。这表明 Equilibria 的策略更侧重于直接补贴 TVL 的增长。  
* **收益策略：** 市场普遍认为，对于单纯的 PENDLE 质押者而言，Penpie 提供的收益更具吸引力；而对于流动性提供者来说，Equilibria 提供的额外 EQB 补贴则使其成为更优选择 16。这种差异化的收益结构使得用户可以根据自身策略进行选择。  
* **团队背景：** Penpie 是由 Magpie 团队孵化的子项目（subDAO）。Magpie 团队在“Wombat Wars”中积累了丰富的生态战争经验，这为其运营 Penpie 提供了宝贵的实战知识 16。相比之下，Equilibria 团队的背景没有明确与之前的某个“战争”协议相关联。

### **5.3. Penpie 被盗事件：系统性风险的案例研究**

2024年9月，Penpie 协议因其质押合约中的一个重入（Reentrancy）漏洞，遭受了毁灭性攻击，损失了价值约 2700 万美元的加密资产 23。攻击者通过创建虚假 Pendle 市场、利用闪电贷放大资金，并结合重入漏洞，成功耗尽了协议的部分资金 24。

事件发生后，Equilibria 团队迅速在社交媒体上发表声明，强调其自身资产安全，并指出其合约代码与 Penpie 不同 23。这一及时的沟通对于防止市场恐慌情绪蔓延和潜在的连锁反应至关重要。

### **5.4. 市场定位与“赢家通吃”潜力**

DeFi 领域的治理权战争，其最终结局往往趋向于垄断或寡头垄断 7。Penpie 的被盗事件虽然对整个 Pendle 生态系统是一个沉重打击，但从竞争角度看，它戏剧性地为 Equilibria 清除了最强大的对手。这为 Equilibria 提供了一个前所未有的机会，去巩固其市场地位，吸收流失的 TVL 和用户信心，并最终成为 Pendle 生态中无可争议的治理层领导者。

### **表 2：Equilibria (EQB) vs. Penpie (PNP) 竞争矩阵 (被盗前快照)**

| 指标 | Equilibria (EQB) | Penpie (PNP) | 分析/优胜者 |
| :---- | :---- | :---- | :---- |
| 总锁仓价值 (TVL) | \~$30M | \~$43M | Penpie |
| 总 PENDLE 锁定量 | 略高 | 略低 | Equilibria |
| 流通市值 | 较低 | 相对较高 | \- |
| 代币经济学 (LP激励) | 45% 分配给 LP | 35% 分配给流动性挖矿 | Equilibria (更直接) |
| PENDLE 质押者收益 | 较低 | 较高 | Penpie |
| LP 收益 | 较高 (因EQB补贴) | 较低 | Equilibria |
| 团队经验 ("战争"史) | 无明确记录 | 有 (Wombat Wars) | Penpie |
| "聪明钱"持仓 (Nansen) | 较少 | 显著较多 | Penpie |

注：数据基于 Nansen 及其他来源在 Penpie 被盗前的分析 7。

## **第 6 节：安全与风险评估**

### **6.1. 智能合约安全：审计与发现**

Equilibria 对其安全性给予了高度重视，其智能合约已经通过了 PeckShield 和 WatchPug 这两家行业内声誉卓著的审计公司的严格审查 1。这已成为任何严肃 DeFi 项目进入市场的标准流程。此外，项目方在其路线图中明确表示，会对新开发的功能进行持续审计，这表明他们具备长期的安全意识 5。

然而，必须强调的是，审计并非万无一失的保险。Penpie 的事后分析显示，尽管它也经过了审计，但一个在 2024 年 5 月引入的新功能重新带来了致命的漏洞，并最终被攻击者利用 28。这深刻地提醒投资者，过去的审计报告不能保证未来的绝对安全，持续的、全面的安全审查才是关键。

### **6.2. 运营安全**

在运营层面，Equilibria 采用了一系列措施来降低风险。协议的关键权限由一个 2/3 的多重签名钱包控制，这意味着任何重大操作都需要三位核心贡献者中的至少两位签名同意，这可以有效防止单点故障或内部作恶 1。多签的持有者为团队核心成员

doukooo、twopenny 和 Deepink 27。协议还部署了时间锁（Timelock）机制，确保任何对合约的重大更改都有一个延迟生效期，为社区提供了反应和审查的时间 1。

此外，Equilibria 设立了漏洞赏金计划（Bug Bounty Program），并计划与 Immunefi 等专业平台合作，以激励白帽黑客发现并负责任地披露潜在的安全漏洞，从而在漏洞被恶意利用前进行修复 1。

### **6.3. 系统性风险**

* **协议依赖性：** 如前文所述，Equilibria 的命运与 Pendle Finance 紧密相连。Pendle 的任何重大安全事件、经济模型失败或用户流失，都将直接对 Equilibria 构成生存威胁 7。  
* **传染风险：** Penpie 被盗事件是传染风险的完美例证。在一个高度细分的生态系统中，一个主要协议的崩溃会迅速侵蚀市场对所有同类协议的信心，可能引发大规模的资本外流（即“银行挤兑”），无论其他协议本身是否存在漏洞。Equilibria 在事件后的快速反应和透明沟通，是其成功抵御这波冲击的关键 23。

### **6.4. 经济风险**

* **ePENDLE 脱锚风险：** ePENDLE 的价值理论上应与 PENDLE 1:1 挂钩，但这种挂钩依赖于 DEX 上的流动性池来维持。如果发生大规模的恐慌性抛售，即大量用户试图同时将 ePENDLE 换回 PENDLE，流动性池可能会被耗尽，导致 ePENDLE 严重脱锚，给持有者带来巨大损失 9。团队已采取措施（如回购计划）来稳定挂钩 5。  
* **代币流动性风险：** EQB 代币极低的交易量是一个重大的经济风险。这使得大额资金难以在不造成严重价格滑点的情况下进出，增加了交易成本和市场操纵的风险 3。  
* **通货膨胀压力：** 目前仅有约 34% 的 EQB 代币在流通，未来用于流动性挖矿和其他激励措施的代币释放，将对市场构成持续的抛售压力，可能抑制代币价格的上涨 4。

### **6.5. 开发与团队风险**

* **开发活跃度：** 根据 DefiLlama 的数据，该项目的代码提交频率和开发者数量相对较低（例如每周/每月仅有 1 次提交和 1 位开发者）3。虽然这并非衡量开发进度的完美指标，但可能暗示其开发团队规模较小。  
* **团队匿名性：** 项目核心团队成员均使用化名（如 Syou, doukooo, twopenny, Deepink）进行运营 27。虽然这在 DeFi 领域很常见，但与拥有公开身份创始人的项目相比，匿名团队在问责制方面存在天然的风险。

### **表 3：综合风险评估矩阵**

| 风险类别 | 具体风险 | 描述 | 概率 | 影响 | 缓解因素 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **智能合约风险** | 重入/逻辑漏洞 | 类似 Penpie 的漏洞可能存在于代码中，导致资金被盗。 | 中 | 高 | 多家知名机构审计、漏洞赏金计划、持续审计承诺。 |
| **系统性风险** | 依赖 Pendle | Equilibria 的价值完全附属于 Pendle，Pendle 的失败即是其失败。 | 低 | 极高 | Pendle 自身是所在赛道的领导者，基本面稳固。 |
|  | 竞争对手传染 | 同生态主要协议被攻击，引发对 Equilibria 的信心危机。 | 中 | 高 | 团队在 Penpie 事件中反应迅速，有效沟通，建立了市场信任。 |
| **经济风险** | ePENDLE 脱锚 | 市场恐慌导致 ePENDLE 兑换 PENDLE 的流动性枯竭。 | 中 | 高 | 协议有稳定挂钩的机制，如回购计划。 |
|  | EQB 流动性枯竭 | 极低的交易量使大额交易无法执行，价格脆弱。 | 高 | 高 | 极高的质押率是主因；未来上架更多 CEX 或可缓解。 |
|  | 通货膨胀 | 剩余 66% 的代币将在未来逐步释放，形成持续抛压。 | 高 | 中 | 协议收入和贿选市场的增长可能吸收部分抛压。 |
| **运营风险** | 多签被攻击 | 2/3 多签持有者的私钥被盗，导致协议控制权丧失。 | 低 | 极高 | 多签机制本身分散了风险；时间锁提供了反应窗口。 |
|  | 团队风险 | 匿名团队存在跑路或放弃项目的可能性。 | 低 | 极高 | 协议已稳定运行超过一年，并持续开发和社区互动。 |

## **第 7 节：社区、社交情绪与项目路线图**

### **7.1. 社交媒体影响力分析**

* **Twitter：** Equilibria 的官方 Twitter 账号为 @Equilibriafi 5。对其近期活动的分析显示，该账号非常活跃，通常每日发布多条推文 30。内容涵盖了项目公告、合作伙伴关系、社区互动（例如征求反馈）、以及关于其平台和 Pendle 生态系统的教育性内容。  
* **Discord：** 官方 Discord 服务器的链接出现在其 Arbitrum 治理提案等多个官方渠道中 5。值得注意的是，该服务器似乎与一个名为“Genshiro”的项目共享 31，这可能会给新用户带来一些困惑。  
* **治理论坛：** 团队是 Arbitrum 治理论坛的活跃参与者，他们提交了详细的激励计划提案（如 STIP 和 LTIPP），并积极与社区成员互动，回应他们的反馈和质疑 5。

### **7.2. 社区参与度和情绪**

团队通过治理论坛等渠道积极寻求社区的意见和建议，显示出对社区治理的重视 27。如前所述，极高的

vlEQB 质押率也从侧面反映了一个忠诚且看涨的核心社区的存在。虽然需要更广泛的社交媒体情绪分析，但从现有信息来看，Equilibria 拥有一个专注且参与度高的社区。

### **7.3. 团队构成与公开互动**

项目团队以匿名形式运作。在 Arbitrum 论坛中确认的核心成员化名包括 Syou（项目联系人）、doukooo（产品架构师）、twopenny（产品开发）和 Deepink（战略负责人）27。团队自称由“对 veToken 模型有深刻理解、并有成功开发和运营 DeFi 项目经验的热情爱好者”组成 5。自 2023 年 6 月以来，他们成功启动并持续维护协议的运行，证明了其执行能力 5。

### **7.4. 公开路线图与未来催化剂分析**

Equilibria 在其提交给 Arbitrum 的提案中详细阐述了其发展路线图 5。

* **已完成的里程碑：**  
  * 在多个主流区块链（Ethereum, Arbitrum, BSC 等）上成功部署。  
  * 完成了 Peckshield 和 WatchPug 的安全审计。  
  * 与 Maverick (DEX) 和 Hidden Hand (贿选市场) 等协议集成。  
  * 推出了 ePENDLE 自动复投器和投票委托等提升用户体验的功能。  
* **未来计划与关键催化剂：**  
  * **推出自营的自助式贿选市场：** 这是最重要的未来催化剂。一个高效、易用的贿选市场将直接提升 vlEQB 的收益和核心效用，从而吸引更多 EQB 的购买和锁定需求。  
  * **开发 YT/PT 限价单功能：** 这将丰富 Pendle 生态的交易工具，吸引更多高级用户。  
  * **在更多交易所上架 EQB：** 解决当前严重的流动性问题是当务之急。  
  * **部署到更多的 Layer 2 网络：** 扩大协议的覆盖范围和用户基础。

## **第 8 节：投资论点与战略建议**

### **8.1. 看涨情景**

* **成熟的商业模式：** Equilibria 在一个持续增长的细分市场（收益率交易）中，拥有一个已经得到验证并能产生可观收入的商业模式。  
* **垄断潜力：** “Pendle Wars”的竞争动态，加上其主要竞争对手 Penpie 的意外出局，为 Equilibria 创造了一个实现对 Pendle 治理层“赢家通吃”式垄断的绝佳机会。  
* **潜在的供应冲击：** 极高的质押率和极低的流通盘，意味着一旦协议成功捕获市场并吸引到新的大规模需求，可能会引发严重的供应短缺，导致价格出现抛物线式上涨。  
* **贿选市场催化剂：** 即将推出的原生贿选市场将为 vlEQB 持有者增加一个强大且可持续的收益来源，这将直接提升购买和锁定 EQB 的吸引力。

### **8.2. 看跌情景**

* **高风险的杠杆押注：** 协议是 Pendle Finance 的高 Beta 衍生品，完全继承了后者的所有风险。对 Equilibria 的投资本质上是对 Pendle 的杠杆化投资。  
* **致命的智能合约风险：** Penpie 的被盗事件血淋淋地揭示了此类协议模型中存在的极端智能合约风险。任何对 Equilibria 的成功利用都可能是致命的。  
* **危险的非流动性：** EQB 代币的流动性极差，这使得任何需要及时退出头寸的投资者都无法参与。其价格非常脆弱，容易受到大户抛售或市场操纵的影响。  
* **通胀压力：** 大量未流通的代币将在未来逐步释放，对市场构成持续的抛售压力，可能会削弱价格的上涨动力。

### **8.3. 投资策略对比分析**

对于 Equilibria 生态，存在多种参与方式，每种方式对应不同的风险收益特征：

* **策略 1：直接购买并质押 EQB (vlEQB)：** 这是对协议成功的最高信念、最长期的押注。该策略能捕获协议收入和未来的贿选收益，但风险最高，需要承受代币价格波动和长期锁定的非流动性。  
* **策略 2：通过 Equilibria 的增益池进行流动性挖矿：** 这是一种风险较低的敞口获取方式。用户可以赚取 PENDLE 和 EQB 奖励，主要风险来自无常损失和底层 LP 资产的价格波动，而非直接的 EQB 价格风险。  
* **策略 3：转换 PENDLE 并质押 ePENDLE：** 主要针对已持有 PENDLE 的用户。与直接锁定 PENDLE 相比，此策略提供了流动性并能赚取额外的协议收入，但需承担 ePENDLE 的脱锚风险。  
* **策略 4：积极参与贿选市场：** 适用于高级用户。需要每周监控贿选报价并积极投票以最大化收益。这种主动管理策略可能带来高额回报。  
* **策略 5：开发者/集成者参与 (API驱动策略)：** 适用于开发者。利用投票 API 11 构建自动化的投票/贿选策略、数据面板或其他工具，可能通过这些工具赚取费用或优化个人收益策略。

### **8.4. 最终投资评级与可操作建议**

综合以上所有分析，本报告给予 Equilibria Finance (EQB) **“投机性买入”** 的投资评级。此评级具有严格的适用范围，建议如下：

* **对于高风险偏好/DeFi 原生投资者：** 可以考虑建立一个小的 vlEQB 投机性仓位，将其视为对一个可能“赢家通吃”项目的风险投资。由于流动性极差，仓位规模必须严格控制，并做好长期持有的准备。  
* **对于中等风险偏好/收益农户：** 参与协议的增益 LP 池是一种更为稳健的策略。这可以在不直接承担过多 EQB 代币价格风险的情况下，获得生态系统产生的可观收益。  
* **对于机构/低风险投资者：** 由于其极低的流动性、较小的市值和显著的系统性风险，该协议目前不具备大规模投资的条件。建议将其列入观察名单，待其市场深度、安全记录和交易所上市场所得到显著改善后再做评估。

### **表 4：投资策略对比与评级**

| 策略 | 描述 | 所需主要资产 | 主要风险 | 潜在回报 | 复杂程度 | 分析师评级 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **vlEQB 质押** | 购买并锁定 EQB，参与治理并赚取协议收入和贿赂。 | EQB | EQB 价格波动、非流动性、智能合约风险 | 高 | 低 | B- |
| **增益 LP 挖矿** | 将 Pendle LP 存入 Equilibria，赚取 PENDLE 和 EQB 奖励。 | Pendle LP 代币 | 无常损失、底层资产风险 | 中 | 中 | B+ |
| **ePENDLE 质押** | 将 PENDLE 转换为 ePENDLE 并质押，赚取协议收入。 | PENDLE | ePENDLE 脱锚风险、机会成本 | 中 | 低 | B |
| **贿选市场参与** | 作为 vlEQB 持有者，接受贿赂并投票。 | vlEQB | 需要主动管理、贿选市场不活跃 | 中-高 | 高 | C+ |
| **开发者 API 集成** | 利用 API 构建自动化策略或工具。 | 技术能力、少量 Gas | 技术实现风险、策略失效 | 可变 | 极高 | N/A |

#### **引用的著作**

1. Equilibria: What is it and Why is it Important? \- GetBlock.io, 访问时间为 六月 24, 2025， [https://getblock.io/marketplace/projects/equilibria/](https://getblock.io/marketplace/projects/equilibria/)  
2. Equilibria \- DefiLlama, 访问时间为 六月 24, 2025， [https://defillama.com/protocol/equilibria?tvl=false\&events=false\&fees=true](https://defillama.com/protocol/equilibria?tvl=false&events=false&fees=true)  
3. Equilibria \- DefiLlama, 访问时间为 六月 24, 2025， [https://defillama.com/protocol/equilibria](https://defillama.com/protocol/equilibria)  
4. Equilibria Finance price today, EQB to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 六月 24, 2025， [https://coinmarketcap.com/currencies/equilibria-finance/](https://coinmarketcap.com/currencies/equilibria-finance/)  
5. \[Equilibria Finance\] LTIPP Application \- FINAL \- Arbitrum Governance Forum, 访问时间为 六月 24, 2025， [https://forum.arbitrum.foundation/t/equilibria-finance-ltipp-application-final/21402](https://forum.arbitrum.foundation/t/equilibria-finance-ltipp-application-final/21402)  
6. Equilibria Finance Price | EQB Price, Charts | Crypto.com, 访问时间为 六月 24, 2025， [https://crypto.com/price/equilibria-finance](https://crypto.com/price/equilibria-finance)  
7. The Pendle Wars: An Analysis of DeFi's Latest Battleground \- Nansen Research, 访问时间为 六月 24, 2025， [https://research.nansen.ai/articles/the-pendle-wars-an-analysis-of-de-fi-s-latest-battleground](https://research.nansen.ai/articles/the-pendle-wars-an-analysis-of-de-fi-s-latest-battleground)  
8. From Obscurity to DeFi Rising Star \- Pendle's Road to Attack \- Gate.com, 访问时间为 六月 24, 2025， [https://www.gate.com/learn/articles/from-obscurity-to-defi-rising-star-endles-road-to-attack/1292](https://www.gate.com/learn/articles/from-obscurity-to-defi-rising-star-endles-road-to-attack/1292)  
9. Pendle War (Penpie VS Equilibria), 访问时间为 六月 24, 2025， [https://dune.com/coumarin/pendle-war](https://dune.com/coumarin/pendle-war)  
10. Equilibria Finance ePENDLE Price \- CoinGecko, 访问时间为 六月 24, 2025， [https://www.coingecko.com/en/coins/equilibria-finance-ependle](https://www.coingecko.com/en/coins/equilibria-finance-ependle)  
11. Fetch the votes | Equilibria Finance, 访问时间为 六月 24, 2025， [https://docs.equilibria.fi/integration/fetch-the-votes](https://docs.equilibria.fi/integration/fetch-the-votes)  
12. EQBUSD chart \- Equilibria Finance \- TradingView, 访问时间为 六月 24, 2025， [https://www.tradingview.com/symbols/EQBUSD/](https://www.tradingview.com/symbols/EQBUSD/)  
13. Equilibria Finance Price Today | EQB to USD Live Price, Market Cap & Chart \- Binance, 访问时间为 六月 24, 2025， [https://www.binance.com/en/price/equilibria-finance](https://www.binance.com/en/price/equilibria-finance)  
14. Equilibria Finance Price｜EQB Live Chart, Market Cap and News Today \- BingX, 访问时间为 六月 24, 2025， [https://bingx.com/en/price/equilibria-finance/](https://bingx.com/en/price/equilibria-finance/)  
15. EQB to USD: Equilibria Finance Price in US Dollar | CoinGecko, 访问时间为 六月 24, 2025， [https://www.coingecko.com/en/coins/equilibria-finance/usd](https://www.coingecko.com/en/coins/equilibria-finance/usd)  
16. What is Penpie (PNP) \- Gate.com, 访问时间为 六月 24, 2025， [https://www.gate.com/learn/articles/what-is-penpie/707](https://www.gate.com/learn/articles/what-is-penpie/707)  
17. Equilibria Finance Price: EQB Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 六月 24, 2025， [https://www.coingecko.com/en/coins/equilibria-finance](https://www.coingecko.com/en/coins/equilibria-finance)  
18. Equilibria Finance Price: EQB Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 六月 24, 2025， [https://www.bybit.com/en/coin-price/equilibria-finance/](https://www.bybit.com/en/coin-price/equilibria-finance/)  
19. Convert Equilibria Finance (EQB) to Botswana Pula (BWP) | Coinbase Australia, 访问时间为 六月 24, 2025， [https://www.coinbase.com/en-au/converter/eqb/bwp](https://www.coinbase.com/en-au/converter/eqb/bwp)  
20. Equilibria Finance price today \- EQB price chart & live trends \- Kraken, 访问时间为 六月 24, 2025， [https://www.kraken.com/prices/equilibria-finance](https://www.kraken.com/prices/equilibria-finance)  
21. Equilibria Finance Price, EQB Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 六月 24, 2025， [https://www.coinbase.com/price/equilibria-finance](https://www.coinbase.com/price/equilibria-finance)  
22. Pendle War Intensify: PenPie And Equilibria Battle for Yield Farming Supremacy, 访问时间为 六月 24, 2025， [https://cryptorank.io/news/feed/fe315-205826-pendle-war-intensify](https://cryptorank.io/news/feed/fe315-205826-pendle-war-intensify)  
23. Pendle's Enhanced Yield Protocol Equilibria: Asset Security, contract code differs from Penpie | Bitget News, 访问时间为 六月 24, 2025， [https://www.bitget.com/news/detail/12560604189714](https://www.bitget.com/news/detail/12560604189714)  
24. Penpie Hack Analysis \- BlockApex, 访问时间为 六月 24, 2025， [https://blockapex.io/penpie-hack-analysis/](https://blockapex.io/penpie-hack-analysis/)  
25. Explained: The Penpie Hack (September 2024\) \- Halborn, 访问时间为 六月 24, 2025， [https://www.halborn.com/blog/post/explained-the-penpie-hack-september-2024](https://www.halborn.com/blog/post/explained-the-penpie-hack-september-2024)  
26. Major Cyber Attacks in Review: September 2024 \- SOCRadar® Cyber Intelligence Inc., 访问时间为 六月 24, 2025， [https://socradar.io/major-cyber-attacks-in-review-september-2024/](https://socradar.io/major-cyber-attacks-in-review-september-2024/)  
27. \[Equilibria\] \[FINAL\] \[STIP \- Round 1\] \- Arbitrum Governance Forum, 访问时间为 六月 24, 2025， [https://forum.arbitrum.foundation/t/equilibria-final-stip-round-1/17370](https://forum.arbitrum.foundation/t/equilibria-final-stip-round-1/17370)  
28. Penpie DeFi platform files reports with FBI, Singapore police after $27 million crypto theft, 访问时间为 六月 24, 2025， [https://therecord.media/penpie-defi-protocol-ethereum-stolen](https://therecord.media/penpie-defi-protocol-ethereum-stolen)  
29. Equilibria Finance (EQB) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 六月 24, 2025， [https://www.forbes.com/digital-assets/assets/equilibria-finance-eqb/](https://www.forbes.com/digital-assets/assets/equilibria-finance-eqb/)  
30. Equilibria (@Equilibriafi) / X, 访问时间为 六月 24, 2025， [https://twitter.com/Equilibriafi](https://twitter.com/Equilibriafi)  
31. Polka DeFiance'23: All $DOTs Connected\! by Equilibrium | Galxe Quest, 访问时间为 六月 24, 2025， [https://app.galxe.com/quest/equilibrium/GC4BsUZouT](https://app.galxe.com/quest/equilibrium/GC4BsUZouT)  
32. Equilibrium & Genshiro \- Discord, 访问时间为 六月 24, 2025， [https://discord.com/invite/nvRNM75pfx](https://discord.com/invite/nvRNM75pfx)