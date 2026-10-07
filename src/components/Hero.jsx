import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Star, ArrowRight, Clock, MapPin, ShieldCheck, CheckCircle2, UserCheck, Sparkles, CalendarCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function Hero({ onBookClick }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const clarityRef = useRef(null);
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
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }, '-=0.2'
    )
    .fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.3'
    )
    .fromTo(clarityRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
    )
    .fromTo(proofRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 }, '-=0.2'
    )
    .fromTo(ctaRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 }, '-=0.2'
    )
    .fromTo(statsRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 }, '-=0.2'
    )
    .fromTo(imageRef.current,
      { scale: 0.96, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6'
    );
  }, []);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <section id="home" ref={heroRef} className="relative bg-[#FBF9F5] overflow-hidden py-8 sm:py-12 lg:py-16">

      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 hero-pattern pointer-events-none opacity-50" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Complete Above-The-Fold Narrative (7 Cols on Desktop) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">

            {/* EYEBROW: What it is & Where it is */}
            <div ref={eyebrowRef} className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 border border-olive-200 text-olive-800 text-xs font-bold tracking-wide uppercase">
                <ShieldCheck size={14} className="text-olive-700" />
                Olive Dental Care · Pudupet, Egmore, Chennai
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Clock size={13} className="text-olive-600" />
                Open Mon–Sat: 10AM–1PM & 5:30PM–9PM
              </span>
            </div>

            {/* HEADLINE: WHAT IT IS & PRIMARY PROMISE */}
            <div ref={headlineRef} className="space-y-2.5">
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

            {/* WHO IT IS FOR & VALUE STATEMENT */}
            <div ref={subRef} className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                A multi-specialty dental clinic tailored for <strong>busy professionals, families, and children</strong> across Chennai who deserve world-class dentistry without fear, discomfort, or hidden costs.
              </p>
            </div>

            {/* WHY IT MATTERS: 3 Concrete Clinical Pillars */}
            <div ref={clarityRef} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-olive-700" /> 100% Painless
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Computerized rotary numbing protocols</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-olive-700" /> Hospital Sterile
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Autoclaved, single-use instrument packs</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-olive-700" /> Ethical Pricing
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Mon 50% OFF checkups · ₹700 cleaning</p>
              </div>
            </div>

            {/* SOCIAL PROOF ANCHOR */}
            <div ref={proofRef} className="flex items-center gap-4 py-1.5 border-y border-slate-200/70">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-olive-700 text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  R
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  K
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  S
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={13} className="star-filled" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-900">{clinicData.ratings.score} / 5.0 Google Rating</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Verified by 120+ patient families in Pudupet & Egmore
                </p>
              </div>
            </div>

            {/* WHAT TO DO NEXT: Crystal-Clear Guidance + CTAs */}
            <div ref={ctaRef} className="space-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-olive-800">
                <CalendarCheck size={14} className="text-olive-700" />
                <span>What to do next: Select your treatment & date below for instant slot reservation</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* PRIMARY CTA */}
                <button
                  onClick={onBookClick}
                  className="btn-primary text-base font-semibold px-8 py-3.5 justify-center shadow-lg shadow-olive-900/15 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  Book Appointment <ArrowRight size={18} />
                </button>

                {/* SECONDARY CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#25D366]/5 text-slate-800 hover:text-[#1ebe5a] border-2 border-slate-200 hover:border-[#25D366] font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm"
                >
                  <MessageCircle size={19} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Direct Telephone Line */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Phone size={13} className="text-olive-700" />
                <span>Prefer direct phone call?</span>
                <a href={`tel:${clinicData.contact.phone1}`} className="font-bold text-slate-900 hover:text-olive-700 underline">
                  {clinicData.contact.displayPhone1}
                </a>
                <span className="text-slate-300">/</span>
                <a href={`tel:${clinicData.contact.phone2}`} className="font-semibold text-slate-700 hover:text-olive-700">
                  {clinicData.contact.displayPhone2}
                </a>
              </div>
            </div>

            {/* STATS TILES */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {clinicData.stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-2xs text-center">
                  <p className="font-display font-extrabold text-xl text-olive-800">{stat.value}</p>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Visual Anchor (5 Cols on Desktop) */}
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
              <div className="hidden w-full h-80 sm:h-96 lg:h-[480px] bg-olive-800 flex-col items-center justify-center text-white text-center p-8">
                <span className="text-7xl mb-4">🦷</span>
                <h3 className="font-display font-bold text-2xl text-white mb-1">Olive Dental Care</h3>
                <p className="text-olive-200 text-sm">Pudupet · Egmore, Chennai</p>
              </div>

              {/* Clean bottom gradient vignette */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent pointer-events-none" />

              {/* In-Frame Status Tag */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs z-10">
                <div className="flex items-center gap-2 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">Sterile Operatory Room</span>
                </div>
                <div className="bg-olive-700/90 backdrop-blur-md px-3 py-1.5 rounded-xl font-semibold border border-white/20">
                  Pudupet, Chennai
                </div>
              </div>
            </div>

            {/* Single High-Value Floating Accent: Monday 50% Special */}
            <div className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-4 bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-200/90 max-w-[200px] animate-float">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm flex-shrink-0">
                  🏷️
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Every Monday</p>
                  <p className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                    50% OFF <span className="text-olive-700 font-bold text-xs">Checkup</span>
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
