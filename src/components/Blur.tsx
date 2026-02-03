import { type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import useShowImportModal from '../hooks/useShowImportModal';
import useShowHelpModal from '../hooks/useShowHelpModal';

export default function Blur(): JSX.Element {
    const { showSideBarExpanded, isSideBarClosing, startSideBarClosing } = useSideBarExpand();
    const { showModal, isModalClosing, startModalClosing } = useShowImportModal();
    const { showHelpModal, isHelpModalClosing, startHelpModalClosing } = useShowHelpModal();

    const shouldRender = showModal
        || showHelpModal
        || showSideBarExpanded
        || isModalClosing
        || isHelpModalClosing
        || isSideBarClosing;
    if (!shouldRender) {
        return <></>;
    }

    const handleClick = () => {
        if (showModal && !isModalClosing) {
            startModalClosing();
        }
        if (showHelpModal && !isHelpModalClosing) {
            startHelpModalClosing();
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
                ${isModalClosing || isHelpModalClosing || isSideBarClosing ? 'opacity-0' : 'opacity-100'}
                ${showModal || showHelpModal ? 'z-3' : 'z-2'}
            `}>
        </div>
    );
}