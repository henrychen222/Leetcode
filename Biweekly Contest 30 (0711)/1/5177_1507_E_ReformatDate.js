/**
 * 7.11 morning
 * https://leetcode.com/contest/biweekly-contest-30/problems/reformat-date/
 * https://leetcode.com/problems/reformat-date/discuss/730736/javascript-solution
 */

// Accepted
const reformatDate = (date) => {
    let arr = date.split(" ");
    let year = arr[arr.length - 1];
    if (arr[1] == 'Jan') {
        month = '01';
    }else if (arr[1] == 'Feb') {
        month = '02';
    }
    else if (arr[1] == 'Mar') {
        month = '03';
    }
    else if (arr[1] == 'Apr') {
        month = '04';
    }
    else if (arr[1] == 'May') {
        month = '05';
    }
    else if (arr[1] == 'Jun') {
        month = '06';
    }
    else if (arr[1] == 'Jul') {
        month = '07';
    }
    else if (arr[1] == 'Aug') {
        month = '08';
    }
    else if (arr[1] == 'Sep') {
        month = '09';
    }
    else if (arr[1] == 'Oct') {
        month = '10';
    }
    else if (arr[1] == 'Nov') {
        month = '11';
    }
    else if (arr[1] == 'Dec') {
        month = '12';
    }
    let day;
    if (arr[0][1] == 's' || arr[0][1] == 'n' || arr[0][1] == 't' || arr[0][1] == 'r') {
        day = '0' + arr[0][0];
    } else {
        day = arr[0].slice(0, 2);
    }
    return year + '-' + month + '-' + day;
};

const main = () => {
    let date = "20th Oct 2052";
    let date2 = "6th Jun 1933";
    let date3 = "26th May 1960";
    let debug1 = "3rd Jun 1998";
    console.log(reformatDate(date));
    console.log(reformatDate(date2));
    console.log(reformatDate(date3));
    console.log(reformatDate(debug1));
};

main()