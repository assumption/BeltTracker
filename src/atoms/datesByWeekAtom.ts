import { atom } from 'jotai';
import { dateLib } from '../utils/dateLib';
import { removeDate } from '../utils/date';

export const datesByWeekAtom = atom<Record<number, Date[]>>({});

export const toggleDatesByWeekAtom = atom(null, (get, set, date: Date) => {
    const datesByWeek = { ...get(datesByWeekAtom) };
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

    set(datesByWeekAtom, datesByWeek);
});

export const setDatesByWeekAtom = atom(null, (_, set, dates: Date[]) => {
    const datesByWeek: Record<number, Date[]> = {};
    for (const date of dates) {
        const weekNumber = dateLib.getISOWeek(date);
        if (!(weekNumber in datesByWeek)) {
            datesByWeek[weekNumber] = [];
        }
        datesByWeek[weekNumber].push(date);
    }

    set(datesByWeekAtom, datesByWeek);
});