import {
  shuttle13Schedule,
  shuttle24Schedule,
} from '@/screens/home/departure-schedule';
import { DepartureScheduleTable } from './departure-schedule-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DepartureScheduleSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Departure Schedule
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Card className="border-none bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Shuttle 1 & 3 Departure Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <DepartureScheduleTable data={shuttle13Schedule} />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="border-none bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Shuttle 2 & 4 Departure Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <DepartureScheduleTable data={shuttle24Schedule} reversed />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
