const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const pct = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

export function money(v: number): string {
  return brl.format(v);
}

export function moneySigned(v: number): string {
  if (v < -0.005) return `−${money(Math.abs(v))}`;
  return money(v);
}

export function number(v: number, digits = 2): string {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(v);
}

export function percent(v: number): string {
  return pct.format(v);
}

export function parseBrNumber(raw: string): number | null {
  const t = raw.trim().replace(/\s/g, '');
  if (!t) return null;
  let n: number;
  if (t.includes(',') && t.includes('.')) {
    n = Number(t.replace(/\./g, '').replace(',', '.'));
  } else if (t.includes(',')) {
    n = Number(t.replace(',', '.'));
  } else {
    n = Number(t);
  }
  return Number.isFinite(n) ? n : null;
}
