import { type JSX } from 'react';
import useSideBarExpand from '../../hooks/useSideBarExpand';

export default function ClearIcon(): JSX.Element {
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
                d='M5 7h14'
            />
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2'
            />
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 7v12a2 2 0 002 2h8a2 2 0 002-2V7'
            />
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10 11v6m4-6v6'
            />
        </svg>
    );
}