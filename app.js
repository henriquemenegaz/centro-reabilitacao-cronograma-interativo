// Project Data
const projectData = {
  name: "Centro de Tecnologias de Reabilitação Neuromotora",
  duration_months: 18,
  total_budget: 2814955.74,
  budget_by_category: [
    { category: "Bolsas", value: 990000.00, percentage: 35.1 },
    { category: "Material Permanente", value: 1324507.92, percentage: 47.0 },
    { category: "Material de Consumo", value: 239672.82, percentage: 8.5 },
    { category: "Serviços", value: 160000.00, percentage: 5.7 },
    { category: "Passagens e Diárias", value: 100775.00, percentage: 3.6 }
  ],
  axes: [
    {
      name: "Eixo Exoesqueleto",
      budget: 1100000.00,
      percentage: 39.1,
      color: "#0066cc",
      icon: "🤖",
      activities: [
        { id: "exo1", name: "Prospecção e Negociação", start_month: 1, end_month: 3, duration: 3, status: "planejado", investment: 50000.00 },
        { id: "exo2", name: "Definição Modelo Exo", start_month: 1, end_month: 6, duration: 6, status: "planejado", investment: 100000.00 },
        { id: "exo3", name: "Compra, Importação", start_month: 2, end_month: 8, duration: 7, status: "planejado", investment: 1000000.00 },
        { id: "exo4", name: "Entrega e Instalação", start_month: 8, end_month: 10, duration: 3, status: "planejado", investment: 50000.00 },
        { id: "exo5", name: "Integração FES e VR", start_month: 10, end_month: 12, duration: 3, status: "planejado", investment: 0 }
      ]
    },
    {
      name: "Eixo Protótipo",
      budget: 350000.00,
      percentage: 12.4,
      color: "#00cc66",
      icon: "🔧",
      activities: [
        { id: "proto1", name: "Projeto Protótipo", start_month: 1, end_month: 3, duration: 3, status: "planejado", investment: 50000.00 },
        { id: "proto2", name: "Compras Protótipo", start_month: 2, end_month: 8, duration: 7, status: "planejado", investment: 100000.00 },
        { id: "proto3", name: "Manufatura Protótipo", start_month: 4, end_month: 11, duration: 8, status: "planejado", investment: 150000.00 },
        { id: "proto4", name: "Testes Validação", start_month: 8, end_month: 15, duration: 8, status: "planejado", investment: 30000.00 },
        { id: "proto5", name: "Integração FES e VR", start_month: 10, end_month: 18, duration: 9, status: "planejado", investment: 20000.00 }
      ]
    },
    {
      name: "Eixo Saúde",
      budget: 100000.00,
      percentage: 3.6,
      color: "#cc0000",
      icon: "🏥",
      activities: [
        { id: "saude1", name: "Definição CEP 1", start_month: 1, end_month: 2, duration: 2, status: "planejado", investment: 10000.00 },
        { id: "saude2", name: "Aproximação Sec Saúde DF", start_month: 1, end_month: 4, duration: 4, status: "planejado", investment: 15000.00 },
        { id: "saude3", name: "Submissão CEP 1", start_month: 4, end_month: 5, duration: 2, status: "planejado", investment: 5000.00 },
        { id: "saude4", name: "Coleta CEP 1", start_month: 6, end_month: 10, duration: 5, status: "planejado", investment: 30000.00 },
        { id: "saude5", name: "Consolidação Resultados CEP 1", start_month: 11, end_month: 13, duration: 3, status: "planejado", investment: 10000.00 },
        { id: "saude6", name: "Submissão CEP 2", start_month: 12, end_month: 13, duration: 2, status: "planejado", investment: 5000.00 },
        { id: "saude7", name: "Coleta CEP 2", start_month: 13, end_month: 17, duration: 5, status: "planejado", investment: 10000.00 },
        { id: "saude8", name: "Consolidação Resultados CEP 2", start_month: 17, end_month: 18, duration: 2, status: "planejado", investment: 15000.00 }
      ]
    },
    {
      name: "Eixo Gerencial",
      budget: 1264955.74,
      percentage: 44.9,
      color: "#ff9900",
      icon: "📊",
      activities: [
        { id: "gerenc1", name: "Workshop 1", start_month: 4, end_month: 5, duration: 2, status: "planejado", investment: 50000.00 },
        { id: "gerenc2", name: "Workshop 2", start_month: 10, end_month: 11, duration: 2, status: "planejado", investment: 50000.00 },
        { id: "gerenc3", name: "Workshop Especialistas e Entes DF", start_month: 14, end_month: 16, duration: 3, status: "planejado", investment: 60000.00 },
        { id: "gerenc4", name: "Assessoria Gerenciamento Projetos", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 60000.00 },
        { id: "gerenc5", name: "Bolsas de Coordenação", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 496800.00 },
        { id: "gerenc6", name: "Bolsas de Pesquisadores", start_month: 1, end_month: 18, duration: 18, status: "planejado", investment: 410000.00 },
        { id: "gerenc7", name: "Infraestrutura e Computadores", start_month: 1, end_month: 3, duration: 3, status: "planejado", investment: 138155.74 }
      ]
    }
  ],
  quarterly_plan: [
    { quarter: 1, months: "Mês 1-3", planned_investment: 703250.00, planned_physical_progress: 15 },
    { quarter: 2, months: "Mês 4-6", planned_investment: 502500.00, planned_physical_progress: 30 },
    { quarter: 3, months: "Mês 7-9", planned_investment: 402250.00, planned_physical_progress: 50 },
    { quarter: 4, months: "Mês 10-12", planned_investment: 502000.00, planned_physical_progress: 70 },
    { quarter: 5, months: "Mês 13-15", planned_investment: 352000.00, planned_physical_progress: 85 },
    { quarter: 6, months: "Mês 16-18", planned_investment: 352955.74, planned_physical_progress: 100 }
  ],
  milestones: [
    { month: 3, title: "Conclusão Fase de Planejamento", description: "Definições finalizadas de modelos e especificações" },
    { month: 6, title: "Início Aquisições Principais", description: "Equipamentos em processo de importação" },
    { month: 10, title: "Chegada de Equipamentos", description: "Recebimento e instalação de exoesqueleto" },
    { month: 12, title: "Sistemas Integrados", description: "FES e VR integrados aos equipamentos" },
    { month: 15, title: "Testes Concluídos", description: "Validação técnica finalizada" },
    { month: 18, title: "Projeto Finalizado", description: "Resultados consolidados e documentados" }
  ],
  risks: [
    { id: "risk1", axis: "Eixo Exoesqueleto", title: "Atraso na importação do equipamento", probability: "média", impact: "alta", mitigation: "Iniciar processo de importação antecipadamente, com backup de fornecedores" },
    { id: "risk2", axis: "Eixo Protótipo", title: "Dificuldades na manufatura", probability: "média", impact: "média", mitigation: "Parcerias técnicas com especialistas em prototipagem" },
    { id: "risk3", axis: "Eixo Saúde", title: "Atraso na aprovação do CEP", probability: "média", impact: "alta", mitigation: "Submissão antecipada e coordenação com comitês éticos" },
    { id: "risk4", axis: "Eixo Gerencial", title: "Desvios orçamentários", probability: "média", impact: "média", mitigation: "Acompanhamento mensal rigoroso de despesas" }
  ],
  coordinators: [
    { name: "Roberto", role: "Coordenador Principal", axes: ["Exoesqueleto", "Gerencial"], budget_allocation: 222125.00 },
    { name: "Henrique", role: "Coordenador Protótipo", axes: ["Protótipo", "Infraestrutura"], budget_allocation: 254104.74 },
    { name: "Durigan", role: "Coordenador Saúde", axes: ["Saúde", "Validação Clínica"], budget_allocation: 222125.00 },
    { name: "Anselmo", role: "Coordenador P&D", axes: ["Pesquisa", "Inovação"], budget_allocation: 222125.00 }
  ]
};

// Performance data (in-memory state)
const performanceData = {
  quarters: projectData.quarterly_plan.map(q => ({
    quarter: q.quarter,
    months: q.months,
    planned_investment: q.planned_investment,
    actual_investment: 0,
    planned_physical: q.planned_physical_progress,
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
        <th>Período</th>
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

  performanceData.quarters.forEach((q, index) => {
    cumPlanned += q.planned_investment;
    cumActual += q.actual_investment;

    const finVariance = calculateVariance(q.planned_investment, q.actual_investment);
    const physVariance = calculateVariance(q.planned_physical, q.actual_physical);

    html += `
      <tr>
        <td><strong>${q.months}</strong></td>
        <td>${formatCurrency(q.planned_investment)}</td>
        <td>
          <input type="number" 
                 value="${q.actual_investment}" 
                 onchange="updateActualInvestment(${index}, this.value)"
                 step="1000"
                 min="0"
                 style="width: 120px;">
        </td>
        <td class="${getVarianceClass(finVariance)}">${finVariance}%</td>
        <td>${q.planned_physical}%</td>
        <td>
          <input type="number" 
                 value="${q.actual_physical}" 
                 onchange="updateActualPhysical(${index}, this.value)"
                 step="5"
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
  performanceData.quarters[index].actual_investment = parseFloat(value) || 0;
  renderPerformanceTable();
  if (sCurveChart) {
    updateSCurveChart();
  }
}

function updateActualPhysical(index, value) {
  performanceData.quarters[index].actual_physical = parseFloat(value) || 0;
  renderPerformanceTable();
  if (sCurveChart) {
    updateSCurveChart();
  }
}

function resetPerformanceData() {
  performanceData.quarters.forEach(q => {
    q.actual_investment = 0;
    q.actual_physical = 0;
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

  performanceData.quarters.forEach((q, index) => {
    // Add data point at start of quarter
    const startMonth = index * 3 + 1;
    months.push(`Mês ${startMonth}`);

    cumPlannedFin += q.planned_investment;
    cumActualFin += q.actual_investment;

    plannedFinancial.push((cumPlannedFin / projectData.total_budget * 100).toFixed(1));
    actualFinancial.push((cumActualFin / projectData.total_budget * 100).toFixed(1));
    plannedPhysical.push(q.planned_physical);
    actualPhysical.push(q.actual_physical);
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

  performanceData.quarters.forEach(q => {
    cumPlannedFin += q.planned_investment;
    cumActualFin += q.actual_investment;

    plannedFinancial.push((cumPlannedFin / projectData.total_budget * 100).toFixed(1));
    actualFinancial.push((cumActualFin / projectData.total_budget * 100).toFixed(1));
    plannedPhysical.push(q.planned_physical);
    actualPhysical.push(q.actual_physical);
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
  const totalPlannedInv = performanceData.quarters.reduce((sum, q) => sum + q.planned_investment, 0);
  const totalActualInv = performanceData.quarters.reduce((sum, q) => sum + q.actual_investment, 0);

  // Get last quarter with data
  let lastQuarter = performanceData.quarters[performanceData.quarters.length - 1];
  const plannedPhysical = lastQuarter.planned_physical;
  const actualPhysical = lastQuarter.actual_physical;

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
          <th>Coordenador</th>
          <th>Papel</th>
          <th>Eixos Responsáveis</th>
          <th>Orçamento Alocado</th>
        </tr>
      </thead>
      <tbody>
  `;

  projectData.coordinators.forEach(coord => {
    html += `
      <tr>
        <td><strong>${coord.name}</strong></td>
        <td>${coord.role}</td>
        <td>${coord.axes.join(', ')}</td>
        <td>${formatCurrency(coord.budget_allocation)}</td>
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