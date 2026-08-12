import React, { useState, useEffect, useCallback } from 'react';

const GALLERY_ITEMS = [
  { src: '/assets/images/FACHADA ELEGIDA.png', label: 'Fachada Principal', cat: 'Exterior' },
  { src: '/assets/images/render bloque A.png', label: 'Bloque A — Vista General', cat: 'Exterior' },
  { src: '/assets/images/bloque a1/balcon bloque a.png', label: 'Balcón Tipología A1', cat: 'Interiores' },
  { src: '/assets/images/bloque a1/sala comedor b tipologia a1.png', label: 'Sala — Comedor A1', cat: 'Interiores' },
  { src: '/assets/images/bloque a1/sala.png', label: 'Sala A1', cat: 'Interiores' },
  { src: '/assets/images/bloque a1/tipologia a1 master.png', label: 'Dormitorio Master A1', cat: 'Interiores' },
  { src: '/assets/images/bloque a2/sala comedor tipologia a2.png', label: 'Sala — Comedor A2', cat: 'Interiores' },
  { src: '/assets/images/bloque a2/tipologia a2 master.png', label: 'Dormitorio Master A2', cat: 'Interiores' },
  { src: '/assets/images/departamento 2 dormitorios/sala comedor 2 dormitorios.png', label: 'Sala — 2 Dormitorios', cat: 'Interiores' },
  { src: '/assets/images/departamento 3 dormitorios/cocina comedor departamento 3 dormitorios.png', label: 'Cocina — 3 Dormitorios', cat: 'Interiores' },
  { src: '/assets/images/departamento 3 dormitorios/master departamento 3 dormitorios.png', label: 'Master — 3 Dormitorios', cat: 'Interiores' },
  { src: '/assets/images/amenidades/terraza.png', label: 'Terraza Comunal', cat: 'Amenidades' },
  { src: '/assets/images/amenidades/bbq.png', label: 'Área BBQ', cat: 'Amenidades' },
  { src: '/assets/images/amenidades/petzone.png', label: 'Pet Zone', cat: 'Amenidades' },
  { src: '/assets/images/amenidades/area_verde.png', label: 'Área Verde', cat: 'Amenidades' },
  { src: '/assets/images/amenidades/vistas panoramicas de la ciudad.png', label: 'Vistas Panorámicas', cat: 'Amenidades' },
];

const CATS = ['Todos', 'Exterior', 'Interiores', 'Amenidades'];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('Todos');
  const [lightbox, setLightbox] = useState(null); // index del item activo o null

  const filtered = activeCat === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.cat === activeCat);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i > 0 ? i - 1 : filtered.length - 1));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i < filtered.length - 1 ? i + 1 : 0));
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, prev, next]);

  // Bloquear scroll del body cuando lightbox está abierto
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [lightbox]);


  return (
    <section className="section" id="galeria">
      <div className="container">
        <div className="section-label" data-anim="reveal">
          <span className="section-label__num">02</span>Galería de Renders
        </div>

        <h2 className="manifest__statement" data-anim="reveal" style={{ marginBottom: '32px' }}>
          Espacios diseñados para vivir bien
        </h2>

        {/* Filtros de categoría */}
        <div className="filters" data-anim="reveal">
          {CATS.map((cat) => (
            <button
              key={cat}
              className={`tab${activeCat === cat ? ' is-active' : ''}`}
              onClick={() => { setActiveCat(cat); setLightbox(null); }}
            >
              {cat}
              <span>{cat === 'Todos' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.cat === cat).length}</span>
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="gallery__grid">
          {filtered.map((item, idx) => (
            <figure
              key={item.src}
              className="gallery__item"
              onClick={() => openLightbox(idx)}
              data-cursor="Ver"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              role="button"
              aria-label={`Ver imagen: ${item.label}`}
            >
              <div className="gallery__img-wrap">
                <img
                  className="gallery__img"
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                />
              </div>
              <figcaption className="gallery__caption">
                <span className="gallery__cat">{item.cat}</span>
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
          onClick={closeLightbox}
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Cerrar">
            <span>✕</span>
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Anterior">
            ←
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox__img"
              src={filtered[lightbox].src}
              alt={filtered[lightbox].label}
            />
            <div className="lightbox__info">
              <span className="lightbox__cat">{filtered[lightbox].cat}</span>
              <p className="lightbox__label">{filtered[lightbox].label}</p>
              <span className="lightbox__counter">{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>
          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Siguiente">
            →
          </button>
        </div>
      )}
    </section>
  );
}
