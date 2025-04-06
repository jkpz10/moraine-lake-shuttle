'use client';

import { Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Coordinates {
  x: number;
  y: number;
}

interface Stop {
  name: string;
  description: string;
  times: string[];
  coordinates: Coordinates;
}

interface Route {
  id: string;
  name: string;
  stops: Stop[];
}
const routes: Route[] = [
  {
    id: 'route1',
    name: 'Route 1',
    stops: [
      {
        name: 'Ski Gondola',
        description: 'Main pickup point',
        times: [
          '7:00 AM',
          '7:30 AM',
          '8:30 AM',
          '9:00 AM',
          '10:00 AM',
          '10:30 AM',
          '11:30 AM',
          '12:00 PM',
          '1:00 PM',
          '1:30 PM',
          '2:30 PM',
          '3:00 PM',
          '4:00 PM',
          '4:30 PM',
        ],
        coordinates: { x: 20, y: 30 },
      },
      {
        name: 'Lake Louise',
        description: 'Pickup at the hotel main entrance',
        times: [
          '8:55 am',
          '9:25 am',
          '10:25 am',
          '10:55 am',
          '11:55 am',
          '12:25 pm',
          '1:25 pm',
          '1:55 pm',
          '2:55 pm',
          '3:25 pm',
          '4:25 pm',
          '4:55 pm',
          '5:55 pm',
          '6:25 pm',
        ],
        coordinates: { x: 80, y: 25 },
      },
      {
        name: 'Moraine Lake',
        description: 'Transit hub near the visitor center',
        times: [
          '10:55 am',
          '11:25 am',
          '12:25 pm',
          '12:55 pm',
          '1:55 pm',
          '2:25 pm',
          '3:25 pm',
          '3:55 pm',
          '4:55 pm',
          '5:25 pm',
          '6:25 pm',
          '6:55 pm',
          '7:55 pm',
          '8:25 pm',
        ],
        coordinates: { x: 50, y: 80 },
      },
      {
        name: 'Ski Gondola',
        description: 'Main pickup point in downtown Banff',
        times: [
          '7:00 AM',
          '7:30 AM',
          '8:30 AM',
          '9:00 AM',
          '10:00 AM',
          '10:30 AM',
          '11:30 AM',
          '12:00 PM',
          '1:00 PM',
          '1:30 PM',
          '2:30 PM',
          '3:00 PM',
          '4:00 PM',
          '4:30 PM',
        ],
        coordinates: { x: 20, y: 30 },
      },
    ],
  },
  {
    id: 'route2',
    name: 'Route 2',
    stops: [
      {
        name: 'Ski Gondola',
        description: 'Main pickup point in downtown Banff',
        times: [
          '7:00 am',
          '7:30 am',
          '8:30 am',
          '9:00 am',
          '10:00 am',
          '10:30 am',
          '11:30 am',
          '12:00 pm',
          '1:00 pm',
          '1:30 pm',
          '2:30 pm',
          '3:00 pm',
          '4:00 pm',
          '4:30 pm',
        ],
        coordinates: { x: 20, y: 30 },
      },
      {
        name: 'Moraine Lake',
        description: 'Pickup at the hotel main entrance',
        times: [
          '9:05 am',
          '9:35 am',
          '10:35 am',
          '11:05 am',
          '12:05 pm',
          '12:35 pm',
          '1:35 pm',
          '2:05 pm',
          '3:05 pm',
          '3:35 pm',
          '4:35 pm',
          '5:05 pm',
          '6:05 pm',
          '6:35 pm',
        ],
        coordinates: { x: 80, y: 25 },
      },
      {
        name: 'Lake Louise',
        description: 'Transit hub near the visitor center',
        times: [
          '11:05 am',
          '11:35 am',
          '12:35 pm',
          '1:05 pm',
          '2:05 pm',
          '2:35 pm',
          '3:35 pm',
          '4:05 pm',
          '5:05 pm',
          '5:35 pm',
          '6:35 pm',
          '7:05 pm',
          '8:05 pm',
          '8:35 pm',
        ],
        coordinates: { x: 50, y: 80 },
      },
      {
        name: 'Ski Gondola',
        description: 'Main pickup point in downtown Banff',
        times: [
          '7:00 AM',
          '7:30 AM',
          '8:30 AM',
          '9:00 AM',
          '10:00 AM',
          '10:30 AM',
          '11:30 AM',
          '12:00 PM',
          '1:00 PM',
          '1:30 PM',
          '2:30 PM',
          '3:00 PM',
          '4:00 PM',
          '4:30 PM',
        ],
        coordinates: { x: 20, y: 30 },
      },
    ],
  },
];

export function RouteMapSection() {
  const [, setActiveRoute] = useState<Route>(routes[1]);
  const [activeStop, setActiveStop] = useState<Stop | null>(null);

  const handleStopClick = (stop: Stop) => {
    setActiveStop(stop);
  };

  const handleRouteChange = (route: Route) => {
    setActiveRoute(route);
    setActiveStop(null);
  };

  return (
    <section id="route" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2230]">
            Our Shuttle Routes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our convenient routes with multiple pickup locations to find
            the one that works best for you.
          </p>
        </div>

        <Tabs defaultValue="route1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {routes.map(route => (
              <TabsTrigger
                key={route.id}
                value={route.id}
                onClick={() => handleRouteChange(route)}
              >
                {route.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {routes.map(route => (
            <TabsContent key={route.id} value={route.id} className="mt-0">
              <div className="relative bg-[#F5F7FA] rounded-xl p-4 h-[500px] overflow-hidden">
                {/* Map background */}
                <div className="absolute inset-0 opacity-35 bg-[url('/images/farzn-dehbashi-wIBBYw81XOw-unsplash.jpg')] bg-cover bg-center"></div>
                {/* Route line */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d={`M ${route.stops.map(stop => `${stop.coordinates.x} ${stop.coordinates.y}`).join(' L ')}`}
                    fill="none"
                    stroke="#0B3D7A"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                    className="animate-dash"
                  />
                </svg>
                {/* Stop points */}
                {route.stops.map((stop, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{
                      left: `${stop.coordinates.x}%`,
                      top: `${stop.coordinates.y}%`,
                    }}
                    onClick={() => handleStopClick(stop)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleStopClick(stop);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${stop.name} stop`}
                  >
                    <div
                      className={`
                      w-6 h-6 rounded-full flex items-center justify-center
                      ${activeStop === stop ? 'bg-[#F2994A]' : 'bg-[#0B3D7A]'}
                      hover:scale-110 transition-transform duration-200
                    `}
                    >
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-base font-semibold text-[#1A2230]">
                      {stop.name}
                    </div>
                  </div>
                ))}
                {/* Info card for active stop */}
                {activeStop && (
                  <div
                    className="absolute right-4 top-4 w-64 bg-white rounded-lg shadow-lg p-4 z-10"
                    style={{
                      animation: 'fadeIn 0.3s ease-out',
                    }}
                    role="dialog"
                    aria-labelledby={`stop-${activeStop.name.toLowerCase().replace(/\s+/g, '-')}-title`}
                  >
                    <h4
                      id={`stop-${activeStop.name.toLowerCase().replace(/\s+/g, '-')}-title`}
                      className="font-bold text-lg mb-2 text-[#1A2230]"
                    >
                      {activeStop.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {activeStop.description}
                    </p>
                    <div className="flex items-start gap-2">
                      <Clock
                        className="h-4 w-4 text-[#0B3D7A] mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs font-medium text-[#1A2230] mb-1">
                          Departure Times:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {activeStop.times.map((time, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#F5F7FA] px-2 py-0.5 rounded"
                            >
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-muted-foreground text-xs relative z-10  bg-white/80 px-2 py-1 rounded">
                Photo by{' '}
                <Link href="https://unsplash.com/@farzandb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Farzn Dehbashi
                </Link>{' '}
                on{' '}
                <Link href="https://unsplash.com/photos/a-truck-driving-down-a-road-with-mountains-in-the-background-wIBBYw81XOw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Unsplash
                </Link>
              </span>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default RouteMapSection;
