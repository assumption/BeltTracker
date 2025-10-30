import { useAtom, useSetAtom } from "jotai";
import { isModalClosingAtom, setShowModalAtom, showModalAtom, startModalClosingAtom } from "../atoms/showImportModalAtom";

export default function useShowImportModal() {
    const [showModal] = useAtom(showModalAtom);
    const [isModalClosing] = useAtom(isModalClosingAtom);
    const setShowModal = useSetAtom(setShowModalAtom);
    const startModalClosing = useSetAtom(startModalClosingAtom);

    return {
        showModal,
        isModalClosing,
        setShowModal,
        startModalClosing,
    };
}