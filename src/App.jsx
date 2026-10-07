import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutClinic from './components/AboutClinic';
import Services from './components/Services';
import GoogleReviews from './components/GoogleReviews';
import AppointmentBooking from './components/AppointmentBooking';
import LocationAndHours from './components/LocationAndHours';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800 antialiased overflow-x-hidden w-full max-w-full">
      <Navbar onBookClick={() => handleOpenBooking()} />

      <main className="flex-1">
        <Hero onBookClick={() => handleOpenBooking()} />
        <AboutClinic onBookClick={() => handleOpenBooking()} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <GoogleReviews />
        <AppointmentBooking isModal={false} />
        <LocationAndHours />
        <FaqSection />
      </main>

      <Footer onBookClick={() => handleOpenBooking()} />

      <FloatingActions onBookClick={() => handleOpenBooking()} />

      {isModalOpen && (
        <AppointmentBooking
          isModal={true}
          preselectedService={selectedService}
          onClose={handleCloseBooking}
        />
      )}
      
      <Analytics />
    </div>
  );
}
