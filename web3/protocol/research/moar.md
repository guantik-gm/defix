

# **投资尽职调查报告：Aptos 上的 Moar Market——深入剖析可组合杠杆与系统性风险**

## **1\. 执行摘要**

### **协议概要**

Moar Market 是一种部署在 Aptos 区块链上的去中心化信用协议，其核心功能是作为元层（meta-layer），为用户提供“可组合杠杆”（Composable Leverage）。该协议允许用户以存入的资产作为抵押，借入资金并将其部署到集成的第三方 DeFi 协议中，主要用于执行杠杆化收益耕作（leveraged yield farming）和保证金交易策略 1。

### **核心发现**

Moar Market 的出现代表了 Aptos 生态系统在资本效率方面迈出的重要一步。尽管其总锁仓价值（TVL）目前约为 246 万美元，规模尚小 3，但该项目由 Thala Labs 孵化，并获得了 Third Earth Capital 的投资支持 4，这为其提供了显著的信誉背书。其主要应用场景——在如 Hyperion 等头部去中心化交易所（DEX）上进行杠杆耕作 5——为用户提供了放大收益的潜力，但同时也带来了同等程度的放大风险。

### **主要风险**

本报告识别出数个关键风险点：首先，尽管有证据表明项目已进行安全审计，但缺乏公开可查的、针对其智能合约的审计报告，构成了严重的透明度风险；其次，项目团队匿名运营，存在操作风险，尽管信誉良好的支持者在一定程度上缓解了此问题；最后，也是最重要的一点，该协议高度依赖于其集成协议的安全性和流动性，存在显著的系统性风险。

### **投资论点与评级**

Moar Market 是对 Aptos DeFi 生态系统成熟度的一次高风险、高回报的基础设施投资。它不适合被动或风险规避型投资者。基于其创新机制和潜在增长空间，同时考虑到其固有的多层次风险，本报告最终给予的投资评级为：**投机性买入（仅限经验丰富的用户）**。此评级的前提是，投资者必须对协议的清算机制和系统性风险有透彻的理解。

## **2\. 协议架构与机制**

### **2.1. 定义可组合杠杆：核心价值主张**

Moar Market 的核心创新在于，它允许用户的资本在同一时间被用于多个地方，从而打破了资本在不同协议间的壁垒。它作为一个信用层，将锁定在一个协议中的资产与另一个协议中的机会连接起来，极大地提高了整个生态系统的资本流转速度和效率 1。

该协议为用户提供了高达 15 倍至 25 倍的杠杆 2，这些杠杆可应用于已列入白名单的合作伙伴协议的收益策略中。这一机制专为寻求在成熟的收益农场中放大回报的资深 DeFi 用户设计 7。通过 Moar Market，用户无需出售或解押现有头寸，即可获得额外流动性，从而抓住新的投资机会，实现资本的最大化利用。

### **2.2. 技术深度剖析：信用账户、隔离借贷池与预言机**

Moar Market 的架构围绕用户拥有的“信用账户”（Credit Accounts）构建。每个信用账户独立持有该用户的所有资产并跟踪其所有负债 2。这是一个关键的设计选择，因为它将风险控制在单个用户层面，防止了单一用户的违约风险蔓延至整个协议。

协议采用了隔离借贷池（isolated lending pools）模型。这意味着一个池子（例如，用于某种高波动性长尾资产的池子）的风险不会外溢，从而危及另一个池子（例如，稳定币池）的偿付能力 2。这是现代借贷协议设计中的一项最佳实践，通过资产隔离显著增强了协议的稳健性。

协议的偿付能力通过实时预言机（oracle）定价来维持，预言机提供的数据用于触发清算程序 2。因此，这些预言机的可靠性、准确性和抗操纵性是协议安全的关键节点。Aptos 生态系统中 Chainlink 预言机服务的上线，为包括 Moar Market 在内的协议提供了更强大的基础设施支持，是一个积极的发展信号 9。

### **2.3. 在 Aptos DeFi 生态系统中的战略角色**

Moar Market 并非一个独立的应用程序，而是一个共生的元层协议。其主要功能是构建在其他协议（如 DEX Hyperion）之上，为其流动性池提供一个杠杆化的交互界面 5。它本身不创造新的收益来源，而是放大现有的收益。因此，它的成功与合作伙伴的成功、流动性深度和费用产生能力密不可分。

这种独特的定位使得 Moar Market 成为 Aptos 生态系统中的一个“流动性放大器”和系统性的资本分配引擎。它的运作逻辑如下：首先，Moar Market 的核心功能是将借贷资本引导至合作伙伴协议上特定的、高收益的机会中 5；其次，通过提供杠杆，它使得某些流动性池或策略对追求高收益的耕作者具有不成比例的吸引力；因此，被 Moar Market 选择集成的池子可能会吸引大量杠杆化流动性的涌入，从而加深这些特定市场的深度。

由此可见，Moar Market 不仅仅是服务于个人用户的工具，它还扮演着 Aptos 生态系统隐性资本分配引擎的角色。它关于支持哪些协议和池子的决策，可以对整个生态的流动性分布和其合作伙伴的健康状况产生重大影响。这赋予了它一种与其当前 TVL 不相称的系统重要性。

## **3\. 市场格局与竞争分析**

### **3.1. Aptos DeFi 环境：一个高性能的基础**

Moar Market 运行在 Aptos 区块链上，这是一个为高吞吐量（宣称可达 160,000 TPS）和高安全性而设计的 Layer 1 网络，其智能合约采用 Move 编程语言 10。Move 语言在设计上注重资源管理和形式化验证，这为智能合约开发提供了一个理论上比 Solidity 更安全的环境，是构建在其上的任何协议的根本优势之一 14。

Aptos DeFi 生态系统正在迅速成熟，其 TVL 已超过 7.38 亿美元 16。生态内已经形成了关键的 DeFi 基础模块，包括借贷市场（如 Aries）、流动性质押协议（如 Amnis）以及高交易量的 DEX（如 Hyperion 和 Thala）6。这为像 Moar Market 这样的杠杆协议提供了一片可以茁壮成长的沃土。

### **3.2. 链上指标分析（数据截至报告撰写时）**

* **总锁仓价值（TVL）:** 246 万美元 3。这是一个相对较低的 TVL，表明该协议仍处于发展的早期阶段。  
* **总借款额:** 149 万美元 3。较高的资金利用率（借款额/TVL ≈ 60%）表明，平台用户正在积极使用其核心的杠杆功能。  
* **协议收入:** 年化收入约为 16,860 美元，源于约 83,875 美元的年化费用 3。这证明协议正在产生真实的、尽管规模尚小的现金流。收入来源于借款人支付的利息和清算罚金的一部分。  
* **DefiLlama 分类:** “杠杆耕作”（Leveraged Farming）3。这准确地定义了其细分市场。

### **3.3. 竞争定位**

虽然 Aptos 上存在其他借贷协议（例如 Echelon、Aries Market 6），但 Moar Market 的主要差异化优势在于其专注于

*可组合的、跨协议的杠杆*，而非简单的超额抵押借贷。

它的竞争对手不仅是借贷协议，还包括任何提供杠杆的平台。在 Aptos 生态系统内，它似乎是这个特定细分市场的先行者和领导者，特别是考虑到其与 Hyperion 的紧密集成关系 5。

这种专业化的定位是一把双刃剑。一方面，Moar Market 专注于一件事：为其他协议提供杠杆接口。它不像 Thala 那样拥有自己的 DEX 或广泛的产品套件 17。这种专注使其能够在自己擅长的领域做到最好，并建立深度共生的合作伙伴关系（例如与 Hyperion 的集成）。然而，这也使其完全依赖于其他协议的创新和成功。如果 Aptos 上出现一个新的、更优越的 DEX，而 Moar Market 未能迅速集成，其价值主张可能会迅速消失。因此，Moar Market 的专业化元层模型既是其最大的优势（专注、深度集成），也是其最大的弱点（依赖性、缺乏独立的护城河）。其长期成功取决于它能否始终成为 Aptos 生态系统中

*头部协议*的首选杠杆合作伙伴。

## **4\. 综合风险评估**

### **4.1. 智能合约与技术漏洞风险**

作为构建在 Move 语言上的协议，Moar Market 继承了该语言本身带来的一些安全优势 15。然而，协议自身的代码是主要的风险来源。任何代码中的漏洞都可能导致协议合约中持有的所有资金全部损失。由于缺乏公开可查的安全审计报告（详见第 5 节），这一风险被显著放大。

此外，在本次研究期间，协议的应用网站 19 和官方 Twitter 20 曾一度无法访问，这表明其运营或基础设施可能存在脆弱性，需要持续监控。

### **4.2. 经济与金融风险**

* **清算瀑布（Liquidation Cascades）:** 这是用户面临的核心风险。高达 25 倍的杠杆意味着抵押品价格的微小下跌就可能触发清算。在市场剧烈波动时，这可能导致连锁清算，即强制出售抵押品进一步压低价格，从而引发更多清算。  
* **预言机依赖风险:** 协议依赖预言机提供实时资产价格以触发清算 2。一个被操纵或延迟的预言机数据源可能导致不公平的清算，或使已无力偿付的头寸保持开放状态，从而为协议带来坏账。  
* **放大的无常损失（Impermanent Loss）:** 对于在自动化做市商（AMM）池中进行的杠杆耕作，无常损失同样会被放大。用户不仅要承担自有资本的无常损失，还要承担借入资本的无常损失，这可能导致相对于初始存款的快速且严重的亏损。

### **4.3. 系统性与可组合性风险**

这是 Moar Market 面临的最重要且最复杂的风险。协议的健康状况与其集成的合作伙伴直接相关。这种风险传导链条如下：一个用户在 Moar Market 存入 USDC，借入更多 USDC，然后在 Hyperion 上建立一个杠杆化的 APT-USDC LP 头寸。此时，如果 *Hyperion* 的合约中存在一个智能合约漏洞被利用，导致 APT-USDC 池被耗尽，那么 Moar Market 的用户将损失其全部头寸，包括其初始抵押品，尽管 Moar Market 自身的代码没有任何问题。Moar Market 继承了它所集成的每一个协议 100% 的智能合约风险。

### **4.4. 运营与中心化风险**

* **匿名团队:** 开发团队的身份未公开 1。这是一个重大的风险，因为缺乏公开的问责机制，恶意行为或项目被遗弃都是潜在的可能性。  
* **风险缓解因素:** 这一风险在很大程度上被可验证的、来自 Thala 和 Third Earth Capital 的支持所缓解 4。同时，该项目由 Thala Labs 和 Aptos 基金会孵化 2。这些信誉良好的实体在投资和支持前，必然对团队进行了私下的尽职调查，这提供了一层代理信任。这一关键信息将该风险的性质从“不可接受”转变为“高风险但可理解”。

## **5\. 安全状况与审计验证**

### **5.1. 公开安全审计状态**

DefiLlama 网站将该项目标记为已审计（“Audits: Yes”）3。此外，一篇 Bitget 的文章指出，该项目“由 Thala Labs 和 Aptos 基金会的 DeFi 基金孵化，并获得了用于产品开发和审计的资助”2。

然而，尽管有这些迹象，经过广泛搜索，未能找到一份针对 Moar Market 特定智能合约的、可供公众查阅的审计报告 1。所有能找到的审计信息都与 Aptos 区块链本身或通用的审计公司服务有关，而非针对 Moar Market 21。

### **5.2. “缺失审计报告”之谜的分析**

这种状况揭示了一个关键的风险信号：透明度的缺失。整个分析链条如下：首先，多方证据强烈表明 Moar Market 的代码已经接受过一次或多次安全审计 2。其次，顶级 DeFi 协议的标准做法是公开这些审计报告，以建立用户信任并允许社区对发现的问题及修复情况进行独立验证。第三，Moar Market 选择了不公开报告，这是一个主动的决定。

这一决定背后可能有多种原因：a) 审计发现了尚未完全解决的严重或高危问题；b) 团队缺乏透明度文化；c) 出于某些公众未知的战略原因而保留报告。

因此，这里的风险不仅仅是缺少一份审计报告，而是这份*非公开审计报告所暗示的深层问题*。它在项目团队和用户之间制造了严重的信息不对称。任何投资都必须基于这样的理解：协议的安全状况无法通过最高标准进行独立验证，投资者必须信任其支持者（如 Thala、Aptos 基金会）所做的尽职调查。

### **5.3. GitHub 代码库审查**

该项目维护着一个公开的 GitHub 代码库 1，这为社区进行一定程度的代码审查提供了可能。初步审查显示，代码库的开发活动与一个正常运作的协议相符。然而，这并不能替代由第三方专业机构进行的正式审计。

## **6\. 社区、治理与项目发展**

### **6.1. 社交媒体表现与社区情绪**

该项目拥有官方的 Twitter 和 Discord 渠道 1，尽管在研究期间 Twitter 账户无法访问 20。在 Reddit 等平台上的社区讨论虽然不多，但内容非常具体且专业 6。这些用户的普遍看法是，Moar Market 是一个功能强大但风险极高的工具，适合“经验丰富的操作者”，而非新手。这反映了社区对该协议功能的现实理解。

值得注意的是，该项目曾被 Aptos 基金会官方的“生态系统聚焦”（Ecosystem Spotlight）栏目报道 27，这是对其合法性和在生态系统中重要性的一个强烈积极信号。

### **6.2. 开发速度与未来路线图**

根据已公布的计划，项目未来打算推出一个利用其底层信用协议的保证金交易 DEX，并将集成范围扩大到流动性质押衍生品（LSDs）、再质押（restaking）、现实世界资产（RWAs）和其他 DeFi 基础模块 2。这表明团队对项目增长有着清晰的愿景，希望超越其最初的杠杆耕作用例。该路线图展示了其成为整个 Aptos DeFi 通用信用层的雄心，而不仅仅是服务于 AMM 池 1。

### **6.3. 代币经济学与治理模型**

**关键澄清：** 运行在 Aptos 上的 Moar Market **没有原生代币**。研究资料中提到的“MOAR”代币 28 属于一个不相关的、较早的以太坊项目“MOAR Finance”。这是一个必须明确区分的关键点，以避免混淆。

这一事实带来了几点重要影响：首先，目前没有直接投资该协议股权或治理的途径。所有的投资机会都是操作性的，即通过使用协议的服务来获利。其次，由于没有代币释放来补贴收益，协议提供的年化收益率（APR）很可能来自于真实收益（即借贷利息和从合作伙伴 DEX 获得的交易费分成）。这是一个更可持续的模式，但可能导致其名义上的 APR 低于那些有通胀代币奖励的协议。在当前阶段，协议的治理很可能由团队中心化控制。

## **7\. 投资机会分析**

### **7.1. 杠杆化收益耕作策略深度剖析**

这是 Moar Market 的主要用例。用户提供抵押品（例如 USDC），协议以此为基础借入更多资金，并自动执行循环借贷过程，从而在集成的 DEX（如 Hyperion）上创建一个杠杆化的流动性提供者（LP）头寸 5。

用户的回报会被杠杆倍数放大。例如，在一个基础年化收益率为 50% 的池子中应用 3 倍杠杆，理论上可以为用户的初始资本带来接近 150% 的年化收益率（扣除借贷成本后）。然而，风险同样被放大：无常损失、清算风险和智能合约风险都乘以杠杆系数。

### **7.2. 借贷市场分析**

用户也可以通过向协议的资金池中出借资产来参与，这是一种比杠杆耕作风险更低的策略。贷方赚取的利息来自于那些寻求杠杆的借方支付的费用。根据项目方的说法，由于对杠杆的强劲需求，这些借贷利率通常高于传统的链上货币市场 2。

对于贷方而言，风险在于协议可能出现坏账。在协议发生故障、预言机失灵或市场极端波动导致清算无法正常执行的情况下，贷方可能会损失部分或全部本金。

### **7.3. 表格：Moar Market 投资机会对比分析**

下表对 Moar Market 提供的不同投资策略进行了结构化对比，旨在为投资者提供清晰、可操作的决策依据。它将复杂的多方面策略分解为核心组成部分：机制、潜在回报以及与该策略相关的具体风险。

| 投资机会 | 机制 | 目标用户画像 | 潜在回报 (APR/APY) | 主要优势 | 关键劣势与风险 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **杠杆耕作 (波动性资产对, 如 APT-USDC)** | 存入抵押品，借入基础资产，在合作伙伴 DEX (如 Hyperion) 上创建杠杆化的 LP 头寸。 | 经验丰富的 DeFi 用户，风险承受能力高，能主动管理头寸。 | 高 (例如, 50-300%+)。放大的交易费和耕作奖励。 | \- 资本效率最大化。 \- 在牛市或横盘市场中获得超额回报的潜力。 | \- **高清算风险:** 价格微小下跌即可导致头寸被清算。 \- **放大的无常损失。** \- **系统性风险:** 完全暴露于合作伙伴 DEX 的漏洞风险。 |
| **杠杆耕作 (稳定币资产对, 如 USDC-USDT)** | 机制与波动性资产对类似，但交易对为稳定币。 | 中到高风险承受能力，寻求放大稳定币收益的用户。 | 中等 (例如, 20-50%+)。放大的稳定币交易费。 | \- 相较于波动性资产对，资产价格波动导致的清算风险较低。 \- 稳定币收益率高于标准借贷市场。 | \- **脱锚风险:** 稳定币脱锚可能导致清算。 \- **智能合约风险:** 仍然同时暴露于 Moar Market 和合作伙伴协议的风险。 |
| **借贷 (例如, 存入 USDC)** | 将单一资产存入借贷池，供杠杆使用者借用。 | 低到中风险承受能力，寻求在单一资产上获得增强收益的用户。 | 低到中等 (例如, 10-20%)。因杠杆需求旺盛，利率通常高于标准借贷协议。 | \- 无需直接承担无常损失或清算风险。 \- 简单、被动的投资策略。 | \- **坏账风险:** 因清算失败导致的协议资不抵债可能造成本金损失。 \- **机会成本:** 回报低于主动的杠杆策略。 |

### **7.4. 未来潜在机会**

* **空投预期:** 由于协议目前没有代币，其服务的早期用户（包括贷方和借方）在未来项目决定去中心化治理时，可能成为追溯性空投的主要候选人。这纯属投机，但是 DeFi 项目中一种常见的增长策略。  
* **开发者机会:** 协议的模块化设计和计划中的扩展可能会为开发者创造机会，他们可以构建新的策略或集成新的协议，并有可能获得资助或其他激励。

## **8\. 最终评估与投资评级**

### **8.1. 发现综合：看涨与看跌理由**

* **看涨理由 (Bull Case):** Moar Market 成功成为 Aptos 不可或缺的通用信用层。其先发优势以及与 Hyperion 等关键协议的深度集成为其捕获了市场上绝大部分的杠杆需求。随着 Aptos 生态系统的发展，Moar Market 的 TVL 和收入呈指数级增长，使其成为链上核心基础设施之一。  
* **看跌理由 (Bear Case):** Moar Market 或其关键合作伙伴（如 Hyperion）发生重大安全事件，导致灾难性的资金损失，彻底摧毁用户信任。或者，一个拥有更好产品、公开团队和透明审计报告的竞争对手出现并超越了它。匿名团队和缺乏公开审计报告的问题持续成为机构采用的障碍，限制了其增长潜力。

### **8.2. 最终投资评级与理由**

* **投资评级：投机性买入（仅限经验丰富的用户）**  
* **评级理由：** 该协议在资本效率方面的创新方法以及来自生态系统关键参与者的强力支持，构成了一个引人注目的、具有高增长潜力的投资论点。然而，高金融风险（杠杆、清算）、极端的系统性风险（依赖合作伙伴）以及显著的运营/透明度风险（匿名团队、非公开审计）相结合，使其不适合任何非经验丰富的 DeFi 用户。合格的投资者必须能够主动管理头寸，并完全理解其中涉及的多层次风险。

这项投资本质上是对整个 Aptos DeFi 生态系统持续增长和安全的一次押注，并通过一个高度专业化的协议进行了杠杆放大。

#### **引用的著作**

1. Moar Market \- Aptos Ecosystem Projects, 访问时间为 九月 5, 2025， [https://aptosfoundation.org/ecosystem/project/moar-market](https://aptosfoundation.org/ecosystem/project/moar-market)  
2. Moar Market: Project Guide | Latest Updates, Presale & Airdrop, 访问时间为 九月 5, 2025， [https://web3.bitget.com/vi/dapp/moar-market-28304](https://web3.bitget.com/vi/dapp/moar-market-28304)  
3. Moar Market \- DefiLlama, 访问时间为 九月 5, 2025， [https://defillama.com/protocol/moar-market](https://defillama.com/protocol/moar-market)  
4. Moar Market 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 九月 5, 2025， [https://pitchbook.com/profiles/company/894616-75](https://pitchbook.com/profiles/company/894616-75)  
5. Ecosystem Spotlight: Hyperion – Powering High-Performance DeFi on Aptos, 访问时间为 九月 5, 2025， [https://aptosfoundation.org/currents/ecosystem-spotlight-hyperion-powering-high-performance-defi-on-aptos](https://aptosfoundation.org/currents/ecosystem-spotlight-hyperion-powering-high-performance-defi-on-aptos)  
6. Defi On Aptos: Key Protocols To Know \- Reddit, 访问时间为 九月 5, 2025， [https://www.reddit.com/r/defi/comments/1n3v09p/defi\_on\_aptos\_key\_protocols\_to\_know/](https://www.reddit.com/r/defi/comments/1n3v09p/defi_on_aptos_key_protocols_to_know/)  
7. Manual de Juego de Rendimiento DeFi de Aptos – Ago 2025 \- Reddit, 访问时间为 九月 5, 2025， [https://www.reddit.com/r/defi/comments/1mqfbgr/aptos\_defi\_yield\_playbook\_aug\_2025/?tl=es-419](https://www.reddit.com/r/defi/comments/1mqfbgr/aptos_defi_yield_playbook_aug_2025/?tl=es-419)  
8. Aptos DeFi Yield Playbook – Aug 2025 \- Reddit, 访问时间为 九月 5, 2025， [https://www.reddit.com/r/defi/comments/1mqfbgr/aptos\_defi\_yield\_playbook\_aug\_2025/](https://www.reddit.com/r/defi/comments/1mqfbgr/aptos_defi_yield_playbook_aug_2025/)  
9. Aptos Half Year Report \- H1 2025 \- Nansen Research, 访问时间为 九月 5, 2025， [https://research.nansen.ai/articles/aptos-half-year-report-h1-2025](https://research.nansen.ai/articles/aptos-half-year-report-h1-2025)  
10. Aptos price today, APT to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 九月 5, 2025， [https://coinmarketcap.com/currencies/aptos/](https://coinmarketcap.com/currencies/aptos/)  
11. Aptos and Sui: \- Binance Research, 访问时间为 九月 5, 2025， [https://research.binance.com/static/pdf/Aptos\_Sui\_Report\_Shivam\_Sharma.pdf](https://research.binance.com/static/pdf/Aptos_Sui_Report_Shivam_Sharma.pdf)  
12. Top Crypto Projects and dApps in the Aptos Ecosystem in 2025 | Learn \- KuCoin, 访问时间为 九月 5, 2025， [https://www.kucoin.com/learn/crypto/top-crypto-projects-and-dapps-in-aptos-ecosystem](https://www.kucoin.com/learn/crypto/top-crypto-projects-and-dapps-in-aptos-ecosystem)  
13. Top Crypto Projects and dApps in the Aptos Ecosystem in 2025 | Learn \- KuCoin, 访问时间为 九月 5, 2025， [https://www.kucoin.com/en-au/learn/crypto/top-crypto-projects-and-dapps-in-aptos-ecosystem](https://www.kucoin.com/en-au/learn/crypto/top-crypto-projects-and-dapps-in-aptos-ecosystem)  
14. Aptos White Paper, 访问时间为 九月 5, 2025， [https://aptos.dev/network/blockchain/aptos-white-paper](https://aptos.dev/network/blockchain/aptos-white-paper)  
15. Aptos Autumn is Here. We welcome everyone to participate in… | by Aptos Labs \- Medium, 访问时间为 九月 5, 2025， [https://medium.com/aptoslabs/aptos-autumn-is-here-92a8d904eb49](https://medium.com/aptoslabs/aptos-autumn-is-here-92a8d904eb49)  
16. Aptos \- DefiLlama, 访问时间为 九月 5, 2025， [https://defillama.com/chain/aptos](https://defillama.com/chain/aptos)  
17. Aptos: The Stablecoin Capital's Yield Playbook \- Delphi Digital, 访问时间为 九月 5, 2025， [https://members.delphidigital.io/reports/aptos-yield-insights](https://members.delphidigital.io/reports/aptos-yield-insights)  
18. Bedrock Launches uniBTC and brBTC on Aptos, Expanding the Frontiers of BTCFi APAC, 访问时间为 九月 5, 2025， [https://www.prnewswire.com/apac/news-releases/bedrock-launches-unibtc-and-brbtc-on-aptos-expanding-the-frontiers-of-btcfi-302546749.html](https://www.prnewswire.com/apac/news-releases/bedrock-launches-unibtc-and-brbtc-on-aptos-expanding-the-frontiers-of-btcfi-302546749.html)  
19. 访问时间为 一月 1, 1970， httpshttps://app.moar.market/  
20. 访问时间为 一月 1, 1970， [https://twitter.com/moarmarket](https://twitter.com/moarmarket)  
21. Aptos Smart Contract Audit | CQR | Blockchain Security | Penetration Testing, 访问时间为 九月 5, 2025， [https://cqr.company/service/aptos-smart-contract-audit/](https://cqr.company/service/aptos-smart-contract-audit/)  
22. Aptos Smart Contract Audit \- Hacken.io, 访问时间为 九月 5, 2025， [https://hacken.io/services/blockchain-security/aptos-smart-contract-audit/](https://hacken.io/services/blockchain-security/aptos-smart-contract-audit/)  
23. Aptos Ecosystem \- CertiK, 访问时间为 九月 5, 2025， [https://www.certik.com/ecosystems/aptos](https://www.certik.com/ecosystems/aptos)  
24. Smart Contract Audit Reports \- Hacken.io, 访问时间为 九月 5, 2025， [https://hacken.io/audits/](https://hacken.io/audits/)  
25. Aptos | How to Read a Security Audit Report | by CertiK \- Medium, 访问时间为 九月 5, 2025， [https://medium.com/@certik/aptos-how-to-read-a-security-audit-report-e619f8196697?responsesOpen=true\&sortBy=REVERSE\_CHRON](https://medium.com/@certik/aptos-how-to-read-a-security-audit-report-e619f8196697?responsesOpen=true&sortBy=REVERSE_CHRON)  
26. Aptos | How to Read a Security Audit Report | CertiK, 访问时间为 九月 5, 2025， [https://www.certik.com/resources/blog/video/aptos-or-how-to-read-a-security-audit-report-or-certik](https://www.certik.com/resources/blog/video/aptos-or-how-to-read-a-security-audit-report-or-certik)  
27. Latest News topics \- Aptos Forum, 访问时间为 九月 5, 2025， [https://forum.aptosfoundation.org/c/find-and-discuss-all-the-latest-news-about-aptos/26](https://forum.aptosfoundation.org/c/find-and-discuss-all-the-latest-news-about-aptos/26)  
28. MOAR Finance (MOAR) IDO Funding Rounds, Token Sale Review & Tokenomics Analysis | CryptoRank.io, 访问时间为 九月 5, 2025， [https://cryptorank.io/ico/moar-finance](https://cryptorank.io/ico/moar-finance)  
29. Moar Finance price today, MOAR to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 九月 5, 2025， [https://coinmarketcap.com/currencies/moar-finance/](https://coinmarketcap.com/currencies/moar-finance/)  
30. Moar Finance Price | MOAR Price, Charts \- Crypto.com, 访问时间为 九月 5, 2025， [https://crypto.com/price/moar-finance](https://crypto.com/price/moar-finance)