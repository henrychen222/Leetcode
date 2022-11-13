/**
 * 04/17/21 morning
 * https://leetcode.com/contest/biweekly-contest-50/problems/minimum-operations-to-make-the-array-increasing/
 */

const pr = console.log;

// Accepted
const minOperations = (a) => {
    let n = a.length;
    let res = 0;
    for (let i = 1; i < n; i++) {
        let before = a[i];
        if (a[i - 1] >= a[i]) {
            a[i] = a[i - 1] + 1;
            res += a[i] - before;
            // pr(a[i], before);
        }
    }
    // pr(a, res)
    return res;
};

const main = () => {
    let nums = [1, 1, 1];
    let nums2 = [1, 5, 2, 4, 1];
    let nums3 = [8];
    pr(minOperations(nums))
    pr(minOperations(nums2))
    pr(minOperations(nums3))
};

main()