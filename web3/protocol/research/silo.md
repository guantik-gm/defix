

# **Silo Finance投资评估报告：详尽分析与深度洞察**

### **1\. 执行摘要**

Silo Finance是一个去中心化的非托管借贷协议，其核心价值主张在于其独特的“风险隔离”模型。与传统的共享资金池协议（如Aave和Compound）不同，Silo为每一种资产创建一个独立的借贷市场，并通过“桥接资产”（如ETH、USDC）将它们连接起来。这一设计旨在从根本上解决DeFi领域普遍存在的系统性风险和“长尾资产”风险传染问题 1。

本报告通过对Silo Finance的多维度分析，识别出其核心优势与主要风险点。协议的主要优势在于其创新的风险隔离模型，该模型在实际安全事件中得到了验证，展现了其应对风险的韧性。此外，项目团队对安全审计和漏洞赏金计划的重视，以及快速响应机制，是其重要的信誉加分项 6。然而，Silo也面临显著挑战。其代币$SILO的市场数据存在严重矛盾，包括市值、流通量等核心指标在不同数据源之间差异巨大 2，这表明其代币缺乏可靠的价格发现机制和流动性。同时，代币经济学中的未来解锁计划可能带来持续的通胀压力。最后，Silo的核心创新已被行业巨头Aave部分采纳，未来面临的竞争将更为激烈 12。

综合考量其技术创新、经过验证的风险管理能力，以及代币数据不透明和激烈的市场竞争等因素，本报告最终将Silo Finance的投资等级评估为“中立”。对于具备深入研究能力和高风险承受能力的投资者，可以根据报告中提供的具体策略，谨慎考虑小额参与。

### **2\. 项目概述与核心机制**

Silo Finance是一个去中心化的、非托管的借贷协议，旨在为所有加密资产创建安全、高效的借贷市场 1。它起源于2021年的ETHGlobal黑客松，并非其他知名协议的分叉 13。Silo的用户群体主要分为四类：向协议提供代币以赚取利息的流动性提供者（Suppliers），以所提供的抵押物借出代币的借款人（Borrowers），管理流动性池的金库管理者（Vault Managers），以及可以利用Silo协议构建外部应用的开发者（Applications）14。

#### **Silo的核心技术与创新点**

Silo协议的设计哲学根植于对传统DeFi借贷模式中固有风险的深刻理解。其两大核心创新点为“孤立市场”和“桥接资产”，二者协同工作，旨在提供一个更安全、更具包容性的借贷环境。

##### **“孤立市场（Isolated Silos）”机制**

与Aave和Compound等采用共享资金池模型的协议不同，Silo为每一种非桥接资产（例如，任何特定的ERC-20代币）创建一个完全独立的借贷市场，即一个“Silo”1。每个Silo都只包含两种资产：该特定的代币和一种或多种作为“桥接资产”的高流动性资产 4。这种“两资产”池的设计是Silo风险管理的核心。如果一个Silo内的某个代币（例如一个高风险的LP代币）遭遇价格闪崩或因合约漏洞被恶意操纵，其影响将完全被限制在该Silo内部，不会蔓延到协议中的其他资产或整个协议的偿付能力 3。这种设计确保了即便是为新兴或实验性代币创建借贷市场，也不会危及整个协议生态的安全性 2。

##### **“桥接资产（Bridge Assets）”的作用**

桥接资产（最初为ETH和XAI，后在Arbitrum上改为ETH和USDC）是连接所有独立Silo市场的“纽带” 1。用户可以使用任何Silo内的非桥接资产作为抵押物，借出桥接资产；反之亦然。这一机制在保持风险隔离的同时，有效解决了流动性碎片化的问题。

孤立市场模型在安全性方面表现出色，但也存在一个固有的挑战：如果每个市场都是完全独立的，那么用户将无法使用其在不同Silo中的资产作为抵押进行跨市场借贷，这可能导致流动性分散，即资本效率低下。Silo协议通过引入“桥接资产”巧妙地解决了这一矛盾。所有Silo都与桥接资产相连，这使得用户可以将他们在任何一个Silo中的资产（例如，长尾代币A）作为抵押物，来借入桥接资产（如USDC），然后再用USDC在其他Silo中进行借贷或交易 3。这种设计在保持风险隔离的同时，极大提升了资本的互操作性，使得Silo能够提供比单纯的两两配对借贷模型（如Kashi）更深的流动性池 13。这一创新使得Silo能够在安全性和资本效率之间取得一个优化的平衡点。

值得注意的是，在分析中已明确排除了与去中心化金融（DeFi）项目无关的同名公司，如Silo Inc.（供应链金融）、Silo Pharma（生物制药）和Silo Markets（传统债券投资）等，以确保报告内容聚焦于用户查询的DeFi项目 16。

### **3\. 市场表现与数据分析**

#### **总锁定价值（TVL）分析**

Silo Finance在TVL方面展现出一定的资金吸纳能力。根据DeFi Llama的数据，Silo Finance的TVL在2.15亿美元至2.36亿美元之间波动 7。Silo的TVL并非集中在单一区块链上，而是分散在多个EVM兼容链上，其中Sonic、以太坊、Avalanche和Arbitrum是TVL的主要贡献者，Sonic链上的TVL最高 7。这种多链布局显示了项目的战略性扩展，但同时也需要关注不同链上流动性分散可能带来的效率问题。

#### **代币市场表现与数据矛盾**

Silo的代币$SILO的市场表现和数据存在显著矛盾，这是一个重要的风险点。代币价格在0.021美元至0.023美元之间波动 2，而24小时交易量则相对较低，数据来源显示从2,000美元到89.78万美元不等，差异巨大 2。

市值和流通量的数据更是存在严重分歧，这构成了核心风险。例如，CoinGecko显示市值为1,121.5万美元，流通量为4.9亿枚 2，而Crypto.com显示市值为375万美元，流通量为1.75亿枚 8。Kraken的数据与此类似，市值约为403.3万美元，流通量约为1.75亿枚 9。这种巨大的数据差异表明市场对$SILO的流通量和估值没有一个共识，也揭示了其缺乏可靠的价格发现机制。市值是“价格 × 流通量”，当价格相对稳定时，流通量的巨大差异是根本原因。这可能是因为不同的数据提供方对“流通量”的定义不同，或者代币流动性过于分散。这使得依赖市值和流通量进行的任何估值分析（如市销率）都变得不准确，并增加了交易滑点和价格操纵的风险。

#### **关键财务指标**

根据DeFi Llama的数据，Silo Finance的年化费用约为90.8万至92.2万美元 7。这部分收入主要来自借款人支付的利息 7。以TVL约2.15亿美元计算，年化费用约占TVL的0.42%，这一比例相对较低，表明协议的盈利能力主要依赖于TVL的规模，而非高费率。

下表对Silo Finance的核心市场指标进行了概览，并突出了数据不一致性的风险。

| 指标 | 当前数据范围 | 数据来源 | 关键洞察 |
| :---- | :---- | :---- | :---- |
| 总锁定价值（TVL） | \~$2.15亿 \- $2.36亿 | DeFiLlama 7 | 资金吸纳能力较强，但盈利能力有待考量。 |
| 市值（Market Cap） | \~$3.75M \- $11.2M | 多源冲突 2 | 数据不透明，流通量存在巨大分歧，是重要风险点。 |
| 24小时交易量 | \~$2K \- $897K | 多源冲突 2 | 流动性极低，代币缺乏有效价格发现。 |
| 年化费用 | \~$90.8万 \- $92.2万 | DeFiLlama 7 | 协议盈利能力与TVL相比相对较低。 |
| 市销率（P/S） | 估值分析存在挑战 | 综合分析 | 由于市值数据不一致，无法准确计算。 |

### **4\. 代币经济学与估值模型**

#### **代币用途与模型**

Silo Finance的代币经济模型以其原生代币SILO为核心，并引入了其升级版本xSILO和即将推出的$veSILO，旨在激励长期持有和治理参与 \[29, 30\]。$SILO是协议的基础代币，可用于质押以获取$xSILO，后者赋予用户治理权和协议费用分红权 \[29, 30\]。协议收取的费用（来自借款人支付的利息）会被用于回购$SILO并分发给xSILO的质押者，从而形成一个理论上的正向循环\[31\]。项目文档还提及，Silo计划在2025年第一季度推出veSILO模型，旨在进一步增强代币效用并激励长期锁定和积极的治理参与 31。

#### **代币分配与释放计划**

$SILO的总供应量上限为10亿枚 2。根据项目文档，其代币分配结构如下：创世协议所有流动性（10%）、社区金库（45%）、早期贡献者（6.75%）、创始贡献者（21.75%）、早期社区奖励（0.2%）、早期投资者与顾问（6.3%）、未来贡献者与顾问（10%）13。大部分代币在3至4年内以线性方式分批释放，并设有6个月至1年的锁仓期 13。

尽管代币分配结构相对合理，但这一线性释放计划在未来几年内将导致大量代币陆续进入市场。在当前低迷的交易量和市值背景下，这些持续的代币解锁可能形成强大的抛压，从而抑制代币价格的上涨。同时，尽管协议费用会回购代币，但当前的年化费用仅约90万美元 7，与代币解锁带来的潜在卖压相比，其对代币价格的支撑作用可能有限。这将是$SILO代币长期价值捕获面临的严峻挑战。

### **5\. 风险评估与安全审计**

#### **智能合约风险与安全审计**

Silo协议的代码库已通过全面的安全审计和形式化验证 30。项目方与多家知名安全公司合作，包括Certora、Sigmap Prime和Spearbit Cantina 30。例如，Code4rena在2025年3月对Silo Vaults进行了审计，发现了6个中等严重性漏洞和13个低/非关键漏洞，这些问题随后得到了项目方的修复 34。此外，ChainSecurity也对协议的Curve & Convex功能进行了安全审计，报告结论是代码库安全性高 35。为了持续保障安全，项目方还设立了高达35万美元的漏洞赏金计划，并使用Hypernative和Zeroshadow等工具进行实时事件监控 30。SiloDAO也签署了Security Alliance的《安全港协议》30。

#### **历史风险事件分析**

在2025年6月25日，Silo在一个新推出的、处于测试阶段的**孤立杠杆合约模块**中发生了一次借贷操纵漏洞 6。尽管这是一起安全事件，但其结果却成为了对Silo核心设计理念的有力验证。漏洞发生在与核心协议隔离的测试合约中，

**没有用户资金在核心协议中受到影响** 6。这证明了其“风险隔离”设计的有效性。团队在发现问题后迅速响应，暂停了该漏洞合约，并及时通过Twitter、Telegram和Discord向社区通报 6。团队与审计公司Certora的合作以及公开的事件报告，展示了其处理危机的专业性和透明度 6。这起事件比一个从未被攻击过的协议更能增强投资者的信任，因为它证明了Silo协议不仅在理论上安全，而且在实践中也具备应对风险的韧性和快速恢复能力。

#### **团队与创始人风险**

Silo Finance的创始人被确认为Aiham Jaabari 36。尽管创始人个人信息相对公开，但除了Aiham\_eth的推特和Telegram账号，公开可查的团队成员背景信息非常有限 38。在DeFi领域，缺乏公开透明的团队背景（如LinkedIn资料）通常被视为一个黄色警示。然而，Silo项目通过代码库开源（GitHub）、定期的安全审计、持续的漏洞赏金计划以及对安全事件的快速响应，在一定程度上弥补了团队背景信息不足的风险。

### **6\. 团队、新闻与社区分析**

#### **近期新闻与动态**

Silo Finance在多链上积极扩张，当前TVL分布在多个EVM兼容链上 7。项目团队还与Arbitrum基金会合作，通过激励计划吸引TVL，以促进其在Arbitrum生态的增长 39。此外，项目方计划推出$veSILO模型，以增强代币效用和社区治理参与度 31。

#### **社交媒体情绪与社区活跃度**

Silo Finance的官方社交媒体渠道包括Twitter/X 38、Discord 41和Telegram 6。其Discord社区拥有超过8,000名成员，显示出一定的活跃度 41。然而，与Silo DeFi项目相关的Reddit讨论非常少，大多数讨论集中在同名美剧、传统金融App或公司上 25。

Reddit上缺乏关于Silo Finance DeFi项目的讨论是一个值得关注的信号，这表明该项目在主流Web2社交媒体和更广泛的加密货币社区中的知名度非常低，品牌影响力尚未建立。社区讨论主要集中在项目方自己的Discord和Twitter等渠道上，这是一种相对“中心化”的社区模式。虽然这种模式有助于核心用户和开发者进行高效沟通，但也意味着项目缺乏自发的、病毒式的传播和更广泛的公众关注，这对其长期用户增长是一个潜在的制约因素。

### **7\. 投资机会与策略分析**

Silo Finance为不同风险偏好和技术背景的投资者提供了多种参与方式。

| 投资方式 | 优缺点 | 预期回报 (APR/APY) | 风险水平 | 适用人群 |  |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **代币购买 (SILO)** | **优点:** 参与简单，潜在高回报；**缺点:** 代币数据不透明，流动性低，价格波动大 | 取决于代币升值潜力 | 高 | 长期看好项目愿景，能承受高波动的投资者 |  |
| **提供流动性** | **优点:** 相对稳定，赚取利息及激励；**缺点:** 无常损失，激励计划不确定 | **平均APY:** \~3.08% 27； | **激励:** 具体市场奖励SILO或OP 31 | 中等 | 希望获得被动收入，对DeFi有一定了解的投资者 |
| **高收益策略组合** | **优点:** 收益潜力远超单一借贷；**缺点:** 操作复杂，清算和市场风险高 | 需根据具体策略和市场情况计算，可能远高于平均APY | 极高 | 具备丰富DeFi经验，能熟练操作杠杆、套保的资深玩家 |  |
| **生态开发** | **优点:** 潜在回报巨大，可参与协议核心业务；**缺点:** 需具备深厚开发背景，回报不确定性高 | 需自行评估 | 高 | 具备智能合约开发能力，希望在Web3领域创业的开发者 |  |

#### **投资选项详述**

* **代币购买（SILO/xSILO）：** 投资者可以直接在中心化或去中心化交易所购买SILO代币\[2,8,10\]。如果长期看好协议的风险隔离模型能够吸引更多TVL和费用收入，从而推动代币价值上涨，那么可以考虑持有。同时，可以质押SILO为$xSILO以捕获协议收入 30。  
* **参与借贷/收益农场：** 投资者可以在Silo平台上存入桥接资产（如ETH, USDC）或其他代币，赚取借款利息和额外的代币激励 30。根据DeFi Llama的数据，Silo的平均APY约为3.08% 27。此外，Silo的官方文档显示，其在Arbitrum、Base、Optimism等链上都有特定的代币激励计划，奖励代币包括  
  SILO和OP 31。  
* **高级策略组合：** 对于有经验的DeFi玩家，可以利用Silo的借贷功能与其他协议组合，执行高收益策略。例如，可以利用Silo的借贷功能进行**套保挖矿**：在Silo上存入高价值资产作为抵押，借入稳定币，然后在另一个DEX上卖出，同时在中心化交易所做空该稳定币以对冲风险。这种策略可以利用激励代币的收益，同时对冲掉价格波动风险。另一种策略是**借贷挖矿**，即利用Silo的借贷功能，借入特定资产，并将其存入另一个DeFi协议中以赚取更高的收益，从而形成杠杆收益。  
* **面向开发者的生态参与机会：** Silo提供了一套“Silo Hooks Stack”技术框架，允许开发者部署创新的借贷市场 30。用户可以根据技术文档 45，学习如何为特定资产“创建自己的Silo” 4。具备开发背景的投资者可以为特定资产创建借贷市场，成为“金库管理者”或“应用方” 14，通过提供流动性和服务来赚取费用和激励。这是一种直接参与协议核心业务的模式，潜在回报极高。

### **8\. 竞品比较与竞争优势**

#### **与Aave、Compound等传统巨头的对比**

Silo与Aave、Compound等传统DeFi借贷巨头的核心区别在于其**风险模型** 3。Aave和Compound采用共享资金池，任何新资产的引入都可能增加整个协议的系统性风险；而Silo的孤立模型从根本上隔离了这种风险。这种设计也赋予了Silo一个关键的竞争优势：

**资产多样性**。Silo的风险隔离设计使其能够安全地列出更多“长尾资产”和“新资产”，为这些资产提供借贷市场，而这在传统共享池协议中是极难实现的 2。虽然传统共享池模型的资本效率更高，但Silo通过“桥接资产”机制来弥补孤立模型的效率损失 3。

#### **核心创新被行业巨头采纳的挑战**

Silo面临的最大竞争挑战是来自行业巨头的追赶。Silo率先提出了“风险隔离”的借贷模型。行业巨头Aave在其V3版本中推出了“隔离模式（Isolation Mode）”和“Siloed Mode”等类似功能 12。这一现象从一个角度看，是对Silo创新思想的

**验证**；但从另一个角度看，也构成了最直接、最巨大的**竞争威胁**。Aave拥有数十亿美元的TVL、庞大的用户基础和强大的品牌信誉。当其提供类似的安全功能时，Silo作为先行者的优势将大大减弱。Silo未来将不得不更专注于其独特的“长尾资产”借贷市场，以保持其竞争壁垒。

### **9\. 总结与最终投资建议**

#### **综合评估**

Silo Finance是一个技术上具备创新性和安全性的DeFi协议。其“孤立市场”模型在理念上先进，并在实际安全事件中得到了有效验证，这是其最强大的护城河。然而，其代币市场数据混乱、流动性低，且面临着来自Aave等巨头的直接竞争。代币释放计划也可能带来持续的通胀压力。

#### **最终投资等级**

**中立 (Neutral)**

#### **最终建议与原因**

* **代币投资者：** 鉴于SILO代币市场数据的不透明性和潜在的抛售压力，对于广泛的投资者而言，直接购买SILO代币的风险较高。建议在深入理解其代币经济学和市场风险后，再进行小额、试探性的投资。  
* **生态参与者（尤其是开发者）：** 对于具备技术背景的投资者，Silo提供了独特的生态参与机会（例如创建自己的Silo或构建应用），这为其带来了直接参与协议成长并赚取高收益的机会。因此，对于此类用户，建议密切关注并在充分研究后，积极参与其生态建设，这可能比单纯的代币投资更具价值。

**报告局限性提示：** 本报告基于有限的公开信息，旨在提供一个全面的投资分析框架。任何投资决策都应基于个人全面的尽职调查和风险承受能力。历史数据不能预测未来表现，加密货币投资存在高风险，请务必谨慎。

#### **引用的著作**

1. What is Silo? | Exponential DeFi, 访问时间为 九月 8, 2025， [https://exponential.fi/protocols/silo/958d00c1-df0f-43af-ac65-42b32888644a](https://exponential.fi/protocols/silo/958d00c1-df0f-43af-ac65-42b32888644a)  
2. Silo Finance Price: SILO Live Price Chart, Market Cap & News ..., 访问时间为 九月 8, 2025， [https://www.coingecko.com/en/coins/silo-finance](https://www.coingecko.com/en/coins/silo-finance)  
3. What Is Silo Finance? DeFi's Risk-Isolated Lending Markets \- Nansen, 访问时间为 九月 8, 2025， [https://www.nansen.ai/post/what-is-silo-finance-defis-risk-isolated-lending-markets](https://www.nansen.ai/post/what-is-silo-finance-defis-risk-isolated-lending-markets)  
4. What is Silo Finance? A Complete Guide. \- Blocmates, 访问时间为 九月 8, 2025， [https://www.blocmates.com/articles/what-is-silo-finance-a-complete-guide](https://www.blocmates.com/articles/what-is-silo-finance-a-complete-guide)  
5. Silo Finance \- DeFi Dapps \- Alchemy, 访问时间为 九月 8, 2025， [https://www.alchemy.com/dapps/silo-finance](https://www.alchemy.com/dapps/silo-finance)  
6. Silo Incident Post-Mortem \- Certora, 访问时间为 九月 8, 2025， [https://www.certora.com/blog/silo-incident-report-contract-exploit](https://www.certora.com/blog/silo-incident-report-contract-exploit)  
7. Silo Finance \- DefiLlama, 访问时间为 九月 8, 2025， [https://defillama.com/protocol/silo-finance?tvl=false\&events=false\&mcap=true](https://defillama.com/protocol/silo-finance?tvl=false&events=false&mcap=true)  
8. Silo Finance Price | SILO Price, Charts \- Crypto.com, 访问时间为 九月 8, 2025， [https://crypto.com/price/silo-finance](https://crypto.com/price/silo-finance)  
9. Silo Finance price today \- SILO price chart & live trends \- Kraken, 访问时间为 九月 8, 2025， [https://www.kraken.com/prices/silo-finance](https://www.kraken.com/prices/silo-finance)  
10. Silo Finance Price: SILO Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 九月 8, 2025， [https://www.bybit.com/en/price/silo-finance-2/](https://www.bybit.com/en/price/silo-finance-2/)  
11. Silo Finance Price (SILO), Market Cap, Price Today & Chart History \- Blockworks, 访问时间为 九月 8, 2025， [https://blockworks.co/price/silo](https://blockworks.co/price/silo)  
12. AAVE vs Compound vs JustLend: DeFi Lending \- tastycrypto, 访问时间为 九月 8, 2025， [https://www.tastycrypto.com/blog/aave-vs-justlend-vs-compound/](https://www.tastycrypto.com/blog/aave-vs-justlend-vs-compound/)  
13. Silo Finance: a new take on Money Market Protocols \- Nansen Research, 访问时间为 九月 8, 2025， [https://research.nansen.ai/articles/silo-finance-a-new-take-on-money-market-protocols](https://research.nansen.ai/articles/silo-finance-a-new-take-on-money-market-protocols)  
14. Introduction to Silo, 访问时间为 九月 8, 2025， [https://silodocs2.netlify.app/docs/users/intro](https://silodocs2.netlify.app/docs/users/intro)  
15. Isolated Pairs \- Silo V2, 访问时间为 九月 8, 2025， [https://docs.silo.finance/docs/users/core-concepts/silo/isolated-pairs/](https://docs.silo.finance/docs/users/core-concepts/silo/isolated-pairs/)  
16. A modern approach to B2B supply chain financing. \- Silo, 访问时间为 九月 8, 2025， [https://usesilo.com/products/capital](https://usesilo.com/products/capital)  
17. Get started with our Android app \- Silo Markets, 访问时间为 九月 8, 2025， [https://www.silomarkets.com/get-started](https://www.silomarkets.com/get-started)  
18. Louis Dreyfus Company: Leading Merchant and Food Processor |, 访问时间为 九月 8, 2025， [https://www.ldc.com/](https://www.ldc.com/)  
19. Silo Inc Funding: Rounds, Investors & Growth Insights \- Exa, 访问时间为 九月 8, 2025， [https://exa.ai/websets/directory/silo-funding](https://exa.ai/websets/directory/silo-funding)  
20. Silo bags $132m, partners with First Citizens Bank to advance its 'supply chain in a box' concept \- AgFunderNews, 访问时间为 九月 8, 2025， [https://agfundernews.com/breaking-silo-bags-132m-partners-with-first-citizens-bank-to-advance-its-supply-chain-in-a-box-concept](https://agfundernews.com/breaking-silo-bags-132m-partners-with-first-citizens-bank-to-advance-its-supply-chain-in-a-box-concept)  
21. Silo Funding & Investors \- Employbl, 访问时间为 九月 8, 2025， [https://www.employbl.com/companies/Silo/funding-rounds](https://www.employbl.com/companies/Silo/funding-rounds)  
22. Our Team \- Silo Pharma, 访问时间为 九月 8, 2025， [https://ir.silopharma.com/our-team/](https://ir.silopharma.com/our-team/)  
23. Silo Wellness Inc. (SILO) Leadership & Management Team Analysis \- Simply Wall St, 访问时间为 九月 8, 2025， [https://simplywall.st/stocks/ca/pharmaceuticals-biotech/cse-silo/silo-wellness-shares/management](https://simplywall.st/stocks/ca/pharmaceuticals-biotech/cse-silo/silo-wellness-shares/management)  
24. Silo Pharma, Inc. Common Stock (SILO) News Headlines | Nasdaq, 访问时间为 九月 8, 2025， [https://www.nasdaq.com/market-activity/stocks/silo/news-headlines](https://www.nasdaq.com/market-activity/stocks/silo/news-headlines)  
25. Has anyone heard of an app called Silo markets? : r/investing \- Reddit, 访问时间为 九月 8, 2025， [https://www.reddit.com/r/investing/comments/1hi0rfk/has\_anyone\_heard\_of\_an\_app\_called\_silo\_markets/](https://www.reddit.com/r/investing/comments/1hi0rfk/has_anyone_heard_of_an_app_called_silo_markets/)  
26. Silo Markets: Lock In High Interest Rates With Bonds, 访问时间为 九月 8, 2025， [https://www.silomarkets.com/](https://www.silomarkets.com/)  
27. Silo Finance \- DefiLlama, 访问时间为 九月 8, 2025， [https://defillama.com/protocol/silo-finance](https://defillama.com/protocol/silo-finance)  
28. Silo Finance \- DefiLlama, 访问时间为 九月 8, 2025， [https://defillama.com/protocol/silo-finance?denomination=USD\&groupBy=daily](https://defillama.com/protocol/silo-finance?denomination=USD&groupBy=daily)  
29. Silo \- Your Non-custodial Crypto Bank, 访问时间为 九月 8, 2025， [https://silo.finance/](https://silo.finance/)  
30. Yield farming opportunities | Silopedia, 访问时间为 九月 8, 2025， [https://silopedia.silo.finance/yield-farming-opportunities](https://silopedia.silo.finance/yield-farming-opportunities)  
31. Silo Finance Price, SILO Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 九月 8, 2025， [https://www.coinbase.com/price/silo-finance](https://www.coinbase.com/price/silo-finance)  
32. Risks | Silo V2, 访问时间为 九月 8, 2025， [https://silodocs2.netlify.app/docs/security/risks](https://silodocs2.netlify.app/docs/security/risks)  
33. Silo Finance, 访问时间为 九月 8, 2025， [https://docs.silo.finance/assets/files/Code4rena\_Silo\_Vaults\_Audit\_Report-4bc6446f3010491fc65875a8a08ab484.pdf](https://docs.silo.finance/assets/files/Code4rena_Silo_Vaults_Audit_Report-4bc6446f3010491fc65875a8a08ab484.pdf)  
34. Silo Finance – Curve & Convex Feature Security Audit \- ChainSecurity, 访问时间为 九月 8, 2025， [https://www.chainsecurity.com/security-audit/silo-finance-curve-convex-feature](https://www.chainsecurity.com/security-audit/silo-finance-curve-convex-feature)  
35. Silo Finance price today, SILO to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 九月 8, 2025， [https://coinmarketcap.com/currencies/silo-finance/](https://coinmarketcap.com/currencies/silo-finance/)  
36. Silo Finance overview \- Token Terminal, 访问时间为 九月 8, 2025， [https://tokenterminal.com/explorer/projects/silo](https://tokenterminal.com/explorer/projects/silo)  
37. Contact Us | Developer Docs \- Silo Finance, 访问时间为 九月 8, 2025， [https://devdocs.silo.finance/contact-us](https://devdocs.silo.finance/contact-us)  
38. Arbitrum Launches $40 Million DeFi Incentive Program, What Are the Projects Like? \- Pintu, 访问时间为 九月 8, 2025， [https://pintu.co.id/en/news/202653-arbitrum-launches-40-million-defi-incentive-program-what-are-the-projects-like](https://pintu.co.id/en/news/202653-arbitrum-launches-40-million-defi-incentive-program-what-are-the-projects-like)  
39. \[Silo Finance\] \[FINAL\] \[STIP \- Round 1\] \- Arbitrum Governance Forum, 访问时间为 九月 8, 2025， [https://forum.arbitrum.foundation/t/silo-finance-final-stip-round-1/16640](https://forum.arbitrum.foundation/t/silo-finance-final-stip-round-1/16640)  
40. Silo Finance \- Discord, 访问时间为 九月 8, 2025， [https://discord.com/invite/silo-finance](https://discord.com/invite/silo-finance)  
41. A word of advice for those looking to get into development : r/FilmIndustryLA \- Reddit, 访问时间为 九月 8, 2025， [https://www.reddit.com/r/FilmIndustryLA/comments/1n6crzl/a\_word\_of\_advice\_for\_those\_looking\_to\_get\_into/](https://www.reddit.com/r/FilmIndustryLA/comments/1n6crzl/a_word_of_advice_for_those_looking_to_get_into/)  
42. Layoffs: Job Loss And Recovery \- Reddit, 访问时间为 九月 8, 2025， [https://www.reddit.com/r/Layoffs/new/](https://www.reddit.com/r/Layoffs/new/)  
43. Silo S2E9 "The Safeguard" Episode Discussion (No Book Discussion) : r/SiloSeries \- Reddit, 访问时间为 九月 8, 2025， [https://www.reddit.com/r/SiloSeries/comments/1hxtmct/silo\_s2e9\_the\_safeguard\_episode\_discussion\_no/](https://www.reddit.com/r/SiloSeries/comments/1hxtmct/silo_s2e9_the_safeguard_episode_discussion_no/)  
44. APIs | Silo V2, 访问时间为 九月 8, 2025， [https://docs.silo.finance/docs/category/apis/](https://docs.silo.finance/docs/category/apis/)