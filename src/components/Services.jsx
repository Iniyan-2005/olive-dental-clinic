import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceIcon = ({ id }) => {
  const icons = {
    orthodontics: '🦷',
    implants: '🔩',
    rct: '⚡',
    periodontics: '🌿',
    pedodontics: '👶',
    prosthodontics: '👑',
    cosmetic: '✨',
    laser: '🔬',
    maxillofacial: '🏥',
  };
  return <span className="text-3xl">{icons[id] || '🦷'}</span>;
};

export default function Services({ onSelectService }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo(Array.from(cardsRef.current.children),
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-pad bg-dental-soft">
      <div className="container-custom">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span className="badge bg-olive-100 text-olive-700 text-sm mb-3">Our Specializations</span>
          <h2 className="section-title text-3xl md:text-4xl">Comprehensive Dental Treatments</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-base">
            From Invisalign & Implants to Root Canal & Laser Dentistry — complete care for your entire family under one roof.
          </p>
        </div>

        {/* Offers strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {clinicData.offers.map((offer) => (
            <div key={offer.label} className="bg-gradient-to-r from-olive-600 to-olive-500 text-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-md">
              <div className="text-3xl">{offer.icon === 'tag' ? '🏷️' : offer.icon === 'sparkles' ? '✨' : '😁'}</div>
              <div>
                <p className="font-display font-bold text-xl">{offer.discount}</p>
                <p className="text-sm text-olive-100 font-medium">{offer.label}</p>
                <p className="text-xs text-olive-200">{offer.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.services.map((service) => (
            <div
              key={service.id}
              className={`card p-6 border-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                activeCard === service.id
                  ? 'border-olive-400 shadow-xl bg-olive-50'
                  : 'border-transparent hover:border-olive-200'
              }`}
              onClick={() => setActiveCard(activeCard === service.id ? null : service.id)}
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-olive-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-olive-100">
                  <ServiceIcon id={service.id} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`badge text-xs px-2 py-0.5 ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-base leading-snug">{service.title}</h3>
                  <p className="text-xs text-olive-600 font-medium mt-0.5">{service.titleTamil}</p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                <Clock size={12} className="text-olive-500" />
                <span>{service.duration}</span>
              </div>

              {/* Highlight */}
              <p className="text-sm font-semibold text-olive-700 mb-2">✦ {service.highlight}</p>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Benefits (visible when expanded) */}
              {activeCard === service.id && (
                <div className="space-y-1.5 mb-4 animate-fade-in-up">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle size={14} className="text-olive-500 mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <button
                onClick={(e) => { e.stopPropagation(); onSelectService(service.title); }}
                className="w-full mt-2 btn-outline text-sm py-2 justify-center"
              >
                Book This Treatment <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
