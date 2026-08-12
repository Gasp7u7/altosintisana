import React, { useState, useMemo } from 'react';

const TIPOLOGIAS = [
  { label: 'Suite B1 — 1 Dormitorio', precio: 40900 },
  { label: '2 Dormitorios', precio: 52000 },
  { label: '3 Dormitorios Bloque 3', precio: 68000 },
  { label: '3 Dormitorios A2', precio: 72000 },
  { label: '3 Dormitorios + Terraza A1', precio: 85000 },
];

const CREDITOS = [
  { label: 'VIP — 4.87%', tasa: 4.87 },
  { label: 'BIESS — 6.50%', tasa: 6.50 },
  { label: 'Banca Privada — 9.50%', tasa: 9.50 },
];

const PLAZOS = [15, 20, 25];

function calcCuota(monto, tasaAnual, años) {
  const r = tasaAnual / 100 / 12;
  const n = años * 12;
  if (r === 0) return monto / n;
  return (monto * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function fmt(n) {
  return n.toLocaleString('es-EC', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function Simulator() {
  const [tipIdx, setTipIdx] = useState(0);
  const [entradaPct, setEntradaPct] = useState(20);
  const [creditoIdx, setCreditoIdx] = useState(0);
  const [plazo, setPlazo] = useState(20);

  const tip = TIPOLOGIAS[tipIdx];
  const credito = CREDITOS[creditoIdx];

  const entrada = useMemo(() => Math.round(tip.precio * entradaPct / 100), [tip.precio, entradaPct]);
  const montoCredito = useMemo(() => tip.precio - entrada, [tip.precio, entrada]);
  const cuotaMensual = useMemo(() => calcCuota(montoCredito, credito.tasa, plazo), [montoCredito, credito.tasa, plazo]);

  const waMsg = encodeURIComponent(
    `Hola, simulé un crédito en la web de Altos de Intisana:\n• Tipología: ${tip.label}\n• Precio: $${fmt(tip.precio)}\n• Entrada (${entradaPct}%): $${fmt(entrada)}\n• Crédito: ${credito.label}\n• Plazo: ${plazo} años\n• Cuota estimada: $${fmt(cuotaMensual)}/mes\n¿Pueden confirmarme la disponibilidad?`
  );

  return (
    <section className="section section--sim" id="simulador">
      <div className="container">
        <div className="section-label" data-anim="reveal">
          <span className="section-label__num">04</span>Simulador de Crédito
        </div>

        <div className="sim__grid">
          {/* Panel izquierdo — Controles */}
          <div className="sim__controls" data-anim="reveal">
            <h2 className="manifest__statement" style={{ marginBottom: '32px' }}>
              Calcula tu cuota mensual
            </h2>

            {/* Selector de modelo */}
            <div className="sim__field">
              <label className="sim__label">Modelo de departamento</label>
              <div className="sim__tabs">
                {TIPOLOGIAS.map((t, i) => (
                  <button
                    key={t.label}
                    className={`sim__tab${tipIdx === i ? ' is-active' : ''}`}
                    onClick={() => setTipIdx(i)}
                  >
                    {t.label}
                    <span>${fmt(t.precio)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider entrada */}
            <div className="sim__field">
              <label className="sim__label">
                Entrada — <strong>{entradaPct}%</strong>
                <span className="sim__label-detail"> ($&nbsp;{fmt(entrada)})</span>
              </label>
              <input
                className="sim__range"
                type="range"
                min={5}
                max={50}
                step={1}
                value={entradaPct}
                onChange={(e) => setEntradaPct(Number(e.target.value))}
                aria-label="Porcentaje de entrada"
              />
              <div className="sim__range-track">
                <span>5%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Tipo de crédito */}
            <div className="sim__field">
              <label className="sim__label">Tipo de crédito</label>
              <div className="sim__pills">
                {CREDITOS.map((c, i) => (
                  <button
                    key={c.label}
                    className={`sim__pill${creditoIdx === i ? ' is-active' : ''}`}
                    onClick={() => setCreditoIdx(i)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Plazo */}
            <div className="sim__field">
              <label className="sim__label">Plazo</label>
              <div className="sim__pills">
                {PLAZOS.map((p) => (
                  <button
                    key={p}
                    className={`sim__pill${plazo === p ? ' is-active' : ''}`}
                    onClick={() => setPlazo(p)}
                  >
                    {p} años
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Panel derecho — Resultado */}
          <div className="sim__result" data-anim="reveal">
            <div className="sim__result-card">
              <div className="sim__result-header">
                <span className="section-label__num" style={{ fontSize: '0.72rem' }}>RESUMEN</span>
                <p style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: '1.05rem', marginTop: '6px' }}>
                  {tip.label}
                </p>
              </div>

              <ul className="spec-list" style={{ marginBottom: '24px' }}>
                <li>
                  <span>Precio total</span>
                  <strong>${fmt(tip.precio)}</strong>
                </li>
                <li>
                  <span>Entrada ({entradaPct}%)</span>
                  <strong>${fmt(entrada)}</strong>
                </li>
                <li>
                  <span>Monto del crédito</span>
                  <strong>${fmt(montoCredito)}</strong>
                </li>
                <li>
                  <span>Tasa de interés</span>
                  <strong>{credito.tasa}% anual</strong>
                </li>
                <li>
                  <span>Plazo</span>
                  <strong>{plazo} años ({plazo * 12} cuotas)</strong>
                </li>
              </ul>

              <div className="sim__cuota">
                <p className="sim__cuota-label">Cuota mensual estimada</p>
                <p className="sim__cuota-value">${fmt(cuotaMensual)}</p>
                <p className="sim__cuota-note">Valor referencial. Sujeto a aprobación bancaria.</p>
              </div>

              <a
                className="btn btn--solid btn--full"
                href={`https://wa.me/593995034606?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '20px' }}
              >
                <span className="btn__txt">Enviar simulación por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
