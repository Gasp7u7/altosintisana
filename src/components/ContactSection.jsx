import React from 'react';
import LeadForm from './LeadForm';

export default function ContactSection() {
  return (
    <section className="section section--contact" id="contacto">
      <div className="container">
        <div className="contact__grid">
          {/* Columna izquierda — Formulario */}
          <div className="contact__left">
            <div className="section-label" data-anim="reveal">
              <span className="section-label__num">05</span>Solicita información
            </div>
            <h2 className="manifest__statement" data-anim="reveal" style={{ marginBottom: '12px' }}>
              Habla con un asesor
            </h2>
            <p className="lead" data-anim="reveal" style={{ marginBottom: '36px' }}>
              Déjanos tus datos y un asesor te contactará con disponibilidad, precios y opciones de financiamiento.
            </p>
            <LeadForm />
          </div>

          {/* Columna derecha — Datos de contacto */}
          <div className="contact__right" data-anim="reveal">
            <div className="contact__info-block">
              <p className="contact__label">Gerencia Comercial</p>
              <a
                className="contact__phone"
                href="tel:+593995034606"
              >
                +593 99 503 4606
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '28px' }}>
                <a
                  className="btn btn--solid"
                  href="https://wa.me/593995034606?text=Hola,%20deseo%20agendar%20una%20visita%20a%20la%20obra%20Altos%20de%20Intisana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn__txt">Agendar visita por WhatsApp</span>
                </a>
                <a className="btn btn--line" href="tel:+593995034606">
                  <span className="btn__txt">Llamar directamente</span>
                </a>
              </div>
            </div>

            <ul className="spec-list" style={{ marginTop: '36px' }}>
              <li>
                <span>Sector</span>
                <strong>Cochapamba, Quito, EC</strong>
              </li>
              <li>
                <span>Entrega estimada</span>
                <strong>2026</strong>
              </li>
              <li>
                <span>Precio desde</span>
                <strong>$40,900 USD</strong>
              </li>
              <li>
                <span>Desarrolla</span>
                <strong>VAINCO &amp; Inmo Arqentia</strong>
              </li>
              <li>
                <span>Crédito VIP</span>
                <strong>4.87% — BIESS disponible</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
