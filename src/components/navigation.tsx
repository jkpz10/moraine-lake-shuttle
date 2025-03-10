'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { BookingModal } from '@/components/booking-modal';
import Image from 'next/image';

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-[#FEFCFB] px-4 transition-all duration-300',
        isScrolled && 'shadow-lg backdrop-blur-lg'
      )}
    >
      <div className="flex h-28 items-center">
        {/* Logo */}
        <div className="mr-8 flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={'/logo/mlls-logo.png'}
              alt={'moraine lake louise shuttle'}
              width={200}
              height={64}
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 md:justify-end gap-2">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end space-x-6">
            <Link
              href="#route"
              onClick={(e) => smoothScroll(e, '#route')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Routes
            </Link>
            <Link
              href="#schedule"
              onClick={(e) => smoothScroll(e, '#schedule')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Schedule
            </Link>
            <Link
              href="#price"
              onClick={(e) => smoothScroll(e, '#price')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Price
            </Link>
          </nav>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-64">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="#route"
                    onClick={(e) => smoothScroll(e, '#route')}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Routes
                  </Link>
                  <Link
                    href="#schedule"
                    onClick={(e) => smoothScroll(e, '#schedule')}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="#price"
                    onClick={(e) => smoothScroll(e, '#price')}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Price
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className={cn('flex items-center', isOpen && 'hidden')}>
            <BookingModal title="Book" />
          </div>
        </div>
      </div>
    </header>
  );
}
