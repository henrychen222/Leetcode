/**
 * 09/22/21 evening
 * https://leetcode.com/problems/word-search-ii/
 * 
 * reference: https://zxi.mytechroad.com/blog/searching/leetcode-212-word-search-ii/
 */

const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];
let n, m, g, t;
const findWords = (board, words) => {
    n = board.length, m = board[0].length, g = board, w = words;
    let res = [],
        se = new Set(words);
    for (const target of se) {
        t = target;
        if (exist(t)) res.push(t);
    }
    return res;
};

const exist = () => {
    if (n == 0) return false;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (dfs(i, j, 0)) return true;
    return false;
};

// Accepted --- 4380ms 18.52%
const dfs = (i, j, pos) => {
    if (i < 0 || i >= n || j < 0 || j >= m || g[i][j] != t[pos]) return false;
    if (pos == t.length - 1) return true;
    let cur = g[i][j];
    g[i][j] = '*';
    let found;
    for (let k = 0; k < 4; k++) {
        let ni = i + dir[k][0],
            nj = j + dir[k][1];
        found |= dfs(ni, nj, pos + 1);
    }
    g[i][j] = cur;
    return found;
};

// Accepted --- 6168ms 9.99%
const dfs2 = (i, j, pos) => {
    if (i < 0 || i >= n || j < 0 || j >= m || g[i][j] != t[pos]) return false;
    if (pos == t.length - 1) return true;
    let cur = g[i][j];
    g[i][j] = '*';
    let f = [];
    for (let k = 0; k < 4; k++) {
        let ni = i + dir[k][0],
            nj = j + dir[k][1];
        f.push(dfs2(ni, nj, pos + 1));
    }
    let found = f[0] || f[1] || f[2] || f[3];
    g[i][j] = cur;
    return found;
};

// Accepted --- 3500ms 22.87%
const dfs3 = (i, j, pos) => {
    if (i < 0 || i >= n || j < 0 || j >= m || g[i][j] != t[pos]) return false;
    if (pos == t.length - 1) return true;
    let cur = g[i][j];
    g[i][j] = '*';
    let found = dfs3(i - 1, j, pos + 1) || dfs3(i + 1, j, pos + 1) || dfs3(i, j - 1, pos + 1) || dfs3(i, j + 1, pos + 1);
    g[i][j] = cur;
    return found;
};

const pr = console.log;
const main = () => {
    let board = [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"]
        ],
        words = ["oath", "pea", "eat", "rain"];
    let board2 = [
            ["a", "b"],
            ["c", "d"]
        ],
        words2 = ["abcb"];
    pr(findWords(board, words))
    pr(findWords(board2, words2))
};

main()