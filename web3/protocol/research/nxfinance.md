

# **NX Finance (NX) 深度投资评估报告**

## **第一部分：执行摘要**

### **1.1. 核心论点**

本报告的核心结论是：NX Finance 是一个在 Solana 生态系统中具有高度创新性但同时伴随极高风险的杠杆收益协议。它提供了独特且具有潜在高回报的“积分金融（PointFi）”和杠杆收益策略，尤其是在利用杠杆挖矿其他协议（如 Solayer）的空投积分方面，展现了其独特的市场定位。然而，这些诱人的机会被一系列严重的危险信号所掩盖，其中包括关于创始人历史的严重指控、缺乏可验证的公开安全审计报告、代码不开源以及其原生代币（$NX）流动性极低等关键问题。

### **1.2. 关键发现概要**

* **机遇**：项目的主要吸引力在于其提供的高 APR/APY 策略，特别是对 Jupiter 流动性池（JLP）的杠杆挖矿和对 Solayer 等协议积分的杠杆 farming，这满足了当前市场对“空投套利”的强烈需求 1。其总锁定价值（TVL）在短期内迅速增长，证明其产品在特定细分市场具有吸引力 4。  
* **风险**：投资该项目面临着三大根本性风险：  
  1. **创始人风险**：加密研究员 0xmcraider 指控其创始人 TIN Yi KUNG（又名 Timmy）有多次创建项目并在融资后放弃的不良记录，这构成了严重的“软跑路”（soft rug）风险 2。  
  2. **安全风险**：尽管项目方声称已通过 SlowMist 审计，但在本次深入调查中未能找到任何公开可验证的审计报告，且其智能合约代码不开源，使独立验证无法进行 6。  
  3. **市场风险**：$NX 代币的日交易量极低，市场流动性严重不足，任何稍大额的卖单都可能导致价格崩盘 6。

### **1.3. 最终投资评级**

**投资评级：强烈不建议 (Strongly Not Recommended)**

综合评估，对于任何审慎的投资者而言，该项目未经缓解的治理风险、安全风险和市场风险远超过其潜在的财务回报。在团队采取根本性措施（如发布完整的第三方审计报告、开源其代码库并公开透明地回应关于创始人历史的指控）之前，投资 NX Finance 无异于一场高风险的赌博。

## **第二部分：协议概述与价值主张**

### **2.1. NX Finance 简介**

NX Finance 是一个于 2024 年第二季度在 Solana 区块链上推出的可组合收益与杠杆协议 10。其核心使命是通过整合收益聚合器和创新的“PointFi”机制，帮助用户最大化其生息资产和空投积分的潜在回报 11。

需要特别指出的是，本次分析的 NX Finance 是部署在 Solana 上的协议（代币符号：NX，合约地址：BAsnXPVYuvZDfEFR7tmu9sG9gPyHy58Jpjs2AuUw1FLx），它与一个部署在币安智能链（BSC）上名为“Nxtech Network”的项目无关，后者是另一个完全不同的实体 1。投资者应注意区分，避免混淆。

### **2.2. 核心产品线与策略**

NX Finance 的产品主要围绕“杠杆”这一核心，为不同风险偏好的用户提供多样化的收益策略。

* **杠杆收益挖矿（“支点策略”，Fulcrum Strategy）**：该策略允许用户对其持有的生息资产进行最高 10 倍的杠杆操作。最典型的例子是针对 Jupiter 流动性池代币（JLP）的杠杆挖矿。其机制为：用户存入 JLP 作为抵押品，从协议中借出稳定币（如 USDC），再用借出的稳定币购买更多的 JLP，从而循环构建一个放大了的 JLP 多头头寸，以博取更高的基础收益 1。  
* **杠杆积分挖矿（“淘金策略”，Gold Mining Strategy）**：这是 NX Finance 最具创新性和时效性的策略。它允许用户通过最高 10 倍的杠杆来“挖矿”其他尚未发币协议的空投积分。报告引用的具体案例包括对 Solayer 和 The Vault 等热门协议的积分 farming。用户可以通过杠杆显著放大其积分累积速度，从而押注这些项目未来空投的价值 2。  
* **借贷金库 (Lending Vaults)**：这是协议中面向风险偏好较低用户的一侧。用户可以将单边资产（如 SOL 或 USDC）存入借贷金库，这些资金将被借给进行杠杆操作的用户。存款人无需进行主动管理，即可赚取相对稳定的借贷利息，为保守型投资者提供了参与协议的途径 2。

### **2.3. 独特卖点与目标市场**

NX Finance 的核心独特卖点（USP）在于其**对杠杆积分挖矿的专注**。在当前“空投季”的市场大环境下，这是一种需求旺盛但工具稀缺的策略。它精准地服务了那些希望最大化潜在空投收益但缺乏技术能力或时间进行复杂手动循环借贷操作的资深 DeFi 用户 3。其次，其对 JLP 等成熟生息资产提供的高达 10 倍的杠杆，也吸引了追求极致资本效率和高回报的风险承受型收益农民 1。

因此，其目标市场画像非常清晰：了解并愿意承担杠杆、清算等高风险，以换取超额回报的激进型 DeFi 玩家（通常被称为“degens”）。

该协议的价值主张与短暂的“空投热潮”紧密相连。其“淘金策略”的成功，完全依赖于市场上持续出现像 Solayer 这样备受期待的高价值空投目标。这种盈利模式并非内生于协议本身，而是寄生于外部协议的未来代币价值预期。这意味着，如果未来空投热潮减退，或者像 Solayer 这样的重点项目空投结果不及预期，那么驱动 NX Finance TVL 和用户增长的核心引擎将熄火。这构成了对其商业模式长期可持续性的严重挑战，使其更像一个周期性的投机工具，而非一个能够穿越牛熊的金融基础设施。

## **第三部分：市场与竞争分析**

### **3.1. 链上指标与表现分析**

* **总锁定价值 (TVL)**：NX Finance 在 2024 年中旬实现了惊人的 TVL 增长，迅速突破 1000 万美元大关，这反映了其产品在特定市场需求下的强大吸引力 4。根据 DeFi Llama 的最新数据，其 TVL 稳定在约 1012 万美元 15。  
* **代币 ($NX) 表现**：  
  * **价格与市值**：截至本报告撰写时，$NX 的价格约为 0.036 美元，流通市值约 140 万美元，完全稀释估值（FDV）约为 360 万美元 5。其历史最高价约为 0.10 美元，历史最低价约为 0.024 美元，显示出极高的价格波动性 5。  
  * **交易量**：这是一个致命的弱点。$NX 代币的 24 小时交易量**极其稀少**，通常仅在 1000 至 2000 美元之间徘徊 5。这表明市场流动性严重枯竭，任何中等规模的交易都可能对价格造成剧烈冲击。

### **3.2. 用户基础与协议收入**

* **用户采纳**：尽管缺乏精确的独立钱包地址数据，但 TVL 的快速增长强烈暗示其用户基础正在扩大，这很可能是由其空投活动和独特的积分挖矿策略所驱动 7。  
* **协议收入**：根据币安广场上一篇分析文章的估算，NX Finance 的月度协议收入约为 2 万美元。这部分收入主要来源于两个方面：对杠杆用户的盈利部分收取 10% 的绩效费，以及借贷池中的利差 2。这个数据为协议的基本面提供了一个估值参考。

### **3.3. 竞争格局**

NX Finance 在 Solana 拥挤的 DeFi 赛道中，通过其独特的定位找到了生存空间。下表将其与几个主要的收益聚合器和杠杆挖矿协议进行对比。

**表1：Solana 杠杆收益及聚合器赛道竞争矩阵**

| 协议 | TVL (美元) | 协议收入 (可用数据) | 市值 / FDV (美元) | 核心产品与差异化 |
| :---- | :---- | :---- | :---- | :---- |
| **NX Finance** | 约 1012 万 15 | 估计月收入 2 万 2 | 约 140 万 / 360 万 10 | **杠杆积分挖矿 (PointFi)**，高杠杆 JLP 挖矿 3 |
| **Meteora** | 约 8.36 亿 18 | 24小时费用 207 万 19 | N/A | 动态流动性做市商 (AMM)，收益聚合器 15 |
| **Lulo** | 约 8423 万 21 | N/A | N/A | 收益聚合器 15 |
| **Francium** | 约 1052 万 22 | N/A | N/A | 通用型杠杆收益挖矿平台 23 |
| **Tulip Protocol** | 约 8077 25 | N/A | 约 13.1 万 25 | 自动复利金库，杠杆收益挖矿 23 |

通过此表可以清晰地看出，尽管 NX Finance 在 TVL 和市值上远不及 Meteora 这样的巨头，但其对**杠杆化积分挖矿**的专注，是其他竞争对手未明确提供的核心差异化服务，这解释了它为何能在激烈的竞争中吸引到千万级别的 TVL。

然而，协议的 TVL 与其代币价值之间存在着危险的脱钩。超过 1000 万美元的 TVL 表明用户信任协议的智能合约（至少在短期内）并认为其产品有用。但与之形成鲜明对比的是，$NX 代币极低的交易量和微不足道的市值。这揭示了一个深层问题：用户愿意将资金存入协议以使用其杠杆服务，但他们对持有 $NX 代币本身毫无兴趣，甚至可能在获得后立即抛售。这种现象是典型的“雇佣兵资本”（mercenary capital）的特征，表明代币经济模型未能成功创造一个“协议使用驱动代币价值”的正向飞轮。市场似乎已经通过价格反映了其对项目治理和创始人背景的极度不信任。

## **第四部分：技术架构与代币经济学**

### **4.1. 协议架构**

NX Finance 的架构建立在 Solana 之上，作为一个可组合的协议层，它深度整合并依赖于生态系统中的其他 DeFi 基础设施 12。

* **核心依赖**：协议的核心策略，如杠杆化 JLP，严重依赖于 Jupiter 协议来获取 JLP 代币和执行策略中的代币交换 1。这意味着任何关于 Jupiter 或 JLP 的稳定性问题都会直接传导至 NX Finance，构成了一层系统性风险。同时，其杠杆功能的基础是借贷模型，用户存款构成了借贷池，协议的健康状况与借贷市场的利率和流动性息息相关 2。  
* **代码透明度缺失**：在本次调查中，一个最关键的发现是，**项目方没有提供任何公开的 GitHub 代码库** 27。这在去中心化金融领域是极其罕见且危险的行为。它使得独立开发者和安全研究员无法对代码的质量、安全性或功能进行审查，完全违背了 Web3 的透明和可验证精神。

### **4.2. $NX 代币经济学与效用**

* **供应与分配**：  
  * **初始总供应量**：100,000,000 枚 $NX 5。  
  * **近期销毁**：项目方近期宣布销毁了 13.5% 的代币，使总供应量减少至 8650 万枚 2。然而，关于此次销毁的代币来源和具体执行细节缺乏透明的说明。  
  * **流通供应量**：目前市场上流通的 $NX 约为 3830 万枚 1。  
* **代币效用（当前与承诺）**：  
  * **当前效用**：$NX 代币目前的主要用途有两个：1) **收入分享**，质押者可以分享协议收入的 30% 至 50%；2) **积分加速**，持有或质押 $NX 可以加速用户在协议中挖矿（如 Solayer 积分）的累积速度 2。  
  * **承诺效用**：根据其白皮书的描述，项目方承诺未来将实现 100% 的协议收入分享、赋予代币完整的治理功能，并为代币持有者提供协议费用减免 2。当前效用与未来承诺之间的差距，是评估团队执行力和可信度的关键点。

### **4.3. 路线图与开发活动**

* **官方路线图**：调查未能发现任何正式、详尽的公开路线图。项目提及的“未来计划”非常模糊，例如“将进一步扩大抵押品类型” 10。这种缺乏清晰战略愿景的情况，对长期投资者而言是一个显著的风险。  
* **开发活动**：由于缺乏公开的 GitHub，外界无法评估项目的代码提交频率、开发团队的规模或整体开发流程的健康状况。这是一种严重的运营不透明。根据社区分析，整个项目可能由一个不超过 10 人的小团队负责开发和运营 2。

尽管代币经济学设计了收入分享机制，理论上应能通过协议的现金流（每月约 2 万美元）来支撑其价值 2。然而，这种价值捕获的反馈循环被完全打破了。市场对代币的极低估值表明，投资者对协议的未来现金流给出了极高的折现率。这种高折现率的根源在于对创始人和安全性的极度不信任。投资者不愿意长期持有代币来捕获未来的协议收入，因为他们不相信协议或团队能够长期存在。因此，白皮书中关于 100% 收入分享的承诺在当前市场看来并不可信，代币的实际用途已退化为短期投机或积分加速的工具，而非对协议成功的长期投资。

## **第五部分：安全与风险评估**

### **5.1. 安全审计：一次关键的调查**

项目的安全性是评估 DeFi 投资的基石，而 NX Finance 在此方面的表现令人极度担忧。

* **矛盾的信息**：关于审计状况，市场信息极为混乱。部分资料（如项目自己的宣传）声称已通过 SlowMist 的审计 7，而另一些第三方平台（如 Bitget）则明确警告用户项目缺乏正式审计 8。Solflare 平台声称其已审计，但同样未提供任何报告链接 6。  
* **最终调查结论**：经过对 SlowMist 官方网站、公开审计报告库及其他渠道的详尽搜索，**本报告确认，无法找到任何由 SlowMist 或其他任何信誉良好的审计公司发布的、关于 NX Finance 的公开可验证审计报告** 29。

这一发现是整个评估中最重要的安全危险信号。一个声称已审计却无法提供公开报告的项目，往往比坦承未经审计的项目更危险，因为它可能给用户带来虚假的安全感。没有报告，投资者就无法得知审计的范围、发现的漏洞等级以及这些漏洞是否已得到修复。

### **5.2. 创始人与团队风险：关于 “TIN Yi KUNG” 的指控**

这是项目面临的最严重的治理风险。

* **指控来源**：该指控主要来自推特上的加密研究员 0xmcraider 2。  
* **指控内容**：据称，NX Finance 的创始人 TIN Yi KUNG（又名 Timmy）存在一种重复性的行为模式：  
  1. 开发低成本的聚合器类项目。  
  2. 通过激励措施吸引用户存款，拉高 TVL。  
  3. 利用 KOL（关键意见领袖）进行 IDO（首次 DEX 发行），且仅在去中心化交易所上线代币。  
  4. 在项目启动后不久便逐渐放弃，转而开始下一个新项目 2。  
* **项目方回应**：有社区消息指出，NX Finance 团队曾在社区内部的讨论中承认他们“犯过错误”，这可以被解读为对过去问题的间接承认，但他们从未在公开场合正面回应或驳斥这些核心指控 35。  
* **风险含义**：这种指控带来了巨大的运营和治理风险。它暗示了项目存在极高的“软跑路”概率——即协议不会被恶意攻击导致资金被盗，而是被团队逐步放弃，最终导致代币价值归零，使投资者蒙受全部损失。

### **5.3. 协议与市场风险**

* **智能合约风险**：除了缺乏审计，项目的代码不开源，这使得社区无法进行代码审查，潜在的漏洞（如重入攻击、逻辑错误、不安全的外部依赖）被完全隐藏。  
* **清算风险**：协议提供的高达 10 倍的杠杆极大地放大了市场风险。当抵押品（如 JLP 或 LSTs）价格出现中等程度的下跌时，就可能触发大规模的连锁清算，导致杠杆农民的本金完全损失。  
* **系统性风险**：协议的健康状况与其外部依赖紧密相连，主要是 Jupiter 以及被挖矿积分的协议（如 Solayer）。这些外部系统中的任何一个出现故障、被攻击或表现不佳，都会对 NX Finance 的用户造成直接的负面影响。  
* **流动性风险**：如前所述，$NX 代币的交易量极低，构成了严重的流动性风险。投资者可能在需要时无法以合理的价格退出头寸，面临巨大的滑点损失。

## **第六部分：社区健康与社交情绪**

### **6.1. 官方渠道分析**

* **官方链接**：项目的官方网站存在 nxfinance.info 和 nxfinance.io 两个版本，这种不一致性显得不够专业。其官方推特为 @NX\_Finance，Discord 链接为 discord.gg/nxfinance 11。  
* **社媒内容**：对官方推特的分析显示，其内容主要集中在市场营销、空投活动宣传和 TVL 里程碑的庆祝上 4。在这些公开平台上，完全没有提及或回应关于创始人的指控以及审计报告缺失的问题。  
* **社区讨论**：虽然无法深入分析 Discord 内部的所有讨论，但来自币安广场的帖子表明，关于创始人历史的敏感话题确实在社区（如 Telegram）内部被讨论过，并最终迫使团队含糊地承认了“错误” 35。这表明团队清楚地知道社区的担忧，但选择不在更公开的平台（如推特）上解决这些问题。

### **6.2. 社区情绪**

社区情绪呈现出明显的分裂状态。一方面，参与空投和高收益策略的用户表现出极大的热情，这从 TVL 的增长中可以得到验证 4。项目方通过空投竞赛等活动，有效地制造了短期的市场热度和用户参与度 17。

然而，在另一方面，尤其是在更注重深度研究的社区成员中，存在着强烈的怀疑和担忧，主要集中在创始人的信誉和项目的安全状况上 2。

项目的沟通策略可以被视为一种“信息遏制”策略。所有正面消息，如 TVL 增长、合作伙伴关系和空投活动，都在推特等公共渠道广泛传播。而所有负面或难以回答的问题，如创始人背景和审计缺失，则被限制在 Discord 或 Telegram 等半私密渠道内进行讨论，甚至完全不予回应。这种刻意控制信息流、选择性透明的做法，是一个危险的信号。一个值得信赖的团队会选择在公开论坛（如官方博客或推特空间）上正面解决如此严重的关切，以重建所有投资者的信心，而不是仅仅在小圈子内进行模糊的回应。这种行为模式进一步加深了外界对其可信度的疑虑。

## **第七部分：综合投资机会**

### **7.1. 参与途径概述**

本节为投资者提供最具体、最可操作的分析，详细拆解了与 NX Finance 协议交互并获取回报的所有可能途径。

### **7.2. NX Finance 投资策略矩阵**

下表对所有潜在的投资机会进行了全面的对比分析，旨在帮助投资者根据自身的风险偏好做出决策。

**表2：NX Finance 投资策略矩阵**

| 策略 | 所需资产 | 潜在 APR/APY (非保证) | 主要优势 | 关键风险与劣势 | 推荐投资者画像 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. 直接购买 $NX 代币** | USDC, SOL 等 | N/A | 若协议成功，代币有高增长潜力。 | **极高**：代币流动性极低，价格波动剧烈；创始人跑路风险；智能合约漏洞风险。 | 极度激进的投机者。 |
| **2\. 被动借贷 (USDC/USDT/SOL)** | USDC, USDT, SOL | USDC 约 8.4%，USDT 约 9.8%，SOL 约 13-14% 3 | 收益相对稳定，高于市场平均水平；操作简单，无需主动管理。 | **高**：协议智能合约风险（资金可能被盗）；协议失败导致借款人违约。 | 中高风险承受能力的收益型投资者。 |
| **3\. 杠杆 JLP 挖矿** | JLP, USDC, SOL | 最高可达 67% 3 | 极高的资本效率，放大 JLP 基础收益。 | **极高**：JLP 价格下跌导致的清算风险；协议智能合约风险；高昂的借贷成本。 | 资深、激进的 DeFi 收益农民。 |
| **4\. 杠杆积分挖矿 (Solayer 等)** | SOL, LSTs (如 vSOL, jupSOL) | 最高 10 倍积分放大 \+ 基础收益 3 | 放大潜在空投价值，是协议的核心吸引力。 | **极高**：**空投可能毫无价值或不及预期**；清算风险；智能合约风险；创始人跑路风险。 | 专注于空投套利的激进型玩家（“Degen”）。 |
| **5\. JLP 对冲策略** | JLP, SOL | 变动 | 存入 JLP，借出 SOL，可降低 JLP 池中 SOL 的风险敞口，实现对冲 3。 | **高**：复杂的策略，涉及多重风险；清算风险；智能合约风险。 | 精通 DeFi 对冲策略的高级用户。 |

### **7.3. 开发者机会 (SDK/API/Grants)**

针对具备开发背景的投资者，本次调查得出了明确的结论。经过对项目文档、社区和相关开发者平台的广泛搜索，**没有发现 NX Finance 提供任何公开的软件开发工具包（SDK）、应用程序接口（API）、开发者资助计划或任何形式的生态系统建设计划** 36。

这表明，NX Finance 目前是一个完全封闭的、由内部团队驱动的产品，而非一个旨在构建开放、可组合生态的平台。因此，对于希望通过开发贡献或创建第三方应用来参与项目生态的投资者来说，目前没有任何可行的途径。

## **第八部分：结论与最终投资建议**

### **8.1. 调查结果综合**

本报告的全面分析揭示了一个核心矛盾：一方面，NX Finance 凭借其对杠杆积分挖矿这一细分市场需求的敏锐洞察，成功打造出了一款具有创新性和吸引力的产品，其 TVL 的快速增长便是明证。另一方面，该项目的运营和治理标准远未达到安全投资的最低门槛。团队在透明度、安全验证和创始人背景等基本问题上存在着致命缺陷。

### **8.2. 风险与回报的权衡**

最终的投资决策可以归结为一次风险与回报的计算：

* **潜在回报**：通过高杠杆和积分挖矿获得的高额但高度投机性的收益。这种回报不仅不稳定，而且很大程度上依赖于外部因素（如空投价值）。  
* **面临的风险**：投资者面临的是一个由三个无法忽视的基本面风险组成的“三位一体”困境：  
  1. **创始人风险**：关于创始人涉嫌放弃过往项目的指控，构成了无法量化的信任危机。  
  2. **安全风险**：缺乏可验证的审计报告和闭源的智能合约，如同在黑暗中驾驶。  
  3. **市场风险**：代币几乎没有流动性，使得任何投资都可能成为“有价无市”的数字陷阱。

### **8.3. 最终投资建议**

**投资等级：强烈不建议 (Strongly Not Recommended)**

**理由**：尽管 NX Finance 提供的策略对激进交易者极具诱惑力，但由于治理或安全问题导致灾难性失败（如跑路、被盗或项目被遗弃）的概率高得令人无法接受。一个审慎的长期投资者，即便是风险偏好极高，也不能忽视这种在透明度和可信度上的根本性缺失。因项目方行为不端或安全漏洞导致的本金永久性损失的风险，远远超过了从其收益策略中可能获得的任何潜在收益。

建议投资者对该项目保持远距离观察，直到（且除非）团队采取彻底的、可验证的行动来重建信任。这至少应包括：发布一份由顶级审计公司出具的、包含完整细节的审计报告；将其全部智能合约代码在 GitHub 上开源以供社区审查；以及通过官方渠道，以无可辩驳的证据公开回应关于创始人历史的严重指控。在此之前，任何投入该协议的资金都应被视为已完全损失。

#### **引用的著作**

1. NX Token Price, NX Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/solana-nx](https://www.coinbase.com/price/solana-nx)  
2. Analysis of Solana startup NX Finance | Web3搬砖工 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/16174580975345](https://www.binance.com/en/square/post/16174580975345)  
3. Solayer airdrop expectations are super high? NX Finance will increase your airdrop income 10 times\! | MRJasonC区块博士 on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/14949203757753](https://www.binance.com/en/square/post/14949203757753)  
4. Solana-Based NX Finance Surpasses $10 Million TVL, Plans Leverage Mining Strategy, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/2024-08-06-solana-based-nx-finance-surpasses-10-million-tvl-plans-leverage-mining-strategy-11800598645201](https://www.binance.com/en/square/post/2024-08-06-solana-based-nx-finance-surpasses-10-million-tvl-plans-leverage-mining-strategy-11800598645201)  
5. NX Finance \- RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/NX%20Finance?k=MTMxMzQ%3D](https://www.rootdata.com/Projects/detail/NX%20Finance?k=MTMxMzQ%3D)  
6. NX Price | Live NX Chart & Market Cap on Solflare, 访问时间为 七月 27, 2025， [https://www.solflare.com/prices/nx/BAsnXPVYuvZDfEFR7tmu9sG9gPyHy58Jpjs2AuUw1FLx/](https://www.solflare.com/prices/nx/BAsnXPVYuvZDfEFR7tmu9sG9gPyHy58Jpjs2AuUw1FLx/)  
7. NX Finance, Bedrock, Nekodex, Bool Network, Drop: review of new drops \- Proxys.io, 访问时间为 七月 27, 2025， [https://proxys.io/en/blog/life-hacking/nx-finance-bedrock-nekodex-bool-network-drop-review-of-new-drops](https://proxys.io/en/blog/life-hacking/nx-finance-bedrock-nekodex-bool-network-drop-review-of-new-drops)  
8. NX Finance: Project Guide | Latest Updates, Presale & Airdrop \- Bitget Wallet, 访问时间为 七月 27, 2025， [https://web3.bitget.com/ja/dapp/nx-finance-27138](https://web3.bitget.com/ja/dapp/nx-finance-27138)  
9. NX Token (NX) Price Chart, related dapps, projects & news | DappRadar, 访问时间为 七月 27, 2025， [https://dappradar.com/token/nx-token](https://dappradar.com/token/nx-token)  
10. NX Token Price: NX Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/nx-token](https://www.coingecko.com/en/coins/nx-token)  
11. NX Token (NX) Price Today, News & Live Chart | Forbes Crypto Market Data, 访问时间为 七月 27, 2025， [https://www.forbes.com/digital-assets/assets/nx-token-nx/](https://www.forbes.com/digital-assets/assets/nx-token-nx/)  
12. NX Finance \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/nx-finance](https://defillama.com/protocol/nx-finance)  
13. Nxtech Network price today, NX to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/nxtech-network/](https://coinmarketcap.com/currencies/nxtech-network/)  
14. NX Token Price, NX Price, Live Charts, and Marketcap \- Coinbase Brazil, 访问时间为 七月 27, 2025， [https://www.coinbase.com/en-br/price/solana-nx](https://www.coinbase.com/en-br/price/solana-nx)  
15. NX Finance \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/nx-finance?denomination=USD](https://defillama.com/protocol/nx-finance?denomination=USD)  
16. NX Token (NX) Price, Chart & News | Crypto prices & trends on MEXC, 访问时间为 七月 27, 2025， [https://www.mexc.com/price/nx-token](https://www.mexc.com/price/nx-token)  
17. NX Finance Thread Challenge | Superteam Earn, 访问时间为 七月 27, 2025， [https://earn.superteam.fun/listing/nx-finance-thread-challenge/](https://earn.superteam.fun/listing/nx-finance-thread-challenge/)  
18. Meteora \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/meteora](https://defillama.com/protocol/meteora)  
19. Solana \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/Solana?volume=true\&tvl=false](https://defillama.com/chain/Solana?volume=true&tvl=false)  
20. Size Matters: How Meteora Will Multiply Solana's TVL | Ben Chow, 访问时间为 七月 27, 2025， [https://solanacompass.com/learn/Lightspeed/size-matters-how-meteora-will-multiply-solanas-tvl-ben-chow](https://solanacompass.com/learn/Lightspeed/size-matters-how-meteora-will-multiply-solanas-tvl-ben-chow)  
21. Lulo \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/lulo](https://defillama.com/protocol/lulo)  
22. Francium \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/francium](https://defillama.com/protocol/francium)  
23. how-to-solana/4. How to Solana — Chapter 4: Yield Farming & Yield Aggregators.md at main \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/sinoglobalcap/how-to-solana/blob/main/4.%20How%20to%20Solana%20%E2%80%94%20Chapter%204:%20Yield%20Farming%20%26%20Yield%20Aggregators.md](https://github.com/sinoglobalcap/how-to-solana/blob/main/4.%20How%20to%20Solana%20%E2%80%94%20Chapter%204:%20Yield%20Farming%20%26%20Yield%20Aggregators.md)  
24. List of 7 DeFi Yield Farming Platforms on Solana (2025) \- Alchemy, 访问时间为 七月 27, 2025， [https://www.alchemy.com/dapps/list-of/defi-yield-farming-platforms-on-solana](https://www.alchemy.com/dapps/list-of/defi-yield-farming-platforms-on-solana)  
25. Tulip Protocol \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/tulip-protocol](https://defillama.com/protocol/tulip-protocol)  
26. Yield Farming on Solana: How to Get Up to 700% APY | TheVRSoldier on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/4288607761930](https://www.binance.com/en/square/post/4288607761930)  
27. NX Finance: Project Guide | Latest Updates, Presale & Airdrop, 访问时间为 七月 27, 2025， [https://web3.bitget.com/en/dapp/nx-finance-27138](https://web3.bitget.com/en/dapp/nx-finance-27138)  
28. Nx \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/nrwl](https://github.com/nrwl)  
29. Smart Contract Security Audit Service Introduction, Exchange Security Solution \- SlowMist, 访问时间为 七月 27, 2025， [https://www.slowmist.com/service-smart-contract-security-audit.html](https://www.slowmist.com/service-smart-contract-security-audit.html)  
30. Blockchain Security Audit \- SlowMist, 访问时间为 七月 27, 2025， [https://www.slowmist.com/service-blockchain-security-audit.html](https://www.slowmist.com/service-blockchain-security-audit.html)  
31. SlowMist Audit Report \- Amply Finance \- GitBook, 访问时间为 七月 27, 2025， [https://1737775452-files.gitbook.io/\~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiOyRQmuIMJBpyP560UlO%2Fuploads%2F25GwdQXyTSEcKbpo2Uu7%2FSlowMist%20Audit%20Report%20-%20Amply%20Finance%20(1).pdf?alt=media\&token=18f26fa9-bbac-458d-b24a-56511a60e15c](https://1737775452-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiOyRQmuIMJBpyP560UlO%2Fuploads%2F25GwdQXyTSEcKbpo2Uu7%2FSlowMist%20Audit%20Report%20-%20Amply%20Finance%20\(1\).pdf?alt=media&token=18f26fa9-bbac-458d-b24a-56511a60e15c)  
32. Smart Contract Security Audit Service Introduction, Exchange Security Solution \- SlowMist, 访问时间为 七月 27, 2025， [https://www.slowmist.com/en/security-audit-certificate.html?id=a5641800f488f5b32c6392aee6499f126a19b3ffa23eb5ef61d2a083cd26dc11](https://www.slowmist.com/en/security-audit-certificate.html?id=a5641800f488f5b32c6392aee6499f126a19b3ffa23eb5ef61d2a083cd26dc11)  
33. SlowMist: Compound Finance V2 Security Audit Manual \- Medium, 访问时间为 七月 27, 2025， [https://slowmist.medium.com/slowmist-compound-finance-v2-security-audit-manual-3ad56bd596da](https://slowmist.medium.com/slowmist-compound-finance-v2-security-audit-manual-3ad56bd596da)  
34. Knowledge-Base/open-report-V2/smart-contract/SlowMist Audit Report \- PancakeSwap\_MOVE\_en-us.pdf at master \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/slowmist/Knowledge-Base/blob/master/open-report-V2/smart-contract/SlowMist%20Audit%20Report%20-%20PancakeSwap\_MOVE\_en-us.pdf](https://github.com/slowmist/Knowledge-Base/blob/master/open-report-V2/smart-contract/SlowMist%20Audit%20Report%20-%20PancakeSwap_MOVE_en-us.pdf)  
35. Online plunge 80%\! Solana's new face, NX Finance, sells tokens, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/13396165008057](https://www.binance.com/en/square/post/13396165008057)  
36. Nx Toolkit \- Network Optix, 访问时间为 七月 27, 2025， [https://www.networkoptix.com/developers/nx-toolkit](https://www.networkoptix.com/developers/nx-toolkit)  
37. NX-API \- Cisco DevNet, 访问时间为 七月 27, 2025， [https://developer.cisco.com/site/nx-api/](https://developer.cisco.com/site/nx-api/)  
38. APIs \- developer.siemens.com, 访问时间为 七月 27, 2025， [https://developer.siemens.com/apis.html](https://developer.siemens.com/apis.html)  
39. NX-SDK/versions.md at master \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/CiscoDevNet/NX-SDK/blob/master/versions.md](https://github.com/CiscoDevNet/NX-SDK/blob/master/versions.md)  
40. SDK Manager \- NVIDIA Developer, 访问时间为 七月 27, 2025， [https://developer.nvidia.com/sdk-manager](https://developer.nvidia.com/sdk-manager)  
41. Generate your data SDK with Nx \- @trumbitta, 访问时间为 七月 27, 2025， [https://trumbitta.hashnode.dev/generate-your-data-sdk-with-nx](https://trumbitta.hashnode.dev/generate-your-data-sdk-with-nx)