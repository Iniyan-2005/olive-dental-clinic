import React, { useEffect, useRef } from 'react';
import { ShieldCheck, HeartPulse, Cpu, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clinicalStandards = [
  {
    title: 'Hospital-Grade Sterilization',
    description: 'Strict multi-tier autoclaving and individually sealed sterile instrument packs for zero cross-contamination.',
    icon: ShieldCheck,
    tag: '100% Sterile'
  },
  {
    title: 'Painless Local Anesthesia',
    description: 'Computer-assisted gentle rotary endodontics and computerized numbing for completely stress-free procedures.',
    icon: HeartPulse,
    tag: 'Painless Protocol'
  },
  {
    title: 'Low-Dose Digital Imaging',
    description: 'Modern intraoral sensors with minimal radiation, providing immediate high-resolution diagnostic clarity.',
    icon: Cpu,
    tag: 'Digital Suite'
  },
  {
    title: 'Ethical & Transparent Estimates',
    description: 'Itemized treatment roadmaps provided upfront with clear pricing and zero unnecessary interventions.',
    icon: Sparkles,
    tag: 'Clear Pricing'
  }
];

export default function AboutClinic({ onBookClick }) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const matrixRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo(imageRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container-custom">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Clinic Identity & Clinical Standards</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Advanced Dentistry Built on <br />
            <span className="text-olive-700">Compassion & Transparency.</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Conveniently located at 36/58, Eagappan St, Pudupet (Egmore), Olive Dental Care is designed to bring world-class oral healthcare to Chennai families with genuine care and ethical practice.
          </p>
        </div>

        {/* 2-Column Split: Clinic Philosophy & Real Exterior Signage */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

          {/* Left Text Narrative */}
          <div ref={textRef} className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-olive-700 pl-5 py-1">
              <p className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                "Your Smile, Our Passion."
              </p>
              <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Official Motto of Olive Dental Care · Pudupet, Chennai
              </p>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              We understand that visiting the dentist has historically caused hesitation or anxiety. At Olive Dental Care, we completely eliminate fear through gentle chairside manners, modern painless anesthesia techniques, and transparent explanations before any procedure begins.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our clinic brings eight specialized disciplines together under one roof — ranging from <strong>Invisalign & Orthodontics</strong> to <strong>Titanium Dental Implants</strong>, <strong>Single-Visit Rotary Root Canals</strong>, and <strong>Pediatric Child Dental Care</strong>.
            </p>

            {/* Department Directory Pills with English + Tamil Context */}
            <div className="pt-2">
              <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                In-House Specialized Disciplines:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { en: 'Orthodontics', ta: 'பல் சீரமைத்தல்' },
                  { en: 'Implantology', ta: 'பல் மாற்று அறுவை' },
                  { en: 'Endodontics (RCT)', ta: 'வேர் சிகிச்சை' },
                  { en: 'Pedodontics', ta: 'குழந்தைகள் பிரிவு' },
                  { en: 'Periodontics', ta: 'ஈறு நோய்கள்' },
                  { en: 'Prosthodontics', ta: 'செயற்கை பல்' },
                  { en: 'Oral Surgery', ta: 'தாடை அறுவை' },
                  { en: 'Laser Care', ta: 'லேசர் மருத்துவம்' }
                ].map((spec) => (
                  <div key={spec.en} className="p-2.5 rounded-xl bg-[#F8F6F0] border border-slate-200/80">
                    <p className="text-xs font-bold text-slate-800 leading-tight">{spec.en}</p>
                    <p className="text-[10px] text-olive-700 font-medium mt-0.5">{spec.ta}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <button onClick={onBookClick} className="btn-primary text-sm font-semibold">
                Schedule a Consultation
              </button>
            </div>
          </div>

          {/* Right Image: Clinic Signboard / Operatory Display */}
          <div ref={imageRef} className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="/clinic-front.jpg"
                alt="Olive Dental Care - Reception and Department Signage"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden w-full h-80 sm:h-96 lg:h-[460px] bg-olive-800 flex-col items-center justify-center text-white text-center p-8">
                <span className="text-6xl mb-3">🌿</span>
                <p className="font-display font-bold text-2xl">Olive Dental Care</p>
                <p className="text-olive-200 text-sm mt-1">Eagappan St, Pudupet, Egmore</p>
              </div>

              {/* In-frame badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md rounded-2xl p-3.5 text-white border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-olive-300 uppercase tracking-wider">Clinical Facility</p>
                  <p className="font-display font-bold text-sm">Pudupet, Egmore, Chennai</p>
                </div>
                <span className="text-xs font-bold bg-olive-700 px-3 py-1 rounded-lg">Verified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Distinctive 4-Quadrant Clinical Standards Matrix (Replacing Generic Individual Cards) */}
        <div ref={matrixRef} className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {clinicalStandards.map((std) => {
              const Icon = std.icon;
              return (
                <div key={std.title} className="p-7 space-y-3 hover:bg-[#FBF9F5] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-olive-100/70 text-olive-800 flex items-center justify-center">
                      <Icon size={20} className="text-olive-700" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {std.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                    {std.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
