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
    <Button className="text-lg bg-[#034078] text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-[#001F54] hover:scale-105 hover:shadow-lg">
      <Link href="https://fareharbor.com/embeds/book/morainelakelouise/?full-items=yes">
        {title}
      </Link>
    </Button>
  );
}
