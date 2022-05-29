/**
 * 05/11/22 night
 * https://leetcode.com/problems/unique-binary-search-trees-ii/submissions/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 119ms 48.14%
const generateTrees = (n) => n == 0 ? [] : dfs(1, n);

const dfs = (min, n) => {
    if (min > n) return [null];
    let res = [];
    for (let v = min; v <= n; v++) {
        // pr(v);
        let subL = dfs(min, v - 1), subR = dfs(v + 1, n);
        // pr(subL, subR)
        for (const l of subL) {
            for (const r of subR) {
                let cur = new TreeNode(v);
                cur.left = l;
                cur.right = r;
                res.push(cur);
            }
        }
    }
    return res;
};

const main = () => {
    let n = 3;
    let n2 = 1;
    pr(generateTrees(n))
    pr(generateTrees(n2))
};

main()