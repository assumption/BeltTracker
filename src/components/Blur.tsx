import { type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import useShowImportModal from '../hooks/useShowImportModal';

export default function Blur(): JSX.Element {
    const { showSideBarExpanded, isSideBarClosing, startSideBarClosing } = useSideBarExpand();
    const { showModal, isModalClosing, startModalClosing } = useShowImportModal();

    const shouldRender = showModal
        || showSideBarExpanded
        || isModalClosing
        || isSideBarClosing;
    if (!shouldRender) {
        return <></>;
    }

    const handleClick = () => {
        if (showModal && !isModalClosing) {
            startModalClosing();
        }
        if (showSideBarExpanded && !isSideBarClosing) {
            startSideBarClosing();
        }
    }

    return (
        <div
            onClick={handleClick}
            className={`
                fixed inset-0 transition-opacity duration-300
                bg-black/30 backdrop-blur-sm
                ${isModalClosing || isSideBarClosing ? 'opacity-0' : 'opacity-100'}
                ${showModal ? 'z-3' : 'z-2'}
            `}>
        </div>
    );
}