import React, { useEffect, useRef } from 'react';
import { Star, ExternalLink, CheckCircle2, Quote } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GoogleReviews() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
      gsap.fromTo(Array.from(gridRef.current.children),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.6,
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-slate-200/80">
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Trusted by Hundreds of <br />
            <span className="text-olive-700">Families Across Chennai.</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Read authentic reviews from patients who experienced our gentle techniques, painless restorations, and hospitable clinic care.
          </p>
        </div>

        {/* Google Reputation Summary Banner (Clean Architectural Ledger, No Muddy Gradients) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#F8F6F0] border border-slate-200 flex items-center justify-center font-display font-extrabold text-3xl text-olive-800 flex-shrink-0">
              {clinicData.ratings.score}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="star-filled" />
                  ))}
                </div>
                <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                  ✓ 100% Google Verified
                </span>
              </div>
              <p className="font-display font-bold text-slate-900 text-base mt-1">
                Based on {clinicData.ratings.totalReviews}+ Patient Reviews on Google Maps
              </p>
              <p className="text-xs text-slate-500">
                Top rated dental clinic in Pudupet & Egmore for Invisalign, RCT, and Implants
              </p>
            </div>
          </div>

          <a
            href={clinicData.googleProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 hover:text-white text-slate-800 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm"
          >
            <span>View All Google Reviews</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Verified Patient Reviews Grid (Cohesive Restrained Aesthetics) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.reviews.map((review) => (
            <div
              key={review.name}
              className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                review.highlight
                  ? 'border-olive-700/60 shadow-md ring-1 ring-olive-100'
                  : 'border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                {/* Header: Patient Info + Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-display font-bold text-slate-900 text-sm leading-tight">
                        {review.name}
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 size={10} /> Verified
                  </span>
                </div>

                {/* Star rating */}
                <div className="flex text-amber-400 gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="star-filled" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Treatment Verification Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Google Maps Review</span>
                <span className="text-olive-700 font-semibold">Recommended ★★★★★</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
