

# **Hyperion (RION) 投资评估报告：Aptos生态流动性核心的深度剖析与策略研判**

## **第一章：Hyperion项目深度解析：Aptos生态的流动性引擎**

### **1.1 项目概述与核心价值主张**

Hyperion 定位为原生构建于 Aptos 区块链之上的全链上混合式订单簿-自动做市商（AMM）去中心化交易所（DEX）1。其核心目标是成为 Aptos 生态系统的基础“统一流动性与交易层”，旨在通过集成化平台解决去中心化金融（DeFi）领域普遍存在的流动性碎片化、资本效率低下及用户界面复杂等核心痛点 2。

该项目的价值主张超越了传统的DEX范畴，其战略意图并非仅仅是创建一个交易场所，而是要构筑一个核心的金融基础设施。通过融合不同的流动性与交易模型，Hyperion 能够同时满足偏好简易兑换的零售用户与要求订单簿及精准执行的专业交易者的需求。这种成为“流动性引擎”的宏大愿景，使其在战略定位上远超普通的AMM协议。

Hyperion的核心论点在于，一个新兴的Layer 1生态系统（如Aptos）若要实现DeFi的大规模采用，必须拥有一个单一、高效且具备高度可组合性的流动性枢纽。通过将自身定位为这一中心枢纽，Hyperion 旨在随着 Aptos 生态的整体增长而捕获不成比例的巨大价值。新兴公链生态早期往往面临流动性分散在多个竞争性DEX中的困境，这导致交易者滑点高昂，流动性提供者（LPs）的资本配置效率低下。Hyperion的策略是通过垂直整合解决方案来应对这一挑战：为零售用户提供自动做市商（AMM），为专业用户提供订单簿，通过聚合器捕获外部流动性，并利用策略金库简化收益生成过程 3。这一设计旨在形成一个正向反馈循环：聚合器带来的更优交易执行吸引交易者，从而为原生流动性池的LPs创造更多手续费，进而吸引更多流动性注入，进一步优化交易执行。因此，Hyperion的竞争维度不仅在于功能层面，更在于其成为Aptos“流动性黑洞”的战略企图——一个其他协议赖以构建的关键基础设施。这相较于单纯的DEX定位，构成了更强大且更具防御性的市场地位。

### **1.2 技术架构剖析：混合式DEX与Move语言优势**

Hyperion 的技术架构根植于 Aptos 区块链，充分利用了 Move 编程语言及其 Block-STM 并行执行引擎的独特优势 4。这一技术选型使其能够实现高吞吐量、低延迟和近乎实时的交易结算，为用户提供了可媲美中心化交易所（CEX）的性能体验 1。其设计的核心是一种混合模型，该模型结合了类似于 Uniswap V3 的集中流动性做市商（CLMM）和一个计划于2025年第四季度发布的订单簿引擎 4。此外，协议还引入了定向流动性做市商（DLMM）机制，以更有效地处理高波动性资产 7。

选择 Aptos 和 Move 语言是 Hyperion 在可扩展性和安全性方面做出的深思熟虑的技术决策。并行执行引擎是DEX实现CEX级性能的关键，对于吸引成熟交易者和做市商至关重要。CLMM与订单簿的混合模式已被市场验证为一种能够最大化资本效率并满足多样化用户需求的有效路径。而DLMM的加入则显示了项目方在处理长尾资产和高波动性代币交易方面的远见，解决了传统AMM在这些场景下的普遍挑战。

Hyperion的技术架构不仅是实现细节，更构成了其战略护城河。通过建立在Aptos的高性能基础设施之上，它能够提供在以太坊主网等慢速、顺序执行链上根本无法实现的用户体验。DeFi领域最大的用户体验障碍在于交易速度和成本。Aptos等新兴Layer 1公链的设计初衷正是为了解决这些问题，其Block-STM引擎允许交易并行处理，从而极大地提升了网络吞吐量 4。作为交易最密集的应用之一，DEX能够最大程度地从并行处理能力中受益。Hyperion通过原生构建于Aptos之上，充分利用了这一优势，提供了近乎即时的兑换体验和低廉的交易费用。这种性能优势是结构性的，而非功能性的，为Hyperion带来了持久的竞争力，前提是Aptos生态能够持续获得市场关注和用户增长。

### **1.3 产品矩阵：CLMM、智能聚合器与策略金库**

Hyperion 构建了一个全面且协同的产品矩阵，以巩固其作为Aptos流动性中心的地位。

* **集中流动性做市商 (CLMM):** 该模块允许流动性提供者在特定的价格区间内提供流动性，从而显著提高资本效率，赚取更多交易费用 3。  
* **智能聚合器 (Smart Aggregator):** 作为一个元聚合器，它能够扫描并整合Aptos上多个DEX和聚合器的流动性，为用户的交易智能路由到最优路径，以确保最佳成交价格和最低滑点 3。  
* **策略金库 (Hyperion Vaults):** 提供专业级的自动化流动性管理策略。这些金库能够自动复利收益，并动态调整头寸以最大化收益和对冲无常损失，极大地降低了普通用户参与复杂流动性策略的门槛 3。

这一产品组合具有高度的协同效应。CLMM是核心的流动性引擎；聚合器确保Hyperion成为Aptos上所有交易的默认入口，即使用户的交易最终在其他地方结算；而策略金库则是关键的用户获取和留存工具，它抽象化了主动流动性管理的复杂性，解决了Uniswap V3等平台上流动性提供者面临的主要痛点。

Hyperion Vaults可以被视为该项目捕获总锁定价值（TVL）的“特洛伊木马”。尽管专业交易者被CLMM和聚合器所吸引，但DeFi领域的大部分资本来自于寻求被动收益的流动性提供者。CLMM（如Uniswap V3）对于零售用户的主要挑战在于设定价格区间的复杂性以及管理不善可能导致的无常损失风险。许多第三方流动性管理器应运而生，构建于Uniswap之上。Hyperion则将此功能原生集成到其Vaults中 6。通过提供一种简单的“存入即忘”解决方案，Hyperion极大地降低了提供流动性的门槛，从而吸引了更多的TVL。更多的TVL带来了更优的交易执行，更优的执行吸引了更多的交易量，而更多的交易量又为Vaults带来了更高的手续费收入，使其更具吸引力。这一围绕Vaults用户友好性建立的强大、自洽的增长循环，是其快速占领市场的关键。

### **1.4 发展路线图与未来展望**

Hyperion 的发展路线图清晰且富有雄心。项目主网于2025年2月上线，随后在2025年7月16日成功完成了其原生代币RION的代币生成事件（TGE），这为其启动基于代币的激励机制奠定了基础 5。

路线图上一个备受期待的里程碑是计划于2025年第四季度推出的订单簿引擎 4。这是其构建混合式DEX拼图的最后一块，对于吸引机构级交易量至关重要。此外，项目还计划引入Launchpad功能，这将为RION和xRION代币增加新的效用，并进一步将Hyperion打造为Aptos生态新项目的首发平台，从而巩固其生态系统内的中心地位 11。

2025年第四季度的订单簿上线将是一个潜在的重大利好催化剂。AMM的流动性对于零售用户而言是充足的，但对于需要下达限价单并在大额交易中寻求最小滑点的高频交易者或机构来说则远远不够。目前，Aptos上的这类交易流要么不存在，要么流向了中心化交易所。通过引入一个高性能的全链上订单簿，Hyperion有能力捕获这部分“专业”交易量，而这类交易量通常远大于零售兑换量。因此，订单簿的成功实施将不仅仅是一项功能迭代，而是项目总可寻址市场（TAM）的一次阶跃式扩张。其成功与否将成为影响项目长期估值的关键拐点。投资者应密切关注该功能的开发进展和上线情况，因为它可能从根本上重塑协议的收入产生能力。

## **第二章：市场表现与竞争格局分析**

### **2.1 关键链上指标分析**

自2025年2月主网上线以来，Hyperion在短时间内取得了令人瞩目的链上增长，各项关键指标均表现强劲。

* **总锁定价值 (TVL):** 截至2025年7月，协议TVL曾一度突破1.3亿美元 3。尽管DeFi Llama的最新数据显示TVL约为3,145万美元，这可能反映了近期市场回调或数据统计口径的差异，但其在早期阶段快速积累资本的能力已得到验证 12。  
* **交易量:** 协议的累计交易量已超过70亿美元 3。日交易量稳定在1.25亿至1.5亿美元之间，峰值曾超过1.74亿美元 3。根据2025年7月的数据，其30日交易量在全球所有DEX中排名第12位，显示出极高的市场活跃度 13。  
* **用户增长:** 其DRIPs激励计划吸引了近94万地址参与，展示了强大的社区动员和用户获取能力 3。

这些数据对于一个上线不足一年的协议而言是极为出色的。TVL的快速增长，以及更为重要的、持续高企的交易量，证明了Hyperion在Aptos生态中实现了显著的产品市场契合度。其交易量与TVL之比远高于许多竞争对手，这直接反映了其卓越的资本效率。

在DeFi领域，流动性具有强大的自反性——流动性会吸引更多的流动性。拥有最高交易量和最深资金池的协议往往会吸引更多用户和资本。Hyperion的链上指标清晰地表明，它已经在Aptos生态系统中达到了这一临界规模，成为该链上交易量最大的协议 13。这为新进入的竞争者设置了极高的壁垒。一个新兴的DEX需要付出巨大的激励成本，才有可能从Hyperion这样的既定领导者手中争夺流动性。因此，Hyperion当前的市场地位不仅是暂时的快照，更是其在Aptos生态系统内未来防御能力和持久生命力的有力证明。

### **2.2 代币市场数据**

Hyperion的原生代币为RION，于2025年7月中旬通过TGE正式推出。以下是截至报告撰写时（约2025年7月底）的关键市场数据。

* **代币名称:** Hyperion (RION) 2  
* **总供应量:** 100,000,000 RION 2  
* **初始流通供应量:** 17,000,000 RION 2  
* **当前市值 (以$0.60价格计):** 约1,020万美元 16  
* **完全稀释估值 (FDV):** 约6,000万美元  
* **历史最高价 (ATH):** 约$1.20 16  
* **合约地址:**  
  * Aptos: 0x435ad41e7b383cef98899c4e5a22c8dc88ab67b22f95e5663d6c6649298c3a9d 19  
  * BNB Smart Chain (BEP20): 0xc0c240c870606a5cb3150795e2d0dfff9f1f7456 18

RION代币的发行历史尚短，其初始市值相对于协议在链上的主导地位（高交易量、高TVL）而言显得相对较低。这种基本面与市值之间的潜在脱节，可能预示着一个估值洼地。同时，代币在Aptos和BNB Chain上均有部署，表明项目可能采取了多链策略或已建立跨链桥接机制。

Hyperion的链上基本面表现（顶级DEX）与其代币的市场估值（小市值）之间存在显著的差异。这表明市场可能尚未充分认识到该协议的成功，如果RION代币的价值捕获机制设计得当，这可能构成一个潜在的投资机会。造成这种现象的原因可能有多方面：首先，RION代币刚刚推出，市场需要时间来对其进行合理定价，尤其是在Aptos这样关注度相对低于以太坊或Solana的公链上。其次，来自空投（占总供应量的5%）的初始抛压可能在短期内抑制了价格表现 3。这些因素的结合——强劲的基本面、新近发行和空投后的价格盘整——为价值投资创造了经典的条件。核心问题在于，RION代币的设计能否有效捕获协议产生的价值，这一点将在后续章节中深入探讨。

### **2.3 竞争对手横向对比**

在Aptos生态系统中，Hyperion面临着来自其他DeFi协议的竞争，其中最主要的是Thala Labs。

| 协议 (Protocol) | TVL (美元) | 24小时交易量 (美元) | 交易量/TVL比率 | 核心特性 (Key Features) | 历史安全事件 (Security History) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Hyperion** | $3,145万 12 | $3,126万 12 | \~0.99 | 混合式DEX (CLMM+订单簿), 聚合器, 策略金库 | 无已知重大安全事件 |
| **Thala Labs** | $1.22亿 22 | N/A | N/A | AMM, 超额抵押稳定币(MOD), 流动性质押, Launchpad | 曾发生$2,550万美元的漏洞攻击，资金后被追回 23 |
| **Amnis Finance** | $1.86亿+ 25 | N/A | N/A | 流动性质押 (amAPT, stAPT) | 经Movebit审计，无已知重大安全事件 25 |

*注：数据截至2025年7月底，可能存在波动。Thala Labs的交易量数据未在可用材料中明确提供。*

分析显示，虽然Thala Labs拥有更高的TVL，但其TVL构成复杂，相当一部分与稳定币和流动性质押业务相关，而非纯粹的交易流动性。相比之下，Hyperion的交易量/TVL比率极高，这直接证明了其交易池的资本效率远超竞争对手。此外，Thala Labs过去发生的安全事件，尽管最终资金得以保全，但仍构成了一个不容忽视的声誉风险点。Amnis Finance作为领先的流动性质押协议，更多是Hyperion的合作伙伴而非直接竞争者，其产生的流动性质押代币（如stAPT）为Hyperion等交易平台提供了优质的流动性来源。

Hyperion的主要竞争优势在于其专注于成为最高效的交易层。与Thala Labs等提供广泛DeFi服务的竞争者不同，这种专注使其能够深度优化交易体验。DeFi的历史表明，采用“货币乐高”模式（即各个协议专注于特定领域并相互组合）的生态系统往往比“一体化”应用更能 fostering 深度的可组合性。Hyperion正将自己定位为核心的“交易乐高”，并与“质押乐高”（Amnis Finance）和“借贷乐高”（Aries Markets）等生态伙伴紧密合作 27。这种战略使其能够分享合作伙伴增长带来的红利，而无需自行承担构建、保护和营销这些额外产品的成本和风险。它致力于成为价值流动的中心枢纽，这是一个比成为“万金油”协议更为强大和可持续的定位。

### **2.4 在Aptos生态中的战略地位**

Hyperion的战略地位得到了Aptos基金会的官方认可和大力支持。该项目是Aptos基金会LFM（Launch & Funding Maximization）计划的首批入选项目之一 4。LFM是一个旨在为顶级项目提供全方位支持的加速器计划，尤其是在其TGE前后阶段。

参与LFM计划意味着Hyperion可以获得来自Aptos基金会和Aptos Labs的直接支持，包括工程、市场营销和战略方面的专家指导、高达2.5万美元的安全审计补助金，以及与顶级交易所的引荐机会 28。与Hyperion一同入选首批LFM计划的还有Aries Markets（借贷）、Amnis Finance（流动性质押）和Echo Protocol（比特币生息协议），这些都是Aptos DeFi生态的核心支柱 27。

入选LFM计划是Aptos基金会对Hyperion投下的重要信任票，表明其被视为生态系统成功的关键基础设施。这不仅是一笔资助，更是一种战略合作伙伴关系，为项目的成长提供了宝贵的资源，并显著降低了其发展过程中的诸多风险。

投资Hyperion在某种程度上可以看作是对Aptos基金会生态系统战略的一次杠杆化押注。基金会正在积极地策划和扶持一个由协同效应显著的“蓝筹”协议组成的矩阵。这个矩阵包含了DeFi生态的三大基石：DEX（Hyperion）、流动性质押（Amnis Finance）和借贷市场（Aries Markets）。这些协议中任何一个的成功都可能为其他协议带来价值，而Hyperion作为中心交易枢纽，将处于汇集所有价值流动的核心位置。从基金会的角度看，这些核心协议的成功至关重要，这意味着它们将获得持续的、强有力的支持。虽然这并非成功的保证，但与生态系统内其他非关联项目相比，这无疑提供了一个巨大的顺风，并降低了潜在的下行风险。因此，对RION的投资不仅是对一个DEX的投资，更是与整个Aptos生态系统的战略资本和资源保持一致。

## **第三章：RION代币经济学模型评估**

### **3.1 双代币模型：RION与xRION的效用与机制**

Hyperion 采纳了在DeFi领域被广泛验证的veToken（投票托管代币）模型，构建了一个由RION和xRION组成的双代币经济系统 3。

* **RION:** 作为协议的原生、可自由流通的功能型代币，RION承担多种核心效用。它被用于交易激励、支付平台手续费并享受折扣，同时也是获取治理权和更高收益的基础资产 3。  
* **xRION:** 是一种不可转让的治理代币，通过锁定RION获得。用户可以选择最长52周的锁仓期，锁仓时间越长，获得的xRION权重越高。xRION的权重会随时间线性衰减，但用户可以通过延长锁仓期来维持其权重 3。持有xRION的核心权益包括：  
  * **治理投票权:** 参与协议的重大决策，如参数调整、功能升级等 29。  
  * **分享协议收入:** 获得平台交易手续费的分成作为质押奖励 32。  
  * **Launchpad资格:** 获得参与Hyperion平台上新项目代币发行的额度和白名单资格 29。

这种由Curve Finance首创并推广的veToken模型，旨在激励代币的长期持有，使代币持有者的利益与协议的长期发展深度绑定。通过将基础效用（RION）与治理和核心权益（xRION）分离，该模型确保了那些对协议最具长期信心的参与者能够拥有最大的话语权，并分享最大部分的协议收益。

xRION机制是驱动RION代币价值的核心引擎。对治理权、更高的质押收益，尤其是对Launchpad参与资格的需求，将共同为RION代币创造一个强大的需求池。一个单纯用于支付手续费的代币，其价值捕获能力有限，因为用户可能“即买即用即卖”，导致代币流速过高。而锁定机制则为用户提供了长期持有的理由。Hyperion的模型在此基础上增加了极具吸引力的激励，特别是参与潜在高回报IDO的机会 34。随着Hyperion作为Aptos头部DEX的地位日益巩固，其Launchpad对新项目的吸引力也将随之增强。这将直接推高市场对xRION的需求，从而反向驱动用户购买并锁定更多的RION代币。这一机制创造了一个自反性循环：DEX和Launchpad的成功直接转化为对RION代币的购买和锁定压力，有效减少了市场上的流通供应，为代币价格提供了坚实的支撑。

### **3.2 代币分配与解锁时间表**

RION代币的总供应量固定为1亿枚，其分配方案旨在平衡生态系统各方的利益，支持协议的长期可持续发展。

| 类别 (Category) | 分配比例 (%) | 代币数量 | 解锁与释放详情 (Vesting Details) |
| :---- | :---- | :---- | :---- |
| 流动性挖矿与激励 | 30.0% | 30,000,000 | 用于持续的DRIPs计划、交易奖励和未来的激励活动 21 |
| 协议金库与生态发展 | 22.9% | 22,900,000 | 用于产品创新、战略合作和生态系统增长 3 |
| 团队与顾问 | 20.0% | 20,000,000 | 设有锁仓期以确保与协议长期利益一致，但具体时间表未公开 3 |
| 公开分发 | 9.0% | 9,000,000 | 通过TGE等方式向公众发售 21 |
| 投资者 | 8.1% | 8,100,000 | 设有锁仓期，但具体时间表未公开 3 |
| 创世空投 | 5.0% | 5,000,000 | TGE时可领取3%，30天后解锁剩余2% 3 |
| 社区激励 | 5.0% | 5,000,000 | 用于社区活动和贡献者奖励 21 |

分析:  
代币分配结构整体看来较为合理。最大的一部分（30%）被用于流动性激励，这对于DEX的冷启动和持续运营至关重要。团队与投资者的合计份额为28.1%，处于行业可接受范围内。5%的空投是建立早期社区的标准做法。  
然而，一个显著的风险点在于，**团队和投资者的具体锁仓和线性释放时间表并未公开** 3。这在透明度方面是一个重大的缺失，因为这部分代币的解锁将对市场流通量和代币价格产生直接影响。投资者无法准确预测未来的供应增量，这增加了投资的不确定性。

最大的单一分配类别是“流动性挖矿与激励”，这3,000万枚RION是代币通胀的主要来源。这些激励代币的分发效率将直接决定协议能否维持其增长势头。如果激励设计不当，可能会引发大规模的“挖提卖”行为，对RION价格造成持续的抛压。相反，一个精心设计的释放方案，例如将更高的年化收益率（APR）与锁定RION以获取xRION的行为挂钩，则可以将通胀压力转化为激励用户购买并锁定代币的动力。因此，评估其代币经济模型的健康状况，不仅要看分配比例，更要深入分析其激励分发机制（如DRIPs计划）的具体设计 34。

### **3.3 价值捕获与通胀压力分析**

Hyperion的价值捕获机制清晰地围绕xRION构建：用户通过质押RION获得xRION，从而有资格分享一部分源自平台交易手续费的真实收益 32。这是协议价值回馈代币持有者的核心渠道。

主要的通胀压力则来自于占比30%的流动性挖矿激励池。在项目启动初期，为了吸引流动性，协议提供了极高的质押年化收益率（APR），有数据显示初始APR曾高达675.55% 36。这种高APR在早期是有效的，但本质上是不可持续的，因为它主要由代币释放（通胀）支撑。

RION代币模型的长期可持续性，最终取决于其能否成功实践“真实收益”（Real Yield）叙事。短期内，由代币释放带来的高APR吸引了大量质押者。然而，随着时间的推移，这些释放必须逐步减少，以避免代币陷入恶性通胀。当释放量下降时，除非有其他收入来源来支撑，否则质押APR也将随之下降。对于Hyperion而言，这个关键的收入来源就是平台真实的交易手续费 32。

因此，对RION的长期投资逻辑是：协议能够持续保持其在Aptos生态中的交易主导地位，从而产生可观且持续增长的手续费收入。这部分真实收益将被分配给xRION持有者，创造出一种可持续的、有吸引力的收益率，使得即便利率释放的激励减少后，用户仍然有充分的理由继续锁定RION。目前协议展现出的高交易量，是支撑这一逻辑能够成立的非常积极的早期信号。

## **第四章：团队背景与投资机构实力评估**

### **4.1 核心团队成员背景调查**

关于Hyperion的核心团队，公开信息极为有限。有资料将联合创始人兼CEO指向一位名为“Claire Zhao”的人士 4。然而，经过广泛的背景调查，未能明确将此人与Hyperion DEX项目进行关联。公开搜索到的同名人士包括媒体实习生和学术研究者，但均无确切证据表明其参与了该项目 37。

项目的官方网站（在调研期间无法访问 39）和文档也侧重于产品介绍，并未披露任何团队成员的详细背景。这表明，Hyperion的创始团队目前选择了匿名或假名的方式运营。

在DeFi领域，团队匿名是一个需要高度重视的风险因素，因为它削弱了问责机制。尽管历史上不乏由匿名团队成功构建的优秀项目，但这无疑为投资决策增加了一层不确定性。缺乏公开可验证的团队信息，使得尽职调查的重心必须转移到其他信任信号上，例如代码质量、投资者背景和链上运营的透明度。Hyperion在团队匿名的情况下仍能取得显著的成功，这本身就暗示了其在其他方面的实力可能非常强大。然而，尽管有顶级机构的背书，理论上由团队主导的欺诈或项目放弃的风险，仍然无法被完全排除。

### **4.2 顶级投资机构背书分析**

与匿名的团队形成鲜明对比的是，Hyperion拥有一个星光熠熠的投资者阵容。其战略融资获得了多家顶级风险投资机构和生态系统核心参与者的支持。

领投方为**OKX Ventures**，其他主要投资者包括**Aptos Labs、Aptos Foundation、Maelstrom（由Arthur Hayes创立的基金）以及Mirana Ventures** 2。此外，该项目还得到了BlockBooster和Ankaa Accelerator孵化器的支持 1。

这是一个实力雄厚且具备高度战略协同性的投资组合。

* **OKX Ventures**的领投不仅带来了资金，更带来了与世界顶级交易所的潜在联系，为未来的上币和流动性支持铺平了道路 36。  
* **Aptos Labs**和**Aptos Foundation**的投资与支持，为Hyperion提供了无与伦比的生态系统资源和技术指导，并将其纳入官方重点扶持的LFM计划中 9。  
* **Maelstrom**的参与，意味着项目获得了加密货币领域最具影响力的意见领袖之一Arthur Hayes的认可，这将极大地提升项目的市场关注度和叙事能力 41。  
* **Mirana Ventures**作为Bybit和Mantle生态的关联投资机构，同样拥有深厚的行业网络和资源 43。

这个投资者联盟不仅仅是资本的集合，更是一个战略同盟。每个成员都为Hyperion的成功提供了独特的、不可或缺的资源，共同构建了一个强大的竞争优势。这种顶级机构的集体背书，在很大程度上对冲了团队匿名的风险。可以合理推断，这些专业投资机构在投资前已经对创始团队进行了深入的尽职调查。因此，对Hyperion的投资，在某种意义上也是对这些顶级VC尽调能力的信任投票。

### **4.3 社区互动与透明度评估**

Hyperion在社区建设方面表现活跃，拥有庞大的用户基础。其官方Twitter账户关注者超过13万，Discord社区成员超过3万 41。社交媒体更新频繁，围绕TGE、空投和质押等活动与社区保持着积极互动 12。

然而，项目的透明度呈现出两面性。一方面，其链上活动、关键指标和发展路线图是公开的，体现了“产品导向的透明度”。另一方面，关于核心团队身份和内部人员代币解锁细节等关键的链下信息则是不透明的。此外，在调研期间，其主要的GitHub代码库Hyperionxyz/hyperfluid-interface无法访问，这引发了对其代码开源状态的担忧，尽管这可能只是暂时性问题 45。

综合来看，Hyperion选择了一种在DeFi领域常见的运营策略：让产品、数据和投资者背书来说话，而非团队成员的个人声誉。这种策略要求投资者将信任的基石从“人”转向“代码”和“资本”。对于外部投资者而言，这意味着在评估风险时，必须降低对“团队”因素的权重，同时显著增加对“投资者质量”和“链上牵引力”这两个因素的权重。投资决策的依据，更多地变成了对这匹“赛马”（项目本身）及其背后有影响力的“马主”（投资机构）的判断。

## **第五章：风险评估与安全审计**

### **5.1 智能合约与技术风险**

作为DeFi协议，Hyperion不可避免地暴露于智能合约漏洞和技术攻击的风险之下。项目建立在Move语言之上，该语言在设计上比Solidity包含了更多的原生安全特性，旨在减少常见的漏洞类型。然而，语言层面的安全性并不能完全杜绝逻辑层面的错误，Thala Labs在Aptos上发生的重大安全事件就是一个警示 24。

积极的一面是，Hyperion表现出了对安全的高度重视，其核心工程师已宣布加入由Movemaker和alcove发起的“Aptos Move安全库共建计划”，致力于为生态系统提供经过严格审计的、模块化的安全智能合约组件 46。

当前最大的潜在技术风险，可能并非在于已经上线并经过审计的CLMM合约，而在于计划中更为复杂的订单簿引擎。在链上高效、安全地实现一个中央限价订单簿（CLOB）是一项巨大的技术挑战，它涉及高频的状态更新、复杂的撮合逻辑，并且极易受到抢先交易（front-running）和其他矿工可提取价值（MEV）攻击的影响。计划于2025年第四季度上线的订单簿功能将显著扩大协议的攻击面 4。因此，在该模块上线并吸引大量流动性之前，对其进行严格、透明的第三方安全审计至关重要。这些审计报告的质量和结论，将是评估项目未来风险状况的关键依据。

### **5.2 市场与经济模型风险**

Hyperion面临着与大多数DeFi协议类似的市场与经济模型风险。

* **无常损失 (Impermanent Loss, IL):** 作为AMM流动性提供者，用户需承担无常损失的风险。在CLMM模型中，由于流动性集中在狭窄的价格区间，价格的剧烈波动可能导致无常损失被放大 47。Hyperion Vaults通过自动化策略管理，旨在为用户缓解这一风险，但无法完全消除 5。  
* **代币价格波动与通胀:** RION代币尚处在发行初期，价格波动性高。来自空投接收者和流动性挖矿奖励的持续抛压，可能在短期内对代币价格构成下行压力 3。  
* **Aptos生态系统依赖风险:** Hyperion的成败与Aptos区块链的整体发展紧密相连。如果Aptos未能成功吸引足够的用户、开发者和资本，Hyperion作为其生态内的头部应用，其增长天花板将受到严重限制。  
* **潜在的“死亡螺旋”风险:** 双代币模型在极端市场条件下存在一定的风险。如果RION价格大幅下跌，将导致以RION计价的质押奖励价值缩水，从而降低用户质押的意愿。这可能引发用户解锁并抛售RION，进一步加剧价格下跌，形成负反馈循环。抵御这种风险的核心在于协议能否产生可持续的、由真实交易手续费支撑的“真实收益”。只要手续费收入足够丰厚，即使用户不考虑RION代币本身的价格波动，质押行为依然具有吸引力，从而打破螺旋。

### **5.3 历史安全事件与审计报告分析**

根据现有资料，Hyperion协议自上线以来，**未发生过任何公开报道的重大安全事件或资金损失**。

在安全审计方面，信息披露存在不足。DeFi Llama的页面标注该协议“已审计” 12。第三方平台LBank的资料中提及了“Movebit对Hyperion Launchpad的审计报告”和“ExVul对Hyperion的智能合约审计报告” 48。此外，一个名为Cyberscope的自动化扫描平台给出了71%的“低风险”评分，但此类自动化报告的参考价值有限 49。

关键问题在于，**未能从公开渠道获取并审阅由国际顶级安全公司（如OtterSec, Zellic, Halborn, CertiK等）出具的完整审计报告**。尽管搜索到了这些公司的服务介绍，但没有发现它们针对Hyperion DEX的具体审计公开文件 50。

项目的高规格投资者背景与其审计报告的公开可得性之间存在明显的不匹配。顶级VC通常会强制要求被投项目接受顶级公司的审计。这些报告目前无法被公众轻易获取，这是一个显著的透明度缺陷和潜在风险。投资者应基于以下假设进行决策：尽管鉴于投资者阵容，审计很可能已经完成，但其具体的审计发现、漏洞等级和修复情况是未知的。在这些报告被公开发布并可供独立分析之前，投资的风险等级应被相应提高。

### **5.4 治理与中心化风险**

Hyperion的长期治理目标是通过xRION持有者组成的去中心化自治组织（DAO）来实现 3。然而，在项目发展的初期阶段，协议的控制权很可能集中在核心团队手中，通过多重签名钱包或管理员密钥进行管理。这是一个行业惯例，旨在确保项目在早期能够快速迭代和修复潜在问题。

主要的风险在于，核心团队的匿名性加剧了这种中心化风险。在协议完全去中心化之前，用户资产的安全性在很大程度上依赖于这个匿名团队的善意和能力。

协议未来能否实现真正的去中心化，将取决于xRION的分布情况。团队和投资者合计持有总供应量的28.1% 21。如果他们在代币解锁后选择长期质押以获取xRION，他们将可能在DAO中拥有决定性的投票权。在这种情况下，所谓的“去中心化治理”可能只是名义上的，实际控制权仍然掌握在少数内部人士手中。因此，需要持续关注链上xRION的持仓分布数据，以评估其治理去中心化的实际进展。

## **第六章：社区情绪与近期动态追踪**

### **6.1 社交媒体情绪分析**

通过对Twitter、Discord等社交平台的观察，Hyperion社区当前整体情绪呈现积极乐观的态势。这种积极情绪主要由以下几个因素驱动：

* **强劲的增长数据:** 协议上线后迅速攀升的TVL和交易量，使其成为Aptos生态的明显领导者，这为社区成员带来了极大的信心 15。  
* **顶级机构背书:** OKX Ventures、Aptos基金会和Arthur Hayes等知名机构和个人的投资，让社区相信该项目拥有强大的资源和成功的潜力 36。  
* **代币上线与激励:** 近期的TGE、空投和高APR的质押活动是社区讨论的热点，对财富效应的期待主导了当前的话语氛围 34。

目前，社区正处于项目成功启动后的“蜜月期”，情绪普遍看涨。然而，值得注意的是，当前积极情绪在很大程度上与代币价格和激励活动相关。一个项目社区长期健康的标志，是其讨论能否从“价格预测”和“空投预期”逐步过渡到对“协议改进”和“治理提案”的深度参与。当DAO全面运作后，社区能否从投机者为主转变为由建设者和长期用户主导，将是衡量其可持续性的重要指标。

### **6.2 近期重大新闻与公告**

Hyperion在2025年7月经历了一系列密集的、具有里程碑意义的事件，显示出团队强大的执行能力。

* **代币生成事件 (TGE):** 最核心的事件是RION代币于2025年7月16日正式上线。此次发行创新性地在Binance Alpha平台上采用了联合曲线（Bonding Curve）定价机制，旨在实现更公平的市场化价格发现 4。  
* **交易所上线:** TGE之后，RION迅速登陆了包括KuCoin在内的多家中心化交易所，并伴有交易竞赛等市场推广活动，有效提升了代币的流动性和市场知名度 18。  
* **质押功能启动:** 紧随TGE，协议于7月23日迅速推出了RION原生质押的第一阶段，允许用户锁定RION以获取xRION和相应的收益，实现了代币经济模型的闭环 32。  
* **生态系统合作:** 项目持续深化与Aptos生态内其他协议的合作关系，例如与Moar Market、Kofi Finance和Amnis Finance的集成，这些合作是其战略的关键组成部分 4。

Hyperion的合作与整合战略至关重要。通过成为Amnis Finance的流动性质押代币（amAPT、stAPT）以及生态系统内其他核心资产的主要交易场所，Hyperion将自身深度嵌入到Aptos DeFi的价值网络中。它正在扮演着Aptos生态“纽交所”的角色。这种战略布局意味着，随着整个Aptos DeFi生态的成长，绝大部分的交易活动和价值流动都必须经过Hyperion的智能合约。这使得投资Hyperion不仅是对单个DEX的押注，更是对整个Aptos生态系统增长潜力的“beta”投资。如果Aptos DeFi取得成功，凭借其深度整合的中心地位，Hyperion几乎注定会随之成功。

## **第七章：投资机会与策略深度剖析**

本章旨在为具备不同风险偏好和技术背景的投资者，提供一系列围绕Hyperion生态系统的具体投资与收益策略。

### **7.1 RION代币直接投资价值分析**

直接投资RION代币的核心逻辑，基于当前协议强劲的链上基本面（市场主导地位、高交易量）与其相对较低的初始市值之间存在的价值错配。投资论点认为，随着市场逐渐认识到Hyperion作为快速增长的、由顶级VC支持的Aptos生态系统的核心流动性基础设施的战略地位，RION代币的估值将得到重估。

未来的关键催化剂包括：

1. **订单簿引擎的成功上线:** 这将吸引专业和机构交易者，可能导致交易量和手续费收入的数量级增长。  
2. **Launchpad的成功运营:** 成功的IDO项目将极大提升xRION的吸引力，从而直接驱动对RION的购买和锁定需求。  
3. **Aptos生态的整体爆发:** 任何Aptos生态的利好，如出现爆款应用或用户大规模增长，都将增加对核心交易枢纽Hyperion的需求。

### **7.2 DeFi收益策略：流动性挖矿与质押**

对于寻求在链上产生收益的投资者，Hyperion提供了两种基础策略：

* **RION质押:** 这是最直接、风险相对较低的收益方式。投资者购买RION并将其锁定以换取xRION，从而获得协议手续费分红和代币释放奖励。项目启动初期的APR极高（曾达675.55% 36），虽然会随时间下降，但在早期阶段仍具吸引力。此策略的主要风险是RION代币本身的价格波动。  
* **流动性挖矿 (LP):** 投资者可以为Hyperion上的交易池（如APT-USDC）提供流动性。作为回报，他们可以赚取该交易对产生的部分交易手续费，并通过DRIPs系统获得额外的RION代币奖励 55。有数据显示APT-USDC池的APR曾高达182.6% 55。此策略的核心风险是无常损失（IL），即池中代币相对价格变动带来的账面损失。

### **7.3 高阶收益策略组合**

对于熟悉DeFi操作且风险承受能力较高的投资者，可以利用Hyperion的可组合性构建更复杂的收益策略。

* **杠杆流动性挖矿:** Hyperion与Aptos上的借贷协议（如Aries Markets）深度集成。投资者可以将其LP代币作为抵押品，在借贷协议中借出更多的基础资产（如APT和USDC），然后再次投入流动性池。通过循环操作，可以放大LP头寸，从而获得倍增的收益（交易费和RION奖励）。然而，这也同样放大了风险，包括更高的无常损失风险和被清算的风险。  
* **Delta中性策略:** 该策略旨在剥离市场价格波动风险，纯粹赚取交易费和挖矿奖励。一种常见的操作方式是，在为波动性资产对（如APT-USDC）提供流动性的同时，在中心化交易所上开立等值的APT永续合约空头头寸。这样，无论APT价格上涨或下跌，现货端的损失（或收益）都将被期货端的收益（或损失）大致对冲，投资者主要赚取的是LP手续费和RION奖励。此策略操作复杂，需要对冲成本，且存在基差风险。  
* **流动性质押代币 (LST) 收益叠加:** 与Amnis Finance的合作为收益叠加创造了绝佳机会。投资者可以：  
  1. 在Amnis Finance上质押APT，获得流动性质押代币amAPT，开始赚取约9%的APT原生质押收益 25。  
  2. 将获得的amAPT与APT组成交易对，在Hyperion的amAPT/APT池中提供流动性。  
  3. 通过此操作，投资者可以同时赚取三层收益：APT质押收益、Hyperion的LP交易费以及RION挖矿奖励。这是一种相对稳健的高阶策略。

### **7.4 面向开发者的生态参与机会**

对于具备开发背景的投资者，除了财务投资外，还可以通过技术贡献参与并从Hyperion生态中获利。

* **构建上层应用:** Hyperion的策略金库具有高度可组合性 6。开发者可以利用Hyperion Vaults作为底层资产和收益引擎，构建更复杂的结构化产品、收益聚合器或投资组合管理工具。  
* **成为策略提供者:** Hyperion Vaults平台允许外部的策略提供者部署其自动化的流动性管理策略 34。一个精通量化交易和市场制作的开发者，可以创建自己专有的LP管理策略，并将其部署为公共金库，通过向存入资金的用户收取绩效费来赚取收益。  
* **申请生态系统补助金:** 尽管Hyperion自身的开发者补助金计划尚不明确 56，但Aptos基金会为生态建设者提供了丰富的资助计划 28。开发者可以围绕Hyperion生态申请资助，开发能够增强其功能的公共产品，例如高级链上数据分析面板、精准的无常损失计算器或一站式投资组合跟踪工具。

### **核心表格：投资机会对比分析**

下表对上述所有投资和参与机会进行了系统性总结与对比，以帮助投资者根据自身情况做出决策。

| 策略 (Strategy) | 描述 (Description) | 潜在APR/APY | 核心风险 (Key Risks) | 技术门槛 (Technical Skill) | 适合人群 (Recommended For) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **持有RION代币** | 直接购买并持有RION，博取其长期升值潜力。 | N/A | RION价格波动 | 低 | 价值投资者，看好Aptos生态 |
| **质押RION换取xRION** | 锁定RION以获取治理权、手续费分红和Launchpad资格。 | 中-高 (初期高，后趋于稳定) | RION价格波动，锁仓期流动性丧失 | 低 | 长期持有者，协议治理参与者 |
| **提供流动性 (LP)** | 为APT/USDC等交易池提供流动性，赚取交易费和RION奖励。 | 高 | 无常损失，智能合约风险 | 中 | 积极的DeFi收益农夫 |
| **LST流动性挖矿** | 为amAPT/APT等LST池提供流动性，实现收益叠加。 | 高 | 无常损失，LST脱锚风险，多重合约风险 | 中 | 寻求复合收益的稳健型农夫 |
| **杠杆流动性挖矿** | 通过借贷协议放大LP头寸，追求超额收益。 | 非常高 | 清算风险，放大的无常损失 | 高 | 高风险偏好的资深DeFi用户 |
| **Delta中性策略** | 对冲LP头寸的价格风险，纯赚取费用和奖励。 | 中 | 对冲成本，基差风险，执行复杂 | 非常高 | 专业交易者，量化投资者 |
| **开发策略金库** | 创建并部署自己的LP管理策略，赚取绩效费。 | 可变 (取决于策略表现) | 策略失效风险，智能合约开发风险 | 专家 | 量化开发者，专业做市商 |
| **构建生态工具** | 通过申请Aptos基金会补助金，为Hyperion开发周边工具。 | N/A (收入来自补助金或商业化) | 项目交付风险，商业模式不确定性 | 非常高 | Web3开发者，创业者 |

## **第八章：最终投资评级与结论**

### **8.1 综合优势与劣势总结**

**优势 (Strengths):**

* **市场领导地位:** 已成为Aptos生态系统中交易量和活跃度最高的DEX，具备强大的先发优势和网络效应。  
* **强劲的链上数据:** 自上线以来，TVL、交易量和用户增长迅速，证明了其产品市场契合度。  
* **顶级机构背书:** 获得了OKX Ventures、Aptos Labs、Maelstrom等顶级VC和生态核心力量的战略投资，提供了强大的资源和信誉支持。  
* **优秀的代币经济学:** 采用成熟的veToken模型，有效激励长期持有，并设计了Launchpad等强大的价值捕获机制。  
* **全面的产品矩阵:** 结合CLMM、聚合器和策略金库，满足了从零售到专业用户的多样化需求，并降低了用户参与门槛。  
* **清晰的未来路线图:** 订单簿引擎等规划中的功能，有望进一步扩大其市场和收入来源。

**劣势 (Weaknesses):**

* **团队匿名:** 核心团队未公开身份，降低了问责制，增加了投资者的信任成本。  
* **审计透明度不足:** 缺乏公开可查阅的、由国际顶级安全公司出具的完整审计报告，这是一个重大的安全和透明度风险。  
* **生态系统依赖性:** 项目的长期成功高度依赖于Aptos公链的整体发展，面临平台性风险。  
* **潜在的通胀压力:** 早期较高的代币释放率可能对RION价格造成持续的抛压，其长期价值依赖于“真实收益”的实现。

### **8.2 核心投资论点**

对Hyperion的核心投资论点可以概括为：**投资于一个战略定位清晰、执行力强、并已在快速增长的Layer 1生态中取得主导地位的核心基础设施协议，而其原生代币当前的市场估值尚未完全反映其基本面优势和未来潜力。**

这项投资是**对Aptos DeFi生态系统增长的杠杆化押注**。Hyperion不仅自身表现出色，更受益于Aptos基金会和其战略投资者联盟的强大推动力。其作为生态流动性枢纽的地位，使其能够从生态系统内所有其他协议（如流动性质押、借贷）的增长中获益，形成强大的协同效应。订单簿和Launchpad等未来催化剂，有望进一步解锁其价值。

### **8.3 最终投资评级与建议**

综合以上所有分析，考虑到项目强大的基本面、市场地位、投资者背景以及清晰的增长路径，同时正视其在团队匿名和审计透明度方面的风险，本报告给出以下投资评级：

**投资评级: 建议 (Recommend)**

**具体建议:**

* **对于价值投资者:** RION代币当前市值与其链上表现存在显著差距，具备长期投资潜力。建议在充分认知团队匿名和审计信息不透明的风险前提下，可考虑分批建仓。投资决策应密切关注**未来顶级审计报告的公开发布**，这应被视为一个关键的风险解除信号。  
* **对于DeFi收益寻求者:** 质押RION和参与主流交易对的流动性挖矿，是当前获取较高收益的有效途径。尤其是利用Amnis Finance的LST进行收益叠加的策略，在风险可控的前提下提供了极具吸引力的复合回报。  
* **对于专业投资者和开发者:** 杠杆挖矿和Delta中性策略提供了获取超额回报的可能性，但要求极高的专业技能和风险管理能力。而对于具备开发能力的投资者，通过为Hyperion构建工具或策略金库来参与生态建设，可能是在财务投资之外的另一条高价值路径。

**最终结论:** Hyperion是Aptos生态系统中毋庸置疑的领导者，一个设计精良且执行有力的DeFi协议。尽管存在透明度方面的瑕疵，但其强大的战略地位和增长势头使其成为一个不容忽视的投资标的。投资者应根据自身的风险偏好和专业能力，选择最适合的参与方式，并持续跟踪其路线图进展和安全状况的更新。

## **附录：引用与数据来源**

1

#### **引用的著作**

1. Hyperion \- Aptos Ecosystem Projects, 访问时间为 七月 27, 2025， [https://aptosfoundation.org/ecosystem/project/hyperion](https://aptosfoundation.org/ecosystem/project/hyperion)  
2. Hyperion Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/Hyperion?k=MTcxNTM%3D](https://www.rootdata.com/Projects/detail/Hyperion?k=MTcxNTM%3D)  
3. What Is Hyperion Decentralized Exchange(DEX) on Aptos Blockchain? \- BingX Academy, 访问时间为 七月 27, 2025， [https://bingx.com/en/learn/what-is-hyperion-dex-on-aptos-blockchain](https://bingx.com/en/learn/what-is-hyperion-dex-on-aptos-blockchain)  
4. Next-Generation DEX Hyperion Launches TGE \- DL News, 访问时间为 七月 27, 2025， [https://www.dlnews.com/research/external/next-generation-dex-hyperion-launches-tge/](https://www.dlnews.com/research/external/next-generation-dex-hyperion-launches-tge/)  
5. Ecosystem spotlight: Hyperion \- General \- Aptos Forum, 访问时间为 七月 27, 2025， [https://forum.aptosfoundation.org/t/ecosystem-spotlight-hyperion/16658](https://forum.aptosfoundation.org/t/ecosystem-spotlight-hyperion/16658)  
6. Ecosystem Spotlight: Hyperion – Powering High-Performance DeFi on Aptos, 访问时间为 七月 27, 2025， [https://aptosfoundation.org/currents/ecosystem-spotlight-hyperion-powering-high-performance-defi-on-aptos](https://aptosfoundation.org/currents/ecosystem-spotlight-hyperion-powering-high-performance-defi-on-aptos)  
7. Overview of Hyperion: What is the background of Binance's new gameplay first project?, 访问时间为 七月 27, 2025， [https://www.chaincatcher.com/en/article/2191735](https://www.chaincatcher.com/en/article/2191735)  
8. Hyperion price today, RION to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/hyperion-xyz/](https://coinmarketcap.com/currencies/hyperion-xyz/)  
9. Next-Generation DEX Hyperion Launches TGE \- Chainwire, 访问时间为 七月 27, 2025， [https://chainwire.org/2025/07/16/next-generation-dex-hyperion-launches-tge](https://chainwire.org/2025/07/16/next-generation-dex-hyperion-launches-tge)  
10. Next-Generation DEX Hyperion Launches TGE By Chainwire \- Investing.com, 访问时间为 七月 27, 2025， [https://www.investing.com/news/cryptocurrency-news/nextgeneration-dex-hyperion-launches-tge-4137056](https://www.investing.com/news/cryptocurrency-news/nextgeneration-dex-hyperion-launches-tge-4137056)  
11. Hyperion Closes Funding Round \- FinSMEs, 访问时间为 七月 27, 2025， [https://www.finsmes.com/2025/06/hyperion-closes-funding-round.html](https://www.finsmes.com/2025/06/hyperion-closes-funding-round.html)  
12. Hyperion \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/hyperion?denomination=USD](https://defillama.com/protocol/hyperion?denomination=USD)  
13. $RION In just a few months, Hyperion has quickly become the | 打伞的蘑菇 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/27024767589089](https://www.binance.com/en/square/post/27024767589089)  
14. $RION Project Data: Hyperion is a hybrid decentralized exch | 打伞的蘑菇 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/27028267967201](https://www.binance.com/en/square/post/27028267967201)  
15. Today's New Listing \- Rion Coin What is it about? Token of t | 胡大-项目投研家 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-IN/square/post/27005769415850](https://www.binance.com/en-IN/square/post/27005769415850)  
16. Hyperion Price Today | RION Price Chart & Market Cap \- Phemex, 访问时间为 七月 27, 2025， [https://phemex.com/price/hyperion-2](https://phemex.com/price/hyperion-2)  
17. What is Hyperion (RION)| How To Get & Use Hyperion \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/hyperion-xyz/what-is](https://www.bitget.com/price/hyperion-xyz/what-is)  
18. Hyperion (RION) Price, Live Chart and Data \- KuCoin, 访问时间为 七月 27, 2025， [https://www.kucoin.com/price/RION](https://www.kucoin.com/price/RION)  
19. Hyperion Price | RION Price, Charts \- Crypto.com, 访问时间为 七月 27, 2025， [https://crypto.com/price/hyperion-xyz](https://crypto.com/price/hyperion-xyz)  
20. Hyperion Price Today | RION Price Chart And Index Real Time \- RevenueBOT, 访问时间为 七月 27, 2025， [https://revenuebot.io/real-time-crypto-prices/coin/hyperion-2-RUB-price-today/](https://revenuebot.io/real-time-crypto-prices/coin/hyperion-2-RUB-price-today/)  
21. Hyperion reveals RION tokenomics, allocates 5% to airdrop \- CoinNess, 访问时间为 七月 27, 2025， [https://coinness.com/en/news/75774](https://coinness.com/en/news/75774)  
22. Thala Labs \- Decentralized. Scalable. Liquid, 访问时间为 七月 27, 2025， [https://www.thala.fi/](https://www.thala.fi/)  
23. Thala Nov 15 (Post Mortem). Overview | by Thala Labs \- Medium, 访问时间为 七月 27, 2025， [https://thalalabs.medium.com/thala-nov-15-post-mortem-5aea82bb3916](https://thalalabs.medium.com/thala-nov-15-post-mortem-5aea82bb3916)  
24. Breaking Down the Thala DeFi Hack & Move's Decompilation Risks \- QuillAudits, 访问时间为 七月 27, 2025， [https://www.quillaudits.com/blog/hack-analysis/thala-defi-hack-analysis](https://www.quillaudits.com/blog/hack-analysis/thala-defi-hack-analysis)  
25. Everything you need to know about Amnis Finance, \- General \- Aptos Forum, 访问时间为 七月 27, 2025， [https://forum.aptosfoundation.org/t/everything-you-need-to-know-about-amnis-finance/15704](https://forum.aptosfoundation.org/t/everything-you-need-to-know-about-amnis-finance/15704)  
26. Amnis Audit Report \- MoveBit, 访问时间为 七月 27, 2025， [https://movebit.xyz/reports/Amnis-Final-Audit-Report.pdf](https://movebit.xyz/reports/Amnis-Final-Audit-Report.pdf)  
27. Aptos Discloses Five DeFi Projects Selected for the LFM Program｜Gate Research, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/aptos-discloses-five-de-fi-projects-selected-for-the-lfm-program-gate-research/9027](https://www.gate.com/learn/articles/aptos-discloses-five-de-fi-projects-selected-for-the-lfm-program-gate-research/9027)  
28. Aptos LFM \- The Premier TGE Track for Aptos Projects, 访问时间为 七月 27, 2025， [https://aptosfoundation.org/lfm](https://aptosfoundation.org/lfm)  
29. Hyperion Announces RION Tokenomics: Airdrops Account for 5%, Liquidity Incentives Account for 30% | Odaily星球日报 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-IN/square/post/27013727256913](https://www.binance.com/en-IN/square/post/27013727256913)  
30. Hyperion Aptos DEX & $RION Token Analysis | Rating, Review & Stats, 访问时间为 七月 27, 2025， [https://coinlaunch.space/projects/hyperion/](https://coinlaunch.space/projects/hyperion/)  
31. Hyperion Introduces Dual-Token System for Aptos DeFi Ecosystem \- AInvest, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/hyperion-introduces-dual-token-system-aptos-defi-ecosystem-2507/](https://www.ainvest.com/news/hyperion-introduces-dual-token-system-aptos-defi-ecosystem-2507/)  
32. Hyperion Announces the Official Launch of RION Utility, Initiates Phase One of Native Staking Mechanism RION Staking | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604877616](https://www.bitget.com/news/detail/12560604877616)  
33. Hyperion Announces the Official Unveiling of RION Utility, Launching the Native Staking Mechanism RION Staking Phase One | Odaily星球日报 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/27335362952306](https://www.binance.com/en/square/post/27335362952306)  
34. Hyperion Genesis Airdrop Guide: How to Claim Your RION Tokens After July 13 \- BingX, 访问时间为 七月 27, 2025， [https://bingx.com/en/learn/hyperion-airdrop-guide-how-to-claim-rion-tokens](https://bingx.com/en/learn/hyperion-airdrop-guide-how-to-claim-rion-tokens)  
35. Hyperion's Rise: Redefining Aptos DEX Liquidity and Ecosystem Growth | 欧易 \- OKX, 访问时间为 七月 27, 2025， [https://www.okx.com/zh-hans/learn/hyperion-aptos-dex-liquidity](https://www.okx.com/zh-hans/learn/hyperion-aptos-dex-liquidity)  
36. Can Hyperion still be played? Join with a focus on fundament | 艾叔 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/square/post/27368089707970](https://www.binance.com/square/post/27368089707970)  
37. Claire Zhao \- Fast Company, 访问时间为 七月 27, 2025， [https://www.fastcompany.com/user/czhao](https://www.fastcompany.com/user/czhao)  
38. Find and explore academic papers | Connected ... \- Connected Papers, 访问时间为 七月 27, 2025， [https://www.connectedpapers.com/main/427a1a7c7b992dbf7f28f7d1bf0f9ffd0e96869f](https://www.connectedpapers.com/main/427a1a7c7b992dbf7f28f7d1bf0f9ffd0e96869f)  
39. 访问时间为 一月 1, 1970， [https://hyperion.xyz/](https://hyperion.xyz/)  
40. Hyperion (RION) \- All information about Hyperion ICO (Token Sale) \- ICO Drops, 访问时间为 七月 27, 2025， [https://icodrops.com/hyperion/](https://icodrops.com/hyperion/)  
41. Understanding Hyperion: The Unified Liquidity Engine and New Infrastructure for On-chain Finance on Aptos | 深潮 TechFlow on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/26795339921858](https://www.binance.com/en/square/post/26795339921858)  
42. OKX Ventures investment portfolio \- PitchBook, 访问时间为 七月 27, 2025， [https://pitchbook.com/profiles/investor/466147-81](https://pitchbook.com/profiles/investor/466147-81)  
43. Mirana Ventures, 访问时间为 七月 27, 2025， [https://www.mirana.xyz/](https://www.mirana.xyz/)  
44. MEXC Ventures, Foresight Ventures, and Mirana Ventures Establish Fund for Aptos Ecosystem Expansion \- GlobeNewswire, 访问时间为 七月 27, 2025， [https://www.globenewswire.com/news-release/2024/09/19/2949451/0/en/MEXC-Ventures-Foresight-Ventures-and-Mirana-Ventures-Establish-Fund-for-Aptos-Ecosystem-Expansion.html](https://www.globenewswire.com/news-release/2024/09/19/2949451/0/en/MEXC-Ventures-Foresight-Ventures-and-Mirana-Ventures-Establish-Fund-for-Aptos-Ecosystem-Expansion.html)  
45. 访问时间为 一月 1, 1970， [https://github.com/Hyperionxyz/hyperfluid-interface](https://github.com/Hyperionxyz/hyperfluid-interface)  
46. Hyperion Joins Aptos Move Security Library Co-Build Initiative \- AInvest, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/hyperion-joins-aptos-move-security-library-build-initiative-2506/](https://www.ainvest.com/news/hyperion-joins-aptos-move-security-library-build-initiative-2506/)  
47. Impermanent loss calculator: Examples & how to avoid It \- Finder, 访问时间为 七月 27, 2025， [https://www.finder.com.au/cryptocurrency/defi/impermanent-loss](https://www.finder.com.au/cryptocurrency/defi/impermanent-loss)  
48. Hyperion DEX (RION) \- قیمت، تاریخ صدور و نحوه شرکت | LBank, 访问时间为 七月 27, 2025， [https://www.lbank.com/fa/ico-calendar/hyperion-dex-363](https://www.lbank.com/fa/ico-calendar/hyperion-dex-363)  
49. Hyperion Smart Contract Audit | Cyberscope, 访问时间为 七月 27, 2025， [https://www.cyberscope.io/audits/coin-hyperion-xyz](https://www.cyberscope.io/audits/coin-hyperion-xyz)  
50. Circle Gateway Audit, 访问时间为 七月 27, 2025， [https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/Circle%20Gateway%20Audit%20-%20OtterSec%20-%207-21-2025.pdf](https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/Circle%20Gateway%20Audit%20-%20OtterSec%20-%207-21-2025.pdf)  
51. Zellic, 访问时间为 七月 27, 2025， [https://www.zellic.io/](https://www.zellic.io/)  
52. Liquid Unstaker Audit | The Vault \- Halborn, 访问时间为 七月 27, 2025， [https://www.halborn.com/audits/the-vault/the-vault---smart-contract-assessment-50e3ac](https://www.halborn.com/audits/the-vault/the-vault---smart-contract-assessment-50e3ac)  
53. Smart Contract Audit \- CertiK, 访问时间为 七月 27, 2025， [https://www.certik.com/products/smart-contract-audit](https://www.certik.com/products/smart-contract-audit)  
54. KuCoin Launches Hyperion (RION) Listing Campaign with 20,000 USDT Prize Pool, 访问时间为 七月 27, 2025， [https://www.kucoin.com/news/flash/kucoin-launches-hyperion-rion-listing-campaign-with-20-000-usdt-prize-pool](https://www.kucoin.com/news/flash/kucoin-launches-hyperion-rion-listing-campaign-with-20-000-usdt-prize-pool)  
55. Aptos Ecosystem Guide, Part 2, 访问时间为 七月 27, 2025， [https://xangle.io/en/research/detail/2268](https://xangle.io/en/research/detail/2268)  
56. Grant Programs – The Hyperion Foundation, 访问时间为 七月 27, 2025， [https://hyperionfoundation.org/grant-programs/](https://hyperionfoundation.org/grant-programs/)  
57. Flow Developer Grants \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/onflow/developer-grants](https://github.com/onflow/developer-grants)  
58. HyperionDev Merit Scholarship, 访问时间为 七月 27, 2025， [https://www.hyperiondev.com/scholarships/merit/](https://www.hyperiondev.com/scholarships/merit/)  
59. Hyperion, 访问时间为 七月 27, 2025， [https://www.hyperionlabs.xyz/](https://www.hyperionlabs.xyz/)  
60. Master Hyperion | Card Details | Yu-Gi-Oh\! Neuron(TRADING CARD GAME CARD DATABASE), 访问时间为 七月 27, 2025， [https://www.db.yugioh-card.com/yugiohdb/card\_search.action?ope=2\&cid=9287\&request\_locale=en](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=9287&request_locale=en)  
61. Integrations \- Hyperion, 访问时间为 七月 27, 2025， [https://www.hyperionlabs.xyz/integrations](https://www.hyperionlabs.xyz/integrations)  
62. Download Whitepapers \- Consult Hyperion, 访问时间为 七月 27, 2025， [https://chyp.com/insights-2/whitepapers/](https://chyp.com/insights-2/whitepapers/)  
63. Coin/Token Offerings: When to Recognize Revenue on your Financial Statements, 访问时间为 七月 27, 2025， [https://www.hyperionlabs.xyz/blog/coin-token-offerings-when-to-recognize-revenue-on-your-financial-statements](https://www.hyperionlabs.xyz/blog/coin-token-offerings-when-to-recognize-revenue-on-your-financial-statements)  
64. Magnitude | Enterprise Data Analytics & Planning Software \- insightsoftware, 访问时间为 七月 27, 2025， [https://insightsoftware.com/magnitude/](https://insightsoftware.com/magnitude/)  
65. Hyperion Price USD, RION Price Live Charts, Market Cap & News, 访问时间为 七月 27, 2025， [https://www.bitget.site/price/hyperion-xyz](https://www.bitget.site/price/hyperion-xyz)  
66. Terms and conditions \- Hyperion, 访问时间为 七月 27, 2025， [https://www.hyperionlabs.xyz/terms-and-conditions](https://www.hyperionlabs.xyz/terms-and-conditions)  
67. Hyperion documentation · Hyperion documentation, 访问时间为 七月 27, 2025， [https://docs.hyperion-project.org/](https://docs.hyperion-project.org/)  
68. Hyperion Manual, 访问时间为 七月 27, 2025， [https://media.readthedocs.org/pdf/hyperion/0.9.1/hyperion.pdf](https://media.readthedocs.org/pdf/hyperion/0.9.1/hyperion.pdf)  
69. Manual Installation \- Hyperion Documentation, 访问时间为 七月 27, 2025， [https://hyperion.docs.eosrio.io/providers/install/manual\_install/](https://hyperion.docs.eosrio.io/providers/install/manual_install/)  
70. Hyperion Financial Reporting Web Studio User's Guide, Release 11.2.x \- Oracle Help Center, 访问时间为 七月 27, 2025， [https://docs.oracle.com/en/applications/enterprise-performance-management/11.2/hfwcc/GUID-E9BD8BA6-1688-43F6-90CB-30F24DE2F79A-112.pdf](https://docs.oracle.com/en/applications/enterprise-performance-management/11.2/hfwcc/GUID-E9BD8BA6-1688-43F6-90CB-30F24DE2F79A-112.pdf)  
71. Command Line Interface \- Hyperion documentation, 访问时间为 七月 27, 2025， [https://docs.hyperion-project.org/user/advanced/CLI.html](https://docs.hyperion-project.org/user/advanced/CLI.html)  
72. Hyperion Project \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/hyperion-project](https://github.com/hyperion-project)  
73. VIS4ROB-lab/hyperion: Symbolic Continuous-Time Gaussian Belief Propagation Framework with Ceres Interoperability \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/VIS4ROB-lab/hyperion](https://github.com/VIS4ROB-lab/hyperion)  
74. Repositories \- Hyperion Project \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/orgs/hyperion-project/repositories](https://github.com/orgs/hyperion-project/repositories)  
75. notomorrow/hyperion-engine: 3D game engine written in C++. Includes features like PBR, realtime global illumination, and more \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/notomorrow/hyperion-engine](https://github.com/notomorrow/hyperion-engine)  
76. hercules-390/hyperion \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/hercules-390/hyperion](https://github.com/hercules-390/hyperion)  
77. hyperlane-xyz \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/hyperlane-xyz](https://github.com/hyperlane-xyz)  
78. Hyperion Price, HYN Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/hyperion](https://www.coinbase.com/price/hyperion)  
79. Hyperion \- HYN Price, Charts \- Crypto.com, 访问时间为 七月 27, 2025， [https://crypto.com/price/hyperion](https://crypto.com/price/hyperion)  
80. Hyperion DeFi Adds $5 Million in HYPE to its Treasury Holdings \- Stock Titan, 访问时间为 七月 27, 2025， [https://www.stocktitan.net/news/HYPD/hyperion-de-fi-adds-5-million-in-hype-to-its-treasury-ipmjtqzgsjym.html](https://www.stocktitan.net/news/HYPD/hyperion-de-fi-adds-5-million-in-hype-to-its-treasury-ipmjtqzgsjym.html)  
81. Hyperion price today, HYN to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/hyperion/](https://coinmarketcap.com/currencies/hyperion/)  
82. Hyperion DeFi Inc Stock Price Today | NASDAQ: HYPD Live \- Investing.com, 访问时间为 七月 27, 2025， [https://www.investing.com/equities/eyenovia-inc](https://www.investing.com/equities/eyenovia-inc)  
83. www.hyperionlabs.xyz, 访问时间为 七月 27, 2025， [https://www.hyperionlabs.xyz/\#:\~:text=Hyperion%20is%20an%20accounting%20solution,transfer%2C%20deposit%2C%20and%20withdrawal.](https://www.hyperionlabs.xyz/#:~:text=Hyperion%20is%20an%20accounting%20solution,transfer%2C%20deposit%2C%20and%20withdrawal.)  
84. Hyperion: Project Guide | Latest Updates, Presale & Airdrop, 访问时间为 七月 27, 2025， [https://web3.bitget.com/en/dapp/hyperion-28072](https://web3.bitget.com/en/dapp/hyperion-28072)  
85. Hyperion (Financial Services) 2025 Company Profile: Valuation, Funding & Investors, 访问时间为 七月 27, 2025， [https://pitchbook.com/profiles/company/844607-62](https://pitchbook.com/profiles/company/844607-62)  
86. Hyperion's RION Token IDO Achieves $20 Million FDV in One Minute \- AInvest, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/hyperion-rion-token-ido-achieves-20-million-fdv-minute-2507/](https://www.ainvest.com/news/hyperion-rion-token-ido-achieves-20-million-fdv-minute-2507/)  
87. Requesting Cloud EPM Roadmap Information \- Operations Guide, 访问时间为 七月 27, 2025， [https://docs.oracle.com/en/cloud/saas/enterprise-performance-management-common/tsepm/sop\_request\_roadmap\_info.html](https://docs.oracle.com/en/cloud/saas/enterprise-performance-management-common/tsepm/sop_request_roadmap_info.html)  
88. Hyperion-EPM-Roadmap-On-premise-and-Cloud-Andreea-Vasiliu.pdf \- AMOSCA, 访问时间为 七月 27, 2025， [https://www.amosca.co.uk/wp-content/uploads/2019/02/Hyperion-EPM-Roadmap-On-premise-and-Cloud-Andreea-Vasiliu.pdf](https://www.amosca.co.uk/wp-content/uploads/2019/02/Hyperion-EPM-Roadmap-On-premise-and-Cloud-Andreea-Vasiliu.pdf)  
89. Hyperion Support \- Oracle, 访问时间为 七月 27, 2025， [https://www.oracle.com/support/premier/software/hyperion/](https://www.oracle.com/support/premier/software/hyperion/)  
90. Issues · Hyperionxyz/audits \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Hyperfluid/audits/issues](https://github.com/Hyperfluid/audits/issues)  
91. kartikk221/hyper-express: High performance Node.js webserver with a simple-to-use API powered by uWebsockets.js under the hood. \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/kartikk221/hyper-express](https://github.com/kartikk221/hyper-express)  
92. Hyperion Price, RION Price, Live Charts, and Marketcap \- Coinbase Italy, 访问时间为 七月 27, 2025， [https://www.coinbase.com/en-it/price/hyperion-xyz](https://www.coinbase.com/en-it/price/hyperion-xyz)  
93. Realio Network price today, RIO to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/realio-network/](https://coinmarketcap.com/currencies/realio-network/)  
94. Hyperion Price (RION), Market Cap, Price Today & Chart History \- Blockworks, 访问时间为 七月 27, 2025， [https://blockworks.co/price/rion](https://blockworks.co/price/rion)  
95. Current Hyperion (RION) Price in USD | Live RION to USD Conversion \- Altrady, 访问时间为 七月 27, 2025， [https://www.altrady.com/cryptocurrencies/rion-price-usd](https://www.altrady.com/cryptocurrencies/rion-price-usd)  
96. Hyperion (RION) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 七月 27, 2025， [https://www.forbes.com/digital-assets/assets/hyperion-rion-2/](https://www.forbes.com/digital-assets/assets/hyperion-rion-2/)  
97. CURATEDWEALTH ON CRYPTO's Profile | Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-AE/square/profile/CURATEDWEALTH](https://www.binance.com/en-AE/square/profile/CURATEDWEALTH)  
98. Token Terminal | Fundamentals for crypto, 访问时间为 七月 27, 2025， [https://tokenterminal.com/](https://tokenterminal.com/)  
99. What is Hyperion (RION)? The first project with the new TGE mechanism from Binance Wallet, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/27049018322202](https://www.binance.com/en/square/post/27049018322202)  
100. Hyperion RION Tokenomics Revealed: 5% Airdrop Confirmed | Crypto News Terminal na Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/cs/square/post/27060041814697](https://www.binance.com/cs/square/post/27060041814697)  
101. Dashboard \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer](https://tokenterminal.com/explorer)  
102. Hyperion Documentation, 访问时间为 七月 27, 2025， [https://hyperion.docs.eosrio.io/](https://hyperion.docs.eosrio.io/)  
103. Hyperion Auditing, 访问时间为 七月 27, 2025， [https://hyperion67.rssing.com/chan-15407727/all\_p5.html](https://hyperion67.rssing.com/chan-15407727/all_p5.html)  
104. SECURITY BEST PRACTICES FOR HYPERION \- Caresoft Inc., 访问时间为 七月 27, 2025， [https://www.staging.caresoftinc.com/white-paper/security-best-practices-for-hyperion/](https://www.staging.caresoftinc.com/white-paper/security-best-practices-for-hyperion/)  
105. Auditing Security Activities and Lifecycle Management Artifacts \- Oracle Help Center, 访问时间为 七月 27, 2025， [https://docs.oracle.com/en/applications/enterprise-performance-management/11.2/epmsa/cas\_security\_audit.html](https://docs.oracle.com/en/applications/enterprise-performance-management/11.2/epmsa/cas_security_audit.html)  
106. What is Hyperion? How Is It Changing DeFi on Aptos? \- BitKan.com, 访问时间为 七月 27, 2025， [https://bitkan.com/learn/what-is-hyperion-how-is-it-changing-defi-on-aptos-54561](https://bitkan.com/learn/what-is-hyperion-how-is-it-changing-defi-on-aptos-54561)  
107. Brooks Hyperion 2 GTS First Run Review : r/RunningShoeGeeks \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/RunningShoeGeeks/comments/1j1v31b/brooks\_hyperion\_2\_gts\_first\_run\_review/](https://www.reddit.com/r/RunningShoeGeeks/comments/1j1v31b/brooks_hyperion_2_gts_first_run_review/)  
108. Is Hyperion Worth it in 2024? \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=PWnkHiGvl0U](https://www.youtube.com/watch?v=PWnkHiGvl0U)  
109. Review : r/Hyperion \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/Hyperion/comments/nys17b/hyperion\_review/](https://www.reddit.com/r/Hyperion/comments/nys17b/hyperion_review/)  
110. Generating Audit Reports \- Oracle Help Center, 访问时间为 七月 27, 2025， [https://docs.oracle.com/en/applications/enterprise-performance-management/11.2/epmsa/mig\_audit\_report.html](https://docs.oracle.com/en/applications/enterprise-performance-management/11.2/epmsa/mig_audit_report.html)  
111. Omniscia \- Blockchain Security Audit Reports, 访问时间为 七月 27, 2025， [https://etherbounty.io/reports.html](https://etherbounty.io/reports.html)  
112. Security Audits \- OpenZeppelin, 访问时间为 七月 27, 2025， [https://www.openzeppelin.com/security-audits](https://www.openzeppelin.com/security-audits)  
113. Aptos Smart Contract Security Audit \- BlockApex, 访问时间为 七月 27, 2025， [https://blockapex.io/aptos-smart-contract-audit/](https://blockapex.io/aptos-smart-contract-audit/)  
114. MoveBit \- Aptos Ecosystem Projects, 访问时间为 七月 27, 2025， [https://aptosfoundation.org/ecosystem/project/movebit](https://aptosfoundation.org/ecosystem/project/movebit)  
115. Aptos Ecosystem Projects, 访问时间为 七月 27, 2025， [https://aptosfoundation.org/ecosystem/projects](https://aptosfoundation.org/ecosystem/projects)  
116. kHYPE — The Hyperliquid LST. By: Keegan Selby, GP at 4RC \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@keeganrayselby/khype-the-hyperliquid-lst-61f349ef5dd0](https://medium.com/@keeganrayselby/khype-the-hyperliquid-lst-61f349ef5dd0)  
117. What we Audit \- OtterSec, 访问时间为 七月 27, 2025， [https://osec.io/services/](https://osec.io/services/)  
118. Our Team \- OtterSec, 访问时间为 七月 27, 2025， [https://osec.io/team/](https://osec.io/team/)  
119. Zellic \- Audit Reports, 访问时间为 七月 27, 2025， [https://reports.zellic.io/publications/oracle](https://reports.zellic.io/publications/oracle)  
120. Bitcoin Staking Audit | BitHive | Halborn Audit Reports, 访问时间为 七月 27, 2025， [https://www.halborn.com/audits/bithive/bitcoin-staking](https://www.halborn.com/audits/bithive/bitcoin-staking)  
121. WeightedLiquidityPool Audit | Dexodus | Halborn Audit Reports, 访问时间为 七月 27, 2025， [https://www.halborn.com/audits/dexodus/weightedliquiditypool](https://www.halborn.com/audits/dexodus/weightedliquiditypool)  
122. Cosmos Module Audit | Elys Network \- Halborn, 访问时间为 七月 27, 2025， [https://www.halborn.com/audits/elys-network/cosmos-module](https://www.halborn.com/audits/elys-network/cosmos-module)  
123. CertiK: Largest Blockchain Security Auditor, 访问时间为 七月 27, 2025， [https://www.certik.com/](https://www.certik.com/)  
124. Security audit for the Aptos ecosystem \- CertiK, 访问时间为 七月 27, 2025， [https://www.certik.com/ecosystems/aptos](https://www.certik.com/ecosystems/aptos)  
125. How We Audit: A Comprehensive Guide to CertiK's Auditing Methodology, 访问时间为 七月 27, 2025， [https://www.certik.com/resources/blog/how-we-audit-a-comprehensive-guide-to-certiks-auditing-methodology](https://www.certik.com/resources/blog/how-we-audit-a-comprehensive-guide-to-certiks-auditing-methodology)  
126. Hyperion \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/hyperion?tvl=true\&dexVolume=true\&groupBy=cumulative](https://defillama.com/protocol/hyperion?tvl=true&dexVolume=true&groupBy=cumulative)  
127. Hyperion Exchange Volume \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/perps/hyperion-exchange](https://defillama.com/perps/hyperion-exchange)  
128. Aptos DeFi platform Hyperion unveils new tokenomics model with dual-token design, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/aptos-defi-platform-hyperion-unveils-tokenomics-model-dual-token-design-2507/](https://www.ainvest.com/news/aptos-defi-platform-hyperion-unveils-tokenomics-model-dual-token-design-2507/)  
129. Hyperion Token Price, Charts & Market Insights | Your Crypto Hub \- CoinStats, 访问时间为 七月 27, 2025， [https://coinstats.app/coins/0xc0c240c870606a5cb3150795e2d0dfff9f1f7456\_binance\_smart/](https://coinstats.app/coins/0xc0c240c870606a5cb3150795e2d0dfff9f1f7456_binance_smart/)  
130. Hyperion Price Today | RION Price Chart And Index Real Time \- RevenueBOT, 访问时间为 七月 27, 2025， [https://revenuebot.io/real-time-crypto-prices/coin/hyperion-2-ETH-price-today/](https://revenuebot.io/real-time-crypto-prices/coin/hyperion-2-ETH-price-today/)  
131. Bitget Wallet and Hyperion DEX Launch $40000 Trading Event on Aptos \- GlobeNewswire, 访问时间为 七月 27, 2025， [https://www.globenewswire.com/news-release/2025/06/03/3092848/0/en/Bitget-Wallet-and-Hyperion-DEX-Launch-40-000-Trading-Event-on-Aptos.html?utm\_content=log4j&%3Futm\_medium=referral&%3F%3F%3F%3F%3F%3F%3F%3F%3Futm\_source=di\_framtidsmedia&%3F%3F%3Futm\_source=di\_framtidsmedia](https://www.globenewswire.com/news-release/2025/06/03/3092848/0/en/Bitget-Wallet-and-Hyperion-DEX-Launch-40-000-Trading-Event-on-Aptos.html?utm_content=log4j&?utm_medium=referral&?????????utm_source=di_framtidsmedia&???utm_source=di_framtidsmedia)  
132. The Journey Back To Where You Are: Homer's Odyssey as Spiritual Quest \- The Center for Hellenic Studies, 访问时间为 七月 27, 2025， [https://chs.harvard.edu/wp-content/uploads/2020/07/The-Journey-Back-To-Where-You-Are.pdf](https://chs.harvard.edu/wp-content/uploads/2020/07/The-Journey-Back-To-Where-You-Are.pdf)  
133. The lived experience of psychosis: a bottom‐up review co‐written by experts by experience and academics \- PubMed Central, 访问时间为 七月 27, 2025， [https://pmc.ncbi.nlm.nih.gov/articles/PMC9077608/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9077608/)  
134. Educating the Whole Child: Improving School Climate to Support Student Success \- Learning Policy Institute, 访问时间为 七月 27, 2025， [https://learningpolicyinstitute.org/sites/default/files/product-files/Educating\_Whole\_Child\_REPORT.pdf](https://learningpolicyinstitute.org/sites/default/files/product-files/Educating_Whole_Child_REPORT.pdf)  
135. Treehouse Labs | Building Confidence in Digital Assets, 访问时间为 七月 27, 2025， [https://treehouselabs.xyz/](https://treehouselabs.xyz/)  
136. Mirana Ventures investment portfolio | PitchBook, 访问时间为 七月 27, 2025， [https://pitchbook.com/profiles/investor/498150-73](https://pitchbook.com/profiles/investor/498150-73)  
137. Hyperlane Bug Bounties \- Immunefi, 访问时间为 七月 27, 2025， [https://immunefi.com/bug-bounty/hyperlane/](https://immunefi.com/bug-bounty/hyperlane/)  
138. Why Meta's AI Titan Clusters Are a Game-Changer for Broadcom \- TradingView, 访问时间为 七月 27, 2025， [https://www.tradingview.com/news/marketbeat:1109072ad094b:0-why-meta-s-ai-titan-clusters-are-a-game-changer-for-broadcom/](https://www.tradingview.com/news/marketbeat:1109072ad094b:0-why-meta-s-ai-titan-clusters-are-a-game-changer-for-broadcom/)  
139. Bug bounty program \- Hyperliquid Docs \- GitBook, 访问时间为 七月 27, 2025， [https://hyperliquid.gitbook.io/hyperliquid-docs/bug-bounty-program](https://hyperliquid.gitbook.io/hyperliquid-docs/bug-bounty-program)  
140. The Origin and Evolution of Amnis Finance (AMI) \- MEXC Exchange, 访问时间为 七月 27, 2025， [https://www.mexc.com/en-TR/learn/article/the-origin-and-evolution-of-amnis-finance-ami/1](https://www.mexc.com/en-TR/learn/article/the-origin-and-evolution-of-amnis-finance-ami/1)  
141. Amnis Finance \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/amnis-finance?tvl=false\&fees=true\&events=false\&groupBy=cumulative](https://defillama.com/protocol/amnis-finance?tvl=false&fees=true&events=false&groupBy=cumulative)  
142. Impermanent Loss Calculator \- Angle Protocol, 访问时间为 七月 27, 2025， [https://www.angle.money/labs-projects/portfolio-simulation](https://www.angle.money/labs-projects/portfolio-simulation)  
143. Impermanent Loss and APY Calculator Crypto \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/impermanent-loss-calculator](https://www.coingecko.com/en/impermanent-loss-calculator)  
144. Hyperion Price USD, RION Price Live Charts, Market Cap & News \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/hyperion-xyz](https://www.bitget.com/price/hyperion-xyz)  
145. Twitter Emotion Classification \- Kaggle, 访问时间为 七月 27, 2025， [https://www.kaggle.com/code/shtrausslearning/twitter-emotion-classification](https://www.kaggle.com/code/shtrausslearning/twitter-emotion-classification)  
146. Twitter Sentiment.ipynb \- Colab, 访问时间为 七月 27, 2025， [https://colab.research.google.com/github/roshank1605A04/Twitter-Sentiment-Analysis/blob/master/Twitter\_Sentiment.ipynb](https://colab.research.google.com/github/roshank1605A04/Twitter-Sentiment-Analysis/blob/master/Twitter_Sentiment.ipynb)  
147. Tokenomics \- Ethena Overview, 访问时间为 七月 27, 2025， [https://docs.ethena.fi/ena/tokenomics](https://docs.ethena.fi/ena/tokenomics)  
148. Thala (THL) | Tokenomics, Token Unlocks & Supply Overview, 访问时间为 七月 27, 2025， [https://tokenomist.ai/thala/fundraising](https://tokenomist.ai/thala/fundraising)  
149. Aptos price today, APT to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/aptos/](https://coinmarketcap.com/currencies/aptos/)  
150. Amnis Finance price today, AMI to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/amnis-finance/](https://coinmarketcap.com/currencies/amnis-finance/)  
151. AMI(amnis finance) Tokenomics Explained \- Steady Returns with Minimal Effort, 访问时间为 七月 27, 2025， [http://www.nigeriatradeportal.fmiti.gov.ng/video/AMI(amnis-finance)-Tokenomics-Explained](http://www.nigeriatradeportal.fmiti.gov.ng/video/AMI\(amnis-finance\)-Tokenomics-Explained)  
152. Token Unlocks | Track The Most Updated Data and Complete Vesting Schedules, 访问时间为 七月 27, 2025， [https://tokenomist.ai/](https://tokenomist.ai/)  
153. AMI(amnis finance) Tokenomics Explained \- Fast and Easy Profits with $100, 访问时间为 七月 27, 2025， [https://bhutan.eregulations.org/blank/AMI(amnis-finance)-Tokenomics-Explained](https://bhutan.eregulations.org/blank/AMI\(amnis-finance\)-Tokenomics-Explained)  
154. Amnis Finance \- 2025 Company Profile, Funding & Competitors \- Tracxn, 访问时间为 七月 27, 2025， [https://tracxn.com/d/companies/amnis-finance/\_\_86eIzZ\_Ny0tj\_9UeKS3kltlGKbCTlNLIK2cHre0UzKs](https://tracxn.com/d/companies/amnis-finance/__86eIzZ_Ny0tj_9UeKS3kltlGKbCTlNLIK2cHre0UzKs)  
155. MoveBit Sampled Audit Reports \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/movebit/Sampled-Audit-Reports](https://github.com/movebit/Sampled-Audit-Reports)  
156. Thala Labs \- 2025 Company Profile, Funding & Competitors \- Tracxn, 访问时间为 七月 27, 2025， [https://tracxn.com/d/companies/thala-labs/\_\_Xy7QGzRDubAESov6fq4yU\_XCDS2Jv9IhP\_HU0X1\_Mxc](https://tracxn.com/d/companies/thala-labs/__Xy7QGzRDubAESov6fq4yU_XCDS2Jv9IhP_HU0X1_Mxc)  
157. Developer Grants Program | DFINITY, 访问时间为 七月 27, 2025， [https://dfinity.org/grants](https://dfinity.org/grants)  
158. Amnis Finance Secures $2 Million in Funding for Groundbreaking Liquid Staking Protocol, 访问时间为 七月 27, 2025， [https://www.leadsontrees.com/news/amnis-finance-secures-2-million-in-funding-for-groundbreaking-liquid-staking-protocol](https://www.leadsontrees.com/news/amnis-finance-secures-2-million-in-funding-for-groundbreaking-liquid-staking-protocol)  
159. OKX Ventures Co-Leads US$2 Million Initial Funding Round in Amnis Finance, 访问时间为 七月 27, 2025， [https://www.globenewswire.com/news-release/2024/09/20/2949772/0/en/OKX-Ventures-Co-Leads-US-2-Million-Initial-Funding-Round-in-Amnis-Finance.html](https://www.globenewswire.com/news-release/2024/09/20/2949772/0/en/OKX-Ventures-Co-Leads-US-2-Million-Initial-Funding-Round-in-Amnis-Finance.html)  
160. What is Amnis Finance? All You Need to Know About AMI \- Gate.io, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/what-is-amnis-finance-all-you-need-to-know-about-ami/5126](https://www.gate.com/learn/articles/what-is-amnis-finance-all-you-need-to-know-about-ami/5126)  
161. Amnis Finance Secures $2 Million in a Seed Round, with OKX Ventures and Borderless Capital Leading the Investment \- ACCESS Newswire, 访问时间为 七月 27, 2025， [https://www.accessnewswire.com/926977/amnis-finance-secures-2-million-in-a-seed-round-with-okx-ventures-and-borderless-capital-leading-the-investment](https://www.accessnewswire.com/926977/amnis-finance-secures-2-million-in-a-seed-round-with-okx-ventures-and-borderless-capital-leading-the-investment)  
162. Boost Your Crypto Launch: Aptos Unveils Strategic LFM Program for TGE Success \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604647654](https://www.bitget.com/news/detail/12560604647654)  
163. Aptos' Largest Liquid Staking Protocol, Amnis Finance, Becomes the First Project Participating in the LFM Program \- DL News, 访问时间为 七月 27, 2025， [https://www.dlnews.com/research/external/aptos-largest-liquid-staking-protocol-amnis-finance-becomes-the-first-project-participating-in-the-lfm-program/](https://www.dlnews.com/research/external/aptos-largest-liquid-staking-protocol-amnis-finance-becomes-the-first-project-participating-in-the-lfm-program/)  
164. Thala Price: THL Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/thala](https://www.coingecko.com/en/coins/thala)  
165. What is Oracle Hyperion Planning ? | Learn More \- MindStream Analytics, 访问时间为 七月 27, 2025， [https://www.mindstreamanalytics.com/oracle-hyperion-planning.html](https://www.mindstreamanalytics.com/oracle-hyperion-planning.html)  
166. Hyperion and Hyperion+ Imaging Systems Support \- Standard BioTools, 访问时间为 七月 27, 2025， [https://www.standardbio.com/support/instrument-support/hyperion-support](https://www.standardbio.com/support/instrument-support/hyperion-support)  
167. Hyperion Financial Management (HFM) Analysis Program \- Oracle, 访问时间为 七月 27, 2025， [https://www.oracle.com/a/ocom/docs/hfm-analysis-program-solution-brief.pdf](https://www.oracle.com/a/ocom/docs/hfm-analysis-program-solution-brief.pdf)  
168. Aptos and the Rise of BTCfi: How Bitcoin-Backed DeFi is Reshaping the Multichain Ecosystem | OKX, 访问时间为 七月 27, 2025， [https://www.okx.com/learn/aptos-btcfi-bitcoin-defi-multichain](https://www.okx.com/learn/aptos-btcfi-bitcoin-defi-multichain)  
169. OKX Ventures | Crypto & Web3 Investment Portfolio, 访问时间为 七月 27, 2025， [https://www.okx.com/en-us/ventures](https://www.okx.com/en-us/ventures)  
170. OKX Ventures and Aptos Foundation Jointly Launch Ecosystem Growth Fund and Accelerator to Boost Aptos Ecosystem Growth \- PR Newswire, 访问时间为 七月 27, 2025， [https://www.prnewswire.com/news-releases/okx-ventures-and-aptos-foundation-jointly-launch-ecosystem-growth-fund-and-accelerator-to-boost-aptos-ecosystem-growth-302212099.html](https://www.prnewswire.com/news-releases/okx-ventures-and-aptos-foundation-jointly-launch-ecosystem-growth-fund-and-accelerator-to-boost-aptos-ecosystem-growth-302212099.html)  
171. Aptos Ecosystem Receives Major Backing with New Fund from Top Venture Firms, 访问时间为 七月 27, 2025， [https://www.itiger.com/news/2472815619](https://www.itiger.com/news/2472815619)  
172. Hyperion Tutorial for Beginners \- Intellipaat, 访问时间为 七月 27, 2025， [https://intellipaat.com/blog/hyperion-tutorial-for-beginners/](https://intellipaat.com/blog/hyperion-tutorial-for-beginners/)  
173. Smart Contracts in DEX Development: Roles & Their Benefits | The Capital \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/thecapital/role-of-smart-contracts-in-dex-and-their-benefits-713059172767](https://medium.com/thecapital/role-of-smart-contracts-in-dex-and-their-benefits-713059172767)  
174. Hyperion Docs: Home, 访问时间为 七月 27, 2025， [https://docs.hyperion.xyz/](https://docs.hyperion.xyz/)