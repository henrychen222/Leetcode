/**
 * 1.30 evening
 * https://leetcode.com/contest/weekly-contest-226/problems/maximum-number-of-balls-in-a-box/
 */

// Accepted
const countBalls = (lowLimit, highLimit) => {
    let res = Array(highLimit).fill(0);
    for (let i = lowLimit; i <= highLimit; i++) {
        let s = i.toString().split('');
        let sum = 0;
        for (const c of s) {
            sum += Number(c);
        }
        res[sum - 1]++;
    }
    // console.log(res);
    return Math.max.apply(Math, res);
};

const main = () => {
    let lowLimit = 1, highLimit = 10;
    let lowLimit2 = 5, highLimit2 = 15;
    let lowLimit3 = 19, highLimit3 = 28;
    let lowLimit_debug1 = 4, highLimit_debug2 = 7;
    console.log(countBalls(lowLimit, highLimit));
    console.log(countBalls(lowLimit2, highLimit2));
    console.log(countBalls(lowLimit3, highLimit3));
    console.log(countBalls(lowLimit_debug1, highLimit_debug2));
};

main()