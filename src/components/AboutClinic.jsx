import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award, Heart, Zap } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'shield-check': CheckCircle,
  'heart': Heart,
  'cpu': Zap,
  'badge-check': Award,
};

export default function AboutClinic({ onBookClick }) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo(imageRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo(featuresRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: featuresRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-pad bg-white">
      <div className="container-custom">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="badge bg-olive-100 text-olive-700 text-sm mb-3">Why Choose Us</span>
          <h2 className="section-title text-3xl md:text-4xl">About Olive Dental Care</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base">
            A trusted dental clinic in Pudupet, Egmore — combining modern technology with compassionate patient care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text Side */}
          <div ref={textRef} className="space-y-6">
            <div className="inline-block bg-olive-50 border-l-4 border-olive-500 rounded-r-xl px-5 py-4">
              <p className="text-olive-800 font-semibold text-lg italic">
                "Your Smile, Our Passion"
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              At <strong className="text-olive-700">Olive Dental Care</strong>, we combine cutting-edge dental technology with
              a warm, patient-first approach. Located in the heart of <strong>Pudupet, Egmore, Chennai</strong>, we provide
              comprehensive dental care for the entire family — from toddlers to seniors.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Our specializations include <strong>Invisalign & Braces, Dental Implants, Painless Root Canal (RCT),
              Laser Dentistry, Periodontics, Cosmetic Dentistry</strong>, and Pediatric Dentistry — all under one roof
              in a sterile, modern clinical environment.
            </p>

            {/* Specializations pill list */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Orthodontics', 'Periodontics', 'Pedodontics', 'Prosthodontics', 'Endodontics (RCT)', 'Maxillofacial Surgery', 'Implantology', 'Laser Dentistry'].map(s => (
                <span key={s} className="bg-olive-50 border border-olive-200 text-olive-700 rounded-full px-3 py-1 text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>

            <button onClick={onBookClick} className="btn-primary mt-2">
              Book a Consultation
            </button>
          </div>

          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/clinic-front.jpg"
                alt="Olive Dental Care - Clinic Front"
                className="w-full h-72 md:h-96 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden w-full h-72 md:h-96 bg-gradient-to-br from-olive-50 to-mint-50 flex-col items-center justify-center border-2 border-olive-100 rounded-3xl">
                <div className="text-center p-6">
                  <div className="w-24 h-24 bg-olive-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🦷</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-olive-800 mb-1">OLIVE</h3>
                  <p className="text-olive-600 font-semibold mb-3">DENTAL CARE</p>
                  <p className="text-slate-500 text-sm">Pudupet, Egmore, Chennai</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="bg-olive-100 text-olive-700 text-xs rounded-full px-2 py-1">✅ Sterile Environment</span>
                    <span className="bg-olive-100 text-olive-700 text-xs rounded-full px-2 py-1">🦷 Modern Equipment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-olive-100">
              <p className="text-xs text-slate-500 font-medium">Specialized In</p>
              <p className="font-display font-bold text-olive-700 text-sm">9+ Dental Treatments</p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {clinicData.features.map((feature) => {
            const Icon = iconMap[feature.icon] || CheckCircle;
            return (
              <div key={feature.title} className="card p-6 hover:-translate-y-1 transition-transform border border-olive-50 text-center">
                <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-olive-600" />
                </div>
                <h3 className="font-display font-bold text-slate-800 text-base mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
