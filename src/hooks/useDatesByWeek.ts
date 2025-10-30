import { useAtom, useSetAtom } from 'jotai';
import { datesByWeekAtom, setDatesByWeekAtom, toggleDatesByWeekAtom } from '../atoms/datesByWeekAtom';

export default function useDatesByWeek() {
    const [datesByWeek] = useAtom(datesByWeekAtom);
    const toggleDate = useSetAtom(toggleDatesByWeekAtom);
    const setDates = useSetAtom(setDatesByWeekAtom);

    return { datesByWeek, toggleDate, setDates };
}
