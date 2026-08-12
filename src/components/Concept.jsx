import React from 'react';

export default function Concept() {
  return (
    <section className="section" id="concepto">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">01</span>Proyecto & Concepto
        </div>

        <div className="manifest">
          <div className="manifest__num">01</div>
          <h2 className="manifest__statement">
            Espacios concebidos para perdurar. Arquitectura atemporal en el sector Cochapamba.
          </h2>

          <div>
            <ul className="spec-list">
              <li>
                <span>Ubicación</span>
                <strong>Sector Cochapamba, Quito</strong>
              </li>
              <li>
                <span>Modelos</span>
                <strong>Suites, 2 y 3 Dormitorios</strong>
              </li>
              <li>
                <span>Acabados</span>
                <strong>Madera Nogal & Verde Salvia</strong>
              </li>
              <li>
                <span>Financiamiento</span>
                <strong>Crédito VIP (4.87%) & BIESS</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
