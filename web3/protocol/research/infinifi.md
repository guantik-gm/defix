

# **infinifi (infinifi.xyz) 投资尽职调查报告：高收益与高风险匿名的博弈**

## **执行摘要**

本报告对去中心化金融（DeFi）协议 infinifi (infinifi.xyz) 进行了全面的投资尽职调查。infiniFi 将自身定位为“优于银行”的收益生成引擎，通过在链上重建现代银行基础设施，利用透明的部分准备金系统为稳定币存款人提供极具竞争力的收益率 1。该协议已成功吸引到顶级风险投资机构（如 Electric Capital）和知名行业领袖（如 Frax 创始人 Sam Kazemian）领投的 300 万美元种子前轮融资，并在短期内积累了超过 4400 万美元的总锁定价值（TVL），显示出强大的资本吸引力 2。

然而，这些积极信号被一系列重大风险所完全掩盖。首先，项目团队完全匿名，无任何公开身份信息，这带来了极端的对手方风险和责任真空 1。其次，尽管行业标准平台 DeFiLlama 标注该项目“已审计”，但本报告经过详尽调查，未能找到任何公开可验证的第三方安全审计报告 2。这种信息上的矛盾和透明度的缺失，将智能合约风险提升至最高级别。

投资者面临的核心困境是：是否要相信顶级风投的背书，押注于一个技术上看似精良但运营上完全不透明的协议。本报告的分析表明，该协议的潜在回报（高 APY 及预期的空投）与其固有的、无法量化的安全风险之间存在严重的不对称。

**最终投资评级：不建议**。在团队公开身份并发布由多家信誉良好公司出具的全面安全审计报告之前，任何投资都无异于一场高风险的赌博。对于审慎的投资者而言，当前阶段的风险敞口是不可接受的。

---

## **1.0 项目分析：解构 infinifi 协议**

### **1.1. 定义分析对象：将 infinifi.xyz 从市场噪音中分离**

在进行深入分析之前，必须明确本报告的唯一研究对象。市场上存在大量名称相似的实体，极易引发混淆。本报告的分析**不涉及**以下任何项目：

* **Infinity Token (IT)**：一个基于以太坊的、通过比特币和以太坊挖矿来支持代币回购和销毁的加密货币项目 4。  
* **Infinity Pharma (INFI/INFIQ)**：一家在传统股票市场交易的制药公司，其股票代码与加密项目无关 6。  
* **其他不相关的实体**：包括汽车品牌英菲尼迪（Infiniti）、各类软件、人力资源、IT 安全及咨询服务公司等，这些实体与本报告分析的 DeFi 协议没有任何关联 9。

本报告的分析范围**严格限定**于位于 infinifi.xyz 的 DeFi 收益协议，及其在 DeFiLlama 上的对应条目 1。这一明确界定是确保后续所有分析准确性和相关性的基石。

### **1.2. 核心价值主张：一个“优于银行”的收益生成引擎**

infiniFi 的核心叙事是为 DeFi 用户提供比传统金融及其他 DeFi 协议更优越的稳定币收益 1。其官方网站宣称，项目旨在“通过在链上重建现代银行基础设施来构建去中心化金融的未来”，并利用一个“资本高效的透明部分准备金系统”，为存款人创造更高的收益，同时声称不增加系统性风险 1。

该协议为用户提供了两种简单明了的收益产品：

1. **Stake（质押）**：用户存入稳定币（如 USDC），即可获得一个浮动年化收益率（APY），最高可达 13%。此模式下的资金可随时提取，具有高流动性 1。  
2. **Lock（锁定）**：用户将稳定币锁定一段固定时间，以换取更高的、经过加成的 APY，最高可达 31%。此模式旨在吸引长期看好该协议并追求最大化收益的用户 1。

这种双轨制产品设计，同时满足了对流动性敏感和对高收益敏感两类不同用户的需求。

### **1.3. 技术架构：部分准备金模型与关键智能合约探析**

根据其在 GitHub 上的开源代码库 InfiniFi-Labs/infinifi-protocol，我们可以深入了解其技术实现。该协议主要使用 Solidity 语言编写（占比 71.2%），并展现出高度模块化的设计思路 3。

* **核心组件**：协议的核心由几个关键合约构成，包括负责收益分配的 YieldSharing.sol，处理协议内部账目的 Accounting.sol，以及管理角色和权限的中心合约 InfiniFiCore.sol。这种模块化架构通常意味着更清晰的逻辑和更易于维护的代码，是成熟开发实践的体现 3。  
* **用户交互流程**：用户的绝大部分操作，如铸造、赎回、锁定和治理投票，都通过一个统一的入口合约 InfiniFiGatewayV1.sol 进行。当用户存入抵押品（例如 USDC）时，MintController.sol 会铸造相应的生息凭证代币（例如 iUSD）。赎回请求则由 RedeemController.sol 通过一个队列系统处理，该系统会优先使用协议中的流动资产来满足即时赎回需求 3。  
* **收益生成机制**：协议的收益并非凭空产生，而是通过整合其他成熟的 DeFi 协议来实现的。它同时支持流动性挖矿策略（如在 Aave 中存款）和非流动性挖矿策略（如参与 Pendle 的固定收益市场）。存入的资产会通过 AfterMintHook.sol 和 BeforeRedeemHook.sol 等钩子函数，以及一个名为 ManualRebalancer.sol 的手动再平衡合约，在这些不同的“农场”之间进行动态分配和再平衡。手动再平衡合约的存在暗示，协议的部分核心资本运作可能依赖于团队的人工干预 2。  
* **治理机制**：协议内置了一套基于锁定代币权重的投票系统 AllocationVoting.sol。该系统允许锁仓用户投票决定资金在不同收益策略（农场）之间的分配比例。这是协议未来实现去中心化治理的关键一步 3。

### **1.4. 生态协同：对 Aave、Pendle 及 Ethena 集成的分析**

DeFiLlama 的数据显示，infiniFi 的收益策略深度整合了三个行业领先的协议：Aave、Pendle 和 Ethena 2。这种模式通常被称为“收益聚合”或“协议叠加”策略。infiniFi 在此生态中扮演了一个“元协议”的角色，它将底层协议复杂的交互逻辑抽象化，为终端用户提供一个经过打包和简化的聚合收益产品。

这种策略是一把双刃剑，其利弊需要深入剖析。一方面，通过站在 Aave 和 Pendle 等巨人的肩膀上，infiniFi 能够迅速启动其收益来源，无需自行开发和验证全新的、可能充满风险的收益模型。这使得它能够直接利用底层协议的安全性、流动性和市场信誉。

然而，另一方面，这也造成了深度的“协议依赖性”。任何源自 Aave、Pendle 或 Ethena 的风险，无论是智能合约漏洞、预言机失灵、经济模型缺陷还是监管打击，都会直接传导并放大为 infiniFi 的系统性风险。例如，如果 Ethena 的稳定币 USDe 发生脱锚事件，那么 infiniFi 配置在该策略中的那部分资金将面临毁灭性打击。

因此，投资 infiniFi 不仅仅是投资其自身的智能合约，更是对 Aave、Pendle、Ethena 等一揽子协议的综合风险敞口。这种“风险叠加”是评估此类元协议时必须考虑的核心要素，却常常被投资者忽视。infiniFi 的长期成功，不仅取决于其自身的代码质量，更取决于其动态管理资产配置、有效对冲来自底层协议风险的能力。

---

## **2.0 金融与竞争市场分析**

### **2.1. 链上指标深度挖掘：总锁定价值（TVL）、资本流动与用户活动**

根据 DeFiLlama 的最新数据，infiniFi 的总锁定价值（TVL）为 **4476 万美元**，且所有资金均部署在以太坊主网上 2。项目官网的仪表盘显示的数据略高，为 5698 万美元，这种差异在 DeFi 领域较为常见，通常源于不同的 TVL 计算方法 1。本报告将采用 DeFiLlama 的数据作为行业标准进行分析。

该协议成立于 2024 年，其 TVL 在短时间内实现如此迅速的增长，尤其是在几乎没有公开市场营销的情况下，表现相当引人注目 2。

开发活动方面，数据显示该项目保持着相当高的活跃度：每周有 20 次代码提交，每月有 26 次，活跃开发者数量在 5 到 7 人之间，且最近一次提交就在数天前 2。这表明项目正处于积极的开发和迭代周期中，并非停滞或被遗弃的项目。

### **2.2. 风险资本背书与投资者背景：300 万美元种子前轮融资的重大意义**

2025 年 2 月 10 日，infiniFi 宣布完成了一轮 **300 万美元**的种子前轮融资 2。其投资者阵容堪称 Web3 领域的顶级配置，包括

**Electric Capital、New Form Capital、Axiom、Kraynos Capital** 等知名风投机构，以及 DeFi 领域的关键意见领袖，如 **Defi Dad** 和 Frax Finance 的创始人 **Sam Kazemian** 2。

这种顶级的 VC 背书与团队的完全匿名状态之间形成了强烈的反差，从而产生了一个“内部人信任”困境。通常情况下，像 Electric Capital 这样的顶级 VC 会进行极为详尽的尽职调查，几乎可以肯定他们已经核实了创始团队的真实身份、背景和过往履历。这些 VC 愿意投资一个对外匿名的团队，这本身就是一个强烈的信号。

这背后可能存在几种情况。一种可能是，VC 们在尽调后认为该团队拥有卓越的技术能力和可靠的信誉，而匿名是团队为了规避个人安全风险或应对不确定的监管环境而提出的策略性要求。另一种可能是，VC 们认为匿名叙事本身有助于项目在早期吸引特定的“密码朋克”社群。

无论原因为何，这都给公开市场的投资者造成了巨大的信息不对称。普通投资者无法亲自对团队进行尽调，他们被要求将信任建立在 VC 的判断之上。投资 infiniFi 在某种程度上变成了一场对 Electric Capital 和 Sam Kazemian 尽调能力的代理人押注。

因此，尽管强大的 VC 背书是一个非常积极的信号，但它并不能免除项目对公众投资者的透明度和安全责任。它只是将风险的性质从“未知的团队，未知的风险”转变为“被内部人信任的团队，但公众无从追索的风险”。对于任何考虑将资金存入该协议的投资者来说，这是一个必须清醒认识到的关键区别。

### **2.3. 代币经济学：凭证代币（iUSD）的功能与治理代币之谜**

目前，infiniFi 协议没有公开交易的治理代币。其生态系统中的核心代币是**凭证代币**（如 iUSD、iETH），它们代表用户在协议中的存款份额，以及一种名为 **LockedPositionToken** 的 ERC-20 代币，用于代表用户的锁仓头寸 3。

在所有公开信息中，包括其官网和代码库，均未找到关于未来治理代币的白皮书或详细文档，其分配机制、具体效用等信息尚属未知 1。对“tokenomics”的搜索结果也多为通用概念或其他项目的信息 26。

然而，协议中明确存在的“**积分计划**”（Points Program）1 和一个功能完备的治理模块（

AllocationVoting.sol）3，是两个极其强烈的信号，预示着未来极有可能推出治理代币并通过空投（Airdrop）进行分发。这是 DeFi 领域引导社区参与、实现协议去中心化治理的标准模式。其他项目的空投案例也反复印证了这一策略的普遍性 32。

### **2.4. 竞争格局：与收益市场领导者的对标分析**

DeFiLlama 将 infiniFi 归类为“收益”（Yield）赛道，并列出了其主要竞争对手，其中包括 **Pendle（TVL 49.05 亿美元）、Convex Finance（TVL 10.24 亿美元）和 Aura（TVL 3.33 亿美元）** 2。与这些巨头相比，infiniFi 的体量尚小，但其竞争策略似乎是通过提供更简洁的用户体验和可能更高的聚合收益率来吸引用户。

为了更直观地评估 infiniFi 的市场地位，下表将其与主要竞争对手进行了横向对比。这张表格的价值在于，它将 infiniFi 置于真实的竞争环境中，使其优势（如潜在的高 APY、强大的 VC 背景）和劣势（如 TVL 规模、缺乏公开审计、团队匿名）一目了然，为最终的投资决策提供了关键的背景信息。

**表 2.4.1：竞争矩阵：infiniFi vs. 关键竞争对手**

| 特性 | infiniFi | Pendle Finance | Convex Finance |
| :---- | :---- | :---- | :---- |
| **总锁定价值 (TVL)** | 4476 万美元 2 | 49.05 亿美元 2 | 10.24 亿美元 2 |
| **核心价值主张** | 简化操作的聚合收益协议，采用部分准备金模型提升收益 2 | 利率互换市场，将未来收益代币化并进行交易 | Curve 和 Frax 的收益和治理增强平台 |
| **旗舰产品 APY (示例)** | 锁定稳定币最高可达 31% 1 | 多样化，取决于具体资产和市场，范围较广 | 增强的 CRV/FXS 挖矿收益 |
| **公开安全审计** | **否** (DeFiLlama 标注为“是”，但无公开报告) 2 | **是** (多家顶级公司审计，如 Ackee, Dedaub, ChainSecurity) 38 | **是** (多家公司审计，如 Peckshield, MixBytes) 43 |
| **团队透明度** | **匿名** 1 | **公开/半公开** | **匿名** |
| **顶级 VC 背书** | **是** (Electric Capital, Sam Kazemian 等) 2 | **是** (Binance Labs, Spartan Group 等) | **否** (社区驱动启动) |

---

## **3.0 安全状况与风险评估**

### **3.1. 链上安全框架：已声明的保障措施与访问控制**

从其 GitHub 代码库来看，infiniFi 团队对安全问题有基本的认知和设计。协议通过 CoreControlled.sol 合约实现了基于角色的访问控制，设立了两个关键权限角色 3：

* **Guardian（监护人）角色**：拥有执行紧急操作的权限，例如暂停协议等，用于应对突发安全事件。  
* **Governor（治理者）角色**：负责管理协议的核心参数，如调整费用、添加新的收益策略等。

更重要的是，团队在其官方文档中主动识别并列出了协议面临的关键风险领域，包括**价格操纵风险**（通过预言机攻击）、**流动性管理风险**（再平衡策略和赎回队列可能出现问题）以及**治理攻击风险**（投票权重被操纵以谋取私利）3。这种对潜在风险的自我披露，在一定程度上反映了开发团队的专业性和成熟度。

### **3.2. 审计之谜：对严重缺乏公开安全审计报告的调查**

这是 infiniFi 项目最致命的红旗。DeFiLlama 页面明确标注该协议“已审计”（Audits: Yes）2。然而，经过对全网的详尽搜索，包括使用特定关键词查询审计报告文件（例如，

infinifi protocol "security audit" report filetype:pdf），**没有找到任何一份针对 infinifi.xyz 协议的、由第三方发布的公开安全审计报告** 48。

在 DeFi 世界，信誉良好的第三方审计是用户信任的基石，是项目方证明其代码安全性的最基本方式。像其竞争对手 Pendle 那样，公布由 Ackee、Dedaub、ChainSecurity 等多家公司出具的审计报告，才是行业标准做法 38。

虽然 infiniFi 的 GitHub 提到其拥有全面的内部测试覆盖（包括单元测试、集成测试和模糊测试），并声称“测试覆盖率报告可应要求提供”，但这远远不够 3。内部测试无法替代外部独立、具备对抗性思维的专业审计。

这种状况创造了一个“薛定谔的审计”困境，其风险远超一份披露了若干中低风险漏洞的审计报告。DeFiLlama 的“是”与公开记录的“否”之间存在着无法调和的矛盾，这本身就足以引发市场的深度怀疑。

对于这种矛盾，存在几种可能性，从最坏到最好依次是：

1. **审计失败**：项目方确实进行过审计，但报告揭示了无法修复或团队不愿修复的严重漏洞，因此选择不公布。这是最坏的情况，意味着协议可能存在已知的致命缺陷。  
2. **审计私有化**：团队或其 VC 为满足内部风控要求进行了私有审计，但出于某种原因（如避免公众审视、维持信息优势）选择不向公众披露。这表明项目方对公众投资者的安全和知情权完全漠视。  
3. **DeFiLlama 标注错误**：这仅仅是数据聚合过程中的一个失误。

在无法证实的情况下，一个理性的投资者必须基于审慎原则，将最坏的情况即“审计失败”作为决策依据。**缺乏一份可验证的公开审计报告，其风险远大于一份指出了问题的公开报告**。因为前者意味着风险是未知的、无法量化的，而后者则将风险暴露在阳光下，让用户可以自行评估。

综上所述，“薛定谔的审计”迫使我们将 infiniFi 视为一个**未经审计**的协议。当这一风险与团队匿名相结合时，其智能合约风险被推高到了理论上的最高等级。

### **3.3. 人为因素：量化团队匿名和不透明操作的风险**

infiniFi 的创始团队完全匿名，没有任何公开的姓名、领英资料或社交媒体身份与项目关联 1。所有关于团队信息的搜索均无功而返 16。

这引入了极高的**对手方风险**。协议中拥有最高权限的“监护人”和“治理者”角色由一群匿名的个体控制 3。一旦发生恶意行为（如 Rugpull，即卷款跑路）、操作失误或私钥泄露，公众投资者将没有任何法律或社会层面的追索途径。OpenZeppelin 曾披露过 Convex Finance 协议中一个价值 150 亿美元的漏洞，该事件凸显了与匿名团队打交道的复杂性和潜在危险，即便团队本身并无恶意 59。对于 infiniFi，这种风险是赤裸裸且无法回避的。

---

## **4.0 社区与市场情绪分析**

### **4.1. 数字足迹：无法访问和未经验证的社交渠道构成的红旗**

尽管 infiniFi 的官方网站提供了指向 Twitter 和 Discord 的链接，但这些渠道的实际状况令人担忧 1。在研究期间，其官方 Twitter 账户

@infinifi\_xyz 被发现无法访问 60。同时，通过网络搜索找到的多个名为“Infinity”的 Discord 服务器，经核实均与该 DeFi 协议无关，多为游戏或其他社群 61。

结论是，**infiniFi 协议目前几乎没有任何有效的公开沟通渠道和可辨识的社区**。对于一个管理着超过 4400 万美元资产的协议而言，这是一种极不寻常的状态。它可能反映了一种刻意的策略：完全专注于产品和代码开发，主动规避与公众的互动和审视。

### **4.2. 市场认知：顶级支持者声誉与公开沟通缺失的博弈**

当前，市场对 infiniFi 的认知呈现出严重的两极分化。对于少数了解该项目的内部人士或资深研究者而言，他们的信心完全建立在其顶级投资者（如 Electric Capital）的声誉之上 2。这形成了一个小范围、封闭的“知情者”圈子。

然而，对于更广泛的 DeFi 市场来说，infiniFi 如同幽灵一般存在。它不产生新闻，没有社交媒体声量，也未参与任何行业热点讨论。这种叙事的缺失和社区的真空，是其未来获取新用户和建立市场信任的巨大障碍。

### **4.3. 空投预期：未来社区增长的主要工具**

如前文（2.3 节）所述，推出治理代币并进行空投，是 infiniFi 打破当前僵局、构建社区的最合乎逻辑的路径。其官网明确列出的“积分计划”（Points Program）正是为此铺路 1。该计划的核心目的在于追踪和奖励那些愿意承担极高风险的早期存款用户，通过未来的代币空投预期来激励他们为协议提供初始流动性（TVL）。

这对早期投资者意味着，在评估潜在回报时，必须将未来空投的投机价值纳入考量。正是这份潜在的、未来可能实现的巨大收益，在一定程度上补偿了投资者当前所承担的极端安全和透明度风险。

---

## **5.0 战略投资机会与建议**

### **5.1. 投资途径概览**

投资者可以通过多种方式参与 infiniFi 协议，从简单的存款生息到需要专业技能的复杂策略。所有这些策略都继承了协议本身固有的高风险。下表对不同的投资途径进行了详细的对比分析，旨在帮助投资者根据自身的风险偏好、专业知识和资本状况做出决策。

**表 5.1.1：infiniFi 投资策略对比分析**

| 策略名称 | 描述 | 所需专业知识 | 风险等级 | 潜在回报 (APY/空投) | 优势 | 劣势 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **稳定币质押 (Staking)** | 将稳定币存入协议，获得可随时提取的生息凭证 iUSD。 | 低 | **极高** | 浮动 APY (最高 13%) \+ 高空投预期 1 | 操作简单，资金流动性高 | 基础收益率相对较低，完全暴露于协议风险 |
| **稳定币锁定 (Locking)** | 将稳定币锁定固定期限，以换取更高的 APY。 | 低 | **极高** | 固定 APY (最高 31%) \+ 极高空投预期 1 | 收益率最高，空投权重可能最大 | 资金被锁定，缺乏流动性，风险敞口时间长 |
| **杠杆收益农场** | 从其他借贷协议借入稳定币，再存入 infiniFi，赚取利差。 | 高 | **极端** | (infiniFi APY \- 借款利率) \+ 空投预期 | 资本效率最大化，放大收益 | 引入清算风险，放大所有底层风险，操作复杂 |
| **开发者生态参与** | 利用开源代码库，开发自动化工具、前端或集成服务。 | 专家/开发者 | **极高** | 潜在的商业收入/协议补助 | 创造独特价值，可能获得协议资助 | 技术门槛极高，时间成本大，成功依赖于协议本身的发展 |

### **5.2. 策略一：基础收益农场（稳定币质押与锁定）**

这是与 infiniFi 协议最直接的互动方式，也是其核心功能所在。

* **质押（Staking）**：用户将 USDC 等稳定币存入协议，铸造出 iUSD。只要将 iUSD 持有在钱包中，就能赚取协议的基础收益（目前宣传最高可达 13% APY）。该策略的优势在于其流动性，用户可以随时将 iUSD 换回稳定币（需视协议流动性而定），适合那些可能在短期内需要动用资金的投资者 1。  
* **锁定（Locking）**：对于长期看好协议并希望最大化收益的投资者，可以选择将 iUSD 锁定一段固定时间。作为放弃流动性的补偿，协议会提供一个更高的、经过加成的收益率（最高可达 31% APY）。通常，锁定时间越长，收益率越高，未来获得的空投权重也可能越大 1。

**风险分析**：这两种基础策略面临的主要风险是**智能合约风险**（代码漏洞导致资金被盗）和**流动性风险**（在部分准备金模型下，若发生大规模集中赎回，可能出现“银行挤兑”，导致用户无法立即取回资金）。

### **5.3. 策略二：高级高收益策略（杠杆与对冲）**

对于更资深的 DeFi 用户，可以将 infiniFi 作为一个高收益的“积木”，嵌入到更广泛的、更复杂的收益策略中 67。

* **示例 \- 杠杆收益农场**：  
  1. 在 Aave 或 Compound 等成熟的借贷协议中，抵押 ETH 或其他资产，借出稳定币（如 USDC）。  
  2. 将借来的 USDC 存入 infiniFi，参与其 Staking 或 Locking 策略，赚取其提供的高收益。  
  3. 投资者的净利润等于 **(infiniFi 的 APY \+ 未来空投的价值) \- Aave 的借款年利率**。

**风险分析**：该策略极大地放大了风险。首先，它引入了**清算风险**：如果用户在 Aave 上抵押的资产价值下跌，其借款头寸可能被清算，导致抵押品损失。其次，它将用户对 infiniFi 的风险敞口加倍，一旦 infiniFi 发生安全事故，用户不仅会损失存入的本金（这些本金还是借来的），还需偿还 Aave 上的债务。这是一种**专家级别**的策略，绝对不适合新手。

### **5.4. 策略三：开发者与生态系统参与**

对于具备开发背景的投资者，infiniFi 的开源特性（采用 MIT 许可证）提供了一些独特的参与机会 3。

* **开发自动化工具**：协议中 ManualRebalancer.sol 的存在表明，部分关键的资产再平衡操作需要手动完成 3。这为开发者创造了机会，可以开发一个自动化的再平衡机器人，并可能以“再平衡即服务”的形式向协议或社区提供，从而赚取费用或获得协议补助。  
* **构建前端或集成**：开发者可以为 infiniFi 构建一个功能更丰富、用户体验更好的第三方前端，或者将其收益产品聚合到自己的 DeFi 仪表盘或资产管理工具中。  
* **直接与合约交互**：尽管 infiniFi 没有提供像 Epic Games 或 Sky Mavis 那样的官方 SDK 73，但其所有链上功能本质上都是开放的 API。任何能够与智能合约交互的开发者都可以绕过官方前端，直接调用合约函数，实现自定义的自动化操作。

**风险与回报**：此策略的回报是可能在 infiniFi 生态之上建立起自己独特的业务或服务。风险在于投入的时间和开发成本巨大，且其最终成功完全依赖于 infiniFi 协议自身的长期存续和发展。

---

## **6.0 最终结论与投资评级**

### **6.1. 调查结果综合：对机遇的平衡审视**

本次尽职调查揭示了 infiniFi 协议的核心矛盾：它一方面展示了由行业顶级资本支持的、技术上看似精良的收益产品，提供了对用户极具吸引力的高额回报 1；另一方面，它又被一层刻意为之的、极度不透明的迷雾所笼罩，其匿名团队、缺失的社区沟通以及悬而未决的公开审计，构成了巨大的风险敞口 1。

### **6.2. 最终评级理由**

最终的投资评级必须在权衡高潜在回报（APY \+ 空投价值）与极端风险（智能合约风险、对手方风险、流动性风险）后得出。

对于任何将**资金安全**和**透明度**置于首位的投资者而言，infiniFi 现存的红旗是不可逾越的障碍。投资一个匿名团队开发的、未经公开审计的协议，无异于将资金置于一个无法预知的黑箱之中。

然而，对于一小部分风险承受能力极高、追求超额回报的资深“Degen”（堕落者）投资者来说，他们可能会将“顶级 VC 背书 \+ 高收益 \+ 强空投预期”的组合视为一场值得一搏的、经过计算的赌博。这类投资者可能会配置极小比例的资金参与，并做好了本金完全损失的准备。

### **6.3. 投资评级：不建议 (Do Not Recommend)**

**理由**：尽管 infiniFi 拥有令人印象深刻的投资者背景和诱人的潜在收益，但**匿名团队、无公开沟通渠道和缺乏可验证的公开安全审计**这三大风险的叠加，为审慎的投资策略带来了不可接受的高风险。因智能合约漏洞或团队恶意行为导致资金永久性损失的可能性真实存在，且一旦发生，投资者将没有任何追索途径。这种潜在的灾难性损失，远远超过了其可能带来的收益。

此评级将在以下条件得到满足后，才有可能被重新评估并上调至**中立 (Neutral)** 或 **建议 (Recommend)**：

1. **团队公开身份**：核心团队成员公开其真实身份和过往履历，接受社区的监督。  
2. **发布审计报告**：发布至少两份由 CertiK、PeckShield、Trail of Bits、OpenZeppelin 等行业顶级安全公司出具的、针对当前线上代码的全面安全审计报告。

在此之前，任何对 infiniFi 的投资都应被视为高风险投机，而非稳健投资。

---

## **7.0 参考文献**

1

#### **引用的著作**

1. infiniFi \- Better than Banks, 访问时间为 七月 16, 2025， [https://infinifi.xyz/](https://infinifi.xyz/)  
2. infiniFi \- DefiLlama, 访问时间为 七月 16, 2025， [https://defillama.com/protocol/infinifi](https://defillama.com/protocol/infinifi)  
3. InfiniFi-Labs/infinifi-protocol \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/InfiniFi-Labs/infinifi-protocol](https://github.com/InfiniFi-Labs/infinifi-protocol)  
4. Infinity Token Price, IT Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 16, 2025， [https://www.coinbase.com/en-au/price/infinity-token](https://www.coinbase.com/en-au/price/infinity-token)  
5. Infinity Token price today, IT to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 16, 2025， [https://coinmarketcap.com/currencies/infinity-token/](https://coinmarketcap.com/currencies/infinity-token/)  
6. Infinity Pharma (INFI) Market Cap Today: Live Data & Historical Trends, 访问时间为 七月 16, 2025， [https://public.com/stocks/infi/market-cap](https://public.com/stocks/infi/market-cap)  
7. INFINITY PHARMS INC by Infinity Pharmaceuticals, Inc. (INFIQ) \- SoFi, 访问时间为 七月 16, 2025， [https://www.sofi.com/invest/stock/INFIQ/](https://www.sofi.com/invest/stock/INFIQ/)  
8. Infinity Pharma (INFI) Stock Forecast: Analyst Ratings, Predictions & Price Target 2025, 访问时间为 七月 16, 2025， [https://public.com/stocks/infi/forecast-price-target](https://public.com/stocks/infi/forecast-price-target)  
9. Documents & Forms \- INFINITI Finance, 访问时间为 七月 16, 2025， [https://www.infinitifinance.com/s/documents?language=en\_US](https://www.infinitifinance.com/s/documents?language=en_US)  
10. Welcome to Infinity documentation \- FactFinder, 访问时间为 七月 16, 2025， [https://docs.fact-finder.com/infinity](https://docs.fact-finder.com/infinity)  
11. infinifi plays gentle lofi music in the background indefinitely \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/kennethnym/infinifi](https://github.com/kennethnym/infinifi)  
12. infiniflow/infinity: The AI-native database built for LLM applications, providing incredibly fast hybrid search of dense vector, sparse vector, tensor (multi-vector), and full-text \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/infiniflow/infinity](https://github.com/infiniflow/infinity)  
13. Security Audit \- Infinity Digital Consultancy, 访问时间为 七月 16, 2025， [https://www.infinitydigital.com.au/services/security-audit](https://www.infinitydigital.com.au/services/security-audit)  
14. The Different Types of Data Centre Audits, 访问时间为 七月 16, 2025， [https://www.infiniti-it.co.uk/news/tech-news/the-different-types-of-data-centre-audits-](https://www.infiniti-it.co.uk/news/tech-news/the-different-types-of-data-centre-audits-)  
15. HR Risk Management Solutions, Risk Outsourcing | Infiniti HR, 访问时间为 七月 16, 2025， [https://www.infinitihr.com/solutions/risk-management/](https://www.infinitihr.com/solutions/risk-management/)  
16. Leadership — INFINITI GROUP, LLC, 访问时间为 七月 16, 2025， [https://www.infinitigroupllc.com/our-team](https://www.infinitigroupllc.com/our-team)  
17. Client Success \- Infinit-I Workforce Solutions, 访问时间为 七月 16, 2025， [https://infinitiworkforce.com/about/client-success/](https://infinitiworkforce.com/about/client-success/)  
18. INFINITI Logo Story \- Making Our Marque, 访问时间为 七月 16, 2025， [https://www.infiniti.com/what-drives-us/making-our-marque.html](https://www.infiniti.com/what-drives-us/making-our-marque.html)  
19. Infiniti \- Wikipedia, 访问时间为 七月 16, 2025， [https://en.wikipedia.org/wiki/Infiniti](https://en.wikipedia.org/wiki/Infiniti)  
20. News \- INFINITI USA Newsroom, 访问时间为 七月 16, 2025， [https://usa.infinitinews.com/channels/infiniti-corporate-news-us-news](https://usa.infinitinews.com/channels/infiniti-corporate-news-us-news)  
21. The Official Blog for INFINITI News & Design \- INFINITI USA, 访问时间为 七月 16, 2025， [https://www.infinitiusa.com/infiniti-news/blog.html](https://www.infinitiusa.com/infiniti-news/blog.html)  
22. 10 Best Infinity Alternatives & Competitors in (Jul 2025\) \- SoftwareSuggest, 访问时间为 七月 16, 2025， [https://www.softwaresuggest.com/infinity/alternatives](https://www.softwaresuggest.com/infinity/alternatives)  
23. Top Infinity Competitors & Alternatives 2025 | Gartner Peer Insights, 访问时间为 七月 16, 2025， [https://www.gartner.com/reviews/market/marketing-work-management-platforms/vendor/infinity/product/infinity/alternatives](https://www.gartner.com/reviews/market/marketing-work-management-platforms/vendor/infinity/product/infinity/alternatives)  
24. Best Infinity Alternatives & Competitors in 2025 \- TrustRadius, 访问时间为 七月 16, 2025， [https://www.trustradius.com/products/infinity/competitors](https://www.trustradius.com/products/infinity/competitors)  
25. WHITE PAPER \- CryptoCompare, 访问时间为 七月 16, 2025， [https://resources.cryptocompare.com/asset-management/2562/1678101841597.pdf](https://resources.cryptocompare.com/asset-management/2562/1678101841597.pdf)  
26. Tokenomics \- Wikipedia, 访问时间为 七月 16, 2025， [https://en.wikipedia.org/wiki/Tokenomics](https://en.wikipedia.org/wiki/Tokenomics)  
27. MIT(music infinity token) Tokenomics Explained \- Multiply Your Investment with AI, 访问时间为 七月 16, 2025， [https://osztoprogram.nfk.gov.hu/app/MIT(music-infinity-token)-Tokenomics-Explained](https://osztoprogram.nfk.gov.hu/app/MIT\(music-infinity-token\)-Tokenomics-Explained)  
28. Axie Infinity (AXS) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 七月 16, 2025， [https://tokenomist.ai/axie-infinity](https://tokenomist.ai/axie-infinity)  
29. The Tokenomics Of Axie Infinity (AXS) \- Markets.com, 访问时间为 七月 16, 2025， [https://www.markets.com/education-centre/tokenomics-of-axie-infinity-axs](https://www.markets.com/education-centre/tokenomics-of-axie-infinity-axs)  
30. The Only Tokenomics Video You'll Ever Need \- YouTube, 访问时间为 七月 16, 2025， [https://www.youtube.com/watch?v=A2JUuyx9adM](https://www.youtube.com/watch?v=A2JUuyx9adM)  
31. Axie Infinity Tokenomics Explained \- Shrimpy Academy, 访问时间为 七月 16, 2025， [https://academy.shrimpy.io/post/axie-infinity-tokenomics-explained](https://academy.shrimpy.io/post/axie-infinity-tokenomics-explained)  
32. Infinity Ground Airdrop On MEXC – Deposit, Trade & Get Free AIN\!, 访问时间为 七月 16, 2025， [https://blog.mexc.com/news/infinity-ground-airdrop-at-mexc/](https://blog.mexc.com/news/infinity-ground-airdrop-at-mexc/)  
33. Infinity Ground (AIN) listed on Binance Alpha with 600 token airdrop \- AInvest, 访问时间为 七月 16, 2025， [https://www.ainvest.com/news/infinity-ground-ain-listed-on-binance-alpha-with-600-token-airdrop-25071010fe4cc46e7bfdf34e/](https://www.ainvest.com/news/infinity-ground-ain-listed-on-binance-alpha-with-600-token-airdrop-25071010fe4cc46e7bfdf34e/)  
34. Infinity Ground Airdrop to Launch on Binance Alpha July 5th \- AInvest, 访问时间为 七月 16, 2025， [https://www.ainvest.com/news/infinity-ground-airdrop-launch-binance-alpha-july-5th-2507/](https://www.ainvest.com/news/infinity-ground-airdrop-launch-binance-alpha-july-5th-2507/)  
35. Grab IRT via Infinity Rocket's Token Giveaway: Complete Claim Guide \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@aussiejake60/infinity-rocket-announces-token-giveaway-grab-irt-today-1fe8a6e231b1](https://medium.com/@aussiejake60/infinity-rocket-announces-token-giveaway-grab-irt-today-1fe8a6e231b1)  
36. How To QUALIFY For HUGE Testnet FREE Airdrop (Full Guide) | AlphaDrop \- Boxmining, 访问时间为 七月 16, 2025， [https://www.boxmining.com/video/c4AD81DVpAY](https://www.boxmining.com/video/c4AD81DVpAY)  
37. Axie Infinity Airdrop Guide: Step By Step Guide to Participate in the Airdrop | CoinMarketCap, 访问时间为 七月 16, 2025， [https://coinmarketcap.com/academy/article/axie-infinity-airdrop-guide-step-by-step-guide-to-participate-in-the-airdrop](https://coinmarketcap.com/academy/article/axie-infinity-airdrop-guide-step-by-step-guide-to-participate-in-the-airdrop)  
38. Security | Pendle Documentation, 访问时间为 七月 16, 2025， [https://docs.pendle.finance/Security](https://docs.pendle.finance/Security)  
39. Smart contract audit \- Pendle V2 Core \- ChainSecurity, 访问时间为 七月 16, 2025， [https://www.chainsecurity.com/security-audit/pendle-v2-core](https://www.chainsecurity.com/security-audit/pendle-v2-core)  
40. Pendle Finance: Pendle V2 audit summary \- Ackee Blockchain, 访问时间为 七月 16, 2025， [https://ackee.xyz/blog/pendle-finance-pendle-v2-audit-summary/](https://ackee.xyz/blog/pendle-finance-pendle-v2-audit-summary/)  
41. Pendle Finance: Pendle V2 audit summary — Ackee Blockchain | by Aleksandra Yudina, 访问时间为 七月 16, 2025， [https://medium.com/ackee-blockchain/pendle-finance-pendle-v2-audit-summary-ackee-blockchain-a7b43db489ed](https://medium.com/ackee-blockchain/pendle-finance-pendle-v2-audit-summary-ackee-blockchain-a7b43db489ed)  
42. Pendle \- detailed report | DeFiSafety, 访问时间为 七月 16, 2025， [https://defisafety.com/app/pqrs/601](https://defisafety.com/app/pqrs/601)  
43. Convex \- detailed report | DeFiSafety, 访问时间为 七月 16, 2025， [https://defisafety.com/app/pqrs/589](https://defisafety.com/app/pqrs/589)  
44. Platform Security \- Convex, 访问时间为 七月 16, 2025， [https://www.convex.dev/security](https://www.convex.dev/security)  
45. Silo Finance – Curve & Convex Feature Security Audit \- ChainSecurity, 访问时间为 七月 16, 2025， [https://www.chainsecurity.com/security-audit/silo-finance-curve-convex-feature](https://www.chainsecurity.com/security-audit/silo-finance-curve-convex-feature)  
46. Audits | ConvexFinance, 访问时间为 七月 16, 2025， [https://docs.convexfinance.com/convexfinance/faq/audits](https://docs.convexfinance.com/convexfinance/faq/audits)  
47. CVX (Convex Finance) Security Score by CER.live, 访问时间为 七月 16, 2025， [https://cer.live/token/convex-finance](https://cer.live/token/convex-finance)  
48. Sec3 Security Audit Report \- Sanctum S \- GitHub, 访问时间为 七月 16, 2025， [https://raw.githubusercontent.com/igneous-labs/sanctum-static/master/audits/infinity/Sec3-Sanctum\_S\_final\_report.pdf](https://raw.githubusercontent.com/igneous-labs/sanctum-static/master/audits/infinity/Sec3-Sanctum_S_final_report.pdf)  
49. Sanctum Infinity \- Security Audit \- GitHub, 访问时间为 七月 16, 2025， [https://raw.githubusercontent.com/igneous-labs/sanctum-static/master/audits/infinity/Neodyme-INV-24-01.pdf](https://raw.githubusercontent.com/igneous-labs/sanctum-static/master/audits/infinity/Neodyme-INV-24-01.pdf)  
50. Security Audit Report | Plonky3 | Polygon \- Least Authority, 访问时间为 七月 16, 2025， [https://leastauthority.com/wp-content/uploads/2024/11/Updated\_071124\_Polygon\_Plonky3\_Final\_Audit\_Report.pdf](https://leastauthority.com/wp-content/uploads/2024/11/Updated_071124_Polygon_Plonky3_Final_Audit_Report.pdf)  
51. Crypto Suites & Multiparty ECDSA (Incremental Changes) \+ Encapsulation Layer | Safeheron \- Least Authority, 访问时间为 七月 16, 2025， [https://leastauthority.com/wp-content/uploads/2024/02/Safeheron\_Crypto\_Suites\_\_Multiparty\_ECDSA\_Updated\_Final\_Audit\_Report\_Least\_Authority.pdf](https://leastauthority.com/wp-content/uploads/2024/02/Safeheron_Crypto_Suites__Multiparty_ECDSA_Updated_Final_Audit_Report_Least_Authority.pdf)  
52. Monero Bulletproofs+ Security Audit \- GitHub Pages, 访问时间为 七月 16, 2025， [https://suyash67.github.io/homepage/assets/pdfs/bulletproofs\_plus\_audit\_report\_v1.1.pdf](https://suyash67.github.io/homepage/assets/pdfs/bulletproofs_plus_audit_report_v1.1.pdf)  
53. Exactly Protocol \- Smart Contract Audit \- Coinspect, 访问时间为 七月 16, 2025， [https://www.coinspect.com/doc/Coinspect%20-%20Smart%20Contract%20Audit%20-%20Exactly%20Protocol%202nd%20Audit%20V220822.pdf](https://www.coinspect.com/doc/Coinspect%20-%20Smart%20Contract%20Audit%20-%20Exactly%20Protocol%202nd%20Audit%20V220822.pdf)  
54. IT Admins- Manage and create custom meeting backgrounds for Teams meetings \- Learn Microsoft, 访问时间为 七月 16, 2025， [https://learn.microsoft.com/en-us/microsoftteams/custom-meeting-backgrounds](https://learn.microsoft.com/en-us/microsoftteams/custom-meeting-backgrounds)  
55. Microsoft Teams Backgrounds Guide | Huddlet, 访问时间为 七月 16, 2025， [https://huddlet.com/microsoft-teams-backgrounds-guide/](https://huddlet.com/microsoft-teams-backgrounds-guide/)  
56. Design thinking courses and certifications \- Enterprise Design Thinking \- IBM, 访问时间为 七月 16, 2025， [https://www.ibm.com/design/thinking/](https://www.ibm.com/design/thinking/)  
57. 6 Configuring and Managing Cluster Resources with Hawk2 \- SUSE Documentation, 访问时间为 七月 16, 2025， [https://documentation.suse.com/en-us/sle-ha/12-SP5/html/SLE-HA-all/cha-conf-hawk2.html](https://documentation.suse.com/en-us/sle-ha/12-SP5/html/SLE-HA-all/cha-conf-hawk2.html)  
58. RFC 2616: Hypertext Transfer Protocol \-- HTTP/1.1, 访问时间为 七月 16, 2025， [https://www.rfc-editor.org/rfc/rfc2616.html](https://www.rfc-editor.org/rfc/rfc2616.html)  
59. $15B Rugpull Vuln. in Convex Finance protocol Uncovered and Resolved, 访问时间为 七月 16, 2025， [https://blog.openzeppelin.com/15-billion-rugpull-vulnerability-in-convex-finance-protocol-uncovered-and-resolved](https://blog.openzeppelin.com/15-billion-rugpull-vulnerability-in-convex-finance-protocol-uncovered-and-resolved)  
60. 访问时间为 一月 1, 1970， [https://twitter.com/infinifi\_xyz](https://twitter.com/infinifi_xyz)  
61. Infinity | Network \- Discord, 访问时间为 七月 16, 2025， [https://discord.com/invite/infinitymcpe](https://discord.com/invite/infinitymcpe)  
62. Infinity | Network \- Discord, 访问时间为 七月 16, 2025， [https://discord.com/invite/GApzRfRVgF](https://discord.com/invite/GApzRfRVgF)  
63. Infinity Community \- Discord, 访问时间为 七月 16, 2025， [https://discord.com/invite/ZnjfuAB](https://discord.com/invite/ZnjfuAB)  
64. Infinity The Unofficial Discord, 访问时间为 七月 16, 2025， [https://discord.com/invite/BWSP777xBY](https://discord.com/invite/BWSP777xBY)  
65. Infinity The Unofficial Discord, 访问时间为 七月 16, 2025， [https://discord.com/invite/nVCRtzf](https://discord.com/invite/nVCRtzf)  
66. Infinity Headquarters \- Discord, 访问时间为 七月 16, 2025， [https://discord.com/invite/infinity-headquarters-751666009529778176](https://discord.com/invite/infinity-headquarters-751666009529778176)  
67. High Yield Strategy \- A Class \- Overview \- Guggenheim Investments, 访问时间为 七月 16, 2025， [https://www.guggenheiminvestments.com/mutual-funds/fund/ryhdx-high-yield-strategy](https://www.guggenheiminvestments.com/mutual-funds/fund/ryhdx-high-yield-strategy)  
68. High-yield income strategy | Fidelity, 访问时间为 七月 16, 2025， [https://www.fidelity.com/learning-center/trading-investing/high-yield-income-strategy](https://www.fidelity.com/learning-center/trading-investing/high-yield-income-strategy)  
69. Global High Yield Strategy | Eaton Vance, 访问时间为 七月 16, 2025， [https://www.eatonvance.com/strategies/global-high-yield.html](https://www.eatonvance.com/strategies/global-high-yield.html)  
70. Global Fixed Income Strategy | Infinitus Wealth, 访问时间为 七月 16, 2025， [https://www.infinituswealth.com/copy-of-fixed-income-bond-strategy](https://www.infinituswealth.com/copy-of-fixed-income-bond-strategy)  
71. Fixed Income Bond Strategy \- Infinitus Wealth Management, 访问时间为 七月 16, 2025， [https://www.infinituswealth.com/fixed-income-bond-strategy](https://www.infinituswealth.com/fixed-income-bond-strategy)  
72. High Yield Strategy | Principal Asset Management, 访问时间为 七月 16, 2025， [https://www.principalam.com/us/investment-strategies/fixed-income/high-yield-strategy](https://www.principalam.com/us/investment-strategies/fixed-income/high-yield-strategy)  
73. Download SDK \- Epic Online Services, 访问时间为 七月 16, 2025， [https://onlineservices.epicgames.com/en-US/sdk](https://onlineservices.epicgames.com/en-US/sdk)  
74. Mavis Docs | Mavis Docs, 访问时间为 七月 16, 2025， [https://docs.skymavis.com/](https://docs.skymavis.com/)  
75. Check Point Software: Leader in Cyber Security Solutions, 访问时间为 七月 16, 2025， [https://www.checkpoint.com/](https://www.checkpoint.com/)  
76. Fees \- DefiLlama, 访问时间为 七月 16, 2025， [https://defillama.com/fees](https://defillama.com/fees)  
77. Q Infinity \- DefiLlama, 访问时间为 七月 16, 2025， [https://defillama.com/protocol/q-infinity](https://defillama.com/protocol/q-infinity)  
78. Pudgy Penguins (PENGU) Price CAD | News, Trends & Charts \- Bitbuy, 访问时间为 七月 16, 2025， [https://bitbuy.ca/en-ca/cryptocurrencies/pudgy-penguins](https://bitbuy.ca/en-ca/cryptocurrencies/pudgy-penguins)  
79. Token Terminal | Fundamentals for crypto, 访问时间为 七月 16, 2025， [https://tokenterminal.com/](https://tokenterminal.com/)  
80. Bitcoin powtarza poprzednie cykle. Analitycy prognozują wzrost ceny BTC o 66% w 2025 roku \- Business Insider, 访问时间为 七月 16, 2025， [https://businessinsider.com.pl/kryptowaluty/aktualnosci/bitcoin-powtarza-poprzednie-cykle-analitycy-przewiduja-wzrost-ceny-btc-o-66-w-2025-roku](https://businessinsider.com.pl/kryptowaluty/aktualnosci/bitcoin-powtarza-poprzednie-cykle-analitycy-przewiduja-wzrost-ceny-btc-o-66-w-2025-roku)  
81. Bitcoin soars to new all-time high as US lawmakers focus on pro-crypto legislation \- WKMG, 访问时间为 七月 16, 2025， [https://www.clickorlando.com/business/2025/07/14/bitcoin-soars-to-new-all-time-high-as-us-lawmakers-focus-on-pro-crypto-legislation/](https://www.clickorlando.com/business/2025/07/14/bitcoin-soars-to-new-all-time-high-as-us-lawmakers-focus-on-pro-crypto-legislation/)  
82. Cyber Risk Assessment \- Infinity Global Services \- Check Point, 访问时间为 七月 16, 2025， [https://igs.checkpoint.com/services/2](https://igs.checkpoint.com/services/2)  
83. Project Infinity X \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/ProjectInfinity-X](https://github.com/ProjectInfinity-X)  
84. Tornado Cash Developer Storm Claims DOJ Bungled Critical Telegram Evidence | MEXC News, 访问时间为 七月 16, 2025， [https://www.mexc.com/de-DE/news/tornado-cash-developer-storm-claims-doj-bungled-critical-telegram-evidence/48286](https://www.mexc.com/de-DE/news/tornado-cash-developer-storm-claims-doj-bungled-critical-telegram-evidence/48286)  
85. 2026 INFINITI QX60 | 3-Row Luxury Crossover SUV \- INFINITI USA, 访问时间为 七月 16, 2025， [https://www.infinitiusa.com/vehicles/crossovers/qx60.html](https://www.infinitiusa.com/vehicles/crossovers/qx60.html)  
86. 2025 INFINITI QX50 | Luxury Mid-Size AWD Crossover SUV \- INFINITI USA, 访问时间为 七月 16, 2025， [https://www.infinitiusa.com/vehicles/crossovers/qx50.html](https://www.infinitiusa.com/vehicles/crossovers/qx50.html)  
87. Financial Investment Services \- Infiniti Research, 访问时间为 七月 16, 2025， [https://www.infinitiresearch.com/industry/financial-services/financial-investment/](https://www.infinitiresearch.com/industry/financial-services/financial-investment/)  
88. INFINIT Discord server invite \- MEE6, 访问时间为 七月 16, 2025， [https://mee6.xyz/i/7fJlogYwxr](https://mee6.xyz/i/7fJlogYwxr)  
89. Injective \- Discord, 访问时间为 七月 16, 2025， [https://discord.com/invite/injective](https://discord.com/invite/injective)  
90. DappRadar \- Discover Dapps, NFTs, Games, Tokens, and Airdrops, 访问时间为 七月 16, 2025， [https://dappradar.com/](https://dappradar.com/)  
91. Important Links for Marvel Crisis: Protocol : r/MarvelCrisisProtocol \- Reddit, 访问时间为 七月 16, 2025， [https://www.reddit.com/r/MarvelCrisisProtocol/comments/eqbv1a/important\_links\_for\_marvel\_crisis\_protocol/](https://www.reddit.com/r/MarvelCrisisProtocol/comments/eqbv1a/important_links_for_marvel_crisis_protocol/)  
92. Pendle Smart Contract Audit | Cyberscope, 访问时间为 七月 16, 2025， [https://www.cyberscope.io/audits/coin-pendle](https://www.cyberscope.io/audits/coin-pendle)