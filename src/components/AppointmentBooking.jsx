import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, User, Phone, ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';
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
        { y: 60, scale: 0.96, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    }
    if (preselectedService) setForm(f => ({ ...f, service: preselectedService }));
  }, [isModal, preselectedService]);

  const handleClose = () => {
    if (isModal && modalRef.current) {
      gsap.to(contentRef.current, { y: 30, opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: onClose });
    }
  };

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Olive Dental Care! 🦷\n\nI'd like to book an appointment:\n\n` +
      `👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n🦷 Service: ${form.service}\n` +
      `📅 Date: ${form.date}\n⏰ Time: ${form.time} (${form.session === 'morning' ? 'Morning' : 'Evening'})\n` +
      `💬 Message: ${form.message || 'No additional message'}\n\nPlease confirm my appointment. Thank you!`
    );
    window.open(`https://wa.me/${clinicData.contact.whatsappNumber}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const minDate = new Date().toISOString().split('T')[0];

  const formContent = submitted ? (
    <div className="text-center py-8 px-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={40} className="text-green-500" />
      </div>
      <h3 className="font-display font-bold text-xl text-slate-800 mb-2">Appointment Request Sent!</h3>
      <p className="text-slate-500 text-sm mb-4">
        Your WhatsApp message has been sent to Olive Dental Care. We'll confirm your appointment shortly.
      </p>
      <div className="bg-olive-50 rounded-xl p-4 text-left space-y-1.5 text-sm text-slate-700 mb-6">
        <p>👤 <strong>Name:</strong> {form.name}</p>
        <p>🦷 <strong>Service:</strong> {form.service}</p>
        <p>📅 <strong>Date:</strong> {form.date}</p>
        <p>⏰ <strong>Time:</strong> {form.time}</p>
      </div>
      <button onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'', phone:'', service:'', date:'', session:'morning', time:'', message:'' }); }} className="btn-primary">
        Book Another
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-5 p-6">
      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-slate-700 text-base">Step 1 — Your Details</h3>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text" required value={form.name}
                onChange={e => update('name', e.target.value)}
                placeholder="Enter your name"
                className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none text-sm transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel" required value={form.phone}
                onChange={e => update('phone', e.target.value)}
                placeholder="+91 00000 00000"
                className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none text-sm transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Select Treatment *</label>
            <select
              required value={form.service}
              onChange={e => update('service', e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none text-sm bg-white transition-colors"
            >
              <option value="">-- Choose a treatment --</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button type="button" onClick={() => { if(form.name && form.phone && form.service) setStep(2); }}
            className="btn-primary w-full justify-center">
            Next — Choose Date & Time <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-slate-700 text-base">Step 2 — Choose Date & Time</h3>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date *</label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="date" required min={minDate} value={form.date}
                onChange={e => update('date', e.target.value)}
                className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none text-sm transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Session</label>
            <div className="grid grid-cols-2 gap-3">
              {['morning', 'evening'].map(s => (
                <button key={s} type="button"
                  onClick={() => { update('session', s); update('time', ''); }}
                  className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                    form.session === s
                      ? 'border-olive-500 bg-olive-50 text-olive-700'
                      : 'border-slate-200 text-slate-500 hover:border-olive-200'
                  }`}
                >
                  {s === 'morning' ? '☀️ Morning' : '🌙 Evening'}
                  <p className="text-xs font-normal mt-0.5 opacity-70">
                    {s === 'morning' ? '10 AM – 1 PM' : '5:30 PM – 9 PM'}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time Slot *</label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots[form.session].map(t => (
                <button key={t} type="button"
                  onClick={() => update('time', t)}
                  className={`py-2 rounded-lg border text-xs font-semibold transition-all ${
                    form.time === t
                      ? 'border-olive-500 bg-olive-500 text-white'
                      : 'border-slate-200 text-slate-600 hover:border-olive-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
            <textarea
              value={form.message} onChange={e => update('message', e.target.value)}
              placeholder="Any specific concern or information..."
              rows={2}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none text-sm transition-colors resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)}
              className="btn-outline flex-1 justify-center py-3">
              ← Back
            </button>
            <button type="submit" disabled={!form.date || !form.time}
              className="btn-primary flex-1 justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed">
              <MessageCircle size={16} /> Send via WhatsApp
            </button>
          </div>

          <p className="text-xs text-center text-slate-400 flex items-center justify-center gap-1">
            <MessageCircle size={11} className="text-green-500" />
            Opens WhatsApp to confirm your appointment instantly
          </p>
        </div>
      )}
    </form>
  );

  if (isModal) {
    return (
      <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div ref={contentRef} className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[92vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100 sticky top-0 bg-white rounded-t-3xl z-10">
            <div>
              <h2 className="font-display font-bold text-slate-800 text-lg">Book Appointment</h2>
              <p className="text-xs text-slate-500">Olive Dental Care — WhatsApp Booking</p>
            </div>
            <button onClick={handleClose} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
              <X size={16} />
            </button>
          </div>
          {formContent}
        </div>
      </div>
    );
  }

  // Inline version
  return (
    <section id="contact" className="section-pad bg-olive-600">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="text-white space-y-5">
            <span className="badge bg-white/20 text-white text-sm">📅 Book Appointment</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Ready for Your Best Smile?</h2>
            <p className="text-olive-100 text-base leading-relaxed">
              Book your appointment in 60 seconds. Our team will confirm your slot via WhatsApp instantly.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-olive-100 text-sm">
                <CheckCircle size={18} className="text-mint-300 flex-shrink-0" />
                No waiting — same-day slots available
              </div>
              <div className="flex items-center gap-3 text-olive-100 text-sm">
                <CheckCircle size={18} className="text-mint-300 flex-shrink-0" />
                Instant confirmation on WhatsApp
              </div>
              <div className="flex items-center gap-3 text-olive-100 text-sm">
                <CheckCircle size={18} className="text-mint-300 flex-shrink-0" />
                Monday 50% OFF on check-ups!
              </div>
            </div>
            {/* Contact info */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href={`tel:${clinicData.contact.phone1}`} className="bg-white/10 hover:bg-white/20 rounded-xl p-3 text-center transition-colors">
                <p className="text-xs text-olive-200">Call / WhatsApp</p>
                <p className="font-bold text-sm">{clinicData.contact.displayPhone1}</p>
              </a>
              <a href={`tel:${clinicData.contact.phone2}`} className="bg-white/10 hover:bg-white/20 rounded-xl p-3 text-center transition-colors">
                <p className="text-xs text-olive-200">Alternate</p>
                <p className="font-bold text-sm">{clinicData.contact.displayPhone2}</p>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-olive-50 px-6 py-4 border-b border-olive-100">
              <h3 className="font-display font-bold text-olive-800 text-base">Book Online — WhatsApp Confirmation</h3>
              <div className="flex gap-2 mt-2">
                {[1, 2].map(s => (
                  <div key={s} className={`flex-1 h-1.5 rounded-full ${s <= step ? 'bg-olive-500' : 'bg-olive-100'} transition-colors`} />
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
