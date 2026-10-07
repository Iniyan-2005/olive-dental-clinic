import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Reviews',  href: '#reviews' },
  { label: 'Location', href: '#location' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linksRef    = useRef(null);
  const mobileMenuRef = useRef(null);
  const ctaRef      = useRef(null);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Stagger nav links on mount (no y-shift, just fade) ── */
  useEffect(() => {
    const links = linksRef.current?.querySelectorAll('a');
    if (links) {
      gsap.fromTo(links,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out', delay: 0.3 }
      );
    }
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.7 }
      );
    }
  }, []);

  /* ── Mobile drawer ── */
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current,
        { height: 0, opacity: 0, duration: 0.22, ease: 'power2.in' }
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* Promo strip */}
      <div className="bg-olive-600 text-white text-center text-xs sm:text-sm py-2 px-3 sm:px-4 font-medium w-full overflow-hidden">
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          <span className="sm:hidden">
            🦷 <strong>Mon 50% OFF</strong> Check-Up &nbsp;|&nbsp;
          </span>
          <span className="hidden sm:inline">
            🦷 Every Monday — <strong>50% OFF</strong> on Dental Check-Up! &nbsp;|&nbsp;
          </span>
          <span>
            Call: <a href={`tel:${clinicData.contact.phone1}`} className="underline font-bold tracking-tight">{clinicData.contact.displayPhone1}</a>
          </span>
        </div>
      </div>

      {/* Navbar — no GSAP y-transform; use CSS transition only */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-olive-600 rounded-full flex items-center justify-center shadow-md group-hover:bg-olive-700 transition-colors duration-200">
                <span className="text-white text-xl font-bold">🦷</span>
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-olive-700 text-base md:text-lg leading-none">OLIVE</p>
                <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase">Dental Care</p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav ref={linksRef} className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 hover:text-olive-600 font-medium text-sm transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div ref={ctaRef} className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${clinicData.contact.phone1}`}
                className="flex items-center gap-2 text-olive-700 font-semibold text-sm hover:text-olive-900 transition-colors"
              >
                <Phone size={16} className="text-olive-600" />
                {clinicData.contact.displayPhone1}
              </a>
              <button onClick={onBookClick} className="btn-primary text-sm py-2.5">
                Book Appointment
              </button>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a href={`tel:${clinicData.contact.phone1}`} className="text-olive-700">
                <Phone size={20} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          ref={mobileMenuRef}
          className="overflow-hidden lg:hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="border-t border-slate-100 bg-white px-4 py-4">
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-olive-600 hover:bg-olive-50 font-medium py-2.5 px-3 rounded-lg transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => { onBookClick(); setIsOpen(false); }}
              className="btn-primary w-full justify-center"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
