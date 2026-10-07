import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation, AlertCircle, ShieldAlert } from 'lucide-react';
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
        { x: -35, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
      gsap.fromTo(rightRef.current,
        { x: 35, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-slate-200/80 scroll-mt-28">
      <div className="container-custom">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Find Us & Operational Timings</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Central Location in Pudupet, <br />
            <span className="text-olive-700">Convenient Hours for All.</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Easily accessible from Egmore Railway Station, Komaleeswaranpet, and Chennai Central, offering morning and evening sessions to suit your schedule.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* LEFT: Map + Precise Location Navigation (6 Cols) */}
          <div ref={leftRef} className="lg:col-span-6 space-y-5">
            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-white">
              <iframe
                title="Olive Dental Care Official Location"
                src="https://maps.google.com/maps?q=OLIVE+DENTAL+CARE,+36%2F58+Eagappan+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002,+India&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0 text-olive-800 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-base">Olive Dental Care</p>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    {clinicData.contact.address}
                  </p>
                  <p className="text-xs text-olive-800 font-semibold mt-1.5 flex items-center gap-1">
                    <span>📍 Landmark:</span> {clinicData.contact.landmark}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={clinicData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-primary text-xs uppercase tracking-wider font-bold py-3 justify-center"
                >
                  <Navigation size={14} /> Get Directions
                </a>
                <a
                  href={clinicData.googleProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-outline text-xs uppercase tracking-wider font-bold py-3 justify-center"
                >
                  <ExternalLink size={14} /> Google Profile
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Operational Hours & Emergency Desk (6 Cols) */}
          <div ref={rightRef} className="lg:col-span-6 space-y-5">

            {/* Clinic Operational Hours Schedule */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-olive-100 rounded-xl flex items-center justify-center text-olive-800">
                    <Clock size={19} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base">Weekly Schedule</h3>
                    <p className="text-xs text-slate-500">Dual daily shifts for working individuals</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  ● Open Today
                </span>
              </div>

              <div className="space-y-3">
                {clinicData.timings.schedule.map((item) => (
                  <div key={item.days} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{item.days}</p>
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mt-0.5 ${
                        item.status === 'Open' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">{item.morning}</p>
                      {item.evening !== item.morning && (
                        <p className="text-xs text-slate-500 mt-0.5">{item.evening}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Monday 50% Special Callout */}
              <div className="mt-4 bg-[#F8F6F0] border-l-3 border-amber-500 rounded-r-xl p-3.5 flex items-center gap-3">
                <span className="text-lg">🏷️</span>
                <p className="text-xs text-slate-800 font-semibold">
                  Every Monday: <span className="text-olive-800 font-bold">50% OFF Checkup</span> on all morning & evening consultations!
                </p>
              </div>
            </div>

            {/* Acute Emergency Hotline (Problem 9 Resolution) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-slate-900 text-sm">Emergency Dental Relief Priority</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Severe toothache, broken restoration, or sudden trauma? We attend acute emergency cases with immediate clinical priority.
                  </p>
                  <div className="flex items-center gap-3 pt-3">
                    <a
                      href={`tel:${clinicData.contact.phone1}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-900 hover:bg-black px-4 py-2.5 rounded-xl transition-colors"
                    >
                      <Phone size={13} />
                      Call Emergency Desk: {clinicData.contact.displayPhone1}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
