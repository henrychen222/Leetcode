/**
 * 08/30/21 night
 * https://leetcode.com/problems/combination-sum/
 */

// Accepted --- 151ms 14.44%
// answer from Question 40
let can, n;
const combinationSum = (a, target) => {
    a.sort((x, y) => x - y);
    let res = [];
    can = a, n = a.length;
    dfs(target, 0, res, []);
    return res;
};

const dfs = (sum, start, res, path) => {
    if (sum == 0) return res.push([...path]);
    for (let i = start; i < n; i++) {
        if (can[i] > sum) return;
        path.push(can[i]);
        dfs(sum - can[i], i, res, path); // allow select the same number, change i + 1 to i 
        path.pop();
    }
};