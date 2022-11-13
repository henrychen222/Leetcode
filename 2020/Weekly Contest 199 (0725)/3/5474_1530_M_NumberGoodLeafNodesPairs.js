/**
 * 7.25 evening 7.26 night
 * https://leetcode.com/contest/weekly-contest-199/problems/number-of-good-leaf-nodes-pairs/
 * // https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/discuss/758213/javascript-DFS
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Time Limit 66/113
const countPairs = (root, distance) => {
    let data = [];
    getAllLeaf(root, data);
    let cnt = 0;
    data.sort((a, b) => b.val - a.val);
    for (let i = 0; i < data.length; i++) {
        if (data[i] > distance) break;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] > distance) break;
            if (findDistance(root, data[i], data[j]) <= distance) {
                cnt++;
            }
        }
    }
    return cnt;
};

const getAllLeaf = (node, data) => {
    if (!node) return;
    if (!node.left && !node.right) {
        data.push(node);
    }
    getAllLeaf(node.left, data);
    getAllLeaf(node.right, data);
    return data;
}

const findDistance = (root, x, y) => {
    let lca = null;
    if (isNodePresent(root, y) && isNodePresent(root, x))
        lca = findLCA(root, x, y);
    else
        return Number.MIN_VALUE;
    return findLevel(lca, x, 0) + findLevel(lca, y, 0);
}

const findLCA = (root, x, y) => {
    if (root == null) return null;
    if (root == x || root == y) return root;
    let left = findLCA(root.left, x, y);
    let right = findLCA(root.right, x, y);
    if (left != null && right != null) {
        return root;
    }
    if (left != null) {
        return left;
    }
    if (right != null) {
        return right;
    }
    return null;
}

const findLevel = (root, node, level) => {
    if (root == null) return Number.MIN_VALUE;
    if (root == node) return level;
    let left = findLevel(root.left, node, level + 1);
    if (left != Number.MIN_VALUE) return left;
    return findLevel(root.right, node, level + 1);
}

const isNodePresent = (root, node) => {
    if (root == null) return false;
    if (root == node) return true;
    return isNodePresent(root.left, node) || isNodePresent(root.right, node);
}

const main = () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    root1.left.right = new TreeNode(4);
    let distance1 = 3;
    console.log(countPairs(root1, distance1));

    // root = [1,2,3,4,5,6,7], distance = 3
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    let distance = 3;
    console.log(countPairs(root, distance));
    // console.log(findDistance(root, root.left.left, root.right.right)); // 4 7 is 4


    // root = [7,1,4,6,null,5,3,null,null,null,null,null,2]
    let root3 = new TreeNode(7);
    root3.left = new TreeNode(1);
    root3.right = new TreeNode(4);
    root3.left.left = new TreeNode(6);
    root3.right.left = new TreeNode(5);
    root3.right.right = new TreeNode(3);
    root3.right.left.right = new TreeNode(2);
    let distance3 = 3;
    console.log(countPairs(root3, distance3));

    // root = [100]
    let root4 = new TreeNode(100);
    let distance4 = 1;
    console.log(countPairs(root4, distance4));

    // root = [1,1,1]
    let root5 = new TreeNode(1);
    root5.left = new TreeNode(1);
    root5.right = new TreeNode(1);
    let distance5 = 2;
    console.log(countPairs(root5, distance5));
};

main()