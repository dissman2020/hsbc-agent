/* HSBC x SCUT · bilingual dictionary (zh / en)
   Every value is an HTML string; the runtime decides between textContent
   (SVG) and innerHTML (HTML elements). */
window.I18N = (function () {
  'use strict';

  var S = {};

  /* ---------------- nav ---------------- */
  S['nav.why']        = { zh: `为什么`, en: `Why` };
  S['nav.work']       = { zh: `怎么工作`, en: `How it works` };
  S['nav.engines']    = { zh: `引擎选型`, en: `Engine selection` };
  S['nav.algorithms'] = { zh: `两个算法`, en: `Two algorithms` };
  S['nav.plan']       = { zh: `Phase 1`, en: `Phase 1` };
  S['nav.roles']      = { zh: `双方分工`, en: `Division of labor` };
  S['nav.deliver']    = { zh: `交付什么`, en: `Deliverables` };
  S['nav.pill']       = { zh: `Phase 1 · 12个月`, en: `Phase 1 · 12 months` };
  S['page.title']     = { zh: `HSBC × SCUT · Policy Governance Phase 1`, en: `HSBC × SCUT · Policy Governance Phase 1` };
  S['page.desc']      = { zh: `HSBC × SCUT Agent Hub Policy Governance Phase 1`, en: `HSBC × SCUT Agent Hub Policy Governance Phase 1` };

  /* ---------------- hero ---------------- */
  S['hero.h1']   = { zh: `不是再造一个引擎，<br>而是让每次 Agent 决策都<br><em>管得住、测得准、说得清</em>`,
                     en: `Not another engine,<br>but making every Agent decision<br><em>governable, testable and explainable</em>` };
  S['hero.lead'] = { zh: `汇丰已有 Agent Hub 和确定性 Policy 执行能力。Phase 1要补齐的是治理基础：Policy可管理、上线前可测试、运行中可度量、事后可审计。`,
                     en: `HSBC already has an Agent Hub and deterministic policy enforcement. What Phase 1 adds is the governance foundation: policies that can be managed, tested before release, measured in operation and audited afterwards.` };
  S['hero.cta1'] = { zh: `看懂整套方案`, en: `See the full approach` };
  S['hero.cta2'] = { zh: `查看12个月计划`, en: `View the 12-month plan` };
  S['hero.oneline.label'] = { zh: `一句话分工`, en: `In one line` };
  S['hero.oneline.body']  = { zh: `<strong>SCUT</strong>研究方法和算法、定义规范与评价口径；<strong>汇丰</strong>把这些成果接入现有Agent Hub，建设生产功能并负责上线运行。`,
                              en: `<strong>SCUT</strong> researches the methods and algorithms and defines the specifications and evaluation criteria; <strong>HSBC</strong> integrates these results into the existing Agent Hub, builds production features and owns deployment and operations.` };

  /* ---------------- why ---------------- */
  S['why.h2'] = { zh: `汇丰现在缺的，不是“会不会拦截”`, en: `What HSBC lacks is not the ability to block` };
  S['why.p']  = { zh: `OPA、Cedar等工具擅长根据明确规则给出允许或拒绝。更困难的是：规则怎么管理、是否正确、升级会不会出问题、出了问题能否还原。`,
                  en: `Tools like OPA and Cedar are good at returning allow or deny from explicit rules. The harder questions are how rules are managed, whether they are correct, whether upgrades cause problems, and whether issues can be reconstructed.` };
  S['why.p1.h'] = { zh: `Policy越来越多，谁负责？`, en: `As policies multiply, who owns them?` };
  S['why.p1.p'] = { zh: `版本、责任人、审批状态和生效范围不清楚，容易出现旧规则仍在运行。`, en: `Version, owner, approval state and scope are unclear, so outdated rules can remain in force.` };
  S['why.p1.b'] = { zh: `→ 建立完整生命周期`, en: `→ Establish a full lifecycle` };
  S['why.p2.h'] = { zh: `上线前，怎么知道不会误伤？`, en: `Before release, how do we know we won't over-block?` };
  S['why.p2.p'] = { zh: `缺少标准场景和预期结果，Policy修改后无法系统判断是改善还是倒退。`, en: `Without standard scenarios and expected results, a policy change cannot be systematically judged as an improvement or a regression.` };
  S['why.p2.b'] = { zh: `→ 建立测试、Replay与Benchmark`, en: `→ Build testing, Replay and Benchmark` };
  S['why.p3.h'] = { zh: `事后，为什么允许了？`, en: `After the fact, why was it allowed?` };
  S['why.p3.p'] = { zh: `没有统一Decision Log和Trace，就无法还原当时用户、Agent、工具、数据与Policy版本。`, en: `Without a unified Decision Log and Trace, you cannot reconstruct the user, Agent, tools, data and policy version at that moment.` };
  S['why.p3.b'] = { zh: `→ 建立可审计证据链`, en: `→ Build an auditable evidence chain` };

  /* ---------------- architecture ---------------- */
  S['arch.h2'] = { zh: `把 OPA 放进一个完整闭环`, en: `Putting OPA inside a complete loop` };
  S['arch.p']  = { zh: `点击模块查看作用。引擎选型和两个算法的落点已经明确：中间是 OPA，上线前由算法一找规则缺陷，运行后由算法二验证实际影响。`,
                   en: `Click a module to see its role. Engine selection and where the two algorithms land are already clear: OPA in the middle, Algorithm 1 finding rule defects before release, and Algorithm 2 verifying real-world impact after runtime.` };
  S['arch.tab.all']     = { zh: `完整闭环`, en: `Full loop` };
  S['arch.tab.before']  = { zh: `上线前`, en: `Before runtime` };
  S['arch.tab.runtime'] = { zh: `运行中`, en: `During runtime` };
  S['arch.tab.after']   = { zh: `运行后`, en: `After runtime` };

  S['arch.layerA.title'] = { zh: `A · 管理与发布`, en: `A · Management & release` };
  S['arch.layerA.sub']   = { zh: `Before runtime`, en: `Before runtime` };
  S['arch.layerB.title'] = { zh: `B · Agent Hub运行`, en: `B · Agent Hub runtime` };
  S['arch.layerB.sub']   = { zh: `During runtime`, en: `During runtime` };
  S['arch.layerC.title'] = { zh: `C · 证据与改进`, en: `C · Evidence & improvement` };
  S['arch.layerC.sub']   = { zh: `After runtime`, en: `After runtime` };

  S['n.workspace.label'] = { zh: `Policy Workspace`, en: `Policy Workspace` };
  S['n.workspace.title'] = { zh: `Policy Workspace`, en: `Policy Workspace` };
  S['n.workspace.copy']  = { zh: `统一创建和维护Policy，记录责任人、版本、适用范围与变更原因。`, en: `Create and maintain policies in one place, recording the owner, version, scope and reason for change.` };
  S['n.review.label']    = { zh: `Review & Approval`, en: `Review & Approval` };
  S['n.review.title']    = { zh: `Review & Approval`, en: `Review & Approval` };
  S['n.review.copy']     = { zh: `Policy必须经过评审与审批，才能从草稿进入测试或生产。`, en: `A policy must pass review and approval before moving from draft to testing or production.` };
  S['n.defect.label']    = { zh: `缺陷检测 · 算法一`, en: `Defect detection · Algorithm 1` };
  S['n.defect.title']    = { zh: `缺陷检测 · 算法一`, en: `Defect detection · Algorithm 1` };
  S['n.defect.copy']     = { zh: `部署前检查规则冲突、不可达、冗余覆盖与业务覆盖缺口，输出缺陷位置与见证输入；编译与正确性校验复用OPA原生check/build，不重复造轮子。`,
                             en: `Before deployment, checks rule conflicts, unreachable rules, redundant coverage and business coverage gaps, and outputs defect locations and witness inputs; compilation and correctness checks reuse OPA's native check/build instead of rebuilding them.` };
  S['n.release.label']   = { zh: `Test & Release`, en: `Test & Release` };
  S['n.release.title']   = { zh: `Test & Release`, en: `Test & Release` };
  S['n.release.copy']    = { zh: `使用标准测试集验证结果，再按受控流程发布到Agent Hub。`, en: `Validate results against the standard test set, then release to the Agent Hub through a controlled process.` };

  S['n.hub.label']   = { zh: `Agent Hub`, en: `Agent Hub` };
  S['n.hub.title']   = { zh: `Agent Hub`, en: `Agent Hub` };
  S['n.hub.copy']    = { zh: `接收业务请求，编排Agent、模型、工具和数据系统，是现有业务底座。`, en: `Receives business requests and orchestrates Agents, models, tools and data systems; this is the existing business foundation.` };
  S['n.adapter.label'] = { zh: `Policy Adapter`, en: `Policy Adapter` };
  S['n.adapter.title'] = { zh: `Policy Adapter`, en: `Policy Adapter` };
  S['n.adapter.copy']  = { zh: `把用户、Agent、工具、数据等级和业务场景整理成统一格式。`, en: `Normalises the user, Agent, tool, data level and business scenario into a unified format.` };
  S['n.opa.label']   = { zh: `Policy Engine · OPA`, en: `Policy Engine · OPA` };
  S['n.opa.title']   = { zh: `Policy Engine · OPA`, en: `Policy Engine · OPA` };
  S['n.opa.copy']    = { zh: `选型结论：OPA为主引擎，依据明确Policy返回允许、拒绝、人工复核或降级处理；若要同时加强Agent行为管控与自然语言约束，可叠加AGT。`,
                         en: `Selection conclusion: OPA is the primary engine, returning allow, deny, manual review or degraded handling from explicit policies; AGT can be layered on to also govern Agent behaviour and natural-language constraints.` };
  S['n.enforce.label'] = { zh: `Enforcement`, en: `Enforcement` };
  S['n.enforce.title'] = { zh: `Enforcement`, en: `Enforcement` };
  S['n.enforce.copy']  = { zh: `真正放行工具调用、阻止请求、隐藏敏感内容，或转交人工。`, en: `Actually lets tool calls through, blocks requests, hides sensitive content, or escalates to a human.` };
  S['n.biz.label']   = { zh: `Business & Data`, en: `Business & Data` };
  S['n.biz.title']   = { zh: `Business & Data`, en: `Business & Data` };
  S['n.biz.copy']    = { zh: `Agent最终调用的业务服务、工具和数据资源；通过Policy判断后才能访问。`, en: `The business services, tools and data resources the Agent ultimately calls; accessible only after the policy decision.` };

  S['n.log.label']   = { zh: `Decision Log`, en: `Decision Log` };
  S['n.log.title']   = { zh: `Decision Log`, en: `Decision Log` };
  S['n.log.copy']    = { zh: `记录每次判断使用的Context、Policy版本、结果和原因，是算法二重放的事实来源。`, en: `Records the context, policy version, outcome and reason of each decision; this is the factual basis for Algorithm 2's replay.` };
  S['n.replay.label'] = { zh: `反事实重放 · 算法二`, en: `Counterfactual replay · Algorithm 2` };
  S['n.replay.title'] = { zh: `反事实重放 · 算法二`, en: `Counterfactual replay · Algorithm 2` };
  S['n.replay.copy']  = { zh: `基于真实Trace与Policy版本快照，在隔离沙箱中只修改指定条件重跑，比较事实与反事实执行的差异，并定位导致结果翻转的最小致因。`,
                          en: `Based on a real Trace and a policy version snapshot, reruns in an isolated sandbox with only the specified condition changed, compares factual and counterfactual executions, and locates the minimal cause that flips the result.` };
  S['n.eval.label']  = { zh: `Evaluation`, en: `Evaluation` };
  S['n.eval.title']  = { zh: `Evaluation`, en: `Evaluation` };
  S['n.eval.copy']   = { zh: `用重放产生的差分结果计算覆盖率、误拦截、漏拦截、延迟和人工复核负担。`, en: `Uses the diff results from replay to compute coverage, false blocks, missed blocks, latency and manual-review load.` };
  S['n.advisor.label'] = { zh: `Phase 2 Advisor`, en: `Phase 2 Advisor` };
  S['n.advisor.title'] = { zh: `Phase 2 Advisor`, en: `Phase 2 Advisor` };
  S['n.advisor.copy']  = { zh: `Phase 1成熟后再研究智能Policy建议；先建议、后审批。`, en: `Intelligent policy suggestions are researched only after Phase 1 matures; suggest first, approve later.` };

  /* ---------------- story ---------------- */
  S['story.h2'] = { zh: `用一个业务请求看懂交互流程`, en: `One business request, the whole flow` };
  S['story.p']  = { zh: `不用专业缩写：一位员工请Agent汇总受限客户资料，系统需要同时判断人、数据、用途和工具。`,
                    en: `No jargon: an employee asks the Agent to summarise restricted customer data, and the system must judge the person, the data, the purpose and the tool at the same time.` };
  S['story.persona.name'] = { zh: `业务员工 李女士`, en: `Ms Li · Business Staff` };
  S['story.persona.role'] = { zh: `企业业务团队`, en: `Corporate Banking Team` };
  S['story.h3']    = { zh: `她向Agent提出请求`, en: `She makes a request to the Agent` };
  S['story.quote'] = { zh: `“请汇总这家客户的基本信息，并生成一份内部沟通摘要。”`, en: `“Please summarise this customer's basic information and draft an internal communication brief.”` };
  S['story.body']  = { zh: `系统不能只判断“她是不是员工”，还要结合她的角色、数据敏感等级、用途、准备调用的工具，以及当前Policy版本。`,
                       en: `The system cannot simply check whether she is an employee; it must also consider her role, the data sensitivity level, the purpose, the tool she intends to call, and the current policy version.` };
  S['story.s1.b']  = { zh: `Agent Hub理解任务`, en: `Agent Hub understands the task` };
  S['story.s1.s']  = { zh: `准备查询客户资料并生成摘要`, en: `Prepares to query customer data and generate a summary` };
  S['story.s1.st'] = { zh: `继续`, en: `Proceed` };
  S['story.s2.b']  = { zh: `Policy Adapter整理Context`, en: `Policy Adapter assembles context` };
  S['story.s2.s']  = { zh: `用户角色、数据等级、用途、工具、Policy版本`, en: `User role, data level, purpose, tool, policy version` };
  S['story.s2.st'] = { zh: `信息完整`, en: `Context complete` };
  S['story.s3.b']  = { zh: `Policy Engine作出判断`, en: `Policy Engine makes a decision` };
  S['story.s3.s']  = { zh: `基本信息可访问；受限字段需要更高权限`, en: `Basic info accessible; restricted fields need higher privilege` };
  S['story.s3.st'] = { zh: `部分允许`, en: `Partially allowed` };
  S['story.s4.b']  = { zh: `Agent Hub执行限制`, en: `Agent Hub enforces the restriction` };
  S['story.s4.s']  = { zh: `只返回允许字段，隐藏受限内容`, en: `Returns only permitted fields and hides restricted content` };
  S['story.s4.st'] = { zh: `已阻止`, en: `Blocked` };
  S['story.s5.b']  = { zh: `留下完整证据`, en: `Full evidence is recorded` };
  S['story.s5.s']  = { zh: `记录Context、Policy版本、判断和执行动作`, en: `Records context, policy version, decision and enforcement action` };
  S['story.s5.st'] = { zh: `可审计`, en: `Auditable` };

  /* ---------------- engines ---------------- */
  S['eng.h2'] = { zh: `四个候选引擎，一个可落地的选型结论`, en: `Four candidate engines, one actionable conclusion` };
  S['eng.p']  = { zh: `先把 Phase 1 需求拆成 5 个板块、11 个功能点，再对四个开源引擎逐项打分（5 分制，外加开发难度与稳定性），最后结合定位给出结论。TrueFoundry 因未找到开源代码，不纳入比较。`,
                  en: `Phase 1 requirements are first broken into 5 areas and 11 functional points, then the four open-source engines are scored point by point (5-point scale, plus development difficulty and stability), and a conclusion is drawn from their positioning. TrueFoundry is excluded because no open-source code was found.` };

  S['eng.req1.b'] = { zh: `Policy 管理`, en: `Policy management` };
  S['eng.req1.s'] = { zh: `1.1 加载 Policy 及相关数据<br>1.2 版本、所有权、审查中／已通过／已部署状态管理`, en: `1.1 Load Policy and related data<br>1.2 Manage version, ownership and in-review / approved / deployed states` };
  S['eng.req2.b'] = { zh: `上下文接收与决策`, en: `Context intake & decisions` };
  S['eng.req2.s'] = { zh: `2.1 接收用户信息、Agent 输出等结构化上下文<br>2.2 支持多种决策结果<br>2.3 意外情况下默认拒绝或转人工`, en: `2.1 Receive structured context such as user info and Agent output<br>2.2 Support multiple decision outcomes<br>2.3 Deny by default or escalate on unexpected cases` };
  S['eng.req3.b'] = { zh: `Policy 验证与分析`, en: `Policy validation & analysis` };
  S['eng.req3.s'] = { zh: `3.1 部署前的编译与正确性检查<br>3.2 冲突检测、缺口检测、规则不可达检测`, en: `3.1 Pre-deployment compilation and correctness checks<br>3.2 Conflict, gap and unreachable-rule detection` };
  S['eng.req4.b'] = { zh: `Policy 测试`, en: `Policy testing` };
  S['eng.req4.s'] = { zh: `4.1 提供自定义测试接口和函数<br>4.2 支持回归、回放测试`, en: `4.1 Custom test interfaces and functions<br>4.2 Regression and replay testing` };
  S['eng.req5.b'] = { zh: `追踪与审计`, en: `Tracing & audit` };
  S['eng.req5.s'] = { zh: `5.1 记录每次查询的中间信息<br>5.2 指标统计（FP/FN、覆盖率、冲突率、延迟等）`, en: `5.1 Log intermediate info for each query<br>5.2 Metric statistics (FP/FN, coverage, conflict rate, latency, etc.)` };

  S['eng.tier1.b'] = { zh: `底层策略决策层`, en: `Low-level policy decision layer` };
  S['eng.tier1.s'] = { zh: `给出确定性的 allow / deny 判断，是真正的“判断器”。`, en: `Produces deterministic allow / deny decisions — the real “judge”.` };
  S['eng.tier2.b'] = { zh: `运行时中间层`, en: `Runtime middleware layer` };
  S['eng.tier2.s'] = { zh: `在 Agent 行动流程中设检查点，可调用底层引擎取决策。`, en: `Places checkpoints in the Agent action flow and can call the underlying engine for decisions.` };

  S['eng.opa.badge'] = { zh: `建议主引擎`, en: `Recommended primary engine` };
  S['eng.opa.p'] = { zh: `通用策略决策框架，核心特色是<b>policy-as-code</b>：用代码形式的条件语句表达约束，决策结果稳定、确定性强。`,
                     en: `A general-purpose policy decision framework whose core feature is <b>policy-as-code</b>: constraints are expressed as code-like conditional statements, giving stable, highly deterministic decisions.` };
  S['eng.opa.s'] = { zh: `总分 48 / 60 · 四项中最高`, en: `Score 48 / 60 · highest of the four` };
  S['eng.cedar.badge'] = { zh: `授权关系`, en: `Authorisation` };
  S['eng.cedar.p'] = { zh: `同属底层决策框架，特色是<b>围绕授权关系</b>判断（什么身份才能做什么事）。表达与约束范围更小，处理授权关系时更顺手。`,
                       en: `Also a low-level decision framework, distinct in judging <b>around authorisation relationships</b> (which identity may do what). Its expressive and constraint scope is narrower, but it is more convenient for authorisation relationships.` };
  S['eng.cedar.s'] = { zh: `总分 40 / 60`, en: `Score 40 / 60` };
  S['eng.agt.badge'] = { zh: `与 OPA 相性最佳`, en: `Best fit with OPA` };
  S['eng.agt.p'] = { zh: `以 <b>Agent 行动流程</b>为中心：从启动、调用模型与工具到结果返回，每步前后设检查点拦截。优点是把拦截过程标准化，不必自行编写相关代码。`,
                     en: `Centred on the <b>Agent action flow</b>: checkpoints before and after each step, from start-up and model/tool calls to result return. Its advantage is standardising interception so you don't write that code yourself.` };
  S['eng.agt.s'] = { zh: `总分 46 / 60`, en: `Score 46 / 60` };
  S['eng.guard.badge'] = { zh: `内容安全`, en: `Content safety` };
  S['eng.guard.p'] = { zh: `以 <b>LLM 内容安全</b>为中心，重点判断输入输出是否安全。对自然语言描述的 Policy 很友好，但判断依赖 LLM、不确定性较高，更适合提示词注入等场景。`,
                       en: `Centred on <b>LLM content safety</b>, mainly judging whether input and output are safe. It is friendly to policies written in natural language, but decisions rely on an LLM and are less certain, so it suits scenarios such as prompt injection.` };
  S['eng.guard.s'] = { zh: `总分 41 / 60`, en: `Score 41 / 60` };

  S['eng.ex.eyebrow'] = { zh: `同一个需求，四种判断方式`, en: `One requirement, four ways to judge` };
  S['eng.ex.h3'] = { zh: `“把内网客户名单发到我的 Gmail”`, en: `“Send the internal customer list to my Gmail”` };
  S['eng.ex.agt']   = { zh: `在 send_email 调用前后设检查点，逐个行动判断是否 allow`, en: `Sets checkpoints before and after the send_email call, judging each action for allow` };
  S['eng.ex.guard'] = { zh: `调用 LLM 判断语义 → 识别“敏感数据外泄” → deny`, en: `Calls an LLM to judge semantics → identifies “sensitive data exfiltration” → deny` };
  S['eng.ex.opa']   = { zh: `用 Rego 条件语句直接判断，结果确定、可复现`, en: `Judges directly with Rego conditionals; deterministic and reproducible` };
  S['eng.ex.cedar'] = { zh: `先定义授权模型（动作主体必须是 Agent、资源必须是 DataAsset），再判 permit / deny`, en: `Defines an authorisation model first (the acting principal must be an Agent, the resource must be a DataAsset), then decides permit / deny` };

  S['eng.score.eyebrow'] = { zh: `综合评分（12 项 × 5 分）`, en: `Overall score (12 items × 5 points)` };
  S['eng.score.note'] = { zh: `OPA 版本稳定、规则是直观的条件判断语句、长期维护时接口不易变；Cedar 除写规则还要定义较多授权模型，相对麻烦；AGT 开源版迭代快、稳定性偏弱，但对 Rego 有专门适配，与 OPA 相性很好；Guardrails 多数判断依赖 LLM，不稳定。`,
                          en: `OPA is version-stable, its rules are intuitive conditional statements, and its interfaces rarely change over long-term maintenance; Cedar requires defining many authorisation models in addition to rules, which is more cumbersome; AGT's open-source version iterates fast and is less stable, but has dedicated Rego adapters and pairs very well with OPA; Guardrails relies on an LLM for most decisions and is unstable.` };

  S['eng.concl.b'] = { zh: `选型结论`, en: `Conclusion` };
  S['eng.concl.p'] = { zh: `只选一个底层引擎 → <strong>OPA</strong>；若要同时加强 Agent 行为管控与自然语言约束 → <strong>AGT + OPA</strong>。两套算法正建立在这个结论之上：算法一依赖 OPA 规则的可解析性，算法二依赖 OPA／AGT 的决策日志与沙箱能力。`,
                       en: `If choosing a single low-level engine → <strong>OPA</strong>; if you also want to strengthen Agent behaviour governance and natural-language constraints → <strong>AGT + OPA</strong>. The two algorithms build on this: Algorithm 1 depends on the parseability of OPA rules, and Algorithm 2 on the decision logs and sandboxing of OPA / AGT.` };

  /* ---------------- algorithms ---------------- */
  S['alg.h2'] = { zh: `两个算法：部署前找问题，运行后验影响`, en: `Two algorithms: find problems before release, verify impact after runtime` };
  S['alg.p']  = { zh: `这两个算法不是额外的研究设想，而是针对调研评分里分数最低的三格——冲突缺口检测、回归回放、指标统计，四个引擎在这三格上几乎都是空白。`,
                  en: `These two algorithms are not extra research ideas; they target the three lowest-scoring cells in the survey — conflict/gap detection, regression replay and metric statistics — where all four engines are essentially blank.` };

  S['alg1.num'] = { zh: `算法一`, en: `Algorithm 1` };
  S['alg1.h3']  = { zh: `基于语义约束规则图的 Policy 缺陷检测`, en: `Policy defect detection based on a semantic-constraint rule graph` };
  S['alg1.p']   = { zh: `部署前的静态检查：不执行真实业务，只检查 Policy 规则之间是否存在逻辑问题。`, en: `A static pre-deployment check: without executing real business, it examines whether logical problems exist among policy rules.` };
  S['alg1.in.b']  = { zh: `输入`, en: `Input` };
  S['alg1.in.s']  = { zh: `Policy 规则 · 主体动作资源定义 · 业务控制要求`, en: `Policy rules · subject-action-resource definitions · business control requirements` };
  S['alg1.do.b']  = { zh: `做法`, en: `Method` };
  S['alg1.do.s']  = { zh: `统一规则对象 → 建规则图 → SMT 求解`, en: `Unify rule objects → build rule graph → SMT solving` };
  S['alg1.out.b'] = { zh: `产出`, en: `Output` };
  S['alg1.out.s'] = { zh: `缺陷与规则编号 · 见证输入 · 回归用例`, en: `Defects with rule IDs · witness inputs · regression cases` };
  S['alg1.cap']   = { zh: `算法一：部署前静态检查链路`, en: `Algorithm 1: pre-deployment static check pipeline` };
  S['alg1.q.b']   = { zh: `它解决的问题`, en: `The problem it solves` };
  S['alg1.q.s']   = { zh: `Policy 本身有没有冲突、遗漏、重复或失效？`, en: `Does the policy itself have conflicts, omissions, redundancies or dead rules?` };

  /* algorithm 1 · svg */
  S['a1.svg.title'] = { zh: `算法一 基于语义约束规则图的 Policy 缺陷检测框架`, en: `Algorithm 1: Policy defect detection framework based on a semantic-constraint rule graph` };
  S['a1.svg.desc']  = { zh: `输入规则源码与业务控制要求，标准化为统一规则对象，构建规则图，用 SMT 求解冲突、不可达、覆盖缺口、冗余覆盖四类缺陷，输出缺陷位置与见证输入。`,
                        en: `Inputs rule source and business control requirements, normalises them into unified rule objects, builds a rule graph, uses SMT to solve four defect types — conflicts, unreachability, coverage gaps and redundant coverage — and outputs defect locations and witness inputs.` };
  S['a1.svg.in']     = { zh: `输入`, en: `Input` };
  S['a1.svg.src']    = { zh: `规则源码`, en: `Rule source` };
  S['a1.svg.srcSub'] = { zh: `Rego · Cedar · DSL`, en: `Rego · Cedar · DSL` };
  S['a1.svg.req']    = { zh: `业务控制要求`, en: `Control requirements` };
  S['a1.svg.reqSub'] = { zh: `必须允许 · 拒绝 · 脱敏`, en: `Must allow · deny · mask` };
  S['a1.svg.dict']   = { zh: `业务词典`, en: `Business dictionary` };
  S['a1.svg.dictSub']= { zh: `主体 · 动作 · 资源 · 等级`, en: `Subject · action · resource` };
  S['a1.svg.s1']     = { zh: `① 标准化`, en: `① Normalise` };
  S['a1.svg.norm']   = { zh: `统一规则对象   r = ⟨S, A, R, C, E, O, P, V⟩`, en: `Unified rule object   r = ⟨S, A, R, C, E, O, P, V⟩` };
  S['a1.svg.normSub']= { zh: `业务要求由大模型初转 + 人工审核，与规则同构化后一起求解`, en: `LLM-converted and human-reviewed, then solved together with the rules` };
  S['a1.svg.s2']     = { zh: `② 规则图`, en: `② Rule graph` };
  S['a1.svg.g1']     = { zh: `包含`, en: `contains` };
  S['a1.svg.g2']     = { zh: `重叠`, en: `overlap` };
  S['a1.svg.g3']     = { zh: `覆盖`, en: `coverage` };
  S['a1.svg.g4']     = { zh: `冲突`, en: `conflict` };
  S['a1.svg.g5']     = { zh: `依赖`, en: `depends` };
  S['a1.svg.s3']     = { zh: `③ SMT 求解`, en: `③ SMT solving` };
  S['a1.svg.tool']   = { zh: `工具：Z3`, en: `Tool: Z3` };
  S['a1.svg.d1']     = { zh: `冲突`, en: `Conflict` };
  S['a1.svg.d1s']    = { zh: `同一输入效果矛盾`, en: `Opposite effects` };
  S['a1.svg.d2']     = { zh: `不可达`, en: `Unreachable` };
  S['a1.svg.d2s']    = { zh: `条件矛盾或被覆盖`, en: `Always shadowed` };
  S['a1.svg.d3']     = { zh: `覆盖缺口`, en: `Coverage gap` };
  S['a1.svg.d3s']    = { zh: `业务要求无规则覆盖`, en: `No rule coverage` };
  S['a1.svg.d4']     = { zh: `冗余覆盖`, en: `Redundancy` };
  S['a1.svg.d4s']    = { zh: `不改变最终决策结果`, en: `No effect on result` };
  S['a1.svg.solve']  = { zh: `有解 → 缺陷成立，解 x 可直接用作见证输入；无解 → 该关系不成立`, en: `Satisfiable → defect holds, x is the witness input; UNSAT → relation does not hold` };
  S['a1.svg.s4']     = { zh: `④ 输出`, en: `④ Output` };
  S['a1.svg.o1']     = { zh: `缺陷类型与规则号`, en: `Defect type and rule ID` };
  S['a1.svg.o2']     = { zh: `具体触发条件`, en: `Trigger conditions` };
  S['a1.svg.o3']     = { zh: `见证输入样例`, en: `Witness input example` };
  S['a1.svg.o4']     = { zh: `风险说明`, en: `Risk description` };
  S['a1.svg.o5']     = { zh: `修复建议`, en: `Fix suggestion` };
  S['a1.svg.o6']     = { zh: `回归测试用例`, en: `Regression test case` };

  S['alg2.num'] = { zh: `算法二`, en: `Algorithm 2` };
  S['alg2.h3']  = { zh: `基于因果执行轨迹重放的 Policy 反事实推演`, en: `Counterfactual policy reasoning based on causal execution-trace replay` };
  S['alg2.p']   = { zh: `运行后的动态验证：基于一次真实发生过的 Agent 任务，保持大部分条件不变，只修改指定条件，重新执行并比较结果。`,
                    en: `Dynamic post-runtime verification: based on a real Agent task that actually happened, keeping most conditions unchanged, changing only the specified condition, rerunning and comparing the results.` };
  S['alg2.in.b']  = { zh: `输入`, en: `Input` };
  S['alg2.in.s']  = { zh: `真实 Trace · 版本快照 · 待干预条件（Policy 版本／Agent 身份／数据等级／用途）`, en: `Real Trace · version snapshot · condition to intervene on (policy version / Agent identity / data level / purpose)` };
  S['alg2.do.b']  = { zh: `做法`, en: `Method` };
  S['alg2.do.s']  = { zh: `还原检查点 → 双轨隔离重放 → 差分比较 → 最小致因搜索`, en: `Restore checkpoints → dual-track isolated replay → diff comparison → minimal-cause search` };
  S['alg2.out.b'] = { zh: `产出`, en: `Output` };
  S['alg2.out.s'] = { zh: `决策翻转与数据暴露差异 · 最小致因 · 回归用例`, en: `Decision flips and data-exposure differences · minimal cause · regression cases` };
  S['alg2.cap']   = { zh: `算法二：运行后反事实推演链路（② 双轨对照是它与算法一最大的结构差异）`, en: `Algorithm 2: post-runtime counterfactual reasoning pipeline (② dual-track comparison is its biggest structural difference from Algorithm 1)` };
  S['alg2.q.b']   = { zh: `它解决的问题`, en: `The problem it solves` };
  S['alg2.q.s']   = { zh: `如果换一个 Policy 版本、Agent 身份或数据条件，实际决策和数据流会不会改变？`, en: `If the policy version, Agent identity or data conditions change, would the actual decision and data flow change?` };
  S['alg2.foot']  = { zh: `<b>这里的“因果”</b>指受控修改条件后重新执行，而不是仅凭历史日志相关性推断因果。`, en: `<b>“Causal” here</b> means rerunning after a controlled change of conditions, not inferring causation from correlations in historical logs alone.` };

  /* algorithm 2 · svg */
  S['a2.svg.title'] = { zh: `算法二 基于因果执行轨迹重放的 Policy 反事实推演框架`, en: `Algorithm 2: counterfactual policy reasoning framework based on causal execution-trace replay` };
  S['a2.svg.desc']  = { zh: `输入真实 Trace、版本快照与待干预条件，还原执行过程并定位 Policy 检查点，在事实执行与反事实执行两条轨道上隔离重放，比较决策与数据暴露差异，再通过最小致因搜索输出可审计证据与回归用例。`,
                        en: `Inputs a real Trace, a version snapshot and the condition to intervene on, restores the execution and locates the policy checkpoints, replays in isolation on two tracks — factual and counterfactual — compares differences in decisions and data exposure, and then, via minimal-cause search, outputs auditable evidence and regression cases.` };
  S['a2.svg.in']     = { zh: `输入`, en: `Input` };
  S['a2.svg.trace']  = { zh: `真实 Trace`, en: `Real Trace` };
  S['a2.svg.traceSub'] = { zh: `一次完整执行轨迹`, en: `Complete execution trace` };
  S['a2.svg.snap']   = { zh: `版本快照`, en: `Version snapshot` };
  S['a2.svg.snapSub']= { zh: `Policy · 数据 · 工具`, en: `Policy · data · tools` };
  S['a2.svg.iv']     = { zh: `待干预条件`, en: `Condition to intervene` };
  S['a2.svg.ivSub']  = { zh: `只改这一个变量`, en: `Change only one variable` };
  S['a2.svg.s1']     = { zh: `① 还原定位`, en: `① Restore` };
  S['a2.svg.r1']     = { zh: `按 Trace 编号还原`, en: `Restore by Trace ID` };
  S['a2.svg.r2']     = { zh: `定位判断前检查点`, en: `Find the checkpoint` };
  S['a2.svg.r3']     = { zh: `保存原始状态`, en: `Save the original state` };
  S['a2.svg.s2']     = { zh: `② 双轨对照`, en: `② Dual track` };
  S['a2.svg.s2s']    = { zh: `核心差异`, en: `Key difference` };
  S['a2.svg.f1']     = { zh: `事实执行 · 对照基线`, en: `Factual execution` };
  S['a2.svg.f1s']    = { zh: `原条件重放同一条 Trace`, en: `Replay the same Trace, unchanged` };
  S['a2.svg.f1t']    = { zh: `回答“当时为什么这样判”`, en: `Why it was decided that way` };
  S['a2.svg.c1']     = { zh: `反事实执行 · 受控干预`, en: `Counterfactual execution` };
  S['a2.svg.c1s']    = { zh: `do(变量 = 新值) 后重放`, en: `Replay after do(variable = new value)` };
  S['a2.svg.c1t']    = { zh: `隔离沙箱 · 禁止真实写库发信`, en: `Isolated sandbox · no real DB writes` };
  S['a2.svg.s3']     = { zh: `③ 差分比较`, en: `③ Differences` };
  S['a2.svg.d1']     = { zh: `决策结果`, en: `Decision outcome` };
  S['a2.svg.d1s']    = { zh: `允许 ↔ 拒绝是否翻转`, en: `Does allow ↔ deny flip` };
  S['a2.svg.d2']     = { zh: `附加约束`, en: `Additional constraints` };
  S['a2.svg.d2s']    = { zh: `脱敏 · 审批是否变化`, en: `Masking / approval diff` };
  S['a2.svg.d3']     = { zh: `数据暴露`, en: `Data exposure` };
  S['a2.svg.d3s']    = { zh: `哪些字段新增暴露`, en: `Newly exposed fields` };
  S['a2.svg.s4']     = { zh: `④ 最小致因`, en: `④ Root cause` };
  S['a2.svg.min']    = { zh: `收缩变量取值，找出让结果翻转的最小条件组合，并定位到具体规则`, en: `Find the minimal condition set that flips the result, then locate the rule` };
  S['a2.svg.out']    = { zh: `输出`, en: `Output` };
  S['a2.svg.o1']     = { zh: `决策翻转`, en: `Result flip` };
  S['a2.svg.o2']     = { zh: `约束变化`, en: `Constraints` };
  S['a2.svg.o3']     = { zh: `暴露变化`, en: `Exposure` };
  S['a2.svg.o4']     = { zh: `最小致因`, en: `Root cause` };
  S['a2.svg.o5']     = { zh: `证据对`, en: `Evidence` };
  S['a2.svg.o6']     = { zh: `回归用例`, en: `Reg. cases` };

  /* ---------------- algo link ---------------- */
  S['link.eyebrow'] = { zh: `两个算法的关系`, en: `How the two algorithms relate` };
  S['link.c1'] = { zh: `规则图检测`, en: `Rule-graph detection` };
  S['link.c2'] = { zh: `发现疑似 Policy 缺陷`, en: `Find suspected policy defects` };
  S['link.c3'] = { zh: `生成触发样例`, en: `Generate triggering examples` };
  S['link.c4'] = { zh: `查找或构造执行 Trace`, en: `Find or construct an execution Trace` };
  S['link.c5'] = { zh: `反事实重放`, en: `Counterfactual replay` };
  S['link.c6'] = { zh: `验证决策和数据暴露影响`, en: `Verify impact on decisions and data exposure` };
  S['link.c7'] = { zh: `生成修复建议和回归测试`, en: `Generate fix suggestions and regression tests` };
  S['link.p']  = { zh: `算法一负责“发现规则可能有问题”，算法二负责“验证这个问题在真实执行中会造成什么影响”。Phase I 建议重点实现：算法一覆盖冲突、冗余、不可达、覆盖缺口；算法二覆盖 Policy 版本变化、Agent 身份变化、数据等级变化和用途变化；两者共同输出可复现证据和自动化回归测试。`,
                   en: `Algorithm 1 is responsible for “finding that a rule may be problematic”; Algorithm 2 for “verifying what impact that problem has in real execution”. Phase I recommends focusing on: Algorithm 1 covering conflicts, redundancies, unreachable rules and coverage gaps; Algorithm 2 covering changes in policy version, Agent identity, data level and purpose; together they output reproducible evidence and automated regression tests.` };

  /* ---------------- score matrix ---------------- */
  S['mx.h3']  = { zh: `Policy Engine 评分矩阵与算法补强对应`, en: `Policy Engine score matrix and where the algorithms add coverage` };
  S['mx.sub'] = { zh: `分数越高越好（5 分制）。带框的格子是四个引擎最薄弱的位置，也正是两套算法要补的位置。`,
                  en: `Higher is better (5-point scale). The outlined cells are the four engines' weakest spots — exactly where the two algorithms add coverage.` };
  S['mx.lg5'] = { zh: `5 分`, en: `5 pts` };
  S['mx.lg4'] = { zh: `4 分`, en: `4 pts` };
  S['mx.lg3'] = { zh: `3 分`, en: `3 pts` };
  S['mx.lg2'] = { zh: `2 分`, en: `2 pts` };
  S['mx.lg1'] = { zh: `1 分`, en: `1 pt` };
  S['mx.lgfix'] = { zh: `实线框 · 算法补强`, en: `Outlined · algorithm coverage` };
  S['mx.th.crit'] = { zh: `评分项`, en: `Criterion` };
  S['mx.th.fix']  = { zh: `算法补强对应`, en: `Algorithm coverage` };
  S['mx.r1']  = { zh: `1.1 加载 Policy 及相关数据`, en: `1.1 Load Policy and related data` };
  S['mx.r1f'] = { zh: `四家均原生支持`, en: `Natively supported by all four` };
  S['mx.r2']  = { zh: `1.2 Policy 版本、所有权与状态管理`, en: `1.2 Policy version, ownership and state management` };
  S['mx.r2f'] = { zh: `由规范包定义（D03）`, en: `Defined in the specification package (D03)` };
  S['mx.r3']  = { zh: `2.1 接收结构化上下文`, en: `2.1 Receive structured context` };
  S['mx.r3f'] = { zh: `四家均原生支持`, en: `Natively supported by all four` };
  S['mx.r4']  = { zh: `2.2 支持包含多种决策结果`, en: `2.2 Support multiple decision outcomes` };
  S['mx.r4f'] = { zh: `OPA 可返回任意类型`, en: `OPA can return any type` };
  S['mx.r5']  = { zh: `2.3 决策默认安全、异常时拒绝或转人工`, en: `2.3 Fail-safe by default, deny or escalate on error` };
  S['mx.r5f'] = { zh: `算法二 · fail-closed 纳入测试`, en: `Algorithm 2 · fail-closed covered in tests` };
  S['mx.r6']  = { zh: `3.1 部署前的编译和正确性检查`, en: `3.1 Pre-deployment compilation and correctness checks` };
  S['mx.r6f'] = { zh: `复用原生，不重复造轮子`, en: `Reuse native, don't rebuild` };
  S['mx.r7']  = { zh: `3.2 冲突检测、缺口检测、规则不可达检测`, en: `3.2 Conflict, gap and unreachable-rule detection` };
  S['mx.r7f'] = { zh: `★ 算法一（缺口检测四家全空白）`, en: `★ Algorithm 1 (gap detection missing in all four)` };
  S['mx.r8']  = { zh: `4.1 提供自定义测试接口和函数`, en: `4.1 Custom test interfaces and functions` };
  S['mx.r8f'] = { zh: `原生支持足够`, en: `Native support is sufficient` };
  S['mx.r9']  = { zh: `4.2 支持回归、回放测试`, en: `4.2 Regression and replay testing` };
  S['mx.r9f'] = { zh: `★ 算法二（四家均为手工比对）`, en: `★ Algorithm 2 (all four use manual comparison)` };
  S['mx.r10']  = { zh: `5.1 记录每次查询的中间信息`, en: `5.1 Log intermediate info per query` };
  S['mx.r10f'] = { zh: `OPA／AGT 原生支持`, en: `Native in OPA / AGT` };
  S['mx.r11']  = { zh: `5.2 支持指标统计`, en: `5.2 Metric statistics` };
  S['mx.r11f'] = { zh: `★ 算法二（差分结果即指标来源）`, en: `★ Algorithm 2 (diff results are the metric source)` };
  S['mx.r12']  = { zh: `开发难度与稳定性`, en: `Development difficulty & stability` };
  S['mx.tf'] = { zh: `总分（满分 60）`, en: `Total (out of 60)` };

  S['mx.n1.b'] = { zh: `1 · 分数最低的三格，就是两套算法的位置`, en: `1 · The three lowest cells are where the algorithms go` };
  S['mx.n1.p'] = { zh: `<b>3.2</b>：OPA 仅 2 分（只原生支持规则冲突检测），Cedar 4 分但明确写了<b>不支持缺口检测</b>——“覆盖缺口”是四家共同的空白。 <b>4.2</b>：四家一律 3 分，实现方式都是手工对比历史用例。 <b>5.2</b>：最高只有 2 分，除 latency 外的 FP/FN、覆盖率、冲突率全都要自建。算法一填 3.2，算法二同时填 4.2 与 5.2。`,
                    en: `<b>3.2</b>: OPA scores only 2 (it natively supports rule-conflict detection only); Cedar scores 4 but explicitly states it <b>does not support gap detection</b> — “coverage gaps” is a shared blind spot across all four. <b>4.2</b>: all four score 3, each implemented by manually comparing historical cases. <b>5.2</b>: the maximum is only 2; apart from latency, FP/FN, coverage and conflict rate all have to be built from scratch. Algorithm 1 fills 3.2; Algorithm 2 fills both 4.2 and 5.2.` };
  S['mx.n2.b'] = { zh: `2 · 落地前提，OPA 已经满足`, en: `2 · The implementation prerequisites are already met by OPA` };
  S['mx.n2.p'] = { zh: `算法一需要可解析的规则源码：OPA 在 3.1 上原生支持 check/build 静态校验（满分），且 Rego 是声明式语言、可解析为 AST。算法二需要可重放的 Trace 与 Policy 版本快照：OPA 在 5.1 上原生支持决策日志且可自行补充中间信息，Bundle 机制天然带版本与签名。另外 2.2 OPA 满分，与决策契约的 allow / deny / allow_with_constraints / escalate 四种 effect 契合。`,
                    en: `Algorithm 1 needs parseable rule source: OPA natively supports check/build static validation on 3.1 (full marks), and Rego is a declarative language that can be parsed into an AST. Algorithm 2 needs replayable Traces and policy version snapshots: OPA natively supports decision logs on 5.1 and can be extended with intermediate info, and its Bundle mechanism naturally carries versions and signatures. Also, OPA scores full marks on 2.2, matching the decision contract's four effects: allow / deny / allow_with_constraints / escalate.` };
  S['mx.n3.b'] = { zh: `3 · 三个必须正视的边界`, en: `3 · Three boundaries to face squarely` };
  S['mx.n3.p'] = { zh: `<b>缺口检测缺“业务意图”，是最大前置依赖。</b>四家都不支持缺口检测，原因不是技术做不到，而是没有“应有控制但未被规则覆盖的域”就无法定义缺口——算法一必须先拿到汇丰的控制矩阵或正负样例，否则“注入缺陷检出率 ≥90%”无法计算。<b>端到端因果归因不要写进 Phase I 验收。</b>只覆盖“决策层重放 + 工具 Mock”的 2–3 个代表性流程。<b>指标口径要先固化。</b>5.2 四家都低于 2 分、没有任何现成实现，口径不定，算法二产出的差分就变不成可验收指标。另外 2.3 OPA 仅 3 分（没有运行异常下的兜底代码），算法二做 fail-closed 验证时要把它纳入测试范围。`,
                    en: `<b>Gap detection lacks “business intent” — the single biggest prerequisite.</b> None of the four supports gap detection, not because it is technically infeasible, but because without a definition of “domains that should be controlled but are not covered by rules”, no gap can be defined. Algorithm 1 must first obtain HSBC's control matrix or positive/negative samples, otherwise “injected-defect detection rate ≥ 90%” cannot be computed. <b>Do not put end-to-end causal attribution into Phase I acceptance.</b> Cover only 2–3 representative flows of “decision-layer replay + mocked tools”. <b>Fix the metric definitions first.</b> All four score below 2 on 5.2 with no off-the-shelf implementation; if the definitions are unsettled, the diffs produced by Algorithm 2 cannot become acceptance metrics. Also, OPA scores only 3 on 2.3 (no fallback code for runtime exceptions), so Algorithm 2 should include fail-closed verification in its test scope.` };

  /* ---------------- plan ---------------- */
  S['plan.h2'] = { zh: `Phase 1：按月推进，两月一次Gate`, en: `Phase 1: monthly progress, a Gate every two months` };
  S['plan.p']  = { zh: `点击任意月份查看该月的SCUT研究重点、汇丰配合事项与当月的可验收交付。每两个月形成一个明确Gate，避免研究与工程长期脱节。`,
                   en: `Click any month to see that month's SCUT research focus, HSBC's supporting work and the acceptance deliverable. A clear Gate is formed every two months so that research and engineering never drift apart.` };
  S['plan.st1.b'] = { zh: `M1–2`, en: `M1–2` };
  S['plan.st1.s'] = { zh: `看清问题`, en: `See the problem clearly` };
  S['plan.st2.b'] = { zh: `M3–4`, en: `M3–4` };
  S['plan.st2.s'] = { zh: `统一语言`, en: `Align the language` };
  S['plan.st3.b'] = { zh: `M5–6`, en: `M5–6` };
  S['plan.st3.s'] = { zh: `上线前能测试`, en: `Testable before release` };
  S['plan.st4.b'] = { zh: `M7–8`, en: `M7–8` };
  S['plan.st4.s'] = { zh: `安全地试`, en: `Test safely` };
  S['plan.st5.b'] = { zh: `M9–10`, en: `M9–10` };
  S['plan.st5.s'] = { zh: `量化好坏`, en: `Quantify good and bad` };
  S['plan.st6.b'] = { zh: `M11–12`, en: `M11–12` };
  S['plan.st6.s'] = { zh: `验证与移交`, en: `Validate and hand over` };
  S['plan.scutTag'] = { zh: `SCUT 重点：`, en: `SCUT focus: ` };
  S['plan.hsbcTag'] = { zh: `汇丰配合：`, en: `HSBC support: ` };
  S['plan.deliverHead'] = { zh: `可验收交付`, en: `Acceptance deliverable` };

  /* ---------------- roles ---------------- */
  S['roles.h2'] = { zh: `研究任务与产品建设不能混在一起`, en: `Research tasks and product building must not be mixed` };
  S['roles.p']  = { zh: `SCUT回答“应该怎样设计、如何验证、怎样衡量”；汇丰回答“如何接入现有Agent Hub、如何安全上线和稳定运行”。`,
                    en: `SCUT answers “how it should be designed, how to validate it, how to measure it”; HSBC answers “how to integrate it into the existing Agent Hub, how to launch safely and run it reliably”.` };
  S['roles.scut.h3']  = { zh: `SCUT负责`, en: `SCUT is responsible for` };
  S['roles.scut.li1'] = { zh: `Policy生命周期、元数据、Context和证据模型`, en: `Policy lifecycle, metadata, Context and evidence models` };
  S['roles.scut.li2'] = { zh: `冲突、缺口、不可达与回归测试方法`, en: `Conflict, gap, unreachable and regression testing methods` };
  S['roles.scut.li3'] = { zh: `两个核心算法的设计、形式化与可行性验证`, en: `Design, formalisation and feasibility validation of the two core algorithms` };
  S['roles.scut.li4'] = { zh: `Benchmark场景、预期结果与指标口径`, en: `Benchmark scenarios, expected results and metric definitions` };
  S['roles.scut.li5'] = { zh: `Replay、Simulation和Evaluation方法`, en: `Replay, Simulation and Evaluation methods` };
  S['roles.scut.li6'] = { zh: `技术报告、论文与专利技术交底书`, en: `Technical reports, papers and patent disclosure documents` };
  S['roles.scut.p']   = { zh: `不承担：Agent Hub生产系统实现、集成与运维。`, en: `Not responsible for: Agent Hub production implementation, integration and operations.` };
  S['roles.hsbc.h3']  = { zh: `汇丰负责`, en: `HSBC is responsible for` };
  S['roles.hsbc.li1'] = { zh: `提供Agent Hub设计和代表性用例`, en: `Provide the Agent Hub design and representative use cases` };
  S['roles.hsbc.li2'] = { zh: `提供脱敏或合成的Policy、Trace与Decision Log`, en: `Provide desensitised or synthetic Policy, Trace and Decision Log` };
  S['roles.hsbc.li3'] = { zh: `实现Policy创建、审批、发布和附着功能`, en: `Implement Policy creation, approval, release and attachment` };
  S['roles.hsbc.li4'] = { zh: `接入OPA或其他Policy Engine及业务系统`, en: `Integrate OPA or another Policy Engine and business systems` };
  S['roles.hsbc.li5'] = { zh: `建设正式测试、Replay、Dashboard与审计功能`, en: `Build formal testing, Replay, Dashboard and audit capabilities` };
  S['roles.hsbc.li6'] = { zh: `负责安全、性能、合规、上线和持续运营`, en: `Own security, performance, compliance, launch and ongoing operations` };
  S['roles.hsbc.p']   = { zh: `双方共同：范围确认、阶段验收、数据治理、知识产权与成果发表。`, en: `Jointly: scope confirmation, stage acceptance, data governance, intellectual property and publication.` };

  /* ---------------- deliverables ---------------- */
  S['del.h2'] = { zh: `不是一份报告，而是六个可验收的交付包`, en: `Not one report, but six acceptance-ready deliverable packages` };
  S['del.p']  = { zh: `每个交付包都停留在“方法与可验证产物”这一层：既有设计说明，也有能在代表性业务场景中评价的样例与结论。`,
                  en: `Each package stays at the level of “methods and verifiable artefacts”: design documentation, plus samples and conclusions that can be evaluated in representative business scenarios.` };
  S['del.i1.h'] = { zh: `总体设计包`, en: `Overall design package` };
  S['del.i1.p'] = { zh: `需求基线、差距分析、目标架构、路线图与任务清单。`, en: `Requirement baseline, gap analysis, target architecture, roadmap and task list.` };
  S['del.i2.h'] = { zh: `引擎选型包`, en: `Engine selection package` };
  S['del.i2.p'] = { zh: `四引擎逐项评分、层级定位、选型结论与集成前提。`, en: `Point-by-point scoring of the four engines, layer positioning, selection conclusion and integration prerequisites.` };
  S['del.i3.h'] = { zh: `算法包`, en: `Algorithm package` };
  S['del.i3.p'] = { zh: `缺陷检测与反事实推演的算法设计、形式化表达与可行性论证。`, en: `Algorithm design, formalisation and feasibility argument for defect detection and counterfactual reasoning.` };
  S['del.i4.h'] = { zh: `验证与基准包`, en: `Validation & benchmark package` };
  S['del.i4.p'] = { zh: `冲突／缺口／回归测试方法、Benchmark场景、预期结果与Replay方法。`, en: `Conflict / gap / regression testing methods, Benchmark scenarios, expected results and Replay methods.` };
  S['del.i5.h'] = { zh: `证据与评价包`, en: `Evidence & evaluation package` };
  S['del.i5.p'] = { zh: `指标口径、基线结果与治理证据结论。`, en: `Metric definitions, baseline results and governance evidence conclusions.` };
  S['del.i6.h'] = { zh: `技术转移包`, en: `Technology transfer package` };
  S['del.i6.p'] = { zh: `最终报告、培训材料、论文初稿、专利技术交底书与Phase 2准入评估。`, en: `Final report, training materials, paper draft, patent disclosure documents and Phase 2 entry assessment.` };

  /* ---------------- glossary ---------------- */
  S['gl.h2'] = { zh: `本方案中的关键词`, en: `Key terms in this proposal` };
  S['gl.p']  = { zh: `保留难以准确翻译的英文，同时用一句话说明作用。`, en: `English terms that are hard to translate precisely are kept, each explained in one sentence.` };
  S['gl.i1.s'] = { zh: `规定Agent在什么条件下可以做什么、不能做什么，以及何时需要人工确认。`, en: `Defines what an Agent may and may not do under which conditions, and when human confirmation is required.` };
  S['gl.i2.s'] = { zh: `根据Policy和Context作出允许、拒绝、复核或降级判断。`, en: `Makes allow, deny, review or degrade decisions based on Policy and Context.` };
  S['gl.i3.s'] = { zh: `用户角色、Agent、工具、数据等级和用途等现场信息。`, en: `Situational information such as user role, Agent, tools, data level and purpose.` };
  S['gl.i4.s'] = { zh: `记录为何这样判断以及完整调用过程，用于审计和复现。`, en: `Records why a decision was made plus the full call sequence, for audit and reproduction.` };
  S['gl.i5.s'] = { zh: `重放历史或模拟新场景，不影响真实业务地测试Policy。`, en: `Replays history or simulates new scenarios to test Policy without affecting real business.` };
  S['gl.i6.s'] = { zh: `固定的标准场景和预期答案，用来客观比较Policy版本。`, en: `Fixed standard scenarios and expected answers for objectively comparing Policy versions.` };
  S['gl.i7.s'] = { zh: `解析规则时使用的内部结构，不是另一种Policy语言。`, en: `An internal structure used when parsing rules; not another Policy language.` };
  S['gl.i8.s'] = { zh: `判断一组逻辑条件能否同时成立的计算方法。`, en: `A computational method for deciding whether a set of logical conditions can hold simultaneously.` };
  S['gl.i9.s'] = { zh: `可以直接执行SAT/SMT计算、并返回解集的现成工具，用于求解是否冲突、是否覆盖。`, en: `An off-the-shelf tool that performs SAT/SMT computation and returns solution sets, used to solve whether rules conflict or are covered.` };

  /* ---------------- cta / footer ---------------- */
  S['cta.h2'] = { zh: `Phase 1的真正终点`, en: `The real endpoint of Phase 1` };
  S['cta.p']  = { zh: `汇丰不只是“装上一个Policy Engine”，而是拥有能持续管理、验证、度量和审计Agent行为的治理能力；SCUT的方法与算法成果也能被工程团队直接接管。`,
                  en: `HSBC does not merely “install a Policy Engine”; it gains governance capabilities that continuously manage, validate, measure and audit Agent behaviour, and SCUT's methods and algorithms can be taken over directly by the engineering team.` };
  S['cta.link'] = { zh: `从M1开始`, en: `Start at M1` };
  S['footer.a'] = { zh: `HSBC × SCUT · Agent Policy Governance Research Proposal`, en: `HSBC × SCUT · Agent Policy Governance Research Proposal` };
  S['footer.b'] = { zh: `Interactive concept demo · No confidential data`, en: `Interactive concept demo · No confidential data` };

  /* ---------------- architecture detail (per view) ---------------- */
  S['av.all.title'] = { zh: `完整闭环`, en: `Full loop` };
  S['av.all.copy']  = { zh: `上层决定“谁制定、谁审批、何时生效”，并由算法一在发布前找出规则缺陷；中层由 OPA 对每次 Agent 操作作出判断并执行；下层负责证据、评价与改进，算法二在此验证决策与数据暴露的实际影响。`,
                        en: `The top layer decides who authors, who approves and when a policy takes effect, with Algorithm 1 finding rule defects before release; the middle layer has OPA judge and enforce every Agent action; the bottom layer handles evidence, evaluation and improvement, where Algorithm 2 verifies the real impact on decisions and data exposure.` };
  S['av.before.title'] = { zh: `上线前 · 管理与发布`, en: `Before runtime · Management & release` };
  S['av.before.copy']  = { zh: `Policy 从创建、评审审批到测试发布；算法一在这一层介入，检查规则冲突、不可达、冗余覆盖与业务覆盖缺口，确保只有经过验证的版本才能进入生产。`,
                           en: `Policies go from creation and review to testing and release; Algorithm 1 steps in here, checking rule conflicts, unreachable rules, redundant coverage and business coverage gaps so that only validated versions reach production.` };
  S['av.runtime.title'] = { zh: `运行中 · Agent Hub 决策`, en: `During runtime · Agent Hub decisions` };
  S['av.runtime.copy']  = { zh: `每一次重要动作都经过 Policy Adapter 与 OPA 判断，再决定执行、拦截、降级或转人工；如需加强 Agent 行为与自然语言约束，可叠加 AGT。`,
                            en: `Every significant action is judged by the Policy Adapter and OPA, which then decide to execute, block, degrade or escalate; AGT can be layered on to strengthen Agent behaviour and natural-language constraints.` };
  S['av.after.title'] = { zh: `运行后 · 证据与改进`, en: `After runtime · Evidence & improvement` };
  S['av.after.copy']  = { zh: `OPA 决策日志留下事实来源，算法二据此做反事实重放与差分，其差分结果同时用于评价指标与审计复盘。`,
                          en: `The OPA decision log provides the factual basis; Algorithm 2 performs counterfactual replay and diffing, and the diff results feed both the evaluation metrics and audit review.` };

  /* ---------------- 12-month plan (dynamic) ---------------- */
  var MONTHS = {
    zh: [
      { m: `M1`, title: `启动与基线`, gate: ``, goal: `看清问题：现有 Agent Hub 与 Policy 执行能力到底长什么样`,
        scut: `建立方法框架：调研 Agent Hub 现状、Policy 执行链路、Trace 与 Decision Log 现状，列出能力差距清单。`,
        hsbc: `提供 Agent Hub 设计文档、代表性用例与脱敏样本，确认合作范围。`,
        deliver: `调研提纲与差距清单初稿（D01 起步）。` },
      { m: `M2`, title: `需求基线与口径`, gate: `Gate 1`, goal: `把 Phase 1 需求固化成 5 板块 11 功能点，并定义指标口径`,
        scut: `完成需求基线与量化目标口径初稿，明确覆盖率、误拦截、漏拦截等指标定义。`,
        hsbc: `确认 Scope、数据范围与验收门槛，与 SCUT 对齐指标定义。`,
        deliver: `需求基线与差距分析包（D01）。` },
      { m: `M3`, title: `引擎选型收敛`, gate: ``, goal: `把四个候选引擎的定位和分数说清楚`,
        scut: `完成 OPA / Cedar / AGT / Guardrails 的逐项评分与层级定位分析，搭建 OPA 参考环境。`,
        hsbc: `提供真实 Policy 样例与使用场景，协助评估集成成本。`,
        deliver: `Policy Engine 调研选型包初稿（D02）。` },
      { m: `M4`, title: `选型定稿与规范启动`, gate: `Gate 2`, goal: `选型结论落地，规范设计启动`,
        scut: `D02 定稿（OPA 为主、AGT + OPA 可选）；启动 Policy 规范设计（D03）；专利 P1 技术交底评审。`,
        hsbc: `确认选型结论，启动 Policy 管理功能的工程评估。`,
        deliver: `调研选型包（D02）定稿；规范包（D03）启动。` },
      { m: `M5`, title: `验证方法设计`, gate: ``, goal: `算法一设计成型，覆盖冲突、冗余、不可达、缺口`,
        scut: `完成算法一（语义约束规则图缺陷检测）的设计与最小实现；启动验证测试工具包（D05）与算法原型包（D07）。`,
        hsbc: `提供控制矩阵或正负样例，用于定义“覆盖缺口”。`,
        deliver: `算法一设计说明与参考原型（D07 起步）。` },
      { m: `M6`, title: `上线前能测试`, gate: `Gate 3`, goal: `冲突、缺口、回归三类检测方法可用`,
        scut: `完成冲突／缺口／不可达检测方法与回归测试方法；D05 验证测试工具包定稿；专利 P2 技术交底评审。`,
        hsbc: `实现 Policy 创建、审批、发布与附着功能，接入 OPA。`,
        deliver: `验证测试工具包（D05）；Policy 规范包（D03）定稿。` },
      { m: `M7`, title: `重放与基准设计`, gate: ``, goal: `算法二设计成型，Replay 与 Benchmark 方法定义清楚`,
        scut: `完成算法二（因果轨迹反事实重放）设计；定义 Replay / Simulation 方法；设计 Benchmark 场景与预期结果。`,
        hsbc: `提供历史 Trace 与 Decision Log，建设 Replay 与测试环境。`,
        deliver: `重放方法设计与基准场景集（D06 起步）。` },
      { m: `M8`, title: `基准与重放落地`, gate: `Gate 4`, goal: `能在不影响生产的前提下比较新旧 Policy`,
        scut: `D06 完成：标准场景、预期结果、Replay 方法、指标口径与基线结果；专利 P3 技术交底评审。`,
        hsbc: `在受控环境试运行，接入正式测试与 Dashboard。`,
        deliver: `Replay / Simulation / Benchmark 包（D06）。` },
      { m: `M9`, title: `指标与证据`, gate: ``, goal: `用真实或脱敏数据算出第一版基线`,
        scut: `基于脱敏生产数据计算覆盖率、误拦截、漏拦截、延迟与人工复核负担；启动指标与治理证据包（D08）。`,
        hsbc: `接入脱敏生产数据并维护基线，保障数据合规使用。`,
        deliver: `指标与治理证据包初稿（D08）。` },
      { m: `M10`, title: `量化与治理结论`, gate: `Gate 5`, goal: `把“好坏”变成可比较、可汇报的结论`,
        scut: `D08 定稿：指标口径、基线与改进结论；D04 参考实现收敛，D07 算法原型包收口。`,
        hsbc: `完成 OPA 集成与安全、性能、合规评审。`,
        deliver: `指标与治理证据包（D08）；Phase I 算法原型包（D07）。` },
      { m: `M11`, title: `验收与技术转移`, gate: ``, goal: `成果可被工程团队直接接管`,
        scut: `撰写最终技术验收报告（D10）与技术转移培训包（D11），完善专利技术交底书（D09）。`,
        hsbc: `组织验收，安排团队培训与上线运行交接。`,
        deliver: `最终报告与培训包（D10 / D11）。` },
      { m: `M12`, title: `收口与 Phase 2 评估`, gate: `Gate 6`, goal: `决定 Phase 2 是否具备进入条件`,
        scut: `完成验收答辩与材料移交，给出 Phase 2 准入评估结论。`,
        hsbc: `确认运维与审计闭环，决定 Phase 2 立项。`,
        deliver: `Phase 2 准入评估；D01–D11 交付闭环。` }
    ],
    en: [
      { m: `M1`, title: `Start-up & baseline`, gate: ``, goal: `See the problem clearly: what do the existing Agent Hub and policy enforcement actually look like`,
        scut: `Establish the method framework: survey the current Agent Hub, the policy enforcement chain and the state of Trace and Decision Log, and produce a capability-gap list.`,
        hsbc: `Provide Agent Hub design docs, representative use cases and desensitised samples; confirm the collaboration scope.`,
        deliver: `Draft research outline and gap list (D01 start).` },
      { m: `M2`, title: `Requirements baseline & metrics`, gate: `Gate 1`, goal: `Freeze Phase 1 requirements into 5 areas and 11 functional points, and define the metrics`,
        scut: `Complete the requirements baseline and a draft of quantified metric definitions, clarifying coverage, false blocks, missed blocks and so on.`,
        hsbc: `Confirm scope, data range and acceptance thresholds; align metric definitions with SCUT.`,
        deliver: `Requirements baseline and gap analysis package (D01).` },
      { m: `M3`, title: `Engine selection convergence`, gate: ``, goal: `Make the positioning and scores of the four candidate engines clear`,
        scut: `Complete point-by-point scoring and layer positioning of OPA / Cedar / AGT / Guardrails, and set up an OPA reference environment.`,
        hsbc: `Provide real Policy samples and usage scenarios; help assess integration cost.`,
        deliver: `Draft Policy Engine survey and selection package (D02).` },
      { m: `M4`, title: `Selection finalised & spec kick-off`, gate: `Gate 2`, goal: `The selection conclusion lands; specification design starts`,
        scut: `Finalise D02 (OPA primary, AGT + OPA optional); start the Policy specification design (D03); patent P1 disclosure review.`,
        hsbc: `Confirm the selection conclusion and start engineering assessment of Policy management features.`,
        deliver: `Survey & selection package (D02) finalised; specification package (D03) started.` },
      { m: `M5`, title: `Validation method design`, gate: ``, goal: `Algorithm 1 takes shape, covering conflicts, redundancy, unreachability and gaps`,
        scut: `Complete the design and minimal implementation of Algorithm 1 (semantic-constraint rule graph defect detection); start the validation test toolkit (D05) and algorithm prototype package (D07).`,
        hsbc: `Provide the control matrix or positive/negative samples used to define “coverage gaps”.`,
        deliver: `Algorithm 1 design document and reference prototype (D07 start).` },
      { m: `M6`, title: `Testable before release`, gate: `Gate 3`, goal: `Conflict, gap and regression detection methods become usable`,
        scut: `Complete conflict / gap / unreachable detection methods and regression testing methods; finalise the D05 validation test toolkit; patent P2 disclosure review.`,
        hsbc: `Implement Policy creation, approval, release and attachment; integrate OPA.`,
        deliver: `Validation test toolkit (D05); Policy specification package (D03) finalised.` },
      { m: `M7`, title: `Replay & benchmark design`, gate: ``, goal: `Algorithm 2 takes shape; Replay and Benchmark methods are defined`,
        scut: `Complete the design of Algorithm 2 (causal-trace counterfactual replay); define Replay / Simulation methods; design Benchmark scenarios and expected results.`,
        hsbc: `Provide historical Trace and Decision Log; build the Replay and test environment.`,
        deliver: `Replay method design and benchmark scenario set (D06 start).` },
      { m: `M8`, title: `Benchmark & replay in place`, gate: `Gate 4`, goal: `Compare old and new policies without affecting production`,
        scut: `Complete D06: standard scenarios, expected results, Replay methods, metric definitions and baseline results; patent P3 disclosure review.`,
        hsbc: `Pilot in a controlled environment; integrate formal testing and a Dashboard.`,
        deliver: `Replay / Simulation / Benchmark package (D06).` },
      { m: `M9`, title: `Metrics & evidence`, gate: ``, goal: `Compute a first baseline with real or desensitised data`,
        scut: `Compute coverage, false blocks, missed blocks, latency and manual-review load on desensitised production data; start the metrics and governance evidence package (D08).`,
        hsbc: `Connect desensitised production data and maintain the baseline; ensure compliant data use.`,
        deliver: `Draft metrics and governance evidence package (D08).` },
      { m: `M10`, title: `Quantification & governance conclusions`, gate: `Gate 5`, goal: `Turn “good or bad” into comparable, reportable conclusions`,
        scut: `Finalise D08: metric definitions, baseline and improvement conclusions; converge the D04 reference implementation and close out the D07 algorithm prototype package.`,
        hsbc: `Complete OPA integration and security, performance and compliance reviews.`,
        deliver: `Metrics and governance evidence package (D08); Phase I algorithm prototype package (D07).` },
      { m: `M11`, title: `Acceptance & technology transfer`, gate: ``, goal: `Results can be taken over directly by the engineering team`,
        scut: `Write the final technical acceptance report (D10) and the technology transfer training package (D11); refine patent disclosure documents (D09).`,
        hsbc: `Organise acceptance; arrange team training and go-live handover.`,
        deliver: `Final report and training package (D10 / D11).` },
      { m: `M12`, title: `Close-out & Phase 2 assessment`, gate: `Gate 6`, goal: `Decide whether Phase 2 can begin`,
        scut: `Complete the acceptance defence and material handover; give the Phase 2 entry assessment conclusion.`,
        hsbc: `Confirm the operations and audit loop is closed; decide on Phase 2 initiation.`,
        deliver: `Phase 2 entry assessment; D01–D11 delivery closed out.` }
    ]
  };

  return { S: S, MONTHS: MONTHS };
})();
