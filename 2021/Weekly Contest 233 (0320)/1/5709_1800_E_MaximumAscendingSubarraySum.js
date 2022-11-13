/**
 * 03/20/21 evening
 * https://leetcode.com/contest/weekly-contest-233/problems/maximum-ascending-subarray-sum/
 */

const pr = console.log;

// Accepted
const mx = Math.max;
const maxAscendingSum = (a) => {
    let n = a.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = a.slice(i, j + 1);
            if (isAscending(sub)) {
                let sum = sub.reduce((x, y) => x + y);
                res = mx(res, sum);
            }
        }
    }
    return res;
};


const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const main = () => {
    let nums = [10, 20, 30, 5, 10, 50];
    let nums2 = [10, 20, 30, 40, 50];
    let nums3 = [12, 17, 15, 13, 10, 11, 12];
    let nums4 = [100, 10, 1];
    let debug1 = [3, 6, 10, 1, 8, 9, 9, 8, 9];
    pr(maxAscendingSum(nums));
    pr(maxAscendingSum(nums2));
    pr(maxAscendingSum(nums3));
    pr(maxAscendingSum(nums4));
    pr(maxAscendingSum(debug1)); // 19
};

main()