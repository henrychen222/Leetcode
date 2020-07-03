/**
 * 6.30 evening
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Accepted --- 84ms 39.9MB 100.00%
const sumRootToLeaf = (root: TreeNode | null): number => {
    let path: number[] = [];
    let data: any[] = [];
    getAllPath(root, path, data);
    // console.log(data);
    let sum = 0;
    for (const i of data) {
        let num = "";
        for (const j of i) {
            num += j.toString();
        }
        sum += parseInt(num, 2);
    }
    return sum;
}

const getAllPath = (node: TreeNode | null, path: number[], data: any[]) => {
    if (!node) return;
    path.push(node.val);
    if (node.left == null && node.right == null) { // isLeaf()
        let temp = [...path];
        data.push(temp);
    }
    getAllPath(node.left, path, data);
    getAllPath(node.right, path, data);
    path.pop();
}

const main = () => {
    // [1,0,1,0,1,0,1]
    let root = new TreeNode(1);
    root.left = new TreeNode(0);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(1);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(1);
    console.log(sumRootToLeaf(root));
}

main()