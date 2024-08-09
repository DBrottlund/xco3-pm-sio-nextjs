import { parseISO, formatISO } from 'date-fns';
import moment from 'moment-timezone';
import { add, subtract } from 'date-arithmetic';

const defaultTimeZone = 'America/Chicago';

function isWeekend(date: Date): boolean {
  const day = date.getUTCDay();
  return day === 0 || day === 6;
}

function nextMonday(date: Date): Date {
  const day = date.getUTCDay();
  const daysUntilMonday = day === 0 ? 1 : 8 - day;
  return add(date, daysUntilMonday, 'day');
}

function parseDeadline(deadline: string) {
  const parts = deadline.split(' ');
  const amount = parseInt(parts[0], 10);
  const unit = parts[1].toLowerCase();

  return { amount, unit };
}

export function calculateCompleteDeadline(
  startDate: string, 
  deadline: string, 
  timeZone: string = defaultTimeZone
): string {
  if (!startDate || !deadline ){
      return 'N/A';
  }

  const workStartHour = 8;
  const workEndHour = 17;
  const workDayHours = 9;

  let start = moment.tz(startDate, timeZone).toDate();
  let currentDate = new Date(start);
  const { amount, unit } = parseDeadline(deadline);
  
  let remainingTime = unit === 'days' || unit === 'day' ? amount * workDayHours : amount;

  while (remainingTime > 0) {
    if (isWeekend(currentDate)) {
      currentDate = nextMonday(currentDate);
    } else if (currentDate.getHours() < workStartHour) {
      currentDate.setHours(workStartHour, 0, 0, 0);
    } else if (currentDate.getHours() >= workEndHour) {
      currentDate = add(currentDate, 1, 'day');
      currentDate.setHours(workStartHour, 0, 0, 0);
    } else {
      const remainingWorkHoursToday = workEndHour - currentDate.getHours();
      if (remainingTime <= remainingWorkHoursToday) {
        currentDate = add(currentDate, remainingTime, 'hours');
        remainingTime = 0;
      } else {
        currentDate = add(currentDate, remainingWorkHoursToday, 'hours');
        currentDate = add(currentDate, 1, 'day');
        currentDate.setHours(workStartHour, 0, 0, 0);
        remainingTime -= remainingWorkHoursToday;
      }
    }
  }

  const completeDeadline = moment.tz(currentDate, timeZone).toDate();
  return formatISO(completeDeadline);
}

export function calculateDeadlineAndPercentage(
  startDate: string,
  deadline: string,
  timeZone: string = defaultTimeZone
): { deadline: string, percentageElapsed: number } {
  if (!startDate || !deadline ){
    return {
      deadline: 'N/A',
      percentageElapsed: 0,
    };
}
  const deadlineDateISO = calculateCompleteDeadline(startDate, deadline, timeZone);
  const start = moment.tz(startDate, timeZone).toDate();
  const deadlineDate = moment.tz(deadlineDateISO, timeZone).toDate();
  const now = new Date();

  const totalDuration = deadlineDate.getTime() - start.getTime();
  const elapsedDuration = now.getTime() - start.getTime();

  const percentageElapsed = Math.min(Math.max((elapsedDuration / totalDuration) * 100, 0), 100);

  return {
    deadline: deadlineDateISO,
    percentageElapsed,
  };
}

