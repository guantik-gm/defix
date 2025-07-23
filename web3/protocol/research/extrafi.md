

# **Extra Finance (EXTRA) 深度投资与安全评估报告**

## **1.0 执行摘要**

### **1.1 项目概述**

Extra Finance 是一种建立在 Optimism 和 Base 链上的去中心化金融（DeFi）协议，其核心功能是杠杆化收益农场（Leveraged Yield Farming, LYF）和借贷 1。该协议并非一个独立的去中心化交易所（DEX），而是作为其底层 DEX（主要是 Velodrome 和 Aerodrome）的增强层，允许用户借入资产以放大其流动性提供者（LP）头寸，从而追求更高的年化收益率（APY）3。其生态系统由借贷池和农场金库（机枪池）两部分构成，并通过一个双代币模型（$EXTRA 和 $veEXTRA）进行管理 5。

### **1.2 核心发现与关键洞察**

本报告的核心发现揭示了 Extra Finance 存在一个深刻的矛盾：一方面，协议的链上运营数据表现强劲，尤其是在 Base 链上，其总锁仓价值（TVL）、交易量和协议收入均达到可观水平 7；另一方面，其原生代币 $EXTRA 的市场表现却极为疲软，价格自历史高点已下跌超过90% 9。

这种基本面与市场估值之间的巨大脱节，主要归因于以下几个关键因素：

1. **不可持续的代币经济学**：$EXTRA 代币作为农场奖励被大量释放，其产生的通货膨胀远超协议收入回购所能吸收的范围，形成了持续的净卖压。  
2. **价值捕获机制失灵**：尽管 $veEXTRA 的设计旨在将协议价值回馈给长期持有者，但面对 $EXTRA 代币的高通胀和价格波动，锁定代币的机会成本和风险过高，导致该机制未能有效支撑代币价值。  
3. **创始团队匿名带来的信任赤字**：核心团队的完全匿名性是项目最重大的风险之一。这不仅阻碍了投资者建立长期信心，也为潜在的治理风险和项目方跑路风险埋下了隐患 11。

### **1.3 投资机会总结**

尽管 $EXTRA 代币本身存在重大缺陷，但 Extra Finance 平台为不同风险偏好的投资者提供了多样化的参与机会。本报告详细评估了包括被动借贷、高风险杠杆农场以及针对高级用户的复杂对冲策略在内的所有潜在途径。对于具备开发背景的投资者，协议同样开放了通过构建自动化工具或与智能合约交互来创造价值的可能性。

### **1.4 最终投资评级与理由**

综合考量，本报告对 Extra Finance 的各项投资机会给予分级评级：

* **购买并持有 $EXTRA 代币**：**强烈不建议**。代币经济学模型存在根本性缺陷，高通胀与弱价值捕获机制导致其缺乏长期投资价值。  
* **锁定 $EXTRA 以获取 $veEXTRA**：**强烈不建议**。在团队匿名和代币价格持续下跌的背景下，长期锁定资产的风险极高，潜在回报无法弥补其风险敞口。  
* **作为出借方参与单币借贷池**：**中立（高风险偏好者可谨慎尝试）**。此策略风险相对较低，可赚取被动收益。但投资者仍需承担协议智能合约风险、坏账风险以及匿名团队带来的操作风险。  
* **参与杠杆化收益农场**：**不建议（仅限能够承受全部本金损失的资深DeFi玩家）**。尽管潜在 APY 极高，但杠杆显著放大了无常损失和清算风险。此策略需要持续的主动管理和对市场的高度敏感性。

**最终综合投资等级：不建议**

**核心理由**：Extra Finance 作为一个应用层协议，其运营数据虽有亮点，但其根基——代币经济学和团队信任度——存在致命缺陷。市场已经通过价格对其代币给出了否定性投票。在匿名团队选择改进其经济模型或公开身份之前，任何对其原生代币的投资都无异于一场高风险的赌博。而使用其核心产品（杠杆农场）所承担的风险，与其潜在回报相比，对于大多数投资者而言并不匹配。

## **2.0 协议深度剖析：杠杆收益农场引擎的运作机制**

### **2.1 核心功能：杠杆农场与借贷**

Extra Finance 的协议架构主要由两个相互关联的核心部分组成：借贷池（Lending Pools）和杠杆农场金库（Farming Vaults），共同构成了一个完整的“机枪池”生态系统 3。

* **借贷池（Lending Pools）**：这是协议的资金供应端。用户可以将如 USDC、WETH 等单一代币存入相应的资金池中，以赚取被动的借贷利息。作为回报，存款人会收到代表其在池中份额的 eToken（例如，存入 USDC 会收到 eUSDC）3。这些 eToken 可以被视为计息代币，其价值会随着利息的累积而增长。这是协议中风险相对较低的一环，为杠杆农场功能提供了必要的流动性。  
* **杠杆化收益农场（Leveraged Yield Farming）**：这是协议的核心产品，也是其“机枪池”功能的体现。用户可以利用其本金作为抵押，从借贷池中借入额外的资产，从而放大其在底层去中心化交易所（DEX）中的流动性提供者（LP）头寸 1。例如，一个用户可以用价值1000美元的资产，通过3倍杠杆，建立一个价值3000美元的 LP 头寸。协议官方宣称最高可提供4倍杠杆，部分资料甚至提及7倍，但这取决于具体的资产池和用户的 $veEXTRA 持有量 5。整个过程由  
  FarmingVault 智能合约自动化处理，包括从借贷池借款、在底层DEX上将资产兑换为50/50比例、提供流动性以及质押LP代币以获取收益 3。

### **2.2 Extra Finance 的飞轮：与 Velodrome 和 Aerodrome 的深度集成**

深刻理解 Extra Finance 的关键在于认识到它并非一个独立的DEX，而是构建在其他DEX之上的一个“收益放大层”。其 FarmingVault 合约被明确设计用于与 Optimism 上的 Velodrome 和 Base 链上的 Aerodrome 进行交互 3。这种设计使其与这两个平台的命运紧密相连。

Extra Finance 提供的收益是复合型的，它来源于：

1. **底层DEX的交易费用**：作为LP，用户可以分得其所在流动性池产生的交易手续费。  
2. **底层DEX的代币释放**：Velodrome 和 Aerodrome 会通过释放其原生代币（$VELO 和 $AERO）来激励流动性提供者 14。  
3. **Extra Finance自身的代币释放**：协议会额外奖励农场用户其原生代币 $EXTRA。

这种模式深度利用了 Velodrome 和 Aerodrome 所采用的 ve(3,3) 代币经济学模型。在该模型中，不同的协议通过“贿赂”（Bribes）ve-token（投票权代币）的持有者，来引导 $VELO 或 $AERO 的代币释放流向自己的流动性池，从而形成一个竞争激烈的流动性市场 14。Extra Finance 正是为用户提供了利用杠杆更高效地从这个流动性市场中捕获收益的工具。

这种深度的生态依赖性也带来了双重风险。Extra Finance 的繁荣不仅取决于自身的安全和运营，更根本地取决于 Velodrome 和 Aerodrome 的市场地位、安全状况及其 ve(3,3) 模型的长期可持续性。任何对底层DEX的冲击，都将直接且严重地传导至 Extra Finance。

### **2.3 技术架构：智能合约与跨链部署**

Extra Finance 的技术核心由一系列智能合约构成，主要部署在 Optimism 和 Base 这两个以太坊 Layer-2 网络上 7。

* **核心合约**：如前所述，LendingPool 和 FarmingVault 是两大支柱合约。此外，VaultFactory 合约负责创建和管理所有的 FarmingVault 实例 3。  
* **安全设计**：一个关键的安全机制是，借贷池中的资金仅对通过 VaultFactory 创建的、被列入白名单的 FarmingVault 合约开放。这意味着外部地址或恶意合约无法直接从借贷池中借款，这种设计旨在将风险隔离在协议内部，防止资金被挪作他用 3。  
* **跨链部署**：协议在 Optimism 和 Base 链上使用相同的合约地址 5，这表明其采用了一套标准化的部署流程，便于维护和跨链管理。此外，DeFi Llama 数据显示其在 Berachain 上也有少量TVL，这可能代表了测试网活动或早期的生态扩展尝试 7。  
* **开源代码**：协议的主要智能合约代码库位于 GitHub 的 ExtraFi/extra-contracts 仓库中，而部署的合约地址和池信息则存放在 ExtraFi/contracts-and-pools-info 仓库，为开发者和审计人员提供了透明度 12。

## **3.0 代币经济学分析：$EXTRA 与 $veEXTRA 的双代币模型**

Extra Finance 的经济体系围绕其双代币模型构建：$EXTRA 作为实用和激励代币，$veEXTRA 作为治理和价值捕获代币。理论上，这是一个旨在平衡协议增长与持有者利益的闭环系统，但实际表现却揭示了其内在的严重失衡。

### **3.1 $EXTRA：实用与释放代币**

$EXTRA 是协议的 ERC-20 实用代币，其最大供应量为10亿枚 5。其核心用途是通过代币释放（emissions）来奖励参与杠杆农场的流动性提供者（LPs）5。这些奖励是在底层DEX（如Aerodrome）提供的 $AERO 奖励之外的额外激励，旨在吸引用户将流动性通过 Extra Finance 进行管理，从而增加协议的TVL和收入。

### **3.2 $veEXTRA：治理、费用分享与杠杆解锁**

$veEXTRA (vote-escrowed EXTRA) 是协议的治理代币，通过锁定 $EXTRA 最长一年（52周）来获得 20。用户获得的 $veEXTRA 数量与锁定的 $EXTRA 数量和锁定时长呈线性关系。例如，锁定100个 $EXTRA 一年可获得100个 $veEXTRA，而锁定13周则只能获得25个 $veEXTRA 20。

$veEXTRA 的持有者享有以下核心权益：

* **治理权**：可以对社区提案进行投票，参与协议的决策过程 5。  
* **协议收入分红 (APR Rewards)**：这是 $veEXTRA 最核心的价值捕获机制。协议产生的所有费用（以多种代币形式存在）会被收集到财库中，然后用于在公开市场上回购 $EXTRA 代币，并将其分配给 $veEXTRA 的持有者。此外，$veEXTRA 持有者还能分到一部分社区分配的 $EXTRA 代币释放 5。  
* **解锁更高杠杆**：持有 $veEXTRA 是在农场中使用更高杠杆倍数（最高4倍）的必要条件 5。  
* **优先借贷权**：可以优先进入那些利用率高、因此借贷利率也更高的借贷池进行放贷，以获取更高收益 5。

### **3.3 释放计划、供应动态与通胀压力**

根据现有数据， $EXTRA 的总供应量为10亿，而当前流通供应量约为3.55亿 9。这意味着仍有近65%的代币尚未进入市场，预示着未来巨大的通货膨胀压力。尽管官方文档提到了一个“特定的释放计划” 20，但并未提供详细的释放曲线或时间表。这一信息的不透明性使得投资者难以准确评估未来的代币抛压。

### **3.4 价值捕获机制分析：理论与现实的脱节**

从设计上看，Extra Finance 的价值捕获逻辑是清晰的：协议通过提供杠杆服务产生费用收入 \-\> 费用收入用于回购并销毁或分配 $EXTRA \-\> 减少流通供应或奖励长期持有者 \-\> 支撑 $EXTRA 价值。

然而，现实情况是，尽管协议产生了可观的收入（DeFi Llama数据显示年化收入超过100万美元）7，但 $EXTRA 的价格却经历了灾难性的下跌，从约 $0.29 的高点跌至约 $0.02，跌幅超过90% 7。

这种脱节的根本原因在于，代币的通胀速度远远超过了其价值捕获的速度。为了激励高达数千万美元的TVL，协议必须每日释放大量的 $EXTRA 作为农场奖励。这些奖励的接收者（主要是追求短期高APY的“雇佣兵资本”）倾向于立即在市场上出售 $EXTRA 以锁定利润。这种持续且巨大的卖压，完全压倒了由协议收入驱动的有限回购。

这形成了一个典型的“农场代币死亡螺旋”：

1. 协议提供高APY（包含高额 $EXTRA 奖励）来吸引TVL。  
2. 大量资本涌入，挖矿并立即出售 $EXTRA，导致代币价格下跌。  
3. 代币价格下跌使得实际APY（以美元计价）下降。  
4. 为了维持吸引力，协议被迫保持甚至增加 $EXTRA 的释放率，进一步加剧通胀和卖压。  
5. 最终，市场对代币失去信心，价值捕获机制彻底失效。

$veEXTRA 提供的权益，如更高的杠杆和分红，显然不足以说服市场参与者去长期锁定一个高通胀、价格持续下跌的资产。这种模式的内在缺陷是导致其代币价值崩盘的核心原因。

## **4.0 市场表现与链上分析**

本章节通过整合来自多个数据平台的指标，对 Extra Finance 的市场表现和链上活动进行量化分析，旨在揭示其运营健康状况与市场估值之间的关系。

### **4.1 $EXTRA 代币历史价格与市值分析**

* **价格表现**：截至本报告撰写时，$EXTRA 代币价格徘徊在 $0.021 左右 7。其历史高点约为 $0.29，而历史低点约为 $0.013 7。这表明代币价格已从高点大幅回撤，处于历史低位区间。  
* **市值与估值**：当前流通市值（Market Cap）约为750万美元，而完全稀释估值（FDV）约为2100万美元 7。市值与完全稀释估值的比率（MCap/FDV）约为0.36 10，这揭示了市场对未来代币大量解锁和释放所带来的稀释效应的担忧。超过60%的代币供应尚未流通，构成了巨大的潜在抛压。  
* **交易量**：代币的24小时交易量相对较低，且主要集中在 Aerodrome 和 Velodrome 这两个DEX上，表明其流动性主要依赖于其自身生态系统，缺乏更广泛的CEX市场支持 6。

### **4.2 总锁仓价值 (TVL): Base 与 Optimism 的双城记**

* **总体 TVL**：Extra Finance 的总锁仓价值约为8510万美元，在DeFi协议中处于中等规模 7。这一TVL主要由两部分构成：杠杆农场部分约占7490万美元，而其独立的借贷产品 Xlend 约占325万美元 18。  
* **链上分布**：TVL的分布极不均衡，绝大部分（约7829万美元）集中在 Base 链上，而其最初上线的 OP Mainnet 链上仅有约681万美元 7。这清晰地表明，Extra Finance 的增长动力与 Base 生态的崛起紧密相关。Base 链凭借 Coinbase 的支持和较低的交易费用，吸引了大量用户和资本，Extra Finance 作为其生态内的主要杠杆协议，直接受益。  
* **历史趋势**：根据 Dune Analytics 的官方数据看板，协议TVL的增长曲线与 Base 生态的活跃度高度相关，尤其是在 Base 链启动后出现了显著的拉升 8。

### **4.3 协议收入、费用与用户活动 (Dune Analytics 看板深度解析)**

Extra Finance 官方在 Dune Analytics 上维护了一个名为 @extra\_finance/mega 的综合数据看板，为我们提供了宝贵的链上活动洞察 8。

* **用户与交易数据**：  
  * 总用户数已超过11.7万，总交易笔数超过113万。  
  * Base 链再次展现其主导地位，拥有约9.7万用户和90.3万笔交易，远超 Optimism 的2.7万用户和23.1万笔交易。  
  * 从产品使用上看，借贷用户（约10万）数量远多于农场用户（约2.8万）。这可能意味着大量用户仅将 Extra Finance 用作一个简单的单币存款生息平台，而较少参与其核心但风险更高的杠杆农场功能。  
* **财务数据**：  
  * 根据 DeFi Llama 的统计，协议的年化总费用约为227万美元，年化协议收入（即协议捕获的部分）约为107万美元 7。  
  * 其中，分配给 $veEXTRA 持有者的年化收入约为26.5万美元 7。这部分收入是支撑 $veEXTRA 价值的核心，但相对于其巨大的代币通胀而言显得微不足道。

### **4.4 关键指标比率：市值/TVL 与 市值/收入 分析**

* **市值/TVL 比率 (MCap/TVL)**：该比率约为 $7.5M / 85.1M≈0.088。在DeFi领域，这是一个极低的比率。通常情况下，低于0.1的比率可能意味着项目相对于其管理的资产规模被严重低估。  
* **市销率 (P/S Ratio, MCap/Revenue)**：该比率约为 $7.5M / 1.07M≈7.0。对于一个科技或DeFi协议而言，7.0的市销率也处于相对较低的水平，同样可能指向价值低估。

然而，这些看似“诱人”的低估值指标背后，隐藏着市场的深刻判断。市场并非没有看到这些强劲的运营数据，而是认为这些数据无法转化为对代币持有者的可持续价值。链上活动的繁荣与代币价格的崩溃同时存在，这本身就是一个强烈的危险信号。市场可能正在用价格反映其对项目匿名团队、不可持续的代币经济学以及杠杆农场模式长期生存能力的极度不信任。因此，任何仅基于这些表面估值指标的投资决策都将是片面且危险的。

## **5.0 全面风险与安全评估**

对任何DeFi协议的投资决策都必须建立在对其风险状况的透彻理解之上。本节将从安全审计、技术风险、治理风险和历史事件等多个维度，对 Extra Finance 进行全面的风险评估。

### **5.1 安全审计：BlockSec 与 PeckShield 的审查**

Extra Finance 已经通过了两家行业内知名安全公司——BlockSec 和 PeckShield 的智能合约审计，这是一个积极的安全信号 1。协议的官方文档和其在 Immunefi 上的漏洞赏金计划页面都提及了这些审计 13。

然而，一个关键的信息缺失是，本次研究未能获取到这两份审计报告的完整PDF文本 23。因此，无法详细分析其中披露的具体漏洞（尤其是中高风险漏洞）及其修复状态。我们只能基于“审计已完成”这一事实进行评估，这证明了项目方在安全方面投入了资源，但无法保证所有潜在风险都已完全消除。

此外，项目在 Immunefi 平台上设立了活跃的漏洞赏金计划，最高悬赏达10万美元，并得到了 Optimism 基金会的匹配支持 13。这是行业公认的安全最佳实践，表明项目方鼓励白帽黑客发现并负责任地披露漏洞，有助于持续提升协议的安全性。

### **5.2 智能合约与技术风险**

Extra Finance 在其官方文档中坦诚地披露了协议内含的多种技术风险，体现了一定程度的透明度 25。

* **智能合约风险**：这是所有DeFi协议共有的基础风险，即代码中可能存在未被发现的漏洞，可能被恶意行为者利用导致资金损失。  
* **清算风险**：这是杠杆农场用户的核心风险。当市场剧烈波动，导致用户的债务价值与头寸价值之比（Debt Ratio）超过预设的清算阈值时，其头寸将被强制清算，可能导致部分或全部抵押品损失 26。  
* **预言机风险**：协议依赖 Chainlink 预言机提供实时的资产价格，用于计算债务率和触发清算 25。如果预言机报价被操纵、延迟或出现故障，可能导致不当的清算。项目方声称部署了监控系统以缓解此风险。  
* **坏账风险**：在极端市场条件下，如果清算机器人的执行速度跟不上价格暴跌的速度，可能导致清算后无法完全偿还借款，从而产生坏账。这些坏账最终可能由借贷池的存款人承担损失。协议设立了“风险备用金”（Rainy Day Fund）作为最后的防线 25。  
* **提款延迟风险**：当借贷池的资金利用率接近100%时，即大部分资金都被借出，存款人可能会面临无法立即提款的风险，直到有借款人还款或新的存款进入 25。  
* **无常损失（Impermanent Loss）**：所有流动性提供者都面临此风险，而在杠杆作用下，无常损失会被同等倍数放大，使得风险敞口急剧增加 26。

### **5.3 治理与运营风险：匿名团队的深远影响**

在本次深入调研中，未能找到任何关于 Extra Finance 创始人或核心开发团队成员的公开身份信息 27。团队的完全匿名性是该项目最致命的风险点，它超越了任何单一的技术漏洞，直接关系到项目的长期可信度。

匿名性带来的具体风险包括 11：

* **“跑路”（Rug Pull）风险**：匿名团队可以在没有任何声誉损失或法律追索后果的情况下，随时放弃项目，甚至通过预留的后门或权限恶意转移协议资金。  
* **缺乏问责制**：当协议出现问题，无论是技术故障、经济模型设计失误还是运营决策不当，投资者和社区都无法找到一个具体的责任主体进行问责。  
* **信任基础缺失**：DeFi的信任根植于“代码可信”和“团队可信”两个层面。Extra Finance 或许在代码层面（通过审计）建立了一定的信任，但在团队层面却是完全的空白。这使得投资者无法对团队的长期承诺、执行能力和路线图（如 5 中所述）抱有信心。这直接削弱了其 ve-token 模型的根基，因为长期锁定代币本质上是一种对团队未来表现的信任投票。

### **5.4 历史安全事件回顾**

自2023年5月主网上线以来，在公开信息渠道中未发现 Extra Finance 遭受过黑客攻击、资金被盗或发生重大坏账事件的记录 2。超过一年的平稳运行记录，从侧面印证了其技术架构在正常市场环境下的稳健性。

综上所述，尽管 Extra Finance 在技术安全层面遵循了行业标准（审计、漏洞赏金），且拥有良好的线上运行记录，但团队匿名的风险如同一把达摩克利斯之剑，悬于所有投资者之上。这一非技术性风险足以对任何长期、高信念的投资逻辑构成根本性挑战。因此，任何与该协议的资金交互都应被视为高度投机行为，并应采取相应的风险控制措施。

## **6.0 竞争格局与生态依赖性**

Extra Finance 的定位和长期前景不仅取决于其自身的设计，还深受其所处的竞争环境和生态系统依赖性的影响。本节将通过与竞争对手的比较、对已失败项目的案例分析，以及对其底层生态的剖析，来评估其面临的外部机遇与挑战。

### **6.1 直接竞争对手：横向比较分析**

Extra Finance 在杠杆收益农场（LYF）领域并非独行者。其主要竞争对手包括 Gearbox Protocol 和曾经的行业先驱 Homora（原 Alpha Homora）。

* **Gearbox Protocol**：这是一个部署在以太坊主网上的通用型杠杆协议。与 Extra Finance 专注于特定DEX（Velodrome/Aerodrome）的农场策略不同，Gearbox 提供了一个更灵活的“信用账户”系统，允许用户借入杠杆资金后，在多个白名单协议（如Uniswap, Curve, Lido等）上进行任意组合操作 31。Gearbox 的定位更像一个底层的“杠杆原语”，赋予用户更高的自由度和策略复杂性；而 Extra Finance 则更像一个针对特定生态（ve(3,3) DEXs）的、更易于上手的专用应用程序。  
* **Homora V2**：作为 DeFi Llama 上列出的直接竞争者 18，Homora 是 LYF 领域的早期开拓者之一，曾在以太坊和BNB链上积累了大量用户和TVL 34。它为市场验证了LYF模式的需求。

**竞争格局对比表**

| 特性 | Extra Finance | Gearbox Protocol | Homora V2 |
| :---- | :---- | :---- | :---- |
| **核心机制** | 针对Velodrome/Aerodrome的专用杠杆农场应用 | 通用型杠杆协议，通过信用账户与多协议交互 | 早期杠杆农场协议 |
| **主要链** | Base, Optimism | Ethereum | Ethereum, BNB Chain |
| **灵活性** | 较低，策略限于底层DEX的LP池 | 极高，支持跨协议的复杂策略组合 | 中等 |
| **TVL (约)** | 8510万美元 7 | 2834万美元 35 | 8062万美元 18 |
| **关键优势** | 深度整合Base生态，用户体验相对简单 | 高度可组合性，策略自由度大 | 市场先发者，品牌有一定认知度 |
| **核心风险** | 团队匿名，生态依赖性强，代币经济学疲软 | 协议和策略复杂性高，以太坊主网Gas费高昂 | 面临新模型的竞争压力 |

### **6.2 Alpaca Finance 的警示：一个关于可持续性的案例研究**

最近，曾经在BNB链上TVL超过10亿美元的LYF巨头 Alpaca Finance 宣布关闭 36，为整个赛道敲响了警钟。其失败原因为 Extra Finance 的未来提供了宝贵的参照。

* **失败的核心原因**：  
  1. **模型过时**：Uniswap v3 引入的“集中流动性”（Concentrated Liquidity）机制，本身就为LP提供了资本效率极高的“内置杠杆”，这使得像 Alpaca 这样的外部杠杆协议在一定程度上变得冗余 36。用户可以直接在CLAMM中精细管理自己的头寸，而无需额外借贷。  
  2. **收入萎缩与用户流失**：随着DeFi市场竞争加剧和熊市的到来，协议收入持续下降，运营亏损超过两年，用户兴趣逐渐减弱 36。  
  3. **外部压力**：其原生代币 $ALPACA 被币安（Binance）下架，成为压垮骆驼的最后一根稻草，严重影响了其流动性和市场信心 37。

Extra Finance 的路线图中提到了整合CLAMM的计划 5，这表明团队可能意识到了这一威胁并试图适应。然而，该计划的实施进度和具体效果尚不明确。

### **6.3 ve(3,3) 生态系统：对 Velodrome 和 Aerodrome 的深度依赖**

Extra Finance 的整个商业模式都建立在 Solidly 开创、并由 Velodrome 和 Aerodrome 成功实施的 ve(3,3) 飞轮模型之上 14。这个模型通过“贿赂”和投票来引导代币释放，从而激励流动性。

* **ve(3,3) 模型的内在风险**：  
  1. **高通胀**：该模型在启动阶段依赖极高的代币释放来吸引初始流动性和投票者，这不可避免地造成了巨大的通胀压力和代币抛压 39。  
  2. **财阀政治（Plutocratic Governance）**：治理权力与锁定的代币数量直接挂钩，这意味着拥有最多资本的“巨鲸”或协议联盟能够主导代币释放的方向，为自身利益服务，可能损害小户利益 39。  
  3. **模型不稳定性**：其博弈论基础假设了参与者的合作行为（持续锁定和投票）。一旦市场情绪逆转，出现大规模抛售，整个正向飞轮可能迅速崩溃，演变为“死亡螺旋” 41。  
  4. **治理攻击与操作风险**：贿赂机制可能被利用，治理系统也可能受到攻击 43。Aerodrome 自身就曾发生过因内部人员涉嫌内幕交易而暂停贡献者的事件，这表明即使是底层协议也存在真实的操作风险 45。

综上，Extra Finance 面临着双重生存威胁：一是来自技术迭代的模型过时风险（“Alpaca问题”），二是其所依赖的 ve(3,3) 生态系统固有的不稳定性。投资者在评估 Extra Finance 时，实际上是在对一个复杂且层层嵌套的风险组合下注，这极大地增加了长期投资的不确定性。

## **7.0 投资机会与策略剖析**

本节旨在为投资者提供一份清晰、可操作的指南，详细剖析参与 Extra Finance 生态系统的各种潜在途径，并对其风险回报特征进行客观评估。

### **7.1 潜在投资途径分析**

下表系统性地梳理了投资者可以参与 Extra Finance 的几种主要方式，并给出了相应的分析和建议。

**Extra Finance 投资机会矩阵**

| 机会/策略 | 描述 | 潜在收益 (Upside) | 主要风险 (Key Risks) | 专业要求 | 分析师建议 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **购买并持有 $EXTRA** | 在DEX上直接购买并持有 $EXTRA 代币，期望其未来价格上涨。 | 理论上的价格反弹潜力。 | 极高的价格波动性；持续的通胀抛压；团队匿名风险；代币价值捕获机制失灵。 | 初级 | **强烈不建议** |
| **锁定 $EXTRA 获取 $veEXTRA** | 将 $EXTRA 代币锁定1周至1年，以获得治理权和协议收入分红。 | 协议费用分红 (APR)；$EXTRA 释放奖励；治理权；解锁更高杠杆。 | 除了$EXTRA的所有风险外，还增加了**锁仓导致的流动性丧失风险**和**时间风险**。 | 中级 | **强烈不建议** |
| **单币无杠杆借贷** | 将稳定币（如USDC）或主流币（如WETH）存入借贷池，赚取利息。 | 相对稳定的借贷利息 (APY)，通常高于传统金融。 | 智能合约漏洞风险；协议坏账风险；提款延迟风险；匿名团队跑路风险。 | 初级 | **中立 (高风险偏好者可小资金尝试)** |
| **杠杆化LP农场** | 使用杠杆（如2-4倍）放大在Velodrome/Aerodrome上的LP头寸，赚取复合收益。 | 极高的APY（来自交易费 \+ $VELO/$AERO \+ $EXTRA 奖励的多重叠加）。 | **极高**：无常损失被杠杆放大；清算风险导致本金永久损失；智能合约风险。 | 高级 | **不建议 (仅限专业玩家)** |
| **套利/对冲策略** | 结合杠杆农场与其它衍生品工具（如永续合约）构建市场中性策略。 | 剥离价格波动风险，专注于赚取资金费率和农场代币奖励。 | **极高**：策略极其复杂；引入资金费率风险、基差风险；需要持续监控和再平衡。 | 专家 | **仅限专家级用户** |
| **参与未来空投/激励** | 与协议在各链上进行交互，以期获得未来可能的新链部署或V2版本的空投。 | 潜在的未来代币空投。 | 交互的时间和Gas成本；不确定性极高，可能没有回报。 | 中级 | **投机性机会** |

### **7.2 高收益农场策略详解**

#### **7.2.1 杠杆化稳定币与蓝筹币农场**

这是 Extra Finance 最核心的高 APR 机会。以在 Base 链上通过 Extra Finance 为 Aerodrome 的 WETH/USDC 池提供杠杆流动性为例 46：

1. **基础收益**：该 LP 池本身可以赚取交易手续费和 $AERO 代币奖励。  
2. **杠杆放大**：用户通过 Extra Finance 借入 USDC 或 WETH，将其 LP 头寸放大至2-4倍。这使得基础收益（手续费和 $AERO）也同等倍数放大。  
3. **额外奖励**：Extra Finance 协议会再额外奖励用户 $EXTRA 代币。

这种策略的吸引力在于其极高的名义 APY。然而，风险同样被显著放大：

* **放大的无常损失**：当 WETH 和 USDC 价格比发生变化时，无常损失会被杠杆倍数放大，可能侵蚀甚至超过所有收益 26。  
* **清算风险**：一旦 WETH 价格剧烈波动，导致债务率触及清算线，用户的全部抵押品都可能被清算，造成永久性本金损失 26。

#### **7.2.2 探索Delta中性与对冲策略**

对于具备高级金融知识的投资者，可以尝试构建更复杂的对冲策略来剥离市场风险，专注于赚取“纯”收益。

**理论上的Delta中性策略构建** 48：

1. **多头部分**：在 Extra Finance 上，针对 WETH/USDC 池建立一个2倍杠杆的多头 LP 头寸。这个头寸对 WETH 价格有正的 Delta 敞口（即 WETH 价格上涨时，头寸价值倾向于上涨）。  
2. **空头对冲**：同时，在支持永续合约的中心化或去中心化交易所（如 dYdX, GMX），开立一个与 LP 头寸中 WETH 敞口等值的 WETH 空头合约。  
3. **策略目标**：通过多空对冲，使整个投资组合对 WETH 价格的短期波动不敏感（即 Delta 中性）。投资者的收益将主要来源于：  
   * LP 交易手续费。  
   * $AERO 和 $EXTRA 代币奖励。  
   * 永续合约的资金费率（如果为空头支付）。

**此策略的额外风险**：这是一个极其复杂的“组合拳”策略，引入了新的风险维度，包括永续合约的资金费率风险（资金费率可能变为负）、基差风险（现货与期货价格差异）以及极高的操作和监控成本。它绝非“一劳永逸”的策略，需要投资者进行持续的监控和头寸再平衡 48。

### **7.3 评估空投与未来激励潜力**

考虑到 Extra Finance 已经在多链部署（Optimism, Base, Berachain-testnet），并且其路线图提及了 V2 版本 5，早期和活跃的用户有可能在未来获得追溯性空投或新激励。

* **潜在的空投资格**：与协议进行多样化的交互，例如在多条链上进行借贷和农场操作、使用其 Xlend 产品、成为 $veEXTRA 持有者（尽管不推荐）等，都可能成为未来潜在空投的快照标准。  
* **风险与回报**：这纯粹是一种投机行为。投入的时间和Gas成本是沉没成本，而空投的回报则完全不确定。

## **8.0 开发者机遇**

对于具备技术背景的投资者，Extra Finance 生态系统提供了一些超越传统金融交互的参与机会。通过直接与协议的底层架构互动，开发者有可能发现并利用市场效率低下的地方，或为生态系统贡献价值。

### **8.1 与协议合约及API交互**

* **智能合约接口**：Extra Finance 的核心逻辑完全封装在其智能合约中。extra-contracts GitHub 仓库提供了所有核心合约的 Solidity 源代码和 ABI（应用程序二进制接口），包括借贷、开启/关闭杠杆头寸、申领奖励等功能 12。开发者可以通过编写脚本或构建自己的前端，直接调用这些合约函数，实现程序化操作。  
* **关键地址信息**：contracts-and-pools-info 仓库则提供了协议在各条链上部署的关键合约地址和池信息，这是任何链上交互的起点 19。

### **8.2 构建自动化代理的潜力**

Extra Finance 的 GitHub 组织中存在一个对 Coinbase cdp-agentkit 的分叉 51。

agentkit 是一个用于构建自动化链上代理（机器人）的工具包。这暗示了协议内部可能正在使用或探索自动化策略，同时也为外部开发者指明了方向。

开发者可以利用这些工具或自研脚本，创建以下类型的自动化代理：

* **清算机器人**：协议的文档提到清算是无需许可的（permissionless），任何人都可以触发 25。这意味着开发者可以编写一个监控链上所有杠杆头寸健康状况的机器人，一旦某个头寸达到清算阈值，便立即调用清算函数，从而赚取清算奖金。  
* **自动化再平衡代理**：对于执行前文提到的 Delta 中性等复杂对冲策略的用户，可以开发一个机器人来自动监控其在 Extra Finance 的 LP 头寸和在其他平台的衍生品头寸，并根据市场变化自动进行再平衡，以维持策略的有效性。  
* **收益聚合器**：开发者可以构建一个更上层的“智能机枪池”，该池自动监控 Extra Finance 上所有杠杆池的实时 APY，并自动将用户的资金在最高收益的池之间进行迁移，从而实现收益最大化。

### **8.3 通过数据集成贡献生态**

Extra Finance 的团队分叉了 DefiLlama-Adapters 51，这是 DeFi Llama 用来从各个 DeFi 协议中提取数据的适配器。开发者社区的一项重要贡献就是为新协议编写或为现有协议维护这些适配器，以确保 DeFi Llama 等公共数据平台能够准确、及时地展示协议的 TVL、交易量等关键指标。

对于具备开发能力的投资者，通过研究 Extra Finance 的适配器代码，不仅可以深入理解其数据结构，还可以通过提交代码（Pull Request）来改进或修复其中的问题。这是一种有价值的公共产品贡献，既能提升个人在开发者社区的声誉，也可能成为未来获得项目方认可或奖励的途径。

## **9.0 最终投资论点与总结**

本报告对 Extra Finance 进行了系统性的多维度评估，涵盖了其协议机制、代币经济学、市场表现、安全风险及竞争格局。最终的投资论点是，尽管该协议在链上运营层面展现出一定的活力，但其核心的投资价值因根本性的缺陷而受到严重侵蚀。

### **9.1 SWOT 分析：优势、劣势、机会与威胁**

* **优势 (Strengths)**:  
  * **强劲的链上指标**：协议在 TVL、用户数和协议收入方面表现出色，尤其是在 Base 链上取得了显著的增长，证明其产品对特定用户群体（高风险收益追逐者）具有吸引力 7。  
  * **先发优势**：作为 Base 生态中领先的杠杆收益农场协议，享有一定的先发优势和网络效应。  
  * **经过审计的合约**：通过了 BlockSec 和 PeckShield 的审计，并设有活跃的漏洞赏金计划，表明其在技术安全上有一定的投入和保障 1。  
* **劣势 (Weaknesses)**:  
  * **失败的代币经济学**：$EXTRA 代币的高通胀和弱价值捕获机制导致其价格持续下跌，持有者利益严重受损，形成了负向的死亡螺旋 10。  
  * **匿名团队**：核心团队的匿名性构成了巨大的信任赤字，阻碍了长期投资者的进入，并为治理和运营带来了极大的不确定性 11。  
  * **价值脱钩**：协议的运营成功未能转化为代币的价值，链上基本面与市场估值严重脱节。  
* **机会 (Opportunities)**:  
  * **Base 生态增长红利**：可以继续受益于 Base 链生态的扩张和新用户的涌入。  
  * **V2 经济模型改革**：如果团队未来推出 V2 版本并彻底改革其代币经济学，有可能扭转当前的不利局面，重新激活代币价值。  
  * **服务于利基市场**：为寻求高杠杆的资深 DeFi 用户提供了一个相对成熟的工具，满足了市场的特定需求。  
* **威胁 (Threats)**:  
  * **模型过时风险**：随着集中流动性 AMM (CLAMM) 等更高效资本工具的普及，传统的外部杠杆农场模式可能被淘汰，重蹈 Alpaca Finance 的覆辙 36。  
  * **底层生态不稳定性**：深度依赖 Velodrome 和 Aerodrome 的 ve(3,3) 模型，该模型本身存在高通胀、治理中心化和潜在的崩溃风险，这些风险会直接传导至 Extra Finance 39。  
  * **团队放弃风险**：鉴于团队的匿名性和代币的糟糕表现，团队随时可能放弃项目，导致投资者血本无归。

### **9.2 长期可行性与最终建议**

Extra Finance 的长期可行性面临严峻考验。其核心的杠杆农场商业模式正受到新一代DeFi协议的挑战，而其自身的代币经济学已经证明是失败的。一个无法为其代币持有者创造可持续价值的协议，其生命力是值得怀疑的。

**最终，本报告的投资建议是分层的，但总体偏向于规避风险：**

对于 **$EXTRA 代币本身**，投资评级为**强烈不建议**。在当前的经济模型下，它更像是一个用于支付农场补贴的通胀性工具，而非一个值得投资的价值资产。除非项目方进行彻底的、可信的经济模型改革并解决信任问题，否则其价格前景依然黯淡。

对于**使用协议功能**，建议如下：

* **被动借贷**：对于能够接受 DeFi 固有风险（智能合约、坏账等）和匿名团队风险的高风险偏好投资者，可以投入少量资金进行单币借贷，以获取高于传统市场的收益。但必须明确，这并非无风险收益。  
* **杠杆农场**：此功能风险极高，仅适用于对 DeFi 风险有深刻理解、能够主动管理头寸并愿意承担全部本金损失的专业交易者。对于普通投资者，强烈建议远离。

总而言之，Extra Finance 是一个典型的 DeFi 案例：技术上可行，运营上有数据，但经济上和信任上存在根本性缺陷。在这些缺陷得到解决之前，它更适合被视为一个高风险的游乐场，而非一个稳健的投资标的。

### **9.3 附录：引用来源与关键合约地址**

本报告的分析基于以下信息源：1

**关键合约地址**：

* **$EXTRA Token (Optimism & Base)**: 0x2dAD3a13ef0C6366220f989157009e501e7938F8 5  
* 其他核心合约地址可从 ExtraFi/contracts-and-pools-info GitHub 仓库获取。

#### **引用的著作**

1. What is ExtraFi? | Exponential DeFi, 访问时间为 六月 25, 2025， [https://exponential.fi/protocols/extrafi/6c24c9dc-851d-497f-b587-31964f31d00c](https://exponential.fi/protocols/extrafi/6c24c9dc-851d-497f-b587-31964f31d00c)  
2. Extra Finance (EXTRA) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 六月 25, 2025， [https://www.forbes.com/digital-assets/assets/extra-finance-extra/](https://www.forbes.com/digital-assets/assets/extra-finance-extra/)  
3. extra-contracts/README.md at main \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/ExtraFi/extra-contracts/blob/main/README.md](https://github.com/ExtraFi/extra-contracts/blob/main/README.md)  
4. What Is Leveraged Yield Farming and How Can It Bring Higher Returns? \- The Defiant, 访问时间为 六月 25, 2025， [https://thedefiant.io/education/defi/leveraged-yield-farming](https://thedefiant.io/education/defi/leveraged-yield-farming)  
5. Extra Finance Price, EXTRA Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/en-es/price/extra-finance](https://www.coinbase.com/en-es/price/extra-finance)  
6. Extra Finance price today, EXTRA to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/currencies/extra-finance/](https://coinmarketcap.com/currencies/extra-finance/)  
7. Extra Finance \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/extra-finance](https://defillama.com/protocol/extra-finance)  
8. Extra Finance \- Mega Dashboard, 访问时间为 六月 25, 2025， [https://dune.com/extra\_finance/mega](https://dune.com/extra_finance/mega)  
9. Extra Finance Price, EXTRA Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/price/extra-finance](https://www.coinbase.com/price/extra-finance)  
10. Extra Finance Price: EXTRA Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/en/coins/extra-finance](https://www.coingecko.com/en/coins/extra-finance)  
11. Token due diligence: a structured approach to evaluate digital asset risk | EY, 访问时间为 六月 25, 2025， [https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/insights/financial-services/documents/ey-token-due-diligence-a-structured-approach-to-evaluate-digital-asset-risk.pdf](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/insights/financial-services/documents/ey-token-due-diligence-a-structured-approach-to-evaluate-digital-asset-risk.pdf)  
12. ExtraFi/extra-contracts: Smart contracts of Extra Finance \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/ExtraFi/extra-contracts](https://github.com/ExtraFi/extra-contracts)  
13. Extra Finance Bug Bounties \- Immunefi, 访问时间为 六月 25, 2025， [https://immunefi.com/bug-bounty/extrafinance/](https://immunefi.com/bug-bounty/extrafinance/)  
14. Velodrome \- Superchain Eco, 访问时间为 六月 25, 2025， [https://www.superchain.eco/projects/velodrome](https://www.superchain.eco/projects/velodrome)  
15. What Is Aerodrome Finance? Ultimate Guide to Base's Principal DEX \- CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/learn/what-is-aerodrome-finance-aero-base](https://www.coingecko.com/learn/what-is-aerodrome-finance-aero-base)  
16. What is Velodrome Finance? All You Need to Know About VELO \- Gate.com, 访问时间为 六月 25, 2025， [https://www.gate.com/learn/articles/what-is-velodrome-finance-all-you-need-to-know-about-velo/5124](https://www.gate.com/learn/articles/what-is-velodrome-finance-all-you-need-to-know-about-velo/5124)  
17. An Aerodrome DeepDive, The Liquidity Layer of Base \- Flagship.FYI, 访问时间为 六月 25, 2025， [https://flagship.fyi/outposts/dapps/aerodrome-finance-crypto-platform-base/](https://flagship.fyi/outposts/dapps/aerodrome-finance-crypto-platform-base/)  
18. Extra Finance Leverage Farming \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/extra-finance-leverage-farming](https://defillama.com/protocol/extra-finance-leverage-farming)  
19. ExtraFi/contracts-and-pools-info: The addresses of ... \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/ExtraFi/contracts-and-pools-info](https://github.com/ExtraFi/contracts-and-pools-info)  
20. ve-Mechanism & Utility \- Extra Finance \- farming, 访问时间为 六月 25, 2025， [https://docs.extrafi.io/extra\_finance/tokenomics/tokenomics-v1/ve-mechanism-and-utility](https://docs.extrafi.io/extra_finance/tokenomics/tokenomics-v1/ve-mechanism-and-utility)  
21. ve-Mechanism & Utility V2 \- Extra Finance \- farming, 访问时间为 六月 25, 2025， [https://docs.extrafi.io/extra\_finance/tokenomics/ve-mechanism-and-utility-v2](https://docs.extrafi.io/extra_finance/tokenomics/ve-mechanism-and-utility-v2)  
22. Extra Finance Xlend \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/extra-finance-xlend](https://defillama.com/protocol/extra-finance-xlend)  
23. publications/audit\_reports/PeckShield-Audit-Report-ExtraFi-v1.0.pdf ..., 访问时间为 六月 25, 2025， [https://github.com/peckshield/publications/blob/master/audit\_reports/PeckShield-Audit-Report-ExtraFi-v1.0.pdf](https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-ExtraFi-v1.0.pdf)  
24. audit-reports/solidity/blocksec\_extrafinance\_v1.0-signed.pdf at main ..., 访问时间为 六月 25, 2025， [https://github.com/blocksecteam/audit-reports/blob/main/solidity/blocksec\_extrafinance\_v1.0-signed.pdf](https://github.com/blocksecteam/audit-reports/blob/main/solidity/blocksec_extrafinance_v1.0-signed.pdf)  
25. Risks | Extrafi XLend, 访问时间为 六月 25, 2025， [https://docs.extrafi.io/extrafi-xlend/borrow-lend/risks](https://docs.extrafi.io/extrafi-xlend/borrow-lend/risks)  
26. Risks \- Extra Finance \- farming, 访问时间为 六月 25, 2025， [https://docs.extrafi.io/extra\_finance/risks](https://docs.extrafi.io/extra_finance/risks)  
27. Leadership \- ExtraHop, 访问时间为 六月 25, 2025， [https://www.extrahop.com/leadership](https://www.extrahop.com/leadership)  
28. Extra Credit Union Employee Directory, Headcount & Staff \- LeadIQ, 访问时间为 六月 25, 2025， [https://leadiq.com/c/extra-credit-union/5a1d8e2954000052007482ad/employee-directory](https://leadiq.com/c/extra-credit-union/5a1d8e2954000052007482ad/employee-directory)  
29. Extra Financial 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 六月 25, 2025， [https://pitchbook.com/profiles/company/589922-20](https://pitchbook.com/profiles/company/589922-20)  
30. Fred Goodwin \- Wikipedia, 访问时间为 六月 25, 2025， [https://en.wikipedia.org/wiki/Fred\_Goodwin](https://en.wikipedia.org/wiki/Fred_Goodwin)  
31. Compare ForTube vs. Gearbox Protocol in 2025 \- Slashdot, 访问时间为 六月 25, 2025， [https://slashdot.org/software/comparison/ForTube-vs-Gearbox-Protocol/](https://slashdot.org/software/comparison/ForTube-vs-Gearbox-Protocol/)  
32. Gearbox Generalized Leverage Protocol, 访问时间为 六月 25, 2025， [https://static.gearbox.fi/docs/Gearbox.pdf](https://static.gearbox.fi/docs/Gearbox.pdf)  
33. Gearbox Protocol: A Composable Leverage Protocol in DeFi \- Consensys, 访问时间为 六月 25, 2025， [https://consensys.io/blog/gearbox-protocol-a-composable-leverage-protocol-in-defi](https://consensys.io/blog/gearbox-protocol-a-composable-leverage-protocol-in-defi)  
34. List of 56 DeFi Yield Farming Platforms (2025) \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/dapps/best/defi-yield-farming-platforms](https://www.alchemy.com/dapps/best/defi-yield-farming-platforms)  
35. Gearbox Protocol Price, GEAR Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/price/gearbox-protocol](https://www.coinbase.com/price/gearbox-protocol)  
36. Alpaca Finance, once a $1bn DeFi darling, is done. Here's what went wrong \- DL News, 访问时间为 六月 25, 2025， [https://www.dlnews.com/articles/defi/defi-protocol-alpaca-finance-shuts-down-as-losses-mount/](https://www.dlnews.com/articles/defi/defi-protocol-alpaca-finance-shuts-down-as-losses-mount/)  
37. The Daily: Coinbase sued over stock price drop, Alpaca Finance to sunset all products, Lagrange plans an airdrop, and more | The Block, 访问时间为 六月 25, 2025， [https://www.theblock.co/post/355747/the-daily-coinbase-stock-alpaca-finance-lagrange](https://www.theblock.co/post/355747/the-daily-coinbase-stock-alpaca-finance-lagrange)  
38. Alpaca Finance's 32.77% Drop: Can It Survive Post-Binance Delisting? \- FXLeaders, 访问时间为 六月 25, 2025， [https://www.fxleaders.com/news/2025/05/27/alpaca-finances-32-77-drop-can-it-survive-post-binance-delisting/](https://www.fxleaders.com/news/2025/05/27/alpaca-finances-32-77-drop-can-it-survive-post-binance-delisting/)  
39. A closer look at the ve(3,3) tokenomics model in DeFi | OAK Research, 访问时间为 六月 25, 2025， [https://oakresearch.io/en/analyses/fundamentals/a-closer-look-at-ve33-tokenomics-defi](https://oakresearch.io/en/analyses/fundamentals/a-closer-look-at-ve33-tokenomics-defi)  
40. DAO Governance | NUS, 访问时间为 六月 25, 2025， [https://www.aidf.nus.edu.sg/wp-content/uploads/2023/02/DAO\_Governance-Han-Lee-Li-WP23-022723.pdf](https://www.aidf.nus.edu.sg/wp-content/uploads/2023/02/DAO_Governance-Han-Lee-Li-WP23-022723.pdf)  
41. An Overview on veTokens and the ve(3,3) Tokenomics | CryptoEQ, 访问时间为 六月 25, 2025， [https://www.cryptoeq.io/articles/vetokens-defi-tokenomics](https://www.cryptoeq.io/articles/vetokens-defi-tokenomics)  
42. Unpacking ve(3,3) DEX Innovations: An In-depth Analysis of Velodrome Finance, Thena, Equalizer and Chronos \- Mint Ventures, 访问时间为 六月 25, 2025， [https://research.mintventures.fund/2023/06/26/unpacking-ve33-dex-innovations-an-in-depth-analysis-of-velodrome-finance-thena-equalizer-and-chronos/](https://research.mintventures.fund/2023/06/26/unpacking-ve33-dex-innovations-an-in-depth-analysis-of-velodrome-finance-thena-equalizer-and-chronos/)  
43. Balancing Security and Liquidity: A Time-Weighted Snapshot Framework for DAO Governance Voting \- arXiv, 访问时间为 六月 25, 2025， [https://arxiv.org/html/2505.00888v2](https://arxiv.org/html/2505.00888v2)  
44. Velodrome Finance Bug Bounties | Immunefi, 访问时间为 六月 25, 2025， [https://immunefi.com/bug-bounty/velodromefinance/scope/](https://immunefi.com/bug-bounty/velodromefinance/scope/)  
45. Aerodrome Finance Suspends Contributors Over Insider Trading During Venice's VVV Token Launch \- Coinspeaker, 访问时间为 六月 25, 2025， [https://www.coinspeaker.com/aerodrome-finance-suspends-contributors-over-insider-trading-during-venices-vvv-token-launch/](https://www.coinspeaker.com/aerodrome-finance-suspends-contributors-over-insider-trading-during-venices-vvv-token-launch/)  
46. Milk Road PRO: Token Snapshot – Aerodrome, 访问时间为 六月 25, 2025， [https://milkroad.com/daily/milk-road-pro-token-snapshot-aerodrome/](https://milkroad.com/daily/milk-road-pro-token-snapshot-aerodrome/)  
47. 10 Best DeFi Yield Farming Strategies for 2024: High Returns, Low Risk \- Rapid Innovation, 访问时间为 六月 25, 2025， [https://www.rapidinnovation.io/post/defi-yield-farming-strategies-maximizing-returns-minimizing-risks](https://www.rapidinnovation.io/post/defi-yield-farming-strategies-maximizing-returns-minimizing-risks)  
48. What is Delta Neutral Hedging in Options & How Does it Work? \- tastylive, 访问时间为 六月 25, 2025， [https://www.tastylive.com/concepts-strategies/delta-neutral-hedging](https://www.tastylive.com/concepts-strategies/delta-neutral-hedging)  
49. The Ultimate Guide to Option Delta in Finance \- Number Analytics, 访问时间为 六月 25, 2025， [https://www.numberanalytics.com/blog/ultimate-guide-option-delta-finance](https://www.numberanalytics.com/blog/ultimate-guide-option-delta-finance)  
50. Delta Neutral: Definition, Use With a Portfolio, and Example \- Investopedia, 访问时间为 六月 25, 2025， [https://www.investopedia.com/terms/d/deltaneutral.asp](https://www.investopedia.com/terms/d/deltaneutral.asp)  
51. ExtraFi · GitHub, 访问时间为 六月 25, 2025， [https://github.com/ExtraFi](https://github.com/ExtraFi)  
52. Extra Finance overview \- Token Terminal, 访问时间为 六月 25, 2025， [https://tokenterminal.com/explorer/projects/extra](https://tokenterminal.com/explorer/projects/extra)  
53. Add Extra Finance Xlend · DefiLlama/DefiLlama-Adapters@533d8d9 \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/DefiLlama/DefiLlama-Adapters/actions/runs/12477667975](https://github.com/DefiLlama/DefiLlama-Adapters/actions/runs/12477667975)  
54. Support Extra Finance · Issue \#8013 · rotki/rotki \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/rotki/rotki/issues/8013](https://github.com/rotki/rotki/issues/8013)  
55. The TVL calculation excludes wUSDR, AERO, and TAROT on Base. · Issue \#7378 \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/DefiLlama/DefiLlama-Adapters/issues/7378](https://github.com/DefiLlama/DefiLlama-Adapters/issues/7378)  
56. Extra Finance Bug Bounties | Immunefi, 访问时间为 六月 25, 2025， [https://immunefi.com/bug-bounty/extrafinance/resources/](https://immunefi.com/bug-bounty/extrafinance/resources/)  
57. Extra Finance Xlend \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/extra-finance-xlend?denomination=ETH](https://defillama.com/protocol/extra-finance-xlend?denomination=ETH)  
58. Extra Finance \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/extra-finance?ref=bankless.ghost.io](https://defillama.com/protocol/extra-finance?ref=bankless.ghost.io)  
59. DeFiマーケットレポート【2024年9月】 | HashHub Research, 访问时间为 六月 25, 2025， [https://hashhub-research.com/articles/2024-10-18-defi-market-report-2024-09](https://hashhub-research.com/articles/2024-10-18-defi-market-report-2024-09)  
60. Who We Are \- Extra Duty Solutions, 访问时间为 六月 25, 2025， [https://extradutysolutions.com/about-us/](https://extradutysolutions.com/about-us/)  
61. Team-Member Spotlight: Andrea, Finance | Extra Duty Solutions, 访问时间为 六月 25, 2025， [https://extradutysolutions.com/news/team-member-spotlights/team-member-spotlight-andrea-finance/](https://extradutysolutions.com/news/team-member-spotlights/team-member-spotlight-andrea-finance/)  
62. Alexandr Wang \- Wikipedia, 访问时间为 六月 25, 2025， [https://en.wikipedia.org/wiki/Alexandr\_Wang](https://en.wikipedia.org/wiki/Alexandr_Wang)  
63. Extra Card 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 六月 25, 2025， [https://pitchbook.com/profiles/company/264553-93](https://pitchbook.com/profiles/company/264553-93)  
64. Security Audit Report for Side Protocol \- BlockSec, 访问时间为 六月 25, 2025， [https://blocksec.com/audit-report/security-audit-report-for-side-protocol](https://blocksec.com/audit-report/security-audit-report-for-side-protocol)  
65. Security Audit Request \- BlockSec, 访问时间为 六月 25, 2025， [https://blocksec.com/request-an-audit](https://blocksec.com/request-an-audit)  
66. BlockSec audit | Meta Pool \- Docs, 访问时间为 六月 25, 2025， [https://docs.metapool.app/master/security/audits/by-auditor/blocksec-audit](https://docs.metapool.app/master/security/audits/by-auditor/blocksec-audit)  
67. Audit Reports \- BlockSec's Expert Reviews, 访问时间为 六月 25, 2025， [https://blocksec.com/audit-report](https://blocksec.com/audit-report)  
68. PeckShield Audit Report RabbyRouter v1.0 | PDF | Vulnerability (Computing) \- Scribd, 访问时间为 六月 25, 2025， [https://fr.scribd.com/document/614926688/PeckShield-Audit-Report-RabbyRouter-v1-0](https://fr.scribd.com/document/614926688/PeckShield-Audit-Report-RabbyRouter-v1-0)  
69. SMART CONTRACT AUDIT REPORT Banking Circle Stablecoin (ERC20) \- Eurite (EURI), 访问时间为 六月 25, 2025， [https://www.eurite.com/wp-content/uploads/2024/06/PeckShield-Audit-Report-ERC20-BankingCircle-v1.0-2.pdf](https://www.eurite.com/wp-content/uploads/2024/06/PeckShield-Audit-Report-ERC20-BankingCircle-v1.0-2.pdf)  
70. Minterest Completes Comprehensive Security Audit with PeckShield, 访问时间为 六月 25, 2025， [https://minterest.com/blog/minterest-completes-comprehensive-security-audit-with-peckshield/](https://minterest.com/blog/minterest-completes-comprehensive-security-audit-with-peckshield/)  
71. About OFAC \- Office of Foreign Assets Control \- Treasury Department, 访问时间为 六月 25, 2025， [https://ofac.treasury.gov/about-ofac](https://ofac.treasury.gov/about-ofac)  
72. Securitization \- Wikipedia, 访问时间为 六月 25, 2025， [https://en.wikipedia.org/wiki/Securitization](https://en.wikipedia.org/wiki/Securitization)  
73. Fox Business | Business News & Stock Quotes \- Saving & Investing, 访问时间为 六月 25, 2025， [https://www.foxbusiness.com/](https://www.foxbusiness.com/)  
74. Got A Salary Hike? Here's How To Invest Extra Money For Wealth Accumulation, 访问时间为 六月 25, 2025， [https://www.ndtvprofit.com/personal-finance/got-a-salary-hike-heres-how-to-invest-extra-money-for-wealth-accumulation](https://www.ndtvprofit.com/personal-finance/got-a-salary-hike-heres-how-to-invest-extra-money-for-wealth-accumulation)  
75. India's Finance Professionals Clocking 40 Extra Hours a Week to Upskill, Finds Zell Education Study \- CXOToday.com, 访问时间为 六月 25, 2025， [https://cxotoday.com/press-release/indias-finance-professionals-clocking-40-extra-hours-a-week-to-upskill-finds-zell-education-study/](https://cxotoday.com/press-release/indias-finance-professionals-clocking-40-extra-hours-a-week-to-upskill-finds-zell-education-study/)  
76. Financial Markets | Latest News & Updates, 访问时间为 六月 25, 2025， [https://apnews.com/hub/financial-markets](https://apnews.com/hub/financial-markets)  
77. Join our \#CreditChat on X every Wednesday at 3 p.m. ET. \- Experian Global News Blog, 访问时间为 六月 25, 2025， [https://www.experian.com/blogs/news/about/creditchat/](https://www.experian.com/blogs/news/about/creditchat/)  
78. Candidate/Committee Finance Search \- Palm Beach County Supervisor of Elections, 访问时间为 六月 25, 2025， [https://www.votepalmbeach.gov/Candidates/Candidate-Committee-Finance-Search](https://www.votepalmbeach.gov/Candidates/Candidate-Committee-Finance-Search)  
79. Loan Payment Options | CA Housing Finance Agency \- CalHFA, 访问时间为 六月 25, 2025， [https://www.calhfa.ca.gov/myaccount/payment.htm](https://www.calhfa.ca.gov/myaccount/payment.htm)  
80. Consultants | New York City Campaign Finance Board, 访问时间为 六月 25, 2025， [http://www.nyccfb.info/candidate-services/consultant-and-vendor-guide/consultants/](http://www.nyccfb.info/candidate-services/consultant-and-vendor-guide/consultants/)  
81. Investing in Discord | How to Buy Pre-IPO Shares \- Securities.io, 访问时间为 六月 25, 2025， [https://www.securities.io/investing-in-discord-pre-ipo/](https://www.securities.io/investing-in-discord-pre-ipo/)  
82. Discord Policy Hub, 访问时间为 六月 25, 2025， [https://discord.com/safety-policies](https://discord.com/safety-policies)  
83. Folks Finance \- Discord, 访问时间为 六月 25, 2025， [https://discord.com/invite/folksfinance](https://discord.com/invite/folksfinance)  
84. 20 Telegram scams to watch out for and how to protect yourself \- Surfshark, 访问时间为 六月 25, 2025， [https://surfshark.com/blog/telegram-scams](https://surfshark.com/blog/telegram-scams)  
85. Beware Cryptocurrency Scams \- Mass.gov, 访问时间为 六月 25, 2025， [https://www.mass.gov/info-details/beware-cryptocurrency-scams](https://www.mass.gov/info-details/beware-cryptocurrency-scams)  
86. Top 11 Telegram scams and how to protect yourself \- LifeLock, 访问时间为 六月 25, 2025， [https://lifelock.norton.com/learn/internet-security/telegram-scams](https://lifelock.norton.com/learn/internet-security/telegram-scams)  
87. 8 Telegram scams. How not to get scammed \- Bitdefender, 访问时间为 六月 25, 2025， [https://www.bitdefender.com/en-gb/blog/hotforsecurity/8-telegram-scams-how-not-to-get-scammed](https://www.bitdefender.com/en-gb/blog/hotforsecurity/8-telegram-scams-how-not-to-get-scammed)  
88. 10 Best Discord Servers to Learn Finance & Stock Trading In 2023 \- SingSaver, 访问时间为 六月 25, 2025， [https://www.singsaver.com.sg/blog/best-discord-servers-to-learn-finance-stock-trading](https://www.singsaver.com.sg/blog/best-discord-servers-to-learn-finance-stock-trading)  
89. Make Money Online \- Discord, 访问时间为 六月 25, 2025， [https://discord.com/invite/make-money-online-957676703658954784](https://discord.com/invite/make-money-online-957676703658954784)  
90. Top 10 Crypto Discord Servers and Groups to Join in 2025 \- Ninjapromo, 访问时间为 六月 25, 2025， [https://ninjapromo.io/best-crypto-discord-servers-to-join](https://ninjapromo.io/best-crypto-discord-servers-to-join)  
91. Fidelity on Discord | Join us over at the official Fidelity Server, 访问时间为 六月 25, 2025， [https://www.fidelity.com/social-media/discord](https://www.fidelity.com/social-media/discord)  
92. Are those telegram groups that claim to pay out 10x your investment true, or are they scams?, 访问时间为 六月 25, 2025， [https://www.quora.com/Are-those-telegram-groups-that-claim-to-pay-out-10x-your-investment-true-or-are-they-scams](https://www.quora.com/Are-those-telegram-groups-that-claim-to-pay-out-10x-your-investment-true-or-are-they-scams)  
93. Beware of short time forex investments on telegram : r/Scams \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/Scams/comments/168qdm7/beware\_of\_short\_time\_forex\_investments\_on\_telegram/](https://www.reddit.com/r/Scams/comments/168qdm7/beware_of_short_time_forex_investments_on_telegram/)  
94. Telegram job scam. Please be aware and share your experiences. \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/Scams/comments/1715z2q/telegram\_job\_scam\_please\_be\_aware\_and\_share\_your/](https://www.reddit.com/r/Scams/comments/1715z2q/telegram_job_scam_please_be_aware_and_share_your/)  
95. Loan terminology glossary | UCOP, 访问时间为 六月 25, 2025， [https://www.ucop.edu/loan-programs/resources/loan-terminology-glossary.html](https://www.ucop.edu/loan-programs/resources/loan-terminology-glossary.html)  
96. Yield Farming in DeFi Explained: Possibilities, Risks & Strategies \- Cointelegraph, 访问时间为 六月 25, 2025， [https://cointelegraph.com/explained/defi-yield-farming-explained](https://cointelegraph.com/explained/defi-yield-farming-explained)  
97. Decentralized finance \- Wikipedia, 访问时间为 六月 25, 2025， [https://en.wikipedia.org/wiki/Decentralized\_finance](https://en.wikipedia.org/wiki/Decentralized_finance)  
98. What Is Yield Farming & How Does It Work? \- Plena Finance, 访问时间为 六月 25, 2025， [https://www.plena.finance/blog/what-is-yield-farming-and-how-does-it-work](https://www.plena.finance/blog/what-is-yield-farming-and-how-does-it-work)  
99. A guide to implement a Delta Neutral strategy with RA-Algos on AlgoTest. \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=czXo5qRdph0](https://www.youtube.com/watch?v=czXo5qRdph0)  
100. Delta Neutral Option Strategy \- Short Straddle with Delta Hedging \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=qBWknMzYzFU](https://www.youtube.com/watch?v=qBWknMzYzFU)  
101. Top 10 DeFi Yield Farming Platforms | QuickNode, 访问时间为 六月 25, 2025， [https://www.quicknode.com/builders-guide/top-10-defi-yield-farming-platforms](https://www.quicknode.com/builders-guide/top-10-defi-yield-farming-platforms)  
102. Seamless Protocol launches plug and play Leverage Tokens as ERC-20 assets on Base, 访问时间为 六月 25, 2025， [https://cryptobriefing.com/launch-leveraged-defi-tokens/](https://cryptobriefing.com/launch-leveraged-defi-tokens/)  
103. Yield farming for beginners : r/ethereum \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/ethereum/comments/1ikshd0/yield\_farming\_for\_beginners/](https://www.reddit.com/r/ethereum/comments/1ikshd0/yield_farming_for_beginners/)  
104. List of 15 DeFi Yield Farming Platforms on OP Mainnet (2025) \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/dapps/list-of/defi-yield-farming-platforms-on-op-mainnet](https://www.alchemy.com/dapps/list-of/defi-yield-farming-platforms-on-op-mainnet)  
105. Optimism DeFi Ecosystem \- List of the Best Optimism Projects \- DeFi Prime, 访问时间为 六月 25, 2025， [https://defiprime.com/optimism](https://defiprime.com/optimism)  
106. Optimism Network in 2025: Growth, Superchain Vision, and Bridging with RocketX, 访问时间为 六月 25, 2025， [https://www.rocketx.exchange/blog/how-to-bridge-assets-to-optimism-network/](https://www.rocketx.exchange/blog/how-to-bridge-assets-to-optimism-network/)  
107. List of 13 DeFi Yield Aggregators on OP Mainnet (2025) \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/dapps/list-of/defi-yield-aggregators-on-op-mainnet](https://www.alchemy.com/dapps/list-of/defi-yield-aggregators-on-op-mainnet)  
108. Alpaca Finance dApp: Expert Insights & Technical Analysis \- BitDegree, 访问时间为 六月 25, 2025， [https://www.bitdegree.org/crypto-tracker/top-bsc-dapps/alpaca-finance](https://www.bitdegree.org/crypto-tracker/top-bsc-dapps/alpaca-finance)  
109. Alpaca Finance Price, ALPACA Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 六月 25, 2025， [https://www.coinbase.com/price/alpaca-finance](https://www.coinbase.com/price/alpaca-finance)  
110. Alpaca Finance price today, ALPACA to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/currencies/alpaca-finance/](https://coinmarketcap.com/currencies/alpaca-finance/)  
111. Compare Belt Finance vs. Gearbox Protocol in 2025 \- Slashdot, 访问时间为 六月 25, 2025， [https://slashdot.org/software/comparison/Belt-Finance-vs-Gearbox-Protocol/](https://slashdot.org/software/comparison/Belt-Finance-vs-Gearbox-Protocol/)  
112. School/Community Involvement \- Extra Credit Union, 访问时间为 六月 25, 2025， [https://www.extracreditunion.org/school-community-involvement/](https://www.extracreditunion.org/school-community-involvement/)  
113. Call 211 for Essential Community Services | United Way 211, 访问时间为 六月 25, 2025， [https://www.211.org/](https://www.211.org/)  
114. I got scammed by telegram group. I took a loan for this. I don't know what do do \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/Scams/comments/1fwudt3/i\_got\_scammed\_by\_telegram\_group\_i\_took\_a\_loan\_for/](https://www.reddit.com/r/Scams/comments/1fwudt3/i_got_scammed_by_telegram_group_i_took_a_loan_for/)  
115. PART-TIME JOB SCAM: Beware of growing WhatsApp and Telegram fraud \- YouTube, 访问时间为 六月 25, 2025， [https://m.youtube.com/watch?v=9P8YxsDwX\_c\&pp=ygUGI3dwcGJk](https://m.youtube.com/watch?v=9P8YxsDwX_c&pp=ygUGI3dwcGJk)  
116. Secured personal loan getting reported as auto loan because of collateral? : r/personalfinance \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/personalfinance/comments/1abo899/secured\_personal\_loan\_getting\_reported\_as\_auto/](https://www.reddit.com/r/personalfinance/comments/1abo899/secured_personal_loan_getting_reported_as_auto/)  
117. Extra card review : r/personalfinance \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/personalfinance/comments/n0kz1p/extra\_card\_review/](https://www.reddit.com/r/personalfinance/comments/n0kz1p/extra_card_review/)  
118. What's the catch? Too good to be true? : r/personalfinance \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/personalfinance/comments/16d02yu/whats\_the\_catch\_too\_good\_to\_be\_true/](https://www.reddit.com/r/personalfinance/comments/16d02yu/whats_the_catch_too_good_to_be_true/)  
119. Liquidity Mining vs Yield Farming: Complete 2025 Guide for DeFi Income, Reward Tokens, and Liquidity Providers \- ECOS, 访问时间为 六月 25, 2025， [https://ecos.am/en/blog/liquidity-mining-vs-yield-farming-complete-2025-guide-for-defi-income-reward-tokens-and-liquidity-providers/](https://ecos.am/en/blog/liquidity-mining-vs-yield-farming-complete-2025-guide-for-defi-income-reward-tokens-and-liquidity-providers/)  
120. What Is Rexas Finance (RXS Crypto)? Complete Guide To Revolutionary Real-World Asset Tokenization | MEXC Blog, 访问时间为 六月 25, 2025， [https://blog.mexc.com/what-is-rxs-rexas-finance/](https://blog.mexc.com/what-is-rxs-rexas-finance/)  
121. What is DeFi and Yield Farming? \- Deltec Bank and Trust, 访问时间为 六月 25, 2025， [https://www.deltecbank.com/news-and-insights/what-is-defi-and-yield-farming/](https://www.deltecbank.com/news-and-insights/what-is-defi-and-yield-farming/)  
122. Sustainability & Climate 2025 Progress Report \- TotalEnergies.com, 访问时间为 六月 25, 2025， [https://totalenergies.com/system/files/documents/totalenergies\_sustainability-climate-2025-progress-report\_2025\_en.pdf](https://totalenergies.com/system/files/documents/totalenergies_sustainability-climate-2025-progress-report_2025_en.pdf)  
123. CONGRESSIONAL RECORD-SENATE. \- Congress.gov, 访问时间为 六月 25, 2025， [https://www.congress.gov/59/crecb/1907/02/05/GPO-CRECB-1907-pt3-v41-5.pdf](https://www.congress.gov/59/crecb/1907/02/05/GPO-CRECB-1907-pt3-v41-5.pdf)  
124. \&carJ of Cimmi a$ien•ra \- IIS Windows Server, 访问时间为 六月 25, 2025， [https://cms5.revize.com/revize/maysville/Document%20Center/Minutes/Archived%20PDFs/Minute%20Book%2018%201941-1946.pdf](https://cms5.revize.com/revize/maysville/Document%20Center/Minutes/Archived%20PDFs/Minute%20Book%2018%201941-1946.pdf)  
125. Base DEX: Aerodrome VS Curve \- Gate.com, 访问时间为 六月 25, 2025， [https://www.gate.com/learn/articles/base-dex-aerodrome-vs-curve/2361](https://www.gate.com/learn/articles/base-dex-aerodrome-vs-curve/2361)  
126. Aerodrome Finance (AERO) token sale analytics and information, private/seed sale price, tokenomics, 访问时间为 六月 25, 2025， [https://icoanalytics.org/projects/aerodrome-finance/](https://icoanalytics.org/projects/aerodrome-finance/)  
127. Aerodrome Finance (AERO) Price Prediction 2025-2040 \- Noone Wallet Blog, 访问时间为 六月 25, 2025， [https://noone.io/blog/aerodrome-finance-price-prediction/](https://noone.io/blog/aerodrome-finance-price-prediction/)  
128. AERO (Aerodrome Finance) Price Prediction 2025–2030: Can the DeFi Hub of Base Take Flight? | CoinEx Academy, 访问时间为 六月 25, 2025， [https://www.coinex.com/academy/detail/2835-aero-aerodrome-finance-price-prediction-2025-2030](https://www.coinex.com/academy/detail/2835-aero-aerodrome-finance-price-prediction-2025-2030)  
129. Whats wrong with Yield farming : r/defi \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/defi/comments/1l7vss9/whats\_wrong\_with\_yield\_farming/](https://www.reddit.com/r/defi/comments/1l7vss9/whats_wrong_with_yield_farming/)  
130. Benefits and Risks of Participating in DeFi Yield Farming \- Calibraint, 访问时间为 六月 25, 2025， [https://www.calibraint.com/blog/benefits-and-risks-of-defi-yield-farming](https://www.calibraint.com/blog/benefits-and-risks-of-defi-yield-farming)  
131. Yield Farming Explained: Your Complete Beginner's Guide, 访问时间为 六月 25, 2025， [https://www.kraken.com/learn/what-is-yield-farming](https://www.kraken.com/learn/what-is-yield-farming)  
132. finance-api · GitHub Topics, 访问时间为 六月 25, 2025， [https://github.com/topics/finance-api](https://github.com/topics/finance-api)  
133. OpenBB-finance/OpenBB: Investment Research for Everyone, Everywhere. \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)  
134. Alpaca Finance Shuts Down After Four Years \- NFTevening, 访问时间为 六月 25, 2025， [https://nftevening.com/alpaca-finance-shuts-down-after-four-years/](https://nftevening.com/alpaca-finance-shuts-down-after-four-years/)  
135. Alpaca Finance Shuts Down by 2025 End Citing Unsustainable Model \- AInvest, 访问时间为 六月 25, 2025， [https://www.ainvest.com/news/alpaca-finance-shuts-2025-citing-unsustainable-model-2505/](https://www.ainvest.com/news/alpaca-finance-shuts-2025-citing-unsustainable-model-2505/)  
136. What is Gearbox Protocol (GEAR)| How To Get & Use Gearbox Protocol \- Bitget, 访问时间为 六月 25, 2025， [https://www.bitget.com/price/gearbox-protocol/what-is](https://www.bitget.com/price/gearbox-protocol/what-is)  
137. All you need to know about Gearbox Protocol (GEAR) \- Gate.com, 访问时间为 六月 25, 2025， [https://www.gate.com/learn/articles/all-you-need-to-know-about-gearbox-protocol/1551](https://www.gate.com/learn/articles/all-you-need-to-know-about-gearbox-protocol/1551)  
138. Ecosystem Directory \- Monad, 访问时间为 六月 25, 2025， [https://www.monad.xyz/ecosystem](https://www.monad.xyz/ecosystem)  
139. List of 355 DeFi Dapps (2025) \- Alchemy, 访问时间为 六月 25, 2025， [https://www.alchemy.com/dapps/top/defi-dapps](https://www.alchemy.com/dapps/top/defi-dapps)  
140. Blockchain and DeFi Projects worldwide in 2023 \[Updated\] \- CFTE, 访问时间为 六月 25, 2025， [https://courses.cfte.education/blockchain-and-defi-projects/](https://courses.cfte.education/blockchain-and-defi-projects/)  
141. The Dapp List | Explore community-curated Web3 projects, 访问时间为 六月 25, 2025， [https://thedapplist.com/](https://thedapplist.com/)  
142. simpleaswater/defi-resources: A curated list of awesome decentralized finance projects, software, DeFi project trackers, analytics dashboards, and, DeFi product management resources. \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/simpleaswater/defi-resources](https://github.com/simpleaswater/defi-resources)  
143. 8 Best Crypto Discord Servers for Trading, News & NFTs \- FINPR Agency, 访问时间为 六月 25, 2025， [https://finpr.agency/tpost/phoxmu79s1-8-best-crypto-discord-servers-for-tradin](https://finpr.agency/tpost/phoxmu79s1-8-best-crypto-discord-servers-for-tradin)  
144. Discover 14 Best Crypto Telegram Groups to Join in 2025 \- BitDegree, 访问时间为 六月 25, 2025， [https://www.bitdegree.org/crypto/tutorials/best-crypto-telegram-groups](https://www.bitdegree.org/crypto/tutorials/best-crypto-telegram-groups)  
145. Best Telegram Trading Bot Tokens \- Top 5 List, 访问时间为 六月 25, 2025， [https://en.cryptonomist.ch/2025/06/09/best-telegram-trading-bot-tokens-top-5-list/](https://en.cryptonomist.ch/2025/06/09/best-telegram-trading-bot-tokens-top-5-list/)  
146. What Are Layer 2s? \- Wealth Mastery By Lark Davis \- Crypto Newsletter, 访问时间为 六月 25, 2025， [https://thewealthmastery.io/crypto-library-category/layer-2s/page/9/](https://thewealthmastery.io/crypto-library-category/layer-2s/page/9/)  
147. Phillip Torrence: Law Firm, Attorneys, Lawyers \- Honigman, 访问时间为 六月 25, 2025， [https://www.honigman.com/professionals-phillip-d-torrence](https://www.honigman.com/professionals-phillip-d-torrence)  
148. Investment Banking Math: It's Not Rocket Science \- Mergers & Inquisitions, 访问时间为 六月 25, 2025， [https://mergersandinquisitions.com/investment-banking-math/](https://mergersandinquisitions.com/investment-banking-math/)  
149. Getting Started with DeFi: Your Comprehensive Guide to Decentralized Finance \- CoW DAO, 访问时间为 六月 25, 2025， [https://cow.fi/learn/getting-started-with-de-fi-your-comprehensive-guide-to-decentralized-finance](https://cow.fi/learn/getting-started-with-de-fi-your-comprehensive-guide-to-decentralized-finance)  
150. DeFiIntel: A Dataset Bridging On-Chain and Off-Chain Data for DeFi Token Scam Investigation, 访问时间为 六月 25, 2025， [https://www.ndss-symposium.org/wp-content/uploads/madweb25-19.pdf](https://www.ndss-symposium.org/wp-content/uploads/madweb25-19.pdf)  
151. BTCFi: Analyzing Bitcoin DeFi Ecosystem Through On-chain Data | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/academy/article/btcfi-analyzing-bitcoin-defi-ecosystem-through-on-chain-data](https://coinmarketcap.com/academy/article/btcfi-analyzing-bitcoin-defi-ecosystem-through-on-chain-data)  
152. 6 Essential Metrics to Evaluate DeFi Assets \- Amberdata Blog, 访问时间为 六月 25, 2025， [https://blog.amberdata.io/6-essential-metrics-to-evaluate-defi-assets-amberdata](https://blog.amberdata.io/6-essential-metrics-to-evaluate-defi-assets-amberdata)  
153. How to Find DeFi Yield Farms Yourself (Step-by-Step Guide) \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=vzaiulTAkGc](https://www.youtube.com/watch?v=vzaiulTAkGc)  
154. How to Build a Yield Farming Portfolio on Base Chain (DeFi Passive Income\!) \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=eeusfeHZzDE](https://www.youtube.com/watch?v=eeusfeHZzDE)  
155. Crypto Yield Farming Tutorial (Strategies Explained) \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=qlXpThXXQUw](https://www.youtube.com/watch?v=qlXpThXXQUw)  
156. How to Use Aerodrome Finance (BASE Network DeX Swaps & Liquidity) \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=4aYI0-vwOcA](https://www.youtube.com/watch?v=4aYI0-vwOcA)  
157. Practical Applications of DeFi | Yield Farming, Liquidity Pools, Impermanent Loss \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=PlP0LlwKzhI](https://www.youtube.com/watch?v=PlP0LlwKzhI)  
158. Velodrome Finance Price Today | VELODROME to USD Live Price, Market Cap & Chart, 访问时间为 六月 25, 2025， [https://www.binance.com/en/price/velodrome-finance](https://www.binance.com/en/price/velodrome-finance)  
159. Velodrome Finance (VELO) Price Prediction & Forecast For 2024 To 2030 | Mudrex Learn, 访问时间为 六月 25, 2025， [https://mudrex.com/learn/velodrome-finance-velo-price-prediction-forecast-for-2024-to-2030/](https://mudrex.com/learn/velodrome-finance-velo-price-prediction-forecast-for-2024-to-2030/)  
160. liquidity: News of Velodrome Finance (VELO) \- August 2024 Price Update \- 8.22% Breakout Crypto News and Analysis \- Experty, 访问时间为 六月 25, 2025， [https://experty.io/liquidity:velodrome-finance-august-2024-price-update-8-22-percent-breakout-news-and-analysis](https://experty.io/liquidity:velodrome-finance-august-2024-price-update-8-22-percent-breakout-news-and-analysis)  
161. LEVERAGED Yield Farming on Compound (with Solidity Tutorial) \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=kAnc9Stmbi8](https://www.youtube.com/watch?v=kAnc9Stmbi8)  
162. Leveraged Yield Farming | Notional V3 User Docs \- Product Guides, 访问时间为 六月 25, 2025， [https://docs.notional.finance/notional-v3/product-guides/leveraged-yield-farming](https://docs.notional.finance/notional-v3/product-guides/leveraged-yield-farming)  
163. A Beginners Guide to Yield Farming in Defi \- Hord.fi, 访问时间为 六月 25, 2025， [https://www.hord.fi/blog/guide-to-yield-farming](https://www.hord.fi/blog/guide-to-yield-farming)  
164. Personal Finance \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/personalfinance/](https://www.reddit.com/r/personalfinance/)  
165. Financial Planning, Personal Finance, Frugality, Money, and More\! \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/FinancialPlanning/](https://www.reddit.com/r/FinancialPlanning/)  
166. 20 of The Best Finance Subreddits | Check City, 访问时间为 六月 25, 2025， [https://www.checkcity.com/personal-finance/best-finance-subreddits](https://www.checkcity.com/personal-finance/best-finance-subreddits)  
167. Financial Independence / Retire Early \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/financialindependence/](https://www.reddit.com/r/financialindependence/)  
168. r/personalfinance Wiki: Young Adult Financial Guide \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/personalfinance/wiki/young\_adult/](https://www.reddit.com/r/personalfinance/wiki/young_adult/)  
169. TradingView Telegram Webhook Alert \[TradingFinder\] No Extra Code, 访问时间为 六月 25, 2025， [https://www.tradingview.com/chart/BTCUSD/cMkkbrlp-TradingView-Telegram-Webhook-Alert-TradingFinder-No-Extra-Code/](https://www.tradingview.com/chart/BTCUSD/cMkkbrlp-TradingView-Telegram-Webhook-Alert-TradingFinder-No-Extra-Code/)  
170. Sharing Revenue with Channel Owners \- Telegram, 访问时间为 六月 25, 2025， [https://telegram.org/blog/monetization-for-channels](https://telegram.org/blog/monetization-for-channels)  
171. Telegram Premium FAQ, 访问时间为 六月 25, 2025， [https://telegram.org/faq\_premium](https://telegram.org/faq_premium)  
172. Explore our Dune Dashboards \- 21Shares, 访问时间为 六月 25, 2025， [https://www.21shares.com/en-us/insights/dune-dashboards](https://www.21shares.com/en-us/insights/dune-dashboards)  
173. Dune Analytics: What is it and How Does it Work? \- Gate.com, 访问时间为 六月 25, 2025， [https://www.gate.com/learn/articles/dune-analytics-what-is-it-and-how-does-it-work/1975](https://www.gate.com/learn/articles/dune-analytics-what-is-it-and-how-does-it-work/1975)  
174. Understanding Credits on Dune, 访问时间为 六月 25, 2025， [https://docs.dune.com/learning/how-tos/credit-system-on-dune](https://docs.dune.com/learning/how-tos/credit-system-on-dune)  
175. Compare Dune Dashboard vs. Step Finance in 2025, 访问时间为 六月 25, 2025， [https://slashdot.org/software/comparison/Dune-Analytics-vs-Step-Finance/](https://slashdot.org/software/comparison/Dune-Analytics-vs-Step-Finance/)  
176. Dune Analytics: Freeing Bandwidth & Money to Level Up \- QuickNode Blog, 访问时间为 六月 25, 2025， [https://blog.quicknode.com/dune-analytics-quiknode/](https://blog.quicknode.com/dune-analytics-quiknode/)  
177. How To Create A Dune Analytics Dashboard – JamesBachini.com, 访问时间为 六月 25, 2025， [https://jamesbachini.com/dune-analytics-tutorial/](https://jamesbachini.com/dune-analytics-tutorial/)  
178. Third-party data | Acxiom, 访问时间为 六月 25, 2025， [https://www.acxiom.com/third-party-data/](https://www.acxiom.com/third-party-data/)  
179. FE Analytics | Navigating Complexity with Confidence \- FE fundinfo, 访问时间为 六月 25, 2025， [https://www.fefundinfo.com/products/financial-advisers/fe-analytics](https://www.fefundinfo.com/products/financial-advisers/fe-analytics)  
180. Orbis \- BvD is now Moody's, 访问时间为 六月 25, 2025， [https://www.moodys.com/web/en/us/capabilities/company-reference-data/orbis.html](https://www.moodys.com/web/en/us/capabilities/company-reference-data/orbis.html)  
181. Network Analysis and Visibility for Financial Services \- ExtraHop, 访问时间为 六月 25, 2025， [https://www.extrahop.com/solutions/industry/financial](https://www.extrahop.com/solutions/industry/financial)  
182. FinservDEEP™: Financial Services Advanced Analytics Platform | Deloitte US, 访问时间为 六月 25, 2025， [https://www2.deloitte.com/us/en/pages/consulting/topics/financial-services-advanced-analytics-platform.html](https://www2.deloitte.com/us/en/pages/consulting/topics/financial-services-advanced-analytics-platform.html)  
183. Evaluating Risk in DeFi \- DL News, 访问时间为 六月 25, 2025， [https://assets.dlnews.com/dlresearch/DL\_Research\_Report\_Evaluating\_Risk\_in\_DeFi.pdf](https://assets.dlnews.com/dlresearch/DL_Research_Report_Evaluating_Risk_in_DeFi.pdf)  
184. Tarot (TAROT) Price \- Live Chart, Index, Market Cap | CoinPaprika, 访问时间为 六月 25, 2025， [https://coinpaprika.com/coin/tarot-tarot/](https://coinpaprika.com/coin/tarot-tarot/)  
185. A Quick Guide to Yield Farming in Decentralized Finance \- Kairon Labs, 访问时间为 六月 25, 2025， [https://kaironlabs.com/blog/a-quick-guide-to-yield-farming-in-decentralized-finance](https://kaironlabs.com/blog/a-quick-guide-to-yield-farming-in-decentralized-finance)  
186. What Is Velodrome (VELO)? Features and Tokenomics \- CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/academy/article/what-is-velodrome-velo-features-and-tokenomics](https://coinmarketcap.com/academy/article/what-is-velodrome-velo-features-and-tokenomics)  
187. Subtles nuances with great consequences: a cross analysis of Curve and Velodrome, 访问时间为 六月 25, 2025， [https://tokenbrice.xyz/crv-vs-velo/](https://tokenbrice.xyz/crv-vs-velo/)  
188. Aerodrome's innovative mechanism: 100% return to token holders | MarsBit News on Binance Square, 访问时间为 六月 25, 2025， [https://www.binance.com/en/square/post/11945873620778](https://www.binance.com/en/square/post/11945873620778)  
189. A Deep Dive into Chronos Finance, 访问时间为 六月 25, 2025， [https://blog.impossible.finance/chronos-deep-dive/](https://blog.impossible.finance/chronos-deep-dive/)  
190. ve(3,3): A New Tokenomics Model Transforming DeFi \- Stader Labs, 访问时间为 六月 25, 2025， [https://www.staderlabs.com/blogs/ve-3-3-a-new-tokenomics-model-transforming-defi/](https://www.staderlabs.com/blogs/ve-3-3-a-new-tokenomics-model-transforming-defi/)  
191. What are veTokens and Understanding veTokenomics \- CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/learn/vetokens-and-vetokenomics](https://www.coingecko.com/learn/vetokens-and-vetokenomics)  
192. What is Aerodrome Finance? – Help Center \- Bitso, 访问时间为 六月 25, 2025， [https://support.bitso.com/hc/en-us/articles/37283670925460-What-is-Aerodrome-Finance](https://support.bitso.com/hc/en-us/articles/37283670925460-What-is-Aerodrome-Finance)  
193. Aerodrome Finance (AERO) Price, Live Chart and Data \- KuCoin, 访问时间为 六月 25, 2025， [https://www.kucoin.com/price/AERO](https://www.kucoin.com/price/AERO)  
194. What Is Aerodrome? L2 Base's Liquidity Hub \- CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/academy/article/what-is-aerodrome](https://coinmarketcap.com/academy/article/what-is-aerodrome)  
195. Aerodrome Finance Ecosystem Review | Learn SimpleSwap, 访问时间为 六月 25, 2025， [https://simpleswap.io/learn/analytics/projects/aerodrome-finance-ecosystem-review](https://simpleswap.io/learn/analytics/projects/aerodrome-finance-ecosystem-review)  
196. Vyper contracts used in Curve.fi exchange pools. \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/curvefi/curve-contract](https://github.com/curvefi/curve-contract)  
197. sparkdotfi/sparklend-deployments \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/sparkdotfi/sparklend-deployments](https://github.com/sparkdotfi/sparklend-deployments)  
198. Deployment guide and scripts for a Shareslake stake pool \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/shareslake/pool-deployment](https://github.com/shareslake/pool-deployment)  
199. curvefi/stableswap-ng: Automatic Market Maker (AMM) for 2 or more pegged assets, written in Vyper. \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/curvefi/stableswap-ng](https://github.com/curvefi/stableswap-ng)  
200. curve-contract/scripts/deploy.py at master \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/curvefi/curve-contract/blob/master/scripts/deploy.py](https://github.com/curvefi/curve-contract/blob/master/scripts/deploy.py)  
201. Polkadot Staking Dashboard (Nomination Pool), 访问时间为 六月 25, 2025， [https://wiki.polkadot.network/general/dashboards/dune-analytics/polkadot-dashboards/legacy/polkadot-staking-dashboard-nomination-pool/](https://wiki.polkadot.network/general/dashboards/dune-analytics/polkadot-dashboards/legacy/polkadot-staking-dashboard-nomination-pool/)  
202. TON on-chain data analysis: quickstart on Dune, 访问时间为 六月 25, 2025， [https://blog.ton.org/ton-on-chain-data-analysis-dune](https://blog.ton.org/ton-on-chain-data-analysis-dune)  
203. AI-Powered Dune Analytics Clone for Cardano: Open-Source Toolkit for Custom Real-Time On-Chain & DeFi Dashboards \- Lido Nation, 访问时间为 六月 25, 2025， [https://www.lidonation.com/zh/proposals/ai-powered-dune-analytics-clone-for-cardano-open-source-toolkit-for-custom-real-time-on-chain-defi-dashboards-f13](https://www.lidonation.com/zh/proposals/ai-powered-dune-analytics-clone-for-cardano-open-source-toolkit-for-custom-real-time-on-chain-defi-dashboards-f13)  
204. Uniswap v3 on-chain analytics risk dashboard with Dune \- YouTube, 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=HGyUQKGCqTQ](https://www.youtube.com/watch?v=HGyUQKGCqTQ)  
205. 13 Notorious Examples of Strategic Planning Failure \- AchieveIt, 访问时间为 六月 25, 2025， [https://www.achieveit.com/resources/blog/13-notorious-examples-of-strategic-planning-failure/](https://www.achieveit.com/resources/blog/13-notorious-examples-of-strategic-planning-failure/)  
206. 35 Famous Innovation Failures \- And What You Can Learn From Them \- Braineet, 访问时间为 六月 25, 2025， [https://www.braineet.com/blog/innovation-failures](https://www.braineet.com/blog/innovation-failures)  
207. Building Failure Cases \- William States Lee College of Engineering, 访问时间为 六月 25, 2025， [https://engr.charlotte.edu/asce-failure-case-studies/building-failure-cases/](https://engr.charlotte.edu/asce-failure-case-studies/building-failure-cases/)  
208. (PDF) Three Case Studies in Tokenomics \- ResearchGate, 访问时间为 六月 25, 2025， [https://www.researchgate.net/publication/329400769\_Three\_Case\_Studies\_in\_Tokenomics](https://www.researchgate.net/publication/329400769_Three_Case_Studies_in_Tokenomics)  
209. Three Case Studies in Tokenomics, 访问时间为 六月 25, 2025， [http://jbba.scholasticahq.com/article/6325-three-case-studies-in-tokenomics.pdf](http://jbba.scholasticahq.com/article/6325-three-case-studies-in-tokenomics.pdf)  
210. Tokenomics & Risk: How Your Digital Asset Structure Could Expose You \- Continuum, 访问时间为 六月 25, 2025， [https://www.continuuminsure.com/guides/tokenomics-risk-how-your-digital-asset-structure-could-expose-you/](https://www.continuuminsure.com/guides/tokenomics-risk-how-your-digital-asset-structure-could-expose-you/)  
211. What Is Vote Escrow? \- CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/academy/article/what-is-vote-escrow](https://coinmarketcap.com/academy/article/what-is-vote-escrow)  
212. Aerodrome Finance price today, AERO to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/currencies/aerodrome-finance/](https://coinmarketcap.com/currencies/aerodrome-finance/)  
213. Aerodrome Finance Surges 15.884% on Base Blockchain Integration and Institutional Interest \- AInvest, 访问时间为 六月 25, 2025， [https://www.ainvest.com/news/aerodrome-finance-surges-15-884-base-blockchain-integration-institutional-interest-2506/](https://www.ainvest.com/news/aerodrome-finance-surges-15-884-base-blockchain-integration-institutional-interest-2506/)  
214. What is the Base DeFi Pass? \- OpenCover, 访问时间为 六月 25, 2025， [https://opencover.com/cover/what-is-the-base-defi-pass/](https://opencover.com/cover/what-is-the-base-defi-pass/)  
215. Aerodrome Finance (AERO) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 六月 25, 2025， [https://www.forbes.com/digital-assets/assets/aerodrome-finance-aero/](https://www.forbes.com/digital-assets/assets/aerodrome-finance-aero/)  
216. The Urban Investment Opportunities of Global Events, 访问时间为 六月 25, 2025， [https://uli.org/wp-content/uploads/ULI-Documents/The-Urban-Investment-Opportunities-of-Global-Events-August-2010.pdf](https://uli.org/wp-content/uploads/ULI-Documents/The-Urban-Investment-Opportunities-of-Global-Events-August-2010.pdf)  
217. baseline and counterfactual \- GOV.UK, 访问时间为 六月 25, 2025， [https://assets.publishing.service.gov.uk/media/5a74c9c740f0b61df4778803/Meta\_Evaluation\_Summary\_Report\_3\_FINAL.docx](https://assets.publishing.service.gov.uk/media/5a74c9c740f0b61df4778803/Meta_Evaluation_Summary_Report_3_FINAL.docx)  
218. council implementing decision \- EUR-Lex, 访问时间为 六月 25, 2025， [https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52023PC0749](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52023PC0749)  
219. Partnerships for World Heritage Cities \- Culture as a Vector for Sustainable Urban Development, 访问时间为 六月 25, 2025， [https://whc.unesco.org/document/4621](https://whc.unesco.org/document/4621)  
220. Implementation of JESSICA-type Financial Instruments to support urban development in the Provence-Alpes-Côte d'Azur region \- European Investment Bank, 访问时间为 六月 25, 2025， [https://www.eib.org/attachments/documents/jessica\_evaluation\_study\_provence\_alpes\_cote\_dazur\_region\_en.pdf](https://www.eib.org/attachments/documents/jessica_evaluation_study_provence_alpes_cote_dazur_region_en.pdf)  
221. Dune Analytics: The Community-Powered Analytics Platform for Solana, 访问时间为 六月 25, 2025， [https://solanacompass.com/projects/dune](https://solanacompass.com/projects/dune)  
222. 访问时间为 一月 1, 1970， httpshttps://app.extrafi.io/  
223. 访问时间为 一月 1, 1970， httpshttps://docs.extrafi.io/  
224. Trending | Content, 访问时间为 六月 25, 2025， [https://dune.com/browse/dashboards](https://dune.com/browse/dashboards)  
225. 访问时间为 一月 1, 1970， [https://dune.com/search?q=Extra+Finance](https://dune.com/search?q=Extra+Finance)