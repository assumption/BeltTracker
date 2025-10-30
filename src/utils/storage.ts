import { toSimpleDateString } from './date';

export const dbKey = 'beltTrackerOofDates';

async function ensurePersistentStorage() {
    if (await navigator.storage.persisted()) {
        return;
    }

    await navigator.storage.persist();
}

export function tryParseDates(datesString: string): { success: boolean; dates: Date[] } {
    if (!datesString) {
        return { success: false, dates: [] };
    }

    try {
        const parsedDates = [];
        const json = JSON.parse(datesString);
        if (!json) {
            return { success: false, dates: [] };
        }

        for (var dateString of json) {
            if (!dateString) {
                return { success: false, dates: [] };
            }

            var tokens = dateString.split('-');
            if (tokens.length !== 3) {
                return { success: false, dates: [] };
            }

            const [year, month, day] = dateString.split('-').map(Number);
            parsedDates.push(new Date(year, month - 1, day));
        }

        return { success: true, dates: parsedDates };
    } catch {
        return { success: false, dates: [] };
    }
}

export function readDates(): Date[] {
    try {
        const { success, dates } = tryParseDates(localStorage.getItem(dbKey) ?? '[]');
        return success ? dates : [];
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