// 5.30 night
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const solve = (root, c) => {
    if (root == null) return;
    c[root.val]++;

    if ((root.left != null) || (root.right != null)) {
        solve(root.left, c);
        solve(root.right, c);
    }
    else {
        let ct = 0;
        for (const p of c) {
            ct += p % 2;
        }
        if (ct <= 1) ans++;
    }
};

const pseudoPalindromicPaths = (root) => {
    let c = [];
    fillArr(c, 10)
    ans = 0;
    solve(root, c);
    return ans;
};

const fillArr = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push(0);
    }
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
    // console.log(pseudoPalindromicPaths(root2));
    // console.log(pseudoPalindromicPaths(root3));

};

main();