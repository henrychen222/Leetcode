/**
 * 11.15 evening
 * https://leetcode.com/problems/soup-servings/
 */

// Accepted --- 76ms 100.00%
// reference: https://www.cnblogs.com/grandyang/p/9406434.html
let memo = new Map();
const soupServings = (N) => {
    memo.clear();
    return N >= 4800 ? 1 : dfs(N, N);
};

const dfs = (a, b) => {
    if (a <= 0 && b <= 0) return 0.5;
    if (a <= 0) return 1;
    if (b <= 0) return 0;
    let spoon = a + ':' + b;
    if (!memo.has(spoon)) {
        memo.set(spoon, 0.25 * (dfs(a - 100, b) + dfs(a - 75, b - 25) + dfs(a - 50, b - 50) + dfs(a - 25, b - 75)));
    }
    // console.log(memo);
    return memo.get(spoon);
};

const main = () => {
    let N = 50;
    let N2 = 4700;
    let N3 = 1e9;
    console.log(soupServings(N));
    console.log(soupServings(N2));
    console.log(soupServings(N3));
};

main()