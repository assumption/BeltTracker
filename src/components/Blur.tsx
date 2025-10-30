import { type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import useShowImportModal from '../hooks/useShowImportModal';

export default function Blur(): JSX.Element {
    const { setExpanded } = useSideBarExpand();
    const { showModal, setShowModal } = useShowImportModal();
    const handleClick = () => {
        setExpanded(false);
        setShowModal(false);
    }

    return (
        <div
            onClick={handleClick}
            className={`${showModal ? 'z-3' : 'z-2'} fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300`}>
        </div>
    );
}