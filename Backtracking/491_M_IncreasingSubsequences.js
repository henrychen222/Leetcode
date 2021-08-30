/**
 * 08/29/21 night
 * https://leetcode.com/problems/increasing-subsequences/
 * 
 * read: bitmask
 * https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/
 * https://stackoverflow.com/questions/31575691/what-is-a-bitmask-and-a-mask
 * 
 * Similar problem
 * https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/discuss/1432132/javascript-bitmask-dp-144ms
 */

// Accepted --- 375ms 8.51%
const findSubsequences = (a) => {
    let res = new Set();
    let n = a.length;
    let N = 2 ** n;
    outer:
    for (let i = 0; i < N; i++) {
        let sub = [];
        for (let j = 0; j < n; j++) {
            // three ways to check if jth bit is set to 1
            // if (i << ~j < 0) {    // Accepted --- 362ms 8.51%
            // if (1 & (i >> j)) {  // Accepted --- 268ms  19.15%
            if (i & (1 << j)) {
                if (a[j] < sub[sub.length - 1]) continue outer;
                sub.push(a[j]);
            }
        }
        if (sub.length >= 2) res.add(JSON.stringify(sub));
    }
    return [...res].map(x => JSON.parse(x));
};

const pr = console.log;
const main = () => {
   let nums = [4,6,7,7];
   let nums2 = [4,4,3,2,1];
   pr(findSubsequences(nums))
   pr(findSubsequences(nums2))
};

main()