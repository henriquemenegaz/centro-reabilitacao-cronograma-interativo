import { useEffect, useMemo, useState, type ChangeEvent } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  calculateAll,
  exportScenarioCsv,
  exportScenarioJson,
  totalDemais,
  totalImu,
  viagensCusto,
} from './engine/calculate';
import {
  BOLSAS,
  OVERVIEW,
  RUBRICAS,
  createDefaultParams,
  loadParams,
  saveParams,
} from './engine/defaults';
import { money, moneySigned, number, percent, parseBrNumber } from './engine/format';
import type { Params, YesNo } from './engine/types';
import './App.css';

type ScenarioKey = 12 | 18 | 24;

function download(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function NumInput({
  value,
  onChange,
  step = 'any',
  percentMode = false,
}: {
  value: number;
  onChange: (n: number) => void;
  step?: string;
  percentMode?: boolean;
}) {
  const display = percentMode ? number(value * 100, 4) : number(value, 2);
  const [text, setText] = useState(display);
  useEffect(() => setText(display), [display]);

  return (
    <input
      value={text}
      inputMode="decimal"
      onChange={(e) => setText(e.target.value)}
      onBlur={() => {
        const n = parseBrNumber(text);
        if (n === null) {
          setText(display);
          return;
        }
        onChange(percentMode ? n / 100 : n);
      }}
      step={step}
      aria-label="valor numérico"
    />
  );
}

function YesNoSelect({ value, onChange }: { value: YesNo; onChange: (v: YesNo) => void }) {
  return (
    <select value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value as YesNo)}>
      <option value="Sim">Sim</option>
      <option value="Não">Não</option>
    </select>
  );
}

export default function App() {
  const [params, setParams] = useState<Params>(() => loadParams());
  const [scenario, setScenario] = useState<ScenarioKey>(12);
  const results = useMemo(() => calculateAll(params), [params]);
  const current = results[scenario];

  useEffect(() => {
    saveParams(params);
  }, [params]);

  const patch = (partial: Partial<Params>) => setParams((p) => ({ ...p, ...partial }));

  const setMesAdd = (id: string, v: number) => {
    setParams((p) => ({
      ...p,
      mesesAdd: {
        ...p.mesesAdd,
        [scenario]: { ...p.mesesAdd[scenario], [id]: Math.max(0, Math.min(scenario, v)) },
      },
    }));
  };

  const setMesOrig = (id: string, v: number) => {
    setParams((p) => ({
      ...p,
      mesesOrig: { ...p.mesesOrig, [id]: Math.max(0, Math.min(8, v)) },
    }));
  };

  const setRubrica = (id: string, v: number) => {
    setParams((p) => ({
      ...p,
      rubricas: { ...p.rubricas, [id]: Math.max(0, v) },
    }));
  };

  const chartData = current.months.map((m) => ({
    mes: m.label,
    saldo: Math.round(m.saldoFim * 100) / 100,
    comPc: Math.round(m.saldoFimComPc * 100) / 100,
  }));

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand-block">
          <p className="brand-kicker">Projeto 8072 · FAPDF / Finatec / TOA nº 382/2025</p>
          <h1 className="brand-title">Centro de Tecnologias de Reabilitação Neuromotora</h1>
          <p className="brand-sub">
            Dashboard de projeção orçamentária — edite parâmetros e meses de bolsa; os totais recalculam na hora no navegador.
          </p>
        </div>
        <div className="top-actions">
          <button type="button" className="btn btn-ghost" onClick={() => setParams(createDefaultParams())}>
            Restaurar padrões
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => download(`cenario-${scenario}m.csv`, exportScenarioCsv(params, scenario), 'text/csv;charset=utf-8')}
          >
            Baixar CSV
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              download(`cenario-${scenario}m.json`, exportScenarioJson(params, scenario), 'application/json')
            }
          >
            Baixar JSON
          </button>
        </div>
      </header>

      <section className="panel">
        <h2>Visão geral do convênio</h2>
        <p className="panel-lead">Saldo em 19/11/2026 · vigência oficial até {OVERVIEW.vigenciaAte}</p>
        <div className="kpi-grid">
          <div className="kpi">
            <p className="kpi-label">Recebido</p>
            <p className="kpi-value">{money(OVERVIEW.totalReceitas)}</p>
            <p className="kpi-hint">Receita {money(OVERVIEW.receita)} + rendimentos {money(OVERVIEW.rendimentoAcumulado)}</p>
          </div>
          <div className="kpi">
            <p className="kpi-label">Executado</p>
            <p className="kpi-value">{money(OVERVIEW.executado)}</p>
            <p className="kpi-hint">PDF Saldo do Projeto</p>
          </div>
          <div className="kpi">
            <p className="kpi-label">Saldo em conta</p>
            <p className="kpi-value">{money(OVERVIEW.saldo)}</p>
            <p className="kpi-hint">Base da projeção</p>
          </div>
          <div className="kpi">
            <p className="kpi-label">Vigência</p>
            <p className="kpi-value">até {OVERVIEW.vigenciaAte}</p>
            <p className="kpi-hint">Prorrogação a partir de jul/2027</p>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2>Comparação dos cenários</h2>
        <p className="panel-lead">
          Disponível para computadores a {money(params.pcPreco)} · compra em {current.mesCompra} (editável abaixo)
        </p>
        <div className="scroll-x">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Resultado</th>
                <th>+12 meses</th>
                <th>+18 meses</th>
                <th>+24 meses</th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ['Último mês', 'ultimoMes', 'text'],
                  ['Bolsas — período original', 'bolsasOrig', 'money'],
                  ['Bolsas — prorrogação', 'bolsasProrrog', 'money'],
                  ['DOA contratada', 'doa', 'money'],
                  ['DOA adicional prorrogação', 'doaX', 'money'],
                  ['Viagens internacionais', 'viagens', 'money'],
                  ['IMUs', 'imu', 'money'],
                  ['Demais rubricas', 'demais', 'money'],
                  ['Rendimento líquido', 'rendimento', 'money'],
                  ['DOA sobre rendimento', 'doaSobreRend', 'money'],
                  ['Teto (sem computadores)', 'teto', 'money'],
                  ['Disponível p/ computadores', 'disponivel', 'money-emph'],
                  ['Computadores que cabem', 'qtd', 'int-emph'],
                  ['Residual', 'residual', 'money-emph'],
                  ['Além dos 4 do plano', 'extra', 'int'],
                  ['Situação', 'situacao', 'sit'],
                ] as const
              ).map(([label, key, kind]) => (
                <tr
                  key={key}
                  className={
                    kind.includes('emph')
                      ? 'emphasis'
                      : key === 'situacao'
                        ? undefined
                        : undefined
                  }
                >
                  <td>{label}</td>
                  {([12, 18, 24] as const).map((X) => {
                    const r = results[X];
                    const v = r[key];
                    let cell = String(v);
                    let cls = '';
                    if (kind.startsWith('money')) {
                      cell = moneySigned(v as number);
                      if ((v as number) < -0.005) cls = 'neg';
                    } else if (kind.startsWith('int')) {
                      cell = String(v);
                    } else if (kind === 'sit') {
                      cell = String(v);
                      cls = 'sit';
                    }
                    return (
                      <td
                        key={X}
                        className={`${cls} ${key === 'situacao' ? (v === 'OK' ? 'sit' : 'sit') : ''}`.trim()}
                        style={
                          key === 'situacao'
                            ? { color: v === 'OK' ? 'var(--ok)' : 'var(--bad)', fontWeight: 700 }
                            : undefined
                        }
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <h2>Limite real da folha ativa</h2>
        <p className="panel-lead">
          Meses adicionais que as 10 bolsas ativas ({money(current.folhaAtiva)}/mês) comportam a partir de jun/2027
          (saldo projetado {money(current.saldoJun)}), com rendimento. Independente da duração do cenário escolhido.
        </p>
        <div className="limit-grid">
          <div className="limit-card">
            <span>Sem computadores</span>
            <strong>{current.mesesSemPc} meses</strong>
            <span>exato: {number(current.mesesSemPcExato, 2)} · até ago/2028 no padrão</span>
          </div>
          <div className="limit-card">
            <span>Reservando 4 computadores do plano</span>
            <strong>{current.mesesComPc} meses</strong>
            <span>exato: {number(current.mesesComPcExato, 2)} · R$ 60.000 reservados</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2>Cenário detalhado</h2>
        <p className="panel-lead">Altere meses de bolsa, taxa, dólar, DOA e rubricas — o gráfico e os totais atualizam automaticamente.</p>

        <div className="tabs" role="tablist">
          {([12, 18, 24] as const).map((X) => (
            <button
              key={X}
              type="button"
              role="tab"
              className={`tab ${scenario === X ? 'active' : ''}`}
              aria-selected={scenario === X}
              onClick={() => setScenario(X)}
            >
              +{X} meses · {results[X].situacao}
            </button>
          ))}
        </div>

        <div className="result-strip">
          <div className={`result-chip ${current.disponivel >= 0 ? 'ok' : 'bad'}`}>
            <span>Disponível</span>
            <strong>{moneySigned(current.disponivel)}</strong>
          </div>
          <div className={`result-chip ${current.qtd >= params.pcPlano ? 'ok' : 'warn'}`}>
            <span>Computadores</span>
            <strong>{current.qtd}</strong>
          </div>
          <div className={`result-chip ${current.residual >= 0 ? 'ok' : 'bad'}`}>
            <span>Residual</span>
            <strong>{moneySigned(current.residual)}</strong>
          </div>
          <div className={`result-chip ${current.situacao === 'OK' ? 'ok' : 'bad'}`}>
            <span>Situação</span>
            <strong>{current.situacao}</strong>
          </div>
        </div>

        <div className="scenario-layout">
          <aside className="side-stack">
            <div className="field-group">
              <h3>Parâmetros gerais</h3>
              <div className="field">
                <label>Taxa mensal líquida</label>
                <NumInput value={params.taxa} percentMode onChange={(n) => patch({ taxa: n })} />
              </div>
              <div className="field">
                <label>Dólar (R$/US$)</label>
                <NumInput value={params.cambio} onChange={(n) => patch({ cambio: n })} />
              </div>
              <div className="field">
                <label>Preço do computador</label>
                <NumInput value={params.pcPreco} onChange={(n) => patch({ pcPreco: n })} />
              </div>
              <div className="field">
                <label>Mês da compra (1 = nov/26)</label>
                <NumInput value={params.pcMes} onChange={(n) => patch({ pcMes: Math.round(n) })} />
              </div>
              <div className="field">
                <label>Meses p/ gastar rubricas</label>
                <NumInput value={params.mesesExec} onChange={(n) => patch({ mesesExec: Math.round(n) })} />
              </div>
            </div>

            <div className="field-group">
              <h3>DOA Finatec</h3>
              <div className="field">
                <label>Pagar parcelas restantes?</label>
                <YesNoSelect value={params.doaPagar} onChange={(v) => patch({ doaPagar: v })} />
              </div>
              <div className="field">
                <label>DOA extra na prorrogação?</label>
                <YesNoSelect value={params.doaProrrog} onChange={(v) => patch({ doaProrrog: v })} />
              </div>
              <div className="field">
                <label>Valor mensal DOA extra</label>
                <NumInput value={params.doaProrrogValor} onChange={(n) => patch({ doaProrrogValor: n })} />
              </div>
              <div className="field">
                <label>DOA sobre rendimento futuro?</label>
                <YesNoSelect value={params.doaRend} onChange={(v) => patch({ doaRend: v })} />
              </div>
              <div className="field">
                <label>DOA sobre rendimento acumulado?</label>
                <YesNoSelect value={params.doaRendAcum} onChange={(v) => patch({ doaRendAcum: v })} />
              </div>
              <div className="field">
                <label>Alíquota DOA s/ rendimento</label>
                <NumInput value={params.doaRendAliq} percentMode onChange={(n) => patch({ doaRendAliq: n })} />
              </div>
            </div>

            <div className="field-group">
              <h3>Viagens internacionais</h3>
              <div className="field">
                <label>Passagens totais / já previstas</label>
                <div style={{ display: 'flex', gap: 4 }}>
                  <NumInput value={params.passTot} onChange={(n) => patch({ passTot: Math.round(n) })} />
                  <NumInput value={params.passPrev} onChange={(n) => patch({ passPrev: Math.round(n) })} />
                </div>
              </div>
              <div className="field">
                <label>Valor por passagem</label>
                <NumInput value={params.passVal} onChange={(n) => patch({ passVal: n })} />
              </div>
              <div className="field">
                <label>Diárias totais / já pagas</label>
                <div style={{ display: 'flex', gap: 4 }}>
                  <NumInput value={params.diTot} onChange={(n) => patch({ diTot: Math.round(n) })} />
                  <NumInput value={params.diPrev} onChange={(n) => patch({ diPrev: Math.round(n) })} />
                </div>
              </div>
              <div className="field">
                <label>Diária (US$)</label>
                <NumInput value={params.diUsd} onChange={(n) => patch({ diUsd: n })} />
              </div>
              <div className="field">
                <label>Total viagens a projetar</label>
                <strong style={{ fontSize: '0.85rem' }}>{money(viagensCusto(params))}</strong>
              </div>
            </div>

            <div className="field-group">
              <h3>Rubricas (valor a gastar)</h3>
              <div className="field">
                <label>IMUs</label>
                <NumInput value={params.rubricas.imu ?? 0} onChange={(n) => setRubrica('imu', n)} />
              </div>
              {RUBRICAS.filter((r) => r.categoria === 'demais' && r.editavel).map((r) => (
                <div className="field" key={r.id}>
                  <label title={r.item}>{r.item.length > 28 ? `${r.item.slice(0, 28)}…` : r.item}</label>
                  <NumInput value={params.rubricas[r.id] ?? 0} onChange={(n) => setRubrica(r.id, n)} />
                </div>
              ))}
              <div className="field">
                <label>Total demais + IMU</label>
                <strong style={{ fontSize: '0.85rem' }}>{money(totalDemais(params) + totalImu(params))}</strong>
              </div>
            </div>
          </aside>

          <div>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={chartData} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
                  <defs>
                    <linearGradient id="saldoFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#15706a" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#15706a" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#c5d4cd" strokeDasharray="3 3" />
                  <XAxis dataKey="mes" tick={{ fontSize: 11, fill: '#6b7f78' }} interval="preserveStartEnd" />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#6b7f78' }}
                    tickFormatter={(v: number) =>
                      new Intl.NumberFormat('pt-BR', { notation: 'compact', compactDisplay: 'short' }).format(v)
                    }
                    width={52}
                  />
                  <Tooltip
                    formatter={(value) => money(Number(value ?? 0))}
                    labelFormatter={(l) => `Mês: ${l}`}
                    contentStyle={{ borderRadius: 10, borderColor: '#9bb0a7', fontFamily: 'Sora, sans-serif' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="saldo"
                    name="Saldo (sem comprar PCs)"
                    stroke="#0b4f4a"
                    strokeWidth={2.2}
                    fill="url(#saldoFill)"
                    animationDuration={650}
                  />
                  <Area
                    type="monotone"
                    dataKey="comPc"
                    name="Saldo (com compra)"
                    stroke="#a67c2a"
                    strokeWidth={1.6}
                    strokeDasharray="5 4"
                    fill="transparent"
                    animationDuration={650}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <h3 style={{ margin: '1.1rem 0 0.5rem', fontFamily: 'var(--font-display)', color: 'var(--teal)', fontSize: '1.05rem' }}>
              Bolsas — meses adicionais no cenário +{scenario}
            </h3>
            <div className="scroll-x">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Bolsista</th>
                    <th>Situação</th>
                    <th>Unitário</th>
                    <th>Meses originais</th>
                    <th>Meses adicionais</th>
                    <th>Total original</th>
                    <th>Total prorrogação</th>
                  </tr>
                </thead>
                <tbody>
                  {BOLSAS.map((b, i) => {
                    const tot = current.bolsaTotais[i];
                    return (
                      <tr key={b.id}>
                        <td>
                          {b.nome}
                          {b.zeroPadrao && (
                            <>
                              {' '}
                              <span className="badge zero">padrão 0</span>
                            </>
                          )}
                        </td>
                        <td>
                          <span className={`badge ${b.situacao === 'Ativa' ? 'ativa' : ''}`}>{b.situacao}</span>
                        </td>
                        <td>{money(params.unitarios[b.id] ?? b.unitario)}</td>
                        <td>
                          <NumInput value={params.mesesOrig[b.id] ?? 0} onChange={(n) => setMesOrig(b.id, n)} />
                        </td>
                        <td>
                          <NumInput value={params.mesesAdd[scenario][b.id] ?? 0} onChange={(n) => setMesAdd(b.id, n)} />
                        </td>
                        <td>{money(tot.orig)}</td>
                        <td>{money(tot.prorrog)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2>Premissas e avisos</h2>
        <p className="panel-lead">Decisões do usuário e pontos a confirmar — valores padrão da planilha recalculada.</p>
        <div className="notes">
          <div className="note">
            <strong>DOA 15% sobre rendimento</strong>
            <p>
              Alíquota contratual editável (padrão {percent(params.doaRendAliq)}). Incide sobre rendimento futuro e sobre o
              acumulado ainda não incorporado ({money(OVERVIEW.rendNaoIncorp)}). A cobrança observada em jul/2026 não fechou
              em 15% — mantido por decisão.
            </p>
          </div>
          <div className="note">
            <strong>11 diárias internacionais restantes</strong>
            <p>
              Total do projeto 28, já pagas 17; restam 11 × US$ {number(params.diUsd, 0)} × câmbio = parte das viagens a
              projetar ({money(viagensCusto(params))}).
            </p>
          </div>
          <div className="note">
            <strong>Bolsas nunca pagas zeradas por padrão</strong>
            <p>
              Mestrando sem nome, 3 vagas de graduação, Estevão Lopes e as 2 cotas restantes de José Roberto: 0 meses no
              período original e na prorrogação. Continuam editáveis.
            </p>
          </div>
          <div className="note">
            <strong>Remanejamento do exoesqueleto</strong>
            <p>
              Orçado {money(OVERVIEW.exoOrc)}, executado {money(OVERVIEW.exoExec)}, diferença{' '}
              {money(OVERVIEW.exoDif)} tratada como livre. Padrão: nada mais a gastar nessa linha.
            </p>
          </div>
          <div className="note">
            <strong>Taxa de rendimento</strong>
            <p>
              Padrão {percent(OVERVIEW.taxaPadrao)} a.m. (período completo com IRRF/IOF). Referência sem IOF:{' '}
              {percent(OVERVIEW.taxaSemIof)} a.m. Sem repasse futuro.
            </p>
          </div>
          <div className="note">
            <strong>Calendário</strong>
            <p>
              Período original nov/2026–jun/2027; DOA restante em 7 parcelas (dez/26–jun/27); rubricas não-bolsa em
              parcelas iguais nos meses configurados; computadores no mês indicado (padrão jun/2027).
            </p>
          </div>
        </div>
      </section>

      <p className="footer-note">
        Motor de cálculo no cliente, espelhando a planilha docs/projecao-fapdf.xlsx · preferências salvas em localStorage
      </p>
    </div>
  );
}
