/**
 * 05/25/21 evening
 * https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 */

// Accepted --- 92ms 57.46%
const kLengthApart = (a, k) => {
    let n = a.length;
    let pre;
    for (let i = 0; i < n; i++) {
        if (a[i] == 1) {
            // pr(a[i], pre, k)
            if (pre != undefined && i - pre - 1 < k) return 0;
            pre = i;
        }
    }
    return 1;
};

const pr = console.log;
const main = () => {
    let nums = [1, 0, 0, 1, 0, 1],
        k = 2;
    pr(kLengthApart(nums, k));
};

main()