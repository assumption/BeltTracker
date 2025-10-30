import { type JSX } from 'react';
import type { WeekdayProps } from 'react-day-picker';

const saturdayTitle = 'Sa';
const sundayTitle = 'Su';

export default function DayTitleWithoutWeekends(props: WeekdayProps): JSX.Element {
    const title = props.children?.toString();

    if (title === saturdayTitle || title === sundayTitle) {
        return <></>;
    }

    return (
        <th {...props} />
    );
}