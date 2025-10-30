import { useState, type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import useDates from '../hooks/useDates';
import XIcon from './icons/XIcon';
import ClearIcon from './icons/ClearIcon';

export default function ClearButton(): JSX.Element {
    const { expanded } = useSideBarExpand();
    const { setDates } = useDates();
    const [cleared, setCleared] = useState(false);
    const handleClear = (): void => {
        setDates([]);
        setCleared(true);
        setTimeout(() => setCleared(false), 1500);
    };

    return (
        <button
            title="Clear Dates"
            onClick={handleClear}
            className='w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-active:from-pink-500 group-active:to-orange-400 active:text-white dark:text-white'>
            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-gray-800 group-active:bg-transparent group-active:dark:bg-transparent flex justify-center'>
                {cleared ? <XIcon /> : <ClearIcon />}
                {expanded && 'Clear Dates'}
            </span>
        </button>
    );
}