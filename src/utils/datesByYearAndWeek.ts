import type { CalendarWeek } from 'react-day-picker';
import { dateLib, saturdayIndex, sundayIndex } from './date';

const windowSize = 12;
const reducedWindowSize = 8;
const maxAttendancePerWeek = 5;

function getAttendanceWithOffset(
    date: Date,
    weekOffset: number,
    datesByYearAndWeek: Record<number, Record<number, Date[]>>): number {
    const newDate = dateLib.addWeeks(date, -weekOffset);
    
    return getAttendance(newDate, datesByYearAndWeek);
}

function getAttendance(
    date: Date,
    datesByYearAndWeek: Record<number, Record<number, Date[]>>): number {
    const year = dateLib.getYear(date);
    const weekNumber = dateLib.getISOWeek(date);
    const datesByWeek = datesByYearAndWeek[year];
    if (!datesByWeek || !datesByWeek[weekNumber]) {
        return maxAttendancePerWeek;
    }

    const dates = datesByYearAndWeek[year][weekNumber].filter(d => d.getDay() !== sundayIndex && d.getDay() !== saturdayIndex);
    return Math.max(0, maxAttendancePerWeek - dates.length);
}

export function getBelt(week: CalendarWeek, datesByYearAndWeek: Record<number, Record<number, Date[]>>): number {
    const totalAttendance: number[] = [];
    const date = week.days[0].date;

    for (let weekOffset = 1; weekOffset <= windowSize; weekOffset++) {
        const attendance = getAttendanceWithOffset(date, weekOffset, datesByYearAndWeek);
        totalAttendance.push(attendance);
    }

    totalAttendance.sort((a, b) => b - a);
    const belt = totalAttendance.slice(0, reducedWindowSize);
    return belt.reduce((sum, val) => sum + val, 0) / belt.length;
}