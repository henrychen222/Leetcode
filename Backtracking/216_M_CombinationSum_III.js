/**
 * 08/30/21 night
 * https://leetcode.com/problems/combination-sum-iii/
 */

// Accepted --- 146ms 5.19%
// reference: https://zxi.mytechroad.com/blog/searching/leetcode-216-combination-sum-iii/
const combinationSum3 = (k, n) => {
    let res = [];
    dfs(k, n, 1, res, []);
    return res;
};

const dfs = (tot, sum, start, res, path) => {
    if (tot == 0) {
        if (sum == 0) res.push([...path]);
        return;
    }
    for (let x = start; x <= 9; x++) {
        if (sum < x) return;
        path.push(x);
        dfs(tot - 1, sum - x, x + 1, res, path);
        path.pop();
    }
};

const pr = console.log;
const main = () => {
    let k = 3,
        n = 7;
    let k2 = 3,
        n2 = 9;
    let k3 = 4,
        n3 = 1;
    let k4 = 3,
        n4 = 2;
    let k5 = 9,
        n5 = 45;
    pr(combinationSum3(k, n))
    pr(combinationSum3(k2, n2))
    pr(combinationSum3(k3, n3))
    pr(combinationSum3(k4, n4))
    pr(combinationSum3(k5, n5))
};

main()