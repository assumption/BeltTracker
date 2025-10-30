import { useAtom, useSetAtom } from 'jotai';
import { isSideBarClosingAtom, setShowSideBarExpandedAtom, showSideBarExpandedAtom, startSideBarClosingAtom } from '../atoms/sideBarExpandAtom';

export default function useSideBarExpand() {
    const [showSideBarExpanded] = useAtom(showSideBarExpandedAtom);
    const [isSideBarClosing] = useAtom(isSideBarClosingAtom);
    const setShowSideBarExpanded = useSetAtom(setShowSideBarExpandedAtom);
    const startSideBarClosing = useSetAtom(startSideBarClosingAtom);

    return {
        showSideBarExpanded,
        isSideBarClosing,
        setShowSideBarExpanded,
        startSideBarClosing,
    };
}
