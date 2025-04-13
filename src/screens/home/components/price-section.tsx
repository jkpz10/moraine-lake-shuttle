import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

export function PriceSection() {
  return (
    <section id="price" className="py-32 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Card className="border-none w-1/3 shadow-none">
            <CardContent className="p-0">
              <div className="aspect-[2/1] w-full relative">
                <Image
                  src={'/images/price.png'}
                  alt={'price'}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full"
                  style={{ height: 'auto !important' }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
