import { useAtom, useSetAtom } from 'jotai';
import { isHelpModalClosingAtom, setShowHelpModalAtom, showHelpModalAtom, startHelpModalClosingAtom } from '../atoms/showHelpModalAtom';

export default function useShowHelpModal() {
    const [showHelpModal] = useAtom(showHelpModalAtom);
    const [isHelpModalClosing] = useAtom(isHelpModalClosingAtom);
    const setShowHelpModal = useSetAtom(setShowHelpModalAtom);
    const startHelpModalClosing = useSetAtom(startHelpModalClosingAtom);

    return {
        showHelpModal,
        isHelpModalClosing,
        setShowHelpModal,
        startHelpModalClosing,
    };
}
