/**
 * 07/14/22 night
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 */

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];

// Accepted --- 94ms 80.84%
const numOfSubarrays = (a, k, threshold) => {
    let n = a.length, res = 0, pre = preSum(a);
    for (let i = 0; i < n; i++) {
        let l = i - k + 1, r = i + k - 1;
        // pr(a.slice(l, i + 1), a.slice(i, r + 1))
        if (l >= 0) {
            // pr("left", a.slice(l, i + 1))
            let sum = subArraySum(pre, l, i), avg = sum / k;
            if (avg >= threshold) res++;
        }
        if (r < n) {
            // pr("right", a.slice(i, r + 1))
            let sum = subArraySum(pre, i, r), avg = sum / k;
            if (avg >= threshold) res++;
        }
    }
    return res / 2;
};

const main = () => {
    let a = [2, 2, 2, 2, 5, 5, 5, 8], k = 3, threshold = 4;
    let a2 = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3], k2 = 3, threshold2 = 5;
    pr(numOfSubarrays(a, k, threshold))
    pr(numOfSubarrays(a2, k2, threshold2))
};

main()