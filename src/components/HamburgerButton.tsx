import { type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import HamburgerIcon from './icons/HamburgerIcon';
import CollapseIcon from './icons/CollapseIcon';

export default function HamburgerButton(): JSX.Element {
    const { showSideBarExpanded, setShowSideBarExpanded } = useSideBarExpand();
    const toggleExpand = () => setShowSideBarExpanded(!showSideBarExpanded);

    return (
        <button
            title={showSideBarExpanded ? 'Collapse' : 'Expand'}
            onClick={toggleExpand}
            className='w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br group-active:from-pink-500 group-active:to-orange-400 active:text-white dark:text-white'>
            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-gray-300 group-hover:dark:bg-gray-800 group-active:bg-transparent group-active:dark:bg-transparent flex justify-center'>
                {showSideBarExpanded ? <CollapseIcon /> : <HamburgerIcon />}
            </span>
        </button>
    );
}