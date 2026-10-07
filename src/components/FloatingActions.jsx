import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Calendar, X, ArrowUp } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function FloatingActions({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const scrollTopRef = useRef(null);

  // Entrance animation for main action button
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 1, ease: 'back.out(1.7)' }
    );
  }, []);

  // Track scroll position for scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate scroll-to-top button in
  useEffect(() => {
    if (scrollTopRef.current && showScrollTop) {
      gsap.fromTo(
        scrollTopRef.current,
        { scale: 0, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
      );
    }
  }, [showScrollTop]);

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

  // Close on click outside or on scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleScrollClose = () => {
      setIsOpen(false);
    };

    document.addEventListener('pointerdown', handleClickOutside);
    window.addEventListener('scroll', handleScrollClose, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care%21%20I%27d%20like%20to%20inquire%20about%20an%20appointment.`;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5"
    >
      {/* 1. Upward Arrow Button — Placed ON TOP of the expandable button */}
      {showScrollTop && (
        <button
          ref={scrollTopRef}
          onClick={scrollToTop}
          className="w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-olive-50 text-olive-700 hover:text-olive-900 border-2 border-olive-300 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 active:scale-95 group"
          aria-label="Scroll to top of page"
          title="Back to top"
        >
          <ArrowUp size={20} className="stroke-[2.5] text-olive-600 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      )}

      {/* 2. Expanded Actions Menu (when open) */}
      {isOpen && (
        <div ref={menuRef} className="flex flex-col items-end gap-2.5 my-1 select-none">
          {/* WhatsApp Button */}
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

          {/* Book Appointment Button */}
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

          {/* Call Clinic Button */}
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

      {/* 3. Main Expandable Contact Button */}
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
    </div>
  );
}
