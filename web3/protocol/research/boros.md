

# **Pendle Boros 深度投资评估报告：解构利率衍生品市场的未来**

## **I. 执行摘要**

### **评估结果综述**

本报告对 Pendle Finance 及其最新核心产品 Boros 进行了详尽的投资尽职调查。分析表明，Boros 并非 Pendle V2 的简单迭代，而是一次深刻的战略演进，标志着该协议从一个专注于链上现货收益率交易的利基市场领导者，向一个旨在服务于庞大加密衍生品市场的底层基础设施的雄心勃勃的转型。此举极大地扩展了协议的潜在市场规模 (Total Addressable Market, TAM) 和收入天花板，而其价值捕获机制被设计为完全流向 PENDLE 代币持有者。

### **核心机遇**

核心投资机遇在于 Boros 创造了一个前所未有的、可大规模交易和对冲永续合约资金费率的去中心化金融 (DeFi) 原生工具 \[1, 2\]。永续合约市场日交易量高达数千亿美元，其资金费率是其中最基础、最庞大但又最缺乏对冲工具的收益来源 \[3, 4\]。Boros 的出现直接满足了成熟交易者、做市商以及如 Ethena 等需要大规模对冲资金费率风险的协议的迫切需求 \[1, 5\]，为其提供了在 DeFi 领域内实现绝对控制和可预测性的资本高效解决方案 \[1\]。

### **关键风险**

项目面临的最突出风险集中在技术与安全层面。Boros 作为一个基于保证金交易、采用链上订单簿的复杂系统，其攻击面显著增大 \[6\]。本报告在调研中发现了一个**关键信息缺口**：尽管 Boros 官方网站声称已通过顶级安全公司 ChainSecurity 和 Spearbit 的审计 \[6\]，但在所有可公开访问的资料中，**均未能找到专门针对 Boros (V3) 智能合约的、可供验证的完整审计报告** \[7, 8, 9\]。在无法审查 Boros 合约的具体审计范围和发现的情况下，任何投资都将面临巨大的、未知的智能合约风险盲点。

### **投资论点与评级**

**投资评级：建议（高风险类别）**

**投资论点：** Pendle Boros 的长期愿景极具吸引力，其切入的资金费率衍生品市场潜力巨大，且价值捕获机制设计清晰有力，能将平台成功直接转化为 PENDLE 代币的价值。协议团队经验丰富，其 V2 产品久经市场考验，已成为 DeFi 领域的蓝筹项目 \[10\]。

然而，此“建议”评级必须附加“高风险”分类。主要风险源于 Boros 智能合约安全状况的**未经验证**。在缺乏可公开查阅的、针对性的安全审计报告的情况下，直接投入大量资本是不审慎的。因此，建议投资者采取分阶段的资本配置策略：

1. **初期配置**：通过购买 PENDLE 代币并质押为 vePENDLE，进行小规模的初期投资，以获得对该投资论点的敞口，并参与协议治理和收益分享。  
2. **追加配置**：将更大规模的资本配置作为**或有决策**，其触发条件为：**Pendle 团队公开发布针对 Boros 线上合约的、完整的、来自顶级审计公司的安全审计报告，且报告结论积极；同时，Boros 平台在主网上线后，能在一段合理的时间内（例如3-6个月）安全、稳定地运行，未发生重大安全事故。**

此策略旨在平衡 Boros 巨大的增长潜力和当前不明朗的智能合约风险，使投资者能够在风险可控的前提下，捕捉这一潜在的行业变革机遇。

## **II. 项目深度剖析：解构 Pendle Boros**

### **A. Pendle Finance 飞轮：V2 收益代币化机制入门**

要深刻理解 Boros 的战略意义，必须首先掌握其赖以建立的基础——Pendle V2 的核心机制。Pendle V2 是一个开创性的收益代币化协议，它成功地将未来收益这一抽象概念转化为可在链上自由交易的金融工具。

机制原理：  
Pendle V2 的核心功能是获取任何产生收益的资产（Yield-Bearing Asset），例如 Lido 的 stETH 或 Ethena 的 sUSDe，并利用其独创的 EIP-5115 标准化收益代币标准 (Standardized Yield, SY) \[11, 12\]，将其拆分为两个独立的代币：

* **本金代币 (Principal Token, PT):** 代表原始存入资产的本金部分。PT 不产生收益，但在到期日 (Maturity) 可以 1:1 赎回其对应的底层资产 \[13, 14\]。  
* **收益代币 (Yield Token, YT):** 代表原始资产在到期日之前产生的所有未来收益。YT 的持有者可以持续领取底层资产产生的收益，直到到期 \[11, 13\]。

核心用例：  
这种本金与收益的分离催生了三种核心策略：

1. **锁定固定收益：** 投资者可以在市场上以低于其内在价值（即底层资产价值）的折扣价购买 PT。持有 PT 至到期日并赎回底层资产，其间的价差即为投资者锁定的固定年化收益 (Fixed Yield) \[11, 15\]。这为 DeFi 市场带来了传统金融中“零息债券”的概念。  
2. **杠杆化收益/积分挖矿：** 当市场预期某项资产的未来收益（或空投积分）会很高时，投资者可以选择购买 YT。由于 YT 的价格远低于底层资产，购买 YT 相当于用较少的资金获得了底层资产全部的未来收益敞口，从而实现了对收益的杠杆化押注 \[11\]。这一功能在 EigenLayer 的“积分热潮 (Points meta)”中被发挥到极致，为 Pendle 带来了爆发式增长 \[16\]。  
3. **提供流动性：** 用户可以为 PT 和其对应底层资产的 SY 组成的交易池提供流动性。由于 PT 和 SY 的价格高度相关，Pendle 特别设计的 AMM 能够将无常损失 (Impermanent Loss, IL) 降至最低，尤其是在持有至到期时几乎可以忽略不计 \[15, 17\]。流动性提供者 (LP) 因此可以安心赚取交易费和 PENDLE 激励 \[18\]。

关键创新：  
Pendle V2 的技术护城河在于其专为收益代币交易设计的、具有时间衰减特性的自动做市商 (AMM) \[17, 18\]。该 AMM 能够理解并适应 PT 价值随时间推移而自然增长的特性，从而实现高效的流动性集中和低滑点交易。

### **B. Boros 登场：向杠杆化收益衍生品引擎的演进**

Boros 的推出并非一次增量更新，而是 Pendle 协议的一次范式转移。它标志着 Pendle 的战略重心从链上“现货收益率”交易，转向了一个更广阔、更复杂的领域——“收益率衍生品”交易。

战略转向：  
Boros（此前被称为 Pendle V3）的核心目标是交易永续合约的资金费率 (Funding Rates) \[1, 19\]。这些费率通常产生于中心化交易所 (CEX) 的链下市场，是加密世界中最庞大、最活跃的收益来源之一。协议名称“Boros”源于希腊语，意为“吞噬”，象征着其旨在“捕获并吞噬所有形式收益”的宏大战略 \[1, 20\]。  
巨大的潜在市场扩张：  
永续合约市场的日交易量高达 1500亿至2000亿美元，其体量远超现货收益市场 \[1, 2, 3, 21\]。然而，这个巨大的市场一直缺乏一个可扩展的、去中心化的对冲和投机工具。Boros 的目标就是填补这一空白，成为该市场的首个基础设施级解决方案，从而将 Pendle 的潜在市场规模提升数个数量级。  
目标用户：  
与 V2 吸引了大量零售和空投挖矿用户不同，Boros 的设计明确指向了更成熟、资本更雄厚的参与者：

* **专业交易员和做市商：** 他们可以利用 Boros 进行复杂的利率套利和方向性交易。  
* **加密基金：** 他们需要高效的工具来管理其投资组合的利率风险。  
* **DeFi 协议：** 最典型的例子是 Ethena。Ethena 的稳定币 USDe 的收益高度依赖于其空头永续合约头寸所收取的资金费率。Boros 为 Ethena 提供了对冲这种费率波动的完美工具，增强了其自身产品的稳定性和可持续性 \[1, 3, 5\]。

### **C. 核心机制：Boros 如何代币化并交易永续合约资金费率**

Boros 借鉴了 Pendle V2 的核心思想，但将其应用于一个全新的资产类别。

收益单元 (Yield Units, YU)：  
Boros 引入了一个新的概念——“收益单元 (YU)”，其结构与 V2 的 YT 类似 \[22, 23\]。每一个 YU 代表在一个固定的到期日之前，1 单位名义本金（例如 1 BTC 或 1 ETH）所能实现的累计资金费率收益 \[24\]。  
交易机制：  
用户可以通过交易 YU 来表达对未来资金费率走势的看法：

* **做多资金费率 (Long Funding Rate)：** 如果交易者预期未来的资金费率将上涨或维持高位，他可以选择“支付一个固定利率，来换取浮动的资金费率”。在 Boros 平台上，这通过**购买 YU** 实现。当实际收到的浮动资金费率高于购买 YU 时支付的固定成本时，交易者即可获利 \[6\]。  
* **做空资金费率 (Short Funding Rate)：** 如果交易者预期资金费率将下跌，他可以选择“支付浮动的资金费率，来换取一个固定利率”。这通过**卖空 YU** 实现。当支付的浮动费率低于收到的固定利率时，交易者获利。这对于需要对冲资金费率支付成本的永续合约多头持有者尤其有用 \[6\]。

初始启动：  
Boros 首发于 Arbitrum 网络，初期支持 BTC 和 ETH 在主要衍生品交易所（如币安）的资金费率交易 \[22, 23\]。为了在早期阶段优先保证风险控制和系统验证，平台对未平仓合约量（每市场 1000 万美元）和杠杆率（1.2倍）进行了限制 \[23, 24\]。

### **D. 技术架构：链上订单簿、保证金系统与预言机依赖**

Boros 的技术实现与 V2 的 AMM 模型截然不同，这体现了其服务于不同市场和用户的设计哲学。

完全链上订单簿 (Fully On-Chain Orderbook)：  
Boros 采用了一个完全在链上运行的订单簿系统 \[6\]。与 AMM 相比，订单簿模式能为专业交易者提供更精细的定价控制和更透明的交易体验，所有订单的撮合与结算都在链上完成，实现了去信任化。然而，链上订单簿的技术实现更为复杂，对区块链性能和 Gas 成本也提出了更高的要求。  
保证金交易系统 (Margin Trading)：  
Boros 是一个基于保证金的交易系统，允许用户进行杠杆交易 \[19, 25\]。其设计目标是实现极高的资本效率，官方声称在对冲场景下，资本效率可提升高达 1000 倍 \[6, 26\]。这意味着用户可以用少量保证金控制大量的名义本金头寸。然而，这也引入了清算风险。关于其具体的清算引擎、维持保证金要求等关键机制，在现有公开文档中缺乏详尽的技术说明。  
预言机依赖 (Oracle Dependency)：  
由于资金费率数据源自链下的中心化交易所，Boros 的正常运行严重依赖一个安全、可靠、高频的预言机系统，将这些数据喂送到链上 \[16, 21\]。这构成了协议的一个核心外部依赖和潜在的单点故障风险。如果预言机数据被操纵、延迟或中断，将对整个 Boros 系统的资产安全构成致命威胁。在已有的资料中，并未明确指出其使用的具体预言机提供商，这是尽职调查中一个亟待澄清的关键问题。  
这种从链上原生收益到链下衍生品收益的跨越，以及从 AMM 到链上订单簿的架构转变，清晰地展示了 Pendle 团队的战略意图。他们不仅满足于在 DeFi 内部进行创新，更致力于构建连接链下金融世界与链上金融世界的桥梁。Boros 的成功与否，将不仅仅是 Pendle 一个项目的成败，更可能成为 DeFi 是否能真正服务于更广阔金融市场的一次重要实践。它将 Pendle 的叙事从一个“DeFi 收益率应用”提升到了一个“链上利率交易总台”的高度，类似于传统金融世界中的芝加哥商品交易所 (CME) 或摩根大通的利率衍生品部门所扮演的角色 \[2, 4\]。这一宏大愿景极大地提升了项目的估值想象空间，但同时也带来了同等量级的执行风险和技术挑战。

## **III. 市场与财务表现分析**

### **A. 协议健康度指标：TVL、交易量与收入的数据透视**

Pendle 协议的链上数据展现了其作为 DeFi 蓝筹项目的强劲基本面。

* **总锁仓价值 (Total Value Locked, TVL):** 协议经历了爆发式增长，TVL 峰值一度超过 70 亿美元 \[27\]。根据 DeFiLlama 的最新数据，当前 TVL 稳定在 73.17 亿美元的高位 \[28\]。其中，绝大部分（约 69 亿美元）集中在以太坊主网，这表明其核心用户群体和资产主要位于以太坊生态 \[28\]。  
* **交易量 (Trading Volume):** 协议的交易活动异常活跃。仅 DEX 的 30 天交易量就达到了 48.99 亿美元 \[28\]。高交易量是协议收入的直接来源，是衡量其市场吸引力和网络效应的关键指标。  
* **费用与收入 (Fees & Revenue):** Pendle 协议展示了强大的盈利能力。其年化总费用产生能力约为 4813 万美元，而年化协议收入（即分配给协议和代币持有者的部分）高达 4733 万美元 \[28\]。这揭示了一个极其高效的收入捕获模型，协议收入占总费用的比例接近 98%，远高于许多其他 DeFi 协议。

一个关键的发现是，目前所有公开数据源（包括 DeFiLlama）都未能提供针对 Boros (V3) 的独立、细分数据 \[28\]。所有报告的 TVL、交易量和收入均为整个 Pendle 协议的汇总数据。这使得外部观察者无法独立评估 Boros 在上线初期的具体市场表现和吸引力，只能将其视为整个协议未来增长的潜在驱动力。

### **B. PENDLE 代币分析：价格表现、市值与链上指标**

PENDLE 代币是整个生态系统的价值核心，其市场表现和链上动态反映了投资者对协议未来的预期。

* **价格与市值：** 截至报告撰写时，PENDLE 代币价格约为 3.98 美元，对应流通市值约 6.61 亿美元，完全稀释估值 (FDV) 约为 11 亿美元 \[29\]。其历史最高价为 7.50 美元，于 2024 年 4 月创下 \[29\]。  
* **代币供应与释放：** 当前流通供应量约为 1.66 亿枚，而最大总供应量为 2.815 亿枚 \[29\]。代币的释放计划遵循一个通缩模型：每周的释放量减少 1.1%，直至 2026 年 4 月。此后，协议将进入每年 2% 的永久通胀阶段，用于持续激励 \[15\]。  
* **早期投资者与团队份额已完全解锁：** 这是一个极其重要的积极信号。所有分配给团队和早期投资者的代币已于 2023 年 4 月全部解锁并完成归属 \[15\]。这意味着未来不存在来自早期支持者的、可预见的、大规模的解锁抛压，使得代币价格更能反映其真实的市场供需和基本面价值。  
* **质押状况：** 市场上有相当一部分 PENDLE 代币（约占流通市值的 36.66%，价值约 2.36 亿美元）被锁定质押为 vePENDLE \[28\]。高质押率通常表明代币持有者具有强烈的长期信念，并愿意深度参与协议的治理和价值分享，而非短期投机。

### **C. vePENDLE 模型：剖析 Boros 时代的价值捕获与治理**

vePENDLE (vote-escrowed PENDLE) 是 Pendle 协议经济模型的核心，也是 PENDLE 代币价值捕获的最终载体。Boros 的推出进一步强化了 vePENDLE 的中心地位。

* **机制：** 用户通过将 PENDLE 代币锁定一段时间（最长可达 2 年）来获得 vePENDLE \[11, 15\]。锁仓时间越长，获得的 vePENDLE 数量越多。  
* **价值捕获：** vePENDLE 的持有者享有三大核心权益：  
  1. **协议收入分红：** 这是 vePENDLE 最直接的价值来源。持有者可以投票决定将 PENDLE 激励分配给哪些流动性池，并从他们投票的池子中获得 80% 的交易费用作为回报 \[11\]。至关重要的是，团队已明确承诺，**未来 Boros 产生的所有协议收入的 80% 也将分配给 vePENDLE 持有者** \[16\]。这直接将 Boros 巨大的商业潜力与 vePENDLE 的价值挂钩。  
  2. **流动性挖矿收益增强：** 在作为流动性提供者时，vePENDLE 持有者可以获得最高达 2.5 倍的 PENDLE 激励释放加成 \[11\]。  
  3. **治理权力与“贿选”市场：** vePENDLE 的投票权决定了 PENDLE 激励的流向，这催生了一个充满活力的“贿选”市场。其他协议为了吸引流动性到它们在 Pendle 上的池子，会向 vePENDLE 持有者提供额外奖励（“贿赂”），以换取他们的投票。这构成了“Pendle 战争 (Pendle Wars)”的叙事核心，为 vePENDLE 持有者创造了额外的收益层 \[30\]。  
* **空投福利：** Pendle 协议有一个良好的传统，即将其自身通过参与其他项目而获得的空投（如来自 Puffer, Ethena, Eigenlayer 等）按比例分配给 vePENDLE 持有者 \[1, 10\]，这构成了另一项非预期的潜在收益。

基于 DeFiLlama 提供的年化协议收入（4733 万美元）和流通市值（6.437 亿美元） \[28\]，可以计算出协议的市销率 (Price-to-Sales, P/S Ratio)。

* 基于流通市值的 P/S \= $643.7M / 47.33M≈13.6  
* 基于完全稀释估值的 P/S \= $1.091B / 47.33M≈23.0

这两个比率在 DeFi 领域处于相对较高的水平。这表明当前市场对 PENDLE 的估值已经包含了对其未来高速增长的强烈预期。考虑到 V2 业务已相对成熟，这种增长预期几乎完全寄托在新推出的 Boros 平台上。投资 PENDLE 的核心逻辑，就在于判断 Boros 未来的增长潜力是否能够支撑甚至超越这一高估值。

### **D. 竞争格局：Boros 在收益与衍生品赛道中的定位**

为了准确评估 Boros 的市场潜力，需要将其置于整个 DeFi 竞争格局中进行分析。

| 协议/类别 | 核心功能 | 目标市场 | Boros 的关键差异化优势 |
| :---- | :---- | :---- | :---- |
| **Pendle Boros** | 交易和对冲永续合约资金费率；提供杠杆化的利率衍生品。 | 专业交易员、做市商、对冲基金、需要对冲利率风险的 DeFi 协议（如 Ethena）。 | **首创者和市场定义者** \[2\]。提供了一个目前在 DeFi 领域内不存在的、可大规模交易资金费率的链上工具。其链上订单簿和保证金系统专为此目的设计 \[6\]。 |
| **其他收益协议** (如 Notional, Gearbox) | 提供固定利率借贷或杠杆化收益农场。 | 寻求固定收益的储户、希望加杠杆的收益农民。 | **交易标的不同**。这些协议交易的是借贷利率或资产本身的收益率，而非永续合约的资金费率。它们是“现货收益率”市场，而 Boros 是“利率衍生品”市场 \[31\]。 |
| **永续合约 DEX** (如 dYdX, Hyperliquid) | 提供永续合约的杠杆交易。 | 杠杆交易者、投机者。 | **角色不同**。这些 DEX 是资金费率的**产生地**，但它们本身不提供交易或对冲资金费率的工具。Boros 是建立在它们之上的一个**元层 (meta-layer)**，服务于这些 DEX 的参与者 \[4\]。 |
| **风险代币化协议** (如 BarnBridge) | 将资产的风险和收益分层，打包成不同风险等级的金融产品。 | 寻求定制化风险敞口的投资者。 | **焦点不同**。BarnBridge 等项目更侧重于信用风险或收益波动性风险的分层，而 Boros 专注于利率风险，特别是资金费率这一特定但巨大的市场 \[31\]。 |

分析显示，Boros 并非在与现有 DeFi 协议进行同质化竞争，而是在开创一个全新的细分市场。它不直接与借贷协议或永续合约 DEX 争夺用户，而是为这些生态的参与者提供了一个全新的、急需的金融工具。这种独特的定位使其拥有了强大的先发优势和定义市场规则的潜力。其真正的“竞争对手”，在初期阶段，并非其他协议，而是“缺乏解决方案”这一现状本身——即交易员和协议目前只能被动承受资金费率的波动风险。

## **IV. 全面风险与安全评估**

对于一个旨在处理数十亿乃至数千亿美元名义价值的金融协议而言，安全是其生命线。本节对 Pendle 及 Boros 的风险状况进行深入、审慎的评估。

### **A. 审计审查：对 V2 和 Boros 安全审计的严格检视**

* **Pendle V2 的强大审计背景：** Pendle V2 的核心合约拥有一个令人印象深刻的审计记录，经过了多家行业顶级安全公司的严格审查，包括 ChainSecurity, Spearbit, WatchPug, Dedaub, Ackee, 和 Least Authority 等 \[9, 17, 32\]。这为其 V2 产品的安全性提供了强有力的背书。  
* **ChainSecurity V2 报告分析：** ChainSecurity 的报告结论是，V2 代码库提供了“良好级别的安全性”，在资产偿付能力和算术运算方面的安全性为“高” \[33\]。报告同时指出了一个关键点：系统的复杂性较高，并且 SY 代币（收益资产的封装层）的安全性高度依赖于底层资产自身的实现，而底层资产的审计超出了该报告的范围 \[34\]。  
* **Least Authority V1 报告分析：** 对 V1 的早期审计也强调了系统设计和代码“极其复杂”的特性，并建议简化系统以减少攻击面 \[35\]。这是一个贯穿 Pendle 发展历程的、值得关注的特性。  
* **关键风险缺口 \- Boros (V3) 审计状态不明：** 这是本报告发现的**最严重风险点**。Boros 的官方网站 \[6\] 明确列出了 ChainSecurity 和 Spearbit 作为其审计方。然而，在对所有公开信息源进行彻底检索后，**未能找到任何一份针对 Boros (V3) 线上运行合约的、完整的、可供公开审查的审计报告** \[7, 8, 9\]。所有能找到的详细报告均针对 V2 或更早版本。这意味着，尽管项目方声称已进行审计，但作为外部投资者，我们无法验证审计的范围、发现的关键问题、问题的严重性以及修复情况。在这样一个核心信息缺失的情况下，对 Boros 智能合约的安全性进行评估存在巨大的盲点。

### **B. 历史安全事件分析：Penpie 被盗事件及其启示**

* **事件回顾：** 2024 年 9 月，一个建立在 Pendle 生态之上的收益优化器 Penpie 遭到攻击，损失约 2700 万美元 \[36, 37\]。  
* **根本原因：** 漏洞出在 Penpie 协议自身，而非 Pendle。Penpie 在集成 Pendle 市场时，错误地假设了所有通过 Pendle 许可权限创建的市场都是善意的。攻击者利用了 Pendle 的**无需许可 (permissionless)** 特性，创建了一个包含恶意 SY 代币的虚假 Pendle 市场。Penpie 协议自动集成了这个恶意市场，使得攻击者能够操纵奖励计算，最终盗取资金 \[36, 37\]。  
* **Pendle 的角色与应对：** 在此次事件中，Pendle 的核心合约是安全的，并未受到直接攻击。更值得称道的是，Pendle 团队的内部监控系统迅速识别了可疑交易，并果断地暂停了相关合约的交互，成功阻止了另外约 1.05 亿美元的资产被进一步盗取 \[36\]。  
* **事件启示：** Penpie 事件是 DeFi“可组合性风险”的一个典型案例。它表明，即使一个底层协议（Pendle）是安全的，构建于其上的生态项目也可能因为自身的逻辑漏洞而遭受攻击。Pendle 的无需许可创新 \[12\] 是其生态繁荣的驱动力，但这把双刃剑也要求所有生态合作伙伴必须进行极其严格的尽职调查和安全审计。对于投资者而言，这意味着投资 Pendle 生态项目时，不仅要评估 Pendle 自身的安全性，更要独立评估所投项目的安全性。

### **C. 团队、投资者与治理风险评估**

* **创始人与团队：** 联合创始人兼 CEO TN Lee 曾是 Kyber Network 的业务负责人，拥有深厚的行业经验和良好的声誉 \[38, 39\]。团队主体位于韩国 \[15\]。团队表现出了在面对挑战时的韧性，他们成功地将之前的创业项目 Dana Labs 转型为如今的 Pendle Finance \[40\]。然而，除了核心创始人外，整个团队的透明度相对有限，难以在公开渠道（如 LinkedIn）找到更广泛团队成员的详细背景资料 \[41, 42\]。  
* **投资者背景：** 项目获得了顶级加密风险投资机构的支持，包括 Binance Labs, Mechanism Capital, Crypto.com Capital, The Spartan Group 等 \[2, 28\]。强大的投资者阵容不仅提供了资金，也带来了宝贵的行业资源和战略指导。  
* **历史争议分析：** 调研发现的两起“争议”事件，经分析后均不构成重大负面因素：  
  1. **推特账户被盗：** Pendle 的官方推特账户曾因社会工程学攻击被短暂盗用，但团队反应迅速，在未造成任何资金损失的情况下很快收回了控制权 \[43\]。这属于所有项目都可能面临的运营安全风险，并未暴露协议层面的问题。  
  2. **EigenLayer 空投风波：** 社区曾因认为 Pendle 用户在 EIGEN 空投中分配过少而产生负面情绪，导致 PENDLE 价格下跌 \[44\]。然而，后续 Pendle 和 EigenLayer 团队均出面澄清，分配比例是基于用户实际的交互行为（直接质押 vs 通过 DeFi 协议间接质押）自然产生的结果，并非刻意打压。市场情绪和价格也在此后得到了修复 \[44\]。  
* **创始人诚信记录：** 在所有调研材料中，未发现任何关于创始人团队存在欺诈、项目方跑路 (rug pull) 或其他不良行为的记录 \[45, 46\]。

协议的复杂性是其创新性的副产品，但也是安全风险的放大器。V1 和 V2 的审计报告反复提及这一点 \[33, 35\]。Boros 在 V2 的基础上，又增加了保证金、订单簿、预言机等多个复杂模块，其复杂程度远超 V2。因此，即便 Boros 确实如其官网所言，已由顶级公司审计，投资者也必须认识到，由于其内在的复杂性，残留的、未被发现的漏洞风险天然高于简单协议。这并非否定审计的价值，而是强调一种审慎的风险认知。在缺乏公开审计报告验证的情况下，这一风险被进一步放大。

## **V. 社交生态与社区情绪**

### **A. 叙事强度与官方沟通**

Pendle 团队展现了高超的叙事构建和沟通能力。他们通过官方 Medium 博客 \[1, 47\] 和推特账号 (@pendle\_fi, @boros\_fi) \[48, 49\]，持续输出专业、清晰且富有远见的战略信息。

其核心叙事——成为“链上的利率总台 (on-chain interest rate desk)”，并最终将业务从 DeFi 拓展至传统金融 (TradFi) \[1, 2, 3\]——极具吸引力，能够精准地捕获成熟资本和专业交易者的关注。

一个尤为关键的、赢得社区信任的决策是，团队明确宣布 Boros 将不会发行新代币，其所有产生的价值都将回馈给现有的 PENDLE 和 vePENDLE 持有者 \[1, 16\]。这一举动有力地证明了团队的长期主义视角，避免了稀释老用户权益，将整个社区的利益与新产品的成功紧密捆绑在一起。

### **B. 社区健康度评估：Discord、Telegram 与推特互动**

项目维持着活跃的多渠道社区，包括一个拥有数万名成员的 Discord 服务器 \[50, 51\] 和一个 Telegram 频道 \[26\]。

社区内的讨论质量普遍较高，常常围绕着复杂的收益策略、利率套利模型等展开，这与项目所定位的成熟用户画像高度吻合 \[52\]。在 Discord 中设立专门的开发者频道 \[53\]，也为生态系统的技术发展和外部集成提供了良好的支持平台。

### **C. 市场认知与意见领袖评论**

在更广泛的加密市场中，Pendle 已被普遍视为一个“蓝筹”级别的 DeFi 协议，是收益代币化赛道的绝对领导者和创新先锋 \[10, 30\]。

多家加密研究机构和分析师都将 Boros 的推出视为 Pendle 协议未来最重要的增长催化剂 \[2, 5, 10, 54\]。

此外，Pendle 在 DeFi 领域拥有广泛且高质量的合作伙伴网络，包括与 Ethena 的深度绑定，与 Arbitrum 的战略合作，以及与 Chainlink 等顶级基础设施提供商的集成 \[16, 55, 56\]。这些合作关系不仅增强了其产品的可用性，也从侧面印证了其在行业内的信誉和地位。

## **VI. 可行的投资与参与策略**

本节为有意向的投资者提供一个全面的、从易到难的参与 Pendle 和 Boros 生态的路径图，并对各种策略的收益来源、风险特征和适用人群进行剖析。

### **A. Pendle 生态系统投资机会对比分析**

下表旨在为投资者提供一个清晰的、一目了然的决策矩阵，以便根据自身的风险偏好、资本规模和专业技能，选择最合适的参与方式。

| 策略名称 | 策略描述 | 主要回报来源 | 核心风险 | 预期收益特征 (APR/APY) | 技能要求 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **购买 PENDLE 代币** | 直接在二级市场购买并持有 PENDLE 代币。 | 代币价格的资本增值。 | 市场波动风险、协议整体风险。 | 投机性，与市场同步。 | 初级 |
| **质押 vePENDLE** | 锁定 PENDLE 获取 vePENDLE，参与治理。 | 协议收入分红、LP 收益增强、治理贿选收益、生态空投 \[1, 11, 16\]。 | PENDLE 价格风险、锁仓导致的流动性丧失。 | 中高，复合型稳定收益+潜在空投。 | 初级-中级 |
| **V2 固定收益 (购买PT)** | 购买折价的 PT，持有至到期赎回底层资产。 | 锁定的固定利率收益 \[11, 15\]。 | 机会成本风险（若浮动利率更高）、底层资产风险。 | 低，稳定且可预测。 | 初级 |
| **V2 杠杆收益 (购买YT)** | 购买 YT，以杠杆方式获取未来浮动收益/空投积分。 | 浮动收益率、空投积分价值 \[11\]。 | 收益率不及预期的风险、时间价值衰减、本金损失风险。 | 高，投机性强，高风险高回报。 | 中级 |
| **V2 流动性提供** | 为 PT/SY 池提供流动性。 | 交易费、PENDLE 激励、底层资产收益 \[15, 18\]。 | 极低的无常损失、智能合约风险。 | 中等，相对稳定。 | 中级 |
| **Boros 做多资金费率** | 购买 YU，押注资金费率将上涨或保持高位。 | 浮动资金费率与固定成本之间的正价差 \[6\]。 | 资金费率走势不及预期、保证金清算风险、预言机风险。 | 极高，高度投机性。 | 高级 |
| **Boros 做空/对冲资金费率** | 卖空 YU，对冲资金费率支付成本或押注其下跌。 | 锁定的固定利率高于浮动支付成本 \[6\]。 | 资金费率走势不及预期、保证金清算风险、预言机风险。 | 视对冲/投机目的而定。 | 高级 |
| **Boros 资金费率套利** | 结合 Boros 与 CEX/现货市场进行跨市场或对冲套利。 | 不同市场间的利率差 \[57\]。 | 执行风险、交易对手风险、清算风险、智能合约风险。 | 中高，取决于市场机会和执行效率。 | 高级/开发者 |
| **Boros 流动性提供** | 向 Boros Vaults 提供资金，为市场做市。 | 交易费、PENDLE 激励、隐含利率变动带来的持仓增值 \[23, 24\]。 | 智能合约风险、预言机风险。 | 中高，风险低于直接交易。 | 中级-高级 |
| **Delta 中性策略** | 结合 Boros 头寸与现货/其他衍生品，对冲标的价格风险，仅赚取利率。 | 资金费率收益 \[58, 59\]。 | 执行风险、基差风险、Gamma 风险。 | 低-中，风险调整后收益稳定。 | 高级 |

### **B. 高阶高收益策略深度解析**

对于具备专业知识和风险承受能力的投资者，Boros 开启了多种复杂的 Alpha 策略。

**1\. Boros 资金费率套利 (Funding Rate Arbitrage):**

* **核心概念：** 此策略旨在捕获不同市场（如不同 CEX 之间，或现货与永续之间）的资金费率差异，实现低风险或无风险利润 \[57\]。Boros 在其中扮演了提供链上套利一环的关键角色。  
* **执行范例 (Delta 中性)：** 一位交易员可以采取 Delta 中性策略 \[58, 59\]，以对冲标的资产（如 BTC）的价格波动风险，纯粹赚取资金费率。具体操作如下：  
  1. 在现货市场买入 1 BTC。  
  2. 同时，在 Boros 平台上卖空 1 单位名义本金的 BTC YU。  
     通过此操作，交易员锁定了“支付浮动资金费率，收取固定利率”的合约。由于其现货头寸不受资金费率影响，而永续合约市场的资金费率通常与 Boros 的浮动端高度相关，这两部分风险可以相互抵消。最终，交易员的净收益近似于其在 Boros 上锁定的固定利率。Boros 的核心价值在于，它将不可预测的浮动资金费率对冲成本，转化为了一个可预测的、固定的利率 \[1, 4\]。  
* **工具要求：** 高效执行此类策略通常需要编写自动化交易机器人，并接入实时市场数据 API \[57, 60\]。

**2\. 为收益协议提供对冲服务 (以 Ethena 为例):**

* **核心概念：** 像 Ethena 这样的协议，其收益高度依赖于不稳定的资金费率。Boros 为它们提供了一个完美的对冲工具，以增强自身产品的稳健性 \[1, 3, 4, 5\]。  
* **执行方式：** Ethena 在 CEX 持有大量的 ETH 空头永续合约，从而收取浮动资金费率。为了对冲费率下跌的风险，Ethena 可以在 Boros 上卖空 ETH YU。这样一来，Ethena 在 Boros 上需要支付浮动费率（这部分与其在 CEX 收取的浮动费率相抵消），同时收取一笔固定的利率。最终结果是，Ethena 成功地将自己不稳定的浮动收益流，转化成了一笔稳定、可预测的固定收益流，极大地提升了其协议的风险管理能力和对用户的吸引力。

**3\. Boros 流动性提供 (Liquidity Provision):**

* **核心概念：** 与 V2 类似，用户可以不直接参与方向性交易，而是作为做市商为 Boros 市场提供流动性。  
* **执行方式：** Boros 设有专门的“Boros Vaults”，允许 LP 存入资金（如稳定币）。这些资金将被协议用于为订单簿提供流动性。作为回报，LP 可以赚取交易费、PENDLE 激励，以及因市场隐含利率向有利方向变动而带来的资金增值 \[23, 24\]。这是一种风险相对较低、但依然能分享 Boros 生态增长红利的参与方式。

### **C. 面向开发者投资者的机遇：利用 Boros API 与 SDK**

对于拥有开发背景的投资者，直接与协议底层交互可以发掘独特的 Alpha 机会。

* **现有开发工具状态：** Pendle 为其 V2 协议提供了非常完善的开发工具，包括一个托管的 SDK 和一套功能丰富的 RESTful API，可用于查询市场数据、构建交易、获取最优路径等 \[53, 61\]。其 SDK 甚至集成了多家聚合器（如 KyberSwap, Odos）以保证最佳执行价格 \[61\]。  
* **Boros 开发工具的缺口：** 这是一个关键发现。目前的公开开发者文档中，**尚未包含针对 Boros 链上订单簿、保证金管理或资金费率数据查询的特定 API 端点或 SDK 功能** \[53, 61\]。这意味着，希望构建自动化策略的开发者目前缺乏官方的、标准化的工具集。虽然 GitHub 代码库对 V2 来说非常活跃 \[62, 63\]，但与 Boros 相关的公开代码库或 SDK 尚未明确标识 \[64, 65\]。  
* **潜在机遇：** 这个信息差本身就构成了机遇。对于技术能力强的开发者来说，这意味着一个窗口期。他们可以通过直接分析链上合约交互，或者通过开发者 Discord 频道 \[53\] 与团队直接沟通，来“逆向工程”出与 Boros 交互的方法。一个名为 @pendle/boros-offchain-math 的 NPM 包的存在 \[66\] 暗示了相关工具正在开发中。能够率先在 Boros 上构建起自动化做市、套利或清算机器人的开发者，将可能在公开工具普及之前获得显著的先行者优势。

## **VII. 结论：投资论点与最终建议**

### **A. 看涨情景 (The Bull Case)**

* **基础设施化：** Boros 成功捕获了永续合约资金费率市场的大量份额，从一个应用层协议演变为 DeFi 世界不可或缺的核心利率基础设施。  
* **价值重估：** 来自 Boros 的巨额费用收入持续不断地流向 vePENDLE 持有者，强劲的基本面驱动了 PENDLE 代币的价值重估，使其市值与顶级 DeFi 基础设施项目看齐。  
* **护城河确立：** 在这个全新的、潜力巨大的细分市场中，Pendle 凭借其先发优势和网络效应，建立了难以逾越的竞争护城河。  
* **团队执行力：** 经验丰富的团队成功地应对了 Boros 平台在技术、安全和运营上的各种挑战，证明了其卓越的执行能力。

### **B. 看跌情景 (The Bear Case)**

* **致命漏洞：** Boros 极其复杂的智能合约代码中存在未被发现的严重漏洞，导致了大规模的资产被盗事件，彻底摧毁了市场信心。  
* **预言机失灵：** 用于喂价资金费率的预言机被证明是不可靠的或可被操纵的，导致协议资产定价混乱，引发系统性风险。  
* **市场需求证伪：** 产品未能获得广泛的市场采纳，用户群体局限于极少数专业交易者，产生的收入远不足以支撑其高昂的估值。  
* **竞争与迭代：** 竞争对手出现，推出了一个资本效率更高、更安全或用户体验更好的替代方案，侵蚀了 Pendle 的市场份额。

### **C. 最终投资评级与论证**

**投资评级：建议 (Recommend) \- 风险分类：高 (High-Risk)**

**评级论证：**

本报告最终给予 Pendle Boros **“建议（高风险）”** 的投资评级。

做出“建议”评级的核心依据在于 Boros 项目所展现出的**宏大愿景、巨大的市场潜力、清晰的价值捕获逻辑和强大的团队背景**。Boros 不仅仅是一个新功能，它是对 DeFi 边界的一次大胆拓展，旨在解决一个真实存在且价值巨大的市场痛点。其将所有新增价值导向 PENDLE 代币的经济模型设计，使其成为一个对代币持有者极为友好的投资标的。协议的 V2 产品已经证明了团队的创新和运营能力，并为其赢得了市场的广泛认可。

然而，这一建议必须被置于“高风险”的框架内。此高风险定性主要源于一个**单一但至关重要的因素：Boros 智能合约安全状况的透明度不足**。在无法公开获取并独立验证其针对线上合约的完整审计报告之前，投资 Boros 就如同驶入一片潜力无限但布满未知暗礁的海域。其系统的内在复杂性进一步放大了这一风险。

因此，最审慎的投资策略是**分阶段、有条件的资本配置**：

1. **第一阶段（当前）：** 投资者可以配置一笔初始的、风险可控的资金，用于购买 PENDLE 并质押为 vePENDLE。此举的目的在于建立一个基础仓位，以较低的风险敞口参与到这一激动人心的叙事中，并即刻开始享受 V2 带来的协议收入和治理收益。  
2. **第二阶段（未来）：** 将更大比例的资金配置视为一个**待触发的期权**。触发该期权的条件是**风险的明确消除**，即：  
   * Pendle 团队正式公开发布由 ChainSecurity, Spearbit 或其他同级别顶级审计机构出具的、针对 Boros 线上运行合约的**完整审计报告**。  
   * 报告内容详尽，结论积极，所有发现的高危和中危漏洞都已得到妥善修复。  
   * Boros 平台在主网上线后，经过市场真实环境的检验，稳定运行至少一个季度（3-6个月），未发生重大安全事故。

只有在上述条件得到满足后，才能认为 Boros 的核心智能合约风险已降低到可接受水平，届时再根据市场情况追加投资，将是更为理性和负责任的决策。这一策略的核心是在风险与回报之间寻求最佳平衡，避免在信息不对称的情况下过度暴露于潜在的灾难性风险之中，同时保留捕获项目长期巨大价值的可能。

## **VIII. 引用来源**

1

#### **引用的著作**

1. Boros by Pendle: Yield Trading with Margin \- Medium, 访问时间为 八月 6, 2025， [https://medium.com/pendle/boros-by-pendle-yield-trading-with-margin-63d026dc7399](https://medium.com/pendle/boros-by-pendle-yield-trading-with-margin-63d026dc7399)  
2. Pendle 2025: Building DeFi's Fixed Income Layer \- Greythorn Asset Management \- Medium, 访问时间为 八月 6, 2025， [https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd](https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd)  
3. Pendle Releases 2025 Roadmap, Plans To Expand Beyond DeFi With Citadels And Boros | Mpost Media Group on Binance Square, 访问时间为 八月 6, 2025， [https://www.binance.com/en/square/post/19860204777025](https://www.binance.com/en/square/post/19860204777025)  
4. Pendle announces plans to target Solana, Hyperliquid and Ton \- Blockworks, 访问时间为 八月 6, 2025， [https://blockworks.co/news/pendle-2025-outlook](https://blockworks.co/news/pendle-2025-outlook)  
5. Boros: Pendle's Next Big Bet on DeFi Yield Markets | by 0x365home | 100 research, 访问时间为 八月 6, 2025， [https://medium.com/100-research/boros-pendles-next-big-bet-on-defi-yield-markets-41d77b3f6995](https://medium.com/100-research/boros-pendles-next-big-bet-on-defi-yield-markets-41d77b3f6995)  
6. Boros | Pendle, 访问时间为 八月 6, 2025， [https://www.pendle.finance/boros](https://www.pendle.finance/boros)  
7. 访问时间为 一月 1, 1970， [https://github.com/pendle-finance/pendle-core-v2-public/tree/main/audits](https://github.com/pendle-finance/pendle-core-v2-public/tree/main/audits)  
8. pendle-core/docs/audits/Least Authority \- Pendle Protocol Smart Contracts \- Final Audit Report (v3).pdf at master \- GitHub, 访问时间为 八月 6, 2025， [https://github.com/pendle-finance/pendle-core/blob/master/docs/audits/Least%20Authority%20-%20Pendle%20Protocol%20Smart%20Contracts%20-%20Final%20Audit%20Report%20(v3).pdf](https://github.com/pendle-finance/pendle-core/blob/master/docs/audits/Least%20Authority%20-%20Pendle%20Protocol%20Smart%20Contracts%20-%20Final%20Audit%20Report%20\(v3\).pdf)  
9. Security | Pendle Documentation, 访问时间为 八月 6, 2025， [https://docs.pendle.finance/Security](https://docs.pendle.finance/Security)  
10. Pendle: A New Era in Yield Trading? \- Nansen Research, 访问时间为 八月 6, 2025， [https://research.nansen.ai/articles/pendle-a-new-era-in-yield-trading](https://research.nansen.ai/articles/pendle-a-new-era-in-yield-trading)  
11. What Is Pendle Finance? A Beginner's Guide to Tokenized Yield | CoinGecko, 访问时间为 八月 6, 2025， [https://www.coingecko.com/learn/pendle](https://www.coingecko.com/learn/pendle)  
12. Pendle V2 (Part 2/3) — Open Access \- Medium, 访问时间为 八月 6, 2025， [https://medium.com/pendle/pendle-v2-part-2-3-open-access-25c1783a0b4f](https://medium.com/pendle/pendle-v2-part-2-3-open-access-25c1783a0b4f)  
13. Pendle Finance \- Decentralized Finance | IQ.wiki, 访问时间为 八月 6, 2025， [https://iq.wiki/wiki/pendle-finance](https://iq.wiki/wiki/pendle-finance)  
14. How Institutions and Retail Traders Can Generate Income: A Look Into Pendle \- DWF Labs, 访问时间为 八月 6, 2025， [https://www.dwf-labs.com/research/529-how-institutions-and-retail-traders-can-generate-income-a-look-into-pendle](https://www.dwf-labs.com/research/529-how-institutions-and-retail-traders-can-generate-income-a-look-into-pendle)  
15. Inside Pendle: The Leading Protocol for On-Chain Yield Derivatives | Biyond, 访问时间为 八月 6, 2025， [https://biyond.co/blog/biyond-alpha-brief/inside-pendle-the-leading-protocol-for-on-chain-yield-derivatives.html](https://biyond.co/blog/biyond-alpha-brief/inside-pendle-the-leading-protocol-for-on-chain-yield-derivatives.html)  
16. Pendle \- Beyond the Point Meta \- Gate.com, 访问时间为 八月 6, 2025， [https://www.gate.com/learn/articles/pendle-beyond-the-point-meta/5053](https://www.gate.com/learn/articles/pendle-beyond-the-point-meta/5053)  
17. Pendle V2, 访问时间为 八月 6, 2025， [https://www.pendle.finance/pendle](https://www.pendle.finance/pendle)  
18. Unveiling Pendle: How Is It Reshaping the Future of DeFi Yield Trading? | by ShingW.eth, 访问时间为 八月 6, 2025， [https://medium.com/shingw-eth/unveiling-pendle-how-is-it-reshaping-the-future-of-defi-yield-trading-6ae81ad34daa](https://medium.com/shingw-eth/unveiling-pendle-how-is-it-reshaping-the-future-of-defi-yield-trading-6ae81ad34daa)  
19. Pendle V3 (Boros): Shaping the Future of DeFi Yield Trading, 访问时间为 八月 6, 2025， [https://www.gate.com/learn/articles/pendle-v3-boros-shaping-the-future-of-de-fi-yield-trading/5109](https://www.gate.com/learn/articles/pendle-v3-boros-shaping-the-future-of-de-fi-yield-trading/5109)  
20. Pendle: Low-Key, Yet Dominating DeFi | Bitget News, 访问时间为 八月 6, 2025， [https://www.bitget.com/news/detail/12560604677901](https://www.bitget.com/news/detail/12560604677901)  
21. Pendle 2025: Reaching New Heights \- Gate.com, 访问时间为 八月 6, 2025， [https://www.gate.com/learn/articles/pendle-2025-reaching-new-heights/8365](https://www.gate.com/learn/articles/pendle-2025-reaching-new-heights/8365)  
22. Ethereum Price, ETH Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 八月 6, 2025， [https://www.coinbase.com/en-de/price/ethereum](https://www.coinbase.com/en-de/price/ethereum)  
23. Pendle Lets Crypto Traders Bet on Bitcoin, Ether Funding Rates With Boros Platform, 访问时间为 八月 6, 2025， [https://coinstats.app/news/9a8b9c251b0af40a9cb9e346df863b4cf5612ab2ca2ab03503d3fca38bcdf35d\_Pendle-Lets-Crypto-Traders-Bet-on-Bitcoin-Ether-Funding-Rates-With-Boros-Platform](https://coinstats.app/news/9a8b9c251b0af40a9cb9e346df863b4cf5612ab2ca2ab03503d3fca38bcdf35d_Pendle-Lets-Crypto-Traders-Bet-on-Bitcoin-Ether-Funding-Rates-With-Boros-Platform)  
24. Boros: Introducing Funding Futures | by Pendle Team | Boros\_Fi | Aug, 2025 \- Medium, 访问时间为 八月 6, 2025， [https://medium.com/boros-fi/boros-introducing-funding-futures-d1f69111a8a7](https://medium.com/boros-fi/boros-introducing-funding-futures-d1f69111a8a7)  
25. Pendle Announces Leveraged Yield Tokenization Platform \- "The Defiant", 访问时间为 八月 6, 2025， [https://thedefiant.io/news/defi/pendle-announces-leveraged-yield-tokenization-platform](https://thedefiant.io/news/defi/pendle-announces-leveraged-yield-tokenization-platform)  
26. Pendle \- Liberating Yield, 访问时间为 八月 6, 2025， [https://www.pendle.finance/](https://www.pendle.finance/)  
27. Pendle TVL Hits $7.021B Amid Upcoming DeFi Catalysts \- KuCoin, 访问时间为 八月 6, 2025， [https://www.kucoin.com/news/flash/pendle-tvl-hits-7-021b-amid-upcoming-defi-catalysts](https://www.kucoin.com/news/flash/pendle-tvl-hits-7-021b-amid-upcoming-defi-catalysts)  
28. Pendle \- DefiLlama, 访问时间为 八月 6, 2025， [https://defillama.com/protocol/pendle](https://defillama.com/protocol/pendle)  
29. PENDLE Live Price Chart, Market Cap & News Today \- CoinGecko, 访问时间为 八月 6, 2025， [https://www.coingecko.com/en/coins/pendle](https://www.coingecko.com/en/coins/pendle)  
30. Pendle Finance \- Deep Dive (Review) \- YouTube, 访问时间为 八月 6, 2025， [https://www.youtube.com/watch?v=T4MPIz143tk](https://www.youtube.com/watch?v=T4MPIz143tk)  
31. Boros Project Introduction, Team, Financing and News\_RootData, 访问时间为 八月 6, 2025， [https://www.rootdata.com/Projects/detail/Boros?k=MTczODg%3D](https://www.rootdata.com/Projects/detail/Boros?k=MTczODg%3D)  
32. Pendle Price, PENDLE Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 八月 6, 2025， [https://www.coinbase.com/price/pendle](https://www.coinbase.com/price/pendle)  
33. Smart contract audit \- Pendle V2 Core \- ChainSecurity, 访问时间为 八月 6, 2025， [https://www.chainsecurity.com/security-audit/pendle-v2-core](https://www.chainsecurity.com/security-audit/pendle-v2-core)  
34. Code Assessment of the Pendle V2 Core Smart Contracts, 访问时间为 八月 6, 2025， [https://cdn.prod.website-files.com/65d35b01a4034b72499019e8/66be2c77e32da81604316498\_ChainSecurity\_Pendle\_Finance\_Pendle\_V2\_Core\_audit.pdf](https://cdn.prod.website-files.com/65d35b01a4034b72499019e8/66be2c77e32da81604316498_ChainSecurity_Pendle_Finance_Pendle_V2_Core_audit.pdf)  
35. 210521\_Pendle Protocol\_Pendle Smart Contracts Final Audit Report \- Least Authority, 访问时间为 八月 6, 2025， [https://leastauthority.com/static/publications/LeastAuthority\_Pendle\_Protocol\_Pendle\_Smart\_Contracts\_Final\_Audit\_Report.pdf](https://leastauthority.com/static/publications/LeastAuthority_Pendle_Protocol_Pendle_Smart_Contracts_Final_Audit_Report.pdf)  
36. Pendle says it saved $105 million that could have been further drained amid Penpie hack, 访问时间为 八月 6, 2025， [https://www.theblock.co/post/314616/pendle-says-it-saved-105-million-that-could-have-been-further-drained-amid-penpie-hack](https://www.theblock.co/post/314616/pendle-says-it-saved-105-million-that-could-have-been-further-drained-amid-penpie-hack)  
37. SlowMist Incident Analysis — Penpie Attack \- Medium, 访问时间为 八月 6, 2025， [https://slowmist.medium.com/slowmist-incident-analysis-penpie-hack-e6157975898f](https://slowmist.medium.com/slowmist-incident-analysis-penpie-hack-e6157975898f)  
38. TN Lee \- RootData, 访问时间为 八月 6, 2025， [https://www.rootdata.com/member/TN%20Lee?k=MTQ2OTQ%3D](https://www.rootdata.com/member/TN%20Lee?k=MTQ2OTQ%3D)  
39. TN-Lee \- Our Crypto Talk, 访问时间为 八月 6, 2025， [https://web.ourcryptotalk.com/blog/tn-lee](https://web.ourcryptotalk.com/blog/tn-lee)  
40. \[Online\] Sharing by TN Lee, Founder of Pendle Finance \- Luma, 访问时间为 八月 6, 2025， [https://lu.ma/gb4xpevi](https://lu.ma/gb4xpevi)  
41. All Cryptocurrencies | CoinMarketCap, 访问时间为 八月 6, 2025， [https://coinmarketcap.com/all/views/all/](https://coinmarketcap.com/all/views/all/)  
42. Best Penny Crypto 2025 \- YouHodler, 访问时间为 八月 6, 2025， [https://www.youhodler.com/blog/best-penny-crypto-2025](https://www.youhodler.com/blog/best-penny-crypto-2025)  
43. Pendle Finance Responds Swiftly to Unauthorised Property Use | CoinLive on Binance Square, 访问时间为 八月 6, 2025， [https://www.binance.com/en/square/post/6181351147585](https://www.binance.com/en/square/post/6181351147585)  
44. PENDLE Price Falls 45% After EigenLayer Airdrop \- CCN.com, 访问时间为 八月 6, 2025， [https://www.ccn.com/analysis/crypto/pendle-price-falls-eigenlayer-airdrop-allocation-concerns/](https://www.ccn.com/analysis/crypto/pendle-price-falls-eigenlayer-airdrop-allocation-concerns/)  
45. How Etherex Plans to Fuel Linea's Quest to Boost Ethereum Capital \- Decrypt, 访问时间为 八月 6, 2025， [https://decrypt.co/332729/how-etherex-plans-fuel-linea-quest-boost-ethereum-capital](https://decrypt.co/332729/how-etherex-plans-fuel-linea-quest-boost-ethereum-capital)  
46. Bitcoin App Samourai Founders Face 5 Years in Prison Following Guilty Plea \- Decrypt, 访问时间为 八月 6, 2025， [https://decrypt.co/332719/bitcoin-app-samourai-founders-5-years-prison-guilty-plea](https://decrypt.co/332719/bitcoin-app-samourai-founders-5-years-prison-guilty-plea)  
47. Pendle Team – Medium, 访问时间为 八月 6, 2025， [https://pendle.medium.com/](https://pendle.medium.com/)  
48. Pendle Rilis Boros, Buka Akses Trading Funding Rate Kripto \- Coinvestasi, 访问时间为 八月 6, 2025， [https://coinvestasi.com/berita/pendle-rilis-boros-untuk-akses-trading-funding-rate](https://coinvestasi.com/berita/pendle-rilis-boros-untuk-akses-trading-funding-rate)  
49. creating a new protocol from scratch, shipping tons of features for V2 and taking the time to dig into how the dynamics within the Pendle Protocol have evolved. Pendle pools have reached a point where deep liquidity and strong volumes can be sustained with minimal incentives, a clear sign of natural market demand. While some bootstrapping is still needed early on, many pools become self-sustaining once momentum builds. However, as emissions taper, we must ensure that incentives remain effective — an area of our active research alongside ongoing fee optimizations. Once initial testing is completed over the next few weeks, we will be implementing a dynamic incentive cap based on a pool's swap fee contribution. Pools deployed on Pendle will begin with a high incentive cap to allow room for TVL bootstrapping and will gradually adjust weekly to match its fee contribution to the protocol. The imposed caps \- OKX, 访问时间为 八月 6, 2025， [https://www.okx.com/en-us/feed/post/51093513527616](https://www.okx.com/en-us/feed/post/51093513527616)  
50. Pendle Finance, Real-World Asset: Investor Guide, 访问时间为 八月 6, 2025， [https://www.diadata.org/rwa-real-world-asset-map/pendle-finance/](https://www.diadata.org/rwa-real-world-asset-map/pendle-finance/)  
51. Pendle Discord Server \- Games & chat \- Lancaster University, 访问时间为 八月 6, 2025， [https://www.lancaster.ac.uk/pendle/news/pendle-discord-server-games-chat](https://www.lancaster.ac.uk/pendle/news/pendle-discord-server-games-chat)  
52. Pendle 2021 Wrapped \- Medium, 访问时间为 八月 6, 2025， [https://medium.com/pendle/pendle-2021-wrapped-c91b8052defb](https://medium.com/pendle/pendle-2021-wrapped-c91b8052defb)  
53. Overview | Pendle Documentation, 访问时间为 八月 6, 2025， [https://docs.pendle.finance/Developers/Overview](https://docs.pendle.finance/Developers/Overview)  
54. Pendle: Expanding the Frontier of DeFi Yield Trading \- Nansen Research, 访问时间为 八月 6, 2025， [https://research.nansen.ai/articles/pendle-expanding-the-frontier-of-de-fi-yield-trading](https://research.nansen.ai/articles/pendle-expanding-the-frontier-of-de-fi-yield-trading)  
55. Chainlink: The backbone of blockchain., 访问时间为 八月 6, 2025， [https://chain.link/](https://chain.link/)  
56. \[Pendle\]\[FINAL\] \[STIP \- Round 1\] \- Arbitrum Governance Forum, 访问时间为 八月 6, 2025， [https://forum.arbitrum.foundation/t/pendle-final-stip-round-1/17234](https://forum.arbitrum.foundation/t/pendle-final-stip-round-1/17234)  
57. The Ultimate Guide to Funding Rate Arbitrage \- Amberdata Blog, 访问时间为 八月 6, 2025， [https://blog.amberdata.io/the-ultimate-guide-to-funding-rate-arbitrage-amberdata](https://blog.amberdata.io/the-ultimate-guide-to-funding-rate-arbitrage-amberdata)  
58. Delta Neutral \- Trading Strategies for Options, 访问时间为 八月 6, 2025， [https://www.optionstrading.org/strategies/other/delta-neutral/](https://www.optionstrading.org/strategies/other/delta-neutral/)  
59. Delta Neutral: Definition, Use With a Portfolio, and Example \- Investopedia, 访问时间为 八月 6, 2025， [https://www.investopedia.com/terms/d/deltaneutral.asp](https://www.investopedia.com/terms/d/deltaneutral.asp)  
60. aoki-h-jp/funding-rate-arbitrage \- GitHub, 访问时间为 八月 6, 2025， [https://github.com/aoki-h-jp/funding-rate-arbitrage](https://github.com/aoki-h-jp/funding-rate-arbitrage)  
61. Backend and Hosted SDK | Pendle Documentation, 访问时间为 八月 6, 2025， [https://docs.pendle.finance/Developers/Backend/BackendAndHostedSDK](https://docs.pendle.finance/Developers/Backend/BackendAndHostedSDK)  
62. pendle-finance/pendle-core-v2-public \- GitHub, 访问时间为 八月 6, 2025， [https://github.com/pendle-finance/pendle-core-v2-public](https://github.com/pendle-finance/pendle-core-v2-public)  
63. Pendle \- GitHub, 访问时间为 八月 6, 2025， [https://github.com/pendle-finance](https://github.com/pendle-finance)  
64. pendle-finance/pendle-sdk: SDK for interacting with pendle smart contracts \- GitHub, 访问时间为 八月 6, 2025， [https://github.com/pendle-finance/pendle-sdk](https://github.com/pendle-finance/pendle-sdk)  
65. pendle-finance/pendle-sdk-core-v2-docs \- GitHub, 访问时间为 八月 6, 2025， [https://github.com/pendle-finance/pendle-sdk-core-v2-docs](https://github.com/pendle-finance/pendle-sdk-core-v2-docs)  
66. pendle/boros-offchain-math \- NPM, 访问时间为 八月 6, 2025， [https://www.npmjs.com/package/@pendle/boros-offchain-math](https://www.npmjs.com/package/@pendle/boros-offchain-math)  
67. Home | Pendle Documentation, 访问时间为 八月 6, 2025， [https://docs.pendle.finance/Home](https://docs.pendle.finance/Home)  
68. Pencosystem \- Pendle, 访问时间为 八月 6, 2025， [https://www.pendle.finance/pencosystem](https://www.pendle.finance/pencosystem)  
69. Ethereum Price Today \- Live ETH to USD Chart & Rate \- FXEmpire, 访问时间为 八月 6, 2025， [https://www.fxempire.com/crypto/ethereum](https://www.fxempire.com/crypto/ethereum)  
70. Pendlen uutena tuotteena ... | Yoko OKX Feed | OKX Suomi, 访问时间为 八月 6, 2025， [https://www.okx.com/fi/feed/post/43119149961313](https://www.okx.com/fi/feed/post/43119149961313)  
71. Pendle Price Prediction 2025: PENDLE Eyes New All-Time High \- CCN.com, 访问时间为 八月 6, 2025， [https://www.ccn.com/analysis/crypto/pendle-price-prediction/](https://www.ccn.com/analysis/crypto/pendle-price-prediction/)  
72. CoinMarketCap Crypto Yearbook 2024-2025, 访问时间为 八月 6, 2025， [https://coinmarketcap.com/yearbook-2024-25/](https://coinmarketcap.com/yearbook-2024-25/)  
73. Delta-neutral trading is a growing requirement for buy-sides: How can brokers respond?, 访问时间为 八月 6, 2025， [https://iongroup.com/blog/markets/delta-neutral-trading-is-a-growing-requirement-for-buy-sides-how-can-brokers-respond/](https://iongroup.com/blog/markets/delta-neutral-trading-is-a-growing-requirement-for-buy-sides-how-can-brokers-respond/)  
74. How to earn steady profits through Delta neutral positions \- Binance, 访问时间为 八月 6, 2025， [https://www.binance.com/en/square/post/14341735951426](https://www.binance.com/en/square/post/14341735951426)  
75. Delta Neutral Strategies and Profit From Volatility : r/quant \- Reddit, 访问时间为 八月 6, 2025， [https://www.reddit.com/r/quant/comments/17lvrgm/delta\_neutral\_strategies\_and\_profit\_from/](https://www.reddit.com/r/quant/comments/17lvrgm/delta_neutral_strategies_and_profit_from/)  
76. Pendle Documentation | Pendle Documentation, 访问时间为 八月 6, 2025， [https://docs.pendle.finance/](https://docs.pendle.finance/)  
77. Pendle V2 API Docs, 访问时间为 八月 6, 2025， [https://api-v2.pendle.finance/core/docs](https://api-v2.pendle.finance/core/docs)  
78. Live Online auctioneers \- The Saleroom, 访问时间为 八月 6, 2025， [https://www.the-saleroom.com/en-gb/auctioneers](https://www.the-saleroom.com/en-gb/auctioneers)  
79. Pendle Finance Deep Dive With Founder TN Lee \- YouTube, 访问时间为 八月 6, 2025， [https://www.youtube.com/watch?v=7B-YIse3Hgw](https://www.youtube.com/watch?v=7B-YIse3Hgw)  
80. Power Level Wednesday\!: Ask r/EDH what's your deck's power level? \- January 04, 2023, 访问时间为 八月 6, 2025， [https://www.reddit.com/r/EDH/comments/102zpb4/power\_level\_wednesday\_ask\_redh\_whats\_your\_decks/](https://www.reddit.com/r/EDH/comments/102zpb4/power_level_wednesday_ask_redh_whats_your_decks/)  
81. Audit Findings \- Pendle Council, 访问时间为 八月 6, 2025， [https://www.pendle.gov.uk/download/downloads/id/10220/statement\_of\_accounts\_2017\_to\_2018\_-\_audit\_findings\_report.pdf](https://www.pendle.gov.uk/download/downloads/id/10220/statement_of_accounts_2017_to_2018_-_audit_findings_report.pdf)  
82. Audits \- Chainsecurity, 访问时间为 八月 6, 2025， [https://www.chainsecurity.com/smart-contract-audit-reports](https://www.chainsecurity.com/smart-contract-audit-reports)  
83. Code Assessment of the CCTP V2 Smart Contracts, 访问时间为 八月 6, 2025， [https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/CCTP/ChainSecurity\_Circle\_CCTP\_audit\_2025-07.pdf](https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/CCTP/ChainSecurity_Circle_CCTP_audit_2025-07.pdf)  
84. Spearbook: Audit Process \- HackMD, 访问时间为 八月 6, 2025， [https://hackmd.io/@cbym/ByL02vxj5](https://hackmd.io/@cbym/ByL02vxj5)  
85. Corporate Audit Plan \- Pendle Council, 访问时间为 八月 6, 2025， [https://www.pendle.gov.uk/download/meetings/id/30822/item\_6\_-\_external\_auditors\_audit\_plan\_202425](https://www.pendle.gov.uk/download/meetings/id/30822/item_6_-_external_auditors_audit_plan_202425)  
86. Download Statement of Accounts 2021 to 2022 \- Audit Findings Report now \- Pendle Borough Council, 访问时间为 八月 6, 2025， [https://www.pendle.gov.uk/download/downloads/id/12174/statement\_of\_accounts\_2021\_to\_2022\_-\_audit\_findings\_report.pdf](https://www.pendle.gov.uk/download/downloads/id/12174/statement_of_accounts_2021_to_2022_-_audit_findings_report.pdf)  
87. Security Audit Report | Synthetic Asset Platform Smart Contracts | Tezos Foundation \- Least Authority, 访问时间为 八月 6, 2025， [https://leastauthority.com/wp-content/uploads/2021/09/Least-Authority-Tezos-Foundation-Synthetic-Asset-Platform-Smart-Contracts-Final-Audit-Report.pdf](https://leastauthority.com/wp-content/uploads/2021/09/Least-Authority-Tezos-Foundation-Synthetic-Asset-Platform-Smart-Contracts-Final-Audit-Report.pdf)  
88. Pendle BC Audit Findings Report 2018 19 Final 30-7-19 \- Scribd, 访问时间为 八月 6, 2025， [https://www.scribd.com/document/726583515/Pendle-BC-Audit-Findings-Report-2018-19-Final-30-7-19](https://www.scribd.com/document/726583515/Pendle-BC-Audit-Findings-Report-2018-19-Final-30-7-19)  
89. Published Security Audits \- Least Authority, 访问时间为 八月 6, 2025， [https://leastauthority.com/security-consulting/published-audits/](https://leastauthority.com/security-consulting/published-audits/)  
90. DOC22/835396 Michael Cassel Planning Secretary Department of, 访问时间为 八月 6, 2025， [https://www.schoolinfrastructure.nsw.gov.au/content/dam/infrastructure/projects/p/pendle-hill-high-school/2022/september/Condition\_C43\_-\_Response\_to\_Independent\_Audit\_Report\_2.pdf](https://www.schoolinfrastructure.nsw.gov.au/content/dam/infrastructure/projects/p/pendle-hill-high-school/2022/september/Condition_C43_-_Response_to_Independent_Audit_Report_2.pdf)  
91. Annual Internal Audit Report & Audit Opinion \- \- Hyndburn Borough, 访问时间为 八月 6, 2025， [https://democracy.hyndburnbc.gov.uk/documents/s2626/4.%20B.%20Annual%20Audit%20Report%202015-16.pdf](https://democracy.hyndburnbc.gov.uk/documents/s2626/4.%20B.%20Annual%20Audit%20Report%202015-16.pdf)  
92. FModel \- Discord, 访问时间为 八月 6, 2025， [https://discord.com/invite/fmodel](https://discord.com/invite/fmodel)  
93. Save, Grow, Spend. Do more with your crypto | ether.fi, 访问时间为 八月 6, 2025， [https://www.ether.fi/](https://www.ether.fi/)  
94. DeriW Launches Its Mainnet, Ushering in a New Era of Gas Free On-Chain Derivatives \- Decrypt, 访问时间为 八月 6, 2025， [https://decrypt.co/333542/deriw-launches-its-mainnet-ushering-in-a-new-era-of-gas-free-on-chain-derivatives](https://decrypt.co/333542/deriw-launches-its-mainnet-ushering-in-a-new-era-of-gas-free-on-chain-derivatives)  
95. Hyperliquid Price Forecast: Bears aim for levels below $30 as short bets rise \- FXStreet, 访问时间为 八月 6, 2025， [https://www.fxstreet.com/cryptocurrencies/news/hyperliquid-price-forecast-bears-aim-for-levels-below-30-as-short-bets-rise-202508060838](https://www.fxstreet.com/cryptocurrencies/news/hyperliquid-price-forecast-bears-aim-for-levels-below-30-as-short-bets-rise-202508060838)  
96. DeFi Protocols: What Can We Learn From the Top 10 \- Hedera, 访问时间为 八月 6, 2025， [https://hedera.com/learning/decentralized-finance/defi-protocols](https://hedera.com/learning/decentralized-finance/defi-protocols)  
97. Understanding Funding Rates in Perpetual Futures and Their Impact | Coinbase, 访问时间为 八月 6, 2025， [https://www.coinbase.com/learn/perpetual-futures/understanding-funding-rates-in-perpetual-futures](https://www.coinbase.com/learn/perpetual-futures/understanding-funding-rates-in-perpetual-futures)  
98. SEC Announces Launch of “Project Crypto” | Insights | Sidley Austin LLP, 访问时间为 八月 6, 2025， [https://www.sidley.com/en/insights/newsupdates/2025/08/sec-announces-launch-of-project-crypto](https://www.sidley.com/en/insights/newsupdates/2025/08/sec-announces-launch-of-project-crypto)  
99. How to invest in DeFi I Trading and Investing Strategies \- NAGA, 访问时间为 八月 6, 2025， [https://naga.com/eu/academy/defi-trading-investing](https://naga.com/eu/academy/defi-trading-investing)  
100. 0x | Powerful APIs to build financial apps on crypto rails, 访问时间为 八月 6, 2025， [https://0x.org/](https://0x.org/)  
101. How DAC 8 affects crypto assets in investment funds \- Ogier, 访问时间为 八月 6, 2025， [https://www.ogier.com/news-and-insights/insights/how-dac-8-affects-crypto-assets-in-investment-funds/](https://www.ogier.com/news-and-insights/insights/how-dac-8-affects-crypto-assets-in-investment-funds/)  
102. Mallinckrodt plc Reports Financial Results for Second Quarter 2025 and Provides Guidance, 访问时间为 八月 6, 2025， [https://www.mallinckrodt.com/about/news-and-media/news-detail/?id=32881](https://www.mallinckrodt.com/about/news-and-media/news-detail/?id=32881)  
103. Interest Rates | Interactive Brokers LLC, 访问时间为 八月 6, 2025， [https://www.interactivebrokers.com/en/accounts/fees/pricing-interest-rates.php](https://www.interactivebrokers.com/en/accounts/fees/pricing-interest-rates.php)  
104. Funding Rates: How They Impact Perpetual Swap Positions \- Amberdata Blog, 访问时间为 八月 6, 2025， [https://blog.amberdata.io/funding-rates-how-they-impact-perpetual-swap-positions](https://blog.amberdata.io/funding-rates-how-they-impact-perpetual-swap-positions)  
105. Top 5 Defi Derivatives 2025 \- SoluLab, 访问时间为 八月 6, 2025， [https://www.solulab.com/top-defi-derivatives/](https://www.solulab.com/top-defi-derivatives/)  
106. Fundamentals of Perpetual FuturesWe are grateful to Lin William Cong, Urban Jermann, Shimon Kogan, Tim Roughgarden, Adrien Verdelhan, as well as conference participants at the 2024 Utah Winter Finance Conference and seminar participants at a16z Crypto, Hebrew University, Reichman University, and the Virtual Derivatives Workshop for their insightful feedback and helpful comments. Songrun He \- arXiv, 访问时间为 八月 6, 2025， [https://arxiv.org/html/2212.06888v5](https://arxiv.org/html/2212.06888v5)  
107. Bill Lee (Tennessee) \- Ballotpedia, 访问时间为 八月 6, 2025， [https://ballotpedia.org/Bill\_Lee\_(Tennessee)](https://ballotpedia.org/Bill_Lee_\(Tennessee\))  
108. Web3 Security Auditor's 2024 Rewind \- OpenZeppelin Blog, 访问时间为 八月 6, 2025， [https://blog.openzeppelin.com/web3-security-auditors-2024-rewind](https://blog.openzeppelin.com/web3-security-auditors-2024-rewind)  
109. \[ARFC\] Onboard Pendle PT tokens to Aave V3 Core Instance \- Governance, 访问时间为 八月 6, 2025， [https://governance.aave.com/t/arfc-onboard-pendle-pt-tokens-to-aave-v3-core-instance/20541](https://governance.aave.com/t/arfc-onboard-pendle-pt-tokens-to-aave-v3-core-instance/20541)  
110. \[ARFC\] Onboard Pendle PT tokens to Aave V3 Core Instance \- \#5 by bgdlabs \- Governance, 访问时间为 八月 6, 2025， [https://governance.aave.com/t/arfc-onboard-pendle-pt-tokens-to-aave-v3-core-instance/20541/5](https://governance.aave.com/t/arfc-onboard-pendle-pt-tokens-to-aave-v3-core-instance/20541/5)  
111. Yield Tokenization Protocols, How They're Made: Pendle \- MixBytes, 访问时间为 八月 6, 2025， [https://mixbytes.io/blog/yield-tokenization-protocols-how-they-re-made-pendle](https://mixbytes.io/blog/yield-tokenization-protocols-how-they-re-made-pendle)  
112. Pendle Rilis Boros, Buka Akses Trading Funding Rate Kripto \- Coinvestasi, 访问时间为 八月 6, 2025， [https://coinvestasi.com/berita/pendle-rilis-boros-akses-trading-funding-rate](https://coinvestasi.com/berita/pendle-rilis-boros-akses-trading-funding-rate)  
113. Pendle Finance: A Guide to DeFi Yield Trading Strategies \- YouTube, 访问时间为 八月 6, 2025， [https://www.youtube.com/watch?v=7f-BxhmZ86I](https://www.youtube.com/watch?v=7f-BxhmZ86I)  
114. Pendle Weekly Report Overview: Pendle releases new Boros features and year-end airdrop plan, and vePENDLE users who lock up vePENDLE receive multiple | Bitget News, 访问时间为 八月 6, 2025， [https://www.bitget.com/news/detail/12560604427952](https://www.bitget.com/news/detail/12560604427952)  
115. Pendle \- YouTube, 访问时间为 八月 6, 2025， [https://m.youtube.com/@pendle\_fi](https://m.youtube.com/@pendle_fi)  
116. Pendle.fi Tutorial (Pendle Finance Explained & Strategies) \- YouTube, 访问时间为 八月 6, 2025， [https://www.youtube.com/watch?v=zlPF3txlNps](https://www.youtube.com/watch?v=zlPF3txlNps)  
117. Terms of Use | Pendle Documentation, 访问时间为 八月 6, 2025， [https://docs.pendle.finance/TermsOfUse](https://docs.pendle.finance/TermsOfUse)  
118. Gov. Lee, The Boring Company Unveil Transformative Underground Music City Loop Project, 访问时间为 八月 6, 2025， [https://www.tn.gov/governor/news/2025/7/28/gov--lee--the-boring-company-unveil-transformative-underground-music-city-loop-project.html](https://www.tn.gov/governor/news/2025/7/28/gov--lee--the-boring-company-unveil-transformative-underground-music-city-loop-project.html)  
119. Gov. Lee Marks the Close of the 2025 Legislative Session, Applauds Passage of “Tennessee Innovates” Agenda, 访问时间为 八月 6, 2025， [https://www.tn.gov/governor/news/2025/4/22/gov--lee-marks-the-close-of-the-2025-legislative-session--applauds-passage-of--tennessee-innovates--agenda.html](https://www.tn.gov/governor/news/2025/4/22/gov--lee-marks-the-close-of-the-2025-legislative-session--applauds-passage-of--tennessee-innovates--agenda.html)  
120. Construction Projects \- Lee Company, 访问时间为 八月 6, 2025， [https://www.leecompany.com/construction-projects/](https://www.leecompany.com/construction-projects/)  
121. Lee calls for innovation, $59.5 billion Tennessee budget \- Nashville Banner, 访问时间为 八月 6, 2025， [https://nashvillebanner.com/2025/02/11/lee-state-of-the-state-tennessee/](https://nashvillebanner.com/2025/02/11/lee-state-of-the-state-tennessee/)  
122. Gov. Lee's Strategy: A New Era for Tennessee's Growth & Prosperity | Baker Donelson, 访问时间为 八月 6, 2025， [https://www.bakerdonelson.com/gov-lees-strategy-new-era-tennessee-growth-prosperity](https://www.bakerdonelson.com/gov-lees-strategy-new-era-tennessee-growth-prosperity)  
123. Boros: Markets, 访问时间为 八月 6, 2025， [https://boros.pendle.finance](https://boros.pendle.finance)  
124. Pendle overview | Token Terminal, 访问时间为 八月 6, 2025， [https://tokenterminal.com/terminal/projects/pendle](https://tokenterminal.com/terminal/projects/pendle)  
125. 访问时间为 一月 1, 1970， [https://twitter.com/boros\_fi](https://twitter.com/boros_fi)  
126. 访问时间为 一月 1, 1970， [https://twitter.com/pendle\_fi](https://twitter.com/pendle_fi)