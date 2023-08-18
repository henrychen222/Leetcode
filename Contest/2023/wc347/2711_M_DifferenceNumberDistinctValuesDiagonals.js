/*
 * 05/27/23 evening
 * https://leetcode.com/contest/weekly-contest-347/problems/difference-of-number-of-distinct-values-on-diagonals/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(-1));

// Accepted
const differenceOfDistinctValues = (g) => {
    let n = g.length, m = g[0].length, res = initialize2DArray(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let tl = new Set(), br = new Set();
            for (let v = 1; i - v >= 0 && j - v >= 0; v++) tl.add(g[i - v][j - v])
            for (let v = 1; i + v < n && j + v < m; v++) br.add(g[i + v][j + v])
            // pr([i, j], g[i][j], tl, br)
            res[i][j] = Math.abs(tl.size - br.size);
        }
    }
    return res;
};

const main = () => {
    let g = [[1, 2, 3], [3, 1, 5], [3, 2, 1]];
    let g2 = [[1]];
    let debug1 = [[6,28,37,34,12,30,43,35,6],[21,47,38,14,31,49,11,14,49],[6,12,35,17,17,2,45,27,43],[34,41,30,28,45,24,50,20,4]];
    pr(differenceOfDistinctValues(g))
    pr(differenceOfDistinctValues(g2))
    pr(differenceOfDistinctValues(debug1)) // [[3,3,3,3,3,3,2,1,0],[2,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,2],[0,1,2,3,3,3,3,3,3]]
};

main()