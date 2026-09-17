(function () {
  'use strict';

  // ---------- Architecture view switching ----------
  var archTabs = document.querySelectorAll('.arch-tabs button[data-view]');
  var archLayers = document.querySelectorAll('.arch .layer[data-stage]');
  var archNodes = document.querySelectorAll('.arch .nodes button[data-title]');
  var archDetail = document.getElementById('archDetail');

  var archViews = {
    all: {
      title: '完整闭环',
      copy: '上层决定“谁制定、谁审批、何时生效”，并由算法一在发布前找出规则缺陷；中层由 OPA 对每次 Agent 操作作出判断并执行；下层负责证据、评价与改进，算法二在此验证决策与数据暴露的实际影响。'
    },
    before: {
      title: '上线前 · 管理与发布',
      copy: 'Policy 从创建、评审审批到测试发布；算法一在这一层介入，检查规则冲突、不可达、冗余覆盖与业务覆盖缺口，确保只有经过验证的版本才能进入生产。'
    },
    runtime: {
      title: '运行中 · Agent Hub 决策',
      copy: '每一次重要动作都经过 Policy Adapter 与 OPA 判断，再决定执行、拦截、降级或转人工；如需加强 Agent 行为与自然语言约束，可叠加 AGT。'
    },
    after: {
      title: '运行后 · 证据与改进',
      copy: 'OPA 决策日志留下事实来源，算法二据此做反事实重放与差分，其差分结果同时用于评价指标与审计复盘。'
    }
  };

  function setArchDetail(title, copy) {
    archDetail.innerHTML = '<strong></strong><span></span>';
    archDetail.querySelector('strong').textContent = title;
    archDetail.querySelector('span').textContent = copy;
  }

  function setArchView(view) {
    archTabs.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-view') === view);
    });
    archLayers.forEach(function (layer) {
      var show = view === 'all' || layer.getAttribute('data-stage') === view;
      layer.style.display = show ? '' : 'none';
    });
    archNodes.forEach(function (node) {
      node.classList.remove('selected');
    });
    var v = archViews[view];
    setArchDetail(v.title, v.copy);
  }

  archTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setArchView(btn.getAttribute('data-view'));
    });
  });

  archNodes.forEach(function (node) {
    node.addEventListener('click', function () {
      archNodes.forEach(function (n) { n.classList.remove('selected'); });
      node.classList.add('selected');
      setArchDetail(node.getAttribute('data-title'), node.getAttribute('data-copy'));
    });
  });

  // ---------- Monthly plan (12 months) ----------
  var monthGrid = document.getElementById('planMonths');
  var phaseDetail = document.getElementById('phaseDetail');

  var months = [
    { m: 'M1', title: '启动与基线', gate: '',
      goal: '看清问题：现有 Agent Hub 与 Policy 执行能力到底长什么样',
      scut: '建立方法框架：调研 Agent Hub 现状、Policy 执行链路、Trace 与 Decision Log 现状，列出能力差距清单。',
      hsbc: '提供 Agent Hub 设计文档、代表性用例与脱敏样本，确认合作范围。',
      deliver: '调研提纲与差距清单初稿（D01 起步）。' },
    { m: 'M2', title: '需求基线与口径', gate: 'Gate 1',
      goal: '把 Phase 1 需求固化成 5 板块 11 功能点，并定义指标口径',
      scut: '完成需求基线与量化目标口径初稿，明确覆盖率、误拦截、漏拦截等指标定义。',
      hsbc: '确认 Scope、数据范围与验收门槛，与 SCUT 对齐指标定义。',
      deliver: '需求基线与差距分析包（D01）。' },
    { m: 'M3', title: '引擎选型收敛', gate: '',
      goal: '把四个候选引擎的定位和分数说清楚',
      scut: '完成 OPA / Cedar / AGT / Guardrails 的逐项评分与层级定位分析，搭建 OPA 参考环境。',
      hsbc: '提供真实 Policy 样例与使用场景，协助评估集成成本。',
      deliver: 'Policy Engine 调研选型包初稿（D02）。' },
    { m: 'M4', title: '选型定稿与规范启动', gate: 'Gate 2',
      goal: '选型结论落地，规范设计启动',
      scut: 'D02 定稿（OPA 为主、AGT + OPA 可选）；启动 Policy 规范设计（D03）；专利 P1 技术交底评审。',
      hsbc: '确认选型结论，启动 Policy 管理功能的工程评估。',
      deliver: '调研选型包（D02）定稿；规范包（D03）启动。' },
    { m: 'M5', title: '验证方法设计', gate: '',
      goal: '算法一设计成型，覆盖冲突、冗余、不可达、缺口',
      scut: '完成算法一（语义约束规则图缺陷检测）的设计与最小实现；启动验证测试工具包（D05）与算法原型包（D07）。',
      hsbc: '提供控制矩阵或正负样例，用于定义“覆盖缺口”。',
      deliver: '算法一设计说明与参考原型（D07 起步）。' },
    { m: 'M6', title: '上线前能测试', gate: 'Gate 3',
      goal: '冲突、缺口、回归三类检测方法可用',
      scut: '完成冲突／缺口／不可达检测方法与回归测试方法；D05 验证测试工具包定稿；专利 P2 技术交底评审。',
      hsbc: '实现 Policy 创建、审批、发布与附着功能，接入 OPA。',
      deliver: '验证测试工具包（D05）；Policy 规范包（D03）定稿。' },
    { m: 'M7', title: '重放与基准设计', gate: '',
      goal: '算法二设计成型，Replay 与 Benchmark 方法定义清楚',
      scut: '完成算法二（因果轨迹反事实重放）设计；定义 Replay / Simulation 方法；设计 Benchmark 场景与预期结果。',
      hsbc: '提供历史 Trace 与 Decision Log，建设 Replay 与测试环境。',
      deliver: '重放方法设计与基准场景集（D06 起步）。' },
    { m: 'M8', title: '基准与重放落地', gate: 'Gate 4',
      goal: '能在不影响生产的前提下比较新旧 Policy',
      scut: 'D06 完成：标准场景、预期结果、Replay 方法、指标口径与基线结果；专利 P3 技术交底评审。',
      hsbc: '在受控环境试运行，接入正式测试与 Dashboard。',
      deliver: 'Replay / Simulation / Benchmark 包（D06）。' },
    { m: 'M9', title: '指标与证据', gate: '',
      goal: '用真实或脱敏数据算出第一版基线',
      scut: '基于脱敏生产数据计算覆盖率、误拦截、漏拦截、延迟与人工复核负担；启动指标与治理证据包（D08）。',
      hsbc: '接入脱敏生产数据并维护基线，保障数据合规使用。',
      deliver: '指标与治理证据包初稿（D08）。' },
    { m: 'M10', title: '量化与治理结论', gate: 'Gate 5',
      goal: '把“好坏”变成可比较、可汇报的结论',
      scut: 'D08 定稿：指标口径、基线与改进结论；D04 参考实现收敛，D07 算法原型包收口。',
      hsbc: '完成 OPA 集成与安全、性能、合规评审。',
      deliver: '指标与治理证据包（D08）；Phase I 算法原型包（D07）。' },
    { m: 'M11', title: '验收与技术转移', gate: '',
      goal: '成果可被工程团队直接接管',
      scut: '撰写最终技术验收报告（D10）与技术转移培训包（D11），完善专利技术交底书（D09）。',
      hsbc: '组织验收，安排团队培训与上线运行交接。',
      deliver: '最终报告与培训包（D10 / D11）。' },
    { m: 'M12', title: '收口与 Phase 2 评估', gate: 'Gate 6',
      goal: '决定 Phase 2 是否具备进入条件',
      scut: '完成验收答辩与材料移交，给出 Phase 2 准入评估结论。',
      hsbc: '确认运维与审计闭环，决定 Phase 2 立项。',
      deliver: 'Phase 2 准入评估；D01–D11 交付闭环。' }
  ];

  function buildMonthButtons() {
    if (!monthGrid) return;
    var html = '';
    months.forEach(function (mo, i) {
      html += '<button class="month' + (i === 0 ? ' active' : '') + '" data-m="' + i + '">' +
        (mo.gate ? '<span class="gate">' + mo.gate + '</span>' : '') +
        '<span>' + mo.m + '</span>' +
        '<h3>' + mo.title + '</h3>' +
        '</button>';
    });
    monthGrid.innerHTML = html;
  }

  function renderMonth(i) {
    var mo = months[i];
    phaseDetail.innerHTML =
      '<div><span class="tag">' + mo.m + (mo.gate ? ' · ' + mo.gate : '') + '</span>' +
      '<h3>' + mo.title + '</h3>' +
      '<p>' + mo.goal + '</p>' +
      '<ul><li><b>SCUT 重点：</b>' + mo.scut + '</li>' +
      '<li><b>汇丰配合：</b>' + mo.hsbc + '</li></ul></div>' +
      '<div><h3>可验收交付</h3><p>' + mo.deliver + '</p></div>';
  }

  function setMonth(i) {
    var btns = monthGrid ? monthGrid.querySelectorAll('.month[data-m]') : [];
    btns.forEach(function (btn) {
      btn.classList.toggle('active', Number(btn.getAttribute('data-m')) === i);
    });
    renderMonth(i);
  }

  buildMonthButtons();
  if (monthGrid) {
    monthGrid.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.month[data-m]') : null;
      if (!btn || !monthGrid.contains(btn)) return;
      setMonth(Number(btn.getAttribute('data-m')));
    });
  }

  // ---------- Init defaults ----------
  setArchView('all');
  setMonth(0);
})();
