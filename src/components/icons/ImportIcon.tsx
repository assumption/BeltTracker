import { type JSX } from 'react';
import useSideBarExpand from '../../hooks/useSideBarExpand';

export default function ImportIcon(): JSX.Element {
    const { expanded } = useSideBarExpand();

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className={`${expanded && 'mr-2'} w-5 h-5 flex-shrink-0`}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M12 4v12M12 16l-4-4M12 16l4-4'
            />
        </svg>
    );
}