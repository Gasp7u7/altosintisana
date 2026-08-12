import React from 'react';

export default function Ubicacion() {
  return (
    <section className="section section--ubicacion" id="ubicacion">
      <div className="container">
        <div className="section-label" data-anim="reveal">
          <span className="section-label__num">06</span>Ubicación estratégica
        </div>
      </div>

      <div className="ubicacion__grid">
        {/* Panel de info */}
        <div className="ubicacion__info" data-anim="reveal">
          <div style={{ padding: '0 28px' }}>
            <h2 className="manifest__statement" style={{ color: 'var(--white)', marginBottom: '16px' }}>
              Sector Cochapamba, Quito
            </h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              En el norte de Quito, a pocos minutos del centro financiero, con acceso inmediato a vías principales, centros comerciales y servicios de salud de primer nivel.
            </p>

            <ul className="spec-list" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              <li style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <span style={{ color: 'rgba(255,255,255,0.45)' }}>Sector</span>
                <strong style={{ color: 'var(--white)' }}>Cochapamba</strong>
              </li>
              <li style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <span style={{ color: 'rgba(255,255,255,0.45)' }}>Ciudad</span>
                <strong style={{ color: 'var(--white)' }}>Quito, Ecuador</strong>
              </li>
              <li style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <span style={{ color: 'rgba(255,255,255,0.45)' }}>Acceso</span>
                <strong style={{ color: 'var(--white)' }}>Av. Simón Bolívar</strong>
              </li>
              <li style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <span style={{ color: 'rgba(255,255,255,0.45)' }}>Altitud aprox.</span>
                <strong style={{ color: 'var(--white)' }}>2,820 m.s.n.m.</strong>
              </li>
            </ul>

            <a
              className="btn ubicacion__map-btn"
              href="https://maps.google.com/?q=Cochapamba,+Quito,+Ecuador"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '28px' }}
            >
              <span className="btn__txt">Ver en Google Maps ↗</span>
            </a>
          </div>
        </div>

        {/* Mapa embed */}
        <div className="ubicacion__map">
          <iframe
            title="Mapa de Altos de Intisana, Cochapamba, Quito"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.792413523!2d-78.4872!3d-0.0825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58fa3e0ecb1fb%3A0xef8da7e2c9afd40!2sCochapamba%2C%20Quito!5e0!3m2!1ses!2sec!4v1691800000000!5m2!1ses!2sec"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.85) contrast(1.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
