import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open ? 'border-olive-700/60 bg-white shadow-sm' : 'border-slate-200/80 bg-white hover:border-slate-300'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-xs text-olive-800 bg-olive-100/70 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0">
            {index + 1}
          </span>
          <span className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
            {faq.question}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180 text-olive-700' : ''
          }`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
          <p>{faq.answer}</p>
        </div>
      )}
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
        { y: 35, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
      gsap.fromTo(Array.from(listRef.current.children),
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.5,
          scrollTrigger: { trigger: listRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-20 lg:py-28 bg-white border-t border-slate-200/80 scroll-mt-28">
      <div className="container-custom max-w-3xl">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle size={13} />
            <span>Patient Inquiries & Answers</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about our painless procedures, Monday 50% discount, and treatment appointments.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div ref={listRef} className="space-y-3.5">
          {clinicData.faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom Direct Query CTA */}
        <div className="mt-12 text-center bg-[#F8F6F0] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
          <p className="font-display font-bold text-slate-900 text-base mb-1">Have a specific question about your teeth?</p>
          <p className="text-slate-600 text-xs sm:text-sm mb-5 max-w-md mx-auto">
            Send our clinical team a message directly on WhatsApp. We answer with personalized treatment guidance.
          </p>
          <a
            href={`https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Olive%20Dental%20Care!%20I%20have%20a%20question.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md hover:-translate-y-0.5"
          >
            <MessageCircle size={16} /> Chat on WhatsApp Directly
          </a>
        </div>

      </div>
    </section>
  );
}
