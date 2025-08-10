

# **Cysic (CYS) 投资报告：对全栈 ZK 计算网络的深度剖析**

## **执行摘要**

本报告对 Cysic 项目进行全面、深入的投资分析。Cysic 定位于零知识证明（Zero-Knowledge Proofs, ZKP）领域，致力于通过其全栈解决方案，成为行业领先的“ZK 计算即服务”（ZK Compute-as-a-Service, ZK-CaaS）提供商。该项目通过垂直整合自研硬件（ASIC 芯片）与去中心化软件网络，旨在解决当前 ZK 技术面临的核心瓶颈——计算效率低下问题。

核心研究发现，Cysic 的主要优势在于其拥有世界一流的创始团队（拥有康奈尔大学和耶鲁大学的密码学博士背景）、顶级风险投资机构（如 Polychain Capital, HashKey Capital, OKX Ventures）的雄厚资本和战略支持，以及与以太坊 Layer-2 头部项目 Scroll 的深度战略合作关系。这种“VC 验证与战略合作飞轮”效应，为 Cysic 提供了明确的市场切入点和初期的业务增长保障。

技术上，Cysic 采取了从 FPGA、GPU 到 ASIC 的务实硬件发展路径，并开发了 Hypercube IR 和 ZKPoG 等专有技术以最大化性能。其网络层基于 Cosmos SDK 构建，采用创新的“计算证明”（Proof-of-Compute）共识机制，并设计了精密的 $CYS（效用）与 $CGT（治理）双代币经济模型，旨在激励网络参与、促进价值捕获并维持长期经济稳定。

然而，投资 Cysic 同样伴随着显著风险。其“全有或全无”的 ASIC 研发战略构成了最大的技术执行风险；ZK 赛道技术迭代迅速，竞争激烈，存在市场风险；作为尚未上线的项目，其智能合约和节点软件缺乏公开的安全审计报告；网络启动初期存在一定程度的中心化风险。

本报告识别出多层次的投资机会，包括：1）**激励测试网空投**：这是当前风险最低、潜在回报最高的切入点，通过运行验证者或未来开放的证明者节点积累积分，以换取主网代币。2) **TGE 后代币购买**：适合寻求直接代币敞口的投资者，但需注意初期市场波动。3) **DeFi 收益耕作**：主网上线后，通过质押 $CYS 获取收益。4) **开发者生态参与**：具备技术背景的投资者可通过构建“代理”或使用其计算服务来获取收益。

综合评估，Cysic 是一个在关键基础设施赛道中具备高增长潜力的项目，但其高回报预期与高执行风险并存。

**最终投资评级：建议**

---

## **1\. 引言：Cysic 与 ZK 计算的时代需求**

### **1.1. ZK 证明在区块链可扩展性中的关键作用**

零知识证明（ZKP）正迅速成为解决区块链可扩展性、隐私性和数据压缩等核心问题的基石技术。尤其是在以太坊生态中，ZK-Rollups 被视为实现大规模交易处理、降低用户成本的关键路径 1。通过将成百上千笔交易在链下计算，并生成一个简洁的 ZK 证明提交到主链进行验证，ZK-Rollups 可以在不牺牲安全性的前提下，极大地提升网络的吞吐量。除了扩容，ZK 技术还在隐私保护（如 Aleo 项目）和链上数据压缩（如 Mina 项目）等领域展现出巨大的应用潜力，共同构成了一个对高效 ZK 计算能力有着海量需求的广阔市场 2。

### **1.2. Cysic 的愿景：提供 ZK 计算即服务（ZK-CaaS）**

尽管 ZK 技术前景广阔，但其广泛应用面临一个核心障碍：生成 ZK 证明的过程计算量巨大、耗时且成本高昂。Cysic 项目的诞生正是为了解决这一行业痛点。其核心价值主张是提供一个一站式的、实时的 ZK 证明生成与验证层，即“ZK 计算即服务”（ZK-CaaS），旨在以“最快、最便宜、最简单、最去中心化”的方式为整个行业提供 ZK 计算能力 3。通过消除 ZK 计算的性能瓶颈，Cysic 希望能赋能所有 ZK 项目，加速 ZK 技术的普及和创新 6。

### **1.3. 全栈模式：从定制芯片到去中心化网络**

为实现其宏大愿景，Cysic 采取了一种极具雄心的全栈式发展战略。它不仅开发软件协议，更是深入到产业链上游，自主设计和构建从底层硬件到上层协议的完整基础设施堆栈。这一堆栈包括了为 ZK 算法专门优化的硬件（如专用集成电路 ASIC 和 GPU 加速方案）以及一个由其自有区块链驱动的去中心化计算网络 1。

这种垂直整合的模式是 Cysic 区别于其他竞争对手的核心特征。当前市场上，纯粹的硬件制造商（如销售 GPU 的公司）通常陷入商品化竞争，难以捕获其硬件所赋能的网络的长期价值。而纯粹的软件 ZK 证明网络则受制于通用硬件（如消费级 GPU）的性能限制，这些硬件并非为 ZK 的独特数学运算而设计，因此存在效率天花板 2。

Cysic 的策略则是将两者结合。通过为其自有网络设计定制化的 ASIC 芯片，Cysic 有望实现通用硬件无法比拟的性能和功耗效率 6。这使得 Cysic 能够同时掌控“铁锹”（硬件）的生产和“金矿”（计算网络）的运营，从而捕获整个价值链的利润。这种“全栈护城河”战略赋予了 Cysic 强大的潜在竞争优势。然而，这也意味着巨大的风险集中，其自研 ASIC 芯片的成败将直接决定整个项目的命运，这是一场高风险、高回报的豪赌。

---

## **2\. 技术架构与创新**

Cysic 的技术架构分为硬件层和网络层，两者协同工作，共同构成了其 ZK-CaaS 服务的核心。

### **2.1. 硬件层：为速度而生的工程设计**

Cysic 的硬件开发遵循一条清晰且务实的技术路线图，旨在逐步实现最终的性能目标。

#### **2.1.1. 发展轨迹：从 FPGA 到 GPU，再到 ASIC**

项目初期，Cysic 团队通过开发基于 FPGA（现场可编程门阵列）的原型机来验证其设计理念。在成立仅两个月内，他们就成功开发出用于 ZK 关键组件——多标量乘法（MSM）的 FPGA 原型，并宣称其速度比当时行业内的顶尖方案（如 Ingonyama 和 Jump Crypto 的项目）快 2 到 5 倍 8。

随后，为了更快地服务市场并与合作伙伴对接，Cysic 开发了基于 GPU 的加速方案 ZKPoG。该方案为现有的主流证明系统（如 Plonky2 和 Halo2）提供硬件加速，并已成功应用于其重要合作伙伴 Scroll 的网络中，为其提供 ZK 证明计算服务 3。

#### **2.1.2. 终极目标：Cysic C1 芯片、ZK Air 与 ZK Pro**

Cysic 的最终目标是推出其自主研发的、基于 zkVM 的 ASIC 芯片——“Cysic C1” 6。这款芯片将成为其两款旗舰硬件产品的核心：一款是便携式的“ZK Air”，另一款是高性能的“ZK Pro” 3。这表明 Cysic 拥有一个从当前到未来的、清晰的硬件产品演进规划。

#### **2.1.3. 专有创新：Hypercube IR 与 ZKPoG**

Cysic 的技术护城河建立在几项关键的专有创新之上：

* **Hypercube Intermediate Representation (IR):** 这是一个定制的优化层，位于 ZK 电路和硬件执行之间。它能将复杂的 ZK 电路分解为可并行处理的独立计算块，并使其逻辑与现代 ASIC 和 GPU 的核心能力自然对齐，从而最大化硬件性能和可扩展性。这是实现可扩展 ZK 计算的根本性转变 1。  
* **ZKPoG (ZK Proof of Generation):** 这是 Cysic 的 GPU 证明堆栈，它优化了从 witness 生成到最终证明的全过程，并能在一块消费级 GPU 上高效运行。其设计对开发者友好，使集成自定义逻辑变得简单，从而加速了 ZK 应用的开发和部署 10。

### **2.2. 网络层：Cysic 区块链**

Cysic 的硬件能力最终通过一个去中心化的网络来释放和协调。

#### **2.2.1. 核心架构：Cosmos SDK、EVM 兼容性与 CometBFT**

Cysic 网络是基于灵活的 Cosmos SDK 构建的一条独立的、与 EVM 兼容的区块链 1。这意味着开发者可以轻松地将以太坊生态的智能合约和工具迁移至 Cysic 网络。网络采用了 CometBFT（前身为 Tendermint）共识引擎，该引擎以其即时最终性和强大的拜占庭容错能力而闻名，为网络提供了坚实的安全基础 12。

#### **2.2.2. 计算证明（Proof-of-Compute）：一种混合共识模型**

Cysic 引入了一种名为“计算证明”（Proof-of-Compute, PoC）的创新共识机制。PoC 结合了“工作量证明”（Proof-of-Work）和“权益证明”（Proof-of-Stake）的元素：网络参与者（证明者）通过解决一个计算难题来竞争成为一个周期的区块提议者委员会成员，而在委员会内部，成员的提议权则与其质押的代币数量成正比。这种混合模型旨在直接奖励对网络做出实际计算贡献的参与者，确保网络的安全与效率 11。

#### **2.2.3. 网络参与者：代理、证明者与验证者的角色**

Cysic 生态系统由三类关键参与者构成，各司其职 11：

* **代理 (Agents):** 负责将 ZK 项目方的证明任务中继到 Cysic 网络。在项目初期，该角色由 Cysic 官方运行以确保稳定性，但未来计划实现无需许可化，任何参与者在提供一定代币担保后都可以成为代理 11。  
* **证明者 (Provers):** 网络的“重型劳动力”，使用 GPU、ASIC 等强大硬件来执行密集的计算任务，生成 ZK 证明。证明者需要质押代币以获取任务资格，并因成功生成有效证明而获得奖励 11。  
* **验证者 (Verifiers):** 负责验证由证明者生成的证明的正确性。由于 ZK 证明的“简洁性”特性，验证过程的计算开销远低于生成过程，因此对硬件的要求也低得多，这使得普通用户也能参与其中，从而增强了网络的去中心化和安全性 11。

---

## **3\. 代币经济学：$CYS 与 $CGT 的双代币经济**

Cysic 设计了一套精密的双代币经济模型，旨在将网络的日常效用与长期治理分离开来，以构建一个可持续的经济生态系统 11。

### **3.1. 双代币模型**

* **$CYS (效用代币):** 这是 Cysic 网络的原生、可流通代币。其核心功能是作为网络中的“燃料”，用于支付交易的 Gas 费、区块奖励以及证明任务的结算费用。$CYS 是激励证明者和验证者为网络贡献计算能力和安全性的主要工具，也是未来将在交易所上市交易的代币 14。  
* **$CGT / $veToken (治理代币):** 这是一个不可转让的治理代币（在早期文档中被称为 $veToken，后期更新为 $CGT，功能类似）。它通过质押（或托管/锁定）$CYS 来获得。用户获得的 $CGT 数量与其锁定的 $CYS 数量和锁定期限直接相关——锁定的 $CYS 越多、时间越长，获得的 $CGT 就越多。$CGT 代表了在网络中的治理投票权，并且持有一定数量的 $CGT 是成为网络验证者的先决条件 11。

### **3.2. 价值捕获与经济飞轮**

该系统的经济逻辑旨在形成一个正向循环的飞轮：

1. **需求驱动**：ZK 项目方（如 Scroll）需要 Cysic 网络的计算服务来生成 ZK 证明，它们为此支付费用（可能以稳定币或 ETH 支付，协议后台会将其兑换为 $CYS）。  
2. **价值分配**：这些协议收入被用作奖励，以 $CYS 的形式分发给提供计算和验证服务的证明者和验证者。  
3. **供应紧缩**：网络参与者为了获得更高的收益率和网络治理权，有强烈的动机将他们赚取的 $CYS 锁定起来，以换取不可转让的 $CGT。这个过程有效地将大量的 $CYS 从流通市场中移除，减少了潜在的卖压。  
4. **飞轮加速**：随着更多项目使用 Cysic 网络，对 $CYS 的需求增加，协议收入增长，从而激励更多人参与并锁定 $CYS，进一步推动了网络的去中心化和价值增长。

### **3.3. 供应动态：通货膨胀与代币销毁**

为了在网络启动初期激励参与，Cysic 网络采用了一种可控的通货膨胀机制来增发 $CYS 代币，用于奖励早期贡献者 11。这是一个在区块链项目中常见的冷启动策略。

更重要的是，项目方在白皮书中明确提出了未来将引入代币销毁机制 11。这意味着协议的部分收入将被用来从市场上回购并永久销毁 $CYS 代币。这一机制将产生通缩压力，用以对冲初期的通货膨胀。通过动态调整，该机制有助于在长期内维持代币供需的平衡，确保 $CYS 的稀缺性和价值稳定性。

### **3.4. 质押与治理机制**

质押是 Cysic 经济模型的核心。参与者将 $CYS 锁定以换取 $CGT，这个过程不仅仅是简单的质押，还包含了时间维度的考量。白皮书提到，质押 $CYS 有一个基础的锁定期（例如 6 个月），并且可以延长锁定期以获得更多的治理权和奖励 11。这种“投票托管”（vote-escrowed）模型，最早由 Curve Finance 推广，已被证明是鼓励代币长期持有、减少市场抛压、使参与者利益与协议长期发展保持一致的有效机制。

---

## **4\. 团队、投资者与战略合作**

一个项目的长期成功在很大程度上取决于其背后的团队、资本支持和生态系统整合能力。Cysic 在这三个方面均表现出强大的实力。

### **4.1. 核心团队评估**

Cysic 的创始团队拥有深厚的技术和学术背景，这对于一个深耕于密码学前沿的硬件项目至关重要。

* **创始人**：联合创始人 Leo Fan 拥有康奈尔大学的密码学博士学位，师从著名密码学教授 Elaine Shi；另一位联合创始人 Bowen Huang 则拥有耶鲁大学的博士学位，并曾在中国科学院计算技术研究所工作 7。这种顶级的学术背景为项目的技术研发提供了坚实的理论基础和创新能力。

### **4.2. 投资者深度分析：精英风投的战略价值**

Cysic 已经成功完成了两轮融资，累计筹集资金 1800 万美元，其投资者阵容堪称豪华。

* **融资历程**：项目在 2023 年 2 月完成了由 Polychain Capital 领投的 600 万美元种子轮融资 8。随后在 2024 年 5 月，完成了由 HashKey Capital 和 OKX Ventures 联合领投的 1200 万美元 Pre-A 轮融资 6。  
* **投资者质量**：Cysic 的支持者不仅是财务投资者，更是加密货币领域最具影响力的战略合作伙伴。投资方名单包括 Polychain, HashKey Capital, OKX Ventures, ABCDE, Matrix Partners, SNZ Holding 等顶级风投机构 12。

这种顶级的资本背书不仅为 Cysic 提供了充足的研发资金，更重要的是，它形成了一个强大的“VC 验证与战略合作飞轮”。顶级风投机构往往不会进行孤立的投资，而是围绕其投资组合构建一个协同发展的生态系统。一个典型的例子是，Cysic 的领投方 Polychain Capital 同时也是其核心合作伙伴 Scroll 的主要投资者 8。这种关系并非巧合，而是战略布局的结果。Polychain 在投资了 ZK-Rollup 赛道的头部项目 Scroll 之后，自然会为其寻找解决计算瓶颈的最佳方案。通过投资并撮合 Cysic 与 Scroll 的合作，Polychain 加强了其投资组合中两个关键项目的实力，形成了一加一大于二的效果。

这对 Cysic 而言意义重大。它意味着 Cysic 无需经历漫长而艰难的商业拓展过程，便直接获得了行业内最重要的客户之一，极大地降低了其市场进入的风险。可以预见，随着项目的发展，Cysic 将继续利用其投资者网络，与 HashKey、OKX 等投资方生态内的其他 ZK 项目建立合作关系，从而不断扩大其市场份额。

### **4.3. 生态系统分析：与 Scroll 的共生伙伴关系**

Cysic 最重要和最公开的合作伙伴是 Scroll，一个总锁仓价值（TVL）已接近 10 亿美元的领先以太坊 Layer-2 解决方案 3。这次合作是对 Cysic 技术能力的最好验证。根据公告，Scroll 将其证明任务委托给 Cysic 的 GPU 服务器集群进行处理。这使得 Scroll 能够应对日益增长的交易量，保持其网络的高性能和安全性，同时也为 Cysic 提供了真实世界的大规模用例和潜在的收入来源 9。此外，项目方还提及了与 Aleo, Nil Foundation, Hyper Oracle 等其他 ZK 领域的知名项目建立了合作关系，显示出其广泛的行业整合能力 1。

---

## **5\. 竞争格局与市场定位**

ZK 硬件加速是一个新兴且竞争异常激烈的赛道，Cysic 在其中面临着来自多个维度的挑战。

### **5.1. ZK 硬件加速市场版图**

* **直接竞争对手**：在 ZK 硬件领域，Cysic 的直接竞争者包括 Ingonyama 和 Jump Crypto 支持的项目（其产品如 PipeMSM 和 CycloneMSM 在早期被 Cysic 作为性能对标的对象）8。其他专注于硬件的公司还有 Fabric Cryptography 和 Pi Squared 等 19。在协议层面，提供 ZK 证明市场或协处理服务的项目如 Succinct 和 Axiom 也是其竞争者 19。  
* **间接竞争对手**：科技巨头是不可忽视的力量。Nvidia 的 GPU 目前是 ZK 计算的默认硬件标准，而 AMD 也凭借其 Versal 平台等异构计算方案进入该领域，这些公司拥有强大的研发和生产能力 20。

### **5.2. 核心技术路线之争：GPU vs. FPGA vs. ASIC**

ZK 硬件赛道的核心战略分歧在于对不同硬件路线的选择，每种方案都有其独特的优缺点 2：

* **GPU (图形处理器)**：优点是灵活性高、可编程，能够快速适应新的 ZK 算法。缺点是并非为 ZK 的特定数学运算（如大数域上的模乘）完美优化，且高端型号功耗巨大 21。  
* **FPGA (现场可编程门阵列)**：相比 GPU，FPGA 功耗更低，且可以进行更深度的硬件定制。缺点是开发周期长、难度大，且单位性能的成本通常高于 GPU 2。  
* **ASIC (专用集成电路)**：优点是性能和能效比的极致。一旦设计完成，其计算效率远超 GPU 和 FPGA。缺点是研发成本极高（数千万美元级别），设计周期漫长，且缺乏灵活性——一旦 ZK 算法发生根本性变化，ASIC 芯片可能直接作废 2。

### **5.3. Cysic 的差异化优势**

面对激烈的竞争，Cysic 的核心差异化优势在于其“全栈且多管齐下”的策略。它没有将赌注完全押在任何单一类型的硬件上，而是同时推进 GPU、FPGA 和 ASIC 的解决方案。这种策略使其能够：

1. **短期创收**：通过为 Scroll 等合作伙伴提供基于 GPU 的加速服务，快速产生现金流并验证市场需求 9。  
2. **长期护城河**：将最终目标锁定在研发定制化 ASIC 芯片上，以期在未来获得绝对的性能和成本优势 6。  
3. **网络效应**：将所有硬件能力整合到一个由代币驱动的去中心化网络中，通过网络效应捕获价值，而不是仅仅作为硬件销售商。

这种全面的布局使 Cysic 在应对市场变化时更具韧性，并为其构建了短期和长期相结合的、多层次的竞争壁垒。

---

## **6\. 社区力量与社交情绪**

社区是 Web3 项目的生命线，Cysic 在社区建设和公众沟通方面表现出积极的态势。

### **6.1. 社区参与度分析**

* **Discord**：作为项目的核心社区，Cysic 的 Discord 服务器是技术讨论、测试网支持和获取最新信息的主要场所。服务器内设有专门的邀请码分享和节点设置指南频道，表明社区活跃且在持续增长 23。  
* **Twitter (X) & Medium**：这两个平台是 Cysic 对外发布重大公告、合作进展和深度技术文章的主要渠道 3。其在 Galxe 平台上的活动吸引了超过 23.9 万用户关注，显示出项目具有相当大的市场影响力 24。

### **6.2. 测试网参与度评估**

激励测试网是 Cysic 现阶段最重要的社区活动和增长引擎。项目方采取了分阶段、逐步开放的策略来吸引和管理社区参与。

* **第一阶段**：开放了 1000 个验证者节点名额，通过白名单机制邀请社区成员参与，主要测试网络的基础功能 13。  
* **第二阶段**：进一步开放，邀请拥有更强计算资源的社区成员作为证明者和验证者加入，测试更复杂的 Proof-of-Compute 共识机制 13。

  这种结构化的测试网计划，有效地调动了社区的参与热情，并为未来的主网上线积累了宝贵的运营经验和初始用户基础。

### **6.3. 公共关系与媒体沟通**

Cysic 成功地获得了如 The Block 等主流加密货币媒体的报道，这对于提升项目知名度、建立行业信誉以及吸引潜在的投资者和合作伙伴至关重要 8。

---

## **7\. 综合风险评估**

尽管 Cysic 前景广阔，但投资者必须清醒地认识到其面临的多重风险。

### **7.1. 技术与执行风险**

这是 Cysic 面临的最核心、最重大的风险。其“ASIC 决胜”的战略雄心勃勃，但也将巨大的不确定性集中在 C1 芯片的研发上。ASIC 设计和流片是一个极其复杂且昂贵的过程，任何技术上的失误或生产上的延期都可能对项目造成毁灭性打击 7。同时，要成功交付一个从硬件到软件的全栈解决方案，是对工程团队执行能力的巨大考验，其路线图的实现难度极高。

### **7.2. 市场与竞争风险**

ZK 领域的技术正以前所未有的速度发展。未来可能会出现一种全新的、更高效的 ZK 证明系统，而这种新系统可能与 Cysic 的硬件架构（尤其是固化的 ASIC）不兼容，从而使其技术优势丧失。此外，如前文所述，赛道内的竞争非常激烈，不仅有资金雄厚的初创公司，还有可能入场的半导体巨头，Cysic 需要持续保持其技术领先地位 2。

### **7.3. 安全风险**

作为一个尚未上线主网的项目，Cysic 目前**没有公开发布的安全审计报告** 12。虽然这在项目发展的早期阶段是正常现象，但它意味着其网络的智能合约和节点客户端软件的安全性尚未经过第三方独立验证。一旦主网上线，Cysic 网络存储和处理的价值将使其成为黑客攻击的高价值目标。需要强调的是，在研究过程中，并未发现任何与 Cysic 项目本身相关的负面历史、安全漏洞或争议事件，这本身是一个积极信号，但绝不能替代专业的安全审计 26。

### **7.4. 中心化风险**

为了确保启动阶段的稳定性和效率，Cysic 测试网在早期依赖于一些中心化组件。例如，任务分配由一个中心化的调度器负责，而代理（Agent）角色也是由官方许可的 11。这是一种务实的启动策略，但项目能否按照路线图成功地过渡到一个完全去中心化、无需许可的系统，是衡量其长期价值的一个关键里程碑，也是投资者需要密切关注的进展。

---

## **8\. 可行的投资策略与机会**

本节将前述分析转化为具体、可操作的投资建议，旨在帮助投资者根据自身的风险偏好、资本规模和技术能力，选择最合适的参与方式。

### **8.1. Cysic 投资机会矩阵**

下表系统地梳理了投资 Cysic 的各种潜在途径，并对其进行了多维度比较，为投资者提供决策参考。

| 机会 | 投资类型 | 所需资本 | 所需技能/精力 | 风险等级 | 潜在回报（推测性） | 关键步骤与信息来源 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **激励测试网：验证者节点** | 空投 farming | 低（约每月 10 美元的 VPS 费用） | 中（需遵循命令行指南） | 低 | 空投积分（确认可兑换主网代币）、潜在的生态项目空投 | 遵循官方 Medium 指南设置 VPS 节点。硬件要求极低 5。 |
| **激励测试网：证明者节点** | 空投 farming | 中等（需要中高端 GPU） | 中高（需配置 GPU 环境） | 中低 | 预计比验证者更高的空投积分和奖励 | 关注测试网第二、三阶段公告。为拥有强大计算资源的社区成员设计 3。 |
| **TGE 后代币购买** | 投机/长期持有 | 可变（高） | 低 | 高 | 代币价格增值 | 关注 TGE 公告（预计 2024 年 Q3），在 CEX/DEX 上市后购买，注意初期波动 32。 |
| **$CYS/$CGT 质押** | 收益 farming | 可变（高） | 低 | 中高 | 质押 APY（来自网络费用和通胀奖励） | 主网上线后，将 $CYS 锁定换取 $CGT 以获取收益和治理权 11。 |
| **开发者：构建代理 (Agent)** | 生态参与/收入 | 低至中等 | 高（开发与业务拓展能力） | 高 | 服务费/收入分成 | 关注代理角色无需许可化的进展。为 ZK 项目提供接入 Cysic 网络的服务 11。 |
| **开发者：使用 ZK-CaaS** | 生态参与 | 可变 | 高（开发能力） | 中 | 提升自有应用性能 | 通过 API 调用 Cysic 的硬件加速服务，为自己的应用赋能 8。 |

### **8.2. 主要机会：激励测试网与空投**

**投资逻辑**：这是当前进入 Cysic 生态风险最低、潜在回报率最高的途径。它几乎不需要财务资本投入，但需要一定的时间和技术操作。

* **运行验证者节点**：根据官方发布的指南，参与者可以在一台廉价的云服务器（VPS）上轻松部署验证者节点。其硬件要求极低（单核 CPU, 512MB 内存），使得参与门槛非常亲民 5。参与者通过验证任务可以获得积分，这些积分已由官方确认将在主网上线后按一定比例兑换为 $CYS 代币 13。  
* **运行证明者节点**：这是为拥有更强大硬件（尤其是中高端 GPU）的用户准备的进阶参与方式。预计在测试网的后续阶段开放，其奖励的积分数量也可能远高于验证者节点 3。  
* **最大化策略**：建议积极参与所有测试网阶段，完成 Galxe 等平台上的社交任务以获得白名单或额外积分 16，并利用官方的推荐计划邀请更多用户，从而最大化最终的空投收益 14。

### **8.3. 次要机会：TGE 后代币购买**

**投资逻辑**：对于不愿参与技术操作、但看好项目长期发展并希望获得直接代币敞口的投资者。

* **估值分析**：基于其 1800 万美元的总融资额，可以推断其在 TGE 时的初始完全稀释估值（FDV）可能在 2 亿至 5 亿美元的区间内。投资者可将此作为参考，与其他基础设施类项目进行横向对比，以判断价格是否合理。  
* **参与策略**：密切关注项目的 TGE（代币生成事件）公告。ICO Drops 网站预测可能在 2024 年第三季度 32。准备在代币首次登陆中心化（CEX）或去中心化（DEX）交易所时买入，但必须为初期的高波动性做好心理和资金准备。

### **8.4. 三级机会：DeFi 收益耕作（推测性）**

**投资逻辑**：在主网上线后，利用 Cysic 的原生代币参与 DeFi 活动以产生被动收益。

* **原生质押**：Cysic 的双代币模型的核心就是质押。将 $CYS 锁定以换取 $CGT 将是获取网络基础收益（APY）和治理权的主要方式 11。APY 的高低将取决于网络捕获的费用和通胀率。  
* **高级策略**：可以预见，主网上线后，去中心化交易所上会出现 $CYS 与 ETH 或稳定币的流动性池。为这些池子提供流动性将是另一种获取收益的方式。更具想象力的是，如果未来出现基于 $CGT 的流动性质押衍生品，可能会解锁更复杂的杠杆挖矿等高级策略。

### **8.5. 专家机会：面向开发者的生态参与**

**投资逻辑**：对于具备开发背景的投资者，这提供了超越单纯代币投机、直接从网络效用中获利的机会。

* **使用 ZK-CaaS API**：Cysic 明确表示将通过 API 调用的方式提供其硬件加速服务 8。开发者可以构建自己的应用程序，并将其中计算密集的 ZK 证明部分外包给 Cysic 网络处理。  
* **成为“代理”**：“代理”角色未来将无需许可化 11。开发者可以创建专门的代理服务，帮助特定的、小众的 ZK 项目接入 Cysic 网络，并从中收取服务费或收入分成。  
* **创建计算支持的资产**：Cysic 官网提到了“数字计算”（Digital Compute）的概念，并将其描述为“作为流动性、可产生收益的资产的计算能力” 1。这暗示了一个更遥远的未来，开发者或许能够将特定的计算资源（例如一个高度优化的证明者节点）代币化，并在网络上进行交易或租赁，从而创造新的收入模式。

---

## **9\. 结论与最终投资论点**

### **9.1. 核心发现综合**

Cysic 是一个定位精准、战略明确的 Web3 基础设施项目。它瞄准了 ZK 计算这一未来区块链发展的核心赛道，并采取了极具雄心的全栈式发展路径。

* **优势**：其核心优势在于拥有世界级的技术团队、顶级风投的鼎力支持、以及与头部项目 Scroll 的深度绑定。这为其技术研发、资金保障和市场推广奠定了坚实的基础。其精巧的双代币经济模型和创新的 PoC 共识机制也显示出团队在经济和治理设计上的深思熟虑。  
* **风险**：其主要风险集中在技术执行层面。ASIC 芯片的研发是一场成败在此一举的豪赌。同时，ZK 领域日新月异的技术变革和激烈的市场竞争也带来了巨大的外部不确定性。安全审计的缺失和网络初期的中心化问题是短期内需要关注的风险点。

### **9.2. 看涨情景 (Bull Case)**

在最乐观的情况下，Cysic 成功按时交付其高性能、低功耗的 C1 ASIC 芯片，利用其全栈护城河，成为市场上最高效、成本最低的 ZK-CaaS 提供商。随着 ZK-Rollups 成为以太坊乃至整个区块链世界的主流扩容方案，对 ZK 计算的需求呈指数级增长，Cysic 作为底层计算能力的核心供应商，将捕获巨大的网络价值，其代币 $CYS 也将成为代表 ZK 计算能力的“数字石油”。

### **9.3. 看跌情景 (Bear Case)**

在最悲观的情况下，Cysic 的 ASIC 研发遭遇重大挫折或严重延期，使其错失市场窗口。或者，竞争对手（无论是初创公司还是科技巨头）推出了更优越的技术方案。再或者，ZK 证明算法出现了颠覆性变革，使得 Cysic 的硬件架构变得不再适用。在这些情况下，项目可能难以实现其商业目标，导致投资价值大幅缩水。

### **9.4. 最终投资评级**

**建议 (Recommend)**

**评级理由**：综合来看，Cysic 是一个典型的高风险、高潜在回报的项目。其所处的赛道具备巨大的增长空间，团队和资本背景均为顶级，战略路径清晰。尽管其面临的执行风险和市场风险不容忽视，但当前通过参与激励测试网获取空投的方式，为投资者提供了一个极具吸引力的非对称回报机会——投入极低的成本（时间、精力、少量 VPS 费用），即有机会分享一个未来潜在的巨型网络的部分价值。

对于愿意承担中高风险的投资者，在 TGE 后，根据市场估值情况，分批建仓购买 $CYS 代币作为长期持有仓位，也是一个值得考虑的策略。对于具备开发能力的投资者，积极探索其生态的构建机会，可能带来超额回报。

---

## **10\. 参考文献**

1

#### **引用的著作**

1. Cysic, 访问时间为 七月 16, 2025， [https://cysic.xyz/](https://cysic.xyz/)  
2. ZK Hardware Acceleration: The Past, the Present and the Future \- HackMD, 访问时间为 七月 16, 2025， [https://hackmd.io/@Cysic/BJQcpVbXn](https://hackmd.io/@Cysic/BJQcpVbXn)  
3. Cysic Powers Scroll with High-Performance ZK Computing to Scale Ethereum Layer 2, 访问时间为 七月 16, 2025， [https://medium.com/@cysic/cysic-powers-scroll-with-high-performance-zk-computing-to-scale-ethereum-layer-2-b31653d44059](https://medium.com/@cysic/cysic-powers-scroll-with-high-performance-zk-computing-to-scale-ethereum-layer-2-b31653d44059)  
4. Cysic, 访问时间为 七月 16, 2025， [https://www.cysic.xyz/media-kit](https://www.cysic.xyz/media-kit)  
5. Join the Cysic Testnet as a Verifier \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@cysic/join-the-cysic-testnet-as-a-verifier-7b9f31674b41](https://medium.com/@cysic/join-the-cysic-testnet-as-a-verifier-7b9f31674b41)  
6. Zero-Knowledge (ZK) Hardware Acceleration Startup Cysic Raises $12M in Pre-A Round To Advance the ZK Revolution \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@cysic/zero-knowledge-zk-hardware-acceleration-startup-cysic-raises-12m-in-pre-a-round-to-advance-the-4d8eb7fc611c](https://medium.com/@cysic/zero-knowledge-zk-hardware-acceleration-startup-cysic-raises-12m-in-pre-a-round-to-advance-the-4d8eb7fc611c)  
7. How ZK Proof Startup Cysic Breakthrough in the ZK Hardware Acceleration Roadmap, 访问时间为 七月 16, 2025， [https://www.binance.com/en-IN/square/post/239588](https://www.binance.com/en-IN/square/post/239588)  
8. Polychain leads ZK chip startup Cysic's $6 million raise | The Block, 访问时间为 七月 16, 2025， [https://www.theblock.co/post/212613/polychain-leads-zk-chip-startup-cysics-6-million-raise](https://www.theblock.co/post/212613/polychain-leads-zk-chip-startup-cysics-6-million-raise)  
9. Cysic enhances Scroll's ZK rollup efficiency with advanced hardware integration | The Block, 访问时间为 七月 16, 2025， [https://www.theblock.co/post/320976/cysic-enhances-scrolls-zk-rollup-efficiency-with-advanced-hardware-integration](https://www.theblock.co/post/320976/cysic-enhances-scrolls-zk-rollup-efficiency-with-advanced-hardware-integration)  
10. Hardware \- Cysic, 访问时间为 七月 16, 2025， [https://cysic.xyz/hardware](https://cysic.xyz/hardware)  
11. Cysic Network Litepaper \- HackMD, 访问时间为 七月 16, 2025， [https://hackmd.io/@Cysic/r1BTsjB4R](https://hackmd.io/@Cysic/r1BTsjB4R)  
12. Cysic crypto Complete Analysis | Review, Rating & Stats \- Coinlaunch, 访问时间为 七月 16, 2025， [https://coinlaunch.space/projects/cysic-network/](https://coinlaunch.space/projects/cysic-network/)  
13. Introduction of Cysic Network \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@cysic/introduction-of-cysic-network-86d5268e9df3](https://medium.com/@cysic/introduction-of-cysic-network-86d5268e9df3)  
14. Announcing Cysic Network Phase II: Genesis Node \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@cysic/announcing-cysic-network-phase-ii-genesis-node-9142405af350](https://medium.com/@cysic/announcing-cysic-network-phase-ii-genesis-node-9142405af350)  
15. \#29: Leo Fan, Co-founder of Cysic \- YouTube, 访问时间为 七月 16, 2025， [https://www.youtube.com/watch?v=Fv2syqLit80](https://www.youtube.com/watch?v=Fv2syqLit80)  
16. Cysic Airdrop : 100 USDT and OAT to ZK Fam \- Galxe, 访问时间为 七月 16, 2025， [https://app.galxe.com/quest/Cysic/GCzCRtTCC2](https://app.galxe.com/quest/Cysic/GCzCRtTCC2)  
17. Cysic 2025 Company Profile: Valuation, Funding & Investors | PitchBook, 访问时间为 七月 16, 2025， [https://pitchbook.com/profiles/company/520098-22](https://pitchbook.com/profiles/company/520098-22)  
18. pitchbook.com, 访问时间为 七月 16, 2025， [https://pitchbook.com/profiles/company/520098-22\#:\~:text=Bit%20Digital%2C%20CoinSwitch%2C%20IDGX%2C,who%20have%20invested%20in%20Cysic.](https://pitchbook.com/profiles/company/520098-22#:~:text=Bit%20Digital%2C%20CoinSwitch%2C%20IDGX%2C,who%20have%20invested%20in%20Cysic.)  
19. Cysic Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 16, 2025， [https://www.rootdata.com/Projects/detail/Cysic?k=NjU5NA%3D%3D](https://www.rootdata.com/Projects/detail/Cysic?k=NjU5NA%3D%3D)  
20. Elliptic Curve ZK-Proof Acceleration on AMD Versal \- Irreducible, 访问时间为 七月 16, 2025， [https://www.irreducible.com/posts/elliptic-curve-acceleration-amd-versal](https://www.irreducible.com/posts/elliptic-curve-acceleration-amd-versal)  
21. Revisiting Paradigm “Hardware Acceleration for Zero Knowledge Proofs” \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@omershlomovits/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs-16f717a49555](https://medium.com/@omershlomovits/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs-16f717a49555)  
22. ZK Score \- ZK hardware ranking standard \- ZKProof Standards, 访问时间为 七月 16, 2025， [https://zkproof.org/2023/10/23/zk-score-blog/](https://zkproof.org/2023/10/23/zk-score-blog/)  
23. Phase II: Genesis Node Verifier Guide | by Cysic \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@cysic/phase-ii-genesis-node-verifier-guide-6a09720cba4e](https://medium.com/@cysic/phase-ii-genesis-node-verifier-guide-6a09720cba4e)  
24. Join Cysic Discord, Become a Cysor by Cysic | Galxe Quest, 访问时间为 七月 16, 2025， [https://app.galxe.com/quest/Cysic/GC5YDtz5nM](https://app.galxe.com/quest/Cysic/GC5YDtz5nM)  
25. Cysic Launches Incentive Testnet and Points System \- Binance, 访问时间为 七月 16, 2025， [https://www.binance.com/en/square/post/2024-07-29-cysic-launches-incentive-testnet-and-points-system-11452239530961](https://www.binance.com/en/square/post/2024-07-29-cysic-launches-incentive-testnet-and-points-system-11452239530961)  
26. Cyble Reports New Critical ICS and IT Vulnerabilities, 访问时间为 七月 16, 2025， [https://cyble.com/blog/cyble-reports-critical-ics-and-it-vulnerabilities/](https://cyble.com/blog/cyble-reports-critical-ics-and-it-vulnerabilities/)  
27. CISA Adds Four Critical Vulnerabilities to KEV Catalog Due to Active Exploitation, 访问时间为 七月 16, 2025， [https://thehackernews.com/2025/07/cisa-adds-four-critical-vulnerabilities.html](https://thehackernews.com/2025/07/cisa-adds-four-critical-vulnerabilities.html)  
28. Security vulnerability on U.S. trains that let anyone activate the brakes on the rear car was known for 13 years — operators refused to fix the issue until now | Tom's Hardware, 访问时间为 七月 16, 2025， [https://www.tomshardware.com/tech-industry/cyber-security/security-vulnerability-on-u-s-trains-that-let-anyone-activate-the-brakes-on-the-rear-car-was-known-for-13-years-operators-refused-to-fix-the-issue-until-now](https://www.tomshardware.com/tech-industry/cyber-security/security-vulnerability-on-u-s-trains-that-let-anyone-activate-the-brakes-on-the-rear-car-was-known-for-13-years-operators-refused-to-fix-the-issue-until-now)  
29. Known Exploited Vulnerabilities Catalog | CISA, 访问时间为 七月 16, 2025， [https://www.cisa.gov/known-exploited-vulnerabilities-catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)  
30. Kaspersky identifies significant security risks in widely used Cinterion modems, 访问时间为 七月 16, 2025， [https://www.kaspersky.com/about/press-releases/kaspersky-identifies-significant-security-risks-in-widely-used-cinterion-modems](https://www.kaspersky.com/about/press-releases/kaspersky-identifies-significant-security-risks-in-widely-used-cinterion-modems)  
31. Cysic Guide Node (Verifire) \- Medium, 访问时间为 七月 16, 2025， [https://medium.com/@fmusicmc/cysic-guide-node-verifire-prover-90f2dc0b3070](https://medium.com/@fmusicmc/cysic-guide-node-verifire-prover-90f2dc0b3070)  
32. Cysic \- All information about Cysic ICO (Token Sale) \- ICO Drops, 访问时间为 七月 16, 2025， [https://icodrops.com/cysic/](https://icodrops.com/cysic/)  
33. Cysic Node Incentive Plan: Low threshold and high return, se | 大智慧讲堂 on Binance Square, 访问时间为 七月 16, 2025， [https://www.binance.com/en/square/post/11521749499346](https://www.binance.com/en/square/post/11521749499346)  
34. Cykura price today, CYS to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 16, 2025， [https://coinmarketcap.com/currencies/cyclos/](https://coinmarketcap.com/currencies/cyclos/)  
35. Chapter 1: Cysic —— ZK Compute-as-a-Service NFT Price & Sales \- CoinMarketCap, 访问时间为 七月 16, 2025， [https://coinmarketcap.com/nft/collections/polygon/0x51f4fee57aff59caa2733d9f171aef57241f7ef4/Chapter%201:%20Cysic%20%E2%80%94%E2%80%94%20ZK%20Compute-as-a-Service/](https://coinmarketcap.com/nft/collections/polygon/0x51f4fee57aff59caa2733d9f171aef57241f7ef4/Chapter%201:%20Cysic%20%E2%80%94%E2%80%94%20ZK%20Compute-as-a-Service/)  
36. Cysic \- CRYPTO fundraising, 访问时间为 七月 16, 2025， [https://crypto-fundraising.info/projects/cysic/](https://crypto-fundraising.info/projects/cysic/)  
37. sipalingnode/SIPALING-NODE \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/sipalingnode/SIPALING-NODE](https://github.com/sipalingnode/SIPALING-NODE)  
38. Pull requests · chainapsis/keplr-chain-registry \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/chainapsis/keplr-chain-registry/pulls](https://github.com/chainapsis/keplr-chain-registry/pulls)  
39. cysic-labs/phase2\_libs \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/cysic-labs/phase2\_libs](https://github.com/cysic-labs/phase2_libs)  
40. Cysic Airdrop guide: Steps to potential Reward | CryptoRank.io, 访问时间为 七月 16, 2025， [https://cryptorank.io/drophunting/cysic-activity187](https://cryptorank.io/drophunting/cysic-activity187)  
41. Contact Us \- Cysic, 访问时间为 七月 16, 2025， [https://cysic.xyz/contactus](https://cysic.xyz/contactus)  
42. Concluding the ZPrize 1B Track: Advancing ZK Hardware Acceleration | by Cysic | Medium, 访问时间为 七月 16, 2025， [https://medium.com/@cysic/introducing-zprize-driving-open-source-advancements-in-zk-hardware-acceleration-44fcbcf92ef6](https://medium.com/@cysic/introducing-zprize-driving-open-source-advancements-in-zk-hardware-acceleration-44fcbcf92ef6)  
43. cysic-labs/cosmos-sdk \- GitHub, 访问时间为 七月 16, 2025， [https://github.com/cysic-labs/cosmos-sdk](https://github.com/cysic-labs/cosmos-sdk)