

# **USD.AI 深度投资分析报告：剖析AI基础设施融资的DeFi新范式**

## **I. 执行摘要：USD.AI 投资论述**

### **A. 核心定位**

USD.AI 协议旨在通过将图形处理单元（GPU）作为真实世界资产（RWA）进行代币化抵押，成为人工智能（AI）硬件产业的核心信贷设施。该协议为去中心化金融（DeFi）投资者提供了一款高收益稳定币产品 sUSDai，目标年化收益率（APR）为 15%∼25%，从而有效地将AI革命所产生的巨大资本需求与DeFi领域寻求收益的资本连接起来 1。

### **B. 核心优势（看涨观点）**

* **精准的市场定位（Product-Market Fit）**：协议精准地解决了AI初创企业面临的一个明确且巨大的市场痛点——这些企业面临着数万亿美元的资本缺口，而传统贷款机构的审批流程却异常缓慢。USD.AI 通过提供快速、非稀释性的融资渠道，填补了这一市场空白 4。  
* **顶级机构背书**：项目成功完成了由 Framework Ventures 领投的1340万美元A轮融资，参投方包括 Dragonfly、Arbitrum 和 Digital Currency Group (DCG) 等顶级加密风险投资机构。这体现了强大的机构信心和市场认可度 7。  
* **强劲的早期市场表现**：协议上线后，其总锁定价值（TVL）迅速增长至超过6800万美元，显示出显著的市场兴趣和资本流入，验证了其价值主张的吸引力 11。  
* **创新的技术架构**：协议采用了专有技术框架，如用于实现具有法律强制力的链上抵押品的 CALIBER 系统，以及用于管理非流动性资产赎回的 QEV 机制。这些创新展示了团队在技术和金融结构设计方面的深度思考 1。

### **C. 关键风险（看跌观点）**

* **缺乏公开的安全审计报告**：这是目前最重大的风险因素。协议的官方文档明确指出，安全审计部分尚无可用信息。对于一个管理着数千万美元用户资金的协议而言，这是一个致命的透明度缺陷 2。  
* **抵押品与流动性风险**：协议的稳定性完全依赖于GPU硬件的市场价值，以及其在市场压力下管理 sUSDai 非流动性赎回的能力。其创新的QEV机制在极端的市场条件下尚未经过实战检验 2。  
* **执行与竞争风险**：作为该领域的先行者，USD.AI 在规模化运营方面面临巨大的执行风险。同时，它也将面临来自 Centrifuge 和 Maple Finance 等已有的RWA协议的潜在竞争，这些协议可能会转向这一细分市场。

### **D. 最终投资评级**

综合评估，USD.AI 是一个高风险、高潜在回报的投资标的。其精准的市场定位和强大的机构背书是其核心优势，但缺乏公开审计报告和其核心机制未经检验是其致命弱点。下文将对此进行详细分析。

## **II. 协议深度解析：GPU支持的美元运作机制**

### **A. 核心概念：InfraFi \- 为AI革命提供资金**

USD.AI 协议的核心论点是，AI硬件（特别是GPU）是一种新兴的、具有生产力的商品资产类别。协议的目标是通过为AI公司提供以这些硬件为抵押的流动性，成为“构建AI的美元” 1。

这一模式解决了行业的一个关键痛点：传统的硬件融资流程极其缓慢，通常需要60至90天才能完成。相比之下，USD.AI 能够在七天内完成贷款审批和发放，这在瞬息万变的AI行业中构成了巨大的竞争优势 4。这种模式不仅为借款方提供了效率，也为DeFi投资者开辟了一个全新的、与高增长科技行业直接挂钩的收益来源。

### **B. 双代币经济模型：USDai 与 sUSDai**

USD.AI 的经济系统围绕两种核心代币构建，每种代币都有明确的功能定位，共同构成了协议的价值循环。

* **USDai**：这是协议的核心稳定币，其设计目标是用于交易和支付，并在DeFi生态系统中拥有深度流动性。它由资产完全支持，但其本身不为持有者带来收益，主要作为用户进入生态系统的稳定媒介和入口资产 2。根据链上数据，USDai 在 Arbitrum 网络的合约地址为  
  0x0a1a1a107e45b7ced86833863f482bc5f4ed82ef 15。用户可以通过存入USDC等稳定币来铸造USDai。  
* **sUSDai**：这是协议的计息代币，也是投资者的主要投资工具。用户通过质押 USDai 来获得 sUSDai。sUSDai 能够持续累积由硬件抵押贷款所产生的高额收益 2。这种设计将寻求稳定性的用户（持有USDai）和寻求高收益的用户（持有sUSDai）的需求进行了有效分离，使得协议能够同时满足不同风险偏好的投资者。

### **C. 技术框架：三大支柱**

USD.AI 的创新不仅在于其商业模式，更在于其底层的技术和法律框架，这三大支柱共同确保了协议的安全性和可扩展性。

* **CALIBER (Collateralized Asset Ledger: Insurance, Bailment, Evaluation, and Redemption)**：这是将物理硬件代币化为可验证、具有法律强制力的链上资产（通常为ERC-721 NFT）的法律和技术支柱。它为保险、所有权文件的链上绑定和资产赎回提供了一套标准化的七步流程，这对于确保真实世界资产（RWA）的完整性和可信度至关重要 1。可以说，CALIBER是连接物理世界和数字世界的桥梁。  
* **FiLo Curator**：这是协议的规模化扩展机制。它确保了真实世界的基础设施贷款能够在大规模引入的同时，保持风险的一致性和对所有参与者的结构性保护 1。这表明协议内部拥有一套用于标准化筛选、评估借款人和抵押品的系统，是协议风险控制的核心组成部分。  
* **QEV (Queue Extractable Value)**：这是一种新颖的去中心化流动性原语，专门用于管理支持 sUSDai 的非流动性抵押品的赎回。传统的“先进先出”赎回队列在流动性紧张时容易被利用或导致挤兑。QEV采用市场驱动的机制（很可能是拍卖模型）来处理提款请求，尤其是在流动性不足的时期，旨在更公平、更有效地匹配买卖双方，从而维护协议的稳定性 1。

这种复杂的架构表明，USD.AI 不仅仅是一个简单的稳定币协议，它更像是一个为特定行业（AI硬件）提供服务的、技术驱动的专业信贷发起和资产管理平台。其成功不仅取决于智能合约的安全性，更深层次地依赖于其在现实世界中进行优质贷款承销和物理抵押品管理的能力。协议的核心价值创造环节——包括寻找和审查借款方、评估和保管GPU硬件——都发生在链下。这意味着它的核心竞争力源于现实世界的商业拓展和风险管理能力，而不仅仅是代码。

同时，QEV机制是协议应对核心“银行挤兑”风险的关键创新，体现了团队对协议内在风险的深刻认知。sUSDai 的持有者期望获得即时或短期的流动性，但其背后的资产却是长期的、非流动性的硬件贷款。这种期限错配是所有信贷系统的核心风险。QEV机制正是为了解决这个问题而设计的，显示了团队的前瞻性。然而，作为一个全新的、未经市场极端压力测试的机制，其在危机中的实际表现仍然是未知数，这也是协议最核心的技术风险点。

## **III. 市场分析与竞争格局**

### **A. RWA与AI-DeFi叙事**

USD.AI 精准地切入了当前DeFi领域两个最强劲的增长叙事：真实世界资产（RWA）和人工智能（AI）。

RWA被认为是DeFi下一阶段增长的关键驱动力，其目标是将数万亿美元的现实世界价值引入链上，从而极大地扩展DeFi的市场规模和应用场景 18。USD.AI 作为RWA借贷类别的一员，完全符合这一宏大趋势 11。

与此同时，AI的爆发式增长带来了对计算能力的无尽需求。据预测，未来五年内，AI计算基础设施的投资需求将超过6.7万亿美元 4。这为相关融资服务创造了一个庞大且快速增长的潜在市场。USD.AI 通过将这两个叙事相结合，创造了一个极具吸引力的投资故事，能够同时吸引来自加密原生和传统科技领域的关注和资本。

### **B. 竞争定位与分析**

USD.AI 的主要竞争对手并非USDT或USDC等传统稳定币，而是其他专注于RWA的私人信贷协议。

* **Centrifuge (CFG)**：作为RWA领域的先驱，Centrifuge专注于处理包括发票、抵押贷款在内的多种资产。其TVL超过11.4亿美元，规模远大于USD.AI 20。然而，Centrifuge的业务范围较为宽泛，并未在某个特定的高增长细分领域形成绝对优势。  
* **Maple Finance (SYRUP)**：这是一个面向机构的资本市场，主要为加密原生公司提供非足额抵押贷款。其TVL超过4.63亿美元，但在过去曾面临过借款方违约的挑战 22。

USD.AI 的核心差异化优势在于其对GPU抵押品的极度专注。这种专注使其能够建立专业的承销能力、抵押品管理流程，并形成一个清晰、有力的市场叙事，能够同时引起AI和加密投资者的共鸣。虽然其目前约6800万美元的TVL相对较小，但其在选定的细分市场中展现出的快速增长势头，证明了其策略的初步成功 11。

### **C. RWA信贷协议竞争格局对比**

为了更直观地展示USD.AI的市场定位，下表将其与主要竞争对手进行了多维度对比。

| 指标 | USD.AI | Centrifuge | Maple Finance |
| :---- | :---- | :---- | :---- |
| **总锁定价值 (TVL)** | 约 $68.69M 11 | 约 $1.14B 21 | 约 $463M 22 |
| **主要抵押品** | AI硬件 (GPU) 1 | 多样化的RWA (发票、抵押贷款等) | 主要为非足额抵押 (基于信誉) |
| **目标借款方** | AI初创公司和基础设施运营商 5 | 中小企业、金融科技公司 | 加密原生机构 (做市商、基金) |
| **收益来源** | GPU支持的贷款利息 2 | 多样化资产池的利息 | 非足额抵押贷款的利息 |
| **核心差异化** | 专注高增长的AI领域，快速贷款审批 | 广泛的RWA多样性，拥有较长的运营记录 | 为加密原生公司提供无硬资产抵押的渠道 |
| **主要部署区块链** | Arbitrum 11 | Ethereum, Arbitrum, Base 21 | Ethereum, Solana, Base |

通过对比可以看出，USD.AI 正在执行一种“深耕细分领域以实现规模化”的战略。通过专注于一个服务不足但需求旺盛的单一资产类别，它可以在扩大业务之前建立起专业知识和强大的品牌形象。在一个广泛且竞争激烈的RWA市场中，与Centrifuge等老牌项目正面竞争将非常困难。USD.AI选择的GPU赛道，其市场需求明确且紧迫，而现有参与者并未专门满足这一需求。这种专注使其能够为该特定市场创造出更具吸引力和效率的产品，从而实现了TVL的快速初始增长。这是一种应用于DeFi领域的经典颠覆性创业策略。

## **IV. 安全与风险评估**

### **A. 智能合约安全：房间里的大象**

协议官方文档明确指出，关于安全审计的信息目前无法获取 2。这是一个

**极其严重的风险**。

尽管顶级风险投资机构在投资前很可能进行了非公开的尽职调查，但对于公众投资者而言，缺乏一份由信誉良好的第三方审计公司（如 Trail of Bits, OpenZeppelin, Quantstamp）出具的公开审计报告，是一个重大的危险信号。没有这份报告，用户只能盲目地相信项目方代码的完整性和安全性。对于任何DeFi协议，尤其是处理数千万美元资产的协议，这都是不可接受的。

### **B. 抵押品风险分析**

* **价格波动风险**：GPU的市场价格会波动。GPU价格的大幅下跌可能导致贷款抵押不足，从而对协议的偿付能力构成威胁。协议的风险管理框架必须能够有效应对这种波动。  
* **折旧与过时风险**：AI硬件的更新换代速度极快，存在迅速折旧和过时的风险。贷款的期限和贷款价值比（LTV）必须足够保守，以在贷款周期内管理这一风险。  
* **物理保管与清算风险**：协议依赖其法律框架（CALIBER）来保障并在必要时扣押和清算物理资产。与纯链上清算相比，这一过程本质上更慢、更复杂，并引入了法律和运营层面的风险。

### **C. 协议与系统性风险**

* **sUSDai赎回流动性风险**：如前所述，这是协议的核心系统性风险。对 sUSDai 的“银行挤兑”可能会对QEV机制造成巨大压力，导致用户赎回延迟甚至产生损失 2。  
* **中心化风险**：贷款的承销和抵押品管理过程（FiLo Curator）在初期阶段很可能是中心化的，由核心团队或一个小委员会管理。这使得协议的风险控制依赖于核心团队的判断力和运营安全。  
* **治理风险**：官方文档中关于治理模型的信息同样缺失 2。目前尚不清楚协议的长期治理结构、风险参数的设定机制以及财库的管理方式。这是一个重大的未知数。

综合来看，USD.AI的投资提议本质上是一种权衡：投资者通过接受显著的透明度风险和新机制风险，来换取一个由真实世界资产支持的高额收益。协议提供的 15%∼25% 的目标APR，正是对这些风险的补偿 3。高收益总是伴随着高风险。当前可识别的风险包括缺乏公开审计、抵押品的非流动性以及未经检验的赎回机制 2。因此，投资决策的核心在于判断所提供的收益是否足以弥补这些不容忽视的风险。

此外，协议的成功在很大程度上依赖于链下的法律和运营执行能力，而这恰恰是许多DeFi项目的短板。CALIBER框架被描述为一个法律和技术支柱，这意味着它涉及到法律合同、保险政策和实体资产管理 1。这些都是传统的商业运营活动，而不仅仅是智能合约代码。如果贷款的法律强制力或抵押品的物理安全性出现问题，无论智能合约多么安全，整个系统都将受到破坏。这使得对项目方运营伙伴和法律结构的尽职调查（目前信息不公开）变得至关重要。

## **V. 团队、投资者与生态系统**

### **A. 核心团队评估：Permian Labs**

USD.AI 由 Permian Labs 开发，该团队也是知名NFT流动性协议 MetaStreet 的幕后推手。这表明团队拥有在DeFi领域成功构建和运营项目的经验 14。

公开资料显示，联合创始人包括 David Choi（拥有房地产投资银行和DeFi背景）、Conor Moore（拥有房地产私募股权和结构化金融经验）以及 McCall（拥有比特币挖矿和高频交易专业知识）14。这种融合了传统金融、DeFi和硬件特定领域经验的团队构成，与项目本身的需求高度契合，是一个非常积极的信号。

### **B. 投资者与支持者实力**

USD.AI 的投资者阵容堪称顶级。A轮融资由 Framework Ventures 领投，参投方包括 Dragonfly、Bullish、Arbitrum、Digital Currency Group (DCG)、Delphi Ventures 和 Fintech Collective 等 7。

这些机构并非普通的财务投资者，而是加密领域最受尊敬、资源最丰富的风险投资公司。他们的支持不仅为项目带来了巨大的信誉背书，还可能在战略、生态系统整合等方面提供关键支持。

### **C. 合作伙伴生态**

* **YZi Labs**：来自 YZi Labs 的战略投资是一个重要的验证信号，可能为项目打开通往币安生态系统的潜在渠道 6。  
* **Pendle Finance**：与 Pendle 的整合是协议的关键一步，它为 sUSDai 创造了收益交易市场。这一合作为协议增加了可组合性，并吸引了大量成熟的收益耕作玩家 6。  
* **Euler, K3 Capital, Concrete**：与这些DeFi协议在“AutoVaults”功能上的合作，表明项目正在积极寻求整合，以优化收益和资本效率 4。

### **D. 社区与社交媒体情绪分析**

* 协议的官方推特账号为 @USDai\_Official，其活动主要集中在发布关于融资和合作的重大公告 6。  
* Coinbase 平台上的社交媒体情绪数据显示，相关讨论帖子数量较少，表明社区仍处于早期阶段 3。在 Reddit 等其他主流社区，提及度也极低 29。  
* 在公开可查的资料中，缺乏官方、活跃的 Discord 或 Telegram 社区链接，这是一个小小的负面信号，因为这些渠道是DeFi协议与社区互动和提供支持的标准平台 30。

分析至此，可以发现项目在“内部人士”视角和“外部人士”视角之间存在显著的信息脱节。从内部看，项目拥有经验丰富的团队、顶级VC的支持和一个清晰且引人注目的愿景，前景一片光明 5。然而，从外部公众投资者的角度看，项目充满了风险：没有公开审计、没有公开的治理模型、核心机制未经检验 2。这种信息不对称本身就是一个风险因素，它表明VC们可能接触到了公众无法获得的关键信息。早期投资者押注的是团队和VC的尽职调查能力，而公众投资者则需要承担更大的信念飞跃。

## **VI. 投资机会与策略性收益耕作**

### **A. 核心收益策略：质押获取 sUSDai**

最直接的投资方式是存入稳定币（如USDC）铸造 USDai，然后将 USDai 质押以获得 sUSDai 2。这种策略让投资者直接捕获协议的核心收益，目标APR为

15%∼25% 3。

**风险**：该策略将投资者完全暴露于协议的所有风险之下，包括抵押品违约风险和 sUSDai 的赎回延迟风险。

### **B. 高级策略：在Pendle Finance上进行收益交易**

USD.AI 与 Pendle 的整合为 sUSDai 创造了收益衍生品市场，从而催生了更复杂的投资策略 6。

* **固定收益 (购买PT)**：投资者可以在Pendle上以低于其面值的价格购买本金代币（PT-sUSDai）。持有PT至到期日，可以保证获得一个固定的、可预测的收益，而不受 sUSDai 基础APR波动的影响。对于希望锁定回报、规避收益率下降风险的投资者来说，这是一个风险相对较低的策略 34。  
* **杠杆化收益 (购买YT)**：投资者可以购买收益代币（YT-sUSDai），以获得对 sUSDai 未来产生收益的杠杆化敞口。如果在购买时，sUSDai 的实际收益率高于市场隐含的收益率，那么该策略将获得超额回报。这是一个高风险、高回报的策略，本质上是在对赌未来的收益率走势。需要注意的是，YT的价值会随着时间衰减，并在到期时归零 34。

### **C. 投机性机会：通过“Allo积分”参与空投和ICO**

协议正在进行一项积分活动，以决定未来治理代币的分配资格 33。该活动为投资者提供了两条截然不同的路径：

* **路径一 (空投 \- 蓝绿色积分)**：质押 USDai 以获得 sUSDai。这条路径不仅可以赚取协议的原生收益，还能获得“蓝绿色”积分，这些积分将用于未来的潜在空投（占代币总供应量的3%）33。这条路径适合希望通过提供流动性来“赚取”其代币分配的用户。  
* **路径二 (ICO \- 棕色积分)**：仅存入 USDai 而不进行质押。这条路径没有原生收益，但能以5倍的乘数获得“棕色”积分，这些积分将用于保证在未来以3亿美元完全稀释估值（FDV）进行的ICO中的分配额度（占代币总供应量的7%）33。这条路径适合资本雄厚、希望早期购买项目治理代币的投资者。

这种双轨制迫使投资者根据自身的资本规模、风险承受能力以及对项目未来估值的判断，做出战略性选择。

### **D. 开发者机会**

协议的文档中包含一个“技术概述”部分，并提供了合约地址的链接，但并未提及明确的开发者文档、API、SDK或开发者资助计划 2。这表明在当前早期阶段，协议的重点并非构建第三方开发者生态。对于有开发背景的投资者而言，当前的机会在于密切关注未来可能发布的资助或悬赏计划，或者主动为生态系统构建辅助工具（如分析仪表板、金库策略优化器等），以期获得早期贡献者地位。

### **E. 投资策略对比分析**

下表对所有潜在的投资机会进行了全面的对比分析，旨在为投资者提供一个清晰、可操作的决策框架。

| 投资策略 | 描述 | 潜在优势 | 潜在劣势 | 预期APR/APY或回报概况 |
| :---- | :---- | :---- | :---- | :---- |
| **持有 USDai** | 持有稳定币用于交易目的。 | 稳定，在Curve等DEX上具有流动性 16。 | 无收益，存在机会成本。 | 0% |
| **质押sUSDai (空投路径)** | 质押USDai以获得计息的sUSDai，并赚取“蓝绿色”空投积分。 | 较高的基础收益，潜在的空投收益。 | 存在赎回周期，抵押品风险，空投不确定。 | 目标 15%∼25% APR \+ 投机性空投 |
| **存入USDai (ICO路径)** | 存入USDai以5倍乘数赚取“棕色”ICO积分。 | 保证ICO额度，积分累积速度快。 | 存款期间无收益，资金被锁定，ICO估值风险。 | 投机性 (取决于ICO后代币表现) |
| **Pendle固定收益 (PT-sUSDai)** | 在Pendle上购买本金代币。 | 可预测的锁定回报，对冲收益率下降的风险。 | 上行空间有限，若收益率上升则资本效率较低。 | 市场驱动 (例如， 10%∼15% 固定APY) |
| **Pendle杠杆化收益 (YT-sUSDai)** | 在Pendle上购买收益代币。 | 对收益的杠杆化敞口，若收益率上升则回报高。 | 高风险，YT到期归零，若收益率下降则亏损。 | 极度可变 (可能 \> 100% 或 \< −100%) |
| **生态系统开发** | 为协议构建工具或集成。 | 有可能获得资助，获得早期生态地位。 | 尚无正式计划，投入精力大，回报不确定。 | 不适用 (基于资助/风险投资) |

## **VII. 最终结论与投资评级**

### **A. 综合分析**

本报告对USD.AI协议进行了全面深入的分析。其核心优势在于精准地抓住了AI基础设施融资这一巨大且服务不足的市场，并拥有一支经验丰富的团队和顶级VC的鼎力支持。然而，其风险也同样突出：关键的智能合约安全审计报告缺失，这构成了投资决策中的一个根本性障碍；同时，协议依赖于创新的、但未经市场极端压力考验的机制来管理非流动性资产的赎回风险。

### **B. 风险调整后展望**

从风险回报的角度看，USD.AI提供的高目标收益率是对其所承担的独特风险的直接补偿。这些风险包括智能合约风险、抵押品价值波动风险、法律执行风险以及核心机制的稳健性风险。在当前阶段，由于缺乏公开的安全审计，投资者无法对智能合约风险进行有效评估。因此，任何投资都应被视为高度投机性的。

对于成熟的投资者而言，这可能是一个适合在其投资组合中配置少量、高风险资金的标的，前提是充分理解并愿意承担上述所有风险。投资决策的关键在于，是否相信顶级VC的尽职调查能够弥补公开信息的不足。

### **C. 最终投资评级**

**中立 (Neutral)**

此评级反映了项目巨大的潜力和同样巨大的风险之间的平衡。在项目方发布由多家信誉良好的公司出具的、令人满意的安全审计报告之前，无法给出更积极的评级。一旦该核心风险得到解决，评级将有可能调整为**建议 (Recommend)**。投资者应将任何对USD.AI的投资视为早期风险投资，并相应地管理其头寸规模。

#### **引用的著作**

1. USD AI, 访问时间为 八月 27, 2025， [https://usd.ai/](https://usd.ai/)  
2. Welcome to USD.AI | USD.AI, 访问时间为 八月 27, 2025， [https://docs.usd.ai/](https://docs.usd.ai/)  
3. USDai Price, USDAI Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 八月 27, 2025， [https://www.coinbase.com/en-gb/price/usdai](https://www.coinbase.com/en-gb/price/usdai)  
4. YZi Labs Backs USD.AI's Hardware-Collateralized Lending Protocol | CoinMarketCap, 访问时间为 八月 27, 2025， [https://coinmarketcap.com/academy/article/yzi-labs-backs-usdais-hardware-collateralized-lending-protocol](https://coinmarketcap.com/academy/article/yzi-labs-backs-usdais-hardware-collateralized-lending-protocol)  
5. USD AI: What Is the GPU-Backed Stablecoin? \- BitKan.com, 访问时间为 八月 27, 2025， [https://bitkan.com/learn/usd-ai-what-is-the-gpu-backed-stablecoin-61982](https://bitkan.com/learn/usd-ai-what-is-the-gpu-backed-stablecoin-61982)  
6. YZi Labs Backs USD.AI Stablecoin – Yield-Bearing, AI-Backed Play Raises Big Questions, 访问时间为 八月 27, 2025， [https://cryptorank.io/news/feed/44947-yzi-labs-backs-usd-ai-stablecoin-yield-bearing-ai-backed-play-raises-big-questions](https://cryptorank.io/news/feed/44947-yzi-labs-backs-usd-ai-stablecoin-yield-bearing-ai-backed-play-raises-big-questions)  
7. 15 public financing events occurred, stablecoin protocol USD.AI completed a $13 million Series A financing round, led by Framework Ventures., 访问时间为 八月 27, 2025， [https://news.futunn.com/en/post/60727779/financing-weekly-15-public-financing-events-occurred-stablecoin-protocol-usdai](https://news.futunn.com/en/post/60727779/financing-weekly-15-public-financing-events-occurred-stablecoin-protocol-usdai)  
8. Crypto Fundraisings on Week 10 – 16, Aug 2025, 访问时间为 八月 27, 2025， [https://crypto-fundraising.info/blog/dates-10-16-aug-2025/](https://crypto-fundraising.info/blog/dates-10-16-aug-2025/)  
9. Funding Weekly丨22 projects raised $1.3 billion, Bullish raised $1.1 billion | 金色财经 on Binance Square, 访问时间为 八月 27, 2025， [https://www.binance.com/en/square/post/28421007777450](https://www.binance.com/en/square/post/28421007777450)  
10. A total of 21 public funding events occurred in the crypto market last week, with a cumulative fundraising of approximately $2.295 billion | Investment and financing weekly report \- OKX TR, 访问时间为 八月 27, 2025， [https://tr.okx.com/en/news/article/total-21-public-funding-events-occurred-crypto-market-last-week-cumulative-fundraising-approximately-2-295-billion-investment-financing-weekly-report-52649493506208](https://tr.okx.com/en/news/article/total-21-public-funding-events-occurred-crypto-market-last-week-cumulative-fundraising-approximately-2-295-billion-investment-financing-weekly-report-52649493506208)  
11. USD AI \- DefiLlama, 访问时间为 八月 27, 2025， [https://defillama.com/protocol/usd-ai](https://defillama.com/protocol/usd-ai)  
12. coinmarketcap.com, 访问时间为 八月 27, 2025， [https://coinmarketcap.com/academy/article/yzi-labs-backs-usdais-hardware-collateralized-lending-protocol\#:\~:text=The%20protocol%20offers%20hardware%2Dbacked,%2C%20Concrete%2C%20Euler%20and%20Pendle.](https://coinmarketcap.com/academy/article/yzi-labs-backs-usdais-hardware-collateralized-lending-protocol#:~:text=The%20protocol%20offers%20hardware%2Dbacked,%2C%20Concrete%2C%20Euler%20and%20Pendle.)  
13. YZi Labs Backs USD.AI in Push to Finance AI Infrastructure with Stablecoins \- CoinCentral, 访问时间为 八月 27, 2025， [https://coincentral.com/yzi-labs-backs-usd-ai-in-push-to-finance-ai-infrastructure-with-stablecoins/](https://coincentral.com/yzi-labs-backs-usd-ai-in-push-to-finance-ai-infrastructure-with-stablecoins/)  
14. usd.ai: Project Guide | Latest Updates, Presale & Airdrop, 访问时间为 八月 27, 2025， [https://web3.bitget.com/en/dapp/usd-ai-29692](https://web3.bitget.com/en/dapp/usd-ai-29692)  
15. USDai (USDai) | ERC-20 | Address: 0x0a1a1a10...5f4ed82ef | Arbitrum One \- Arbiscan, 访问时间为 八月 27, 2025， [https://arbiscan.io/token/0x0a1a1a107e45b7ced86833863f482bc5f4ed82ef](https://arbiscan.io/token/0x0a1a1a107e45b7ced86833863f482bc5f4ed82ef)  
16. USDAI Live Price Chart, Market Cap & News Today \- CoinGecko, 访问时间为 八月 27, 2025， [https://www.coingecko.com/en/coins/usdai](https://www.coingecko.com/en/coins/usdai)  
17. Permian Labs: USDai Token | Address: 0x0A1a1A10...5f4ed82EF | Arbitrum One \- Arbiscan, 访问时间为 八月 27, 2025， [https://arbiscan.io/address/0x0A1a1A107E45b7Ced86833863f482BC5f4ed82EF](https://arbiscan.io/address/0x0A1a1A107E45b7Ced86833863f482BC5f4ed82EF)  
18. Real-World Assets (RWAs) Explained \- Chainlink, 访问时间为 八月 27, 2025， [https://chain.link/education-hub/real-world-assets-rwas-explained](https://chain.link/education-hub/real-world-assets-rwas-explained)  
19. Paribus \- Arbitrum Portal, 访问时间为 八月 27, 2025， [https://portal.arbitrum.io/?project=paribus](https://portal.arbitrum.io/?project=paribus)  
20. Centrifuge \- DefiLlama, 访问时间为 八月 27, 2025， [https://defillama.com/protocol/centrifuge](https://defillama.com/protocol/centrifuge)  
21. Centrifuge Protocol \- DefiLlama, 访问时间为 八月 27, 2025， [https://defillama.com/protocol/centrifuge-protocol](https://defillama.com/protocol/centrifuge-protocol)  
22. Maple Finance \- DefiLlama, 访问时间为 八月 27, 2025， [https://defillama.com/protocol/maple-finance](https://defillama.com/protocol/maple-finance)  
23. Maple \- DefiLlama, 访问时间为 八月 27, 2025， [https://defillama.com/protocol/maple](https://defillama.com/protocol/maple)  
24. Gate Ventures Weekly Crypto Recap (August 18, 2025\) \- Medium, 访问时间为 八月 27, 2025， [https://medium.com/@gate\_ventures/gate-ventures-weekly-crypto-recap-august-18-2025-7374a22a44f0](https://medium.com/@gate_ventures/gate-ventures-weekly-crypto-recap-august-18-2025-7374a22a44f0)  
25. YZi Labs announces investment in yield-generating synthetic dollar protocol USD.AI, 访问时间为 八月 27, 2025， [https://www.panewslab.com/en/articles/0f5c6c1c-3367-4c43-9cf1-e61e1cc90300](https://www.panewslab.com/en/articles/0f5c6c1c-3367-4c43-9cf1-e61e1cc90300)  
26. Gasp \- Arbitrum Portal, 访问时间为 八月 27, 2025， [https://portal.arbitrum.io/?project=gasp](https://portal.arbitrum.io/?project=gasp)  
27. YZi Labs invests in the stablecoin protocol USD.AI \- Binance, 访问时间为 八月 27, 2025， [https://www.binance.com/square/post/08-26-2025-yzi-labs-usd-ai-28837726133018](https://www.binance.com/square/post/08-26-2025-yzi-labs-usd-ai-28837726133018)  
28. Euler Price: EUL Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 八月 27, 2025， [https://www.coingecko.com/en/coins/euler](https://www.coingecko.com/en/coins/euler)  
29. USDai Price, USDAI Price, Live Charts, and Marketcap \- Coinbase India, 访问时间为 八月 27, 2025， [https://www.coinbase.com/en-in/price/usdai](https://www.coinbase.com/en-in/price/usdai)  
30. Stablecoin Protocol USD.AI Secures $13 Million in Series A Funding | Bitget News, 访问时间为 八月 27, 2025， [https://www.bitget.com/news/detail/12560604912187](https://www.bitget.com/news/detail/12560604912187)  
31. Livepeer to Hold AMA on Discord on August 27th \- RootData, 访问时间为 八月 27, 2025， [https://www.rootdata.com/news/160128](https://www.rootdata.com/news/160128)  
32. USD.AI Price Today | USD Price Live Chart & Market Cap \- DropsTab, 访问时间为 八月 27, 2025， [https://dropstab.com/coins/usd-ai](https://dropstab.com/coins/usd-ai)  
33. USD.ai Airdrop Guide\_ Steps to Potential Reward \_ CryptoRank.io \- Scribd, 访问时间为 八月 27, 2025， [https://www.scribd.com/document/904587474/USD-ai-Airdrop-Guide-Steps-to-Potential-Reward-CryptoRank-io](https://www.scribd.com/document/904587474/USD-ai-Airdrop-Guide-Steps-to-Potential-Reward-CryptoRank-io)  
34. Pendle 2025: Building DeFi's Fixed Income Layer \- Greythorn Asset Management \- Medium, 访问时间为 八月 27, 2025， [https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd](https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd)  
35. Pendle: The Golden DeFi Protocol Of 2024, Why, What, And How (Part 1\) \- RedStone blog, 访问时间为 八月 27, 2025， [https://blog.redstone.finance/2024/05/03/pendle-the-golden-defi-protocol-of-2024-why-what-and-how-part-1/](https://blog.redstone.finance/2024/05/03/pendle-the-golden-defi-protocol-of-2024-why-what-and-how-part-1/)