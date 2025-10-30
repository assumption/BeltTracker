import type { JSX } from 'react';

export default function WeekBeltHeader(props: React.HTMLProps<HTMLTableCellElement>): JSX.Element {
    return <th {...props} title='Office attendance (Best eight of last twelve weeks)'>Belt</th>;
}