

# **Hydration协议：对波卡生态首要DeFi中心的深度分析**

## **执行摘要**

本报告对Hydration协议进行了全面深入的分析。Hydration是波卡（Polkadot）生态系统中技术领先且最具雄心的去中心化金融（DeFi）协议。报告追溯了该项目从HydraDX演变为一个集交易、借贷和原生稳定币于一体的“DeFi三位一体”综合平台的历程。核心研究发现包括：其Omnipool（全能池）架构在技术上的优越性，通过多次安全审计所证明的强大安全态势，以及其稳健的链上性能指标。

本报告重点评估了波卡社区提出的“变革愿望”（Wish-for-Change）提案，该提案建议由波卡国库收购Hydration。报告权衡了此举在创建一个统一DeFi系统链方面的战略优势，同时也探讨了其可能带来的生态系统中心化和抑制创新等风险。

最终评估结论是，Hydration已成为波卡生态系统的基石。其未来的发展轨迹与这项关键治理决策的结果紧密相连，无论结果如何，该协议都已证明了其作为波卡DeFi领域核心基础设施的价值和潜力。

## **1.0 引言：一个波卡DeFi中心的演进之路**

### **1.1 从HydraDX到Hydration：战略性品牌重塑与愿景升级**

Hydration项目最初名为HydraDX，成立于2020年 1。在2024年2月至6月期间，项目正式更名为Hydration 1，这标志着其战略定位已从一个单纯的去中心化交易所（DEX）扩展至更广阔的领域。

名称的变更反映了其核心使命的转变，从一个神话主题转向提供深度、流动的流动性概念 3。此次品牌重塑伴随着更广泛产品套件的发布，包括一个货币市场和HOLLAR稳定币，标志着其向一个统一、一体化的DeFi应用链（appchain）转型 3。该项目公开的使命是“让DeFi变得高效、简单且不可阻挡”，其途径是在一个可扩展的应用链下，将兑换、借贷和稳定币三大功能融为一体 5。

### **1.2 波卡平行链架构：基础与优势**

Hydration被构建为一个专门的Layer-1区块链（应用链），并作为平行链在波卡网络上运行 2。这种架构带来了显著的优势：首先，它受益于波卡中继链的共享安全性，无需建立和维护一套昂贵的独立验证者节点；其次，通过波卡的跨共识消息传递格式（XCM），它天然具备跨链互操作性；最后，它对区块生产和交易优先级拥有更大的控制权 10。

该项目通过众贷（crowdloan）和自筹资金的方式，已成功赢得多个波卡平行链插槽，显示了其长期的承诺和强大的社区支持。它在2022年2月赢得了第9次插槽拍卖，筹集了超过240万DOT 2，并于2023年12月再次赢得第56次拍卖 2。

### **1.3 Basilisk协同效应：一种全生命周期的流动性策略**

Basilisk并非Hydration的“金丝雀网络”，而是在Kusama（波卡的先行网）上运行的一个独立的关联链，其使命是为新兴、早期的加密资产提供无摩擦的流动性引导 12。

Hydration与Basilisk共同构建了一种协同关系，服务于加密资产的整个生命周期。项目可以在Basilisk上引导初始流动性，然后迁移到Hydration的Omnipool中，以获取更深、更成熟的流动性 12。这种双管齐下的方法展示了一种成熟且长远的生态系统发展战略。两个项目在开发历史和团队成员上存在重叠，联合举办的AMA（问答活动）和共同的投资者也证明了这一点 2。

这种从专注于DEX的HydraDX到集成了借贷和稳定币的Hydration的演变，不仅仅是一次简单的品牌升级。它代表了一次战略核心的转变，使该协议从一个利基但创新的DEX，转变为一个全栈DeFi基础设施，旨在其生态系统内部直接与Aave和Curve等成熟的DeFi巨头竞争。通过构建一个集交易、借贷和稳定币于一体的“DeFi三位一体” 5，Hydration的目标不再仅仅是成为一个交易场所，而是要成为整个波卡生态系统的基础金融层，捕获DeFi价值链上的所有环节。这是一个比最初HydraDX概念更为宏大和雄心勃勃的愿景。

## **2.0 核心协议架构：集成式DeFi堆栈的三大支柱**

### **2.1 支柱一：交易 \- Omnipool与多AMM生态系统**

#### **2.1.1 Omnipool：单一池流动性架构深度解析**

Omnipool是Hydration的旗舰创新，它是一种自动做市商（AMM），将所有资产整合到一个单一的流动性池中 5。这种设计从根本上解决了传统DEX中普遍存在的流动性碎片化问题，后者依赖于孤立的交易对（例如ETH/USDC）。通过汇集所有流动性，Omnipool实现了资本效率更高的交易，减少了资产间的“跳跃”次数，并降低了滑点 5。Omnipool利用一种特殊的内部代币（早期为LRNA，未来可能为H2O）作为通用交换媒介，以促进池中任意两种资产之间的交易 16。

#### **2.1.2 单边流动性供给：流动性提供者的范式转变**

Omnipool的一个关键特性是支持单边流动性供给（Single-Sided LPing） 5。与传统AMM要求流动性提供者（LP）存入等值的资产对不同，Hydration允许用户和DAO仅提供他们选择的单一资产。这降低了LP的参与门槛，并使DAO能够利用其金库中的原生代币来赚取收益，而无需额外获取配对资产 5。

#### **2.1.3 专业化池：稳定池与隔离XYK池**

Hydration并非采用“一刀切”的AMM模型，而是为不同类型的资产集成了专门的池。

* **稳定池（Stablepools）：** 专为稳定币（USDC/USDT）或锚定资产（wBTC/iBTC）等相关资产设计，采用类似Curve的恒定和公式，以提供极低的交易滑点 5。  
* **隔离XYK池（Isolated XYK Pools）：** 这些是无需许可的标准恒定乘积（x∗y=k）池，允许早期或风险较高的资产进行交易，而不会影响主Omnipool的完整性 5。

#### **2.1.4 高级交易功能：DCA、OTC与分割交易**

该平台直接在链上提供了复杂的交易工具。

* **定投（DCA）：** 用户可以在设定的时间段内自动执行交易以获得平均价格。该功能非常强大，甚至波卡国库也使用它来进行资产多元化配置 5。  
* **场外交易（OTC）：** 支持任意资产间的点对点交易，无滑点，非常适合大额交易 6。  
* **分割交易（Split Trading）：** 一项用户友好的功能，通过将大额订单分解为多个连续的小额交易，帮助最小化价格影响 6。

### **2.2 支柱二：借贷 \- Hydration货币市场**

#### **2.2.1 架构与基础：AAVE v3的分叉**

Hydration货币市场于2024年底推出，是一个去中心化的借贷平台 20。它基于经过实战检验的AAVE v3协议的分叉构建，为超额抵押借贷提供了熟悉而稳健的基础 3。这使得用户可以通过提供资产来赚取利息，并以其抵押品借入其他资产。该集成依赖于像DIA这样值得信赖的预言机提供商，以确保为包括波卡原生代币在内的多种资产提供准确可靠的价格信息 9。

#### **2.2.2 创新：链上优先清算与抗MEV机制**

利用其应用链架构，Hydration引入了链上优先清算机制。这确保了清算交易在每个区块的开始时执行，从而消除了延迟，并防止了在以太坊等通用链上常见的矿工可提取价值（MEV）的剥削 5。该协议将通常流向外部机器人的清算奖励内部化，并将这部分价值重新导向以增强协议的可持续性 5。

### **2.3 支柱三：HOLLAR稳定币（未来开发）**

HOLLAR是计划中的原生去中心化稳定币，它将完善Hydration的集成式DeFi生态系统 3。它被设计为中心化稳定币的去信任和透明的替代品，具有动态挂钩稳定和自适应流动性框架等机制 3。HOLLAR将与交易和借贷两大支柱深度集成，未来可能允许用户使用Omnipool的流动性挖矿仓位作为抵押品来铸造该稳定币 10。

Hydration的多AMM架构（Omnipool、稳定池、XYK池）体现了一种务实的解决思路，即承认没有任何单一的AMM设计能对所有资产类型都达到最优。这种混合模型为主流资产提供了单一池的资本效率，同时安全地隔离了新兴资产或锚定资产，从而构建了比单一AMM设计更具弹性和通用性的流动性基础设施。传统DEX使用孤立的x∗y=k池，导致流动性碎片化 10。Hydration的Omnipool通过为大多数资产创建一个中心枢纽来解决这个问题 5。然而，稳定币和锚定资产在不同的曲线上交易效率最高（如Curve Finance） 23，Hydration通过其稳定池采纳了这一模型 5。同时，新的、高波动的“长尾”资产对共享流动性池构成风险，Hydration通过无需许可的隔离XYK池来隔离这种风险 5。通过结合这三种模型，Hydration创建了一个整体大于部分之和的系统：它既实现了中心池的深度流动性，又为每种特定资产类别使用了最高效的模型，达到了许多DEX所不具备的复杂程度。

## **3.0 HDX代币经济学与价值捕获**

### **3.1 代币分配与供应动态**

Hydration协议的原生实用代币是HDX 15。其最大供应量固定为65亿枚 26。截至2025年中期，流通供应量约为58.6亿枚HDX 27。初始代币分配涵盖了多个利益相关方，包括LBP（流动性引导池）参与者、创始团队、投资者、众贷贡献者和DAO金库 8。

**表1：HDX代币分配**

| 类别 | 分配比例 (%) |
| :---- | :---- |
| LBP参与者 | 30.5% |
| 开发 | 27.6% |
| 创始人和团队 | 12.5% |
| 投资者 | 10.6% |
| HDX众贷 | 7.6% |
| DAO金库 | 5.5% |
| 收集人（Collators） | 3.9% |
| BSX众贷 | 1.9% |

数据来源: 8

### **3.2 核心效用：治理、质押与费用机制**

* **治理：** HDX持有者拥有并管理该协议。他们可以对社区公投以及影响协议未来的决策进行投票 6。  
* **质押：** 用户可以质押其HDX代币以参与治理并获得奖励 2。  
* **费用减免：** HDX代币可用于降低交易费用 24。

### **3.3 协议收入流与HDX持有者的价值捕获**

Hydration的设计确保了协议收入能够重新分配给HDX持有者，从而创建了一个直接的价值捕获机制 6。主要的收入来源是协议自身在Omnipool中的HDX流动性仓位所收取的交易费 36。此外，所有非HDX交易产生的部分费用也会流向质押者 19。这些收入流被汇集到一个专门的质押奖励池中，然后按比例分配给所有HDX质押者 36。

其质押机制包含一个“忠诚度与游戏化”元素：奖励并非可以立即全额领取。用户要么需要等待一段较长的时间（对于被动质押者约2年），要么通过积极参与治理（使用带有信念乘数的投票）来加速其奖励的解锁 36。

这种精巧的质押奖励机制在协议使用、收入产生和积极治理参与之间形成了一个正反馈循环。协议的交易活动产生费用 19，这些费用被注入质押奖励池 36。用户通过质押HDX来分享这些奖励，但要快速领取奖励，就需要通过在治理中投票来赚取“行动点” 36。这为质押者创造了一个强有力的激励，促使他们不仅持有HDX，还积极参与决策过程，理论上这将带来更多的协议使用量和更高的收入。这种机制将消极的持有者转变为积极的利益相关者，从而加强了DAO的治理，并使整个生态系统的激励机制保持一致。

## **4.0 安全状况与风险分析**

### **4.1 全面的审计历史与关键发现**

Hydration已经接受了多家知名安全公司的多次审计，覆盖了所有关键任务代码，显示出其对安全的高度重视 5。该协议的GitHub代码库中公开维护了这些审计报告的集合，确保了透明度 38。

**表2：安全审计摘要**

| 日期 | 审计公司 | 审计范围 | 关键发现摘要与状态 |
| :---- | :---- | :---- | :---- |
| 2025年4月 | OAK Security | 具有浮动锚定的稳定池 | 报告待发布 |
| 2025年4月 | Cantina (Spearbit) | 货币市场链上清算 | 报告已发布 |
| 2025年1月 | Cantina (Spearbit) | AAVE v3 (货币市场) 部署 | 报告已发布 |
| 2024年10月 | Pashov Audit Group | ERC20 映射 | 报告已发布 |
| 2024年6月 | SRLabs | EVM 预编译 | 报告已发布 |
| 2024年4月 | Code4rena (27名研究员) | Omnipool, 稳定池, 预言机, 断路器 | 发现1个高风险漏洞（稳定池流动性耗尽）和10个中风险漏洞 39 |
| 2023年7月 | Runtime Verification | 稳定池兑换（Stableswap） | 报告已发布 |
| 2023年6月 | Runtime Verification | EMA 预言机 | 报告已发布 |
| 2022年9月 | Runtime Verification | Omnipool (Rust 实现) | 报告已发布 |
| 2022年3月 | BlockScience | Omnipool (经济与数学逻辑) | 报告已发布 |

数据来源: 37

### **4.2 主动安全措施：Immunefi漏洞赏金计划与协议保障**

Hydration在Immunefi平台上设有一个慷慨且活跃的漏洞赏金计划，为发现并负责任地披露严重漏洞的研究人员提供最高50万美元的奖励 5。该计划明确界定了受保护的范围，包括治理攻击、资金直接损失和Omnipool操纵等 42。

此外，协议还内置了多重安全保障措施，如流动性上限、用于安全的协议费用以及在极端市场事件中暂停活动的断路器机制 8。XCM速率限制器是一项特定的安全功能，旨在防止来自其他链的被利用代币耗尽Hydration的流动性 19。

### **4.3 历史事件分析与缓解措施**

在2021年2月于Balancer上进行的初始LBP期间，一名投机交易者利用Balancer合约默认以“非暂停”状态部署的特性，在发行正式开始前抢先交易，获利5万美元 44。尽管团队淡化了该事件的重要性，但这凸显了复杂DeFi发布中固有的执行风险。此外，曾有一个名为

hydradx-ui的恶意软件包被识别，但其具体影响以及与官方项目的关联尚不明确，这揭示了更广泛生态系统中存在的供应链风险 45。

值得注意的是，与许多其他DeFi协议不同，Hydration并未遭受任何导致用户资金重大损失的大规模黑客攻击或漏洞利用 46。

Hydration的安全策略是多层次且成熟的，它结合了前瞻性的代码审计、经济模型审计、高激励的公开漏洞赏金计划以及协议级别的断路器。DeFi安全通常是被动的，审计仅在上线前进行。而Hydration的审计历史 38 显示其审计是持续性的，不仅覆盖智能合约逻辑（由Runtime Verification和Code4rena执行），还包括经济稳健性（由BlockScience评估）。这是一种主动而非被动的姿态。除了审计，他们还通过在Immunefi上提供高达50万美元的顶级漏洞赏金来积极邀请公众监督 7。最后，他们承认审计和赏金无法捕捉所有问题，因此内置了断路器和速率限制器等安全网 19。这种代码审计、经济验证、公众激励和链上保障的结合，构成了同类最佳的安全态势，极大地降低了用户和流动性提供者的风险。

## **5.0 市场地位与竞争格局**

### **5.1 波卡DeFi生态系统**

Hydration被定位为波卡生态系统内领先且运营弹性最强的DeFi中心 51。它已获得波卡国库和DAO的大力支持，以增强其流动性和促进增长 10。其在生态系统内的主要竞争对手包括StellaSwap和Acala Network。

**表3：竞争分析 \- Hydration vs. StellaSwap vs. Acala**

| 指标 | Hydration | StellaSwap | Acala Network |
| :---- | :---- | :---- | :---- |
| **主要链** | Polkadot 2 | Moonbeam (EVM on Polkadot) 58 | Acala (Polkadot) 61 |
| **总锁仓价值 (TVL)** | $2.76亿美元 (官网) 6, $1.03亿美元 (借贷) 63 | $606万美元 64 | $36.3万美元 65 |
| **核心AMM模型** | Omnipool (单一池) 5 | 标准/集中流动性AMM 59 | 基于AMM的DEX 62 |
| **关键差异化** | 垂直整合的DeFi堆栈 10 | EVM兼容性与跨链焦点 59 | 原生稳定币(aUSD)与流动性质押(LDOT) 62 |
| **借贷协议** | AAVE v3 分叉 3 | 稳定币借贷 (MAI) 59 | Honzon协议 (铸造aUSD) 62 |
| **生态支持** | 波卡国库重大拨款 53 | Moonbeam/波卡拨款 55 | 早期生态领导者 62 |

数据来源: 2

### **5.2 更广阔的DeFi背景**

#### **5.2.1 Omnipool vs. Balancer协议：技术与经济比较**

Balancer协议开创了具有可定制权重的多资产池，有效地创建了自动化指数基金 66。Hydration的Omnipool可以看作是这一概念的演进，但它并非创建多个加权池，而是将所有资产整合到一个普遍可访问的单一池中，旨在实现更高的资本效率 8。Balancer在创建池方面提供了灵活性，而Hydration的Omnipool则优先考虑统一流动性。

#### **5.2.2 稳定池 vs. Curve Finance：稳定资产AMM分析**

Curve Finance是稳定资产交易的市场领导者，它使用专门的算法来最小化应以1:1比例交易的资产之间的滑点，以其安全性和深度流动性而闻名 23。Hydration的稳定池明确采用了这种模型（“类似于Curve协议”）来处理其锚定资产，将一个经过验证的高效机制整合到其更广泛的多AMM架构中 19。这表明Hydration的策略是在适用的地方采用同类最佳的解决方案，而不是重新发明每一个组件。

Hydration的策略可以概括为“创新与整合”。它通过其核心的Omnipool架构进行创新，同时务实地整合了来自DeFi领导者如Curve和Aave的、经过实战检验的模型用于其专业化组件。这种方法降低了开发风险，同时使团队能够将其创新能力集中在核心价值主张上。通过采用Curve的稳定币交易模型 19 和分叉AAVE v3的借贷协议 3，Hydration加速了开发进程，增强了安全性，并提高了用户的熟悉度，这相较于试图从零开始构建所有功能，是一个显著的战略优势。

## **6.0 战略分析：波卡收购提案**

### **6.1 “变革愿望”治理提案概述**

波卡论坛上提出了一项重大的治理提案，建议由波卡国库收购Hydration网络 51。这是一项“变革愿望”（Wish-for-Change）提案，其功能是作为一项非约束性的链上民意调查，以衡量社区情绪，而非立即执行的行动 69。该提案的目标是将Hydration吸收到波卡生态系统中，将其提升为“DeFi系统链”，并使其成为波卡战略产品路线图的核心部分 51。

**表4：拟议收购的关键条款**

| 参数 | 提议价值 |
| :---- | :---- |
| **战略目标** | 战略性收购波卡的DeFi链 |
| **代币兑换率** | 1 DOT : 550 HDX |
| **分配的DOT总额** | 8,000,000 DOT |
| **流动性激励** | 2,000,000 DOT/年 (为期2年) |
| **DOT总成本** | 约10,000,000 DOT |
| **持续时间** | 8个季度 (2025年Q3 – 2027年Q2) |
| **系统链整合** | 是，将Hydration提升为DeFi系统链 |

数据来源: 51

### **6.2 社区情绪：支持与反对整合的论点**

* **支持方论点：**  
  * **经济协同与效率：** 将Hydration的成功与波卡的成功直接挂钩。通过从短期激励转向长期战略投资，最大化国库效率 51。  
  * **减少碎片化：** 将DeFi流动性和开发工作整合到一个占主导地位的、DOT原生的中心，解决与Asset Hub之间的“渠道冲突” 51。  
  * **战略增长：** 承认DeFi是波卡效用和用户增长的核心，而Hydration是领导这一领域的最佳项目 51。  
* **反对方论点：**  
  * **扼杀竞争与创新：** 收购领先的DeFi链就像“将整个行业国有化”，消除了其他项目创新的动力，并创造了垄断 51。  
  * **道德风险与先例：** 开创了一个危险的先例，即成功的项目可以期望被国库收购，这相当于将利润社会化，而将风险私有化 51。  
  * **风险中心化：** 通过将流动性、治理冲突和技术风险集中到一个单点故障，削弱了波卡的模块化、多平行链设计 51。

### **6.3 对Hydration和波卡生态系统的潜在影响**

* **如果通过：** Hydration将深度融入波卡的核心，可能获得优先的资源和待遇。HDX代币将被逐步淘汰，转而使用DOT，团队可能会直接由国库资助。这可能会极大地加速Hydration的路线图，但可能会削弱其自主性。  
* **如果被否决：** Hydration将继续作为独立的平行链运营，依靠国库拨款和自身收入实现增长。这将维护波卡上一个更具竞争性和去中心化的DeFi格局，但可能意味着Hydration自身增长速度会放缓。

这项收购提案不仅仅是一项金融交易，它更触及了关于波卡未来的根本哲学辩论：波卡应该培育一个由独立平行链组成的竞争性自由市场生态，还是应该战略性地“指定”并整合顶尖协议，以打造一个更统一、更有凝聚力的产品组合？支持者关注整合、效率和战略协同 51，这类似于企业收购关键供应商以实现垂直整合的策略。而反对者则强调自由市场原则：竞争、创新、去中心化和避免垄断 51。这揭示了波卡身份的核心张力。这次“变革愿望”投票的结果，虽然不具约束力，但将是DOT持有者社区倾向于哪种哲学的一个强烈信号，对整个生态系统的结构和战略具有深远的长期影响。

## **7.0 性能分析与链上指标**

### **7.1 总锁仓价值（TVL）增长与构成分析**

Hydration的TVL实现了显著增长。根据其官网数据，TVL已达到2.76亿美元 6，而根据DeFi Llama的数据，仅其借贷协议的TVL就达到了1.0322亿美元 63。这一增长得益于2023年1月Omnipool的推出 10 以及来自波卡国库的大量流动性激励 53。

### **7.2 交易量、费用与协议收入趋势**

该平台报告了可观的交易量，过去30天内达到了9600万美元 6。DeFi Llama关于借贷协议的数据显示了显著的费用产生能力：30天费用为147,044美元，30天收入为26,046美元 63。Token Terminal的数据显示，365天的代币交易量为3590万美元 34。

### **7.3 用户增长与参与度指标**

该平台拥有超过42,000个总账户 6。Token Terminal报告称，月活跃地址/用户约为4,800至4,900个 34。以“Galactic Council”为名的开发团队在GitHub上表现出持续且高水平的活跃度，过去一年每周有14名核心开发者，代码提交近4,000次 34。

尽管Hydration的顶级指标表现强劲，但深入分析揭示了一个潜在的脆弱性。一个关键的风险因素是，一旦国库奖励减少，协议是否能将这种激励驱动的流动性转化为具有粘性的、长期的有机流动性。收购提案的批评者明确提到了这种“租用流动性”，并质疑增长的有机性，认为流动性主要流向少数雇佣军账户 70。因此，Hydration面临的一个潜在依赖风险是，其令人瞩目的TVL和用户增长指标可能严重依赖于由国库资助的临时性流动性挖矿激励。在激励期结束后，这些指标的可持续性是一个关键的未知数，这将决定协议的长期生存能力。

## **8.0 结论与战略展望**

### **8.1 SWOT分析：优势、劣势、机会与威胁**

* **优势 (Strengths):** 创新的、资本高效的Omnipool架构；经过广泛审计的强大安全态势；垂直整合的产品路线图；来自波卡生态系统的深度支持。  
* **劣势 (Weaknesses):** TVL增长可能依赖于波卡国库的激励措施；Omnipool机制对普通用户而言可能较为复杂；HDX代币的价值捕获与积极（而非被动）参与挂钩，可能限制其吸引力。  
* **机会 (Opportunities):** 拟议的波卡收购案可能巩固其作为核心DeFi基础设施的地位；HOLLAR稳定币的推出和货币市场的扩展可以捕获更多DeFi价值链；不断增长的互操作性可以吸引波卡生态系统之外的流动性。  
* **威胁 (Threats):** 收购提案被否决可能被市场负面解读；来自其他链上更用户友好的EVM原生DeFi平台的竞争；尽管有健全的审计，但仍存在重大安全事件或经济漏洞的风险；DeFi协议面临的监管打击。

### **8.2 未来路线图与潜在催化剂**

* 全面推出并整合HOLLAR稳定币 5。  
* 扩展货币市场，增加更多资产和功能 10。  
* 实施ICE（意图组合引擎），这是一种基于意图的交易模型，旨在进一步减少滑点 10。  
* 波卡收购提案的最终决议和潜在实施 51。

### **8.3 最终评估：Hydration作为核心DeFi基础设施的发展轨迹**

综合所有研究发现，Hydration在技术上具有优越性，并已战略性地定位为波卡无可争议的DeFi中心。其创新的架构解决了流动性碎片化的实际问题，而其安全第一的方法也赢得了市场的信任。然而，该协议的命运正处于一个关键的十字路口，其走向将由“变革愿望”提案的结果决定。这一结果将决定它是演变为一个统一的波卡生态系统中的基础性、系统级组件，还是在一个更加去中心化和竞争性的生态中，继续作为主导但独立的金融力量蓬勃发展。无论治理结果如何，该项目的长期成功都取决于其能否将激励驱动的用户行为转化为有机的、可持续的采用。

#### **引用的著作**

1. Hydration Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/Hydration?k=MTQwMw%3D%3D](https://www.rootdata.com/Projects/detail/Hydration?k=MTQwMw%3D%3D)  
2. Hydration (HydraDX) project details | Polkadot network \- Parachains.info, 访问时间为 七月 27, 2025， [https://parachains.info/details/hydration](https://parachains.info/details/hydration)  
3. HydraDX Makes Waves with Rebrand into Hydration Network, Money Market, and HOLLAR Stablecoin \- Polkadotters | Kusama & Polkadot validators, 访问时间为 七月 27, 2025， [https://polkadotters.medium.com/hydradx-makes-waves-with-rebrand-into-hydration-network-money-market-and-hollar-stablecoin-5379f40894b5](https://polkadotters.medium.com/hydradx-makes-waves-with-rebrand-into-hydration-network-money-market-and-hollar-stablecoin-5379f40894b5)  
4. Hydration (HydraDX) project details | Polkadot network \- Parachains.info, 访问时间为 七月 27, 2025， [https://parachains.info/details/hydradx](https://parachains.info/details/hydradx)  
5. What is Hydration?, 访问时间为 七月 27, 2025， [https://docs.hydration.net/quick\_start/hydration/](https://docs.hydration.net/quick_start/hydration/)  
6. Hydration | Finance made efficient, 访问时间为 七月 27, 2025， [https://hydration.net/](https://hydration.net/)  
7. Hydration Bug Bounties | Immunefi, 访问时间为 七月 27, 2025， [https://immunefi.com/bug-bounty/hydration/](https://immunefi.com/bug-bounty/hydration/)  
8. What is Hydration? Overview of the Hydration project | TinTucBitcoin on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/24759141400290](https://www.binance.com/en/square/post/24759141400290)  
9. DIA Partners with Hydration, Powering DeFi Lending with Polkadot-Native Assets, 访问时间为 七月 27, 2025， [https://www.diadata.org/blog/post/dia-oracles-power-hydration-lending/](https://www.diadata.org/blog/post/dia-oracles-power-hydration-lending/)  
10. Hydration optimizes liquidity management for greater DeFi efficiency \- Polkadot, 访问时间为 七月 27, 2025， [https://polkadot.com/case-studies/hydration-liquidity-management-defi-efficiency/](https://polkadot.com/case-studies/hydration-liquidity-management-defi-efficiency/)  
11. How Bifrost redefines cross-chain liquid staking \- Polkadot, 访问时间为 七月 27, 2025， [https://polkadot.com/case-studies/bifrost-liquid-staking-on-polkadot/](https://polkadot.com/case-studies/bifrost-liquid-staking-on-polkadot/)  
12. Basilisk project details | Kusama network \- Parachains.info, 访问时间为 七月 27, 2025， [https://parachains.info/details/basilisk](https://parachains.info/details/basilisk)  
13. ecp \- Brand Communications, 访问时间为 七月 27, 2025， [https://www.branduk.net/tag/ecp/](https://www.branduk.net/tag/ecp/)  
14. asbe \- Brand Communications, 访问时间为 七月 27, 2025， [https://www.branduk.net/tag/asbe/](https://www.branduk.net/tag/asbe/)  
15. Introduction to Hydration | Bitskwela, 访问时间为 七月 27, 2025， [https://www.bitskwela.com/short-guides/introduction-to-hydration](https://www.bitskwela.com/short-guides/introduction-to-hydration)  
16. Hydration Dashboards \- Polkadot Wiki, 访问时间为 七月 27, 2025， [https://wiki.polkadot.network/general/dashboards/dune-analytics/parachain-dashboards/hydration-dashboards/](https://wiki.polkadot.network/general/dashboards/dune-analytics/parachain-dashboards/hydration-dashboards/)  
17. HydraDX \- Polkadot's Multi-Headed Liquidity Monster, 访问时间为 七月 27, 2025， [https://hydradx.io/](https://hydradx.io/)  
18. Providing Liquidity \- Hydration Docs, 访问时间为 七月 27, 2025， [https://docs.hydration.net/products/trading/liquidity/](https://docs.hydration.net/products/trading/liquidity/)  
19. HydraDX 2023 RoundUp — Achieved Milestones January 2023/January 2024 | by John Mental | Polkadot Ecosystem PromoTeam | Medium, 访问时间为 七月 27, 2025， [https://medium.com/polkadot-ecosystem-promoteam/hydradx-2023-roundup-achieved-milestones-january-2023-january-2024-f823ce3e5327?responsesOpen=true\&sortBy=REVERSE\_CHRON](https://medium.com/polkadot-ecosystem-promoteam/hydradx-2023-roundup-achieved-milestones-january-2023-january-2024-f823ce3e5327?responsesOpen=true&sortBy=REVERSE_CHRON)  
20. Hydration Unveils Decentralized Borrowing Platform on Polkadot \- Decrypt, 访问时间为 七月 27, 2025， [https://decrypt.co/294049/hydration-unveils-decentralized-borrowing-platform-on-polkadot](https://decrypt.co/294049/hydration-unveils-decentralized-borrowing-platform-on-polkadot)  
21. Hydration unveils decentralized borrowing platform on Polkadot \- Cointelegraph, 访问时间为 七月 27, 2025， [https://cointelegraph.com/press-releases/hydration-unveils-decentralized-borrowing-platform-on-polkadot](https://cointelegraph.com/press-releases/hydration-unveils-decentralized-borrowing-platform-on-polkadot)  
22. DIA, the Trustless Oracle Network | Price Feeds, VRF & More, 访问时间为 七月 27, 2025， [https://www.diadata.org/](https://www.diadata.org/)  
23. How it Works: Curve Finance, CRV, and Liquidity \- Gemini, 访问时间为 七月 27, 2025， [https://www.gemini.com/cryptopedia/curve-finance-liquidity-provider-dao](https://www.gemini.com/cryptopedia/curve-finance-liquidity-provider-dao)  
24. LIVE Hydration price today \- HDX price chart & live trends \- Kraken, 访问时间为 七月 27, 2025， [https://www.kraken.com/prices/hydration](https://www.kraken.com/prices/hydration)  
25. LIVE Hydration price today in Australia \- HDX Market Cap & Live Crypto Charts \- Kraken, 访问时间为 七月 27, 2025， [https://www.kraken.com/en-au/prices/hydration](https://www.kraken.com/en-au/prices/hydration)  
26. What is Hydration (HDX)| How To Get & Use Hydration ... \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/hydradx/what-is](https://www.bitget.com/price/hydradx/what-is)  
27. Hydration Price Today \- Current HDX Value to Euro & Live Chart \- Kriptomat, 访问时间为 七月 27, 2025， [https://kriptomat.io/cryptocurrency-prices/hydration-hdx-price/](https://kriptomat.io/cryptocurrency-prices/hydration-hdx-price/)  
28. Hydration Price, HDX Price, Live Charts, and Marketcap: xhdx \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/hydradx](https://www.coinbase.com/price/hydradx)  
29. Hydration Price, HDX Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/hydration](https://www.coinbase.com/price/hydration)  
30. Hydration Price Today | HDX to USD Live Price, Market Cap & Chart \- Binance, 访问时间为 七月 27, 2025， [https://www.binance.com/en/price/hydration](https://www.binance.com/en/price/hydration)  
31. HDX to USD: Hydration Price in US Dollar \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/hydration/usd](https://www.coingecko.com/en/coins/hydration/usd)  
32. Hydration Price: HDX Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/hydration](https://www.coingecko.com/en/coins/hydration)  
33. Hydration Price: HDX Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 27, 2025， [https://www.bybit.com/en/price/hydradx/](https://www.bybit.com/en/price/hydradx/)  
34. Hydration metrics \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/hydradx/metrics/all](https://tokenterminal.com/explorer/projects/hydradx/metrics/all)  
35. Hydration about \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/hydradx/about](https://tokenterminal.com/explorer/projects/hydradx/about)  
36. Staking | Hydration Docs, 访问时间为 七月 27, 2025， [https://docs.hydration.net/products/staking/](https://docs.hydration.net/products/staking/)  
37. State of the Art Security | Hydration Docs, 访问时间为 七月 27, 2025， [https://docs.hydration.net/security/intro/](https://docs.hydration.net/security/intro/)  
38. galacticcouncil/hydration-security \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/galacticcouncil/HydraDX-security](https://github.com/galacticcouncil/HydraDX-security)  
39. HydraDX Audit \- Code4rena, 访问时间为 七月 27, 2025， [https://code4rena.com/audits/2024-02-hydradx](https://code4rena.com/audits/2024-02-hydradx)  
40. HydraDX \- Code4rena, 访问时间为 七月 27, 2025， [https://code4rena.com/reports/2024-02-hydradx](https://code4rena.com/reports/2024-02-hydradx)  
41. Security Audit Reports \- Code4rena, 访问时间为 七月 27, 2025， [https://code4rena.com/reports](https://code4rena.com/reports)  
42. Hydration Bug Bounties | Immunefi, 访问时间为 七月 27, 2025， [https://immunefi.com/bug-bounty/hydration/scope/](https://immunefi.com/bug-bounty/hydration/scope/)  
43. Bug Bounty Program \- Immunefi, 访问时间为 七月 27, 2025， [https://immunefi.com/bug-bounty-program/](https://immunefi.com/bug-bounty-program/)  
44. Opportunistic trader front-runs HydraDX's Balancer LBP contract for $50,000, 访问时间为 七月 27, 2025， [https://cointelegraph.com/news/opportunistic-trader-front-runs-hydradx-s-balancer-lbp-contract-for-50-000](https://cointelegraph.com/news/opportunistic-trader-front-runs-hydradx-s-balancer-lbp-contract-for-50-000)  
45. Malicious Package in hydradx-ui \- Snyk Vulnerability Database, 访问时间为 七月 27, 2025， [https://security.snyk.io/vuln/SNYK-JS-HYDRADXUI-6046473](https://security.snyk.io/vuln/SNYK-JS-HYDRADXUI-6046473)  
46. $2.2 Billion Stolen in Crypto in 2024 but Hacked Volumes Stagnate \- Chainalysis, 访问时间为 七月 27, 2025， [https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2025/](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2025/)  
47. $24m in cryptocurrencies stolen from hacked DeFi pools, 访问时间为 七月 27, 2025， [https://www.grip.globalrelay.com/24m-in-cryptocurrencies-stolen-from-hacked-defi-pools/](https://www.grip.globalrelay.com/24m-in-cryptocurrencies-stolen-from-hacked-defi-pools/)  
48. Penpie DeFi platform files reports with FBI, Singapore police after $27 million crypto theft, 访问时间为 七月 27, 2025， [https://therecord.media/penpie-defi-protocol-ethereum-stolen](https://therecord.media/penpie-defi-protocol-ethereum-stolen)  
49. The Largest Cryptocurrency Hacks So Far \- Investopedia, 访问时间为 七月 27, 2025， [https://www.investopedia.com/news/largest-cryptocurrency-hacks-so-far-year/](https://www.investopedia.com/news/largest-cryptocurrency-hacks-so-far-year/)  
50. Crypto & DeFi Hacks & Scams Report \- Crystal Intelligence, 访问时间为 七月 27, 2025， [https://crystalintelligence.com/rohirov/2023/04/HACKS-report-1.pdf](https://crystalintelligence.com/rohirov/2023/04/HACKS-report-1.pdf)  
51. Wish For Change: Polkadot acquisition of Hydration \- Ecosystem, 访问时间为 七月 27, 2025， [https://forum.polkadot.network/t/wish-for-change-polkadot-acquisition-of-hydration/12931](https://forum.polkadot.network/t/wish-for-change-polkadot-acquisition-of-hydration/12931)  
52. What DEX is the biggest in Polkadot? \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/Polkadot/comments/1hf80sr/what\_dex\_is\_the\_biggest\_in\_polkadot/](https://www.reddit.com/r/Polkadot/comments/1hf80sr/what_dex_is_the_biggest_in_polkadot/)  
53. You MUST Learn Polkadot DeFi (Hydration) \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=jUiumScw7P0](https://www.youtube.com/watch?v=jUiumScw7P0)  
54. Decentralized Finance (DeFi) reinvented with Polkadot, 访问时间为 七月 27, 2025， [https://polkadot.com/use-cases/defi/](https://polkadot.com/use-cases/defi/)  
55. Empowering Decentralization: Polkadot DAO Allocates 3M DOT for DeFi Growth, 访问时间为 七月 27, 2025， [https://polkadot.com/blog/empowering-decentralization-polkadot-dao-allocates-3m-dot-for-defi/](https://polkadot.com/blog/empowering-decentralization-polkadot-dao-allocates-3m-dot-for-defi/)  
56. Polkadot Allocates $14.4M to Boost DeFi with Hydration \- Decrypt, 访问时间为 七月 27, 2025， [https://decrypt.co/234583/polkadot-allocates-14-4m-to-boost-defi-with-hydration](https://decrypt.co/234583/polkadot-allocates-14-4m-to-boost-defi-with-hydration)  
57. Polkadot Allocates $14.4M to Boost DeFi with Hydration \- Finance Magnates, 访问时间为 七月 27, 2025， [https://www.financemagnates.com/thought-leadership/polkadot-allocates-144m-to-boost-defi-with-hydration/](https://www.financemagnates.com/thought-leadership/polkadot-allocates-144m-to-boost-defi-with-hydration/)  
58. StellaSwap \- DeFi Overview, TVL Analysis \- DappRadar, 访问时间为 七月 27, 2025， [https://dappradar.com/dapp/stellaswap](https://dappradar.com/dapp/stellaswap)  
59. What Is StellaSwap? Low-Slippage Trading on Polkadot \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/learn/stellaswap-low-slippage-trading-polkadot](https://www.coingecko.com/learn/stellaswap-low-slippage-trading-polkadot)  
60. StellaSwap price today, STELLA to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/stellaswap/](https://coinmarketcap.com/currencies/stellaswap/)  
61. Acala \- The DeFi Hub of Polkadot, 访问时间为 七月 27, 2025， [https://acala.network/](https://acala.network/)  
62. What is Acala Network: An All-In-One DeFi Platform \- Phemex Academy, 访问时间为 七月 27, 2025， [https://phemex.com/academy/what-is-acala-network](https://phemex.com/academy/what-is-acala-network)  
63. Hydration Lending \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/hydration-lending](https://defillama.com/protocol/hydration-lending)  
64. StellaSwap \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/stellaswap](https://defillama.com/protocol/stellaswap)  
65. Acala \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/Acala](https://defillama.com/chain/Acala)  
66. Balancer Crypto: Automated Cryptocurrency Pools \- Gemini, 访问时间为 七月 27, 2025， [https://www.gemini.com/cryptopedia/balancer-crypto-automated-pools](https://www.gemini.com/cryptopedia/balancer-crypto-automated-pools)  
67. Why is Curve so popular with such low returns? : r/defi \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/defi/comments/u5pra7/why\_is\_curve\_so\_popular\_with\_such\_low\_returns/](https://www.reddit.com/r/defi/comments/u5pra7/why_is_curve_so_popular_with_such_low_returns/)  
68. galacticcouncil/HydraDX-wasm: Wasm wrapper for hydra pools math \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/galacticcouncil/HydraDX-wasm](https://github.com/galacticcouncil/HydraDX-wasm)  
69. Referenda / Wish for Change / Rebrand $DOT to $JAM in 2026 : r/Polkadot \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/Polkadot/comments/1licnrj/referenda\_wish\_for\_change\_rebrand\_dot\_to\_jam\_in/](https://www.reddit.com/r/Polkadot/comments/1licnrj/referenda_wish_for_change_rebrand_dot_to_jam_in/)  
70. Wish For Change: Polkadot acquisition of Hydration \- \#4 by sourabhniyogi \- Ecosystem, 访问时间为 七月 27, 2025， [https://forum.polkadot.network/t/wish-for-change-polkadot-acquisition-of-hydration/12931/4](https://forum.polkadot.network/t/wish-for-change-polkadot-acquisition-of-hydration/12931/4)  
71. Hydration \- Revenue \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/revenue/chain/hydration](https://defillama.com/revenue/chain/hydration)  
72. Hydration \- Fees \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/fees/chain/hydration](https://defillama.com/fees/chain/hydration)  
73. Token trading volume \- Hydration, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/hydradx/metrics/token-trading-volume](https://tokenterminal.com/explorer/projects/hydradx/metrics/token-trading-volume)  
74. Active addresses (monthly) \- Hydration \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/hydradx/metrics/active-addresses-monthly](https://tokenterminal.com/explorer/projects/hydradx/metrics/active-addresses-monthly)  
75. Hydration \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/hydration?denomination=HDX](https://defillama.com/protocol/hydration?denomination=HDX)  
76. Galactic Council · GitHub, 访问时间为 七月 27, 2025， [https://github.com/galacticcouncil](https://github.com/galacticcouncil)  
77. Activity · galacticcouncil/hydration-node \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/galacticcouncil/hydration-node/activity](https://github.com/galacticcouncil/hydration-node/activity)  
78. galacticcouncil/hydration-node: Hydration node \- Cross ... \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/galacticcouncil/hydration-node](https://github.com/galacticcouncil/hydration-node)