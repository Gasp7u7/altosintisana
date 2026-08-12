import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/593995034606?text=Hola,%20deseo%20informaci%C3%B3n%20comercial%20del%20proyecto%20Altos%20de%20Intisana"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa-btn"
      title="Contactar por WhatsApp a Gerencia Comercial"
    >
      <MessageSquare size={20} />
      <span>Consultar por WhatsApp</span>
    </a>
  );
}
