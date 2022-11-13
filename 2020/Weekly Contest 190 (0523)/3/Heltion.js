// 5.30 night
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const fillArr = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push(0);
    }
};

let cnt = [];
fillArr(cnt, 10);
let ans = 0;
const pseudoPalindromicPaths = (root) => {
    cnt.fill(0, cnt + 1, cnt + 9);
    ans = 0;
    DFS(root);
    return ans;
};

const DFS = () => {
    cnt[root.val] += 1;
    if (root.left) DFS(root.left);
    if (root.right) DFS(root.right);
    if ((!root.left) && (!root.right)) {
        let pans = 0;
        for (let i = 1; i <= 9; i += 1) pans += cnt[i] % 2;
        ans += pans <= 1;
    }
    cnt[root.val] -= 1;
}


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