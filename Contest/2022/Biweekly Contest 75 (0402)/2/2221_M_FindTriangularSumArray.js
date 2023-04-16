/**
 * 04/02/22 morning
 * https://leetcode.com/contest/biweekly-contest-75/problems/find-triangular-sum-of-an-array/
 */

const pr = console.log;

// Accepted
const triangularSum = (a) => {
    while (a.length != 1) {
        let b = [];
        for (let i = 0; i < a.length - 1; i++) b.push((a[i] + a[i + 1]) % 10);
        a = b;
    }
    return a[0];
};

const main = () => {
    let nums = [1, 2, 3, 4, 5];
    let nums2 = [5];
    pr(triangularSum(nums))
    pr(triangularSum(nums2))
};

main()