import { atom } from 'jotai';
import { dateLib } from '../utils/date';
import { removeDate } from '../utils/date';

// datesByWeek[year][weekNumber] = Date[]
export const datesByYearAndWeekAtom = atom<Record<number, Record<number, Date[]>>>({});

export const toggleDatesByYearAndWeekAtom = atom(null, (get, set, date: Date) => {
    const datesByYearAndWeek = { ...get(datesByYearAndWeekAtom) };
    const year = dateLib.getYear(date);
    if (!(year in datesByYearAndWeek)) {
        datesByYearAndWeek[year] = {};
    }
    
    const datesByWeek = datesByYearAndWeek[year];
    const weekNumber = dateLib.getISOWeek(date);
    if (weekNumber in datesByWeek) {
        const dates = datesByWeek[weekNumber];
        if (dates.some(d => dateLib.isSameDay(d, date))) {
            datesByWeek[weekNumber] = removeDate(dates, date);
        } else {
            dates.push(date);
        }
    } else {
        datesByWeek[weekNumber] = [date];
    }

    set(datesByYearAndWeekAtom, datesByYearAndWeek);
});

export const setDatesByYearAndWeekAtom = atom(null, (_, set, dates: Date[]) => {
    const datesByYearAndWeek: Record<number, Record<number, Date[]>> = {};
    for (const date of dates) {
        const year = dateLib.getYear(date);
        if (!(year in datesByYearAndWeek)) {
            datesByYearAndWeek[year] = {};
        }

        const datesByWeek = datesByYearAndWeek[year];
        const weekNumber = dateLib.getISOWeek(date);
        if (!(weekNumber in datesByWeek)) {
            datesByWeek[weekNumber] = [];
        }

        datesByWeek[weekNumber].push(date);
    }

    set(datesByYearAndWeekAtom, datesByYearAndWeek);
});