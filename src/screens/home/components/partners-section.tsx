import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

export function PartnersSection() {
  const partners = [
    {
      name: 'Get Your Guide',
      logo: '/logo/get-your-guide.webp',
      description: 'Global booking platform for travel experiences',
    },
    {
      name: 'Tripadvisor',
      logo: '/logo/tripadvisor-logo.svg',
      description:
        'Tripadvisor, the world&apos;s largest travel platform*, helps 463 million travelers each month** make every trip their best trip',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-[#FEFCFB]">
      <div className="w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted Booking Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve partnered with industry-leading booking platforms to
            provide you with a seamless and secure reservation experience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
          {partners.map(partner => (
            <Card
              key={partner.name}
              className="border-none bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <div className="relative w-48 h-24 mb-6">
                  <Image
                    src={partner.logo || '/placeholder.svg'}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
