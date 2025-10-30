import { type JSX } from 'react';
import useSideBarExpand from '../../hooks/useSideBarExpand';

export default function CheckIcon(): JSX.Element {
    const { expanded } = useSideBarExpand();

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className={`${expanded && 'mr-2'} w-5 h-5 flex-shrink-0 text-green-500`}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 13l4 4L19 7'
            />
        </svg>
    );
}
