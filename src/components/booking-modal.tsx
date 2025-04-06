'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface BookingModalProps {
  title?: string;
}

export function BookingModal({
  title = 'Book Your Shuttle',
}: BookingModalProps) {
  return (
    <Button className="bg-[#F2994A] hover:bg-[#F2994A]/90 text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <Link href="https://fareharbor.com/embeds/book/morainelakelouise/?full-items=yes">
        {title}
      </Link>
    </Button>
  );
}
