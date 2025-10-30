import { type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';

export default function Blur(): JSX.Element {
    const { setExpanded } = useSideBarExpand();

    return (
        <div
            onClick={() => setExpanded(false)}
            className='fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 z-2'>
        </div>
    );
}