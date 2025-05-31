export interface ScheduleTime {
  skiGondola: string; // "HI Lake Louise" from the image
  lakeLouise: string; // "Lake Louise Parking" from the image
  moraineLake?: string; // "Moraine Lake Parking" from the image
  endTime?: string; // "END TIME" from the image
  shuttle: 1 | 2 | 3 | 4; // Alternating between 1 and 3 , 2 and 4
}

export const shuttle13Schedule: ScheduleTime[] = [
  {
    skiGondola: '7:00 AM',
    lakeLouise: '1:00 PM',
    shuttle: 1,
  },
  {
    skiGondola: '8:00 AM',
    lakeLouise: '2:00 PM',
    shuttle: 1,
  },
  {
    skiGondola: '9:00 AM',
    lakeLouise: '3:00 PM',
    shuttle: 1,
  },
];

export const shuttle24Schedule: ScheduleTime[] = [
  {
    skiGondola: '7:00 AM',
    moraineLake: '9:00 AM',
    lakeLouise: '11:00 AM',
    endTime: '11:15 AM',
    shuttle: 2,
  },
  {
    skiGondola: '7:45 AM',
    moraineLake: '9:45 AM',
    lakeLouise: '11:45 AM',
    endTime: '12:00 PM',
    shuttle: 4,
  },
  {
    skiGondola: '8:30 AM',
    moraineLake: '10:30 AM',
    lakeLouise: '12:30 PM',
    endTime: '12:45 PM',
    shuttle: 2,
  },
  {
    skiGondola: '9:15 AM',
    moraineLake: '11:15 AM',
    lakeLouise: '1:15 PM',
    endTime: '1:30 PM',
    shuttle: 4,
  },
  {
    skiGondola: '10:00 AM',
    moraineLake: '12:00 PM',
    lakeLouise: '2:00 PM',
    endTime: '2:15 PM',
    shuttle: 2,
  },
  {
    skiGondola: '10:45 AM',
    moraineLake: '12:45 PM',
    lakeLouise: '2:45 PM',
    endTime: '3:00 PM',
    shuttle: 4,
  },
  {
    skiGondola: '11:30 AM',
    moraineLake: '1:30 PM',
    lakeLouise: '3:30 PM',
    endTime: '3:45 PM',
    shuttle: 2,
  },
  {
    skiGondola: '12:15 PM',
    moraineLake: '2:15 PM',
    lakeLouise: '4:15 PM',
    endTime: '4:30 PM',
    shuttle: 4,
  },
  {
    skiGondola: '1:00 PM',
    moraineLake: '3:00 PM',
    lakeLouise: '5:00 PM',
    endTime: '5:15 PM',
    shuttle: 2,
  },
  {
    skiGondola: '1:45 PM',
    moraineLake: '3:45 PM',
    lakeLouise: '5:45 PM',
    endTime: '6:00 PM',
    shuttle: 4,
  },
  {
    skiGondola: '2:30 PM',
    moraineLake: '4:30 PM',
    lakeLouise: '6:30 PM',
    endTime: '6:45 PM',
    shuttle: 2,
  },
  {
    skiGondola: '3:15 PM',
    moraineLake: '5:15 PM',
    lakeLouise: '7:15 PM',
    endTime: '7:30 PM',
    shuttle: 4,
  },
  {
    skiGondola: '4:00 PM',
    moraineLake: '6:00 PM',
    lakeLouise: '8:00 PM',
    endTime: '8:15 PM',
    shuttle: 2,
  },
  {
    skiGondola: '4:45 PM',
    moraineLake: '6:45 PM',
    lakeLouise: '8:45 PM',
    endTime: '9:00 PM',
    shuttle: 4,
  },
];
