

# **Jupiter Lend/Earn 协议投资评估报告**

**免责声明：** 本报告仅供参考，不构成任何财务建议。加密货币市场波动性极高，所有投资决策均应谨慎，并基于独立的尽职调查。需要特别指出的是，研究资料中包含了多个名为“Jupiter”的无关实体。本分析报告仅针对 Solana 区块链上的 Jupiter 协议，其官方网站为 jup.ag 1。

---

## **执行摘要**

### **协议概述**

Jupiter Lend 是构建于 Solana 区块链上的一个新型去中心化货币市场，由该生态系统内占据主导地位的去中心化交易所（DEX）聚合器 Jupiter 推出。其核心差异化特征在于提供高达 95% 的贷款价值比（Loan-to-Value, LTV），并采用由技术合作伙伴 Fluid 提供的、基于隔离风险金库的创新清算引擎 1。

### **核心发现**

本报告的核心论点是：Jupiter Lend 是一次具备高度战略前瞻性的垂直业务扩张，旨在利用其庞大的现有用户基础。然而，其激进的资本效率模型引入了未经市场极端压力测试的重大风险，并且其在安全性方面的透明度目前尚未达到同等规模协议应有的标准。JUP 代币的价值主张在很大程度上依赖于 Lend 协议的成功，以对抗其代币经济模型中显著的通胀压力。

### **最终投资评级**

最终评级为 **中性，展望谨慎乐观，评级上调取决于公开审计报告的发布**。此评级基于对该协议战略定位、创新潜力与当前重大风险之间平衡的综合评估。

---

## **第一部分：Jupiter 生态系统：Solana 的流动性引擎**

### **1.1 市场主导地位：一个战略性的发射平台**

Jupiter 并非从零开始构建其借贷业务，而是站在其作为 Solana DeFi 基石的坚实基础之上。该协议已稳固占据 Solana 生态系统内超过 80% 的零售流动性市场份额和 95% 的 DEX 聚合器交易量 2。其累计处理的交易总额已超过 2 万亿美元，这充分证明了其作为核心基础设施的规模与可靠性 1。

根据 DefiLlama 的数据，Jupiter 的核心业务指标极为强劲：近 30 天内，其 DEX 聚合器交易量达到 242 亿美元，永续合约交易量达到 243 亿美元，并在此期间产生了 1.1 亿美元的平台费用和 2700 万美元的协议收入 4。这些数据清晰地勾勒出一个拥有海量金融活动和庞大用户基础的平台，为 Jupiter Lend 的启动提供了无与伦比的优势。

### **1.2 从聚合器到垂直整合的“DeFi 超级应用”**

Jupiter Lend 的推出，并非仅仅是增加一个孤立的产品，而是 Jupiter 从一个领先的交易聚合器向全栈式 DeFi 平台演进的关键一步。其产品矩阵现已涵盖永续合约、移动端应用，以及最新的借贷服务，构成了其宏大战略的一部分 1。

正如其创始人 Meow 的愿景和核心贡献者 Kash Dhanda 所言，“流动性孕育流动性”（Liquidity begets liquidity），这精准地概括了 Jupiter 的战略意图：利用其在交易领域的绝对优势，自然地将流动性和用户引导至新的借贷市场 2。

这种生态系统扩张是一种攻防兼备的战略举措。从进攻层面看，它构建了一个“粘性”生态系统，用户可以在一个统一且受信任的界面内完成从交易、出借、借款到杠杆操作的完整 DeFi 工作流程。从防守层面看，它有效防止了价值外流。过去，用户在 Jupiter 完成交易后，往往需要将资产转移至 Kamino 或 MarginFi 等竞争对手的平台进行借贷操作 7。通过推出 Lend，Jupiter 成功地捕获了整个 DeFi 价值链，将用户和资产锁定在自身生态系统内。这不仅提升了用户留存率和生态系统的总锁仓价值（TVL），还为协议创造了新的费用收入来源，这些收入最终有望反哺 JUP 代币持有者 4。这一战略构建了强大的竞争护城河，使得独立的借贷协议更难吸引已被 Jupiter 生态深度绑定的用户。

---

## **第二部分：协议深度解析：Jupiter Lend 的运行机制**

### **2.1 技术架构：一种由合作驱动的创新模型**

Jupiter Lend 的核心架构是与 Fluid 协议（一个源于以太坊的成熟流动性层）深度合作的产物。Fluid 为 Jupiter Lend 提供了底层的清算引擎和模块化流动性框架，这表明该协议在关键技术上依赖于外部合作伙伴，尽管该伙伴的技术已在其他生态系统中得到验证 1。

协议采用了“隔离金库”（Isolated Vaults）系统。每个借贷头寸的风险都被严格分离，这意味着单一资产市场的危机（例如，某种稳定币脱锚）不会引发系统性的连锁反应，从而保护整个协议免受局部风险的冲击 1。这是一个至关重要的风险控制设计。

### **2.2 高 LTV 主张：游走在边缘的资本效率**

Jupiter Lend 最引人注目的特性是其高达 95% 的贷款价值比（LTV），这远超 Aave 等行业巨头普遍提供的 75%-80% 的标准 1。协议声称，这种激进的 LTV 是通过其专有的清算引擎实现的，该引擎能够在单笔交易中处理所有符合条件的清算头寸，从而降低系统性风险和坏账产生的可能性 1。

对于借款人而言，这意味着可以用同等价值的抵押品获得显著更多的流动性，从而能够执行更积极、资本效率更高的投资策略 1。

### **2.3 经济模型：费用、收益与清算机制**

协议的费用结构极具竞争力，预期交易费用低至约 0.1%，清算罚金仅为 1%，远低于行业普遍的 5%-15% 的水平 2。

对于贷方（即 Earn 用户），协议提供了“一键式金库”（one-click vaults），能够自动优化收益，极大地简化了用户赚取被动利息的过程 1。为了引导初始流动性和用户参与，Jupiter Lend 在其超过 40 个初始金库中启动了总额达 200 万美元的激励计划，资金由 Jupiter、Fluid 及其他生态伙伴共同提供 15。

然而，这种超高效率模型是一把双刃剑。95% LTV 与 1% 清算罚金的组合，既是强大的市场营销工具，也是资本效率的真正创新，但它也极大地压缩了协议的容错空间。该模型能否成功，完全取决于其预言机（Pyth Network）和 Fluid 清算引擎在市场极端波动及 Solana 网络拥堵期间能否近乎完美地运行。传统的借贷协议通过较低的 LTV 和较高的清算罚金来构建缓冲垫，以保护贷方在价格暴跌时免受损失，并激励第三方清算人介入。Jupiter Lend 将这一缓冲垫缩减至几乎为零。95% 的 LTV 意味着抵押品价值仅需下跌约 5.2%，就可能触发清算。在市场崩盘期间，Solana 网络的拥堵可能导致 Pyth 预言机的价格更新延迟或清算交易无法及时执行。一旦清算引擎无法在抵押品价值跌破借款金额前迅速完成出售，协议将产生坏账。同时，仅 1% 的低罚金，在市场混乱、风险极高的情况下，可能不足以吸引第三方清算人，这可能迫使协议自身承担清算任务，从而引入了中心化和操作风险。因此，尽管该模型在市场稳定时极具吸引力，但在黑天鹅事件中，它将风险高度集中于其底层技术的无瑕疵表现。

---

## **第三部分：JUP 代币经济学与价值捕获**

### **3.1 代币分配与解锁计划**

JUP 代币的总供应量为 100 亿枚，其中 50% 分配给团队和战略储备，另外 50% 分配给社区 3。社区部分具体包括：40% 用于空投（分四轮进行），10% 用于流动性供应。团队部分则包括：20% 分配给团队成员，20% 作为战略储备 3。

对投资者而言，解锁计划是评估长期价格压力的关键。团队持有的 20% 代币遵循为期 1 年的锁仓期和随后的 2 年线性解锁 3。战略储备则至少锁定一年。这意味着在未来数年内，JUP 代币将面临可预见的、持续且显著的通胀压力。代币解锁监测数据显示，定期的代币释放（例如 8 月 28 日解锁 5347 万枚 JUP）可能会对市场造成短期抛压 13。

### **3.2 当前效用：暂停中的治理**

JUP 代币的核心设计用途是作为 Jupiter DAO 的治理代币，赋予持有者对协议关键决策的投票权 3。然而，近期团队做出了一项重大决定：暂停 DAO 投票直至至少 2026 年初，理由是需要集中精力进行产品开发，并解决社区治理中出现的负面沟通循环问题 22。这一举措暂时剥离了 JUP 的主要效用。

尽管治理暂停，但来源于平台费用的“活跃质押奖励”（Active Staking Rewards, ASR）将继续发放，为质押者提供收益 3。

### **3.3 通过 Jupiter Lend 实现未来价值捕获**

Jupiter Lend 的推出旨在从根本上增强 JUP 的效用。协议在上线之初便接受 JUP 作为抵押品以借出 USDC，这直接创造了对 JUP 的需求 15。

更广泛地看，整个 Jupiter 生态系统已建立将部分平台费用分配给 JUP 持有者/质押者的机制 4。可以预见，Lend 协议产生的费用也将遵循这一模式，为 JUP 代币开辟新的收入来源。未来，协议还可能引入更深度的整合，例如将质押的 JUP 作为优先抵押品，或在 Lend 平台上提供费用折扣，从而进一步巩固其代币价值 6。

JUP 代币正处于一个关键的十字路口。其核心的治理功能被暂时搁置，而供应量却将在未来几年内持续增加。因此，Jupiter Lend 的推出和成功，不仅仅是一次业务扩张，更是维系 JUP 代币长期价值的必要之举。协议能否吸引大规模的 TVL 并产生可观的费用反哺 JUP，是唯一能够有效对抗解锁所带来的巨大抛压的力量。投资 JUP 的逻辑，现在已与投资 Jupiter Lend 的前景直接且不可分割地绑定在一起。如果 Lend 未能从 Kamino 等竞争对手中脱颖而出，那么新增的 JUP 需求将不足以吸收解锁带来的新增供应，可能导致价格持续承压。反之，如果 Lend 取得成功，成为 Solana 上的顶级货币市场，那么新增的需求可能创造一个 TVL、费用和代币价值同步增长的良性循环。

---

## **第四部分：综合风险与安全评估**

### **4.1 智能合约安全与“审计悖论”**

Jupiter 团队在安全方面有良好的历史记录，其 Swap 和永续合约等核心产品均经过了 OtterSec、Sec3 和 Offside Labs 等知名安全公司的审计，这表明团队遵循了标准的尽职调查流程 26。

关于 Jupiter Lend，团队声称“已完成一项全面审计，另有三项审计正在进行中，为公开发布做准备” 1。然而，

**一个重大的警示信号是，截至本报告撰写之时，在所有可公开获取的资料中，均未找到专门针对 Jupiter Lend 智能合约的公开审计报告** 29。这是一个严重的透明度缺失。

同样，其技术合作伙伴 Fluid 虽然为其以太坊协议进行过多次审计并设有漏洞赏金计划，但专门针对其在 Solana 上为 Jupiter Lend 实施的技术方案的审计报告也未公开 31。Code4rena 网站上预告了未来将举行针对 Fluid on Solana 的审计竞赛，这表明相关工作正在进行，但尚未完成 36。

### **4.2 协议与经济风险**

* **坏账风险**：如前所述，高 LTV 模型极大地削弱了协议抵御抵押品价格波动的缓冲能力。在市场剧烈下跌，特别是伴随 Solana 网络拥堵或宕机的情况下，抵押品价值可能迅速跌破借款价值，从而给协议留下坏账 37。  
* **预言机风险**：协议依赖 Pyth Network 提供价格数据 12。尽管 Pyth 是 Solana 生态的领先预言机，但任何价格操纵、数据延迟或服务中断都可能导致不当清算或未能及时清算，从而引发灾难性损失。  
* **清算引擎风险**：整个协议的稳定性都建立在创新的 Fluid 清算引擎之上。该关键组件中的任何一个漏洞或可利用的缺陷都可能是毁灭性的。其在 Solana 上的具体实现缺乏公开审计，进一步加剧了这一风险。  
* **Solana 网络风险**：协议的运行完全依赖于 Solana 区块链。Solana 过去曾多次出现性能下降和网络中断的情况 37。在高波动性市场期间发生网络中断，将是对清算引擎的终极压力测试，其后果可能是致命的。

### **4.3 团队与治理风险**

* **关键人物风险**：创始人 Meow 为化名身份，对项目方向拥有巨大影响力 38。这带来了典型的关键人物风险和传统问责机制的缺失。他近期公开表达的挫败感也凸显了这种中心化影响力所带来的压力 40。  
* **治理中心化**：DAO 投票的暂停将战略决策权高度集中于核心团队手中 23。这与去中心化原则相悖，可能会疏远那些重视分布式治理的社区成员和投资者，并引发关于在战略失误时问责机制的疑问。

---

## **第五部分：竞争格局与社区脉搏**

### **5.1 Solana 市场定位：直面现有巨头**

Jupiter Lend 进入的是一个已经存在成熟竞争者的市场，其主要对手包括 Kamino Finance、MarginFi 和 Save（前身为 Solend） 7。

* **Kamino Finance**：作为当前的市场领导者，Kamino 凭借其超过 15 亿美元的 TVL、卓越的用户体验和深入的社区合作，成为 Jupiter Lend 必须挑战的主导力量 8。  
* **MarginFi & Save (Solend)**：这两个协议虽然历史悠久，但近期都面临挑战。MarginFi 因空投延迟和团队内部纠纷而受到社区批评，而 Solend 则因 FTX 崩溃导致的坏账和一次黑客攻击事件而损害了用户信任 8。

为了更直观地展示竞争格局，下表对主要协议进行了对比：

**Solana 借贷协议竞争分析**

| 协议 | TVL (DefiLlama) | 最高 LTV (稳定币/SOL) | 清算罚金 | 核心差异化优势 | 代币空投状态 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Jupiter Lend** | $1.61 亿 43 | 高达 95% 1 | 1% 14 | 极高的资本效率，与 Jupiter 生态深度整合 | 已完成 (JUP) |
| **Kamino Finance** | $36 亿 44 | \~75% (SOL), 90% (稳定币) 44 | 5% \- 15% | 市场领导者，强大的流动性策略和用户体验 | 已完成 (KMNO) |
| **MarginFi** | $2.9 亿 7 | 未明确，行业标准 | 行业标准 | 创新的积分系统，LST 收益策略 | 已完成 (MRGN) |
| **Save (Solend)** | $6 亿 8 | 行业标准 | 行业标准 | Solana 最早的借贷协议之一，支持资产种类多 | 已完成 (SLND) |

### **5.2 社交媒体与社区情绪**

* **整体情绪**：得益于 Jupiter 在 Solana 生态中建立的强大品牌声誉，Jupiter Lend 的发布在社区中引发了极大的兴奋和看涨情绪 16。官方的发布推文获得了广泛的积极互动。  
* **KOL 观点**：DeFi 领域的核心意见领袖和教育者（如 DeFi Dad）已经制作了深度分析内容，将 Jupiter 与 Fluid 的合作定位为连接以太坊和 Solana 专业知识的“DeFi 造王者”联盟，这为项目增添了可信度 47。  
* **潜在担忧**：尽管整体情绪积极，但在更广泛的 Jupiter 社区中，关于代币经济学、大户钱包的影响力以及近期 DAO 的暂停等问题仍然存在 23。这些问题构成了持续存在的潜在摩擦点。

---

## **第六部分：投资机会与高级策略**

### **6.1 投资途径：比较分析**

投资者可以通过多种方式参与 Jupiter Lend 生态，每种方式的风险收益特征各不相同。下表对此进行了详细比较：

**Jupiter 投资策略比较**

| 策略 | 描述 | 潜在回报 (APR/APY) | 相关风险 | 复杂度 |
| :---- | :---- | :---- | :---- | :---- |
| **持有 JUP 代币** | 直接在二级市场购买并持有 JUP 治理代币。 | 市场价格升值。 | 高波动性、代币解锁抛压、治理风险。 | 低 |
| **质押 JUP** | 锁定 JUP 以获取治理权和质押奖励（ASR）。 | 质押奖励（来源于平台费用）3。 | 智能合约风险、机会成本、价格波动。 | 低 |
| **出借资产 (Earn)** | 将 USDC、SOL、JupSOL 等资产存入金库赚取利息。 | 浮动借贷年化收益率（APY）51。 | 智能合约风险、坏账风险（由隔离金库缓解）。 | 低 |
| **杠杆循环借贷** | 反复以存入的抵押品进行借款，以放大收益。 | 放大的借贷 APY 和抵押品原生收益。 | 极高的清算风险、智能合约风险、利率波动风险。 | 高 |
| **生态系统交互** | 早期参与协议交互，以期获得未来可能的空投或激励。 | 投机性（未来激励价值不确定）。 | 无保证回报、资金的机会成本。 | 中 |

### **6.2 高收益策略深度解析：杠杆循环借贷**

Jupiter Lend 的高 LTV 设计为一种被称为“杠杆循环”（Leveraged Looping）或“折叠”（Folding）的高级策略创造了理想条件。该策略旨在通过杠杆放大基础资产的收益。

**策略示例：**

1. **存入抵押品**：将价值 1,000 美元的 JupSOL（一种生息的 SOL 流动性质押代币）存入 Jupiter Lend。  
2. **借款**：以 95% 的 LTV 借出价值 950 美元的 USDC。  
3. **兑换**：立即使用 Jupiter Swap 将 950 美元的 USDC 兑换回 JupSOL。  
4. **再次存入**：将新获得的 JupSOL 再次存入借贷金库，增加总抵押品价值。  
5. **重复**：重复步骤 2-4，循环多次，直到达到期望的杠杆倍数。

通过此操作，投资者可以建立一个远超其初始资本的 JupSOL 头寸，从而显著放大 JupSOL 的质押收益和协议可能提供的任何额外激励。协议计划推出的“Multiply Vaults”功能旨在将此复杂过程简化为一键操作 1。

**风险警示**：此策略极大地放大了清算风险。JupSOL 价格的微小下跌都可能导致整个杠杆头寸被清算。同时，策略的盈利能力对 JupSOL 和 USDC 之间的借贷利率差额高度敏感。

### **6.3 开发者机遇**

Jupiter 团队明确表示，Lend 协议在设计时充分考虑了“完全可组合性”，并积极邀请开发者在其架构之上构建新的应用 1。Jupiter 已经为其 Swap 等产品提供了全面的 API 和 SDK 套件 30。

尽管目前 Lend 的专用 API 文档尚不可用 56，但可以预期在公测后会发布。这为开发者创造了机会，可以构建自动化收益策略、结构化产品，或将 Jupiter 的借贷功能集成到其他 DApp 中，并有可能从 Jupiter 生态系统获得费用分成或开发补助。

---

## **第七部分：最终结论与投资建议**

### **7.1 综合 SWOT 分析**

* **优势 (Strengths)**：  
  * 在 Solana 上拥有无与伦比的用户基础和品牌信任度。  
  * 创新的高资本效率模型，对用户极具吸引力。  
  * 拥有强大的技术合作伙伴 (Fluid)。  
  * 清晰的生态系统整合战略愿景。  
* **劣势 (Weaknesses)**：  
  * 清算引擎在极端市场压力下的表现未经证实。  
  * Lend 协议缺乏公开的、可供审查的安全审计报告。  
  * 中心化的治理结构（DAO 暂停）。  
  * JUP 代币面临巨大的通胀压力。  
* **机会 (Opportunities)**：  
  * 从实力减弱的竞争对手手中夺取 Solana 借贷市场的巨大份额。  
  * 为 JUP 代币创造强大的新效用和价值捕获机制。  
  * 成为 Solana 上占主导地位的一站式 DeFi 中心。  
* **威胁 (Threats)**：  
  * 黑天鹅市场事件引发连锁清算和大规模坏账。  
  * 出现严重的智能合约漏洞。  
  * 新增的代币效用未能跑赢其通胀速度。  
  * Solana 网络持续的不稳定性。

### **7.2 投资评级与理由**

本报告的最终投资评级为：**中性，展望谨慎乐观（Neutral, with a Cautious-to-Bullish Outlook）**。

**评级理由**：Jupiter Lend 代表了一次卓越的战略部署，旨在巩固 Jupiter 在 Solana 生态中的霸主地位，并有潜力为生态系统和 JUP 代币创造巨大价值。该协议创新的高 LTV 模型是吸引资本和高级用户的强大磁石。

然而，此评级受到一个重大保留条件的制约：**目前，专门针对 Lend 协议的安全审计报告缺乏透明度，这是不可接受的**。在没有这份关键的尽职调查文件的情况下，无法全面评估其超高效率但可能脆弱的经济模型所带来的风险。

因此，现阶段的投资是一场高风险、高回报的博弈，赌注押在核心团队的执行能力和其未经公开审计的技术的完美表现上。**一旦多份来自信誉良好公司的全面安全审计报告被公开发布并通过审查，本评级将被重新评估，并有可能上调至“建议”（Recommend）**。

#### **引用的著作**

1. Jupiter Exchange Launches Jupiter Lend Private Beta, Redefining DeFi Lending on Solana, 访问时间为 八月 28, 2025， [https://www.epicos.com/article/965049/jupiter-exchange-launches-jupiter-lend-private-beta-redefining-defi-lending-solana](https://www.epicos.com/article/965049/jupiter-exchange-launches-jupiter-lend-private-beta-redefining-defi-lending-solana)  
2. 'Liquidity begets liquidity': Solana DEX aggregator Jupiter unveils a new lending protocol, 访问时间为 八月 28, 2025， [https://www.theblock.co/post/355466/liquidity-begets-liquidity-solana-dex-aggregator-jupiter-unveils-a-new-lending-protocol](https://www.theblock.co/post/355466/liquidity-begets-liquidity-solana-dex-aggregator-jupiter-unveils-a-new-lending-protocol)  
3. Jupiter (JUP) Tokenomics: Market Insights, Token Supply, Distribution & Price Data | MEXC, 访问时间为 八月 28, 2025， [https://www.mexc.com/en-GB/price/JUP/tokenomics](https://www.mexc.com/en-GB/price/JUP/tokenomics)  
4. Jupiter (JUP) \- DefiLlama, 访问时间为 八月 28, 2025， [https://defillama.com/protocol/jupiter](https://defillama.com/protocol/jupiter)  
5. Jupiter Lend readies for public beta launch this week \- Blockworks, 访问时间为 八月 28, 2025， [https://blockworks.co/news/jupiter-lend-beta-launch](https://blockworks.co/news/jupiter-lend-beta-launch)  
6. Jupiter Price Prediction 2025: Will JUP Rise Again? \- Coincub, 访问时间为 八月 28, 2025， [https://coincub.com/jupiter-price-prediction/](https://coincub.com/jupiter-price-prediction/)  
7. Solana Interest Rates: Top SOL Lending Rates for 2025 \- Milk Road, 访问时间为 八月 28, 2025， [https://milkroad.com/lend/sol/](https://milkroad.com/lend/sol/)  
8. Kamino ($KMNO) — Still Very Early \- RockawayX, 访问时间为 八月 28, 2025， [https://www.rockawayx.com/insights/kamino-kmno----still-very-early](https://www.rockawayx.com/insights/kamino-kmno----still-very-early)  
9. Jupiter about | Token Terminal, 访问时间为 八月 28, 2025， [https://tokenterminal.com/explorer/projects/jupiter/about](https://tokenterminal.com/explorer/projects/jupiter/about)  
10. Jupiter Lend Revolutionizes DeFi Lending with High LTV Ratios and Tokenized Stocks Integration | OKX TR, 访问时间为 八月 28, 2025， [https://tr.okx.com/en/learn/jupiter-lend-defi-ltv-tokenized-stocks](https://tr.okx.com/en/learn/jupiter-lend-defi-ltv-tokenized-stocks)  
11. Jupiter Exchange Launches Jupiter Lend Private Beta, Redefining DeFi Lending on Solana \- PR Newswire, 访问时间为 八月 28, 2025， [https://www.prnewswire.com/news-releases/jupiter-exchange-launches-jupiter-lend-private-beta-redefining-defi-lending-on-solana-302532217.html](https://www.prnewswire.com/news-releases/jupiter-exchange-launches-jupiter-lend-private-beta-redefining-defi-lending-on-solana-302532217.html)  
12. Jupiter DEX to Compete with Aave: Time for JUP Crypto to Fly?, 访问时间为 八月 28, 2025， [https://99bitcoins.com/news/presales/jupiter-dex-to-compete-with-aave-time-for-jup-crypto-to-fly/](https://99bitcoins.com/news/presales/jupiter-dex-to-compete-with-aave-time-for-jup-crypto-to-fly/)  
13. Latest Jupiter (JUP) Price Analysis \- CoinMarketCap, 访问时间为 八月 28, 2025， [https://coinmarketcap.com/cmc-ai/jupiter-ag/price-analysis/](https://coinmarketcap.com/cmc-ai/jupiter-ag/price-analysis/)  
14. Jupiter launches private beta for Jupiter Lend | MEXC News, 访问时间为 八月 28, 2025， [https://www.mexc.co/en-IN/news/63896](https://www.mexc.co/en-IN/news/63896)  
15. Jupiter Lend Beta Launches with $2M Rewards, JUP Token Rises 6.99% \- KuCoin, 访问时间为 八月 28, 2025， [https://www.kucoin.com/news/flash/jupiter-lend-beta-launches-with-2m-rewards-jup-token-rises-6-99](https://www.kucoin.com/news/flash/jupiter-lend-beta-launches-with-2m-rewards-jup-token-rises-6-99)  
16. JUP rallies as Jupiter adds lending service with 40 vaults \- Cryptopolitan, 访问时间为 八月 28, 2025， [https://www.cryptopolitan.com/jup-rallies-as-jupiter-adds-lending-service/](https://www.cryptopolitan.com/jup-rallies-as-jupiter-adds-lending-service/)  
17. Understanding Jupiter's tokenomics ahead of its first airdrop \- Blockworks, 访问时间为 八月 28, 2025， [https://blockworks.co/news/jupiter-airdrop-tokenomics](https://blockworks.co/news/jupiter-airdrop-tokenomics)  
18. What Is Jupiter (JUP) And How Does It Work? \- CoinMarketCap, 访问时间为 八月 28, 2025， [https://coinmarketcap.com/cmc-ai/jupiter-ag/what-is/](https://coinmarketcap.com/cmc-ai/jupiter-ag/what-is/)  
19. Jupiter (JUP) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 八月 28, 2025， [https://tokenomist.ai/jupiter-exchange-solana](https://tokenomist.ai/jupiter-exchange-solana)  
20. Token Unlocks | Track The Most Updated Data and Complete Vesting Schedules, 访问时间为 八月 28, 2025， [https://tokenomist.ai/](https://tokenomist.ai/)  
21. JUP Tokenomics \- Gate.com, 访问时间为 八月 28, 2025， [https://www.gate.com/learn/course/solana-ecosystem-jupiter-jup/jup-tokenomics](https://www.gate.com/learn/course/solana-ecosystem-jupiter-jup/jup-tokenomics)  
22. Jupiter overview \- Token Terminal, 访问时间为 八月 28, 2025， [https://tokenterminal.com/explorer/projects/jupiter](https://tokenterminal.com/explorer/projects/jupiter)  
23. U.S. Crypto Strategy, ETF Reform & Base Chain Surge | Galaxy, 访问时间为 八月 28, 2025， [https://www.galaxy.com/insights/research/weekly-top-stories-6-27-25](https://www.galaxy.com/insights/research/weekly-top-stories-6-27-25)  
24. Jupiter's $616M Solana Airdrop: The 2025 JUP Token Guide \- KuCoin, 访问时间为 八月 28, 2025， [https://www.kucoin.com/news/articles/jupiter-s-616m-solana-airdrop-the-2025-jup-token-guide](https://www.kucoin.com/news/articles/jupiter-s-616m-solana-airdrop-the-2025-jup-token-guide)  
25. Jupiter Lend debuts with 40 vaults and stablecoin support \- Mitrade, 访问时间为 八月 28, 2025， [https://www.mitrade.com/insights/news/live-news/article-3-1073536-20250827](https://www.mitrade.com/insights/news/live-news/article-3-1073536-20250827)  
26. Smart Contracts Security Audits \- Jupiter Developer Docs, 访问时间为 八月 28, 2025， [https://dev.jup.ag/docs/old/additional-topics/audits](https://dev.jup.ag/docs/old/additional-topics/audits)  
27. Jupiter Perp Audit, 访问时间为 八月 28, 2025， [https://dev.jup.ag/assets/files/ottersec\_perpetual\_audit\_report-573977253c463e70541dda93ac533d0b.pdf](https://dev.jup.ag/assets/files/ottersec_perpetual_audit_report-573977253c463e70541dda93ac533d0b.pdf)  
28. Jupiter Exchange Launches Jupiter Lend Private Beta, Redefining DeFi Lending on Solana, 访问时间为 八月 28, 2025， [https://www.morningstar.com/news/pr-newswire/20250818ph53427/jupiter-exchange-launches-jupiter-lend-private-beta-redefining-defi-lending-on-solana](https://www.morningstar.com/news/pr-newswire/20250818ph53427/jupiter-exchange-launches-jupiter-lend-private-beta-redefining-defi-lending-on-solana)  
29. Lend | Jupiter, 访问时间为 八月 28, 2025， [https://jup.ag/lend/earn](https://jup.ag/lend/earn)  
30. Jupiter Developer Docs, 访问时间为 八月 28, 2025， [https://dev.jup.ag/](https://dev.jup.ag/)  
31. Cardano Strengthens Security Reputation as FluidTokens Shares Full Audit \- CoinCentral, 访问时间为 八月 28, 2025， [https://coincentral.com/cardano-strengthens-security-reputation-as-fluidtokens-shares-full-audit/](https://coincentral.com/cardano-strengthens-security-reputation-as-fluidtokens-shares-full-audit/)  
32. Security & Bug Bounties | Superfluid | Stream Money Every Second, 访问时间为 八月 28, 2025， [https://docs.superfluid.finance/docs/protocol/contribute/bug-bounties](https://docs.superfluid.finance/docs/protocol/contribute/bug-bounties)  
33. Latest Fluid News \- (FLUID) Future Outlook, Trends & Market Insights \- CoinMarketCap, 访问时间为 八月 28, 2025， [https://coinmarketcap.com/cmc-ai/instadapp/latest-updates/](https://coinmarketcap.com/cmc-ai/instadapp/latest-updates/)  
34. FLUID: Instadapp's Multi-Chain DeFi Lending Protocol \- Gate.io, 访问时间为 八月 28, 2025， [https://www.gate.com/learn/articles/fluid-instadapp-s-multi-chain-defi-lending-protocol/7806](https://www.gate.com/learn/articles/fluid-instadapp-s-multi-chain-defi-lending-protocol/7806)  
35. IOP | Fluid Protocol Bug Bounties \- Immunefi, 访问时间为 八月 28, 2025， [https://immunefi.com/audit-competition/iop-fluid-protocol/information/](https://immunefi.com/audit-competition/iop-fluid-protocol/information/)  
36. Audits | Code4rena, 访问时间为 八月 28, 2025， [https://code4rena.com/audits](https://code4rena.com/audits)  
37. Jupiter: Boosting Solana's Liquidity Infrastructure \- Greythorn Asset Management \- Medium, 访问时间为 八月 28, 2025， [https://0xgreythorn.medium.com/jupiter-boosting-solanas-liquidity-infrastructure-25aec1c41a85](https://0xgreythorn.medium.com/jupiter-boosting-solanas-liquidity-infrastructure-25aec1c41a85)  
38. Meow \- People in crypto \- IQ.wiki, 访问时间为 八月 28, 2025， [https://iq.wiki/wiki/meow](https://iq.wiki/wiki/meow)  
39. Jupiter Airdrop and the source of liquidity in Solana with Founder Meow | EP \#111, 访问时间为 八月 28, 2025， [https://www.youtube.com/watch?v=E-L3ERwkVRQ](https://www.youtube.com/watch?v=E-L3ERwkVRQ)  
40. Jupiter co-founder admits 'very very bad mistake' of trying to please community \- Cryptopolitan, 访问时间为 八月 28, 2025， [https://www.cryptopolitan.com/jupiter-co-founder-admits-very-bad-mistake/](https://www.cryptopolitan.com/jupiter-co-founder-admits-very-bad-mistake/)  
41. Jupiter Founder Meow Is Frustrated. Here's Why. \- "The Defiant", 访问时间为 八月 28, 2025， [https://thedefiant.io/news/defi/jupiter-founder-meow-is-frustrated-here-s-why](https://thedefiant.io/news/defi/jupiter-founder-meow-is-frustrated-here-s-why)  
42. Solana DeFi Ecosystem \- List of the Best Solana Projects \- DeFi Prime, 访问时间为 八月 28, 2025， [https://defiprime.com/solana](https://defiprime.com/solana)  
43. Jupiter Lend \- DefiLlama, 访问时间为 八月 28, 2025， [https://defillama.com/protocol/jupiter-lend](https://defillama.com/protocol/jupiter-lend)  
44. Top 10 Crypto Lending Protocols for 2025 \- CoinGecko, 访问时间为 八月 28, 2025， [https://www.coingecko.com/learn/top-crypto-lending-protocols](https://www.coingecko.com/learn/top-crypto-lending-protocols)  
45. Jupiter and Raydium Heat Up: Are Solana Meme Coins Set For a Hot September?, 访问时间为 八月 28, 2025， [https://99bitcoins.com/news/presales/jupiter-and-raydium-heat-up-are-solana-meme-coins-set-for-a-hot-september/](https://99bitcoins.com/news/presales/jupiter-and-raydium-heat-up-are-solana-meme-coins-set-for-a-hot-september/)  
46. Jupiter Price: JUP Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 八月 28, 2025， [https://www.coingecko.com/en/coins/jupiter](https://www.coingecko.com/en/coins/jupiter)  
47. How to Loop Staked ETH with Metronome Smart Farming \- YouTube, 访问时间为 八月 28, 2025， [https://www.youtube.com/watch?v=jPxL8BLOZU4](https://www.youtube.com/watch?v=jPxL8BLOZU4)  
48. How Liquidity Mining Works with Uniswap v3 LPs \- DeFi Talks with DeFi Dad \- YouTube, 访问时间为 八月 28, 2025， [https://www.youtube.com/watch?v=wDL-11QW2RA](https://www.youtube.com/watch?v=wDL-11QW2RA)  
49. io.net: The World's Largest GPU DePIN Built on Solana \- YouTube, 访问时间为 八月 28, 2025， [https://www.youtube.com/watch?v=11zOFwaXkRA](https://www.youtube.com/watch?v=11zOFwaXkRA)  
50. Jupiter Lend and The DeFi Kingmaker Partnership with Fluid \- YouTube, 访问时间为 八月 28, 2025， [https://www.youtube.com/watch?v=mBtVJ\_W1Fzc](https://www.youtube.com/watch?v=mBtVJ_W1Fzc)  
51. How to Lend Jupiter (JUP): A Step-by-Step Guide \- Bitcompare, 访问时间为 八月 28, 2025， [https://bitcompare.net/how-to/lend/jupiter](https://bitcompare.net/how-to/lend/jupiter)  
52. How to Lend Jupiter (JUP) in Indonesia: A Step-by-Step Guide \- Bitcompare, 访问时间为 八月 28, 2025， [https://bitcompare.net/en-id/how-to/lend/jupiter](https://bitcompare.net/en-id/how-to/lend/jupiter)  
53. Jupiter Lend launches public beta with over 40 vaults, $2m incentive | Bitget News, 访问时间为 八月 28, 2025， [https://www.bitget.com/news/detail/12560604934770](https://www.bitget.com/news/detail/12560604934770)  
54. Jupiter Swap \[API Documentation\] | PDF | Computer Programming \- Scribd, 访问时间为 八月 28, 2025， [https://www.scribd.com/document/888155684/Jupiter-Swap-API-Documentation](https://www.scribd.com/document/888155684/Jupiter-Swap-API-Documentation)  
55. Get Started \- Jupiter Developer Docs, 访问时间为 八月 28, 2025， [https://dev.jup.ag/docs/](https://dev.jup.ag/docs/)  
56. 访问时间为 一月 1, 1970， [https://dev.jup.ag/docs/apis/lend-api-beta](https://dev.jup.ag/docs/apis/lend-api-beta)