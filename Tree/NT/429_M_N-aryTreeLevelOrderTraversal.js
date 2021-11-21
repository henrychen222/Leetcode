/**
 * 11/20/21 evening
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 */

function Node(val, children) {
    this.val = val;
    this.children = children;
}

// Accepted --- 96ms 80.13%
const levelOrder = (root) => {
    if (!root) return [];
    let q = [root];
    let res = [], level = 0;
    while (q.length) {
        let t = q.length;
        res.push([]);
        while (t--) {
            let cur = q.shift();
            // pr("cur", cur)
            res[level].push(cur.val);
            for (const child of cur.children) {
                q.push(child);
            }
        }
        level++;
    }
    return res;
};

const pr = console.log;
const main = () => {
    let root = new Node(1, []);
    root.children[0] = new Node(3, []);
    root.children[1] = new Node(2, []);
    root.children[2] = new Node(4, []);
    root.children[0].children[0] = new Node(5, []);
    root.children[0].children[1] = new Node(6, []);
    pr(levelOrder(root))
};

main()