import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Calendar, X, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function FloatingActions({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 1, ease: 'back.out(1.7)' }
    );
  }, []);

  // Menu expand / collapse animation
  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      gsap.fromTo(
        menuRef.current.children,
        { y: 15, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.25, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care%21%20I%27d%20like%20to%20inquire%20about%20an%20appointment.`;

  return (
    <div ref={containerRef} className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">

      {/* Expanded Actions Menu */}
      {isOpen && (
        <div ref={menuRef} className="flex flex-col items-end gap-2.5 mb-3 select-none">

          {/* 1. WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-4 py-2.5 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5 group"
            aria-label="Chat on WhatsApp"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wide">WhatsApp Chat</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={18} />
            </div>
          </a>

          {/* 2. Book Appointment Button */}
          <button
            onClick={() => {
              onBookClick();
              setIsOpen(false);
            }}
            className="flex items-center gap-2.5 bg-olive-600 hover:bg-olive-700 text-white px-4 py-2.5 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5 group"
            aria-label="Book Appointment"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wide">Book Online</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Calendar size={18} />
            </div>
          </button>

          {/* 3. Call Clinic Button */}
          <a
            href={`tel:${clinicData.contact.phone1}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border-2 border-olive-200 px-4 py-2.5 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5 group"
            aria-label="Call Clinic"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-olive-800">Call Clinic</span>
            <div className="w-8 h-8 rounded-full bg-olive-50 flex items-center justify-center text-olive-600">
              <Phone size={17} />
            </div>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 focus:outline-none ${
          isOpen
            ? 'bg-slate-800 text-white rotate-90 scale-95'
            : 'bg-olive-600 hover:bg-olive-700 text-white hover:scale-105 whatsapp-pulse'
        }`}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact options'}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageCircle size={26} className="text-white" />
            {/* Notification indicator pip */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white"></span>
            </span>
          </>
        )}
      </button>

      {/* Floating tooltip badge when closed (mobile & desktop) */}
      {!isOpen && (
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-medium py-1 px-2.5 rounded-full shadow-md whitespace-nowrap pointer-events-none opacity-0 sm:opacity-100 transition-opacity">
          Need Help? Tap here
        </span>
      )}
    </div>
  );
}
