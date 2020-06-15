/**
 * 6.13 night
 * https://leetcode.com/problems/reverse-integer/
 */

// Accepted --- 72ms 32.8MB 42.86%
const dayOfYear = (date) => {
    let year = Number(date.slice(0, 4));
    let month = Number(date.slice(5, 7));
    let day = Number(date.slice(8, 10));
    return transferMonthToDay(year, month) + day;
};

const transferMonthToDay = (year, month) => {
    let day = 0;
    switch (month) {
        case 1:
            break;
        case 2:
            day = 31;
            break;
        case 3:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29;
            } else {
                day = 31 + 28;
            }
            break;
        case 4:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31;
            } else {
                day = 31 + 28 + 31;
            }
            break;
        case 5:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30;
            } else {
                day = 31 + 28 + 31 + 30;
            }
            break;
        case 6:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30 + 31;
            } else {
                day = 31 + 28 + 31 + 30 + 31;
            }
            break;
        case 7:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30 + 31 + 30;
            } else {
                day = 31 + 28 + 31 + 30 + 31 + 30;
            }
            break;
        case 8:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30 + 31 + 30 + 31;
            } else {
                day = 31 + 28 + 31 + 30 + 31 + 30 + 31;
            }
            break;
        case 9:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
            } else {
                day = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
            }
            break;
        case 10:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
            } else {
                day = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
            }
            break;
        case 11:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
            } else {
                day = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
            }
            break;
        case 12:
            if (year % 4 == 0 && year % 100 != 0) {
                day = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
            } else {
                day = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
            }
            break;
        default:
            break;
    }
    return day;
};

const main = () => {
    let date = "2019-01-09";
    let date2 = "2019-02-10";
    let date3 = "2003-03-01";
    let date4 = "2004-03-01";
    let debug1 = "1969-09-28";
    let debug2 = "1900-03-25";
    console.log(dayOfYear(date));
    console.log(dayOfYear(date2));
    console.log(dayOfYear(date3));
    console.log(dayOfYear(date4));
    console.log(dayOfYear(debug1));
    console.log(dayOfYear(debug2)); // 84
};

main()