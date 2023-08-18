/*
 * 04/29/23 evening
 * https://leetcode.com/contest/weekly-contest-343/problems/first-completely-painted-row-or-column/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

// Accepted
const firstCompleteIndex = (a, g) => {
    let ma = new Map(), n = g.length, m = g[0].length;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            ma.set(g[i][j], [i, j])
    let row = initialize2DArray(n, 2), col = initialize2DArray(m, 2), t = 1;
    for (const v of a) {
        let [x, y] = ma.get(v);
        row[x][0]++;
        col[y][0]++;
        if (row[x][0] == m && row[x][1] == 0) row[x][1] = t;
        if (col[y][0] == n && col[y][1] == 0) col[y][1] = t;
        // pr("\n", v, row, t);
        // pr(col, t);
        t++;
    }
    // pr(row)
    // pr(col)
    row.sort((x, y) => x[1] - y[1]);
    col.sort((x, y) => x[1] - y[1]);
    // pr(row)
    // pr(col)
    return row[0][1] < col[0][1] ? row[0][1] - 1 : col[0][1] - 1;
};

const main = () => {
    let a = [1, 3, 4, 2], g = [[1, 4], [2, 3]];
    let a2 = [2, 8, 7, 4, 1, 3, 5, 6, 9], g2 = [[3, 2, 5], [1, 4, 6], [8, 7, 9]]
    let a_debug1 =  [1,4,5,2,6,3], g_debug1 = [[4,3,5],[1,2,6]]
    pr(firstCompleteIndex(a, g))
    pr(firstCompleteIndex(a2, g2))
    pr(firstCompleteIndex(a_debug1, g_debug1)) // 1

};

main()

/*
4 3 5
1 2 6

*/