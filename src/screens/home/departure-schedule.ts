export type ScheduleTime = {
  skiGondola: string
  lakeLouise: string
  moraineLake: string
  shuttle: 1 | 2 | 3 | 4
}

export const shuttle13Schedule: ScheduleTime[] = [
  { skiGondola: "7:00 AM", lakeLouise: "8:55 AM", moraineLake: "10:55 AM", shuttle: 1 },
  { skiGondola: "7:30 AM", lakeLouise: "9:25 AM", moraineLake: "11:25 AM", shuttle: 3 },
  { skiGondola: "8:30 AM", lakeLouise: "10:25 AM", moraineLake: "12:25 PM", shuttle: 1 },
  { skiGondola: "9:00 AM", lakeLouise: "10:55 AM", moraineLake: "12:55 PM", shuttle: 3 },
  { skiGondola: "10:00 AM", lakeLouise: "11:55 AM", moraineLake: "1:55 PM", shuttle: 1 },
  { skiGondola: "10:30 AM", lakeLouise: "12:25 PM", moraineLake: "2:25 PM", shuttle: 3 },
  { skiGondola: "11:30 AM", lakeLouise: "1:25 PM", moraineLake: "3:25 PM", shuttle: 1 },
  { skiGondola: "12:00 PM", lakeLouise: "1:55 PM", moraineLake: "3:55 PM", shuttle: 3 },
  { skiGondola: "1:00 PM", lakeLouise: "2:55 PM", moraineLake: "4:55 PM", shuttle: 1 },
  { skiGondola: "1:30 PM", lakeLouise: "3:25 PM", moraineLake: "5:25 PM", shuttle: 3 },
  { skiGondola: "2:30 PM", lakeLouise: "4:25 PM", moraineLake: "6:25 PM", shuttle: 1 },
  { skiGondola: "3:00 PM", lakeLouise: "4:55 PM", moraineLake: "6:55 PM", shuttle: 3 },
  { skiGondola: "4:00 PM", lakeLouise: "5:55 PM", moraineLake: "7:55 PM", shuttle: 1 },
  { skiGondola: "4:30 PM", lakeLouise: "6:25 PM", moraineLake: "8:25 PM", shuttle: 3 },
]

export const shuttle24Schedule: ScheduleTime[] = [
  { skiGondola: "7:00 AM", moraineLake: "9:05 AM", lakeLouise: "11:05 AM", shuttle: 2 },
  { skiGondola: "7:30 AM", moraineLake: "9:35 AM", lakeLouise: "11:35 AM", shuttle: 4 },
  { skiGondola: "8:30 AM", moraineLake: "10:35 AM", lakeLouise: "12:35 PM", shuttle: 2 },
  { skiGondola: "9:00 AM", moraineLake: "11:05 AM", lakeLouise: "1:05 PM", shuttle: 4 },
  { skiGondola: "10:00 AM", moraineLake: "12:05 PM", lakeLouise: "2:05 PM", shuttle: 2 },
  { skiGondola: "10:30 AM", moraineLake: "12:35 PM", lakeLouise: "2:35 PM", shuttle: 4 },
  { skiGondola: "11:30 AM", moraineLake: "1:35 PM", lakeLouise: "3:35 PM", shuttle: 2 },
  { skiGondola: "12:00 PM", moraineLake: "2:05 PM", lakeLouise: "4:05 PM", shuttle: 4 },
  { skiGondola: "1:00 PM", moraineLake: "3:05 PM", lakeLouise: "5:05 PM", shuttle: 2 },
  { skiGondola: "1:30 PM", moraineLake: "3:35 PM", lakeLouise: "5:35 PM", shuttle: 4 },
  { skiGondola: "2:30 PM", moraineLake: "4:35 PM", lakeLouise: "6:35 PM", shuttle: 2 },
  { skiGondola: "3:00 PM", moraineLake: "5:05 PM", lakeLouise: "7:05 PM", shuttle: 4 },
  { skiGondola: "4:00 PM", moraineLake: "6:05 PM", lakeLouise: "8:05 PM", shuttle: 2 },
  { skiGondola: "4:30 PM", moraineLake: "6:35 PM", lakeLouise: "8:35 PM", shuttle: 4 },
]

