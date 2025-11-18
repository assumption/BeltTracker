import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import useDates from '../hooks/useDates';
import { useState, type JSX } from 'react';
import WeekBelt from './WeekBelt';
import WeekBeltHeader from './WeekBeltHeader';
import DayWithoutWeekends from './DayWithoutWeekends';
import DayTitleWithoutWeekends from './DayTitleWithoutWeekends';
import { useScreenWidth } from '../hooks/useScreenWidth';
import { useSwipeable } from 'react-swipeable';
import { getStartingMonth } from '../utils/date';

export default function Calendar(): JSX.Element {
    const { dates, toggleDate } = useDates();
    const defaultClassNames = getDefaultClassNames();
    const screenWidth = useScreenWidth();
    const numberOfMonths = screenWidth < 630 ? 1 : screenWidth < 920 ? 2 : screenWidth < 1200 ? 3 : 4;
    const [month, setMonth] = useState(() => getStartingMonth(numberOfMonths));
    const shiftMonth = (delta: number) => {
        const nextMonth = new Date(month);
        nextMonth.setMonth(month.getMonth() + delta);
        setMonth(nextMonth);
    };
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => shiftMonth(1),
        onSwipedRight: () => shiftMonth(-1),
        preventScrollOnSwipe: true,
    });

    const handleWheel = (event: React.WheelEvent) => {
        if (event.ctrlKey) {
            return;
        }
        
        event.preventDefault();
        if (event.deltaY > 0) {
            shiftMonth(1);
        } else if (event.deltaY < 0) {
            shiftMonth(-1);
        }
    };

    return (
        <div {...swipeHandlers} onWheel={handleWheel}>
            <DayPicker
                key={dates.length}
                mode='multiple'
                month={month}
                selected={dates}
                weekStartsOn={1}
                required={false}
                navLayout='around'
                numberOfMonths={numberOfMonths}
                showWeekNumber
                showOutsideDays
                animate
                ISOWeek
                components={{
                    WeekNumber: WeekBelt,
                    WeekNumberHeader: WeekBeltHeader,
                    Day: DayWithoutWeekends,
                    Weekday: DayTitleWithoutWeekends,
                }}
                onNextClick={() => shiftMonth(1)}
                onPrevClick={() => shiftMonth(-1)}
                onDayClick={(date) => toggleDate(date)}
                classNames={{
                    today: `text-blue-500 dark:text-blue-400 font-bold`,
                    selected: `text-red-500 dark:text-red-400`,
                    chevron: `fill-blue-500 dark:fill-blue-400 hover:fill-blue-800 dark:hover:fill-blue-200 active:fill-blue-800 dark:active:fill-blue-200 transition-colors duration-200`,
                    weekday: `font-normal text-gray-700 dark:text-gray-300 text-base`,
                    week_number_header: `font-normal text-gray-700 dark:text-gray-300 text-base`,
                    week_number: `font-normal text-base text-center`,
                    day: `${defaultClassNames.day} hover:bg-gray-300 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-800 transition-colors duration-200 text-xl rounded-full`,
                    outside: `font-normal text-gray-400 dark:text-gray-500 text-base`,
                }}
            />
        </div>
    );
}