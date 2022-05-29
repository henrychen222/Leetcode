/**
 * 05/11/22 night
 * https://leetcode.com/problems/unique-binary-search-trees/
 */

const pr = console.log;

// Accepted --- 69ms 64.41%
let memo;
const numTrees = (n) => {
    memo = new Map();
    let res = n == 0 ? 0 : dfs(1, n);
    return res;
};

const dfs = (min, n) => {
    if (min > n) return 1;
    let ke = min + ' ' + n;
    if (memo.has(ke)) return memo.get(ke);
    let res = 0;
    for (let v = min; v <= n; v++) {
        // pr(v);
        let subL = dfs(min, v - 1), subR = dfs(v + 1, n);
        // pr(subL, subR);
        res += subL * subR;
    }
    memo.set(ke, res);
    return res;
};

const main = () => {
    let n = 3;
    let n2 = 1;
    let debug1 = 18;
    pr(numTrees(n))
    pr(numTrees(n2))
    pr(numTrees(debug1))
};

main()