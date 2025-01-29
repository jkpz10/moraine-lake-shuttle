import { shuttle13Schedule, shuttle24Schedule } from "@/screens/home/departure-schedule"
import { DepartureScheduleTable } from "./departure-schedule-table"

export function DepartureScheduleSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Departure Schedule</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Shuttle 1 & 3 Departure Schedule</h3>
            <DepartureScheduleTable data={shuttle13Schedule} />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Shuttle 2 & 4 Departure Schedule</h3>
            <DepartureScheduleTable data={shuttle24Schedule} reversed />
          </div>
        </div>
      </div>
    </section>
  )
}

