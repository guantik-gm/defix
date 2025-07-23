

# **Echelon Market (Aptos) 深度投资评估报告**

## **第一部分：项目概述与核心定位**

### **1.1 市场定位与价值主张**

Echelon Market 作为一个基于 Aptos 区块链的高效去中心化借贷协议（货币市场），其核心市场定位是成为 Move 语言生态系统中的基础性金融层 1。该协议旨在解决现有 DeFi 借贷领域中普遍存在的资本效率与风险管理之间的根本性权衡问题 3。通过其 Move 语言原生架构以及诸如效率模式（E-Mode）和资产再抵押（Rehypothecation）等创新功能，Echelon Market 允许用户以非托管的方式，通过流动性池间接进行资产的存贷活动，从而赚取利息或利用杠杆提升资本的购买力 2。

该项目的根本使命是为 Aptos 及更广泛的 Move 生态（如 Movement、Initia）开发一个资本效率最高、最稳健的借贷基础层，以推动整个生态系统的 DeFi 应用普及 4。其价值主张并非仅仅是创建一个独立的借贷应用，而是要成为一个可组合的“DeFi 积木”，为生态内其他协议，例如流动性质押代币（LST）和真实世界资产（RWA）协议，提供关键的杠杆工具和收益增强服务。这种定位使其在生态系统中扮演着至关重要的底层基础设施角色。

### **1.2 关键信息厘清：避免同名项目混淆**

在进行深入分析之前，必须澄清“Echelon”这一名称在加密货币及其他领域中的多种不同指代，以避免信息混淆，这是进行准确投资评估的首要前提。

* **本报告的目标项目：Echelon Market (Aptos)**  
  * **描述:** 一个专注于 Move 生态系统的 DeFi 借贷协议，部署在 Aptos 区块链上。其官方应用访问地址为 app.echelon.market 1。这是本报告分析的唯一主体。  
* **易混淆项目 1：Echelon Prime ($PRIME)**  
  * **描述:** 一个基于以太坊的 Web3 游戏生态系统，其原生代币为 PRIME。该生态系统的核心是科幻主题的交易卡牌游戏 Parallel。PRIME 主要用于游戏内的经济活动、治理和奖励 6。该项目与 Echelon Market (Aptos) 在技术、团队和生态上完全无关。  
* **易混淆项目 2：Echelon ($ECH)**  
  * **描述:** 一个旨在实现 Cosmos 和 EVM 兼容的公链协议，其原生代币为 ECH。该代币的合约地址存在于以太坊、BNB Smart Chain、Fantom 等多条公链上 10。该项目同样与 Echelon Market (Aptos) 无任何关联。  
* **其他无关的同名实体：**  
  * 研究过程中还发现了多个非加密领域的同名公司，包括 Echelon Fitness（智能健身设备公司）12、Echelon Partners（投资银行与咨询公司）14、Echelon Capital Markets（金融服务公司）16 以及 Echelon Risk \+ Cyber（网络安全公司）18。这些实体均与本报告分析的 DeFi 协议无关。

本报告的所有分析将严格围绕 **Echelon Market (Aptos)** 展开，排除所有其他同名项目的信息干扰。

### **1.3 团队背景与融资情况**

Echelon Market 的发展获得了强大的资本和生态系统支持，这为其早期增长奠定了坚实的基础。

* **融资情况:** 协议于2024年8月宣布完成一轮 **350万美元** 的种子轮融资 19。此轮融资由顶级加密做市商和投资机构  
  **Amber Group** 领投，参投方阵容强大，包括野村证券旗下的数字资产公司 **Laser Digital**、金融科技风投 **Saison Capital**、知名加密基金 **Selini Capital**、**Interop Ventures**、**Re7 Capital**，以及跨链基础设施巨头 **LayerZero** 和知名加密影响者 **DCF God** 等 19。  
* **生态系统支持:** Echelon Market 是 **Thala Labs** 和 **Aptos 基金会** 联合设立的 DeFi 基金所孵化的首个项目，并获得了 **10万美元** 的资助，专项用于核心开发和安全审计费用 3。

从投资者构成和孵化背景可以洞察其多维度的战略意图。首先，Amber Group 和 Selini Capital 等专业交易机构的加入，表明 Echelon Market 的高性能设计和资本效率对专业交易者和机构流动性提供者具有吸引力。其次，Laser Digital 的参与暗示了项目对连接传统金融（TradFi）和引入真实世界资产（RWA）的长期兴趣，这与其路线图中的规划相符 4。再者，LayerZero 作为投资者和技术合作伙伴，预示着该协议从设计之初就将跨链互操作性作为核心战略，其目标远不止于 Aptos 单一链。最后，作为 Aptos 基金会和 Thala Labs 的“嫡系”孵化项目，Echelon 在获取生态内部资源、技术支持和早期用户方面拥有无可比拟的优势，这解释了其为何能迅速整合 Thala 的核心资产（如稳定币 MOD 和 LST thAPT）并获得市场的初步认可。

## **第二部分：技术架构与协议设计解析**

Echelon Market 的技术架构和协议设计围绕“资本效率”和“风险管理”两大核心，旨在为 Move 生态系统提供一个既高效又稳健的借贷基础设施。

### **2.1 核心机制：效率模式 (E-Mode) 与借贷池**

Echelon 协议的核心是其非托管的流动性池，用户可以存入资产以赚取浮动利息，或以超额抵押的方式借出资产 3。其最具标志性的创新是借鉴并优化了 AAVE 的

**效率模式（E-Mode）** 1。

E-Mode 专门针对价格高度相关的资产对（例如，USDC/USDT 等稳定币之间，或 sthAPT/APT 等 LST 与其原生资产之间）设计。由于这类资产的价格波动趋同，其相对价值变动极小，从而大幅降低了清算风险。基于此，协议允许在 E-Mode 下将**贷款价值比（LTV）提升至 90% 甚至 95%** 1。这种机制是 Echelon 实现其“高资本效率”价值主张的关键，它直接催生了极具吸引力的杠杆循环策略，成为协议吸引早期流动性和用户的核心“钩子”。

此外，协议采用动态利率模型，利率根据每个资金池的利用率（即借款总额/存款总额）自动调整。高利用率会推高借款利率以激励更多存款，低利用率则会降低利率以鼓励借贷，从而通过市场机制维持池子的平衡 3。

### **2.2 资产与跨链支持**

为了在扩大资产多样性的同时有效隔离风险，Echelon 采用了双重市场结构：

1. **主市场 (Primary Market):** 用于支持高流动性、信誉良好的主流资产，如 APT、USDC、USDT 等。  
2. **隔离池 (Isolated Pools):** 用于支持波动性更高、风险更大的长尾资产。每个隔离池的风险被限制在其内部，不会影响主市场或其他隔离池的安全性 3。

目前，协议已整合超过15种资产 4，并制定了明确的扩展计划，重点关注

**真实世界资产（RWA）** 和 **BTCfi** 领域。计划整合的 RWA 包括 Ondo Finance 的生息稳定币 USDY 和 Circle 的 BUIDL 基金份额；BTCfi 资产则包括多种形式的封装比特币 4。

在跨链方面，协议通过集成 **Wormhole** 和 **LayerZero** 等主流跨链桥接方案，以支持非 Aptos 原生资产的引入 3。特别是与投资者 LayerZero 的深度合作，预示着其未来的多链部署和资产流动将具备坚实的技术基础。

### **2.3 预言机与数据源**

预言机是 DeFi 协议的安全生命线，Echelon 在此方面采取了稳健且经过深思熟虑的策略。协议并未依赖单一预言机，而是采用了一个**多预言机系统**，结合了 **Pyth Network**、**Switchboard** 以及自定义的价格信息源，通过聚合多个数据点来确保资产估值的准确性和抗操纵性 3。

尤为值得称道的是其针对 LST 等衍生品的定制化定价逻辑。以 Thala 的 sthAPT 为例，协议并非直接采用其在 DEX 上的现货价格（该价格可能因流动性不足而剧烈波动），而是通过一个自定义公式，结合 Pyth 提供的原生 APT 价格和从 Thala 协议直接获取的链上实时质押率数据，来计算 sthAPT 的内在价值 3。这种方法极大地降低了因预言机攻击或市场短期失灵而导致不必要清算的风险，体现了团队在风险管理方面的专业性和前瞻性。

### **2.4 路线图与未来发展**

Echelon Market 公布了其雄心勃勃的路线图，清晰地展示了其从中短期目标到长期愿景的演进路径 4。

**短期目标 (2024-2025):**

* **规模增长:** 将总锁仓价值（TVL）提升至3亿美元以上。  
* **资产扩展:** 将支持的抵押品数量翻倍，重点引入更多 RWA、LST 和 BTCfi 资产。  
* **多链部署:** 在新兴的 Move 兼容链 **Movement** 和 **Initia** 的主网上线。  
* **代币发行:** 推出协议的治理代币 4。

**长期愿景:**

* **简化用户体验:** 计划推出面向普通消费者的“Echelon Earn”界面，将复杂的 DeFi 收益策略封装成简单易用的一键式产品 4。  
* **从“应用”到“应用链”的演进:** 路线图中一个极具战略意义的规划是，在 Initia（一个用于构建“交织汇总”即 App-Rollups 的网络）上推出一个“以借贷为中心的 Move L2” 4。这标志着 Echelon 的终极目标可能不仅仅是作为一个 DApp 存在于其他公链之上，而是要演变为一个拥有自己专属区块链环境的  
  **应用链（Appchain）**。

成为应用链将为 Echelon 带来巨大优势：首先，它可以完全控制交易费用结构，将 MEV（矿工可提取价值）和交易费等协议收入内化；其次，它可以为高频的借贷和清算操作专门优化底层性能；最后，它能更紧密地控制其生态系统内的应用集成，构建更深的护城河。虽然执行此战略的风险和挑战巨大，但一旦成功，其估值天花板和长期竞争力将得到极大提升。

## **第三部分：安全审计与综合风险评估**

对任何 DeFi 协议的投资决策都必须建立在对其安全性和各类风险的全面评估之上。Echelon Market 作为一个提供高杠杆服务的借贷协议，其风险评估尤为关键。

### **3.1 智能合约安全**

协议的安全性是其生存的基石。官方在多个渠道，包括公告和资助声明中，均强调协议的核心模块已经过安全审计 1。Aptos 基金会提供的10万美元资助中，一部分也明确用于支付审计费用 21。

从技术层面看，Echelon Market 建立在 Move 编程语言之上。Move 语言在设计之初就考虑了资产安全，其资源模型和所有权系统能够从根本上防止一整类常见的智能合约漏洞，例如重入攻击（Re-entrancy Attacks）21，这为协议提供了一层额外的内生安全保障。

然而，尽管项目方声称已审计，但在公开资料中并未找到直接指向完整审计报告的链接。对于投资者而言，亲自审查由信誉良好的审计公司出具的报告至关重要，需要关注其中发现的漏洞等级、修复状态以及潜在的中心化风险点。此外，其核心智能合约代码库在 GitHub 上的开发活动透明度有限 26，这增加了外部独立评估的难度。

**风险点:**

* **审计报告可访问性:** 缺乏公开、易于访问的审计报告链接，投资者无法独立验证审计细节。  
* **代码透明度:** 核心合约代码的开发活动和历史记录不够透明，限制了社区的监督能力。

### **3.2 经济模型风险**

Echelon Market 当前最吸引用户的特点是其极高的收益率，但这背后也隐藏着显著的经济模型风险。

* 高 APR 的可持续性与构成:  
  社区论坛和社交媒体上流传着通过 Echelon Market 在稳定币上实现超过 70% APR 的策略 27。这种超高收益并非来自协议基础的存贷利差，而是由以下三个部分叠加而成：  
  1. **杠杆收益:** 通过 E-Mode 的高 LTV（高达93%）进行循环借贷，放大了基础资产的收益。  
  2. **外部资产收益:** 策略中大量使用了 Ethena 的生息稳定币 sUSDe，其本身带有约15-20%的收益。  
  3. **积分激励:** 收益的大部分来源于对未来空投的预期，即通过参与协议活动赚取的 Echelon 积分和 Ethena Sats 28。

  这种模式本质上是一场典型的“流动性挖矿”游戏，其核心是博弈未来的空投价值。因此，其风险也显而易见：

  * **积分价值风险:** 收益的主要驱动力是对未来代币价格的投机，空投的实际价值可能远低于当前市场预期，甚至归零。  
  * **可持续性风险:** 一旦积分激励减少或空投结束，高 APR 将不复存在。这可能引发大规模的资本撤出（“挖卖提”），导致协议 TVL 骤降和流动性危机。  
  * **杠杆清算风险:** 高达93%的 LTV 意味着抵押品和借出资产之间即使发生微小的价格波动，也可能触发大规模的连锁清算。  
* 关联资产脱锚风险 (黑天鹅风险):  
  高收益策略严重依赖于 Ethena 的 sUSDe 27。USDe 是一种通过 Delta 中性对冲策略（做多现货 ETH 并做空等量永续合约）产生的合成美元。其价格稳定依赖于复杂的对冲机制和资金费率为正的市场环境。这是该策略中最大的潜在“黑天鹅”风险。如果 Ethena 的机制在极端市场条件下（如资金费率长期为负、交易所对手方风险爆发等）失效，导致 sUSDe 严重脱离锚定，那么在 Echelon 上使用 sUSDe 作为抵押品进行杠杆操作的用户将面临瞬时清算。在市场恐慌时，流动性枯竭可能导致巨大的清算滑点，使用户在抵押品被清算后仍背负债务。

### **3.3 市场与运营风险**

* **竞争风险:** Aptos 生态的借贷赛道竞争激烈。其主要竞争对手 **Aries Markets** 在 TVL 上曾一度领先，并且也推出了类似的 E-Mode 和积分系统，与 Echelon 展开贴身肉搏 29。  
* **监管风险:** 作为提供高杠杆金融服务的 DeFi 协议，未来可能面临来自全球各司法管辖区日益严格的监管审查。  
* **中心化风险:** 尽管协议的长期目标是去中心化，但在早期阶段，项目的开发、升级和关键参数的设定可能仍由核心团队主导。未来治理代币的分配是否足够分散，以及去中心化治理的实际落地情况，是衡量其长期健康度的关键。

## **第四部分：代币经济学与空投预期分析**

截至本报告撰写时，Echelon Market 尚未发行其原生代币。然而，其明确的积分系统和官方路线图预示着代币发行和空投即将到来。

### **4.1 积分系统解析（未来空投的代理）**

Echelon 推出了积分系统，作为奖励早期用户和引导协议增长的核心机制 32。该系统是未来空投分配的明确信号。

* **积分获取规则:** 用户通过在协议中供应（Lending）和借贷（Borrowing）资产来赚取积分。关键在于，**借贷所获得的积分权重远高于供应**（通常为3:1的比例，类似于竞争对手 Aries 的设计）31。  
* **战略合作激励:** 协议与 Ethena 的合作中，承诺将未来代币总供应量的 **5%** 分配给 sENA（质押的 ENA）持有者，这是一种吸引外部生态系统用户和流动性的战略举措 34。

积分规则的设计清晰地揭示了协议希望激励的行为：即最大化资金利用率（借贷量）而非仅仅是存款规模（TVL）。这直接导致了高杠杆循环贷策略的盛行。用户通过（例如）存入 sUSDe 并借出 USDC 的循环操作，可以用少量本金创造出巨大的供应和借贷交易量，从而高效地“刷”取积分。这虽然在短期内能让协议的 TVL 和借贷数据显得非常亮眼，但也意味着其增长数据存在相当大的“泡沫”。评估 Echelon 的真实价值时，必须认识到当前数据在很大程度上是由空投预期驱动的杠杆行为所支撑的。

### **4.2 未来治理代币（推测）**

根据官方路线图，治理代币计划在未来数月内推出 4。基于现有信息和行业最佳实践，可以对其代币经济学做出如下推测：

* **代币功能:** 极有可能采用 **veToken（投票托管代币）模型**，类似于其合作伙伴 Thala Labs 35。用户通过锁定代币获得 veToken，从而拥有：  
  * **治理权:** 投票决定协议的关键参数，如上架新资产、调整 LTV 和清算门槛、修改利率模型等。  
  * **协议收入分成:** 分享协议产生的费用，这些费用主要来自借贷利差和清算罚金。  
* **价值捕获:** 协议的价值捕获能力将是其代币长期价值的关键。根据 DeFiLlama 的数据，Echelon Market 展示了可观的创收能力，例如在30天内产生约108万美元的费用和33.1万美元的协议收入 19。如果未来代币能够有效捕获这部分现金流，将为其价格提供坚实的价值支撑。  
* **跨链效用:** 路线图特别提到，该治理代币将是一个 **LayerZero OFT (Ominichain Fungible Token)** 4。这意味着代币将具备原生的跨链能力，可以在 Aptos、Movement、Initia 等多条链上无缝地用于治理投票和激励分发。这是其宏大多链战略在代币层面的体现，也是一个重要的技术亮点。

## **第五部分：社区活跃度与市场情绪分析**

### **5.1 官方渠道表现**

Echelon Market 建立了完善的官方沟通渠道，包括 **Twitter (X)**、**Discord** 和 **Medium** 博客 1。

* **Twitter/X:** 官方账号 @echelonmarket 活跃，用于发布重要公告、合作信息和营销活动。  
* **Discord:** 官方 Discord 服务器是社区讨论的主要场所，拥有数千名成员，设有公告、问答、策略讨论等多个频道 36。  
* **Medium:** 团队通过 Medium 博客定期发布深度文章，详细阐述项目进展、技术细节和未来路线图，展现了较高的透明度 4。

总体来看，项目方在社区运营和信息披露方面表现专业、积极，这是项目健康发展的良好迹象。

### **5.2 市场情绪概览**

当前市场对 Echelon Market 的情绪呈现明显的两极分化，这反映了其高风险高回报的特性。

* 正面情绪与看涨观点:  
  这部分情绪主要集中在追求高α收益的 DeFi 资深参与者（“Degen Farmers”）中。他们被以下几点所吸引：  
  1. **极高的潜在收益:** 超过70%的稳定币 APR 极具诱惑力 27。  
  2. **明确的空投预期:** 积分系统被视为获取未来代币空投的“金铲子”。  
  3. **强大的背景:** Aptos 基金会和 Thala Labs 的孵化，以及顶级 VC 的投资，为其提供了强大的信誉背书 3。

     在 Aptos 官方论坛、币安广场等平台，可以看到大量关于如何利用 Echelon 进行高收益挖矿的教程和积极讨论 27。  
* 负面情绪与质疑声音:  
  质疑的声音主要来自 Reddit 等更为谨慎的投资者社区 28。他们的担忧主要集中在：  
  1. **可持续性质疑:** 许多用户认为超过70%的稳定币收益“好得令人难以置信”，并将其与历史上曾出现问题的其他高收益协议（如 ZeroLend）相提并论，怀疑其本质是不可持续的 28。  
  2. **风险担忧:** 用户普遍担心高杠杆策略背后隐藏的清算风险和 sUSDe 等关联资产的脱锚风险 28。  
  3. **骗局担忧:** 一部分极度悲观的用户甚至直接将其标记为潜在的骗局 28。

这种情绪上的分化是健康的，它准确地反映了项目的本质：对于能够理解并愿意承担其背后复杂风险的投资者来说，它是一个充满机遇的投机目标；而对于风险规避型投资者来说，它则是一个需要远离的高风险领域。

## **第六部分：竞争格局分析**

### **6.1 Aptos 生态借贷赛道概览**

借贷是任何公链 DeFi 生态的基石，Aptos 也不例外。该赛道已吸引了多个协议参与，形成了初步的竞争格局。根据 DeFiLlama 和社区论坛的数据，主要参与者包括 **Aries Markets**、**Echelon Market**、**Aptin Finance**、**Echo Lending** 等 29。其中，Aries Markets 和 Echelon Market 在总锁仓价值（TVL）和市场关注度上处于绝对的领先地位，构成了双雄争霸的局面 19。

### **6.2 与主要竞争对手的横向对比 (Echelon vs. Aries)**

Echelon Market 和 Aries Markets 在产品功能、市场策略和核心叙事上表现出高度的同质化，二者正在为争夺 Aptos 生态的流动性霸主地位展开激烈竞争。

* **核心功能与 TVL:** 双方的 TVL 均达到了亿美元级别，排名时常交替，竞争异常激烈 19。在核心功能上，Aries Markets 同样推出了  
  **E-Mode**，支持 APT/amAPT/stAPT 等相关资产高达 90% 的 LTV，其核心机制与 Echelon 几乎一致 30。  
* **增长策略:** Aries Markets 也推出了详细的**积分系统**作为空投激励，其规则与 Echelon 类似，同样是供应资产得1分，借贷资产得3分，并设有推荐奖励机制 31。这表明双方都在使用相同的“空投预期” playbook 来吸引用户和流动性。  
* **安全与审计:** Aries Markets 也声称其 E-Mode 经过了 OtterSec 的审计，在安全叙事上与 Echelon 保持同步 30。

在这场贴身肉搏战中，虽然表面功能相似，但仍可从更深层次的战略布局中寻找差异化：

1. **生态绑定深度:** Echelon 作为 Aptos 基金会和 Thala Labs 的官方孵化项目，其“嫡系”身份使其与生态核心（特别是 Thala）的绑定更深。Aries Markets 则显得更为独立。  
2. **跨链战略广度:** Echelon 的多链叙事更为清晰和宏大，其路线图明确指向 Movement 和 Initia，并计划发行 LayerZero OFT 代币，展现了成为 Move 生态跨链借贷龙头的野心。  
3. **未来资产整合:** 双方都计划引入 RWA 和 BTCfi 资产，未来谁能更快、更安全地引入具有吸引力的新资产类别，谁就可能在竞争中获得优势。

目前，两者的竞争焦点仍在于短期的“收益率竞赛”和“空投预期管理”。从长期战略看，Echelon 凭借其更宏大的跨链叙事和更深的生态根基，可能具备微弱的战略优势。然而，这也使其风险敞口更为集中于 Aptos 和 Thala 生态的成败。

### **表格 1: Aptos 借贷协议核心指标对比**

| 指标 | Echelon Market | Aries Markets | Echo Lending | Aptin Finance V2 |
| :---- | :---- | :---- | :---- | :---- |
| **总锁仓价值 (TVL)** | $143.42m 19 | $254.19m 40 | $289.07m 19 | $14.59m 19 |
| **总借款额** | $124.91m 19 | $80m (约) 30 | N/A | N/A |
| **30日协议费用** | $1.08m 19 | $802.07k 40 | N/A | N/A |
| **30日协议收入** | $331.54k 19 | N/A | N/A | N/A |
| **核心功能** | E-Mode, 隔离池 3 | E-Mode, 链上订单簿 30 | BTC 流动性质押 41 | 借贷 29 |
| **激励机制** | 积分系统, 空投预期 32 | 积分系统, 空投预期 31 | 积分系统, 空投预期 41 | 可能的空投预期 39 |
| **生态系统关系** | Aptos & Thala 孵化 21 | 独立发展 30 | Aptos LFM 计划成员 41 | 独立发展 39 |

*注：数据截至报告研究阶段，可能存在实时变动。N/A 表示在研究资料中未找到明确数据。*

## **第七部分：投资机会与策略矩阵**

Echelon Market 为不同风险偏好和技术背景的投资者提供了多种参与机会。以下是对主要投资策略的详细剖析。

### **7.1 空投挖矿（积分策略）**

* **策略描述:** 此策略的核心目标是通过在协议中进行供应和借贷活动，以最低的风险和成本最大化地获取 Echelon 积分，从而博取未来可观的代币空投。  
* **操作步骤:**  
  1. 在 Echelon Market 上存入一种资产（如 USDC 或 APT）。  
  2. 以存入的资产为抵押，借出同一种或其他资产。  
  3. 由于借贷获得的积分权重是供应的三倍，可以通过**循环贷**（例如，存入 USDC，借出 USDC，再将借出的 USDC 存入）来显著放大积分的获取效率。  
  4. 利用推荐机制邀请其他用户参与，可以获得额外的积分奖励 33。  
* **分析:** 这是当前参与 Echelon 最主流且相对风险最低的策略。其主要风险敞口是协议的智能合约风险，而本金风险仅限于循环操作中产生的微小滑点和交易费用。

### **7.2 高收益稳定币策略（杠杆循环）**

* **策略描述:** 这是最高风险、最高潜在回报的“Degen”策略。它利用 E-Mode 对 sUSDe/USDC 等稳定币对提供的高达93%的 LTV，进行高倍杠杆的循环借贷，以同时赚取杠杆化的 Ethena 基础收益、Ethena Sats 积分和 Echelon 积分 27。  
* **操作步骤:**  
  1. 将 USDC 在 Ethena 协议中兑换为 sUSDe。  
  2. 将 sUSDe 存入 Echelon Market。  
  3. 以 sUSDe 为抵押，借出 USDC。  
  4. 将借出的 USDC 再次兑换为 sUSDe，并存入 Echelon。  
  5. 重复步骤 3-4，直至达到目标杠杆率或 LTV 上限 22。  
* **分析:** 此策略的收益极具吸引力，但风险也极高。投资者必须密切监控 sUSDe 的价格锚定情况、Ethena 协议的健康状况以及 Echelon 的清算机制。

### **7.3 LST 杠杆质押策略**

* **策略描述:** 此策略旨在通过杠杆放大 Aptos (APT) 的质押收益。它利用 E-Mode 对 LST/APT 资产对的高 LTV，实现杠杆化的流动性质押。  
* **操作步骤:**  
  1. 将 APT 通过 Thala 或 Amnis Finance 质押为 sthAPT 或 amAPT。  
  2. 将 LST（如 sthAPT）存入 Echelon Market。  
  3. 以 LST 为抵押，借出原生 APT。  
  4. 将借出的 APT 再次质押为 LST，并存入 Echelon。  
  5. 重复步骤 3-4，放大质押头寸和积分收益 32。  
* **分析:** 该策略的风险介于前两者之间。主要风险来自 LST 相对 APT 的价格脱钩（可能由智能合约漏洞或市场恐慌引起）以及由此触发的杠杆清算风险。

### **7.4 开发者参与机会**

* **策略描述:** 对于具备开发背景的投资者，可以利用协议提供的软件开发工具包（SDK）来构建自动化策略，以提高效率或捕捉套利机会。  
* **操作步骤:**  
  1. 使用官方提供的 @echelonmarket/echelon-sdk 43。  
  2. 编写脚本实现自动化的循环贷、仓位再平衡、健康度监控与自动警报。  
  3. 探索构建跨协议的套利机器人，例如监控 Echelon 与 Aries Markets 之间的利率差并进行套利。  
* **未来机会:** 投资者应密切关注协议路线图中提到的\*\*“无需许可的隔离池创建”\*\*功能 4。该功能一旦上线，将允许任何开发者为任意 ERC-20 代币创建独立的借贷市场。这为开发者提供了一个创造收入的机会——通过为长尾资产提供借贷服务并从中收取手续费，类似于在 Uniswap V3 上创建集中流动性池。

### **表格 2: Echelon Market 投资策略对比矩阵**

| 策略 | 策略描述 | 操作步骤 | 预期收益 (APR/APY) | 优点 | 风险点 | 所需资本 | 技术门槛 | 适合的投资者 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. 空投挖矿 (低风险)** | 以最低风险获取最多积分，博取未来空投。 | 存入资产，进行循环贷以放大供应和借贷量。 | 主要为未来空投的投机价值，基础 APR 较低。 | 风险低，操作相对简单，本金安全度高。 | 智能合约风险，空投价值不确定性。 | 低/中/高 | 低 | 稳健型 DeFi 用户，空投猎人。 |
| **2\. 稳定币杠杆循环** | 利用高杠杆放大 sUSDe 收益和多重积分奖励。 | 循环存入 sUSDe，借出 USDC，重复操作。 | \>70% (杠杆化 sUSDe 收益 \+ 多重积分)，高度投机。 | 潜在回报极高，资本效率最大化。 | **极高**：sUSDe 脱锚风险，杠杆清算风险，智能合约风险。 | 中/高 | 中 | 经验丰富的 DeFi Degen，风险偏好极高。 |
| **3\. LST 杠杆质押** | 杠杆化 APT 质押收益，同时赚取积分。 | 循环存入 LST (sthAPT)，借出原生 APT，再质押。 | 杠杆化的 APT 质押收益 (约 7% \* 杠杆倍数) \+ 积分。 | 收益相对稳定，风险低于稳定币杠杆策略。 | **高**：LST 脱钩风险，杠杆清算风险，智能合约风险。 | 中/高 | 中 | 对 LST 有深入了解的 DeFi 投资者。 |
| **4\. 开发者程序化交互** | 利用 SDK 构建自动化策略，提高效率或进行套利。 | 使用 echelon-sdk 编写脚本，实现自动存贷、再平衡、套利等。 | 取决于策略的复杂度和有效性，潜力巨大。 | 效率高，可捕捉手动无法实现的机会，未来可创建收费市场。 | **高**：代码漏洞风险，策略失效风险，智能合约风险。 | 低/中/高 | 高 | 具备编程能力的 DeFi 投资者，量化交易员。 |

## **第八部分：总结与投资评级**

### **8.1 综合评估总结**

在对 Echelon Market 进行全面深入的分析后，可以总结其核心优势与风险如下：

**优势 (Strengths):**

1. **强大的生态支持:** 作为 Aptos 基金会和 Thala Labs 联合孵化的项目，Echelon 在生态系统内部拥有无与伦比的资源和协同效应，为其冷启动和长期发展提供了保障 3。  
2. **顶级资本背书:** 种子轮融资阵容豪华，包括 Amber Group、LayerZero 等行业巨头，这不仅证明了市场对其团队和愿景的高度认可，也为其带来了网络效应和战略资源 19。  
3. **清晰的增长战略:** 协议制定了“巩固 Aptos \-\> 主导 Move 生态 \-\> 连接外部世界（RWA, BTCfi）”的三步走战略，路径清晰且富有野心，特别是其向应用链演进的长期愿景，打开了巨大的想象空间 4。  
4. **创新的产品设计:** 借鉴并优化了 E-Mode，通过提供极高的资本效率，成功地创造了市场需求，吸引了大量早期用户和 TVL 1。  
5. **明确的空投预期:** 清晰的积分系统为早期参与者提供了强烈的财务激励，是其短期内实现爆发式增长的关键催化剂 32。

**风险 (Risks):**

1. **极高的经济模型风险:** 当前的 TVL 和诱人的高收益率在很大程度上是由空投预期驱动的高风险杠杆循环所支撑的，存在显著的“泡沫”成分和不可持续性。这是投资者必须认识到的最大风险 28。  
2. **系统性风险敞口:** 协议的增长和高收益策略深度绑定于 Thala (sthAPT) 和 Ethena (sUSDe) 等外部协议。这些外部协议若出现问题（如资产脱锚），将对 Echelon 造成灾难性的连锁反应 27。  
3. **激烈的市场竞争:** 与功能高度同质化的 Aries Markets 之间的竞争异常激烈，未来市场份额的争夺存在不确定性 29。  
4. **智能合约与技术风险:** 作为一个相对较新的协议，尽管有审计声明和 Move 语言的加持，其代码的长期稳健性仍需经过更多时间和极端市场环境的考验。  
5. **代币发行后的不确定性:** 空投落地后，如果其代币经济模型未能设计出足够强大的持续价值捕获机制，协议可能面临大规模的资本外流和“死亡螺旋”。

### **8.2 最终投资评级与建议**

**投资评级: 建议 (Recommend)**

**评级逻辑:**

本“建议”评级是基于对目标投资者画像——即经验丰富、能够理解并主动管理 DeFi 复杂风险的投资者——的综合考量。

* **正面因素是决定性的:** Echelon Market 成功占据了 Aptos 这一高潜力新兴公链的核心 DeFi 生态位。其顶级的资本和生态系统支持、清晰且宏大的增长战略，以及明确的空投预期，共同构成了一个极具吸引力的高风险/高回报投资标的。对于追求超额α收益的投资者而言，其空投和相关的高收益策略提供了不容错过的机会。  
* **负面因素是可管理的:** 尽管协议的风险（特别是经济模型风险和系统性风险）非常高，但这些风险对于经验丰富的 DeFi 参与者来说是透明且可评估的。他们有能力通过仓位控制、风险对冲和持续监控来管理这些风险。  
* **综合考量:** Echelon Market 并非一个适合所有人的“价值投资”项目。它更像是一场精心设计的、高赔率的博弈。因此，给予“建议”评级，旨在向有相应风险承受能力的投资者突出其潜在的高回报机会。对于风险规避型或对 DeFi 缺乏深入了解的新手投资者，该项目的评级应下调至“中立”甚至“不建议”。

**核心投资建议:**

1. **以空投为主要目标:** 现阶段应将参与 Echelon Market 视为一次性的、以获取其未来代币空投为核心目标的投机活动，而非长期价值投资。  
2. **严格的风险与仓位管理:** 在参与任何杠杆策略（特别是稳定币和 LST 循环贷）时，投入的资金应严格控制在个人可完全承受损失的范围之内。切勿投入身家。  
3. **分散化参与:** 鉴于 Echelon 与其主要竞争对手 Aries Markets 的高度同质化竞争和双双存在的空投预期，最理性的策略是在两个平台上都进行交互和资金部署。这不仅可以分散单一协议的智能合约风险，还能确保不错过任何一方的潜在空投。  
4. **投后持续跟踪:** 在项目代币发行并空投后，必须对其代币经济模型、价值捕获机制以及 TVL 的留存情况进行重新评估，再决策是否进行长期持有。  
5. **开发者机遇:** 对于具备技术能力的投资者，利用 SDK 进行程序化交互和策略开发是一个值得探索的方向，这可能是在这场博弈中获得信息和执行优势的关键。

#### **引用的著作**

1. Echelon \- Aptos Ecosystem Projects, 访问时间为 七月 13, 2025， [https://aptosfoundation.org/ecosystem/project/echelon](https://aptosfoundation.org/ecosystem/project/echelon)  
2. Echelon Market token sale analytics and information, private/seed sale price, tokenomics, 访问时间为 七月 13, 2025， [https://icoanalytics.org/projects/echelon-market/](https://icoanalytics.org/projects/echelon-market/)  
3. Echelon: A simpler way to borrow and lend on Aptos | Bybit Learn, 访问时间为 七月 13, 2025， [https://learn.bybit.com/en/defi/what-is-echelon](https://learn.bybit.com/en/defi/what-is-echelon)  
4. Echelon: The Next Chapter. The official expansion roadmap and… \- Medium, 访问时间为 七月 13, 2025， [https://medium.com/@echelonmarket/echelon-the-next-chapter-83d35779abd7](https://medium.com/@echelonmarket/echelon-the-next-chapter-83d35779abd7)  
5. Dashboard \- Echelon Market, 访问时间为 七月 13, 2025， [https://app.echelon.market/](https://app.echelon.market/)  
6. Echelon Prime price today, PRIME to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/echelon-prime/](https://coinmarketcap.com/currencies/echelon-prime/)  
7. Echelon Whitepaper, 访问时间为 七月 13, 2025， [https://paper.echelon.io/echelon-whitepaper.pdf](https://paper.echelon.io/echelon-whitepaper.pdf)  
8. Echelon Prime \- Collective Shift, 访问时间为 七月 13, 2025， [https://collectiveshift.io/prime/](https://collectiveshift.io/prime/)  
9. Echelon Prime (PRIME) Tokenomics: Structure, Utility, and Insights, 访问时间为 七月 13, 2025， [https://www.findas.org/tokenomics-review/coins/the-tokenomics-of-echelon-prime-prime/r/F3gWTx7h7aQP4s6yFmT61p](https://www.findas.org/tokenomics-review/coins/the-tokenomics-of-echelon-prime-prime/r/F3gWTx7h7aQP4s6yFmT61p)  
10. Echelon Price, ECH Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 13, 2025， [https://www.coinbase.com/price/echelon](https://www.coinbase.com/price/echelon)  
11. Echelon price today, ECH to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 13, 2025， [https://coinmarketcap.com/currencies/echelon/](https://coinmarketcap.com/currencies/echelon/)  
12. Lou Lentine \- Beyond Activ, 访问时间为 七月 13, 2025， [https://beyondactiv.com/events/speakers/lou-lentine/](https://beyondactiv.com/events/speakers/lou-lentine/)  
13. Echelon has made quite a mess of things. : r/go\_echelon \- Reddit, 访问时间为 七月 13, 2025， [https://www.reddit.com/r/go\_echelon/comments/17qoy6v/echelon\_has\_made\_quite\_a\_mess\_of\_things/](https://www.reddit.com/r/go_echelon/comments/17qoy6v/echelon_has_made_quite_a_mess_of_things/)  
14. About ECHELON Partners, 访问时间为 七月 13, 2025， [https://www.echelon-partners.com/our-story](https://www.echelon-partners.com/our-story)  
15. ECHELON Partners | Boutique Investment Bank, 访问时间为 七月 13, 2025， [https://www.echelon-partners.com/](https://www.echelon-partners.com/)  
16. Is Echelon Capital safe or a scam broker? \- BrokerChooser, 访问时间为 七月 13, 2025， [https://brokerchooser.com/safety/echelon-capital-broker-safe-or-scam](https://brokerchooser.com/safety/echelon-capital-broker-safe-or-scam)  
17. Echelon Capital Markets: Q221 Top Picks Portfolio Review \- YouTube, 访问时间为 七月 13, 2025， [https://www.youtube.com/watch?v=4Bx7vyLjyvo](https://www.youtube.com/watch?v=4Bx7vyLjyvo)  
18. Echelon Risk \+ Cyber \- Drata Service Partner Directory, 访问时间为 七月 13, 2025， [https://drata.com/partner/find/service-directory/echelon-risk-cyber](https://drata.com/partner/find/service-directory/echelon-risk-cyber)  
19. Echelon Market \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/echelon-market](https://defillama.com/protocol/echelon-market)  
20. Echelon Secures $3.5 Million in Seed Funding to Revolutionize DeFi Lending on Move Based Blockchains \- PR Newswire, 访问时间为 七月 13, 2025， [https://www.prnewswire.com/news-releases/echelon-secures-3-5-million-in-seed-funding-to-revolutionize-defi-lending-on-move-based-blockchains-302231755.html](https://www.prnewswire.com/news-releases/echelon-secures-3-5-million-in-seed-funding-to-revolutionize-defi-lending-on-move-based-blockchains-302231755.html)  
21. Grant Announcement \- by Echelon \- Medium, 访问时间为 七月 13, 2025， [https://medium.com/@echelonmarket/grant-article-a285f3bd794c](https://medium.com/@echelonmarket/grant-article-a285f3bd794c)  
22. Aptos Ecosystem Guide, Part 1, 访问时间为 七月 13, 2025， [https://xangle.io/en/research/detail/2212](https://xangle.io/en/research/detail/2212)  
23. Aptos Hosts $400 Million in BTC Assets Driven by Key Protocol Integrations \- AInvest, 访问时间为 七月 13, 2025， [https://www.ainvest.com/news/aptos-hosts-400-million-btc-assets-driven-key-protocol-integrations-2506/](https://www.ainvest.com/news/aptos-hosts-400-million-btc-assets-driven-key-protocol-integrations-2506/)  
24. The Aptos ecological lending agreement Echelon will launch governance tokens in a few months | Bitget News, 访问时间为 七月 13, 2025， [https://www.bitget.com/news/detail/12560604379640](https://www.bitget.com/news/detail/12560604379640)  
25. Aptos Whitepaper: Safe, Scalable, and Upgradeable Web3 Infrastructure, 访问时间为 七月 13, 2025， [https://aptosfoundation.org/whitepaper](https://aptosfoundation.org/whitepaper)  
26. Echelon · GitHub, 访问时间为 七月 13, 2025， [https://github.com/EchelonMarket](https://github.com/EchelonMarket)  
27. High-Yield Stablecoin Strategy on Aptos via Echelon Market \- General, 访问时间为 七月 13, 2025， [https://forum.aptosfoundation.org/t/high-yield-stablecoin-strategy-on-aptos-via-echelon-market/15575](https://forum.aptosfoundation.org/t/high-yield-stablecoin-strategy-on-aptos-via-echelon-market/15575)  
28. Why is Echelon Market offering 70%+ APR on USDC? What's the catch and potential risks?, 访问时间为 七月 13, 2025， [https://www.reddit.com/r/defi/comments/1k5ap24/why\_is\_echelon\_market\_offering\_70\_apr\_on\_usdc/](https://www.reddit.com/r/defi/comments/1k5ap24/why_is_echelon_market_offering_70_apr_on_usdc/)  
29. Aptos Lending platform \- Ecosystem, 访问时间为 七月 13, 2025， [https://forum.aptosfoundation.org/t/aptos-lending-platform/12971](https://forum.aptosfoundation.org/t/aptos-lending-platform/12971)  
30. Introducing Efficiency Mode: Maximize Capital Efficiency with Aries Markets \- Medium, 访问时间为 七月 13, 2025， [https://medium.com/@AriesMarkets/introducing-efficiency-mode-maximize-capital-efficiency-with-aries-markets-df7b741f7c22](https://medium.com/@AriesMarkets/introducing-efficiency-mode-maximize-capital-efficiency-with-aries-markets-df7b741f7c22)  
31. Introducing ARIES Points. Aries Markets is the first and the NO.1… \- Medium, 访问时间为 七月 13, 2025， [https://medium.com/@AriesMarkets/introducing-aries-points-2dce194c1ea4](https://medium.com/@AriesMarkets/introducing-aries-points-2dce194c1ea4)  
32. Tour of DeFi on Aptos | Decentralized Finance Protocols | by VibrantX Finance \- Medium, 访问时间为 七月 13, 2025， [https://medium.com/@VibrantxFinance/tour-of-defi-on-aptos-decentralized-finance-protocols-2967cff78f87](https://medium.com/@VibrantxFinance/tour-of-defi-on-aptos-decentralized-finance-protocols-2967cff78f87)  
33. Echelon Airdrop Guide: The Move ecosystem lending protocol i | 币链快报 on Binance Square, 访问时间为 七月 13, 2025， [https://www.binance.com/en/square/post/21133865681362](https://www.binance.com/en/square/post/21133865681362)  
34. February Wrapped: Aptos Ecosystem Looking (Very) Good, 访问时间为 七月 13, 2025， [https://aptosfoundation.org/currents/february-wrapped-aptos-highlights-2025](https://aptosfoundation.org/currents/february-wrapped-aptos-highlights-2025)  
35. Thala Roadmap 2024, 访问时间为 七月 13, 2025， [https://thalalabs.medium.com/thala-roadmap-2024-774698680d28](https://thalalabs.medium.com/thala-roadmap-2024-774698680d28)  
36. Echelon Blockchain \- Discord, 访问时间为 七月 13, 2025， [https://discord.com/invite/ArXNfK99ae](https://discord.com/invite/ArXNfK99ae)  
37. Echelon Blockchain \- Discord, 访问时间为 七月 13, 2025， [https://discord.com/invite/cshSrBA5YA](https://discord.com/invite/cshSrBA5YA)  
38. Echelon Blockchain \- Discord, 访问时间为 七月 13, 2025， [https://discord.com/invite/6Kz8Byh3uc](https://discord.com/invite/6Kz8Byh3uc)  
39. Lending and borrowig protocols \- General \- Aptos Forum, 访问时间为 七月 13, 2025， [https://forum.aptosfoundation.org/t/lending-and-borrowig-protocols/7405](https://forum.aptosfoundation.org/t/lending-and-borrowig-protocols/7405)  
40. Aries Markets \- DefiLlama, 访问时间为 七月 13, 2025， [https://defillama.com/protocol/aries-markets](https://defillama.com/protocol/aries-markets)  
41. Echo Protocol Launches TGE With $8.78 Billion TVL On Aptos Ecosystem \- AInvest, 访问时间为 七月 13, 2025， [https://www.ainvest.com/news/echo-protocol-launches-tge-8-78-billion-tvl-aptos-ecosystem-2507/](https://www.ainvest.com/news/echo-protocol-launches-tge-8-78-billion-tvl-aptos-ecosystem-2507/)  
42. Unwinding a leverage staking position | by VibrantX Finance \- Medium, 访问时间为 七月 13, 2025， [https://medium.com/@VibrantxFinance/unwinding-a-leverage-staking-position-ae0ba4d4624d](https://medium.com/@VibrantxFinance/unwinding-a-leverage-staking-position-ae0ba4d4624d)  
43. EchelonMarket/echelon-sdk \- GitHub, 访问时间为 七月 13, 2025， [https://github.com/EchelonMarket/echelon-sdk](https://github.com/EchelonMarket/echelon-sdk)