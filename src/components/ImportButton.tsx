import { type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import ImportIcon from './icons/ImportIcon';

export default function ImportButton(): JSX.Element {
    const { expanded } = useSideBarExpand();

    return (
        <div className='relative inline-block w-full'>
            <button
                title="Import Dates"
                className='w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-active:from-green-400 group-active:to-blue-600 active:text-white dark:text-white'>
                <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-gray-800 group-active:bg-transparent group-active:dark:bg-transparent flex justify-center'>
                    <ImportIcon />
                    {expanded && 'Import Dates'}
                </span>
            </button>
        </div>
    );
}