import { dateLib } from './dateLib';

export function toSimpleDateString(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function removeDate(dates: Date[], target: Date): Date[] {
    return dates.filter(date => !dateLib.isSameDay(date, target));
}