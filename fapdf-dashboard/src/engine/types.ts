export type YesNo = 'Sim' | 'Não';

export interface BolsaDef {
  id: string;
  nome: string;
  modalidade: string;
  unitario: number;
  saldo: number;
  /** Vagas nunca pagas / inativa — padrão zero */
  zeroPadrao: boolean;
  situacao: 'Ativa' | 'Inativa (sem pagamento recente)' | 'Vaga / não iniciada' | 'Encerrada (saldo zero)';
  obs?: string;
}

export interface RubricaItem {
  id: string;
  rubrica: string;
  item: string;
  aprovado: number;
  executado: number;
  /** valor a gastar padrão; null = não editável / zero fixo */
  gastoPadrao: number | 'saldo';
  editavel: boolean;
  categoria: 'demais' | 'imu' | 'viagens' | 'doa' | 'pcs' | 'removida';
  obs?: string;
}

export interface Params {
  taxa: number;
  cambio: number;
  doaPagar: YesNo;
  doaProrrog: YesNo;
  doaProrrogValor: number;
  doaRend: YesNo;
  doaRendAcum: YesNo;
  doaRendAliq: number;
  passTot: number;
  passVal: number;
  passPrev: number;
  diTot: number;
  diUsd: number;
  diPrev: number;
  pcPreco: number;
  pcPlano: number;
  pcMes: number;
  mesesExec: number;
  /** gastos editáveis por rubrica id */
  rubricas: Record<string, number>;
  /** meses no período original por bolsa */
  mesesOrig: Record<string, number>;
  /** valor unitário atual por bolsa */
  unitarios: Record<string, number>;
  /** meses adicionais por cenário e bolsa */
  mesesAdd: Record<12 | 18 | 24, Record<string, number>>;
}

export interface MonthFlow {
  t: number;
  label: string;
  fase: 'Original' | 'Prorrogação';
  saldoIni: number;
  bolsas: number;
  doa: number;
  doaX: number;
  viagens: number;
  imu: number;
  demais: number;
  saidas: number;
  rendimento: number;
  doaRend: number;
  saldoFim: number;
  pc: number;
  saldoFimComPc: number;
}

export interface ScenarioResult {
  X: 12 | 18 | 24;
  ultimoMes: string;
  mesCompra: string;
  bolsasOrig: number;
  bolsasProrrog: number;
  doa: number;
  doaX: number;
  viagens: number;
  imu: number;
  demais: number;
  sobra0: number;
  rendimento: number;
  doaSobreRend: number;
  teto: number;
  perda: number;
  disponivel: number;
  qtd: number;
  residual: number;
  extra: number;
  folhaProrrog: number;
  saldoJun: number;
  folhaAtiva: number;
  mesesSemPc: number;
  mesesSemPcExato: number;
  mesesComPc: number;
  mesesComPcExato: number;
  situacao: 'OK' | 'DÉFICIT';
  minSaldo: number;
  months: MonthFlow[];
  bolsaTotais: { id: string; orig: number; prorrog: number; total: number }[];
}

export interface Overview {
  receita: number;
  rendimentoAcumulado: number;
  totalReceitas: number;
  executado: number;
  saldo: number;
  vigenciaAte: string;
  exoOrc: number;
  exoExec: number;
  exoDif: number;
  doaRestante: number;
  doaParcelasRest: number;
  diariasRestantes: number;
  taxaPadrao: number;
  taxaSemIof: number;
  rendNaoIncorp: number;
}
