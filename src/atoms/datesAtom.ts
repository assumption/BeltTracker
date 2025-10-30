import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { dbKey, readDates, saveDates } from '../utils/storage';
import type { SyncStorage } from 'jotai/vanilla/utils/atomWithStorage';
import { dateLib } from '../utils/dateLib';
import { setDatesByWeekAtom, toggleDatesByWeekAtom } from './datesByWeekAtom';
import { store } from './atoms';

const getItem = (): Date[] => {
    const dates = readDates();
    store.set(setDatesByWeekAtom, dates);
    return dates;
};

const dateStorage: SyncStorage<Date[]> = {
    getItem: getItem,
    setItem: (_, dates: Date[]) => saveDates(dates),
    removeItem: () => { },
    subscribe: (_, callback: (dates: Date[]) => void) => {
        const handler = (e: StorageEvent) => {
            if (e.key !== dbKey) return;
            try {
                callback(getItem());
            } catch {
                callback([]);
            }
        };

        window.addEventListener('storage', handler);
        return () => window.removeEventListener('storage', handler);
    }
};

export const datesAtom = atomWithStorage<Date[]>(dbKey, [], dateStorage, { getOnInit: true });

export const toggleDateAtom = atom(null, (get, set, date: Date) => {
    const dates = [...get(datesAtom)];

    let removedAny = false;
    for (let i = dates.length - 1; i >= 0; i--) {
        if (dateLib.isSameDay(dates[i], date)) {
            dates.splice(i, 1);
            removedAny = true;
        }
    }

    if (!removedAny) {
        dates.push(date);
    }

    set(datesAtom, dates);
    set(toggleDatesByWeekAtom, date);
});

export const setDatesAtom = atom(null, (_, set, dates: Date[]) => {
    set(datesAtom, dates);
    set(setDatesByWeekAtom, dates);
});