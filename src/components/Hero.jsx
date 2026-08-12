import React, { useState, useEffect } from 'react';

const slides = [
  '/assets/images/FACHADA ELEGIDA.png',
  '/assets/images/render bloque A.png',
  '/assets/images/bloque a1/balcon bloque a.png',
  '/assets/images/amenidades/vistas panoramicas de la ciudad.png'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero__media">
          <img
            src={slides[currentSlide]}
            alt="Altos de Intisana, Cochapamba, Quito"
            className="hero__img"
          />
        </div>

        <div className="hero__margin">
          <span className="hero__margin-rot">SECTOR COCHAPAMBA — QUITO, EC</span>
        </div>

        <div className="hero__head">
          <span>029 / RESIDENCIAS</span>
          <span>QUITO, EC</span>
        </div>

        <h1 className="kinetic">
          <span className="kinetic__line"><span>ALTOS DE</span></span>
          <span className="kinetic__line"><span style={{ color: '#C5A059' }}>INTISANA</span></span>
        </h1>

        <div className="hero__foot">
          <p className="hero__claim">
            Veintinueve residencias exclusivas distribuidas en 2 bloques independientes en Cochapamba con acabados en madera nogal y verde salvia.
          </p>

          <div className="hero__ctas">
            <a
              className="btn btn--solid"
              href="https://wa.me/593995034606?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20el%20proyecto%20Altos%20de%20Intisana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn__txt">Hablar por WhatsApp</span>
            </a>
            <a className="btn btn--line" href="#viviendas">
              <span className="btn__txt">Ver unidades</span>
            </a>
          </div>
        </div>

        <div className="hero__ticker">
          <span>BLOQUES <strong data-count="2">00</strong></span>
          <span>RESIDENCIAS <strong data-count="29">00</strong></span>
          <span>ENTREGA <strong>2026</strong></span>
          <span>DESDE <strong>$40,900 USD</strong></span>
        </div>
      </section>

    </>
  );
}
