

# **Doubler (doubler.pro) 项目深度投资评估报告**

报告日期: 2025年6月26日  
评估等级: 强烈不建议 (Strongly Not Recommend)  
分析师: DeFi 投资与安全专家

---

### **执行摘要**

本报告对DeFi项目Doubler (doubler.pro) 进行了详尽的尽职调查与分析。核心结论是：**Doubler项目呈现出灾难性的风险状况，强烈不建议投资者进行任何形式的投资或交互。**

分析发现，该项目存在一系列致命的危险信号。首先，其官方网站（doubler.pro）已无法访问 1，公开的代码库自2023年9月以来已无任何实质性开发活动 2，链上总锁仓价值（TVL）仅约17.3万美元，几乎可以忽略不计 3。这些迹象明确表明，该项目已被其开发团队抛弃，或正处于一个“慢速退出骗局”（slow rug pull）的过程中。

尤为关键的是，Doubler协议的核心机制建立在一种名为“广义马丁格尔策略”（generalized Martingale strategy）的金融模型之上 3。金融分析普遍认为，马丁格尔策略是一种高风险的赌博方法，而非审慎的投资策略，其内在机制在现实金融市场中极易导致投资者资本的完全损失 4。

尽管该项目在2024年初曾宣布获得包括Youbi Capital和DWF Labs在内的知名风险投资机构的种子轮融资 6，但这与其当前被遗弃的运营状态形成了尖锐的矛盾。历史融资信息并不能改变项目已经失败的现实。结合其团队完全匿名、缺乏可验证的公开安全审计以及社区活动完全停滞的现状，任何对Doubler的投资都面临着接近100%的本金损失风险。

### **第一节：协议解构 \- Doubler的概念**

#### **1.1. 官方价值主张：资产收益权分离协议**

根据公开资料，Doubler将自己定位为“行业首个资产收益权分离协议” 3。其宣称的目标是通过创新的解决方案，为资产提供风险对冲和回报优化，同时为二级市场交易者提供基于收益的另类交易资产。在其种子轮融资的新闻稿中，它被描述为一个“使用开放式智能合约来优化加密货币投资的智能金融策略工具” 6。

这种使用复杂金融术语（如“资产收益权分离”、“风险对冲”）包装投机性机制的做法在DeFi领域屡见不鲜。然而，剥离其营销外衣后，协议的核心引擎揭示了其真实的高风险本质。

#### **1.2. 核心引擎：深入剖析“广义马丁格尔策略”**

Doubler协议明确指出其采用了“广义马丁格尔策略” 3。这是理解该项目风险状况的最关键的技术和金融细节。

马丁格尔策略起源于18世纪的法国，是一种赌博系统 8。其核心思想是在每次亏损后将赌注加倍，理论上，一次胜利就足以弥补之前所有的损失，并赢得相当于初始赌注的利润 4。然而，该策略存在致命缺陷：它在理论上要求使用者拥有无限的资本和无限的下注上限才能确保成功。在现实世界的金融市场中，连续的亏损会导致持仓规模呈指数级增长，最终迅速耗尽全部资本，导致灾难性的爆仓 4。

该策略的风险与回报极不对称：风险是无限的（可能损失全部本金），而回报则被限制在初始投资的一小部分 8。因此，一个将马丁格尔策略作为其核心机制的协议，本质上不是其声称的“风险对冲”工具，而是一个将高风险赌博行为制度化、系统化的平台。其将此包装为“创新解决方案”的说法具有极大的误导性。

#### **1.3. 技术架构：多链部署**

根据DeFi Llama的数据，Doubler协议部署在Arbitrum和Manta网络上 3。一篇新闻稿还提到，在测试网上线后，项目与Blast进行了集成 6。

通常情况下，多链部署是项目寻求扩大用户基础、利用不同L2网络优势（如低费用、高速度）的积极信号。然而，对于Doubler而言，这一点已变得毫无意义。一个项目的多链存在价值，取决于其在这些链上是否有活跃的产品和用户群体。鉴于Doubler的官方网站已关闭 1，代码开发停滞 2，且所有链上的总TVL微不足道，其多链部署仅仅是项目过往雄心的历史遗迹，不具备任何当前的实用价值或投资吸引力。

### **第二节：安全与风险取证 \- 一连串的危险信号**

#### **2.1. 智能合约安全审计：一个关键的疑点**

DeFi Llama的页面上标注Doubler的“审计：是” 3。这是一个重要的声明，因为它暗示了项目方进行过最基本的安全尽职调查。

然而，经过对全网的详尽搜索，未能找到任何针对“Doubler Protocol”或“doubler.pro”的公开、独立的第三方安全审计报告 3。搜索结果仅为一些通用的DeFi安全研究论文 10、审计公司的服务介绍 12 或名称相似但无关项目的审计报告，例如“DoubleDice” 14。

一个信誉良好的DeFi项目通常会将其安全审计报告公开展示，作为建立用户信任和彰显透明度的重要手段。由于Doubler的官网无法访问，缺乏官方渠道来验证此审计声明。在没有可验证的、由信誉良好公司出具的公开审计报告的情况下，投资者必须假设其智能合约未经审计，可能包含严重漏洞。这本身就是一个不可忽视的重大风险，更不用说其核心逻辑本身就存在设计缺陷。

#### **2.2. 链上活动与GitHub分析：一个处于休眠状态的项目**

Doubler的官方GitHub组织（doublerpro）仅包含两个代码仓库 2。其中一个名为

resource的仓库自2023年9月16日后再无任何有意义的更新。另一个DefiLlama-Adapters仓库是公共代码库的一个分叉，其更新很可能只是为了与上游保持同步，并不代表Doubler协议本身在进行积极开发 2。

活跃的DeFi项目会通过在GitHub上对其核心智能合约和dApp代码库的持续提交来反映其开发进展 15。Doubler的核心逻辑代码库在公开渠道上已沉寂超过一年，这与一个已停止开发的项目特征完全吻合。结合其无法访问的网站，这强烈表明开发团队已经放弃了该项目。

#### **2.3. 历史风险分析：项目被遗弃的风险**

对“Doubler protocol”相关的“骗局”、“跑路”或“黑客攻击”等关键词的搜索，并未发现关于该项目遭受重大公开攻击的具体报告 3。

然而，该项目的整体状况——团队匿名、开发停滞、网站关闭——完全符合“慢速退出骗局”的特征。在这种模式下，团队在筹集资金后并不会制造引人注目的黑客事件，而是悄无声息地停止所有活动，最终携款消失。因此，对于新投资者而言，主要的风险并非协议未来*将要*被攻击，而是它*已经被*其创建者放弃。任何新的投资都无异于向一个已经死亡的实体捐款。

#### **2.4. 匿名因素：无法追责的团队**

关于Doubler的创始人或核心团队成员，没有任何公开信息。对项目团队的搜索结果指向了不相关的“Double Protocol”的招聘信息 17 或一个名为“BlockDAG”的通用公司网站 19。

在一个获得了风险投资支持的项目中，团队完全匿名是一个极其严重的危险信号。这使得问责机制完全失效。当项目失败或资金被滥用时，投资者没有任何追索权，因为责任主体不明。这使得任何投资行为都变成了对一群已经表现出对项目缺乏承诺的匿名个体的盲目信任。

### **第三节：市场与金融分析 \- 一个失败的故事**

#### **3.1. DBR代币经济学：一个理论上的结构**

Doubler协议的原生代币是DBR，总供应量为1亿枚 7。根据CryptoRank提供的不完整数据，代币分配包括40%的流动性激励、15%的生态系统基金、10%的社区以及20%的未指明用途 7。关于代币的解锁计划（vesting schedule）则没有详细信息。

代币的价值源于其在功能完备的生态系统中的实际用途，例如治理投票、费用分享或质押收益 20。鉴于Doubler的生态系统已停止运作并被抛弃，其DBR代币没有任何底层价值支撑。为“流动性激励”分配的大量代币毫无意义，因为协议内没有交易活动，也就没有流动性需要激励。所谓的“生态系统基金”很可能由匿名的、已离场的团队所控制。因此，投资DBR代币等同于购买一种没有当前用途也无未来前景的无价值资产。

#### **3.2. 链上指标深度分析：一条平坦的心电图**

* **总锁仓价值 (TVL):** 根据DeFi Llama的数据，Doubler的总锁仓价值约为173,633美元，分散在Arbitrum（约16.5万美元）和Manta（约8千美元）两条链上 3。这是一个极低的数字，表明几乎没有用户将资金托付给该协议。  
* **竞争对手比较:** DeFi Llama将其归类于衍生品赛道，该领域的竞争对手包括GMX V2 Perps（TVL 3.83亿美元）和Synthetix V3（TVL 7252万美元）等 3。

Doubler的TVL不及GMX的0.05%。这并非一个新兴或小众项目的表现，而是市场完全拒绝和项目启动失败的明确信号。链上数据无可辩驳地证明，该协议没有用户，也未能实现任何产品市场契合。

#### **3.3. VC投资的困惑：融资与表现的脱节**

2024年2月，新闻报道称“Doubler Pro”成功完成了由Youbi Capital领投，DWF Labs、Mask Network、Bixin Ventures、Gate Labs等多家机构参投的种子轮融资 6。

值得注意的是，这则融资新闻的发布时间（2024年2月）晚于其GitHub上最后一次有意义的代码提交时间（2023年9月）。此后，项目网站下线，再无任何进展。这表明，VC投资并未能推动项目进入一个活跃的开发或运营阶段。

对于今天考虑该项目的投资者而言，一年前的VC投资是一个已经沉没的历史信息，而非对未来潜力的背书。种子阶段的投资本身就具有极高的失败率。目前压倒性的证据表明项目已经失败，VC的投资很可能已被减记为零。依赖过时的融资新闻来判断项目当前价值是极其危险的。

### **第四节：投资机会与策略分析**

首先必须明确，鉴于Doubler项目已停止运营且风险极高，**本报告不推荐任何形式的投资**。以下分析仅为满足用户问询的理论探讨，旨在说明在一个*功能正常*的协议中可能存在的机会，并阐明为何这些机会在Doubler上完全不可行。

#### **4.1. 投资策略对比分析表**

下表旨在直接回应用户对不同投资机会进行比较的需求。其核心价值在于通过将理论上的可能性与项目的灾难性现实进行对比，进一步强化“强烈不建议”的最终结论。

| 投资策略 | 优点 (理论上) | 缺点与风险 (实际上) | 预期APR/APY | 可行性 |
| :---- | :---- | :---- | :---- | :---- |
| **购买DBR代币** | 分享协议增长的价值 | \- 代币无任何实际用途 \- 缺乏交易流动性 \- 极高的100%亏损风险 \- 项目已被抛弃 | 0% (实际为负回报) | 极低 |
| **提供流动性 (LP)** | 赚取交易费和DBR奖励 | \- 无交易量，无法产生费用 \- DBR趋于零，无常损失风险为100% \- 因合约/项目废弃风险，存入资产可能被锁定或丢失 | 0% (实际为负回报) | 极低 |
| **参与Doubler资金池** | 利用马丁格尔策略获利 | \- 核心机制本身就是为灾难性亏损设计的 \- 需要不断追加资本 \- 协议已停止运作 \- 极高的智能合约风险 | 不适用 (预期价值为负) | 零 |
| **生态参与 (开发者)** | 在平台上创建Agent或其他资产 | \- 无官方文档 \- 无可访问的API/SDK \- GitHub不活跃 \- 无社区或技术支持 | 0% | 零 |

#### **4.2. 高APR DeFi策略**

高APR的DeFi收益通常来源于活跃协议中的交易费、代币激励和杠杆借贷等复杂组合 21。例如，用户可以通过在Aave或Compound等平台提供资产赚取利息，或在Uniswap等DEX中提供流动性赚取手续费和平台代币奖励 21。

然而，这些策略在Doubler上完全不可能实现。在一个没有用户、没有交易量、没有流动性且激励代币毫无价值的死亡生态中，追求高APR无异于缘木求鱼。任何在与Doubler相关的平台上宣传的高收益机会，都应被视为引诱用户提供退出流动性或直接盗取用户资产的骗局。

#### **4.3. 开发者生态：一片空白**

本节直接回应具有开发者背景的投资者的关切。由于Doubler的官方网站无法访问，没有任何公开的文档、API或SDK，且其GitHub代码库已停止更新 1，因此

**开发者没有任何机会**在该生态系统上进行建设或交互。任何此类尝试都将是时间和资源的浪费。

### **第五节：社区与情绪分析 \- 一片沉寂**

#### **5.1. 社交媒体足迹**

项目GitHub页面列出的Twitter账户为@doubler\_pro 2。经核查，该账户已不存在或长期处于不活跃状态，无法找到任何有意义的社区互动。此外，也未能发现任何活跃的官方Discord或Telegram社群。

一个健康的DeFi项目依赖于活跃的社区进行公告发布、用户支持和治理讨论 15。Doubler完全缺乏社区存在，这比负面情绪本身更具警示性。它表明该项目不仅不被看好，甚至已经被市场彻底遗忘。

#### **5.2. 新闻与媒体报道分析**

除了2024年初的融资公告外 6，没有任何关于Doubler产品发布、重要合作或后续进展的媒体报道。媒体的集体沉默进一步证实，该项目在获得种子资金后便销声匿迹。

### **第六节：最终裁决与投资论点**

#### **6.1. 发现综合：一个一致的结论**

本报告的分析从各个维度都指向了同一个结论。Doubler项目存在以下不可逾越的致命缺陷：

* **基本面缺陷:** 建立在不可持续且高风险的马丁格尔策略之上 3。  
* **运营失败:** 网站无法访问，用户基础为零 1。  
* **开发停滞:** GitHub代码库被遗弃 2。  
* **安全疏忽:** 无法验证其安全审计声明的真实性 3。  
* **问责真空:** 团队完全匿名，无法追责。  
* **金融无关性:** 代币毫无价值，TVL可以忽略不计 3。

#### **6.2. 整体风险评分与理由**

该项目应被评为最高风险等级。理由是它在构成一个可行DeFi投资项目的所有关键支柱上——技术、安全、团队、社区和市场牵引力——都彻底失败。其风险并非仅仅是“高”，而是几乎可以确定会导致100%的资本损失。

#### **6.3. 最终投资建议与理据**

**投资等级：强烈不建议 (Strongly Not Recommend)**

**理据：** Doubler不是一个可行的投资机会，而是一个已经失败的项目，展现了所有融资后被抛弃或慢速退出骗局的特征。历史VC投资是一个具有误导性的信号，已被项目当前功能失调的压倒性证据完全否定。以任何形式与该协议进行交互——无论是购买其代币、尝试提供流动性，还是将钱包连接到任何相关应用——都会给您的资本和个人安全带来极端且不可接受的风险。

### **第七节：参考文献**

1

#### **引用的著作**

1. 访问时间为 一月 1, 1970， [https.doubler.pro](http://docs.google.com/https.doubler.pro)  
2. Doubler \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/doublerpro](https://github.com/doublerpro)  
3. Doubler \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/doubler](https://defillama.com/protocol/doubler)  
4. Martingale Strategy \- Overview, How It Works, Drawbacks \- Corporate Finance Institute, 访问时间为 六月 25, 2025， [https://corporatefinanceinstitute.com/resources/career-map/sell-side/capital-markets/martingale-strategy/](https://corporatefinanceinstitute.com/resources/career-map/sell-side/capital-markets/martingale-strategy/)  
5. Martingale Strategy in Trading: Manage Risk \- Funded Elite, 访问时间为 六月 25, 2025， [https://fundedelite.com/martingale-strategy/](https://fundedelite.com/martingale-strategy/)  
6. Doubler Pro successfully closes Seed Funding Round – CryptoTvplus \- The Leading Blockchain Media Firm, 访问时间为 六月 25, 2025， [https://cryptotvplus.com/2024/02/doubler-pro-successfully-closes-seed-funding-round/](https://cryptotvplus.com/2024/02/doubler-pro-successfully-closes-seed-funding-round/)  
7. Doubler (DBR) Funding Rounds, Token Sale Review & Tokenomics ..., 访问时间为 六月 25, 2025， [https://cryptorank.io/ico/doubler](https://cryptorank.io/ico/doubler)  
8. Martingale Strategy and Averaging Down | What You Need to Know \- Capital.com, 访问时间为 六月 25, 2025， [https://capital.com/en-int/analysis/the-martingale-approach-and-averaging-down](https://capital.com/en-int/analysis/the-martingale-approach-and-averaging-down)  
9. Understanding How the Martingale Strategy Works \- Morpher, 访问时间为 六月 25, 2025， [https://www.morpher.com/blog/martingale-strategy](https://www.morpher.com/blog/martingale-strategy)  
10. SoK: Decentralized Finance (DeFi) Attacks \- Computer Engineering and Networks Laboratory, 访问时间为 六月 25, 2025， [https://tik-db.ee.ethz.ch/file/26a4280468c65ef52c965688308a0c06/](https://tik-db.ee.ethz.ch/file/26a4280468c65ef52c965688308a0c06/)  
11. Do you still need a manual smart contract audit? \- arXiv, 访问时间为 六月 25, 2025， [https://arxiv.org/pdf/2306.12338](https://arxiv.org/pdf/2306.12338)  
12. SlowMist: TON Blockchain Audit Report, 访问时间为 六月 25, 2025， [https://docs.ton.org/audits/TON\_Blockchain\_SlowMist.pdf](https://docs.ton.org/audits/TON_Blockchain_SlowMist.pdf)  
13. Tier-One Smart Contract Audit Firm \- Sayfer, 访问时间为 六月 25, 2025， [https://sayfer.io/wp-content/uploads/2023/03/Sayfer-Smart-Contract-Audits.pdf](https://sayfer.io/wp-content/uploads/2023/03/Sayfer-Smart-Contract-Audits.pdf)  
14. DoubleDice Audit | @ CoinFabrik, 访问时间为 六月 25, 2025， [https://www.coinfabrik.com/blog/doubledice-audit/](https://www.coinfabrik.com/blog/doubledice-audit/)  
15. How to Use GitHub, Discord, and X to Find Hidden Crypto Gems Early \- Cointelegraph, 访问时间为 六月 25, 2025， [https://cointelegraph.com/news/how-to-use-github-discord-and-x-to-identify-real-crypto-innovation](https://cointelegraph.com/news/how-to-use-github-discord-and-x-to-identify-real-crypto-innovation)  
16. What is Doubler, the popular Defi product recently? Is it worth, 访问时间为 六月 25, 2025， [https://www.binance.com/square/post/1212265?ref=36380837](https://www.binance.com/square/post/1212265?ref=36380837)  
17. Double Protocol \- Marketing Lead \- Cryptocurrency Jobs, 访问时间为 六月 25, 2025， [https://cryptocurrencyjobs.co/marketing/double-protocol-marketing-lead/](https://cryptocurrencyjobs.co/marketing/double-protocol-marketing-lead/)  
18. Introducing Double Protocol and ERC-4907 \- Shardeum, 访问时间为 六月 25, 2025， [https://shardeum.org/blog/double-protocol-erc-4907/](https://shardeum.org/blog/double-protocol-erc-4907/)  
19. BlockDAG | Best Crypto ICO | Layer 1 Crypto Presale 2025 Now LIVE\!, 访问时间为 六月 25, 2025， [https://blockdag.network/](https://blockdag.network/)  
20. Understanding DeFi Tokenomics: Revolutionizing Finance, 访问时间为 六月 25, 2025， [https://www.findas.org/blogs/defi-tokenomics](https://www.findas.org/blogs/defi-tokenomics)  
21. Best DeFi Yield Farming Platforms In 2025 \- Coin Bureau, 访问时间为 六月 25, 2025， [https://coinbureau.com/analysis/best-defi-yield-farming-platforms/](https://coinbureau.com/analysis/best-defi-yield-farming-platforms/)  
22. Ethereum and the battle for yield: What is ETH's future? \- Cointelegraph, 访问时间为 六月 25, 2025， [https://cointelegraph.com/news/ethereum-and-the-battle-for-yield-will-eth-win](https://cointelegraph.com/news/ethereum-and-the-battle-for-yield-will-eth-win)  
23. What is DeFi and Yield Farming? \- Deltec Bank and Trust, 访问时间为 六月 25, 2025， [https://www.deltecbank.com/news-and-insights/what-is-defi-and-yield-farming/](https://www.deltecbank.com/news-and-insights/what-is-defi-and-yield-farming/)  
24. Qu'est-ce que la double-dépense ? — Bitpanda Academy, 访问时间为 六月 25, 2025， [https://www.bitpanda.com/academy/fr/lecons/quest-ce-que-la-double-depense](https://www.bitpanda.com/academy/fr/lecons/quest-ce-que-la-double-depense)  
25. What Is Decentralized Finance (DeFi) and How Does It Work? \- Investopedia, 访问时间为 六月 25, 2025， [https://www.investopedia.com/decentralized-finance-defi-5113835](https://www.investopedia.com/decentralized-finance-defi-5113835)  
26. Top Defi Tokens See Double-Digit Gains as Ethereum Soars \- Bitcoin.com News, 访问时间为 六月 25, 2025， [https://news.bitcoin.com/top-defi-tokens-see-double-digit-gains-as-ethereum-soars/](https://news.bitcoin.com/top-defi-tokens-see-double-digit-gains-as-ethereum-soars/)  
27. Decentralised finance and wrapping crypto | Australian Taxation Office, 访问时间为 六月 25, 2025， [https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments/decentralised-finance-and-wrapping-crypto](https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments/decentralised-finance-and-wrapping-crypto)  
28. Whitepaper \- DeFiChain, 访问时间为 六月 25, 2025， [https://defichain.com/white-paper](https://defichain.com/white-paper)  
29. SoK: Decentralized Finance (DeFi), 访问时间为 六月 25, 2025， [https://berkeley-defi.github.io/assets/material/defi-sok-ariah-2101.08778.pdf](https://berkeley-defi.github.io/assets/material/defi-sok-ariah-2101.08778.pdf)  
30. Défi Entreprise \- Double Défi, 访问时间为 六月 25, 2025， [https://www.doubledefi.org/defi-entreprise/](https://www.doubledefi.org/defi-entreprise/)  
31. Double défi auquel l'industrie du tourisme est confrontée en matière de main-d'œuvre : Obstacles à l'emploi et déséquilibre des compétences, 访问时间为 六月 25, 2025， [https://tourismhr.ca/fr/le-marche-du-travail/rapports/workforce-strategy/double-defi-auquel-lindustrie-du-tourisme-est-confrontee-en-matiere-de-main-doeuvre-obstacles-a-lemploi-et-desequilibre-des-competences/](https://tourismhr.ca/fr/le-marche-du-travail/rapports/workforce-strategy/double-defi-auquel-lindustrie-du-tourisme-est-confrontee-en-matiere-de-main-doeuvre-obstacles-a-lemploi-et-desequilibre-des-competences/)  
32. DeFi's Double-Edged Sword \- Quantstamp, 访问时间为 六月 25, 2025， [https://quantstamp.com/blog/defis-double-edged-sword](https://quantstamp.com/blog/defis-double-edged-sword)  
33. Introducing Double Spent: A new kind of DeFi protocol on Cardano. \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/cardano/comments/1krfen8/introducing\_double\_spent\_a\_new\_kind\_of\_defi/](https://www.reddit.com/r/cardano/comments/1krfen8/introducing_double_spent_a_new_kind_of_defi/)  
34. HamMnatsakanyan/damn-vulnerable-defi-solutions \- GitHub, 访问时间为 六月 25, 2025， [https://github.com/HamMnatsakanyan/damn-vulnerable-defi-solutions](https://github.com/HamMnatsakanyan/damn-vulnerable-defi-solutions)  
35. Uniswap v4 Audits: Key Security Lessons from DeFi's Top Experts \- Certora, 访问时间为 六月 25, 2025， [https://www.certora.com/blog/uniswap-v4-audits-what-we-learned-about-defi-security](https://www.certora.com/blog/uniswap-v4-audits-what-we-learned-about-defi-security)  
36. Consensys Diligence: Smart Contract Audits, 访问时间为 六月 25, 2025， [https://diligence.consensys.io/](https://diligence.consensys.io/)  
37. QuillAudits: Your Leading Blockchain Security Auditor, 访问时间为 六月 25, 2025， [https://www.quillaudits.com/](https://www.quillaudits.com/)  
38. Double défi \- CACH'GAME, 访问时间为 六月 25, 2025， [https://www.cachgame.fr/service-page/double-d%C3%A9fi](https://www.cachgame.fr/service-page/double-d%C3%A9fi)  
39. 15 défis du travail d'équipe et comment les surmonter \- Surf Office, 访问时间为 六月 25, 2025， [https://www.surfoffice.com/fr/blog/overcome-teamwork-challenges](https://www.surfoffice.com/fr/blog/overcome-teamwork-challenges)  
40. Double Challenge of the two Marios | Sur la pointe des pieds, 访问时间为 六月 25, 2025， [https://tipoftoes.com/fundraising-activities/double-challenge-two-marios/](https://tipoftoes.com/fundraising-activities/double-challenge-two-marios/)  
41. DEFAI(defi agents ai) Tokenomics Explained \- Double Your Money Fast, 访问时间为 六月 25, 2025， [https://eventos.ramajudicial.gov.co/video/DEFAI(defi-agents-ai)-Tokenomics-Explained](https://eventos.ramajudicial.gov.co/video/DEFAI\(defi-agents-ai\)-Tokenomics-Explained)  
42. Doubler \- DefiLlama, 访问时间为 六月 25, 2025， [https://defillama.com/protocol/tvl/doubler](https://defillama.com/protocol/tvl/doubler)  
43. A Beginner's Guide to Investing in Cryptocurrencies | CoinMarketCap, 访问时间为 六月 25, 2025， [https://coinmarketcap.com/academy/article/a-beginner-s-guide-to-investing-in-cryptocurrencies](https://coinmarketcap.com/academy/article/a-beginner-s-guide-to-investing-in-cryptocurrencies)  
44. ETH en CAD : cours de Ethereum en Canadian Dollar | CoinGecko, 访问时间为 六月 25, 2025， [https://www.coingecko.com/fr/coins/ethereum/cad](https://www.coingecko.com/fr/coins/ethereum/cad)  
45. DeFi Latest News \- Crypto News, 访问时间为 六月 25, 2025， [https://crypto.news/tag/defi/](https://crypto.news/tag/defi/)  
46. Doubler: Latest News, Social Media Updates and Insights | CryptoRank.io, 访问时间为 六月 25, 2025， [https://cryptorank.io/news/doubler](https://cryptorank.io/news/doubler)  
47. DeFi crypto lending surpasses $19 billion in 2024, nearly doubling CeFi counterpart, 访问时间为 六月 25, 2025， [https://cryptoslate.com/defi-crypto-lending-surpasses-19-billion-in-2024-nearly-doubling-cefi-counterpart/](https://cryptoslate.com/defi-crypto-lending-surpasses-19-billion-in-2024-nearly-doubling-cefi-counterpart/)  
48. (PDF) Decentralized Finance (DeFi): Review and Challenges 2025 \- ResearchGate, 访问时间为 六月 25, 2025， [https://www.researchgate.net/publication/391491901\_Decentralized\_Finance\_DeFi\_Review\_and\_Challenges\_2025](https://www.researchgate.net/publication/391491901_Decentralized_Finance_DeFi_Review_and_Challenges_2025)  
49. THE001 Plus Regional Hyperthermia Shows Early Efficacy, Safety in Pretreated Soft Tissue Sarcoma \- OncLive, 访问时间为 六月 25, 2025， [https://www.onclive.com/view/the001-plus-regional-hyperthermia-shows-early-efficacy-safety-in-pretreated-soft-tissue-sarcoma](https://www.onclive.com/view/the001-plus-regional-hyperthermia-shows-early-efficacy-safety-in-pretreated-soft-tissue-sarcoma)  
50. Double Defibrillation \- StatPearls \- NCBI Bookshelf, 访问时间为 六月 25, 2025， [https://www.ncbi.nlm.nih.gov/books/NBK544231/](https://www.ncbi.nlm.nih.gov/books/NBK544231/)  
51. Beware of Decentralized Finance (DeFi) \- | disb \- DC.gov, 访问时间为 六月 25, 2025， [https://disb.dc.gov/page/beware-decentralized-finance-defi](https://disb.dc.gov/page/beware-decentralized-finance-defi)  
52. BIS Working Papers No 1171: DeFi Leverage, 访问时间为 六月 25, 2025， [https://www.bis.org/publ/work1171.pdf](https://www.bis.org/publ/work1171.pdf)  
53. zkBTC Circuit and Smart Contracts Security Audit Report \- Least Authority, 访问时间为 六月 25, 2025， [https://leastauthority.com/lightec-zkbtc-circuit-and-smart-contracts-final-audit-report/](https://leastauthority.com/lightec-zkbtc-circuit-and-smart-contracts-final-audit-report/)  
54. Exactly Protocol Smart Contract Audit Report \- Hashlock, 访问时间为 六月 25, 2025， [https://hashlock.com/wp-content/uploads/2024/11/Exactly-Protocol-Smart-Contract-Audit-Report-Final-Report.pdf](https://hashlock.com/wp-content/uploads/2024/11/Exactly-Protocol-Smart-Contract-Audit-Report-Final-Report.pdf)  
55. The Martingale Strategy in Forex Trading \- Morpher, 访问时间为 六月 25, 2025， [https://www.morpher.com/blog/the-martingale-strategy](https://www.morpher.com/blog/the-martingale-strategy)  
56. Martingale Betting System Explained \- Casino & Sport Strategy \- Stake, 访问时间为 六月 25, 2025， [https://stake.com/blog/martingale-betting-system-explained](https://stake.com/blog/martingale-betting-system-explained)  
57. An L1/L2 security audit builds your security \- Veridise, 访问时间为 六月 25, 2025， [https://veridise.com/audits/l1-l2/](https://veridise.com/audits/l1-l2/)  
58. FR14/23 Final Report with Policy Recommendations for Decentralized Finance (DeFi) \- IOSCO, 访问时间为 六月 25, 2025， [https://www.iosco.org/library/pubdocs/pdf/ioscopd754.pdf](https://www.iosco.org/library/pubdocs/pdf/ioscopd754.pdf)  
59. Proof of Reserve in DeFi Crypto Assets \- Webisoft Blog, 访问时间为 六月 25, 2025， [https://webisoft.com/articles/proof-of-reserve/](https://webisoft.com/articles/proof-of-reserve/)  
60. DeFi Security Report, 访问时间为 六月 25, 2025， [https://f.hubspotusercontent40.net/hubfs/4972390/Marketing/defi%20security%20report%202021-v6.pdf](https://f.hubspotusercontent40.net/hubfs/4972390/Marketing/defi%20security%20report%202021-v6.pdf)  
61. Trump is slated to hold a press conference at the NATO summit | KNKX Public Radio, 访问时间为 六月 25, 2025， [https://www.knkx.org/2025-06-25/trump-is-slated-to-hold-a-press-conference-at-the-nato-summit](https://www.knkx.org/2025-06-25/trump-is-slated-to-hold-a-press-conference-at-the-nato-summit)  
62. Pulse check: 5 key findings for the decade ahead that demand action — now \- Vizient Inc., 访问时间为 六月 25, 2025， [https://www.vizientinc.com/insights/all/2025/pulse-check-5-key-findings-for-the-decade-ahead-that-demand-action-now](https://www.vizientinc.com/insights/all/2025/pulse-check-5-key-findings-for-the-decade-ahead-that-demand-action-now)  
63. Open, out, loyal | University of California, 访问时间为 六月 25, 2025， [https://www.universityofcalifornia.edu/news/open-out-loyal](https://www.universityofcalifornia.edu/news/open-out-loyal)  
64. Doublelift explains his hiatus: 'My story can't end with that awful performance at Worlds', 访问时间为 六月 25, 2025， [https://www.youtube.com/watch?v=QtHSfJayry0](https://www.youtube.com/watch?v=QtHSfJayry0)  
65. Doubler replacing Double tracking? : r/NeuralDSP \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/NeuralDSP/comments/11jozfu/doubler\_replacing\_double\_tracking/](https://www.reddit.com/r/NeuralDSP/comments/11jozfu/doubler_replacing_double_tracking/)  
66. My AUG double-fed because I rode the charging handle… look what happened to the round LOL : r/liberalgunowners \- Reddit, 访问时间为 六月 25, 2025， [https://www.reddit.com/r/liberalgunowners/comments/1ljgjf9/my\_aug\_doublefed\_because\_i\_rode\_the\_charging/](https://www.reddit.com/r/liberalgunowners/comments/1ljgjf9/my_aug_doublefed_because_i_rode_the_charging/)  
67. Picollo says Royals will stay 'open-minded' ahead of Trade Deadline \- MLB.com, 访问时间为 六月 25, 2025， [https://www.mlb.com/news/royals-j-j-picollo-discusses-trade-deadline-strategy](https://www.mlb.com/news/royals-j-j-picollo-discusses-trade-deadline-strategy)  
68. About U.S. Savings Bonds \- TreasuryDirect, 访问时间为 六月 25, 2025， [https://treasurydirect.gov/savings-bonds/](https://treasurydirect.gov/savings-bonds/)