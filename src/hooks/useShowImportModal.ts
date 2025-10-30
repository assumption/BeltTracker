import { useAtom, useSetAtom } from 'jotai';
import { showImportModalAtom } from '../atoms/showImportModalAtom';

export default function useShowImportModal() {
    const [showModal] = useAtom(showImportModalAtom);
    const setShowModal = useSetAtom(showImportModalAtom);

    return { showModal, setShowModal };
}
