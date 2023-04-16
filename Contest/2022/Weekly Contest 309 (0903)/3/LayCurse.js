/*
* 09/04/22 evening
* https://leetcode.com/contest/weekly-contest-309/problems/longest-nice-subarray/
*/

const pr = console.log;

const longestNiceSubarray = (a) => {
    let n = a.length, res = 1;
    for (let i = 0; i < n; i++) {
        let cur = a[i];
        for (let j = i + 1; j < n && ((cur & a[j]) == 0); j++) {
            cur |= a[j];
            res = Math.max(res, j - i + 1);
        }
    }
    return res;
};

const main = () => {
    let a = [1, 3, 8, 48, 10]
    let a2 = [3, 1, 5, 11, 13];
    pr(longestNiceSubarray(a))
    pr(longestNiceSubarray(a2))
};

main()