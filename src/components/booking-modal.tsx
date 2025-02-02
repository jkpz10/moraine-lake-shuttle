'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface BookingModalProps {
  title?: string;
}

export function BookingModal({
  title = 'Book Your Shuttle',
}: BookingModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="text-lg bg-[#034078] text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-[#001F54] hover:scale-105 hover:shadow-lg"
        >
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="p-6">
        <DialogHeader className="py-4">
          <DialogTitle>Book Your Shuttle</DialogTitle>
        </DialogHeader>
        <div className="h-full">modal booking widget here</div>
      </DialogContent>
    </Dialog>
  );
}
