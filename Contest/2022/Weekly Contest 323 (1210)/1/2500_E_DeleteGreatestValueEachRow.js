/*
 * 12/10/22 evening
 * https://leetcode.com/contest/weekly-contest-323/problems/delete-greatest-value-in-each-row/
 */

const pr = console.log;

// Accepted
const deleteGreatestValue = (g) => {
    let n = g.length, m = g[0].length, tot = m, res = 0;
    while (tot--) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < n; i++) {
            let rowMax = Math.max(...g[i]);
            for (let j = 0; j < m; j++) {
                if (g[i][j] == rowMax) {
                    g[i][j] = -1;
                    break;
                }
            }
            max = Math.max(max, rowMax);
        }
        // pr('g', g, "res", res, "max", max);
        res += max;
    }
    return res;
};

const main = () => {
    let g = [[1, 2, 4], [3, 3, 1]];
    let g2 = [[10]]
    let g_debug1 = [[9, 81], [33, 17]]
    pr(deleteGreatestValue(g))
    pr(deleteGreatestValue(g2))
    pr(deleteGreatestValue(g_debug1)) // 98
};

main()