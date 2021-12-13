/**
 * 12/1/21 evening
 * https://leetcode.com/problems/jump-game/
 */

// Accepted --- 80ms 92.89%
let a, n, memo
const canJump = (A) => {
    a = A, n = a.length, memo = new Set();
    if (n == 1) return true;
    return dfs(n - 1);
};

const dfs = (cur) => {
    // pr("cur", cur);
    if (memo.has(cur)) return false;
    if (cur == 0) return true;
    for (let i = cur - 1; i >= 0; i--) { // looking for next pre step
        if (i + a[i] >= cur) {
            if (dfs(i)) {
                return true; // find pre step
            }
        }
    }
    memo.add(cur); // cannot find pre step, set cur to false (cannot reach to current)
    // pr("cur end", false)
    return false;
};

const pr = console.log;
const main = () => {
    let nums = [2, 3, 1, 1, 4];
    let nums2 = [3, 2, 1, 0, 4];
    let debug1 = [0, 2, 3];
    let debug2 = [0];
    pr(canJump(nums))
    pr(canJump(nums2))
    pr(canJump(debug1)) // false
    pr(canJump(debug2)) // true
};

main()