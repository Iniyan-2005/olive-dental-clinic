import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, MessageCircle, Share2, Globe } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Footer({ onBookClick }) {
  const services = clinicData.services.map(s => s.title);

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🦷</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg leading-none">OLIVE</p>
                <p className="text-olive-400 text-xs font-semibold tracking-widest uppercase">Dental Care</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your Smile, Our Passion. Best dental clinic in Pudupet, Egmore, Chennai — offering comprehensive, painless, and affordable dental care for the whole family.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-0.5">
                {'★★★★★'.split('').map((s, i) => <span key={i} className="text-yellow-400 text-sm">{s}</span>)}
              </div>
              <span className="text-slate-400 text-xs">{clinicData.ratings.score}/5.0 ({clinicData.ratings.totalReviews}+ reviews)</span>
            </div>
            {/* Social links */}
            <div className="flex gap-2 pt-1">
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-olive-600 rounded-full flex items-center justify-center transition-colors">
                <Globe size={15} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-olive-600 rounded-full flex items-center justify-center transition-colors">
                <Share2 size={15} className="text-white" />
              </a>
              <a
                href={`https://wa.me/${clinicData.contact.whatsappNumber}`}
                target="_blank" rel="noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle size={15} className="text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wide">Our Treatments</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-olive-400 text-sm transition-colors flex items-center gap-1.5">
                    <span className="text-olive-500 text-xs">›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wide">Clinic Hours</h4>
            <div className="space-y-3">
              {clinicData.timings.schedule.map(item => (
                <div key={item.days} className="border-b border-slate-800 pb-3 last:border-0">
                  <p className="text-white font-semibold text-xs">{item.days}</p>
                  <p className="text-slate-400 text-xs mt-1">☀️ {item.morning}</p>
                  {item.evening !== item.morning && <p className="text-slate-400 text-xs">🌙 {item.evening}</p>}
                  <span className={`badge text-xs mt-1 ${item.status === 'Open' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-yellow-900/30 rounded-xl p-3 border border-yellow-800/40">
              <p className="text-yellow-400 text-xs font-semibold">🏷️ {clinicData.timings.mondayOffer}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wide">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-olive-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm">{clinicData.contact.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-olive-400 flex-shrink-0" />
                <div>
                  <a href={`tel:${clinicData.contact.phone1}`} className="text-slate-300 hover:text-olive-400 text-sm font-medium transition-colors block">
                    {clinicData.contact.displayPhone1}
                  </a>
                  <a href={`tel:${clinicData.contact.phone2}`} className="text-slate-400 hover:text-olive-400 text-xs transition-colors block">
                    {clinicData.contact.displayPhone2}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-olive-400 flex-shrink-0" />
                <p className="text-slate-400 text-sm">Mon–Sat: 10 AM–1 PM & 5:30–9 PM</p>
              </div>
              <a href={clinicData.contact.googleMapsUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-olive-400 hover:text-olive-300 text-sm transition-colors">
                <ExternalLink size={14} /> Open in Google Maps
              </a>
            </div>

            <button onClick={onBookClick} className="btn-primary text-sm py-2.5 mt-6 w-full justify-center">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          {/* All items grouped left near copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left flex-wrap">
            <p>© {new Date().getFullYear()} Olive Dental Care, Pudupet, Chennai. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">·</span>
            <a href={clinicData.googleProfile} target="_blank" rel="noreferrer" className="hover:text-olive-400 flex items-center gap-1 transition-colors whitespace-nowrap">
              <ExternalLink size={11} /> Google Profile
            </a>
            <span className="hidden sm:inline text-slate-700">·</span>
            <a
              href="https://www.iniyan-s.me/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-olive-400 transition-colors whitespace-nowrap"
            >
              Developed by <span className="text-olive-500">Freelancer — Iniyan S</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
