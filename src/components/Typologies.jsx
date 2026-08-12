import React, { useState, useEffect } from 'react';

const typologies = [
  {
    id: '01',
    roomsAttr: '1',
    title: 'Suite Ejecutiva B1',
    badge: 'Bloque B • 35.10 m²',
    mainImg: '/assets/images/departamento estudio/estudio.png',
    gallery: [
      '/assets/images/departamento estudio/estudio.png',
      '/assets/images/departamento estudio/estudio 1.png',
      '/assets/images/departamento estudio/estudio 2.png',
    ],
    description: 'Suite eficiente y moderna diseñada para optimizar cada metro cuadrado. Cuenta con amplios ventanales de piso a techo que garantizan iluminación natural constante y vistas hacia el entorno residencial.',
    specs: [
      { label: 'Superficie', value: '35.10 m²' },
      { label: 'Dormitorios', value: '1 Hab (Suite)' },
      { label: 'Baños', value: '1 Baño' },
      { label: 'Parqueadero', value: '1 Incluido' }
    ],
    fullSpecs: [
      { label: 'Superficie Útil', value: '35.10 m²' },
      { label: 'Dormitorios', value: '1 Suite' },
      { label: 'Baño Completo', value: '1' },
      { label: 'Área Social', value: 'Concepto abierto' },
      { label: 'Parqueadero', value: '1 Subterráneo' },
      { label: 'Acabados', value: 'Madera Nogal & Verde Salvia' },
    ],
    availableUnits: [
      { code: 'B-101', floor: 'Piso 1', status: 'Disponible' },
      { code: 'B-102', floor: 'Piso 1', status: 'Disponible' },
      { code: 'B-201', floor: 'Piso 2', status: 'Disponible' },
      { code: 'B-301', floor: 'Piso 3', status: 'Disponible' },
    ],
    priceDisplay: 'Disponible',
    waLink: 'https://wa.me/593995034606?text=Hola,%20deseo%20cotizaci%C3%B3n%20y%20disponibilidad%20de%20la%20Suite%20Ejecutiva%20B1%20(35.10%20m%C2%B2)%20en%20Altos%20de%20Intisana'
  },
  {
    id: '02',
    roomsAttr: '2',
    title: 'Departamento 2 Dormitorios B2',
    badge: 'Bloque B • 58.24 m²',
    mainImg: '/assets/images/departamento 2 dormitorios/2 dormitorios.png',
    gallery: [
      '/assets/images/departamento 2 dormitorios/2 dormitorios.png',
      '/assets/images/departamento 2 dormitorios/sala comedor 2 dormitorios.png',
      '/assets/images/departamento 2 dormitorios/secundario 2 dormitorios.png',
    ],
    description: 'Distribución equilibrada para parejas o familias pequeñas. Zona social abierta conectada a la cocina de concepto abierto, con excelente ventilación natural y acabados de primera.',
    specs: [
      { label: 'Superficie', value: '58.24 m²' },
      { label: 'Dormitorios', value: '2 Habs' },
      { label: 'Baños', value: '1.5 Baños' },
      { label: 'Parqueadero', value: '1 Incluido' }
    ],
    fullSpecs: [
      { label: 'Superficie Útil', value: '58.24 m²' },
      { label: 'Dormitorios', value: '2 Habs (Master + Secundario)' },
      { label: 'Baño Completo', value: '1' },
      { label: 'Baño Social', value: '1' },
      { label: 'Parqueadero', value: '1 Subterráneo' },
      { label: 'Acabados', value: 'Nogal, Salvia & Porcelanato' },
    ],
    availableUnits: [
      { code: 'B-103', floor: 'Piso 1', status: 'Disponible' },
      { code: 'B-202', floor: 'Piso 2', status: 'Disponible' },
      { code: 'B-302', floor: 'Piso 3', status: 'Disponible' },
      { code: 'B-401', floor: 'Piso 4', status: 'Disponible' },
      { code: 'B-402', floor: 'Piso 4', status: 'Disponible' },
      { code: 'B-501', floor: 'Piso 5 (PH)', status: 'Disponible' },
    ],
    priceDisplay: 'Disponible',
    waLink: 'https://wa.me/593995034606?text=Hola,%20deseo%20cotizaci%C3%B3n%20y%20disponibilidad%20del%20Departamento%202%20Dormitorios%20B2%20(58.24%20m%C2%B2)%20en%20Altos%20de%20Intisana'
  },
  {
    id: '03',
    roomsAttr: '3',
    title: 'Departamento 3 Dormitorios B3',
    badge: 'Bloque B • 75.92 m²',
    mainImg: '/assets/images/departamento 3 dormitorios/3 dormitorios.png',
    gallery: [
      '/assets/images/departamento 3 dormitorios/3 dormitorios.png',
      '/assets/images/departamento 3 dormitorios/cocina comedor departamento 3 dormitorios.png',
      '/assets/images/departamento 3 dormitorios/master departamento 3 dormitorios.png',
    ],
    description: 'Residencia familiar espaciosa con 3 habitaciones amplias, dormitorio máster con baño independiente y clósets integrados de diseño contemporáneo.',
    specs: [
      { label: 'Superficie', value: '75.92 m²' },
      { label: 'Dormitorios', value: '3 Habs' },
      { label: 'Baños', value: '2 Baños' },
      { label: 'Parqueadero', value: '1 Incluido' }
    ],
    fullSpecs: [
      { label: 'Superficie Útil', value: '75.92 m²' },
      { label: 'Dormitorios', value: '3 Habitaciones' },
      { label: 'Baños Completos', value: '2' },
      { label: 'Cocina', value: 'Estilo Americano con isla' },
      { label: 'Parqueadero', value: '1 Incluido' },
      { label: 'Financiamiento', value: 'Apto Crédito VIP 4.87%' },
    ],
    availableUnits: [
      { code: 'B-203', floor: 'Piso 2', status: 'Disponible' },
      { code: 'B-303', floor: 'Piso 3', status: 'Disponible' },
      { code: 'B-403', floor: 'Piso 4', status: 'Disponible' },
      { code: 'B-502', floor: 'Piso 5 (PH)', status: 'Disponible' },
      { code: 'B-503', floor: 'Piso 5 (PH)', status: 'Disponible' },
    ],
    priceDisplay: 'Disponible',
    waLink: 'https://wa.me/593995034606?text=Hola,%20deseo%20cotizaci%C3%B3n%20y%20disponibilidad%20del%20Departamento%203%20Dormitorios%20B3%20(75.92%20m%C2%B2)%20en%20Altos%20de%20Intisana'
  },
  {
    id: '04',
    roomsAttr: '3',
    title: 'Departamento 3 Dormitorios A2',
    badge: 'Bloque A • 88.99 m²',
    mainImg: '/assets/images/bloque a2/planta a2.png',
    gallery: [
      '/assets/images/bloque a2/planta a2.png',
      '/assets/images/bloque a2/sala comedor tipologia a2.png',
      '/assets/images/bloque a2/tipologia a2 master.png',
    ],
    description: 'Amplitud de vanguardia en el Bloque A. Ventanales panorámicos, área social fluida, excelentes vistas y distribución optimizada para privacidad de los dormitorios.',
    specs: [
      { label: 'Superficie', value: '88.99 m²' },
      { label: 'Dormitorios', value: '3 Habs' },
      { label: 'Baños', value: '2 Baños' },
      { label: 'Parqueadero', value: '1 Incluido' }
    ],
    fullSpecs: [
      { label: 'Superficie Útil', value: '88.99 m²' },
      { label: 'Dormitorios', value: '3 Amplias Habs' },
      { label: 'Baños Completos', value: '2 Baños' },
      { label: 'Planta Arquitectónica', value: 'Diseño abierto Bloque A' },
      { label: 'Parqueadero', value: '1 Subterráneo' },
      { label: 'Vistas', value: 'Panorámicas a la ciudad' },
    ],
    availableUnits: [
      { code: 'A-102', floor: 'Piso 1', status: 'Disponible' },
      { code: 'A-201', floor: 'Piso 2', status: 'Disponible' },
      { code: 'A-202', floor: 'Piso 2', status: 'Disponible' },
      { code: 'A-203', floor: 'Piso 2', status: 'Disponible' },
      { code: 'A-301', floor: 'Piso 3', status: 'Disponible' },
      { code: 'A-302', floor: 'Piso 3', status: 'Disponible' },
      { code: 'A-303', floor: 'Piso 3', status: 'Disponible' },
      { code: 'A-401', floor: 'Piso 4', status: 'Disponible' },
      { code: 'A-402', floor: 'Piso 4', status: 'Disponible' },
      { code: 'A-403', floor: 'Piso 4', status: 'Disponible' },
      { code: 'A-503', floor: 'Piso 5 (PH)', status: 'Disponible' },
    ],
    priceDisplay: 'Disponible',
    waLink: 'https://wa.me/593995034606?text=Hola,%20deseo%20cotizaci%C3%B3n%20y%20disponibilidad%20del%20Modelo%203%20Dormitorios%20A2%20(88.99%20m%C2%B2)%20en%20Altos%20de%20Intisana'
  },
  {
    id: '05',
    roomsAttr: '3',
    title: '3 Dormitorios + Terraza Privada A1',
    badge: 'Bloque A • 114.53 m²',
    mainImg: '/assets/images/bloque a1/planta bloque a1.png',
    gallery: [
      '/assets/images/bloque a1/planta bloque a1.png',
      '/assets/images/bloque a1/balcon bloque a.png',
      '/assets/images/bloque a1/sala comedor b tipologia a1.png',
      '/assets/images/bloque a1/tipologia a1 master.png',
    ],
    description: 'El modelo insignia de Altos de Intisana. Más de 114 m² con balcón/terraza privada de vistas privileged, acabados premium en madera nogal y máxima exclusividad.',
    specs: [
      { label: 'Superficie', value: '114.53 m²' },
      { label: 'Dormitorios', value: '3 Habs + Terraza' },
      { label: 'Baños', value: '2 Baños' },
      { label: 'Parqueadero', value: '1 Incluido' }
    ],
    fullSpecs: [
      { label: 'Superficie Total', value: '114.53 m²' },
      { label: 'Dormitorios', value: '3 Habitaciones Master Suite' },
      { label: 'Terraza / Balcón', value: 'Privada con vistas' },
      { label: 'Baños Completos', value: '2' },
      { label: 'Parqueadero', value: '1 Incluido' },
      { label: 'Exclusividad', value: 'Edición limitada Bloque A' },
    ],
    availableUnits: [
      { code: 'A-101', floor: 'Piso 1', status: 'Disponible' },
      { code: 'A-501', floor: 'Piso 5 (PH)', status: 'Disponible' },
      { code: 'A-502', floor: 'Piso 5 (PH)', status: 'Disponible' },
    ],
    priceDisplay: 'Disponible',
    waLink: 'https://wa.me/593995034606?text=Hola,%20deseo%20cotizaci%C3%B3n%20y%20disponibilidad%20de%20la%20Residencia%203%20Dorms%20%2B%20Terraza%20A1%20(114.53%20m%C2%B2)%20en%20Altos%20de%20Intisana'
  }
];

export default function Typologies() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedUnitPill, setSelectedUnitPill] = useState(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const filtered = activeFilter === 'all'
    ? typologies
    : typologies.filter(t => t.roomsAttr === activeFilter);

  const openModal = (model) => {
    setSelectedModel(model);
    setSelectedUnitPill(model.availableUnits ? model.availableUnits[0] : null);
    setActiveImgIdx(0);
  };

  const closeModal = () => {
    setSelectedModel(null);
    setSelectedUnitPill(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selectedModel) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedModel]);


  // Generar link de WhatsApp dinámico para la unidad seleccionada
  const getDynamicWaLink = () => {
    if (!selectedModel) return '';
    if (selectedUnitPill) {
      const msg = `Hola, deseo cotización y verificar disponibilidad de la unidad ${selectedUnitPill.code} (${selectedUnitPill.floor}) correspondiente al modelo "${selectedModel.title}" en Altos de Intisana.`;
      return `https://wa.me/593995034606?text=${encodeURIComponent(msg)}`;
    }
    return selectedModel.waLink;
  };

  return (
    <section className="section" id="viviendas">
      <div className="container">
        <div className="section-label" data-anim="reveal">
          <span className="section-label__num">03</span>Modelos Disponibles
        </div>

        <h2 className="manifest__statement" data-anim="reveal" style={{ marginBottom: '28px' }}>
          Modelos de Departamento
        </h2>

        {/* Filter Tabs */}
        <div className="filters" data-anim="reveal">
          <button
            className={`tab ${activeFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todas <span>05</span>
          </button>
          <button
            className={`tab ${activeFilter === '1' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('1')}
          >
            Suites <span>01</span>
          </button>
          <button
            className={`tab ${activeFilter === '2' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('2')}
          >
            2 Habs <span>01</span>
          </button>
          <button
            className={`tab ${activeFilter === '3' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('3')}
          >
            3 Habs <span>03</span>
          </button>
        </div>

        {/* Unit Model List */}
        <div className="unit-list">
          {filtered.map((model) => (
            <article key={model.id} className="unit-row" data-anim="reveal">
              <div className="unit-row__idx">{model.id}</div>
              
              <div className="unit-row__main">
                <div className="unit-row__head">
                  <h3>{model.title}</h3>
                  <span className="unit-row__badge">{model.badge}</span>
                </div>
                <ul className="unit-row__specs">
                  {model.specs.map((spec, sIdx) => (
                    <li key={sIdx}>
                      <strong>{spec.value}</strong>
                      <span>{spec.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="unit-row__foot">
                <div className="unit-row__price">
                  <span>Estado</span>
                  <strong className="unit-row__status">
                    <span className="status-dot"></span>
                    {model.priceDisplay}
                  </strong>
                </div>
                <button
                  className="btn btn--solid btn--small"
                  onClick={() => openModal(model)}
                >
                  <span className="btn__txt">Ver ficha / Consultar</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de Ficha Técnica de Unidad con Selector de Unidades */}
      {selectedModel && (
        <div className="unit-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="unit-modal" onClick={(e) => e.stopPropagation()}>
            <button className="unit-modal__close" onClick={closeModal} aria-label="Cerrar modal">
              ✕
            </button>

            <div className="unit-modal__grid">
              {/* Columna Izquierda: Galería e imágenes */}
              <div className="unit-modal__media">
                <div className="unit-modal__main-img-wrap">
                  <img
                    src={selectedModel.gallery[activeImgIdx] || selectedModel.mainImg}
                    alt={selectedModel.title}
                    className="unit-modal__main-img"
                  />
                </div>
                {selectedModel.gallery.length > 1 && (
                  <div className="unit-modal__thumbs">
                    {selectedModel.gallery.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        className={`unit-modal__thumb${activeImgIdx === idx ? ' is-active' : ''}`}
                        onClick={() => setActiveImgIdx(idx)}
                      >
                        <img src={imgSrc} alt={`Vista ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Columna Derecha: Selector de unidades, specs y CTAs */}
              <div className="unit-modal__body">
                <div className="unit-modal__header">
                  <span className="section-label__num">{selectedModel.id}</span>
                  <span className="unit-row__badge">{selectedModel.badge}</span>
                  <h2>{selectedModel.title}</h2>
                </div>

                <p className="unit-modal__desc">{selectedModel.description}</p>

                {/* Selector de Unidades Físicas para este modelo */}
                {selectedModel.availableUnits && selectedModel.availableUnits.length > 0 && (
                  <div className="modal-unit-selector">
                    <h4 className="unit-modal__subtitle">
                      Selecciona una unidad de este modelo ({selectedModel.availableUnits.length} disponibles):
                    </h4>
                    <div className="modal-unit-pills">
                      {selectedModel.availableUnits.map((u) => (
                        <button
                          key={u.code}
                          className={`modal-unit-pill${selectedUnitPill?.code === u.code ? ' is-active' : ''}`}
                          onClick={() => setSelectedUnitPill(u)}
                        >
                          <strong>{u.code}</strong>
                          <span>{u.floor}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="unit-modal__specs-block">
                  <h4 className="unit-modal__subtitle">Especificaciones del Modelo</h4>
                  <ul className="spec-list">
                    {selectedModel.fullSpecs.map((item, idx) => (
                      <li key={idx}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="unit-modal__actions">
                  <a
                    className="btn btn--solid btn--full"
                    href={getDynamicWaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn__txt">
                      {selectedUnitPill
                        ? `Consultar unidad ${selectedUnitPill.code} (${selectedUnitPill.floor}) por WhatsApp`
                        : 'Consultar disponibilidad por WhatsApp'}
                    </span>
                  </a>
                  <a
                    className="btn btn--line btn--full"
                    href="#contacto"
                    onClick={closeModal}
                  >
                    <span className="btn__txt">Solicitar cotización por formulario</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
