import {
  BOLSAS,
  DOA_NREST,
  DOA_PRIM,
  DOA_REND_BASE,
  DOA_VREST,
  MESES_ORIG,
  MES_INI,
  RUBRICAS,
  SALDO_CONTA,
} from './defaults';
import type { MonthFlow, Params, ScenarioResult } from './types';

const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

export function mesLabel(t: number): string {
  const idx = MES_INI.month - 1 + (t - 1);
  const y = MES_INI.year + Math.floor(idx / 12);
  const m = ((idx % 12) + 12) % 12;
  return `${MESES[m]}/${y}`;
}

export function viagensCusto(p: Params): number {
  const pass = Math.max(0, p.passTot - p.passPrev) * p.passVal;
  const di = Math.max(0, p.diTot - p.diPrev) * p.diUsd * p.cambio;
  return pass + di;
}

export function totalDemais(p: Params): number {
  let s = 0;
  for (const r of RUBRICAS) {
    if (r.categoria === 'demais') s += p.rubricas[r.id] ?? 0;
  }
  return s;
}

export function totalImu(p: Params): number {
  return p.rubricas.imu ?? 0;
}

export function folhaAtivas(p: Params): number {
  let s = 0;
  for (const b of BOLSAS) {
    if (b.situacao === 'Ativa') s += p.unitarios[b.id] ?? b.unitario;
  }
  return s;
}

function bolsaNoMes(p: Params, X: 12 | 18 | 24, t: number): number {
  let b = 0;
  for (const bol of BOLSAS) {
    const u = p.unitarios[bol.id] ?? bol.unitario;
    const mo = p.mesesOrig[bol.id] ?? 0;
    const ma = p.mesesAdd[X][bol.id] ?? 0;
    if (t <= MESES_ORIG) {
      b += u * Math.max(0, Math.min(1, mo - (t - 1)));
    } else {
      b += u * Math.max(0, Math.min(1, ma - (t - MESES_ORIG - 1)));
    }
  }
  return b;
}

function mesesAtivosExatos(saldo: number, folha: number, taxaLiqDoa: number): number {
  if (folha <= 0 || saldo <= 0) return 0;
  if (taxaLiqDoa <= 0) return saldo / folha;
  const a = (folha * (1 + taxaLiqDoa / 2)) / taxaLiqDoa;
  if (a <= saldo) return 999;
  return Math.log(a / (a - saldo)) / Math.log(1 + taxaLiqDoa);
}

type FlowTotals = {
  bolO: number;
  bolP: number;
  doa: number;
  doax: number;
  via: number;
  imu: number;
  dem: number;
  ren: number;
  doar: number;
};

function runFlow(
  p: Params,
  X: 12 | 18 | 24,
  pcAmount: number,
): {
  fim: number;
  s8: number;
  mins: number[];
  months: MonthFlow[];
  totals: FlowTotals;
} {
  const N = MESES_ORIG + X;
  const via = viagensCusto(p);
  const imu = totalImu(p);
  const demais = totalDemais(p);
  const k = Math.min(Math.max(1, p.pcMes), N);
  const mesesExec = Math.min(Math.max(1, p.mesesExec), N);
  const aliq = p.doaRendAliq;
  const doaFut = p.doaRend === 'Sim';
  const doaAc = p.doaRendAcum === 'Sim';
  const doaXOn = p.doaProrrog === 'Sim';
  const doaPagar = p.doaPagar === 'Sim';

  let s = SALDO_CONTA;
  let s8 = 0;
  const mins: number[] = [];
  const months: MonthFlow[] = [];
  const totals: FlowTotals = {
    bolO: 0,
    bolP: 0,
    doa: 0,
    doax: 0,
    via: 0,
    imu: 0,
    dem: 0,
    ren: 0,
    doar: 0,
  };

  for (let t = 1; t <= N; t++) {
    const bol = bolsaNoMes(p, X, t);
    const doa = doaPagar && t >= DOA_PRIM && t < DOA_PRIM + DOA_NREST ? DOA_VREST / DOA_NREST : 0;
    const dx = doaXOn && t > MESES_ORIG ? p.doaProrrogValor : 0;
    const viaM = t <= mesesExec ? via / mesesExec : 0;
    const imuM = t <= mesesExec ? imu / mesesExec : 0;
    const demM = t <= mesesExec ? demais / mesesExec : 0;
    const nb = viaM + imuM + demM;
    const pc = t === k ? pcAmount : 0;
    const saiSemPc = bol + doa + dx + nb;
    const sai = saiSemPc + pc;
    const med = Math.max(0, s - sai / 2);
    const ren = p.taxa * med;
    const dr = (doaFut ? aliq * ren : 0) + (doaAc && t === 1 ? aliq * DOA_REND_BASE : 0);
    const ini = s;
    s = s - sai + ren - dr;
    mins.push(s);
    if (t === MESES_ORIG) s8 = s;

    if (t <= MESES_ORIG) totals.bolO += bol;
    else totals.bolP += bol;
    totals.doa += doa;
    totals.doax += dx;
    totals.via += viaM;
    totals.imu += imuM;
    totals.dem += demM;
    totals.ren += ren;
    totals.doar += dr;

    months.push({
      t,
      label: mesLabel(t),
      fase: t <= MESES_ORIG ? 'Original' : 'Prorrogação',
      saldoIni: ini,
      bolsas: bol,
      doa,
      doaX: dx,
      viagens: viaM,
      imu: imuM,
      demais: demM,
      saidas: saiSemPc,
      rendimento: ren,
      doaRend: dr,
      saldoFim: s,
      pc,
      saldoFimComPc: s,
    });
  }

  return { fim: s, s8, mins, months, totals };
}

/**
 * Motor de projeção espelhando a planilha / verify.py:
 * rendimento = taxa × saldo médio; DOA contratada nos meses 2–8;
 * prorrogação a partir de jul/2027; disponível = teto / fator até a compra.
 */
export function calculateScenario(p: Params, X: 12 | 18 | 24): ScenarioResult {
  const N = MESES_ORIG + X;
  const doaFut = p.doaRend === 'Sim';
  const doaXOn = p.doaProrrog === 'Sim';
  const rho = p.taxa * (1 - (doaFut ? p.doaRendAliq : 0));
  const d8 = Math.min(Math.max(1, p.pcMes), N);
  const fator = (1 + rho / 2) * (1 + rho) ** (N - d8);

  const without = runFlow(p, X, 0);
  const teto = without.fim;
  const disp = teto >= 0 ? teto / fator : teto;
  const qtd = p.pcPreco <= 0 ? 0 : Math.max(0, Math.floor(disp / p.pcPreco));
  const resid = disp - qtd * p.pcPreco;
  const withPc = runFlow(p, X, qtd * p.pcPreco);

  const months: MonthFlow[] = without.months.map((m, i) => ({
    ...m,
    saldoFim: without.months[i].saldoFim,
    pc: withPc.months[i].pc,
    saldoFimComPc: withPc.months[i].saldoFim,
  }));

  const sobra0 =
    SALDO_CONTA -
    (without.totals.bolO +
      without.totals.bolP +
      without.totals.doa +
      without.totals.doax +
      without.totals.via +
      without.totals.imu +
      without.totals.dem);

  const folhaAt = folhaAtivas(p) + (doaXOn ? p.doaProrrogValor : 0);
  const mSemX = mesesAtivosExatos(without.s8, folhaAt, rho);
  const reservado =
    without.s8 - p.pcPlano * p.pcPreco * (1 + rho / 2) * (1 + rho) ** (MESES_ORIG - d8);
  const mComX = mesesAtivosExatos(reservado, folhaAt, rho);

  const bolsaTotais = BOLSAS.map((bol) => {
    let orig = 0;
    let prorrog = 0;
    const u = p.unitarios[bol.id] ?? bol.unitario;
    const mo = p.mesesOrig[bol.id] ?? 0;
    const ma = p.mesesAdd[X][bol.id] ?? 0;
    for (let t = 1; t <= N; t++) {
      const v =
        t <= MESES_ORIG
          ? u * Math.max(0, Math.min(1, mo - (t - 1)))
          : u * Math.max(0, Math.min(1, ma - (t - MESES_ORIG - 1)));
      if (t <= MESES_ORIG) orig += v;
      else prorrog += v;
    }
    return { id: bol.id, orig, prorrog, total: orig + prorrog };
  });

  const minSaldo = Math.min(...withPc.mins);
  const situacao: 'OK' | 'DÉFICIT' = minSaldo < -0.005 ? 'DÉFICIT' : 'OK';

  return {
    X,
    ultimoMes: mesLabel(N),
    mesCompra: mesLabel(d8),
    bolsasOrig: without.totals.bolO,
    bolsasProrrog: without.totals.bolP,
    doa: without.totals.doa,
    doaX: without.totals.doax,
    viagens: without.totals.via,
    imu: without.totals.imu,
    demais: without.totals.dem,
    sobra0,
    rendimento: without.totals.ren,
    doaSobreRend: without.totals.doar,
    teto,
    perda: teto - disp,
    disponivel: disp,
    qtd,
    residual: resid,
    extra: qtd - p.pcPlano,
    folhaProrrog: bolsaNoMes(p, X, MESES_ORIG + 1),
    saldoJun: without.s8,
    folhaAtiva: folhaAt,
    mesesSemPc: Math.floor(mSemX + 1e-9),
    mesesSemPcExato: mSemX,
    mesesComPc: Math.floor(mComX + 1e-9),
    mesesComPcExato: mComX,
    situacao,
    minSaldo,
    months,
    bolsaTotais,
  };
}

export function calculateAll(p: Params): Record<12 | 18 | 24, ScenarioResult> {
  return {
    12: calculateScenario(p, 12),
    18: calculateScenario(p, 18),
    24: calculateScenario(p, 24),
  };
}

export function exportScenarioJson(p: Params, X: 12 | 18 | 24): string {
  return JSON.stringify({ parametros: p, cenario: calculateScenario(p, X) }, null, 2);
}

export function exportScenarioCsv(p: Params, X: 12 | 18 | 24): string {
  const r = calculateScenario(p, X);
  const rows = [
    [
      'mes',
      'fase',
      'saldo_ini',
      'bolsas',
      'doa',
      'doa_prorrog',
      'viagens',
      'imu',
      'demais',
      'rendimento',
      'doa_rend',
      'saldo_fim',
      'pc',
      'saldo_fim_com_pc',
    ],
    ...r.months.map((m) =>
      [
        m.label,
        m.fase,
        m.saldoIni,
        m.bolsas,
        m.doa,
        m.doaX,
        m.viagens,
        m.imu,
        m.demais,
        m.rendimento,
        m.doaRend,
        m.saldoFim,
        m.pc,
        m.saldoFimComPc,
      ].map(String),
    ),
  ];
  return rows.map((row) => row.join(';')).join('\n');
}
