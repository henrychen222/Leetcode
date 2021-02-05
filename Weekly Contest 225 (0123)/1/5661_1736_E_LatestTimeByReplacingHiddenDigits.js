/**
 * 1.23 evening
 * https://leetcode.com/contest/weekly-contest-225/problems/latest-time-by-replacing-hidden-digits/
 */

// Accepted
const maximumTime = (time) => {
    let res = '';
    let n = time.length;
    for (let i = 0; i < n; i++) {
        if (time[i] == '?') {
            if (i == 0) {
                if (time[i + 1] >= 4) {
                    res += '1';
                    continue;
                }
                res += '2';
            } else if (i == 1) {
                if (time[i - 1] == '2') {
                    res += '3';
                } else if (time[i - 1] == '0' || time[i - 1] == '1') {
                    res += '9';
                } else if (time[i - 1] == '?') {
                    if (res[i - 1] == '2') {
                        res += '3'
                    } else if (res[i - 1] == '0' || res[i - 1] == '1') {
                        res += '9';
                    }
                }
            } else if (i == 3) {
                res += '5';
            } else if (i == 4) {
                res += '9';
            }
        } else {
            res += time[i];
        }
        // console.log(res);
    }
    return res;
};

const main = () => {
    let time = "2?:?0";
    let time2 = "0?:3?";
    let time3 = "1?:22";
    let debug1 = "??:3?";
    let debug2 = "?4:03";
    console.log(maximumTime(time));
    console.log(maximumTime(time2));
    console.log(maximumTime(time3));
    console.log(maximumTime(debug1)); // "23:39"
    console.log(maximumTime(debug2));

};

main()