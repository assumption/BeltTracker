import { DateLib } from 'react-day-picker';

export const dateLib = new DateLib();
export const sundayIndex = 0;
export const saturdayIndex = 6;

export function getStartingMonth(numberOfMonthsInitiallyRendered: number): Date {
    const offset = numberOfMonthsInitiallyRendered > 2 ? 1 : 0;
    const date = new Date();
    date.setMonth(date.getMonth() - offset);
    return date;
}

export function toSimpleDateString(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function removeDate(dates: Date[], target: Date): Date[] {
    return dates.filter(date => !dateLib.isSameDay(date, target));
}