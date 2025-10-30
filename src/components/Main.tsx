import { type JSX } from 'react';
import Calendar from './Calendar';
import useSideBarExpand from '../hooks/useSideBarExpand';
import Blur from './Blur';
import useShowImportModal from '../hooks/useShowImportModal';
import ImportModal from './ImportModal';

export default function Main(): JSX.Element {
    const { expanded } = useSideBarExpand();
    const { showModal } = useShowImportModal();

    return (
        <main className='flex-grow pt-16 ml-20'>
            <Calendar />
            {(expanded || showModal) && <Blur /> }
            {showModal && <ImportModal />}
        </main>
    );
}