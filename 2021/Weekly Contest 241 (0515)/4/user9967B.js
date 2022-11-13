/**
 * 05/15/21 evening
 * https://leetcode.com/contest/weekly-contest-241/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/
 */

const pr = console.log;


const mod = 1e9 + 7;

// Accepted --- 300ms
const rearrangeSticks = (n, k) => {
    let f = initialize2DArrayNew(n + 1, n + 1);
    f[1][1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.min(k, i); j++) {
            f[i][j] = f[i - 1][j] * (i - 1) + f[i - 1][j - 1];
            f[i][j] %= mod;
        }
    }
    // pr(f);
    return f[n][k];
};

// Accepted --- 812ms
// reference: https://leetcode.com/contest/weekly-contest-241/ranking/201/
// read: https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/discuss/1211068/Java-DP-time%3A-O(n-*-k)-with-detailed-explanation
const rearrangeSticks1 = (n, k) => {
    let f = initialize2DArrayNew(1001, 1001); // the total ways to see k sticks, of first ith num
    f[1][1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.min(k, i); j++) {
            f[i][j] = f[i - 1][j] * (i - 1) + f[i - 1][j - 1];
            // pr(f[i][j], f[i - 1][j], f[i - 1][j - 1]);
            f[i][j] %= mod;
        }
    }
    return f[n][k];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let n = 3, k = 2;
    let n2 = 5, k2 = 5;
    let n3 = 20, k3 = 11;
    let n_debug1 = 105, k_debug1 = 20;
    pr(rearrangeSticks(n, k));
    pr(rearrangeSticks(n2, k2));
    pr(rearrangeSticks(n3, k3));
    pr(rearrangeSticks(n_debug1, k_debug1)); // 680986848
};

main()