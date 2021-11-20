/**
 * 11/19/21 night
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 */

const cutMaxConsecutive = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1][2] != a_or_s[i][2]) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };

// Accepted --- 76ms 88.56%
const verticalTraversal = (root) => {
    let d = dfs(root, 0, 0);
    d.sort((x, y) => {
        if (x[2] != y[2]) return x[2] - y[2];
        if (x[1] != y[1]) return x[1] - y[1];
        return x[0] - y[0];
    });
    let a = cutMaxConsecutive((d));
    let res = [];
    for (const aa of a) res.push(aa.map(x => x[0]));
    return res;
};

const dfs = (root, x, y) => {
    if (!root) return [];
    let left = dfs(root.left, x + 1, y - 1);
    let right = dfs(root.right, x + 1, y + 1);
    return left.concat([[root.val, x, y]]).concat(right);
};