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

export default function Calendar(): JSX.Element {
    const { dates, toggleDate } = useDates();
    const defaultClassNames = getDefaultClassNames();
    const screenWidth = useScreenWidth();
    const numberOfMonths = screenWidth < 630 ? 1 : screenWidth < 920 ? 2 : 3;
    const [month, setMonth] = useState(new Date());
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

    return (
        <div {...swipeHandlers}>
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
                    today: `text-blue-400 font-bold`,
                    selected: `text-red-400`,
                    chevron: `fill-blue-400 hover:fill-blue-200 active:fill-blue-200 transition-colors duration-200`,
                    weekday: `font-normal text-gray-300 text-base`,
                    week_number_header: `font-normal text-gray-300 text-base`,
                    week_number: `font-normal text-gray-300 text-base text-center`,
                    day: `${defaultClassNames.day} hover:bg-gray-800 active:bg-gray-800 transition-colors duration-200 text-xl rounded-full`,
                }}
            />
        </div>
    );
}