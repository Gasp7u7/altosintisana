import React from 'react';

export default function Financing() {
  return (
    <section className="section" id="financiamiento">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">04</span>Planes de Financiamiento
        </div>

        <div className="manifest">
          <div className="manifest__num">04</div>
          <h2 className="manifest__statement">
            Facilidades de pago directas y financiamiento hipotecario en Ecuador.
          </h2>

          <div>
            <ul className="spec-list">
              <li>
                <span>Plan Miti-Miti</span>
                <strong>0% Interés durante Obra</strong>
              </li>
              <li>
                <span>Crédito VIP</span>
                <strong>Tasa Fija 4.87% Anual (20-25 Años)</strong>
              </li>
              <li>
                <span>Crédito BIESS</span>
                <strong>Hasta 100% Financiado</strong>
              </li>
              <li>
                <span>Banca Privada / Contado</span>
                <strong>Convenios Directos & Descuentos</strong>
              </li>
            </ul>

            <div style={{ marginTop: '28px' }}>
              <a
                className="btn btn--solid"
                href="https://wa.me/593995034606?text=Hola,%20deseo%20asesor%C3%ADa%20sobre%20financiamiento%20para%20Altos%20de%20Intisana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn__txt">Consultar Opciones de Pago</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
