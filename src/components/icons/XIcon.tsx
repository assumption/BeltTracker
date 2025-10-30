import { type JSX } from 'react';
import useSideBarExpand from '../../hooks/useSideBarExpand';

export default function XIcon(): JSX.Element {
    const { showSideBarExpanded } = useSideBarExpand();

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className={`${showSideBarExpanded && 'mr-2'} w-5 h-5 flex-shrink-0 text-red-500 transition-all duration-200`}
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
    );
}
