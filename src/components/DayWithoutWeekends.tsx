import { type JSX } from 'react';
import type { DayProps } from 'react-day-picker';

export default function DayWithoutWeekends(props: DayProps): JSX.Element {
    if (props.day.date.getDay() === 0 || props.day.date.getDay() === 6) {
        return <></>;
    }

    return <td {...props} />;
}