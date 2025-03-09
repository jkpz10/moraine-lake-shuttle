import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function RouteMapSection() {
  return (
    <section
      id="route"
      className="py-32 px-4 md:px-6 bg-[#FEFCFB] backdrop-blur-sm"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Shuttle Routes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[2/1] w-full relative">
                <Link href="https://fareharbor.com/embeds/book/morainelakelouise/items/611572/?full-items=yes&flow=1343456">
                  <Image
                    src={'/images/shuttle-1-3.png'}
                    alt={'shuttle route 1'}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full"
                    style={{ height: 'auto !important' }}
                  />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[2/1] w-full relative">
                <Link href="https://fareharbor.com/embeds/book/morainelakelouise/items/611579/?full-items=yes&flow=1343456">
                  <Image
                    src={'/images/shuttle-2-4.png'}
                    alt={'shuttle route 2'}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full"
                    style={{ height: 'auto !important' }}
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
