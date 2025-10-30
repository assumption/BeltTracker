import { toSimpleDateString } from './date';

export const dbKey = 'beltTrackerOofDates';

async function ensurePersistentStorage() {
    if (await navigator.storage.persisted()) {
        return;
    }

    await navigator.storage.persist();
}

export function readDates(): Date[] {
    try {
        const dates = JSON.parse(localStorage.getItem(dbKey) || '[]');
        return dates.map((date: string) => {
            const [year, month, day] = date.split('-').map(Number);
            return new Date(year, month - 1, day);
        });
    } catch {
        return [];
    }
}

export function getStringToStore(dates: Date[]): string {
    const dateStrings = dates.map(toSimpleDateString);
    return JSON.stringify(dateStrings);
}

export function saveDates(dates: Date[]): void {
    ensurePersistentStorage();

    localStorage.setItem(dbKey, getStringToStore(dates));
}