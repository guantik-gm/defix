

# **Infrared Finance：对Berachain顶级流动性质押协议的机构级投资分析**

## **第1部分：执行摘要**

Infrared Finance（infrared.finance）是专为Berachain区块链构建的旗舰级去中心化金融（DeFi）协议。它不仅是Berachain生态系统中的一个应用，更是其创新的流动性证明（Proof of Liquidity, PoL）共识机制的核心基础设施和主要入口。通过将复杂的PoL机制（包括验证者委托、贿赂和治理代币管理）抽象为“一键式”解决方案，Infrared极大地降低了用户参与Berachain核心经济引擎的门槛，从而迅速确立了其市场主导地位。

本报告的核心发现表明，Infrared Finance代表了一项对整个Berachain生态系统未来成功的高风险、高回报的杠杆化投资。其优势在于其结构性的护城河——通过其流动性质押代币iBGT，它有效地成为了Berachain治理代币BGT流动性的主要来源，从而有望成为生态系统的“元治理”层。该协议获得了包括Framework Ventures和YZi Labs（前身为Binance Labs）在内的顶级风险投资机构的强力支持，总计融资1875万美元，这为其发展提供了雄厚的资本和战略资源。根据链上数据显示，Infrared不仅在Berachain的流动性质押领域占据近乎垄断的市场份额，并且已经实现了可观的协议收入，证明了其商业模式的可行性。

然而，与高潜力相伴的是重大风险。Infrared的命运与新兴的、尚未经过市场长期考验的Berachain L1公链完全绑定。Berachain自身的任何技术故障、安全漏洞或经济模型失灵都将直接对Infrared构成生存威胁。此外，协议团队的核心成员（如化名“Raito Bear”的创始人）的匿名性带来了运营和问责风险。尽管其代币iBGU和iBERA在主网上线初期的价格表现不佳，反映出市场情绪已从投机炒作转向对可持续收益的理性评估，但这也为关注基本面的投资者提供了潜在的切入点。

对于投资者而言，最直接的机会在于参与其“积分计划”，该计划预计将在2025年第三季度代币生成事件（TGE）中转换为空投。对于更高级的投资者，本报告详细阐述了高年化收益率（APR）的流动性挖矿、循环杠杆以及旨在对冲市场波动的德尔塔中性（Delta-Neutral）策略。

**最终投资评级：投机性买入（Speculative Buy）**

**投资论点：** Infrared Finance凭借其在Berachain生态系统中的结构性核心地位、强大的资本支持和已验证的创收能力，构成了一个引人注目的非对称投资机会。它为投资者提供了对一个新兴L1生态系统未来增长的杠杆化敞口。然而，鉴于其对单一L1的高度依赖性、团队的匿名性以及早期DeFi市场固有的波动性，此项投资具有高度投机性。建议具有高风险承受能力、对Berachain的PoL模型有坚定信心的投资者，通过参与其积分计划和审慎部署资本来获取敞口。

## **第2部分：Berachain论述：流动性证明与Infrared的共生角色**

要准确评估Infrared Finance的投资价值，必须首先理解其赖以生存的底层区块链——Berachain及其独特的共识机制。Infrared的成功并非孤立现象，而是与Berachain的设计哲学和经济模型深度共生的结果。

### **流动性证明（PoL）技术概述**

Berachain采用了一种名为流动性证明（Proof of Liquidity, PoL）的新型共识机制，旨在解决传统权益证明（Proof of Stake, PoS）网络中常见的流动性割裂和激励错位问题 1。与PoS要求验证者锁定大量原生代币以保障网络安全不同，PoL通过激励用户将流动性提供给生态系统内的去中心化应用（dApps）来实现同样的目标 4。

这一机制围绕一个三代币模型构建 6：

* **BERA ($BERA):** 作为网络的原生Gas代币和质押代币，用于支付交易费用和验证者质押。  
* **BGT ($BGT):** 一种不可转让的治理代币，类似于“灵魂绑定代币”（Soulbound Token）。BGT通过向白名单dApp流动性池的提供者发放，用于指导未来的BGT释放方向，并增加验证者的区块奖励 6。  
* **HONEY ($HONEY):** Berachain生态系统的原生超额抵押稳定币。

在PoL机制下，网络安全与生态流动性被直接挂钩。用户通过为dApps提供流动性来赚取BGT奖励，而验证者则通过质押BERA和积累BGT来获得区块生产权和奖励。这种设计旨在创造一个正向飞轮：更多的流动性带来更强的网络安全和更繁荣的dApp生态，从而吸引更多用户和流动性。

### **Infrared作为PoL的抽象层**

尽管PoL机制在理论上极具创新性，但其内在的复杂性——涉及流动性提供、BGT申领、验证者委托、贿赂市场等多个环节——对普通用户构成了极高的参与门槛。如果无法有效引导资本参与，这一精巧的经济引擎将难以启动。

Infrared Finance的出现正是为了解决这一核心痛点。它将自身定位为PoL的“意图中心”（intent-centric）或“一键式”解决方案 9。通过其自动化的智能合约金库（Vaults），Infrared将一系列复杂操作打包，允许用户仅通过存入流动性池（LP）代币，就能无缝参与到整个PoL的收益流程中，而无需理解背后繁琐的委托和治理机制 1。这种对复杂性的极致抽象，是Infrared能够迅速吸引大量资本并主导市场的根本原因。

### **共生关系分析**

Infrared与Berachain之间的关系是深度共生且相互强化的。一方面，Infrared的成功依赖于Berachain生态的整体增长；另一方面，Berachain的增长在很大程度上也依赖于Infrared作为其核心经济机制的用户友好界面。

这种关系催生了Infrared强大的结构性护城河。首先，Infrared不仅仅是一个应用，它更是一个“门户协议”（Gateway Protocol）。Berachain的PoL机制虽然强大，但对新用户而言极其复杂。Infrared通过简化用户体验，有效地成为了资本进入Berachain生态并参与其核心收益活动的主要入口。因此，Infrared的成功不仅是Berachain增长的体现，更是其实现主流采用的*先决条件*。该协议的健康状况直接反映了整个Berachain DeFi生态系统的活力。投资Infrared，在功能上等同于对Berachain吸引和留存流动性能力的杠杆化押注。

其次，Infrared正在演变为Berachain的“元治理”层，形成一个“BGT黑洞”。由于原生的BGT代币是不可转让的，而Infrared的iBGT是其首个且主要的流动性解决方案 2。这导致生态系统中绝大部分的

BGT奖励都通过Infrared的合约进行处理和分发。通过汇集和控制大量的BGT，Infrared实际上控制了这些治理权力的委托方向，从而影响哪些验证者和dApp能获得更多的BGT排放 11。这种动态在测试网阶段已得到验证，当时Infrared成为了最大的

BGT委托方 12。这与以太坊上Curve和Convex的动态极为相似——控制了基础层治理代币排放的协议，最终将控制基础层的经济走向。这种结构性主导地位为Infrared构建了一道强大且持久的竞争壁垒。

## **第3部分：协议架构与产品套件分析**

Infrared Finance的核心价值主张通过其精心设计的产品套件得以实现，主要包括流动性质押代币（LSTs）和自动化PoL金库。

### **流动性质押代币（LSTs）：iBGT 与 iBERA**

Infrared推出了两种核心的流动性质押代币，旨在解决Berachain原生代币的流动性限制问题，并最大化资本效率。

* **iBGT:** 这是为Berachain不可转让的治理代币BGT设计的流动性封装代币 1。用户通过将PoL合格池的LP代币存入Infrared金库，即可赚取  
  iBGT，而不是流动性受限的原生BGT 7。  
  iBGT由BGT以1:1的比例支持，使其成为一种可交易、可组合的资产，极大地释放了BGT的内在价值 3。  
* **iBERA:** 这是为Berachain的Gas代币BERA提供的流动性质押解决方案 13。通过  
  iBERA，用户无需自行运营验证者节点，即可参与BERA质押并赚取网络安全奖励，从而使普通用户也能分享到验证者级别的收益 11。

这两种LSTs的设计核心在于其**可组合性**。与被锁定的原生资产不同，iBGT和iBERA可以在整个Berachain DeFi生态系统中自由流动，用作借贷协议的抵押品、在去中心化交易所（DEX）中组建流动性对，或参与更复杂的收益策略，从而实现了资本效率的指数级提升 2。

### **流动性证明（PoL）金库**

Infrared的PoL金库是其业务逻辑的核心，它是一系列智能合约，旨在为用户自动化整个PoL参与过程 2。

* **机制:** 用户将从BEX或Kodiak等DEX获得的LP代币存入相应的Infrared金库。金库的后端逻辑会自动处理所有后续步骤：质押LP代币以赚取BGT，将积累的BGT委托给一组分散的、经过筛选的验证者以最大化贿赂和区块奖励，最后将所有收益（包括BGT、贿赂等）转换成流动的iBGT代币返还给用户。  
* **费用结构:** Infrared的商业模式对用户极为友好，这构成了其另一大竞争优势。协议**不收取任何存款或取款费用**，仅对用户赚取的**奖励征收一小部分绩效费** 9。这笔费用将分配给Infrared未来发行的原生治理代币（原定为  
  $IRED，新代码待定）的持有者 9。这种模式将协议的利益与用户的利益紧密绑定——只有当用户赚钱时，协议才能获得收入，这是一种高度可持续且具有吸引力的价值捕获机制。

## **第4部分：量化性能分析：链上指标与财务健康**

对Infrared Finance的链上数据进行分析，可以揭示其市场地位、创收能力和用户增长趋势。数据主要来源于DeFiLlama和Token Terminal等专业分析平台。

### **总锁仓价值（TVL）与市场主导地位**

Infrared在Berachain生态系统中占据了绝对的主导地位。根据DeFiLlama的数据，截至分析时，Infrared在Berachain链上的总锁仓价值（TVL）为**5.5422亿美元**，在所有协议中排名第一，远超第二名Kodiak的1.4726亿美元 17。

在流动性质押这一特定赛道中，其优势更为显著。其TVL达到**14.6亿美元**，占据了Berachain上流动性质押市场\*\*98.90%\*\*的份额，形成了事实上的垄断 18。这种级别的市场主导地位不仅仅是先发优势的体现，它更是对前述“门户协议”角色的量化证明。绝大多数希望参与Berachain核心PoL机制的资本都选择通过Infrared进入，因为它是最高效、最便捷的途径。这形成了一个强大的网络效应和流动性护城河，任何潜在的竞争对手都难以在短期内撼动。

### **协议收入与费用产生**

Infrared已经展示出强大的、可持续的创收能力。DeFiLlama的数据显示，该协议的累计费用和收入已达**659万美元**。最近30天的收入为**711,695美元**，24小时收入为**20,385美元**，折合年化收入高达**868万美元** 19。

协议的费用完全来源于对用户 staking 奖励的抽成，而收入则是这部分费用归属于协议的部分 19。这证实了其仅收取绩效费的商业模式，表明协议的收入增长与用户的收益直接相关，是一个健康的增长模型。

### **用户参与度和增长指标**

Token Terminal的数据为我们提供了用户活跃度的视角。该协议拥有**11名核心开发者**，每周活跃地址数（WAU）为**9,100个**，每月活跃地址数（MAU）为**19,100个** 22。

值得注意的是，虽然周活跃地址数呈现出89.1%的强劲增长，但日活跃地址数（-45.9%）和月活跃地址数（-2.6%）近期有所下降 22。这可能表明，在Berachain主网上线初期的投机热潮过后，市场正在进入一个用户基数更为稳固的整合阶段。这一趋势需要持续监控，以判断是短期回调还是长期用户流失的信号。

#### **表格：Infrared关键绩效指标**

| 指标 (Metric) | 当前值 (Current Value) | 30天趋势 (30-Day Trend) | 数据来源 (Source) |
| :---- | :---- | :---- | :---- |
| TVL (Berachain) | $5.54亿 | \-27.15% | 17 |
| TVL主导地位 (流动性质押) | 98.90% | N/A | 18 |
| 年化收入 (Annualized Revenue) | $868万 | N/A (基于30天数据) | 19 |
| 月活跃用户 (MAU) | 19,100 | \-2.6% | 22 |
| 核心开发者 (Core Developers) | 11 | \+57.1% | 22 |

## **第5部分：代币表现与市场分析（iBGT & iBERA）**

iBGT和iBERA是Infrared协议产生的核心资产，它们的市场表现直接反映了用户对PoL收益的预期和对Berachain生态的信心。

### **价格与交易量分析**

根据CoinGecko的最新数据，iBGT的交易价格约为**1.83美元至1.86美元**，24小时交易量约为53万美元 23。

iBERA的价格约为**1.59美元至1.64美元**，24小时交易量约为25万美元 25。

两种代币自上线以来都经历了显著的价格回调。iBGT的价格已从其历史最高点（ATH）11.74美元下跌约**84%**，而iBERA也从其ATH 8.98美元下跌约**82%** 24。在过去30天内，

iBGT对美元下跌约44%，iBERA下跌约30% 23。这种剧烈的价格下跌与Berachain原生代币

BERA上线后的表现密切相关（BERA曾下跌57% 27），表明市场情绪已从最初的狂热投机冷却下来。

### **市值与供应量**

* **iBGT 市值:** 约**2217万美元**，流通供应量约1200万枚 24。  
* **iBERA 市值:** 约**1.398亿美元**，流通供应量约8500万枚 25。

一个关键的积极信号是，这两种LST的市值与完全稀释估值（FDV）之比均为1.0，这意味着它们的全部供应量已经进入流通，不存在未来代币解锁带来的抛压风险 24。

这种价格的大幅回调，虽然对早期高点买入的投资者造成了损失，但也为新的投资者提供了重新评估的机会。当前的价格不再反映对空投的投机预期，而是开始趋向于反映市场对Berachain生态系统所能产生的*可持续长期收益*的真实预期。因此，对iBGT和iBERA的投资分析，不应再基于对价格重返ATH的幻想，而应将其视为对一个永续生息资产的投资。核心问题在于，当前价格所隐含的PoL年化收益率是否具有足够的吸引力。

此外，这些代币相对于更广泛的加密市场的表现不佳（underperforming）23，表明它们的价值已与大盘脱钩，其价格动态更紧密地与Berachain L1自身的表现和市场情绪相关。

#### **表格：iBGT vs. iBERA 代币指标对比**

| 指标 (Token) | 价格 (Price) | 市值 (Market Cap) | 完全稀释估值 (FDV) | 24小时交易量 (24h Volume) | 流通供应量 (Circulating Supply) | 历史最高价 (ATH) | 距ATH跌幅 (% Drawdown) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **iBGT** | \~$1.86 | \~$22.17M | \~$22.17M | \~$533K | \~11.9M | $11.74 | \~84.2% |
| **iBERA** | \~$1.64 | \~$139.8M | \~$139.8M | \~$258K | \~85.3M | $8.98 | \~81.8% |

注：数据截至报告撰写时，来源于CoinGecko 24。

## **第6部分：融资背景与资本结构：投资者视角**

一个DeFi协议的融资历史和投资者构成是评估其长期潜力和市场信誉的关键指标。Infrared Finance在这方面表现出色，获得了顶级资本的强力背书。

### **融资轮次总结**

根据CryptoRank、The Block和PitchBook等多方数据源，Infrared Finance已通过三轮融资，累计筹集了**1875万美元**的资金 27。所有融资轮次均采用未来代币简单协议（SAFT）的形式进行 8。

* **种子轮 (Seed Round) \- 2024年1月:** 筹集**250万美元**，由Synergis领投，参投方包括NGC Ventures、Tribe Capital、Shima Capital、Signum Capital、dao5等知名机构和天使投资人 28。  
* **战略轮 (Strategic Round) \- 2024年6月:** 筹集**225万美元**，投资方为YZi Labs（前身为Binance Labs）、Hack VC和No Limit Holdings 27。  
* **A轮 (Series A) \- 2025年2月:** 筹集**1400万美元**，由Framework Ventures领投，参投方包括Animoca Brands、Citizen X、NGC Ventures、Selini Capital等 27。

#### **表格：Infrared Finance融资历史**

| 日期 (Date) | 轮次类型 (Round Type) | 融资金额 (Amount Raised) | 领投方 (Lead Investor(s)) | 主要参投方 (Notable Participants) |
| :---- | :---- | :---- | :---- | :---- |
| 2024年1月 | 种子轮 (Seed) | $250万 | Synergis | NGC Ventures, Tribe Capital, Shima Capital |
| 2024年6月 | 战略轮 (Strategic) | $225万 | YZi Labs (Binance Labs) | Hack VC, No Limit Holdings |
| 2025年2月 | A轮 (Series A) | $1400万 | Framework Ventures | Animoca Brands, NGC Ventures, Citizen X |

### **投资者阵容分析**

Infrared的投资者名单堪称豪华，其中最引人注目的是**Framework Ventures**和\*\*YZi Labs (Binance Labs)\*\*的参与 8。这两家机构的投资不仅仅是资本注入，更是强烈的战略信号。

Framework Ventures同时也是Berachain L1的主要投资者之一 27。这种双重押注表明，Framework将Infrared视为其Berachain投资组合中不可或缺的一环，并将在战略层面推动二者的协同发展。

而Binance Labs将Infrared作为其在Berachain生态系统中的**第一笔投资**，其战略意义更为深远 8。这不仅极大地提升了Infrared的市场信誉，也为Infrared未来的原生代币在Binance上市提供了强烈的预期。

这种深度的投资者联盟为Infrared提供了超越资本的战略护城河。它带来了宝贵的行业资源、顶级的战略咨询、潜在的交易所流动性支持以及深度的生态系统整合机会。这些优势使得任何潜在的竞争者都难以复制，极大地降低了Infrared在市场推广和业务发展方面的风险。

## **第7部分：综合风险与安全评估**

对于任何DeFi协议，安全都是其生命线。本节将从智能合约安全、系统性风险和运营风险三个维度对Infrared进行全面评估。

### **智能合约安全**

Infrared团队对协议安全性表现出高度重视，委托了多家行业顶级安全公司对其智能合约进行了多轮审计，包括**Zellic、Spearbit、Cantina和Code4rena** 31。这种多方、持续的审计流程是DeFi安全最佳实践的体现。

其中，由Spearbit和Cantina联合进行的审计报告提供了最深入的洞察 32。该报告的发现可以总结如下：

#### **表格：Spearbit/Cantina安全审计发现摘要**

| 风险等级 (Risk Severity) | 发现数量 (Number of Findings) | 已修复 (Fixed) | 已确认（未修复） (Acknowledged) |
| :---- | :---- | :---- | :---- |
| 严重 (Critical) | 1 | 1 | 0 |
| 高 (High) | 2 | 2 | 0 |
| 中 (Medium) | 8 | 5 | 3 |
| 低 (Low) | 17 | 7 | 10 |
| 信息性 (Informational) | 10 | 0 | 10 |

数据来源: Cantina 32

从这份报告中可以得出两个关键结论。首先，协议中发现的**1个严重风险和2个高风险漏洞均已得到修复**，这表明团队对高危漏洞的响应能力和修复能力是合格的，能够有效处理最紧迫的威胁。

其次，报告中存在大量被“确认”（Acknowledged）但未立即修复的中低风险问题（合计13个）。这可能反映了一种“快速迭代”的开发文化，虽然有利于产品快速上线，但可能会积累技术债。这些未修复的问题在未来与新代码交互时，可能会演变成新的攻击向量。因此，尽管最直接的风险已得到控制，但对协议安全状况的持续监控仍然至关重要。

### **系统性与生态系统风险**

* **对Berachain的依赖:** 这是Infrared面临的最大、最根本的风险。协议的价值完全构建在Berachain之上。如果Berachain L1未能获得市场认可、遭受重大安全攻击，或者其PoL经济模型被证明不可持续，Infrared的价值将随之归零。此前Berachain因其代币分配和上线后价格暴跌而受到的批评，也构成了对整个生态信心的实质性风险 27。  
* **价格预言机操纵风险:** Infrared的金库持有来自第三方DEX（如Kodiak和BEX）的LP代币 7。DeFi历史上充斥着利用闪电贷攻击操纵AMM池内资产价格的案例，这种攻击会导致依赖该价格预言机的其他协议发生连锁崩溃 33。对Infrared而言，最重大的潜在智能合约风险可能并非源于其自身代码，而是源于其合作伙伴DEX的预言机安全。一旦Kodiak上某个PoL合格池的价格被操纵，攻击者可能能够铸造出无抵押的  
  iBGT或干扰奖励计算，从而从Infrared金库中窃取价值。这是一个复杂的系统性风险，需要对整个Berachain DeFi生态的安全状况保持持续警惕。

### **运营与治理风险**

* **团队匿名性:** 协议的联合创始人兼CEO使用化名“Raito Bear” 8。尽管这在加密领域很常见，但它确实带来了关键人物风险和问责制挑战。对该化名背景的搜索未能找到任何确切的个人信息，进一步证实了其匿名性 36。  
* **开发活跃度:** 为了对冲匿名性带来的运营风险，可以考察其开发团队的活跃度。来自GitHub和Token Terminal的数据显示，Infrared拥有一支**5-7人的月度活跃开发者团队**，并保持着持续的代码提交活动 19。这在一定程度上缓解了对项目停滞的担忧，表明背后有一支在积极构建和维护协议的团队。

## **第8部分：社区、开发与生态系统参与**

一个成功的DeFi协议需要强大的社区支持和持续的开发动力。

### **社交媒体与社区情绪**

Infrared在**Twitter (@infraredfinance)、Discord和Medium**等社交平台上保持着活跃和专业的形象，定期发布项目更新、技术解析和社区活动信息 1。其沟通策略侧重于技术构建和生态教育，而非市场炒作。在Reddit等更广泛的加密社区中，关于Infrared的专门讨论相对较少，这表明其社区目前仍主要集中在核心的Berachain生态参与者中 40。

### **开发者活动与透明度**

Infrared在开发者社区建设方面表现出较高的透明度。其在GitHub上的组织infrared-dao已经过验证，并开源了多个关键代码库，包括金库默认列表、数据脚本，甚至空投脚本 39。这种开放的做法有助于建立开发者和用户的信任。

Token Terminal的量化指标进一步证实了其开发实力：**11名核心开发者**和**每月72次代码提交**的数据，对于一个新上线的协议而言，是非常健康的信号，表明项目正处于积极的开发和迭代周期中 19。

## **第9部分：可行的投资机会与高级策略**

对于不同风险偏好的投资者，Infrared Finance提供了从短期投机到长期价值积累的多种参与途径。

### **TGE前空投策略（“积分计划”）**

这是当前最直接、最具吸引力的短期机会。Infrared已正式启动其“积分计划”，积分将在未来（预计为**2025年第三季度**）的代币生成事件（TGE）中兑换为协议原生代币 4。

* **最大化积分策略:** 积分的累积与用户投入的资金量和时长成正比 4。获取积分最高效的方式是  
  **专注于有乘数加成的金库**。  
* **具体高倍率金库:**  
  * Kodiak上的WBERA-iBGT和WBERA-iBERA LP池提供**1.375倍**积分乘数。  
  * BEX上的WBERA-iBERA LP池提供**1.375倍**积分乘数。  
  * Bulla上的WBERA-iBGT LP池提供**1.25倍**积分乘数 4。  
  * 将资金集中在这些高倍率池中，是最大化空投预期收益的关键。  
* 该计划对早期用户具有**追溯性**，奖励了自协议上线以来的忠实参与者 4。

### **高APR收益农场与循环策略**

对于寻求更高收益的高级用户，可以采用多协议组合的循环（Looping）策略，以放大收益和积分获取效率。

* **第一步：提供流动性。** 在Kodiak或BEX等合作DEX上，为PoL合格的交易对（如WBERA-HONEY）提供流动性，并获得LP代币 7。  
* **第二步：在Infrared中质押LP。** 将获得的LP代币存入Infrared对应的金库中，开始赚取iBGT奖励和Infrared积分 7。  
* **第三步：复合与杠杆（Alpha所在）。** 将在Infrared中赚取的iBGT奖励，再次投资到其他提供额外收益层的生态协议中。**Pendle Finance**被明确提及提供iBGT的收益池，不仅提供远高于Infrared基础质押的APR，还提供**2倍的Infrared积分** 48。这种将生息资产（  
  iBGT）再次投入到另一个生息协议（Pendle）中的策略，创造了一个强大的收益和积分复合循环，是DeFi领域获取超额回报的核心技巧。

### **潜在的德尔塔中性策略**

这是一种为规避风险的成熟投资者设计的理论策略，旨在剥离BERA代币的价格波动风险，纯粹地赚取PoL机制产生的收益。

* **理论框架:** 德尔塔中性策略通过构建多头和空头头寸，使投资组合的总德尔塔值为零，从而对冲标的资产的价格波动风险 49。  
* **在Infrared上的应用:**  
  1. **建立多头头寸：** 投资者可以持有一个产生PoL收益的资产，例如WBERA-iBERA LP代币。这个头寸的价值会随着BERA价格的波动而变化。  
  2. **建立空头头寸：** 同时，投资者可以在支持BERA永续合约的交易所（如Delta Exchange 52）上，开立一个等值的  
     BERA空头头寸。  
  3. **实现中性：** 通过精确计算和匹配多头头寸的BERA敞口，空头头寸可以有效对冲BERA价格下跌带来的损失（或价格上涨带来的机会成本）。如此一来，无论BERA价格如何变动，投资组合的净值变化都将非常小，其最终收益主要来源于LP池的交易费和BGT（即iBGT）排放的稳定收益。  
* 该策略执行复杂，需要持续的仓位管理和对衍生品市场的深刻理解，但它为希望获取纯粹DeFi协议收益的投资者提供了一个强大的风险管理工具。

### **开发者生态系统机会**

Infrared通过提供详细的技术文档和开源其部分代码库，积极鼓励开发者在其基础设施之上进行构建 7。虽然目前没有发现Infrared自身的开发者资助计划（相关搜索指向了DFINITY等其他项目 53），但鉴于其作为Berachain核心基础设施的地位，任何希望接入PoL收益流的新协议，与Infrared进行集成都将是最高效的途径。这为开发者创造了巨大的机会，可以通过与Infrared的组合创新，构建出新的DeFi产品。

## **第10部分：竞争格局：Infrared vs. Lido Finance**

将Infrared与以太坊上流动性质押的领导者Lido Finance进行比较，可以更清晰地揭示其独特的市场定位和护城河。

### **核心机制与目标**

* **Lido (PoS):** 其核心目标是解决以太坊PoS质押的流动性问题和32 ETH的高门槛。用户质押ETH以维护以太坊网络安全，Lido通过发行stETH为其提供流动性 55。Lido的成功在于优化了现有PoS网络的参与体验。  
* **Infrared (PoL):** 其核心目标是抽象化Berachain PoL共识机制的复杂性。用户通过为dApp提供流动性来间接维护网络安全，Infrared则负责简化这一过程并最大化生态系统内的资本效率 3。Infrared的价值根植于一个全新的、与众不同的共识层。

### **费用结构**

* **Lido:** 对所有质押奖励收取**10%的固定费用**，由节点运营商和DAO财库分享 55。  
* **Infrared:** 不收取存款或取款费，仅对产生的收益收取**少量绩效费** 11。这种模式对用户更具吸引力，因为它直接与用户收益挂钩。

### **市场地位与护城河**

* **Lido:** Lido在以太坊上拥有巨大的网络效应和深度集成，stETH已成为DeFi世界的一种基础资产或“货币乐高” 59。其护城河来自于其庞大的流动性、品牌认知度和先发优势。然而，其巨大的市场份额也引发了关于中心化风险的担忧 55。  
* **Infrared:** Infrared在Berachain上拥有近乎垄断的地位 18。其护城河是结构性的和共生的——它与L1的核心共识机制紧密交织在一起。竞争对手不仅需要推出一个更好的产品，更需要挑战Infrared对  
  BGT这一核心治理资源的聚集和控制能力，这远比在以太坊上推出另一个LST要困难得多。

这种对比揭示了两种不同类型的护城河。Lido的护城河建立在一个开放竞争市场中的规模和集成之上，而Infrared的护城河则建立在成为一个新兴生态系统中不可或缺的、近乎独占的基础设施之上。可以说，Infrared在其自身生态系统内的地位比Lido在以太坊上的地位更为稳固。然而，这种力量也是其最大的弱点：它的命运完全系于Berachain这一个新兴L1的成败，而Lido的stETH则可以扩展到多个L2和其他区块链网络。

## **第11部分：结论与最终投资建议**

本报告对Infrared Finance进行了深入的多维度分析，综合其技术、市场、财务和安全状况，最终形成以下结论和投资建议。

### **SWOT分析**

* **优势 (Strengths):**  
  * **结构性护城河:** 作为Berachain PoL机制的主要入口，拥有近乎垄断的TVL和市场主导地位。  
  * **元治理潜力:** 通过“BGT黑洞”效应，有望成为Berachain生态的元治理层，具备长期影响力。  
  * **顶级资本背书:** 获得Framework Ventures、YZi Labs (Binance Labs)等战略投资者的支持，资本和资源优势明显。  
  * **已验证的商业模式:** 已实现可观的协议收入，且费用模型对用户友好。  
  * **强大的开发实力:** 拥有活跃的开发团队和透明的开源文化。  
* **劣势 (Weaknesses):**  
  * **单一生态依赖:** 协议的成败完全依赖于新兴L1公链Berachain的未来发展，风险高度集中。  
  * **团队匿名性:** 核心创始人使用化名，存在一定的运营和问责风险。  
  * **代币价格表现:** LST代币上线后价格大幅回调，反映出市场热度消退和对可持续收益的疑虑。  
* **机会 (Opportunities):**  
  * **TGE与空投:** 即将到来的原生代币发行和积分空投是明确的短期催化剂。  
  * **生态增长红利:** Berachain生态的任何增长都将直接转化为Infrared的增长。  
  * **高级策略潜力:** 为成熟投资者提供了高APR农场、循环杠杆和德尔塔中性等多种获取alpha的途径。  
  * **成为“Berachain的Convex”:** 如果成功，其估值天花板极高。  
* **威胁 (Threats):**  
  * **Berachain失败风险:** Berachain L1的技术或经济模型失败将直接导致Infrared价值归零。  
  * **系统性安全风险:** 合作伙伴DEX的预言机被操纵可能对Infrared造成连锁打击。  
  * **监管风险:** 全球范围内对流动性质押和DeFi的监管政策尚不明朗。  
  * **长期竞争:** 尽管目前优势巨大，但未来仍可能出现新的竞争者挑战其BGT聚合模式。

### **最终投资建议：投机性买入 (Speculative Buy)**

Infrared Finance是DeFi领域中一个罕见的投资标的，它不仅仅是一个应用，而是被深度嵌入到一个新兴L1公链核心经济引擎中的基础设施。其结构性优势、强大的资本联盟和已证明的创收能力，共同构成了一个极具吸引力的高风险、高回报投资案例。

**投资Infrared Finance，本质上是投资Berachain的未来。**

因此，本报告给予\*\*“投机性买入”\*\*的投资评级。此评级基于以下判断：

1. **非对称回报:** 鉴于其潜在的元治理地位和对生态系统的杠杆效应，如果Berachain成功，Infrared的回报潜力将远超其风险。  
2. **明确的短期催化剂:** 积分计划和即将到来的TGE为早期参与者提供了明确的价值捕获路径。  
3. **强大的护城河:** 其结构性优势和资本支持使其在Berachain生态中难以被取代。

然而，投资者必须清醒地认识到此项投资的**高度投机性**。它只适合那些对Berachain的PoL模型有深入理解和坚定信心，并且能够承受高波动性甚至全部本金损失风险的投资者。建议的参与方式是，在严格的风险管理框架下，通过参与其积分计划来获取早期敞口，并根据Berachain生态的发展情况，审慎地部署额外资本于其高级收益策略中。

#### **引用的著作**

1. Infrared Finance \- Decentralized Finance \- IQ.wiki, 访问时间为 七月 7, 2025， [https://iq.wiki/wiki/infrared-finance](https://iq.wiki/wiki/infrared-finance)  
2. Infrared Finance \- Decentralized Finance \- IQ.wiki, 访问时间为 七月 6, 2025， [https://www.iq.wiki/wiki/infrared-finance](https://www.iq.wiki/wiki/infrared-finance)  
3. In an interview with: Infrared Finance — Proof of Liquidity in one click. | by SMAPE Capital, 访问时间为 七月 6, 2025， [https://medium.com/smape-capital/in-an-interview-with-infrared-finance-proof-of-liquidity-in-one-click-835784794a03](https://medium.com/smape-capital/in-an-interview-with-infrared-finance-proof-of-liquidity-in-one-click-835784794a03)  
4. Potential Infrared Airdrop » How to be eligible?, 访问时间为 七月 7, 2025， [https://airdrops.io/infrared/](https://airdrops.io/infrared/)  
5. Infrared Finance: The Pillar of Liquidity in the Berachain Ecosystem | Techub News on Binance Square, 访问时间为 七月 7, 2025， [https://www.binance.com/en-IN/square/post/23514885173986](https://www.binance.com/en-IN/square/post/23514885173986)  
6. Stablecoin APR Exceeds 20%: The Ultimate Berachain Mining Guide \- Tiger Brokers, 访问时间为 七月 7, 2025， [https://www.itiger.com/news/2522063061](https://www.itiger.com/news/2522063061)  
7. Infrared Testnet Guide | Earn & Stake iBGT \- Medium, 访问时间为 七月 7, 2025， [https://medium.com/@infraredfinance/infrared-testnet-guide-earn-stake-ibgt-c6a8ebda8490](https://medium.com/@infraredfinance/infrared-testnet-guide-earn-stake-ibgt-c6a8ebda8490)  
8. Berachain liquid staking protocol Infrared raises funds from Binance Labs in token round, 访问时间为 七月 6, 2025， [https://www.theblock.co/post/301356/berachain-liquid-staking-infrared-binance-labs-token-round](https://www.theblock.co/post/301356/berachain-liquid-staking-infrared-binance-labs-token-round)  
9. Introducing: Infrared. Today, we are thrilled to unveil… | by Infrared Finance \- Medium, 访问时间为 七月 6, 2025， [https://medium.com/@infraredfinance/introducing-infrared-0f5c81b59e7f](https://medium.com/@infraredfinance/introducing-infrared-0f5c81b59e7f)  
10. Binance Labs Invests In Infrared To Grow Proof of Liquidity, 访问时间为 七月 6, 2025， [https://www.binance.com/en/blog/ecosystem/binance-labs-invests-in-infrared-to-grow-proof-of-liquidity-8075022596680958942](https://www.binance.com/en/blog/ecosystem/binance-labs-invests-in-infrared-to-grow-proof-of-liquidity-8075022596680958942)  
11. Infrared Finance: The Gateway to Proof-of-Liquidity on Berachain, 访问时间为 七月 6, 2025， [https://www.gate.com/learn/articles/infrared-finance-the-gateway-to-proof-of-liquidity-on-berachain/7320](https://www.gate.com/learn/articles/infrared-finance-the-gateway-to-proof-of-liquidity-on-berachain/7320)  
12. Infrared Finance \- Medium, 访问时间为 七月 6, 2025， [https://medium.com/@infraredfinance](https://medium.com/@infraredfinance)  
13. cointelegraph.com, 访问时间为 七月 6, 2025， [https://cointelegraph.com/crypto-bonus/bonus-page/boost-your-berachain-rewards-by-staking-on-infrared/\#:\~:text=Infrared%20Finance%20is%20a%20liquid,staking%20assets%20into%20liquidity%20vaults.](https://cointelegraph.com/crypto-bonus/bonus-page/boost-your-berachain-rewards-by-staking-on-infrared/#:~:text=Infrared%20Finance%20is%20a%20liquid,staking%20assets%20into%20liquidity%20vaults.)  
14. Infrared Finance \- SPEEDA Edge, 访问时间为 七月 6, 2025， [https://sp-edge.com/companies/3434901](https://sp-edge.com/companies/3434901)  
15. What is infrared bera cryptocurrency, use cases and technology \- OctoBot Cloud, 访问时间为 七月 6, 2025， [https://www.octobot.cloud/what-is-infrared\_bera](https://www.octobot.cloud/what-is-infrared_bera)  
16. Berachain \- The Journey to Bear Village \- Gate.com, 访问时间为 七月 7, 2025， [https://www.gate.com/learn/articles/berachain-the-journey-to-bear-village/6278](https://www.gate.com/learn/articles/berachain-the-journey-to-bear-village/6278)  
17. Berachain \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/chain/Berachain](https://defillama.com/chain/Berachain)  
18. Liquid Staking TVL Rankings \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/protocols/Liquid%20Staking/Berachain](https://defillama.com/protocols/Liquid%20Staking/Berachain)  
19. Infrared Finance \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/protocol/infrared-finance](https://defillama.com/protocol/infrared-finance)  
20. Infrared Finance Fees \- DefiLlama, 访问时间为 七月 6, 2025， [https://defillama.com/fees/infrared-finance](https://defillama.com/fees/infrared-finance)  
21. dimension-adapters/fees/infrared-finance.ts at master \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/DefiLlama/dimension-adapters/blob/master/fees/infrared-finance.ts](https://github.com/DefiLlama/dimension-adapters/blob/master/fees/infrared-finance.ts)  
22. Infrared Finance overview \- Token Terminal, 访问时间为 七月 6, 2025， [https://tokenterminal.com/explorer/projects/infrared](https://tokenterminal.com/explorer/projects/infrared)  
23. IBGT to USD: Infrared BGT Price in US Dollar | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/infrared-bgt/usd](https://www.coingecko.com/en/coins/infrared-bgt/usd)  
24. Infrared BGT Price: IBGT Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/infrared-bgt](https://www.coingecko.com/en/coins/infrared-bgt)  
25. Infrared Bera Price: IBERA Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/infrared-bera](https://www.coingecko.com/en/coins/infrared-bera)  
26. IBERA to USD: Infrared Bera Price in US Dollar | CoinGecko, 访问时间为 七月 6, 2025， [https://www.coingecko.com/en/coins/infrared-bera/usd](https://www.coingecko.com/en/coins/infrared-bera/usd)  
27. Berachain liquid staking protocol Infrared raises $14 million in Series A token round, 访问时间为 七月 6, 2025， [https://www.theblock.co/post/344455/berachain-infrared-series-a-token-round](https://www.theblock.co/post/344455/berachain-infrared-series-a-token-round)  
28. Infrared Funding Rounds, Token Sale Review & Tokenomics Analysis | CryptoRank.io, 访问时间为 七月 6, 2025， [https://cryptorank.io/ico/infrared](https://cryptorank.io/ico/infrared)  
29. Infrared Finance Raises $2.5mm Seed Round \- Medium, 访问时间为 七月 6, 2025， [https://medium.com/@infraredfinance/infrared-finance-raises-2-5mm-seed-round-e4985430166d](https://medium.com/@infraredfinance/infrared-finance-raises-2-5mm-seed-round-e4985430166d)  
30. Infrared 2025 Company Profile: Valuation, Funding & Investors \- PitchBook, 访问时间为 七月 7, 2025， [https://pitchbook.com/profiles/company/569049-76](https://pitchbook.com/profiles/company/569049-76)  
31. As the core protocol of the Berachain ecosystem, Infrared always prioritizes security., 访问时间为 七月 6, 2025， [https://www.binance.com/en/square/post/26449239234953](https://www.binance.com/en/square/post/26449239234953)  
32. Infrared Staking Governance Audit Report | Cantina, 访问时间为 七月 6, 2025， [https://cantina.xyz/portfolio/7efc4e4a-e982-418c-8be4-f8b93108657d](https://cantina.xyz/portfolio/7efc4e4a-e982-418c-8be4-f8b93108657d)  
33. More than $15 million stolen after hackers exploit DeFi platform Inverse Finance, 访问时间为 七月 6, 2025， [https://therecord.media/more-than-15-million-stolen-after-hackers-exploit-defi-platform-inverse-finance](https://therecord.media/more-than-15-million-stolen-after-hackers-exploit-defi-platform-inverse-finance)  
34. Strengthening DeFi Security: A Static Analysis Approach to Flash Loan Vulnerabilities, 访问时间为 七月 6, 2025， [https://arxiv.org/html/2411.01230v1](https://arxiv.org/html/2411.01230v1)  
35. Inverse Finance Incident Analysis \- CertiK, 访问时间为 七月 6, 2025， [https://www.certik.com/resources/blog/inverse-finance-incident-analysis](https://www.certik.com/resources/blog/inverse-finance-incident-analysis)  
36. Raito \- 2025 Founders and Board of Directors \- Tracxn, 访问时间为 七月 6, 2025， [https://tracxn.com/d/companies/raito/\_\_-NwwZlFuGguXUYMBcEQk-POAM\_WqFXlXNuozaKhOmRE/founders-and-board-of-directors](https://tracxn.com/d/companies/raito/__-NwwZlFuGguXUYMBcEQk-POAM_WqFXlXNuozaKhOmRE/founders-and-board-of-directors)  
37. Data Security in the Age of AI with Bart Vandekerckhove, Co-founder at Raito | DataCamp, 访问时间为 七月 6, 2025， [https://www.datacamp.com/podcast/data-security-in-the-age-of-ai-with-bart-vandekerckhove](https://www.datacamp.com/podcast/data-security-in-the-age-of-ai-with-bart-vandekerckhove)  
38. Study of New ACL Repair Mechanism Receives $6M in NIH Support \- Consult QD, 访问时间为 七月 6, 2025， [https://consultqd.clevelandclinic.org/study-of-new-acl-repair-mechanism-receives-6m-in-nih-support](https://consultqd.clevelandclinic.org/study-of-new-acl-repair-mechanism-receives-6m-in-nih-support)  
39. Infrared Finance \- GitHub, 访问时间为 七月 6, 2025， [https://github.com/infrared-dao](https://github.com/infrared-dao)  
40. Reddit's half entertainment, half crowd sentiment tracking. Anyone else treat it that way? : r/investing, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/investing/comments/1lqdj21/reddits\_half\_entertainment\_half\_crowd\_sentiment/](https://www.reddit.com/r/investing/comments/1lqdj21/reddits_half_entertainment_half_crowd_sentiment/)  
41. Sites for real-time (financial) news sentiment? : r/algotrading \- Reddit, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/algotrading/comments/rmygt5/sites\_for\_realtime\_financial\_news\_sentiment/](https://www.reddit.com/r/algotrading/comments/rmygt5/sites_for_realtime_financial_news_sentiment/)  
42. Sentiment analysis ? : r/quant \- Reddit, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/quant/comments/10o1814/sentiment\_analysis/](https://www.reddit.com/r/quant/comments/10o1814/sentiment_analysis/)  
43. UPDATE: I made an algo that tracks sentiment on Reddit (and trades those stocks). Up this week compared to the S\&P and the benchmark sentiment ETF. Source code, what the algo does up front \+ behind the scenes, and how it all works. : r/Python, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/Python/comments/o4ivrf/update\_i\_made\_an\_algo\_that\_tracks\_sentiment\_on/](https://www.reddit.com/r/Python/comments/o4ivrf/update_i_made_an_algo_that_tracks_sentiment_on/)  
44. I'm building a financial sentiment index combining news and community data. Need suggestions for alternative sources beyond Reddit. : r/quantfinance, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/quantfinance/comments/1k1wf19/im\_building\_a\_financial\_sentiment\_index\_combining/](https://www.reddit.com/r/quantfinance/comments/1k1wf19/im_building_a_financial_sentiment_index_combining/)  
45. Berachain liquid staking protocol Infrared releases points program ahead of token launch in Q3 | The Block, 访问时间为 七月 6, 2025， [https://www.theblock.co/post/351717/berachain-infrared-points-program-token-launch-q3](https://www.theblock.co/post/351717/berachain-infrared-points-program-token-launch-q3)  
46. Berachain Points Mining New Opportunity: A Comprehensive Guide to Understanding Infrared Points and TGE Airdrop Strategies | 鏈新聞 Abmedia on Binance Square, 访问时间为 七月 7, 2025， [https://www.binance.com/en/square/post/23380780676889](https://www.binance.com/en/square/post/23380780676889)  
47. Infrared Points Officially Launched The Infrared protocol h | 小树苗 Berachain on Binance Square, 访问时间为 七月 7, 2025， [https://www.binance.com/en/square/post/23340137271410](https://www.binance.com/en/square/post/23340137271410)  
48. Berachain's large-amount unlock rebounds from the bottom, Infrared's 300% mining opportunity\&This week's airdrop and financing summary | DA Labs on Binance Square, 访问时间为 七月 7, 2025， [https://www.binance.com/en/square/post/24672210569786](https://www.binance.com/en/square/post/24672210569786)  
49. Delta Neutral: Definition, Use With a Portfolio, and Example \- Investopedia, 访问时间为 七月 7, 2025， [https://www.investopedia.com/terms/d/deltaneutral.asp](https://www.investopedia.com/terms/d/deltaneutral.asp)  
50. Delta-neutral trading is a growing requirement for buy-sides: How can brokers respond?, 访问时间为 七月 7, 2025， [https://iongroup.com/blog/markets/delta-neutral-trading-is-a-growing-requirement-for-buy-sides-how-can-brokers-respond/](https://iongroup.com/blog/markets/delta-neutral-trading-is-a-growing-requirement-for-buy-sides-how-can-brokers-respond/)  
51. The Power of Delta Neutral Strategies in DeFi | Locking it in with Factor Pro \- Medium, 访问时间为 七月 7, 2025， [https://medium.com/@factor.fi/the-power-of-delta-neutral-strategies-in-defi-locking-it-in-with-factor-pro-abde512d7835](https://medium.com/@factor.fi/the-power-of-delta-neutral-strategies-in-defi-locking-it-in-with-factor-pro-abde512d7835)  
52. Berachain Futures & Perpetual Contracts Guide \- Delta Exchange, 访问时间为 七月 7, 2025， [https://www.delta.exchange/futures-guide-berachain](https://www.delta.exchange/futures-guide-berachain)  
53. Developer Grants \- DFINITY Support, 访问时间为 七月 7, 2025， [https://support.dfinity.org/hc/en-us/sections/8730977702804-Developer-Grants](https://support.dfinity.org/hc/en-us/sections/8730977702804-Developer-Grants)  
54. Developer Grants Program | DFINITY, 访问时间为 七月 7, 2025， [https://dfinity.org/grants](https://dfinity.org/grants)  
55. Compare ETH Liquid Staking Platforms \- DeFi Rate, 访问时间为 七月 6, 2025， [https://defirate.com/staking/](https://defirate.com/staking/)  
56. Lido Finance Review 2025: ETH & SOL Crypto Staking Rates \- Milk Road, 访问时间为 七月 6, 2025， [https://milkroad.com/reviews/lido/](https://milkroad.com/reviews/lido/)  
57. LDO Price Live Chart \- KuCoin, 访问时间为 七月 6, 2025， [https://www.kucoin.com/price/LDO](https://www.kucoin.com/price/LDO)  
58. Solo staking is 35% more profitable than staking on Lido : r/ethstaker \- Reddit, 访问时间为 七月 6, 2025， [https://www.reddit.com/r/ethstaker/comments/14d7ruh/solo\_staking\_is\_35\_more\_profitable\_than\_staking/](https://www.reddit.com/r/ethstaker/comments/14d7ruh/solo_staking_is_35_more_profitable_than_staking/)  
59. Lido DAO price today, LDO to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 6, 2025， [https://coinmarketcap.com/currencies/lido-dao/](https://coinmarketcap.com/currencies/lido-dao/)  
60. How Will stETH and Maple Transform Institutional Finance? \- OneSafe Blog, 访问时间为 七月 6, 2025， [https://www.onesafe.io/blog/maple-lido-partnership-steth-decentralized-finance](https://www.onesafe.io/blog/maple-lido-partnership-steth-decentralized-finance)