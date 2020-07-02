// 7.1 night
import { TreeNode } from './TreeNode';

export class BT {

    inOrder_DFS(root: TreeNode | null): number[] { // Left -> Root -> Right
        if (!root) return [];
        let left = this.inOrder_DFS(root.left);
        let right = this.inOrder_DFS(root.right);
        return left.concat(root.val).concat(right);
    };

    preOrder_DFS(root: TreeNode | null): number[] { // Root -> Left -> Right
        if (!root) return [];
        let left = this.preOrder_DFS(root.left);
        let right = this.preOrder_DFS(root.right);
        return [root.val].concat(left).concat(right);
    };

    postOrder_DFS(root: TreeNode | null): number[] { // Left -> Right -> root
        if (!root) return [];
        let left = this.postOrder_DFS(root.left);
        let right = this.postOrder_DFS(root.right);
        return left.concat(right).concat(root.val);
    };

    levelOrder_BFS(root: TreeNode | null): number[] {
        let data: any[] = [];
        this.getAllLevels(root, 0, data);
        return data;
    }

    getAllLevels(root: TreeNode | null, level: number, data: any[]) {
        if (!root) return;
        if (level >= data.length) {
            let list: any[] = [];
            data.push(list);
        }
        data[level].push(root.val);
        this.getAllLevels(root.left, level + 1, data);
        this.getAllLevels(root.right, level + 1, data);
    };
}

const main = () => {
    // example: https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    let bt = new BT();
    console.log(bt.levelOrder_BFS(root));
    console.log(bt.inOrder_DFS(root));
    console.log(bt.preOrder_DFS(root));
    console.log(bt.postOrder_DFS(root));
};

main()