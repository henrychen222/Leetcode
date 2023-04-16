/**
 * 07/23/22 evening
 * https://leetcode.com/contest/weekly-contest-303/problems/equal-row-and-column-pairs/
 */

const pr = console.log;

const aeq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Accepted
const equalPairs = (g) => {
    let n = g.length, m = g[0].length, res = 0;
    for (let i = 0; i < n; i++) {
        let col = [];
        for (let j = 0; j < m; j++) col.push(g[j][i])
        for (const row of g) {
            if (aeq(row, col)) res++;
        }
    }
    return res;
};

const main = () => {
    let g = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]
    let g2 = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
    pr(equalPairs(g))
    pr(equalPairs(g2))
};

main()