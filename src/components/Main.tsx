import { type JSX } from 'react';
import Calendar from './Calendar';
import Blur from './Blur';
import ImportModal from './ImportModal';
import HelpModal from './HelpModal';

export default function Main(): JSX.Element {
    return (
        <main className='flex-grow pt-16 ml-20'>
            <Calendar />
            <Blur />
            <ImportModal />
            <HelpModal />
        </main>
    );
}