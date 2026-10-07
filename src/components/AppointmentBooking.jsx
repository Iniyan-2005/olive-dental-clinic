import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, User, Phone, ChevronRight, CheckCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

const timeSlots = {
  morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],
  evening: ['05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'],
};

const services = clinicData.services.map(s => s.title);

export default function AppointmentBooking({ isModal = false, onClose, preselectedService = '' }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: preselectedService || '',
    date: '',
    session: 'morning',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isModal && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25 }
      );
      gsap.fromTo(contentRef.current,
        { y: 50, scale: 0.96, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out', delay: 0.05 }
      );
    }
    if (preselectedService) setForm(f => ({ ...f, service: preselectedService }));
  }, [isModal, preselectedService]);

  const handleClose = () => {
    if (isModal && modalRef.current) {
      gsap.to(contentRef.current, { y: 25, opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: onClose });
    }
  };

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Olive Dental Care! 🦷\n\nI would like to book a dental appointment:\n\n` +
      `👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n🦷 Treatment: ${form.service}\n` +
      `📅 Date: ${form.date}\n⏰ Preferred Slot: ${form.time} (${form.session === 'morning' ? 'Morning 10AM–1PM' : 'Evening 5:30PM–9PM'})\n` +
      `💬 Note: ${form.message || 'None'}\n\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/${clinicData.contact.whatsappNumber}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const minDate = new Date().toISOString().split('T')[0];

  const formContent = submitted ? (
    <div className="text-center py-8 px-5 sm:px-6">
      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-700">
        <CheckCircle size={36} />
      </div>
      <h3 className="font-display font-bold text-xl text-slate-900 mb-1.5">
        Appointment Dispatch Ready!
      </h3>
      <p className="text-slate-600 text-xs sm:text-sm mb-5 max-w-sm mx-auto">
        Your booking details have been forwarded to our clinic WhatsApp desk. We will confirm your slot within minutes.
      </p>
      <div className="bg-[#F8F6F0] border border-slate-200/90 rounded-2xl p-4 text-left space-y-2 text-xs sm:text-sm text-slate-800 mb-6">
        <p className="flex justify-between border-b border-slate-200/60 pb-1.5">
          <span className="text-slate-500">Patient:</span>
          <span className="font-bold">{form.name}</span>
        </p>
        <p className="flex justify-between border-b border-slate-200/60 pb-1.5">
          <span className="text-slate-500">Treatment:</span>
          <span className="font-bold text-olive-800">{form.service}</span>
        </p>
        <p className="flex justify-between border-b border-slate-200/60 pb-1.5">
          <span className="text-slate-500">Date:</span>
          <span className="font-bold">{form.date}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-slate-500">Slot:</span>
          <span className="font-bold text-olive-800">{form.time} ({form.session})</span>
        </p>
      </div>
      <button
        onClick={() => {
          setSubmitted(false);
          setStep(1);
          setForm({ name: '', phone: '', service: '', date: '', session: 'morning', time: '', message: '' });
          if (isModal) handleClose();
        }}
        className="btn-primary text-xs uppercase tracking-wider font-bold py-3 px-6"
      >
        Book Another Appointment
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-6">
      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="font-display font-bold text-slate-900 text-base">Patient Details & Treatment</h3>
            <p className="text-xs text-slate-500">Fill in your basic information to begin</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                value={form.name}
                onChange={e => update('name', e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:border-olive-700 focus:ring-2 focus:ring-olive-100 outline-none text-sm text-slate-900 font-medium transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <div className="relative">
              <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => update('phone', e.target.value)}
                placeholder="+91 98400 00000"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:border-olive-700 focus:ring-2 focus:ring-olive-100 outline-none text-sm text-slate-900 font-medium transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select Dental Treatment *
            </label>
            <select
              required
              value={form.service}
              onChange={e => update('service', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-olive-700 focus:ring-2 focus:ring-olive-100 outline-none text-sm text-slate-900 font-medium bg-white transition-colors"
            >
              <option value="">-- Choose Specialization --</option>
              {services.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              if (form.name.trim() && form.phone.trim() && form.service) {
                setStep(2);
              }
            }}
            disabled={!form.name.trim() || !form.phone.trim() || !form.service}
            className="btn-primary w-full justify-center text-sm py-3.5 font-bold disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>Proceed to Date & Slot Selection</span>
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-slate-900 text-base">Select Date & Preferred Slot</h3>
              <p className="text-xs text-slate-500">Pick when you'd like to visit Olive Dental Care</p>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-bold text-olive-800 hover:underline"
            >
              Edit Details
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Appointment Date *
            </label>
            <div className="relative">
              <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="date"
                required
                min={minDate}
                value={form.date}
                onChange={e => update('date', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:border-olive-700 focus:ring-2 focus:ring-olive-100 outline-none text-sm text-slate-900 font-medium transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Session
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {['morning', 'evening'].map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { update('session', s); update('time', ''); }}
                  className={`py-2.5 px-3 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all ${
                    form.session === s
                      ? 'border-olive-700 bg-olive-50 text-olive-900'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                  }`}
                >
                  {s === 'morning' ? '☀️ Morning' : '🌙 Evening'}
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">
                    {s === 'morning' ? '10:00 AM – 1:00 PM' : '5:30 PM – 9:00 PM'}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Available Slots ({form.session === 'morning' ? 'Morning' : 'Evening'}) *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots[form.session].map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => update('time', t)}
                  className={`py-2 px-2 rounded-lg border text-xs font-bold transition-all ${
                    form.time === t
                      ? 'border-olive-800 bg-olive-800 text-white shadow-sm ring-1 ring-olive-400'
                      : 'border-slate-200 text-slate-700 hover:border-olive-700 bg-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Additional Notes (Optional)
            </label>
            <input
              type="text"
              value={form.message}
              onChange={e => update('message', e.target.value)}
              placeholder="e.g. Toothache on left side / checkup"
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:border-olive-700 focus:ring-2 focus:ring-olive-100 outline-none text-xs text-slate-900 font-medium transition-colors"
            />
          </div>

          <div className="flex gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-outline flex-1 justify-center py-3 text-xs sm:text-sm font-bold"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={!form.date || !form.time}
              className="btn-primary flex-1 justify-center py-3 text-xs sm:text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MessageCircle size={15} /> Confirm on WhatsApp
            </button>
          </div>
        </div>
      )}
    </form>
  );

  if (isModal) {
    return (
      <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
        <div ref={contentRef} className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[92vh] overflow-y-auto border border-slate-200">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 sticky top-0 bg-white rounded-t-3xl z-10">
            <div>
              <h2 className="font-display font-bold text-slate-900 text-base sm:text-lg">Book Dental Appointment</h2>
              <p className="text-[11px] text-slate-500 font-medium">Olive Dental Care · Fast WhatsApp Confirmation</p>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Close booking modal"
            >
              <X size={16} />
            </button>
          </div>

          {formContent}
        </div>
      </div>
    );
  }

  // Inline Section Version
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#1E3A1A] text-white scroll-mt-28">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
              <Calendar size={13} /> Direct Reservation Desk
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready for a Healthier, <br />
              <span className="text-olive-300">Pain-Free Smile?</span>
            </h2>

            <p className="text-olive-100 text-base leading-relaxed">
              Reserve your slot in less than 60 seconds. Our desk confirms availability via WhatsApp immediately with zero waiting queue at the clinic.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-olive-100">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Zero wait time — Scheduled appointment guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-olive-100">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Monday 50% OFF Comprehensive Check-Up automatically applied</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-olive-100">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Hospital-grade sterile operatories for every patient</span>
              </div>
            </div>

            {/* Quick Call Row */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <a
                href={`tel:${clinicData.contact.phone1}`}
                className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-3.5 text-center transition-colors group"
              >
                <p className="text-[11px] text-olive-300 uppercase tracking-wider font-semibold">Primary Helpline</p>
                <p className="font-display font-bold text-sm sm:text-base text-white mt-0.5">{clinicData.contact.displayPhone1}</p>
              </a>
              <a
                href={`tel:${clinicData.contact.phone2}`}
                className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-3.5 text-center transition-colors group"
              >
                <p className="text-[11px] text-olive-300 uppercase tracking-wider font-semibold">Alternate Line</p>
                <p className="font-display font-bold text-sm sm:text-base text-white mt-0.5">{clinicData.contact.displayPhone2}</p>
              </a>
            </div>
          </div>

          {/* Right White Card Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-[#F8F6F0] px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                  Online Slot Reservation
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">Instant WhatsApp Dispatch Confirmation</p>
              </div>
              <div className="flex gap-1.5">
                {[1, 2].map(s => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all ${
                      s <= step ? 'w-6 bg-olive-700' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {formContent}
          </div>

        </div>
      </div>
    </section>
  );
}
