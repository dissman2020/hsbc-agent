import {
  Button,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Code,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Link,
  Pill,
  Row,
  Stack,
  Stat,
  Text,
  useCanvasState,
  useHostTheme,
} from "cursor/canvas";

type Tab = "闭环" | "算法一" | "算法二" | "可行性";

const tabs: Tab[] = ["闭环", "算法一", "算法二", "可行性"];

function Step({ index, title, body }: { index: string; title: string; body: string }) {
  const theme = useHostTheme();
  return (
    <Row gap={12} align="start">
      <div
        style={{
          width: 26,
          height: 26,
          flex: "0 0 26px",
          display: "grid",
          placeItems: "center",
          borderRadius: 13,
          background: theme.accent.control,
          color: theme.text.onAccent,
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {index}
      </div>
      <Stack gap={3} style={{ minWidth: 0 }}>
        <Text weight="semibold">{title}</Text>
        <Text tone="secondary" size="small">{body}</Text>
      </Stack>
    </Row>
  );
}

function DefectRow({ name, formula, output }: { name: string; formula: string; output: string }) {
  const theme = useHostTheme();
  return (
    <div style={{ padding: "10px 0", borderBottom: `1px solid ${theme.stroke.tertiary}` }}>
      <Grid columns="130px minmax(220px, 1.3fr) minmax(180px, 1fr)" gap={12} align="start">
        <Text weight="semibold">{name}</Text>
        <Code style={{ whiteSpace: "normal" }}>{formula}</Code>
        <Text tone="secondary" size="small">{output}</Text>
      </Grid>
    </div>
  );
}

function ClosedLoop() {
  const theme = useHostTheme();
  const stages = [
    ["01", "静态扫描", "解析 Policy，构造语义约束规则图并筛选疑似缺陷。"],
    ["02", "约束证明", "用 SAT/SMT 求解冲突、冗余、不可达或覆盖缺口，生成见证输入。"],
    ["03", "反事实重放", "在隔离环境改变 Policy 版本、Agent 身份、数据等级或用途，重放决策点。"],
    ["04", "影响确认", "比较允许/拒绝、义务条件和数据暴露差异，定位最小致因变量集。"],
    ["05", "固化测试", "将已确认缺陷和见证输入转为回归用例，进入 Policy 发布流水线。"],
  ];
  return (
    <Stack gap={18}>
      <Grid columns="1.15fr 0.85fr" gap={18}>
        <Stack gap={14}>
          <H2>一套“静态发现 + 动态验证”的组合算法</H2>
          <Text>
            算法一回答“规则集合中是否存在逻辑缺陷”；算法二回答“如果改变关键条件，真实决策与后续执行会怎样变化”。二者共享 Policy 版本、Trace 和测试场景，形成可审计闭环。
          </Text>
          <div style={{ padding: 16, background: theme.fill.tertiary, borderRadius: 8 }}>
            <Stack gap={14}>
              {stages.map(([index, title, body]) => (
                <Step key={index} index={index} title={title} body={body} />
              ))}
            </Stack>
          </div>
        </Stack>
        <Card size="lg">
          <CardHeader trailing={<Pill size="sm" active>Phase I</Pill>}>推荐定位</CardHeader>
          <CardBody>
            <Stack gap={12}>
              <Stat value="8/10" label="算法一 Phase I 可行性" tone="success" />
              <Divider />
              <Stat value="7/10" label="算法二：决策层重放可行性" tone="success" />
              <Divider />
              <Stat value="5/10" label="算法二：端到端因果归因可行性" tone="warning" />
              <Callout tone="info" title="工程边界">
                AI 负责语义归一、候选生成和解释；生产决策仍由确定性 Policy 引擎执行。Phase I 不承诺对开放式 LLM 行为作强因果证明。
              </Callout>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
      <H2>共同数据底座</H2>
      <Grid columns={4} gap={10}>
        {[
          ["Policy 快照", "源码、IR、版本、Bundle Hash"],
          ["主体关系", "用户、Agent、委托链、角色"],
          ["数据语义", "资源、敏感等级、用途、地域"],
          ["执行证据", "Trace、决策、义务、执行结果"],
        ].map(([title, body]) => (
          <div key={title} style={{ borderTop: `2px solid ${theme.stroke.primary}`, paddingTop: 10 }}>
            <Text weight="semibold">{title}</Text>
            <Text tone="secondary" size="small" style={{ marginTop: 4 }}>{body}</Text>
          </div>
        ))}
      </Grid>
    </Stack>
  );
}

function AlgorithmOne() {
  return (
    <Stack gap={18}>
      <div>
        <H2>算法一：基于语义约束规则图的 Policy 缺陷检测</H2>
        <Text tone="secondary">目标：在规则上线前，找出冲突、重复、遮蔽/不可达、覆盖缺口与边界不一致，并给出可复现的见证输入。</Text>
      </div>
      <Grid columns="0.9fr 1.1fr" gap={18}>
        <Card>
          <CardHeader>统一规则中间表示</CardHeader>
          <CardBody>
            <Stack gap={10}>
              <Text><Code>r = &lt;S, A, R, C, E, O, P, V&gt;</Code></Text>
              <Text size="small" tone="secondary">S 主体；A 动作；R 资源；C 上下文条件；E 允许/拒绝；O 义务与限制；P 优先级；V 版本。</Text>
              <Divider />
              <Text weight="semibold">节点</Text>
              <Text size="small">Policy、Rule、Predicate、Entity、Attribute、Effect、Obligation。</Text>
              <Text weight="semibold">关系边</Text>
              <Text size="small">依赖、重叠、包含、冲突、覆盖/遮蔽、例外、属性读取、适用范围。</Text>
            </Stack>
          </CardBody>
        </Card>
        <Stack gap={12}>
          <H3>“语义约束”不是向量相似度</H3>
          <Text>它是可计算的业务约束集合：类型与 Schema、身份与委托链、数据分级、处理用途、地域、时间窗、职责分离、默认拒绝、Deny 优先及例外关系。</Text>
          <Callout tone="neutral" title="AI 的合适位置">
            大模型或嵌入模型可建议“客户号≈customer_id”等概念映射，也可提取自然语言意图；最终缺陷结论必须由 Schema、规则语义和约束求解器确认。
          </Callout>
        </Stack>
      </Grid>
      <H3>检测逻辑</H3>
      <div>
        <DefectRow name="规则冲突" formula="SAT(Cᵢ ∧ Cⱼ ∧ Effectᵢ≠Effectⱼ)" output="返回同时命中两条异效规则的主体、动作、资源和上下文。" />
        <DefectRow name="规则冗余" formula="UNSAT(Cᵢ ∧ ¬Cⱼ)，且 Effectᵢ=Effectⱼ" output="证明规则 i 的适用域被规则 j 完全包含。" />
        <DefectRow name="遮蔽/不可达" formula="UNSAT(Cᵢ ∧ Global ∧ ¬PriorOverride)" output="证明在全局约束与优先级语义下，该规则永远不能决定结果。" />
        <DefectRow name="覆盖缺口" formula="SAT(RequiredDomain ∧ ¬∨CoveredRule)" output="返回应有控制但未被任何规则覆盖的请求样例；必须先定义 RequiredDomain。" />
        <DefectRow name="义务不一致" formula="SAT(Cᵢ ∧ Cⱼ ∧ incompatible(Oᵢ,Oⱼ))" output="发现同一请求同时要求互斥的数据脱敏、审批或留存动作。" />
      </div>
      <H3>计算流程</H3>
      <Grid columns={3} gap={14}>
        <Stack gap={8}><Step index="1" title="解析与归一" body="将 Rego、Cedar 或内部 DSL 解析为 AST，再映射为统一 IR。" /><Step index="2" title="候选剪枝" body="按主体、动作、资源、属性依赖建立索引，仅比较可能重叠的规则。" /></Stack>
        <Stack gap={8}><Step index="3" title="构图" body="生成规则—谓词—实体—效果图，并计算包含、例外和覆盖关系。" /><Step index="4" title="约束求解" body="把候选关系编码为 SAT/SMT/BDD 问题，判定可满足性或包含性。" /></Stack>
        <Stack gap={8}><Step index="5" title="生成证据" body="输出缺陷类型、规则路径、满足赋值、影响范围和置信度。" /><Step index="6" title="转回归测试" body="把见证输入写成 Policy 单元测试或 CI 阻断条件。" /></Stack>
      </Grid>
    </Stack>
  );
}

function AlgorithmTwo() {
  const theme = useHostTheme();
  return (
    <Stack gap={18}>
      <div>
        <H2>算法二：基于因果执行轨迹重放的 Policy 反事实推演</H2>
        <Text tone="secondary">目标：回答“如果 Policy 版本、Agent 身份、委托关系、数据等级、用途或环境改变，决策及受控下游结果是否改变”。</Text>
      </div>
      <Grid columns="1fr 1fr" gap={18}>
        <Stack gap={12}>
          <H3>因果执行图</H3>
          <div style={{ background: theme.fill.tertiary, padding: 16, borderRadius: 8 }}>
            <Stack gap={10}>
              <Row gap={7} wrap>
                {['用户 U', 'Agent/委托 A', '数据等级 D', '用途 P', '工具 T', 'Policy 版本 V', '环境 E'].map((v) => <Pill key={v}>{v}</Pill>)}
              </Row>
              <Text size="small" tone="secondary">这些变量共同决定</Text>
              <Row gap={8} align="center"><Pill active>Policy 决策 Y</Pill><Text tone="tertiary">→</Text><Pill active>受控执行结果 O</Pill></Row>
            </Stack>
          </div>
          <Text size="small">图结构优先来自系统拓扑、Policy 依赖和事件顺序；不依赖从少量日志中“盲学”因果关系。</Text>
        </Stack>
        <Card>
          <CardHeader>反事实干预示例</CardHeader>
          <CardBody>
            <Stack gap={10}>
              <Text><Code>do(V = policy_v2)</Code>：同一请求切换到新版本</Text>
              <Text><Code>do(A = external_agent)</Code>：替换执行 Agent 或委托链</Text>
              <Text><Code>do(D = restricted)</Code>：提升数据敏感级别</Text>
              <Text><Code>do(P = external_share)</Code>：改变处理用途</Text>
              <Text><Code>do(E.region = EU)</Code>：改变地域/环境约束</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
      <H3>一条 Trace 至少要保留什么</H3>
      <Grid columns={3} gap={12}>
        {[
          ["身份与请求", "用户、Agent、委托链、动作、资源、上下文"],
          ["可重放快照", "Policy/Bundle Hash、配置、实体数据、模型与工具版本"],
          ["证据与边界", "决策、命中规则、义务、Reason Code、执行结果、副作用边界"],
        ].map(([title, body]) => (
          <div key={title} style={{ padding: 14, border: `1px solid ${theme.stroke.tertiary}`, borderRadius: 8 }}>
            <Text weight="semibold">{title}</Text>
            <Text size="small" tone="secondary" style={{ marginTop: 5 }}>{body}</Text>
          </div>
        ))}
      </Grid>
      <H3>推演流程</H3>
      <Grid columns={2} gap={18}>
        <Stack gap={11}>
          <Step index="1" title="轨迹标准化" body="按 Trace ID 和事件序列关联跨 Agent、Policy 决策点及工具调用。" />
          <Step index="2" title="建立检查点" body="在每次 Policy 决策前保存最小可重放状态，并冻结版本与配置。" />
          <Step index="3" title="施加干预" body="只修改白名单变量，保留其余事实条件，生成一个或多个反事实分支。" />
          <Step index="4" title="隔离重放" body="精确重放确定性 PDP；对工具与外部系统使用 Mock、沙箱或只读替身。" />
        </Stack>
        <Stack gap={11}>
          <Step index="5" title="差异度量" body="比较允许/拒绝翻转、义务变化、敏感字段暴露、路径与时延变化。" />
          <Step index="6" title="最小致因搜索" body="用 delta debugging、贪心/束搜索或约束求解，找到触发差异的最小变量集。" />
          <Step index="7" title="不确定性处理" body="确定性 Policy 给出精确结论；随机模型固定种子或多次采样并报告区间。" />
          <Step index="8" title="固化证据" body="输出事实/反事实 Trace、变量变化、受影响规则及可复现回归用例。" />
        </Stack>
      </Grid>
      <Callout tone="warning" title="关键术语边界">
        “因果”在 Phase I 中指基于已知系统依赖实施受控干预并比较结果，不等同于从观察日志直接证明端到端业务因果。对 LLM 自由生成、第三方 API 和人工流程，只能给出条件化影响或统计置信度。
      </Callout>
    </Stack>
  );
}

function Feasibility() {
  return (
    <Stack gap={18}>
      <H2>Phase I 可行性与建议范围</H2>
      <Grid columns="1fr 1fr" gap={18}>
        <Card>
          <CardHeader trailing={<Pill size="sm" active>高</Pill>}>算法一：规则图缺陷检测</CardHeader>
          <CardBody>
            <Stack gap={9}>
              <Text>结构化 Policy + 有限属性域下可行性高。解析器、Schema 校验、Policy 测试/覆盖率、部分求值和 SMT 求解均有成熟基础。</Text>
              <Text size="small" tone="secondary">首期建议：冲突、冗余、不可达、覆盖缺口四类；统一 IR + 图索引 + Z3/等价求解器 + CI 集成。无需把图神经网络作为主线。</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader trailing={<Pill size="sm" active>中高</Pill>}>算法二：决策层反事实重放</CardHeader>
          <CardBody>
            <Stack gap={9}>
              <Text>PDP 决策层高度可行；PEP 执行层在工具 Mock 和副作用隔离后可行；开放式 LLM/外部业务结果的强因果归因不宜列为 Phase I 验收项。</Text>
              <Text size="small" tone="secondary">首期建议：Policy 版本切换、Agent/委托链变化、数据等级变化、用途变化四类干预；先覆盖 2–3 个代表性流程。</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
      <H3>主要难点与处理</H3>
      <Grid columns={2} gap={16}>
        <Stack gap={10}>
          <Step index="A" title="缺少业务意图" body="仅凭现有规则无法证明“缺口”；必须增加 RequiredDomain、控制矩阵或正负样例。" />
          <Step index="B" title="状态空间爆炸" body="按主体/动作/资源建索引，有限域抽象，采用增量分析和候选剪枝。" />
          <Step index="C" title="动态外部数据" body="部分求值固定已知量，对不可冻结数据做快照、范围抽象或降级为运行时验证。" />
        </Stack>
        <Stack gap={10}>
          <Step index="D" title="Trace 不完整" body="统一事件 Schema，记录 Policy/配置/实体快照 Hash，并贯通跨服务 Trace Context。" />
          <Step index="E" title="副作用与隐私" body="重放环境默认阻断写操作，工具调用使用替身；日志字段分级、脱敏和最小化留存。" />
          <Step index="F" title="随机与隐藏状态" body="区分确定性结论和统计结论；固定种子、多次采样，并明确未观测变量。" />
        </Stack>
      </Grid>
      <H3>建议验收指标</H3>
      <Grid columns={4} gap={12}>
        <Stat value="≥ 90%" label="注入缺陷检出率目标" />
        <Stat value="≤ 10%" label="人工复核误报率目标" />
        <Stat value="100%" label="缺陷具备见证输入" />
        <Stat value="100%" label="重放结果可关联版本与 Trace" />
      </Grid>
      <Callout tone="info" title="专利交底的技术抓手">
        建议把创新点落在“多 Agent 委托与数据流语义约束的统一构图、可满足性见证生成、带版本快照的因果轨迹分叉、最小干预集搜索、缺陷—重放—回归闭环”，而不是泛化描述为“AI 自动检测”。
      </Callout>
      <H3>官方能力依据</H3>
      <Text size="small" tone="secondary">
        <Link href="https://www.openpolicyagent.org/docs/policy-testing">OPA Policy Testing</Link> · <Link href="https://www.openpolicyagent.org/docs/policy-performance">OPA partial evaluation / performance</Link> · <Link href="https://docs.cedarpolicy.com/policies/validation.html">Cedar validation</Link> · <Link href="https://docs.cedarpolicy.com/auth/authorization.html">Cedar authorization semantics</Link> · <Link href="https://microsoft.github.io/z3guide/">Z3 Guide</Link> · <Link href="https://opentelemetry.io/docs/specs/otel/context/">OpenTelemetry Context</Link> · <Link href="https://www.w3.org/TR/trace-context/">W3C Trace Context</Link>
      </Text>
    </Stack>
  );
}

export default function PolicyAlgorithmFeasibility() {
  const theme = useHostTheme();
  const [active, setActive] = useCanvasState<Tab>("policy-algorithm-tab", "闭环");
  return (
    <div style={{ minHeight: "100vh", background: theme.bg.editor, color: theme.text.primary, padding: "28px clamp(20px, 4vw, 52px) 52px" }}>
      <Stack gap={20} style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ borderBottom: `1px solid ${theme.stroke.secondary}`, paddingBottom: 18 }}>
          <Row gap={12} justify="space-between" align="end" wrap>
            <Stack gap={7} style={{ maxWidth: 820 }}>
              <Text size="small" weight="semibold" style={{ color: theme.accent.primary, letterSpacing: 0.5 }}>AGENT POLICY GOVERNANCE · PHASE I</Text>
              <H1>两项 Policy 算法的原理与可行性</H1>
              <Text tone="secondary">面向 Agent 间数据泄露、权限管控、规则质量和变更风险的可落地技术方案。</Text>
            </Stack>
            <Button variant="secondary" onClick={() => setActive("可行性")}>查看 Phase I 边界</Button>
          </Row>
        </div>
        <Row gap={8} wrap>
          {tabs.map((tab) => <Pill key={tab} active={active === tab} onClick={() => setActive(tab)}>{tab}</Pill>)}
        </Row>
        {active === "闭环" && <ClosedLoop />}
        {active === "算法一" && <AlgorithmOne />}
        {active === "算法二" && <AlgorithmTwo />}
        {active === "可行性" && <Feasibility />}
      </Stack>
    </div>
  );
}
