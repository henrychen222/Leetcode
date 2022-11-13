/**
 * 07/03/21 evening
 * https://leetcode.com/contest/weekly-contest-248/problems/build-array-from-permutation/
 */


// Accepted
const buildArray = (a) => {
    let n = a.length;
    let res = Array(n).fill(-1);
    for (let i = 0; i < n; i++) res[i] = a[a[i]];
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [0, 2, 1, 5, 3, 4];
    let nums2 = [5, 0, 1, 2, 3, 4];
    pr(buildArray(nums))
    pr(buildArray(nums2))
};

main()