/*
 * 02/04/23 afternoon
 * https://leetcode.com/contest/biweekly-contest-97/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/
 */

const pr = console.log;

// Accepted  02/08/23 night finish
// reference: cuiaoxiang + https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3142814/clever-diagonals-with-diagram-explanation/
const isPossibleToCutPath = (g) => {
    let n = g.length, m = g[0].length, diagonals = Array(n + m - 1).fill(0);
    for (let i = 0; i < n; i++) {  // forward
        for (let j = 0; j < m; j++) {
            if (i == 0 && j == 0 || g[i][j] == 0) continue;
            if ((i == 0 || g[i - 1][j] == 0) && (j == 0 || g[i][j - 1] == 0)) g[i][j] = 0;
        }
    }
    // pr(g)
    for (let i = n - 1; i >= 0; i--) { // backward
        for (let j = m - 1; j >= 0; j--) {
            if (i == n - 1 && j == m - 1 || g[i][j] == 0) continue;
            if ((i == n - 1 || g[i + 1][j] == 0) && (j == m - 1 || g[i][j + 1] == 0)) g[i][j] = 0;
        }
    }
    // pr(g)
    // diagnonal count
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) diagonals[i + j] += g[i][j];
    }
    // pr(diagonals)
    for (let i = 1; i < n + m - 2; i++) {
        if (diagonals[i] <= 1) return true;
    }
    return false;
};

// WA
const isPossibleToCutPath1 = (g) => {
    let n = g.length, m = g[0].length;
    if ((n == 1 && m == 1) || (n == 1 && m == 2) || (n == 2 && m == 1)) return false;
    if (n == 2 && m == 2) {
        return g[0][1] == 0 && g[1][0] == 0;
    }
    // n >= 3 m >= 3
    for (let i = 0; i < n; i++) {
        let one = 0;
        for (let j = 0; j < m; j++) {
            if (g[i][j] == '1') one++;
        }
        if (one <= 1) return true; // each row 1's only 1
    }
    for (let j = 0; j < m; j++) {
        let one = 0;
        for (let i = 0; i < n; i++) {
            if (g[i][j] == '1') one++;
        }
        if (one <= 1) return true; // each col 1's only 1
    }
    return false;
};

const main = () => {
    let g = [[1, 1, 1], [1, 0, 0], [1, 1, 1]];
    let g2 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
    let g_debug1 = [[1, 1]];
    let g_debug2 = [[1, 1, 1, 1, 1]];
    let g_debug3 = [[1, 1, 1], [0, 0, 0], [1, 1, 1]];
    let g_debug4 = [[1, 1, 1, 0, 0], [1, 0, 1, 0, 0], [1, 1, 1, 1, 1], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1]];
    let g_debug5 = [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 1, 1]];
    pr(isPossibleToCutPath(g))
    pr(isPossibleToCutPath(g2))
    pr(isPossibleToCutPath(g_debug1)) // false
    pr(isPossibleToCutPath(g_debug2)) // true
    pr(isPossibleToCutPath(g_debug3)) // true
    pr(isPossibleToCutPath(g_debug4)) // true
    pr(isPossibleToCutPath(g_debug5)) // true
};

main()

/*
1 1 1 0 0
1 0 1 0 0
1 1 1 1 1
0 0 1 1 1
0 0 1 1 1


*/