/**
 * 10/23/21 evening
 * https://leetcode.com/contest/weekly-contest-264/problems/next-greater-numerically-balanced-number/
 */

const pr = console.log;

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

let g;
const countHighestScoreNodes = (parents) => {
    let n = parents.length;
    g = initializeGraph(n);
    for (let i = 0; i < n; i++) {
        if (parents[i] == -1) continue;
        g[parents[i]].push(i);
    }
    pr(g);
    for (let x = 0; x < n; x++) {
        let childLen = g[x].length;
        pr("childLen", childLen)
        let p;
        if (childLen == 0) {
            p = n - 1;
        } else if (childLen == 1) {
            let a = dfs(g[x][0]);
            pr("a", a);
            let c = n - 1 - a.length;
            p = a * c;
        } else { // 2
            let a = dfs(g[x][0]);
            let b = dfs(g[x][1]);
            pr("ab", a, b);
            let c = n - 1 - a - b;
            p = a * b * c;
        }
        pr("p", p);
    }
};

// issue
const dfs = (x) => {
    pr(x);
    if (!g[x].length) return [];
    let left = dfs(g[x][0]);
    let right = dfs(g[x][1]);
    pr("left right", left, right)
    return left.concat(x).concat(right);
};


const main = () => {
    let parents = [-1, 2, 0, 2, 0];
    let parents2 = [-1, 2, 0];
    pr(countHighestScoreNodes(parents))
    // pr(countHighestScoreNodes(parents2))
};

main()