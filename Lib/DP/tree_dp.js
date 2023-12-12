/*
11/12/23 evening

树形DP

Example problem:
https://leetcode.com/contest/biweekly-contest-114/problems/maximum-number-of-k-divisible-components/

https://leetcode.com/contest/weekly-contest-338/problems/collect-coins-in-a-tree/
https://leetcode.com/contest/weekly-contest-341/problems/minimize-the-total-price-of-the-trips/
https://leetcode.com/contest/weekly-contest-370/problems/maximum-score-after-applying-operations-on-a-tree/
*/


const parents = (g, root) => {
    let n = g.length, par = Array(n).fill(-1), depth = Array(n).fill(0), order = Array(n).fill(0);
    order[0] = root;
    for (let p = 0, r = 1; p < r; p++) {
        let cur = order[p];
        for (const child of g[cur]) {
            if (par[cur] != child) {
                order[r++] = child;
                par[child] = cur;
                depth[child] = depth[cur] + 1;
            }
        }
    }
    return [par, order, depth];
};