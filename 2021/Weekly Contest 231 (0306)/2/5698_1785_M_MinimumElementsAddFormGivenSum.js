/**
 * 03/06/21 evening
 * https://leetcode.com/contest/weekly-contest-231/problems/make-the-xor-of-all-segments-equal-to-zero/
 * 
 * https://stackoverflow.com/questions/41201825/c-how-to-find-the-minimum-number-of-elements-from-a-vector-that-sum-to-a-given
 * https://math.stackexchange.com/questions/1391020/minimum-number-of-elements-required-to-make-sum
 * https://medium.com/@neroxiao/dynamic-programming-problems-e00d7f7cf1d6
 * https://www.geeksforgeeks.org/minimum-count-of-numbers-required-from-given-array-to-represent-s/
 */

const pr = console.log;

// don't know
const abs = Math.abs;
const mi = Math.min;
const minElements = (num, limit, goal) => {
    let s = goal - num.reduce((x, y) => x + y);
    let a = [];
    for (let i = -limit; i <= limit; i++) {
        a.push(i);
    }
    pr(s, a);
    let n = a.length;
    // return dfs(addSum, a);
    // return dfs(s, a, n, []); 
    return go(s, a)
};

const go = (s, a) => {
    let n = a.length;
    let dp = Array(n).fill(0);
    for (let i = 0; i <= abs(s); i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
        dp[0] = 0;
        for (let j = 0; j <= n - 1; j++) {
            if (a[j] <= i && (dp[i - a[j]] + 1 < dp[i])) {
                dp[i] = dp[i - a[j]] + 1;
            }
        }
    }
    pr(dp);
    return dp[abs(s)];
};

// const go = (s, a) => {
//     let n = a.length;
//     let dp = Array(n).fill(0);
//     for (let i = 0; i <= abs(s); i++) {
//         dp[i] = Number.MAX_SAFE_INTEGER;
//         dp[0] = 0;
//         for (let j = 0; j <= n - 1; j++) {
//             if (a[j] <= i && (dp[i - a[j]] + 1 < dp[i])) {
//                 dp[i] = dp[i - a[j]] + 1;
//             }
//         }
//     }
//     pr(dp);
//     return dp[abs(s)];
// };


// const dfs = (sum, a, n, v) => {
//     if (sum == 0) return v.length; 
//     if (sum < 0) return Number.MAX_SAFE_INTEGER; 
//     if (n == 0) return Number.MAX_SAFE_INTEGER; 
//     let x = dfs(s, a, n - 1, v); 
//     v.push(a[n - 1]); 
//     let y = dfs(sum - arr[n - 1], a, n, v); 
//     return mi(x, y); 
// };

// const dfs = (s, a) => {
//     let best = Number.MAX_SAFE_INTEGER;
//     let next = [...a];
//     next.pop();
//     let n = next.length;
//     for (let i = n - 1; ~i; i--) {
//         res = dfs(s - next[i], next) + 1;
//         if (res < best) best = res;
//     }
//     return best;
// };

const initialize2DArrayNew = (m, n) => {
    pr(m, n)
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let nums = [1, -1, 1], limit = 3, goal = -4;
    let nums2 = [1, -10, 9, 1], limit2 = 100, goal2 = 0;
    pr(minElements(nums, limit, goal));
    // pr(minElements(nums2, limit2, goal2));
};

main()