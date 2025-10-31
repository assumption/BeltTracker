import { useAtom, useSetAtom } from 'jotai';
import { datesByYearAndWeekAtom, setDatesByYearAndWeekAtom, toggleDatesByYearAndWeekAtom } from '../atoms/datesByYearAndWeekAtom';

export default function useDatesByYearAndWeek() {
    const [datesByYearAndWeek] = useAtom(datesByYearAndWeekAtom);
    const toggleDate = useSetAtom(toggleDatesByYearAndWeekAtom);
    const setDates = useSetAtom(setDatesByYearAndWeekAtom);

    return { datesByYearAndWeek, toggleDate, setDates };
}
