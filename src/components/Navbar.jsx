import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`nav ${isScrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-open' : ''}`} id="nav">
      <div className="nav__inner">
        <a href="#hero" className="nav__brand">
          <span className="nav__brandtext">ALTOS DE INTISANA</span>
        </a>
        
        <nav className="nav__links">
          <a href="#concepto"><span>01</span>Proyecto</a>
          <a href="#galeria"><span>02</span>Galería</a>
          <a href="#viviendas"><span>03</span>Modelos</a>
          <a href="#simulador"><span>04</span>Simulador</a>
          <a href="#contacto"><span>05</span>Contacto</a>
        </nav>

        <a
          className="nav__cta"
          href="https://wa.me/593995034606?text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20Altos%20de%20Intisana"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <button
          className="nav__burger"
          aria-label="Abrir menú"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && (
        <div className="nav__mobile">
          <a href="#concepto" onClick={() => setIsOpen(false)}>01 — Proyecto</a>
          <a href="#galeria" onClick={() => setIsOpen(false)}>02 — Galería</a>
          <a href="#viviendas" onClick={() => setIsOpen(false)}>03 — Modelos de departamento</a>
          <a href="#simulador" onClick={() => setIsOpen(false)}>04 — Simulador de crédito</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>05 — Contacto</a>
          <a
            className="nav__mobileCta"
            href="https://wa.me/593995034606?text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20Altos%20de%20Intisana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp →
          </a>
        </div>
      )}
    </header>
  );
}
