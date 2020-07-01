/**
 * 6.30 night
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
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

// Accepted --- 88ms 42MB 100.00%
const averageOfLevels = (root: TreeNode | null): number[] => {
    let data: any[] = [];
    getAllLevels(root, 0, data);
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let sum = 0;
        for (const j of data[i]) {
            sum += j;
        }
        res.push(sum / data[i].length);
    }
    return res;
};

const getAllLevels = (root: TreeNode | null, level: number, data: any[]) => {
    if (!root) return;
    if (level >= data.length) {
        let list: any[] = [];
        data.push(list);
    }
    data[level].push(root.val);
    getAllLevels(root.left, level + 1, data);
    getAllLevels(root.right, level + 1, data);
};

const main = () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    console.log(averageOfLevels(root));
}

main()