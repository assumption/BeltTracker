import { type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import useShowHelpModal from '../hooks/useShowHelpModal';
import QuestionMarkIcon from './icons/QuestionMarkIcon';

export default function HelpButton(): JSX.Element {
    const { showSideBarExpanded } = useSideBarExpand();
    const { setShowHelpModal } = useShowHelpModal();

    const handleClick = (): void => {
        setShowHelpModal(true);
    };

    return (
        <button
            title='Help'
            onClick={handleClick}
            className='w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-slate-500 to-gray-400 group-active:from-slate-500 group-active:to-gray-400 active:text-white dark:text-white'>
            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-gray-300 group-hover:dark:bg-gray-800 group-active:bg-transparent group-active:dark:bg-transparent flex justify-center'>
                <QuestionMarkIcon />
                {showSideBarExpanded && 'Help'}
            </span>
        </button>
    );
}
