import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Star, ChevronDown, ArrowRight, Clock, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function Hero({ onBookClick }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(badgeRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
    .fromTo(headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }, '-=0.3'
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }, '-=0.4'
    )
    .fromTo(ctaRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, '-=0.3'
    )
    .fromTo(statsRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, '-=0.2'
    )
    .fromTo(imageRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.8'
    );
  }, []);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <section id="home" ref={heroRef} className="relative bg-gradient-to-br from-dental-cream via-olive-50 to-mint-50 overflow-hidden min-h-[90vh] flex items-center">

      {/* Background decoration */}
      <div className="absolute inset-0 hero-pattern pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-olive-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-mint-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-5 sm:space-y-6">

            {/* Google Rating Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 bg-white rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-md border border-olive-100">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={13} className="star-filled" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">{clinicData.ratings.score} Google Rating</span>
              <span className="text-[11px] sm:text-xs text-slate-500">({clinicData.ratings.totalReviews}+ reviews)</span>
            </div>

            {/* Headline */}
            <div ref={headlineRef}>
              <h1 className="section-title text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-shadow leading-tight">
                <span className="text-slate-800">Your Smile,</span>
                <br />
                <span className="text-olive-600">Our Passion</span>
              </h1>
              <p className="mt-2.5 sm:mt-3 text-base sm:text-lg md:text-xl font-display font-semibold text-slate-600">
                Invisalign · Braces · Implants · RCT
              </p>
            </div>

            {/* Sub text */}
            <div ref={subRef} className="space-y-2.5">
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Best Dental Clinic in <strong className="text-olive-700">Pudupet, Egmore, Chennai</strong>.
                Advanced treatments with modern technology in a clean, painless, and friendly environment.
              </p>
              {/* Location */}
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                <MapPin size={15} className="text-olive-600 mt-0.5 flex-shrink-0" />
                <span>{clinicData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                <Clock size={14} className="text-olive-600 flex-shrink-0" />
                <span>Mon–Sat: <strong>10 AM–1 PM</strong> & <strong>5:30 PM–9 PM</strong></span>
              </div>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 pt-1">
              <button onClick={onBookClick} className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 justify-center">
                Book Appointment <ArrowRight size={16} />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base justify-center"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            {/* Call strip */}
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-1 flex-wrap text-xs sm:text-sm">
              <a href={`tel:${clinicData.contact.phone1}`} className="flex items-center gap-2 text-olive-700 hover:text-olive-900 font-semibold transition-colors">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-olive-100 flex items-center justify-center">
                  <Phone size={13} className="text-olive-600" />
                </div>
                {clinicData.contact.displayPhone1}
              </a>
              <span className="text-slate-300">|</span>
              <a href={`tel:${clinicData.contact.phone2}`} className="text-olive-700 hover:text-olive-900 font-semibold transition-colors">
                {clinicData.contact.displayPhone2}
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2">
              {clinicData.stats.map((stat) => (
                <div key={stat.label} className="text-center bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-olive-50">
                  <p className="font-display font-bold text-xl sm:text-2xl text-olive-600">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image / Visual */}
          <div ref={imageRef} className="relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Real clinic image */}
              <img
                src="/clinic-chair.jpg"
                alt="Olive Dental Care - Modern Treatment Room"
                className="w-full h-72 sm:h-80 md:h-[460px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback visual */}
              <div className="hidden w-full h-72 sm:h-80 md:h-[460px] bg-gradient-to-br from-olive-600 via-olive-500 to-mint-400 flex-col items-center justify-center text-white text-center p-8">
                <div className="text-7xl sm:text-8xl mb-4">🦷</div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">Olive Dental Care</h3>
                <p className="text-olive-100 text-base sm:text-lg">Modern · Hygienic · Painless</p>
                <div className="mt-6 grid grid-cols-3 gap-2 w-full max-w-xs">
                  {['Invisalign', 'Implants', 'RCT', 'Braces', 'Kids Care', 'Whitening'].map(s => (
                    <div key={s} className="bg-white/20 rounded-lg py-1.5 px-1 text-xs font-medium text-center">
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlay badges */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <div className="bg-olive-600 text-white rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg text-[11px] sm:text-xs font-bold">
                  🌿 OLIVE DENTAL CARE
                </div>
              </div>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                <div className="bg-white rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg text-[11px] sm:text-xs font-semibold text-slate-700">
                  ✅ Sterile & Hygienic
                </div>
              </div>
            </div>

            {/* Monday offer card - clamped inside on mobile, offset on desktop */}
            <div className="absolute bottom-3 left-3 sm:-bottom-5 sm:-left-5 bg-yellow-400 text-slate-900 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xl font-bold text-xs sm:text-sm max-w-[170px] animate-float border-2 border-yellow-300">
              🏷️ Monday Special<br />
              <span className="text-olive-800 text-base sm:text-lg">50% OFF</span> Checkup!
            </div>

            {/* Rating float - clamped inside on mobile, offset on desktop */}
            <div className="absolute top-3 right-3 sm:-top-4 sm:-right-4 bg-white rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl text-center border border-olive-100">
              <div className="flex gap-0.5 justify-center">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="star-filled" />)}
              </div>
              <p className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5">{clinicData.ratings.score}/5.0</p>
              <p className="text-[10px] sm:text-xs text-slate-500">Google Rating</p>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-12">
          <a href="#services" className="flex flex-col items-center gap-1 text-slate-400 hover:text-olive-600 transition-colors animate-bounce">
            <span className="text-xs font-medium">Explore Services</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
