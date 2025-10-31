import { type JSX } from 'react';
import type { DayProps } from 'react-day-picker';
import { saturdayIndex, sundayIndex } from '../utils/date';

export default function DayWithoutWeekends(props: DayProps): JSX.Element {
    if (props.day.date.getDay() === sundayIndex || props.day.date.getDay() === saturdayIndex) {
        return <></>;
    }

    return <td {...props} />;
}