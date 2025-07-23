

# **f(x) Protocol 深度投资评估报告：波动率分解、杠杆创新与双生态系统机遇分析**

## **执行摘要**

本报告旨在为资深去中心化金融（DeFi）投资者提供一份关于 f(x) Protocol 的详尽、深入的投资评估。f(x) Protocol 是由信誉良好的 AladdinDAO 推出的一个创新性 DeFi 协议，其核心价值主张在于通过分解基础资产（如 stETH）的波动率，独创性地解决了稳定币三难困境（去中心化、稳定性、资本效率）。该机制同时创造出两种共生的资产：一种是低波动率的“浮动稳定币”（如 fETH, fxUSD），另一种是高波动率的杠杆代币（如 xETH, xPOSITIONs），后者为杠杆交易者提供了无须支付资金费率且清算风险极低的解决方案。

核心分析发现，f(x) Protocol 具备强大的基本面。其协议机制设计精巧，通过内部化的波动率转移实现了高度的资本效率。协议的财务数据显示出健康的费用产生能力，年化费用约 627 万美元，而其治理代币 FXN 的市销率（P/S Ratio）约为 5.9，在 DeFi 领域中处于相对较低的水平，暗示了潜在的价值低估。协议由经验丰富的 AladdinDAO 发起，核心成员 Sharlyn Wu 拥有传统金融与加密领域的双重背景，为项目增添了可信度。

然而，投资 f(x) Protocol 同样伴随着显著风险。首先，协议的技术复杂度高，且根据第三方风险评估，其系统仍处于“测试阶段”和“未成熟”状态，这意味着智能合约风险高于成熟的蓝筹协议。其次，其治理代币 FXN 的流通市值（约 400 万美元）远低于完全稀释估值（约 7000 万美元），未来存在巨大的代币解锁与抛压风险。此外，协议的稳定性高度依赖其核心抵押品（stETH）的价值稳定以及外部预言机的可靠性。

关于投资者提出的“创建 agent”的开发机会，本报告经过深入调研后澄清：该功能并非 f(x) Protocol 的一部分，而是属于另一个名为 **Virtuals Protocol** 的独立项目。由于 Virtuals 平台上存在一个名为“Ali for fx protocol by Virtuals”的 AI 代理项目，从而引发了混淆。本报告将专设章节，详细解析在 Virtuals 平台上创建 AI 代理的流程、成本与盈利模式，以全面解答投资者的疑问。

综合评估，f(x) Protocol 是一个高风险、高回报的早期投资标的。其创新机制和强大团队背景为其带来了巨大的增长潜力，但技术和代币经济模型的风险同样不容忽视。

**最终投资评级：建议（但需谨慎配置）**

**评级理由：** f(x) Protocol 的创新模式使其在拥挤的 DeFi 市场中脱颖而出，为稳定币和杠杆交易领域提供了独特的解决方案。对于能够理解并承受其早期技术风险和代币长线抛压的资深投资者而言，以当前估值参与，可能在未来获得超额回报。建议投资者将其作为投资组合中的一小部分投机性配置，并密切关注其安全审计进展和 V2 版本的市场采纳情况。

## **1.0 项目概述：f(x) Protocol**

### **1.1 f(x) Protocol 与 AladdinDAO 生态系统简介**

f(x) Protocol 是一个部署在以太坊上的去中心化金融（DeFi）协议，由 AladdinDAO 孵化并开发 1。AladdinDAO 自身定位为一个去中心化的价值发现网络，旨在通过群体智慧筛选出优质的 DeFi 项目，其生态系统还包括 Concentrator 和 CLever 等多个成功的 DeFi 项目，这表明其背后的团队具备连续构建和交付 DeFi 产品的经验和能力 2。

f(x) Protocol 的创立背景与 2023 年 3 月的银行业危机及主流稳定币 USDC 的脱锚事件密切相关 2。这些事件凸显了加密市场对一种真正去中心化、资本高效且与以太坊经济深度绑定的稳定资产的迫切需求。f(x) Protocol 正是为了应对这一挑战而生，旨在提供一种全新的解决方案，摆脱对传统美元稳定币的依赖 2。

### **1.2 核心创新：波动率的分解与重组**

f(x) Protocol 的核心机制堪称其最引人注目的创新：它将一种生息资产（例如 Lido 的 stETH）根据其波动性特征，分解为两种独立的代币 1。这一概念与 DeFi 领域的其他结构化产品有本质区别：

* **与 Pendle 的对比：** Pendle 协议将生息资产的本金（Principal Token）与未来收益（Yield Token）进行分离。而 f(x) Protocol 则是将资产本身的**价格波动性**进行分离 1。  
* **与 Ethena 的对比：** Ethena 的 USDe 通过在中心化交易所持有等量的 ETH 空头头寸来对冲其 ETH 抵押品的风险，从而实现稳定。而 f(x) Protocol 则通过其内部的双代币系统，将波动性从稳定资产转移至杠杆资产，形成一个闭环的、完全链上的对冲系统，无需依赖外部衍生品市场进行对冲 7。

这种“波动率分层”的机制创造了一个独特的共生关系：市场对高杠杆、高风险资产（x-Assets）的需求，直接驱动了低波动率、类稳定资产（f-Assets）的供应和规模扩张 8。这使得 f(x) Protocol 在理论上能够比传统的超额抵押稳定币（如 DAI）实现更高的资本效率。

## **2.0 协议机制深度解析**

### **2.1 核心方程与系统不变量**

f(x) Protocol 的所有操作都围绕一个核心的数学恒等式展开，这个公式确保了系统的价值守恒 1。

n×s=nf​×f+nx​×x  
公式中各变量的含义如下：

* n：存入协议的抵押品（如 stETH）的总数量。  
* s：抵押品的美元价格。  
* nf​：铸造出的 f-Asset（如 fxUSD）的数量。  
* f：f-Asset 的美元价格（净值）。  
* nx​：铸造出的 x-Asset（如 xPOSITION）的数量。  
* x：x-Asset 的美元价格（净值）。

这个不变量公式是整个协议的基石，它确保了在任何时间点，所有铸造出的 f-Asset 和 x-Asset 的总价值，严格等于协议中锁定的基础抵押品的总价值。这是一个自洽的、封闭的系统，所有价值和风险都在协议内部进行分配和转移 6。

### **2.2 双代币系统：f-Assets 与 x-Assets**

基于上述核心机制，用户存入抵押品后，可以选择铸造两种不同风险收益特征的资产。

* **f-Assets (如 fETH, fxUSD):** 这类资产被定义为“浮动稳定币”或低波动率资产 1。它们专为寻求稳定收益、规避高波动的用户设计。与 USDT 或 USDC 等硬锚定稳定币不同，f-Assets 并非与美元 1:1 锚定，而是会吸收一小部分底层抵押品的价格波动。例如，fETH 的设计目标是使其价格波动性（Beta）只有 ETH 的 10% (即 0.1) 9。fxUSD 是协议 V2 引入的更具扩展性的稳定币，它由协议内多个稳定-杠杆对产生的、与美元挂钩的稳定币储备 1:1 支持，使其更接近传统稳定币的使用体验 8。  
* **x-Assets (如 xETH, xPOSITIONs):** 这类资产是系统中的高波动率、高杠杆部分 1。它们吸收了 f-Assets 转移过来的绝大部分价格波动。xETH 是一种去中心化的杠杆化 ETH 多头头寸，其独特之处在于  
  **没有传统永续合约的资金费率，且几乎没有清算风险** 5。xPOSITIONs 则是 V2 版本的核心升级，为用户提供了高达 10 倍的  
  **固定杠杆**选项，使其功能更接近于中心化交易所的杠杆代币，但机制上更为去中心化和安全 1。

### **2.3 系统稳定性：再平衡机制与稳定池**

为了维持整个系统的稳健运行，特别是在市场剧烈波动时，f(x) Protocol 设计了两大核心稳定机制。

* **自动再平衡机制 (V2):** 这是 V2 版本的关键创新。当市场行情导致某个 xPOSITION 的杠杆率超过预设的安全阈值时（例如，ETH 价格下跌导致多头杠杆仓位的风险增加），协议会启动自动再平衡程序。该程序会燃烧与该仓位关联的部分 fxUSD，并出售少量底层抵押品（stETH）换回 fxUSD 或 USDC，然后将这些资金返还给稳定池。这个过程有效地降低了用户的杠杆水平，但并不会像传统杠杆交易那样直接清算用户的全部仓位。用户得以在市场下行时保留对基础资产的敞口，避免了被强制平仓的损失，这是协议的核心卖点之一 1。  
* **稳定池 (Stability Pool):** 稳定池在协议中扮演着至关重要的双重角色。首先，它是一个流动性缓冲池，为上述的自动再平衡机制提供必要的流动性，确保协议能够顺利执行去杠杆操作 6。其次，它也是 f-Asset（如 fxUSD）持有者的主要收益来源。用户可以将自己的 fxUSD 存入稳定池，作为协议的“保险基金”，作为回报，他们可以赚取协议产生的大部分费用以及其他激励，从而获得具有吸引力的稳定币收益 6。

### **2.4 协议进化：V1 到 V2 的关键升级**

f(x) Protocol 自 2023 年 8 月推出 V1 版本以来，经历了快速的迭代和发展，并于 2023 年 11 月发布了 V2 白皮书，引入了多项关键升级 1。

* **引入固定杠杆：** V1 的杠杆是浮动的，而 V2 推出了 xPOSITIONs，提供固定的、可预测的杠杆倍数，更符合主流交易者的使用习惯 11。  
* **优化铸币流程：** V2 引入了闪电贷来铸造 fxUSD，并允许用户通过 DEX 聚合器直接用法币稳定币（如 USDC）兑换 fxUSD，极大地简化了用户入门流程，降低了操作门槛 1。  
* **增强的稳定币模型：** 推出了 fxUSD，这是一个由多种 f-Asset 储备支持的、更具扩展性的稳定币，旨在与中心化稳定币竞争 8。

## **3.0 市场与财务表现分析**

### **3.1 链上协议健康度 (DeFi Llama 数据)**

通过分析 DeFi Llama 提供的链上数据，可以评估 f(x) Protocol 的当前健康状况和市场采纳度。

* **总锁仓价值 (TVL):** 截至最新数据，f(x) Protocol 的 TVL 约为 1.43 亿美元，且全部集中在以太坊主网 12。TVL 的稳步增长是衡量一个 DeFi 协议是否受到市场信任和欢迎的关键指标。  
* **费用与收入：** 协议的财务数据表现强劲。其年化总费用（Fees）约为 627 万美元，而年化协议收入（Revenue）约为 67.8 万美元 12。

这里需要深入剖析“费用”与“收入”之间的显著差异。根据协议机制，用户在开仓（0.3%）和平仓（0.1%）xPOSITIONs 时会支付费用 11。这些费用的绝大部分（约 70%-75%）会分配给稳定池的流动性提供者（即 f-Asset 储户）作为收益 8。因此，DeFi Llama 统计的“费用”很可能指代的是支付给这些流动性提供者的总金额。而“收入”则是指协议金库（Treasury）实际捕获的部分，这部分资金才是支撑其治理代币 FXN 价值的核心现金流。这种费用结构将大部分价值回馈给了流动性提供者，旨在激励用户为协议提供稳定性，是一种可持续的经济模型。

### **3.2 治理代币 (FXN) 市场分析**

FXN 作为协议的治理和价值捕获代币，其市场表现是评估项目投资价值的关键。

* **市场核心数据：** 根据 CoinGecko、CoinMarketCap 和 DeFi Llama 的综合数据，FXN 的当前价格在 60-80 美元区间波动，流通市值（Market Cap）在 400 万至 550 万美元之间，24 小时交易量约为 12 万美元 12。  
* **历史价格与波动性：** FXN 的历史最高价曾达到 219.95 美元，而历史最低价为 12.22 美元 13。巨大的价格波动区间反映了其作为早期、小市值 DeFi 治理代币的高风险特性。  
* **估值分析：**  
  * **流通市值 vs. 完全稀释估值 (FDV):** FXN 的流通市值（约 400 万美元）与其完全稀释估值（约 7000 万美元）之间存在巨大差距 13。这表明市场上有大量尚未流通的代币，这些代币在未来几年内会根据释放计划逐步解锁，可能对市场造成持续的抛售压力。这是投资 FXN 的一个核心长期风险。  
  * **市销率 (Price-to-Sales Ratio, P/S):** 我们可以通过 流通市值 / 年化协议收入 来计算其市销率。根据数据 $4,003,952 / $678,784 ≈ 5.9 12。对于一个处于成长期的 DeFi 协议而言，5.9 的市销率相对较低。这表明，如果协议能够维持或扩大其收入规模，其当前估值可能偏低。

### **3.3 协议发行资产表现 (fxUSD, xETH)**

* **fxUSD:** 作为协议的稳定币，其价格稳定性至关重要。数据显示，fxUSD 大部分时间在 0.9988 美元至 1.00 美元之间窄幅波动，表现出良好的锚定能力。尽管其历史最低价曾触及 0.9531 美元，表明在极端市场条件下存在脱锚风险，但总体上 peg 机制是有效的 10。其市值已达到约 7500 万美元，显示出了一定的市场采纳规模 10。  
* **xETH:** 作为杠杆资产，其价格天然具有高波动性。根据项目方自报告数据，其流通供应量约为 386 万枚 5。其主要交易市场集中在 Curve 等去中心化交易所 9。

### **3.4 竞争格局分析**

DeFi Llama 将 f(x) Protocol 归类于 CDP（抵押债务头寸）赛道，其竞争对手包括 Liquity (LUSD)、Curve (crvUSD) 等知名项目 12。然而，这种分类并不完全准确。

f(x) Protocol 的商业模式实际上是跨赛道的混合体。

* **与 CDP 协议的竞争：** 对于寻求稳定币的用户，f-Assets 与 Liquity 的 LUSD 和 Curve 的 crvUSD 存在竞争关系。f(x) 的优势在于其更高的资本效率。  
* **与杠杆/永续合约协议的竞争：** 对于寻求杠杆的用户，x-Assets 与 GMX、dYdX 等去中心化衍生品交易所存在竞争关系。f(x) 的核心优势在于提供了一种无资金费率、低清算风险的链上杠杆工具。

这种独特的“波动率分层”模型是其核心护城河。它并非简单地创造债务，而是对资产风险进行重新打包和分配。这使得 f(x) Protocol 能够同时满足两个不同市场的需求，这既是其巨大的潜在市场优势，也意味着它需要在两个高度竞争的赛道中同时证明自己。

## **4.0 FXN 治理代币经济学**

FXN 的代币经济学模型（Tokenomics）设计精良，旨在激励长期持有和深度参与，形成了强大的价值捕获飞轮。

### **4.1 效用、治理与收入分享**

* **核心功能：** FXN 是 f(x) Protocol 的治理代币，赋予持有者对协议未来发展的投票权 2。  
* **价值捕获：** FXN 的核心效用体现在其可以被“投票托管”（vote-escrowed, ve-locked）以换取 veFXN 2。veFXN 持有者不仅可以参与治理，还能分享协议的真实收益——协议金库收入的 75% 将被分配给 veFXN 持有者 8。此外，veFXN 还能提升用户在协议流动性池中的挖矿收益（boost），这为长期锁仓者提供了多重激励。

### **4.2 供应、分配与释放**

* **总供应量：** FXN 的最大供应量被设定为 200 万枚 13。  
* **初始分配：** 协议通过两轮公售释放了总供应量的 5% 2。  
* **长期激励：** 一个非常重要的部分是，总供应量的 49%（即 98 万枚 FXN）被预留用于未来 50 年的流动性激励。该激励的发放速率每年递减 10%，这是一个旨在确保协议长期可持续发展的、极具远见的释放计划 8。  
* **解锁计划 (Vesting):** 协议对早期投资者和团队的代币设有严格的解锁计划。第一年结束后，总共只有不到 33% 的代币被解锁，并且 AladdinDAO 团队的份额将被完全锁定 2。这在短期内缓解了抛压，但再次印证了前文提到的长期供应过剩风险。

### **4.3 veFXN 模型**

f(x) Protocol 采纳了由 Curve 开创并被业界广泛验证的 veToken 模型，以促进代币的长期锁定。

* **锁定机制：** 用户可以将 FXN 代币锁定 1 天至 4 年不等的时间，以获得 veFXN。锁仓时间越长，获得的 veFXN 数量越多，投票权和收益分享权重也越大。veFXN 的数量会随着锁仓时间的流逝而线性衰减 2。  
* **LP 代币锁定：** 除了直接锁定 FXN，协议还创新地允许用户锁定 80% FXN / 20% ETH 的流动性池（LP）代币来获取 veFXN 2。这一设计非常巧妙，它在激励用户为 FXN 提供深度流动性的同时，也赋予了他们治理权和收益权，实现了多方共赢。

## **5.0 综合风险与安全评估**

### **5.1 智能合约安全：审计历史与发现**

f(x) Protocol 对安全问题表现出积极的态度，但其作为早期项目，技术风险依然是首要考虑因素。

* **审计记录：** 协议已经完成了多轮智能合约审计，AladdinDAO 的官方 GitHub 也设立了专门的 audit-reports 代码库以公开审计报告，这体现了团队对透明度和安全性的重视 9。  
* **关键发现：** LlamaRisk 对 SECBIT 审计报告的摘要中提到了一些值得关注的问题，包括协议可能面临闪电贷攻击，攻击者可能利用该漏洞来窃取系统奖励或操纵清算机制 9。  
* **成熟度评估：** LlamaRisk 的结论明确指出，该协议“尚未达到成熟状态”，并且仍处于设有存款上限的“测试模式”（beta） 9。这是一个至关重要的风险信号。这表明，尽管团队在遵循安全最佳实践，但他们自己也认为系统尚未经过充分的实战检验，无法承受大规模资金的无限制涌入。因此，对于投资者而言，f(x) Protocol 的智能合约风险显著高于那些已经稳定运行多年的蓝筹 DeFi 协议。

### **5.2 协议特定风险**

* **脱锚风险 (De-Peg Risk):** fxUSD 的锚定并非绝对可靠。它依赖于稳定池的流动性和套利者的积极参与。在极端的市场崩盘情景下，如果大量用户同时恐慌性退出，稳定机制可能会被耗尽，从而导致 fxUSD 严重脱锚 11。其 0.95 美元的历史低点也证实了这一风险的客观存在 10。  
* **抵押品风险 (Collateral Risk):** 协议的价值根基在于其接受的抵押品，目前主要是 stETH 1。任何对 Lido 或 stETH 本身产生信任危机、导致 stETH 相对于 ETH 严重脱锚的事件，都将对整个 f(x) Protocol 构成系统性打击。  
* **预言机风险 (Oracle Risk):** 协议的正常运行依赖于 Chainlink 等外部预言机提供的价格数据。如果预言机出现故障、被操纵或更新延迟，将导致协议内部的价值计算出现偏差，可能引发错误的再平衡操作，甚至被攻击者利用来套利 9。  
* **复杂性风险 (Complexity Risk):** f(x) Protocol 的机制非常复杂，这增加了审计和风险评估的难度。复杂的系统往往可能隐藏着未被发现的攻击向量，同时也让普通用户难以完全理解其内在风险。

### **5.3 团队与治理风险**

* **团队背景：** 协议由 AladdinDAO 发起，核心贡献者之一 Sharlyn Wu 曾在招商银行国际和火币（HTX）担任高管，其深厚的传统金融和加密原生背景为项目提供了强大的信誉背书 1。在本次调研中，未发现任何关于核心团队存在欺诈或项目方跑路等不良行为的历史记录。  
* **治理中心化风险：** 尽管协议的长期目标是去中心化治理，但在早期阶段，FXN 代币的分配不可避免地集中在团队、早期投资者和协议金库手中 2。这意味着在短期内，协议的重大决策权仍然高度集中，存在一定的治理中心化风险。

## **6.0 社区与生态系统分析**

### **6.1 社交媒体表现与情绪**

* **官方渠道：** f(x) Protocol 在 Twitter、Telegram、Discord 和 Medium 等主流社交平台均设有官方账号，并保持着活跃的更新 13。其母组织 AladdinDAO 也拥有独立的社区渠道，为用户提供了多层次的交流平台 4。  
* **社区激励：** 协议积极推行“社区助推器”（Community Booster）计划，通过奖励 FXN 代币来激励社区成员创作有关协议的内容、传播信息，这是一种主动构建草根社区支持的有效策略 19。  
* **市场情绪：** 从近期的社交媒体讨论和新闻报道来看，市场对 f(x) Protocol 的情绪整体偏向积极和中立。讨论的焦点多集中在其创新的“零清算”机制在市场剧烈波动时的优异表现，这为其赢得了良好的口碑 11。

### **6.2 治理活动**

AladdinDAO 的官方论坛是协议治理的核心场所。其中，专为 f(x) Protocol 设立的改进提案（FIP）板块已有 19 个提案，这表明社区和团队在协议的迭代和优化方面保持着高度的参与度和活跃的沟通 21。

### **6.3 近期新闻与动态**

* **V2 版本发布：** 引入 xPOSITIONs 和 fxUSD 的 V2 版本是协议近期最重要的里程碑事件，标志着协议在可用性和可扩展性上迈出了关键一步 1。  
* **生态系统集成：** f(x) Protocol 正在积极寻求与其他 DeFi 项目的集成。例如，它已被列为 LayerZero 的全链同质化代币（OFT）应用之一，这预示着其未来向多链部署的战略方向 22。

## **7.0 投资机会与战略分析**

本节将详细阐述投资者可以通过哪些方式参与 f(x) Protocol 生态系统以获取回报，并对各种策略进行对比分析。

### **7.1 高收益 DeFi 策略**

* **稳定池挖矿 (Stability Pool Farming):** 这是相对风险较低的策略。投资者可以将 fxUSD 存入稳定池，为协议的再平衡机制提供流动性。作为回报，储户可以分享协议手续费收入的大头（xPOSITION 开平仓费用的 70%）以及可能的其他奖励 8。这是一种面向稳定币持有者的、获取真实收益（Real Yield）的有效方式。  
* **流动性提供 (Liquidity Provisioning):** 投资者可以在 Curve 等 DEX 上为 FXN/WETH 或 fxUSD/USDC 等交易对提供流动性。此举可以赚取交易手续费，并可能获得 FXN 代币作为流动性挖矿奖励。该策略的主要风险是无常损失（Impermanent Loss）10。  
* **杠杆交易 (Leveraged Trading):** 对于看好 ETH 价格走势的激进投资者，可以直接购买 xETH 或开立 xPOSITION 仓位，以获得高达 10 倍的杠杆。该策略的核心优势在于没有资金费率和极低的强制清算风险，相比传统永续合约具有显著的成本和安全优势 1。  
* **高级策略 (Delta 中性对冲):** 鉴于投资者的专业背景，构建 Delta 中性策略以赚取无风险（或低风险）收益是一个极具吸引力的选择。  
  * **策略构建逻辑：** Delta 中性策略的核心思想是通过对冲市场风险（Delta），来剥离和捕获资产的纯粹收益（Alpha）。f(x) Protocol 的双代币设计为构建此类策略提供了绝佳的工具。  
  * **方案 A (较稳健):** 投资者可以铸造或购买 f-Asset（如 fxUSD）。这类资产对 ETH 仍有微小的正 Delta 敞口。为了对冲这部分风险，投资者可以同时在另一个衍生品平台（如 GMX 或 dYdX）上开立一个等值的、小规模的 ETH 空头头寸。如此一来，投资者便可以在完全对冲 ETH 价格波动风险的同时，安心赚取来自 f(x) 协议稳定池的收益。  
  * **方案 B (更复杂):** 投资者可以铸造或购买杠杆化的 x-Asset（如 xPOSITION）。这将带来一个较大的 ETH 多头敞口。随后，投资者需要在外部衍生品市场上做空等量的 ETH，以实现 Delta 中性。该策略的目标是捕获 x-Asset 本身可能存在的激励收益，或利用不同平台间的资金费率差异进行套利。此策略虽然复杂且需要主动管理，但它代表了利用 f(x) Protocol 独特机制所能实现的最高阶玩法。

### **7.2 投资机会详细对比表**

下表旨在为投资者提供一个清晰、直观的决策框架，用以比较参与 f(x) Protocol 生态系统的不同投资策略。

| 策略 | 描述 | 主要资产 | 预期回报 (APR/APY) | 主要优势 | 主要风险/劣势 | 复杂程度 | 理想投资者画像 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **FXN 质押 (veFXN)** | 锁定 FXN 代币以获取 veFXN，参与治理并分享协议收入。 | FXN | 可变，取决于协议收入和 FXN 价格。 | 分享协议真实收入；治理权；LP 收益加速。 | FXN 代币价格波动；长期锁仓导致流动性差。 | 中等 | 协议的长期信仰者；寻求治理影响力的投资者。 |
| **fxUSD 稳定池挖矿** | 将 fxUSD 存入稳定池，为协议提供稳定性，赚取费用。 | fxUSD | DeFi Llama 显示平均 APY 约为 10-14% 12，但会浮动。 | 资产为稳定币，本金波动小；赚取真实收益。 | 智能合约风险；fxUSD 脱锚风险；机会成本。 | 低 | 稳健的稳定币收益农夫；风险规避者。 |
| **FXN/WETH LP** | 在 Curve 上为 FXN/WETH 提供流动性，赚取交易费和挖矿奖励。 | FXN, WETH | 可变，取决于交易量和 FXN 激励。 | 可能获得高额挖矿奖励；加深协议代币流动性。 | 无常损失风险；FXN 和 ETH 的双重价格波动风险。 | 中等 | 能够承受无常损失的资深流动性提供者。 |
| **xPOSITION 杠杆交易** | 开立高达 10 倍的 ETH 多头杠杆仓位。 | stETH (作为抵押品) | 回报为 ETH 价格涨幅的杠杆倍数。 | 无资金费率；极低的清算风险；高潜在回报。 | 市场方向判断错误的杠杆亏损；智能合约风险。 | 高 | 寻求高杠杆的激进型交易者；ETH 的坚定看多者。 |
| **Delta 中性对冲** | 结合使用 f/x-Asset 和外部衍生品，对冲市场风险以赚取纯收益。 | fxUSD/xPOSITION, ETH 衍生品 | 可变，取决于稳定池收益率和资金费率差。 | 理论上可实现市场中性，赚取低风险套利收益。 | 跨平台操作风险；智能合约风险；策略执行复杂。 | 非常高 | 精通 DeFi 和衍生品交易的专业量化投资者。 |

## **8.0 开发者生态系统机会：一个关键的澄清**

在深入研究投资者关于“创建 agent”的询问后，我们发现这是一个关键的混淆点，需要进行明确的区分和独立的分析。

### **8.1 区分 f(x) Protocol 与 Virtuals Protocol**

首先必须明确，投资者所提及的“创建 agent”功能，**并非 f(x) Protocol 的组成部分**。这一功能实际上属于一个名为 **Virtuals Protocol** 的独立项目 23。

之所以产生这种混淆，是因为在 Virtuals Protocol 平台上，存在一个由社区创建的、名为“**Ali for fx protocol by Virtuals**”的 AI 代理项目，其代币简称为 FX 26。这个 AI 代理项目本身的目标是利用 AI 来优化 DeFi 的挖矿策略 27。然而，它与 AladdinDAO 开发的 f(x) Protocol（代币为 FXN）是两个完全不同实体，分属不同的生态系统。

为了全面满足投资者的调研需求，下文将对 Virtuals Protocol 及其代理创建机会进行详细分析。

### **8.2 机会分析：在 Virtuals Protocol 平台创建代理**

对于具备开发背景的投资者而言，参与 Virtuals Protocol 的生态建设，创建自己的 AI 代理，是一个新兴的、充满想象空间的机遇。

* **平台概述：** Virtuals Protocol 是一个部署在以太坊 Layer2 网络 Base 上的去中心化平台，旨在让用户能够轻松地创建、共同拥有并通过代币化来货币化 AI 代理 23。  
* **创建流程：** 开发者可以通过 Virtuals 的官方应用（fun.virtuals.io）来启动一个新的 AI 代理。该过程被设计得非常简化，即使没有深厚的编程背景，也可以通过提供代理的名称、形象、代币简称以及详细的“角色性格描述”来完成创建 24。每个成功创建的代理都会在 Base 链上发行 10 亿枚与之绑定的专属 ERC-20 代币 25。  
* **相关成本：** 创建一个新的 AI 代理需要支付一定的平台原生代币 **$VIRTUAL**。这部分 $VIRTUAL 代币将被用于为新代理的代币建立初始的流动性池，并被协议锁定 24。  
* **创作者的盈利模式：**  
  1. **代币所有权：** 作为创作者，将获得新发行的 10 亿代理代币的一部分。如果该 AI 代理因其独特性或实用性而受到社区欢迎，其代币价格上涨，创作者将直接获益。  
  2. **交互费用（Inference Fees）：** 这是协议设想的长期核心盈利模式。用户与 AI 代理进行交互（如聊天、调用其功能等）需要支付少量费用，这些费用以 $VIRTUAL 代币结算。这部分收入将根据代币持有比例，分配给该代理的所有代币持有者，包括创作者 25。  
* **当前状态与风险：** 需要强调的是，Virtuals Protocol 仍然是一个非常早期的生态系统。其设想的收入分享模型大部分尚未完全上线。因此，当前市场上的大多数代理代币被视为具有极高投机性的“AI meme 币” 24。投资或创建此类代理，需要对该赛道的未来发展有极强的信念，并做好承担极高风险的准备。

## **9.0 结论与最终投资建议**

### **9.1 优势与劣势综合评估**

在对 f(x) Protocol 进行全面深入的分析后，可总结其核心优势与劣势如下：

**优势 (Strengths):**

* **创新与资本效率：** 其波动率分层机制是 DeFi 领域的一大创举，为稳定币和杠杆交易提供了资本效率极高的解决方案。  
* **强大的团队背景：** 由经验丰富的 AladdinDAO 发起，核心成员具备传统金融与加密领域的双重专业知识，增加了项目的可信度。  
* **清晰的收入模型：** 协议通过 xPOSITIONs 的开平仓手续费获得了明确且可观的收入来源，并设计了将大部分价值回馈给生态参与者的机制。  
* **精巧的代币经济学：** veFXN 模型深度绑定了治理权、协议收入和 LP 收益，为长期持有者创造了强大的激励闭环。  
* **主动的安全姿态：** 协议积极进行多轮审计并公开报告，显示出对安全的重视。

**劣势 (Weaknesses):**

* **技术与合约风险：** 协议机制复杂，且仍处于“测试”或“未成熟”阶段，智能合约风险是当前最大的隐患。  
* **代币抛压风险：** FXN 代币的完全稀释估值远高于流通市值，意味着未来存在巨大的、持续的解锁抛压。  
* **外部依赖风险：** 协议的稳健性高度依赖于其核心抵押品 stETH 的价格稳定以及 Chainlink 等外部预言机的安全性。  
* **锚定非绝对：** fxUSD 的稳定性依赖于可能在极端市场条件下失效的经济博弈机制，并非无风险。

### **9.2 最终投资论点与评级**

f(x) Protocol 代表了 DeFi 领域前沿的探索方向。它试图用一种极为精巧和创新的方式，同时解决稳定币和杠杆交易两个核心赛道的痛点。其背后的团队、经济模型设计以及初步的市场数据都展示了巨大的潜力。如果其 V2 版本能够成功获得市场的大规模采纳，并且其安全模型能够经受住时间的考验，那么以当前的估值来看，其治理代币 FXN 具备数十倍的增长空间。

然而，这种巨大的潜在回报是与同样巨大的风险并存的。投资者必须清醒地认识到，他们投资的是一个仍处于早期阶段、技术尚未完全成熟的协议。智能合约的潜在漏洞、代币经济的长期抛压以及对外部条件的依赖，都是可能导致投资严重亏损的真实风险。

因此，本报告对 f(x) Protocol 的投资评级为：

**建议 (Recommend)**，但建议投资者**谨慎配置**，并将其视为**高风险的投机性资产**。

此评级基于以下判断：对于寻求高增长潜力的资深 DeFi 投资者而言，f(x) Protocol 的创新性和不对称回报使其值得关注。但是，鉴于其风险状况，任何投资都应严格控制在个人风险承受能力范围之内，不应投入过大仓位。建议的投资策略是，以小额资金入场，密切跟踪协议的 TVL 增长、协议收入变化、后续的安全审计报告以及 V2 功能的实际用户反馈，再决定是否追加投资。

## **10.0 参考文献**

1

#### **引用的著作**

1. What is f(x) Protocol \- Gate.com, 访问时间为 七月 6, 2025， [https://www.gate.com/learn/articles/what-is-fx-protocol/6333](https://www.gate.com/learn/articles/what-is-fx-protocol/6333)  
2. F(x) Protocol's Tokenomics & Offer: A Calculated Journey towards ..., 访问时间为 七月 6, 2025， [https://medium.com/@protocol\_fx\_667/f-x-protocols-tokenomics-offer-a-calculated-journey-towards-success-b97487df41b9](https://medium.com/@protocol_fx_667/f-x-protocols-tokenomics-offer-a-calculated-journey-towards-success-b97487df41b9)  
3. Aladdin DAO \- Organizations \- IQ.wiki, 访问时间为 七月 6, 2025， [https://iq.wiki/wiki/aladdin-dao](https://iq.wiki/wiki/aladdin-dao)  
4. Aladdin DAO (ALD) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 七月 6, 2025， [https://www.forbes.com/digital-assets/assets/aladdin-dao-ald/](https://www.forbes.com/digital-assets/assets/aladdin-dao-ald/)  
5. f(x) Protocol Leveraged ETH price XETH \- CoinMarketCap, 访问时间为 七月 6, 2025， [https://coinmarketcap.com/currencies/fx-protocol-leveraged-eth/](https://coinmarketcap.com/currencies/fx-protocol-leveraged-eth/)  
6. f(x) Protocol (FXN): A comprehensive overview of a protocol that reinvents DeFi, 访问时间为 七月 6, 2025， [https://oakresearch.io/en/reports/protocols/fx-protocol-fxn-comprehensive-overview](https://oakresearch.io/en/reports/protocols/fx-protocol-fxn-comprehensive-overview)  
7. What Is The Best Stable Coin? \- Noam Levenson, 访问时间为 七月 6, 2025， [https://noamlevenson.medium.com/what-you-should-know-about-stable-coins-671ee0b29ae5](https://noamlevenson.medium.com/what-you-should-know-about-stable-coins-671ee0b29ae5)  
8. f(x) Protocol \- Decentralized Finance \- IQ.wiki, 访问时间为 七月 6, 2025， [https://iq.wiki/wiki/fx-protocol](https://iq.wiki/wiki/fx-protocol)  
9. Asset Risk Assessment: xETH & fETH \- LlamaRisk, 访问时间为 七月 6, 2025， [https://www.llamarisk.com/research/archive-llamarisk-asset-risk-assessment-xeth-feth](https://www.llamarisk.com/research/archive-llamarisk-asset-risk-assessment-xeth-feth)  
10. f(x) Protocol fxUSD Price: FXUSD Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/f-x-protocol-fxusd](https://www.coingecko.com/en/coins/f-x-protocol-fxusd)  
11. Is f(x) Protocol Building the Future of Stablecoins? \- Bankless, 访问时间为 七月 6, 2025， [https://www.bankless.com/read/whats-special-about-f-x-protocols-stablecoins-2](https://www.bankless.com/read/whats-special-about-f-x-protocols-stablecoins-2)  
12. fx Protocol \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/protocol/fx-protocol](https://defillama.com/protocol/fx-protocol)  
13. f(x) Protocol Price: FXN Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/f-x-protocol](https://www.coingecko.com/en/coins/f-x-protocol)  
14. f(x) Protocol Price: FXN Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 6, 2025， [https://www.bybit.com/en/price/fxn-token/](https://www.bybit.com/en/price/fxn-token/)  
15. f(x) Protocol Price Today \- Live FXN to USD Chart & Rate \- FXEmpire, 访问时间为 七月 6, 2025， [https://www.fxempire.com/crypto/fxn-token](https://www.fxempire.com/crypto/fxn-token)  
16. fx Protocol \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/protocol/fx-protocol?tvl=false\&fdv=false\&fees=false\&revenue=false\&medianApy=true\&usdInflows=false\&denomination=USD\&groupBy=cumulative](https://defillama.com/protocol/fx-protocol?tvl=false&fdv=false&fees=false&revenue=false&medianApy=true&usdInflows=false&denomination=USD&groupBy=cumulative)  
17. f(x) Protocol Price Today \- Current FXN Value to Euro & Live Chart \- Kriptomat, 访问时间为 七月 6, 2025， [https://kriptomat.io/cryptocurrency-prices/f-x-protocol-fxn-price/](https://kriptomat.io/cryptocurrency-prices/f-x-protocol-fxn-price/)  
18. AladdinDAO/audit-reports \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/AladdinDAO/audit-reports](https://github.com/AladdinDAO/audit-reports)  
19. It's Boostin' Time… for f(x) Protocol\! \- Medium, 访问时间为 七月 6, 2025， [https://medium.com/@protocol\_fx\_667/its-boostin-time-for-f-x-protocol-eefc259ee678](https://medium.com/@protocol_fx_667/its-boostin-time-for-f-x-protocol-eefc259ee678)  
20. f(x) Protocol (FXN) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 七月 6, 2025， [https://www.forbes.com/digital-assets/assets/fx-protocol-fxn-2/](https://www.forbes.com/digital-assets/assets/fx-protocol-fxn-2/)  
21. Aladdin Forum \- Aladdin DAO Forum, 访问时间为 七月 6, 2025， [https://forum.aladdin.club/](https://forum.aladdin.club/)  
22. Ecosystem \- LayerZero, 访问时间为 七月 6, 2025， [https://layerzero.network/ecosystem](https://layerzero.network/ecosystem)  
23. Virtuals Protocol Review 2025: Decentralized AI Agents \- Coin Bureau, 访问时间为 七月 6, 2025， [https://coinbureau.com/review/virtuals-protocol-review/](https://coinbureau.com/review/virtuals-protocol-review/)  
24. What Is Virtuals Protocol? How to Buy, Trade and Create AI Agents, 访问时间为 七月 6, 2025， [https://www.coingecko.com/learn/what-is-virtuals-protocol-how-to-buy-trade-and-create-ai-agents](https://www.coingecko.com/learn/what-is-virtuals-protocol-how-to-buy-trade-and-create-ai-agents)  
25. What Is Virtuals Protocol: The Project Turning Digital Characters into Revenue-Generating Assets | CoinMarketCap, 访问时间为 七月 6, 2025， [https://coinmarketcap.com/academy/article/what-is-virtuals-protocol-the-project-turning-digital-characters-into-revenue-generating-assets](https://coinmarketcap.com/academy/article/what-is-virtuals-protocol-the-project-turning-digital-characters-into-revenue-generating-assets)  
26. Ali for fx protocol by Virtuals FX Price \- CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/ali-for-fx-protocol-by-virtuals](https://www.coingecko.com/en/coins/ali-for-fx-protocol-by-virtuals)  
27. Ali for fx protocol by Virtuals (FX) Price, Charts & News \- Forbes, 访问时间为 七月 6, 2025， [https://www.forbes.com/digital-assets/assets/ali-for-fx-protocol-by-virtuals-fx/](https://www.forbes.com/digital-assets/assets/ali-for-fx-protocol-by-virtuals-fx/)  
28. What is Virtuals Protocol and the Luna AI agent? \- Backpack Learn, 访问时间为 七月 6, 2025， [https://learn.backpack.exchange/articles/what-is-virtuals-and-the-ai-agents](https://learn.backpack.exchange/articles/what-is-virtuals-and-the-ai-agents)  
29. f(x) Protocol Price, FXN Price, Live Charts, and Marketcap \- Coinbase Spain, 访问时间为 七月 6, 2025， [https://www.coinbase.com/en-es/price/f-x-protocol](https://www.coinbase.com/en-es/price/f-x-protocol)  
30. Explore Our Growing Partner Ecosystem \- Inverse Finance, 访问时间为 七月 6, 2025， [https://www.inverse.finance/ecosystem](https://www.inverse.finance/ecosystem)