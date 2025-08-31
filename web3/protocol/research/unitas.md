

# **Unitas Labs (USDu) 投资评估报告：机遇与风险的深度剖析**

报告日期： 2025年9月1日  
分析师： \[资深金融分析师 & 区块链安全专家\]  
评级： 高风险 / 规避 (持续观察)

### **执行摘要**

本报告旨在对 Unitas Labs 及其在 Solana 区块链上发行的计息稳定币 USDu 提供一份全面的投资评估。核心结论是，尽管该项目由一支在网络安全领域拥有深厚背景的世界级团队支持，但其当前的投资价值因关键信息的严重不透明而大打折扣。主要问题集中在两个方面：首先，关于其核心收益生成机制的公开信息存在直接矛盾；其次，针对已在 Solana 链上运行的 USDu 智能合约，市场未能获取到一份具体、公开的安全审计报告。

分析揭示了两个并存但截然不同的实体：专注于 Solana 和 USDu 的 Unitas Labs，以及专注于以太坊和新兴市场货币稳定币的 Unitas Foundation。尽管两者在核心成员（特别是联合创始人 Wayne Huang）上存在高度重叠，为项目质量提供了间接的信心背书，但这并不能替代直接的证据。链上数据显示，该项目仍处于流动性极低的早期阶段。

主要的投资机会在于 USDu 可能提供的高且可持续的链上收益。然而，这一潜在回报被重大的风险所抵消，包括未经证实的智能合约安全性、与模糊收益模型相关的潜在脱锚事件，以及极低的初期市场采纳率。

综上所述，基于当前可获得的信息，本项目被评定为 **高风险 / 规避 (持续观察)** 级别。建议投资者在 Unitas Labs 明确其收益模型并公布全面的安全审计报告之前，暂缓投入资本，并将其列入观察名单。

---

### **I. 项目基本面与经济模型**

本章节旨在建立对 Unitas 生态系统的基础认知，剖析其双重实体结构，并审慎评估目标资产 USDu 的核心价值主张。

#### **1.1 Unitas 生态系统：区分 Unitas Labs (Solana) 与 Unitas Foundation (Ethereum)**

在进行深入分析之前，首要且最为关键的一步是明确区分两个共享“Unitas”品牌的实体，以避免错误地将其特征、风险和文档归属。这一区分是整个投资论证的基石。

* **Unitas Labs：** 这是本次投资评估的核心主体。该实体在 **Solana** 区块链上发行了 **USDu** 稳定币。其公开的价值主张是“一个在 Solana 上具有透明链上收益的去中心化稳定币” 1。  
* **Unitas Foundation：** 这是一个成立于 2022 年的非营利组织 2。该基金会运营着  
  **Unitas Protocol**，旨在铸造与**新兴市场货币 (EMC)** 挂钩的“单位化稳定币”，例如与印度卢比挂钩的 USD91 4。该协议部署在  
  **以太坊** 网络，由外部的美元稳定币（如 USDT, USDC）进行超额抵押 5。其经济模型涉及  
  **保险提供者 (Insurance Providers, IPs)** 和一个名为 **4REX** 的效用/奖励代币 2。

单一“Unitas”品牌被用于两个在技术、功能和经济模型上截然不同的协议，这为投资者带来了显著的混淆风险。一个典型的尽职调查流程可能会出现偏差：投资者在搜索“Unitas”时，极有可能首先接触到 Unitas Foundation 详尽的白皮书和安全审计报告。他们可能因此错误地假定，这些为以太坊协议提供的文档和安全保证同样适用于 Solana 上的 USDu 产品。这种误解将导致对 USDu 风险状况的严重低估，因为后者在公开渠道中缺乏专属的、可验证的文档支持。因此，这种品牌重叠不仅是市场营销的选择，更构成了一个实质性的投资风险，它复杂化了尽职调查过程，并可能误导不够审慎的投资者。

为了清晰地展示两者差异，下表进行了系统性对比：

**表 1: Unitas 生态系统对比 (Labs vs. Foundation)**

| 特征 | Unitas Labs | Unitas Foundation |
| :---- | :---- | :---- |
| **区块链** | Solana | Ethereum |
| **核心产品** | USDu (计息美元稳定币) | 单位化EMC稳定币 (如 USD91) |
| **核心机制** | 收益生成 (具体机制不明确) | 保险提供者超额抵押 |
| **效用代币** | 未指明 | 4REX |
| **关键文档** | 官网 app.unitas.so | V1 白皮书, Wiki, 审计报告 |
| **目标用户** | DeFi 收益寻求者 | 新兴市场跨境商户 |

#### **1.2 Unitas Labs 的 USDu：核心架构与矛盾的收益机制**

对 USDu 的基本设计进行分析，其核心在于其收益来源。然而，公开信息对此的描述存在严重矛盾，这是评估其风险与回报时最关键的变量。

* 模型 A：增量中性策略 (Delta-Neutral Strategy)  
  一份资料描述 USDu 的机制为一种“与 Jupiter 流动性提供者 (JLP) 池的增量中性套利策略”。该策略通过存入 JLP 作为抵押品，并立即做空等值的永续合约，以中和价格风险，从而锁定并赚取交易费用流 7。这是一个高度复杂的链上原生收益模型，其收益直接来源于链上交易活动的需求。  
* 模型 B：真实世界资产支持 (RWA-Backed Strategy)  
  另一份资料则将 USDu 描述为一种“完全由现金和短期美国国债工具支持的”稳定币，这些资产由受监管的机构托管，并提供链上储备证明 8。这是一个典型的真实世界资产 (RWA) 模型，其收益来源于传统的、链下的金融工具利息。

这两种模型并非互补，而是两种在风险暴露上截然不同的稳定币设计哲学。增量中性策略面临智能合约风险、预言机风险和资金费率变为负值的风险。而 RWA 策略则面临托管风险、交易对手风险以及与链下资产相关的监管风险。项目方向市场传递了两种截然不同的风险/回报信号，这引发了根本性的疑问：项目是否进行了战略转型？是否存在两个不同版本的 USDu？还是市场宣传材料存在严重不准确？在 Unitas Labs 提供确凿、可验证的官方文档以澄清其收益模型之前，投资者无法对 USDu 的风险进行量化评估，这对于一个以“稳定”为卖点的资产而言是不可接受的。

#### **1.3 市场定位与竞争格局 (Solana 生态)**

无论其确切的收益机制为何，USDu 都进入了 Solana 生态中竞争激烈的计息稳定币市场。Solana 的高吞吐量和低交易成本为其提供了理想的运行环境，这相对于其在以太坊上的对应项目是一个显著优势 4。

其竞争格局取决于其最终采用的模式：

* 若为**增量中性模型**，其主要竞争对手将是 Ethena 的 USDe，后者已获得巨大市场关注，展示了此类模型的高收益潜力及其内在风险。  
* 若为**RWA支持模型**，其竞争对手将包括传统的稳定币（如通过借贷协议提供收益的 USDC）以及其他将国债收益传递给持有者的 RWA 代币。

市场对稳定资产的链上原生收益有着明确且强烈的需求。USDu 的成功将取决于其能否提供具有竞争力和可持续性的年化收益率 (APY)，并比竞争对手更有效地管理其特定风险 10。

#### **1.4 创始团队分析与战略关联**

团队是该项目最显著的资产。Unitas Foundation 官网清晰地列出了其核心成员 5。

* **Wayne Huang 博士：** 作为 Unitas Foundation 和 XREX 的联合创始人，其履历极为出色。他曾担任网络安全巨头 Proofpoint (NASDAQ: PFPT) 的工程副总裁，并创立了后被 Proofpoint 收购的网络安全公司 Armorize 12。这种在高风险领域的深厚网络安全经验，是项目技术执行风险的有力缓冲。  
* **战略协同 (XREX & Tether)：** 与受监管的金融科技公司 XREX 的紧密联系是一项重大的战略优势 13。XREX 为 Unitas 的稳定币提供了潜在的真实世界应用场景和分销渠道。近期，Tether 对 XREX 进行了 1875 万美元的战略投资，这是一次强有力的行业背书 4。该公告明确指出，XREX 将与 Unitas Foundation 合作推出黄金支持的稳定币 (XAU1)，这证明了双方直接且持续的合作关系 15。

然而，团队的卓越声誉和 XREX 的高调背书可能会产生一种“光环效应”，导致投资者忽视 USDu 产品本身存在的具体缺陷。一个审慎的投资者会看到 Wayne Huang 的背景和 Tether/XREX 的合作关系，并据此推断项目将秉持高标准的专业性、安全性和透明度。这种假设可能导致他们轻视了 USDu 缺乏独立审计和文档信息矛盾的重要性。因此，分析的核心任务是将团队声誉（一个显著优势）与产品当前的信息披露状况（一个显著弱点）分离开来。

---

### **II. 链上指标与市场分析**

本章节将分析现有的链上数据，以评估 USDu 稳定币当前的市场采纳度、流动性及整体健康状况。

#### **2.1 USDu 代币表现与链上数据**

* **市值与总锁仓价值 (TVL)：** 根据 DeFiLlama 的数据，Unitas (USDU) 在 Solana 上的市值约为 942 万美元 16。这是一个微型市值，表明项目正处于萌芽阶段。尽管近期增长显著（在未指明的周期内增长了 175%），但其基数非常低。  
* **代币地址：** 其在 Solana 上的官方代币地址为 9ckR7pPPvyPadACDTzLwK2ZAEeUJ3qGSnzPs8bVaHrSy 8。该地址是使用 Solscan 等区块链浏览器进行直接链上分析的关键。  
* **链上活动分析：**  
  * **持有人分析：** 通过 Solscan 分析代币持有人的分布情况 17。若代币高度集中于少数非协议控制的钱包，则表明存在显著的中心化和巨鲸风险。  
  * **交易量：** 分析每日交易次数和交易额以评估用户活跃度。相对于市值而言，如果交易量过低，则可能意味着大多数代币被动地用于赚取收益，而非作为交易媒介。  
  * **DEX 流动性：** 检查 USDu 在 Solana 主要去中心化交易所（如 Raydium, Orca）上的流动性池深度。这些池子的深度对于价格稳定以及用户在不产生显著滑点的情况下进出头寸至关重要。

一个低于 1000 万美元的市值将 USDu 定位在“实验性”阶段。低流动性意味着即使是中等规模的交易也可能导致价格滑点，从而引发暂时的脱锚。在此规模下，协议捍卫其锚定的能力未经受市场考验。一次大规模的突然赎回可能会耗尽其储备或支持性的流动性池。因此，尽管被标记为“稳定币”，早期投资者仍面临着成熟稳定币所不具备的巨大流动性和波动性风险。

#### **2.2 协议健康度与收入**

目前，Token Terminal 等数据平台没有提供关于 Unitas Labs 协议收入的具体数据 19。协议的收入模型将直接来源于其收益机制。若为增量中性模型，收入将是扣除支付给 USDu 持有者的 APY 后，从永续合约资金费率和 JLP 费用中获得的总收益的一部分。若为 RWA 支持模型，收入将是基础国债工具收益率与支付给持有者的 APY 之间的利差。考虑到当前极低的 TVL，任何协议收入都可能微不足道，不足以支持持续的开发和运营，项目很可能仍在依靠初始资金运作。

---

### **III. 综合风险与安全评估**

本章节对项目的安全状况及其设计中固有的经济风险进行严格评估。对于稳定币而言，这是报告中最为关键的部分。

#### **3.1 智能合约安全性与审计验证**

**核心发现：缺乏针对 Solana 上 USDu 的直接审计。** 对所有可用材料的详尽审查显示，没有一份安全审计报告是专门针对 Unitas Labs 部署在 Solana 区块链上的 USDu 智能合约的。这是最严重的安全警示信号。

然而，通过其在以太坊上的并行项目，可以推断出团队具备较强的安全文化：

* **Sherlock 审计 (2023年7月)：** Unitas Foundation 为其测试网上线与 Sherlock 合作举办了一场公开的智能合约审计竞赛。公告称，“本次审计竞赛中发现的次要问题已成功修复” 2。对已报告问题的审查显示，存在多个“不修复”项，团队对此给出的理由是基于第一阶段的设计限制和经济假设（如预言机行为、USDT 脱锚场景）22。  
* **ChainLight 审计 (2024年6月)：** 协议的第二阶段由 ChainLight 审计。该审计**未发现高危或严重漏洞**，发现的 3 个中危和 3 个信息级问题均已修复 23。报告指出，完整的审计报告可在基金会网站上获取 23。

这揭示了一个安全悖论：团队显然重视并投资于安全，这一点从他们对以太坊协议采取的多重审计方法中可以得到证明。然而，他们却在没有提供同等级别、透明且可验证的安全保证的情况下，推出了一个公开的、持有用户资产的应用（Solana 上的 USDu）。一个由 Wayne Huang 这样的网络安全专家领导的、具有安全意识的团队，理应明白针对一种代码库（以太坊/Solidity）的审计，对于在不同区块链（Solana/Rust）上的另一种代码库不提供任何安全保证。因此，在没有公开审计的情况下推出 USDu，要么是一个重大的疏忽，要么是对风险的有意识接受。对于投资者而言，这产生了一个抉择：是相信团队的声誉，还是相信可验证的证据（或其缺失）？对于稳定币这种安全至上的资产类别，缺乏直接审计必须被视为决定性因素。

**表 2: 安全审计总结与适用性**

| 特征 | Unitas Foundation (EMC) | Unitas Labs (USDu) |
| :---- | :---- | :---- |
| **区块链** | Ethereum | Solana |
| **审计机构** | Sherlock, ChainLight | **无公开信息** |
| **日期** | 2023年7月, 2024年6月 | 不适用 |
| **关键发现** | 次要/信息级问题已处理 | **未知** |
| **对USDu的适用性** | **仅为间接/推断性** | 直接 (缺失) |

#### **3.2 经济与协议层面风险**

* **A. 脱锚与稳定性风险 (双重分析)：**  
  * **若为增量中性模型：**  
    * **资金费率风险：** 主要收益来源可能在长时间内转为负值，这意味着协议需要付费来维持其对冲头寸，这将侵蚀储备金并迫使 APY 下降，可能引发挤兑。  
    * **清算级联风险：** 基础抵押品（如 JLP）价格的剧烈波动可能引发大规模的空头头寸清算，造成重大损失并导致稳定币脱锚。  
    * **平台风险：** 该策略完全依赖于外部永续合约平台（如 Jupiter）的正常运行、流动性和安全性。该平台的任何漏洞都将直接影响 USDu。  
  * **若为RWA支持模型：**  
    * **托管风险：** 现金和国库券必须由第三方托管。托管方的失败、资产被扣押或欺诈行为将使支持资产变得毫无价值 26。目前，该托管方的身份和声誉未知。  
    * **赎回风险：** 在危机期间，协议可能无法足够迅速地赎回链下资产以满足链上需求，从而导致脱锚。  
    * **透明度风险：** “链上储备证明”机制的细节未被披露。它可能依赖于可能失败或被操纵的预言机或证明。  
* **B. 系统性与抵押品风险：** 协议暴露于其用作抵押的资产的风险之中。Unitas Foundation 的协议使用一篮子美元稳定币（USDT, USDC, DAI）28，使其易受其中任何一种稳定币脱锚的影响，类似于 SVB 危机期间 USDC 脱锚对 DAI 的冲击 4。USDu 将面临类似的风险，具体取决于其抵押品（JLP, SOL 或 RWA 投资组合中的基础资产）。

#### **3.3 监管与中心化顾虑**

* **监管压力：** 稳定币正面临全球范围内日益严格的监管审查 30。一种计息稳定币，特别是那种由复杂衍生品或 RWA 支持的稳定币，可能会引起监管机构（如 SEC）的特别关注。  
* **中心化：** 研究材料中未详细说明协议的治理结构。管理 RWA 储备或调整增量中性策略中的风险参数等关键功能，很可能由团队持有的多签钱包控制 32。这在项目早期阶段构成了显著的中心化风险。

---

### **IV. 投资机会与策略路径**

本章节评估投资者可以参与 Unitas 生态系统的具体方式，并分析每种策略的风险回报特征。

#### **4.1 主要收益策略：获取并持有 USDu**

核心投资策略是在 Solana 上购买或铸造 USDu，并持有以赚取其原生的链上收益。这是投资者最感兴趣的“高 APR”机会。具体的 APY 在研究材料中并未说明，其可持续性和水平完全取决于未知的收益机制。增量中性策略可能提供波动但潜在更高的 APY（例如 15-30%+），而 RWA 支持的策略则可能提供更稳定但较低的 APY（例如 4-6%，与国债利率挂钩）。

#### **4.2 次级收益策略：DeFi 集成与流动性提供**

持有 USDu 后，投资者可将其用于更广泛的 Solana DeFi 生态系统以产生额外收益 33。主要方式是在 DEX（如 Raydium）上为 USDu/USDC 或 USDu/SOL 等交易对提供流动性。此举可以赚取交易手续费，并可能在流动性挖矿计划启动后获得额外的代币奖励。然而，该策略引入了无常损失的风险，如果配对资产（如 SOL）价格大幅波动，可能会抵消 USDu 的原生收益。

#### **4.3 开发者生态系统机会**

研究中没有提供关于 Unitas Labs 或 USDu 的开发者 SDK、公共 API 或资助计划的信息 5。这表明项目尚未将重点放在构建第三方开发者生态系统上，反映出项目路线图的成熟度不足。

#### **4.4 相关机会：Unitas Foundation 的保险提供者质押 (4REX)**

这是一个在以太坊上独立的机会。“保险提供者”(IPs) 可以将他们的美元稳定币（如 USDT）存入 Unitas Protocol，为新兴市场稳定币提供超额抵押储备 5。作为回报，IPs 可以分享协议的利润并获得

**4REX** 代币 5。协议的收入来源于兑换费、储备金产生的收益以及新兴市场货币贬值带来的利润 4。虽然这不是对 USDu 的直接投资，但它展示了团队设计复杂经济模型的能力，并为投资者提供了另一种接触 Unitas 生态系统和团队的途径。

**表 3: 投资机会与风险矩阵**

| 策略 | 潜在回报 | 主要风险 | 复杂度 |
| :---- | :---- | :---- | :---- |
| **持有 USDu (Solana)** | 原生 APY (可变) | 脱锚风险, 智能合约漏洞, 收益来源失败 | 低 |
| **为 USDu 提供流动性 (Solana)** | 交易费 \+ LP 奖励 | 无常损失, DEX 漏洞 | 中 |
| **作为 IP 质押 (Ethereum)** | 协议利润 \+ 4REX 代币 | 协议偿付能力, EMC 波动, 智能合约漏洞 | 高 |

---

### **V. 结论与最终投资评级**

本章节将所有先前的分析综合成一个 SWOT 框架，并提出明确的投资论点和最终评级。

#### **5.1 SWOT 分析**

* **优势 (Strengths):**  
  * **顶尖团队：** 领导层在网络安全领域拥有世界级的、经过验证的专业知识 12。  
  * **战略联盟：** 与受监管的金融科技公司 XREX 关系紧密，并与行业巨头 Tether 存在合作关系 14。  
  * **市场契合度高：** 在高效的 Solana 生态中，满足了市场对稳定币原生收益的强烈需求 9。  
  * **已证实的安**全文化（间接推断）：在其并行的以太坊项目上采用了严格的多重审计方法 2。  
* **劣势 (Weaknesses):**  
  * **严重缺乏透明度：** 核心收益机制信息矛盾且不明确 7。  
  * **线上产品无公开审计：** 针对 Solana 上的 USDu 合约缺乏公开的安全审计报告，这是一个重大的未缓解风险。  
  * **发展阶段过早：** 极低的市场规模（约 942 万美元）和 TVL，表明市场采纳率极低，流动性风险高 16。  
  * **沟通与品牌混乱：** 两个 Unitas 实体之间的品牌混淆使尽职调查复杂化。  
* **机会 (Opportunities):**  
  * **先发潜力：** 如果其高收益模型被证明是安全且可持续的，项目在 Solana 上有巨大的增长潜力。  
  * **利用 XREX 合作关系：** 未来与 XREX 的整合可能提供强大的分销渠道和真实世界用例。  
  * **生态系统扩展：** 一旦核心产品成熟，有机会推出开发者资助和 SDK 以促进生态增长。  
* **威胁 (Threats):**  
  * **激烈竞争：** 计息稳定币市场存在已有的和新兴的强大竞争对手（如 Ethena）。  
  * **经济模型失败：** 持续的负资金费率或 RWA 托管链的失败可能导致灾难性的脱锚。  
  * **监管审查：** 全球监管机构正日益关注稳定币，特别是复杂的计息变体。  
  * **智能合约漏洞：** 未经审计的线上合约始终面临被黑客攻击的威胁。

#### **5.2 投资论点与建议**

Unitas Labs 目前呈现出一个引人注目但存在严重缺陷的投资命题。该项目的优势几乎完全集中在其团队的声誉和战略联盟上，这种“人力资本”无疑是顶级的。然而，这与产品本身的状况形成了鲜明对比，后者在透明度和可验证的安全性方面存在致命缺陷。对于稳定币这一资产类别而言，信任和安全是其核心价值主张，当前的信息鸿沟构成了投资案例中的一个根本性障碍。高回报的潜力无法弥补由未知收益模型和未经审计代码所带来的无法量化的风险。

**最终投资评级：高风险 / 规避 (持续观察)**

* **评级理由：** “规避”评级的依据是两个关键的警示信号：1) 缺乏对 Solana 线上合约的公开审计；2) 收益生成机制存在根本性的模糊之处。这些问题使得进行适当的风险评估成为不可能。  
* **“持续观察”的补充说明：** 该项目应被列入观察名单。一旦发生以下事件，应立即重新评估其评级：  
  1. **公布一份由信誉良好的公司（如 OtterSec, Trail of Bits, Zellic）出具的、针对 USDu Solana 合约的全面安全审计报告。**  
  2. **团队发布清晰、明确且可验证的文档，详细解释其确切的收益机制，包括所有相关的合作伙伴、托管方和智能合约。**

在这些条件得到满足之前，任何资本投入都将是对团队声誉的纯粹投机，而非基于数据的稳健投资决策。

#### **引用的著作**

1. Unitas | USDu \- Decentralized Stablecoin on Solana with ..., 访问时间为 八月 31, 2025， [https://app.unitas.so](https://app.unitas.so)  
2. Unitas Protocol Launches Testnet after Completing Smart Contract Security Audits by Sherlock \- Medium, 访问时间为 八月 31, 2025， [https://medium.com/@unitas.foundation/unitas-protocol-launches-testnet-after-completing-smart-contract-security-audits-by-sherlock-b03d86210a5d](https://medium.com/@unitas.foundation/unitas-protocol-launches-testnet-after-completing-smart-contract-security-audits-by-sherlock-b03d86210a5d)  
3. First "Unitized" Stablecoin Protocol: Unitas Foundation Releases Whitepaper \- PR Newswire, 访问时间为 八月 31, 2025， [https://www.prnewswire.com/news-releases/first-unitized-stablecoin-protocol-unitas-foundation-releases-whitepaper-301745212.html](https://www.prnewswire.com/news-releases/first-unitized-stablecoin-protocol-unitas-foundation-releases-whitepaper-301745212.html)  
4. The Unitas Protocol for emerging market currency stablecoins \- Ledger Insights, 访问时间为 八月 31, 2025， [https://www.ledgerinsights.com/the-unitas-protocol-for-emerging-market-currency-stablecoins/](https://www.ledgerinsights.com/the-unitas-protocol-for-emerging-market-currency-stablecoins/)  
5. Unitas Foundation: Home, 访问时间为 八月 31, 2025， [https://unitas.foundation/](https://unitas.foundation/)  
6. Unitas Protocol Launches Second Phase on Mainnet, Introducing Insurance Provider and 4REX Token \- Canada Newswire, 访问时间为 八月 31, 2025， [https://www.newswire.ca/news-releases/unitas-protocol-launches-second-phase-on-mainnet-introducing-insurance-provider-and-4rex-token-862788911.html](https://www.newswire.ca/news-releases/unitas-protocol-launches-second-phase-on-mainnet-introducing-insurance-provider-and-4rex-token-862788911.html)  
7. Unitas: Project Guide | Latest Updates, Presale & Airdrop, 访问时间为 八月 31, 2025， [https://web3.bitget.com/en/dapp/unitas-25771](https://web3.bitget.com/en/dapp/unitas-25771)  
8. USDu (USDU) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 八月 31, 2025， [https://www.forbes.com/digital-assets/assets/usdu-usdu-2/](https://www.forbes.com/digital-assets/assets/usdu-usdu-2/)  
9. Solana: one blockchain, half the users \- WisdomTree Prime, 访问时间为 八月 31, 2025， [https://www.wisdomtreeprime.com/blog/solana-one-blockchain-half-the-users/](https://www.wisdomtreeprime.com/blog/solana-one-blockchain-half-the-users/)  
10. Yield-Bearing Stablecoins: The Convergence of TradFi and DeFi | by Amber Group, 访问时间为 八月 31, 2025， [https://ambergroup.medium.com/yield-bearing-stablecoins-the-convergence-of-tradfi-and-defi-9f37d0cab327](https://ambergroup.medium.com/yield-bearing-stablecoins-the-convergence-of-tradfi-and-defi-9f37d0cab327)  
11. White Papers and Learning Material | Unitas Foundation, 访问时间为 八月 31, 2025， [https://wiki.unitas.foundation/unitas-protocol-v1/white-papers-and-learning-material](https://wiki.unitas.foundation/unitas-protocol-v1/white-papers-and-learning-material)  
12. Wayne Huang \- Asia Blockchain Summit, 访问时间为 八月 31, 2025， [https://abs.io/abs024/speakers/wayne-huang/](https://abs.io/abs024/speakers/wayne-huang/)  
13. Wayne Huang, PhD | Unitas Foundation, 访问时间为 八月 31, 2025， [https://wiki.unitas.foundation/unitas-protocol-v1/unitas-foundation-team/wayne-huang](https://wiki.unitas.foundation/unitas-protocol-v1/unitas-foundation-team/wayne-huang)  
14. XREX Participates in Unitas Sandbox, a New DeFi USD Exchange-Rate-Derived Stablecoin Protocol, 访问时间为 八月 31, 2025， [https://xrex.io/tw/en/blog/zh/announcements/xrex-participates-in-unitas-sandbox-a-new-defi-usd-exchange-rate-derived-stablecoin-protocol/](https://xrex.io/tw/en/blog/zh/announcements/xrex-participates-in-unitas-sandbox-a-new-defi-usd-exchange-rate-derived-stablecoin-protocol/)  
15. Tether Invests $18.75M in XREX Group to Drive Financial Inclusion in Emerging Markets, 访问时间为 八月 31, 2025， [https://www.prnewswire.com/news-releases/tether-invests-18-75m-in-xrex-group-to-drive-financial-inclusion-in-emerging-markets-302163384.html](https://www.prnewswire.com/news-releases/tether-invests-18-75m-in-xrex-group-to-drive-financial-inclusion-in-emerging-markets-302163384.html)  
16. Total Solana Stablecoins Market Cap \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/stablecoins/Solana](https://defillama.com/stablecoins/Solana)  
17. How to Use Solscan to Find Potential Altcoins \- Pintu News, 访问时间为 八月 31, 2025， [https://pintu.co.id/en/news/190354-how-to-use-solscan-to-find-potential-altcoins](https://pintu.co.id/en/news/190354-how-to-use-solscan-to-find-potential-altcoins)  
18. What Is SolScan and How to Use It? \- Binance Academy, 访问时间为 八月 31, 2025， [https://academy.binance.com/en/articles/what-is-solscan-and-how-to-use-it](https://academy.binance.com/en/articles/what-is-solscan-and-how-to-use-it)  
19. Fundamentals for crypto \- Token Terminal, 访问时间为 八月 31, 2025， [https://tokenterminal.com/explorer/markets/lending/metrics/revenue](https://tokenterminal.com/explorer/markets/lending/metrics/revenue)  
20. Earnings | Token Terminal, 访问时间为 八月 31, 2025， [https://tokenterminal.com/explorer/metrics/earnings](https://tokenterminal.com/explorer/metrics/earnings)  
21. Unitas Protocol Launches Testnet after Completing Smart Contract Security Audits by Sherlock \- PR Newswire, 访问时间为 八月 31, 2025， [https://www.prnewswire.com/apac/news-releases/unitas-protocol-launches-testnet-after-completing-smart-contract-security-audits-by-sherlock-301878132.html](https://www.prnewswire.com/apac/news-releases/unitas-protocol-launches-testnet-after-completing-smart-contract-security-audits-by-sherlock-301878132.html)  
22. Reported issues | Unitas Foundation, 访问时间为 八月 31, 2025， [https://wiki.unitas.foundation/unitas-protocol-v1/audit-reports/sherlock-security-audit/reported-issues](https://wiki.unitas.foundation/unitas-protocol-v1/audit-reports/sherlock-security-audit/reported-issues)  
23. Unitas Protocol Upgrades Smart Contract and Completes Security Audit By ChainLight, 访问时间为 八月 31, 2025， [https://www.prnewswire.com/news-releases/unitas-protocol-upgrades-smart-contract-and-completes-security-audit-by-chainlight-302236400.html](https://www.prnewswire.com/news-releases/unitas-protocol-upgrades-smart-contract-and-completes-security-audit-by-chainlight-302236400.html)  
24. Unitas Protocol Upgrades Smart Contract and Completes Security Audit By ChainLight, 访问时间为 八月 31, 2025， [https://www.newswire.ca/news-releases/unitas-protocol-upgrades-smart-contract-and-completes-security-audit-by-chainlight-865060233.html](https://www.newswire.ca/news-releases/unitas-protocol-upgrades-smart-contract-and-completes-security-audit-by-chainlight-865060233.html)  
25. ChainLight Security Audit | Unitas Foundation, 访问时间为 八月 31, 2025， [https://wiki.unitas.foundation/unitas-protocol-v1/audit-reports/chainlight-security-audit](https://wiki.unitas.foundation/unitas-protocol-v1/audit-reports/chainlight-security-audit)  
26. Security Risks of Stablecoins \- CertiK, 访问时间为 八月 31, 2025， [https://www.certik.com/resources/blog/security-risks-of-stablecoins](https://www.certik.com/resources/blog/security-risks-of-stablecoins)  
27. The Security Risks of Stablecoins: How Hackers Exploit Centralized and Decentralized Issuers \- Chainalysis, 访问时间为 八月 31, 2025， [https://www.chainalysis.com/blog/stablecoin-security-risks/](https://www.chainalysis.com/blog/stablecoin-security-risks/)  
28. Reshaping Cross-Border Finance: Unitas Foundation and the USD1 Token Ecosystem Explained \- MEXC Exchange, 访问时间为 八月 31, 2025， [https://www.mexc.com/learn/article/reshaping-cross-border-finance-unitas-foundation-and-the-usd1-token-ecosystem-explained/1](https://www.mexc.com/learn/article/reshaping-cross-border-finance-unitas-foundation-and-the-usd1-token-ecosystem-explained/1)  
29. Unitas: A Decentralized, Exogenously Over- Reserved, USD ..., 访问时间为 八月 31, 2025， [https://unitas.foundation/whitepapers/Unitas-Protocol-V1-en.pdf](https://unitas.foundation/whitepapers/Unitas-Protocol-V1-en.pdf)  
30. Stablecoins are trending, but what frictions and risks are getting overlooked?, 访问时间为 八月 31, 2025， [https://www.atlanticcouncil.org/blogs/econographics/stablecoins-are-trending-but-what-frictions-and-risks-are-getting-overlooked/](https://www.atlanticcouncil.org/blogs/econographics/stablecoins-are-trending-but-what-frictions-and-risks-are-getting-overlooked/)  
31. 284 | Breaking Analysis | Stablecoins Gain Legitimacy as Crypto Finds Clarity in the Regulatory Fog \- theCUBE Research, 访问时间为 八月 31, 2025， [https://thecuberesearch.com/284-breaking-analysis-stablecoins-gain-legitimacy-as-crypto-finds-clarity-in-the-regulatory-fog/](https://thecuberesearch.com/284-breaking-analysis-stablecoins-gain-legitimacy-as-crypto-finds-clarity-in-the-regulatory-fog/)  
32. sherlock-audit/2023-04-unitasprotocol \- GitHub, 访问时间为 八月 31, 2025， [https://github.com/sherlock-audit/2023-04-unitasprotocol](https://github.com/sherlock-audit/2023-04-unitasprotocol)  
33. 10 Best DeFi Yield Farming Strategies for 2024: High Returns, Low Risk \- Rapid Innovation, 访问时间为 八月 31, 2025， [https://www.rapidinnovation.io/post/defi-yield-farming-strategies-maximizing-returns-minimizing-risks](https://www.rapidinnovation.io/post/defi-yield-farming-strategies-maximizing-returns-minimizing-risks)  
34. A Beginner's Guide to DeFi Yield Farming \- SoluLab, 访问时间为 八月 31, 2025， [https://www.solulab.com/beginners-guide-to-defi-yield-farming/](https://www.solulab.com/beginners-guide-to-defi-yield-farming/)  
35. Top 10 DeFi yielding strategies for profitable success in 2024 \- Osiz Technologies, 访问时间为 八月 31, 2025， [https://www.osiztechnologies.com/blog/profitable-defi-yield-farming-strategy](https://www.osiztechnologies.com/blog/profitable-defi-yield-farming-strategy)