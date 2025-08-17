

# **Aethir (ATH) 投资评估报告：深入解析去中心化GPU算力的机遇与风险**

**执行摘要**

本报告对去中心化物理基础设施网络（DePIN）项目Aethir（ATH）进行了全面的机构级投资评估。我们的核心结论是，Aethir代表了一项高风险、高潜在回报的投机性投资机会。基于对其技术、市场、代币经济、团队、安全状况和生态系统的深入分析，本报告给予Aethir **“中立/投机性买入”** 的投资评级。

Aethir的核心投资吸引力在于其精准的战略定位——切入高速增长的DePIN和人工智能（AI）叙事，并由一支在游戏、电信和Web3领域拥有深厚背景和卓越执行能力的资深团队领导 1。项目声称已获得显著的年度经常性收入（ARR），并与EigenLayer等行业领导者建立了战略合作关系，这为其未来发展描绘了宏伟蓝图 4。

然而，巨大的机遇伴随着同等甚至更为严峻的风险。最突出的风险点在于其安全透明度的严重缺失。截至本报告撰写之时，Aethir未能提供由顶级安全公司对其核心智能合约（特别是复杂的质押和eATH机制）进行的最新、全面的公开审计报告 6。这一缺失与行业最佳实践严重背离，对投资者资金安全构成重大潜在威胁。其次，其代币经济模型存在巨大的通货膨胀压力，高达50%的代币供应将在四年内作为网络奖励释放，可能对代币价格构成持续的下行压力 8。

本报告为投资者剖析了多种参与Aethir生态的途径，包括直接购买代币、运营节点、参与不同风险级别的质押（包括与EigenLayer集成的eATH模型），以及为具备开发背景的投资者提供的生态系统资助机会。每种策略都附有详细的优缺点、潜在回报和风险评估。

最终，投资Aethir的决策取决于投资者对“团队执行力能够战胜安全不确定性和通胀压力”这一核心命题的信念。我们强烈建议，任何投资决策都应基于对本报告所揭示风险的充分理解，并匹配个人的高风险承受能力。未来，Aethir能否发布全面的安全审计报告、成功完成计划中的主网升级，以及其链上收入能否验证其宏大的商业声明，将是决定该项目长期价值的关键催化剂。

## **1.0 项目基本面：解构Aethir的去中心化云**

### **1.1 引言：Aethir在DePIN革命中的角色**

Aethir将自身定位为去中心化物理基础设施网络（DePIN）领域的关键参与者，其核心使命是实现对高性能GPU计算能力的民主化访问 10。该项目旨在解决当前由少数科技巨头垄断GPU资源而导致的AI和云游戏行业计算能力稀缺的问题 12。通过构建一个全球化的、分布式的未充分利用的企业级GPU网络，Aethir致力于在DePIN的宏大叙事下，为市场提供一个更具弹性、成本效益和可及性的计算解决方案 14。

项目的愿景极具抱负，旨在弥合“GPU富裕”（拥有海量计算资源的科技巨头）与“GPU贫穷”（资源受限的初创公司和开发者）之间的“AI财富鸿沟” 13。通过提供企业级的计算能力，Aethir希望确保AI领域的创新不会因地理位置或经济实力的限制而受到扼杀，从而推动一个更加公平和普惠的技术未来 13。

### **1.2 核心技术与架构：容器、检查器与索引器网络**

Aethir的网络架构设计精巧，由三个核心角色协同工作，以确保服务质量、网络完整性和资源匹配效率 13。这种三方制衡的系统是其技术基石。

* **容器（Containers）**：作为网络的“动力源”，容器是实际执行计算和渲染任务的虚拟终端 17。它们的目标是提供即时响应、无延迟的云体验。为了保证服务质量，运行容器的节点运营商必须质押ATH代币。这种机制引入了经济激励和惩罚措施：提供高质量服务的节点获得奖励，而表现不佳或恶意的节点则面临其质押代币被削减（slashing）的风险，从而确保网络参与者的利益与网络整体表现保持一致 13。  
* **检查器（Checkers）**：扮演着“质量监察员”的角色。检查器的核心职责是验证容器的性能、硬件规格和在线状态，确保网络的完整性和可靠性 17。它们通过直接读取性能数据和模拟用户行为等方式，在容器生命周期的关键节点（如注册、待机、服务期间）进行测试 13。检查器执行的“渲染能力证明”（Proof of Rendering Capacity）和“工作量证明”（Proof of Rendering Work）是维护网络服务标准、防止欺诈的关键机制 11。值得注意的是，成为检查器需要购买许可证，该许可证以NFT的形式出售 13。  
* **索引器（Indexers）**：充当网络的“智能匹配者”。当用户请求计算服务时，索引器负责根据用户的具体需求（如延迟、成本、性能规格），从众多可用的容器中快速找到并分配最合适的一个 13。这一过程对于实现Aethir所承诺的低延迟体验至关重要，特别是在对响应时间极为敏感的云游戏场景中。

这种由容器、检查器和索引器构成的三位一体架构，理论上创建了一个自我调节和自我监督的系统。然而，其复杂性也带来了潜在的风险。整个网络的效能高度依赖于这三个组件的协同和诚信运作。例如，如果检查器系统存在漏洞，或其激励机制不足以保证其公正性，导致它们错误地验证了性能不佳的容器，那么索引器依据错误数据做出的匹配决策将损害用户体验，从而侵蚀Aethir的核心价值主张。因此，检查器节点的经济安全和激励对齐，与容器节点的原始计算能力同等重要。

### **1.3 战略聚焦：企业级AI与云游戏**

Aethir并非一个通用的云计算平台，而是精准地瞄准了两个对GPU性能有极高要求的垂直领域：企业级AI和云游戏 10。这种专注使其能够针对性地优化其基础设施，以满足这些特定应用场景的严苛要求。

在AI领域，Aethir旨在为模型训练和实时推理等任务提供强大的计算支持。项目声称其网络中整合了NVIDIA H100s等顶级AI芯片，这是吸引大型企业客户的关键所在 10。在云游戏领域，Aethir致力于解决延迟问题，为全球玩家提供流畅、高清的实时渲染体验 12。

### **1.4 Aethir Edge设备与消费级算力**

为了进一步扩大其算力供给并增强网络的去中心化程度，Aethir推出了“Aethir Edge”硬件设备 23。该设备允许普通用户将自己的闲置计算资源贡献给网络，并以此赚取ATH代币作为回报 13。这一举措将网络的供给侧从企业级数据中心扩展到了消费级市场。

这种企业级（如H100s）和消费级（Aethir Edge）硬件并存的模式，在扩大网络规模的同时，也带来了新的挑战。这两种硬件在性能、稳定性、在线时间等方面存在巨大差异，必然会形成两个不同的服务层级。一个成功的系统必须能够有效地区分和隔离这两类资源池，将要求严苛的企业级任务路由到高端、可靠的容器，而将消费级算力用于对稳定性和性能要求较低的场景。这意味着Aethir的后端系统需要比一个简单的市场平台复杂得多，其索引和质量保证机制必须足够智能，以实现精准的任务分发。这套管理系统的实际运行效率，将是决定Aethir能否同时服务好两类市场的关键。

## **2.0 财务与市场表现分析**

### **2.1 ATH代币：价格历史、波动性与关键市场指标**

自2024年6月推出以来，Aethir的原生代币ATH经历了显著的价格波动，这对于一个处于强叙事（AI和DePIN）中的新兴资产而言是典型特征 24。截至本报告分析期间，关键市场指标如下：总供应量为420亿枚，流通供应量约为106亿枚，完全稀释估值（FDV）与市值之间存在较大差距，这反映了未来代币释放带来的稀释预期 10。投资者需密切关注其价格图表，以了解其波动规律和市场情绪变化。

### **2.2 链上情报与用户指标**

对一个DeFi项目进行深入分析，链上数据是不可或缺的一环。理想的分析应包括对唯一钱包地址数量、持币人分布、交易所资金流向等指标的持续追踪。这些数据能够揭示用户增长的真实趋势、代币的集中度风险以及市场买卖压力。尽管本次研究的资料中缺乏来自Glassnode或Santiment等专业链上分析平台的直接数据，但HashEx的AI审计报告在分析时曾指出，未发现显著的巨鲸地址集中现象，这是一个初步的积极信号 7。然而，持续的链上监控对于验证项目健康度至关重要。

### **2.3 竞争格局分析：Aethir与DePIN领域的对手们**

Aethir在一个充满活力但竞争激烈的赛道中运营。为了准确评估其市场地位，必须将其与主要的去中心化GPU计算项目进行横向对比，尤其是Akash Network（AKT）和Render Network（RNDR）。

**表1：DePIN GPU提供商竞争分析**

| 特性 | Aethir (ATH) | Akash Network (AKT) | Render Network (RNDR) |
| :---- | :---- | :---- | :---- |
| **主要用例** | 企业级AI、低延迟云游戏 26 | 通用去中心化云计算市场（CPU+GPU）27 | 3D图形渲染、AI计算 28 |
| **底层区块链** | 以太坊（计划Q4迁移至新链）23 | Cosmos SDK 26 | 以太坊、Solana 28 |
| **共识/验证机制** | 渲染能力证明（Proof of Rendering Capacity）15 | 权益证明（Proof-of-Stake）27 | 渲染工作量证明（Proof-of-Render）11 |
| **市值 (约)** | \~$3.8亿 10 | \~$3.5亿 31 | \~$20.9亿 28 |
| **完全稀释估值 (约)** | \~$15.1亿 10 | \~$5亿 32 | \~$26亿 28 |
| **声称年收入** | $1.13亿+ (ARR) 4 | $74.2万 (Q4 2024\) 32 | \~$800万 (年化) 29 |
| **代币用途** | 支付、质押、治理、激励 23 | 支付、质押、治理、激励 27 | 支付、激励 33 |
| **关键差异点** | 专注企业级和游戏，聚合现有GPU供应 26 | 成立于2018年，采用拍卖模式，成本较低 26 | 专注于渲染市场，拥有强大的创作者社区 29 |

*注：市值和收入数据基于研究材料中的信息，具有时效性，仅供比较参考。*

### **2.4 商业模式与收入流可行性**

Aethir的商业模式本质上是一个市场聚合平台。它连接GPU算力的提供方和需求方，并从每笔交易中抽取一定比例的服务费作为协议收入。据报道，该服务费以ATH代币支付，比例为20% 11。

Aethir团队公布的收入数据是其投资论述中的一个核心亮点。项目方声称在2024年第一季度已锁定了超过2000万美元的年度经常性收入（ARR），并在后续更新中将此数字提升至1.13亿美元以上 4。这些数字在Web3领域中极为亮眼，暗示了强大的商业拓展能力和市场需求。

然而，一个关键的尽职调查要点在于Aethir的估值与其声称的收入相对于竞争对手的巨大差异。社区讨论中敏锐地指出，Aethir声称拥有约9100万美元收入，市值却仅为约4亿美元，而Render的收入约为800万美元，市值却高达38亿美元 29。这背后反映了近10倍的估值乘数差异。这种现象可以有两种截然不同的解读：其一，Aethir的市场价值被严重低估，存在巨大的价格发现空间；其二，Aethir公布的“收入”数字可能存在误导性。传统金融中的“ARR”通常指已签订合同的未来收入承诺，而非已在链上实际结算的协议费用。由于目前缺乏如Token Terminal等平台提供的标准化链上财务数据来独立验证这些声明，投资者在很大程度上需要信赖项目团队的链下报告。这构成了一个核心的投资风险，即信息不对称风险。

此外，Aethir当前部署在以太坊上，但已宣布计划在2025年第四季度进行主网升级，并将业务扩展到一条新的、尚未公布的L1或L2网络 30。从战略上看，如果新选择的链能提供更优的性能、更低的成本和更活跃的开发者生态，这将是一个积极的举措。然而，区块链迁移本身技术复杂且充满风险，可能引发安全漏洞、流动性碎片化和社区分裂等问题。团队将升级推迟至第四季度，理由是需要“充足的时间进行评估和安全审计”，这显示了其对风险的审慎态度，但同时也给投资者和生态开发者带来了中期的不确定性 30。未来新链的选择，将成为影响项目发展轨迹的一个重大催化事件。

## **3.0 代币经济模型：深入剖析ATH**

### **3.1 代币分配与分发分析**

Aethir的代币ATH总供应量固定为420亿枚，这是一个确定的上限，为代币经济提供了一定的可预测性 9。其分配方案在表面上极度倾向于社区和网络参与者，旨在促进网络的去中心化和长期发展。

具体分配比例如下 8：

* **检查器与算力提供者**：50%  
* **生态系统基金**：15%  
* **团队**：12.5%  
* **投资者**：11.5%  
* **空投**：6%  
* **顾问**：5%

高达50%的代币被分配给网络的核心贡献者（检查器和算力提供者），这构成了网络激励的基础。虽然这种设计有助于吸引早期算力加入网络，但它也成为了代币通货膨胀最主要的来源。

### **3.2 释放计划与通胀压力评估**

理解代币的释放机制（Vesting）对于评估其未来价格压力至关重要。Aethir为不同利益相关方设定了不同的锁仓和线性释放计划。

**表2：ATH代币分配与释放计划**

| 利益相关方 | 分配比例 (%) | 代币数量 (亿) | 锁仓期 (Cliff) | 线性释放期 (Vesting) | 关键影响 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **检查器与算力提供者** | 50.0% | 210 | 无 | 48个月 (4年) | 持续、大量的通胀来源，是代币价格面临的最大抛压。 |
| **生态系统基金** | 15.0% | 63 | TBD | TBD | 用于DAO财库和生态发展，其使用方式将影响市场情绪。 |
| **团队** | 12.5% | 52.5 | 18个月 | 36个月 | 较长的锁仓期显示团队的长期承诺，但解锁后仍构成潜在抛压。 |
| **投资者** | 11.5% | 48.3 | 12个月 | 24个月 | 标准的投资者锁仓，解锁后可能带来集中抛售压力。 |
| **空投** | 6.0% | 25.2 | 分阶段 | 分三季释放 | 旨在激励社区，但短期内会增加流通供应量。 |
| **顾问** | 5.0% | 21 | TBD | TBD | 规模较小，但仍是潜在的供应来源。 |

来源: 8

最值得关注的是，针对网络提供者的50%代币将在4年内线性释放。这意味着每天都有大量新的ATH代币进入市场。一份分析报告预测，到2025年11月，ATH的流通供应量可能增长近两倍，而到2028年，初始供应量将被稀释约86% 8。数据平台Dropstab也显示，每日约有1092万枚ATH被解锁 36。这种巨大的、持续的通货膨胀是ATH代币面临的最严峻的财务风险。

### **3.3 核心效用与价值捕获机制**

ATH代币在Aethir生态系统中扮演着多重角色，其价值捕获能力直接关系到代币的长期价格支撑。

* **交易媒介**：企业和个人用户需要使用ATH代币来支付所消耗的GPU计算服务费用 23。这是代币最直接的价值来源。  
* **经济安全/质押**：容器节点运营商必须质押ATH代币才能加入网络提供服务。如果其行为不当（如提供虚假算力、服务中断），其质押的代币将被罚没（slash）13。这种机制将节点的经济利益与网络的健康状况绑定，创造了经济安全性。  
* **治理**：ATH持有者有权参与项目的去中心化自治组织（DAO），对协议的重大决策进行投票，从而影响项目的未来发展方向 8。  
* **激励**：网络通过支付ATH代币来奖励算力提供者、检查器节点以及质押者，激励他们为网络贡献资源和维护网络稳定 13。

Aethir的代币经济模型形成了一个高度依赖于市场叙事和价格动能的“飞轮效应”。高额的质押年化收益率（APR）（主要由代币增发支撑）吸引用户锁定ATH，减少了市场上的直接抛售压力，从而对价格形成支撑 8。代币价格的上涨使得以ATH计价的奖励更具吸引力，进一步激励用户参与质押，形成正向循环。

然而，这个循环是脆弱的。一旦AI和DePIN的叙事降温，或者市场整体进入下行周期，代币价格下跌将导致质押奖励的美元价值缩水。这将削弱质押的吸引力，可能引发大规模的解锁和抛售，进一步压低价格，形成恶性循环。因此，ATH代币价格的长期可持续性，最终取决于项目能否通过其业务产生足够强大的真实收入（即客户用真金白银购买ATH来支付服务费），以吸收和抵消其自身巨大的代币释放所带来的通胀压力。整个投资逻辑可以归结为一个核心问题：Aethir的业务发展速度，能否跑赢其代币的通货膨胀速度？

## **4.0 综合风险与尽职调查评估**

### **4.1 安全状况：对审计和代码透明度的批判性审查**

**这是一个重大的危险信号**：Aethir项目在安全透明度方面存在严重缺陷。截至本报告完成时，市场上未能找到一份由行业顶级安全公司（如CertiK、Halborn、Peckshield、Consensys Diligence等）针对Aethir当前运行的核心智能合约、质押机制或EigenLayer集成所做的最新、公开且全面的安全审计报告 37。

* **过时的审计记录**：OKX交易所的资料中提到了一份CertiK于2021年11月29日出具的审计报告 6。然而，这份报告已经严重过时，其时间远早于项目主网上线、代币生成以及当前复杂的质押和eATH功能的推出，因此不具备对当前系统的安全保障参考价值。  
* **AI审计的局限性**：一份由HashEx提供的AI驱动的自动化审计报告发现了一项高风险和八项中等风险问题，并特别指出合约代码未在链上验证，且包含了“自毁”功能 7。需要强调的是，AI审计只能发现已知的、模式化的漏洞，无法替代资深安全工程师对复杂业务逻辑进行的人工审查，其参考价值有限。  
* **模糊的合作关系**：Aethir宣布了与安全公司QuillAudits的合作关系。但仔细研究后发现，这更像是一个生态系统扶持计划，即QuillAudits为在Aethir生态上构建的项目提供审计费用抵免，而非对Aethir自身核心协议的审计 42。  
* **代码不透明**：项目的官方文档中提到了其检查器客户端的GitHub代码库链接 43，但在研究过程中该链接无法访问 44。更重要的是，社区中有声音指出项目的核心代码并未完全开源 45。这与Web3世界的透明和“不信任，去验证”（Don't trust, verify）精神背道而驰，构成了另一个严重的危险信号。

对于一个市值数亿美元、目标客户为大型企业且处理复杂金融逻辑（如质押和借贷）的项目而言，这种安全透明度的缺失是极不寻常的，也是其最大的短板。它迫使投资者将信任完全建立在团队的内部能力和声誉之上，而非可独立验证的代码和第三方审计之上。这无疑会阻碍机构投资者和注重安全的个人投资者的参与，并对所有现有投资者的资金构成潜在的、未经评估的风险。

### **4.2 领导层与团队评估：经验、透明度与执行力**

与安全状况形成鲜明对比的是，Aethir的领导团队是其最强大的资产之一。团队核心成员均已公开身份（doxxed），并在相关领域拥有令人信服的履历。

* **Daniel Wang（联合创始人兼CEO）**：拥有丰富的游戏和Web3行业背景，曾任职于Riot Games（拳头游戏），担任国际发行主管和中国区首席运营官，并曾在知名游戏公会W3GG担任首席投资官，以及在Infinity Ventures Crypto（IVC）担任风险合伙人。其经验对于开拓游戏和企业客户至关重要 1。  
  （注：需注意与Loopring/Taiko的创始人Daniel Wang区分，部分信息源存在混淆 47）。  
* **Mark Rydon（联合创始人兼CSO）**：拥有在大型企业（Bechtel Corporation）从事大规模项目管理的经验，并参与了多个Web3项目。这表明他具备强大的运营和战略规划能力 1。  
* **Kyle Okamoto（CTO）**：技术背景深厚，曾在爱立信物联网业务部门担任CEO/总经理，并在Verizon Media担任首席网络官，拥有丰富的电信和技术高管经验 1。  
* **Paul Thind（CRO）**：拥有担任公司CEO和顾问的经验，负责业务增长和收入 1。

总体来看，这支高管团队的背景堪称豪华，他们的行业网络和专业知识是Aethir能够快速与企业建立合作关系并管理复杂基础设施的有力保障。

### **4.3 历史事件与社区反馈问题**

在研究范围内，未发现Aethir遭受过重大黑客攻击或资金被盗的公开报道。然而，来自Reddit等社区平台的讨论揭示了一些与我们分析一致的“危险信号”，这些并非空穴来风的恐惧、不确定和怀疑（FUD），而是用户与产品互动后的真实反馈 45。

* **透明度质疑**：部分社区成员因项目代码不开源而称其为“骗局”。  
* **运营问题**：用户报告称项目官网和质押界面存在漏洞（bug），客户支持响应不力，工单（ticket）在未解决问题的情况下被关闭。  
* **信任赤字**：质押奖励高得“难以置信”，引发了其可持续性的担忧，并被认为是纯粹由通胀驱动。  
* **营销策略**：与Meme币项目合作进行空投等营销活动，被一些社区成员认为带有“拉高出货”（pump and dump）的色彩，损害了项目的专业形象。

这些来自社区的负面反馈，反映出项目在产品交付和用户沟通方面存在明显短板。一个项目的信任度由团队声誉、技术透明度和产品可用性共同构成。Aethir在团队声誉方面表现出色，但在后两者上则存在显著不足。这解释了为何尽管团队背景强大，社区中仍存在两极分化的看法。投资者必须判断这些是初创公司成长过程中的暂时阵痛，还是根植于公司文化的系统性问题。计划于第四季度进行的主网升级，将是对团队解决这些执行层面问题能力的一次关键考验。

### **4.4 治理结构与中心化风险**

Aethir的长期目标是实现由DAO驱动的去中心化治理，但目前仍处于相对中心化的早期阶段 8。项目方表示，未来的治理模式将倾向于采用更复杂的、基于声誉的投票权重系统，而非简单的“一代币一票”制。这是一个深思熟虑的、值得称赞的设计方向，有助于防止巨鲸操纵治理。

然而，当前最大的中心化风险源于其代码的不透明性。由于核心合约未经验证且部分闭源，社区无法独立审查和监督协议的实际运作，所有权力最终集中在项目团队手中 7。

## **5.0 生态系统与社区动态**

### **5.1 战略合作伙伴关系分析：与EigenLayer的共生**

Aethir与EigenLayer的深度合作是其当前生态战略的核心 5。通过在EigenLayer上建立一个主动验证服务（AVS），Aethir巧妙地构建了一个资本高效的共生系统。

该机制（Aethir EigenLayer ATH Vault）允许ATH持有者质押其代币，并获得一种流动性质押代币（LST）——eATH 5。这些被质押的ATH可以被网络中的算力提供者（Cloud Hosts）“借用”，以满足他们加入网络所需的质押门槛。作为回报，质押者可以分享算力提供者所赚取的部分服务费 5。

这一设计一举多得：

1. **降低门槛**：为算力提供者提供了资本效率，降低了他们加入网络的门槛。  
2. **创造收益**：为ATH持有者创造了新的、来源于真实业务的收益途径。  
3. **融入叙事**：将Aethir紧密地融入了当前市场最热门的“再质押”（Restaking）叙事中，极大地提升了其市场关注度 52。

然而，这种集成也并非没有风险。它意味着Aethir的质押系统不仅要承担自身的智能合约风险，还要承担EigenLayer底层的系统性风险。EigenLayer本身也曾因其代币经济和透明度问题而受到社区的审视 53。投资于Aethir的EigenLayer金库，实际上是投资于一个风险叠加的复杂产品，需要投资者具备更高的风险认知和承受能力。

除了EigenLayer，Aethir还通过其生态系统基金积极与其他项目建立合作，特别是在AI和游戏领域，例如Reality+、Raiinmaker、XPLA和XAI等，这些合作有助于构建其网络的需求侧 54。

### **5.2 社区健康状况：社交媒体情绪与参与度评估**

Aethir在各大社交媒体平台上拥有庞大的关注群体，总社区人数据称超过26万 56。

* **Twitter/X**：官方账号（@AethirCloud, @AethirEco）保持活跃，是项目发布合作公告和更新的主要渠道 57。  
* **Discord**：官方服务器虽然存在，但被社区成员批评为“封闭” 45。新用户需要通过在娱乐和社交频道中“刷经验”才能解锁参与严肃技术讨论的权限。这种做法阻碍了有效的社区沟通和尽职调查，与Web3的开放精神相悖，是一个明显的负面信号。它可能旨在过滤垃圾信息，但客观上造成了信息壁垒，并可能掩盖社区中存在的真实疑虑。  
* **Reddit**：r/AethirCloud子版块存在，但整体参与度不高 34。讨论内容常常围绕着“是否是骗局”以及对高额质押奖励的质疑，反映出社区情绪的两极分化：一部分人被高收益和强叙事吸引，另一部分人则因透明度问题而持怀疑态度 45。

### **5.3 1亿美元生态基金与开发者吸引力**

为了驱动其生态系统的需求侧增长，Aethir设立了规模高达1亿美元的生态系统基金 55。该基金旨在吸引和扶持在Aethir网络上构建应用的AI和游戏项目。

基金提供价值5000美元至50万美元不等的计算积分和ATH代币作为资助 55。通过与NEAR等公链的加速器计划以及Oasis等平台的黑客松合作，Aethir展示了其培育开发者生态的决心 55。这是其长期战略中一个非常积极的信号，因为任何DePIN网络的成功最终都取决于其上是否有足够多的、能产生真实需求的付费应用。

## **6.0 可行的投资策略与机会**

本节将前述分析转化为具体的、可操作的投资路径，旨在为不同风险偏好和技术背景的投资者提供参考。

### **6.1 直接代币投资：论点与时机**

* **看涨论点**：Aethir是AI和DePIN两大热门叙事的交汇点，拥有经验丰富的团队和（据称）远超同行的收入数据，其市值相对于其潜力可能被低估。计划于第四季度进行的主网升级和新L1/L2的选择可能成为强大的价格催化剂。  
* **看跌论点**：巨大的代币通胀压力是悬在其价格之上的达摩克利斯之剑。安全透明度的严重缺失构成了一个随时可能引爆的“黑天鹅”风险。代币价格高度依赖于市场叙事，在宏观环境不佳或叙事降温时可能遭受重创。  
* **投资策略**：鉴于其高风险特征，任何直接的代币投资都应被视为投机行为，仓位规模应严格控制在个人风险承受范围之内。采用定投（DCA）策略可以平滑买入成本，减轻短期波动的影响。第四季度的-主网升级是需要密切关注的关键事件节点。

### **6.2 收益生成深度解析：质押、再质押与节点运营**

Aethir提供了多种产生被动收入的途径，每种途径的风险、回报和技术要求各不相同。

* **运营检查器节点（Checker Node）**：这需要预先购买一个NFT许可证。节点运营者可以分享占代币总供应量10%的奖励池（在4年内释放），并有机会获得额外奖金 59。然而，这并非“无风险”收益。节点必须保持稳定运行并提供准确的验证结果，任何停机或错误计算都可能导致奖励减少甚至被禁止分配任务 59。此选项适合具备服务器运维能力、愿意投入时间和精力管理基础设施的技术型投资者。  
* **标准ATH质押**：Aethir在其官网上提供了两种质押池：AI池和游戏池。用户可以将ATH质押到这两个池中，除了获得基础的ATH奖励外，还能额外获得来自Aethir生态合作伙伴（AI或游戏项目）的原生代币奖励 61。这提供了一种多样化的收益来源。质押分为活期和定期，选择最长四年的定期锁仓可以获得显著更高的奖励倍数 61。这适合希望通过长期锁定换取更高回报的投资者。  
* **ATH再质押（EigenLayer金库）**：这是目前风险最高，但潜在回报也可能最高的选项。用户将ATH存入EigenLayer金库，获得eATH作为流动性质押凭证。此质押有长达一年的锁仓期（至2026年6月），之后还有30天的解押等待期 5。收益来源于算力提供者支付的服务费。尽管项目方承诺会推出APR计算器，但目前尚无明确的预期收益数据 5。投资者选择此路径，意味着同时承担了Aethir的合约风险和EigenLayer的系统性风险。

### **6.3 高级收益策略：探索eATH的潜力**

eATH作为一种流动性质押代币（LST），其核心价值在于“流动性” 5。理论上，高级策略将围绕eATH在其他DeFi协议中的可组合性展开，例如：

* **流动性挖矿**：将eATH与ETH或其他代币组成流动性对（LP），在去中心化交易所（DEX）中提供流动性以赚取交易费和挖矿奖励。  
* **借贷杠杆**：将eATH作为抵押品，在借贷协议中借出稳定币或其他资产，用于进一步投资或再次购买ATH进行循环质押。

**然而，一个关键的限制在于**：Aethir的官方文档明确指出，在一年锁仓期内，eATH在DeFi中的可用性可能会受到限制 5。这一点需要投资者在使用前进行严格确认。如果eATH不能在主流DeFi协议中自由流通和用作抵押品，其“流动性”的价值将大打折扣，上述高级策略也将无法实施。

### **6.4 面向开发者的机会：申请资助与生态共建**

对于拥有技术开发背景的投资者而言，参与Aethir生态最直接、最深入的方式是利用其**1亿美元的生态系统基金** 55。

* **机会**：构思并提交一个创新的AI或游戏项目提案，该项目需利用Aethir的GPU计算基础设施。  
* **潜在回报**：成功申请者可以获得价值5,000至500,000美元的计算积分和ATH代币资助，以及来自Aethir团队的市场推广和技术咨询支持 55。  
* **申请流程**：通过生态系统基金的官方页面提交申请，详细说明项目愿景、团队背景、技术实现和发展里程碑。申请资格广泛，涵盖了从早期初创团队到已有用户的成熟平台。

**表3：Aethir投资机会对比分析**

| 投资策略 | 描述 | 预期APR/APY | 主要优势 | 主要劣势/风险 | 所需专业知识 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **直接购买ATH代币** | 在二级市场购买并持有ATH代币，博取价格升值。 | 不适用 | 流动性高，参与门槛低，操作简单。 | 价格波动剧烈，面临巨大通胀压力，安全透明度风险。 | 基础市场分析 |
| **运营检查器节点** | 购买许可证并运行节点，验证网络以赚取奖励。 | 浮动，取决于网络总工作量和个人表现。 | 获得协议原生奖励，深度参与网络。 | 需要技术维护，有罚没风险，前期需投入许可证成本。 | 服务器运维、Linux |
| **标准ATH质押** | 将ATH质押到AI或游戏池中，赚取ATH和合作伙伴代币奖励。 | 浮动，定期锁仓回报更高。 | 操作简单，可获得多样化代币奖励。 | 机会成本（资金被锁定），智能合约风险。 | DeFi基础操作 |
| **EigenLayer ATH再质押** | 质押ATH换取eATH，赚取算力服务费分成。 | 未公布，预期较高。 | 融入热门再质押叙事，潜在高回报。 | 一年锁仓期，叠加EigenLayer风险，智能合约风险高。 | 高级DeFi、风险管理 |
| **申请生态系统资助** | 作为开发者，构建应用并申请基金支持。 | 不适用（为项目融资） | 获得资金和资源支持，与项目方深度合作。 | 竞争激烈，需要强大的项目构思和执行能力。 | 软件开发、商业计划 |

## **7.0 结论：最终投资评级与展望**

### **7.1 发现总结：优势与劣势的平衡视角**

经过全面的分析，Aethir项目呈现出一种机遇与风险并存的鲜明对立。

* **优势（Strengths）**：  
  1. **强大的叙事**：精准卡位AI和DePIN两大风口，市场关注度高。  
  2. **资深的团队**：领导层公开透明，拥有在顶级游戏、科技公司成功执行大规模项目的经验。  
  3. **创新的技术模型**：三位一体的节点架构和与EigenLayer的共生机制设计巧妙。  
  4. **显著的商业进展**：项目方声称已获得可观的年度经常性收入，显示出强大的商业拓展能力。  
  5. **战略性的合作**：与EigenLayer、游戏和AI领域的多个项目建立了合作关系，生态系统正在扩张。  
* **劣势（Weaknesses）**：  
  1. **致命的安全隐患**：严重缺乏最新的、来自顶级机构的公开安全审计，这是最大的风险点。  
  2. **极高的通胀压力**：代币经济模型决定了未来几年将有海量代币进入流通，对价格构成持续威胁。  
  3. **不透明的收入**：声称的收入数据无法通过链上途径独立验证，存在信息不对称风险。  
  4. **社区信任问题**：封闭的社区管理策略、不佳的用户体验反馈，损害了项目的公信力。

### **7.2 最终投资论点与建议评级**

Aethir的投资论点可以概括为：**这是一场对资深团队执行力的高风险押注，赌其能够在热门赛道中克服自身运营和安全上的短板，最终实现其宏大愿景。** 如果Aethir能够成功抢占AI和云游戏计算市场的一席之地，其增长潜力是巨大的。然而，与之相伴的，是可能导致投资归零的安全风险和侵蚀价值的代币通胀。

综合考量，本报告给予Aethir的投资评级为：

**投资评级：中立 / 投机性买入 (Neutral / Speculative Buy)**

* **“不建议”或“强烈不建议”** 的评级不适用，因为其团队背景和市场定位所带来的潜在上行空间不容忽视。  
* **“建议”或“强烈建议”** 的评级同样不适用，因为其在安全透明度上的严重缺失构成了不可接受的风险，不符合稳健投资的标准。  
* **“中立 / 投机性买入”** 的评级最能反映当前状况：它承认了项目的巨大潜力，但同时强烈警示投资者其所伴随的同等级别的风险。此项投资仅适合风险承受能力极高、且已对本文揭示的所有风险有清晰认识的投资者，并应将其作为投资组合中高风险的“卫星”部分，而非核心持仓。

### **7.3 长期展望与关键催化剂监测**

投资Aethir需要持续的跟踪和验证。以下是未来需要密切关注的关键事件，它们将成为判断项目发展轨迹的“试金石”：

* **积极催化剂（利好信号）**：  
  1. **发布全面的安全审计报告**：这是最重要的、能够显著降低项目风险的单一事件。一份来自CertiK、Halborn或Peckshield等顶级公司的、针对其所有核心合约的无保留意见审计报告，将极大地提振投资者信心。  
  2. **成功的2025年第四季度主网升级**：顺利完成向新的、高性能L1/L2的迁移或扩展，将证明团队的技术执行力。  
  3. **可验证的链上收入**：当链上数据（如通过Token Terminal等平台）能够证实其协议收入接近或匹配其声称的ARR时，其估值逻辑将得到坚实支撑。  
  4. **企业客户数量和网络使用量的持续增长**：真实的业务采用是消化代币通胀的唯一途径。  
* **消极催化剂（利空信号）**：  
  1. **发生安全漏洞或黑客攻击**：这将证实市场对其安全性的担忧，可能导致灾难性的后果。  
  2. **通胀失控**：如果代币价格在持续的释放压力下无法维持，可能引发负向螺旋。  
  3. **竞争对手取得压倒性优势**：如果Akash、Render或其他新兴项目在市场份额或技术上取得决定性领先。  
  4. **主网升级失败或出现重大问题**：暴露团队在技术执行上的短板。

## **附录：引用与数据来源**

本报告的所有分析均基于所提供的研究材料。详细引用列表如下，以确保所有信息的完全可追溯性：1。

#### **引用的著作**

1. Aethir Team | CryptoRank.io, 访问时间为 八月 10, 2025， [https://cryptorank.io/price/aethir/team](https://cryptorank.io/price/aethir/team)  
2. Daniel Wang \- The Block, 访问时间为 八月 10, 2025， [https://www.theblock.co/profile/326042/daniel-wang](https://www.theblock.co/profile/326042/daniel-wang)  
3. What is Aethir (ATH)? \- Bitget, 访问时间为 八月 10, 2025， [https://www.bitget.com/academy/what-is-aethir-ath-and-how-does-it-work](https://www.bitget.com/academy/what-is-aethir-ath-and-how-does-it-work)  
4. Aethir's April 2025 Recap, 访问时间为 八月 10, 2025， [https://blogs.aethir.com/blog-posts/aethirs-april-2025-recap](https://blogs.aethir.com/blog-posts/aethirs-april-2025-recap)  
5. Aethir's EigenLayer ATH Vault: Stake ATH and Mint eATH, 访问时间为 八月 10, 2025， [https://ecosystem.aethir.com/blog-posts/aethirs-eigenlayer-ath-vault-is-here-stake-ath-and-mint-eath-to-maximize-rewards](https://ecosystem.aethir.com/blog-posts/aethirs-eigenlayer-ath-vault-is-here-stake-ath-and-mint-eath-to-maximize-rewards)  
6. Aethir Price | ATH Price index, Live chart & USD Market cap | OKX, 访问时间为 八月 10, 2025， [https://www.okx.com/en-gb/price/aethir-ath](https://www.okx.com/en-gb/price/aethir-ath)  
7. AI Audit Report for Aethir Token token – Automated Security Analysis \- HashEx, 访问时间为 八月 10, 2025， [https://hashex.org/auto-audits/ethereum/0xbe0ed4138121ecfc5c0e56b40517da27e6c5226b/](https://hashex.org/auto-audits/ethereum/0xbe0ed4138121ecfc5c0e56b40517da27e6c5226b/)  
8. Aethir Tokenomics \- Case Study \- Nextrope \- Your Trusted Partner for Blockchain Development and Advisory Services, 访问时间为 八月 10, 2025， [https://nextrope.com/aethir-tokenomics-case-study/](https://nextrope.com/aethir-tokenomics-case-study/)  
9. Aethir (ATH) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 八月 10, 2025， [https://tokenomist.ai/aethir](https://tokenomist.ai/aethir)  
10. Aethir price today, ATH to USD live price, marketcap and chart ..., 访问时间为 八月 10, 2025， [https://coinmarketcap.com/currencies/aethir/](https://coinmarketcap.com/currencies/aethir/)  
11. Aethir Deep Dive: Pioneering Decentralised GPU-as-a-Service | CoinMarketCap, 访问时间为 八月 10, 2025， [https://coinmarketcap.com/academy/article/aethir-deep-dive-pioneering-decentralised-gpu-as-a-service](https://coinmarketcap.com/academy/article/aethir-deep-dive-pioneering-decentralised-gpu-as-a-service)  
12. Exploring AurealOne's Blockchain Gaming Model and Pi Network's Community Growth, 访问时间为 八月 10, 2025， [https://www.tribuneindia.com/partner-exclusives/exploring-aurealones-blockchain-gaming-model-and-pi-networks-community-growth/](https://www.tribuneindia.com/partner-exclusives/exploring-aurealones-blockchain-gaming-model-and-pi-networks-community-growth/)  
13. Whitepaper | Aethir, 访问时间为 八月 10, 2025， [https://docs.aethir.com/whitepaper](https://docs.aethir.com/whitepaper)  
14. Aethir Price: ATH Price Index and Live Chart | The Block, 访问时间为 八月 10, 2025， [https://www.theblock.co/price/318506/aethir-ath-cad](https://www.theblock.co/price/318506/aethir-ath-cad)  
15. DePIN Deep Dive: Bridging to the Real World | CoinMarketCap, 访问时间为 八月 10, 2025， [https://coinmarketcap.com/academy/article/depin-deep-dive-bridging-to-the-real-world](https://coinmarketcap.com/academy/article/depin-deep-dive-bridging-to-the-real-world)  
16. This is the home of the Aether model of the thermosphere and ionosphere \- GitHub, 访问时间为 八月 10, 2025， [https://github.com/AetherModel/Aether](https://github.com/AetherModel/Aether)  
17. Aethir One-pager | Gitbook onepager, 访问时间为 八月 10, 2025， [https://aethir.gitbook.io/gitbook-onepager](https://aethir.gitbook.io/gitbook-onepager)  
18. Staking and Rewards \- Aethir, 访问时间为 八月 10, 2025， [https://docs.aethir.com/aethir-network/the-container/staking-and-rewards](https://docs.aethir.com/aethir-network/the-container/staking-and-rewards)  
19. Fundamentals for crypto \- Token Terminal, 访问时间为 八月 10, 2025， [https://tokenterminal.com/pricing](https://tokenterminal.com/pricing)  
20. Aethir \- 2025 Company Profile, Team, Funding & Competitors \- Tracxn, 访问时间为 八月 10, 2025， [https://tracxn.com/d/companies/aethir/\_\_JXFumZl9z4l4iMTjD2Q6CuBz4vD9LyvlJcpX-qDjqzk](https://tracxn.com/d/companies/aethir/__JXFumZl9z4l4iMTjD2Q6CuBz4vD9LyvlJcpX-qDjqzk)  
21. Bringing the Decentralized Cloud Revolution \- Aethir, 访问时间为 八月 10, 2025， [https://blog.aethir.com/blog-posts/aethir-bringing-the-decentralized-cloud-revolution](https://blog.aethir.com/blog-posts/aethir-bringing-the-decentralized-cloud-revolution)  
22. Aethir's July 2025 AI & Crypto Round-Up, 访问时间为 八月 10, 2025， [https://aethir.com/blog-posts/aethirs-july-2025-ai-crypto-round-up](https://aethir.com/blog-posts/aethirs-july-2025-ai-crypto-round-up)  
23. Aethir (ATH) Price, Live Chart and Data \- KuCoin, 访问时间为 八月 10, 2025， [https://www.kucoin.com/price/ATH](https://www.kucoin.com/price/ATH)  
24. Aethir Price Prediction: Will ATH Coin Reach $10? \- StealthEX, 访问时间为 八月 10, 2025， [https://stealthex.io/blog/aethir-price-prediction-will-ath-coin-reach-10/](https://stealthex.io/blog/aethir-price-prediction-will-ath-coin-reach-10/)  
25. Aethir Price History and Historical Data | CoinMarketCap, 访问时间为 八月 10, 2025， [https://coinmarketcap.com/currencies/aethir/historical-data/](https://coinmarketcap.com/currencies/aethir/historical-data/)  
26. Comparison of Leading DePIN Projects Offering Access to Infrastructure: Fluence, Akash, IO.net, Render, Aethir | by Mee Crypt \- Medium, 访问时间为 八月 10, 2025， [https://medium.com/@meecrypt/the-comparison-of-leading-depin-projects-offering-access-to-infrastructure-ab0c414910f7](https://medium.com/@meecrypt/the-comparison-of-leading-depin-projects-offering-access-to-infrastructure-ab0c414910f7)  
27. Akash Token (AKT) \- The Currency of Decentralized Cloud \- Akash Network, 访问时间为 八月 10, 2025， [https://akash.network/token/](https://akash.network/token/)  
28. Render (ERC-20) Price, RNDR Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 八月 10, 2025， [https://www.coinbase.com/price/render](https://www.coinbase.com/price/render)  
29. Thoughts on Aethir? : r/RenderNetwork \- Reddit, 访问时间为 八月 10, 2025， [https://www.reddit.com/r/RenderNetwork/comments/1i43fym/thoughts\_on\_aethir/](https://www.reddit.com/r/RenderNetwork/comments/1i43fym/thoughts_on_aethir/)  
30. Aethir 2025 Mainnet Upgrade: Exciting Innovations Incoming, 访问时间为 八月 10, 2025， [https://aethir.com/blog-posts/aethir-2025-mainnet-upgrade-exciting-innovations-incoming-in-q4](https://aethir.com/blog-posts/aethir-2025-mainnet-upgrade-exciting-innovations-incoming-in-q4)  
31. Akash Network Price: AKT Price Index and Live Chart | The Block, 访问时间为 八月 10, 2025， [https://www.theblock.co/price/248452/akash-network-akt-usd](https://www.theblock.co/price/248452/akash-network-akt-usd)  
32. www.coinbase.com, 访问时间为 八月 10, 2025， [https://www.coinbase.com/price/akash-network](https://www.coinbase.com/price/akash-network)  
33. Render Token Price is $3.97 today. See RNDR price chart and stats \- MetaMask, 访问时间为 八月 10, 2025， [https://metamask.io/price/render-token](https://metamask.io/price/render-token)  
34. Aethir Mainnet Upgrade in Q4 2025 : r/AethirCloud \- Reddit, 访问时间为 八月 10, 2025， [https://www.reddit.com/r/AethirCloud/comments/1lqrrpr/aethir\_mainnet\_upgrade\_in\_q4\_2025/](https://www.reddit.com/r/AethirCloud/comments/1lqrrpr/aethir_mainnet_upgrade_in_q4_2025/)  
35. Aethir Tokenomics, 访问时间为 八月 10, 2025， [https://docs.aethir.com/aethir-tokenomics](https://docs.aethir.com/aethir-tokenomics)  
36. ATH USD Price Live Chart & Market Cap \- Aethir \- DropsTab, 访问时间为 八月 10, 2025， [https://dropstab.com/coins/aethir](https://dropstab.com/coins/aethir)  
37. CertiK: Largest Blockchain Security Auditor, 访问时间为 八月 10, 2025， [https://www.certik.com/](https://www.certik.com/)  
38. Consensys Diligence: Smart Contract Audits, 访问时间为 八月 10, 2025， [https://diligence.consensys.io/](https://diligence.consensys.io/)  
39. Smart Contract Audit \- CertiK, 访问时间为 八月 10, 2025， [https://www.certik.com/products/smart-contract-audit](https://www.certik.com/products/smart-contract-audit)  
40. Halborn: Digital Asset and Blockchain Security Solutions, 访问时间为 八月 10, 2025， [https://www.halborn.com/](https://www.halborn.com/)  
41. PeckShield \- Industry Leading Blockchain Security Company, 访问时间为 八月 10, 2025， [https://m.peckshield.com/](https://m.peckshield.com/)  
42. QuillAudits x Aethir: $100M Fund & Blockchain Security for AI & Gaming, 访问时间为 八月 10, 2025， [https://www.quillaudits.com/blog/quillaudits-news/quillaudits-aethir-ai-gaming-security](https://www.quillaudits.com/blog/quillaudits-news/quillaudits-aethir-ai-gaming-security)  
43. Install & Update | Aethir, 访问时间为 八月 10, 2025， [https://docs.aethir.com/checker-guide/how-to-run-checker-nodes/install-and-update](https://docs.aethir.com/checker-guide/how-to-run-checker-nodes/install-and-update)  
44. 访问时间为 一月 1, 1970， [https://github.com/AethirApp/checker-client](https://github.com/AethirApp/checker-client)  
45. Why are people calling Aethir a scam? : r/AethirCloud \- Reddit, 访问时间为 八月 10, 2025， [https://www.reddit.com/r/AethirCloud/comments/1hewqkt/why\_are\_people\_calling\_aethir\_a\_scam/](https://www.reddit.com/r/AethirCloud/comments/1hewqkt/why_are_people_calling_aethir_a_scam/)  
46. Daniel Wang / Aethir Co-Founder & CEO | WebX2024 | ASIA'S LEADING WEB3 CONFERENCE, 访问时间为 八月 10, 2025， [https://2024.webx-asia.com/speaker/3367060](https://2024.webx-asia.com/speaker/3367060)  
47. Daniel Wang: Introduction, Work and Education Experience \- SoSoValue, 访问时间为 八月 10, 2025， [https://m.sosovalue.com/person/daniel-wang-1844232159182671873](https://m.sosovalue.com/person/daniel-wang-1844232159182671873)  
48. Mark Rydon \- People in crypto \- IQ.wiki, 访问时间为 八月 10, 2025， [https://iq.wiki/wiki/mark-rydon](https://iq.wiki/wiki/mark-rydon)  
49. Making Infrastructure Sexy \- with Aethir CSO Mark Rydon \- BlockTelegraph, 访问时间为 八月 10, 2025， [https://blocktelegraph.io/making-infrastructure-sexy-with-aethir-ceo-mark-rydon/](https://blocktelegraph.io/making-infrastructure-sexy-with-aethir-ceo-mark-rydon/)  
50. Mark Rydon | People Directory \- CryptoSlate, 访问时间为 八月 10, 2025， [https://cryptoslate.com/people/mark-rydon/](https://cryptoslate.com/people/mark-rydon/)  
51. One Year Since TGE: Discover Aethir's Premium Partnerships, 访问时间为 八月 10, 2025， [https://blog.aethir.com/blog-posts/one-year-since-tge-a-retrospective-of-aethirs-premium-partnerships](https://blog.aethir.com/blog-posts/one-year-since-tge-a-retrospective-of-aethirs-premium-partnerships)  
52. "Aethir, who made me money last year, has something to say on its first anniversary: ​​Community KOL and EigenLayer's cooperation" | Supers on Binance Square, 访问时间为 八月 10, 2025， [https://www.binance.com/en/square/post/25637610826690](https://www.binance.com/en/square/post/25637610826690)  
53. EigenLayer responds to community concerns over investor staking transparency | The Block, 访问时间为 八月 10, 2025， [https://www.theblock.co/post/319164/eigenlayer-transparency](https://www.theblock.co/post/319164/eigenlayer-transparency)  
54. Blog \- Aethir, 访问时间为 八月 10, 2025， [https://aethir.com/blog](https://aethir.com/blog)  
55. Ecosystem Fund | Aethir, 访问时间为 八月 10, 2025， [https://aethir.com/ecosystem-fund](https://aethir.com/ecosystem-fund)  
56. February 1, 2024 Co-Marketing with Aethir's Vibrant Community, 访问时间为 八月 10, 2025， [https://blog.aethir.com/blog-posts/join-forces-with-the-leading-decentralised-cloud-gaming-infrastructure](https://blog.aethir.com/blog-posts/join-forces-with-the-leading-decentralised-cloud-gaming-infrastructure)  
57. Aethir Teams Up With Bluwhale AI With Exclusive EcoDrop Campaign \- Blockchain Reporter, 访问时间为 八月 10, 2025， [https://blockchainreporter.net/aethir-teams-up-with-bluwhale-ai-with-exclusive-ecodrop-campaign/](https://blockchainreporter.net/aethir-teams-up-with-bluwhale-ai-with-exclusive-ecodrop-campaign/)  
58. Aethir \- Discord, 访问时间为 八月 10, 2025， [https://discord.com/invite/aethircloud](https://discord.com/invite/aethircloud)  
59. How do Checker Nodes Work | Aethir, 访问时间为 八月 10, 2025， [https://docs.aethir.com/checker-guide/what-is-the-checker-node/how-do-checker-nodes-work](https://docs.aethir.com/checker-guide/what-is-the-checker-node/how-do-checker-nodes-work)  
60. FAQ | Aethir, 访问时间为 八月 10, 2025， [https://docs.aethir.com/checker-guide/how-to-manage-checker-nodes/faq](https://docs.aethir.com/checker-guide/how-to-manage-checker-nodes/faq)  
61. Aethir's Mainnet Launch: Claim & Stake ATH, 访问时间为 八月 10, 2025， [https://blog.aethir.com/blog-posts/aethirs-mainnet-launch-claim-stake-ath](https://blog.aethir.com/blog-posts/aethirs-mainnet-launch-claim-stake-ath)  
62. Aethir (ATH) Price | ATH Price To USD Live \- Uphold, 访问时间为 八月 10, 2025， [https://uphold.com/en-us/prices/crypto/ath](https://uphold.com/en-us/prices/crypto/ath)  
63. kosticlab/aether: Intelligent and cost-effective bidding on cloud computing instances for bioinformatics pipelines. \- GitHub, 访问时间为 八月 10, 2025， [https://github.com/kosticlab/aether](https://github.com/kosticlab/aether)  
64. OpenRobotLab/Aether: \[ICCV 2025\] Aether: Geometric-Aware Unified World Modeling, 访问时间为 八月 10, 2025， [https://github.com/OpenRobotLab/Aether](https://github.com/OpenRobotLab/Aether)  
65. Aethir Token Price, ATH Price, Live Charts, and Marketcap \- Coinbase Australia, 访问时间为 八月 10, 2025， [https://www.coinbase.com/en-au/price/base-aethir-token](https://www.coinbase.com/en-au/price/base-aethir-token)  
66. Aethir Price, AETHIR Price, Live Charts, and Marketcap \- Coinbase Spain, 访问时间为 八月 10, 2025， [https://www.coinbase.com/en-es/price/base-aethir](https://www.coinbase.com/en-es/price/base-aethir)  
67. Token Terminal | Fundamentals for crypto, 访问时间为 八月 10, 2025， [https://tokenterminal.com/](https://tokenterminal.com/)  
68. Bitfinex | Cryptocurrency Exchange | Bitcoin Trading | Futures Trading | Margin Trading, 访问时间为 八月 10, 2025， [https://www.bitfinex.com/](https://www.bitfinex.com/)  
69. Ethereum \- DefiLlama, 访问时间为 八月 10, 2025， [https://defillama.com/chain/Ethereum](https://defillama.com/chain/Ethereum)  
70. Defi Llama \- Arbitrum Portal, 访问时间为 八月 10, 2025， [https://portal.arbitrum.io/?project=defi-llama](https://portal.arbitrum.io/?project=defi-llama)  
71. ether.fi \- DefiLlama, 访问时间为 八月 10, 2025， [https://defillama.com/protocol/ether.fi](https://defillama.com/protocol/ether.fi)  
72. GSR raises \- DefiLlama, 访问时间为 八月 10, 2025， [https://defillama.com/raises/gsr](https://defillama.com/raises/gsr)  
73. Dashboard \- Token Terminal, 访问时间为 八月 10, 2025， [https://tokenterminal.com/explorer](https://tokenterminal.com/explorer)  
74. Token Unlocks | Track The Most Updated Data and Complete Vesting Schedules, 访问时间为 八月 10, 2025， [https://tokenomist.ai/](https://tokenomist.ai/)  
75. Aethir \- 2025 Founders and Board of Directors \- Tracxn, 访问时间为 八月 10, 2025， [https://tracxn.com/d/companies/aethir/\_\_JXFumZl9z4l4iMTjD2Q6CuBz4vD9LyvlJcpX-qDjqzk/founders-and-board-of-directors](https://tracxn.com/d/companies/aethir/__JXFumZl9z4l4iMTjD2Q6CuBz4vD9LyvlJcpX-qDjqzk/founders-and-board-of-directors)  
76. Aethir \- 2025 Funding Rounds & List of Investors \- Tracxn, 访问时间为 八月 10, 2025， [https://tracxn.com/d/companies/aethir/\_\_JXFumZl9z4l4iMTjD2Q6CuBz4vD9LyvlJcpX-qDjqzk/funding-and-investors](https://tracxn.com/d/companies/aethir/__JXFumZl9z4l4iMTjD2Q6CuBz4vD9LyvlJcpX-qDjqzk/funding-and-investors)  
77. Aethir 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 八月 10, 2025， [https://pitchbook.com/profiles/company/532644-40](https://pitchbook.com/profiles/company/532644-40)  
78. aether collective Price: AETHER Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 八月 10, 2025， [https://www.coingecko.com/en/coins/aether-collective](https://www.coingecko.com/en/coins/aether-collective)  
79. "Our research shows Ethereum hits $16,000 this cycle\!" \+ Crypto Expert Shares Top 3 Altcoins\!\! \- YouTube, 访问时间为 八月 10, 2025， [https://www.youtube.com/watch?v=-UNthNAoFaI\&vl=en](https://www.youtube.com/watch?v=-UNthNAoFaI&vl=en)  
80. Wonders of Aether \- Discord, 访问时间为 八月 10, 2025， [https://discord.com/invite/82HBT9YfnR](https://discord.com/invite/82HBT9YfnR)  
81. The Aether Project \- Discord, 访问时间为 八月 10, 2025， [https://discord.com/invite/aethermod](https://discord.com/invite/aethermod)  
82. Aether Link \- Discord, 访问时间为 八月 10, 2025， [https://discord.com/invite/uJn49Vbc6W](https://discord.com/invite/uJn49Vbc6W)  
83. Home | Aethir, 访问时间为 八月 10, 2025， [https://aethir.com/home](https://aethir.com/home)  
84. AÉTHER: LLM-Fueled Unified XDR \&SIEM Protection for Critical Infrastructure Endpoints, 访问时间为 八月 10, 2025， [https://ubitech.eu/solutions/aether-llm-fueled-unified-xdr-siem-protection-for-critical-infrastructure-endpoints/](https://ubitech.eu/solutions/aether-llm-fueled-unified-xdr-siem-protection-for-critical-infrastructure-endpoints/)  
85. AI-Assisted Security Audits. A Practical Guide with Real-World… | by Eduard Kotysh \- Medium, 访问时间为 八月 10, 2025， [https://medium.com/oak-security/ai-assisted-security-audits-0bd76608e3be](https://medium.com/oak-security/ai-assisted-security-audits-0bd76608e3be)  
86. aether · GitHub Topics, 访问时间为 八月 10, 2025， [https://github.com/topics/aether](https://github.com/topics/aether)  
87. ethereum/ethereum-org-website: Ethereum.org is a primary online resource for the Ethereum community. \- GitHub, 访问时间为 八月 10, 2025， [https://github.com/ethereum/ethereum-org-website](https://github.com/ethereum/ethereum-org-website)  
88. ethereum \- GitHub, 访问时间为 八月 10, 2025， [https://github.com/ethereum](https://github.com/ethereum)  
89. Aethir: Home, 访问时间为 八月 10, 2025， [https://aethir.com/](https://aethir.com/)  
90. nokogirisrv/Aethir\_guide \- GitHub, 访问时间为 八月 10, 2025， [https://github.com/nokogirisrv/Aethir\_guide](https://github.com/nokogirisrv/Aethir_guide)  
91. Smart contract audits | Explore auditing solutions by Nethermind Security, 访问时间为 八月 10, 2025， [https://www.nethermind.io/smart-contract-audits](https://www.nethermind.io/smart-contract-audits)  
92. Solidity Smart Contract Audit Service in USA \- QuillAudits, 访问时间为 八月 10, 2025， [https://www.quillaudits.com/services/solidity-smart-contract-security-audit](https://www.quillaudits.com/services/solidity-smart-contract-security-audit)  
93. Audits \- Chainsecurity, 访问时间为 八月 10, 2025， [https://www.chainsecurity.com/smart-contract-audit-reports](https://www.chainsecurity.com/smart-contract-audit-reports)  
94. Polygon Ecosystem \- CertiK, 访问时间为 八月 10, 2025， [https://www.certik.com/ecosystems/polygon](https://www.certik.com/ecosystems/polygon)  
95. What is a Smart Contract Audit? \- CertiK, 访问时间为 八月 10, 2025， [https://www.certik.com/resources/blog/what-is-a-smart-contract-audit](https://www.certik.com/resources/blog/what-is-a-smart-contract-audit)  
96. 1inch Network price today, 1INCH to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 八月 10, 2025， [https://coinmarketcap.com/currencies/1inch/](https://coinmarketcap.com/currencies/1inch/)  
97. Treasury Vesting Audit | BlockDAG | Halborn Audit Reports, 访问时间为 八月 10, 2025， [https://www.halborn.com/audits/blockdag/treasury-vesting](https://www.halborn.com/audits/blockdag/treasury-vesting)  
98. Halborn Audits and Reports, 访问时间为 八月 10, 2025， [https://www.halborn.com/audits](https://www.halborn.com/audits)  
99. Case Study: Enhancing Security for Ether.fi's Liquid Staking Protocol with Halborn, 访问时间为 八月 10, 2025， [https://www.halborn.com/case-studies/post/case-study-enhancing-security-for-etherfi-s-liquid-staking-protocol-with-halborn](https://www.halborn.com/case-studies/post/case-study-enhancing-security-for-etherfi-s-liquid-staking-protocol-with-halborn)  
100. Staking Audit | Altcoinist | Halborn Audit Reports, 访问时间为 八月 10, 2025， [https://www.halborn.com/audits/altcoinist/staking](https://www.halborn.com/audits/altcoinist/staking)  
101. SMART CONTRACT AUDIT REPORT RhinoFi Protocol, 访问时间为 八月 10, 2025， [https://rhino.fi/wp-content/uploads/2023/06/PeckShield-Audit-Report-RhinoFi-v1.0.pdf](https://rhino.fi/wp-content/uploads/2023/06/PeckShield-Audit-Report-RhinoFi-v1.0.pdf)  
102. How to Prepare for a Smart Contract Audit : r/ethdev \- Reddit, 访问时间为 八月 10, 2025， [https://www.reddit.com/r/ethdev/comments/ssr618/how\_to\_prepare\_for\_a\_smart\_contract\_audit/](https://www.reddit.com/r/ethdev/comments/ssr618/how_to_prepare_for_a_smart_contract_audit/)  
103. SMART CONTRACT AUDIT REPORT Banking Circle Stablecoin (ERC20) \- Eurite (EURI), 访问时间为 八月 10, 2025， [https://www.eurite.com/wp-content/uploads/2024/06/PeckShield-Audit-Report-ERC20-BankingCircle-v1.0-2.pdf](https://www.eurite.com/wp-content/uploads/2024/06/PeckShield-Audit-Report-ERC20-BankingCircle-v1.0-2.pdf)  
104. MEXC launches $100M user protection fund to cover platform, 访问时间为 八月 10, 2025， [https://www.rootdata.com/news/53038](https://www.rootdata.com/news/53038)  
105. Marketmap | PDF | E Commerce | Foreign Exchange Market \- Scribd, 访问时间为 八月 10, 2025， [https://www.scribd.com/document/824741452/marketmap](https://www.scribd.com/document/824741452/marketmap)  
106. Mark-Rydon \- Our Crypto Talk, 访问时间为 八月 10, 2025， [https://web.ourcryptotalk.com/blog/mark-rydon](https://web.ourcryptotalk.com/blog/mark-rydon)  
107. Mark Rydon: Aethir – Decentralizing GPU Access for AI and Gaming with Blockchain (\#15), 访问时间为 八月 10, 2025， [https://www.youtube.com/watch?v=EPl9iT39HBM](https://www.youtube.com/watch?v=EPl9iT39HBM)  
108. Daniel Wang: Introduction, Work and Education Experience \- SoSoValue, 访问时间为 八月 10, 2025， [https://sosovalue.com/person/daniel-wang-1844233309797699586](https://sosovalue.com/person/daniel-wang-1844233309797699586)  
109. Kyle Okamoto \- Fractional Cxo at FractionL | The Org, 访问时间为 八月 10, 2025， [https://theorg.com/org/fractionl/org-chart/kyle-okamoto](https://theorg.com/org/fractionl/org-chart/kyle-okamoto)  
110. Treasury Takes Massive Action Against High-Profile Iranian Network, 访问时间为 八月 10, 2025， [https://home.treasury.gov/news/press-releases/sb0215](https://home.treasury.gov/news/press-releases/sb0215)  
111. 27 Aug, 2024 top news \- The Economic Times, 访问时间为 八月 10, 2025， [https://m.economictimes.com/archivelist/year-2024,month-8,starttime-45531.cms](https://m.economictimes.com/archivelist/year-2024,month-8,starttime-45531.cms)  
112. What is Aethir? How does it work? \- BitKan.com, 访问时间为 八月 10, 2025， [https://bitkan.com/learn/what-is-aethir-how-does-it-work-24893](https://bitkan.com/learn/what-is-aethir-how-does-it-work-24893)  
113. Token due diligence: a structured approach to evaluate digital asset risk | EY, 访问时间为 八月 10, 2025， [https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/insights/financial-services/documents/ey-token-due-diligence-a-structured-approach-to-evaluate-digital-asset-risk.pdf](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/insights/financial-services/documents/ey-token-due-diligence-a-structured-approach-to-evaluate-digital-asset-risk.pdf)  
114. INFORMATION SYSTEM AUDIT OF THE AUDITOR-GENERAL ON COMPUTERISED FINANCIAL AND ELECTRONIC SYSTEMS OF SELECTED PUBLIC SECTOR ENTIT, 访问时间为 八月 10, 2025， [https://audit.gov.gh/files/audit\_reports/Information\_System\_Audit\_for\_the\_Auditor-General\_on\_Computerised\_Financial\_and\_Electronic\_Systems\_for\_the\_period\_ended\_31\_December\_2023.pdf](https://audit.gov.gh/files/audit_reports/Information_System_Audit_for_the_Auditor-General_on_Computerised_Financial_and_Electronic_Systems_for_the_period_ended_31_December_2023.pdf)  
115. An Analysis of the Market Risk to Participants in the Compound Protocol \- 2020 Symposium on Foundations and Applications of Blockchain, 访问时间为 八月 10, 2025， [https://scfab.github.io/2020/FAB2020\_p5.pdf](https://scfab.github.io/2020/FAB2020_p5.pdf)  
116. Laura Minquini Inês Santos Silva AthenaDAO AthenaDAO WHITEPAPER V1.0, 访问时间为 八月 10, 2025， [https://cdn.prod.website-files.com/6392376a3ab6b936ceb8b227/64ed255fcaf4ecdbc05f61a9\_AthenaDAO\_Whitepaper\_v1.pdf](https://cdn.prod.website-files.com/6392376a3ab6b936ceb8b227/64ed255fcaf4ecdbc05f61a9_AthenaDAO_Whitepaper_v1.pdf)  
117. What is a Rug Pull and How to Avoid It? \- QuillAudits, 访问时间为 八月 10, 2025， [https://www.quillaudits.com/blog/web3-security/crypto-rug-pull](https://www.quillaudits.com/blog/web3-security/crypto-rug-pull)  
118. Aether-0/CVE-2024-12986 \- GitHub, 访问时间为 八月 10, 2025， [https://github.com/Aether-0/CVE-2024-12986](https://github.com/Aether-0/CVE-2024-12986)  
119. WARNING\! $Mamba is a rug pull\! DO NOT BUY\! : r/CoinBase \- Reddit, 访问时间为 八月 10, 2025， [https://www.reddit.com/r/CoinBase/comments/1dazb8s/warning\_mamba\_is\_a\_rug\_pull\_do\_not\_buy/](https://www.reddit.com/r/CoinBase/comments/1dazb8s/warning_mamba_is_a_rug_pull_do_not_buy/)  
120. Community \- Aethir, 访问时间为 八月 10, 2025， [https://aethir.com/ru/blog-posts/unlocking-the-potential-of-aethir-and-the-ath-token](https://aethir.com/ru/blog-posts/unlocking-the-potential-of-aethir-and-the-ath-token)  
121. Vesting Schedule | Athennian, 访问时间为 八月 10, 2025， [https://www.athennian.com/vesting-schedule](https://www.athennian.com/vesting-schedule)  
122. Token Vesting and Allocations Industry Benchmarks \- Liquifi, 访问时间为 八月 10, 2025， [https://www.liquifi.finance/post/token-vesting-and-allocation-benchmarks](https://www.liquifi.finance/post/token-vesting-and-allocation-benchmarks)  
123. DefiLlama \- DeFi Dashboard, 访问时间为 八月 10, 2025， [https://defillama.com/](https://defillama.com/)  
124. Aethir Ecosystem, 访问时间为 八月 10, 2025， [https://ecosystem.aethir.com/blog-authors/aethir](https://ecosystem.aethir.com/blog-authors/aethir)  
125. Optimal Farming Guide \- D4 Maxroll.gg, 访问时间为 八月 10, 2025， [https://maxroll.gg/d4/meta/optimal-farming-guide](https://maxroll.gg/d4/meta/optimal-farming-guide)  
126. Aethyr Ore and Aethyr Dust Guide \- Final Bastion, 访问时间为 八月 10, 2025， [https://finalbastion.com/wizard101-guides/w101-crafting-guides/aehtyr-dust-aethyr-ore/](https://finalbastion.com/wizard101-guides/w101-crafting-guides/aehtyr-dust-aethyr-ore/)  
127. Tip for Harvesting Aethyr Ore : r/Wizard101 \- Reddit, 访问时间为 八月 10, 2025， [https://www.reddit.com/r/Wizard101/comments/e1p522/tip\_for\_harvesting\_aethyr\_ore/](https://www.reddit.com/r/Wizard101/comments/e1p522/tip_for_harvesting_aethyr_ore/)  
128. Delta Neutral \- Trading Strategies for Options, 访问时间为 八月 10, 2025， [https://www.optionstrading.org/strategies/other/delta-neutral/](https://www.optionstrading.org/strategies/other/delta-neutral/)  
129. Aethir at TOKEN2049 Singapore, 访问时间为 八月 10, 2025， [https://blog.aethir.com/blog-posts/aethir-at-token2049-singapore](https://blog.aethir.com/blog-posts/aethir-at-token2049-singapore)  
130. Aethir price today \- ATH price chart & live trends \- Kraken, 访问时间为 八月 10, 2025， [https://www.kraken.com/prices/aethir](https://www.kraken.com/prices/aethir)  
131. Aethir Price Today \- ATH Live Chart & Real-Time Market Data \- Changelly, 访问时间为 八月 10, 2025， [https://changelly.com/price/ath](https://changelly.com/price/ath)  
132. Aether FINALLY SPEAKS\! \- YouTube, 访问时间为 八月 10, 2025， [https://www.youtube.com/watch?v=49vmneHgNw8](https://www.youtube.com/watch?v=49vmneHgNw8)  
133. Building Aether 1: Sound Without Boundaries \- Codrops, 访问时间为 八月 10, 2025， [https://tympanus.net/codrops/2025/08/06/building-aether-1-sound-without-boundaries/](https://tympanus.net/codrops/2025/08/06/building-aether-1-sound-without-boundaries/)  
134. Beam, 访问时间为 八月 10, 2025， [https://onbeam.com/](https://onbeam.com/)  
135. 3 Crypto Web3 Shines at the Market Door August 8, 2025: LINK, DOT, and RNDR Rise in Unison\! \- Pintu, 访问时间为 八月 10, 2025， [https://pintu.co.id/en/news/190564-3-crypto-web3-shines-at-the-market-door-august-8-2025-link-dot-and-rndr-rise-in-unison](https://pintu.co.id/en/news/190564-3-crypto-web3-shines-at-the-market-door-august-8-2025-link-dot-and-rndr-rise-in-unison)  
136. RNDRUSD Charts and Quotes \- TradingView, 访问时间为 八月 10, 2025， [https://www.tradingview.com/symbols/RNDRUSD/](https://www.tradingview.com/symbols/RNDRUSD/)  
137. AKT to ETH: Akash Network Price in Ether | CoinGecko, 访问时间为 八月 10, 2025， [https://www.coingecko.com/en/coins/akash-network/eth](https://www.coingecko.com/en/coins/akash-network/eth)  
138. Compare Aethir (ATH) Vs Akash Network (AKT) | Crypto Compare | CoinSwitch, 访问时间为 八月 10, 2025， [https://coinswitch.co/crypto-compare/ath-akt](https://coinswitch.co/crypto-compare/ath-akt)  
139. Investment akash vs AR : r/akashnetwork \- Reddit, 访问时间为 八月 10, 2025， [https://www.reddit.com/r/akashnetwork/comments/raicyp/investment\_akash\_vs\_ar/](https://www.reddit.com/r/akashnetwork/comments/raicyp/investment_akash_vs_ar/)  
140. 访问时间为 一月 1, 1970， [https://aethir.com/blog/aethirs-eigenlayer-ath-vault-is-here-stake-ath-and-mint-eath-to-maximize-rewards](https://aethir.com/blog/aethirs-eigenlayer-ath-vault-is-here-stake-ath-and-mint-eath-to-maximize-rewards)