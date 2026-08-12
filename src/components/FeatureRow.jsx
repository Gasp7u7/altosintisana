import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeatureRow() {
  return (
    <section className="subhero-row">
      <div className="container">
        <div className="subhero-grid">
          {/* Card 1 */}
          <div className="card-mini-property">
            <div className="mini-img-wrapper">
              <img src="/assets/images/departamento estudio/estudio 1.png" alt="Suite B1" />
            </div>
            <h4 className="mini-prop-title">Suite Ejecutiva B1</h4>
            <p className="mini-prop-sub">Cochapamba, Quito • 35.10 m²</p>
          </div>

          {/* Card 2 */}
          <div className="card-mini-property">
            <div className="mini-img-wrapper">
              <img src="/assets/images/departamento 2 dormitorios/sala comedor 2 dormitorios.png" alt="2 Dorms B2" />
            </div>
            <h4 className="mini-prop-title">Departamento 2 Dorms B2</h4>
            <p className="mini-prop-sub">Cochapamba, Quito • 58.24 m²</p>
          </div>

          {/* Card 3 (Banner Card) */}
          <div className="card-cta-banner">
            <div>
              <span className="cta-banner-tag">Exclusividad & Plusvalía</span>
              <h3 className="cta-banner-title">La mejor opción para tu vivienda o inversión</h3>
              <a href="#viviendas" className="cta-banner-link">
                Explorar más <ArrowRight size={16} />
              </a>
            </div>
            <img
              src="/assets/images/bloque a1/balcon bloque a.png"
              alt="Terraza Vista"
              className="cta-banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
