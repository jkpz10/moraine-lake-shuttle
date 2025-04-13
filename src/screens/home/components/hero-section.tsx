'use client';

import { Bus } from 'lucide-react';
import { useState, useEffect } from 'react';

import { BookingModal } from '@/components/booking-modal';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set countdown to a date 7 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);

        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 min-h-[600px] md:min-h-[700px] w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-r from-[#0B3D7A] to-[#1A5BA5] flex flex-col justify-center p-8 md:p-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Experience the Wonder of Moraine Lake & Lake Louise
        </h1>
        <p className="text-white/70 text-lg md:text-xl lg:text-2xl font-semibold mb-8">
          Explore the Lakes not the Parking Lot
        </p>
        <p className="text-white/70 text-lg mb-8">
          Our shuttle service provides convenient, reliable transportation to
          one of Canada&apos;s most stunning natural attractions.
        </p>
        <div className="space-y-6">
          <BookingModal />

          <div className="flex items-center space-x-4 text-white font-mono">
            <div className="text-center">
              <div className="bg-white/10 rounded-md px-3 py-2">
                <span className="text-2xl">
                  {timeLeft.days.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs mt-1 block">Days</span>
            </div>
            <span className="text-xl">:</span>
            <div className="text-center">
              <div className="bg-white/10 rounded-md px-3 py-2">
                <span className="text-2xl">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs mt-1 block">Hours</span>
            </div>
            <span className="text-xl">:</span>
            <div className="text-center">
              <div className="bg-white/10 rounded-md px-3 py-2">
                <span className="text-2xl">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs mt-1 block">Mins</span>
            </div>
            <span className="text-xl">:</span>
            <div className="text-center">
              <div className="bg-white/10 rounded-md px-3 py-2">
                <span className="text-2xl">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs mt-1 block">Secs</span>
            </div>
          </div>
          <p className="text-white/70 text-sm">
            Until peak season rates begin. Book now to save!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/moraine-lake-hero.webp')",
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D7A]/20 to-transparent"></div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce-horizontal">
            <Bus className="h-10 w-10 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
