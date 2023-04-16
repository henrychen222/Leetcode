/**
 * 05/15/21 morning
 * https://leetcode.com/contest/biweekly-contest-52/problems/sum-of-floored-pairs/
 */

const pr = console.log;

// Accepted
// reference: https://www.geeksforgeeks.org/sum-of-floor-division-of-all-pairs-from-given-array/
const N = 3e5;
const MOD = 1e9 + 7;
const sumOfFlooredPairs = (a) => {
    let n = a.length;
    let freq  = Array(N).fill(0);
    let preFreq  = Array(N).fill(0);
    for (let  i = 0; i < n; i++) freq[a[i]]++;
    for (let i = 1; i < N; i++) preFreq[i] = preFreq[i - 1] + freq[i];
    let  res = 0;
    for (let  i = 1; i < N; i++) {
        for (let  j = i; j < N; j += i) {
            let X = (preFreq[j - 1] - preFreq[Math.abs(j - i - 1)]);
            res += X * ((j / i >> 0) - 1) * freq[i];
        }
    }
    return res % MOD;
};

const main = () => {
    let nums = [2, 5, 9];
    let nums2 = [7, 7, 7, 7, 7, 7, 7];
    pr(sumOfFlooredPairs(nums));
    pr(sumOfFlooredPairs(nums2));
};

main()