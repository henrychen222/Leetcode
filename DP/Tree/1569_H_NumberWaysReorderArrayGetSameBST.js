/**
 * 09/16/21 moring   evening complete
 * https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
 */

const ll = BigInt;
const combination = (m, n) => { return factorial(m, n) / factorial(n, n); };
const factorial = (m, n) => { let num = 1n; let cnt = 0; for (let i = ll(m); i > 0; i--) { if (cnt == n) break; num *= i; cnt++; } return num; };

// Accepted --- 825ms 50.00%
// reference: https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/discuss/819326/Python-in-6-short-lines-with-easy-explanation
const mod = ll(1e9 + 7);
const numOfWays = (nums) => {
   return (dfs(nums) - 1n) % mod;
};

const dfs = (a) => {
   if (a.length <= 2) return 1n;
   let left = [], right = [];
   for (const x of a) if (x < a[0]) left.push(x);
   for (const x of a) if (x > a[0]) right.push(x);
   let ln = left.length, rn = right.length;
   return combination(ln + rn, rn) * dfs(left) * dfs(right);
};

const pr = console.log;
const main = () => {
    let nums = [2, 1, 3];
    let nums2 = [3, 4, 5, 1, 2];
    let nums3 = [1, 2, 3];
    let nums4 = [3, 1, 2, 5, 4, 6];
    let nums5 = [9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18];
    pr(numOfWays(nums))
    pr(numOfWays(nums2))
    pr(numOfWays(nums3))
    pr(numOfWays(nums4))
    pr(numOfWays(nums5))
};

main()