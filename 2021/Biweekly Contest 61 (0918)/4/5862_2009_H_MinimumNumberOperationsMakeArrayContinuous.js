/**
 * 09/18/21 morning
 * https://leetcode.com/contest/biweekly-contest-61/problems/minimum-number-of-operations-to-make-array-continuous/
 */

const pr = console.log;

// Accepted --- 268ms
// reference: int65536
const minOperations = (a) => {
    let m = a.length;
    a = [...new Set(a)].sort((x, y) => x - y);
    let n = a.length, right = 0, max = 0;
    // pr(a);
    for (let i = 0; i < n; i++) {
        while (right < n && a[right] - a[i] < m) right++;
        max = Math.max(max, right - i);
    }
    return m - max;
};

const main = () => {
    let nums = [4, 2, 5, 3];
    let nums2 = [1, 2, 3, 5, 6];
    let nums3 = [1, 10, 100, 1000];
    pr(minOperations(nums))
    pr(minOperations(nums2))
    pr(minOperations(nums3))
};

main()
