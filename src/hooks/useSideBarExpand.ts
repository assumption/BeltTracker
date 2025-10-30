import { useAtom, useSetAtom } from 'jotai';
import { sideBarExpandAtom } from '../atoms/sideBarExpandAtom';

export default function useSideBarExpand() {
    const [expanded] = useAtom(sideBarExpandAtom);
    const setExpanded = useSetAtom(sideBarExpandAtom);

    return { expanded, setExpanded };
}
