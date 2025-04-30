'use client';

import { Clock, DollarSign, HandCoins, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-[#0B3D7A]" />,
    title: 'Save Time',
    description:
      'Skip the parking hassle and long lines. Our shuttles run on a reliable schedule with guaranteed entry.',
    stat: 120,
    unit: 'min',
    statDescription: 'average time saved',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-[#0B3D7A]" />,
    title: 'Pet-Friendly Shuttles',
    description: 'Pets are welcome to board',
    stat: null,
    unit: '',
    statDescription: '',
  },
  {
    icon: <Shield className="h-8 w-8 text-[#0B3D7A]" />,
    title: 'Safe & Reliable',
    description:
      'Professional drivers and well-maintained vehicles ensure a safe journey to and from the lake.',
    stat: 99.8,
    unit: '%',
    statDescription: 'on-time rate',
  },
  {
    icon: <HandCoins className="h-8 w-8 text-[#0B3D7A]" />,
    title: 'Affordable Rates',
    description:
      'Affordable rates for a premium experience. Enjoy the beauty of Moraine Lake without breaking the bank.',
    stat: 44,
    unit: '.98 CAD$',
    statDescription: '',
  },
];

interface CountUpProps {
  end?: number;
  duration?: number;
  unit?: string;
}

const CountUp = ({ end, duration = 2000, unit = '' }: CountUpProps) => {
  const [count, setCount] = useState<number>(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number | undefined;

    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(percentage * (end ?? 0)));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count ? count : ''}
      {unit}
    </span>
  );
};

export default function BenefitsTimeline() {
  return (
    <section id="service" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1A2230]">
          Why Choose Our Shuttle Service
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline rail */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-[#0B3D7A]"></div>

          {/* Benefit items */}
          <div className="space-y-24">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-2 border-[#0B3D7A] flex items-center justify-center z-10">
                  {benefit.icon}
                </div>

                <div className="ml-24">
                  <h3 className="text-2xl font-bold text-[#1A2230] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-[#0B3D7A] mr-2">
                      <CountUp
                        end={benefit.stat ?? undefined}
                        unit={benefit.unit}
                      />
                    </span>
                    <span className="text-gray-500">
                      {benefit.statDescription}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
