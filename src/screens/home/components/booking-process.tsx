import { CalendarDays, CheckCircle, MapPin, CreditCard } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MapPin className="h-10 w-10 text-[#0B3D7A]" />,
    title: 'Select Route',
    description: 'Choose from convenient routes from ski gondola.',
  },
  {
    number: '02',
    icon: <CalendarDays className="h-10 w-10 text-[#0B3D7A]" />,
    title: 'Choose Your Date',
    description:
      'Select from our available scheduled time based on your travel plans.',
  },
  {
    number: '03',
    icon: <CreditCard className="h-10 w-10 text-[#0B3D7A]" />,
    title: 'Make Payment',
    description: 'Secure your spot with our simple online payment system.',
  },
  {
    number: '04',
    icon: <CheckCircle className="h-10 w-10 text-[#0B3D7A]" />,
    title: 'Receive Confirmation',
    description: 'Get your e-ticket via email with all the details you need.',
  },
];

export default function BookingProcess() {
  return (
    <section id="process" className="py-24 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2230]">
            Simple Booking Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined booking system makes it easy to reserve your spot on
            our shuttle service to Lake Louise and Moraine Lake.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-dashed border-t-2 border-dashed border-[#E2E8F0] -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 z-10"
              >
                <div className="text-[#F2994A] text-3xl font-bold mb-4">
                  {step.number}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#1A2230]">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
