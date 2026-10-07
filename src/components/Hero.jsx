import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Star, ArrowRight, Clock, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function Hero({ onBookClick }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const proofRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(eyebrowRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    )
    .fromTo(headlineRef.current,
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }, '-=0.2'
    )
    .fromTo(subRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, '-=0.3'
    )
    .fromTo(proofRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
    )
    .fromTo(statsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
    )
    .fromTo(imageRef.current,
      { scale: 0.96, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6'
    );
  }, []);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <section id="home" ref={heroRef} className="relative bg-gradient-to-b from-dental-cream via-white to-dental-cream overflow-hidden py-8 sm:py-12 lg:py-16">

      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 hero-pattern pointer-events-none opacity-60" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Primary Hierarchy (7 Cols on Desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">

            {/* LEVEL 1: Eyebrow Location & Credibility Anchor */}
            <div ref={eyebrowRef} className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100/70 border border-olive-200/80 text-olive-800 text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck size={14} className="text-olive-700" />
                Trusted Dental Surgery in Pudupet, Egmore
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Clock size={13} className="text-olive-600" />
                Open Today till 9:00 PM
              </span>
            </div>

            {/* LEVEL 2: Primary Focal Point — Headline with Authoritative Scale */}
            <div ref={headlineRef} className="space-y-3">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.25rem] text-slate-900 tracking-tight leading-[1.12]">
                Your Smile, <br className="hidden sm:inline" />
                <span className="text-olive-700 underline decoration-olive-300 decoration-wavy decoration-2 underline-offset-8">
                  Our Passion.
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-700 leading-snug">
                Advanced Invisalign, Precision Implants & 100% Pain-Free Root Canals.
              </p>
            </div>

            {/* LEVEL 3: Clear Value Statement */}
            <div ref={subRef} className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Experience hospital-grade sterile dentistry in Chennai with zero fear. From routine preventive checkups to complex orthodontic smile transformations, every treatment is transparent, ethical, and tailored to your comfort.
              </p>
              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs sm:text-sm text-slate-500 pt-0.5">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-olive-600" />
                  Digital Low-Radiation X-Rays
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-olive-600" />
                  Same-Day Emergency Relief
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-olive-600" />
                  Mon 50% OFF Checkup
                </span>
              </div>
            </div>

            {/* LEVEL 4: Social Proof Anchor (Unified, No Clutter) */}
            <div ref={proofRef} className="flex items-center gap-4 py-1 border-y border-slate-100">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-9 h-9 rounded-full bg-olive-700 text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  R
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  K
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  S
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="star-filled" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">{clinicData.ratings.score} / 5.0</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Google Verified Excellence · {clinicData.ratings.totalReviews}+ patient ratings
                </p>
              </div>
            </div>

            {/* LEVEL 5: Unmistakable CTA Hierarchy */}
            <div ref={ctaRef} className="space-y-3.5 pt-1">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* PRIMARY CTA — High Contrast, Highest Visual Weight */}
                <button
                  onClick={onBookClick}
                  className="btn-primary text-base font-semibold px-8 py-4 justify-center shadow-lg shadow-olive-900/15 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  Book Appointment <ArrowRight size={18} />
                </button>

                {/* SECONDARY CTA — Clean, Distinguishable Outline */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#25D366]/5 text-slate-800 hover:text-[#1ebe5a] border-2 border-slate-200 hover:border-[#25D366] font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
                >
                  <MessageCircle size={19} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Quick Call Direct Line */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Phone size={13} className="text-olive-700" />
                <span>Prefer to talk? Call directly:</span>
                <a href={`tel:${clinicData.contact.phone1}`} className="font-bold text-slate-800 hover:text-olive-700 underline underline-offset-2">
                  {clinicData.contact.displayPhone1}
                </a>
                <span className="text-slate-300">/</span>
                <a href={`tel:${clinicData.contact.phone2}`} className="font-semibold text-slate-700 hover:text-olive-700">
                  {clinicData.contact.displayPhone2}
                </a>
              </div>
            </div>

            {/* LEVEL 6: Key Statistics Row */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {clinicData.stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-3 border border-slate-200/70 shadow-sm text-center">
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-olive-700">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Visual Authority (5 Cols on Desktop) */}
          <div ref={imageRef} className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              {/* Real clinic image */}
              <img
                src="/clinic-chair.jpg"
                alt="Olive Dental Care - Modern Sterile Operatory Room"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden w-full h-80 sm:h-96 lg:h-[480px] bg-gradient-to-br from-olive-700 to-olive-900 flex-col items-center justify-center text-white text-center p-8">
                <div className="text-7xl mb-4">🦷</div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">Olive Dental Care</h3>
                <p className="text-olive-200 text-sm">Pudupet · Egmore, Chennai</p>
              </div>

              {/* Clean bottom gradient vignette */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent pointer-events-none" />

              {/* Bottom In-Frame Info Bar (Eliminating outside floating sticker chaos) */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs z-10">
                <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">100% Sterile Operatory</span>
                </div>
                <div className="bg-olive-600/90 backdrop-blur-md px-3 py-1.5 rounded-xl font-semibold border border-white/20">
                  Egmore, Chennai
                </div>
              </div>
            </div>

            {/* Single High-Value Floating Accent: Monday 50% Special */}
            <div className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-4 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-200/80 max-w-[210px] animate-float">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm flex-shrink-0">
                  🏷️
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Every Monday</p>
                  <p className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    50% OFF <span className="text-olive-700 font-bold text-xs">Check-Up</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
