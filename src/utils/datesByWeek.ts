const windowSize = 12;
const reducedWindowSize = 8;

function getWeekOffset(weekNumber: number, offset: number): number {
    return (weekNumber - offset) % 52;
}

function getAttendance(weekNumber: number, datesByWeek: Record<number, Date[]>): number {
    const dates = datesByWeek[weekNumber]?.filter(d => d.getDay() !== 0 && d.getDay() !== 6) || [];
    return Math.max(0, 5 - dates.length);
}

export function getBelt(weekNumber: number, datesByWeek: Record<number, Date[]>): number {
    const totalAttendance: number[] = []

    for (let i = 1; i <= windowSize; i++) {
        const attendance = getAttendance(getWeekOffset(weekNumber, i), datesByWeek);
        totalAttendance.push(attendance);
    }

    totalAttendance.sort((a, b) => b - a);
    const belt = totalAttendance.slice(0, reducedWindowSize);
    return belt.reduce((sum, val) => sum + val, 0) / belt.length;
}