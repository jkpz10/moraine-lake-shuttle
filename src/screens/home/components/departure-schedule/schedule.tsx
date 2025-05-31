'use client';

// import { Download, Printer } from 'lucide-react';

// import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  shuttle13Schedule,
  // shuttle24Schedule,
} from '@/screens/home/components/departure-schedule';

import { DepartureScheduleTable } from './departure-schedule-table';

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A2230]">
              Shuttle Schedule
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Plan your trip with our convenient shuttle schedule. Buses run
              daily with multiple departure times.
            </p>
          </div>

          {/* <div className="flex space-x-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-4">
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#0A1128]">
                  Shuttle Departure Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <DepartureScheduleTable
                  data={shuttle13Schedule}
                  colors={['bg-yellow-500/50', 'bg-red-500/50']}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Schedule subject to change based on weather and seasonal conditions.
            Please arrive 15 minutes before departure time.
          </p>
        </div>
      </div>
    </section>
  );
}
