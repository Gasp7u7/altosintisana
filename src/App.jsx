import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Gallery from './components/Gallery';
import Typologies from './components/Typologies';
import Simulator from './components/Simulator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef(null);

  // ─── 1. Lenis + GSAP ScrollTrigger sincronizados ───────────────────────────
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Sincronización crítica: Lenis actualiza ScrollTrigger en cada tick
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // ─── 2. Animaciones GSAP ─────────────────────────────────────────────────
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Static reveal para reducción de movimiento
      if (reduceMotion) {
        gsap.set('[data-anim="reveal"]', { opacity: 1, y: 0 });
        gsap.set('.kinetic span', { y: '0%' });
        gsap.set('.hero__head, .hero__claim, .hero__ctas, .hero__ticker', { opacity: 1 });
        document.querySelectorAll('[data-count]').forEach((el) => {
          el.textContent = el.getAttribute('data-count') || '00';
        });
        return;
      }

      // ── 2.1 Intro Hero ──
      gsap.set('.hero__head, .hero__claim, .hero__ctas, .hero__ticker', { opacity: 0 });
      gsap.set('.kinetic span', { y: '110%' });
      gsap.set('.hero__img', { scale: 1.1 });

      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .to('.hero__img', { scale: 1, duration: 1.8, ease: 'power2.out' }, 0)
        .to('.hero__head', { opacity: 1, duration: 0.7, ease: 'power2.out' }, 0.2)
        .to('.kinetic span', {
          y: '0%',
          duration: 1.0,
          ease: 'power3.out',
          stagger: 0.14,
        }, 0.3)
        .to('.hero__claim', { opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.65)
        .to('.hero__ctas', { opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.78)
        .to('.hero__ticker', { opacity: 1, duration: 0.7, ease: 'power2.out' }, 0.9);

      // ── 2.2 Contadores numéricos (BLOQUES 02, RESIDENCIAS 29) ──
      document.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseInt(el.getAttribute('data-count') || '0', 10);
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = String(Math.round(proxy.val)).padStart(2, '0');
          },
        });
      });

      // ── 2.3 Reveal general para secciones ──
      gsap.utils.toArray('[data-anim="reveal"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 38 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // ── 2.4 Reveal escalonado para títulos de sección ──
      gsap.utils.toArray('.manifest__statement').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // ── 2.5 Efecto parallax sutil en imágenes de galería/mosaico ──
      gsap.utils.toArray('.mosaic__item img, .gallery__img').forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.06 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      });

      // ── 2.6 Navbar scroll-aware ──
      const nav = document.querySelector('.nav');
      if (nav) {
        ScrollTrigger.create({
          start: 'top -60px',
          onEnter: () => nav.classList.add('is-scrolled'),
          onLeaveBack: () => nav.classList.remove('is-scrolled'),
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Gallery />
        <Typologies />
        <Simulator />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
