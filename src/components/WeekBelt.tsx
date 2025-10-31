import { type JSX } from 'react';
import type { WeekNumberProps } from 'react-day-picker';
import useDatesByYearAndWeek from '../hooks/useDatesByYearAndWeek';
import { getBelt } from '../utils/datesByYearAndWeek';

export default function WeekBelt(props: WeekNumberProps): JSX.Element {
    const { datesByYearAndWeek } = useDatesByYearAndWeek();
    const { week } = props;
    const belt = getBelt(week, datesByYearAndWeek);
    const color = belt >= 4
        ? 'text-green-500 dark:text-green-400'
        : belt >= 3.5
            ? 'text-yellow-500 dark:text-yellow-400'
            : 'text-red-500 dark:text-red-400';

    return <td {...props} className={`${props.className} ${color}`}>{belt.toFixed(1)}</td>;
}