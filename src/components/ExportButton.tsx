import { useState, type JSX } from 'react';
import useSideBarExpand from '../hooks/useSideBarExpand';
import useDates from '../hooks/useDates';
import { getStringToStore } from '../utils/storage';
import ExportIcon from './icons/ExportIcon';
import CheckIcon from './icons/CheckIcon';

export default function ExportButton(): JSX.Element {
    const { expanded } = useSideBarExpand();
    const { dates } = useDates();
    const [copied, setCopied] = useState(false);
    const handleExport = async () => {
        const exportString = getStringToStore(dates);
        await navigator.clipboard.writeText(exportString);

        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <button
            title="Export To Clipboard"
            onClick={handleExport}
            className='w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-active:from-cyan-500 group-active:to-blue-500 active:text-white dark:text-white'>
            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-gray-800 group-active:bg-transparent group-active:dark:bg-transparent flex justify-center'>
                {copied ? <CheckIcon /> : <ExportIcon />}
                {expanded && 'Export To Clipboard'}
            </span>
        </button>
    );
}