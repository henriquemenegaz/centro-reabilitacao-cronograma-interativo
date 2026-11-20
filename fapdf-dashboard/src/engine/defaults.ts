import type { BolsaDef, Overview, Params, RubricaItem } from './types';

/** Constantes do PDF / planilha recalculada (19/11/2026). */
export const SALDO_CONTA = 1_528_758.07;
export const MESES_ORIG = 8;
export const MES_INI = { year: 2026, month: 11 }; // nov/2026
export const TAXA_PADRAO = 0.00405847291208805;
export const TAXA_SEM_IOF = 0.00480416557697261;
export const DOA_VREST = 169_866.63;
export const DOA_NREST = 7;
export const DOA_PRIM = 2; // dez/2026 = mês 2
export const DOA_PARCELA = 436_800 / 18;
export const DOA_REND_BASE = 44_198.28; // 81223.60 − 37025.32
export const DOA_ALIQ = 0.15;
export const IMU_PADRAO = 17_900;

export const OVERVIEW: Overview = {
  receita: 2_912_000,
  rendimentoAcumulado: 81_223.6,
  totalReceitas: 2_993_223.6,
  executado: 1_464_465.53,
  saldo: SALDO_CONTA,
  vigenciaAte: 'jun/2027',
  exoOrc: 1_000_000,
  exoExec: 632_558.85,
  exoDif: 367_441.15,
  doaRestante: DOA_VREST,
  doaParcelasRest: DOA_NREST,
  diariasRestantes: 11,
  taxaPadrao: TAXA_PADRAO,
  taxaSemIof: TAXA_SEM_IOF,
  rendNaoIncorp: DOA_REND_BASE,
};

export const BOLSAS: BolsaDef[] = [
  { id: 'b01', nome: 'Roberto de Souza Baptista', modalidade: 'Doutor', unitario: 6900, saldo: 55200, zeroPadrao: false, situacao: 'Ativa' },
  { id: 'b02', nome: 'Henrique Marra Taira Menegaz', modalidade: 'Doutor', unitario: 6900, saldo: 55200, zeroPadrao: false, situacao: 'Ativa' },
  { id: 'b03', nome: 'Anselmo Frizera Neto', modalidade: 'Doutor', unitario: 6900, saldo: 55200, zeroPadrao: false, situacao: 'Ativa' },
  { id: 'b04', nome: 'João Luiz Quaglioti Durigan', modalidade: 'Doutor', unitario: 6900, saldo: 55200, zeroPadrao: false, situacao: 'Ativa' },
  {
    id: 'b05',
    nome: 'José Roberto de Souza Júnior',
    modalidade: 'Pós-DOC',
    unitario: 7200,
    saldo: 14400,
    zeroPadrao: true,
    situacao: 'Inativa (sem pagamento recente)',
    obs: 'Sem pagamento desde 06/2026; padrão 0 meses.',
  },
  { id: 'b06', nome: 'Laryssa Gondim Naves Taira Menegaz', modalidade: 'Mestre', unitario: 3000, saldo: 24000, zeroPadrao: false, situacao: 'Ativa' },
  { id: 'b07', nome: 'Marcio Loureiro Bezerra', modalidade: 'Doutorando', unitario: 4000, saldo: 32000, zeroPadrao: false, situacao: 'Ativa' },
  {
    id: 'b08',
    nome: 'Mestrando (vaga sem nome)',
    modalidade: 'Mestrando',
    unitario: 2100,
    saldo: 37800,
    zeroPadrao: true,
    situacao: 'Vaga / não iniciada',
    obs: 'Nunca paga. Padrão: 0.',
  },
  { id: 'b09', nome: 'Caio Sudário Alves (R$ 1.500)', modalidade: 'Mestrando', unitario: 1500, saldo: 0, zeroPadrao: false, situacao: 'Encerrada (saldo zero)' },
  {
    id: 'b10',
    nome: 'Vitoria dos Santos Nogueira (doutorado)',
    modalidade: 'doutorado',
    unitario: 4000,
    saldo: 30000,
    zeroPadrao: false,
    situacao: 'Ativa',
    obs: 'Saldo cobre 7,5 cotas; faltam R$ 2.000 para 8 meses.',
  },
  {
    id: 'b11',
    nome: 'Aluno de Graduação (R$ 1.500)',
    modalidade: 'Graduação',
    unitario: 1500,
    saldo: 27000,
    zeroPadrao: true,
    situacao: 'Vaga / não iniciada',
    obs: 'Nunca paga. Padrão: 0.',
  },
  { id: 'b12', nome: 'Leandro Andrade Moreira', modalidade: 'Mestrando', unitario: 2100, saldo: 21000, zeroPadrao: false, situacao: 'Ativa' },
  { id: 'b13', nome: 'Juliana de Souza Bispo', modalidade: 'Graduação', unitario: 1100, saldo: 11000, zeroPadrao: false, situacao: 'Ativa' },
  {
    id: 'b14',
    nome: 'Aluno de Graduação nº 1 (R$ 1.100)',
    modalidade: 'Graduação',
    unitario: 1100,
    saldo: 19800,
    zeroPadrao: true,
    situacao: 'Vaga / não iniciada',
  },
  {
    id: 'b15',
    nome: 'Aluno de Graduação nº 2 (R$ 1.100)',
    modalidade: 'Graduação',
    unitario: 1100,
    saldo: 19800,
    zeroPadrao: true,
    situacao: 'Vaga / não iniciada',
  },
  { id: 'b16', nome: 'Caio Sudário Alves (R$ 2.100)', modalidade: 'Mestrando', unitario: 2100, saldo: 16800, zeroPadrao: false, situacao: 'Ativa' },
  { id: 'b17', nome: 'Vitoria dos Santos Nogueira (mestrado)', modalidade: 'Mestrando', unitario: 2100, saldo: 0, zeroPadrao: false, situacao: 'Encerrada (saldo zero)' },
  {
    id: 'b18',
    nome: 'Estevão Lopes',
    modalidade: 'bolsista graduado',
    unitario: 1500,
    saldo: 21000,
    zeroPadrao: true,
    situacao: 'Vaga / não iniciada',
    obs: 'Nomeado no plano, sem pagamento. Padrão: 0.',
  },
];

export const RUBRICAS: RubricaItem[] = [
  { id: 'bsbvix', rubrica: 'Passagens', item: 'Brasília – Vitória', aprovado: 16000, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  {
    id: 'pass_intl',
    rubrica: 'Passagens',
    item: 'Passagens aéreas internacionais',
    aprovado: 24400,
    executado: 22172.7,
    gastoPadrao: 0,
    editavel: false,
    categoria: 'viagens',
    obs: 'Calculado: (4 − 2) × R$ 10.000.',
  },
  {
    id: 'exo',
    rubrica: 'Equipamentos',
    item: 'Exoesqueleto comercial',
    aprovado: 1_000_000,
    executado: 632_558.85,
    gastoPadrao: 0,
    editavel: true,
    categoria: 'demais',
    obs: 'Diferença liberada para remanejamento.',
  },
  {
    id: 'vr',
    rubrica: 'Equipamentos',
    item: 'Sistema de realidade virtual',
    aprovado: 7500,
    executado: 4998,
    gastoPadrao: 0,
    editavel: true,
    categoria: 'demais',
    obs: 'Meta Quest 3 comprado; saldo liberado.',
  },
  { id: 'bike', rubrica: 'Equipamentos', item: 'Bicicleta elétrica', aprovado: 3000, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  {
    id: 'pcs',
    rubrica: 'Equipamentos',
    item: 'Computadores de uso diário',
    aprovado: 60000,
    executado: 0,
    gastoPadrao: 0,
    editavel: false,
    categoria: 'pcs',
    obs: 'Resultado dos cenários (R$ 15.000 cada).',
  },
  { id: 'eletro', rubrica: 'Equipamentos', item: 'Eletroestimulador de pesquisa', aprovado: 50000, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  { id: 'imu', rubrica: 'Equipamentos', item: 'Sistema de captura com IMUs', aprovado: 17900, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'imu' },
  { id: 'ra', rubrica: 'Equipamentos', item: 'Realidade aumentada comercial', aprovado: 6500, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  {
    id: 'pcsim',
    rubrica: 'Equipamentos',
    item: 'Computador simulações/compartilhado',
    aprovado: 18000,
    executado: 0,
    gastoPadrao: 0,
    editavel: false,
    categoria: 'removida',
    obs: 'Removido da projeção.',
  },
  { id: 'apoio', rubrica: 'Equipamentos', item: 'Material de apoio a prototipagem', aprovado: 100000, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  { id: 'c_eletron', rubrica: 'Material de Consumo', item: 'Material eletrônico', aprovado: 30000, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  { id: 'c_mec', rubrica: 'Material de Consumo', item: 'Material mecânico', aprovado: 40000, executado: 806.99, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  { id: 'c_eletromec', rubrica: 'Material de Consumo', item: 'Material eletromecânico', aprovado: 30000, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  { id: 'di_nac', rubrica: 'Diárias', item: 'Diárias nacionais', aprovado: 6300, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  {
    id: 'doa',
    rubrica: 'DOA Finatec',
    item: 'Parcelas restantes',
    aprovado: 436800,
    executado: 266933.37,
    gastoPadrao: 0,
    editavel: false,
    categoria: 'doa',
    obs: 'Controlado por “Pagar DOA?”.',
  },
  { id: 'manut', rubrica: 'Serviços PJ', item: 'Manutenção preventiva/corretiva', aprovado: 64000, executado: 25792.29, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  { id: 'publ', rubrica: 'Serviços PJ', item: 'Taxa de publicação', aprovado: 30000, executado: 0, gastoPadrao: 'saldo', editavel: true, categoria: 'demais' },
  {
    id: 'inscr',
    rubrica: 'Serviços PJ',
    item: 'Taxa de inscrição em congresso',
    aprovado: 6400,
    executado: 12141.69,
    gastoPadrao: 0,
    editavel: true,
    categoria: 'demais',
    obs: 'Estourada; padrão zero.',
  },
  {
    id: 'di_intl',
    rubrica: 'Diárias',
    item: 'Diárias internacionais',
    aprovado: 30463.68,
    executado: 32300,
    gastoPadrao: 0,
    editavel: false,
    categoria: 'viagens',
    obs: 'Calculado: (28 − 17) × US$ 370 × câmbio.',
  },
];

function saldoItem(r: RubricaItem): number {
  return Math.max(0, r.aprovado - r.executado);
}

export function defaultRubricas(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const r of RUBRICAS) {
    if (r.gastoPadrao === 'saldo') out[r.id] = saldoItem(r);
    else out[r.id] = r.gastoPadrao;
  }
  return out;
}

export function defaultMesesOrig(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const b of BOLSAS) {
    if (b.zeroPadrao || b.saldo <= 0) out[b.id] = 0;
    else out[b.id] = Math.min(MESES_ORIG, b.saldo / b.unitario);
  }
  return out;
}

export function defaultUnitarios(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const b of BOLSAS) out[b.id] = b.unitario;
  return out;
}

export function defaultMesesAdd(X: 12 | 18 | 24): Record<string, number> {
  const out: Record<string, number> = {};
  for (const b of BOLSAS) {
    out[b.id] = !b.zeroPadrao && b.saldo > 0 && b.situacao === 'Ativa' ? X : 0;
  }
  return out;
}

export function createDefaultParams(): Params {
  return {
    taxa: TAXA_PADRAO,
    cambio: 6,
    doaPagar: 'Sim',
    doaProrrog: 'Não',
    doaProrrogValor: DOA_PARCELA,
    doaRend: 'Sim',
    doaRendAcum: 'Sim',
    doaRendAliq: DOA_ALIQ,
    passTot: 4,
    passVal: 10000,
    passPrev: 2,
    diTot: 28,
    diUsd: 370,
    diPrev: 17,
    pcPreco: 15000,
    pcPlano: 4,
    pcMes: 8,
    mesesExec: MESES_ORIG,
    rubricas: defaultRubricas(),
    mesesOrig: defaultMesesOrig(),
    unitarios: defaultUnitarios(),
    mesesAdd: {
      12: defaultMesesAdd(12),
      18: defaultMesesAdd(18),
      24: defaultMesesAdd(24),
    },
  };
}

const STORAGE_KEY = 'fapdf-dashboard-params-v1';

export function loadParams(): Params {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultParams();
    const parsed = JSON.parse(raw) as Params;
    const base = createDefaultParams();
    return {
      ...base,
      ...parsed,
      rubricas: { ...base.rubricas, ...parsed.rubricas },
      mesesOrig: { ...base.mesesOrig, ...parsed.mesesOrig },
      unitarios: { ...base.unitarios, ...parsed.unitarios },
      mesesAdd: {
        12: { ...base.mesesAdd[12], ...(parsed.mesesAdd?.[12] ?? {}) },
        18: { ...base.mesesAdd[18], ...(parsed.mesesAdd?.[18] ?? {}) },
        24: { ...base.mesesAdd[24], ...(parsed.mesesAdd?.[24] ?? {}) },
      },
    };
  } catch {
    return createDefaultParams();
  }
}

export function saveParams(p: Params) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}
