import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  shuttle13Schedule,
  shuttle24Schedule,
} from '@/screens/home/departure-schedule';

import { DepartureScheduleTable } from './departure-schedule-table';

export function DepartureScheduleSection() {
  return (
    <section
      id="schedule"
      className="py-24 px-4 md:px-6 bg-[#034078] text-[#FEFCFB]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Departure Schedule
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Card className="border-none bg-[#FEFCFB] backdrop-blur-sm shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#0A1128]">
                  Shuttle 1 & 3 Departure Schedule
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
          <div className="space-y-4">
            <Card className="border-none bg-[#FEFCFB] backdrop-blur-sm shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#0A1128]">
                  Shuttle 2 & 4 Departure Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <DepartureScheduleTable
                  data={shuttle24Schedule}
                  colors={['bg-blue-50', 'bg-blue-500/50']}
                  reversed
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
