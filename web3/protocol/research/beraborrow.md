

# **Beraborrow深度分析：Berachain生态系统中的基础性DeFi协议**

---

## **I. 执行摘要**

本报告旨在对Beraborrow协议进行全面深入的尽职调查分析。Beraborrow是原生构建于Berachain Layer-1区块链上的抵押债务头寸（Collateralized Debt Position, CDP）协议。其核心价值主张是通过允许用户抵押多种类型的资产铸造其原生稳定币$NECT，从而获得无息贷款，以解锁资本效率 1。

本报告的核心论点是，Beraborrow的主要创新并非CDP模型本身（其模型灵感来源于Liquity），而在于其与Berachain新颖的流动性证明（Proof-of-Liquidity, PoL）共识机制之间形成的深度共生关系。这种整合创造了一个独特的经济飞轮，使Beraborrow有潜力成为整个Berachain生态系统的基础性“中央银行”原语 4。

**核心发现：**

* **协议机制**：该协议的“无息”特性是其抵押品能够赚取PoL奖励的直接结果，这些奖励有效地补贴或抵消了传统的借贷成本，从而显著提升了资本效率 1。  
* **代币经济学**：其双代币体系以NECT作为生态系统的实用型稳定币，以POLLEN作为治理和价值捕获代币。一个重大的风险因素是，分配给团队和早期投资者的近50%的$POLLEN供应量缺乏公开的归属（vesting）时间表信息，这带来了潜在的市场风险 6。  
* **链上表现**：链上数据显示，该协议已吸引了超过5300万美元的总锁仓价值（TVL），表明其在初生的Berachain生态系统中已初步实现了产品市场契合。协议正在产生可观的费用和收入，但其治理代币$POLLEN自推出以来经历了显著的价格波动 8。  
* **安全性**：Beraborrow已经通过了Halborn的智能合约安全审计 10。然而，其核心智能合约缺乏公开的代码库，这引发了关于透明度和持续社区审查的担忧 11。此外，该项目已成为复杂网络钓鱼骗局的目标，凸显了生态系统层面的安全风险 12。

**战略展望：**

Beraborrow在战略上处于有利地位，有望成为Berachain DeFi生态不可或缺的组成部分。其成功与底层公链的增长紧密相连。未来的关键挑战包括：有效管理其代币经济学相关的风险，提高安全透明度，以及在快速增长的Berachain生态系统中抵御潜在竞争对手的挑战。

---

## **II. Berachain范式：理解协议的基石**

在深入分析Beraborrow之前，必须首先理解其运行的基础设施——Berachain。这是一个与EVM（以太坊虚拟机）完全相同的Layer-1区块链 13。其核心创新在于采用了流动性证明（Proof-of-Liquidity, PoL）共识机制。该机制旨在将网络安全与生态系统流动性进行深度绑定，这与传统的权益证明（Proof-of-Stake, PoS）模型有着本质区别 5。

### **流动性证明（PoL）机制解析**

PoL机制允许用户通过向指定的DeFi协议金库（vaults）提供流动性来为网络安全做贡献 15。作为回报，流动性提供者会获得网络治理代币$BGT。

BGT代币本身不可转让，但可以委托给验证者\[5,17\]。验证者则根据其收到的委托量，将未来的BGT释放（emissions）引导至不同的流动性池中。这创造了一个竞争性市场，各个协议可以通过贿赂（bribes）来吸引验证者，从而为自己的流动性池争取更多的激励。这个机制正是驱动Beraborrow独特功能的核心引擎 5。

### **三代币架构**

Berachain的经济模型由三种不同的代币构成，各自承担不同的核心功能：

* **$BERA**：作为网络的原生Gas代币，用于支付交易费用，类似于以太坊上的ETH 16。  
* **$BGT**：不可转让的治理代币，通过参与PoL活动赚取。它控制着整个网络流动性激励的流向 5。  
* **$HONEY**：Berachain官方的超额抵押生态稳定币，与Beraborrow发行的$NECT有所区别 5。生态系统中存在两种原生稳定币（  
  HONEY和NECT）是一个值得持续关注的关键动态。

### **生态系统背景**

Berachain已经成功地从Polychain Capital、Brevan Howard Digital和Framework Ventures等顶级投资机构处筹集了大量资金（A轮和B轮共计1.42亿美元），这表明市场对其独特模式抱有强烈信心 19。Beraborrow是这个资金充裕且迅速扩张的生态系统中的关键去中心化应用（dApp）之一 13。

Beraborrow的整个价值主张都建立在Berachain PoL机制的成功和其独特运作方式之上。它并非一个与链无关的协议，无法轻易地在其他L1或L2网络上复制。这种设计既构筑了强大的护城河（如果Berachain成功），也形成了一个单一故障点（如果Berachain失败）。协议的“无息”模型完全依赖于抵押品赚取的PoL奖励（$BGT） 1，而这些奖励是Berachain共识层独有的特性 5。因此，Beraborrow的核心经济循环从根本上依赖于PoL机制的存在和正常运行。这意味着，对Beraborrow的投资在很大程度上是对Berachain本身发展前景的一次高杠杆押注。它的命运与Berachain通过PoL机制吸引和维持流动性的能力紧密相连。

---

## **III. 协议架构：机制深度剖析**

Beraborrow在本质上是一个CDP协议，允许用户锁定抵押品以铸造稳定币$NECT 8。该模型明确基于Liquity V2框架，表明它是一个为适应Berachain环境而进行的“友好分叉” 3。

### **铸币流程：“Dens”与$NECT**

协议的核心流程如下：用户将经批准的抵押资产存入名为“Dens”的智能合约金库中 2。随后，用户可以根据其抵押品的价值，铸造（即借出）协议的原生超额抵押稳定币Nectar ($NECT) 2。这一过程使用户能够在不出售资产的情况下释放其流动性，从而保留对底层资产潜在升值空间的敞口 1。

### **支持的抵押品类型**

协议已经从最初主要关注$iBGT（一种来自Infrared Finance的流动性质押衍生品）发展成为一个多抵押资产平台 4。目前支持的资产类别包括：

* **Berachain原生代币**：如BERA和wBERA 7。  
* **流动性质押衍生品（LSDs）**：如$iBGT 2。  
* **主流加密资产**：如wBTC和wETH 7。  
* **流动性提供者（LP）头寸**：来自Berachain生态的去中心化交易所（DEX），如Bex和Berps 2。这是一项提升资本效率的关键功能，它允许LP在赚取交易费和PoL奖励的同时，还能将其LP头寸作为抵押品进行借贷。

### **核心用户功能**

* **无息贷款**：这是协议最突出的特点。系统成本并非通过收取可变利率来覆盖，而是由存入的抵押品所产生的PoL收益来抵消，从而为借款人提供了事实上的无息贷款 1。  
* **自动化杠杆（“循环套利”）**：Beraborrow提供了一个简化的用户界面，以帮助用户构建杠杆头寸。协议利用闪电贷自动执行递归循环操作：借入NECT−\>将NECT兑换为更多抵押品 \-\> 存入更多抵押品 \-\> 借入更多$NECT 2。这使用户能够通过一个简单的滑块界面来放大他们对某一抵押资产的风险敞口。  
* **自动复利Dens**：存入Dens的抵押品所获得的PoL奖励（以$iBGT形式）可以被自动再投资，从而随着时间的推移提高用户的抵押率，并形成一个自我增强的收益机制 2。

### **流动性稳定池（LSP）**

LSP是协议抵御坏账风险的第一道防线。用户可以将NECT存入LSP\[5,21\]。当一个Den被清算时，其债务（以NECT计）通过销毁LSP中的NECT来抵消。作为回报，被清算Den中的抵押品将被转移给LSP的储户\[5,24\]。LSP储户通过这些清算事件赚取回报（以折扣价获得抵押品），同时还能获得协议费用和POLLEN代币激励 5。这为用户提供了经济激励，促使他们提供保障协议安全的流动性。

### **清算机制**

尽管官方文档未提供具体的参数细节 25，但其机制继承自Liquity模型。如果用户的头寸（“Den”）的抵押率低于预设的最低阈值，该头寸将被清算 26。LSP是吸收被清算头寸债务的主要机制，取代了像MakerDAO等协议中更为复杂的拍卖系统 24。这种设计使得清算过程更高效，几乎可以瞬时完成。

协议的机制设计极具资本效率。将LP代币作为抵押品与PoL奖励的自动复利相结合，创造了一种独特的“超级头寸”。用户可以从单一的初始资本中同时获得三重收益：LP交易费、LP头寸的PoL奖励，以及部署借出的$NECT所产生的收益。具体而言，一个用户首先在Berachain的DEX上提供流动性，获得LP代币，该代币本身已在赚取交易费和PoL奖励($BGT) 2。然后，用户将这个本身就在生息的LP代币存入Beraborrow的Den作为抵押品，并设置Den自动将PoL奖励复投回头寸中，从而使抵押品价值随时间增长 2。接着，用户以此为抵押借出$NECT，并可将这些$NECT投入到另一个收益策略中，例如存入流动性稳定池以赚取清算奖励和$POLLEN激励 21。这种多层次的收益叠加策略虽然极大地提高了资本效率，但也引入了复合的智能合约风险和经济风险。

此外，选择分叉Liquity V2是一项战略性决策。Liquity以其不可变性、去中心化和高资本效率（低抵押率）而闻名 26。通过在这一经过实战检验的基础上进行构建，Beraborrow继承了其信誉和稳健的机制设计，使其能够专注于将创新重点放在与PoL的整合上。这意味着Beraborrow并非在重新发明CDP引擎，而是在一个具有独特功能（PoL）的新区块链环境中调整一个成熟的模型。这降低了技术执行风险，但也可能限制了其与其他潜在Liquity分叉项目在根本上的差异化。

---

## **IV. 代币经济学分析：NECT与POLLEN的双代币经济**

Beraborrow的经济模型围绕两种核心代币展开：NECT稳定币和POLLEN治理代币。

### **$NECT：由PoL驱动的稳定币**

* **功用**：$NECT被设计为Berachain生态系统中具有高度可组合性和广泛用途的稳定币 2。其主要用例包括参与其他DeFi协议、提供流动性以及执行杠杆策略 21。  
* **抵押机制**：它是一种超额抵押稳定币，完全由Berachain原生资产支持 4。  
* **锚定稳定性**：尽管关于锚定机制的详细文档尚不可用 7，但其稳定性主要通过以下几种力量来维持：  
  1. **硬锚定（赎回）**：作为一种超额抵押稳定币，用户始终可以用1 $NECT从协议中赎回价值1美元的抵押品，这为其价格创造了一个底线。  
  2. **市场流动性**：在NECT交易对（如NECT/HONEY,NECT/USDC）中保持深度流动性有助于吸收买卖压力。协议利用其治理代币POLLEN来激励这种流动性 5。  
  3. **锚定稳定模块（PSM）**：联合创始人Kobble在一次研讨会中提到使用PSM来维持锚定 29。PSM允许$NECT与其他受信任的稳定币（如USDC）进行1:1的兑换，从而创造了一个高效的套利机制来强制维持锚定 30。Berachain的Boyco市场概述中也提到了将铸造的NECT供应到PSM的策略 32。

### **$POLLEN：治理与价值捕获**

* **功用**：$POLLEN是协议的治理代币 2。持有者可以参与有关抵押品类型、协议参数和未来发展方向的决策 2。  
* **价值捕获（飞轮效应）**：主要的价值捕获机制是通过质押$POLLEN（生成sPOLLEN）来实现的。质押者可以分享协议的收入，这些收入来源于借贷和清算活动产生的手续费 4。这创造了一个经济“飞轮”：  
  * $NECT的功用增加，导致在Beraborrow上的借贷和杠杆活动增多。  
  * 这为协议带来了更多的费用收入。  
  * 这些费用被分配给sPOLLEN的质押者。  
  * sPOLLEN质押者获得更高的回报，从而增加了持有和质押POLLEN的动机，而POLLEN又可以被用来为$NECT交易对引导更多的流动性激励，进一步增强其功用 4。

### **$POLLEN代币经济学与分配**

* **总供应量**：420,000,000 $POLLEN 4。  
* **公开发售**：在Fjord Foundry上进行了一次公开发售，以4200万美元的完全稀释估值（FDV）出售了2.5%的代币，筹集了约100万美元 6。  
* **分配情况**：见下表1。

**表1: $POLLEN代币分配**

| 类别 | 占总供应量百分比 | 代币数量 |
| :---- | :---- | :---- |
| 社区 | 37.4% | 157,080,000 |
| 种子轮与战略轮 | 31.6% | 132,720,000 |
| 团队与顾问 | 18.0% | 75,600,000 |
| 财库 | 5.0% | 21,000,000 |
| 流动性 | 5.0% | 21,000,000 |
| 公开轮 | 2.5% | 10,500,000 |
| 社区轮 | 0.5% | 2,100,000 |
| **总计** | **100%** | **420,000,000** |

数据来源: 6

### **关键风险：归属与解锁时间表**

一个重大的担忧是，关于团队、顾问和投资者份额的归属时间表、锁仓期（cliff）或代币释放计划，缺乏公开可查的信息 7。这些群体合计控制了总供应量的近50%（31.6% \+ 18%）。

这种内部人员代币归属时间表的不透明性构成了重大的治理和市场风险。首先，团队、顾问和早期投资者合计持有总供应量的49.6% 6。其次，现有资料明确指出，“没有关于代币随时间释放的锁仓期和归属的进一步信息” 7。在没有明确归属时间表的情况下，这些代币理论上可以随时解锁并出售，从而形成巨大的供应过剩。这种不确定性使得公众投资者无法模拟未来的代币通胀情况，也无法评估来自早期利益相关者的大规模抛售风险。这是代币经济学透明度方面的一个关键缺陷，对于任何机构投资者而言都是一个重要的危险信号。

此外，Berachain生态系统内的双稳定币模型（NECT和HONEY）可能引发一场争夺流动性和主导地位的“稳定币战争”。Beraborrow的成功取决于其能否使$NECT成为DeFi活动的首选稳定币。为了实现这一目标，协议正试图通过将其与PoL奖励系统深度融合来创造卓越的收益和功用，例如通过“$NECT/iBGT飞轮”\[7\]和对NECT流动性池的激励措施\[5\]。这场竞争的结果将是决定Beraborrow能否为POLLEN代币带来长期价值的关键因素。

---

## **V. 链上表现与财务健康状况**

本节对Beraborrow的链上关键指标和财务状况进行量化分析。

### **总锁仓价值（TVL）**

Beraborrow已实现了**5334万美元**的可观TVL，且全部集中在Berachain网络上。这表明该协议在其原生生态系统中获得了强劲的早期采用和用户信任 4。这一数据使其成为Berachain上规模最大的协议之一，而Berachain生态的总TVL约为3.99亿美元 19。

### **费用与收入**

协议正在产生可观的费用，年化费率达到**144,509美元** 9。累计费用已达

**232万美元**，这证明了协议通过其借贷和清算活动创造收入的能力 9。DefiLlama将费用定义为借款人支付的利息，这似乎与协议“无息”的宣传相悖。然而，这很可能指的是一次性的铸币/借款费或清算罚金，而非持续的利率 8。

### **$POLLEN代币市场表现**

* **价格**：该代币价格波动剧烈，当前价格约为0.0071美元，历史最高价为0.076美元，历史最低价为0.0055美元 9。与历史高点及其公开发售价格（约0.087-0.1美元）相比，价格已大幅下跌 6。  
* **市值与FDV**：当前市值约为74.7万至85.8万美元，完全稀释估值（FDV）约为299万美元 4。  
* **交易量**：24小时交易量较低，约为2.3万美元，且完全发生在去中心化交易所（DEX），表明缺乏主流中心化交易所（CEX）的上市和流动性支持 8。

### **用户活动**

协议每月约有1000个活跃地址 33。其合约在过去30天内的交易次数约为32,900次，显示出持续的链上交互 33。

**表2: 关键财务与链上指标**

| 指标 | 美元价值 | BERA价值 | 数据来源 |
| :---- | :---- | :---- | :---- |
| 总锁仓价值（TVL） | $53.34M | 21.59M BERA | 8 |
| $POLLEN 市值 | \~$747k | 329,880 BERA | 4 |
| $POLLEN 完全稀释估值 (FDV) | $2.99M | 1.15M BERA | 8 |
| 累计协议费用 | $2.32M | 913,228 BERA | 8 |
| 年化协议费用 | $144,509 | 59,804 BERA | 8 |
| 24小时 $POLLEN DEX交易量 | $22,983 | 11,271 BERA | 8 |
| 月活跃用户数 | \~1,000 | N/A | 33 |

协议的基本面表现（高TVL，强劲收入）与其代币的市场表现（低价格，低市值）之间存在显著脱节。这表明市场可能因某些因素而严重低估了该代币的价值，例如前述不透明的归属时间表、Berachain生态系统尚处早期阶段，或更广泛的市场环境。协议的TVL高达5334万美元 9，这是用户信任和产品市场契合的有力信号。同时，协议的累计费用达到232万美元 9，证明其商业模式是可行的。然而，$POLLEN代币的FDV仅为299万美元 9。FDV与TVL的比率约为0.056，对于一个领先的DeFi协议来说极低，这表明代币要么相对于其基本面被低估，要么市场认为其携带巨大风险。这种风险最可能的来源就是前文提到的近50%代币供应缺乏归属时间表，这造成了市场正在定价的巨大潜在供应过剩。

---

## **VI. 安全与风险评估**

对Beraborrow的全面评估必须包括对其安全状况和潜在风险的严格审查。

### **智能合约审计**

协议已至少进行了一次重要的安全审计。一份由知名安全公司**Halborn**出具的复审报告是公开可查的 10。该审计历时4周，对智能合约架构进行了全面评估。此外，数据聚合平台DefiLlama也确认该协议已通过审计（“Audits: Yes”） 8。另有资料提到，协议还经过了

**Recon-Fuzz**的审计，该审计结合了手动审查和模糊测试（fuzzing） 34。

### **代码透明度**

Beraborrow的官方GitHub组织主要包含用于黑客松项目的模板（例如LSP模块和Den策略），而非协议的核心生产代码 11。核心合约缺乏一个公开、最新的代码库，这在透明度方面是一个重大问题，也阻碍了独立安全研究人员对已部署代码的审查。

### **经济与协议风险**

* **清算瀑布**：与所有CDP协议一样，Beraborrow在极端市场波动期间容易受到连锁清算的冲击。抵押品价格的急剧下跌可能引发大规模清算，给LSP带来压力，并可能为协议造成坏账。  
* **$NECT脱锚风险**：$NECT的稳定性至关重要。锚定稳定机制的失败（例如PSM故障、套利激励不足或LSP遭遇“银行挤兑”）可能会破坏整个协议的根基。  
* **预言机风险**：协议依赖价格预言机来评估抵押品价值并确定何时需要进行清算。对这些预言机的操纵或延迟可能会被利用，这在其他DeFi协议中已有先例。

### **生态系统与用户风险**

* **网络钓鱼骗局**：已有记录显示，存在一个活跃且制作精良的网络钓鱼骗局，该骗局模仿Beraborrow的官方网站以窃取用户钱包资产 12。这凸显了严峻的用户安全挑战，并表明该项目已成为恶意行为者的高价值目标。  
* **协议依赖性**：Beraborrow与其他Berachain协议（如提供流动性质押的Infrared和提供LP代币的BEX）深度集成，这意味着它也继承了这些依赖项的风险。合作伙伴协议中的漏洞可能会对Beraborrow产生连锁反应。

该项目的安全状况呈现出复杂性。一方面，它聘请了像Halborn这样的知名审计公司，这是行业标准的安全最佳实践 10。但另一方面，其官方GitHub上仅有黑客松模板，而没有核心代码库 11。DeFi的安全模型依赖于“不信任，去验证”的原则。没有公开的代码，广大社区就无法进行验证。这使得安全保障完全依赖于审计报告和团队的内部实践，与包含公众监督的安全模型相比，其稳健性较差。对于一个拥有超过5000万美元TVL的协议而言，这是一个显著的缺陷。

---

## **VII. 竞争格局与市场定位**

Beraborrow的竞争环境可分为内部（Berachain生态）和外部（更广泛的DeFi市场）两个层面。

### **内部竞争（Berachain生态系统）**

Beraborrow被认为是Berachain上最引人注目的DeFi项目之一 21。生态系统内提及的其他借贷协议包括

**Bend** 22、

**Gummi**（一个无需预言机的借贷协议） 5和

**Ursa Finance** 35。Beraborrow在Berachain内部的核心差异化优势在于其与PoL机制的深度整合，以及将$NECT打造为核心生态系统稳定币的战略雄心 5。

### **外部竞争（更广泛的DeFi市场）**

* **直接前辈**：协议的设计深受以太坊上成熟的CDP协议**Liquity**的影响，后者以其0%利率贷款和稳定池机制而闻名 3。  
* **市场领导者**：CDP领域的首要竞争对手是DAI稳定币的发行方**MakerDAO**。两者之间的关键区别在于：  
  * **清算机制**：Beraborrow/Liquity通过稳定池实现即时清算，而MakerDAO采用更复杂的基于拍卖的系统 26。  
  * **治理模式**：Liquity的设计旨在最小化治理并实现不可变性，而MakerDAO拥有一个由MKR代币驱动的强大而活跃的治理体系 26。Beraborrow尽管机制基于Liquity，但其$POLLEN代币的设计似乎更倾向于MakerDAO的积极治理模式。  
  * **资本效率**：Beraborrow/Liquity提供更高的资本效率，其最低抵押率更低（例如110%），而MakerDAO则更为保守（例如130-170%） 26。

### **独特销售主张（USP）**

Beraborrow的独特销售主张在于，它将一个高资本效率的Liquity式CDP引擎与Berachain流动性证明机制独特的生息特性相结合。这使其能够提供一种“超级增压”的资本效率模式，即抵押品本身就是一种能够产生收益的生产性资产，而这些收益又反过来补贴了贷款成本。

**表3: 竞争协议对比**

| 特性 | Beraborrow | Liquity | MakerDAO |
| :---- | :---- | :---- | :---- |
| **核心模型** | CDP | CDP | CDP |
| **利率** | 0% (PoL收益抵消费用) 2 | 0% (一次性费用) 27 | 可变稳定费 27 |
| **清算机制** | 流动性稳定池 (即时) 5 | 稳定池 (即时) 26 | 抵押品拍卖 26 |
| **最低抵押率** | 高 (例如 110%) | 110% 26 | 低 (例如 150%+) 26 |
| **治理模式** | 积极 ($POLLEN) 2 | 最小化/不可变 26 | 积极 ($MKR) 27 |
| **主要稳定币** | $NECT | $LUSD | $DAI |
| **抵押品类型** | 多资产 (LSDs, LPs) 21 | 仅ETH (初期) 27 | 多资产 (含RWA) 27 |
| **独特之处** | 流动性证明机制整合 | 不可变性与去中心化 | 先发优势与RWA整合 |

Beraborrow正试图将Liquity的资本效率和优雅设计与MakerDAO的积极治理和激励驱动的飞轮模型相结合，并以Berachain独特的PoL引擎作为这一切的动力源。这是一个极具雄心的战略。其核心机制（稳定池、低抵押率、0%利率）直接源自Liquity 7，这提供了一个强大且经过验证的基础。其代币经济学，即

POLLEN代币通过治理捕获费用并引导激励，哲学上更接近MakerDAO的MKR代币 4，旨在创建一个可持续的经济模型。而使整个系统得以运转的底层收益则源于Berachain的PoL，这是Liquity和MakerDAO在其原生环境中都不具备的特性 1。这种混合模型的成功，取决于团队能否在Liquity的不可变性与MakerDAO的积极治理这两种相互竞争的哲学之间取得平衡，同时有效地利用PoL的力量。

---

## **VIII. 团队、投资者与生态系统活力**

### **团队与领导层**

与许多DeFi项目类似，Beraborrow团队的身份并未完全公开。然而，通过播客和技术研讨会，一些关键人物已被确认：**Kobble** (@0xKobble) 和 **Prince** (@Princeborrow) 被介绍为联合创始人 29。公司总部据称位于克罗地亚的萨格勒布 37。

### **投资者与支持**

Beraborrow已获得多家风险投资公司的资金支持，包括**BlackDragon、Dewhales Capital、Digital Consensus Fund、Founderheads、Pragma Ventures、Optic Capital、Hercules Ventures和Aquanow Ventures** 22。这个多元化的投资者群体为项目提供了资本和战略支持。值得注意的是，Beraborrow本身也被列为Infrared Finance的投资者，这表明Berachain DeFi生态系统核心协议之间存在着紧密的、互惠的战略伙伴关系 39。

### **社区与社交媒体**

该项目在社交媒体上保持着强大的影响力，其Twitter账户拥有约**50,400名关注者**，Discord服务器拥有约**29,900名成员** 3。社区的活跃度似乎是事件驱动的，在重大公告和产品发布期间达到高峰 7。项目通过设立特殊身份（如OG、Gold Club Member）和NFT相关激励措施，积极培养早期社区，显示出对加密原生社区建设的深刻理解 22。

### **开发者生态系统**

Beraborrow正在积极鼓励外部开发者在其平台上进行建设。项目赞助了**ETHGlobal布拉格黑客松**的挑战赛，为开发者提供了文档、代码库模板和奖金，以鼓励他们在流动性稳定池之上构建应用和创建管理型杠杆金库（Managed Leveraged Vaults） 20。这强烈表明了项目致力于围绕自身协议构建更广泛生态系统的决心。

Beraborrow对Infrared Finance的投资 39 是一个强有力的信号，表明Berachain的顶尖协议之间正在形成一种深度交织的协作战略。这并非一个零和竞争的环境，而是一个合作共赢的生态。Infrared提供了最初作为Beraborrow主要抵押品的流动性质押代币$iBGT 1，而Beraborrow的自动复利Dens直接利用了Infrared的机制 2。Beraborrow作为Infrared的A轮投资者出现 39，这标志着一种战略联盟，而非简单的集成。两个协议的成功是相互依存的。这可能预示着一个“Berachain联盟”或“协议卡特尔”的形成，这可能创造一个强大、统一的生态系统，使外部竞争者难以渗透。

---

## **IX. 结论与战略展望**

### **调查结果综合**

本报告重申了核心发现：Beraborrow是一个技术稳健、资本效率极高的CDP协议，战略性地定位为Berachain DeFi生态的基石。其核心优势在于将一个成熟的模型（Liquity V2）与原生链新颖的PoL共识机制进行了巧妙的整合。

### **增长催化剂**

* **Berachain生态系统增长**：作为主要的CDP平台，Beraborrow的增长与Berachain的整体采用率和TVL增长直接相关。  
* **$NECT的采用**：如果NECT成为Berachain上交易和收益农场的主导稳定币，将为Beraborrow协议和POLLEN代币带来巨大的价值。  
* **开发者生态系统扩展**：黑客松和开发者资助计划的成功可能会催生一个基于Beraborrow的、充满活力的第三方应用生态，从而增加其功用和防御能力。

### **主要风险与关注领域**

* **代币经济学透明度**：内部人员代币缺乏明确的归属时间表，这仍然是$POLLEN代币市场稳定性和投资者信心的最大风险。  
* **执行与竞争**：尽管拥有先发优势，但Beraborrow仍面临Berachain上其他借贷协议的竞争。团队必须持续创新并有效执行，以保持领先地位。  
* **安全与透明度**：核心合约代码库不公开是一个显著的弱点，应予以解决，以符合DeFi的最佳实践并建立更大的信任。  
* **对Berachain的依赖**：协议的命运完全与Berachain捆绑在一起。底层L1的任何根本性缺陷或未能获得市场牵引力，都将对Beraborrow造成灾难性影响。

### **最终评估**

Beraborrow代表了一个高风险、高回报的投资机会。它具备成为基础性DeFi原语的所有特征：强大的技术设计、深度的生态系统整合以及清晰的价值捕获路径。然而，与代币经济学透明度和对单一新生区块链的依赖相关的重大风险必须得到审慎考虑。对于投资者而言，这使得Beraborrow成为对整个Berachain实验成功与否的一次高杠杆押注。

#### **引用的著作**

1. Beraborrow \- CRYPTO fundraising, 访问时间为 八月 31, 2025， [https://crypto-fundraising.info/projects/beraborrow/](https://crypto-fundraising.info/projects/beraborrow/)  
2. Beraborrow | Decentralized Borrowing Protocol on Berachain \- DAIC Capital, 访问时间为 八月 31, 2025， [https://daic.capital/ecosystem/berachain/beraborrow-lending-borrowing](https://daic.capital/ecosystem/berachain/beraborrow-lending-borrowing)  
3. BerraBorrow Crypto Analytics & User Data \- AlphaGrowth, 访问时间为 八月 31, 2025， [https://alphagrowth.io/berraborrow](https://alphagrowth.io/berraborrow)  
4. Beraborrow price today, POLLEN to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 八月 31, 2025， [https://coinmarketcap.com/currencies/beraborrow/](https://coinmarketcap.com/currencies/beraborrow/)  
5. Berachain \- The Journey to Bear Village, 访问时间为 八月 31, 2025， [https://www.gate.com/learn/articles/berachain-the-journey-to-bear-village/6278](https://www.gate.com/learn/articles/berachain-the-journey-to-bear-village/6278)  
6. Beraborrow (POLLEN) token sale analytics and information, private ..., 访问时间为 八月 31, 2025， [https://icoanalytics.org/projects/beraborrow/](https://icoanalytics.org/projects/beraborrow/)  
7. Beraborrow \- Paragraph, 访问时间为 八月 31, 2025， [https://paragraph.com/@standardandpaws/ifr-beraborrow](https://paragraph.com/@standardandpaws/ifr-beraborrow)  
8. Beraborrow \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/protocol/beraborrow?denomination=BERA](https://defillama.com/protocol/beraborrow?denomination=BERA)  
9. Beraborrow \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/protocol/beraborrow](https://defillama.com/protocol/beraborrow)  
10. Core \- Re-Assessment | SSC \- GitBook, 访问时间为 八月 31, 2025， [https://1570492309-files.gitbook.io/\~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FffzDCMBDa391vIMqruBP%2Fuploads%2FTQDOO1RBOsxhcXGPsevp%2FHalborn%20Beraborrow-Core%20Report.pdf?alt=media\&token=06f6ce8c-bf30-4f6f-97ae-95e61dacf999](https://1570492309-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FffzDCMBDa391vIMqruBP%2Fuploads%2FTQDOO1RBOsxhcXGPsevp%2FHalborn%20Beraborrow-Core%20Report.pdf?alt=media&token=06f6ce8c-bf30-4f6f-97ae-95e61dacf999)  
11. Beraborrowofficial \- GitHub, 访问时间为 八月 31, 2025， [https://github.com/Beraborrowofficial](https://github.com/Beraborrowofficial)  
12. Beraborrow ($BERA) Rewards Scam \- Removal and recovery steps \- PCrisk.com, 访问时间为 八月 31, 2025， [https://www.pcrisk.com/removal-guides/32653-beraborrow-bera-rewards-scam](https://www.pcrisk.com/removal-guides/32653-beraborrow-bera-rewards-scam)  
13. Berachain: Home, 访问时间为 八月 31, 2025， [https://www.berachain.com/](https://www.berachain.com/)  
14. Berachain \- GitHub, 访问时间为 八月 31, 2025， [https://github.com/berachain](https://github.com/berachain)  
15. What is Berachain? A Complete Guide \- Nansen, 访问时间为 八月 31, 2025， [https://www.nansen.ai/post/what-is-berachain](https://www.nansen.ai/post/what-is-berachain)  
16. What is Berachain? \- Koinly, 访问时间为 八月 31, 2025， [https://koinly.io/blog/berachain-guide/](https://koinly.io/blog/berachain-guide/)  
17. Berachain Tokenomics, 访问时间为 八月 31, 2025， [https://docs.berachain.com/learn/pol/tokens/tokenomics](https://docs.berachain.com/learn/pol/tokens/tokenomics)  
18. Stablecoin APR Exceeds 20%: The Ultimate Berachain Mining Guide \- BlockBeats, 访问时间为 八月 31, 2025， [https://m.theblockbeats.info/en/news/57444](https://m.theblockbeats.info/en/news/57444)  
19. Berachain \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/chain/Berachain](https://defillama.com/chain/Berachain)  
20. Beraborrow \- ETHGlobal, 访问时间为 八月 31, 2025， [https://ethglobal.com/events/prague/prizes/beraborrow](https://ethglobal.com/events/prague/prizes/beraborrow)  
21. The lending protocol Beraborrow officially launches its public offering today; is its unique design worth participating? | PANews on Binance Square, 访问时间为 八月 31, 2025， [https://www.binance.com/en/square/post/22151674684073](https://www.binance.com/en/square/post/22151674684073)  
22. \[Zero-cost airdrop\] Berachain Bear Chain Ecosystem "Beraborrow" nanny-level interaction process | 在金 on Binance Square, 访问时间为 八月 31, 2025， [https://www.binance.com/en/square/post/14597243486273](https://www.binance.com/en/square/post/14597243486273)  
23. Looping: a deep dive into recursive borrowing and lending | Contango \- Medium, 访问时间为 八月 31, 2025， [https://medium.com/contango-xyz/what-is-looping-78421c8a1367](https://medium.com/contango-xyz/what-is-looping-78421c8a1367)  
24. Understanding Liquity's Stability Pool, 访问时间为 八月 31, 2025， [https://www.liquity.org/blog/understanding-liquitys-stability-pool](https://www.liquity.org/blog/understanding-liquitys-stability-pool)  
25. What is Beraborrow? | Beraborrow, 访问时间为 八月 31, 2025， [https://beraborrow.gitbook.io/docs/](https://beraborrow.gitbook.io/docs/)  
26. Comparison Series: Liquity Protocol vs MakerDAO Pt. 2, 访问时间为 八月 31, 2025， [https://www.liquity.org/blog/comparison-series-liquity-protocol-vs-makerdao-pt-2](https://www.liquity.org/blog/comparison-series-liquity-protocol-vs-makerdao-pt-2)  
27. Crypto Notes: Top 3 CDP Protocols \- Mint, 访问时间为 八月 31, 2025， [https://www.livemint.com/mint-top-newsletter/cryptonotes19082022.html](https://www.livemint.com/mint-top-newsletter/cryptonotes19082022.html)  
28. Nectar Price: NECT Live Price Chart, Market Cap & News Today | CoinGecko, 访问时间为 八月 31, 2025， [https://www.coingecko.com/en/coins/nectar](https://www.coingecko.com/en/coins/nectar)  
29. Kobble I Beraborrow Workshop I ETHGlobal Prague 2025 \- YouTube, 访问时间为 八月 31, 2025， [https://www.youtube.com/watch?v=1gyK3nu8o5s](https://www.youtube.com/watch?v=1gyK3nu8o5s)  
30. What is Peg Stability Module? \- Delphi Digital, 访问时间为 八月 31, 2025， [https://members.delphidigital.io/learn/peg-stability-module](https://members.delphidigital.io/learn/peg-stability-module)  
31. MIP29: Peg Stability Module \- MakerDAO, 访问时间为 八月 31, 2025， [https://mips.makerdao.com/mips/details/MIP29](https://mips.makerdao.com/mips/details/MIP29)  
32. Boyco Markets Overview \- Berachain Blogs, 访问时间为 八月 31, 2025， [https://blog.berachain.com/blog/boyco-markets-overview](https://blog.berachain.com/blog/boyco-markets-overview)  
33. Beraborrow overview \- Token Terminal, 访问时间为 八月 31, 2025， [https://tokenterminal.com/explorer/projects/beraborrow](https://tokenterminal.com/explorer/projects/beraborrow)  
34. The Dark Side of the LP \- by nican0r and Recon \- Recon \- Substack, 访问时间为 八月 31, 2025， [https://substack.com/home/post/p-165804687?utm\_campaign=post\&utm\_medium=web](https://substack.com/home/post/p-165804687?utm_campaign=post&utm_medium=web)  
35. Beraborrow \- Crypto Jobs List, 访问时间为 八月 31, 2025， [https://cryptojobslist.com/companies/beraborrow](https://cryptojobslist.com/companies/beraborrow)  
36. Beraborrow–The HoneyCast \- Apple Podcasts, 访问时间为 八月 31, 2025， [https://podcasts.apple.com/cz/podcast/beraborrow/id1653524688?i=1000673580037](https://podcasts.apple.com/cz/podcast/beraborrow/id1653524688?i=1000673580037)  
37. BeraBorrow 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 八月 31, 2025， [https://pitchbook.com/profiles/company/590979-16](https://pitchbook.com/profiles/company/590979-16)  
38. Early-Stage Investments in Digital Assets & Web3 | Aquanow Ventures, 访问时间为 八月 31, 2025， [https://www.aquanow.com/aquanow-ventures](https://www.aquanow.com/aquanow-ventures)  
39. Infrared Finance \- DefiLlama, 访问时间为 八月 31, 2025， [https://defillama.com/protocol/infrared-finance?denomination=BERA](https://defillama.com/protocol/infrared-finance?denomination=BERA)  
40. Beraborrow Smart Contract Audit | Cyberscope, 访问时间为 八月 31, 2025， [https://www.cyberscope.io/audits/coin-beraborrow](https://www.cyberscope.io/audits/coin-beraborrow)