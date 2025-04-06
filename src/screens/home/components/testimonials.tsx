'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Calgary, AB',
    rating: 5,
    text: 'The shuttle service made our trip to Moraine Lake so much easier! No stress about parking, and the views along the way were incredible. The driver was knowledgeable and friendly.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Vancouver, BC',
    rating: 5,
    text: 'As a photographer, I appreciated the early morning shuttle that got me to the lake for sunrise. Worth every penny for the convenience and reliability.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Seattle, WA',
    rating: 4,
    text: 'Great service that saved us a lot of hassle. The online booking was simple, and the shuttle was comfortable. Would definitely use again on our next visit.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex(current => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      current => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-24 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D7A]/90 to-[#1A5BA5]/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Customers Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what tourists have
            to say about their experience with our shuttle service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                  ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
                `}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full overflow-hidden border-2 border-white w-16 h-16">
                      <Image
                        src={testimonial.avatar || '/placeholder.svg'}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-lg mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#F2994A] fill-[#F2994A]' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
