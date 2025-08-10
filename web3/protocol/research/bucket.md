

# **Bucket Protocol 深度投资分析报告：驾驭Sui生态的高TVL与高争议**

## **执行摘要**

本报告旨在对Sui生态系统中的DeFi项目Bucket Protocol进行全面、深入的投资尽职调查。作为Sui网络上领先的抵押债务头寸（CDP）协议之一，Bucket Protocol凭借其超过1亿美元的总锁定价值（TVL）和可观的协议收入，展现了强大的产品市场契合度。其核心产品——允许用户以零利息借入与美元挂钩的稳定币$BUCK——具有显著的资本效率优势，吸引了大量资本。

然而，该项目强劲的链上指标与其治理层面存在的严重问题形成了鲜明对比。项目的治理代币$BUT的发布过程充满了争议，社区中存在关于团队进行“拉盘砸盘”（Rugpull）的严重且具体的指控，这些指控至今未得到项目方令人信服的公开回应。此外，项目团队的高度匿名性进一步加剧了治理风险。

本报告将系统性地解构Bucket Protocol的技术架构、双代币经济模型、市场表现和竞争格局。报告的核心将聚焦于风险评估，特别是对安全审计的解读以及对$BUT代币发布争议的深入调查。最后，报告将为潜在投资者提供一份详尽的投资机会与策略分析，涵盖从代币购买到高级收益耕作及开发者参与的各类途径，并对每种策略的风险与回报进行量化对比。

综合所有分析，本报告的最终结论是：尽管Bucket Protocol的底层技术和产品表现出强大的吸引力，但其团队诚信和治理结构中存在的根本性、未解决的风险，使得对其治理代币（$BUT）的投资具有极高的不确定性和潜在损失。因此，对于寻求治理权或代币增值机会的投资者，本报告持**强烈不建议**的评级。对于仅希望利用其协议功能进行收益耕作的高风险偏好投资者，本报告持**中立/不建议**的评级，并强调其中存在的、由团队诚信问题带来的不可量化尾部风险。

---

## **I. 协议概述：解构Sui上的DeFi引擎**

Bucket Protocol将自身定位为Sui网络上的“DeFi引擎” 1，其核心是一个抵押债务头寸（Collateralized Debt Position, CDP）协议。该模型允许用户通过存入接受的加密资产作为抵押品，以零利率或极低利率借出协议的原生稳定币$BUCK 1。这一机制在概念上与以太坊上的MakerDAO类似，旨在成为Sui生态系统内的核心流动性与信贷层。

### **A. 核心功能：抵押债务头寸（CDP）协议**

Bucket Protocol的核心操作围绕着用户创建和管理其个人CDP展开，协议中将其称为“瓶子”（Bottle）5。用户将Sui生态系统接受的各类资产，如$SUI、$BTC、$ETH以及流动性质押代币（LSTs），存入其“瓶子”中作为抵押品 6。

一旦抵押品存入，用户便可以借出与美元挂钩的稳定币BUCK。为了维持系统的偿付能力，每个“瓶子”都必须维持一个最低抵押率（MinimumCollateralRatio,MCR）。该比率通常设定为110BUCK价值的1.1倍。如果抵押品价值因市场波动而下跌，导致抵押率低于MCR，该“瓶子”将面临清算风险。

值得注意的是，该协议宣传的“DeFi引擎”定位并非空谈。除了作为独立的借贷平台，Bucket Protocol还提供了开源的TypeScript SDK（软件开发工具包）1 和一个“稳定币兑换SDK” 9。这表明其战略意图是成为一个B2B2C（企业对企业对消费者）的基础设施层，为其他去中心化应用（dApps）或前端运营商提供底层的流动性和稳定币服务。这种策略虽然扩大了其潜在市场，但也引入了对合作伙伴和生态整合的依赖风险。投资者不仅需要评估Bucket协议本身，还需考量其所服务的整个生态系统的健康状况。

### **B. 关键技术组件与稳定性机制**

为了确保协议的稳健运行和$BUCK稳定币的价格稳定，Bucket Protocol设计了几个关键的技术模块：

* **稳定池（The Tank）**: 这是一个包含用户存入的BUCK的资金池，其主要功能是作为系统的第一道防线，用于吸收被清算头寸产生的债务。当一个“瓶子”被清算时，稳定池中的BUCK将被用来偿还该头寸的债务。作为回报，稳定池的存款人（即$BUCK的质押者）将获得被清算头-寸的抵押品，且通常能以低于市场价的折扣购得。这一机制激励用户为协议提供偿付能力缓冲，同时也能从中获利 1。  
* **价格稳定模块（Peg Stability Module, PSM）**: PSM是维持BUCK与美元1:1锚定的关键工具\[9\]。它允许用户以接近1:1的固定汇率将BUCK与其他受信任的稳定币（如USDC）进行互换。当BUCK的市场价格低于1美元时，套利者可以从市场上低价买入BUCK，通过PSM将其兑换为价值1美元的USDC，从而获利并将BUCK价格推回锚定点。反之亦然。这为BUCK的价格提供了强有力的直接套利稳定机制。  
* **清算机制（Liquidation Mechanism）**: 协议采用实时清算流程，以确保系统的整体健康。当任何CDP的抵押率跌破最低要求时，自动化智能合约将触发清算程序 7。部分抵押品将被出售（通常出售给稳定池），以偿还未偿还的  
  BUCK债务，并支付一笔清算罚金。这一过程旨在迅速移除风险头寸，防止坏账累积，从而保护协议和BUCK持有者的利益。

### **C. 在Sui区块链上的价值主张**

Bucket Protocol选择构建在Sui网络上，旨在利用其独特的技术优势。Sui区块链以其高吞吐量、低延迟和低廉的交易费用而著称，这对于需要频繁进行微交易和仓位管理的DeFi协议尤为重要 11。用户可以以较低的成本开设、调整和关闭他们的CDP，而不会像在以太坊主网那样受到高昂Gas费用的困扰。

此外，协议支持多样化的抵押品类型，包括Sui的原生代币$SUI、主流加密资产的封装版本（如BTC和ETH）以及各种流动性质押代币（LSTs）6。这种灵活性使用户能够最大化其资产的资本效率，无需出售其持有的资产即可获得流动性，这构成了Bucket Protocol在Sui生态中的核心价值主张。

---

## **II. 双代币经济模型：深入剖析BUCK与BUT**

Bucket Protocol的生态系统由两种核心代币驱动：稳定币BUCK和治理代币BUT。这两种代币在协议中扮演着截然不同但相互关联的角色，对它们的深入理解是评估该项目投资价值的关键。

### **A. 稳定币：$BUCK**

$BUCK是协议的原生稳定币，其设计目标是与美元（USD）保持1:1的价值锚定 2。它是用户通过抵押资产从协议中借出的主要媒介。

* **市场数据与锚定稳定性**: 根据多个数据平台的信息，$BUCK的市值大约在5000万至6000万美元之间浮动，显示出一定的市场规模 13。其日交易量通常保持在数百万美元的水平，表明其在Sui生态内具有良好的流动性和使用场景 6。  
* **合约地址 (Sui)**: 0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK 7。

然而，对BUCK历史价格的分析揭示了一个显著的风险点。尽管其设计目标是稳定，但历史数据显示BUCK曾经历过剧烈的价格波动。其历史最低价曾跌至约0.61美元，而最高价则触及约1.31美元 7。对于一个旨在作为可靠交换媒介和价值储存工具的稳定币而言，超过30%的价格偏离是一个严重的警示信号。这表明，在某些市场条件下，协议的稳定性机制（如PSM和稳定池）可能不足，或者其交易对在去中心化交易所（DEX）上的流动性深度有限，无法承受巨大的买卖压力。对于投资者和用户而言，这意味着持有$BUCK并非无风险地持有美元等价物，它本身带有市场风险和波动性，尤其是在极端市场事件中。这在一定程度上削弱了其作为“稳定”资产的核心价值。

### **B. 治理代币：$BUT**

$BUT是Bucket Protocol的治理代币，理论上赋予持有者对协议未来发展的投票权。

* **代币经济学与ICO**: BUT的总供应量为10亿枚\[5,17\]。项目在2025年1月进行了一次首次代币发行（ICO），以约0.005美元的价格出售了占总供应量15BUT 5。  
* **市场数据**: 与协议高昂的TVL形成鲜明对比的是，$BUT的市场表现异常疲软。其市值仅在500万美元左右徘徊，而24小时交易量常常低至数千美元 5。极低的交易量表明市场对该代币缺乏兴趣，流动性极差，任何稍大的买卖订单都可能导致剧烈的价格波动。  
* **合约地址 (Sui)**: 0xbc858cb910b9914bee64fff0f9b38855355a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a040c49155a-040c-4915-5a17-b265d9086d256545::but::BUT 5。  
* **$BUT代币发行争议**: 这是整个项目最致命的风险因素。一份在Reddit社区广为流传的帖子详细指控了项目团队在$BUT代币上线初期的不当行为 19。主要指控包括：  
  1. **价格操纵**：代币在Cetus交易所上线后，价格在几分钟内从0.12美元暴跌至0.01美元。  
  2. **内部人员抛售**：一个被指认为从团队处接收了数百万代币的钱包地址，在上线后立即成为最大的抛售者。  
  3. **创始人失职或欺骗**：创始人Damien Chen被指对此的解释是自己“不了解做市商如何运作”，这一理由被社区认为是荒谬或虚假的。  
  4. **空投操纵**：团队被指控故意推迟了空投的申领时间，以便他们可以先于社区成员卖出自己的代币。

这些指控的严重性和具体性（点名创始人、指出钱包行为）构成了对团队诚信的根本性质疑。更为关键的是，在所有可检索的公开信息中，均未发现项目团队对此事做出任何正式、详尽、令人信服的回应。这种沉默或回避行为本身就是一种严重的治理失职，它在投资者和项目方之间制造了巨大的信息鸿沟和信任危机。任何对$BUT的投资，都无异于直接押注于一个声誉严重受损且缺乏透明度的团队。

---

## **III. 市场与生态系统分析：衡量Bucket的竞争地位**

尽管治理层面存在阴云，但Bucket Protocol在链上数据和市场采用方面却表现出令人瞩目的成绩。这种矛盾现象是评估该项目的核心。

### **A. 链上表现回顾**

* **总锁定价值 (TVL)**: Bucket Protocol的TVL持续稳定在1亿美元以上，这使其稳居Sui生态DeFi协议的前列 10。根据DeFi Llama的最新数据，它在Sui链上排名第六 20。高TVL通常代表着市场对协议产品的高度信任和资本的认可。  
* **协议收入与费用**: 协议产生了可观的收入，年化费用预计达到数百万美元（一份数据显示为461万美元）10。目前，所有协议费用都直接转化为协议收入，尚未有与代币持有者分享的机制 10。这表明协议具有强大的自我造血能力。  
* **用户指标**: 虽然缺乏直接的用户数量统计，但高TVL和收入数据间接证明了协议拥有相当规模的用户基础和活跃的资本活动。

这种链上数据的成功与治理代币的失败和团队声誉的污点之间，形成了一个“产品-市场契合悖论”。为什么用户会将数亿美元的资金托付给一个团队声誉备受质疑的协议？可能的解释有三点：

1. **信息不对称**：大量用户可能只关注BUCK的借贷功能，而对BUT的治理争议一无所知。  
2. **雇佣资本 (Mercenary Capital)**：进入协议的资本可能是纯粹的收益驱动型资本，被其零利率贷款的高资本效率所吸引，愿意承担团队风险以换取潜在的高回报。这类资本的忠诚度低，一旦出现问题或有更高收益的机会，可能会迅速撤离。  
3. **信任分层**：用户可能相信智能合约在处理其抵押品方面的不可篡改性，但并不信任团队在治理代币方面的行为。这是一种看似合理但非常脆弱的平衡。

这一悖论表明，Bucket Protocol目前的成功主要由其产品效用驱动，而非社区力量或治理强度。这是一个重大的长期隐患，因为缺乏社区支持的协议在危机中往往更加脆弱。

### **B. Sui生态系统竞争格局**

Bucket Protocol在Sui生态中并非一家独大，它面临着来自其他头部借贷协议的激烈竞争。

* **直接竞争对手 (借贷/CDP)**:  
  * **NAVI Protocol**: Sui生态中的另一个主要借贷协议，其模式受Aave启发，是Bucket的强力竞争对手 21。  
  * **Suilend**: Solend协议在Sui上的延伸，作为Solana生态的头部借贷协议，其团队经验和品牌认知度是其主要优势 22。  
  * **Scallop**: Sui上的一个点对点货币市场，同样提供借贷服务 12。

为了更清晰地展示Bucket Protocol的竞争地位，下表对其与主要竞争对手进行了横向对比：

| 特性 | Bucket Protocol | NAVI Protocol | Suilend | Scallop |
| :---- | :---- | :---- | :---- | :---- |
| **核心模型** | 抵押债务头寸 (CDP) | 资金池借贷 (Aave-like) | 资金池借贷 (Solend-like) | 点对点货币市场 |
| **TVL (DeFi Llama)** | \~$1.13亿 20 | \~$7.08亿 20 | \~$7.68亿 20 | \~$1.12亿 20 |
| **主要产品** | 铸造稳定币$BUCK | 借贷多种资产 | 借贷多种资产 | 借贷多种资产 |
| **治理代币** | $BUT | $NAVX | $SEND | $SCA |
| **已知争议/风险** | $BUT代币发行存在“拉盘砸盘”指控，团队匿名 | 相对较少公开争议 | 相对较少公开争议 | 相对较少公开争议 |

从上表可以看出，尽管Bucket Protocol的TVL可观，但与Suilend和NAVI Protocol相比仍有较大差距。其独特的CDP模型（铸造稳定币）是其与竞争对手（主要是资金池借贷模型）的主要差异化特征。然而，其在治理和团队声誉方面的负面记录是其最明显的短板。

---

## **IV. 风险评估：审计、指控与信息不对称**

对Bucket Protocol的风险评估必须超越传统的智能合约层面，深入到团队行为和治理结构的核心。

### **A. 正式安全审计**

Bucket Protocol的智能合约已经通过了**OtterSec**和**MoveBit**的审计 2。这两家公司都是在Move语言生态系统中享有良好声誉的专业安全公司，其审计工作为协议的安全性提供了一定程度的保障 24。

项目方在其GitHub仓库中公开了审计报告的PDF文件，供公众查阅 23。这是一个积极的透明度举措。然而，必须清醒地认识到安全审计的局限性。审计主要检查代码层面是否存在技术漏洞，如重入攻击、逻辑错误、整数溢出等，但它无法评估或担保项目团队的诚信 26。审计无法阻止团队进行恶意的中心化操作，例如利用预挖的代币进行市场操纵。

因此，对于Bucket Protocol而言，其核心风险并非来自未被发现的技术漏洞（尽管这种风险永远存在），而是来自**团队风险**。将审计报告作为协议绝对安全的证明是一种误导。投资者必须将经过审计、看似安全的代码与未经审计、声誉存疑的团队并置权衡。

### **B. “$BUT拉盘砸盘”争议（重申）**

这一争议是评估该项目时无法回避的核心问题。Reddit帖子中的指控极其严重，直指团队可能存在欺诈行为 19。在缺乏团队官方、透明且令人满意的解释的情况下，这一事件对项目的可信度造成了毁灭性打击。它留下了一片巨大的不确定性阴云，这不仅会长期压制$BUT代币的价值，也为整个协议的未来埋下了隐患。如果一个团队被指控曾有过此类行为，投资者无法排除其未来再次采取恶意行动的可能性，例如通过恶意的治理提案、再次操纵市场，或者在耗尽协议价值后直接放弃项目。

### **C. 智能合约与预言机风险**

与所有DeFi协议一样，Bucket Protocol仍面临标准的智能合约风险，即可能存在审计未能发现的未知漏洞。

此外，协议的正常运行高度依赖于预言机（Oracle）提供的外部价格数据，以确定抵押品的价值并触发清算 2。项目曾提及与SupraOracles的合作关系 2。如果预言机出现故障、被攻击或被操纵，可能会导致大规模的不当清算，给用户带来灾难性的资金损失。这是所有CDP类协议共有的系统性风险。

---

## **V. 团队、背景与开发速度**

一个项目的长期价值最终取决于其背后的团队。对Bucket Protocol团队的调查揭示了其在透明度和专业背景方面的显著不足。

### **A. 核心团队调查**

Bucket Protocol的团队结构极其不透明。官方渠道缺乏一个正式的团队介绍页面，没有提供核心成员的可验证身份信息或过往的专业履历（如LinkedIn档案）。

* **Damien Chen**: 在Reddit的争议帖子中被指认为项目的创始人/开发者 19。他也作为Bucket Protocol的成员，与他人共同署名发表了一篇关于Sui网络上抽奖系统的研究论文 28。然而，在公共平台上（如GitHub和ResearchGate）搜索到的“Damien Chen”的个人资料似乎与此项目无关，这表明该创始人可能使用化名或公开信息极为有限 30。  
* **Pierce (ilmondo)**: 被列为项目的联合创始人，并曾在2023年台北区块链周上作为演讲嘉宾 32。这表明他是另一位关键人物，但关于他的详细信息同样匮乏。  
* **其他成员**: 一份在台北招聘技术负责人的信息显示了团队的地理位置 33。前述研究论文还列出了Eason Chen、Justa Liang、Ray Huang、Pierce Hung和Ashley Hsu等人为Bucket Protocol的成员 28。

团队的匿名或化名状态，在加密货币领域并不罕见，但这本身就是一种风险。当这种匿名性与严重的欺诈指控相结合时，风险便被急剧放大。一个匿名的团队没有现实世界的声誉作为抵押，这大大降低了其作恶的成本和顾虑。一旦出现问题，投资者几乎没有追索权，也找不到可以问责的对象。

### **B. 开发活动分析**

项目在GitHub上维护了多个公共代码库，包括核心的SDK bucket-protocol-sdk、sui-dapp-scaffold-v1 以及其他功能模块的合约代码 3。

对bucket-protocol-sdk代码库的提交历史分析显示，近期仍有活跃的开发活动，包括版本更新、错误修复和新功能添加。这表明项目至少在技术层面处于持续维护状态。然而，部分其他代码库（如sui-dapp-scaffold-v1）的更新已停滞数月，或者在访问其提交历史时出现错误 3。

这可能暗示团队规模较小，资源有限，只能将精力集中在维护核心产品上，而无力推动更广泛的生态系统扩展。这可以被解读为一个中性偏负面的信号，表明项目的发展可能受限于其团队的规模和资源。

### **C. 路线图与未来展望**

根据项目方公布的路线图，未来的计划包括推出DApp V2、引入利率模型、整合真实世界资产（RWA）、开发治理工具以及进行多链整合 2。其中一个关键的里程碑是在2024年第二至第三季度

**推出$BKT代币** 2。

这里的“BKT”代币很可能就是当前以BUT交易的治理代币的正式名称或品牌重塑。考虑到$BUT初次发行时产生的巨大争议，任何未来的代币相关事件都将笼罩在这片阴影之下。这会是一次重新发行吗？团队将如何处理最初的代币分配问题和社区指控？这是一个需要投资者密切关注的关键事件，其中蕴含着巨大的风险和不确定性。

---

## **VI. 社区健康与社会情绪**

社区是DeFi协议的护城河和生命力来源。对Bucket Protocol的社区分析显示，其社交层与其链上表现严重不匹配。

### **A. 社交媒体表现**

项目在Twitter、Discord和Telegram等主流平台均设有官方渠道 3。然而，其社区规模与其TVL极不相称。Discord和Telegram频道的成员数量都仅在1000人左右 35。

一个TVL过亿美元的协议，理论上应该拥有一个数万甚至数十万成员的活跃社区。Bucket Protocol社区规模之小，表明其用户基础主要是“用户”，而非“社区成员”。他们使用协议的功能，但缺乏归属感和参与感。这种薄弱的社交层使得协议在面临危机时缺乏社区的自发性支持和防御，也使得资本更容易流失。

### **B. 社会情绪分析**

对社会情绪的分析描绘了一幅由“冷漠”和“鄙夷”构成的图景。

* 来自Coinbase的数据显示，Twitter上关于该项目的情绪多为“中性”，很少有明确的看涨或看跌言论，并指出该项目的“新闻价值正在降低” 18。这反映了广大市场对其的普遍冷漠。  
* 而在Reddit的r/sui子版块，那篇极具破坏性的“拉盘砸盘”指控帖子是关于该项目最显著的情绪数据点 19。这代表了那些对项目进行过深入了解的、更核心的社区成员的强烈负面情绪。

综合来看，Bucket Protocol的社会形象是分裂的：大多数人对其漠不关心，而少数了解其历史的人则对其充满鄙夷。在公开渠道中，几乎看不到有力的、来自社区的辩护声音。这是一种非常不健康的社区状态。

---

## **VII. 战略投资与收益机会**

尽管存在重大风险，本报告仍需为寻求不同风险回报的投资者提供详尽、可行的策略分析。本节将系统地剖析所有与Bucket Protocol相关的潜在投资和收益机会。

### **A. 投资机会对比分析表**

下表旨在为投资者提供一个清晰、结构化的决策框架，系统比较了与Bucket Protocol相关的各种投资策略，并明确了各自的风险与回报。

| 投资策略 | 主要涉及代币 | 操作机制简述 | 潜在收益/APR | 优势 (Upside) | 劣势 (Downside) | 主要风险 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **购买并持有 $BUT** | $BUT | 在DEX上购买$BUT代币，并长期持有，期待未来协议发展带来代币升值。 | 投机性增值 | 若协议成功且治理完善，潜在回报率高。 | 治理功能尚未激活，目前无实际用途；流动性极差。 | **团队/治理风险 (极高)**, 市场风险, 流动性风险。 |
| **铸造并使用 $BUCK** | $BUCK, 抵押品 (SUI, ETH等) | 存入抵押品，铸造$BUCK稳定币，用于支付、交易或参与其他DeFi协议。 | 0%借贷成本 | 极高的资本效率，释放锁定资产的流动性。 | $BUCK可能脱锚，抵押品价格波动。 | **清算风险**, 智能合约风险, 预言机风险。 |
| **存入稳定池 (Tank)** | $BUCK | 将$BUCK存入稳定池，以参与协议的清算过程，购买打折的抵押品。 | 清算利润 | 在市场剧烈波动时，可能获得高额的清算收益。 | 存款可能被用于偿还坏账；收益不稳定。 | **协议坏账风险**, 市场波动风险, 机会成本。 |
| **为$BUCK提供流动性** | $BUCK, USDC等 | 在DEX（如Cetus）上为$BUCK/USDC等交易对提供流动性。 | 交易费 \+ LP激励 | 赚取交易手续费和潜在的流动性挖矿奖励。 | 需承担无常损失（Impermanent Loss）。 | **无常损失风险**, 智能合约风险 (DEX), $BUCK脱锚风险。 |
| **质押 $BUT (未来)** | $BUT | （未来功能）质押$BUT代币以获得协议收入分红或提升在协议中的权益。 | 协议收入分红 | 可能分享协议可观的收入，获得被动现金流。 | 功能尚未上线；收益率未知。 | **团队/治理风险**, 智能合约风险, 市场风险。 |
| **基于SDK进行开发** | 任何 | 利用官方SDK 1 开发自动化策略、套利机器人或集成到自己的DApp中。 | 套利/策略收益 | 创造独特Alpha收益；利用协议基础设施盈利。 | 技术门槛高；需要持续维护。 | **技术实施风险**, 智能合约风险, 市场风险。 |

### **B. 高APR/APY DeFi策略组合**

对于风险承受能力较高的资深DeFi玩家，可以利用Bucket Protocol的特性构建更复杂的收益策略：

* **杠杆/借贷挖矿**: 这是最经典的DeFi玩法之一。投资者可以存入一种生息资产（如LST）或主流资产（如SUI）作为抵押品，以零利率借出BUCK。然后，将借出的BUCK投入到Sui生态中其他高收益的流动性挖矿池或借贷协议中，从而实现杠杆效应。此策略的核心风险在于：1）外部收益农场的安全性；2）抵押品价格下跌导致在Bucket Protocol中的头寸被清算。  
* **稳定池清算套利**: 这是一种高风险、高潜在回报的策略。通过将$BUCK存入稳定池（Tank），用户实质上是在市场下跌时，对被清算的抵-押品资产下达了限价买单（Limit Order）。当市场发生剧烈波动，大量头寸被清算时，稳定池的参与者能够以大幅折扣购入这些抵押品，从而获得丰厚利润。但风险在于，如果协议产生大量坏账，稳定池的资金将被用来填补亏空，导致存款损失 1。  
* **对冲挖矿 (Delta-Neutral)**: 这是一种更为复杂的策略，旨在剥离资产价格波动的风险，纯粹赚取协议的收益。投资者可以在中心化交易所（CEX）通过永续合约做空其抵押品（例如SUI），同时在Bucket Protocol中存入等量的现货SUI来铸造BUCK。理论上，这可以对冲掉SUI价格波动带来的风险。然后，将铸造的BUCK用于安全的收益耕作（如存入稳定池或提供稳定币LP）。此策略的风险在于资金费率成本、基差风险以及中心化交易所的对手方风险。

### **C. 面向开发者的机会**

对于具备开发背景的投资者，Bucket Protocol提供了超越单纯金融投机的参与方式：

* **自动化策略开发**: 利用官方提供的TypeScript SDK (bucket-protocol-sdk) 1，开发者可以编写脚本或“代理”（Agent）来自动化管理自己的CDP。例如，可以创建一个机器人，根据抵押率自动偿还或借出$BUCK，或者在抵押品价格接近清算线时自动补充抵押品，从而实现更精细化的风险管理。  
* **构建集成应用**: 协议的“稳定币兑换SDK”明确鼓励前端运营商集成其稳定币兑换功能，并提供交易额返利 9。这为开发者提供了一个清晰的商业模式：创建一个用户体验更佳的DeFi前端，集成Bucket的底层功能，并从中赚取收入。

这些开发者导向的机会技术门槛较高，需要投入时间和精力进行开发和维护，但它们也可能带来超越普通投资者的Alpha收益。

---

## **VIII. 最终结论与投资建议**

本报告对Bucket Protocol进行了全面的剖析，揭示了一个充满矛盾的项目：它拥有一个在市场上得到验证的成功产品，但其背后却是一个声誉严重受损、缺乏透明度的团队。

### **A. 核心发现综合**

* **看涨理由（产品层面）**:  
  * **强大的产品市场契合度**: 超过1亿美元的TVL和数百万美元的年化收入证明，零利率借贷稳定币的模式在Sui生态中具有极强的吸引力。  
  * **坚实的技术基础**: 协议构建在高性能的Sui网络上，并提供了面向开发者的SDK，具备成为生态基础设施的潜力。  
  * **稳健的经济模型**: 拥有稳定池、PSM和实时清算等多种机制，保障协议的偿付能力和$BUCK的稳定性（尽管历史上有过脱锚）。  
* **看跌理由（团队与治理层面）**:  
  * **严重的诚信污点**: 关于$BUT代币发行的“拉盘砸盘”指控具体而严重，且项目方至今未能提供有力的公开回应，这从根本上摧毁了团队的可信度。  
  * **团队匿名与不透明**: 核心团队成员身份不明，缺乏可供问责的公众形象，这在存在严重争议的情况下，将风险无限放大。  
  * **治理代币的失败**: $BUT代币流动性枯竭，市值极低，完全未能反映协议的链上价值，表明市场对其治理价值的彻底否定。  
  * **薄弱的社区基础**: 社区规模小，参与度低，缺乏对项目的拥护和支持，使其在危机面前显得尤为脆弱。  
* **决定性因素**: 在去中心化金融领域，一个协议的安全性是其代码安全性和团队诚信的乘积。Bucket Protocol的代码或许经过了审计，显得相对安全，但其团队的诚信因子在当前的证据下趋近于零。任何数乘以零，结果都为零。因此，团队诚信问题是压倒一切的决定性风险因素。

### **B. 投资评级与建议**

基于以上分析，本报告提出以下投资评级：

* **治理代币 ($BUT)**: **强烈不建议 (Strongly Not Recommended)**  
  * **理由**: 投资BUT，本质上是投资于一个声誉破产的匿名团队。其未来的潜在恶意行为（如再次抛售、恶意治理、放弃项目）构成了不可接受的、不对称的风险。尽管其价格相对协议TVL而言极度低估，但这是一种价值陷阱。在团队问题得到彻底、透明的解决之前，任何对BUT的投资都无异于赌博。  
* **协议参与 (收益耕作)**: **中立 / 不建议 (Neutral / Not Recommended)**  
  * **理由**: 对于能够理解并愿意承担高风险的资深DeFi用户，利用Bucket Protocol进行杠杆挖矿或稳定池套利，在纯粹的数字游戏层面或许存在获利机会。然而，即便是这种参与方式，也将资本置于一个由诚信存疑的团队所控制的协议中。这代表了一种无法量化、但真实存在的尾部风险。在Sui生态中，存在如NAVI Protocol、Suilend等团队更为透明、声誉更好的替代品，它们提供了相似的收益机会，但治理风险显著更低。对于绝大多数投资者而言，选择风险更低的替代方案是更为审慎的决策。

**最终建议**: 除非Bucket Protocol团队能够以一种前所未有的透明度和诚意，公开回应并澄清所有历史指控，并建立一个清晰、可问责的去中心化治理结构，否则该项目应被视为一个高风险、不宜投资的标的。

#### **引用的著作**

1. bucket-protocol-sdk/README.md at main \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Bucket-Protocol/bucket-protocol-sdk/blob/main/README.md](https://github.com/Bucket-Protocol/bucket-protocol-sdk/blob/main/README.md)  
2. Bucket, 访问时间为 七月 27, 2025， [https://relate-bucket.webflow.io/](https://relate-bucket.webflow.io/)  
3. Bucket Protocol \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Bucket-Protocol](https://github.com/Bucket-Protocol)  
4. Bucket Protocol Project Introduction, Team, Financing and News\_RootData, 访问时间为 七月 27, 2025， [https://www.rootdata.com/Projects/detail/Bucket%20Protocol?k=ODQ5NQ%3D%3D](https://www.rootdata.com/Projects/detail/Bucket%20Protocol?k=ODQ5NQ%3D%3D)  
5. Bucket Protocol price today, BUT to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/bucket-protocol/](https://coinmarketcap.com/currencies/bucket-protocol/)  
6. Bucket Protocol BUCK Stablecoin(BUCK) Price Live Chart \- Gate.com, 访问时间为 七月 27, 2025， [https://www.gate.com/price/bucket-protocol-buck-stablecoin-buck](https://www.gate.com/price/bucket-protocol-buck-stablecoin-buck)  
7. Bucket Protocol BUCK Stablecoin price today, BUCK to USD live price, marketcap and chart | CoinMarketCap, 访问时间为 七月 27, 2025， [https://coinmarketcap.com/currencies/bucket-protocol-buck-stablecoin/](https://coinmarketcap.com/currencies/bucket-protocol-buck-stablecoin/)  
8. Bucket Protocol TypeScript SDK \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Bucket-Protocol/bucket-protocol-sdk](https://github.com/Bucket-Protocol/bucket-protocol-sdk)  
9. Bucket Protocol \- Sui Directory, 访问时间为 七月 27, 2025， [https://sui.directory/project/bucket-protocol-2/](https://sui.directory/project/bucket-protocol-2/)  
10. Bucket Protocol \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/protocol/bucket-protocol](https://defillama.com/protocol/bucket-protocol)  
11. Top DeFis on Sui Blockchain | GetBlock.io, 访问时间为 七月 27, 2025， [https://getblock.io/blog/top-defis-sui/](https://getblock.io/blog/top-defis-sui/)  
12. Top 10 Sui Ecosystem Tokens to Watch in June 2025 | Tangem Blog, 访问时间为 七月 27, 2025， [https://tangem.com/en/blog/post/sui-ecosystem-tokens/](https://tangem.com/en/blog/post/sui-ecosystem-tokens/)  
13. Sui \- Stablecoins Circulating \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/stablecoins/Sui?amp=1](https://defillama.com/stablecoins/Sui?amp=1)  
14. Bucket Protocol BUCK Stablecoin Price, BUCK Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/bucket-protocol-buck-stablecoin](https://www.coinbase.com/price/bucket-protocol-buck-stablecoin)  
15. Bucket Protocol BUCK Stablecoin Price Chart (BUCK) \- CoinGecko, 访问时间为 七月 27, 2025， [https://www.coingecko.com/en/coins/bucket-protocol-buck-stablecoin](https://www.coingecko.com/en/coins/bucket-protocol-buck-stablecoin)  
16. Bucket Protocol BUCK Stablecoin Price USD, BUCK Price Live Charts, Market Cap & News \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/price/bucket-protocol-buck-stablecoin](https://www.bitget.com/price/bucket-protocol-buck-stablecoin)  
17. Bucket Protocol (BUT) — Crypto ICO Overview \- Bitget, 访问时间为 七月 27, 2025， [https://www.bitget.com/ico/bucket-protocols](https://www.bitget.com/ico/bucket-protocols)  
18. Bucket Protocol Price, BUT Price, Live Charts, and Marketcap \- Coinbase, 访问时间为 七月 27, 2025， [https://www.coinbase.com/price/bucket-token](https://www.coinbase.com/price/bucket-token)  
19. $BUT Rugpull by Bucket Protocol : r/sui \- Reddit, 访问时间为 七月 27, 2025， [https://www.reddit.com/r/sui/comments/1i0xfk0/but\_rugpull\_by\_bucket\_protocol/](https://www.reddit.com/r/sui/comments/1i0xfk0/but_rugpull_by_bucket_protocol/)  
20. Sui \- DefiLlama, 访问时间为 七月 27, 2025， [https://defillama.com/chain/sui](https://defillama.com/chain/sui)  
21. Best Sui Projects 2025: Top DApps, NFTs and Wallets Revealed \- 99Bitcoins, 访问时间为 七月 27, 2025， [https://99bitcoins.com/analysis/best-sui-projects/](https://99bitcoins.com/analysis/best-sui-projects/)  
22. Top 10 Projects Built on Sui – Which One Has the Most Potential in 2025? | Satoshi\_Club on Binance Square, 访问时间为 七月 27, 2025， [https://www.binance.com/en/square/post/19060555469322](https://www.binance.com/en/square/post/19060555469322)  
23. Bucket-Protocol/Audit \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Bucket-Protocol/Audit](https://github.com/Bucket-Protocol/Audit)  
24. OtterSec \- Sui Directory, 访问时间为 七月 27, 2025， [https://sui.directory/project/ottersec/](https://sui.directory/project/ottersec/)  
25. MoveBit \- Sui Directory, 访问时间为 七月 27, 2025， [https://sui.directory/project/movebit/](https://sui.directory/project/movebit/)  
26. Blobstream SP1 Audit \- Celestia Docs, 访问时间为 七月 27, 2025， [https://docs.celestia.org/audits/SP1\_Blobstream\_Ottersec\_Audit.pdf](https://docs.celestia.org/audits/SP1_Blobstream_Ottersec_Audit.pdf)  
27. Plaintiff, Partner, or Neither? The bZx DAO and the Unknown Tale of Token Approvals, 访问时间为 七月 27, 2025， [https://www.troutman.com/insights/plaintiff-partner-or-neither-the-bzx-dao-and-the-unknown-tale-of-token-approvals.html](https://www.troutman.com/insights/plaintiff-partner-or-neither-the-bzx-dao-and-the-unknown-tale-of-token-approvals.html)  
28. Building Random, Fair, and Verifiable Games on Blockchain. Raffle smart contract designs on Sui Network \- arXiv, 访问时间为 七月 27, 2025， [https://arxiv.org/pdf/2310.12305](https://arxiv.org/pdf/2310.12305)  
29. Bucket-Protocol/raffle-paper \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Bucket-Protocol/raffle-paper](https://github.com/Bucket-Protocol/raffle-paper)  
30. Damien W. Chen's research works | Swiss Federal Institute of Technology in Lausanne and other places \- ResearchGate, 访问时间为 七月 27, 2025， [https://www.researchgate.net/scientific-contributions/Damien-W-Chen-2240764701](https://www.researchgate.net/scientific-contributions/Damien-W-Chen-2240764701)  
31. Damien-Chen \- GitHub, 访问时间为 七月 27, 2025， [https://github.com/Damien-Chen](https://github.com/Damien-Chen)  
32. Past Speaker (2023) \- Taipei Blockchain Week, 访问时间为 七月 27, 2025， [https://www.taipeiblockchainweek.com/past-speakers-2023](https://www.taipeiblockchainweek.com/past-speakers-2023)  
33. Bucket Protocol — Latest Job Openings | Cake Jobs, 访问时间为 七月 27, 2025， [https://www.cake.me/companies/bucket-protocol?locale=ja](https://www.cake.me/companies/bucket-protocol?locale=ja)  
34. Bucket Protocol BUCK Stablecoin (BUCK) Price Today, News & Live Chart \- Forbes, 访问时间为 七月 27, 2025， [https://www.forbes.com/digital-assets/assets/bucket-protocol-buck-stablecoin-buck/](https://www.forbes.com/digital-assets/assets/bucket-protocol-buck-stablecoin-buck/)  
35. Bucket Protocol BUCK Stablecoin (BUCK) Coin Profile, Info and Statistics | FXEmpire, 访问时间为 七月 27, 2025， [https://www.fxempire.com/crypto/bucket-protocol-buck-stablecoin/profile](https://www.fxempire.com/crypto/bucket-protocol-buck-stablecoin/profile)  
36. The Bucket \- Discord, 访问时间为 七月 27, 2025， [https://discord.com/invite/bx9trts3fS](https://discord.com/invite/bx9trts3fS)  
37. The Bucket \- Discord, 访问时间为 七月 27, 2025， [https://discord.com/invite/TrA6sGXdV7](https://discord.com/invite/TrA6sGXdV7)