import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, MessageCircle, Share2, Globe, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Footer({ onBookClick }) {
  const services = clinicData.services.map(s => s.title);

  return (
    <footer className="bg-[#0E1B0D] text-slate-300 border-t border-slate-800">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Column 1: Brand & Clinical Accreditation (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-olive-700 rounded-xl flex items-center justify-center text-white text-xl">
                🦷
              </div>
              <div>
                <p className="font-display font-extrabold text-white text-lg tracking-tight">
                  OLIVE <span className="text-olive-400">DENTAL</span>
                </p>
                <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">
                  Pudupet · Egmore · Chennai
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Your Smile, Our Passion. Dedicated multi-specialty dental surgery in Pudupet, Egmore, Chennai. Providing gentle, painless dental treatments for individuals and families in a clean, hospital-sterile setting.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex text-amber-400 text-xs">★★★★★</div>
              <span className="text-slate-400 text-xs">
                {clinicData.ratings.score}/5.0 ({clinicData.ratings.totalReviews}+ Google reviews)
              </span>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={clinicData.googleProfile}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-olive-700 text-white flex items-center justify-center transition-colors"
                title="Google Business Profile"
              >
                <Globe size={15} />
              </a>
              <a
                href={`https://wa.me/${clinicData.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center transition-colors"
                title="WhatsApp Direct Consultation"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href={`tel:${clinicData.contact.phone1}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-olive-700 text-white flex items-center justify-center transition-colors"
                title="Direct Telephone Helpline"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Flagship Treatments (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Specialized Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-olive-500 font-bold">›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Special Offers (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Weekly Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-white font-semibold">Mon – Sat Morning</p>
                <p className="text-slate-400 mt-0.5">10:00 AM – 1:00 PM</p>
              </div>
              <div>
                <p className="text-white font-semibold">Mon – Sat Evening</p>
                <p className="text-slate-400 mt-0.5">5:30 PM – 9:00 PM</p>
              </div>
              <div>
                <p className="text-white font-semibold">Sunday</p>
                <p className="text-amber-400 mt-0.5">By Prior Appointment</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-amber-300">
                🏷️ Mon 50% OFF Checkup
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Direct Booking (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Clinic Location
            </h4>
            <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
              <p className="text-white font-semibold">Olive Dental Care</p>
              <p>{clinicData.contact.address}</p>
              <p className="text-olive-400 font-medium">📍 {clinicData.contact.landmark}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full btn-primary text-xs uppercase tracking-wider font-bold py-3 justify-center"
              >
                Book Dental Appointment
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          {/* Left: Copyright + Developer credit */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left flex-wrap">
            <p>© {new Date().getFullYear()} Olive Dental Care, Pudupet, Chennai. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">·</span>
            <a
              href={clinicData.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="hover:text-olive-400 flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              <ExternalLink size={11} /> Google Profile
            </a>
            <span className="hidden sm:inline text-slate-700">·</span>
            <a
              href="https://www.iniyan-s.me/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-olive-400 transition-colors whitespace-nowrap font-medium"
            >
              Developed by <span className="text-olive-400 hover:underline">Freelancer — Iniyan S</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
