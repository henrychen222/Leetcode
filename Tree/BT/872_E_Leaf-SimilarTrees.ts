/**
 * 6.30 evening
 * https://leetcode.com/problems/leaf-similar-trees/https://leetcode.com/problems/leaf-similar-trees/
 * 
 * getAllPath() code from 1022
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

// Accepted --- 72ms 37.2MB 100.00%
const leafSimilar = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
    let lvs1 = getLeafValueSequence(root1);
    let lvs2 = getLeafValueSequence(root2);
    if (lvs1.length != lvs2.length) {
        return false;
    } else {
        for (let i = 0; i < lvs1.length; i++) {
            if (lvs1[i] != lvs2[i]) {
                return false;
            }
        }
    }
    return true;
}

const getLeafValueSequence = (root: TreeNode | null): number[] => {
    let path: number[] = [];
    let data: any[] = [];
    getAllPath(root, path, data);
    let leafValueSequence = [];
    for (const i of data) {
        leafValueSequence.push(i[i.length - 1]);
    }
    return leafValueSequence;
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
    let root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);
    root.right.left = new TreeNode(9);
    root.right.right = new TreeNode(8);

    let root2 = new TreeNode(2);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(2);
    root2.left.left = new TreeNode(6);
    root2.left.right = new TreeNode(2);
    root2.left.right.left = new TreeNode(7);
    root2.left.right.right = new TreeNode(4);
    root2.right.left = new TreeNode(9);
    root2.right.right = new TreeNode(8);
    console.log(leafSimilar(root, root2));

    let root1_debug1 = new TreeNode(1);
    let root2_debug1 = new TreeNode(2);
    console.log(leafSimilar(root1_debug1, root2_debug1));  // false
}

main()