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
      copy: '上层负责“谁制定、谁审批、何时生效”；中层负责“每次Agent操作如何判断和执行”；下层负责“如何证明、评价和持续改进”。'
    },
    before: {
      title: '上线前 · 管理与发布',
      copy: 'Policy 从创建、评审审批到测试发布，确保只有经过验证的版本才能进入生产。'
    },
    runtime: {
      title: '运行中 · Agent Hub 决策',
      copy: '每一次重要动作都经过 Policy Adapter 与 Policy Engine 判断，再决定执行、拦截、降级或转人工。'
    },
    after: {
      title: '运行后 · 证据与改进',
      copy: '记录决策证据、重放与模拟、量化指标，并据此持续验证和优化 Policy。'
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

  // ---------- Timeline / Phase detail ----------
  var phaseButtons = document.querySelectorAll('.timeline .phase[data-i]');
  var phaseDetail = document.getElementById('phaseDetail');

  var phases = [
    { tag: 'M1–2 · Gate 1', title: '看清问题', desc: '调研、差距分析、目标设计',
      scut: '调研现有 Agent Hub 与 Policy 执行能力，梳理 Policy 生命周期、Context 与证据现状，明确差距与量化目标。',
      hsbc: '提供 Agent Hub 设计文档、代表性用例与脱敏样本，确认范围与验收口径。',
      deliver: '总体设计包：调研报告、差距分析、目标架构、路线图与任务清单。' },
    { tag: 'M3–4 · Gate 2', title: '统一语言', desc: '生命周期、Context、日志',
      scut: '定义 Policy 生命周期、元数据、Context 模型、Decision Log 与 Trace/审计证据格式。',
      hsbc: '核对规范与现有系统是否匹配，提供真实或合成的 Trace、Decision Log 样例。',
      deliver: 'Policy 规范包：生命周期、元数据、Context、Decision Log、Trace 与审计证据。' },
    { tag: 'M5–6 · Gate 3', title: '上线前能测试', desc: '冲突、缺口、回归验证',
      scut: '设计冲突、覆盖缺口与回归测试方法，产出参考脚本与验证原型。',
      hsbc: '实现 Policy 创建、审批、发布与附着功能，接入 OPA 或其它 Policy Engine。',
      deliver: '验证工具包：冲突、缺口、回归测试方法，以及参考脚本和原型。' },
    { tag: 'M7–8 · Gate 4', title: '安全地试', desc: 'Replay、Simulation、Benchmark',
      scut: '构建 Benchmark 场景与预期结果，定义 Replay 与 Simulation 方法并计算基线。',
      hsbc: '建设正式测试、Replay、Dashboard 与审计功能，并在受控环境试运行。',
      deliver: 'Benchmark 包：标准场景、预期结果、Replay 方法、指标和基线结果。' },
    { tag: 'M9–10 · Gate 5', title: '量化好坏', desc: '指标、基线与治理报告',
      scut: '计算覆盖率、误拦截、漏拦截、延迟与人工复核负担，形成治理报告。',
      hsbc: '接入脱敏生产数据并维护基线，负责安全、性能、合规与持续运营。',
      deliver: '治理报告：指标口径、基线与改进结论，支持 Phase 2 进入决策。' },
    { tag: 'M11–12 · Gate 6', title: '验证与移交', desc: '总结、培训、Phase 2 评估',
      scut: '整理最终报告、培训材料与论文初稿，评估 Phase 2 准入条件。',
      hsbc: '完成验收、团队培训与上线运行交接，确认运维与审计闭环。',
      deliver: '技术转移包：最终报告、培训、论文初稿与 Phase 2 准入评估。' }
  ];

  function renderPhase(i) {
    var p = phases[i];
    phaseDetail.innerHTML =
      '<div><span class="tag">' + p.tag + '</span>' +
      '<h3>' + p.title + '</h3>' +
      '<p>' + p.desc + '</p>' +
      '<ul><li><b>SCUT 重点：</b>' + p.scut + '</li>' +
      '<li><b>汇丰配合：</b>' + p.hsbc + '</li></ul></div>' +
      '<div><h3>可验收交付</h3><p>' + p.deliver + '</p></div>';
  }

  function setPhase(i) {
    phaseButtons.forEach(function (btn) {
      btn.classList.toggle('active', Number(btn.getAttribute('data-i')) === i);
    });
    renderPhase(i);
  }

  phaseButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setPhase(Number(btn.getAttribute('data-i')));
    });
  });

  // ---------- Init defaults ----------
  setArchView('all');
  setPhase(0);
})();
