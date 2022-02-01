/**
 * 01/31/22 night
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * 
 * https://leetcode.com/contest/weekly-contest-215/ranking
 */
const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted --- 277ms prefix sum
// reference: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/discuss/935935/Java-Detailed-Explanation-O(N)-Prefix-SumMap-Longest-Target-Sub-Array
const minOperations = (a, x) => {
    let n = a.length, tot = sm(a), target = tot - x, m = new Map([[0, -1]]);
    if (target == 0) return n;
    let sum = 0, res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        sum += a[i];
        if (m.has(sum - target)) {
            let l = m.get(sum - target);
            // pr(l, i);
            res = Math.max(res, i - l);
        }
        m.set(sum, i);
    }
    return res == Number.MIN_SAFE_INTEGER ? -1 : n - res;
};

// Accepted --- 84ms 100%  sliding window
// reference: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/discuss/935974/C-Sliding-window-O(n)-Time-O(1)-Space
const minOperations2 = (a, x) => {
    let n = a.length, tot = sm(a), sum = tot - x;
    if (sum < 0) return -1;
    if (sum == 0) return n;
    let len = maxSubArraySumLen_NoNegative(a, sum), res = n - len;
    // pr("len", len, "sum", sum, "res", res)
    return len == Number.MIN_SAFE_INTEGER ? -1 : res;
};

const maxSubArraySumLen_NoNegative = (a, t) => {
    let n = a.length, max = Number.MIN_SAFE_INTEGER, sum = 0, l = 0;
    for (let i = 0; i < n; i++) { // move right pointer
        if (sum < t) sum += a[i];
        while (sum >= t) { // move left pointer
            if (sum == t) max = Math.max(max, i - l + 1);
            sum -= a[l++];
        }
    }
    // pr("max", max);
    return max;
};

// TLE
let res, a;
const minOperations1 = (A, x) => {
    a = A;
    res = Number.MAX_SAFE_INTEGER;
    let cur = x;
    dfs(0, cur, 0, a.length - 1);
    return res > a.length ? -1 : res;
};

const dfs = (step, x, i, j) => {
    if (i > j) return;
    if (x == 0) {
        res = Math.min(res, step);
        return;
    }
    if (x >= a[i]) dfs(step + 1, x - a[i], i + 1, j);
    if (x >= a[j]) dfs(step + 1, x - a[j], i, j - 1);
};

const main = () => {
    let nums = [1, 1, 4, 2, 3],
        x = 5;
    let nums2 = [5, 6, 7, 8, 9],
        x2 = 4;
    let nums3 = [3, 2, 20, 1, 1, 3],
        x3 = 10;
    let num_debug1 = [1, 1],
        x_debug1 = 3;
    let num_debug2 = [8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309],
        x_debug2 = 134365;
    pr(minOperations(nums, x)) // 2
    pr(minOperations(nums2, x2)) // -1
    pr(minOperations(nums3, x3)) // 5
    pr(minOperations(num_debug1, x_debug1)) // -1
    pr(minOperations(num_debug2, x_debug2)) // 16
};

main()