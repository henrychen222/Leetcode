/**
 * 8.6 night
 * https://leetcode.com/problems/day-of-the-week/
 */

// Accepted --- 64ms 36.7MB 88.83%
const dayOfTheWeek = (day, month, year) => {
    let data = [
        ['1971', '1', '1', 'Friday'],
        ['1971', '1', '2', 'Saturday'],
        ['1971', '1', '3', 'Sunday'],
        ['1971', '1', '4', 'Monday'],
        ['1971', '1', '5', 'Tuesday'],
        ['1971', '1', '6', 'Wednesday'],
        ['1971', '1', '7', 'Thursday']
    ]
    let normalMonthDay = new Map();
    normalMonthDay.set(1, 31);
    normalMonthDay.set(2, 28);
    normalMonthDay.set(3, 31);
    normalMonthDay.set(4, 30);
    normalMonthDay.set(5, 31);
    normalMonthDay.set(6, 30);
    normalMonthDay.set(7, 31);
    normalMonthDay.set(8, 31);
    normalMonthDay.set(9, 30);
    normalMonthDay.set(10, 31);
    normalMonthDay.set(11, 30);
    normalMonthDay.set(12, 31);
    let leapMonthDay = new Map();
    leapMonthDay.set(1, 31);
    leapMonthDay.set(2, 29);
    leapMonthDay.set(3, 31);
    leapMonthDay.set(4, 30);
    leapMonthDay.set(5, 31);
    leapMonthDay.set(6, 30);
    leapMonthDay.set(7, 31);
    leapMonthDay.set(8, 31);
    leapMonthDay.set(9, 30);
    leapMonthDay.set(10, 31);
    leapMonthDay.set(11, 30);
    leapMonthDay.set(12, 31);
    let totalDay = 0;
    for (let y = 1971; y <= year - 1; y++) {
        if (isLeapYear(y)) {
            totalDay += 366;
        } else {
            totalDay += 365;
        }
    }
    for (let m = 1; m <= month - 1; m++) {
        if (isLeapYear(year)) {
            totalDay += leapMonthDay.get(m);
        } else {
            totalDay += normalMonthDay.get(m);
        }
    }
    totalDay += day;
    let idx = totalDay % 7;
    if (idx == 0) return data[data.length - 1][3];
    return data[idx - 1][3];
};

const isLeapYear = (year) => {
    if (year % 400 == 0) return true;
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    return false;
};

const main = () => {
    let day = 31,
        month = 8,
        year = 2019;
    let day2 = 18,
        month2 = 7,
        year2 = 1999;
    let day3 = 15,
        month3 = 8,
        year3 = 1993;
    let day_debug1 = 20,
        month_debug1 = 1,
        year_debug1 = 2005;
    console.log(dayOfTheWeek(day, month, year)); // "Saturday"
    console.log(dayOfTheWeek(day2, month2, year2)); // "Sunday"
    console.log(dayOfTheWeek(day3, month3, year3)); // "Sunday"
    console.log(dayOfTheWeek(day_debug1, month_debug1, year_debug1)); // "Thursday"
};

main()