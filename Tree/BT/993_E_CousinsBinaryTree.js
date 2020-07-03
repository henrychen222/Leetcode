/**
 * 7.2 night
 * https://leetcode.com/problems/cousins-in-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 116ms 36.7MB 5.19%  reference: https://www.cnblogs.com/seyjs/p/10410669.html
let x_p = null;
let y_p = null;
let x_l = 0;
let y_l = 0;
const isCousins = (root, x, y) => {
    x_p = null;
    y_p = null;
    x_l = 0;
    y_l = 0;
    helper(root, 0, null, x, y)
    return x_p != y_p && x_l == y_l;
};

const helper = (root, level, parent, x, y) => {
    if (root.val == x) {
        x_p = parent;
        x_l = level;
    } else if (root.val == y) {
        y_p = parent;
        y_l = level;
    }
    if (root.left != null) {
        helper(root.left, level + 1, root, x, y);
    }
    if (root.right != null) {
        helper(root.right, level + 1, root, x, y);
    }
};

// Accepted --- 88ms 37.8MB 5.94  reference: https://blog.csdn.net/fuxuemingzhu/article/details/87867902
let map = new Map();
const isCousins_dfs = (root, x, y) => {
    map.clear();
    dfs(root, null, 0);
    let px = map.get(x);
    let py = map.get(y);
    // return px[0].parent.val != py[0].parent.val && px[0].depth == py[0].depth; // no need to use val, lc will report Cannot read property 'val' of null
    return px[0].parent != py[0].parent && px[0].depth == py[0].depth;
};

const dfs = (root, parent, depth) => {
    if (!root) return;
    let data = [];
    data.push({
        parent: parent,
        depth: depth,
    })
    map.set(root.val, data);
    dfs(root.left, root, depth + 1);
    dfs(root.right, root, depth + 1);
};

// Accepted --- 100ms 38.7MB 5.19%  reference: https://blog.csdn.net/fuxuemingzhu/article/details/87867902
const isCousins_bfs_queue = (root, x, y) => {
    let q = [];
    q.push({
        first: root,
        second: null
    });
    let map = new Map();
    let depth = 0;
    while (q.length != 0) {
        let n = q.length;
        for (let i = 0; i < n; ++i) {
            let p = q[0];
            q.shift();
            if (!p.first) continue;
            map.set(p.first.val, {
                parent: p.second,
                depth: depth
            });
            q.push({
                first: p.first.left,
                second: p.first
            });
            q.push({
                first: p.first.right,
                second: p.first
            });
        }
        ++depth;
    }
    let px = map.get(x);
    let py = map.get(y);
    return px.parent != py.parent && px.depth == py.depth;
};

const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    let x = 4,
        y = 3;

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    root2.left.right = new TreeNode(4);
    root2.right.right = new TreeNode(5);
    let x2 = 5,
        y2 = 4;

    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);
    root3.right = new TreeNode(3);
    root3.left.right = new TreeNode(4);
    let x3 = 2,
        y3 = 3;

    console.log(isCousins(root, x, y));
    console.log(isCousins(root2, x2, y2));
    console.log(isCousins(root3, x3, y3));

    console.log("");
    console.log(isCousins_dfs(root, x, y));
    console.log(isCousins_dfs(root2, x2, y2));
    console.log(isCousins_dfs(root3, x3, y3));

    console.log("");
    console.log(isCousins_bfs_queue(root, x, y));
    console.log(isCousins_bfs_queue(root2, x2, y2));
    console.log(isCousins_bfs_queue(root3, x3, y3));

};

main()




// const getDepth = (root, val, depth, level) => {
//     if (!root) return null;
//     if ((root.left && root.left.val == val) || (root.right && root.right.val == val)) {
//         level = depth;
//         return root;
//     }
//     let left = getDepth(root.left, val, depth + 1, level);
//     console.log(level); // issue
//     if (left) return left;

//     let right = getDepth(root.right, val, depth + 1, level);
//     if (right) return right;
//     return null;
// };

// const isCousins = (root, x, y) => {
//     let xDepth = -1;
//     let yDepth = -1;
//     let xParent = getDepth(root, x, 0, xDepth);
//     let yParent = getDepth(root, y, 0, yDepth);
//     console.log(xDepth, yDepth, xParent.val, yParent.val);
//     if (xDepth == yDepth && xParent != yParent) {
//         return true;
//     }
//     return false;
// };