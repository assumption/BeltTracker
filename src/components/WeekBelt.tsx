import { type JSX } from 'react';
import type { WeekNumberProps } from 'react-day-picker';
import useDatesByWeek from '../hooks/useDatesByWeek';
import { getBelt } from '../utils/datesByWeek';

export default function WeekBelt(props: WeekNumberProps): JSX.Element {
    const { datesByWeek } = useDatesByWeek();
    const { week } = props;
    const belt = getBelt(week.weekNumber, datesByWeek);
    const color = belt >= 4 ? 'text-green-400' : belt >= 3.5 ? 'text-yellow-400' : 'text-red-400';

    return <td {...props} className={`${props.className} ${color}`}>{belt.toFixed(1)}</td>;
}