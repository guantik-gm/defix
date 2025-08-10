

# **Ethena协议：关于合成美元与互联网债券的机构级尽职调查报告**

## **I. 执行摘要**

### **协议概述**

Ethena是一个构建于以太坊之上的合成美元协议，自推出以来迅速扩展，已成为稳定币市场中的重要参与者。其核心产品包括：USDe，一种通过delta中性对冲策略来维持与美元挂钩的资产；以及sUSDe（被称为“互联网债券”），这是一种计息工具，其价值来源于质押以太坊（staked ETH）的奖励和永续期货合约的资金费率 1。

### **核心发现**

该协议的创新设计提供了一种可扩展的、加密原生的传统稳定币替代方案，能够产生可观的、由市场驱动的收益。在高年化收益率（APY）和战略性DeFi集成的推动下，其增长呈现爆炸性态势。该项目拥有一支能力卓越的团队，并获得了顶级投资机构的支持 3。

### **风险概况总结**

协议面临的主要风险是系统性和金融性的，而非技术性的。协议的运作严重依赖于偏向正值的资金费率、中心化交易所合作伙伴的偿付能力以及其托管机构的诚信度。尽管其结构与Terra/LUNA存在根本性差异，但一个长期伴随着持续负资金费率的熊市，将对其经济模型和储备基金构成严峻的压力测试 5。

### **投资建议**

Ethena提供了一个高风险、高回报的投资机会。对于能够理解并管理其内在风险的成熟投资者而言，USDe/sUSDe系统提供了极具吸引力的收益。ENA代币则代表了对协议持续增长、成功驾驭市场周期和应对监管审查能力的杠杆化押注。我们建议采取谨慎而乐观的立场，并根据个人风险承受能力，采用具体的策略和头寸规模。

## **II. 协议架构与机制深度解析**

本章节将解构Ethena金融引擎的核心组成部分，从业内专家的视角分析各模块的功能及其相互作用。

### **合成美元 (USDe)：解构Delta中性对冲策略**

#### **核心概念**

USDe并非由法币储备支持的传统稳定币，而是一种“合成美元”，由加密资产及相应的空头期货头寸作为抵押 1。其稳定性源于一种delta中性对冲策略，通常被称为“现金套利”（cash-and-carry）交易 5。

#### **运行机制**

每铸造一个单位的USDe，协议会持有等值的现货加密资产（例如ETH、stETH、BTC、SOL），并同时在该资产的永续期货市场上开立等值的空头头寸 9。这种结构旨在完全对冲现货资产的价格波动风险。

#### **机制示例**

假设ETH价格为3,000美元，协议将持有价值3,000美元的现货ETH，并同时持有一个名义价值为3,000美元的ETH永续合约空头头寸。如果ETH价格发生变动，头寸一端的收益将旨在抵消另一端的损失，从而中和价格波动（即delta值为零），使支持资产的总价值稳定在约3,000美元 11。

#### **抵押资产**

协议最初使用ETH和流动性质押代币（LSTs）如stETH作为抵押品，后续扩展至BTC和SOL，以增强可扩展性并使对冲场所多样化 2。此外，协议还持有USDC和USDT等流动性稳定币，以提高对冲效率 2。

### **互联网债券 (sUSDe)：双重收益来源分析**

#### **主要收益来源：资金费率**

永续期货合约利用“资金费率”机制，使其合约价格与标的现货价格保持一致。从历史上看，这些费率绝大多数时间为正值，这意味着多头头寸的交易者需要向空头头寸的交易者支付费用 6。由于Ethena持有空头头寸，它通常是这些资金费用的净接收方，这构成了分配给sUSDe持有者的高收益的主要来源 1。

#### **次要收益来源：质押奖励**

当协议使用LSTs（例如stETH）作为抵押品时，它还能从以太坊网络获得底层的质押收益（年化收益率约为3-4%）。这提供了一个稳定的基础回报，可作为缓冲以抵御资金费率为负的时期 5。

#### **价值累积机制**

收益并非以新代币的形式分发。相反，它会累积到sUSDe的质押合约中，导致sUSDe相对于USDe的价值随时间增值。这是一种非变基（non-rebasing）模型，用户持有的sUSDe代币数量保持不变，但每个代币可赎回的USDe数量会增加 12。

### **铸造、赎回与锚定稳定性：授权参与者（APs）的角色**

#### **流程**

USDe的直接铸造和赎回仅限于白名单内的机构合作伙伴，即授权参与者（APs）11。零售用户通常在Curve或Uniswap等二级市场上获取USDe 5。

#### **套利机制**

APs对于维持锚定至关重要。如果USDe在去中心化交易所（DEX）上的交易价格高于1美元，APs可以用价值1美元的抵押品铸造USDe，并在公开市场上出售以获利。如果USDe的交易价格低于1美元，APs可以在市场上购买，然后通过协议赎回价值1美元的抵押品。这种套利活动会自然地将USDe的市场价格推回到其1美元的锚定水平 10。

#### **解除质押周期**

将sUSDe解除质押换回USDe需要7天的等待期。这是一个关键的风险管理功能，旨在防止在市场剧烈波动期间发生“银行挤兑” 5。

### **ENA代币：治理、质押（sENA）与价值捕获**

#### **治理**

ENA是协议的治理代币。持有者可以对关键决策进行投票，例如风险管理框架、抵押品构成和新功能集成等 5。治理内容包括选举由行业专家（如Gauntlet和Blockworks Research）组成的专业风险委员会成员 13。

#### **sENA（质押的ENA）**

用户可以锁定其ENA以获得sENA。该机制正在被开发，旨在从生态系统应用中捕获价值。例如，Ethereal DEX已承诺将其未来代币供应的15%空投给sENA持有者，从而创建一种类似于BNB的价值累积模型 13。

#### **再质押效用**

Ethena已与Symbiotic合作，为sENA引入再质押功能。该功能将为使用LayerZero消息传递系统的USDe跨链转移提供经济安全保障，为ENA代币在单纯治理之外增添了基础效用层 13。

Ethena的架构是创造一种“加密原生”固定收益工具的深思熟虑的尝试。通过将delta中性交易的复杂性抽象化，并将由此产生的收益打包成一个简单的质押/解押代币（sUSDe），它旨在在DeFi生态系统内复制美国国库券（T-Bill）的功能——一种能够产生“无风险”（在加密货币语境下）回报率的稳定价值储存手段。传统金融有一个基础的“无风险”资产（国库券），所有其他资产的定价都以此为基础。DeFi缺乏一个真正的等价物。像USDT/USDC这样的稳定币是稳定的价值储存手段，但不提供原生收益。像stETH这样的计息资产在美元计价上不稳定。Ethena的机制 1 结合了稳定的美元价值（通过对冲）和原生收益（来自资金费率和质押）。协议明确将sUSDe称为“互联网债券” 1。这使得sUSDe不仅仅是另一种稳定币，而是整个DeFi生态系统的一个潜在的基础性货币市场原语——一个供其他协议构建的基础层，正如其迅速集成到Aave、Morpho等协议中所证明的那样 23。因此，衡量Ethena的成功不仅要看其USDe的供应量，还要看sUSDe作为抵押品和基础储蓄率在整个DeFi中集成的深度，从而有效地成为加密货币领域的国库券。

## **III. 市场分析与竞争定位**

本节评估Ethena在竞争激烈的稳定币市场中的表现和战略地位。

### **增长轨迹：基于数据的总锁仓价值（TVL）、USDe供应量和用户采纳情况分析**

#### **爆炸性增长**

Ethena展示了DeFi历史上最快的增长率之一。自2024年初公开发布以来，USDe的供应量已飙升至超过75.8亿美元，用户超过744,000人 25。DeFiLlama的数据显示，其总锁仓价值（TVL）约为54亿美元 27。

#### **收入产生**

该协议已产生可观的费用和收入。根据DeFiLlama的数据，其年化费用超过1.82亿美元，累计费用超过4.02亿美元 27。这些强劲的财务指标凸显了其收益生成模型在当前市场条件下的有效性。

#### **市场份额**

USDe迅速攀升稳定币排行榜，按市值计算已成为第四大稳定币，仅次于行业巨头USDT、USDC和DAI 29。

### **稳定币格局：比较分析**

#### **对比法币抵押型稳定币（USDT/USDC）**

与USDT和USDC不同，USDe的储备不依赖于传统银行系统。这使其更具抗审查性，但也使其面临不同的风险（链上风险 vs. 银行/监管风险）1。USDe提供原生收益，而法币支持的稳定币除非存入独立的借贷协议，否则本身是资本惰性的。

#### **对比加密资产超额抵押型稳定币（DAI）**

MakerDAO的DAI要求用户以较高的抵押率（例如150%）锁定波动性加密资产（如ETH）。这种模式资本效率低下，并且在不引入USDC等中心化资产或真实世界资产（RWAs）的情况下难以扩展 30。Ethena的模型是1:1支持的，资本效率更高，可扩展性更强，尽管其稳定性依赖于衍生品市场而非超额抵押 16。

#### **对比算法稳定币（前UST）**

Ethena经常被拿来与Terra/LUNA比较，但两者的机制有根本不同。UST是无抵押的，其锚定依赖于与LUNA代币的自反关系。而USDe在任何时候都由其抵押品和对冲头寸完全支持。USDe的失败模式是由于负资金费率导致支持资产价值的缓慢侵蚀，而非突然的“死亡螺旋” 5。

### **独特价值主张与目标市场**

#### **“三元悖论”解决方案**

Ethena旨在同时解决稳定币在可扩展性、稳定性和去中心化方面的“三元悖论”。

#### **加密原生收益**

其核心价值主张是提供一种可扩展的、以美元计价的储蓄工具，其收益完全来源于链上和加密市场，独立于传统金融利率 1。这种“互联网债券”的概念是一个强有力的叙事和产品。

#### **目标市场**

目标市场包括寻求收益的DeFi用户、寻找生产性稳定资产的DAO金库，并最终通过USDtb等产品，吸引寻求合规途径获取加密原生回报的机构和传统金融参与者 33。与TON和Telegram的合作，为触达超过十亿用户开辟了巨大的潜在分销渠道 25。

### **表1：稳定币竞争矩阵**

下表对Ethena的USDe与其主要竞争对手进行了清晰的对比，以便快速评估其在关键维度上的相对优势和劣势。

| 特性 | USDe (Ethena) | USDT (Tether) | USDC (Circle) | DAI (MakerDAO) |
| :---- | :---- | :---- | :---- | :---- |
| **支持机制** | Delta中性对冲 | 法币及等价物 | 法币及等价物 | 加密资产超额抵押 & RWAs |
| **资本效率** | 高 (1:1) | 高 (1:1) | 高 (1:1) | 低 (\>100%) |
| **原生收益** | 是 (质押 & 资金费率) | 否 | 否 | 是 (DSR源于协议收入) |
| **去中心化/抗审查性** | 中等 (依赖CEX/托管) | 低 | 低 | 中等 (依赖RWA/USDC) |
| **可扩展性** | 高 (依赖衍生品流动性) | 非常高 | 非常高 | 中等 (依赖杠杆需求) |
| **主要风险向量** | 负资金费率/交易对手风险 | 银行/监管风险 | 银行/监管风险 | 智能合约/抵押品波动风险 |

## **IV. 全面风险评估**

本节是报告最为关键的部分，对与Ethena协议相关的多方面风险进行了审慎而详细的分析。

### **金融与机制风险**

#### **资金费率风险**

这是最重大的风险。虽然历史上资金费率多为正值，但它们可能并且确实会转为负值，尤其是在严重市场下行或“加密寒冬”期间 6。

* **影响**：持续的负资金费率将要求协议支付费用以维持其空头对冲。如果这些支付超过了质押抵押品的收益，协议的收入将变为负数，届时必须动用储备基金来弥补亏损 6。  
* **缓解措施与压力测试**：  
  1. **储备基金**：协议设有一个专门的基金，用于吸收负资金费率期间的损失。截至2024年8月，该基金持有4500万美元 7。CryptoQuant的分析表明，该基金需要与USDe的市值成比例增长才能保持有效（例如，对于100亿美元的供应量，需要1亿美元的储备金）37。  
  2. **质押收益缓冲**：来自LSTs的约3-4%的收益提供了一个天然的缓冲。只有当资金费率降至该水平以下时，综合收益才会变为负值 6。  
  3. **动态分配与USDtb**：Ethena引入了动态分配机制，在资金费率低或为负的时期，将抵押品转移到代币化的美国国库券（如通过其新的USDtb稳定币投资于贝莱德的BUIDL基金），以赚取基础的传统金融收益并减少风险敞口 36。  
  4. **历史数据**：Ethena的文档显示，负资金费率的时期通常是短暂且均值回归的，过去3年中连续负费率的最长周期仅为13天 6。然而，值得注意的是，Ethena自身的规模可能会改变这些历史动态 19。

#### **抵押品风险：LST脱锚与流动性分析**

* **风险**：LST（如stETH）与ETH的严重脱锚可能导致Ethena抵押品的价值低于其对冲头寸的价值，从而可能引发清算和亏损 19。  
* **分析**：协议的研究表明，需要发生前所未有的41-65%的脱锚才会触发清算，这远超2022年市场崩盘期间约8%的历史最大脱锚幅度 19。通过在多种LST之间进行分散投资，并加入ETH和BTC作为抵押品，进一步降低了此风险。

#### **与Terra的比较：关键区别**

* **核心差异**：USDe是完全抵押的，而UST则不是。UST的稳定性依赖于与一个独立的、波动的代币（LUNA）的算法联系。USDe的稳定性则依赖于其隔离的、经过对冲的抵押品池的美元价值 5。  
* **失败模式**：Terra的失败是一场“死亡螺旋”式的银行挤兑。理论上，Ethena的失败模式是在长期负资金费率期间，其储备基金的“缓慢流失” 19。

### **交易对手与中心化风险**

#### **交易所依赖性**

Delta中性策略依赖于在中心化衍生品交易所（如Binance、Bybit、OKX）执行空头头寸 10。

* **风险**：交易所的失败（如FTX）、被黑客攻击或突然的监管关闭，可能导致资金损失或无法维持对冲，使协议面临未对冲的现货风险敞口 5。

#### **托管与场外结算（OES）风险**

为降低交易所失败的风险，Ethena不直接将抵押品存放在交易所。相反，它使用Ceffu和Copper等OES提供商 36。资产被存放在隔离的、交易所外的托管账户中，并委托给交易所作为保证金。

* **托管机构分析**：  
  * **Ceffu**：尽管声称独立，但因其与Binance的 कथित 关联而面临美国证券交易委员会（SEC）的监管审查。这种关系构成了重大的舆论和监管风险 42。Ceffu的安全性通过了SOC 2 Type 2和ISO 27001/27701认证 40。  
  * **Copper**：一家备受推崇的数字资产托管机构。它在2022年底经历了一起与其私有GitHub代码库泄露相关的“安全事件”，但声明没有客户资金或基础设施受到影响 41。  
* **缓解措施**：这种OES模式显著降低了直接的交易所破产风险，但引入了对OES提供商本身的信任。Ethena每4-8小时与交易所结算一次盈亏，将风险敞口限制在结算期间的价格变动，而非全部名义价值 19。

### **技术与运营安全**

#### **安全审计**

Ethena经历了一个多阶段的审计过程，合作的知名公司包括Zellic、Quantstamp、Spearbit，并由Chaos Labs进行了经济/金融风险审计 43。值得注意的是，Quantstamp的审计报告未发现任何严重或高危漏洞 43。研究过程中注意到，Trail of Bits或CertiK等公司的审计报告暂缺 45。

#### **历史事件**

* **UwU Lend漏洞利用事件（2024年6月）**：一名攻击者操纵了UwU Lend平台上的sUSDe价格预言机，导致UwU Lend损失约2000万美元。这并非Ethena本身的黑客事件，但它凸显了其他协议不当集成sUSDe可能带来的系统性/可组合性风险，并可能对Ethena的声誉造成损害 48。  
* **Discord服务器被入侵（2024年7月）**：Ethena的Discord服务器被黑客入侵，发布了恶意链接。虽然没有协议资金损失，但这代表了可能侵蚀用户信任的运营安全疏漏 50。

### **监管与合规环境**

#### **MiCA框架（欧盟）**

对于像USDe这样的合成美元将如何在MiCA框架下被分类，目前尚存模糊之处。德国监管机构BaFin对一家名为“Ethena GmbH”（可能无关）的公司提供USDe的行为采取了措施，这表明监管机构可能将其视为需要授权的资产参考代币（ART）8。Ethena的官方文档声明，sUSDe不向欧盟居民提供 2。

#### **美国监管动向（GENIUS法案）**

Ethena正通过与联邦特许加密银行Anchorage Digital的合作，积极应对美国的监管不确定性 4。他们正在推出USDtb，这是一种由代币化国库券（贝莱德的BUIDL基金）支持的独立稳定币，旨在符合拟议的GENIUS法案 54。这是一项重大的战略举措，旨在从美国监管角度为项目去风险，并吸引机构资本。

Ethena的主要脆弱性并非源于一次性的“黑天鹅”事件，而更可能是一种“温水煮青蛙”的情景。一个漫长而磨人的熊市，如果同时伴随着持续的负资金费率、不断下降的LST收益率，以及潜在的交易对手（交易所或托管机构）失败，将构成对该协议的终极压力测试。协议的防御体系是多层次的：LST收益缓冲、储备基金、以及向国库券的动态资产配置 6。单一风险因素在孤立情况下是可控的。例如，短期的负资金费率可以被储备基金轻松吸收 6；轻微的LST脱锚也不太可能导致清算 19。真正的危险在于这些风险在严重市场下行期间的相关性。一场市场崩盘很可能同时引发：(a) 随着市场情绪转为看跌，资金费率急剧转为负值；(b) 随着流动性枯竭和强制抛售，LST发生脱锚；(c) 交易所和托管机构的偿付风险增加。在这种情景下，Ethena的所有防御机制都将同时受到考验。储备基金将被消耗，其抵押品的价值可能下跌，而其管理对冲头寸的能力也可能受损。因此，投资论点的核心在于相信该协议的缓解措施（特别是不断增长的储备基金和USDtb国库券作为后盾）足够强大，能够在这种多重风险并发的危机中幸存下来。

## **V. 生态系统、战略伙伴关系与近期发展**

本节分析Ethena生态系统的健康状况和增长情况，这是其长期可行性的关键指标。

### **DeFi可组合性与集成**

#### **借贷市场**

USDe和sUSDe已被深度整合为Aave和Morpho等主流平台上的抵押和借贷资产。值得注意的是，MakerDAO批准将其DAI在Morpho上的USDe/sUSDe市场债务上限提高至10亿美元，这是来自领先DeFi协议的巨大信任票 23。

#### **收益协议**

Pendle Finance允许用户将sUSDe拆分为本金代币（PT）和收益代币（YT），为固定收益和收益投机创造了复杂的市场 58。这一整合已成为推动两个协议TVL增长的主要动力 61。

#### **杠杆协议**

Gearbox允许用户对USDe和sUSDe进行杠杆操作，以赚取积分（“shards”或“sats”）和收益，提供高达9倍的杠杆 62。

### **战略联盟**

#### **TON基金会与Telegram**

这是一项里程碑式的合作，旨在将USDe和sUSDe整合到Telegram生态系统中，有可能将“互联网债券”带给Telegram超过十亿的用户群。这代表了一个无与伦比的主流采用分销渠道 25。

#### **Anchorage Digital**

这是一项至关重要的合作，旨在在美国推出符合GENIUS法案的USDtb稳定币，为Ethena的机构采用铺平道路并降低监管风险 4。

#### **Coinbase International**

与Coinbase的国际衍生品交易所集成，作为对冲场所，从而分散了对其他主要交易所的交易对手风险 25。

### **近期治理与协议更新**

#### **ENA回购**

Ethena基金会于2025年7月完成了8300万ENA代币的回购，表明其致力于支持代币价值 63。

#### **生态系统资助与发展**

基金会已将ENA总供应量的30%分配给生态系统发展，其中包括向期权协议Derive（前身为Lyra）提供数百万美元的资助 5。他们还与Encode Club合作举办加速器计划，以培育基于Ethena构建的新项目 66。

#### **Ethereal DEX提案**

一项关于在Ethena网络上构建一个集成的现货和永续合约DEX（Ethereal）的提案，这将为管理USDe的对冲提供一个链上场所，并为USDe和ENA创造更多效用 67。

### **社区与社交情绪分析**

#### **总体基调**

社区情绪是复杂的，既有对高收益的热情，也有源于对Terra/LUNA事件记忆的深层怀疑。Reddit上的讨论显示，有用户积极参与空投和收益农耕，也有其他人质疑其可持续性并将其比作“Terra 2.0” 68。

#### **争议事件**

早期曾出现争议，当时团队被认为在“窃取”用户收益，在Twitter上遭到社区强烈反对后，他们撤销了这一决定。一些用户报告称因质疑此事而被Discord禁言，这可能表明社区管理方面存在问题 69。

#### **社交媒体存在**

Ethena Labs在Twitter (@ethena\_labs)、Discord (discord.gg/ethena) 和Telegram (t.me/ethena\_labs) 上保持着活跃的官方渠道 2。近期的Twitter沟通重点关注与Anchorage的合作以及推动监管合规 56。

## **VI. 投资论点与机会分析**

本最后部分将所有分析综合成一个可行的投资论点，评估ENA代币和USDe/sUSDe收益生态系统中的机会。

### **ENA代币估值**

#### **代币经济学**

ENA的总供应量为150亿。分配方案为：30%给核心贡献者，25%给投资者，15%给基金会，30%用于生态系统发展（包括空投）5。

#### **解锁计划**

核心贡献者和投资者的代币均有1年的锁仓期（从2024年3月TGE开始），之后是为期3年的线性按月解锁 64。这意味着从2025年3月开始，将有大量供应开始解锁，这可能会对价格造成下行压力。

#### **价值驱动因素**

1. **协议收入分成**：虽然尚未实施，但治理投票可能会将协议可观收入的一部分分配给ENA/sENA持有者。  
2. **生态系统价值累积**：采用“BNB模式”，即Ethena网络上的新项目向sENA持有者空投代币（例如Ethereal、Derive），这是一个强大的价值驱动因素 13。  
3. **再质押安全性**：随着Ethena网络的发展，对sENA作为再质押资产以提供经济安全的需求将创造有机的购买压力和效用 13。  
4. **投机溢价**：ENA可视为对USDe供应量增长和Ethena生态系统整体成功的杠杆化押注。

### **表2：ENA代币经济学与解锁计划**

为了向投资者清晰、简洁地展示ENA的供应动态，下表提供了关键信息，这对于评估未来的通胀压力和做出明智的投资决策至关重要。

| 分配对象 | 占比 | 代币数量 | 解锁摘要 | 关键解锁日期 |
| :---- | :---- | :---- | :---- | :---- |
| **核心贡献者** | 30% | 45亿 | TGE后1年解锁25%，之后3年线性释放 | 2025年3月 (锁仓期结束) |
| **投资者** | 25% | 37.5亿 | TGE后1年解锁25%，之后3年线性释放 | 2025年3月 (锁仓期结束) |
| **基金会** | 15% | 22.5亿 | 待定 | 不适用 |
| **生态系统发展 (空投)** | 5% | 7.5亿 | TGE时解锁 | 不适用 |
| **生态系统发展 (未来激励)** | 25% | 37.5亿 | 待定 | 不适用 |
| **Binance Launchpool** | 2% | 3亿 | TGE时解锁 | 不适用 |

### **收益策略分解**

#### **被动收益：质押USDe获取sUSDe**

* **策略**：最简单的策略。在DEX上获取USDe，并在Ethena平台质押以获得sUSDe。  
* **收益**：赚取基础协议收益，2024年平均约为19%，但波动较大 25。目前约为12% 25。  
* **风险**：面临第四节中概述的所有核心协议风险。

#### **高级策略：杠杆农耕与收益交易**

* **Morpho/Aave循环贷**：存入sUSDe作为抵押品，借入DAI/USDC，将借来的稳定币兑换成更多的sUSDe，然后重复此过程（“循环”）。这可以放大对sUSDe收益的敞口 24。  
  * *风险*：如果sUSDe/稳定币汇率偏离，存在清算风险，以及借贷平台的智能合约风险。  
* **Pendle Finance (PT/YT)**：  
  1. **固定收益 (购买PT-sUSDe)**：以低于其面值的折扣价购买本金代币。这可以在到期前锁定一个固定的收益，对冲sUSDe可变利率可能下降的风险 60。  
  2. **收益投机 (购买YT-sUSDe)**：购买收益代币以获得对sUSDe未来收益的杠杆化敞口。如果实际产生的收益高于购买时YT价格所隐含的收益，则可获利 60。  
  * *风险*：对于PT，如果收益率上升，则存在机会成本。对于YT，如果收益率下降，则可能损失全部支付的溢价。两者都承担Pendle的智能合约风险。  
* **Gearbox协议**：使用Gearbox的信用账户，以初始抵押品借入USDC，以获取高达9倍数量的USDe/sUSDe，从而放大收益和积分农耕奖励 62。  
  * *风险*：与Morpho循环贷类似，基于USDe/sUSDe的锚定稳定性存在清算风险。

### **表3：USDe/sUSDe收益策略比较**

为了将各种复杂的DeFi策略抽象为一个清晰的风险/回报框架，下表帮助用户选择符合其特定风险承受能力和技术水平的策略。

| 策略 | 策略类型 | 潜在APY | 复杂性 | 主要风险 |
| :---- | :---- | :---- | :---- | :---- |
| **质押sUSDe** | 被动收益 | 可变：约10-30% | 低 | 协议风险 |
| **在Morpho/Aave上循环贷** | 杠杆收益 | 杠杆化可变：约30-100%+ | 高 | 协议风险、清算风险 |
| **在Pendle上购买PT-sUSDe** | 固定收益 | 固定：约12-20% | 中 | 协议风险、机会成本 |
| **在Pendle上购买YT-sUSDe** | 收益投机 | 高度可变 | 高 | 协议风险、收益波动风险 |
| **在Gearbox上杠杆农耕** | 杠杆收益/积分 | 杠杆化可变 | 高 | 协议风险、清算风险 |

### **前景展望与催化剂**

* **积极催化剂**：与Telegram的全面整合、合规的USDtb产品的成功推出和采用、Ethena网络和Ethereal DEX的上线、为ENA持有者实施收入分享模型，以及成功度过一次重大的市场下行周期（这将验证其模型的稳健性）。  
* **消极催化剂**：长期的熊市伴随负资金费率、主要交易所交易对手的失败、针对衍生品或稳定币的严厉监管行动，或重大的安全漏洞。

### **可行性建议与投资组合配置**

* **对于寻求收益的投资者（中等风险）**：直接配置sUSDe提供了引人注目的收益。投资者应积极监控储备基金规模与USDe供应量的比率以及主流的资金费率趋势。可以考虑在多元化的加密投资组合中初始配置1-3%，并计划在资金费率持续为负时减少敞口。  
* **对于成熟的DeFi用户（高风险）**：在Morpho上的杠杆策略或Pendle的YT代币提供了更高的潜在回报，但伴随着显著更高的风险和复杂性。这些策略只应由能够积极管理头寸并理解清算机制的专家用户进行。这些是战术性而非被动性配置。  
* **对于长期协议投资者（非常高风险）**：对ENA代币的配置是对Ethena生态系统成为DeFi核心基础设施的长期、风险投资式的押注。头寸规模应考虑到其高波动性和2025年即将到来的代币解锁。在2025年3月锁仓期结束前后采用定投（DCA）策略可能是一种审慎的入场方式。

#### **引用的著作**

1. Ethena USDe price today, USDe to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 30, 2025， [https://coinmarketcap.com/currencies/ethena-usde/](https://coinmarketcap.com/currencies/ethena-usde/)  
2. Ethena Overview | Ethena, 访问时间为 七月 30, 2025， [https://docs.ethena.fi/](https://docs.ethena.fi/)  
3. Ethena Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 30, 2025， [https://www.rootdata.com/Projects/detail/Ethena?k=ODU4Mw%3D%3D](https://www.rootdata.com/Projects/detail/Ethena?k=ODU4Mw%3D%3D)  
4. Anchorage Digital Partners with Ethena Labs to Launch the First GENIUS-Compliant; Federally Regulated Stablecoin \- Business Wire, 访问时间为 七月 30, 2025， [https://www.businesswire.com/news/home/20250723391461/en/Anchorage-Digital-Partners-with-Ethena-Labs-to-Launch-the-First-GENIUS-Compliant-Federally-Regulated-Stablecoin](https://www.businesswire.com/news/home/20250723391461/en/Anchorage-Digital-Partners-with-Ethena-Labs-to-Launch-the-First-GENIUS-Compliant-Federally-Regulated-Stablecoin)  
5. What is Ethena?: Investor's Guide 2025 \- CoinLedger, 访问时间为 七月 30, 2025， [https://coinledger.io/learn/what-is-ethena](https://coinledger.io/learn/what-is-ethena)  
6. Funding Risk \- Ethena Overview, 访问时间为 七月 30, 2025， [https://docs.ethena.fi/solution-overview/risks/funding-risk](https://docs.ethena.fi/solution-overview/risks/funding-risk)  
7. Why Ethena Has Been One of the Biggest Losers In the Recent Market Correction, 访问时间为 七月 30, 2025， [https://unchainedcrypto.com/why-ethena-has-been-one-of-the-biggest-losers-in-the-recent-market-correction/](https://unchainedcrypto.com/why-ethena-has-been-one-of-the-biggest-losers-in-the-recent-market-correction/)  
8. Stablecoins 101: Behind crypto's most popular asset \- Chainalysis, 访问时间为 七月 30, 2025， [https://www.chainalysis.com/blog/stablecoins-most-popular-asset/](https://www.chainalysis.com/blog/stablecoins-most-popular-asset/)  
9. What is Ethena? | Delphi Digital, 访问时间为 七月 30, 2025， [https://members.delphidigital.io/projects/ethena](https://members.delphidigital.io/projects/ethena)  
10. Ethena (ENA): Is the USDe Synthetic Dollar the Future of DeFi? | KuCoin Learn, 访问时间为 七月 30, 2025， [https://www.kucoin.com/learn/web3/what-is-ethena-ena](https://www.kucoin.com/learn/web3/what-is-ethena-ena)  
11. The Rise of Ethena: Unpacking The Emerging Synthetic Dollar \- Delphi Digital, 访问时间为 七月 30, 2025， [https://members.delphidigital.io/reports/the-rise-of-ethena-unpacking-the-emerging-synthetic-dollar](https://members.delphidigital.io/reports/the-rise-of-ethena-unpacking-the-emerging-synthetic-dollar)  
12. Ethena: Delving into the Mechanics and Risks of USDe | by Kam \- Medium, 访问时间为 七月 30, 2025， [https://medium.com/@kambenbrik/ethena-delving-into-the-mechanics-and-risks-of-usde-0b063b3e50d3](https://medium.com/@kambenbrik/ethena-delving-into-the-mechanics-and-risks-of-usde-0b063b3e50d3)  
13. ENA \- Ethena Overview, 访问时间为 七月 30, 2025， [https://docs.ethena.fi/ena](https://docs.ethena.fi/ena)  
14. Ethena (ENA) Tokenomics: Supply, Distribution, and Utility Guide, 访问时间为 七月 30, 2025， [https://www.findas.org/tokenomics-review/coins/the-tokenomics-of-ethena-ena/r/WNL49cMCFVzGZCVVi8AvTJ](https://www.findas.org/tokenomics-review/coins/the-tokenomics-of-ethena-ena/r/WNL49cMCFVzGZCVVi8AvTJ)  
15. What is Ethena Staked USDe (sUSDe)? Everything You Need to Know \- OSL, 访问时间为 七月 30, 2025， [https://www.osl.com/academy/article/what-is-ethena-staked-usde-susde-everything-you-need-to-know](https://www.osl.com/academy/article/what-is-ethena-staked-usde-susde-everything-you-need-to-know)  
16. Ethena's USDe Explained: No Terra-Luna, but Major Risks Exist \- Medium, 访问时间为 七月 30, 2025， [https://medium.com/thecapital/ethenas-usde-explained-no-terra-luna-but-major-risks-exist-1ca01e67da86](https://medium.com/thecapital/ethenas-usde-explained-no-terra-luna-but-major-risks-exist-1ca01e67da86)  
17. What is Ethena Staked USDe (sUSDe)? Everything You Need to Know \- OSL, 访问时间为 七月 30, 2025， [https://www.osl.com/hk-en/academy/article/what-is-ethena-staked-usde-susde-everything-you-need-to-know](https://www.osl.com/hk-en/academy/article/what-is-ethena-staked-usde-susde-everything-you-need-to-know)  
18. Ethena price today, ENA to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 30, 2025， [https://coinmarketcap.com/currencies/ethena/](https://coinmarketcap.com/currencies/ethena/)  
19. Ethena Thesis — The Internet Bond | by Jose Maria Macedo \- Medium, 访问时间为 七月 30, 2025， [https://medium.com/@zemacedo/ethena-thesis-the-internet-bond-a89ba5d00fb9](https://medium.com/@zemacedo/ethena-thesis-the-internet-bond-a89ba5d00fb9)  
20. Ethena (ENA) Analysis & Overview \- Coinmetro, 访问时间为 七月 30, 2025， [https://www.coinmetro.com/price/ena](https://www.coinmetro.com/price/ena)  
21. Ethena Price, ENA Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 30, 2025， [https://www.coinbase.com/price/ethena](https://www.coinbase.com/price/ethena)  
22. ethena-labs \- GitHub, 访问时间为 七月 30, 2025， [https://github.com/ethena-labs](https://github.com/ethena-labs)  
23. Ethena ecosystem, 访问时间为 七月 30, 2025， [https://ethena.fi/ecosystem](https://ethena.fi/ecosystem)  
24. Morpho Enters Maker's Endgame with Spark and Ethena, 访问时间为 七月 30, 2025， [https://morpho.org/blog/morpho-enters-makers-endgame-with-spark-and-ethena/](https://morpho.org/blog/morpho-enters-makers-endgame-with-spark-and-ethena/)  
25. Ethena, 访问时间为 七月 30, 2025， [https://ethena.fi/](https://ethena.fi/)  
26. Ethena Expands Its Reach Through Telegram Integration | Bitget News, 访问时间为 七月 30, 2025， [https://www.bitget.com/news/detail/12560604733976](https://www.bitget.com/news/detail/12560604733976)  
27. Ethena \- DefiLlama, 访问时间为 七月 30, 2025， [https://defillama.com/protocol/ethena?tvl=true\&mcap=true](https://defillama.com/protocol/ethena?tvl=true&mcap=true)  
28. Ethena \- DefiLlama, 访问时间为 七月 30, 2025， [https://defillama.com/protocol/ethena?fees=true\&denomination=USD\&groupBy=monthly](https://defillama.com/protocol/ethena?fees=true&denomination=USD&groupBy=monthly)  
29. Did You Know 93% of the Stablecoin Market Share Is Controlled by Just 2 Coins? \- Nasdaq, 访问时间为 七月 30, 2025， [https://www.nasdaq.com/articles/did-you-know-93-stablecoin-market-share-controlled-just-2-coins](https://www.nasdaq.com/articles/did-you-know-93-stablecoin-market-share-controlled-just-2-coins)  
30. Alternatives: Existing Stablecoins \- Ethena Overview, 访问时间为 七月 30, 2025， [https://docs.ethena.fi/alternatives-existing-stablecoins](https://docs.ethena.fi/alternatives-existing-stablecoins)  
31. Develop A DeFi Lending Platform Like MakerDAO: Ultimate Guide \- IdeaUsher, 访问时间为 七月 30, 2025， [https://ideausher.com/blog/defi-lending-platform-like-makerdao/](https://ideausher.com/blog/defi-lending-platform-like-makerdao/)  
32. 18 Top Stablecoins to Know | Built In, 访问时间为 七月 30, 2025， [https://builtin.com/blockchain/stablecoin](https://builtin.com/blockchain/stablecoin)  
33. Ethena Labs \- Join the Team\! General Application \- Lever, 访问时间为 七月 30, 2025， [https://jobs.lever.co/ethenalabs/84a46a52-1e5f-4a86-a12b-10604ba8279a](https://jobs.lever.co/ethenalabs/84a46a52-1e5f-4a86-a12b-10604ba8279a)  
34. Ethena launches $360m treasury play that buys locked tokens \- DL News, 访问时间为 七月 30, 2025， [https://www.dlnews.com/articles/defi/ethena-founder-hopes-stablecoin-buzz-will-lure-investors/](https://www.dlnews.com/articles/defi/ethena-founder-hopes-stablecoin-buzz-will-lure-investors/)  
35. Ethena Integration Is a 'Massive Leap' for TON and Telegram Users \- The Defiant, 访问时间为 七月 30, 2025， [https://thedefiant.io/news/defi/ethena-integration-is-a-massive-leap-for-ton-and-telegram-users](https://thedefiant.io/news/defi/ethena-integration-is-a-massive-leap-for-ton-and-telegram-users)  
36. USDe \- S\&P Global, 访问时间为 七月 30, 2025， [https://www.spglobal.com/\_assets/documents/ratings/research/101611700.pdf](https://www.spglobal.com/_assets/documents/ratings/research/101611700.pdf)  
37. Ethena \- USDe's Tail Risks Analysis and Key Metrics to Monitor \- Research & Reporting | CryptoQuant, 访问时间为 七月 30, 2025， [https://cryptoquant.com/applied-research/6639fff4f919457d1576444d/intro](https://cryptoquant.com/applied-research/6639fff4f919457d1576444d/intro)  
38. Liquid Stables: Dynamic Allocation \- Ethena Overview, 访问时间为 七月 30, 2025， [https://docs.ethena.fi/solution-overview/liquid-stables-dynamic-allocation](https://docs.ethena.fi/solution-overview/liquid-stables-dynamic-allocation)  
39. Counterparty Risk in Crypto: Understanding the Potential Threats \- Merkle Science, 访问时间为 七月 30, 2025， [https://www.merklescience.com/counterparty-risk-in-crypto-understanding-the-potential-threats](https://www.merklescience.com/counterparty-risk-in-crypto-understanding-the-potential-threats)  
40. Ceffu | Your gateway to institutional crypto asset management, 访问时间为 七月 30, 2025， [https://www.ceffu.com/](https://www.ceffu.com/)  
41. Digital asset custody firm Copper says 'incident' was not a security breach \- Ledger Insights, 访问时间为 七月 30, 2025， [https://www.ledgerinsights.com/copper-digital-asset-custody-security/](https://www.ledgerinsights.com/copper-digital-asset-custody-security/)  
42. Binance Is Supposedly Separate From Crypto Custodian Ceffu. The SEC Has Questions, 访问时间为 七月 30, 2025， [https://www.nasdaq.com/articles/binance-is-supposedly-separate-from-crypto-custodian-ceffu.-the-sec-has-questions](https://www.nasdaq.com/articles/binance-is-supposedly-separate-from-crypto-custodian-ceffu.-the-sec-has-questions)  
43. Audits | Ethena, 访问时间为 七月 30, 2025， [https://docs.ethena.fi/resources/audits](https://docs.ethena.fi/resources/audits)  
44. Perpetual Futures Liquidity Assessment Report \- Chaos Labs, 访问时间为 七月 30, 2025， [https://chaoslabs.xyz/resources/chaos\_Labs\_ethena\_perpetual\_assessment\_risk\_report.pdf](https://chaoslabs.xyz/resources/chaos_Labs_ethena_perpetual_assessment_risk_report.pdf)  
45. Audits \- The Trail of Bits Blog, 访问时间为 七月 30, 2025， [https://blog.trailofbits.com/categories/audits/](https://blog.trailofbits.com/categories/audits/)  
46. Security Audit Report of v4 by Trail of Bits \- Squads Blog, 访问时间为 七月 30, 2025， [https://squads.so/blog/trail-of-bits-security-audit-v4](https://squads.so/blog/trail-of-bits-security-audit-v4)  
47. Reports \- Trail of Bits, 访问时间为 七月 30, 2025， [https://www.trailofbits.com/reports/](https://www.trailofbits.com/reports/)  
48. $2.2 Billion Stolen in Crypto in 2024 but Hacked Volumes Stagnate \- Chainalysis, 访问时间为 七月 30, 2025， [https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2025/](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2025/)  
49. Investigating the UwU Lend Hack and Flow of Funds \- Merkle Science, 访问时间为 七月 30, 2025， [https://www.merklescience.com/blog/investigating-the-uwu-lend-hack-and-flow-of-funds](https://www.merklescience.com/blog/investigating-the-uwu-lend-hack-and-flow-of-funds)  
50. Ethena Discord Server Comes Under Attack | TheCoinrise Media on Binance Square, 访问时间为 七月 30, 2025， [https://www.binance.com/en-NG/square/post/10801167653274](https://www.binance.com/en-NG/square/post/10801167653274)  
51. ZachXBT: Ethena Discord server is currently hacked, do not click on the link | Bitget News, 访问时间为 七月 30, 2025， [https://www.bitget.com/news/detail/12560604096198](https://www.bitget.com/news/detail/12560604096198)  
52. What is an asset-reference token? Lessons from the Ethena case | DLA Piper, 访问时间为 七月 30, 2025， [https://www.dlapiper.com/en-ca/insights/publications/2025/06/what-is-an-asset-reference-token](https://www.dlapiper.com/en-ca/insights/publications/2025/06/what-is-an-asset-reference-token)  
53. Anchorage Digital Partners with Ethena Labs to Launch the First GENIUS-Compliant; Federally Regulated Stablecoin, 访问时间为 七月 30, 2025， [https://en.antaranews.com/news/368909/anchorage-digital-partners-with-ethena-labs-to-launch-the-first-genius-compliant-federally-regulated-stablecoin](https://en.antaranews.com/news/368909/anchorage-digital-partners-with-ethena-labs-to-launch-the-first-genius-compliant-federally-regulated-stablecoin)  
54. Ethena to Bring $1.5 Billion USDtb Stablecoin to US with Anchorage Digital \- Decrypt, 访问时间为 七月 30, 2025， [https://decrypt.co/331624/ethena-labs-bring-usdtb-stablecoin-us-anchorage-digital](https://decrypt.co/331624/ethena-labs-bring-usdtb-stablecoin-us-anchorage-digital)  
55. Ethena jumps following partnership with Anchorage to launch USDtb stablecoin under GENIUS framework \- Mitrade, 访问时间为 七月 30, 2025， [https://www.mitrade.com/insights/news/live-news/article-3-985134-20250725](https://www.mitrade.com/insights/news/live-news/article-3-985134-20250725)  
56. Ethena and Anchorage Collaborate to Make USDtb a U.S.-Compliant Payment Stablecoin, 访问时间为 七月 30, 2025， [https://crypto-economy.com/ethena-and-anchorage-collaborate-to-make-usdtb-a-u-s-compliant-payment-stablecoin/](https://crypto-economy.com/ethena-and-anchorage-collaborate-to-make-usdtb-a-u-s-compliant-payment-stablecoin/)  
57. MakerDAO raises debt ceiling to $1 billion for Dai allocations in Ethena's stablecoin markets on Morpho | The Block, 访问时间为 七月 30, 2025， [https://www.theblock.co/post/287132/makerdao-raises-debt-ceiling-to-1-billion-for-dai-allocations-in-ethenas-stablecoin-markets-on-morpho](https://www.theblock.co/post/287132/makerdao-raises-debt-ceiling-to-1-billion-for-dai-allocations-in-ethenas-stablecoin-markets-on-morpho)  
58. PENDLE — A Comprehensive Crypto Yield Market Analysis \- DataDrivenInvestor, 访问时间为 七月 30, 2025， [https://medium.datadriveninvestor.com/pendle-a-comprehensive-crypto-yield-market-analysis-83311b5be8e6](https://medium.datadriveninvestor.com/pendle-a-comprehensive-crypto-yield-market-analysis-83311b5be8e6)  
59. Pendle \- Liberating Yield, 访问时间为 七月 30, 2025， [https://www.pendle.finance/](https://www.pendle.finance/)  
60. Using Pendle | Pendle Documentation, 访问时间为 七月 30, 2025， [https://docs.pendle.finance/AppGuide/UsingPendle](https://docs.pendle.finance/AppGuide/UsingPendle)  
61. Pendle: A New Era in Yield Trading? \- Nansen Research, 访问时间为 七月 30, 2025， [https://research.nansen.ai/articles/pendle-a-new-era-in-yield-trading](https://research.nansen.ai/articles/pendle-a-new-era-in-yield-trading)  
62. Leveraged Ethena: Earn up to 90X Shards \- Gearbox Protocol Blog, 访问时间为 七月 30, 2025， [https://blog.gearbox.fi/leveraged-ethena-upto-90x-shards/](https://blog.gearbox.fi/leveraged-ethena-upto-90x-shards/)  
63. Ethena Completes 83M ENA Buyback as Token Surges 8% Amid StablecoinX Launch, 访问时间为 七月 30, 2025， [https://www.ainvest.com/news/ethena-completes-83m-ena-buyback-token-surges-8-stablecoinx-launch-2507/](https://www.ainvest.com/news/ethena-completes-83m-ena-buyback-token-surges-8-stablecoinx-launch-2507/)  
64. Tokenomics \- Ethena Overview, 访问时间为 七月 30, 2025， [https://docs.ethena.fi/ena/tokenomics](https://docs.ethena.fi/ena/tokenomics)  
65. The Ethena Foundation has provided a grant of millions of dollars to Derive | Bitget News, 访问时间为 七月 30, 2025， [https://www.bitget.com/news/detail/12560604390458](https://www.bitget.com/news/detail/12560604390458)  
66. Ethena Accelerator \- Encode Club, 访问时间为 七月 30, 2025， [https://www.encode.club/ethena-accelerator](https://www.encode.club/ethena-accelerator)  
67. ENA Price Analysis and predictions— Skyrockets 20% | L A R Y B on Binance Square, 访问时间为 七月 30, 2025， [https://www.binance.com/en/square/post/14234690921481](https://www.binance.com/en/square/post/14234690921481)  
68. Is Ethena Legit? : r/defi \- Reddit, 访问时间为 七月 30, 2025， [https://www.reddit.com/r/defi/comments/1bm1bgp/is\_ethena\_legit/](https://www.reddit.com/r/defi/comments/1bm1bgp/is_ethena_legit/)  
69. Ethena Labs : r/defi \- Reddit, 访问时间为 七月 30, 2025， [https://www.reddit.com/r/defi/comments/1b585wl/ethena\_labs/](https://www.reddit.com/r/defi/comments/1b585wl/ethena_labs/)  
70. GENIUS Act Compliance: Full Cost & Checklist Guide for US Stablecoin Issuers \- CCN.com, 访问时间为 七月 30, 2025， [https://www.ccn.com/education/crypto/genius-act-compliance-cost-checklist-us-stablecoin-issuers/](https://www.ccn.com/education/crypto/genius-act-compliance-cost-checklist-us-stablecoin-issuers/)  
71. Arthur Hayes $1M ENA Crypto Buy Triggers 16% Price Surge: USDtb Partnership and Buyback Adds Another Fuel to Ethena Rally \- 99Bitcoins, 访问时间为 七月 30, 2025， [https://99bitcoins.com/news/presales/arthur-hayes-1m-ena-crypto-buy-triggers-16-price-surge-usdtb-partnership-and-buyback-adds-another-fuel-to-ethena-rally/](https://99bitcoins.com/news/presales/arthur-hayes-1m-ena-crypto-buy-triggers-16-price-surge-usdtb-partnership-and-buyback-adds-another-fuel-to-ethena-rally/)  
72. Ethena (ENA) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 访问时间为 七月 30, 2025， [https://tokenomist.ai/ethena](https://tokenomist.ai/ethena)  
73. What Is Ethena's USDe Yield‑Bearing Stablecoin and How Does It Work? \- BingX Academy, 访问时间为 七月 30, 2025， [https://bingx.com/en/learn/what-is-ethena-usde-yield-bearing-stablecoin-how-does-it-work](https://bingx.com/en/learn/what-is-ethena-usde-yield-bearing-stablecoin-how-does-it-work)  
74. MakerDAO pools on Morpho enable looping on Ethena's yields \- Medium, 访问时间为 七月 30, 2025， [https://medium.com/contango-xyz/new-dai-liquidity-pools-on-morphoblue-enable-leverage-trades-on-ethenas-yields-a3df13ad30db](https://medium.com/contango-xyz/new-dai-liquidity-pools-on-morphoblue-enable-leverage-trades-on-ethenas-yields-a3df13ad30db)  
75. Contango: the looping layer of defi \- Medium, 访问时间为 七月 30, 2025， [https://medium.com/contango-xyz/contango-the-looping-layer-of-defi-8183bf8ae045](https://medium.com/contango-xyz/contango-the-looping-layer-of-defi-8183bf8ae045)  
76. What is Pendle Finance? Yield Tokenization Explained & How to Earn | Nansen, 访问时间为 七月 30, 2025， [https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn](https://www.nansen.ai/post/what-is-pendle-finance-yield-tokenization-explained-how-to-earn)  
77. How Pendle Finance works, in a nutshell \- Dafacto, 访问时间为 七月 30, 2025， [https://dafacto.com/2025/how-pendle-finance-works](https://dafacto.com/2025/how-pendle-finance-works)