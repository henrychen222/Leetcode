/**
 * 05/05/21 night
 * https://leetcode.com/problems/jump-game-ii/
 */

// Accepted --- 80ms 52.41%
// reference: https://zhongwen.gitbook.io/leetcode-report/hard/45.-jump-game-ii
const jump = (a) => {
    let n = a.length;
    let curEnd = maxReach = step = 0;
    for (let i = 0; i < n - 1; i++) {
        maxReach = Math.max(maxReach, i + a[i]);
        if (i == curEnd) {
            curEnd = maxReach;
            step++;
        }
    }
    return step;
};

/**
 * reference:
 * https://www.cnblogs.com/lichen782/p/leetcode_Jump_Game_II.html
 * https://zxi.mytechroad.com/blog/greedy/leetcode-45-jump-game-ii/
 */
// Accepted --- 80ms 52.41%
// change variable Submit again: Accepted --- 68ms 98.35%
const jump2 = (a) => {
    let n = a.length;
    let curEnd = maxReach = step = 0;
    for (let i = 0; i < n; i++) {
        if (i > curEnd) {
            curEnd = maxReach;
            step++;
        }
        maxReach = Math.max(maxReach, i + a[i]);
    }
    return step;
};

// don't know
const mi = Math.min;
const amin = (a) => mi.apply(Math, a);
let a, n, res, path;
const jump1 = (nums) => {
    a = nums;
    n = a.length;
    res = new Set();
    path = [];
    dfs(1);
    pr(res)
    return amin([...res][0]);
};

const dfs = (idx, pre) => {
    // pr(a[idx]);
    if (idx >= n || a[idx] == 0) {
        path = [];
        idx = pre;
        return;
    }
    if (idx == n - 1) {
        path.push(a[n - 1]);
        res.add(path);
        path = [];
        idx = pre;
        return;
    }
    path.push(a[idx]);
    for (let i = idx + 1; i <= idx + a[idx]; i++) {
        // pr("next", idx + 1, "end", idx + a[idx]);
        dfs(i, idx);
    }
};

const pr = console.log;

const main = () => {
    let nums = [2, 3, 1, 1, 4];
    let num2 = [2, 3, 0, 1, 4];
    let debug1 = [0];
    let debug2 = [1, 2];
    pr(jump(nums));
    pr(jump(num2));
    pr(jump(debug1)); // 0
    pr(jump(debug2)); // 1
};

main()