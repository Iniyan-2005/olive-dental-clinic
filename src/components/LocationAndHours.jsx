import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LocationAndHours() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="location" ref={sectionRef} className="section-pad bg-dental-soft">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge bg-olive-100 text-olive-700 text-sm mb-3">📍 Find Us</span>
          <h2 className="section-title text-3xl md:text-4xl">Location & Clinic Hours</h2>
          <p className="text-slate-500 mt-3 text-base">Conveniently located at Pudupet, Egmore, Chennai</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Map + Address */}
          <div ref={leftRef} className="space-y-6">
            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-olive-100">
              <iframe
                title="Olive Dental Care Location"
                src="https://maps.google.com/maps?q=OLIVE+DENTAL+CARE,+36%2F58+Eagappan+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002,+India&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address card */}
            <div className="card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-olive-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Olive Dental Care</p>
                  <p className="text-slate-500 text-sm mt-0.5">{clinicData.contact.address}</p>
                  <p className="text-xs text-olive-600 font-medium mt-1">{clinicData.contact.landmark}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={clinicData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-primary text-sm py-2.5 justify-center"
                >
                  <Navigation size={15} /> Get Directions
                </a>
                <a
                  href={clinicData.googleProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-outline text-sm py-2.5 justify-center"
                >
                  <ExternalLink size={15} /> Google Profile
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div ref={rightRef} className="space-y-6">
            {/* Clinic Hours */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-olive-100 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-olive-600" />
                </div>
                <h3 className="font-display font-bold text-slate-800">Clinic Hours</h3>
              </div>

              <div className="space-y-3">
                {clinicData.timings.schedule.map((item) => (
                  <div key={item.days} className="flex items-start justify-between py-3 border-b border-slate-50 last:border-0">
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">{item.days}</p>
                      <span className={`badge text-xs mt-1 ${
                        item.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600 font-medium">{item.morning}</p>
                      {item.evening !== item.morning && (
                        <p className="text-sm text-slate-600 font-medium">{item.evening}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Monday offer strip */}
              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-center">
                <p className="text-yellow-800 font-semibold text-sm">🏷️ {clinicData.timings.mondayOffer}</p>
              </div>
            </div>

            {/* Contact Numbers */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-olive-100 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-olive-600" />
                </div>
                <h3 className="font-display font-bold text-slate-800">Call Us</h3>
              </div>
              <div className="space-y-3">
                <a href={`tel:${clinicData.contact.phone1}`}
                  className="flex items-center justify-between bg-olive-50 rounded-xl px-4 py-3 hover:bg-olive-100 transition-colors group">
                  <div>
                    <p className="text-xs text-slate-500">Primary & WhatsApp</p>
                    <p className="font-bold text-olive-700 text-base">{clinicData.contact.displayPhone1}</p>
                  </div>
                  <Phone size={18} className="text-olive-500 group-hover:text-olive-700" />
                </a>
                <a href={`tel:${clinicData.contact.phone2}`}
                  className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3 hover:bg-slate-100 transition-colors group">
                  <div>
                    <p className="text-xs text-slate-500">Alternate Number</p>
                    <p className="font-bold text-slate-700 text-base">{clinicData.contact.displayPhone2}</p>
                  </div>
                  <Phone size={18} className="text-slate-400 group-hover:text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
