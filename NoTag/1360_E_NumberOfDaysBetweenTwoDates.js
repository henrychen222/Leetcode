/**
 * 8.7 night
 * https://leetcode.com/problems/number-of-days-between-two-dates/
 * 
 * use code from 1185
 */

// Accepted --- 80ms 37.2MB 53.37%
const daysBetweenDates = (date1, date2) => {
    let data1 = getYMD(date1);
    let data2 = getYMD(date2);
    return Math.abs(IntervalWith1971(data1[0], data1[1], data1[2]) - IntervalWith1971(data2[0], data2[1], data2[2]));
};

const getYMD = (date) => {
    let date1_year = date.slice(0, 4);
    let date1_month = date.slice(5, 7);
    let date1_day = date.slice(date.length - 2);
    return [Number(date1_day), Number(date1_month), Number(date1_year)];
};

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
const IntervalWith1971 = (day, month, year) => {
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
    return totalDay;
};

const isLeapYear = (year) => {
    if (year % 400 == 0) return true;
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    return false;
};

const main = () => {
    let date1 = "2019-06-29",
        date2 = "2019-06-30";
    let date1_2 = "2020-01-15",
        date2_2 = "2019-12-31";
    console.log(daysBetweenDates(date1, date2));
    console.log(daysBetweenDates(date1_2, date2_2));
};

main()