import { type JSX } from 'react';
import Calendar from './Calendar';
import useSideBarExpand from '../hooks/useSideBarExpand';
import Blur from './Blur';

export default function Main(): JSX.Element {
    const { expanded } = useSideBarExpand();

    return (
        <main className='flex-grow pt-16 ml-20'>
            <Calendar />
            {expanded && <Blur /> }
        </main>
    );
}