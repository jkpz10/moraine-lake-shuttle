import { ThemeToggle } from '@/components/theme-toggle';
import { DepartureScheduleSection } from '@/screens/home/components/departure-schedule/departure-schedule-section';
import { PartnersSection } from '@/screens/home/components/partners-section';
import { ServiceSection } from '@/screens/home/components/service-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Theme toggle in the top-right corner */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/moraine-lake-hero.webp",
            backgroundBlendMode: 'overlay',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experience the Wonder of Moraine Lake & Lake Louise
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
            Explore the Lakes not the Parking Lot
          </p>
          {/* <BookingModal /> */}
        </div>
      </section>

      {/* Features Section */}
      <ServiceSection />

      {/* Departure Schedule Section */}
      <DepartureScheduleSection />

      {/* Partners Section */}
      <PartnersSection />
    </main>
  );
}
