import BenefitsTimeline from '@/screens/home/components/benefits-timeline';
import BookingProcess from '@/screens/home/components/booking-process';
import Schedule from '@/screens/home/components/departure-schedule/schedule';
import { FaqSection } from '@/screens/home/components/faq-section';
import Hero from '@/screens/home/components/hero-section';
import { PartnersSection } from '@/screens/home/components/partners-section';
import Testimonials from '@/screens/home/components/testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Theme toggle in the top-right corner */}
      {/* <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div> */}

      {/* Hero Section */}
      <Hero />

      {/* Benefits Timeline Section */}
      <BenefitsTimeline />

      {/* Booking Process Section */}
      <BookingProcess />

      {/* Departure Schedule Section */}
      <Schedule />
      {/* <DepartureScheduleSection /> */}

      {/* Testimonial Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FaqSection />

      {/* Partner Section */}
      <PartnersSection />
    </main>
  );
}
