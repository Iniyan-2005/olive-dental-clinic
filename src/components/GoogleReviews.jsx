import React, { useEffect, useRef } from 'react';
import { Star, ExternalLink, ThumbsUp } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={15} className={i <= rating ? 'star-filled' : 'text-slate-200 fill-slate-200'} />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const avatarColors = [
    'bg-olive-500', 'bg-blue-500', 'bg-purple-500',
    'bg-pink-500', 'bg-teal-500', 'bg-orange-500'
  ];
  const color = avatarColors[index % avatarColors.length];

  return (
    <div className={`card p-6 flex flex-col gap-4 border-2 ${review.highlight ? 'border-olive-300 bg-olive-50' : 'border-transparent'}`}>
      {/* Top row */}
      <div className="flex items-start gap-3">
        <div className={`w-11 h-11 ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-lg">{review.name[0]}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-slate-800 text-sm">{review.name}</p>
            {review.verified && (
              <span className="badge bg-green-100 text-green-700 text-xs px-2 py-0.5">✓ Google Verified</span>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{review.date}</p>
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">"{review.text}"</p>

      {/* Like button */}
      <div className="flex items-center gap-1 text-xs text-slate-400">
        <ThumbsUp size={12} />
        <span>Helpful</span>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const ratingBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
      gsap.fromTo(ratingBoxRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: ratingBoxRef.current, start: 'top 85%' }
        }
      );
      gsap.fromTo(Array.from(cardsRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.6,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="section-pad bg-white">
      <div className="container-custom">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <span className="badge bg-yellow-100 text-yellow-700 text-sm mb-3">⭐ Patient Reviews</span>
          <h2 className="section-title text-3xl md:text-4xl">What Our Patients Say</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base">
            Real reviews from real patients. See why hundreds of families trust Olive Dental Care.
          </p>
        </div>

        {/* Rating Summary */}
        <div ref={ratingBoxRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 bg-gradient-to-r from-olive-50 to-mint-50 rounded-3xl p-8 border border-olive-100 max-w-xl mx-auto">
          <div className="text-center">
            <p className="font-display font-bold text-7xl text-olive-600">{clinicData.ratings.score}</p>
            <div className="flex gap-1 justify-center mt-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={22} className="star-filled" />)}
            </div>
            <p className="text-sm text-slate-500 mt-1">out of 5.0</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-slate-800 text-lg">{clinicData.ratings.totalReviews}+ Reviews</p>
            <p className="text-sm text-slate-500">on Google Maps</p>
            <a
              href={clinicData.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 bg-olive-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-olive-700 transition-colors"
            >
              <ExternalLink size={14} /> Read all Google Reviews
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <a
            href={clinicData.googleProfile}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <ExternalLink size={16} /> View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
