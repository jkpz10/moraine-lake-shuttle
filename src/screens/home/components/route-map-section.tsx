import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

export function RouteMapSection() {
  return (
    <section
      id="route"
      className="py-24 px-4 md:px-6 bg-[#FEFCFB] backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Shuttle Routes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-none bg-transparent shadow-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-transparent overflow-hidden h-full">
            <CardContent className="p-4 h-full flex flex-col">
              <div className="w-full rounded-md overflow-hidden flex justify-center items-center flex-grow">
                <Link
                  href="https://fareharbor.com/embeds/book/morainelakelouise/items/611572/?full-items=yes&flow=1343456"
                  className="w-full flex justify-center"
                >
                  <Image
                    src={'/images/shuttle-1-3.png'}
                    alt={'shuttle route 1'}
                    width={600}
                    height={300}
                    className="object-contain w-auto h-auto max-h-[400px] rounded-lg"
                    priority
                  />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-transparent shadow-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-transparent overflow-hidden h-full">
            <CardContent className="p-4 h-full flex flex-col">
              <div className="w-full rounded-md overflow-hidden flex justify-center items-center flex-grow">
                <Link
                  href="https://fareharbor.com/embeds/book/morainelakelouise/items/611579/?full-items=yes&flow=1343456"
                  className="w-full flex justify-center"
                >
                  <Image
                    src={'/images/shuttle-2-4.png'}
                    alt={'shuttle route 2'}
                    width={600}
                    height={300}
                    className="object-contain w-auto h-auto max-h-[400px] rounded-lg"
                    priority
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
