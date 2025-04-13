import { Shield, DollarSign, Users, Clock } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function ServiceSection() {
  const features = [
    {
      title: 'Safety First Guarantee',
      description:
        'Professional drivers and well-maintained vehicles ensure your safety',
      icon: Shield,
    },
    {
      title: 'Budget-Friendly Vehicles',
      description:
        'Affordable and reliable transportation without compromising quality',
      icon: DollarSign,
    },
    {
      title: 'Expert Local Drivers',
      description: 'Knowledgeable guides who know the area inside and out',
      icon: Users,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Multiple departure times to suit your travel plans',
      icon: Clock,
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-[#FEFCFB] backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Shuttle Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <Card
              key={feature.title}
              className="border-none bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50"
            >
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-[#0A1128]/80 transition-colors duration-300 group-hover:text-[#0A1128]" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
