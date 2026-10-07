import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: 'all', label: 'All Specializations' },
  { id: 'flagship', label: 'Invisalign & Implants' },
  { id: 'endodontics', label: 'Root Canal & Surgery' },
  { id: 'cosmetic', label: 'Cosmetic & Laser' },
  { id: 'pediatric', label: 'Kids & Family' }
];

export default function Services({ onSelectService }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const filteredServices = clinicData.services.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'flagship') return ['orthodontics', 'implants'].includes(s.id);
    if (activeCategory === 'endodontics') return ['rct', 'maxillofacial'].includes(s.id);
    if (activeCategory === 'cosmetic') return ['cosmetic', 'laser', 'prosthodontics', 'periodontics'].includes(s.id);
    if (activeCategory === 'pediatric') return ['pedodontics'].includes(s.id);
    return true;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-slate-200/80">
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Specialized Clinical Care</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Comprehensive Dental Treatments, <br />
            <span className="text-olive-700">Rooted in Precision.</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Every procedure at Olive Dental Care is performed under strict autoclaved sterilization using digital intraoral diagnostics and computerized painless protocols.
          </p>
        </div>

        {/* Distinctive Pricing & Special Offer Strip (Hairline Grid, No Generic Gradients) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">

            {/* Offer 1 */}
            <div className="p-6 flex items-start gap-4 hover:bg-olive-50/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg flex-shrink-0">
                🏷️
              </div>
              <div>
                <span className="text-[11px] font-bold text-olive-800 tracking-wider uppercase">Every Monday</span>
                <p className="font-display font-extrabold text-slate-900 text-xl mt-0.5">50% OFF Check-Up</p>
                <p className="text-xs text-slate-500 mt-1">Full oral diagnostic examination with low-dose digital review.</p>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="p-6 flex items-start gap-4 hover:bg-olive-50/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg flex-shrink-0">
                ✨
              </div>
              <div>
                <span className="text-[11px] font-bold text-olive-800 tracking-wider uppercase">Hygiene & Polishing</span>
                <p className="font-display font-extrabold text-slate-900 text-xl mt-0.5">Starting at ₹700/-</p>
                <p className="text-xs text-slate-500 mt-1">Ultrasonic scaling & enamel-safe polishing for stain-free confidence.</p>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="p-6 flex items-start gap-4 hover:bg-olive-50/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg flex-shrink-0">
                🦷
              </div>
              <div>
                <span className="text-[11px] font-bold text-olive-800 tracking-wider uppercase">Invisalign & Braces</span>
                <p className="font-display font-extrabold text-slate-900 text-xl mt-0.5">From ₹2,000 / month</p>
                <p className="text-xs text-slate-500 mt-1">Custom clear aligners & ceramic braces with zero-interest EMI options.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Distinctive Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Distinctive Services Matrix (Architectural Cards with Tamil Labels & Clear Value) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between ${
                expandedCard === service.id
                  ? 'border-olive-600 shadow-xl ring-2 ring-olive-100'
                  : 'border-slate-200/90 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Header Row: Title + Tamil Subtext */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-olive-700 mt-0.5 tracking-wide">
                      {service.titleTamil}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 flex-shrink-0">
                    {service.badge}
                  </span>
                </div>

                {/* Highlight callout with subtle left border */}
                <div className="bg-[#F8F6F0] border-l-2 border-olive-700 px-3 py-2 rounded-r-lg mb-3">
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    ✦ {service.highlight}
                  </p>
                </div>

                {/* Duration indicator */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-3">
                  <Clock size={13} className="text-slate-400" />
                  <span>{service.duration}</span>
                </div>

                {/* Clinical description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-5 pt-3 border-t border-slate-100">
                  {service.benefits.slice(0, expandedCard === service.id ? service.benefits.length : 2).map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={13} className="text-olive-700 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                  {service.benefits.length > 2 && (
                    <button
                      onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
                      className="text-xs font-bold text-olive-800 hover:underline pt-1 inline-flex items-center gap-1"
                    >
                      {expandedCard === service.id ? 'Show less' : `+${service.benefits.length - 2} more details`}
                    </button>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:border-olive-700 bg-white hover:bg-olive-700 hover:text-white text-slate-800 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
              >
                <span>Book This Treatment</span>
                <ChevronRight size={15} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
