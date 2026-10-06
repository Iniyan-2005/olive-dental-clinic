import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FaqItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      if (isOpen) {
        gsap.fromTo(bodyRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' }
        );
      } else {
        gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
      }
    }
  }, [isOpen]);

  return (
    <div className={`border-2 rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-olive-300' : 'border-slate-100 hover:border-olive-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-6 py-5 flex items-start justify-between gap-4 ${isOpen ? 'bg-olive-50' : 'bg-white hover:bg-slate-50'} transition-colors`}
      >
        <div className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-olive-100 text-olive-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-semibold text-slate-800 text-sm leading-relaxed">{faq.q}</span>
        </div>
        <div className="flex-shrink-0 mt-0.5">
          {isOpen ? (
            <ChevronUp size={18} className="text-olive-600" />
          ) : (
            <ChevronDown size={18} className="text-slate-400" />
          )}
        </div>
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <div className="px-6 pb-5 pt-2 bg-olive-50">
          <p className="text-slate-600 text-sm leading-relaxed pl-10">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(Array.from(listRef.current.children),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5,
          scrollTrigger: { trigger: listRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-white">
      <div className="container-custom max-w-3xl">
        <div ref={headerRef} className="text-center mb-12">
          <span className="badge bg-olive-100 text-olive-700 text-sm mb-3">Got Questions?</span>
          <h2 className="section-title text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">
            Common questions about our treatments, timings, and special offers answered below.
          </p>
        </div>

        <div ref={listRef} className="space-y-3">
          {clinicData.faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-olive-50 rounded-2xl p-8 border border-olive-100">
          <p className="text-slate-700 font-semibold mb-1">Still have questions?</p>
          <p className="text-slate-500 text-sm mb-5">Chat with us directly on WhatsApp or call us — we're happy to help!</p>
          <a
            href={`https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care!%20I%20have%20a%20question.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:-translate-y-0.5"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
