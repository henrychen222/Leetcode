/**
 * 10/23/21 evening
 * https://leetcode.com/contest/weekly-contest-264/problems/next-greater-numerically-balanced-number/
 */

const pr = console.log;

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

// Accepted
let g, n, res, cnt;
const countHighestScoreNodes = (parents) => {
    res = -1, cnt = 0, n = parents.length, g = initializeGraph(n);
    for (let i = 0; i < n; i++) {
        if (parents[i] == -1) continue;
        g[parents[i]].push(i);
    }
    dfs(0);
    return cnt;
};

const dfs = (x) => {
    let subtree = 0, p = 1;
    // pr(x, subtree, p);
    for (const child of g[x]) {
        let tmp = dfs(child);
        subtree += tmp;
        p *= tmp;
    }
    if (subtree < n - 1) p *= n - 1 - subtree;
    if (p > res) { // larger score comes, update res and reset cnt = 1
        res = p;
        cnt = 1;
    } else if (p == res) { // equal largest score
        cnt++;
    }
    return subtree + 1;
};

const main = () => {
    let parents = [-1, 2, 0, 2, 0];
    let parents2 = [-1, 2, 0];
    pr(countHighestScoreNodes(parents))
    pr(countHighestScoreNodes(parents2))
};

main()