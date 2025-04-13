'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { BookingModal } from '@/components/booking-modal';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { cn, smoothScroll } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              onClick={e => smoothScroll(e, '#route')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Routes
            </Link>
            <Link
              href="#schedule"
              onClick={e => smoothScroll(e, '#schedule')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Schedule
            </Link>
            <Link
              href="#faq"
              onClick={e => smoothScroll(e, '#faq')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-64">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="#route"
                    onClick={e => smoothScroll(e, '#route')}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Routes
                  </Link>
                  <Link
                    href="#schedule"
                    onClick={e => smoothScroll(e, '#schedule')}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="#price"
                    onClick={e => smoothScroll(e, '#price')}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Price
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className={cn('flex items-center', isOpen && 'hidden')}>
            <BookingModal title="Book Now" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
