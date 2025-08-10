

# **Asymmetry Finance: 机构级深度投资尽职调查报告**

## **1.0 执行摘要 (Executive Summary)**

本报告旨在为资深去中心化金融（DeFi）投资者提供一份关于Asymmetry Finance协议的全面、深入的尽职调查分析。Asymmetry Finance通过其创新的高收益流动性质押代币（LST）afETH和基于Liquity v2架构的合成稳定币USDaf，致力于解决以太坊LST市场的中心化问题，并为市场提供具有竞争力的收益机会。

#### **核心论点**

Asymmetry Finance是一个由经验丰富的DeFi专家团队领导的、具有高度创新精神的早期项目。其核心价值主张在于通过复杂的结构化产品，为用户提供远超市场平均水平的“真实收益”（Real Yield）。afETH通过杠杆化Convex生态系统提供高额ETH质押回报，而USDaf则通过扩展抵押品范围和引入用户自定义利率，对成熟的Liquity v2模型进行了创新。这种策略使其在拥挤的DeFi市场中脱颖而出，但也引入了相应的复杂性和风险。

#### **关键发现**

* **高度的安全性透明度：** 项目通过与Code423n4等平台进行多次公开的智能合约审计竞赛，并公开发布详细的漏洞修复报告，展示了其在安全方面的专业承诺和高透明度，这在DeFi领域是建立信任的关键优势 1。  
* **双刃剑式的代币经济学：** 其原生代币ASF超过80%的流通供应量被锁定在veASF质押合约中，反映出社区极高的长期信念和对协议未来的信心 3。然而，这也导致了极低的二级市场流动性，可能引发剧烈的价格波动，对新入场的投资者构成风险。  
* **“分叉并创新”的开发模式：** 协议的核心产品afETH和USDaf分别深度整合或分叉了Convex和Liquity v2等经过市场考验的成熟协议。这种模式在继承了底层协议安全性和稳定性的同时，也使其直接暴露于这些协议的任何系统性风险之下 5。  
* **关键历史风险事件信息缺失：** 多个官方渠道曾提及一份关于“USDaf预言机事件”的报告，日期为2025年6月19日 7。然而，本报告在所有可触及的研究材料中均未能找到该报告的详细内容。这一信息盲点构成了本次尽职调查中最重大的风险因素，使得对  
  USDaf稳定币的历史安全性和团队的危机处理能力无法做出完整评估。

#### **投资策略概要**

本报告分析了多种投资策略，其中最具吸引力的包括：

1. **长期价值投资：** 通过质押ASF为veASF，深度参与协议治理，并捕获未来协议增长所带来的收入分成。  
2. **高阶收益策略：** 谨慎参与afETH的质押以获取高于市场平均水平的ETH收益，以及利用USDaf稳定性池在市场波动中赚取清算收益。

#### **最终投资评级：建议 (Recommend)**

综合考量，Asymmetry Finance被评为\*\*“建议”\*\*级别。该评级基于其强大的团队背景、创新的产品设计、DeFi原生资本的认可及其在安全透明度方面的努力。然而，此建议附带强烈警告：投资者必须充分认识并接受其产品固有的复杂性、对外部协议的高度依赖性，以及最关键的——围绕“USDaf预言机事件”的重大信息不透明风险。建议采用分阶段、小仓位的参与策略，并在团队就历史风险事件提供更完整的披露之前，对USDaf相关产品保持最高程度的审慎。

---

## **2.0 项目概述与核心价值主张 (Project Overview & Core Value Proposition)**

### **2.1 项目使命与愿景**

Asymmetry Finance的核心使命是应对和解决以太坊生态系统中日益严重的中心化问题，特别是围绕流动性质押代币（Liquid Staking Tokens, LSTs）领域的市场集中化 9。随着以太坊转向权益证明（Proof-of-Stake），LST市场迅速发展，但绝大部分市场份额被Lido Finance等少数几个巨头所占据 7。这种中心化不仅与DeFi的核心精神相悖，也给整个以太坊网络带来了潜在的单点故障和审查风险 9。

Asymmetry Finance的愿景并非直接挑战或取代Lido等现有巨头，而是通过提供新颖的、去中心化的流动性质押替代方案，来促进一个更健康、更多元化的LST生态系统 9。项目旨在通过创建高资本效率、高收益且风险分散的结构化产品，降低用户参与DeFi的门槛，同时激励用户为网络去中心化做出贡献 11。

### **2.2 核心产品矩阵**

Asymmetry Finance构建了一个包含稳定币、高收益LST和收益优化工具的产品矩阵，以实现其愿景。

#### **2.2.1 USDaf 稳定币**

* **定位:** USDaf是协议的旗舰稳定币产品，定位为一个完全去中心化、由多种优质资产支持的合成美元稳定币 12。它基于成熟的Liquity v2协议架构进行分叉和创新，旨在提供一个安全、透明且不可篡改的稳定币借贷平台 14。  
* **核心特点:** 与Liquity V1主要依赖ETH作为抵押品不同，USDaf将抵押品范围扩展到了多种封装比特币（wBTC, tBTC）和主流的生息稳定币（如sfrxUSD, scrvUSD），极大地拓宽了其应用场景和潜在市场规模 6。其最显著的创新在于允许借款人自行设定和调整其贷款的固定利率，这为用户提供了前所未有的成本控制灵活性和可预测性 6。此外，协议的核心逻辑被设计为“不可变”（Immutable），意味着一旦部署，核心合约将无法被升级或修改，从而最大程度地减少了治理攻击和恶意操作的风险。

#### **2.2.2 afETH \- 高收益ETH LST**

* **定位:** afETH是一种混合型（Hybrid）LST产品，其目标是为ETH持有者提供远超传统ETH质押收益的市场领先回报率。官方文档中提到，其目标年化收益率（APY）约为10%，是标准ETH质押收益率的三倍左右 6。  
* **机制:** afETH的高收益并非凭空产生，而是通过一种精巧的机制实现的。当用户存入ETH时，协议通过其“不对称分配算法”（Asymmetrical Allocation Algorithm）将资金自动分配给两种底层资产：Staked Frax Ethereum (sfrxETH) 和 Vote-Locked Convex (vlCVX)。sfrxETH部分提供基础的ETH质押收益，而vlCVX部分则深度参与到Curve和Convex生态的“治理贿赂”市场中，通过出售投票权来获取超额收益，这是其高回报的核心来源 6。

#### **2.2.3 afCVX \- Convex收益优化器**

* **定位:** afCVX是为Convex Finance的原生代币CVX设计的收益增强工具。它旨在解决CVX持有者在寻求收益时面临的两大痛点：长达16周的强制锁定期和复杂的操作流程 13。  
* **机制:** afCVX提供了一种一键式的解决方案，用户可以随时存入CVX并获得流动性代币afCVX，即时开始赚取复利收益，同时保留了随时退出的灵活性，极大地提升了资本效率 13。

#### **2.2.4 safETH (已弃用)**

* **历史定位:** safETH (Simple Asymmetry Finance Ethereum) 是Asymmetry Finance推出的首个产品，其设计初衷是创建一个由多种主流LST（如rETH, wstETH, sfrxETH）组成的去中心化指数型代币 1。目标是通过一篮子资产来分散风险，为用户提供一个简单、安全的参与ETH质押的方式 10。  
* **现状:** 随着项目战略的演进，团队发现简单的LST指数产品在收益上缺乏足够的竞争力。因此，项目重心转向了能提供更高收益的afETH和功能更复杂的USDaf。目前，safETH合约已处于“仅限提款”模式，不再接受新的存款 6。这一战略转变清晰地表明，Asymmetry Finance已经从一个被动的指数提供商，演变为一个主动的、追求更高Alpha的收益策略开发者。这种演进显示了团队的适应性和市场嗅觉，但同时也意味着其产品组合的风险偏好在逐步提升。

---

## **3.0 市场与竞争格局分析 (Market & Competitive Landscape Analysis)**

### **3.1 市场定位**

Asymmetry Finance将自身定位为DeFi领域的“结构化产品中心”（Structured Products Hub），专注于为流动性质押和再质押代币提供创新的收益解决方案 11。其核心战略并非追求成为规模最大的协议，而是通过精巧的产品设计，在特定的细分市场中提供最高的、可持续的真实收益。

根据DeFi Llama的数据，截至分析时，Asymmetry Finance协议的总锁仓价值（TVL）在800万至1000万美元之间波动 3。其中，

afETH和afCVX等收益策略产品贡献了大部分TVL，而其稳定币产品USDaf的TVL相对较小，约为10万美元左右 16。这些数据表明，Asymmetry Finance在整个DeFi生态中仍属于一个中小型项目，其市场影响力尚处于早期积累阶段。项目的成功与否，将高度依赖其能否持续提供具有吸引力的收益率，以吸引更多资本流入。

### **3.2 竞争对手分析**

Asymmetry Finance的产品线使其在两个主要的DeFi赛道中面临竞争。

* **USDaf (CDP稳定币) 竞争对手:**  
  * **直接竞争者:** USDaf最直接的竞争对手是其技术基础的来源——**Liquity协议**。Liquity V1 (LUSD) 是DeFi领域最成功的去中心化稳定币之一，拥有超过3亿美元的TVL 16。  
    USDaf作为Liquity V2的分叉，虽然在抵押品多样性和利率模型上有所创新，但仍需面对Liquity强大的品牌效应和用户基础。  
  * **其他主要CDP协议:** 市场上还存在其他强大的CDP稳定币协议，如Curve的**crvUSD**（TVL超过2亿美元）和**Inverse Finance**的FiRM（TVL超过1.5亿美元） 16。这些协议各自拥有庞大的生态系统和流动性支持，对  
    USDaf构成了严峻的竞争压力。  
* **afETH (LST收益) 竞争对手:**  
  * **指数型产品:** 在LST指数和多元化收益领域，**Index Coop** ($DS-ETH) 和 **Set Protocol** 是主要的竞争者，它们提供各种打包的LST产品，TVL分别在数千万美元级别 18。  
  * **收益聚合器:** **Yearn Finance** 和 **dHEDGE** 等收益聚合器也提供复杂的ETH收益策略，它们拥有成熟的技术架构和庞大的用户群，TVL均超过3000万美元 18。  
    afETH需要证明其独特的收益模型（深度绑定Convex）能够持续跑赢这些更通用的收益聚合策略。

### **3.3 关键指标对比表**

为了更直观地评估Asymmetry Finance的市场地位，下表将其与主要竞争对手的关键指标进行了对比。这种对比超越了单一的TVL维度，深入到核心机制、收益来源和风险特征，为投资者提供了更具深度的决策依据。例如，当投资者看到USDaf的TVL远小于LUSD时，此表将清晰地揭示USDaf的差异化优势在于其更广泛的抵押品接受范围和创新的用户自定义利率模型 14，这正是其吸引特定用户群体的关键。

| 指标 | Asymmetry Finance (USDaf/afETH) | Liquity (LUSD) | Index Coop ($DS-ETH) | Yearn Finance (ETH Vaults) |
| :---- | :---- | :---- | :---- | :---- |
| **类别** | CDP稳定币 / LST收益策略 | CDP稳定币 | LST指数 | LST收益聚合器 |
| **TVL** | \~$10M (Combined) 4 | \~$331M 16 | \~$42M 18 | \~$10M (ETH) 18 |
| **核心机制** | Liquity v2分叉 / Convex投票权杠杆 | 超额抵押CDP (ETH-only) | 多元化LST一篮子指数 | 自动化多策略收益聚合 |
| **收益来源** | 借贷利息、清算收益、Convex贿赂市场 | 借贷费、清算收益 | 基础LST质押收益 | 多种DeFi协议的复合收益 |
| **关键优势** | 用户自定义固定利率、BTC/生息稳定币抵押、超高ETH APY | 极度去中心化、无治理、高资本效率 | 风险分散、操作简单 | 策略多样化、风险动态调整 |
| **主要风险** | CVX价格风险、底层协议依赖、新协议风险 | 仅限ETH抵押、清算机制极端 | 收益率上限较低、智能合约风险 | 策略复杂性高、智能合约风险 |

通过上述分析可以看出，Asymmetry Finance的竞争策略并非在规模上与巨头正面抗衡，而是通过提供更高收益、更具创新性的利基产品来吸引对风险有更高承受能力的资本。afETH承诺的超高收益率和USDaf的灵活借贷条款是其核心竞争力。然而，这也意味着其成功高度依赖于这些复杂机制的稳定运行和高收益的可持续性。一旦其收益优势减弱或风险暴露，其在市场中的立足点将受到严峻挑战。

---

## **4.0 技术架构与产品机制深度解析 (In-depth Analysis of Technical Architecture & Product Mechanisms)**

Asymmetry Finance的产品构建在对现有成熟DeFi协议的深度整合和创新之上。理解其技术架构是评估其潜力和风险的基础。

### **4.1 USDaf 稳定币机制 (基于Liquity v2)**

USDaf并非从零开始构建，而是Liquity v2协议的一个授权分叉（licensed fork）15。这一决策使其能够直接继承Liquity闻名的去中心化、抗审查和高资本效率的特性，同时在此基础上进行针对性的创新。

* **分叉基础与创新:** USDaf保留了Liquity v2的核心架构，但做出了关键的改变：将抵押资产从单一的ETH及其衍生品，扩展为多种封装BTC（如wBTC, tBTC）和高流动性的生息稳定币（如sfrxUSD, sUSDS, scrvUSD）5。这一改变使其目标市场从以太坊原生用户扩展到了比特币持有者和稳定币收益农夫，潜在的市场规模巨大。  
* **借贷流程 (Trove):** 与Liquity一样，用户通过一个名为“Trove”（金库）的智能合约进行操作。用户将批准的抵押品存入Trove，并据此借出USDaf稳定币。每个Trove与一个以太坊地址绑定，但一个地址可以管理多个Troves，以便进行不同风险策略的隔离。协议设定了2,000 USDaf的最低借款额度，以防止粉尘攻击并维持系统效率 6。  
* **自定义固定利率:** 这是USDaf从Liquity v2继承并作为核心卖点的功能。借款人可以在创建或调整Trove时，自行设定一个固定的年化借款利率。这个利率至关重要，因为它直接决定了该Trove在“赎回队列”（Redemption Queue）中的位置。当USDaf的市场价格低于1美元时，任何USDaf持有者都可以按面值赎回系统中的抵押品，而系统会从利率最低的Trove开始执行赎回。因此，设置较低的利率意味着借贷成本低，但被赎回的风险高；反之，设置较高的利率则更安全 6。  
* **清算与稳定性池 (Liquidation & Stability Pool):** 当市场波动导致某个Trove的抵押率低于协议设定的最低阈值时，清算机制会被触发。清算过程由“稳定性池”（Stability Pool）中的USDaf存款来执行。稳定性池的参与者（即USDaf储户）的资金被用来偿还被清算Trove的债务，作为回报，他们将按比例获得该Trove中价值高于债务的抵押品（通常存在约5-10%的清算折扣）。这不仅是维持系统偿付能力的核心机制，也是USDaf持有者获取收益的关键途径 6。

### **4.2 afETH 收益产生机制**

afETH的超高收益率源于其独特的混合资产结构和对Convex生态的深度利用。其设计精髓在于将相对稳健的ETH质押收益与高风险高回报的治理收益相结合。

* **资产构成与分配:** 用户存入的ETH并非直接用于质押，而是通过协议的“不对称分配算法”（AAA）进行拆分。根据官方文档，大约70%的资金被兑换为Staked Frax Ether (sfrxETH)，另外30%则被兑换为Convex Finance的治理代币CVX 6。  
* **收益来源 1: sfrxETH (基础收益层):** sfrxETH是Frax Finance推出的LST，其收益来源于Frax生态系统内的以太坊验证节点所产生的原生质押奖励。sfrxETH是一个自动复利的代币，其价值相对于frxETH会随着奖励的不断累积而持续增长。afETH中70%的这部分资产为其提供了稳定、可靠的基础收益 6。  
* **收益来源 2: vlCVX (超额收益层):** afETH协议将30%的资金购买的CVX代币进行投票锁定（vote-locking），变为vlCVX。vlCVX拥有在Convex平台上指导巨量veCRV投票方向的权力。各大DeFi协议为了吸引Curve的流动性激励（CRV代币释放），会通过Votium等“贿赂市场”向vlCVX持有者支付费用，以换取他们的投票。afETH协议代表所有持有者参与这个市场，将投票权“出售”给出价最高的协议，从而捕获高额的贿赂收益。这是afETH能够实现远超普通LST收益的核心原因 6。  
* **收益平滑器 (Yield Smoother):** 来自vlCVX的贿赂收益通常是周期性（如每两周）发放的，这可能导致afETH的价格出现不连续的大幅跳跃，从而为MEV（最大可提取价值）机器人创造了套利空间。为了解决这个问题，afETH设计了一个“收益平滑器”机制。所有vlCVX产生的收益（在被兑换为ETH后）会先进入这个平滑器合约，然后随着时间的推移线性地、平滑地释放并计入afETH的总价值中。这种类似Yearn Vault的设计，有效地保护了持有者的收益不被MEV攻击者攫取 6。

这种双层收益结构的设计，使得afETH的投资者在享受ETH原生质押收益的同时，实质上是进行了一场对Curve/Convex生态系统健康状况的杠杆押注。其超额收益直接来源于“Curve战争”的激烈程度和CVX代币本身的价值。如果Convex生态繁荣，贿赂市场活跃，afETH的收益将非常可观。反之，如果Convex生态衰退或CVX代币价格大幅下跌，afETH的价值和收益也将受到直接的负面冲击。

---

## **5.0 代币经济学 (ASF Tokenomics)**

ASF代币是Asymmetry Finance协议的核心，其设计旨在驱动协议的去中心化治理，并使长期支持者能够分享协议的成功果实。

### **5.1 ASF 代币核心效用**

ASF代币的功能远不止是一个简单的治理凭证，它被深度整合到协议的价值捕获机制中。

* **治理:** ASF是协议的原生治理代币，持有者可以对协议的各项参数、发展方向和资金使用等关键决策进行投票 13。  
* **价值捕获:** 协议的核心价值捕获机制通过veASF模型实现。用户通过锁定ASF代币，不仅可以获得治理权，还能分享协议产生的收入（例如USDaf的借贷费用），并获得在协议其他收益池中更高的挖矿奖励（boosted rewards）7。这激励了用户从单纯的协议使用者转变为协议的所有者和长期利益相关者。

### **5.2 veASF (Vote-Escrowed ASF) 模型**

Asymmetry Finance采用了在DeFi领域被广泛验证的ve（Vote-Escrowed）模型，该模型由Curve Finance首创并推广。

* **机制:** 用户可以选择将他们的ASF代币锁定一段时间（最长可达4年）以换取veASF。锁定的时间越长，同样数量的ASF可以换取越多的veASF。veASF代币是不可转让的，它代表了用户在协议中的投票权力和收益分享权重 7。随着锁定时间的临近，  
  veASF的数量会线性衰减至零，除非用户选择延长锁定期。  
* **对持有者的好处:** ve模型的核心优势在于它能够有效地协调协议与代币持有者之间的长期利益。通过奖励长期锁定行为，该模型筛选出了对协议未来最有信心的支持者，并将最大的权力和收益赋予他们。这极大地减少了短期投机者对治理的干扰和市场的抛售压力，有助于协议的稳定和可持续发展。

### **5.3 代币分配与释放时间表**

* **总供应量:** ASF代币的总供应量上限为51,000,000枚 13。  
* **分配情况:** 根据ICODrops等平台披露的信息，代币的初步分配方案如下 23：  
  * **DAO金库 (DAO Treasury):** 45%  
  * **投资者与公售 (Investors & Public Sale):** 21%  
  * **核心贡献者 (Core Contributors):** 18%  
  * **社区奖励 (Community Rewards):** 9%  
  * **合作伙伴 (Partnerships):** 7%  
* **释放时间表 (Vesting Schedule):** 这是一个关键的透明度问题。在多个信息源中，均提到项目\*\*“没有公开的归属时间表”\*\*（No public vesting schedule）11。虽然在一篇Medium文章中提到总归属期为330天 24，但这可能仅适用于特定轮次的销售，而非针对团队和早期投资者的完整、明确的释放计划。缺乏清晰的Vesting信息，使得投资者难以评估未来可能出现的来自内部人士的抛售压力，这是一个显著的减分项。

该代币经济模型的设计旨在创建一个强大的正向飞轮：协议产生收入 \-\> veASF持有者获得分红 \-\> 激励更多人锁定ASF \-\> ASF流通量减少，价格可能上涨 \-\> 锁定ASF的吸引力进一步增强。然而，这个飞轮的启动和持续运转完全依赖于一个前提：协议本身必须能够从USDaf和afETH等产品中产生可观且持续的现金流。如果协议收入不足，锁定ASF的回报将失去吸引力，整个模型可能陷入负向循环。此外，高达45%的DAO金库份额是一把双刃剑，它为未来的生态系统发展提供了充足的弹药，但如果治理不当，也可能导致权力过度集中，损害协议的去中心化特性。因此，对ASF代币的投资，本质上是对Asymmetry Finance核心产品未来盈利能力的一场押注。

---

## **6.0 安全审计与风险评估 (Security Audit & Risk Assessment)**

在DeFi领域，安全性是评估一个项目价值的基石。Asymmetry Finance在智能合约安全方面表现出专业和透明的态度，但其历史上的一起关键风险事件信息披露不足，构成了一个复杂的风险图景。

### **6.1 智能合约审计**

Asymmetry Finance采取了与社区合作的公开审计模式，多次与业内知名的安全竞赛平台Code423n4合作，对其核心产品进行了严格审查。

* **公开审计竞赛:** 记录显示，项目至少为SafEth和afETH举办了两次公开审计竞赛，总奖金池接近5万美元，吸引了大量白帽黑客参与代码审查 1。这种模式不仅能发现更多潜在漏洞，其公开透明的过程本身也是对项目方安全信心的展示。  
* **漏洞与修复:**  
  * 在针对afETH的审计中，社区发现了多个高危（High）和中危（Medium）漏洞，这些漏洞覆盖了从预言机价格数据处理到潜在经济攻击的多个方面，例如：  
    * **H-03: AfEth存款可能使用无效的Chainlink响应数据。**  
    * **H-05: VotiumStrategy合约中的函数易受三明治攻击。**  
    * **M-08: VotiumStrategy中的通胀攻击。** 2  
  * 项目团队对审计中发现的大部分漏洞都进行了及时的修复，并通过一份详细的“缓解审查”（Mitigation Review）报告向社区公开了修复方案。例如，为了解决H-04（price()函数未考虑待提取的afETH）的问题，团队将销毁afETH的逻辑从提款（withdraw）提前到了请求提款（requestWithdraw）阶段 2。  
  * 一个值得注意的细节是，对于H-01（由价格差异引起的内在套利风险），团队在深入研究后决定将其标记为“可接受的风险”（acceptable）。这表明团队在安全与协议效率之间进行了权衡，并选择接受某些他们认为经济上不可行或不必要的修复所带来的风险。这种坦诚的风险权衡，虽然可能不符合最保守投资者的偏好，但体现了团队的专业判断和透明度 2。

### **6.2 历史风险事件：USDaf预言机事件**

这是本次尽职调查中发现的**最严重的安全风险点**。

* **事件记录:** 在Asymmetry Finance的官方Medium博客文章列表中，多次出现了一篇标题为“Report: USDaf Oracle Incident”的文章，发布日期显示为2025年6月19日 7。  
* **信息缺失:** 尽管该标题明确指向一起与USDaf预言机相关的安全事件，但在所有可用的研究材料和公开渠道中，均无法找到这篇文章的具体内容或任何关于该事件的详细信息 8。  
* **风险评估:** 这一信息缺失构成了巨大的未知风险。投资者无法得知：  
  1. 事件的根本原因是什么？是预言机配置错误、第三方预言机故障，还是协议自身的逻辑漏洞？  
  2. 事件造成了多大的影响？是否有用户资金损失？损失金额是多少？  
  3. 团队采取了何种应急措施？修复方案是否有效？是否从根本上解决了问题？  
     缺乏对这一历史事件的深入了解，使得对USDaf稳定币的长期安全性评估变得极其困难。团队在主动审计方面表现出的透明度与在处理已发生事件上的信息沉默形成了鲜明对比，这是一个危险的信号。

### **6.3 其他风险**

* **市场风险:** afETH的价值和收益与CVX代币的价格以及Convex贿赂市场的活跃度高度相关。如果Convex生态系统出现问题或CVX价格暴跌，afETH的价值将受到严重影响 6。  
  USDaf的稳定性则依赖于其复杂的清算和赎回机制，在市场极端波动的情况下，其挂钩能力将面临严峻考验。  
* **系统性/依赖风险:** Asymmetry Finance的整个产品矩阵都建立在其他DeFi乐高之上，深度依赖于Frax, Convex, Curve和Liquity等底层协议。这些协议中的任何一个出现安全漏洞、经济模型崩溃或治理失败，其风险都会直接传导至Asymmetry，可能引发连锁反应。  
* **治理风险:** veASF模型在激励长期主义的同时，也可能导致治理权力集中于少数早期投资者或巨鲸手中，从而对协议的去中心化构成潜在威胁。

综上所述，Asymmetry Finance的安全状况呈现出一种矛盾的混合体。一方面，其积极主动、公开透明的审计流程值得称赞，显示了团队的技术实力和对安全的重视。但另一方面，对过去真实发生的安全事件（USDaf预言机事件）的缄默，则在其透明度记录上留下了一个无法忽视的污点。投资者必须在评估时同时权衡这两个方面，认识到其风险状况并非“低风险”，而是“复杂且充满不确定性”。

---

## **7.0 团队背景与融资情况 (Team Background & Funding)**

一个DeFi协议的长期成功，很大程度上取决于其背后团队的经验、执行力以及支持其发展的资本网络。Asymmetry Finance在这两方面都展现出了显著的优势。

### **7.1 核心团队**

Asymmetry Finance由两位在DeFi领域拥有丰富实战经验的资深人士联合创立。

* **联合创始人:** Justin Garland 和 Hannah Hamilton 9。  
* **专业背景:**  
  * **Justin Garland:** 在加入Asymmetry之前，曾担任Silo Finance和老牌加密企业ShapeShift的产品与工程负责人。拥有计算机科学学位，其履历表明他在产品开发和技术工程管理方面具备深厚的专业知识 29。  
  * **Hannah Hamilton:** 曾是加密巨头Genesis Global Trading的高级DeFi专家，并担任过Steer Finance的首席策略师和代币经济学负责人。拥有精算与数学学位，其背景显示了她在DeFi策略、金融建模和代币经济设计方面的强大能力 29。  
* **团队评价:** 两位创始人的背景高度互补，覆盖了从技术实现到经济模型设计的DeFi项目全链路。他们在知名项目中的高级职位经历，证明了他们具备在高水平上执行并为生态系统创造价值的能力。这是一个经验丰富、专业能力突出的“DeFi原生”团队。  
* **重要澄清:** 在调研过程中发现，市场上存在一个名为**Asymmetric Financial**的加密对冲基金，其创始人为Joe McCann 30。需要明确指出，  
  **Asymmetry Finance协议与Joe McCann的Asymmetric Financial是两个完全独立、没有任何关联的实体**。Joe McCann并非本项目的创始人或团队成员 30。投资者在进行尽职调查时必须注意区分，避免将对冲基金的业绩或声誉与该DeFi协议混淆。

### **7.2 融资历史**

Asymmetry Finance在早期阶段获得了多家知名风险投资机构和行业战略投资者的支持。

* **种子轮融资:** 项目于2023年5月宣布完成一轮300万美元的种子轮融资 9。  
* **领投方:** 本轮融资由Ecco Capital, Republic Capital, 和 GMJP 联合领投 9。  
* **其他知名投资者:** 投资方名单中不乏行业内的重量级参与者，包括：  
  * **Ankr:** 一个领先的LST提供商和Web3基础设施平台。来自一个潜在合作伙伴或竞争对手的投资，是对Asymmetry技术和市场定位的有力背书 9。  
  * **Avon Ventures:** 与全球资产管理巨头富达（Fidelity）有关联的代币基金，其参与表明项目开始进入传统金融机构的视野 8。  
  * **Sam Kazemian:** DeFi领域最具影响力的建设者之一，Frax Finance的创始人。他的个人投资极具战略意义，因为afETH产品深度依赖于Frax的sfrxETH。Kazemian的加入不仅带来了资本，更重要的是带来了无与伦比的行业网络、战略指导和潜在的深度合作机会 8。

这些投资者的构成揭示了Asymmetry Finance获得的不仅是财务支持，更是来自DeFi生态系统内部的“智能货币”（Smart Money）。这种由行业核心参与者和建设者提供的背书，通常比来自通用型VC的投资更具价值，因为它预示着项目在未来进行生态系统整合、获取流动性以及应对行业内部复杂动态时，将拥有显著的非技术性优势。

---

## **8.0 社区分析与社交媒体情绪 (Community Analysis & Social Media Sentiment)**

社区是DeFi协议的生命线，其规模、活跃度和情绪直接反映了项目的市场接受度和长期发展的潜力。同时，持续的开发活动是项目生命力的核心指标。

### **8.1 官方社区渠道**

投资者可以通过以下官方渠道关注项目动态并参与社区讨论：

* **Twitter:** https://twitter.com/asymmetryfin 6  
* **Discord:** https://discord.com/invite/asymmetry 38  
* **Telegram (只读公告):** https://t.me/asymmetryfin 6

### **8.2 社区活跃度与情绪**

根据Coinbase等平台提供的社交媒体数据分析，可以勾勒出Asymmetry Finance社区的基本画像。

* **社区规模:** 数据显示，在社交媒体上参与讨论Asymmetry Finance的独立个体数量大约在57至65人之间，其在所有加密项目中的讨论度排名在\#2170至\#2401位 12。这些数据表明，Asymmetry Finance的社区目前规模相对较小，尚未进入主流加密投资者的视野，仍处于早期核心用户积累阶段。  
* **社区情绪:** 尽管社区规模不大，但情绪却异常积极。在对Twitter帖文的情绪分析中，绝大多数内容呈现为“看涨”（bullish）或“中性”（neutral），而“看跌”（bearish）的情绪则非常罕见。社区的平均情绪得分在4.3至4.5分之间（满分5分），这是一个非常高的分数，反映出当前社区成员对项目抱有强烈的信心和积极的期望 12。

这种“小而美”且高度忠诚的社区结构，与项目代币ASF超过80%被质押的情况高度吻合 3。这共同指向一个结论：Asymmetry Finance目前的用户群体并非由寻求短期炒作的投机者组成，而是一个由深入理解项目技术、认同其长期愿景的核心支持者构成。这种社区结构在市场下行周期中通常表现出更强的韧性。然而，其缺点也同样明显——网络效应较弱，未来的增长将严重依赖于项目能否突破现有圈层，吸引更广泛的用户群体。

### **8.3 开发者活动**

持续的技术开发是衡量一个项目是否在积极建设的关键。

* **代码库活动:** Asymmetry Finance在GitHub上维护着8个公开的代码库，涵盖了USDaf-v2、afETH、afCVX等所有核心产品，表明其开发过程是开放和可追溯的 5。  
* **开发指标:** DeFi Llama平台追踪的开发者活动指标进一步证实了这一点。数据显示，项目在近期保持着持续的代码提交（commits）活动，并且有稳定的周度和月度活跃开发者数量 4。这表明项目并非处于停滞状态，而是在不断进行迭代和维护。

综合来看，Asymmetry Finance拥有一个规模虽小但信念坚定、情绪积极的核心社区。同时，持续的开发者活动证明了团队仍在积极地构建和完善产品。这对于一个早期项目而言是健康的迹象，但其能否实现用户基础的规模化增长，将是未来需要密切关注的重点。

---

## **9.0 投资机会与策略分析 (Investment Opportunities & Strategy Analysis)**

Asymmetry Finance为不同风险偏好的投资者提供了一系列从简单到复杂的投资机会。本节将对这些机会进行系统性梳理，并对高级策略进行深度解析。

### **9.1 投资机会矩阵表**

下表是本报告的核心 actionable 部分，它将所有潜在的投资途径进行结构化对比，旨在帮助投资者根据自身的风险承受能力、技术背景和投资目标，做出明智的决策。

| 投资机会 (Opportunity) | 策略简介 (Brief Strategy) | 优点 (Pros) | 缺点 (Cons) | 主要风险 (Key Risks) | 预期收益 (Est. APR/APY) | 适合的投资者类型 (Suitable Investor Profile) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **购买并持有ASF代币** | 在二级市场直接购买ASF代币，作为对协议未来增长的投机性押注。 | 操作简单，直接享受协议价值增长带来的代币升值。 | 无法获得协议收入分成或治理权，纯粹的价格敞口。 | 代币价格波动剧烈，流动性低可能导致买卖滑点大。 | 无法量化 (取决于市场价格) | 短期交易者，对协议基本面有强烈看涨预期的投机者。 |
| **质押ASF为veASF** | 将ASF代币进行1周至4年的时间锁定，以换取veASF治理凭证。 | 获得协议治理权、分享协议收入、在其他池中获得更高挖矿奖励。 | 资金在锁定期内失去流动性，最长可达4年。 | 协议收入不及预期，ASF代币价格在锁定期内大幅下跌。 | 依赖协议收入，动态变化 | 长期价值投资者，深度认同协议愿景，希望参与治理的核心社区成员。 |
| **购买并持有afETH** | 购买afETH代币，作为一种高收益的流动性质押ETH替代品。 | 提供远高于标准ETH质押的收益率（约10% APY 6），且代币具有流动性，可用于其他DeFi协议。 | 收益机制复杂，价值与CVX代币价格挂钩。 | CVX价格下跌风险、Convex贿赂市场萎缩风险、底层协议（Frax, Convex）风险。 | \~10% APY | 寻求更高ETH收益且愿意承担相应市场风险的资深DeFi用户。 |
| **存入USDaf稳定性池** | 将USDaf稳定币存入协议的稳定性池，以参与清算过程。 | 在市场波动时，有机会以折扣价获得BTC等优质抵押品，并赚取协议利息。 | 市场平稳时收益率可能较低，资金被动用于购买波动性资产。 | 获得的抵押品价格持续下跌的风险，机会成本风险。 | 高度动态，取决于清算频率和借贷利率 | 主动型收益农夫，对市场波动有深刻理解，愿意承担一定资产转换风险以换取高回报的投资者。 |
| **afETH循环杠杆策略** | 将afETH作为抵押品，在借贷协议中借出ETH，再换成afETH存入，循环操作以放大收益。 | 理论上可以将afETH的收益放大数倍，获得极高的APY。 | 操作极其复杂，风险极高，不适合新手。 | **极高的清算风险**、放大的CVX价格风险、智能合约风险。 | 理论上可达30-50%+ APY，但风险极高 | 风险承受能力极高的专业DeFi玩家，投入资金应为可完全损失的部分。 |
| **为ASF/afETH提供流动性** | 在Uniswap等DEX上为ASF/ETH或afETH/ETH等交易对提供流动性（LP）。 | 赚取交易手续费，并可能获得额外的ASF代币奖励（流动性挖矿）。 | 无常损失（Impermanent Loss）风险，ASF价格波动大可能导致损失严重。 | 无常损失风险，ASF单边暴跌风险，智能合约风险。 | 依赖交易量和流动性挖矿奖励，动态变化 | 对无常损失有深刻理解的收益农夫。 |
| **开发者/生态参与** | 利用开发背景，为协议生态系统做出贡献。 | 有机会获得漏洞赏金、潜在的开发者Grant，或通过创建工具获得收入。 | 需要投入大量时间和专业技能，回报不确定。 | 项目方不采纳提案的风险，投入产出不成正比的风险。 | 无法量化，取决于具体贡献 | 具备扎实开发背景，希望深度参与项目建设的长期主义者。 |

### **9.2 高级策略深度解析**

#### **9.2.1 USDaf稳定性池收益策略**

这并非一种被动的“存币生息”策略，而是一种主动的、与市场波动性正相关的收益策略。

* **收益来源:** 稳定性池的收益主要来自两部分：一是协议将约75%的借贷利息收入分配给池内储户；二是在发生清算时，池内USDaf被用来偿还债务，并以约5-10%的折扣价获得被清算者的抵押品（如wBTC）6。  
* **策略与风险:** 在市场平稳、鲜有清算时，稳定性池的收益主要来自利息，可能并不突出。然而，当市场剧烈下跌、大量借款人被清算时，稳定性池将迎来“收获季节”，能够以极具吸引力的价格积累优质资产。其核心风险在于，你存入的稳定币（USDaf）可能会被动地转换成正在下跌的波动性资产（如wBTC）。虽然购买价格有折扣，但如果该资产价格继续下跌，投资者仍可能面临损失。因此，该策略适合那些判断市场波动将加剧，并愿意在低点积累波动性资产的投资者。

#### **9.2.2 afETH循环杠杆策略 (Looping)**

这是一种在DeFi中常见但风险极高的放大收益策略 42。

* **机制:**  
  1. 将100个afETH存入一个支持afETH作为抵押品的借贷协议（如Aave）。  
  2. 假设抵押率为70%，借出价值70个afETH的ETH。  
  3. 将借出的ETH在DEX上换成afETH。  
  4. 将新换得的afETH再次存入借贷协议，增加抵押品。  
  5. 重复步骤2-4，直到杠杆率达到目标水平。  
* **潜在回报与巨大风险:** 通过这种方式，投资者可以用100个afETH的本金，控制价值数百个afETH的头寸，从而将其约10%的APY放大至30%、40%甚至更高。然而，风险也同样被指数级放大：  
  * **清算风险:** afETH与ETH之间并非硬挂钩，其汇率会因CVX价格和贿赂收益而波动。即使是很小的汇率下跌，在高杠杆下也足以触发清算，导致全部抵押品被没收。  
  * **复合风险:** 该策略不仅放大了afETH的收益，也放大了其所有内在风险，尤其是对CVX价格的敞口。CVX价格的下跌将对杠杆头寸造成毁灭性打击。  
  * 平台风险: 整个策略依赖于外部借贷协议的安全性，增加了额外的智能合约风险层。  
    结论：此策略只应由最专业的DeFi用户，在投入可完全损失的资金的前提下进行尝试。

### **9.3 开发者参与机会**

考虑到目标投资者具备开发背景，除了金融投资外，还可以从生态系统建设的角度寻求机会。

* **创建自动化管理工具:** USDaf的自定义利率机制为自动化策略创造了空间。开发者可以创建智能金库（Vault）或机器人（Agent），根据市场赎回风险动态地为用户的Trove调整利率和抵押率，从而提供“利率管理即服务”，并从中收取管理费。  
* **参与漏洞赏金计划:** 项目在其官网上提到了漏洞赏金计划（Bug Bounty Program）11。对于安全研究员来说，深入审计其开源代码并提交有效漏洞，是获得可观奖励的直接途径。  
* **申请开发者Grant:** 尽管目前没有公开的开发者Grant计划 37，但协议拥有一个占代币总量45%的庞大DAO金库 23。这笔资金的最终用途就是激励生态发展。有能力的开发者可以主动向社区和团队提交有价值的开发提案（例如开发新的收益策略、构建数据分析仪表盘、或将  
  afETH/USDaf集成到其他协议中），很有可能获得DAO的资金支持。

---

## **10.0 总结与投资评级 (Conclusion & Investment Rating)**

在对Asymmetry Finance进行全面深入的分析后，本节将通过SWOT框架总结其核心要素，并给出最终的投资评级和具体建议。

### **10.1 优势、劣势、机会、威胁 (SWOT) 分析**

* **优势 (Strengths):**  
  * **经验丰富的核心团队:** 创始人具备深厚的DeFi产品、工程和策略背景，拥有在顶级加密公司成功执行的履历 29。  
  * **强大的DeFi原生投资者:** 获得了来自Frax创始人、Ankr和富达关联基金等战略投资者的支持，为项目提供了宝贵的行业资源和信誉背书 8。  
  * **创新的高收益产品:** afETH和USDaf的设计在现有DeFi市场中具有明显的差异化和收益吸引力，能够满足特定风险偏好用户的需求 6。  
  * **高度的智能合约安全透明度:** 通过公开审计竞赛和详细的修复报告，展示了对安全性的高度重视和专业处理能力 1。  
* **劣势 (Weaknesses):**  
  * **TVL和用户基数较小:** 作为一个早期项目，其总锁仓价值和社区规模都相对较小，网络效应尚未形成，市场影响力有限 3。  
  * **关键历史事件信息不透明:** 关于“USDaf预言机事件”的报告缺失，是项目透明度上的一个重大污点，给USDaf的安全性带来了不确定性 7。  
  * **ASF代币流通性低:** 超过80%的代币被质押，导致二级市场流动性极差，价格容易受到大额交易的剧烈影响，增加了投资风险 3。  
  * **产品机制复杂且风险较高:** afETH的收益高度依赖外部协议和CVX代币价格，USDaf的稳定性机制也较为复杂，对普通用户的理解和风险管理能力要求较高。  
* **机会 (Opportunities):**  
  * **LST市场持续增长:** 随着以太坊质押率的不断提升，LST及其衍生品市场（LSTfi）拥有巨大的增长空间。  
  * **对真实收益的需求:** 在经历了多轮DeFi泡沫后，市场对由真实协议收入支撑的“真实收益”（Real Yield）项目需求日益增长，Asymmetry的产品设计正迎合了这一趋势。  
  * **DAO金库的潜力:** 占总量45%的DAO金库为未来的生态系统激励、开发者Grant和流动性支持提供了充足的资金保障 23。  
* **威胁 (Threats):**  
  * **激烈的市场竞争:** 无论是在稳定币还是LST收益赛道，Asymmetry都面临着来自Liquity, Curve, Index Coop等成熟巨头的激烈竞争 16。  
  * **底层协议的系统性风险:** 项目深度依赖于Convex, Frax, Curve和Liquity。这些底层协议若出现任何安全或经济问题，将对Asymmetry造成直接且严重的冲击。  
  * **宏观市场风险:** 加密市场的整体下行周期会抑制DeFi活动，减少借贷需求和贿赂市场的规模，从而直接影响Asymmetry的协议收入和afETH的收益率。

### **10.2 最终投资评级**

**投资评级: 建议 (Recommend)**

**核心论据:**

Asymmetry Finance是一个典型的“高风险、高潜力”的早期DeFi项目。其优势在于拥有一个业内顶尖、背景互补的创始团队，并获得了能够提供深度战略价值的DeFi原生资本的支持。项目在产品设计上展现了深刻的市场理解和创新能力，其对智能合约安全性的公开和透明处理方式值得肯定。

然而，投资该项目需要正视其存在的重大风险。首先，也是最关键的，是“USDaf预言机事件”的信息黑洞。在团队对此事件提供一份完整、透明的事后分析报告之前，任何对USDaf及其稳定性池的投资都应被视为高风险行为。其次，afETH的超额收益并非无风险的Alpha，而是承担CVX代币价格风险和Convex生态系统风险所获得的Beta，投资者必须对此有清醒的认识。最后，ASF代币的极端低流动性意味着其价格可能极不稳定，不适合风险规避型投资者。

**投资建议:**

对于能够充分理解并愿意承担上述特定风险的资深DeFi投资者而言，Asymmetry Finance提供了获取不对称上行回报的可能。建议的投资策略应是谨慎和分阶段的：

1. **核心仓位 \- veASF:** 对于最看好项目长期发展的投资者，最稳妥的策略是将一小部分资金兑换为ASF并进行长期（如1-4年）锁定，换取veASF。这不仅能最大化地分享协议未来的成功，也是对团队和社区的长期承诺。  
2. **卫星仓位 \- afETH / USDaf稳定性池:** 可以配置更小比例的资金，谨慎地参与afETH挖矿或USDaf稳定性池策略，以获取现金流收益。在参与前，必须深入研究其风险敞口，特别是afETH对CVX的依赖。  
3. **规避高杠杆:** 强烈建议**避免**使用afETH进行循环杠杆等高风险操作，除非投入的资金是准备完全损失的“赌场资金”。  
4. **持续监控:** 投资后需密切关注项目进展，特别是关于“USDaf预言机事件”的任何后续信息披露、afETH收益率的可持续性以及ASF代币的解锁和释放情况。

总体而言，Asymmetry Finance是一个值得关注的创新协议，但目前阶段更适合作为资深投资者卫星投资组合的一部分，而非核心重仓对象。

---

## **11.0 引用与数据来源 (Citations & Data Sources)**

本报告中引用的所有数据和信息均来源于用户提供的研究材料片段，编号从\[21\]到\[50\]以及\[51\]到\[26\]。每个具体数据点都已在报告正文中通过其ID进行了明确标注。

**主要数据平台与信息来源包括:**

* **DeFi数据聚合器:** DeFi Llama, Token Terminal  
* **加密货币行情网站:** CoinMarketCap, CoinGecko, Coinbase  
* **智能合约与安全平台:** GitHub (Asymmetry Finance, Code423n4)  
* **项目官方渠道:** Asymmetry Finance官方网站、官方文档 (docs.asymmetry.finance)、官方Medium博客  
* **新闻与融资信息平台:** Business Wire, Finsmes, Decrypt, RootData, ICODrops  
* **社区与社交媒体:** Twitter, Reddit

#### **引用的著作**

1. code-423n4/2023-03-asymmetry \- GitHub, 访问时间为 八月 8, 2025， [https://github.com/code-423n4/2023-03-asymmetry](https://github.com/code-423n4/2023-03-asymmetry)  
2. code-423n4/2023-10-asymmetry-mitigation \- GitHub, 访问时间为 八月 8, 2025， [https://github.com/code-423n4/2023-10-asymmetry-mitigation](https://github.com/code-423n4/2023-10-asymmetry-mitigation)  
3. Asymmetry \- DefiLlama, 访问时间为 八月 8, 2025， [https://defillama.com/protocol/asymmetry](https://defillama.com/protocol/asymmetry)  
4. Asymmetry \- DefiLlama, 访问时间为 八月 8, 2025， [https://defillama.com/protocol/asymmetry?tvl=false\&fees=true\&events=false\&groupBy=cumulative](https://defillama.com/protocol/asymmetry?tvl=false&fees=true&events=false&groupBy=cumulative)  
5. Asymmetry Finance \- GitHub, 访问时间为 八月 8, 2025， [https://github.com/asymmetryfinance](https://github.com/asymmetryfinance)  
6. Welcome to Asymmetry Finance | Asymmetry, 访问时间为 八月 8, 2025， [https://docs.asymmetry.finance/](https://docs.asymmetry.finance/)  
7. Introducing Asymmetry. \- Medium, 访问时间为 八月 8, 2025， [https://medium.com/@asymmetryfin/introducing-asymmetry-d9fab5ec9ce0](https://medium.com/@asymmetryfin/introducing-asymmetry-d9fab5ec9ce0)  
8. Investor Spotlight — Medium Edition | by Asymmetry, 访问时间为 八月 8, 2025， [https://medium.com/@asymmetryfin/investor-spotlight-medium-edition-cf373f025692](https://medium.com/@asymmetryfin/investor-spotlight-medium-edition-cf373f025692)  
9. Asymmetry Finance Raises $3M Seed Round to Solve Centralization Threat to the Ethereum Ecosystem \- Business Wire, 访问时间为 八月 8, 2025， [https://www.businesswire.com/news/home/20230516005362/en/Asymmetry-Finance-Raises-%243M-Seed-Round-to-Solve-Centralization-Threat-to-the-Ethereum-Ecosystem](https://www.businesswire.com/news/home/20230516005362/en/Asymmetry-Finance-Raises-%243M-Seed-Round-to-Solve-Centralization-Threat-to-the-Ethereum-Ecosystem)  
10. Asymmetry Finance \- ASF \- RootData, 访问时间为 八月 8, 2025， [https://www.rootdata.com/Projects/detail/Asymmetry%20Finance?k=Nzg3Mg%3D%3D](https://www.rootdata.com/Projects/detail/Asymmetry%20Finance?k=Nzg3Mg%3D%3D)  
11. Asymmetry Finance & $ASF Token Analysis | Rating, Review & Stats \- Coinlaunch, 访问时间为 八月 8, 2025， [https://coinlaunch.space/projects/asymmetry-finance/](https://coinlaunch.space/projects/asymmetry-finance/)  
12. Asymmetry Finance Price, ASF Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 八月 8, 2025， [https://www.coinbase.com/price/asymmetry-finance](https://www.coinbase.com/price/asymmetry-finance)  
13. Asymmetry Finance price today, ASF to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 八月 8, 2025， [https://coinmarketcap.com/currencies/asymmetry-finance/](https://coinmarketcap.com/currencies/asymmetry-finance/)  
14. Asymmetry USDaf Legacy (USDAF) Price Today, News & Live Chart \- Forbes, 访问时间为 八月 8, 2025， [https://www.forbes.com/digital-assets/assets/asymmetry-usdaf-legacy-usdaf-2/](https://www.forbes.com/digital-assets/assets/asymmetry-usdaf-legacy-usdaf-2/)  
15. Asymmetry Finance (ASF), Liquity (LQTY) \- Asymmetry Mainnet Launch \- 28 May 2025 — TradingView News, 访问时间为 八月 8, 2025， [https://www.tradingview.com/news/coinmarketcal:cb2a7cf28094b:0-asymmetry-finance-asf-liquity-lqty-asymmetry-mainnet-launch-28-may-2025/](https://www.tradingview.com/news/coinmarketcal:cb2a7cf28094b:0-asymmetry-finance-asf-liquity-lqty-asymmetry-mainnet-launch-28-may-2025/)  
16. Asymmetry USDaf \- DefiLlama, 访问时间为 八月 8, 2025， [https://defillama.com/protocol/asymmetry-usdaf?denomination=USD](https://defillama.com/protocol/asymmetry-usdaf?denomination=USD)  
17. Asymmetry Finance (ASF) Price Chart \- Buy and Sell on Phantom, 访问时间为 八月 8, 2025， [https://phantom.com/tokens/ethereum/0x59a529070fbb61e6d6c91f952ccb7f35c34cf8aa](https://phantom.com/tokens/ethereum/0x59a529070fbb61e6d6c91f952ccb7f35c34cf8aa)  
18. Asymmetry Finance \- DefiLlama, 访问时间为 八月 8, 2025， [https://defillama.com/protocol/asymmetry-finance?twitter=false\&devMetrics=false\&devCommits=false\&usdInflows=false](https://defillama.com/protocol/asymmetry-finance?twitter=false&devMetrics=false&devCommits=false&usdInflows=false)  
19. Asymmetry / USDaf-v2 competition \- Cantina, 访问时间为 八月 8, 2025， [https://cantina.xyz/competitions/3765f098-ef5c-47be-beb9-3f4ce9dcb407](https://cantina.xyz/competitions/3765f098-ef5c-47be-beb9-3f4ce9dcb407)  
20. BOLD Stability Pool opportunities \- Liquity V2, 访问时间为 八月 8, 2025， [https://www.liquity.org/blog/liquity-v2-bold-stability-pool-opportunities](https://www.liquity.org/blog/liquity-v2-bold-stability-pool-opportunities)  
21. Asymmetry Finance Price: ASF Live Price Today | Market Cap & Chart Analysis \- Bybit, 访问时间为 八月 8, 2025， [https://www.bybit.com/en/price/asymmetry-finance/](https://www.bybit.com/en/price/asymmetry-finance/)  
22. ASF Price, Live Chart, and News | Blockchain.com, 访问时间为 八月 8, 2025， [https://www.blockchain.com/explorer/assets/asf](https://www.blockchain.com/explorer/assets/asf)  
23. Asymmetry Finance (ASF) \- All information about Asymmetry Finance ICO (Token Sale) \- ICO Drops, 访问时间为 八月 8, 2025， [https://icodrops.com/asymmetry-finance/](https://icodrops.com/asymmetry-finance/)  
24. Asymmetry Finance: A Technical and Vesting Review | by PAID \- Medium, 访问时间为 八月 8, 2025， [https://paidnetwork.medium.com/asymmetry-finance-a-technical-and-vesting-review-56bffe93bc30](https://paidnetwork.medium.com/asymmetry-finance-a-technical-and-vesting-review-56bffe93bc30)  
25. AmpUSD — The Deep Dive. Introducing 'Operation Bootstrap'… | by Asymmetry \- Medium, 访问时间为 八月 8, 2025， [https://medium.com/@asymmetryfin/usdaf-the-deep-dive-8362707f9252](https://medium.com/@asymmetryfin/usdaf-the-deep-dive-8362707f9252)  
26. 访问时间为 一月 1, 1970， [https://twitter.com/asymmetryfin](https://twitter.com/asymmetryfin)  
27. Asymmetry \- 2025 Founders and Board of Directors \- Tracxn, 访问时间为 八月 8, 2025， [https://tracxn.com/d/companies/asymmetry/\_\_bJs\_P2MSrnPI9IFmhlvU3d9kgTM8OLL1luk5a0JEtDA/founders-and-board-of-directors](https://tracxn.com/d/companies/asymmetry/__bJs_P2MSrnPI9IFmhlvU3d9kgTM8OLL1luk5a0JEtDA/founders-and-board-of-directors)  
28. E07 \- Asymmetry Finance \- Co-Founders Justin Garland and Hannah Hamilton \- YouTube, 访问时间为 八月 8, 2025， [https://www.youtube.com/watch?v=C5d4LYNTEWI](https://www.youtube.com/watch?v=C5d4LYNTEWI)  
29. Asymmetry Finance: A Community Member Review | by PAID \- Medium, 访问时间为 八月 8, 2025， [https://paidnetwork.medium.com/asymmetry-finance-a-community-member-review-dd5a27db67c9](https://paidnetwork.medium.com/asymmetry-finance-a-community-member-review-dd5a27db67c9)  
30. Asymmetric Financial, 访问时间为 八月 8, 2025， [https://asymmetric.financial/](https://asymmetric.financial/)  
31. Joe McCann \- SALT conference, 访问时间为 八月 8, 2025， [https://www.salt.org/speakers/joe-mccann](https://www.salt.org/speakers/joe-mccann)  
32. Solana News Today: Joe McCann Abandons SPAC Deal for Solana Treasury Firm Amid Market Turbulence \- AInvest, 访问时间为 八月 8, 2025， [https://www.ainvest.com/news/solana-news-today-joe-mccann-abandons-spac-deal-solana-treasury-firm-market-turbulence-2508/](https://www.ainvest.com/news/solana-news-today-joe-mccann-abandons-spac-deal-solana-treasury-firm-market-turbulence-2508/)  
33. Joe McCann \- The Block, 访问时间为 八月 8, 2025， [https://www.theblock.co/profile/293308/joe-mccann](https://www.theblock.co/profile/293308/joe-mccann)  
34. Joe McCann Interview: Solana is the Actual Decentralized SuperComputer | CoinMarketCap, 访问时间为 八月 8, 2025， [https://coinmarketcap.com/academy/article/joe-mccann-interview-solana-is-the-actual-decentralized-supercomputer](https://coinmarketcap.com/academy/article/joe-mccann-interview-solana-is-the-actual-decentralized-supercomputer)  
35. Running the World's Top-Performing Fund: Crypto Meets Macro Mastery | Joe McCann, 访问时间为 八月 8, 2025， [https://wealthion.com/running-the-worlds-top-performing-fund-crypto-meets-macro-mastery-joe-mccann/](https://wealthion.com/running-the-worlds-top-performing-fund-crypto-meets-macro-mastery-joe-mccann/)  
36. How Joe McCann Became The Top-Performing Crypto Fund Manager \- YouTube, 访问时间为 八月 8, 2025， [https://www.youtube.com/watch?v=z34tBFuMfXw](https://www.youtube.com/watch?v=z34tBFuMfXw)  
37. Asymmetry Finance Raises $3M in Seed Funding \- FinSMEs, 访问时间为 八月 8, 2025， [https://www.finsmes.com/2023/05/asymmetry-finance-raises-3m-in-seed-funding.html](https://www.finsmes.com/2023/05/asymmetry-finance-raises-3m-in-seed-funding.html)  
38. Asymmetry Finance, 访问时间为 八月 8, 2025， [https://www.asymmetry.finance/](https://www.asymmetry.finance/)  
39. Asymmetry Finance Price, ASF Price, Live Charts, and Marketcap \- Coinbase Argentina, 访问时间为 八月 8, 2025， [https://www.coinbase.com/en-ar/price/base-asymmetry-finance](https://www.coinbase.com/en-ar/price/base-asymmetry-finance)  
40. Asymmetry Finance \- ASF Price \- Coinbase, 访问时间为 八月 8, 2025， [https://www.coinbase.com/price/base-asymmetry-finance](https://www.coinbase.com/price/base-asymmetry-finance)  
41. asymmetryfinance repositories \- GitHub, 访问时间为 八月 8, 2025， [https://github.com/orgs/asymmetryfinance/repositories](https://github.com/orgs/asymmetryfinance/repositories)  
42. Looping Strategies \- Alpaca Finance, 访问时间为 八月 8, 2025， [https://docs.alpacafinance.org/alpaca-finance-2.0/step-by-step-guide/looping-strategies](https://docs.alpacafinance.org/alpaca-finance-2.0/step-by-step-guide/looping-strategies)  
43. Guide to Looping and Farming for Beginners in Web3 (DeFi) | Ananta\_27 on Binance Square, 访问时间为 八月 8, 2025， [https://www.binance.com/en/square/post/25106921356114](https://www.binance.com/en/square/post/25106921356114)  
44. Two Ethereum DeFi traders just made $120m using a strategy called 'looping' \- DL News, 访问时间为 八月 8, 2025， [https://www.dlnews.com/articles/defi/two-ethereum-defi-traders-made-120-million-million-looping/](https://www.dlnews.com/articles/defi/two-ethereum-defi-traders-made-120-million-million-looping/)  
45. Asymmetric Innovation Finance | Funding Innovative Futures, 访问时间为 八月 8, 2025， [https://asymmetric.au/](https://asymmetric.au/)  
46. Asymmetry Finance 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 八月 8, 2025， [https://pitchbook.com/profiles/company/527654-53](https://pitchbook.com/profiles/company/527654-53)  
47. Funding Microfinance Under Asymmetric Information \- Wireless @ FAU : Florida Atlantic University, 访问时间为 八月 8, 2025， [https://home.fau.edu/vantasse/web/R3%20JDE.pdf](https://home.fau.edu/vantasse/web/R3%20JDE.pdf)  
48. Asymmetry Finance Joins Liquid Ethereum Staking Market With Latest $3M Raise \- Decrypt, 访问时间为 八月 8, 2025， [https://decrypt.co/140303/asymmetry-finance-joins-liquid-ethereum-staking-market-latest-3m-raise](https://decrypt.co/140303/asymmetry-finance-joins-liquid-ethereum-staking-market-latest-3m-raise)  
49. Scaling Up Blended Finance for Climate Mitigation and Adaptation in Emerging Market and Developing Economies (EMDEs) \- NGFS, 访问时间为 八月 8, 2025， [https://www.ngfs.net/sites/default/files/medias/documents/scaling-up-blended-finance-for-climate-mitigation-and-adaptation-in-emdes.pdf](https://www.ngfs.net/sites/default/files/medias/documents/scaling-up-blended-finance-for-climate-mitigation-and-adaptation-in-emdes.pdf)  
50. Amazon.com Trade Ideas — NASDAQ:AMZN \- TradingView, 访问时间为 八月 8, 2025， [https://www.tradingview.com/symbols/NASDAQ-AMZN/ideas/](https://www.tradingview.com/symbols/NASDAQ-AMZN/ideas/)  
51. USDaf Asymmetry Finance, 访问时间为 八月 8, 2025， [https://usdaf.asymmetry.finance/](https://usdaf.asymmetry.finance/)