import { useEffect, type JSX } from 'react';
import ImportButton from './ImportButton';
import ExportButton from './ExportButton';
import ClearButton from './ClearButton';
import HelpButton from './HelpButton';
import HamburgerButton from './HamburgerButton';
import useSideBarExpand from '../hooks/useSideBarExpand';
import useShowImportModal from '../hooks/useShowImportModal';
import useShowHelpModal from '../hooks/useShowHelpModal';

export default function SideBar(): JSX.Element {
    const { showSideBarExpanded, startSideBarClosing } = useSideBarExpand();
    const { startModalClosing } = useShowImportModal();
    const { startHelpModalClosing } = useShowHelpModal();
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') {
                return;
            }

            startSideBarClosing();
            startModalClosing();
            startHelpModalClosing();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [showSideBarExpanded, startSideBarClosing, startModalClosing, startHelpModalClosing]);

    return (
        <div className={`${showSideBarExpanded ? 'w-64' : 'w-20'} transition-all duration-300 bg-gray-200 dark:bg-gray-900 fixed top-0 left-0 h-full border-r border-gray-300 dark:border-gray-700 flex flex-col items-center py-4 space-y-4 px-4 z-3`}>
            <HamburgerButton />
            <ExportButton />
            <ImportButton />
            <ClearButton />
            <HelpButton />
        </div>
    );
}