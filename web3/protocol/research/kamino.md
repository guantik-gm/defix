

# **Kamino Finance 深度投资评估报告：Solana 生态流动性中枢的机遇与风险剖析**

## **第一部分：执行摘要与投资概要**

本报告旨在为具备专业背景的投资者提供一份关于 Solana 生态 DeFi 协议 Kamino Finance（代币 KMNO）的详尽、深入的投资分析。Kamino 已成为 Solana 上无可争议的借贷与流动性管理领导者，其总锁定价值（TVL）和协议收入等基本面指标表现卓越。然而，其原生代币 KMNO 的市场表现却与协议的强势地位形成鲜明对比。

本报告的核心结论是，Kamino Finance 存在显著的“基本面-估值”脱节现象。协议本身凭借其世界一流的技术风险管理框架、经验丰富的创始团队以及创新的产品套件（如 K-Lend、Multiply Vaults 和即将推出的 V2 模块化架构），展现出强大的护城河和增长潜力。然而，KMNO 代币面临着来自未来大规模解锁的巨大抛压、尚不完善的价值捕获机制以及因早期空投策略而受损的社区情绪等多重挑战。

因此，对 Kamino 的投资本质上是一场关于“价值回归”的博弈。投资者面临的核心问题并非协议本身能否成功，而是协议的成功价值能否以及何时能有效地传递至其原生代币。本报告将通过对项目架构、市场数据、代币经济学、安全风险、团队背景及具体投资策略的逐层剖析，为投资者揭示这一复杂局面下的潜在机遇与结构性风险，并最终给出一个综合性的投资评级与策略建议。

## **第二部分：Kamino Finance \- Solana 流动性中枢的架构深度解析**

### **2.1 统一愿景：整合借贷、流动性与杠杆**

Kamino Finance 的核心定位是打破 DeFi 领域长期以来各自为战的局面，将借贷、流动性提供和杠杆这三大核心功能无缝整合至一个资本高效、用户友好的产品套件中 1。这种一体化设计旨在简化复杂的收益策略，极大地提升了用户体验，这正是 Solana 生态 dApp 获得成功的关键要素之一 6。该协议于2022年8月以自动化流动性金库（Automated Liquidity Vaults）起步，并随着 K-Lend 的推出，逐步演化为一个功能全面的综合性 DeFi 平台 1。

### **2.2 核心原语：解构 K-Lend、自动化金库与 kToken 机制**

* **自动化流动性金库 (Automated Liquidity Vaults):** 这是 Kamino 的基石产品，为集中流动性做市商（CLMMs）提供了一键式、自动复利的策略管理工具 5。它将头寸重平衡、费用复投等复杂操作自动化，显著降低了用户参与高级流动性做市策略的门槛 9。  
* **K-Lend (Kamino Lend):** 作为协议的借贷引擎，K-Lend 于2023年10月正式推出 11。其设计精良，包含了多项关键创新，详见其精简版白皮书 11：  
  * **统一流动性市场 (Unified Liquidity Market):** 采用单一资金池设计，有效避免了多池模型的流动性碎片化问题，从而提升了整体资本效率和贷方收益 11。  
  * **提升模式 (Elevation Mode / eMode):** 该设计借鉴自 Aave V3，允许用户在借贷高度相关的资产（如 SOL 及其流动性质押代币 LSTs）时，获得更高的贷款价值比（LTV），最高可达 90-95%，从而实现高达 10 倍的杠杆 4。  
  * **多点线性利率曲线 (Poly-linear Interest Rate Curve):** 引入了理论上可达11个点的复杂利率模型，相比传统的三点模型，能更平滑地调整利率，减少市场冲击，为借款人提供了更稳定的利率环境 11。  
* **kTokens (Kamino Tokens):** 这是代表用户在流动性金库中份额的、附带收益的 SPL 代币 5。其可替代性（Fungibility）是一项重大创新，成功地将非同质化（NFT）的 CLMM LP 头寸代币化。这使得 kTokens 可以作为标准抵押品在 K-Lend 中使用，创造了一个强大的正反馈循环：用户在赚取 LP 收益的同时，还能以此为抵押借出资金，用于执行其他投资策略，极大地提高了资本效率 11。

### **2.3 V2 进化：模块化架构与“通往百亿之路”愿景**

Kamino V2 于2024年末发布，标志着协议从一个单一应用向 Solana 的模块化、基础性信贷设施层的战略演进 14。V2 架构建立在经过实战检验的 V1 代码库之上，确保了安全性和业务连续性 16。

“通往百亿之路”（Road to $10B）是驱动这一演进的战略框架，其核心围绕四大支柱：产品、社区、KMNO 和收入 18。

V2 引入了全新的双层架构 14：

* **市场层 (Market Layer):** 允许任何人无需许可地创建具有自定义参数（资产、风险规则、预言机等）的隔离借贷市场。这为真实世界资产（RWA）、点对点（P2P）借贷、以及需要 KYC 的合规市场铺平了道路。  
* **金库层 (Vault Layer):** 作为一个流动性聚合层，通过多样化的用户自定义配置（如保守型、激进型），提供自动化的风险管理和优化的回报策略。

这种新架构的出现，不仅仅是产品的迭代，更是 Kamino 商业模式的根本性转变。V1 提供的是直接面向用户的产品（B2C），而 V2 的市场层和金库层则允许其他协议和开发者在 Kamino 的基础设施上构建自己的金融产品。这意味着 Kamino 的角色从一个服务提供商转变为一个平台提供商，其商业模式演变为“B2B2C”。这一转变极大地扩展了 Kamino 的潜在市场，其增长不再仅仅依赖于自身的产品创新，而是与整个在其之上构建的生态系统的繁荣程度息息相关。这是一种更具可扩展性和防御性的长期战略。

## **第三部分：量化分析：市场与链上表现**

### **3.1 KMNO 代币表现：TGE 复盘与未来展望**

KMNO 代币于2024年4月30日通过“创世”（Genesis）空投活动正式上线 19。然而，其上线后的表现并不理想。代币价格在上线后短时间内暴跌约70%，从约

0.11 美元迅速跌至 0.03−0.04 美元区间 20。这反映出巨大的初始抛压，以及市场对代币在上线初期的效用和价值共识不足。

根据近期数据，代币价格在 0.06−0.07 美元区间波动 21。其历史最高价（ATH）约为

0.25 美元，历史最低价（ATL）约为 0.019 美元 1。当前流通市值约在 1.4亿至1.6亿美元之间，24小时交易量约为2000万至3000万美元 1。其完全稀释估值（FDV）约为6亿美元 2。

### **3.2 协议健康度指标：TVL、收入与用户增长的数据驱动分析**

与代币的疲软表现形成鲜明对比的是，Kamino 协议的基本面极为强劲：

* **总锁定价值 (TVL):** Kamino 是 Solana 生态中除 LSTs 外最大的 DeFi 协议 16。根据 DeFiLlama 的数据，其合并 TVL 接近28.5亿美元，其中 Kamino Lend 约占25.4亿美元，Kamino Liquidity 约占3.01亿美元 24。这证明了市场对其大规模的采用和信任。值得注意的是，在空投快照前后，TVL 曾从约14亿美元的高点大幅回落，但在 TGE 后已迅速恢复并实现显著增长 20。  
* **收入与费用:** 协议展现出强大的盈利能力。DeFiLlama 数据显示，其年化费用高达约1.17亿美元，为协议带来的年化收入（协议净利润）约为2100万美元 24。近30天的费用约为960万美元，收入约为170万美元 24。这表明 Kamino 拥有一个健康且可持续的商业模式。  
* **用户指标:** 根据 Token Terminal 的数据，协议保持着活跃的用户基础，月活跃地址数约为3.93万，周活跃地址数约为1.87万 29。这证实了用户粘性超越了单纯的 TVL 指标，存在真实、持续的交互。

### **3.3 竞争格局：对标 MarginFi 与 Solend**

Kamino 在竞争中取得了决定性的胜利。其主要竞争对手 MarginFi 和 Solend 均遭遇了重挫：

* **Solend (已更名为 Save):** 作为 Solana 的老牌借贷协议，在 FTX 崩盘期间因预言机故障被黑客攻击损失130万美元，并产生了约600万美元的坏账，至今未能完全恢复元气 6。  
* **MarginFi:** 因内部团队矛盾和社区对其空投策略的不满，在一天之内经历了约1.69亿美元的 TVL 外流（占其当时 TVL 的28%），资金明显流向了 Kamino 和 Solend 30。Solend 甚至推出了针对性的空投活动，以激励用户从 MarginFi 迁移 30。

尽管在市场需求旺盛时，三个平台都能提供极具吸引力的稳定币存款收益率（例如，USDC 的 APY 在 Kamino 为24%，MarginFi 为35%，Solend 为39%），但 Kamino 凭借其卓越的风险管理（零坏账记录）和更优的用户体验，成功夺取了市场主导地位 15。

综合来看，Kamino 协议的基本面（TVL、收入、用户、市场地位）已达到 Solana 生态的蓝筹级别，但其代币的市场表现却与之严重脱节。这种“基本面-估值”的巨大鸿沟构成了核心的投资论点。市场显然没有根据协议的卓越表现来为代币定价，其原因可能包括空投带来的抛压、对未来代币解锁的担忧，以及当前 KMNO 价值捕获机制不足等。对于相信团队能够通过 V2 路线图和代币效用升级来弥合这一差距的投资者而言，这可能是一个战略性的建仓窗口。投资风险已从“协议会否失败”转向“代币能否捕获协议价值”。

## **第四部分：经济蓝图：KMNO 代币经济学批判性审查**

### **4.1 供应、分配与配置模型**

* **总供应量:** 100亿枚 KMNO 1。  
* **初始流通供应量:** 约10亿枚 KMNO 34。当前流通供应量约为24亿枚，占总量的24% 1。  
* 代币分配 26:  
  * 社区与生态激励 (Community & Grants): 35%  
  * 核心利益相关者与顾问 (Key Stakeholders & Advisors): 35%  
  * 核心贡献者 (Core Contributors): 20%  
  * 流动性与财库 (Liquidity & Treasury): 10%  
* 初始的“创世”空投占总供应量的7.5% 19。

### **4.2 锁仓与解锁计划：量化未来卖方压力**

* 核心贡献者（20%）和核心利益相关者与顾问（35%）的代币，在 TGE 后有为期12个月的锁定期（直至2025年4月左右），随后进入24个月的线性释放期 26。  
* 这意味着，从2025年5月到2027年5月的两年间，将存在一个可预测的、巨大的、持续的抛压期。  
* 简单计算，这部分总计55亿枚的代币将在24个月内释放，即每月约有2.29亿枚 KMNO（5.5B/24）解锁并流入市场。以当前约 0.06 美元的价格计算，这相当于每月近1370万美元的潜在抛售压力，相对于目前每日2000-3000万美元的交易量而言，这是一个不容忽视的结构性阻力 21。  
* 完整的解锁计划将持续到2027年 26。任何对  
  KMNO 的长期投资都必须将这一结构性逆风纳入考量。协议的收入增长和新价值捕获机制的实施速度，必须超过这种通胀速度，才能支撑价格的稳定乃至上涨。这也使得解锁开始前的这段时间（即当前至2025年4月）成为一个关键的战略观察窗口，因为市场可能会随着解锁日期的临近而提前消化这一预期。

### **4.3 KMNO 的效用与价值捕获**

* **治理:** KMNO 是协议的治理代币，持有者可以对协议升级、费用结构调整等关键决策进行投票 13。  
* **激励与质押:** 目前，代币最核心的效用是质押 KMNO 以获得“忠诚度提升”，从而在持续的积分活动中获得更多积分，这些积分最终将兑换为未来的空投份额 3。这旨在激励用户持有代币，减少短期抛压。  
* **未来效用:** 协议的路线图明确指出，目标是让 KMNO 的价值与协议的成功更深度地绑定，未来可能通过引入收入分成或增强费用折扣等机制来实现 6。

## **第五部分：安全与风险评估：Solana 上的安全堡垒？**

### **5.1 审计与安全态势：审计、漏洞赏金与链上历史回顾**

* **审计:** Kamino 极度重视安全性，其 V1 版本经历了超过10次外部审计，V2 版本提及总审计次数达14次 17。官方 GitHub 仓库公开了多份审计报告，审计方包括 Certora、Offside Labs 和 Ottersec 等知名机构 38。早在2022年8月，SmartState 就对其进行了审计，并给出了10/10的满分评级，未发现任何漏洞 40。  
* **漏洞赏金计划:** 协议设有一个全面且资金雄厚的漏洞赏金计划，对发现严重智能合约漏洞的白帽黑客提供高达50万美元的奖励，这体现了其主动防御的安全文化 38。  
* **链上历史:** 最为关键的一点是，自成立以来，Kamino 从未产生过任何坏账，也未遭受过直接的智能合约攻击 6。这使其与曾遭受重创的竞争对手 Solend 形成了鲜明对比 15。

### **5.2 风险管理框架：预言机、清算机制与坏账缓解**

* **预言机安全:** 这是 Kamino 的核心优势。协议自研了一套复杂的预言机基础设施，聚合了包括 Pyth 和 Chainlink 在内的多个高质量数据源并进行交叉验证 41。它使用时间加权平均价格（TWAP）和指数加权移动平均价格（EWMA）来抵御闪电贷操纵，并为稳定币等挂钩资产设置了“价格区间”（Price Bands）以拒绝异常数据 41。这套稳健的系统是吸取了行业内其他协议失败教训的直接成果 15。  
* **清算机制:** Kamino 采用“软清算”（即部分清算）机制，对借款人的惩罚性更小。同时，其动态清算罚金（从2-5%起，随头寸风险增加而提高）的设计，既激励了清算人的效率，也减轻了对用户的冲击。  
* **风险参数:** 协议通过多层级的资产风险框架（如隔离债务、隔离抵押品）和借款因子（Borrow Factors）在其统一流动性池中精细化地管理风险，有效防止了单一高风险资产对整个协议造成系统性风险 11。协议还提供了一个公开的实时风险仪表盘以增加透明度 7。

### **5.3 历史事件与争议：空投纠纷与交易失败**

* **空投争议 (2024年3月):** 最初的空投快照和线性分配方案引发了社区的强烈不满。许多早期用户认为该方案过度偏袒新入场的大户资金，而忽视了长期支持者（“OGs”）的贡献 20。尽管团队后续调整了方案，为 OGs 增加了额外分配，但此次事件无疑损害了社区情绪 20。  
* **交易失败事件 (2024年4月):** TGE 后，大量币安钱包用户报告在与 Kamino 交互时遇到交易失败、余额消失等问题 44。币安方面公开表示问题出在“底层 DEX”（即 Kamino），而社区对此看法不一，部分人认为是币安钱包集成的问题。此事件在关键时期造成了糟糕的用户体验和负面舆论 44。

分析至此，可以观察到 Kamino 在风险管理上呈现出一种鲜明的二元性。其技术和金融层面的风险控制堪称行业顶级，这体现在零坏账、多重审计和精密的预言机系统上。然而，其在社区管理和运营层面的风险控制则暴露了明显的短板，如空投风波和币安钱包事件。这意味着，从智能合约层面看，协议是高度安全的。对于投资者而言，主要的非市场风险来源于团队在治理、社区关系、代币经济学设计和合作伙伴整合等“软实力”方面的执行能力。投资者必须评估团队是否已从这些公开的失误中吸取了教训。

## **第六部分：人的因素：团队与社区分析**

### **6.1 架构师：评估核心团队的背景、经验与愿景**

在分析团队时，必须首先澄清一个常见的误解：kamino.app 网站上列出的团队信息 45 属于一个同名的财务管理软件公司，与本报告分析的 DeFi 协议 Kamino Finance 无关。Kamino Finance 的真正核心团队源自于 Hubble Protocol 15。

* **核心领导:**  
  * **Marius George Ciubotariu (联合创始人):** 协议的关键人物和灵魂。他于2021年创立了 Hubble Protocol 48。其背景与 DeFi 协议的构建高度相关：他曾是彭博社（Bloomberg）的 C++ 开发者和高级软件工程师，拥有近8年从事奇异衍生品定价和风险管理的工作经验 48。这种顶级的传统金融（TradFi）风控背景是 Kamino 最宝贵的无形资产，并直接塑造了协议谨慎而稳健的设计哲学 6。  
  * **Mark Hull (核心贡献者):** 团队另一位重要的对外发言人，经常与 Marius 一同阐述协议的战略和愿景 6。

团队被描述为从 Hubble Protocol 的经历中“身经百战”，这些宝贵的经验教训为构建 Kamino 提供了深刻的洞见 6。他们的风险规避天性被反复强调为一项核心优势 6。

创始人 Marius Ciubotariu 在奇异衍生品和 TradFi 风险领域的专业背景，是解释 Kamino 成功和安全记录的“秘方”。DeFi 领域充斥着因风险管理不善而失败的案例，而 Kamino 明确地避开了这些陷阱。这并非偶然，而是创始人将传统金融世界里对尾部风险、杠杆、相关性和系统性传染的深刻理解，直接应用到了区块链协议的设计中。因此，多层预言机系统、动态清算机制等功能，并非简单的技术堆砌，而是 TradFi 风控专家思维模式在链上的具体实现。这为 Kamino 提供了强大的、非量化的信任基础和显著的竞争优势。

### **6.2 社区脉搏：衡量数字渠道的情绪与参与度**

* **社交媒体影响力:** Kamino 在社交媒体上拥有强大的影响力，其 Twitter (X) 关注者超过15.6万，并拥有活跃的 Discord 和 Telegram 社区 51。  
* **Reddit 社区情绪:** 对 r/solana 子版块的帖子分析显示，社区情绪复杂但参与度高 52。  
  * **积极方面:** 用户被高收益率（如 SOL 循环策略可达30%以上）所吸引，并将平台视为提高资本效率的强大工具 54。社区对于新手提出的复杂策略问题通常乐于解答 54。  
  * **消极/担忧方面:** 社区对风险的担忧普遍存在，包括无常损失、清算风险以及对任何 DeFi 协议都存在的“rug pull”恐惧 52。超高 APY 往往伴随着怀疑 52。  
* **整体情绪:** 社区似乎由两部分人群构成：一部分是热衷于实验高级策略的资深用户，另一部分则是被高收益吸引但同时保持警惕的新手。空投争议无疑造成了一段时期的负面情绪 20，但用户对产品本身的参与度依然很高。Coinbase 的数据显示，其社交媒体情绪得分为55/100，表明在更广泛的讨论中，情绪整体偏向积极 56。

## **第七部分：战略投资与收益机会**

本节为投资者提供了一系列从基础到高级的投资策略，并特别为具备开发背景的投资者指出了生态系统参与的机会。

### **7.1 基础策略：借贷与集中流动性提供 (LP)**

* **借贷 (供应资产):** 这是最简单的参与方式。用户可以存入 SOL、USDC 等单边资产，以赚取由借款人支付的可变 APY 7。在高需求资产上，收益率可能非常可观，例如 USDC 在需求高峰期 APY 可达24% 31。此策略风险主要为智能合约风险和机会成本。  
* **集中流动性提供 (LPing):** 用户可将资金存入自动化流动性金库，以赚取交易费和激励奖励 5。Kamino 会自动进行头寸重平衡。主要策略包括：  
  * **仅 SOL 策略 (如 jitoSOL-SOL):** 可同时赚取做市收益和 LST 的质押收益。无常损失风险较低，但完全暴露于 SOL 的价格波动风险 57。  
  * **波动-稳定策略 (如 SOL-USDC):** 能够从高交易量中获得极高的费用收益，但伴随着显著的无常损失风险 9。

### **7.2 高级收益生成：循环杠杆策略技术分解 (Multiply Vaults)**

* **Multiply Vaults (循环策略):** 这是 Kamino 的王牌杠杆产品 6。其机制如下：  
  1. 存入一种生息资产（如 jitoSOL）。  
  2. 以此为抵押，借出其基础资产（如 SOL）。  
  3. 将借出的 SOL 换成 jitoSOL，并再次存入。  
  4. 这个循环过程通过一键操作被重复多次，从而实现杠杆（得益于 eMode，最高可达10倍）7。  
* **收益来源:** 用户在远超本金的杠杆头寸上赚取 jitoSOL 的质押收益，这可能将约7%的基础收益率放大到15-30%的 APY 55。  
* **核心风险:** 清算是主要风险。如果借款利率在较长时间内持续高于 LST 的质押收益率，或发生严重的智能合约漏洞，头寸可能被清算。风险随杠杆倍数呈指数级增长 55。

### **7.3 DeFi 前沿：真实世界资产 (RWA) 与 xStocks 集成**

作为 V2 架构的一部分，Kamino 已将 Backed Finance 发行的代币化股票（xStocks）整合为抵押品选项 60。这使 Kamino 成为首个接纳代币化股权作为抵押品的主流 DeFi 借贷协议，是 RWA 叙事的一个重要里程碑 60。该功能初期以 AAPLx（苹果公司股票）启动，允许用户抵押其代币化股票以借出稳定币 60。这为投资者开辟了全新的金融策略，例如在不出售股权的情况下，抵押股票投资组合借出稳定币进行流动性挖矿，实现了 TradFi 资产与 DeFi 资本效率的桥接。

### **7.4 开发者投资机遇：通过创造者金库与 V2 市场参与生态**

* **创造者金库 (Creator Vaults):** 此功能允许高级用户创建自定义的自动化流动性策略，包括自定义的价格范围和重平衡逻辑（如固定范围、追踪模式等）37。对于开发者而言，这意味着可以设计并部署独特的策略，并有可能吸引其他用户的资金，从而赚取管理费。  
* **无需许可的 V2 市场:** V2 的市场层是为开发者投资者量身打造的终极工具 14。它允许无需许可地创建新的、隔离的借贷市场。具备开发背景的投资者可以：  
  1. 识别 Solana 生态中某个未被满足需求的利基资产。  
  2. 在 Kamino 上为其创建一个专属的、风险隔离的借贷市场。  
  3. 设置自定义的风险参数，甚至集成独特的预言机。  
  4. 围绕这个新市场建立业务，从其交易活动中赚取费用。这提供了一个在 Kamino 之上“创业”而非仅仅“使用”的机会。

### **表 7.1：Kamino 投资策略对比分析**

| 策略名称 | 策略描述 | 所需资产 | 技术复杂度 | 风险概况 | 潜在 APY/APR 范围与来源 | 优点 | 缺点 | 开发者适用性 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **供应资产至 K-Lend** | 将单边资产（如USDC, SOL）存入借贷池，赚取浮动利息。 | USDC, SOL, JTO 等 | 低 | 智能合约风险、机会成本风险。 | 2% \- 30%+ (高度依赖市场需求) 31 | 操作简单，风险相对较低，本金稳定。 | 收益不稳定，高收益通常不可持续。 | 低 |
| **LP (SOL-LST 金库)** | 为 SOL 及其 LST 变体（如 jitoSOL-SOL）提供流动性，赚取交易费和质押收益。 | SOL, jitoSOL, mSOL 等 | 中 | 智能合约风险、SOL 价格下跌风险、LST 脱锚风险（较低）。 | 5% \- 15% (交易费 \+ LST 基础收益) 57 | 无常损失低，享受 SOL 价格敞口的同时增厚收益。 | 收益上限受限于 LST 收益率和交易量。 | 中 |
| **LP (波动-稳定金库)** | 为波动资产和稳定币（如 SOL-USDC）提供流动性，赚取高额交易费。 | SOL, USDC 等 | 中 | 智能合约风险、**极高的无常损失风险**、市场波动风险。 | 20% \- 100%+ (高度依赖波动性和交易量) 58 | 潜在收益率极高，能捕捉市场波动带来的费用。 | 无常损失风险巨大，可能导致本金亏损。 | 中 |
| **Multiply 循环杠杆** | 一键式循环存贷，放大对 LST 资产的敞口以赚取杠杆化的质押收益。 | jitoSOL, mSOL 等 LST | 高 | 智能合约风险、**清算风险**、利率风险（借款利率 \> 质押收益）。 | 15% \- 30%+ (杠杆化 LST 收益) 55 | 显著放大 SOL LST 的基础收益，资本效率极高。 | 风险随杠杆倍数急剧增加，需要密切监控头寸。 | 高 |
| **抵押 xStocks 借款** | 将代币化的真实世界股票（如 AAPLx）作为抵押品，借出稳定币。 | AAPLx 等 xStocks, 稳定币 | 高 | 智能合约风险、RWA 监管风险、预言机风险、清算风险。 | 借款成本 (负收益)，但释放了股权资产的流动性。 | 盘活 TradFi 资产，无需出售即可获得流动资金。 | RWA 尚处早期，流动性与监管不确定性高。 | 高 |
| **创建自定义金库/市场** | 利用 Creator Vaults 或 V2 市场层，设计并部署自己的流动性策略或借贷市场。 | 任意 SPL 代币 | 极高 | 所有上述风险 \+ 策略设计风险、代码风险、运营风险。 | 不确定 (取决于策略/市场的成功) | 潜在收益无上限，可建立自己的链上业务。 | 要求极高的技术和风险管理能力，失败风险高。 | 极高 |

## **第八部分：最终评估与投资论点**

### **8.1 综合研究发现：SWOT 分析**

* **优势 (Strengths):**  
  * 在 Solana 借贷领域占据绝对市场主导地位 16。  
  * 拥有行业顶级的技术风险管理框架和经验丰富的创始人背景 15。  
  * 自成立以来零坏账的完美记录 14。  
  * 强大的协议收入和健康的商业模式 24。  
  * 富有远见的 V2 模块化架构路线图 16。  
* **劣势 (Weaknesses):**  
  * KMNO 代币上线后表现疲软，市场信心不足 20。  
  * 过往在社区管理（空投争议）和运营整合（币安钱包事件）方面存在失误 36。  
  * 当前 KMNO 的核心效用相对单一，价值捕获机制有待加强 6。  
* **机会 (Opportunities):**  
  * V2 模块化架构有望带来网络效应，成为 Solana 的基础信贷层 14。  
  * 整合 RWA（xStocks）抓住了新的市场叙事，拓展了业务边界 60。  
  * 未来有望通过收入分成等方式，增强 KMNO 的价值捕获能力 18。  
* **威胁 (Threats):**  
  * 未来大规模的代币解锁将带来持续的、巨大的抛售压力 26。  
  * DeFi 领域竞争激烈，随时可能出现新的竞争者。  
  * RWA 领域面临较高的监管不确定性。

### **8.2 最终投资评级与详细理由**

**投资评级：建议 (Suggest)**

**核心投资论点：**

对 Kamino Finance 的投资是一项基于“价值发现”与“价值传递”的双重押注。协议本身的基本面极为稳固，其在 Solana 生态中的地位堪比以太坊上的 Aave。然而，这种协议层面的成功尚未有效地反映在其代币 KMNO 的价格上。因此，投资的核心逻辑在于，相信 Kamino 团队能够利用其 V2 路线图的实施和代币经济学的优化，成功地将协议的内在价值传递给代币持有者，并在未来巨大的、可预见的代币解锁抛压到来之前，建立起足够强大的需求支撑。

**评级理由：**

1. **协议护城河深厚：** Kamino 不仅在 TVL 和用户数上领先，更重要的是，它在风险管理这一 DeFi 协议的生命线上建立了无可比拟的声誉。零坏账记录和源自 TradFi 的风控哲学，是其最难被复制的核心竞争力。  
2. **增长潜力明确：** V2 架构的推出，标志着 Kamino 从一个应用转型为一个平台。这为其打开了指数级的增长空间，包括 RWA、机构服务等。协议的未来增长路径清晰可见。  
3. **估值存在修复空间：** 当前的“基本面-估值”脱节为具有长远眼光的投资者提供了潜在的切入点。如果市场开始重新评估 Kamino 的真实价值，其代币价格有相当大的上升潜力。

**主要风险与对冲建议：**

* **代币经济学风险：** 这是最大的风险。从2025年5月开始的两年线性解锁期将是 KMNO 价格的“大考”。投资者应将此时间点作为关键的观察窗口。在此之前，协议必须证明其收入增长和代币需求能够吸收这部分新增供应。  
* **执行风险：** 团队在技术上无可挑剔，但在社区和运营上曾有失误。投资者需要持续关注团队在 V2 推广、合作伙伴关系建立以及社区沟通方面的执行能力。

**投资策略建议：**

对于寻求参与 Solana 生态核心资产的投资者，Kamino Finance 提供了一个高风险、高潜在回报的标的。

* **对于代币购买者：** 当前阶段可视为一个战略观察和逐步建仓期。在2025年解锁期开始前，利用市场对代币经济学的担忧情绪，在价格相对低位分批买入，可能是一个合理的策略。投资期限应至少覆盖到 V2 完全部署和新价值捕获机制落地之后。  
* **对于高阶 DeFi 用户：** Multiply 循环杠杆策略是目前在 Kamino 上获取高 APY 的最有效方式，尤其适合看好 SOL 长期走势的投资者。但必须严格控制杠杆倍数，并密切监控头寸健康度，以防范清算风险。  
* **对于开发者投资者：** V2 的市场层和创造者金库提供了独一无二的机会。与其被动投资，不如主动利用自身技术优势，在 Kamino 的基础设施上构建利基产品，这可能是风险最高但潜在回报也最大的参与方式。

综上所述，Kamino Finance 是一个基本面优异但代币面存在结构性挑战的项目。**“建议”** 评级是基于对其长期潜力的认可，但强烈建议投资者充分理解并接受其代币经济学带来的中期价格压力。成功的投资将需要耐心、对风险的深刻理解以及对团队执行能力的持续跟踪。

#### **引用的著作**

1. Kamino Finance price today, KMNO to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/kamino-finance/](https://coinmarketcap.com/currencies/kamino-finance/)  
2. Kamino (KMNO) Tokenomics: Market Insights, Token Supply, Distribution & Price Data | MEXC, 访问时间为 七月 27, 2025， [https://www.mexc.com/price/KMNO/tokenomics](https://www.mexc.com/price/KMNO/tokenomics)  
3. What is Kamino Finance? Review of Solana's Liquidity & Lending Hub \- Crypto Economy, 访问时间为 七月 27, 2025， [https://crypto-economy.com/kamino-finance/](https://crypto-economy.com/kamino-finance/)  
4. What is Kamino Finance (KMNO)? Solana's DeFi Protocol with Price Prediction 2025, 访问时间为 七月 27, 2025， [https://web3.bitget.com/en/academy/what-is-kamino-finance-kmno-solana-defi-protocol-with-price-prediction-to-2025](https://web3.bitget.com/en/academy/what-is-kamino-finance-kmno-solana-defi-protocol-with-price-prediction-to-2025)  
5. What Is Kamino Finance? A Concentrated Liquidity Layer on Solana \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/learn/what-is-kamino-finance-kmno](https://www.coingecko.com/learn/what-is-kamino-finance-kmno)  
6. Kamino ($KMNO) — Still Very Early | by Team RockawayX \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@team\_rockawayx/kamino-kmno-still-very-early-8dca828185ad](https://medium.com/@team_rockawayx/kamino-kmno-still-very-early-8dca828185ad)  
7. Exploring Kamino Finance \- A Leading DeFi Protocol on the Solana Network (2025 Update), 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/exploring-kamino-finance-a-leading-defi-protocol-on-the-solana-network/2966](https://www.gate.com/learn/articles/exploring-kamino-finance-a-leading-defi-protocol-on-the-solana-network/2966)  
8. Kamino Docs: Kamino Portal, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/](https://docs.kamino.finance/)  
9. The Good, the Bad, and the Ugly: Market Making with Kamino, 访问时间为 七月 27, 2025， [https://blog.kamino.finance/the-good-the-bad-and-the-ugly-market-making-with-kamino-104216a08a49](https://blog.kamino.finance/the-good-the-bad-and-the-ugly-market-making-with-kamino-104216a08a49)  
10. Kamino Finance \- Crossmint, 访问时间为 七月 27, 2025， [https://www.crossmint.com/ecosystem/kamino-finance](https://www.crossmint.com/ecosystem/kamino-finance)  
11. Kamino Lend Litepaper, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/kamino-lend-litepaper](https://docs.kamino.finance/kamino-lend-litepaper)  
12. Kamino Finance: A New Era of DeFi on Solana | by fitra.eth | Medium, 访问时间为 七月 27, 2025， [https://medium.com/@fitraeth/kamino-finance-a-new-era-of-defi-on-solana-8c1f840dc1ef](https://medium.com/@fitraeth/kamino-finance-a-new-era-of-defi-on-solana-8c1f840dc1ef)  
13. What is Kamino (KMNO)? \- The Bitfinex Blog, 访问时间为 七月 27, 2025， [https://blog.bitfinex.com/token/what-is-kamino-kmno/](https://blog.bitfinex.com/token/what-is-kamino-kmno/)  
14. Kamino V2: a new standard for on-chain credit on Solana and beyond | OAK Research, 访问时间为 七月 27, 2025， [https://oakresearch.io/en/analyses/fundamentals/kamino-v2-new-standard-on-chain-credit-solana-beyond](https://oakresearch.io/en/analyses/fundamentals/kamino-v2-new-standard-on-chain-credit-solana-beyond)  
15. Kamino ($KMNO) — Still Very Early \- RockawayX, 访问时间为 七月 27, 2025， [https://www.rockawayx.com/insights/kamino-kmno----still-very-early](https://www.rockawayx.com/insights/kamino-kmno----still-very-early)  
16. Introducing Kamino Lend V2. A new, secure lending layer to power… | by Kamino Foundation | Medium, 访问时间为 七月 27, 2025， [https://blog.kamino.finance/introducing-kamino-lend-v2-08ad8f52855c](https://blog.kamino.finance/introducing-kamino-lend-v2-08ad8f52855c)  
17. Kamino Launches V2, Ushering In A New Era Of Modular Credit Infrastructure on Solana, 访问时间为 七月 27, 2025， [https://www.rockawayx.com/insights/kamino-launches-v2-ushering-in-a-new-era-of-modular-credit-infrastructure-on-solana](https://www.rockawayx.com/insights/kamino-launches-v2-ushering-in-a-new-era-of-modular-credit-infrastructure-on-solana)  
18. Kamino: Road to $10B \- Governance, 访问时间为 七月 27, 2025， [https://gov.kamino.finance/t/kamino-road-to-10b/22](https://gov.kamino.finance/t/kamino-road-to-10b/22)  
19. Kamino Price: KMNO Price Index and Live Chart \- The Block, 访问时间为 七月 27, 2025， [https://www.theblock.co/price/359054/kamino-kmno-cad](https://www.theblock.co/price/359054/kamino-kmno-cad)  
20. Kamino Finance Debuts Token With 70% Drop In Price \- "The Defiant", 访问时间为 七月 27, 2025， [https://thedefiant.io/news/defi/kamino-finance-debuts-token-with-70-drop-in-price](https://thedefiant.io/news/defi/kamino-finance-debuts-token-with-70-drop-in-price)  
21. Kamino Price Today | KMNO Price Chart & Market Cap \- Phemex, 访问时间为 七月 27, 2025， [https://phemex.com/price/kamino](https://phemex.com/price/kamino)  
22. Kamino Finance Price USD, KMNO Price Live Charts, Market Cap & News \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/kamino-finance](https://www.bitget.com/price/kamino-finance)  
23. Kamino Price: KMNO Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 27, 2025， [https://www.bybit.com/en/price/kamino/](https://www.bybit.com/en/price/kamino/)  
24. Kamino \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/kamino](https://defillama.com/protocol/kamino)  
25. Kamino Price: KMNO to USD live price, market cap, and chart \- SwissBorg, 访问时间为 七月 27, 2025， [https://swissborg.com/crypto-market/coins/kamino](https://swissborg.com/crypto-market/coins/kamino)  
26. Kamino (KMNO) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 七月 27, 2025， [https://tokenomist.ai/kamino](https://tokenomist.ai/kamino)  
27. Kamino Lend \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/kamino-lend](https://defillama.com/protocol/kamino-lend)  
28. Kamino Liquidity (KMNO) \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/kamino-liquidity](https://defillama.com/protocol/kamino-liquidity)  
29. Kamino metrics | Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/kamino/metrics/all](https://tokenterminal.com/explorer/projects/kamino/metrics/all)  
30. Analysis: Marginfi's single-day TVL decreased by 28%, funds may flow to Kamino Lend and Solend | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560603962510](https://www.bitget.com/news/detail/12560603962510)  
31. These three Solana protocols offer yields of 24% or higher on stablecoin deposits \- DL News, 访问时间为 七月 27, 2025， [https://www.dlnews.com/articles/defi/3-solana-lending-platforms-now-offer-yields-of-24-or-higher/](https://www.dlnews.com/articles/defi/3-solana-lending-platforms-now-offer-yields-of-24-or-higher/)  
32. What Are the Best Solana DeFi Projects? \- SwissBorg Academy, 访问时间为 七月 27, 2025， [https://academy.swissborg.com/en/learn/solana-defi](https://academy.swissborg.com/en/learn/solana-defi)  
33. What Is Kamino Finance? A Quick Guide to the Liquidity Optimization Protocol on Solana, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/what-is-kamino-finance-a-quick-guide-to-the-liquidity-optimization-protocol-on-solana/8099](https://www.gate.com/learn/articles/what-is-kamino-finance-a-quick-guide-to-the-liquidity-optimization-protocol-on-solana/8099)  
34. Kamino Foundation: KMNO pledge to be launched | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560603982969](https://www.bitget.com/news/detail/12560603982969)  
35. Kamino (KMNO) token sale analytics and information, private/seed sale price, tokenomics, 访问时间为 七月 27, 2025， [https://icoanalytics.org/projects/kamino/](https://icoanalytics.org/projects/kamino/)  
36. Solana DeFi Protocol Kamino's Announcement of Airdrop Snapshot Sparks Controversy, 访问时间为 七月 27, 2025， [https://unchainedcrypto.com/solana-defi-protocol-kaminos-announcement-of-airdrop-snapshot-sparks-controversy/](https://unchainedcrypto.com/solana-defi-protocol-kaminos-announcement-of-airdrop-snapshot-sparks-controversy/)  
37. Security Audits \- Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/automated-liquidity/security-and-risks/security-audits](https://docs.kamino.finance/automated-liquidity/security-and-risks/security-audits)  
38. Kamino-Finance/audits: All the audits related to the Kamino ... \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Kamino-Finance/audits](https://github.com/Kamino-Finance/audits)  
39. audits/kamino\_lend\_certora.pdf at master · Kamino-Finance/audits \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Kamino-Finance/audits/blob/master/kamino\_lend\_certora.pdf](https://github.com/Kamino-Finance/audits/blob/master/kamino_lend_certora.pdf)  
40. Smart contract audit of the Kamino Finance project by SmartState, 访问时间为 七月 27, 2025， [https://smartstatetech.medium.com/smart-contract-audit-of-the-kamino-finance-project-by-smartstate-834c47d05bec](https://smartstatetech.medium.com/smart-contract-audit-of-the-kamino-finance-project-by-smartstate-834c47d05bec)  
41. Risks & Technical | Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/automated-liquidity/security-and-risks/risks-and-technical](https://docs.kamino.finance/automated-liquidity/security-and-risks/risks-and-technical)  
42. Bug Bounty \- Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/build-on-kamino/bug-bounty](https://docs.kamino.finance/build-on-kamino/bug-bounty)  
43. Oracles | Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/risk/oracles](https://docs.kamino.finance/risk/oracles)  
44. Binance tells customers to direct complaints to Kamino Finance over failed transactions, 访问时间为 七月 27, 2025， [https://www.mitrade.com/insights/news/live-news/article-3-789701-20250430](https://www.mitrade.com/insights/news/live-news/article-3-789701-20250430)  
45. Our Team \- Kamino, 访问时间为 七月 27, 2025， [https://www.kamino.app/our-team](https://www.kamino.app/our-team)  
46. About Kamino, 访问时间为 七月 27, 2025， [https://www.kamino.app/about](https://www.kamino.app/about)  
47. Kamino Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/Kamino?k=NjE5NA%3D%3D](https://www.rootdata.com/Projects/detail/Kamino?k=NjE5NA%3D%3D)  
48. Kamino Finance 2.0: Revolutionizing Solana DeFi with Innovative Risk Management, 访问时间为 七月 27, 2025， [https://solanacompass.com/learn/Lightspeed/kamino-20-building-solanas-economic-hub-marius-ciubotariu-mark-hull](https://solanacompass.com/learn/Lightspeed/kamino-20-building-solanas-economic-hub-marius-ciubotariu-mark-hull)  
49. Marius George Ciubotariu \- RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/member/Marius%20George%20Ciubotariu?k=MTcyMTE%3D](https://www.rootdata.com/member/Marius%20George%20Ciubotariu?k=MTcyMTE%3D)  
50. Why We Invested: Marius Ciubotariu, Co-founder of Hubble Protocol \- AppWorks 之初加速器, 访问时间为 七月 27, 2025， [https://appworks.tw/hubble-protocol-funding-round/](https://appworks.tw/hubble-protocol-funding-round/)  
51. Kamino Finance Smart Contract Audit | Cyberscope, 访问时间为 七月 27, 2025， [https://www.cyberscope.io/audits/coin-kamino-finance](https://www.cyberscope.io/audits/coin-kamino-finance)  
52. Staking in my vaults on Kamino has been dropping : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/1m8mozn/staking\_in\_my\_vaults\_on\_kamino\_has\_been\_dropping/](https://www.reddit.com/r/solana/comments/1m8mozn/staking_in_my_vaults_on_kamino_has_been_dropping/)  
53. Kamino Finance supplying on stables : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/1hkuvwj/kamino\_finance\_supplying\_on\_stables/](https://www.reddit.com/r/solana/comments/1hkuvwj/kamino_finance_supplying_on_stables/)  
54. What's the point of burrowing on Kamino Finance? : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/1azgwjb/whats\_the\_point\_of\_burrowing\_on\_kamino\_finance/](https://www.reddit.com/r/solana/comments/1azgwjb/whats_the_point_of_burrowing_on_kamino_finance/)  
55. What do you think of Kamino Multiply to earn up to 30% yield on SOL? : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/1ieqcyq/what\_do\_you\_think\_of\_kamino\_multiply\_to\_earn\_up/](https://www.reddit.com/r/solana/comments/1ieqcyq/what_do_you_think_of_kamino_multiply_to_earn_up/)  
56. Kamino Finance Price, KMNO Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/kamino-finance](https://www.coinbase.com/price/kamino-finance)  
57. SOL-only Strategies \- Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/automated-liquidity/liquidity-vaults/vault-strategies/sol-only-strategies](https://docs.kamino.finance/automated-liquidity/liquidity-vaults/vault-strategies/sol-only-strategies)  
58. Volatile \- Stable Strategies \- Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/automated-liquidity/liquidity-vaults/vault-strategies/mixed-strategies/volatile-stable-strategies](https://docs.kamino.finance/automated-liquidity/liquidity-vaults/vault-strategies/mixed-strategies/volatile-stable-strategies)  
59. How to Farm Leveraged Loops on Kamino \- YouTube, 访问时间为 七月 27, 2025， [https://m.youtube.com/watch?v=HX\_wlueCgaI\&pp=0gcJCcEJAYcqIYzv](https://m.youtube.com/watch?v=HX_wlueCgaI&pp=0gcJCcEJAYcqIYzv)  
60. Solana-based decentralized lending protocol Kamino integrates tokenized xStocks as a collateral option | The Block, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/362284/solana-based-decentralized-lending-protocol-kamino-integrates-tokenized-xstocks-as-collateral-option](https://www.theblock.co/post/362284/solana-based-decentralized-lending-protocol-kamino-integrates-tokenized-xstocks-as-collateral-option)  
61. Backed Finance \- Tokenized Assets, 访问时间为 七月 27, 2025， [https://backed.fi/](https://backed.fi/)  
62. Step 2: Strategy Setup \- Kamino Docs, 访问时间为 七月 27, 2025， [https://docs.kamino.finance/automated-liquidity/liquidity-vaults/creator-vaults/step-2-strategy-setup](https://docs.kamino.finance/automated-liquidity/liquidity-vaults/creator-vaults/step-2-strategy-setup)