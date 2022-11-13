// 5.30 night
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const pseudoPalindromicPaths = (root) => {
    dfs(root, 0);
    return ct;
};

let ct = 0;
const dfs = (root, ptn) => {
    if (root == null) return;
    ptn ^= 1 << root.val;
    if ((ptn & ptn - 1) == 0 && root.left == null && root.right == null) {
        ct++;
    }
    dfs(root.left, ptn);
    dfs(root.right, ptn);
};


const main = () => {
    // [2, 3, 1, 3, 1, null, 1];
    let root = new TreeNode(2);
    root.left = new TreeNode(3);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(1);
    root.right.right = new TreeNode(1);

    // [2, 1, 1, 1, 3, null, null, null, null, null, 1]
    let root2 = new TreeNode(2);
    root2.left = new TreeNode(1);
    root2.right = new TreeNode(1);
    root2.left.left = new TreeNode(1);
    root2.left.right = new TreeNode(3);
    root2.left.right.right = new TreeNode(1);

    // [9]
    let root3 = new TreeNode(9);

    console.log(pseudoPalindromicPaths(root));
    console.log(pseudoPalindromicPaths(root2));
    console.log(pseudoPalindromicPaths(root3));

};

main();