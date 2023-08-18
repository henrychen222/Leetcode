/*
 * 07/08/23 evening
 * https://leetcode.com/contest/weekly-contest-353/problems/longest-non-decreasing-subarray-from-two-arrays/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(1));

// Accepted
// reference: liouzhou_101 uwi https://leetcode.cn/circle/discuss/6cb8Km/
const maxNonDecreasingLength = (a, b) => {
    let n = a.length, f = initialize2DArray(2, n);
    for (let i = 1; i < n; i++) {
        // f[0][i]: LIS ending in a[i], f[1][i]: LIS ending in b[i]
        if (a[i] >= a[i - 1]) f[0][i] = Math.max(f[0][i], f[0][i - 1] + 1);
        if (a[i] >= b[i - 1]) f[0][i] = Math.max(f[0][i], f[1][i - 1] + 1);
        if (b[i] >= b[i - 1]) f[1][i] = Math.max(f[1][i], f[1][i - 1] + 1);
        if (b[i] >= a[i - 1]) f[1][i] = Math.max(f[1][i], f[0][i - 1] + 1);
    }
    // pr(f)
    return Math.max(Math.max(...f[0], Math.max(...f[1])))
};

///////////////////////////////////////////////////////////
// WA
const maxNonDecreasingLength1 = (a, b) => {
    let c = [], n = a.length;
    for (let i = 0; i < n; i++) {
        let low = Math.min(a[i], b[i]), high = Math.max(a[i], b[i]), pre = c[c.length - 1] || -1;
        // pr(c, low, high)
        if (low >= pre) {
            c.push(low);
        } else {
            if (high < pre) {
                c.push(low);
            } else {
                c.push(high);
            }
        }
    }
    pr(c, LIS_subarray(c))
    return LIS_subarray(c);
};

// https://www.geeksforgeeks.org/longest-increasing-subarray/
const LIS_subarray = (a) => {
    let max = 1, len = 1, n = a.length;
    for (let i = 1; i < n; i++) {
        if (a[i] >= a[i - 1]) {
            len++;
        } else {
            max = Math.max(max, len);
            len = 1;
        }
    }
    max = Math.max(max, len);
    return max;
};

const main = () => {
    let a = [2, 3, 1], b = [1, 2, 1];
    let a2 = [1, 3, 2, 1], b2 = [2, 2, 3, 4];
    let a3 = [1, 1], b3 = [2, 2];
    let a_debug1 = [8, 7, 4], b_debug1 = [13, 4, 4];
    let a_debug2 = [11, 7, 7, 9], b_debug2 = [19, 19, 1, 7];
    let a_debug3 =  [4,2], b_debug3 = [10,4];
    pr(maxNonDecreasingLength(a, b))
    pr(maxNonDecreasingLength(a2, b2))
    pr(maxNonDecreasingLength(a3, b3))
    pr(maxNonDecreasingLength(a_debug1, b_debug1)) // 2
    pr(maxNonDecreasingLength(a_debug2, b_debug2)) // 3
    pr(maxNonDecreasingLength(a_debug3, b_debug3)) // 2
};

main()

// pr(LIS_subarray([5, 6, 3, 5, 7, 8, 9, 1, 2]))