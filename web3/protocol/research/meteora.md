

# **Meteora (MET) 深度投资评估报告：技术Alpha与治理Omega的对决**

## **报告摘要**

本报告旨在对Solana生态系统中的去中心化流动性协议Meteora进行全面、深入的投资评估。Meteora通过其创新的动态流动性做市商（DLMM）技术，在Solana上建立了强大的市场地位，尤其在处理高波动性资产（如Meme币）方面表现卓越，从而产生了可观的交易量和协议费用 1。其技术架构，包括动态费用和灵活的流动性策略，相较于传统AMM及Uniswap V3等竞争对手，展现出更高的资本效率和潜在回报 3。

然而，Meteora的卓越技术光环被一场深刻且持续的治理危机所笼罩。联合创始人Ben Chow因卷入$LIBRA Meme币内幕交易丑闻而辞职，项目面临集体诉讼，声誉受到重创 5。更为严峻的是，有证据强烈暗示，Meteora的这位联合创始人可能与一位在2018年因证券欺诈和内幕交易被美国司法部（DOJ）和证券交易委员会（SEC）定罪的同名人士“Benjamin Bin Chow”为同一人 8。这一未经证实的关联构成了极端级别的交易对手风险，使项目的可信度降至冰点。

尽管该协议通过了多家顶级公司的安全审计，并且其技术为高风险偏好的流动性提供者（LP）和开发者提供了诱人的高收益机会，但其领导层的诚信问题和悬而未决的法律风险是不可忽视的根本性缺陷。

综合考量，Meteora呈现出典型的“技术Alpha”与“治理Omega”的尖锐对立。对于寻求长期、安全投资的参与者而言，其治理风险远超技术优势。

**最终投资评级：不建议（Not Recommended）**

## **一、 引言：Meteora的起源及其在Solana生态中的定位**

### **1.1 从Mercurial Finance到Meteora的演变**

Meteora并非凭空出世，它的前身是Solana生态中顶级的稳定币去中心化交易所（DEX）——Mercurial Finance 11。2022年底，随着FTX及其关键支持者Alameda Research的崩溃，整个加密市场尤其是Solana生态系统遭受重创。由于Alameda Research是Mercurial的种子轮投资者之一 12，这次行业地震给项目带来了生存危机。

为了摆脱与失败巨头的关联并重塑市场信心，团队启动了“Meteora计划” 11。这不仅是一次品牌重塑，更是一次彻底的技术平台和代币经济学重置 11。这一战略举措的本质是一种生存机制。在后FTX时代，任何与Alameda相关的项目都面临着严格的审视和潜在的交易对手风险。因此，更名为Meteora并推出新的叙事，是项目为了在饱受冲击的Solana社区中重建信任而采取的必要步骤。

### **1.2 使命与价值主张**

Meteora的宏大愿景是成为Solana最安全、可持续且可组合的收益层 13。其核心目标是通过提供一系列创新的流动性产品，解决Solana生态系统长期面临的流动性不足和资本效率低下的问题，最终将Solana打造成加密世界主流用户的终极交易中心 11。项目旨在为用户和开发者提供安全、优化且易于集成的产品，成为Solana生态的“资本分配层”，将流动性高效地分配给最优的借贷协议 13。

这段浴火重生的历史，从一开始就为Meteora设定了一个极高的信任门槛。投资者必须以最审慎的眼光，来评判其团队后续的所有行为是否符合其所宣称的透明与可靠。

## **二、 技术架构：深入解析动态流动性模型**

Meteora的技术实力是其最引人注目的核心竞争力，其产品套件围绕“动态流动性”构建，旨在最大化资本效率和LP收益。

### **2.1 核心技术：动态流动性做市商 (DLMM)**

DLMM是Meteora的技术皇冠，它并非简单的AMM分叉，而是一种基于“价格箱”（bin-based）的集中流动性做市商，其设计灵感来源于Trader Joe的流动性账本（Liquidity Book）16。

* **核心机制**：LP可以将资金存入离散的、具有特定价格的“箱子”中。在单个价格箱内进行的所有交易都享有零滑点（zero-slippage）的优势，因为价格是固定的 3。整个交易对的市场由所有这些价格箱组合而成。  
* **关键创新点**：  
  1. **动态费用（Dynamic Fees）**：这是DLMM区别于其他AMM的标志性功能。协议能够根据市场波动性自动调整交易费用。在市场剧烈波动时，费用会自动提高（最高可达10%），以补偿LP因无常损失（IL）增加而面临的风险 3。这使得LP在动荡市场中也能获得公平的回报。  
  2. **灵活的流动性形态（Flexible Liquidity Shapes）**：LP不再局限于传统的50/50资金池或简单的价格区间。Meteora提供了多种预设的流动性分布策略，如“现货”（Spot）、“曲线”（Curve）和“买卖盘”（Bid-Ask），允许LP根据自己的市场预期来塑造流动性曲线，将资本集中在最有效的位置 16。

### **2.2 对比分析：DLMM vs. 传统AMM & Uniswap V3**

与传统基于 x⋅y=k 公式的AMM相比，DLMM通过集中流动性显著提高了资本效率，避免了将资金稀疏地分布在所有可能的价格点上 4。

与以Uniswap V3为代表的集中流动性做市商（CLMM）相比，DLMM的优势在于其**零滑点价格箱**和**动态费用**。虽然CLMM也允许LP在特定范围内集中流动性，但在该范围内交易仍然会产生滑点，且其费率等级是固定的。DLMM的结构设计旨在为LP带来更高收益，尤其是在处理稳定币对或高波动性资产时更具优势 3。已有研究指出，Uniswap V3在极端市场波动期间，由于需要LP频繁地主动管理仓位，其价格准确性可能会出现问题 22。DLMM的动态费用机制，正是为了从协议层面帮助LP缓解这一痛点。

### **2.3 更广泛的产品矩阵**

除了DLMM，Meteora还构建了一套协同产品，以巩固其作为流动性枢纽的地位：

* **动态AMM (DAMM v1/v2)**：这是恒定乘积做市商，但其创新之处在于与动态金库（Dynamic Vaults）集成，能将池中闲置的资产存入外部借贷协议以赚取额外收益 15。DAMM v2版本进一步增加了对可选集中流动性、仓位NFT等功能的支持 15。  
* **动态联合曲线 (DBC)**：为新项目提供代币发行的强大工具。项目方可以创建具有完全可定制价格曲线的代币，当达到预设的流动性门槛时，这些代币会自动“毕业”并迁移到Meteora的DAMM池中，实现无缝的流动性引导 15。  
* **动态金库 (Dynamic Vaults)**：这是一个收益聚合层，由一个名为“Hermes”的链下机器人管理 23。Hermes会持续监控各大借贷协议的收益率，并自动将金库中的资产重新分配到收益最高的地方，为LP创造复合收益 13。

### **2.4 开发者生态与活动**

Meteora在GitHub上以MeteoraAg的名义维持着活跃的开源社区 24。团队为其核心产品（DLMM、DBC、Dynamic Vaults等）提供了TypeScript和Rust两种语言的SDK，并附有详细的文档和安装指南 15。同时，项目也为DLMM和DAMM提供了公开的API，并配有Swagger UI界面供开发者探索 29。GitHub仓库的提交记录显示，项目开发活动非常频繁，部分仓库在数小时或数天前仍有更新 24，这表明开发团队仍在积极迭代。

这种先进且完善的技术设施，为Meteora构建了坚实的竞争壁垒。它不仅是一个DEX，更是一个为Solana生态量身定制的流动性基础设施。特别是其DLMM和DBC产品，完美契合了新代币（尤其是Meme币）发行所需的价格发现、流动性引导和波动性管理功能。这使得Meteora自然而然地成为了Solana上Meme币交易的中心枢纽，吸引了巨大的交易量和投机资本，如TRUMP/USDC交易对的巨额交易量就证明了这一点 1。然而，这种成功也意味着协议的健康状况与高风险、高泡沫的Meme币市场深度绑定，为其带来了可观的财务数据的同时，也埋下了巨大的声誉和治理风险的种子。

## **三、 财务与市场表现**

Meteora的链上数据表现极为亮眼，充分证明了其技术在捕获市场流动性和费用方面的强大能力。

### **3.1 核心链上指标**

根据DeFi Llama的数据，Meteora的生态系统表现强劲。其总锁仓价值（TVL）达到了8.39亿美元 2。更令人印象深刻的是其费用和收入数据，年化总费用高达17.7亿美元，过去30天的费用收入为1.45亿美元。协议自身的年化收入也达到了6324万美元 2。在交易量方面，过去30天的DEX交易量超过195亿美元，使其稳居Solana乃至整个DeFi领域的顶级协议之列 2。

**表1：Meteora关键绩效指标 (KPIs)**

| 指标 | 24小时 | 7天 | 30天 | 年化 | 累计 | 数据来源 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **DEX交易量** | $3.15亿 | $42.45亿 | $195.31亿 | \- | $2354.7亿 | 2 |
| **协议总费用** | $207万 | $1922万 | $1.45亿 | $17.73亿 | $14.16亿 | 2 |
| **协议净收入** | $14.43万 | $143万 | $518万 | $6324万 | $1388万 | 2 |
| **总锁仓价值 (TVL)** | \- | \- | \- | \- | $8.39亿 | 2 |

*注：数据截至报告撰写时，来源为DeFi Llama。*

### **3.2 用户活动分析**

从用户参与度来看，Token Terminal的数据显示Meteora拥有150万的月活跃用户（MAU），尽管近期该数据下降了28.1%，这可能与Meme币市场热度降温有关 32。在过去一年的合约总交易次数方面，Meteora以1.13亿次排名第六，显示出极高的用户交互频率 33。

**表2：Meteora用户参与度指标**

| 指标 | 最新数据 | 30天变化 | 排名 (DEXs) | 数据来源 |
| :---- | :---- | :---- | :---- | :---- |
| **月活跃用户 (MAU)** | 150万 | \-28.1% | 19 | 32 |
| **日活跃地址 (DAU)** | 约5万-10万 (周平均) | 波动 | 10 | 34 |
| **年交易总数** | 1.13亿 | \- | 6 | 33 |

*注：数据来源为Token Terminal。*

### **3.3 竞争格局**

Meteora已成为Solana上无可争议的顶级DEX之一，与Raydium和Orca形成了三足鼎立之势 19。其在2025年初的爆发式增长，一度占据了Solana DEX市场超过15-22%的交易量份额，这主要归功于其对Meme币交易的强大吸引力 1。一个标志性事件是，$TRUMP代币选择在Meteora而非老牌DEX Raydium上添加流动性，这充分显示了Meteora在流动性引导方面日益增长的影响力 37。

## **四、 MET代币：经济模型与发行前瞻**

Meteora的原生代币尚未正式发行，但其经济模型和分配计划已通过社区提案初见端倪。

### **4.1 代币符号与供应**

尽管早期信息曾提及$MTR 38，但近期的官方和社区讨论均一致指向新代币的符号为\*\*

$MET\*\* 13。

$MET的总供应量固定为10亿枚 38。

### **4.2 代币分配与经济模型**

代币经济学的核心是激励流动性和长期发展。关键的分配提案如下：

* **流动性激励与TGE**：高达25%的代币供应被提议用于流动性相关目的 38。其中，20%将作为长期流动性挖矿奖励，在TGE（代币生成事件）后的两年内分发；另外5%将用于TGE期间的初始流动性提供和做市 39。  
* **团队与顾问**：20%的代币分配给团队，并设有长达6年的线性解锁期，这是一个积极的信号，表明团队与项目的长期利益绑定 37。  
* **社区与生态**：另有提案建议将LP奖励的份额提升至15%，并额外分配3%用于支持通过Meteora启动台（Launchpad）发行的项目 41。此外，团队分配中的2%将用于补偿此前失败的  
  $m3m3代币持有者，以修复社区关系 37。

**表3：MET代币分配提案概览**

| 分配类别 | 占比 | 数量 (枚) | 解锁/用途说明 | 来源 |
| :---- | :---- | :---- | :---- | :---- |
| **长期LP奖励** | 20% | 2亿 | TGE后2年内线性释放，用于激励流动性 | 39 |
| **团队** | 20% | 2亿 | TGE后6年线性解锁 | 37 |
| **LP刺激计划 (总计)** | 15% | 1.5亿 | 奖励早期和新增LP | 41 |
| **TGE储备** | 5% | 5000万 | 用于初始流动性提供和做市 | 39 |
| **启动台 (Launchpad)** | 3% | 3000万 | 激励通过Meteora发行的项目 | 41 |
| **$m3m3持有者补偿** | 2% (来自团队份额) | 2000万 | 对历史遗留问题的补偿 | 37 |

### **4.3 代币效用与空投活动**

$MET代币的核心效用将是**治理**，持有者从TGE第一天起即可参与协议的投票和决策 37。

目前，Meteora正在进行一场大规模的**空投积分活动**，以引导流动性并奖励早期用户 5。用户通过提供流动性（按TVL和天数计算）和赚取平台费用来累积积分，早期参与者还可获得积分加成 19。该积分活动预计在2025年8月31日左右结束，这为

$MET的TGE提供了一个可能的时间窗口 43。截至目前，尚未在Aevo或Whales Market等盘前交易平台发现

$MET代币的交易市场 44。

这种以TVL和费用为导向的积分空投机制，虽然在短期内能有效吸引资本，但也存在一个潜在的长期问题。该机制天然地偏向于能够投入大量资金的“巨鲸”用户。由于$MET代币与治理权直接挂钩，这意味着在TGE时，最大份额的投票权将被集中在少数早期大资本家手中。这种潜在的“富豪统治”结构，可能会在未来对协议费用、代币释放等关键决策上，做出更有利于大户而非协议长期健康发展的选择，这是一个值得警惕的中心化风险。

## **五、 关键风险评估：一场深层次的治理危机**

这是本报告最为核心的部分。Meteora面临的风险主要并非技术层面，而是源于其治理结构和领导团队的诚信问题，这些风险的严重性足以颠覆其所有技术优势。

### **5.1 A. 治理与领导层危机 (核心威胁)**

* **$LIBRA丑闻**：Meteora深度卷入了$LIBRA Meme币的发行丑闻。该代币曾获阿根廷总统的宣传，但在价格暴涨后迅速崩溃，引发了关于“拉地毯”（rug pull）和内幕交易的广泛指控 6。  
* **创始人辞职与集体诉讼**：在丑闻发酵后，Meteora联合创始人Ben Chow宣布辞职 5。紧接着，投资者对Meteora、Ben Chow及其他相关方提起了集体诉讼，指控他们策划了一场价值6900万美元的“Meme币骗局”和“拉高出货”（pump-and-dump）阴谋 7。  
* **泄露的通话记录**：一份被泄露的Ben Chow与另一位DeFi创始人的通话录音文字记录显示，Chow似乎在通话中才得知其合作伙伴的内幕交易行为，并对自己“扶持了”这些人表示懊悔，最终表示自己将不得不辞职 52。  
* Ben Chow的身份疑云——最严峻的警报：  
  本报告发现的最严重风险，是关于Meteora联合创始人Ben Chow的真实身份问题。有大量间接证据表明，他可能与一位名叫Benjamin Bin Chow的个人为同一人，而后者在2018年至2019年间，因证券欺诈和内幕交易被美国司法部（DOJ）和美国证券交易委员会（SEC）刑事定罪并被判入狱 8。  
  * **证据链分析**：  
    1. SEC和DOJ的法律文件详细描述了Benjamin Bin Chow的案件：他曾是Canyon Bridge Capital的创始人，拥有加州理工学院博士和UCLA的MBA学位，因在一次公司并购谈判中向其商业伙伴泄露内幕信息而被定罪 9。  
    2. Meteora的联合创始人名为Ben Chow 5，其公开的个人履历极为模糊，缺乏如领英（LinkedIn）等可供核实的职业背景信息 14。  
    3. 针对Meteora的Ben Chow的指控（涉及内幕信息和市场操纵）与已被定罪的Benjamin Bin Chow的犯罪手法高度相似。  
    4. 尽管搜索“Benjamin Chow”会发现其他领域的一些同名人士 56，但加密领域这位Ben Chow的背景真空，与另一位有金融犯罪前科的、背景高度吻合的Benjamin Bin Chow的存在，构成了极大的风险疑点。  
  * **风险含义**：如果这两者为同一人，这意味着Meteora的核心创始人之一具有金融犯罪的历史和模式。这将使得团队声明中所谓的“判断失误”6 成为一种极其苍白的托词，并从根本上摧毁了项目的可信度。  
    **这是足以让任何审慎投资者一票否决的潜在“交易破坏者”（deal-breaker），它将项目的风险等级提升至最高。**

### **5.2 B. 智能合约与安全风险**

与治理风险形成鲜明对比的是，Meteora在技术安全方面投入了大量资源，展现出积极姿态。

* **多重审计**：协议的核心产品，包括DLMM、DAMM、动态金库等，都经过了多家行业顶级安全公司的审计，如Quantstamp、Halborn、OAK Security、OtterSec、Sec3、Zellic和Bramah Systems 14。这是一个非常积极的信号。  
* **公开报告**：团队在其官方文档中公开了审计报告的链接 59，显示出一定的透明度。例如，其前身Mercurial的动态收益层就曾由Quantstamp审计并公开了报告 60（尽管原始报告链接现已失效 60）。

**表4：Meteora公开安全审计摘要**

| 审计产品 | 审计公司 | 日期 | 报告链接/提及 | 关键发现摘要 |
| :---- | :---- | :---- | :---- | :---- |
| DLMM | Zellic, Bramah Systems | 未明确 | 14 | 未发现严重漏洞 |
| Meteora Pools | Halborn, OAK Security | 未明确 | 23 | 未明确，但提及审计 |
| Dynamic Vaults | Quantstamp, Halborn | 未明确 | 23 | 已完成审计，修复了关键问题 |
| DAMM v1/v2, DBC等 | OtterSec, Sec3, Offside Labs | 最新 | 59 | 提供报告下载，需单独审阅 |

### **5.3 C. 交易对手与历史风险**

**Alameda的阴影**：Meteora的前身Mercurial曾接受Alameda Research的种子轮投资 12。尽管团队通过品牌重塑试图切割这段历史，但这一关联仍然为项目的初始股权结构和早期发展蒙上了一层阴影。考虑到Alameda已被证实存在大量不当行为，其对被投项目的早期影响和潜在的未披露关联，是投资者在进行全面风险评估时必须考虑的因素。

## **六、 生态系统与社区健康**

### **6.1 社区情绪：两极分化**

Meteora的社区情绪呈现出明显的两极分化。一方面，技术爱好者和收益农耕者对DLMM的创新和高收益机会充满热情，在各类社区和教程中积极讨论策略 20。另一方面，在Reddit等社交平台上，充斥着对领导层丑闻的愤怒和嘲讽，许多用户对项目的信任度持极度怀疑态度 52。

### **6.2 合作伙伴与集成**

尽管存在治理争议，Meteora凭借其强大的技术实力，与Solana生态内的关键项目建立了紧密的合作关系。它是领先DEX聚合器Jupiter的主要流动性来源之一 14。其LP代币可以无缝集成到Kamino Finance、Hubble Protocol等其他DeFi协议中，用于获取杠杆或叠加奖励 14。这种深度集成是项目的一大优势，但也带来了潜在的系统性风险。

### **6.3 开发者社区**

一个新兴的第三方开发者生态正在Meteora周围形成。社区已经开发出多种工具来辅助LP，包括自动化管理机器人（如MetEngine、Cleopetra）、LP分析仪表盘（如DLMM Profiler、Metlex）等 15。此外，还有社区成员开发了Discord机器人，用于发现DLMM的交易机会 63。这些都表明Meteora的技术对开发者具有吸引力。

## **七、 投资论点与可行策略**

### **7.1 最终投资建议**

Meteora的投资决策是一场关于“技术Alpha”与“治理Omega”之间的权衡。其技术平台无疑是行业领先的，能够持续产生强劲的现金流。然而，其治理层面的风险，特别是核心领导层可能存在的诚信污点和法律问题，是致命的。

对于任何将**资本安全**和**长期价值**置于首位的投资者而言，这些非技术性、以人为核心的风险是不可接受的。因此，本报告对$MET代币的长期投资或将Meteora作为核心DeFi基础设施的依赖，给予\*\*不建议（Not Recommended）\*\*的评级。

然而，对于能够充分理解并愿意承担**极端风险**的短线投机者或高级DeFi玩家，Meteora的生态系统确实提供了一些高风险、高回报的参与机会。下表详细列出了这些策略。

**表5：Meteora投资机会矩阵**

| 投资/参与方式 | 策略描述 | 优点 | 缺点 | 风险等级 | 预期收益 (APR/APY) | 所需专业知识 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **空投积分农耕** | 通过提供流动性或赚取费用来累积MET积分，等待未来空投。 | 潜在的高额空投回报；参与门槛相对较低。 | 机会成本高；空投价值不确定；TGE时间未知；将资金置于高风险协议中。 | **高** | 不适用 (取决于空投规模) | 初级/中级 |
| **DLMM LP (稳定币)** | 在DLMM中为USDC/USDT等稳定币对提供流动性。 | 无常损失极低；利用动态费用和集中流动性赚取稳定收益。 | 收益率（APR）相对较低；仍需承担协议的智能合约和治理风险。 | **中** | 5-20% (高度波动) | 中级 |
| **DLMM LP (SOL/稳定币)** | 为SOL/USDC等主流交易对提供流动性。 | 交易量大，费用收入潜力高；可叠加Kamino等协议奖励。 | 承受SOL价格波动的无常损失；需要主动管理仓位。 | **高** | 20-100%+ (高度波动) | 中级/高级 |
| **DLMM LP (Meme/SOL)** | 为高波动性的Meme币提供流动性，通常是单边提供。 | 极高的潜在费用APR；可捕获新币发行的早期交易热度。 | 极端无常损失风险；Meme币归零风险；需要极高的风险管理能力和市场时机把握。 | **极端** | 1000%+ (极度波动，不可持续) | 高级/专家 |
| **TGE后代币购买** | 在$MET代币正式发行后，于二级市场购买。 | 可直接投资于协议的增长；可能受益于协议收入的分红。 | 治理风险可能导致代币价值崩溃；面临早期LP和团队解锁的抛压。 | **极端** | 不适用 | 所有级别 |
| **构建LP管理代理** | 利用Meteora的SDK和API，开发自动化机器人来管理DLMM仓位。 | 可实现复杂策略自动化，优化收益；可能成为一项可盈利的服务。 | 需要深厚的开发背景；开发和维护成本高；需要管理RPC和API密钥安全。 | **高 (技术) / 极端 (资本)** | 开发者收益，非LP收益 | 开发者 |

### **7.2 高级收益策略手册**

对于寻求更高回报的高级用户，可以探索以下复合策略：

* **单边流动性挖矿**：在新Meme币发行时，利用DLMM仅提供该Meme币的流动性（而非交易对），设定一个极窄的价格区间。这可以在不投入主流资产（如SOL或USDC）的情况下，捕获最初的买盘交易费用 20。  
* **杠杆流动性挖矿**：将Meteora的LP代币存入像Hubble Protocol这样的借贷协议中，抵押借出稳定币USDH，然后用借出的资金再次购买资产，循环存入Meteora的流动性池，从而放大收益和风险 14。  
* **奖励叠加**：选择与Kamino Finance等外部协议集成的DLMM池。这样，LP不仅能赚取Meteora的交易费和$MET积分，还能同时获得Kamino等协议发放的额外代币奖励，实现“一鱼三吃” 14。

### **7.3 面向开发者的机会**

对于具备开发背景的投资者，Meteora的开放生态提供了独特的参与途径：

* **开发自动化LP管理工具**：利用官方提供的TypeScript或Rust SDK 24 和API 29，可以构建一个智能机器人。该机器人能根据预设的算法（如跟踪市场价格、波动率指标等）自动调整DLMM的流动性仓位，实现动态再平衡，从而最大化费用收入并最小化无常损失。这类似于社区中已有的Liquid Nova等工具 15。  
* **通过DBC发行新项目**：如果你有自己的代币项目计划，可以利用Meteora的动态联合曲线（DBC）基础设施来启动代币发行。这可以利用Meteora庞大的用户基础和流动性生态系统，为新项目提供冷启动支持 15。

## **八、 结论**

Meteora是一个充满矛盾的协议。一方面，它拥有DeFi领域最顶尖、最创新的流动性技术，其DLMM在资本效率和LP收益优化方面设立了新的行业标杆。其强劲的链上数据和在Solana生态中的核心地位，证明了其技术的市场吸引力。

但另一方面，它深陷于一场无法忽视的治理和诚信危机之中。联合创始人的离职、悬而未决的集体诉讼，以及其核心人物可能存在的金融犯罪历史，共同构成了一个巨大的、随时可能引爆的风险炸弹。这种风险是系统性的，无法通过技术审计或保险来规避。

投资Meteora，本质上是在其卓越的技术前景与极端的领导层风险之间进行一场豪赌。对于绝大多数投资者而言，这场赌博的风险收益比并不对称。在治理问题得到彻底澄清、法律风险完全解除之前，任何对该协议的深度参与都无异于在悬崖边跳舞。因此，尽管其技术令人赞叹，但从审慎的投资分析角度出发，我们最终的结论是**不建议**将Meteora作为一项稳健的投资选择。

## **九、 参考文献**

1

#### **引用的著作**

1. Meteora: DeFi Hub on Solana | Learn SimpleSwap, 访问时间为 七月 27, 2025， [https://simpleswap.io/learn/analytics/defi/meteora-defi-hub-on-solana](https://simpleswap.io/learn/analytics/defi/meteora-defi-hub-on-solana)  
2. Meteora \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/meteora](https://defillama.com/protocol/meteora)  
3. Meteora's Dynamic Liquidity Market Maker (DLMM) | by Arpan Mondal \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@accesstoarpan/meteoras-dynamic-liquidity-market-maker-dlmm-7d9e692e6969](https://medium.com/@accesstoarpan/meteoras-dynamic-liquidity-market-maker-dlmm-7d9e692e6969)  
4. Deep-Dive on Metora DLMM \- Tanishq's Blog, 访问时间为 七月 27, 2025， [https://tutorials.hashnode.dev/deep-dive-on-metora-dlmm](https://tutorials.hashnode.dev/deep-dive-on-metora-dlmm)  
5. Meteora Project Analysis | Rating, Review & Stats \- Coinlaunch, 访问时间为 七月 27, 2025， [https://coinlaunch.space/projects/meteora/](https://coinlaunch.space/projects/meteora/)  
6. Meteora Faces Insider Trading Allegations as CEO Ben Chow Resigns \- "The Defiant", 访问时间为 七月 27, 2025， [https://thedefiant.io/news/defi/meteora-faces-insider-trading-allegations-as-ceo-ben-chow-resigns](https://thedefiant.io/news/defi/meteora-faces-insider-trading-allegations-as-ceo-ben-chow-resigns)  
7. Meteora Conducted $69 Million Memecoin Scam, Token Buyers Allege, 访问时间为 七月 27, 2025， [https://news.bloomberglaw.com/litigation/meteora-conducted-69-million-memecoin-scam-token-buyers-allege](https://news.bloomberglaw.com/litigation/meteora-conducted-69-million-memecoin-scam-token-buyers-allege)  
8. Insider Trading Conviction Affirmed for Corporate Outsider | Second Circuit Criminal Law Blog \- Patterson Belknap Webb & Tyler LLP, 访问时间为 七月 27, 2025， [https://www.pbwt.com/second-circuit-blog/insider-trading-conviction-affirmed-for-corporate-outsider](https://www.pbwt.com/second-circuit-blog/insider-trading-conviction-affirmed-for-corporate-outsider)  
9. Benjamin Bin Chow \- SEC.gov, 访问时间为 七月 27, 2025， [https://www.sec.gov/files/litigation/admin/2022/ia-6109.pdf](https://www.sec.gov/files/litigation/admin/2022/ia-6109.pdf)  
10. 19-0325 USA v. Chow 1 UNITED STATES COURT OF APPEALS 2 FOR THE SECOND CIRCUIT 3 \- \- \- \- \- \- 4 August Term, 2019 5 (Argued \- GovInfo, 访问时间为 七月 27, 2025， [https://www.govinfo.gov/content/pkg/USCOURTS-ca2-19-00325/pdf/USCOURTS-ca2-19-00325-0.pdf](https://www.govinfo.gov/content/pkg/USCOURTS-ca2-19-00325/pdf/USCOURTS-ca2-19-00325-0.pdf)  
11. Meteora: Revolutionizing Solana's Liquidity and Defying Challenges | by Swaresh binaykiya, 访问时间为 七月 27, 2025， [https://medium.com/@swareshbinaykiya/meteora-revolutionizing-solanas-liquidity-and-defying-challenges-5c49b56ef2bc](https://medium.com/@swareshbinaykiya/meteora-revolutionizing-solanas-liquidity-and-defying-challenges-5c49b56ef2bc)  
12. Meteora Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/Meteora?k=OTE4](https://www.rootdata.com/Projects/detail/Meteora?k=OTE4)  
13. The Meteora Platform Is Now Live\! \- Medium, 访问时间为 七月 27, 2025， [https://meteoraag.medium.com/meteora-platform-launch-7defbc562f18](https://meteoraag.medium.com/meteora-platform-launch-7defbc562f18)  
14. Meteora: Solana's Dynamic Liquidity Layer, 访问时间为 七月 27, 2025， [https://solanacompass.com/projects/meteora](https://solanacompass.com/projects/meteora)  
15. Meteora Documentation: We Build Liquidity Pools, 访问时间为 七月 27, 2025， [https://docs.meteora.ag/](https://docs.meteora.ag/)  
16. Meteora DLMM: The Future of Automated Market Making | by Thenotellaking \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@thenotellaking/meteora-dlmm-the-future-of-automated-market-making-8dedd1c3878e](https://medium.com/@thenotellaking/meteora-dlmm-the-future-of-automated-market-making-8dedd1c3878e)  
17. Understanding Liquidity Pool Mechanisms on Meteora | by Solfanclub | Jun, 2025 \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/@solfanclub/understanding-liquidity-pool-mechanisms-on-meteora-916173daa641](https://medium.com/@solfanclub/understanding-liquidity-pool-mechanisms-on-meteora-916173daa641)  
18. Can someone please explain me what meteora is and what are DLLMs? : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/1iad5kd/can\_someone\_please\_explain\_me\_what\_meteora\_is\_and/](https://www.reddit.com/r/solana/comments/1iad5kd/can_someone_please_explain_me_what_meteora_is_and/)  
19. What Is Meteora DEX? Solana's Fastest-Growing Liquidity Hub | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/learn/what-is-meteora-dex-solana-crypto](https://www.coingecko.com/learn/what-is-meteora-dex-solana-crypto)  
20. Meteora DLMMs guide, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/meteora-dlmms-guide/6377](https://www.gate.com/learn/articles/meteora-dlmms-guide/6377)  
21. Why and How to use Meteora's DLMM (Dynamic Liquidity Market Maker) \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/coinmonks/why-and-how-to-use-meteoras-dlmm-dynamic-liquidity-market-maker-320cac1e0ce8](https://medium.com/coinmonks/why-and-how-to-use-meteoras-dlmm-dynamic-liquidity-market-maker-320cac1e0ce8)  
22. Exploring Price Accuracy on Uniswap V3 in Times of Distress \- ETH Zürich, 访问时间为 七月 27, 2025， [https://tik-old.ee.ethz.ch/file//a82707993f6ad89f51ade83ad844a304/Exploring\_Price\_Accuracy\_on\_Uniswap\_V3\_in\_Times\_of\_Distress-5.pdf](https://tik-old.ee.ethz.ch/file//a82707993f6ad89f51ade83ad844a304/Exploring_Price_Accuracy_on_Uniswap_V3_in_Times_of_Distress-5.pdf)  
23. Meteora's Open Liquidity is your 5 rings to Financial Freedom \- SILICON NINJAA \- Medium, 访问时间为 七月 27, 2025， [https://silicon-ninjaa.medium.com/blast-off-to-financial-freedom-with-meteoras-open-liquidity-40178d39841a](https://silicon-ninjaa.medium.com/blast-off-to-financial-freedom-with-meteoras-open-liquidity-40178d39841a)  
24. Meteora \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/MeteoraAg](https://github.com/MeteoraAg)  
25. MeteoraAg/vault-sdk: Dynamic Yield Infrastructure For Solana \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/mercurial-finance/vault-sdk](https://github.com/mercurial-finance/vault-sdk)  
26. Getting Started \- Meteora Documentation, 访问时间为 七月 27, 2025， [https://docs.meteora.ag/developer-guide/integrations/dbc/typescript-sdk/1-getting-started](https://docs.meteora.ag/developer-guide/integrations/dbc/typescript-sdk/1-getting-started)  
27. meteora-ag/dynamic-bonding-curve-sdk \- NPM, 访问时间为 七月 27, 2025， [https://www.npmjs.com/package/@meteora-ag/dynamic-bonding-curve-sdk](https://www.npmjs.com/package/@meteora-ag/dynamic-bonding-curve-sdk)  
28. Getting Started \- Meteora Documentation, 访问时间为 七月 27, 2025， [https://docs.meteora.ag/developer-guide/integrations/dynamic-vault/typescript-sdk/1-getting-started](https://docs.meteora.ag/developer-guide/integrations/dynamic-vault/typescript-sdk/1-getting-started)  
29. Meteora APIs, 访问时间为 七月 27, 2025， [https://docs.meteora.ag/resources/meteora-apis](https://docs.meteora.ag/resources/meteora-apis)  
30. API Endpoints \- Meteora Documentation, 访问时间为 七月 27, 2025， [https://docs.meteora.ag/developer-guide/other-apis/1-api-endpoints](https://docs.meteora.ag/developer-guide/other-apis/1-api-endpoints)  
31. Meteora DLMM trade volume and market listings | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/exchanges/meteora-dlmm/](https://coinmarketcap.com/exchanges/meteora-dlmm/)  
32. Active users (monthly) \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/metrics/user-mau](https://tokenterminal.com/explorer/metrics/user-mau)  
33. Uniswap Labs Transaction count (contracts) \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/uniswap-labs/metrics/transaction-count-contracts](https://tokenterminal.com/explorer/projects/uniswap-labs/metrics/transaction-count-contracts)  
34. Active addresses (daily) \- Meteora \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/meteora/metrics/active-addresses-daily](https://tokenterminal.com/explorer/projects/meteora/metrics/active-addresses-daily)  
35. Meteora DLMM \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/meteora-dlmm](https://defillama.com/protocol/meteora-dlmm)  
36. Meteora DAMM V2 \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/meteora-damm-v2?denomination=USD](https://defillama.com/protocol/meteora-damm-v2?denomination=USD)  
37. Meteora Airdrop is Coming: The Survival Game of $RAY and the Reshaping of the DeFi Landscape | 0xfaskety on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/21557852177801](https://www.binance.com/en/square/post/21557852177801)  
38. Meteora Allocates 25% Token Supply for Liquidity Incentives \- CoinCROWD, 访问时间为 七月 27, 2025， [https://coincrowd.com/blogs/meteora-allocates-25-token-supply-for-liquidity-incentives](https://coincrowd.com/blogs/meteora-allocates-25-token-supply-for-liquidity-incentives)  
39. Meteora Unveils Ambitious MET Token Plan to Boost Liquidity | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604735244](https://www.bitget.com/news/detail/12560604735244)  
40. Meteora Allocates 25% of MET Token Supply for Liquidity Rewards and TGE Reserve, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/meteora-allocates-25-met-token-supply-liquidity-rewards-tge-reserve-2505/](https://www.ainvest.com/news/meteora-allocates-25-met-token-supply-liquidity-rewards-tge-reserve-2505/)  
41. Meteora shares two proposals on MET token allocation | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604655454](https://www.bitget.com/news/detail/12560604655454)  
42. Top 10 Upcoming Crypto Airdrops in 2025 (UPDATED) \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/learn/new-crypto-airdrop-rewards](https://www.coingecko.com/learn/new-crypto-airdrop-rewards)  
43. Meteora Airdrop (Retrodrop): All Info, Data & Stats \- Coinlaunch, 访问时间为 七月 27, 2025， [https://coinlaunch.space/events-contests/meteora-retrodrop/](https://coinlaunch.space/events-contests/meteora-retrodrop/)  
44. Aevo Price, AEVO Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/aevo](https://www.coinbase.com/price/aevo)  
45. Whales Market Price | WHALES Price, Charts \- Crypto.com, 访问时间为 七月 27, 2025， [https://crypto.com/price/whales-market](https://crypto.com/price/whales-market)  
46. Whales Market Price USD, WHALES Price Live Charts, Market Cap & News \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/whales-market](https://www.bitget.com/price/whales-market)  
47. How the Libra Scandal Exposed Memecoin Insider Trading on the World Stage \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=YDMSQONRAcA](https://www.youtube.com/watch?v=YDMSQONRAcA)  
48. LIBRA, Solana drama: Meteora co-founder resigns, Jupiter begins probe \- TradingView, 访问时间为 七月 27, 2025， [https://www.tradingview.com/news/cointelegraph:ccf28f6ea094b:0-libra-solana-drama-meteora-co-founder-resigns-jupiter-begins-probe/](https://www.tradingview.com/news/cointelegraph:ccf28f6ea094b:0-libra-solana-drama-meteora-co-founder-resigns-jupiter-begins-probe/)  
49. Crypto firm co-founder exits over Libra memecoin conflict \- Tech in Asia, 访问时间为 七月 27, 2025， [https://www.techinasia.com/news/crypto-firm-co-founder-exits-over-libra-memecoin-conflict](https://www.techinasia.com/news/crypto-firm-co-founder-exits-over-libra-memecoin-conflict)  
50. LIBRA Token Creator Admits Project Was Memecoin Not Investment as Token Plummets 90% in Wake of Legal Revelations \- AInvest, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/libra-token-creator-admits-project-memecoin-investment-token-plummets-90-wake-legal-revelations-2507/](https://www.ainvest.com/news/libra-token-creator-admits-project-memecoin-investment-token-plummets-90-wake-legal-revelations-2507/)  
51. Meteora hit with securities fraud suit over memecoin launch | Secondary Sources \- Westlaw, 访问时间为 七月 27, 2025， [https://content.next.westlaw.com/Document/I6578b1ea30c311f0b384fdcefdc34def/View/FullText.html?transitionType=Default\&contextData=(sc.Default)](https://content.next.westlaw.com/Document/I6578b1ea30c311f0b384fdcefdc34def/View/FullText.html?transitionType=Default&contextData=\(sc.Default\))  
52. Transcript of leaked call with Meteora's Ben Chow : r/Buttcoin \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/Buttcoin/comments/1isxqjm/transcript\_of\_leaked\_call\_with\_meteoras\_ben\_chow/](https://www.reddit.com/r/Buttcoin/comments/1isxqjm/transcript_of_leaked_call_with_meteoras_ben_chow/)  
53. Transcript of leaked call with Meteora's Ben Chow \- Citation Needed, 访问时间为 七月 27, 2025， [https://www.citationneeded.news/meteora-ben-chow-call-transcript/](https://www.citationneeded.news/meteora-ben-chow-call-transcript/)  
54. Second Circuit doubles down on insider trading liability for corporate outsiders, 访问时间为 七月 27, 2025， [https://www.hoganlovells.com/en/publications/second-circuit-doubles-down-on-insider-trading-liability-for-corporate-outsiders](https://www.hoganlovells.com/en/publications/second-circuit-doubles-down-on-insider-trading-liability-for-corporate-outsiders)  
55. southern district of new york \- united states of america, 访问时间为 七月 27, 2025， [https://www.justice.gov/usao-sdny/press-release/file/1007536/dl](https://www.justice.gov/usao-sdny/press-release/file/1007536/dl)  
56. Benjamin Chow \- MSCI, 访问时间为 七月 27, 2025， [https://www.msci.com/research-and-insights/contributor/benjamin-chow](https://www.msci.com/research-and-insights/contributor/benjamin-chow)  
57. Benjamin Chow \- Business News, 访问时间为 七月 27, 2025， [https://www.businessnews.com.au/Person/Benjamin-Chow](https://www.businessnews.com.au/Person/Benjamin-Chow)  
58. Benjamin Chow \- Cornell Undergraduate Asia Business Society, 访问时间为 七月 27, 2025， [https://www.cuabscornell.org/benjamin-chow](https://www.cuabscornell.org/benjamin-chow)  
59. DLMM \- Meteora Documentation, 访问时间为 七月 27, 2025， [https://docs.meteora.ag/resources/audits](https://docs.meteora.ag/resources/audits)  
60. Mercurial Beta Dynamic Yield Layer Update: Quantstamp audit ..., 访问时间为 七月 27, 2025， [https://mercurialfi.medium.com/mercurial-dynamic-yield-layer-update-quantstamp-audit-completed-sdk-v0-1-released-and-more-64c4f3b2fdaf](https://mercurialfi.medium.com/mercurial-dynamic-yield-layer-update-quantstamp-audit-completed-sdk-v0-1-released-and-more-64c4f3b2fdaf)  
61. Meteora Overview: The Ultimate Liquidity Layer on Solana \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=3K35Knu-ZAs](https://www.youtube.com/watch?v=3K35Knu-ZAs)  
62. EXCLUSIVE: Libra memecoin team plotted Nigerian expansion : r/CryptoCurrency \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/CryptoCurrency/comments/1irqm00/exclusive\_libra\_memecoin\_team\_plotted\_nigerian/](https://www.reddit.com/r/CryptoCurrency/comments/1irqm00/exclusive_libra_memecoin_team_plotted_nigerian/)  
63. GeekLad/meteora-discord-bot \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/GeekLad/meteora-discord-bot](https://github.com/GeekLad/meteora-discord-bot)  
64. Meteora DAMM trade volume and market listings | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/exchanges/meteora-damm/](https://coinmarketcap.com/exchanges/meteora-damm/)  
65. Terms of Service \- Meteora Documentation, 访问时间为 七月 27, 2025， [https://docs.meteora.ag/legal/1-terms-of-service](https://docs.meteora.ag/legal/1-terms-of-service)  
66. Docs, 访问时间为 七月 27, 2025， [https://docs.meteor.com/](https://docs.meteor.com/)  
67. jparkie/Meteora: A distributed key-value storage system built over RocksDB \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/jparkie/Meteora](https://github.com/jparkie/Meteora)  
68. meteora-dlmm · GitHub Topics, 访问时间为 七月 27, 2025， [https://github.com/topics/meteora-dlmm](https://github.com/topics/meteora-dlmm)  
69. GeekLad/meteora-profit-analysis: Analyzes your Meteora DLMM transactions to estimate profitability and MET points earned \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/GeekLad/meteora-profit-analysis](https://github.com/GeekLad/meteora-profit-analysis)  
70. USDC price today, USDC to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/usd-coin/](https://coinmarketcap.com/currencies/usd-coin/)  
71. Meteora DBC trade volume and market listings | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/exchanges/meteora-dbcs/](https://coinmarketcap.com/exchanges/meteora-dbcs/)  
72. Huma Finance price today, HUMA to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/huma-finance/](https://coinmarketcap.com/currencies/huma-finance/)  
73. obchodní objem a tržní zprávy Meteora VP | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/cs/exchanges/meteora-vp/](https://coinmarketcap.com/cs/exchanges/meteora-vp/)  
74. Meteora LP Army Certificates NFT Collection Latest Price, Sales and Market Data, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/nft/collections/solana/da73ff07674eea07fca77cceeb33c41f/Meteora%20LP%20Army%20Certificates/](https://coinmarketcap.com/nft/collections/solana/da73ff07674eea07fca77cceeb33c41f/Meteora%20LP%20Army%20Certificates/)  
75. CoinGecko: Cryptocurrency Prices, Charts, and Crypto Market Cap, 访问时间为 七月 27, 2025， [https://coingecko.com/](https://coingecko.com/)  
76. SPX6900 price today, SPX to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/spx6900/](https://coinmarketcap.com/currencies/spx6900/)  
77. BONK endures 11% dip as selling pressure overwhelms market \- Mitrade, 访问时间为 七月 27, 2025， [https://www.mitrade.com/insights/news/live-news/article-3-988424-20250726](https://www.mitrade.com/insights/news/live-news/article-3-988424-20250726)  
78. Meteora vaults \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/meteora-vaults](https://defillama.com/protocol/meteora-vaults)  
79. SPAC Investment Advisors \- Meteora Capital LLC, 访问时间为 七月 27, 2025， [https://meteoracapital.com/team/](https://meteoracapital.com/team/)  
80. Meteora – DSP made simple, 访问时间为 七月 27, 2025， [https://meteora.co/](https://meteora.co/)  
81. Meteora Developers, 访问时间为 七月 27, 2025， [https://www.meteoradevelopers.com/meteora/](https://www.meteoradevelopers.com/meteora/)  
82. Meteora \- 2025 Company Profile, Funding & Competitors \- Tracxn, 访问时间为 七月 27, 2025， [https://tracxn.com/d/companies/meteora/\_\_7ZvIWqm5LMJ6Yr4sc2tM9fP3-CA7SDmmAQWfxft3zWQ](https://tracxn.com/d/companies/meteora/__7ZvIWqm5LMJ6Yr4sc2tM9fP3-CA7SDmmAQWfxft3zWQ)  
83. Meteora \- 2025 Funding Rounds & List of Investors \- Tracxn, 访问时间为 七月 27, 2025， [https://tracxn.com/d/companies/meteora/\_\_Zvts7On6hmjJ90Oh9j5OYajTFujZieFHOdMa\_Kq1dCk/funding-and-investors](https://tracxn.com/d/companies/meteora/__Zvts7On6hmjJ90Oh9j5OYajTFujZieFHOdMa_Kq1dCk/funding-and-investors)  
84. Meteora Capital LLC, 访问时间为 七月 27, 2025， [https://meteoracapital.com/](https://meteoracapital.com/)  
85. Meteora Capital News | Hedge Fund Research \- CapEdge, 访问时间为 七月 27, 2025， [https://capedge.com/company/1905106/meteora-capital-llc](https://capedge.com/company/1905106/meteora-capital-llc)  
86. Unified Assessment Services: The Tevora Difference, 访问时间为 七月 27, 2025， [https://www.tevora.com/what-we-do/compliance/unified-assessment-services/](https://www.tevora.com/what-we-do/compliance/unified-assessment-services/)  
87. MET(meteora) Technical Analysis \- Unlock Fast Profits with AI Investment \- Maplesoft, 访问时间为 七月 27, 2025， [https://fr.maplesoft.com/app/MET(meteora)-Technical-Analysis](https://fr.maplesoft.com/app/MET\(meteora\)-Technical-Analysis)  
88. Top DeFi Tools for Meteora in 2025 \- Slashdot, 访问时间为 七月 27, 2025， [https://slashdot.org/software/defi-tools/for-meteora-solana/](https://slashdot.org/software/defi-tools/for-meteora-solana/)  
89. Alameda Research \- InfluenceWatch.org, 访问时间为 七月 27, 2025， [https://www.influencewatch.org/for-profit/alameda-research/](https://www.influencewatch.org/for-profit/alameda-research/)  
90. Meteora Select Trading Opportunities, LP \- Investor Presentation \- AlphaMaven, 访问时间为 七月 27, 2025， [https://alpha-maven.com/post-investment-listing/meteora-select-trading-opportunities-lp/meteora-select-trading-opportunities-lp-investor-presentation](https://alpha-maven.com/post-investment-listing/meteora-select-trading-opportunities-lp/meteora-select-trading-opportunities-lp-investor-presentation)  
91. Alameda Research \- Wikipedia, 访问时间为 七月 27, 2025， [https://en.wikipedia.org/wiki/Alameda\_Research](https://en.wikipedia.org/wiki/Alameda_Research)  
92. MaticX \- Stader Labs, 访问时间为 七月 27, 2025， [https://www.staderlabs.com/docs/Halborn/StaderLabs%20MaticX%20Smart%20Contract%20Audit%20Report%20by%20Halborn.pdf?\_gl=1\*1mcsxxg\*\_ga\*NzY0Mjk1MjEyLjE2ODA2NzExMDY.\*\_ga\_RJZMMEBJQ5\*MTY4MTEwMzkyMy4xMy4xLjE2ODExMDQ3MTcuMC4wLjA.](https://www.staderlabs.com/docs/Halborn/StaderLabs%20MaticX%20Smart%20Contract%20Audit%20Report%20by%20Halborn.pdf?_gl=1*1mcsxxg*_ga*NzY0Mjk1MjEyLjE2ODA2NzExMDY.*_ga_RJZMMEBJQ5*MTY4MTEwMzkyMy4xMy4xLjE2ODExMDQ3MTcuMC4wLjA.)  
93. Halborn Completes Security Audit of 21BTC on Solana \- Research | 21.co, 访问时间为 七月 27, 2025， [https://www.21.co/blog-articles/halborn-audits-21btc-solana](https://www.21.co/blog-articles/halborn-audits-21btc-solana)  
94. Successful Smart Contract Audit by Cybersecurity Leader Halborn | by Yieldly | Medium, 访问时间为 七月 27, 2025， [https://yieldly.medium.com/successful-smart-contract-audit-by-cybersecurity-leader-halborn-449f52d984c7](https://yieldly.medium.com/successful-smart-contract-audit-by-cybersecurity-leader-halborn-449f52d984c7)  
95. HalbornSecurity/PublicReports \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/HalbornSecurity/PublicReports](https://github.com/HalbornSecurity/PublicReports)  
96. Audits \- Quantstamp, 访问时间为 七月 27, 2025， [https://quantstamp.com/audits](https://quantstamp.com/audits)  
97. Quantstamp \- Public Security Assessments, 访问时间为 七月 27, 2025， [https://certificate.quantstamp.com/](https://certificate.quantstamp.com/)  
98. Quantstamp Audit Launcher, 访问时间为 七月 27, 2025， [https://cdn.prod.website-files.com/675ab99bf1f7ea944d49a55b/68395bb562ad208fb4c572e8\_Quantstamp%20Audit%20-%20ARB%20FDUSD%20-%20Final%20Report.pdf](https://cdn.prod.website-files.com/675ab99bf1f7ea944d49a55b/68395bb562ad208fb4c572e8_Quantstamp%20Audit%20-%20ARB%20FDUSD%20-%20Final%20Report.pdf)  
99. How to Read an Audit Report \- Quantstamp, 访问时间为 七月 27, 2025， [https://quantstamp.com/blog/how-to-read-an-audit-report](https://quantstamp.com/blog/how-to-read-an-audit-report)  
100. Comprehensive Security Audit Completed with Quantstamp \- alluvial.finance, 访问时间为 七月 27, 2025， [https://alluvial.finance/2024-quantstamp-audit/](https://alluvial.finance/2024-quantstamp-audit/)  
101. MET(meteora) Tokenomics Explained \- Safe and Scalable Investment Tips, 访问时间为 七月 27, 2025， [https://amp.newser.com/video/MET(meteora)-Tokenomics-Explained](https://amp.newser.com/video/MET\(meteora\)-Tokenomics-Explained)  
102. Scammer Hayden Davis admits LIBRA had no investment plan \- Mitrade, 访问时间为 七月 27, 2025， [https://www.mitrade.com/insights/news/live-news/article-3-989216-20250726](https://www.mitrade.com/insights/news/live-news/article-3-989216-20250726)  
103. What is Meteora? \#meteora \#solana \#altcoins \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/shorts/QdRDhabvleE](https://www.youtube.com/shorts/QdRDhabvleE)  
104. Can someone explain what this trader did? Added/removed liquidity : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/1jr6me3/can\_someone\_explain\_what\_this\_trader\_did/](https://www.reddit.com/r/solana/comments/1jr6me3/can_someone_explain_what_this_trader_did/)  
105. Meteora Exec Resigns Amid Financial Misconduct Claims \- CryptoPotato, 访问时间为 七月 27, 2025， [https://cryptopotato.com/meteora-exec-resigns-amid-financial-misconduct-claims/](https://cryptopotato.com/meteora-exec-resigns-amid-financial-misconduct-claims/)  
106. SCA Smart Contract Assessment \- 21 Co, 访问时间为 七月 27, 2025， [https://cdn.21.co/uploads/documents/Tokens/21.co\_Token\_Order\_Contract\_Smart\_Contract\_Security\_Assessment\_Report\_Halborn\_Final.pdf](https://cdn.21.co/uploads/documents/Tokens/21.co_Token_Order_Contract_Smart_Contract_Security_Assessment_Report_Halborn_Final.pdf)  
107. Our unique multi-layered approach to security audits | by Stefan Beyer \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/oak-security/there-is-no-perfect-methodology-our-unique-multi-layered-approach-to-security-audits-15e6a9fc7c0f](https://medium.com/oak-security/there-is-no-perfect-methodology-our-unique-multi-layered-approach-to-security-audits-15e6a9fc7c0f)  
108. Oak Security Audit Report \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/cosmwasm/oak-security-audit-report-980870f35541](https://medium.com/cosmwasm/oak-security-audit-report-980870f35541)  
109. Oak Security | Smart Contract Auditing Firm, 访问时间为 七月 27, 2025， [https://www.oaksecurity.io/](https://www.oaksecurity.io/)  
110. oak-security/audit-reports \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/oak-security/audit-reports](https://github.com/oak-security/audit-reports)  
111. CoinMarketCal \- Cryptoasset Calendar, 访问时间为 七月 27, 2025， [https://coinmarketcal.com/](https://coinmarketcal.com/)  
112. Aevo Price Today \- Current AEVO Value to Euro & Live Chart \- Kriptomat, 访问时间为 七月 27, 2025， [https://kriptomat.io/cryptocurrency-prices/aevo-price/](https://kriptomat.io/cryptocurrency-prices/aevo-price/)  
113. AEVO price chart & live trends \- Kraken, 访问时间为 七月 27, 2025， [https://www.kraken.com/prices/aevo](https://www.kraken.com/prices/aevo)  
114. Aevo | Digital Assets \- Bullish, 访问时间为 七月 27, 2025， [https://bullish.com/digital-assets/aevo/](https://bullish.com/digital-assets/aevo/)  
115. Metronome price today, MET to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/metronome/](https://coinmarketcap.com/currencies/metronome/)  
116. Ethereum ETFs See Over $500M Inflows In 1 Day, As Institutions Buy, Whales Are Scooping These ETH Tokens \- Mitrade, 访问时间为 七月 27, 2025， [https://www.mitrade.com/insights/news/live-news/article-3-983618-20250724](https://www.mitrade.com/insights/news/live-news/article-3-983618-20250724)  
117. Progress Report: Breaking down our audit report | by Jordan Croxton \- Hifi Finance, 访问时间为 七月 27, 2025， [https://blog.hifi.finance/progress-report-breaking-down-our-audit-report-20339e21431e](https://blog.hifi.finance/progress-report-breaking-down-our-audit-report-20339e21431e)  
118. Secured Finance \- Report \- Quantstamp, 访问时间为 七月 27, 2025， [https://certificate.quantstamp.com/full/secured-finance/20cad24f-5901-4107-9509-e3d5ad3acc7c/index.html](https://certificate.quantstamp.com/full/secured-finance/20cad24f-5901-4107-9509-e3d5ad3acc7c/index.html)  
119. Executive Summary Summary of Findings Assessment Breakdown, 访问时间为 七月 27, 2025， [https://cdn.prod.website-files.com/675ab99bf1f7ea944d49a55b/67a6260caa412b49914c9458\_Quantstamp%20Audit%20-%20ETH%26BSC%20FDUSD\_Final\_Report.pdf](https://cdn.prod.website-files.com/675ab99bf1f7ea944d49a55b/67a6260caa412b49914c9458_Quantstamp%20Audit%20-%20ETH%26BSC%20FDUSD_Final_Report.pdf)  
120. UNITED STATES OF AMERICA Before the SECURITIES AND EXCHANGE COMMISSION SECURITIES ACT OF 1933 Release No. 11215 / July 21, 2023 \- SEC.gov, 访问时间为 七月 27, 2025， [https://www.sec.gov/files/litigation/admin/2023/33-11215.pdf](https://www.sec.gov/files/litigation/admin/2023/33-11215.pdf)  
121. (PDF) Security Auditors' Perspective in Tackling Cyber-Threats \- ResearchGate, 访问时间为 七月 27, 2025， [https://www.researchgate.net/publication/381280763\_Security\_Auditors'\_Perspective\_in\_Tackling\_Cyber-Threats](https://www.researchgate.net/publication/381280763_Security_Auditors'_Perspective_in_Tackling_Cyber-Threats)  
122. OtterSec, 访问时间为 七月 27, 2025， [https://osec.io/](https://osec.io/)  
123. Meteora \- "The Defiant", 访问时间为 七月 27, 2025， [https://thedefiant.io/tag/meteora](https://thedefiant.io/tag/meteora)  
124. Size Matters: How Meteora Will Multiply Solana's TVL | Ben Chow \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=ZQXJk4GN2Io](https://www.youtube.com/watch?v=ZQXJk4GN2Io)  
125. Methods | Meteor API Docs, 访问时间为 七月 27, 2025， [https://v2-docs.meteor.com/api/methods](https://v2-docs.meteor.com/api/methods)  
126. Looking for Meteora Paid API : r/solana \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/solana/comments/1im4xpq/looking\_for\_meteora\_paid\_api/](https://www.reddit.com/r/solana/comments/1im4xpq/looking_for_meteora_paid_api/)  
127. Meteora 0.6.0 documentation \- Read the Docs, 访问时间为 七月 27, 2025， [https://meteora.readthedocs.io/en/stable/](https://meteora.readthedocs.io/en/stable/)  
128. Meteora | Shyft, 访问时间为 七月 27, 2025， [https://docs.shyft.to/solana-indexers/case-studies/meteora](https://docs.shyft.to/solana-indexers/case-studies/meteora)  
129. Discover Theopetra Cave: Greece's 130,000-Year-Old Wonder \- Visit Meteora, 访问时间为 七月 27, 2025， [https://visitmeteora.travel/theopetra-cave-prehistoric-site/](https://visitmeteora.travel/theopetra-cave-prehistoric-site/)  
130. Meteora Statistics: Markets, Trading Volume & Trust Score | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/exchanges/meteora](https://www.coingecko.com/en/exchanges/meteora)  
131. IntoTheBlock | Intelligent Access to DeFi for Institutional Investors., 访问时间为 七月 27, 2025， [https://www.intotheblock.com/](https://www.intotheblock.com/)  
132. MeteoRA: Multiple-tasks Embedded LoRA for Large Language Models \- arXiv, 访问时间为 七月 27, 2025， [https://arxiv.org/html/2405.13053v1](https://arxiv.org/html/2405.13053v1)  
133. The Messari Report Explained \- Flagship.FYI, 访问时间为 七月 27, 2025， [https://flagship.fyi/outposts/market-insights/the-messari-report-explained/](https://flagship.fyi/outposts/market-insights/the-messari-report-explained/)  
134. Latest \- Page 50 \- "The Defiant", 访问时间为 七月 27, 2025， [https://thedefiant.io/latest/page/50](https://thedefiant.io/latest/page/50)  
135. Messari Research Analysts Publish Crypto Theses 2025 \- PR Newswire, 访问时间为 七月 27, 2025， [https://www.prnewswire.com/news-releases/messari-research-analysts-publish-crypto-theses-2025-302332583.html](https://www.prnewswire.com/news-releases/messari-research-analysts-publish-crypto-theses-2025-302332583.html)  
136. Meteora metrics | Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/meteora/metrics/all](https://tokenterminal.com/explorer/projects/meteora/metrics/all)  
137. Meteora overview \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/meteora](https://tokenterminal.com/explorer/projects/meteora)  
138. Meteora: Home, 访问时间为 七月 27, 2025， [https://www.meteora.ag/](https://www.meteora.ag/)  
139. CoinGecko: Cryptocurrency Prices, Charts, and Crypto Market Cap, 访问时间为 七月 27, 2025， [https://www.coingecko.com/](https://www.coingecko.com/)  
140. CoinMarketCap: Cryptocurrency Prices, Charts And Market ..., 访问时间为 七月 27, 2025， [https://coinmarketcap.com/](https://coinmarketcap.com/)  
141. 访问时间为 一月 1, 1970， [https.www.meteora.ag/pools](http://docs.google.com/https.www.meteora.ag/pools)