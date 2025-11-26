// Project Data
const projectData = {
  name: "Centro de Tecnologias de Reabilitação Neuromotora",
  duration_months: 18,
  total_budget: 2912300.00,
  budget_by_category: [
    { category: "Bolsas", value: 915400.00, percentage: 31.4 },
    { category: "Permanente", value: 1319466.02, percentage: 45.3 },
    { category: "Serviços e Custos", value: 677433.98, percentage: 23.3 }
  ],
  axes: [
    {
      name: "Eixo Anselmo",
      budget: 220666.02,
      percentage: 7.58,
      color: "#0066cc",
      icon: "👨‍🏫",
      activities: [
        { id: "anselmo1", name: "Bolsas de Pesquisa", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 196200.00 },
        { id: "anselmo2", name: "Consumo e Diárias", start_month: 3, end_month: 15, duration: 13, status: "planejado", investment: 10466.02 },
        { id: "anselmo3", name: "Passagens", start_month: 6, end_month: 12, duration: 7, status: "planejado", investment: 14000.00 }
      ]
    },
    {
      name: "Eixo Comum",
      budget: 2029635.92,
      percentage: 69.69,
      color: "#00cc66",
      icon: "🌐",
      activities: [
        { id: "comum1", name: "Bolsas", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 223200.00 },
        { id: "comum2", name: "Consumo e Diárias", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 106300.00 },
        { id: "comum3", name: "Passagens", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 16000.00 },
        { id: "comum4", name: "Equipamentos Permanentes", start_month: 2, end_month: 10, duration: 9, status: "planejado", investment: 1277000.00 },
        { id: "comum5", name: "Serviços", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 406835.92 }
      ]
    },
    {
      name: "Eixo Durigan",
      budget: 220666.02,
      percentage: 7.58,
      color: "#cc0000",
      icon: "👨‍🔬",
      activities: [
        { id: "durigan1", name: "Bolsas de Pesquisa", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 196200.00 },
        { id: "durigan2", name: "Consumo e Diárias", start_month: 3, end_month: 15, duration: 13, status: "planejado", investment: 10466.02 },
        { id: "durigan3", name: "Passagens", start_month: 6, end_month: 12, duration: 7, status: "planejado", investment: 14000.00 }
      ]
    },
    {
      name: "Eixo Henrique",
      budget: 220666.02,
      percentage: 7.58,
      color: "#ff9900",
      icon: "👨‍💻",
      activities: [
        { id: "henrique1", name: "Bolsas de Pesquisa", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 178200.00 },
        { id: "henrique2", name: "Equipamentos", start_month: 4, end_month: 8, duration: 5, status: "planejado", investment: 42466.02 }
      ]
    },
    {
        name: "Eixo Roberto",
        budget: 220666.02,
        percentage: 7.58,
        color: "#9933cc",
        icon: "👨‍⚕️",
        activities: [
        { id: "roberto1", name: "Bolsas de Pesquisa", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 196200.00 },
        { id: "roberto2", name: "Consumo e Diárias", start_month: 3, end_month: 15, duration: 13, status: "planejado", investment: 10466.02 },
        { id: "roberto3", name: "Passagens", start_month: 6, end_month: 12, duration: 7, status: "planejado", investment: 14000.00 }
      ]
    }
  ],
  monthly_plan: [
    // This needs to be recalculated. I will just create a linear distribution for now.
    // Total budget: 2,912,300.00 / 18 = 161794.44 per month
    { month: 1, planned_investment: 161794.44, cumulative_percent: 5.56 },
    { month: 2, planned_investment: 161794.44, cumulative_percent: 11.11 },
    { month: 3, planned_investment: 161794.44, cumulative_percent: 16.67 },
    { month: 4, planned_investment: 161794.44, cumulative_percent: 22.22 },
    { month: 5, planned_investment: 161794.44, cumulative_percent: 27.78 },
    { month: 6, planned_investment: 161794.44, cumulative_percent: 33.33 },
    { month: 7, planned_investment: 161794.44, cumulative_percent: 38.89 },
    { month: 8, planned_investment: 161794.44, cumulative_percent: 44.44 },
    { month: 9, planned_investment: 161794.44, cumulative_percent: 50.00 },
    { month: 10, planned_investment: 161794.44, cumulative_percent: 55.56 },
    { month: 11, planned_investment: 161794.44, cumulative_percent: 61.11 },
    { month: 12, planned_investment: 161794.44, cumulative_percent: 66.67 },
    { month: 13, planned_investment: 161794.44, cumulative_percent: 72.22 },
    { month: 14, planned_investment: 161794.44, cumulative_percent: 77.78 },
    { month: 15, planned_investment: 161794.44, cumulative_percent: 83.33 },
    { month: 16, planned_investment: 161794.44, cumulative_percent: 88.89 },
    { month: 17, planned_investment: 161794.44, cumulative_percent: 94.44 },
    { month: 18, planned_investment: 161794.48, cumulative_percent: 100.00 }
  ],
  milestones: [
    { month: 6, title: "Aquisição de Equipamentos Críticos", description: "Compra dos principais equipamentos permanentes" },
    { month: 12, title: "Conclusão da Fase 1 de Pesquisa", description: "Finalização das pesquisas iniciais e coleta de dados" },
    { month: 18, title: "Encerramento do Projeto", description: "Resultados consolidados e projeto concluído" }
  ],
  risks: [
    { id: "risk1", axis: "Eixo Comum", title: "Atraso na importação de equipamentos", probability: "média", impact: "alta", mitigation: "Iniciar processo de importação com antecedência" },
    { id: "risk2", axis: "Todos", title: "Contigenciamento de verba", probability: "baixa", impact: "alta", mitigation: "Acompanhamento rigoroso do orçamento" }
  ]
};

// Performance data (in-memory state)
const performanceData = {
  months: projectData.monthly_plan.map(m => ({
    month: m.month,
    planned_investment: m.planned_investment,
    actual_investment: 0,
    planned_physical: m.cumulative_percent,
    actual_physical: 0
  }))
};

// Chart instances
let axisChart, categoryChart, sCurveChart;

// Utility Functions
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

function calculateVariance(planned, actual) {
  if (planned === 0) return 0;
  return ((actual - planned) / planned * 100).toFixed(1);
}

function getVarianceClass(variance) {
  const v = parseFloat(variance);
  if (Math.abs(v) < 10) return 'status-good';
  if (Math.abs(v) < 20) return 'status-warning';
  return 'status-danger';
}

// Navigation
function setupNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const viewSections = document.querySelectorAll('.view-section');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetView = tab.dataset.view;

      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      viewSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetView) {
          section.classList.add('active');
        }
      });

      // Render view-specific content
      if (targetView === 'cronograma') {
        renderAxisContent(0);
      } else if (targetView === 'desempenho') {
        renderPerformanceTable();
      } else if (targetView === 'curva-s') {
        renderSCurve();
      }
    });
  });
}

// Visão Geral
function renderOverview() {
  renderAxisChart();
  renderCategoryChart();
  renderTimeline();
}

function renderAxisChart() {
  const ctx = document.getElementById('axisChart').getContext('2d');
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'];

  axisChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: projectData.axes.map(a => a.name),
      datasets: [{
        data: projectData.axes.map(a => a.budget),
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: { size: 12 }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = formatCurrency(context.parsed);
              const percentage = projectData.axes[context.dataIndex].percentage;
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function renderCategoryChart() {
  const ctx = document.getElementById('categoryChart').getContext('2d');
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545'];

  categoryChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: projectData.budget_by_category.map(c => c.category),
      datasets: [{
        label: 'Valor (R$)',
        data: projectData.budget_by_category.map(c => c.value),
        backgroundColor: colors,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              const value = formatCurrency(context.parsed.y);
              const percentage = projectData.budget_by_category[context.dataIndex].percentage;
              return `${value} (${percentage}%)`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return 'R$ ' + (value / 1000).toFixed(0) + 'k';
            }
          }
        }
      }
    }
  });
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  projectData.milestones.forEach(milestone => {
    const milestoneEl = document.createElement('div');
    milestoneEl.className = 'milestone';
    milestoneEl.innerHTML = `
      <div class="milestone-dot"></div>
      <div class="milestone-label">${milestone.title}</div>
      <div class="milestone-month">Mês ${milestone.month}</div>
    `;
    timeline.appendChild(milestoneEl);
  });
}

// Cronograma Detalhado
function setupAxisTabs() {
  const axisTabs = document.querySelectorAll('.axis-tab');

  axisTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const axisIndex = parseInt(tab.dataset.axis);

      axisTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      renderAxisContent(axisIndex);
    });
  });
}

function renderAxisContent(axisIndex) {
  const axis = projectData.axes[axisIndex];
  const content = document.getElementById('axis-content');

  let html = `
    <div class="axis-header">
      <div class="axis-title">
        <span style="font-size: 36px;">${axis.icon}</span>
        <span>${axis.name}</span>
      </div>
      <div class="axis-budget">${formatCurrency(axis.budget)}</div>
    </div>
    <div class="activities-list">
  `;

  axis.activities.forEach(activity => {
    const investmentDisplay = activity.investment > 0 ? formatCurrency(activity.investment) : '-';
    html += `
      <div class="activity-item">
        <div class="activity-info">
          <div class="activity-name">${activity.name}</div>
          <div class="activity-period">Mês ${activity.start_month} - ${activity.end_month} (${activity.duration} meses)</div>
        </div>
        <div class="activity-investment">${investmentDisplay}</div>
        <div class="activity-status">${activity.status}</div>
      </div>
    `;
  });

  html += `</div>`;
  content.innerHTML = html;
}

// Desempenho
function renderPerformanceTable() {
  const table = document.getElementById('performanceTable');

  let html = `
    <thead>
      <tr>
        <th>Mês</th>
        <th>Investimento Planejado</th>
        <th>Investimento Real</th>
        <th>Variância (%)</th>
        <th>Progresso Físico Planejado</th>
        <th>Progresso Físico Real</th>
        <th>Variância (%)</th>
      </tr>
    </thead>
    <tbody>
  `;

  let cumPlanned = 0;
  let cumActual = 0;

  performanceData.months.forEach((m, index) => {
    cumPlanned += m.planned_investment;
    cumActual += m.actual_investment;

    const finVariance = calculateVariance(m.planned_investment, m.actual_investment);
    const physVariance = calculateVariance(m.planned_physical, m.actual_physical);

    html += `
      <tr>
        <td><strong>Mês ${m.month}</strong></td>
        <td>${formatCurrency(m.planned_investment)}</td>
        <td>
          <input type="number" 
                 value="${m.actual_investment}" 
                 onchange="updateActualInvestment(${index}, this.value)"
                 step="1000"
                 min="0"
                 style="width: 120px;">
        </td>
        <td class="${getVarianceClass(finVariance)}">${finVariance}%</td>
        <td>${m.planned_physical.toFixed(1)}%</td>
        <td>
          <input type="number" 
                 value="${m.actual_physical}" 
                 onchange="updateActualPhysical(${index}, this.value)"
                 step="1"
                 min="0"
                 max="100"
                 style="width: 80px;">
        </td>
        <td class="${getVarianceClass(physVariance)}">${physVariance}%</td>
      </tr>
    `;
  });

  html += `
      <tr style="background-color: var(--color-bg-3); font-weight: bold;">
        <td>TOTAL ACUMULADO</td>
        <td>${formatCurrency(cumPlanned)}</td>
        <td>${formatCurrency(cumActual)}</td>
        <td class="${getVarianceClass(calculateVariance(cumPlanned, cumActual))}">
          ${calculateVariance(cumPlanned, cumActual)}%
        </td>
        <td colspan="3"></td>
      </tr>
    </tbody>
  `;

  table.innerHTML = html;
}

function updateActualInvestment(index, value) {
  performanceData.months[index].actual_investment = parseFloat(value) || 0;
  renderPerformanceTable();
  if (sCurveChart) {
    updateSCurveChart();
  }
}

function updateActualPhysical(index, value) {
  performanceData.months[index].actual_physical = parseFloat(value) || 0;
  renderPerformanceTable();
  if (sCurveChart) {
    updateSCurveChart();
  }
}

function resetPerformanceData() {
  performanceData.months.forEach(m => {
    m.actual_investment = 0;
    m.actual_physical = 0;
  });
  renderPerformanceTable();
  if (sCurveChart) {
    updateSCurveChart();
  }
}

function exportPerformanceData() {
  alert('Funcionalidade de exportação para Excel será implementada com biblioteca de terceiros.');
}

// Curva S
function renderSCurve() {
  const ctx = document.getElementById('sCurveChart').getContext('2d');

  // Calculate cumulative percentages
  const months = [];
  const plannedFinancial = [];
  const plannedPhysical = [];
  const actualFinancial = [];
  const actualPhysical = [];

  let cumPlannedFin = 0;
  let cumActualFin = 0;

  performanceData.months.forEach((m) => {
    months.push(`Mês ${m.month}`);

    cumPlannedFin += m.planned_investment;
    cumActualFin += m.actual_investment;

    plannedFinancial.push((cumPlannedFin / projectData.total_budget * 100).toFixed(1));
    actualFinancial.push((cumActualFin / projectData.total_budget * 100).toFixed(1));
    plannedPhysical.push(m.planned_physical);
    actualPhysical.push(m.actual_physical);
  });

  sCurveChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Execução Financeira Planejada',
          data: plannedFinancial,
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: false
        },
        {
          label: 'Execução Física Planejada',
          data: plannedPhysical,
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: false
        },
        {
          label: 'Execução Financeira Real',
          data: actualFinancial,
          borderColor: '#00cc66',
          backgroundColor: 'rgba(0, 204, 102, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: false,
          borderDash: [5, 5]
        },
        {
          label: 'Execução Física Real',
          data: actualPhysical,
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: false,
          borderDash: [5, 5]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 15, font: { size: 12 } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y + '%';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });

  updateKPIs();
}

function updateSCurveChart() {
  if (!sCurveChart) return;

  let cumPlannedFin = 0;
  let cumActualFin = 0;
  const plannedFinancial = [];
  const actualFinancial = [];
  const plannedPhysical = [];
  const actualPhysical = [];

  performanceData.months.forEach(m => {
    cumPlannedFin += m.planned_investment;
    cumActualFin += m.actual_investment;

    plannedFinancial.push((cumPlannedFin / projectData.total_budget * 100).toFixed(1));
    actualFinancial.push((cumActualFin / projectData.total_budget * 100).toFixed(1));
    plannedPhysical.push(m.planned_physical);
    actualPhysical.push(m.actual_physical);
  });

  sCurveChart.data.datasets[0].data = plannedFinancial;
  sCurveChart.data.datasets[1].data = plannedPhysical;
  sCurveChart.data.datasets[2].data = actualFinancial;
  sCurveChart.data.datasets[3].data = actualPhysical;
  sCurveChart.update();

  updateKPIs();
}

function updateKPIs() {
  // Calculate cumulative values for current period
  const totalPlannedInv = performanceData.months.reduce((sum, m) => sum + m.planned_investment, 0);
  const totalActualInv = performanceData.months.reduce((sum, m) => sum + m.actual_investment, 0);

  // Get last month with data
  let lastMonth = performanceData.months[performanceData.months.length - 1];
  const plannedPhysical = lastMonth.planned_physical;
  const actualPhysical = lastMonth.actual_physical;

  // Schedule Variance (SV) = Actual Physical - Planned Physical
  const sv = actualPhysical - plannedPhysical;
  document.getElementById('sv-value').textContent = sv.toFixed(1) + '%';
  document.getElementById('sv-value').className = 'kpi-value ' + (sv >= 0 ? 'status-good' : 'status-danger');

  // Cost Variance (CV) = Actual Investment - Planned Investment
  const cv = ((totalActualInv - totalPlannedInv) / totalPlannedInv * 100);
  document.getElementById('cv-value').textContent = cv.toFixed(1) + '%';
  document.getElementById('cv-value').className = 'kpi-value ' + (cv <= 0 ? 'status-good' : 'status-danger');

  // Cost Performance Index (CPI) = Planned / Actual
  const cpi = totalActualInv > 0 ? totalPlannedInv / totalActualInv : 1;
  document.getElementById('cpi-value').textContent = cpi.toFixed(2);
  document.getElementById('cpi-value').className = 'kpi-value ' + (cpi >= 1 ? 'status-good' : 'status-danger');

  // Schedule Performance Index (SPI) = Actual Physical / Planned Physical
  const spi = plannedPhysical > 0 ? actualPhysical / plannedPhysical : 1;
  document.getElementById('spi-value').textContent = spi.toFixed(2);
  document.getElementById('spi-value').className = 'kpi-value ' + (spi >= 1 ? 'status-good' : 'status-danger');
}

// Relatório
function renderReport() {
  renderMilestones();
  renderRisks();
  renderResponsibilities();
}

function renderMilestones() {
  const container = document.getElementById('milestonesList');
  let html = '';

  projectData.milestones.forEach(milestone => {
    html += `
      <div class="milestone-item">
        <h4>📍 Mês ${milestone.month}: ${milestone.title}</h4>
        <p>${milestone.description}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderRisks() {
  const container = document.getElementById('risksList');
  let html = '';

  projectData.risks.forEach(risk => {
    html += `
      <div class="risk-item">
        <h4>⚠️ ${risk.title}</h4>
        <p><strong>Eixo:</strong> ${risk.axis}</p>
        <div class="risk-badges">
          <span class="risk-badge probability-${risk.probability}">Probabilidade: ${risk.probability}</span>
          <span class="risk-badge impact-${risk.impact}">Impacto: ${risk.impact}</span>
        </div>
        <p style="margin-top: 8px;"><strong>Mitigação:</strong> ${risk.mitigation}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderResponsibilities() {
  const container = document.getElementById('responsibilitiesTable');

  let html = `
    <table>
      <thead>
        <tr>
          <th>Eixo</th>
          <th>Orçamento</th>
          <th>Percentual</th>
          <th>Principal Marco</th>
        </tr>
      </thead>
      <tbody>
  `;

  projectData.axes.forEach(axis => {
    html += `
      <tr>
        <td><strong>${axis.icon} ${axis.name}</strong></td>
        <td>${formatCurrency(axis.budget)}</td>
        <td>${axis.percentage}%</td>
        <td>${axis.activities[axis.activities.length - 1].name}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

function exportReport() {
  alert('Funcionalidade de exportação para PDF será implementada com biblioteca de terceiros.');
}

// Initialize Application
function init() {
  setupNavigation();
  setupAxisTabs();
  renderOverview();
  renderAxisContent(0);
  renderReport();
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}