import React from 'react';

const amenitiesList = [
  {
    num: '01',
    title: 'Terraza Panorámica',
    desc: 'Vistas ininterrumpidas a la ciudad de Quito y valles.',
    image: '/assets/images/amenidades/terraza.png'
  },
  {
    num: '02',
    title: 'Área BBQ & Pérgola',
    desc: 'Zona al aire libre equipada para reuniones sociales.',
    image: '/assets/images/amenidades/bbq.png'
  },
  {
    num: '03',
    title: 'Pet Zone Exclusiva',
    desc: 'Espacio libre acondicionado para el ejercicio de tus mascotas.',
    image: '/assets/images/amenidades/petzone.png'
  },
  {
    num: '04',
    title: 'Jardines & Áreas Verdes',
    desc: 'Entorno natural integrado con vegetación autóctona de Cochapamba.',
    image: '/assets/images/amenidades/area_verde.png'
  }
];

export default function Amenities() {
  return (
    <section className="section" id="amenidades">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">03</span>Amenidades & Áreas Comunes
        </div>

        <div className="mosaic">
          {amenitiesList.map((item, idx) => (
            <figure key={idx} className="mosaic__item">
              <img src={item.image} alt={item.title} />
              <figcaption>
                <span>{item.num} /</span> {item.title} — {item.desc}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
