/* 
 * 02/21/23 night
 * https://leetcode.com/contest/weekly-contest-333/problems/find-the-string-with-lcp/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));
const char = (ascii) => String.fromCharCode(ascii);

// Accepted
// reference: https://leetcode.cn/circle/discuss/YrMMXy/
const findTheString = (g) => {
    let n = g.length, res = Array(n).fill(-1), max = 1, dp = initialize2DArray(n, n);
    res[0] = 0;
    for (let i = 1; i < n; i++) {
        let match = false;
        for (let j = 0; j < i; j++) {
            if (g[i][j] > 0) {
                res[i] = res[j];
                match = true;
                break;
            }
        }
        if (!match) {
            res[i] = max;
            if (res[i] >= 26) return '';
            max++;
        }
    }
    // pr(res);
    dp[n - 1][n - 1] = 1;
    for (let i = n - 2; ~i; i--) {
        for (let j = i; j < n; j++) {
            if (res[i] != res[j]) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = j + 1 < n ? dp[i + 1][j + 1] + 1 : 1;
            }
        }
    }
    // pr(dp)
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (dp[i][j] != g[i][j] || dp[i][j] != g[j][i]) return '';
        }
    }
    return res.map(x => char(x + 97)).join("");
};

const main = () => {
    let g = [[4, 0, 2, 0], [0, 3, 0, 1], [2, 0, 2, 0], [0, 1, 0, 1]];
    let g2 = [[4, 3, 2, 1], [3, 3, 2, 1], [2, 2, 2, 1], [1, 1, 1, 1]];
    let g3 = [[4, 3, 2, 1], [3, 3, 2, 1], [2, 2, 2, 1], [1, 1, 1, 3]];
    let g_debug1 = [[8, 0, 0, 0, 0, 1, 2, 0], [0, 7, 0, 1, 1, 0, 0, 1], [0, 0, 6, 0, 0, 0, 0, 0], [0, 1, 0, 5, 1, 0, 0, 1], [0, 1, 0, 1, 4, 0, 0, 1], [1, 0, 0, 0, 0, 3, 1, 0], [2, 0, 0, 0, 0, 1, 2, 0], [0, 1, 0, 1, 1, 0, 0, 1]];
    let g_debug2 = [[9, 1, 0, 1, 0, 1, 0, 0, 1], [1, 8, 0, 4, 0, 2, 0, 0, 1], [0, 0, 7, 0, 3, 0, 1, 2, 0], [1, 4, 0, 6, 0, 2, 0, 0, 1], [0, 0, 3, 0, 5, 0, 1, 2, 0], [1, 2, 0, 2, 0, 4, 0, 0, 1], [0, 0, 1, 0, 1, 0, 3, 1, 0], [0, 0, 2, 0, 2, 0, 1, 2, 0], [1, 1, 0, 1, 0, 1, 0, 0, 1]];
    pr(findTheString(g))
    pr(findTheString(g2))
    pr(findTheString(g3))
    pr(findTheString(g_debug1)) // "abcbbaab"
    pr(findTheString(g_debug2)) // "aabababba"
};

main()