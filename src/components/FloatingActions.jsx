import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function FloatingActions({ onBookClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 1.5, ease: 'power3.out' }
    );
  }, []);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care%21%20I%27d%20like%20to%20inquire%20about%20your%20treatments.`;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3">

      {/* WhatsApp (primary) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white rounded-full px-4 py-3 shadow-xl hover:bg-[#1ebe5a] transition-all hover:-translate-y-1 whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline font-semibold text-sm">Chat Now</span>
      </a>

      {/* Book Appointment */}
      <button
        onClick={onBookClick}
        className="flex items-center gap-2 bg-olive-600 text-white rounded-full px-4 py-3 shadow-xl hover:bg-olive-700 transition-all hover:-translate-y-1"
        aria-label="Book Appointment"
      >
        <Calendar size={20} />
        <span className="hidden sm:inline font-semibold text-sm">Book</span>
      </button>

      {/* Call Button */}
      <a
        href={`tel:${clinicData.contact.phone1}`}
        className="flex items-center gap-2 bg-white border-2 border-olive-200 text-olive-700 rounded-full px-4 py-3 shadow-xl hover:border-olive-400 hover:bg-olive-50 transition-all hover:-translate-y-1"
        aria-label="Call Now"
      >
        <Phone size={20} />
        <span className="hidden sm:inline font-semibold text-sm">Call</span>
      </a>
    </div>
  );
}
