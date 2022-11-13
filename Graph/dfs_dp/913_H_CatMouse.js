/**
 * 11/19/21 evening
 * https://leetcode.com/problems/cat-and-mouse/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-104/ranking
 * https://www.cnblogs.com/grandyang/p/11515655.html
 */

const initialize3DArray = (n, m, p) => { let res = []; for (let i = 0; i < n; i++) { let data = []; for (let j = 0; j < m; j++) { let tmp = Array(p).fill(-1); data.push(tmp); } res.push(data); } return res; };

// Accepted --- 144ms 100%
let memo, g, n;
const catMouseGame = (graph) => {
    g = graph, n = g.length, memo = initialize3DArray(2 * n, n, n);
    return dfs(0, 1, 2);
};

const dfs = (step, mouse, cat) => {
    // pr(step, mouse, cat);
    if (step == 2 * n) return 0;
    if (mouse == cat) return memo[step][mouse][cat] = 2; // mouse be caught
    if (mouse == 0) return memo[step][mouse][cat] = 1; // mouse reach the hole
    if (memo[step][mouse][cat] != -1) return memo[step][mouse][cat]; // visited
    let catWin = true, mouseWin = true;
    if (step & 1) { // cat's turn
        for (let i = 0; i < g[cat].length; i++) {
            if (g[cat][i] == 0) continue;
            let next = dfs(step + 1, mouse, g[cat][i]);
            if (next == 2) {
                return memo[step][mouse][cat] = 2;
            } else if (next != 1) {
                mouseWin = false;
            }
        }
        return mouseWin ? memo[step][mouse][cat] = 1 : memo[step][mouse][cat] = 0;
    } else { // mouse's turn
        for (let i = 0; i < g[mouse].length; i++) {
            let next = dfs(step + 1, g[mouse][i], cat);
            if (next == 1) {
                return memo[step][mouse][cat] = 1;
            } else if (next != 2) {
                catWin = false;
            }
        }
        return catWin ? memo[step][mouse][cat] = 2 : memo[step][mouse][cat] = 0;
    }
};

const pr = console.log;
const main = () => {
    let graph = [
        [2, 5],
        [3],
        [0, 4, 5],
        [1, 4, 5],
        [2, 3],
        [0, 2, 3]
    ];
    let graph2 = [
        [1, 3],
        [0],
        [3],
        [0, 2]
    ];
    pr(catMouseGame(graph))
    pr(catMouseGame(graph2))
};

main()