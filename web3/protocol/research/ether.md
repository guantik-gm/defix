

# **ether.fi (ETHFI)：对领先的流动性再质押协议的机构级投资分析**

## **1\. 摘要**

### **1.1 投资论点**

本报告的核心投资论点是：ether.fi 作为流动性再质押（Liquid Restaking）领域的市场领导者，凭借其独特的非托管架构，成功地占据了高增长赛道的战略制高点。该协议通过其非托管的特性，精准地吸引了对安全和去中心化有高度要求的资本，从而实现了总锁定价值（TVL）的爆发式增长，验证了其强大的产品市场契合度。此外，ether.fi 正在积极地从单一的基础设施协议，向一个包含自动化收益策略和现实世界支付解决方案的综合性“DeFi银行”生态系统演进，这为其长期价值捕获和护城河的构建奠定了坚实基础。

### **1.2 核心发现总结**

本报告对 ether.fi 进行了全面的尽职调查，核心发现如下：

* **市场地位**：ether.fi 在流动性再质押代币（LRT）领域占据绝对领先地位，其 TVL 超过 100 亿美元，远超所有竞争对手 1。  
* **技术创新**：协议通过非托管密钥管理、分布式验证器技术（DVT）和创新的 NFT 资产模型，为用户提供了前所未有的资产控制权和安全性 2。  
* **团队与投资者**：由拥有成功创业和退出经验的资深企业家 Mike Silagadze 领导，并获得了 CoinFund、Bullish Capital 及 Arthur Hayes 等顶级加密原生资本的支持，团队背景和投资者质量均为顶级 1。  
* **安全性**：协议经过了多家知名安全公司的多轮审计，并设有活跃的漏洞赏金计划，显示出对安全的高度重视。尽管早期审计发现过严重漏洞，但均已修复 7。  
* **代币经济学**：ETHFI 代币的核心效用在于治理，未来计划扩展至节点运营商的经济安全质押。然而，其代币分配模型向投资者和团队倾斜较大，且在 2025 年 3 月面临关键的“解锁悬崖”，可能带来显著的抛售压力 10。  
* **核心风险**：投资 ether.fi 面临多重风险，包括复杂的智能合约风险、EigenLayer 带来的未知 slashing 风险、LRT 的潜在脱锚风险以及代币解锁带来的市场压力。

### **1.3 风险回报评估**

ether.fi 的投资呈现出典型的高风险、高回报特征。其潜在上行空间与整个 EigenLayer 再质押生态的增长紧密绑定；作为该生态的龙头项目，ether.fi 将是最大的受益者之一。若再质押叙事得以成功实现，并且 ETHFI 代币能够有效捕获协议价值，其回报潜力是巨大的。然而，风险同样不容忽视。再质押作为一个新兴且复杂的领域，其安全模型尚未经过长时间的市场检验。智能合约的复杂性带来了潜在的漏洞风险，而多层 slashing 和市场极端波动下的脱锚事件，都可能导致投资者资本的永久性损失。

### **1.4 最终投资评级**

**建议**

综合评估，本报告对 ether.fi 的投资评级为“建议”。此评级主要面向具备高风险承受能力、对 DeFi 领域有深入理解的成熟投资者。尽管再质押赛道固有的风险显著，但 ether.fi 凭借其市场领导地位、强大的团队执行力、清晰的产品愿景和对安全的持续投入，为寻求 EigenLayer 生态系统高 Beta 敞口的投资者，提供了一个当前同类中最佳的投资标的。

## **2\. 项目概述：非托管再质押领导者的架构**

### **2.1 核心价值主张：以用户主权重新定义质押**

ether.fi 的核心价值主张在于其对非托管原则的坚定执行，它构建了一个用户始终掌握其资产私钥的委托质押协议 3。这直接解决了以太坊社区内关于中心化和交易对手风险的核心关切，使其在众多流动性质押解决方案中脱颖而出。

该协议允许用户铸造 eETH——以太坊上首个原生流动性再质押代币（LRT）。用户存入的 ETH 会被自动在 EigenLayer 上进行再质押 2。这一机制使用户能够同时获得多层级的奖励，包括：基础的以太坊质押年化收益（APR）、EigenLayer 积分以及 ether.fi 自身的忠诚度积分，整个过程无需牺牲资产的流动性或控制权 14。这种对用户主权的尊重，是吸引大规模、特别是对安全敏感的资本流入的关键因素。

### **2.2 技术深度解析：去中心化验证的创新**

ether.fi 的技术架构旨在通过多项创新来强化其非托管和去中心化的特性。

* **分布式验证器技术 (DVT)**：协议与 Obol Labs 等合作伙伴共同部署 DVT 集群，将单个验证器的职责分散给多个节点运营商。这种架构显著增强了系统的容错能力和地理多样性，从而有效降低了因单点故障（如节点离线）而导致的 slashing 惩罚风险 2。对于寻求机构级安全保障的用户而言，这是一项至关重要的技术特性。  
* **基于 NFT 的密钥管理**：协议为每个验证器创建了两类独特的 NFT，这种设计在行业内颇具新意。一类是可转让的 T-NFT，代表 30 ETH 的经济所有权；另一类是不可转让的 B-NFT，代表 2 ETH 的所有权以及对验证器密钥的控制权（如签署退出消息）3。该系统巧妙地将经济利益与操作控制权分离，为质押基础设施创造了一个可编程层，是实现非托管委托质押的精妙解决方案。  
* **流动性再质押代币 (eETH) 及其封装版本 (weETH)**：eETH 是一种变基（rebasing）代币，其钱包余额会每日自动增加，以反映累积的质押奖励 20。然而，变基代币在许多 DeFi 协议中存在兼容性问题。为了解决这一问题，ether.fi 提供了 weETH，一个非变基的封装版本。weETH 的价值随时间增值，而非数量增加，从而使其能够无缝集成到更广泛的 DeFi 生态系统中，如借贷协议和去中心化交易所（DEX）20。这种双代币模型为用户提供了根据其 DeFi 策略需求选择最佳代币形式的灵活性。

这种技术栈的构建并非仅仅是功能的堆砌，而是一种深思熟虑的战略定位。传统的流动性质押协议因其托管或半托管模式而受到关于中心化风险的批评。ether.fi 的架构直接回应了这些批评，提供了一个更符合以太坊核心精神的解决方案。高净值个人和机构投资者通常对交易对手风险和中心化风险最为敏感。通过构建一个技术上更优越、更去中心化的产品，ether.fi 为这部分资本创造了一个理想的场所，这解释了为何其能够迅速吸引大规模存款，并实现比竞争对手更快的 TVL 增长。

### **2.3 生态系统扩张：“DeFi 银行”战略**

ether.fi 的愿景不止于成为一个单纯的质押协议，它正在战略性地扩展为一个全方位的金融服务中心，即“DeFi 银行”22。

* **Ether.fi Liquid**：这是一项自动化收益聚合服务。它通过智能金库（vaults），将用户的 eETH 等资产自动部署到如 Pendle、Balancer 等 DeFi 协议中经过优化的策略里，为用户简化了复杂的收益耕作（yield farming）流程，旨在提供一键式的最优回报 2。  
* **Ether.fi Cash**：这是一个由加密资产支持的 VISA 信用卡项目。用户可以将其持有的生息资产（如 eETH）作为抵押品，在现实世界中进行消费，而无需出售其底层资产 24。这一举措极大地增强了协议的实用性，成功地将链上资产与现实世界的支付场景连接起来。

向“Liquid”和“Cash”的扩张，标志着 ether.fi 从一个纯粹的基础设施协议向一个面向用户的金融平台的战略升级。这是一个价值链上移的举动，旨在捕获更多的生态系统费用并防止资本外流。在过去，用户在 ether.fi 质押获得 eETH 后，若想获取更高收益，需要将 eETH 转移到其他协议。在这种模式下，后续的交易费用和价值被其他协议捕获。通过引入“Liquid”，ether.fi 将这种二次收益行为内部化，将用户和资本锁定在自身生态内，并从中分享产生的价值。“Cash”则更进一步，消除了用户为满足现实世界消费需求而需要平仓或解除质押的痛点。这极大地增加了 TVL 的“粘性”，使 ether.fi 从一个单一功能的工具转变为一个综合性金融枢纽，从而增强了其长期的市场竞争力。

## **3\. 市场分析与竞争格局**

### **3.1 协议量化分析：高速增长的故事**

ether.fi 的增长速度在 DeFi 领域堪称典范，各项关键指标均呈现出指数级增长。

* **总锁定价值 (TVL)**：根据最新数据，ether.fi 的 TVL 已突破 100 亿美元大关，使其稳居以太坊所有 DeFi 协议的前五名 1。这一成就使其成为流动性再质押（LRT）赛道无可争议的领导者，其规模甚至超越了许多老牌的 DeFi 协议 2。  
* **费用与收入**：协议的成功直接转化为可观的财务数据。其年化费用高达数亿美元，为协议带来了数千万美元的年化收入 1。这证明了其核心质押服务具备强大的、可持续的商业模式，协议收入与其 TVL 规模直接挂钩。  
* **用户指标**：协议的采用率同样令人瞩目。ether.fi 已为超过 25 万个独立钱包提供服务 30，并且其 eETH 代币的持有者数量持续快速增长 21，这表明其产品在市场上获得了广泛的认可和使用。

### **3.2 竞争定位：LRT 市场的领导者**

在流动性再质押这一新兴赛道中，ether.fi 已经建立了显著的领先优势。

* **市场份额**：ether.fi 的 TVL 是其最接近的竞争对手（如 Renzo、Puffer Finance 和 Kelp DAO）的两倍以上，占据了该领域的主导市场份额 31。  
* **核心优势**：其竞争优势主要来源于几个方面：作为原生流动性再质押的先行者，享有先发优势；其非托管的安全模型吸引了大量对风险敏感的资本；以及其广泛的 DeFi 集成网络（官方宣称超过 400 个集成）24，这为 eETH 提供了丰富的应用场景和流动性。  
* **主要弱点**：ether.fi 的成功与 EigenLayer 生态系统深度绑定。这意味着任何与 EigenLayer 相关的安全事件、负面舆论或技术风险，都可能直接对其产生不利影响，构成其主要的外部依赖风险。

### **3.3 ETHFI 代币市场表现**

* **价格与市值**：截至本报告撰写时，ETHFI 代币的价格在 1.20 美元至 1.30 美元之间波动。其流通市值约为 5 亿至 5.4 亿美元，完全稀释估值（FDV）则在 12 亿至 13 亿美元左右 1。  
* **估值比率**：两个关键的估值指标值得关注：市值/TVL 比率约为 0.05，而 FDV/TVL 比率约为 0.12 36。这些比率是横向比较其与竞争对手估值水平的重要参考。  
* **交易量与流动性**：ETHFI 代币展现出健康的流动性，其 24 小时交易量通常超过 1 亿美元，并在各大主流中心化和去中心化交易所均有上线，确保了良好的市场深度 1。

较低的市值/TVL 比率（约 0.05）揭示了一个有趣的现象：市场当前对该协议治理代币的估值，相对于其管理的庞大资产规模而言，存在显著的折价。这可能暗示着两种截然不同的市场预期。一方面，这可能表明市场低估了该代币的长期价值，如果 ether.fi 能够维持其 TVL 优势并成功实现其价值捕获机制，那么当前估值水平可能存在较大的上升空间。另一方面，市场可能正在正确地为协议的潜在风险进行定价，这些风险包括新兴再质押模型的未知安全风险、未来大规模代币解锁带来的抛售压力，以及治理代币在早期阶段效用有限等。因此，这一比率是一个双刃剑，投资者需要结合下文的风险分析进行审慎解读。

| 协议 | 类别 | TVL (美元) | 流通市值 (美元) | FDV (美元) | TVL/流通市值 | 年化收入 (美元) |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **ether.fi** | LRT | 101.67 亿 | 5.13 亿 | 12.22 亿 | 19.82 | 3212 万 |  |
| **Renzo** | LRT | 13.27 亿 | 1.45 亿 | 12.7 亿 | 9.15 | 240 万 |  |
| **Puffer Finance** | LRT | 1.88 亿 | 1.25 亿 | 12.5 亿 | 1.50 | N/A |  |
| **Kelp DAO** | LRT | 16.76 亿 | N/A | N/A | N/A | N/A |  |
| **Lido** | LST | 339.74 亿 | 13.5 亿 | 15.1 亿 | 25.17 | 2.53 亿 |  |
| **Rocket Pool** | LST | 25.12 亿 | 4.49 亿 | 4.49 亿 | 5.60 | N/A |  |
| 注：数据来源于 DeFi Llama 1，截至撰写报告时的近似值，可能会有波动。部分数据（如收入）并非所有协议都可获得。 |  |  |  |  |  |  |  |

## **4\. ETHFI 代币：效用与代币经济学深度解析**

### **4.1 代币效用：治理及未来价值捕获**

ETHFI 代币是 ether.fi 生态系统的核心，其效用设计围绕着治理、安全和价值分享三个维度展开。

* **核心效用 \- 协议治理**：ETHFI 的首要功能是作为治理代币。持有者有权对协议的关键决策进行投票，包括国库资金的使用、重大协议升级、费用结构的调整以及节点运营商的白名单审批等 11。这赋予了代币持有者对协议未来发展方向的直接影响力。  
* **未来效用 \- 经济安全**：协议规划，未来节点运营商需要质押一定数量的 ETHFI 代币作为“保证金”（skin in the game），以对冲潜在的 slashing 风险 20。这一机制将为 ETHFI 赋予直接的经济安全效用，将其价值与协议的稳健运营深度绑定。  
* **价值捕获机制**：为了使代币持有者能分享协议的成功，ether.fi 设计了明确的价值回馈机制。协议收入的一部分将用于在公开市场上回购 ETHFI 代币，并分配给质押 ETHFI 的用户（sETHFI 持有者）39。此外，质押 ETHFI 还能解锁不同等级的“俱乐部”会员资格，从而获得更高的生态系统奖励 39。

### **4.2 代币分配与解锁：对未来供应的关键审视**

ETHFI 的代币分配和解锁计划是评估其长期投资价值的关键，因为它直接关系到未来的市场供需平衡。

* **总供应量**：ETHFI 的总供应量上限为 10 亿枚，已全部铸造，不会增发 30。  
* **代币分配**：代币分配方案显示，相当大一部分代币被分配给了早期投资者和核心团队，具体比例如下（不同来源数据略有差异）：  
  * 投资者：32.5% \- 33.74%  
  * 核心贡献者：21.47% \- 23.26%  
  * DAO 国库：21.63% \- 27.24%  
  * 用户空投：11% \- 17.57%  
  * 合作伙伴与流动性：3% \- 5.6%

    10  
* **解锁计划（Vesting Schedule）**：对投资者而言，最关键的信息是解锁计划。投资者和核心贡献者所持有的代币均设有 **1 年的锁仓期（cliff）**，之后开始线性解锁。投资者的解锁期为 2 年，团队的解锁期为 3 年 10。这意味着，自代币生成事件（TGE，约 2024 年 3 月）起一年后，即  
  **2025 年 3 月左右**，将有大量此前锁定的代币进入市场流通。

这种代币经济学结构创造了一个显著的“解锁悬崖”效应。超过 50% 的代币供应被分配给了团队和投资者，而这些代币将在 2025 年 3 月的锁仓期结束后开始逐步释放。根据基本的市场供需原理，在需求没有相应增长的情况下，流通供应量的大幅增加将对代币价格构成下行压力。因此，协议设计的价值捕获机制——如代币回购、sETHFI 质押收益和节点运营商质押需求——不仅仅是“功能”，而是对抗这一可预见的供应冲击的**关键对策**。投资者持有 ETHFI 穿越 2025 年的决定，实质上是在押注这些需求侧的举措能够成功地吸收和抵消来自供应侧的巨大压力。这是评估该代币中期投资价值时必须考虑的核心风险因素。

| 分配类别 | 占总供应量百分比 | 代币数量 | 锁仓期（Cliff） | 解锁完成日期 | 备注 |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **投资者** | 32.50% | 325,000,000 | 1 年 | TGE 后 3 年 | 1 年锁仓后，2 年线性解锁 10 |  |
| **核心贡献者** | 23.26% | 232,600,000 | 1 年 | TGE 后 4 年 | 1 年锁仓后，3 年线性解锁 10 |  |
| **DAO 国库与合作伙伴** | 28.94% | 289,400,000 | 不适用/待定 | 持续释放 | 用于生态系统激励、合作、流动性等 10 |  |
| **用户空投** | 15.30% | 153,000,000 | 无 | 立即/分季 | 分多个季度向社区用户发放 10 |  |
| **总计** | **100.00%** | **1,000,000,000** |  |  |  |  |
| 注：数据主要基于 Tokenomist 10，并与其他来源进行交叉验证。百分比可能因不同来源的分类方式而略有出入。 |  |  |  |  |  |  |

## **5\. 团队、投资者与开发活动评估**

### **5.1 创始人与核心团队：经验丰富的领导层**

一个项目的长期成功很大程度上取决于其领导团队的经验和执行力，ether.fi 在这方面表现出色。

* **创始人兼 CEO, Mike Silagadze**：Silagadze 拥有强大的连续创业背景。在创立 ether.fi 之前，他是教育科技公司 Top Hat 的联合创始人兼 CEO，并将该公司成功发展成为拥有 500 名员工、年收入达 6000 万美元的市场领导者 5。他自 2011 年起就涉足加密领域，对技术和商业规模化扩张都有深刻的理解 5。  
* **核心团队成员**：领导团队还包括联合创始人兼首席营收官（CRO）Rok Kopp、首席运营官（COO）Jozef Vogel 以及其他经验丰富的工程负责人 3。这表明 ether.fi 拥有一个在技术、商业和运营方面都配置均衡的专业团队。

创始人的背景是一个重要的风险缓解因素。Mike Silagadze 并非典型的加密原生创业者，而是一位在传统科技行业取得过验证性成功的资深企业家。这意味着他更有可能将运营纪律、战略规划和可持续商业模式的理念带入协议的建设中，这与许多依赖短期投机叙事的项目形成鲜明对比。投资 ether.fi 不仅是投资其技术，更是投资一位成熟创业者的执行能力，这在统计上增加了项目成功的概率。

### **5.2 投资者与支持者背景：顶级资本加持**

ether.fi 获得了加密领域一些最知名和最具影响力的风险投资机构和天使投资人的支持，这不仅为其提供了充足的资金，也带来了宝贵的行业资源和信誉背书。

* **融资情况**：项目通过两轮主要融资，共筹集了 3230 万美元 1。  
  * **种子轮（530 万美元）**：由 North Island VC 和 Chapter One 领投，知名投资者包括 BitMEX 联合创始人 Arthur Hayes 和 Arrington Capital 1。  
  * **A 轮（2700 万美元）**：由重量级风投机构 Bullish Capital 和 CoinFund 联合领投，参投方包括 OKX Ventures、ConsenSys 和 Amber Group 等行业巨头 1。  
* **战略价值**：获得这些顶级加密原生基金的支持，意味着 ether.fi 的商业模式和技术路径已经通过了最挑剔的专业投资者的尽职调查。这为其未来的合作、交易所上线以及生态系统整合提供了强大的推动力。

### **5.3 开发活跃度：积极且开源**

通过对项目代码库的分析，可以评估其开发团队的持续投入和技术迭代速度。

* **代码开源**：ether.fi 坚持开源原则，其核心智能合约、跨链解决方案和相关产品的代码均在 GitHub 上公开，供社区审查 22。  
* **开发活动**：其主要的 smart-contracts 代码库显示出持续的开发活动，包括定期的代码提交和多位贡献者的参与，这表明项目在不断进行维护、优化和功能迭代 1。

## **6\. 全面安全与风险评估**

在 DeFi 领域，安全是决定协议生死存亡的基石。本节对 ether.fi 的安全性进行多维度评估。

### **6.1 智能合约安全：多重审计的协议**

ether.fi 在智能合约安全方面投入了大量资源，采取了多重审计和漏洞赏金计划等措施，以最大限度地保障用户资金安全。

* **多轮审计**：协议已接受多家知名安全公司的审计，体现了其对安全的严肃态度 7。官方文档中链接了包含审计报告的 GitHub 仓库 57。  
  * **Solidified 审计 (2023年10月)**：这份报告尤为关键，它发现了 3 个严重（Critical）漏洞、2 个主要（Major）漏洞和 15 个次要（Minor）漏洞。报告显示，所有这些漏洞在最终版本中都已被标记为“已解决”或“部分解决”8。这些严重漏洞涉及未经授权取消存款和潜在的资金盗窃，凸显了协议早期代码的复杂性和高风险性。  
  * **其他审计机构**：资料中还提及了 CertiK 和 Zellic 等知名审计公司 7，以及针对其 Liquid 金库（改编自 Sommelier）的专项审计 58。  
* **漏洞赏金计划**：ether.fi 在 Immunefi 平台上设立了活跃的漏洞赏金计划，为发现并报告严重漏洞的白帽黑客提供最高 20 万美元的奖励，以此激励社区共同参与协议的安全保障工作 9。

Solidified 审计报告中发现的严重漏洞性质（例如，“任何人都可以调用...来取消存款”、“被回收的 EtherFiNode 的资金可能被盗取”）8，深刻揭示了构建一个复杂的非托管质押协议所面临的巨大技术挑战。尽管这些漏洞在被利用前已被发现并修复，但这证明了审计流程的价值，同时也突显了协议存在巨大的“尾部风险”。一个微小且未被发现的逻辑错误，都可能在这个由 NFT、验证器密钥、流动性池和拍卖机制交织的复杂系统中引发灾难性后果。因此，投资者必须认识到，尽管经过了多轮审计，该系统固有的复杂性意味着零日漏洞的风险不可忽视，且可能高于那些结构更简单的 DeFi 协议。

| 审计公司 | 日期 | 审计范围 | 严重/高危漏洞发现 | 修复状态 | 报告链接 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Solidified** | 2023年10月26日 | 核心 LSD 解决方案 | 3 个严重, 2 个主要 | 全部已解决/部分解决 | [链接](https://github.com/etherfi-protocol/smart-contracts/tree/master/audits) 8 |
| **Nethermind** | N/A | 主协议 | N/A | N/A | [链接](https://github.com/etherfi-protocol/smart-contracts/tree/master/audits) 56 |
| **Omniscia** | N/A | 主协议 | N/A | N/A | [链接](https://github.com/etherfi-protocol/smart-contracts/tree/master/audits) 56 |
| **CertiK** | N/A | 早期 Adopter Pool | N/A | N/A | [链接](https://github.com/etherfi-protocol/smart-contracts/tree/master/audits) 56 |
| **Zellic** | N/A | 早期 Adopter Pool | N/A | N/A | [链接](https://github.com/etherfi-protocol/smart-contracts/tree/master/audits) 56 |
| **0xMacro** | 2024年1月 | Liquid 金库合约 | N/A | N/A | [链接](https://0xmacro.com/library/audits/sommelier-16b.html) 58 |
| *注：表格信息基于现有资料整理，部分审计的详细报告和日期未在资料中明确提供。* |  |  |  |  |  |

### **6.2 历史事件与漏洞**

* **Discord 服务器入侵事件**：目前唯一记录在案的公开安全事件发生在 2025 年 6 月，当时项目的官方 Discord 服务器遭到入侵 60。攻击者在频道内发布了欺诈性链接，企图诱骗社区成员。然而，团队反应迅速，及时向社区发出警告。最重要的是，此次事件  
  **并未导致任何协议资金损失** 61。  
* **事件启示**：这一事件虽然未对协议本身造成损害，但暴露了社区运营层面面临的社会工程学和钓鱼攻击风险。团队在此次事件中展现出的快速响应和透明沟通能力，是其应急管理能力的积极体现 63。

### **6.3 系统性与协议级风险**

除了智能合约本身的漏洞，投资者还必须关注更广泛的系统性风险。

* **Slashing 风险**：作为再质押协议，ether.fi 将用户的资金暴露在双重 slashing 风险之下：一层来自以太坊共识层，另一层来自其所保护的多个 EigenLayer 主动验证服务（AVS）7。虽然 DVT 技术有助于分散单点故障风险，但来自多个 AVS 的累积风险是一个全新的、尚未被市场完全量化的威胁向量 67。  
* **脱锚 (De-Peg) 风险**：eETH/weETH 的价值被设计为与 ETH 紧密挂钩。然而，在极端的市场压力、流动性危机或大规模 slashing 事件中，LRT 的市场价格可能大幅低于其所代表的 ETH 价值，即发生“脱锚”。同为 LRT 赛道的 Renzo 协议的 ezETH 代币发生的严重脱锚事件，为整个行业敲响了警钟 68。ether.fi 在 Balancer 等平台上的深厚流动性是缓解此风险的关键因素，但风险依然存在 21。  
* **中心化与治理风险**：尽管协议是非托管的，但在其完全去中心化治理实现之前，部分关键的管理权限（如合约升级）可能仍由核心团队或多重签名钱包控制 58。这在当前阶段构成了一定的中心化风险，直到治理权完全移交给 ETHFI 代币持有者。

## **7\. 社区健康与社交情绪分析**

### **7.1 社区参与和平台**

ether.fi 已经建立了一套功能性的社区互动渠道，以支持用户并推动协议的去中心化治理。

* **主要平台**：项目的主要社区中心是其官方 Discord 服务器，用于日常用户支持、技术讨论和社区互动 69。此外，他们还设立了专门的治理论坛（Discourse），用于发布正式提案和进行深度讨论，这是协议去中心化进程的重要组成部分 70。  
* **社区管理**：尽管 Discord 服务器曾遭遇安全问题，但它仍然是社区最活跃的聚集地 60。团队在事件期间的积极沟通和管理，表明他们对社区运营的重视。

### **7.2 社交媒体情绪：复杂多元的图景**

通过分析社交媒体上的讨论，可以洞察社区对 ether.fi 的普遍看法和情绪。

* **Reddit**：在 Reddit 社区，关于 ether.fi 的讨论呈现出复杂但整体偏向积极或中性的情绪。早期参与空投和看好 LRT 赛道的用户普遍对项目的高速增长和市场领导地位持乐观态度 72。然而，也存在一些负面声音，主要集中在对技术问题的抱怨（如解除质押流程不顺畅）和对“积分 farming”模式的普遍怀疑 72。还有部分用户对所有加密信用卡产品持批评态度 75。  
* **Twitter/X**：虽然缺乏直接的量化情绪分析数据，但从项目官方账号的发布内容和社区互动来看，主流叙事是积极的，重点宣传其 TVL 的增长、新的合作伙伴关系以及生态系统的扩展 76。

### **7.3 关键叙事与争议：Justin Sun 空投事件**

在 ether.fi 的发展过程中，一次围绕空投分配的争议事件成为了社区关注的焦点，并考验了团队的治理智慧。

* **事件起因**：在第一季空投规则公布后，社区成员通过链上数据发现，波场（TRON）创始人孙宇晨（Justin Sun）因在活动截止前不久存入一笔巨额资金（20,000 ETH），预计将获得近 350 万枚 ETHFI 的巨额空投份额 32。  
* **社区反应**：这一发现引发了社区的广泛不满。许多早期支持者和散户认为，这种规则设计对“空投猎人”和巨鲸过于有利，而损害了长期、小额贡献者的利益。  
* **团队的解决方案**：面对争议，创始人 Mike Silagadze 公开回应。他一方面为遵守既定规则、平等对待包括巨鲸在内的所有参与者进行了辩护；另一方面，为了回应社区的关切，他宣布将增加空投的总量，从而在不改变对孙宇晨分配的前提下，提高其他所有社区成员的奖励 32。

这次空投争议及其解决过程，可以被视为对团队治理哲学的一次重要压力测试。团队最终选择的方案——既遵守规则，又通过增发奖励来“补偿”社区——展现了一种高度的务实主义。这个决策既向未来的大资本发出了信号，即 ether.fi 是一个遵守规则、值得信赖的平台，也向社区表明他们的声音得到了倾听和重视。这种在吸引巨鲸流动性和维护草根支持之间取得平衡的能力，是领导层成熟和善于处理复杂“加密政治”的积极信号。

## **8\. 可行的投资策略与机会**

本节旨在为不同风险偏好和技术背景的投资者提供一系列具体、可行的投资策略。下表对各种策略进行了系统性对比，随后将对每种策略进行详细阐述。

| 策略 | 描述 | 优点 | 缺点 | 预估 APR/APY 范围 | 关键风险 | 专业水平要求 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **策略 1: 直接投资 (ETHFI)** | 购买并持有 ETHFI 治理代币，作为对协议长期增长的投资。 | 直接分享协议成功；潜在升值空间大；拥有治理权。 | 波动性高；未来面临巨大解锁抛压；价值与治理效用挂钩，难以量化。 | N/A (资本利得) | 市场风险、代币解锁风险 | 初级 |
| **策略 2: 基础收益 (质押 ETH)** | 将 ETH 质押为 eETH/weETH，赚取基础质押收益、EigenLayer 积分和 ether.fi 积分。 | 风险相对较低；多层次收益来源；保持 ETH 资产的流动性。 | 基础收益率不高；积分价值具有投机性。 | \~3.3% (ETH APR) \+ 积分价值 | 智能合约风险、Slashing 风险 | 初级 |
| **策略 3: 高级收益 (DEX LP)** | 在 Balancer、Curve 等 DEX 为 weETH 交易对提供流动性。 | 在基础收益之上赚取交易费和额外激励。 | 无常损失风险；DEX 的智能合约风险。 | 5% \- 20%+ (高度可变) | 无常损失、智能合约风险 | 中级 |
| **策略 4: 杠杆收益 (Aave 循环贷)** | 在 Aave 上供应 weETH 作为抵押品，借出 ETH，再换成 weETH 存入，循环操作以建立杠杆。 | 可显著放大基础收益率。 | 清算风险极高；借款利率波动可能侵蚀利润。 | 7% \- 20%+ (取决于杠杆和利率) | **清算风险**、利率风险 | 高级 |
| **策略 5: 结构化产品 (Pendle)** | 在 Pendle 上将 weETH 拆分为本金代币(PT)和收益代币(YT)，进行固定利率或收益率投机。 | 可实现固定收益；可对未来收益率进行投机；精细化管理收益。 | 产品复杂，理解门槛高；YT 是高波动性的时间衰减资产。 | 固定收益：3%-15%；收益投机：-100% 至 \+∞ | 智能合约风险、市场判断失误风险 | 高级 |
| **策略 6: 开发者机会** | 利用开发背景，申请生态基金资助，或在协议之上构建自己的应用/策略。 | 直接从生态系统增长中获利；将技术能力转化为经济回报。 | 需要投入大量开发时间和精力；成功不确定性高。 | N/A (项目资助/创业回报) | 项目失败风险 | 开发者 |

### **8.1 策略 1：直接投资 (ETHFI 代币)**

这是最直接的投资方式，即购买并持有 ETHFI 代币。该策略的成功取决于投资者对 ether.fi 协议长期价值的信念。如果协议能够持续增长，其价值捕获机制（如回购和安全质押）将推动代币需求，从而可能带来资本增值。然而，投资者必须警惕其高波动性和 2025 年后因代币解锁而带来的巨大抛售压力。

### **8.2 策略 2：基础收益 (质押 ETH 换取 eETH/weETH)**

这是参与 ether.fi 生态最基础且风险相对较低的方式。投资者将 ETH 存入协议，获得流动性代币 eETH 或 weETH。此策略的回报是多层次的：

1. **ETH 质押 APR**：约 3.3% 的基础收益，来自以太坊网络自身的质押奖励 24。  
2. **EigenLayer 积分**：由于存入的 ETH 被自动再质押，用户会持续累积 EigenLayer 积分，这些积分在未来可能有空投价值 16。  
3. **ether.fi 忠诚度积分**：协议自身的积分系统，同样可能与未来的奖励或空投挂钩。

### **8.3 策略 3：高级收益 (DEX 流动性提供)**

持有 weETH 的投资者可以通过在 DEX 上提供流动性（LP）来赚取额外收益。例如，在 Balancer 上的 weETH/WETH 池或 Curve 上的相关池 21。LP 的回报主要来自交易对产生的交易费用，有时还会有额外的代币激励（如 BAL 或 CRV）。此策略的主要风险是无常损失（Impermanent Loss），即当池中代币价格发生相对变动时，LP 的资产价值可能会低于简单持有这些代币的价值。

### **8.4 策略 4：杠杆收益 (Aave 上的递归循环)**

这是一种高风险、高回报的策略，适合经验丰富的 DeFi 用户。基本流程如下 78：

1. 在 Aave 等借贷协议中，存入 weETH 作为抵押品。  
2. 以 weETH 为抵押，借出 ETH。  
3. 将借来的 ETH 在 DEX 上兑换成更多的 weETH。  
4. 将新的 weETH 再次存入 Aave，增加抵押品价值，从而可以借出更多 ETH。  
5. 重复上述步骤，直到达到理想的杠杆倍数。

只要 weETH 的基础收益率高于 ETH 的借款利率，每次循环都会增加净 APY。然而，此策略的风险极高。一旦 weETH 相对于 ETH 的价格下跌，导致抵押品的健康度低于清算阈值，头寸将被清算，造成本金损失。

### **8.5 策略 5：结构化产品 (Pendle Finance)**

Pendle Finance 是一个收益率交易市场，它允许用户将生息资产（如 weETH）拆分为本金代币（PT）和收益代币（YT）82。

* **获取固定收益**：投资者可以折价购买 PT-weETH。持有至到期日，PT-weETH 将可以 1:1 兑换回 weETH。购买价格与面值之间的差价，即为锁定的固定收益。  
* **做多未来收益**：投资者可以购买 YT-weETH。如果未来 weETH 产生的实际总收益（包括质押 APR 和所有积分价值）高于市场当前对 YT 的定价，投资者将获利。这是一种对未来收益率的高杠杆投机。

### **8.6 策略 6：开发者机会**

对于具备开发背景的投资者，ether.fi 生态系统提供了更深度的参与方式。

* **生态系统基金**：DAO 国库中高达 21.63% 的代币被指定用于“生态系统基金”，旨在资助那些能促进 ether.fi 和以太坊生态发展的项目 12。有想法的开发者可以围绕 ether.fi 构建工具、集成或 DApp，并申请资金支持。  
* **构建自动化策略或服务**：利用协议的开源代码 22 和可编程的 NFT 基础设施 18，开发者可以创建自己的自动化金库、风险管理工具或其他增值服务，并以此为基础开展商业活动。这是一个更具创业性质的高级机会。

## **9\. 结论与最终投资建议**

经过对 ether.fi 的技术架构、市场地位、团队背景、安全状况和经济模型的全面分析，本报告得出以下结论：

ether.fi 已经成功地在“再质押”这一极具潜力的新兴 DeFi 赛道中，确立了其作为市场领导者的地位。其对非托管和去中心化原则的坚持，不仅是技术上的实现，更是一种精准的战略定位，成功吸引了大量对安全和主权高度敏感的资本。由经验丰富的企业家领导的强大团队、顶级风险投资机构的背书，以及对安全性的持续投入，共同构成了其坚实的基本面。

然而，巨大的机遇也伴随着不容忽视的风险。再质押作为一种新生事物，其长期的经济安全模型和累积风险效应尚未经过完整的市场周期检验。协议智能合约的高度复杂性带来了固有的技术风险，而 LRT 代币在极端市场条件下可能发生的脱锚事件，以及 2025 年即将到来的大规模代币解锁所带来的抛售压力，都是投资者必须正视的重大挑战。

综上所述，本报告的最终投资建议为 **“建议”**。此建议主要针对具备以下特征的投资者：**拥有较高的风险承受能力、对 DeFi 协议有深入的理解，并对 EigenLayer 和再质押的长期叙事抱有信心的成熟投资者。** 投资 ether.fi 本质上是对整个 EigenLayer 生态系统未来发展的一次高 Beta 押注。对于那些相信共享安全将成为以太坊未来重要组成部分的投资者而言，尽管风险重重，ether.fi 目前无疑是捕捉这一趋势的最佳投资标的。

## **10\. 参考文献**

1

#### **引用的著作**

1. ether.fi \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/ether.fi](https://defillama.com/protocol/ether.fi)  
2. Powering Liquid Restaking at Scale: Ether.fi's Rise and Implications for Institutions, 访问时间为 七月 27, 2025， [https://infstones.com/blog/industry/powering-liquid-restaking-at-scale-etherfis-rise-and-implications-for-institutions](https://infstones.com/blog/industry/powering-liquid-restaking-at-scale-etherfis-rise-and-implications-for-institutions)  
3. ether.fi price today, ETHFI to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/ether-fi-ethfi/](https://coinmarketcap.com/currencies/ether-fi-ethfi/)  
4. Technical Documentation | ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper/technical-documentation](https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper/technical-documentation)  
5. Mike Silagadze \- People in crypto \- IQ.wiki, 访问时间为 七月 27, 2025， [https://iq.wiki/wiki/mike-silagadze](https://iq.wiki/wiki/mike-silagadze)  
6. Ethereum liquid restaking protocol Ether.fi closes a $27 million investment round | The Block, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/279586/ethereum-liquid-restaking-protocol-ether-fi-closes-a-27-million-investment-round](https://www.theblock.co/post/279586/ethereum-liquid-restaking-protocol-ether-fi-closes-a-27-million-investment-round)  
7. What is ether.fi? | Exponential DeFi, 访问时间为 七月 27, 2025， [https://exponential.fi/protocols/etherfi/795717b7-e5f0-4866-941d-c1019893ce65](https://exponential.fi/protocols/etherfi/795717b7-e5f0-4866-941d-c1019893ce65)  
8. Audit Report for ether.fi \- October 26, 2023 \- GitBook, 访问时间为 七月 27, 2025， [https://246895607-files.gitbook.io/\~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FG3Lk76lfvw9ecPIg0mK8%2Fuploads%2FZgymtAAi8L1kkuuzrT9E%2FAudit\_Report\_-\_ether.fi\_26.10.2023.pdf?alt=media\&token=1d8564be-61de-42ca-96c5-b21e58ef5155](https://246895607-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FG3Lk76lfvw9ecPIg0mK8%2Fuploads%2FZgymtAAi8L1kkuuzrT9E%2FAudit_Report_-_ether.fi_26.10.2023.pdf?alt=media&token=1d8564be-61de-42ca-96c5-b21e58ef5155)  
9. Ether.fi Bug Bounties \- Immunefi, 访问时间为 七月 27, 2025， [https://immunefi.com/bug-bounty/etherfi/](https://immunefi.com/bug-bounty/etherfi/)  
10. Ether.fi (ETHFI) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 七月 27, 2025， [https://tokenomist.ai/ether-fi](https://tokenomist.ai/ether-fi)  
11. ether.fi (ETHFI) \- Binance, 访问时间为 七月 27, 2025， [https://www.binance.com/research/projects/etherfi](https://www.binance.com/research/projects/etherfi)  
12. ETHFI Allocations | Governance \- ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/gov/ethfi-allocations](https://etherfi.gitbook.io/gov/ethfi-allocations)  
13. ether.fi Price, ETHFI Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/ether-fi-ethfi](https://www.coinbase.com/price/ether-fi-ethfi)  
14. How to Get Started with Ether.fi Staking: A Comprehensive Guide | KuCoin Learn, 访问时间为 七月 27, 2025， [https://www.kucoin.com/learn/web3/earn-higher-eth-staking-rewards-with-ether-fi](https://www.kucoin.com/learn/web3/earn-higher-eth-staking-rewards-with-ether-fi)  
15. Ether.fi steps closer to liquid restaked token for EigenLayer \- Blockworks, 访问时间为 七月 27, 2025， [https://blockworks.co/news/etherfi-eigenlayer-liquid-restaked-token](https://blockworks.co/news/etherfi-eigenlayer-liquid-restaked-token)  
16. Understanding Restaking: What Is EigenLayer? \- Origin Protocol, 访问时间为 七月 27, 2025， [https://www.originprotocol.com/what-is-eigenlayer](https://www.originprotocol.com/what-is-eigenlayer)  
17. EigenLayer & LRT Points \- Llama Risk, 访问时间为 七月 27, 2025， [https://www.llamarisk.com/research/eigenlayer-lrt-points](https://www.llamarisk.com/research/eigenlayer-lrt-points)  
18. ether.fi \- Decentralized Finance \- IQ.wiki, 访问时间为 七月 27, 2025， [https://iq.wiki/wiki/etherfi](https://iq.wiki/wiki/etherfi)  
19. Ether.fi Explained: eETH, Liquid Vaults & ETHFI \- Datawallet, 访问时间为 七月 27, 2025， [https://www.datawallet.com/crypto/ether-fi-explained](https://www.datawallet.com/crypto/ether-fi-explained)  
20. Wrapped eETH | Digital Assets \- Bullish, 访问时间为 七月 27, 2025， [https://bullish.com/digital-assets/weeth-wrapped-eeth/](https://bullish.com/digital-assets/weeth-wrapped-eeth/)  
21. Collateral Risk Assessment \- Wrapped EtherFi ETH (weETH) \- HackMD, 访问时间为 七月 27, 2025， [https://hackmd.io/@PrismaRisk/weETH](https://hackmd.io/@PrismaRisk/weETH)  
22. ether.fi protocol \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/etherfi-protocol](https://github.com/etherfi-protocol)  
23. ether.fi | Veda, 访问时间为 七月 27, 2025， [https://docs.veda.tech/vault-deployments/ether.fi](https://docs.veda.tech/vault-deployments/ether.fi)  
24. Save, Grow, Spend. Do more with your crypto | ether.fi, 访问时间为 七月 27, 2025， [https://www.ether.fi/](https://www.ether.fi/)  
25. eETH | etherfi, 访问时间为 七月 27, 2025， [https://www.ether.fi/app/weeth](https://www.ether.fi/app/weeth)  
26. Portfolio | etherfi, 访问时间为 七月 27, 2025， [https://www.ether.fi/app/portfolio](https://www.ether.fi/app/portfolio)  
27. ether.fi – Medium, 访问时间为 七月 27, 2025， [https://etherfi.medium.com/](https://etherfi.medium.com/)  
28. Ethereum \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/Ethereum](https://defillama.com/chain/Ethereum)  
29. Ether.fi announces $23M Series A round as restaking interest grows \- Blockworks, 访问时间为 七月 27, 2025， [https://blockworks.co/news/ether-fi-funding-restaking-interest](https://blockworks.co/news/ether-fi-funding-restaking-interest)  
30. Everything You Need to Know About Ether.Fi Airdrop (ETHFI) Season 1 & 2 \- Bitrue FAQ, 访问时间为 七月 27, 2025， [https://support.bitrue.com/hc/en-001/articles/30028827386009-Everything-You-Need-to-Know-About-Ether-Fi-Airdrop-ETHFI-Season-1-2](https://support.bitrue.com/hc/en-001/articles/30028827386009-Everything-You-Need-to-Know-About-Ether-Fi-Airdrop-ETHFI-Season-1-2)  
31. ether.fi Stake (ETHFI) \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/ether.fi-stake](https://defillama.com/protocol/ether.fi-stake)  
32. Ether.fi announces airdrop, will adjust token allocation following community complaints, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/282962/ether-fi-announces-airdrop-will-adjust-token-allocation-following-community-complaints](https://www.theblock.co/post/282962/ether-fi-announces-airdrop-will-adjust-token-allocation-following-community-complaints)  
33. Ether.fi Price: ETHFI Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 七月 27, 2025， [https://www.bybit.com/en/price/ether-fi/](https://www.bybit.com/en/price/ether-fi/)  
34. ether.fi Price | ETHFI Price, Charts \- Crypto.com, 访问时间为 七月 27, 2025， [https://crypto.com/price/ether-fi-ethfi](https://crypto.com/price/ether-fi-ethfi)  
35. Ether.fi Price: ETHFI Price Index and Live Chart \- The Block, 访问时间为 七月 27, 2025， [https://www.theblock.co/price/283169/ether-fi-ethfi-usd](https://www.theblock.co/price/283169/ether-fi-ethfi-usd)  
36. Ether.fi Price: ETHFI Live Price Chart, Market Cap & News Today ..., 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/ether-fi](https://www.coingecko.com/en/coins/ether-fi)  
37. $ETHFI (ETHFI): Ether.fi Governance Token \- Bullish, 访问时间为 七月 27, 2025， [https://bullish.com/digital-assets/ethfi/](https://bullish.com/digital-assets/ethfi/)  
38. Announcing ETHFI: The ether.fi Governance Token \- Medium, 访问时间为 七月 27, 2025， [https://etherfi.medium.com/announcing-ethfi-the-ether-fi-governance-token-8cae7327763a](https://etherfi.medium.com/announcing-ethfi-the-ether-fi-governance-token-8cae7327763a)  
39. Save, Grow, Spend. Do more with your crypto \- Ether.fi, 访问时间为 七月 27, 2025， [https://www.ether.fi/ethfi](https://www.ether.fi/ethfi)  
40. Bullish Capital and CoinFund Co-Lead $23M Series A for Liquid Restaking Protocol Ether.fi \- Fundz, 访问时间为 七月 27, 2025， [https://www.fundz.net/fundings/ether-fi-funding-round-series-a-dcb6af](https://www.fundz.net/fundings/ether-fi-funding-round-series-a-dcb6af)  
41. Ether.Fi Foundation (ETHFI) Tokenomics: Market Insights, Token Supply, Distribution & Price Data | MEXC, 访问时间为 七月 27, 2025， [https://www.mexc.com/en-GB/price/ETHFI/tokenomics](https://www.mexc.com/en-GB/price/ETHFI/tokenomics)  
42. What is ether.fi (ETHFI)| How To Get & Use ether.fi \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/ether.fi/what-is](https://www.bitget.com/price/ether.fi/what-is)  
43. ether.fi Unlocks \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/unlocks/ether.fi](https://defillama.com/unlocks/ether.fi)  
44. Mike Silagadze, CEO of ether.fi, on ETH, Re-Staking, and Building Start-Ups \- Crypto News, 访问时间为 七月 27, 2025， [https://cryptonews.com/exclusives/mike-silagadze-ceo-of-etherfi-on-eth-re-staking-and-building-start-ups-ep-238/](https://cryptonews.com/exclusives/mike-silagadze-ceo-of-etherfi-on-eth-re-staking-and-building-start-ups-ep-238/)  
45. Mike Silagadze Speaker Profile \- Blockworks, 访问时间为 七月 27, 2025， [https://blockworks.co/speaker/mike-silagadze](https://blockworks.co/speaker/mike-silagadze)  
46. Meet Mike Silagadze, Founder and CEO of EtherFi \- Cayman Enterprise City, 访问时间为 七月 27, 2025， [https://www.caymanenterprisecity.com/blog/meet-mike-silagadze](https://www.caymanenterprisecity.com/blog/meet-mike-silagadze)  
47. coinmarketcap.com, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/ether-fi-ethfi/\#:\~:text=ether.fi%2C%20a%20liquid%20restaking%20protocol%20on%20Ethereum%2C%20was,crucial%20roles%20in%20its%20creation.](https://coinmarketcap.com/currencies/ether-fi-ethfi/#:~:text=ether.fi%2C%20a%20liquid%20restaking%20protocol%20on%20Ethereum%2C%20was,crucial%20roles%20in%20its%20creation.)  
48. Team | ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper/team](https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper/team)  
49. ether.fi \- 2025 Company Profile, Funding & Competitors \- Tracxn, 访问时间为 七月 27, 2025， [https://tracxn.com/d/companies/ether.fi/\_\_ybuswctFLX6Yyk0tndtj8aoDimNowhN3z\_XQDPgnARo](https://tracxn.com/d/companies/ether.fi/__ybuswctFLX6Yyk0tndtj8aoDimNowhN3z_XQDPgnARo)  
50. Ether.Fi company information, funding & investors \- Amsterdam Startup Map, 访问时间为 七月 27, 2025， [https://startupmap.iamsterdam.com/companies/etherfi](https://startupmap.iamsterdam.com/companies/etherfi)  
51. Arthur Hayes \- Raises \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/raises/arthur-hayes](https://defillama.com/raises/arthur-hayes)  
52. Ether.Fi | Bullish Capital & CoinFund led $26M funding round, 访问时间为 七月 27, 2025， [https://bullish.com/news-insights/news/ether-fi-secures-23m-in-funding-led-by-bullish-capital-and-coinfund/](https://bullish.com/news-insights/news/ether-fi-secures-23m-in-funding-led-by-bullish-capital-and-coinfund/)  
53. Bullish Capital and CoinFund Co-Lead $23M Series a for Liquid Restaking Protocol Ether.fi | NFTgators on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-NG/square/post/4732510399162](https://www.binance.com/en-NG/square/post/4732510399162)  
54. ether.fi protocol smart contracts \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/etherfi-protocol/smart-contracts](https://github.com/etherfi-protocol/smart-contracts)  
55. Contracts and Integrations | ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/contracts-and-integrations](https://etherfi.gitbook.io/etherfi/contracts-and-integrations)  
56. Investing in ether.fi: a Leader at the Forefront of Native Productive Rewards | by Evan Feng, 访问时间为 七月 27, 2025， [https://blog.coinfund.io/investing-in-ether-fi-a-leader-at-the-forefront-of-native-productive-rewards-878252cbe234](https://blog.coinfund.io/investing-in-ether-fi-a-leader-at-the-forefront-of-native-productive-rewards-878252cbe234)  
57. Audits | ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/security/audits](https://etherfi.gitbook.io/etherfi/security/audits)  
58. Technical Documentation | ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/liquid/technical-documentation](https://etherfi.gitbook.io/etherfi/liquid/technical-documentation)  
59. Bug Bounty \- ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/security/bug-bounty](https://etherfi.gitbook.io/etherfi/security/bug-bounty)  
60. Urgent: Ether.fi Issues Critical Discord Security Warning Amid Investigation \- CoinStats, 访问时间为 七月 27, 2025， [https://coinstats.app/news/82ecf6891545704646f4e1a694e101360e5e41214650c2ed5095c5d7b0ac0d38\_Urgent-Etherfi-Issues-Critical-Discord-Security-Warning-Amid-Investigation/](https://coinstats.app/news/82ecf6891545704646f4e1a694e101360e5e41214650c2ed5095c5d7b0ac0d38_Urgent-Etherfi-Issues-Critical-Discord-Security-Warning-Amid-Investigation/)  
61. Ether.fi Discord Hacked No Funds Lost \- AInvest, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/ether-fi-discord-hacked-funds-lost-2506/](https://www.ainvest.com/news/ether-fi-discord-hacked-funds-lost-2506/)  
62. Ether.fi Secures Accounts After Discord Breach \- AInvest, 访问时间为 七月 27, 2025， [https://www.ainvest.com/news/ether-fi-secures-accounts-discord-breach-2506/](https://www.ainvest.com/news/ether-fi-secures-accounts-discord-breach-2506/)  
63. ether.fi: The Discord platform issue has been controlled and is being actively monitored | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604801144](https://www.bitget.com/news/detail/12560604801144)  
64. The Risks of Crypto Staking: Slashing, Lock-Up Periods, and Volatility \- ChainUp, 访问时间为 七月 27, 2025， [https://www.chainup.com/blog/risks-of-crypto-staking-slashing-lockup-volatility/](https://www.chainup.com/blog/risks-of-crypto-staking-slashing-lockup-volatility/)  
65. \[Chaos Labs\] Cap \- Risk Analysis \- Protocol & Proposals \- ether.fi, 访问时间为 七月 27, 2025， [https://governance.ether.fi/t/chaos-labs-cap-risk-analysis/2971](https://governance.ether.fi/t/chaos-labs-cap-risk-analysis/2971)  
66. ether.fi Staking \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper/ether.fi-staking](https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper/ether.fi-staking)  
67. Restaking is 'inevitable,' but the risks are still uncertain — Ether.fi CEO \- Cointelegraph, 访问时间为 七月 27, 2025， [https://cointelegraph.com/news/restaking-inevitable-risks-still-uncertain-ether-fi-ceo](https://cointelegraph.com/news/restaking-inevitable-risks-still-uncertain-ether-fi-ceo)  
68. Renzo's ezETH Depeg Amid Criticism of Airdrop Underlines Broader Risks in Restaking, 访问时间为 七月 27, 2025， [https://unchainedcrypto.com/renzos-ezeth-depeg-amid-criticism-of-airdrop-underlines-broader-risks-in-restaking/](https://unchainedcrypto.com/renzos-ezeth-depeg-amid-criticism-of-airdrop-underlines-broader-risks-in-restaking/)  
69. How to get support from the ether.fi team, 访问时间为 七月 27, 2025， [https://help.ether.fi/en/articles/268340-how-to-get-support-from-the-ether-fi-team](https://help.ether.fi/en/articles/268340-how-to-get-support-from-the-ether-fi-team)  
70. Announcements \- ether.fi, 访问时间为 七月 27, 2025， [https://governance.ether.fi/c/announcements/7](https://governance.ether.fi/c/announcements/7)  
71. Welcome to the ether.fi DAO Discourse, 访问时间为 七月 27, 2025， [https://governance.ether.fi/t/welcome-to-the-ether-fi-dao-discourse/17](https://governance.ether.fi/t/welcome-to-the-ether-fi-dao-discourse/17)  
72. Thoughts on Ether Fi : r/defi \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/defi/comments/1bida39/thoughts\_on\_ether\_fi/](https://www.reddit.com/r/defi/comments/1bida39/thoughts_on_ether_fi/)  
73. Opinions on ether.fi? : r/ethereum \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/ethereum/comments/1bja1rv/opinions\_on\_etherfi/](https://www.reddit.com/r/ethereum/comments/1bja1rv/opinions_on_etherfi/)  
74. Ether.fi breaks out: Staking surge sends TVL to record high : r/ethtrader \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/ethtrader/comments/1kkk5uk/etherfi\_breaks\_out\_staking\_surge\_sends\_tvl\_to/](https://www.reddit.com/r/ethtrader/comments/1kkk5uk/etherfi_breaks_out_staking_surge_sends_tvl_to/)  
75. Etherfi credit card. : r/defi \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/defi/comments/1e5s3mb/etherfi\_credit\_card/](https://www.reddit.com/r/defi/comments/1e5s3mb/etherfi_credit_card/)  
76. Ether.Fi, the liquid staking platform on the Ethereum Network, announces a strategic collaboration with Symbiotics. This collaboration is an advanced step to drive the next wave of network deployments. EtherFi has shared this exclusive news with the crypto community through its official X account. : r/ethtrader \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/ethtrader/comments/1etmeyz/etherfi\_the\_liquid\_staking\_platform\_on\_the/](https://www.reddit.com/r/ethtrader/comments/1etmeyz/etherfi_the_liquid_staking_platform_on_the/)  
77. EigenLayer ETH Restaking \- Crypto.com Help Center, 访问时间为 七月 27, 2025， [https://help.crypto.com/en/articles/9388145-eigenlayer-eth-restaking](https://help.crypto.com/en/articles/9388145-eigenlayer-eth-restaking)  
78. Aave whales withdraw $1.7bn in Ethereum and trigger scramble to unwind looping trades, 访问时间为 七月 27, 2025， [https://www.dlnews.com/articles/defi/defi-whales-trigger-mass-staking-unwind-after-withdrawing-ethereum-from-aave/](https://www.dlnews.com/articles/defi/defi-whales-trigger-mass-staking-unwind-after-withdrawing-ethereum-from-aave/)  
79. Leverage Staking with Liquid Staking Derivatives (LSDs): Opportunities and Risks \- arXiv, 访问时间为 七月 27, 2025， [https://arxiv.org/pdf/2401.08610](https://arxiv.org/pdf/2401.08610)  
80. Analyzing Leveraged Staking Strategies After the Shapella Fork | by Pedro M. Negron, 访问时间为 七月 27, 2025， [https://medium.com/sentora/analyzing-leveraged-staking-strategies-after-the-shapella-fork-4c71791b5d0e](https://medium.com/sentora/analyzing-leveraged-staking-strategies-after-the-shapella-fork-4c71791b5d0e)  
81. Exploring Institutional DeFi: ETH Leveraged Staking Strategy | by Lucas Outumuro \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/sentora/eth-leveraged-staking-strategy-d51bc9a11c13](https://medium.com/sentora/eth-leveraged-staking-strategy-d51bc9a11c13)  
82. Interest Rate Derivatives and Pendle \- Crypto.com, 访问时间为 七月 27, 2025， [https://crypto.com/en/research/interest-rate-derivatives-pendle-may-2025](https://crypto.com/en/research/interest-rate-derivatives-pendle-may-2025)  
83. What is Pendle Finance and How Does It Work? | by Slobodzeanb | Satoshi Club \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/realsatoshiclub/what-is-pendle-finance-and-how-does-it-work-98c16d80cf14](https://medium.com/realsatoshiclub/what-is-pendle-finance-and-how-does-it-work-98c16d80cf14)  
84. Pendle Finance, Yield Tokenisation, and Fixed Rates in DeFi | Apollo Crypto, 访问时间为 七月 27, 2025， [https://apollocrypto.com/wp-content/uploads/2021/09/Pendle-Finance-Yield-Tokenisation-and-Fixed-Rates-in-DeFi-1-2.pdf](https://apollocrypto.com/wp-content/uploads/2021/09/Pendle-Finance-Yield-Tokenisation-and-Fixed-Rates-in-DeFi-1-2.pdf)  
85. ether.fi Price ETHFI \- Delta Investment Tracker, 访问时间为 七月 27, 2025， [https://delta.app/en/crypto/ether.fi/](https://delta.app/en/crypto/ether.fi/)  
86. Circulating market cap \- Ether.fi \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/etherfi/metrics/market-cap-circulating](https://tokenterminal.com/explorer/projects/etherfi/metrics/market-cap-circulating)  
87. LIVE Etherfi price today \- ETHFI price chart & live trends \- Kraken, 访问时间为 七月 27, 2025， [https://www.kraken.com/prices/etherfi](https://www.kraken.com/prices/etherfi)  
88. EtherFi Cash \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/etherfi-cash](https://defillama.com/protocol/etherfi-cash)  
89. DefiLlama \- DeFi Dashboard, 访问时间为 七月 27, 2025， [https://defillama.com/](https://defillama.com/)  
90. All Chains DeFi TVL \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chains](https://defillama.com/chains)  
91. Calculate ether.fi to Pound Sterling Live Today (ETHFI-GBP) \- CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/ether-fi-ethfi/ethfi/gbp/](https://coinmarketcap.com/currencies/ether-fi-ethfi/ethfi/gbp/)  
92. ETHFI ETH: ether.fi in kurssi Yhdysvaltain Ethereum tänään \- CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/fi/currencies/ether-fi-ethfi/ethfi/eth/](https://coinmarketcap.com/fi/currencies/ether-fi-ethfi/ethfi/eth/)  
93. ETHFI ETH: احسب ether.fi إلى Ethereum مباشر اليوم \- CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/ar/currencies/ether-fi-ethfi/ethfi/eth/](https://coinmarketcap.com/ar/currencies/ether-fi-ethfi/ethfi/eth/)  
94. ether.fi Bridged weETH (Base) USD Historical Data \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/ether-fi-bridged-weeth-base/historical\_data](https://www.coingecko.com/en/coins/ether-fi-bridged-weeth-base/historical_data)  
95. Introduction \- CoinGecko, 访问时间为 七月 27, 2025， [https://docs.coingecko.com/reference/introduction](https://docs.coingecko.com/reference/introduction)  
96. Immutable price today, IMX to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/immutable-x/](https://coinmarketcap.com/currencies/immutable-x/)  
97. Token Unlocks | Track The Most Updated Data and Complete Vesting Schedules, 访问时间为 七月 27, 2025， [https://tokenomist.ai/](https://tokenomist.ai/)  
98. LI.FI \- Bridge & DEX Aggregation Protocol, 访问时间为 七月 27, 2025， [https://li.fi/](https://li.fi/)  
99. ether.fi Whitepaper \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper](https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper)  
100. ether.fi Help Center, 访问时间为 七月 27, 2025， [https://help.ether.fi/en/](https://help.ether.fi/en/)  
101. Ether.fi Community Resources, 访问时间为 七月 27, 2025， [https://help.ether.fi/en/articles/234983-ether-fi-community-resources](https://help.ether.fi/en/articles/234983-ether-fi-community-resources)  
102. ethereum \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/ethereum](https://github.com/ethereum)  
103. tradingstrategy-ai/web3-ethereum-defi: A Python library for trading automation on DeFi, data research and integration. Supporting Uniswap, Aave, Chainlink, USDC and other protocols. \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/tradingstrategy-ai/web3-ethereum-defi](https://github.com/tradingstrategy-ai/web3-ethereum-defi)  
104. EtherFi \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/GadzeFinance](https://github.com/GadzeFinance)  
105. yearn \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/yearn](https://github.com/yearn)  
106. Ether.fi Staked BTC EBTC Price \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/ether-fi-staked-btc](https://www.coingecko.com/en/coins/ether-fi-staked-btc)  
107. Technical Documentation | ether.fi \- GitBook, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/cash/technical-documentation](https://etherfi.gitbook.io/etherfi/cash/technical-documentation)  
108. ether.fi Staked ETH (EETH) \- Cryptohopper, 访问时间为 七月 27, 2025， [https://www.cryptohopper.com/currencies/detail?currency=EETH](https://www.cryptohopper.com/currencies/detail?currency=EETH)  
109. ProShares Ether ETF EETH:NYSE Arca \- Charles Schwab, 访问时间为 七月 27, 2025， [https://www.schwab.com/research/etfs/quotes/summary/EETH](https://www.schwab.com/research/etfs/quotes/summary/EETH)  
110. How Ether Futures ETFs Work and How To Invest \- Investopedia, 访问时间为 七月 27, 2025， [https://www.investopedia.com/ether-futures-etf-definition-8363103](https://www.investopedia.com/ether-futures-etf-definition-8363103)  
111. How an Ether Futures ETF Works \- Investopedia, 访问时间为 七月 27, 2025， [https://www.investopedia.com/how-an-ether-futures-etf-works-8360797](https://www.investopedia.com/how-an-ether-futures-etf-works-8360797)  
112. Ethereum ETF (EETH) \- Global X ETFs \- Australia, 访问时间为 七月 27, 2025， [https://www.globalxetfs.com.au/funds/eeth/](https://www.globalxetfs.com.au/funds/eeth/)  
113. EigenLayer and Ether.fi have both transformed. Can the staking track business no longer be continued?, 访问时间为 七月 27, 2025， [https://www.gate.com/learn/articles/eigen-layer-and-ether-fi-have-both-transformed-can-the-staking-track-business-no-longer-be-continued/10361](https://www.gate.com/learn/articles/eigen-layer-and-ether-fi-have-both-transformed-can-the-staking-track-business-no-longer-be-continued/10361)  
114. ether.fi-2 \- P2P.org \- Eigenlayer App, 访问时间为 七月 27, 2025， [https://app.eigenlayer.xyz/operator/0x4bd479a34450d0cb1f5ef16a877bee47e1e4cdb9](https://app.eigenlayer.xyz/operator/0x4bd479a34450d0cb1f5ef16a877bee47e1e4cdb9)  
115. EtherFi (ETHFI) token sale analytics and information, private/seed sale price, tokenomics, 访问时间为 七月 27, 2025， [https://icoanalytics.org/projects/etherfi/](https://icoanalytics.org/projects/etherfi/)  
116. Ether.fi \- ETHFI \- Token Terminal, 访问时间为 七月 27, 2025， [https://tokenterminal.com/explorer/projects/etherfi](https://tokenterminal.com/explorer/projects/etherfi)  
117. Ether.fi (ETHFI) | Upcoming & Historical Token Unlock Events, 访问时间为 七月 27, 2025， [https://www.tokenomist.ai/ether-fi/unlock-events](https://www.tokenomist.ai/ether-fi/unlock-events)  
118. What is Etherfi (ETHFI)| How To Get & Use Etherfi ... \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/etherfi/what-is](https://www.bitget.com/price/etherfi/what-is)  
119. Ether.Fi Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/Ether.Fi?k=NzExNA%3D%3D](https://www.rootdata.com/Projects/detail/Ether.Fi?k=NzExNA%3D%3D)  
120. Staking, restaking, and the EigenLayer ecosystem with ether.fi CEO & Founder, Mike Silagadze \- Blockdaemon, 访问时间为 七月 27, 2025， [https://www.blockdaemon.com/resources/staking-restaking-and-the-eigenlayer-ecosystem-with-ether-fi-ceo-founder-mike-silagadze](https://www.blockdaemon.com/resources/staking-restaking-and-the-eigenlayer-ecosystem-with-ether-fi-ceo-founder-mike-silagadze)  
121. $ETHFI Meet Mike Silagadze, Founder and CEO of EtherFi. F | I SEE YOU 1 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-IN/square/post/20144425521505](https://www.binance.com/en-IN/square/post/20144425521505)  
122. Mike Silagadze \- Inovia VC, 访问时间为 七月 27, 2025， [https://www.inovia.vc/founders/company-founders/mike-silagadze/](https://www.inovia.vc/founders/company-founders/mike-silagadze/)  
123. Mike Silagadze \- RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/member/Mike%20Silagadze?k=ODc3OA%3D%3D](https://www.rootdata.com/member/Mike%20Silagadze?k=ODc3OA%3D%3D)  
124. $ETHFI Meet Mike Silagadze, Founder and CEO of EtherFi. F | I SEE YOU 1 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en-NG/square/post/20144425521505](https://www.binance.com/en-NG/square/post/20144425521505)  
125. Senior Backend Engineer (multiple roles) \- LI.FI \- Himalayas, 访问时间为 七月 27, 2025， [https://himalayas.app/companies/li-fi/jobs/senior-backend-engineer-multiple-roles](https://himalayas.app/companies/li-fi/jobs/senior-backend-engineer-multiple-roles)  
126. Staking, restaking, and the EigenLayer ecosystem with ether.fi CEO & Founder, Mike Silagadze \- YouTube, 访问时间为 七月 27, 2025， [https://www.youtube.com/watch?v=oFTFBXo33Wk](https://www.youtube.com/watch?v=oFTFBXo33Wk)  
127. WOO X Yet to Resume Withdrawals After $14M User Funds Stolen in Phishing Attack, 访问时间为 七月 27, 2025， [https://crypto-economy.com/woo-x-yet-to-resume-withdrawals-after-14m-user-funds-stolen-in-phishing-attack/](https://crypto-economy.com/woo-x-yet-to-resume-withdrawals-after-14m-user-funds-stolen-in-phishing-attack/)  
128. ether.fi \- Fintech, Information Technology Company Profile, Funding Rounds and Investors, 访问时间为 七月 27, 2025， [https://www.bouncewatch.com/explore/startup/etherfi](https://www.bouncewatch.com/explore/startup/etherfi)  
129. Ether.Fi secures $23M in funding led by Bullish Capital and CoinFund \- Cayman Finance, 访问时间为 七月 27, 2025， [https://caymanfinance.ky/2024/03/04/ether-fi-secures-23m-in-funding-led-by-bullish-capital-and-coinfund/](https://caymanfinance.ky/2024/03/04/ether-fi-secures-23m-in-funding-led-by-bullish-capital-and-coinfund/)  
130. Ether.Fi Announces $23M in Funding Led by Bullish Capital and CoinFund | Financial IT, 访问时间为 七月 27, 2025， [https://financialit.net/news/fundraising-news/etherfi-announces-23m-funding-led-bullish-capital-and-coinfund](https://financialit.net/news/fundraising-news/etherfi-announces-23m-funding-led-bullish-capital-and-coinfund)  
131. Ether.fi raises $23m in Series A funding \- News by FinTech Collective, 访问时间为 七月 27, 2025， [https://news.fintech.io/post/102j1e1/ether-fi-raises-23m-in-series-a-funding](https://news.fintech.io/post/102j1e1/ether-fi-raises-23m-in-series-a-funding)  
132. Investing in ether.fi: a Leader at the Forefront of Native Productive Rewards \- CoinFund, 访问时间为 七月 27, 2025， [https://coinfund.io/investing-in-ether-fi-a-leader-at-the-forefront-of-native-productive-rewards/](https://coinfund.io/investing-in-ether-fi-a-leader-at-the-forefront-of-native-productive-rewards/)  
133. Bitcoin $250,000, Ether $10,000 By Year-End? Arthur Hayes Thinks So \- Mitrade, 访问时间为 七月 27, 2025， [https://www.mitrade.com/insights/news/live-news/article-3-980680-20250723](https://www.mitrade.com/insights/news/live-news/article-3-980680-20250723)  
134. Arthur Hayes' Maelstrom backs Aethir in funding round at $150 million valuation | The Block, 访问时间为 七月 27, 2025， [https://www.theblock.co/post/241498/arthur-hayes-maelstrom-aethir](https://www.theblock.co/post/241498/arthur-hayes-maelstrom-aethir)  
135. Arthur Hayes deposited 3000 ETH into ether.fi 16 minutes ago | Bitget News, 访问时间为 七月 27, 2025， [https://www.bitget.com/news/detail/12560604050026](https://www.bitget.com/news/detail/12560604050026)  
136. Ether, A Double Digit Shitcoin | BitMEX Blog, 访问时间为 七月 27, 2025， [https://blog.bitmex.com/ether-a-double-digit-shitcoin/](https://blog.bitmex.com/ether-a-double-digit-shitcoin/)  
137. AI Audit Report for ether.fi governance token token – Automated Security Analysis \- HashEx, 访问时间为 七月 27, 2025， [https://hashex.org/auto-audits/ethereum/0xfe0c30065b384f05761f15d0cc899d4f9f9cc0eb/](https://hashex.org/auto-audits/ethereum/0xfe0c30065b384f05761f15d0cc899d4f9f9cc0eb/)  
138. Smart Contract Audit \- CertiK, 访问时间为 七月 27, 2025， [https://www.certik.com/products/smart-contract-audit](https://www.certik.com/products/smart-contract-audit)  
139. Audit Database \- De.Fi, 访问时间为 七月 27, 2025， [https://de.fi/audit-database](https://de.fi/audit-database)  
140. SolidityScan: Best Smart Contract Scanner & Auditing Tool, 访问时间为 七月 27, 2025， [https://solidityscan.com/](https://solidityscan.com/)  
141. Solidity Audits Portfolio \- InterFi Network, 访问时间为 七月 27, 2025， [https://www.interfi.network/audits](https://www.interfi.network/audits)  
142. ether.fi Staked BTC Smart Contract Audit \- Cyberscope, 访问时间为 七月 27, 2025， [https://www.cyberscope.io/audits/coin-etherfi-ebtc](https://www.cyberscope.io/audits/coin-etherfi-ebtc)  
143. Quillhash/QuillAudit\_Reports: QuillAudits Smart Contracts, deFi, NFT, tokens,Dao , Dex and DApps Audit Reports \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Quillhash/QuillAudit\_Reports](https://github.com/Quillhash/QuillAudit_Reports)  
144. DeFi Score Solidity Scanner Tool \- Free Smart Contract Audit, 访问时间为 七月 27, 2025， [https://de.fi/scanner](https://de.fi/scanner)  
145. Top Crypto Hacks and Exploits in 2025 (So Far) \- CCN.com, 访问时间为 七月 27, 2025， [https://www.ccn.com/education/crypto/crypto-hacks-exploits-full-list-scams-vulnerabilities/](https://www.ccn.com/education/crypto/crypto-hacks-exploits-full-list-scams-vulnerabilities/)  
146. Immunefi Top 10 Bugs, 访问时间为 七月 27, 2025， [https://immunefi.com/immunefi-top-10/](https://immunefi.com/immunefi-top-10/)  
147. A hacker stole $31M of Ether — how it happened, and what it means for Ethereum | by Haseeb Qureshi | We've moved to freeCodeCamp.org/news | Medium, 访问时间为 七月 27, 2025， [https://medium.com/free-code-camp/a-hacker-stole-31m-of-ether-how-it-happened-and-what-it-means-for-ethereum-9e5dc29e33ce](https://medium.com/free-code-camp/a-hacker-stole-31m-of-ether-how-it-happened-and-what-it-means-for-ethereum-9e5dc29e33ce)  
148. Phishing attack drains $2 million from one victim \- Web3 is Going Just Great, 访问时间为 七月 27, 2025， [https://www.web3isgoinggreat.com/?id=etherfi-phishing](https://www.web3isgoinggreat.com/?id=etherfi-phishing)  
149. 2024 Most Exploited DeFi Vulnerabilities \- By Three Sigma, 访问时间为 七月 27, 2025， [https://threesigma.xyz/blog/exploit/2024-defi-exploits-top-vulnerabilities](https://threesigma.xyz/blog/exploit/2024-defi-exploits-top-vulnerabilities)  
150. List of Crypto Hacks in the Month of November \- ImmuneBytes, 访问时间为 七月 27, 2025， [https://immunebytes.com/blog/list-of-crypto-hacks-in-the-month-of-november/](https://immunebytes.com/blog/list-of-crypto-hacks-in-the-month-of-november/)  
151. Cointelegraph: Bitcoin, Ethereum, Crypto News & Price Indexes, 访问时间为 七月 27, 2025， [https://cointelegraph.com/](https://cointelegraph.com/)  
152. SafeMoon \- Wikipedia, 访问时间为 七月 27, 2025， [https://en.wikipedia.org/wiki/SafeMoon](https://en.wikipedia.org/wiki/SafeMoon)  
153. Amid Bullying and Controversy, Vitalik Buterin Reaffirms Authority Over Ethereum Foundation \- UNLOCK Blockchain, 访问时间为 七月 27, 2025， [https://www.unlock-bc.com/136314/amid-bullying-and-controversy-vitalik-buterin-reaffirms-authority-over-ethereum-foundation/](https://www.unlock-bc.com/136314/amid-bullying-and-controversy-vitalik-buterin-reaffirms-authority-over-ethereum-foundation/)  
154. Ethereum is "Terrifyingly" Centralized but there's a way out, ether.fi founder says \- "The Defiant", 访问时间为 七月 27, 2025， [https://thedefiant.io/newsletter/archive/ethereum-is-terrifyingly-centralized-but-there-s-a-way-out-ether-fi-founder-says](https://thedefiant.io/newsletter/archive/ethereum-is-terrifyingly-centralized-but-there-s-a-way-out-ether-fi-founder-says)  
155. What's the risk of slashing? : r/ethereum \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/ethereum/comments/1id5ppj/whats\_the\_risk\_of\_slashing/](https://www.reddit.com/r/ethereum/comments/1id5ppj/whats_the_risk_of_slashing/)  
156. \[Chaos Labs\] ETHGas \- Risk Analysis \- Protocol & Proposals \- ether.fi, 访问时间为 七月 27, 2025， [https://governance.ether.fi/t/chaos-labs-ethgas-risk-analysis/2959](https://governance.ether.fi/t/chaos-labs-ethgas-risk-analysis/2959)  
157. ethereum/public-disclosures \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/ethereum/public-disclosures](https://github.com/ethereum/public-disclosures)  
158. Stake with Lido | Lido, 访问时间为 七月 27, 2025， [https://stake.lido.fi/](https://stake.lido.fi/)  
159. Your First Day As A Bug Bounty Hunter On Immunefi \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/immunefi/your-first-day-as-a-bug-bounty-hunter-on-immunefi-9b101768a40c](https://medium.com/immunefi/your-first-day-as-a-bug-bounty-hunter-on-immunefi-9b101768a40c)  
160. Hackers Wanted: $1M Bounties Entice White Hats to Hunt for DeFi Bugs \- The Defiant, 访问时间为 七月 27, 2025， [https://thedefiant.io/news/hacks/immunefi-bug-bounty-defi](https://thedefiant.io/news/hacks/immunefi-bug-bounty-defi)  
161. PeckShield \- Industry Leading Blockchain Security Company, 访问时间为 七月 27, 2025， [https://m.peckshield.com/](https://m.peckshield.com/)  
162. Smart Contract Audit Companies & Blockchain Auditors \- Milk Road, 访问时间为 七月 27, 2025， [https://milkroad.com/security/audit/](https://milkroad.com/security/audit/)  
163. Find 69 Certik Alternatives (2025) \- Alchemy, 访问时间为 七月 27, 2025， [https://www.alchemy.com/dapps/alternatives/certik](https://www.alchemy.com/dapps/alternatives/certik)  
164. Audit Firms Ranking : r/ethdev \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/ethdev/comments/131vydl/audit\_firms\_ranking/](https://www.reddit.com/r/ethdev/comments/131vydl/audit_firms_ranking/)  
165. fatemenajafi135/Crypto-sentiment: A service for analysing sentiments of crypro-related tweets based on coins \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/fatemenajafi135/Crypto-sentiment](https://github.com/fatemenajafi135/Crypto-sentiment)  
166. Ethereum(ETH) Price Today, ETH to USD Real-Time, Latest Discussions, Interactive Chart & News \- Stocktwits, 访问时间为 七月 27, 2025， [https://stocktwits.com/symbol/ETH.X](https://stocktwits.com/symbol/ETH.X)  
167. (PDF) Twitter Sentiment Data Analysis of User Behavior on Cryptocurrencies: Bitcoin and Ethereum \- ResearchGate, 访问时间为 七月 27, 2025， [https://www.researchgate.net/publication/344906216\_Twitter\_Sentiment\_Data\_Analysis\_of\_User\_Behavior\_on\_Cryptocurrencies\_Bitcoin\_and\_Ethereum](https://www.researchgate.net/publication/344906216_Twitter_Sentiment_Data_Analysis_of_User_Behavior_on_Cryptocurrencies_Bitcoin_and_Ethereum)  
168. cardiffnlp/twitter-roberta-base-sentiment \- Hugging Face, 访问时间为 七月 27, 2025， [https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment)  
169. What Are The Trending Cryptocurrencies On CoinMarketCap?, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/trending-cryptocurrencies/](https://coinmarketcap.com/trending-cryptocurrencies/)  
170. ethfinance \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/ethfinance/](https://www.reddit.com/r/ethfinance/)  
171. ethereum.org \- Discord, 访问时间为 七月 27, 2025， [https://discord.com/invite/ethereum-org](https://discord.com/invite/ethereum-org)  
172. What is Kamino Finance? Review of Solana's Liquidity & Lending Hub \- Crypto Economy, 访问时间为 七月 27, 2025， [https://crypto-economy.com/kamino-finance/](https://crypto-economy.com/kamino-finance/)  
173. Swell: Liquid restaking for DeFi, 访问时间为 七月 27, 2025， [https://www.swellnetwork.io/](https://www.swellnetwork.io/)  
174. How I lost \~100.000$ in Telegram Wallet : r/CryptoCurrency \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/CryptoCurrency/comments/1djl8q3/how\_i\_lost\_100000\_in\_telegram\_wallet/](https://www.reddit.com/r/CryptoCurrency/comments/1djl8q3/how_i_lost_100000_in_telegram_wallet/)  
175. Puffer: Building the Future of Ethereum, 访问时间为 七月 27, 2025， [https://www.puffer.fi/](https://www.puffer.fi/)  
176. Ethena Fi, 访问时间为 七月 27, 2025， [https://ethena.fi/](https://ethena.fi/)  
177. CoinGecko News: The front page of cryptocurrency and blockchain, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/news](https://www.coingecko.com/en/news)  
178. Latest news on cryptocurrency, blockchain and finances. \- Cointelegraph, 访问时间为 七月 27, 2025， [https://cointelegraph.com/category/latest-news](https://cointelegraph.com/category/latest-news)  
179. Crypto funds post record $4.4B inflows as Ether ETPs break 2024 gains \- Cointelegraph, 访问时间为 七月 27, 2025， [https://cointelegraph.com/news/crypto-funds-4-4b-inflows-ether-etp-surpass-2024-gains](https://cointelegraph.com/news/crypto-funds-4-4b-inflows-ether-etp-surpass-2024-gains)  
180. The Block: Bitcoin, Ethereum & Crypto News | Live Prices, Data & Indices, 访问时间为 七月 27, 2025， [https://www.theblock.co/](https://www.theblock.co/)  
181. sky.money, 访问时间为 七月 27, 2025， [https://sky.money/](https://sky.money/)  
182. ether.fi (ETHFI) Technical Analysis \- Investing.com, 访问时间为 七月 27, 2025， [https://www.investing.com/crypto/ether-fi-ethfi/technical](https://www.investing.com/crypto/ether-fi-ethfi/technical)  
183. Ether.fi (ETHFI) Price and Market Analysis \- Meria, 访问时间为 七月 27, 2025， [https://www.meria.com/en/price/ETHFI](https://www.meria.com/en/price/ETHFI)  
184. EigenLayer ETH Restaking \- Crypto.com Help Center, 访问时间为 七月 27, 2025， [https://help.crypto.com/en/articles/9393455-eigenlayer-eth-restaking](https://help.crypto.com/en/articles/9393455-eigenlayer-eth-restaking)  
185. Wrapped eETH WEETH Lending Rates: Compare Best APY \- Bitcompare, 访问时间为 七月 27, 2025， [https://bitcompare.net/coins/wrapped-eeth/lending-rates](https://bitcompare.net/coins/wrapped-eeth/lending-rates)  
186. Wrapped eETH WEETH Interest Rates: Lending, Staking & Live Prices \- Bitcompare, 访问时间为 七月 27, 2025， [https://bitcompare.net/coins/wrapped-eeth](https://bitcompare.net/coins/wrapped-eeth)  
187. Guide: Stake & Provide Liquidity on Curve \- Lido: Help, 访问时间为 七月 27, 2025， [https://help.lido.fi/en/articles/6213126-guide-stake-provide-liquidity-on-curve](https://help.lido.fi/en/articles/6213126-guide-stake-provide-liquidity-on-curve)  
188. Aave \- Open Source Liquidity Protocol, 访问时间为 七月 27, 2025， [https://app.aave.com/](https://app.aave.com/)  
189. Wrapped eETH (WEETH) Price and Course: Everything You Need to Know \- Meria, 访问时间为 七月 27, 2025， [https://www.meria.com/en/price/WEETH](https://www.meria.com/en/price/WEETH)  
190. Core Market \- Aave \- Open Source Liquidity Protocol, 访问时间为 七月 27, 2025， [https://app.aave.com/markets/](https://app.aave.com/markets/)  
191. 80/20 Balancer Pools. One of the main motivations behind… | by Fernando Martinelli \- Medium, 访问时间为 七月 27, 2025， [https://medium.com/balancer-protocol/80-20-balancer-pools-ad7fed816c8d](https://medium.com/balancer-protocol/80-20-balancer-pools-ad7fed816c8d)  
192. Pendle \- Liberating Yield, 访问时间为 七月 27, 2025， [https://www.pendle.finance/](https://www.pendle.finance/)  
193. Pendle 2025: Building DeFi's Fixed Income Layer \- Greythorn Asset Management \- Medium, 访问时间为 七月 27, 2025， [https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd](https://0xgreythorn.medium.com/pendle-2025-building-defis-fixed-income-layer-175a5eeb10fd)  
194. Applicants Overview | Ethereum Foundation ESP \- Ecosystem Support Program, 访问时间为 七月 27, 2025， [https://esp.ethereum.foundation/applicants](https://esp.ethereum.foundation/applicants)  
195. Academic Grants Round | Ethereum Foundation ESP \- Ecosystem Support Program, 访问时间为 七月 27, 2025， [https://esp.ethereum.foundation/academic-grants](https://esp.ethereum.foundation/academic-grants)  
196. Eclipse, 访问时间为 七月 27, 2025， [https://www.eclipse.xyz/](https://www.eclipse.xyz/)  
197. Ethereum High-Yield Strategy • MEV Capital • DeFi, 访问时间为 七月 27, 2025， [https://mevcapital.com/products/ethereum-high-yield-strategy/](https://mevcapital.com/products/ethereum-high-yield-strategy/)  
198. ether.fi Staked ETH price today, EETH to USD live price, marketcap ..., 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/ether-fi/](https://coinmarketcap.com/currencies/ether-fi/)  
199. 访问时间为 一月 1, 1970， [https://etherfi.gitbook.io/etherfi/governance/ethfi-tokenomics](https://etherfi.gitbook.io/etherfi/governance/ethfi-tokenomics)  
200. 访问时间为 一月 1, 1970， [https://crypto-fundraising.info/projects/ether-fi/](https://crypto-fundraising.info/projects/ether-fi/)  
201. 访问时间为 一月 1, 1970， [https://github.com/etherfi-protocol/security/tree/main/audits](https://github.com/etherfi-protocol/security/tree/main/audits)  
202. 访问时间为 一月 1, 1970， [https://twitter.com/ether\_fi](https://twitter.com/ether_fi)  
203. 访问时间为 一月 1, 1970， [https://www.reddit.com/r/ether\_fi/](https://www.reddit.com/r/ether_fi/)  
204. 访问时间为 一月 1, 1970， [https://www.theblock.co/search?query=ether.fi](https://www.theblock.co/search?query=ether.fi)  
205. 访问时间为 一月 1, 1970， [https://medium.com/ether-fi](https://medium.com/ether-fi)  
206. 访问时间为 一月 1, 1970， [https://defillama.com/yields?token=ETHFI\&token=eETH](https://defillama.com/yields?token=ETHFI&token=eETH)  
207. Pendle Documentation | Pendle Documentation, 访问时间为 七月 27, 2025， [https://docs.pendle.finance/](https://docs.pendle.finance/)  
208. ether.fi: Getting Started, 访问时间为 七月 27, 2025， [https://etherfi.gitbook.io/etherfi/](https://etherfi.gitbook.io/etherfi/)