import { useEffect, type JSX } from 'react';
import ImportButton from './ImportButton';
import ExportButton from './ExportButton';
import ClearButton from './ClearButton';
import HamburgerButton from './HamburgerButton';
import useSideBarExpand from '../hooks/useSideBarExpand';

export default function SideBar(): JSX.Element {
    const { expanded, setExpanded } = useSideBarExpand();
    useEffect(() => {
        if (!expanded) {
            return;
        }

        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setExpanded(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [expanded, setExpanded]);

    return (
        <div className={`${expanded ? 'w-64' : 'w-20'} transition-all duration-300 bg-gray-900 fixed top-0 left-0 h-full border-r border-gray-700 flex flex-col items-center py-4 space-y-4 px-4 z-3`}>
            <HamburgerButton />
            <ExportButton />
            <ImportButton />
            <ClearButton />
        </div>
    );
}