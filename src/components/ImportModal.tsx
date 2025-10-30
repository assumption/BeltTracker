import { useEffect, useState, type JSX } from 'react';
import useShowImportModal from '../hooks/useShowImportModal';
import useDates from '../hooks/useDates';
import { tryParseDates } from '../utils/storage';
import CheckIcon from './icons/CheckIcon';

export default function ImportModal(): JSX.Element {
    const { showModal, isModalClosing, startModalClosing } = useShowImportModal();
    const { dates, setDates } = useDates();
    const [text, setText] = useState<string>('');
    const [isImportValid, setIsImportValid] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (!showModal && !isModalClosing) {
            setText('');
            setIsImportValid(false);
            setShowSuccess(false);
        }
    }, [showModal, isModalClosing]);

    if (!showModal) {
        return <></>;
    }

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        const { success, dates } = tryParseDates(value);

        setText(value)
        setIsImportValid(success);

        if (success) {
            setShowSuccess(true);
            setDates(dates);
            setTimeout(() => {
                startModalClosing();
            }, 1500);
        }
    }

    return (
        <div className='fixed inset-0 z-4 flex items-center justify-center pointer-events-none'>
            <div className={`relative w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 shadow-xl shadow-black/60 pointer-events-auto overflow-hidden transition-all
                    ${isModalClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
                <div className='flex items-start justify-between border-b border-gray-800 px-4 py-3'>
                    <div>
                        <h2 className='text-lg font-semibold text-white'>
                            Import Dates
                        </h2>
                        <p className='mt-1 text-xs text-gray-400'>
                            Paste the JSON you exported. This will overwrite existing data.
                        </p>
                    </div>

                    <button
                        onClick={() => startModalClosing()}
                        className='ml-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white'
                        aria-label='Close import modal'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='h-4 w-4'
                        >
                            <path d='M18 6L6 18' />
                            <path d='M6 6l12 12' />
                        </svg>
                    </button>
                </div>

                <div className="relative px-4 py-4 min-h-[8rem] flex flex-col justify-center">
                    {!showSuccess ? (
                        <>
                            <label
                                htmlFor="import-json"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                JSON
                            </label>

                            <textarea
                                id="import-json"
                                autoFocus
                                className={`${isImportValid || !text
                                    ? 'focus:border-blue-400 focus:ring-blue-600/50'
                                    : 'focus:border-red-400 focus:ring-red-600/50'
                                    } focus:ring-2 h-40 w-full resize-none rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white outline-none ring-0 placeholder-gray-500`}
                                placeholder='["2025-10-14", "2025-10-15", "2025-10-16", "yyyy-mm-dd"]'
                                value={text}
                                onChange={onChange}
                            />
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center transition-all duration-500 ease-out animate-fade-in">
                            <CheckIcon />
                            <p className="mt-2 text-green-400 text-sm font-medium">
                                {`Imported ${dates.length === 1 ? '1 date' : `${dates.length} dates`} successfully!`}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}