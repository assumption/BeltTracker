import { useAtom, useSetAtom } from 'jotai';
import { datesAtom, setDatesAtom, toggleDateAtom } from '../atoms/datesAtom';

export default function useDates() {
    const [dates] = useAtom(datesAtom);
    const toggleDate = useSetAtom(toggleDateAtom);
    const setDates = useSetAtom(setDatesAtom);

    return { dates, toggleDate, setDates };
}
