'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { ScheduleTime } from '@/screens/home/departure-schedule';

interface ScheduleTableProps {
  data: ScheduleTime[];
  reversed?: boolean;
  colors?: string[];
}

export function DepartureScheduleTable({
  data,
  reversed = false,
  colors = ['bg-gray-200/50'],
}: ScheduleTableProps) {
  const shuttleNumbers = Array.from(new Set(data.map((item) => item.shuttle)));

  const route1 =
    'https://fareharbor.com/embeds/book/morainelakelouise/items/611572/?full-items=yes&flow=1343456';
  const route2 =
    'https://fareharbor.com/embeds/book/morainelakelouise/items/611579/?full-items=yes&flow=1343456';

  return (
    <div className="space-y-4">
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[33%] font-medium bg-[#001F54] text-[#FEFCFB] rounded-tl-xl p-3">
              Ski Gondola
            </TableHead>
            <TableHead className="w-[33%] font-medium bg-[#001F54] text-[#FEFCFB] p-3">
              {reversed ? 'Moraine Lake' : 'Lake Louise'}
            </TableHead>
            <TableHead className="w-[33%] font-medium bg-[#001F54] text-[#FEFCFB] rounded-tr-xl p-3">
              {reversed ? 'Lake Louise' : 'Moraine Lake'}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((schedule, index) => {
            const href = reversed ? route2 : route1;
            return (
              <TableRow
                key={index}
                onClick={() => window.open(href, '_blank')}
                className={`
                ${index % 2 === 0 ? colors[0] : colors[1] ?? ''}
                transition-all duration-300 ease-in-out 
                hover:bg-gray-100 hover:shadow-sm hover:scale-[1.02] cursor-pointer
              `}
              >
                <TableCell className="font-mono">
                  {schedule.skiGondola}
                </TableCell>
                <TableCell className="font-mono">
                  {reversed ? schedule.moraineLake : schedule.lakeLouise}
                </TableCell>
                <TableCell className="font-mono">
                  {reversed ? schedule.lakeLouise : schedule.moraineLake}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex flex-wrap gap-2">
        {shuttleNumbers.map((number, index) => (
          <Badge
            key={number}
            variant="secondary"
            className={`text-sm
              ${index % 2 === 0 ? colors[0] : colors[1] ?? ''}
              transition-all duration-300 ease-in-out 
              hover:bg-gray-100 hover:shadow-sm hover:scale-[1.02] cursor-pointer
            `}
          >
            Shuttle {number}
          </Badge>
        ))}
      </div>
    </div>
  );
}
