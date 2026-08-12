import React, { useState } from 'react';

const GHL_WEBHOOK = import.meta.env.VITE_GHL_WEBHOOK;

const MODELOS_UNIDAD = [
  'Sin preferencia',
  'Suite B1 — 1 Dormitorio',
  'Modelo 2 Dormitorios',
  'Modelo 3 Dormitorios (75.92 m²)',
  'Modelo 3 Dormitorios (88.99 m²)',
  'Modelo 3 Dormitorios + Terraza (114.53 m²)',
];

export default function LeadForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam
    if (data.get('company')) return;

    const nombre = String(data.get('nombre') || '').trim();
    const telefono = String(data.get('telefono') || '').trim();
    const email = String(data.get('email') || '').trim();
    const tipologia = String(data.get('tipologia') || '').trim();

    if (!nombre || !telefono) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const payload = {
      nombre,
      email,
      telefono,
      tipo_unidad: tipologia,
      fuente: 'Landing Altos de Intisana',
      pagina: window.location.href,
      fecha: new Date().toISOString(),
    };

    try {
      if (GHL_WEBHOOK) {
        const res = await fetch(GHL_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`GHL respondió ${res.status}`);
      }
      setStatus('success');
      form.reset();
    } catch {
      // Si falla el webhook, abrir WhatsApp como fallback
      const msg = `Hola, me interesa información sobre Altos de Intisana. Mi nombre es ${nombre}${tipologia && tipologia !== 'Sin preferencia' ? `, me interesa: ${tipologia}` : ''}.`;
      window.open(`https://wa.me/593995034606?text=${encodeURIComponent(msg)}`, '_blank');
      setStatus('success');
    }
  };

  return (
    <div className="lead-form-wrap">
      {status === 'success' ? (
        <div className="lead-form__success" role="status">
          <div className="lead-form__success-icon">✓</div>
          <strong>¡Gracias por tu interés!</strong>
          <p>Un asesor de Altos de Intisana te contactará muy pronto con disponibilidad, precios y opciones de financiamiento.</p>
        </div>
      ) : (
        <form className="lead-form" onSubmit={handleSubmit} noValidate>
          {/* Honeypot oculto */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
          />

          <div className="field">
            <label htmlFor="lf-nombre">Nombre completo *</label>
            <input id="lf-nombre" name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre" />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="lf-telefono">Teléfono / WhatsApp *</label>
              <input id="lf-telefono" name="telefono" type="tel" required autoComplete="tel" placeholder="+593..." />
            </div>
            <div className="field">
              <label htmlFor="lf-email">Correo electrónico</label>
              <input id="lf-email" name="email" type="email" autoComplete="email" placeholder="tucorreo@email.com" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="lf-tipologia">Tipo de unidad de preferencia</label>
            <select id="lf-tipologia" name="tipologia" defaultValue="Sin preferencia">
              {MODELOS_UNIDAD.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>


          {status === 'error' && (
            <p className="field-error" role="alert">
              Completa tu nombre y teléfono para continuar.
            </p>
          )}

          <button type="submit" className="btn btn--solid btn--full" disabled={status === 'sending'}>
            <span className="btn__txt">{status === 'sending' ? 'Enviando…' : 'Solicitar información'}</span>
          </button>

          <p className="lead-form__legal">
            Al enviar aceptas ser contactado por el equipo de Altos de Intisana. No compartimos tus datos.
          </p>
        </form>
      )}
    </div>
  );
}
