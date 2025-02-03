import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function PartnersSection() {
  const partners = [
    {
      name: 'Get Your Guide',
      logo: '/logo/get-your-guide.webp',
      description: 'Global booking platform for travel experiences',
    },
    // {
    //   name: 'PeekPro',
    //   logo: '/logo/peek-pro.svg',
    //   description:
    //     'The world’s most advanced operating system for experiences & attractions',
    // },
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-[#FEFCFB]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted Booking Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve partnered with industry-leading booking platforms to
            provide you with a seamless and secure reservation experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="border-none bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50"
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
