

# **Pendle Finance深度投资评估报告：解构收益交易巨头的机遇与风险**

致投资者：  
本报告旨在为具备专业知识的DeFi投资者提供一份关于Pendle Finance协议的详尽、客观的投资评估。报告内容涵盖了从技术架构、财务健康度到风险评估和未来展望的全面分析，旨在帮助您在充分了解相关机遇与风险的基础上，做出审慎的投资决策。

---

## **第一章：Pendle Finance 综合概述**

### **1.1 项目定位与愿景：将传统金融利率衍生品引入DeFi**

Pendle Finance将自身定位为一个无需许可的收益交易协议（permissionless yield-trading protocol），其核心使命是解放并赋予用户对其未来收益的完全控制权 1。在传统金融（TradFi）领域，利率衍生品市场是一个规模超过400万亿美元的庞大领域 1。Pendle的愿景正是要将这一成熟的金融市场引入到去中心化金融（DeFi）中，为所有用户提供前所未有的收益管理工具。

该协议的出现，旨在解决DeFi领域一个长期存在的痛点：收益率的剧烈波动和不可预测性。无论是借贷协议的浮动利率，还是流动性质押代币（LST）的收益，都存在不确定性。Pendle通过其创新的机制，为DeFi世界构建了一个关键的“固定收益层”（fixed income layer），允许用户锁定未来收益，或对收益率的变动进行投机，从而在牛市中放大收益，在熊市中对冲风险 1。

### **1.2 核心机制：收益代币化 (PT & YT)**

Pendle的魔力始于其核心机制——收益代币化（Yield Tokenization）。这一过程将任何产生收益的资产，转变为可独立交易的本金和收益两个部分，其逻辑步骤如下 1：

1. **封装为SY (Standardized Yield Token):** 用户将持有的生息资产（例如，Lido的stETH或Aave的aUSDC）存入Pendle。协议会首先将其封装成一种符合EIP-5115标准的标准化收益代币（SY）。这一步确保了不同来源的生息资产能在Pendle协议内以统一的格式进行交互 1。  
2. **拆分为PT与YT:** 接着，每一单位的SY被拆分为两个独立的代币：本金代币（Principal Token, PT）和收益代币（Yield Token, YT）1。  
* **本金代币 (PT):** PT代表了在未来某个指定到期日（maturity date）赎回一单位原始本金资产的权利。由于其不包含未来收益，PT的交易价格通常会低于其标的资产的市场价格，存在一个折价。投资者若以折价购买PT并持有至到期，即可获得一个固定的、可预期的年化收益率（APY）。从功能上看，PT完全可以类比为传统金融中的“零息债券”（zero-coupon bond），为DeFi投资者提供了前所未有的锁定固定收益的能力 4。  
* **收益代币 (YT):** YT则代表了在到期日之前，从相应本金中产生的所有未来浮动收益的权利。YT的价值会随着时间的流逝而衰减（time-decay），并在到期日归零，因为它不再能产生任何收益。购买并持有YT，相当于投资者在不对本金进行投入的情况下，纯粹地做多（long）标的资产未来的收益率。如果未来的实际收益高于市场在交易时所隐含的预期收益，YT持有者将获得超额回报，这使其成为一种高效的、带有杠杆性质的收益投机工具 4。

通过这种精巧的拆分，Pendle将原本捆绑在一起的资产所有权和收益权分离开来，使其成为两种具备不同风险收益特征、可被独立定价和交易的金融工具。这不仅仅是一个产品创新，更是在DeFi世界中创造了一种全新的金融原语（financial primitive）。它不再是收益的“生产者”，而是现有收益的“解构者”和“交易市场”。这种元协议（meta-protocol）的特性使其能够叠加在任何生息资产之上，无论是流动性质押代币（LSTs）、流动性再质押代币（LRTs）、真实世界资产（RWAs）还是稳定币，从而赋予了Pendle极强的叙事适应性和近乎无限的扩展性 1。

### **1.3 关键创新：为时间衰减资产定制的AMM**

收益代币化的概念并非Pendle首创，APWine和Element Finance等项目是更早的探索者 7。然而，这些先行者普遍受困于一个核心技术难题：传统的自动做市商（AMM）模型，如Uniswap所采用的

x⋅y=k 曲线，并不适用于像YT这样价值会随时间自然衰减的资产。若直接使用，会导致巨大的无常损失（Impermanent Loss）和严重的定价错误，从而无法吸引并维持流动性 11。

Pendle的成功，关键在于其V2版本中引入的、专为时间衰减资产量身定制的AMM。这一创新解决了流动性和资本效率的核心痛点，其设计特点包括 2：

* **动态调整曲线:** Pendle的AMM曲线会随着时间推移而自动调整。当接近到期日时，PT的价格会自然趋近其标的资产的价值。AMM的设计考虑到了这一点，从而显著降低了流动性提供者（LP）的无常损失，尤其是对于那些愿意将流动性持有至到期的LP。  
* **高资本效率:** 借鉴了Uniswap V3的集中流动性概念，Pendle的AMM允许LP将资本集中在特定的收益率范围内，这极大地提高了资本效率，能够以更少的流动性支持更大的交易量，并为交易者提供更低的滑点。  
* **统一流动性池:** PT和YT的交易都在同一个流动性池中进行，这进一步深化了流动性，改善了交易体验。

正是凭借这一卓越的技术执行和产品迭代，Pendle战胜了拥有先发优势的竞争对手，实现了对收益代币化赛道的绝对主导。这充分证明，在高度竞争的DeFi领域，卓越的工程能力和解决实际问题的产品创新，是比“第一个提出想法”更坚固的护城河 3。

### **1.4 生态系统与多链战略**

Pendle深谙多链世界的运行法则，积极将其协议部署到各个主流的区块链网络，以捕获不同生态的流动性、资产和用户群体。目前，Pendle已在以下网络上线 5：

* 以太坊 (Ethereum) 主网  
* Arbitrum  
* BNB Chain  
* Optimism  
* Base  
* Mantle  
* Avalanche

更具前瞻性的是，Pendle并未将自己局限于EVM兼容链。在其2025年的路线图中，一项名为“Citadel”的部署计划，旨在将Pendle扩展至Solana、Hyperliquid和TON等非EVM生态系统 3。这一战略举措意义重大，它旨在打破EVM世界的孤岛效应，将Pendle的收益交易能力带给全新的资本池和用户群，从而巩固其作为未来全链（omnichain）收益交易基础设施的领导地位。

---

## **第二章：市场表现与财务健康度分析**

本章节将通过对链上核心数据、代币市场表现及协议财务状况的深度剖析，量化评估Pendle当前的业务规模与健康水平。

### **2.1 链上关键指标深度分析**

Pendle的链上指标展示了一个成熟且极度活跃的DeFi协议的画像。截至最新数据，其核心指标如下 15：

* **总锁仓价值 (Total Value Locked, TVL):** 协议的TVL高达 **65.01亿美元**。这一庞大的数字不仅彰显了其在DeFi领域的顶级地位，也反映了市场对其安全性和价值主张的高度信任。TVL主要集中在以太坊主网（约60.62亿美元），同时在Arbitrum、BNB Chain等其他链上也有可观的规模。  
* **交易量 (Volume):** 协议的交易活动异常活跃。其去中心化交易所（DEX）的24小时交易量达到 **1.4959亿美元**，近30天交易量更是高达 **29.07亿美元**。累计交易量已接近300亿美元，这表明Pendle的PT和YT市场拥有深厚的流动性和持续的交易需求 15。  
* **用户活动 (User Activity):** 协议在24小时内的日活跃地址数（DAU）为 **1,658个**，产生了 **3,110笔** 交易。这些数据证明Pendle不仅吸引了大量资金，还拥有一个持续参与的、具有粘性的用户基础 15。

### **2.2 PENDLE代币市场数据与价格走势**

PENDLE代币作为协议的核心资产，其市场表现是评估项目价值的重要维度。

* **市值与估值:** PENDLE代币的流通市值约为 **7.34亿美元**，全稀释估值（FDV）约为 **12.48亿美元** 15。一个值得关注的指标是市值/TVL比率，当前仅为  
  **0.1117** 17。相较于许多TVL远低于它的DeFi协议，这个比率处于极低水平。这背后可能隐藏着价值重估的巨大机会，但也需要警惕其TVL构成的特殊性。Pendle的TVL很大一部分是其他协议的生息资产（如LSTs），其计算方式是“嵌套”的，并且部分TVL可能是为了短期“积分挖矿”而流入的“雇佣兵资本”。因此，低市值/TVL比率既是机遇（若TVL能持续，则有重估空间），也是风险（若TVL因叙事结束而大幅流失，则当前市值可能是合理的）。  
* **价格表现:** 当前PENDLE价格约为 **4.43美元**，距离历史高点 **7.52美元** 有一定回调，但远高于历史低点 **0.03349美元** 17。其价格走势与DeFi的宏观叙事紧密相连，尤其是在2023年初开始，随着流动性质押（LST）和流动性再质押（LRT）叙事的兴起，Pendle作为积分挖矿的“杠杆利器”，其代币价格和协议活动均迎来了爆发式增长 6。  
* **流动性:** PENDLE代币拥有良好的市场流动性。24小时总交易量约为 **5253万美元**，其中DEX交易量占比达到 **23.36%**，显示其在中心化交易所（CEX）和去中心化交易所（DEX）均有深度。主要的DEX流动性池分布在Uniswap、Balancer、Camelot等多个平台上 15。

### **2.3 协议财务状况评估**

Pendle已经建立了一个强大且可持续的财务模型，其价值捕获能力日益增强。

* **费用 (Fees) 与收入 (Revenue):** 协议的年化费用高达 **3368万美元**，年化收入为 **3319万美元** 15。协议的收入来源非常清晰：从所有YT产生的收益（包括各类积分空投）中抽取5%的费用。目前，这部分收入100%被分配给vePENDLE的持有者，协议本身暂不截留，以此激励长期持有者和治理参与者 19。  
* **盈利能力 (Earnings):** 协议的盈利能力（定义为：收入 \- 激励成本）是衡量其经济模型健康度的关键。DeFiLlama数据显示，Pendle的累计盈利为负2372万美元，这表明在协议发展的早期阶段，其用于激励流动性的代币成本（累计6491万美元）远高于其捕获的收入（累计4118万美元），这是DeFi项目通过“烧钱”换取市场份额的典型策略 15。然而，一个至关重要的转变已经发生：观察近30天的数据，协议收入（272万美元）已开始超过激励成本（207万美元），使得30天盈利转为正向的65.5万美元，年化盈利达到  
  **799万美元**。这标志着Pendle已经成功度过了最昂贵的冷启动阶段，其增长飞轮开始生效，协议收入足以覆盖激励支出，进入了一个可持续发展的健康轨道。

### **2.4 横向对比：在收益交易赛道中的绝对领导地位**

在收益代币化和交易这一细分赛道，Pendle已经建立起近乎垄断的领导地位。

* **与直接竞争对手对比:** 早期的竞争者如Element Finance和APWine，尽管提出了相似的概念，但未能解决核心技术和流动性问题。Element Finance的TVL曾达到数亿美元，但现已大幅衰落 20；APWine（后更名为Spectra）的TVL和市场声量也相对较小 7。相比之下，Pendle超过65亿美元的TVL，使其在规模上遥遥领先，形成了强大的网络效应和护城河。  
* **与生态内协议对比:** 像Penpie（TVL 1.38亿美元）和Equilibria（TVL 1.44亿美元）这类建立在Pendle之上的收益增强协议，它们的存在和发展，非但不是竞争，反而从侧面印证了Pendle作为底层平台的强大吸引力和“金钱乐高”属性。这些协议需要不断吸纳PENDLE代币来引导激励，从而成为PENDLE代币的结构性买家 22。

下表汇总了Pendle的关键财务与市场指标，以便快速查阅：

| 指标 (Metric) | 数值 (Value) | 来源 (Source) |
| :---- | :---- | :---- |
| **总锁仓价值 (TVL)** | $65.01 亿美元 | 15 |
| ...其中以太坊主网 | $60.62 亿美元 | 15 |
| **PENDLE 市值 (Market Cap)** | $7.34 亿美元 | 15 |
| **全稀释估值 (FDV)** | $12.48 亿美元 | 15 |
| **市值 / TVL 比率** | 0.113 | 17 |
| **24小时DEX交易量** | $1.496 亿美元 | 15 |
| **30天DEX交易量** | $29.07 亿美元 | 15 |
| **年化费用 (Annualized Fees)** | $3368 万美元 | 15 |
| **年化收入 (Annualized Revenue)** | $3319 万美元 | 15 |
| **年化盈利 (Annualized Earnings)** | $799 万美元 | 15 |
| **PENDLE 代币价格** | \~$4.43 美元 | 15 |
| **PENDLE 24小时交易量** | $5253 万美元 | 15 |
| **流通供应量** | 1.65 亿 PENDLE | 17 |
| **最大供应量** | 2.81 亿 PENDLE | 12 |

---

## **第三章：代币经济学（Tokenomics）深度解析**

Pendle的代币经济学是其生态系统成功的核心驱动力，它围绕vePENDLE模型构建了一个精巧的、自我强化的飞轮。

### **3.1 PENDLE 代币的核心效用与价值捕获**

PENDLE是协议的原生功能型和治理代币，其价值并非凭空而来，而是深度绑定于协议的各项核心活动 11。其价值捕获机制主要体现在以下几个方面：

1. **协议费用分成:** 这是最直接的价值捕获。协议从所有YT代币产生的收益中（包括利息、质押奖励，乃至各类协议的“积分”）抽取5%的费用。目前，这笔可观的收入100%被分配给vePENDLE的持有者 19。  
2. **到期未赎回PT的收益:** 当PT到期后，若持有者未及时赎回其对应的底层资产，这些资产将继续产生收益。这部分“被遗忘”的收益会被协议捕获，并同样分配给vePENDLE持有者 19。  
3. **交易费分成:** vePENDLE持有者通过投票，可以决定将PENDLE代币奖励引导至哪些流动性池。作为回报，他们可以分享自己所投票池子产生交易费的80% 6。

### **3.2 vePENDLE：治理、激励与飞轮效应**

vePENDLE（Vote-escrowed PENDLE）是Pendle代币经济学的灵魂，其设计深受Curve协议veCRV模型的启发，并在此基础上进行了优化 7。

* **机制:** 用户通过将PENDLE代币锁定在协议中来获得vePENDLE。锁仓时间越长（最长可达2年），获得的vePENDLE数量就越多。vePENDLE的价值会随着锁仓时间的临近而线性衰减，这激励用户持续延长锁仓以维持其在协议中的影响力 19。  
* **vePENDLE持有者权益:** 持有vePENDLE不仅仅是持有代币，更是掌握了协议中的一系列核心权力与收益：  
  1. **治理投票权:** 参与协议重大决策的投票，决定其发展方向 7。  
  2. **引导激励 (Incentive Gauging):** 这是vePENDLE最核心、最具价值的权力。持有者可以投票决定每周增发的PENDLE代币奖励如何分配给平台上的各个流动性池 6。  
  3. **提升LP收益 (LP Boost):** 如果一个vePENDLE持有者同时也是流动性提供者，其在所有池子中的LP挖矿奖励最高可以被提升2.5倍 6。  
  4. **获取协议收入:** 如前所述，直接分享协议捕获的费用和交易费分成 19。  
* **飞轮效应分析 (The Flywheel Effect):** vePENDLE模型创造了一个强大的正向循环：  
  * 协议通过PENDLE奖励吸引用户为PT/YT池提供流动性（LP）。  
  * 更高的流动性带来了更低的交易滑点和更好的交易体验，从而吸引了更多的交易者。  
  * 更多的交易活动产生了更多的交易费用。  
  * 更多的费用被分配给vePENDLE持有者，提升了锁定PENDLE的吸引力。  
  * 更多用户选择锁定PENDLE以获取vePENDLE，这减少了PENDLE在市场上的流通供应量，形成了买压。  
  * 同时，其他希望自己资产池（如某个LRT的池子）获得更高PENDLE奖励的协议或巨鲸，必须购买并锁定PENDLE来为自己的池子投票。这形成了来自协议层面的结构性需求，即所谓的“Pendle Wars” 24。  
  * 这个过程循环往复，不断推动协议的增长和PENDLE代币价值的提升。

vePENDLE模型将协议的“中央银行”功能——即决定新增货币（PENDLE代币）流向的权力——交给了最忠诚的长期持有者。这使得vePENDLE成为一种极具战略价值的资产，其价值远超普通治理代币，是支撑整个生态系统运转的引擎。

### **3.3 代币分配、释放与通胀模型**

Pendle的代币分配和释放计划旨在平衡早期贡献者、投资者和社区参与者的利益，并兼顾了冷启动阶段的激励需求与长期的可持续性。

* **初始分配 (2年归属后):** 团队占22%，投资者占15%，生态系统基金占18%，流动性激励占37%，流动性引导占7%，顾问占1%。值得注意的是，团队持有的代币已经过了归属期并完全解锁，这消除了未来大规模解锁可能带来的抛压预期 6。  
* **释放与通胀模型:** 协议采用了一种混合通胀模型。在早期通过较高的代币释放（例如，最初每周释放120万PENDLE）来快速引导流动性 11。此后，协议进入了一个通胀率递减的阶段：从2022年10月开始，每周的PENDLE释放量会以1.1%的速度稳定衰减，这一过程将持续到2026年4月。届时，协议将进入永续通胀阶段，维持2%的最终年通胀率 6。  
  * 这个通胀模型的设计非常精妙。它通过前高后低的释放曲线，解决了项目冷启动的激励问题，同时通过通胀率的逐步衰减，保护了长期持有者的利益，避免代币价值被无限稀释。最终2%的年通胀率，对于一个能够产生巨额费用的成熟协议而言，是完全可以被协议收入所抵消的，甚至可能使vePENDLE持有者获得净通缩的实际回报。  
* **供应量与锁仓情况:** PENDLE的最大供应量约为 **2.81亿**，当前流通供应量约为 **1.65亿** 12。一个极为健康的信号是，超过三分之二的流通供应量被用户主动锁定为vePENDLE 6。这充分表明社区对协议的长期价值抱有强烈信心，并愿意放弃短期流动性以换取更深度的参与感和更高的回报。

---

## **第四章：风险评估与安全审计**

对于任何DeFi协议，安全都是投资者最首要的考量。本章节将对Pendle的智能合约安全、历史事件、团队背景及固有风险进行全面评估。

### **4.1 智能合约安全与多方审计复盘**

Pendle在智能合约安全方面投入了大量资源，其代码经过了多家行业顶级安全机构和平台的严格审查，构建了多层次的防御体系。

* **全面的审计覆盖:** Pendle的核心智能合约已经通过了 **Ackee Blockchain, Dedaub, Dingbats, Halborn, Least Authority** 等多家专业审计公司的审计，并且还接受了来自 **Code4rena** 竞赛中顶级独立安全研究员的审查 25。这种多方、多次的审计策略极大地增强了代码的安全性。  
* **关键审计报告摘要:**  
  * **Ackee Blockchain (2022年对V2的审计):** 审计报告显示，未在核心合约中发现任何严重（Critical）或高（High）风险级别的漏洞。发现的问题主要集中在中等级别，如部分场景下的数据验证不足、数学库中的整数溢出风险等。这表明Pendle V2的代码质量在发布前已达到较高标准 28。  
  * **Least Authority (2021年对V1的审计):** 这份早期审计报告指出了协议设计和代码实现的“极其复杂”（extremely complex）。虽然未发现直接的漏洞，但报告警示，高度的复杂性可能会隐藏难以发现的错误，并建议团队尽可能降低系统复杂性。此外，报告还提到了部分计算逻辑可能导致较高的Gas费用 30。  
  * **Halborn:** Halborn对基于Pendle的生态项目Jigsaw Protocol进行了审计，发现了一些低风险问题（如缺少重入保护），这些问题均已得到修复 31。  
* **开源与漏洞赏金:** Pendle坚持开源精神，其所有核心合约代码均在GitHub上公开，供社区随时审查 26。此外，协议在知名的漏洞赏金平台Immunefi上设立了价值高达  
  **25万美元** 的漏洞赏金计划，以重金激励白帽黑客帮助发现并报告潜在的安全漏洞 27。

### **4.2 历史安全事件剖析：Penpie被盗事件的警示与启示**

一次重大的安全事件往往是检验一个项目真实安全水平和团队应急能力的最佳“试金石”。

* **事件概述:** 2024年9月，构建在Pendle之上的收益优化器协议Penpie遭到攻击，导致了约 **2700万美元** 的资金损失 22。  
* **根本原因与责任方:** 经过多家安全公司和Pendle团队的分析，事件的根本原因被清晰地定位在 **Penpie协议自身的智能合约漏洞**，而非Pendle的核心合约。攻击者利用了Penpie协议中一个“允许无许可上架Pendle市场”的独特功能，创建了一个恶意的、由自己控制的“邪恶市场”。随后，通过对Penpie合约中的一个缺乏有效防护的函数进行重入攻击（Reentrancy Attack），成功地将自己的奖励余额夸大了数百倍，并最终盗取了资金 35。  
* **Pendle团队的应对与启示:** 在这次事件中，Pendle团队的表现堪称典范。其内部的自动化监控系统在攻击发生后几乎立刻检测到了异常交易，并迅速采取行动，暂停了Pendle的相关合约。这一果断措施成功阻止了攻击的进一步蔓延，保护了另外 **1.05亿美元** 本可能被盗的资金 36。  
  * 这次事件清晰地表明：**Pendle的核心协议是稳固的，而风险存在于其生态系统之中。** 这验证了Pendle多轮审计的有效性。对于投资者而言，这意味着可以对Pendle核心协议的安全性抱有较高信心，但在参与其生态系统中的其他项目时，必须进行独立的尽职调查，不能因为它们构建在Pendle之上就掉以轻心。  
  * 更深层次的启示在于，Pendle团队展示了超越代码审计的、强大的“运营安全”（Operational Security）能力。高效的链上监控、快速的决策和精准的应急响应，是在瞬息万变的DeFi世界中保护用户资产的宝贵能力，也是一个成熟团队的重要标志。

### **4.3 团队与投资者背景评估：信誉与支持**

* **核心团队:** Pendle由一个化名团队创立，主要成员包括 **TN Lee, GT, YK, and Vu** 3。虽然部分成员保持匿名是加密世界的常态，但通常被视为一个潜在风险点。然而，Pendle的CEO  
  **TN Lee** 的身份是公开的。他曾是知名DeFi协议Kyber Network的创始团队成员和业务负责人，拥有深厚的行业经验和良好的市场声誉 7。这种“半匿名”的状态，在保持加密原生文化的同时，为项目提供了坚实的现实世界信誉锚点，大大降低了团队欺诈或跑路的风险。  
* **投资者阵容:** Pendle的成功吸引了加密货币领域最顶级的风险投资机构。其投资者名单星光熠熠，包括 **Binance Labs, The Spartan Group, Crypto.com Capital, HashKey Capital, Mechanism Capital, Lemniscap** 等 3。链上数据分析平台Nansen的报告还显示，像Arca这样的知名加密基金仍在持续增持PENDLE代币 39。强大的投资者阵容不仅为项目提供了充足的资金支持，更重要的是带来了宝贵的行业资源、战略指导和强大的信誉背书。

### **4.4 协议固有风险**

尽管Pendle在各方面表现出色，但投资者仍需清醒认识到其固有的风险：

* **复杂性风险:** 如Least Authority的审计报告所指，Pendle的协议机制极其复杂 30。这不仅对安全审计构成挑战，也为普通用户理解和安全使用协议设置了较高的门槛。  
* **市场与叙事依赖风险:** Pendle的爆发式增长与其完美契合LST/LRT积分挖矿的叙事密不可分。这意味着其TVL和交易量在一定程度上依赖于外部市场的热点。如果未来这类高收益叙事退潮，协议的活跃度可能会面临显著下降 6。  
* **第三方协议风险:** Pendle的本质是一个“元协议”，其价值构建于Aave、Lido、Compound、Ethena等众多底层生息协议之上。如果这些底层协议中的任何一个出现安全漏洞或经济模型问题，都将直接传导至Pendle，影响相关资产池的安全和收益 25。  
* **监管风险:** 作为一种创新的、功能类似利率衍生品的DeFi协议，Pendle目前处于一个相对宽松的监管环境中。然而，随着全球对DeFi监管的日益关注，未来可能面临不明确的、甚至是不利的监管政策挑战，这构成了长期的不确定性 32。

---

## **第五章：社区分析与市场情绪**

社区的健康度和市场的情绪是判断一个DeFi协议生命力和未来潜力的重要定性指标。

### **5.1 社交媒体活跃度与情绪洞察**

* **Twitter:** Pendle的官方Twitter账号 @pendle\_fi 保持着高频次的活跃度，定期发布产品更新、合作公告和市场教育内容 33。在LST/LRT热潮期间，社区讨论尤为激烈。来自Coinbase的社交情绪分析数据显示，关于Pendle的推文情绪以中性（50.55%）和看涨（49.45%）为主导，而看跌情绪的比例极低（仅5.76%），这反映出市场对Pendle的整体看法是积极和建设性的 13。  
* **Discord:** 协议设有官方的Discord服务器 11，这里是核心用户、开发者和团队进行深度交流的主要场所。根据社区成员的反馈，Pendle团队在Discord中的响应非常迅速，并且对社区提出的意见和建议持开放态度，营造了良好的沟通氛围 41。  
* **Reddit:** 在 r/defi 和 r/CryptoCurrency 等主流加密社区中，可以找到大量关于Pendle的讨论。早期的帖子（2021-2022年）主要集中在对其复杂机制的理解和探讨上 41。而近期的讨论则更多地转向了实际应用，例如Penpie事件后的安全性分析，以及如何利用Pendle最大化各类资产的收益 41。

综合来看，Pendle的社区呈现出“高认知门槛”和“高用户粘性”并存的鲜明特征。其复杂的机制自然地筛选出了一批经验丰富、乐于研究的DeFi资深玩家。这个群体虽然在初期需要跨越较高的学习曲线，但一旦掌握了协议的玩法，就会被其强大的收益策略和精巧的vePENDLE模型所吸引，从而表现出极高的忠诚度和社区参与度（例如超过60%的治理投票参与率 42）。这种由少数核心、高认知用户主导的社区结构是健康的，它使得社区的讨论和决策更加理性和着眼于长期价值，而非被短期的市场炒作所左右。

### **5.2 近期新闻、重大公告与市场反应**

Pendle的市场关注点已经完成了从“它是什么”到“它能用来做什么”的转变。早期的市场沟通主要在解释收益代币化的基础概念 41。而当前，新闻和讨论的焦点已经全面转向其应用层面：

* **近期新闻焦点:** 近期围绕Pendle的新闻主要集中在其代币的强劲价格表现、在真实世界资产（RWA）领域的应用探索，以及对Penpie黑客事件的复盘和应对上 13。  
* **重大公告 \- Boros:** 协议最重要的未来动向是宣布将推出一个名为“Boros”的全新平台。Boros旨在支持对任何收益来源进行杠杆化交易，其首个目标是永续合约的资金费率（Funding Rates）市场 3。这是一个日交易量超过1500亿美元的巨大市场，远超当前LST/LRT的收益体量。Boros的推出，为Pendle的未来增长提供了最激动人心的想象空间。  
* **市场反应与韧性:** Pendle的TVL表现出与特定收益周期的高度相关性。例如，在2024年6月，随着一批主流LRT池子的到期，协议TVL曾出现超过50%的大幅回落 34。然而，协议很快就在新的资产池和市场叙事的推动下迅速恢复，并再创历史新高。这种强大的市场韧性表明，Pendle已经成功地将自己打造为一个适应性极强的平台，能够不断捕捉并服务于市场最新的收益热点。这种从“叙事追随者”到“叙事放大器”乃至未来“叙事创造者”的转变，是协议走向成熟的重要标志。

### **5.3 社区治理活跃度与影响力**

Pendle的社区治理完全通过vePENDLE模型进行，其活跃度和影响力在DeFi世界中名列前茅。

* **治理机制:** vePENDLE持有者通过链上投票参与治理 19。  
* **参与度:** 数据显示，超过60%的代币持有者积极参与投票，这是一个非常高的比例，显示出社区对协议治理的高度投入和认同感 42。  
* **治理核心 \- “Pendle Wars”:** 治理的核心活动并非对协议参数的修改，而是对每周PENDLE代币激励分配的投票。这催生了所谓的“Pendle Wars”：各个项目方、巨鲸和普通用户为了让自己投资的或提供流动性的池子获得更高的APY，而积极地积累vePENDLE并进行投票博弈。这使得治理过程充满了经济博弈的活力，并为PENDLE代币创造了持续的结构性需求 19。

---

## **第六章：投资机会与策略矩阵**

Pendle为不同风险偏好的投资者提供了一个完整的“风险梯度”工具箱。从最保守的固定收益到最高风险的杠杆策略，用户可以根据自己的判断和风险承受能力，构建多样化的投资组合。本章将详尽解析所有潜在的投资机会。

### **6.1 基础投资策略**

这类策略操作相对简单，适合对协议有基本了解的投资者。

* **购买并持有PENDLE代币:** 这是最直接的投资方式。如果看好Pendle协议的长期发展、其在收益交易领域的垄断地位以及未来Boros等催化剂带来的增长，可以直接在二级市场购买并持有PENDLE代币，以分享协议成长的红利。  
* **锁定为vePENDLE:** 对于深度看好协议并希望长期参与的投资者，将PENDLE锁定为vePENDLE是更优选择。这不仅能分享协议增长，还能获得协议的真实收入（费用分成）、通过投票影响激励分配，并显著提升自己在所有流动性池中的挖矿收益 6。  
* **固定收益 (Fixed Yield):** 通过在Pendle市场上购买PT代币实现。例如，购买PT-ezETH，相当于以低于ezETH市价的折扣价买入。只要将PT持有至到期，就能1:1赎回ezETH，从而锁定一个在购买时就已确定的固定年化收益率。此策略风险较低，回报稳定，非常适合风险厌恶型、寻求在波动的加密市场中获得稳定回报的投资者 5。  
* **做多收益率 (Long Yield):** 通过购买YT代币实现。购买YT-ezETH，意味着你放弃了本金，用少量资金“租用”了大量ezETH在未来一段时间内产生的所有收益（包括质押收益和各类积分）。如果未来ezETH的实际收益率（Underlying APY）高于你购买YT时市场所隐含的收益率（Implied APY），你将获利。这是一种高风险、高杠杆的策略，适合对未来某个资产的收益率或积分价值有强烈看涨预期的投机者 5。

### **6.2 流动性挖矿策略**

* **提供流动性 (LPing):** 用户可以将自己的生息资产（如ezETH）存入Pendle，协议会自动将其拆分为PT和YT，并与池中已有的资产组成LP头寸。作为LP，用户可以赚取该池子产生的所有交易费以及协议分发的PENDLE代币奖励 4。Pendle V2 AMM的独特设计，旨在最小化LP的无常损失，尤其适合那些计划将流动性持有至池子到期的用户 4。

### **6.3 高级收益策略**

这些策略通常涉及多个协议的组合或利用杠杆，风险和潜在回报都更高。

* **杠杆挖矿 (Leveraged Farming):** Pendle自身不提供杠杆，但其可组合性催生了专门提供杠杆服务的第三方协议，如 **Notional, Marginly, Gearbox, Stella** 等 44。  
  * **机制:** 用户可以在这些平台上存入一笔本金（如ETH），然后协议帮助用户借入数倍的资金（如USDC），再将所有资金在Pendle上购买PT或提供LP。这样，用户的本金就被放大了数倍，从而显著提高了潜在的APY。  
  * **风险:** 杠杆是双刃剑。它在放大收益的同时，也放大了风险，包括需要支付不菲的借贷利息，以及当抵押品价值下跌时可能面临的清算风险 44。  
* **积分挖矿/空投策略 (Points/Airdrop Farming):** 这是2024年Pendle最火爆的玩法，其本质是“做多收益率”策略的变种。  
  * **核心玩法:** 购买LRT（如Ether.fi的eETH, Renzo的ezETH）的YT代币。由于LRT能同时产生EigenLayer积分和LRT协议自身的积分，购买其YT就意味着用一小笔资金，获得了大量LRT在一段时间内产生的所有积分。  
  * **杠杆效应:** 这是一种极其高效的积分挖矿策略，为用户提供了对未来空投预期的杠杆化敞口，是驱动Pendle在2024年上半年TVL和交易量爆炸式增长的核心动力 6。  
* **做空收益率 (Short Yield):** 这是一种相对复杂但非常有用的对冲策略。用户将自己的生息资产存入Pendle，铸造出PT和YT，然后立即在市场上卖出YT部分。这相当于提前将未来的浮动收益以当前市场的隐含价格（Implied APY）卖出，从而锁定了这部分收益。如果未来实际收益率下降，YT的市场价格也会随之下降，届时用户可以以更低的价格买回YT，再与自己持有的PT合并，赎回全部本金。这一买一卖的差价即为利润。此策略适合预期未来收益率将下降的投资者 24。

### **6.4 投资机会对比分析表**

为了给投资者提供一个清晰、可操作的决策框架，下表对上述所有投资机会进行了系统性对比。

| 策略名称 | 策略描述 | 适合用户类型 | 优点 | 缺点 | 风险等级 | 预期收益来源 (APR/APY) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Buy & Hold PENDLE** | 购买并长期持有PENDLE代币。 | 价值投资者 | 操作简单，分享协议长期增长。 | 需承受代币价格波动。 | 中 | PENDLE代币价格升值。 |
| **Lock for vePENDLE** | 锁定PENDLE换取vePENDLE。 | 长期主义者，深度参与者 | 获取协议真实收入，提升LP收益，参与治理。 | 丧失流动性（最长2年），价值与协议表现高度绑定。 | 中高 | 协议费用分成，交易费分成，LP收益提升。 |
| **Buy PT (Fixed Yield)** | 购买本金代币（PT）并持有至到期。 | 风险厌恶型，寻求稳定回报者 | 收益固定且可预测，风险低，类似零息债券。 | 收益率有上限，资金在到期前不易退出。 | 低 | PT折价带来的固定APY。 |
| **Buy YT (Long Yield)** | 购买收益代币（YT）。 | 投机者，风险偏好高者 | 高杠杆做多未来收益/积分，潜在回报极高。 | 到期价值归零，若实际收益不及预期则亏损本金。 | 极高 | 标的资产的未来浮动收益/积分价值。 |
| **Provide Liquidity (LP)** | 为PT/SY池提供流动性。 | 稳健型收益农民 | 赚取交易费和PENDLE奖励，无常损失相对可控。 | 仍存在一定的无常损失风险，资金被占用。 | 中 | 交易费，PENDLE代币奖励，vePENDLE提升。 |
| **Leveraged PT Farming** | 通过第三方协议借贷，杠杆化购买PT。 | 激进型收益农民 | 显著放大固定收益率。 | 需支付借贷利息，存在清算风险。 | 高 | 杠杆化后的PT固定APY，减去借贷成本。 |
| **Points Farming** | 购买LRT等资产的YT，以杠杆化方式获取积分。 | 空投猎人，高风险投机者 | 极高的积分获取效率，以小博大。 | 若空投价值不及预期或没有空投，投资将归零。 | 极高 | 未来潜在的空投价值。 |

### **6.5 开发者参与机会**

考虑到投资者可能具备开发背景，Pendle生态同样提供了丰富的参与和盈利机会。

* **创建自动化策略 (Build Automated Agents):** Pendle提供了详尽的开发者文档、软件开发工具包（SDK）、API和开源的智能合约，为开发者创建自己的自动化策略提供了便利 8。开发者可以构建交易机器人，用于自动执行：  
  * 在不同到期日、不同底层资产的PT之间进行套利。  
  * 基于市场情绪或技术指标，自动买卖YT。  
  * 创建复杂的收益优化器，自动将用户的资金在Pendle的不同策略间轮动以最大化收益。  
* **构建结构化产品 (Build Structured Products):** 开发者可以在Pendle之上构建全新的、面向用户的DeFi产品。例如：  
  * 创建一个“一键固定收益”基金，自动为用户购买一系列不同到期日的PT，并管理头寸。  
  * 设计一个杠杆化的YT产品，通过集成借贷协议，为用户提供更高倍数的收益敞口，并从中收取管理费或业绩提成。  
* **集成Pendle作为收益层 (Integrate Pendle as a Yield Layer):** 任何需要为用户提供收益选项的DApp，都可以将Pendle作为其底层的收益基础设施。例如：  
  * 一个DeFi钱包可以直接在其界面中集成Pendle的固定收益功能，让用户无需离开钱包即可实现稳定储蓄。  
  * 一个DAO的财库管理工具可以集成Pendle，帮助DAO将其持有的稳定币或ETH转换为固定收益，以实现更可预测的预算管理。

Pendle的成功，很大程度上源于它已经成为一个“杠杆化的元协议”。其核心价值不再是简单地提供固定或浮动收益，而在于它提供了一套精密的工具，能够将任何生息资产的风险收益特征进行“手术般”的精细化切分与重组，并允许用户对其中某一个特定的风险敞口进行杠杆化操作。这正是成熟金融市场的标志，也为开发者提供了广阔的创新空间。

---

## **第七章：开发者生态与未来展望**

Pendle的过去由其在EVM生态内的横向扩张所定义，而其未来则取决于向新领域的纵向深化和跨界融合。

### **7.1 为何开发者选择在Pendle上构建？**

Pendle已经成功地将自己打造成了一个对开发者极具吸引力的平台，其原因在于：

* **高度的可组合性 (Composability):** Pendle通过EIP-5115标准化的SY、PT、YT代币，使其能够像“金钱乐高”一样，被其他DeFi协议轻松地集成和组合，创造出无限的可能性 4。  
* **强大的基础设施:** 协议为开发者提供了极为完善的基础设施，包括详尽的开发者文档、功能强大的SDK、无需许可的Router合约以及用于链下计算的辅助库，这极大地降低了第三方在其之上构建应用的门槛和成本 8。  
* **巨大的网络效应:** 作为收益交易赛道的绝对领导者，Pendle拥有庞大的TVL、深厚的流动性和活跃的用户基础。在Pendle上构建应用，可以直接利用其现有的网络效应，实现快速冷启动。

### **7.2 项目路线图与未来催化剂**

Pendle拥有一个清晰且雄心勃勃的未来路线图，其中包含多个可能引爆下一轮增长的强大催化剂。

* **Boros \- 进军永续合约衍生品市场:** 这是Pendle未来最核心的增长点。团队计划推出一个名为Boros的新平台，专门用于对各类收益进行杠杆化交易，其首要目标是永续合约的资金费率（Funding Rates）3。永续合约市场日交易量高达1500亿至2000亿美元，其产生的资金费率是一个体量巨大但目前缺乏有效对冲和交易工具的收益来源 3。Boros的推出，将允许交易者对冲资金费率风险（例如Ethena的USDe持有者可以锁定其收益），或直接对资金费率的涨跌进行投机。如果成功，这将把Pendle的业务版图从当前的LST/LRT收益市场，扩展到一个大几个数量级的全新领域。  
* **多链扩张 (Multi-Chain Expansion):** Pendle的“Citadel”部署计划，旨在将其影响力从EVM世界扩展到Solana、Hyperliquid、TON等快速增长的非EVM生态 3。这一战略旨在打破技术壁垒，捕获全新的资本、资产和用户，是其从一个“DeFi收益协议”向一个“全市场利率协议”演进的关键一步。  
* **机构采用 (Institutional Adoption):** Pendle正在积极探索吸引机构资金的路径。通过与Ethena等协议合作，创建由受监管的投资经理所管理的独立投资工具（SPV），为机构投资者提供一个合规、便捷的入口，使其能够安全地参与并从Pendle的收益产品中获利 3。  
* **真实世界资产（RWA）整合:** 协议已经开始支持像sDAI（MakerDAO的储蓄凭证）、fUSDC等与真实世界资产挂钩的代币化收益产品，致力于成为连接传统金融和去中心化金融的重要桥梁 4。

### **7.3 长期增长潜力与天花板评估**

Pendle的长期增长天花板极高。从理论上讲，只要世界上存在生息资产，Pendle的收益代币化和交易模型就有其用武之地。其最终的潜在市场规模，可以对标传统金融中数百万亿美元的利率衍生品市场 1。

其未来的增长将主要由以下因素驱动：

1. **新叙事的出现:** 加密世界总在不断涌现新的收益来源，无论是未来的AI+Crypto、DePIN，还是其他尚未出现的新模式，Pendle都能迅速适应并为其提供收益交易市场。  
2. **Boros的成功:** Boros能否成功推出并被市场广泛采纳，是决定Pendle能否实现数量级增长的关键。  
3. **新链的征服:** Pendle能否在Solana等新链上成功复制其在EVM生态中的主导地位。  
4. **机构资金的流入:** 能否成功打开合规渠道，吸引大规模的机构资金进入。

Pendle的未来战略，正清晰地展现出从“横向扩张”（支持更多资产和链）到“纵向深化”（通过Boros创造更复杂的衍生品）和“跨界融合”（拥抱非EVM生态、机构和RWA）的转变。这一战略转型将决定Pendle的最终高度。

---

## **第八章：最终投资评级与结论**

### **8.1 核心优势与风险点总结**

**核心优势 (Strengths):**

* **赛道绝对龙头:** 在收益代币化和交易领域已形成事实上的垄断，拥有强大的护城河和网络效应。  
* **强大的经济模型:** vePENDLE飞轮效应被市场验证，为代币创造了持续的结构性需求，并使协议进入了可持续的盈利阶段。  
* **经验丰富的团队:** 核心团队拥有深厚的行业背景，并在Penpie危机中展示了卓越的风险控制和应急响应能力。  
* **清晰的增长路径:** 未来有Boros、多链扩张和机构采用等多个明确且极具想象空间的增长催化剂。  
* **财务状况健康:** 协议已实现正向盈利，收入能够覆盖激励成本，经济模型健康。

**核心风险 (Risks):**

* **协议内在复杂性:** 机制复杂，学习曲线陡峭，可能限制其用户群体的进一步扩大。  
* **对外部叙事的高度依赖:** 当前的繁荣与LST/LRT热点高度绑定，若市场热点转移，可能面临TVL和活跃度下降的风险。  
* **生态系统组合性风险:** 风险可能来自其集成的众多第三方协议，而非其自身。  
* **潜在的监管不确定性:** 作为一种新型金融衍生品，未来面临的监管环境尚不明朗。

### **8.2 综合投资评级与定级理由**

**投资评级：建议 (Recommended)**

定级理由：  
综合以上所有维度的分析，Pendle Finance展现了一个基本面极其扎实、在细分赛道拥有绝对统治力、且未来增长路径清晰可见的顶级DeFi协议的特质。

1. **基本面坚如磐石:** 其创新的收益代币化机制和为时间衰减资产定制的AMM，解决了行业的核心痛点，并被证明是成功的。其vePENDLE经济模型创造了强大的增长飞轮和价值捕获能力，协议已从“烧钱换增长”阶段过渡到健康的“盈利”阶段。  
2. **市场地位难以撼动:** Pendle已经通过卓越的技术执行力，彻底击败了所有同赛道的早期竞争者，形成了近乎垄断的市场地位。其庞大的TVL和流动性深度构成了强大的护城河。  
3. **团队值得信赖:** 拥有公开身份且履历光鲜的CEO，以及在真实危机中得到检验的强大运营安全能力，这在DeFi世界中是稀缺且宝贵的资产。顶级VC的背书也进一步增强了其信誉。  
4. **增长潜力巨大:** 当前的估值（尤其是市值/TVL比率）相对于其管理资产的规模和盈利能力，可能仍有重估空间。更重要的是，未来的Boros平台和向非EVM生态的扩张，为其打开了数倍于当前市场规模的增长天花板。

尽管存在对外部叙事依赖和监管不确定性等风险，但考虑到其强大的核心竞争力、清晰的未来战略和相对合理的估值水平，我们认为投资Pendle的潜在回报远大于其潜在风险。

### **8.3 结语：给投资者的最终建议**

针对不同类型的投资者，我们提出以下差异化的参与建议：

* **对于保守型投资者:** 最适合的策略是购买PT代币以获取**固定收益**。这能让您在规避加密市场价格波动的同时，获得远高于传统金融的稳定回报。  
* **对于稳健型价值投资者:** **购买并长期持有PENDLE代币，并将其锁定为vePENDLE**，是分享协议长期增长和真实收益的最佳方式。同时，可以考虑将部分资金作为**流动性提供者（LP）**，以赚取稳健的交易费和挖矿奖励。  
* **对于激进型投机者/空投猎人:** Pendle为您提供了无与伦比的杠杆工具。通过**购买YT代币**，您可以高效地做多特定资产的未来收益率或积分价值。通过**集成第三方协议进行杠杆挖矿**，您可以将收益进一步放大。请务必清醒认识到这些策略的极高风险，投入的资金应严格控制在您可以承受完全损失的范围之内。  
* **对于具备开发背景的投资者:** Pendle不仅仅是一个投资标的，更是一个强大的**开发平台**。您可以探索在其之上构建自动化交易策略、结构化产品，或将其集成为您自己应用的收益层，以发掘更深层次的价值。

最后，我们必须强调，任何DeFi投资都伴随着风险。请务必做好自己的研究（DYOR），并根据自身的风险承受能力进行决策。尤其是在使用杠杆或参与生态项目时，风险管理应永远放在首位。Pendle已经证明了自己是DeFi世界中不可或缺的核心基础设施之一，对其进行合理的仓位配置，有望在未来获得可观的回报。

#### **引用的著作**

1. Introduction to Pendle | Pendle Documentation \- Pendle Docs, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/Introduction](https://docs.pendle.finance/Introduction)  
2. Pendle \- Liberating Yield, 访问时间为 七月 27, 2025， [https://www.pendle.finance/](https://www.pendle.finance/)  
3. Pendle 2025: Building DeFi's Fixed Income Layer \- Greythorn Asset Management \- Medium, 访问时间为 七月 27, 2025， [https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd](https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd)  
4. Pendle Finance \- Decentralized Finance | IQ.wiki, 访问时间为 七月 27, 2025， [https://iq.wiki/wiki/pendle-finance](https://iq.wiki/wiki/pendle-finance)  
5. What is Pendle Finance? Yield Tokenization Explained & How to Earn | Nansen, 访问时间为 七月 27, 2025， [https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn](https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn)  
6. What Is Pendle Finance? A Beginner's Guide to Tokenized Yield | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/learn/pendle](https://www.coingecko.com/learn/pendle)  
7. PENDLE — A Comprehensive Crypto Yield Market Analysis \- DataDrivenInvestor, 访问时间为 七月 27, 2025， [https://medium.datadriveninvestor.com/pendle-a-comprehensive-crypto-yield-market-analysis-83311b5be8e6](https://medium.datadriveninvestor.com/pendle-a-comprehensive-crypto-yield-market-analysis-83311b5be8e6)  
8. High Level Architecture | Pendle Documentation, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/Developers/HighLevelArchitecture](https://docs.pendle.finance/Developers/HighLevelArchitecture)  
9. Pendle Finance, Real-World Asset: Investor Guide, 访问时间为 七月 27, 2025， [https://www.diadata.org/rwa-real-world-asset-map/pendle-finance/](https://www.diadata.org/rwa-real-world-asset-map/pendle-finance/)  
10. What is Pendle Finance? | PENDLE Crypto \- Delphi Digital, 访问时间为 七月 27, 2025， [https://members.delphidigital.io/projects/pendle-finance](https://members.delphidigital.io/projects/pendle-finance)  
11. Pendle \- Collective Shift, 访问时间为 七月 27, 2025， [https://collectiveshift.io/pendle/](https://collectiveshift.io/pendle/)  
12. Pendle Price | Charts \- Crypto.com, 访问时间为 七月 27, 2025， [https://crypto.com/price/pendle](https://crypto.com/price/pendle)  
13. Pendle Price, PENDLE Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/pendle](https://www.coinbase.com/price/pendle)  
14. PENDLE Live Price Chart, Market Cap & News Today \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/pendle](https://www.coingecko.com/en/coins/pendle)  
15. Pendle \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/pendle](https://defillama.com/protocol/pendle)  
16. Pendle Volume \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/dexs/pendle](https://defillama.com/dexs/pendle)  
17. Pendle price today, PENDLE to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/pendle/](https://coinmarketcap.com/currencies/pendle/)  
18. PENDLE Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 27, 2025， [https://www.bybit.com/en/price/pendle/](https://www.bybit.com/en/price/pendle/)  
19. vePENDLE | Pendle Documentation, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/ProtocolMechanics/Mechanisms/vePENDLE](https://docs.pendle.finance/ProtocolMechanics/Mechanisms/vePENDLE)  
20. Element.Fi Case Study \- Alchemy, 访问时间为 七月 27, 2025， [https://www.alchemy.com/case-studies/element](https://www.alchemy.com/case-studies/element)  
21. www.bankless.com, 访问时间为 七月 27, 2025， [https://www.bankless.com/es/api/post/load-next-article?id=1015](https://www.bankless.com/es/api/post/load-next-article?id=1015)  
22. Penpie \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/penpie](https://defillama.com/protocol/penpie)  
23. What is PENDLE? \- Uphold, 访问时间为 七月 27, 2025， [https://uphold.com/blog/crypto-basics/what-is-pendle](https://uphold.com/blog/crypto-basics/what-is-pendle)  
24. What is Pendle Finance and How Does It Work? | by Slobodzeanb | Satoshi Club \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/realsatoshiclub/what-is-pendle-finance-and-how-does-it-work-98c16d80cf14](https://medium.com/realsatoshiclub/what-is-pendle-finance-and-how-does-it-work-98c16d80cf14)  
25. FAQ | Pendle Documentation, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/FAQ](https://docs.pendle.finance/FAQ)  
26. Security | Pendle Documentation, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/Security](https://docs.pendle.finance/Security)  
27. Pendle \- detailed report | DeFiSafety, 访问时间为 七月 27, 2025， [https://defisafety.com/app/pqrs/601](https://defisafety.com/app/pqrs/601)  
28. Pendle Finance: Pendle V2 audit summary \- Ackee Blockchain, 访问时间为 七月 27, 2025， [https://ackee.xyz/blog/pendle-finance-pendle-v2-audit-summary/](https://ackee.xyz/blog/pendle-finance-pendle-v2-audit-summary/)  
29. Pendle Finance: Pendle V2 audit summary — Ackee Blockchain | by Aleksandra Yudina, 访问时间为 七月 27, 2025， [https://medium.com/ackee-blockchain/pendle-finance-pendle-v2-audit-summary-ackee-blockchain-a7b43db489ed](https://medium.com/ackee-blockchain/pendle-finance-pendle-v2-audit-summary-ackee-blockchain-a7b43db489ed)  
30. 210521\_Pendle Protocol\_Pendle Smart Contracts Final Audit Report \- Least Authority, 访问时间为 七月 27, 2025， [https://leastauthority.com/static/publications/LeastAuthority\_Pendle\_Protocol\_Pendle\_Smart\_Contracts\_Final\_Audit\_Report.pdf](https://leastauthority.com/static/publications/LeastAuthority_Pendle_Protocol_Pendle_Smart_Contracts_Final_Audit_Report.pdf)  
31. Pendle Strategies V1 Audit | Jigsaw Finance \- Halborn, 访问时间为 七月 27, 2025， [https://www.halborn.com/audits/jigsaw-finance/pendle-strategies-v1](https://www.halborn.com/audits/jigsaw-finance/pendle-strategies-v1)  
32. Terms of Use | Pendle Documentation, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/TermsOfUse](https://docs.pendle.finance/TermsOfUse)  
33. Pendle \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/pendle-finance](https://github.com/pendle-finance)  
34. Pendle Announces Leveraged Yield Tokenization Platform \- "The Defiant", 访问时间为 七月 27, 2025， [https://thedefiant.io/news/defi/pendle-announces-leveraged-yield-tokenization-platform](https://thedefiant.io/news/defi/pendle-announces-leveraged-yield-tokenization-platform)  
35. Explained: The Penpie Hack (September 2024\) \- Halborn, 访问时间为 七月 27, 2025， [https://www.halborn.com/blog/post/explained-the-penpie-hack-september-2024](https://www.halborn.com/blog/post/explained-the-penpie-hack-september-2024)  
36. Pendle says it saved $105 million that could have been further drained amid Penpie hack, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/314616/pendle-says-it-saved-105-million-that-could-have-been-further-drained-amid-penpie-hack](https://www.theblock.co/post/314616/pendle-says-it-saved-105-million-that-could-have-been-further-drained-amid-penpie-hack)  
37. Penpie DeFi platform files reports with FBI, Singapore police after $27 million crypto theft, 访问时间为 七月 27, 2025， [https://therecord.media/penpie-defi-protocol-ethereum-stolen](https://therecord.media/penpie-defi-protocol-ethereum-stolen)  
38. TN Lee Introduction and Work History\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/member/TN%20Lee?k=MTQ2OTQ%3D](https://www.rootdata.com/member/TN%20Lee?k=MTQ2OTQ%3D)  
39. Pendle: Expanding the Frontier of DeFi Yield Trading \- Nansen Research, 访问时间为 七月 27, 2025， [https://research.nansen.ai/articles/pendle-expanding-the-frontier-of-de-fi-yield-trading](https://research.nansen.ai/articles/pendle-expanding-the-frontier-of-de-fi-yield-trading)  
40. Pendle Price, PENDLE Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/en-gb/price/pendle](https://www.coinbase.com/en-gb/price/pendle)  
41. Pendle Finance Thoughts and Discussion. : r/CryptoCurrency \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/CryptoCurrency/comments/pj61yf/pendle\_finance\_thoughts\_and\_discussion/](https://www.reddit.com/r/CryptoCurrency/comments/pj61yf/pendle_finance_thoughts_and_discussion/)  
42. What is Pendle? All You Need to Know About PENDLE (2025 Update) \- Gate.io, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/what-is-pendle1/610](https://www.gate.com/learn/articles/what-is-pendle1/610)  
43. www.nansen.ai, 访问时间为 七月 27, 2025， [https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn\#:\~:text=One%20of%20the%20most%20valuable,return%20if%20held%20to%20maturity.](https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn#:~:text=One%20of%20the%20most%20valuable,return%20if%20held%20to%20maturity.)  
44. Leveraged Pendle PTs | Notional V3 User Docs, 访问时间为 七月 27, 2025， [https://docs.notional.finance/notional-v3/product-guides/leveraged-pendle-pts](https://docs.notional.finance/notional-v3/product-guides/leveraged-pendle-pts)  
45. Leveraged Yield Farming | Notional V3 User Docs, 访问时间为 七月 27, 2025， [https://docs.notional.finance/notional-v3/product-guides/leveraged-yield-farming](https://docs.notional.finance/notional-v3/product-guides/leveraged-yield-farming)  
46. Top DeFi Projects Leveraging Pendle Pools \- Gate.com, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/top-defi-projects-leveraging-pendle-pools/3907](https://www.gate.com/learn/articles/top-defi-projects-leveraging-pendle-pools/3907)  
47. pendle-finance/documentation \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/pendle-finance/documentation](https://github.com/pendle-finance/documentation)  
48. Overview | Pendle Documentation, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/cn/Developers/Overview](https://docs.pendle.finance/cn/Developers/Overview)  
49. pendle-finance/pendle-sdk-core-v2-docs \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/pendle-finance/pendle-sdk-core-v2-docs](https://github.com/pendle-finance/pendle-sdk-core-v2-docs)