// 7.26 night
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let ans = 0;
const countPairs_uwi = (root, distance) => {
    ans = 0;
    dfs(root, distance);
    return ans;
};

const dfs = (root, distance) => {
    if (!root) return [];
    if (!root.left && !root.right) {
        let ret = [];
        ret.push(0);
        return ret;
    }
    let L = dfs(root.left, distance);
    let R = dfs(root.right, distance);
    // console.log(L, R);
    for (const x of L) {
        for (const y of R) {
            if (x + y + 2 <= distance) ans++;
        }
    }
    let ret = [];
    for (const x of L) ret.push(x + 1);
    for (const y of R) ret.push(y + 1);
    return ret;
};

const main = () => {
    // root = [1,2,3,null,4]
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    root1.left.right = new TreeNode(4);
    let distance1 = 3;

    // root = [1,2,3,4,5,6,7]
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    let distance = 3;

    // root = [7,1,4,6,null,5,3,null,null,null,null,null,2]
    /**
     *               7
     *        1             4
     *     6      N      5     3
     *   N   N  N   N   N  2
     *
     */
    let root3 = new TreeNode(7);
    root3.left = new TreeNode(1);
    root3.right = new TreeNode(4);
    root3.left.left = new TreeNode(6);
    root3.right.left = new TreeNode(5);
    root3.right.right = new TreeNode(3);
    root3.right.left.right = new TreeNode(2);
    let distance3 = 3;

    // root = [100]
    let root4 = new TreeNode(100);
    let distance4 = 1;

    // root = [1,1,1]
    let root5 = new TreeNode(1);
    root5.left = new TreeNode(1);
    root5.right = new TreeNode(1);
    let distance5 = 2;

    console.log(countPairs_uwi(root1, distance1));  // 1
    console.log(countPairs_uwi(root, distance));   // 2
    console.log(countPairs_uwi(root3, distance3)); // 1
    console.log(countPairs_uwi(root4, distance4)); // 0
    console.log(countPairs_uwi(root5, distance5)); // 1
};

main()