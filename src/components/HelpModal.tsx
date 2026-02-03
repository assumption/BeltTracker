import { type JSX } from 'react';
import useShowHelpModal from '../hooks/useShowHelpModal';

export default function HelpModal(): JSX.Element {
    const { showHelpModal, isHelpModalClosing, startHelpModalClosing } = useShowHelpModal();

    if (!showHelpModal) {
        return <></>;
    }

    return (
        <div className='fixed inset-0 z-4 flex items-center justify-center pointer-events-none p-4'>
            <div className={`relative w-full max-w-md max-h-full rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 shadow-xl shadow-black/60 pointer-events-auto overflow-hidden transition-all flex flex-col
                    ${isHelpModalClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
                <div className='flex items-start justify-between border-b border-gray-300 dark:border-gray-800 px-4 py-3 flex-shrink-0'>
                    <div>
                        <h2 className='text-lg font-semibold text-black dark:text-white'>
                            How to Use Belt Tracker
                        </h2>
                        <p className='mt-1 text-xs text-gray-900 dark:text-gray-400'>
                            A simple tool for calculating your expected "Best Eight of Last Twelve" attendance score.
                        </p>
                    </div>

                    <button
                        onClick={() => startHelpModalClosing()}
                        className='ml-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white active:bg-gray-300 dark:active:bg-gray-800 active:text-black dark:active:text-white'
                        aria-label='Close help modal'
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

                <div className='px-4 py-4 overflow-y-auto'>
                    <ul className='space-y-3 text-sm text-gray-800 dark:text-gray-300'>
                        <li className='flex items-start'>
                            <span className='mr-2 text-blue-500'>•</span>
                            <span><strong>Click on a day</strong> in the calendar to mark it as completed. Click again to unmark it.</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='mr-2 text-blue-500'>•</span>
                            <span>Your Belt attendance scores will automatically update across all weeks as you select dates. The way the Belt metric works is, for any given week, take the attendance of each of the previous 12 weeks. Attendance for a day is counted by having at least 1 badge-in into any Microsoft facility. Attendance for a week can be no greater than 5. Attendance on weekends is counted, but remember, no more than 5 for a week. I have left out Weekend selection as an opinionated UX decision. Take the 8 best weeks (i.e. the weeks with the 8 highest scores) and average them to get your Belt score. This is how the Belt metric works and this is how this program calculates your Belt for every single week.</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='mr-2 text-blue-500'>•</span>
                            <span>If you click a date and see nothing happening, remember, your 4 lowest weeks get discarded! So this is expected! Click 5 consecutive Mondays and see your Belt score lower.</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='mr-2 text-blue-500'>•</span>
                            <span><strong>Export</strong> your data as JSON to back up your progress or transfer it to another device using the Export button in the Side Bar.</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='mr-2 text-blue-500'>•</span>
                            <span><strong>Import</strong> previously exported JSON data to restore your progress using the Import button in the Side Bar.</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='mr-2 text-blue-500'>•</span>
                            <span><strong>Clear Dates</strong> will remove all tracked dates using the Clear button in the Side Bar.</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='mr-2 text-blue-500'>•</span>
                            <span>Your data is stored locally in your browser and persists between sessions. There is no backend server involved, so your data remains private. Visit <a href="https://github.com/assumption/BeltTracker" className="text-blue-500 underline">GitHub</a> for the source.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
