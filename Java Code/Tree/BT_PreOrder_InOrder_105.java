/* 1.27 evening
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
*/
package Tree;

public class BT_PreOrder_InOrder_105 {
    //Method 1 Correct
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int pre_start = 0;
        int pre_end = preorder.length - 1;
        int in_start = 0;
        int in_end = inorder.length - 1;

        return create(preorder, pre_start, pre_end, inorder, in_start, in_end);
    }

    public TreeNode create(int[] preorder, int pre_start, int pre_end, int[] inorder, int in_start, int in_end) {
        if (pre_start > pre_end || in_start > in_end) {
            return null;
        }

        int val = preorder[pre_start];
        TreeNode node = new TreeNode(val);

        //find parent element index from inorder  ???
        int k = 0;
        for (int i = 0; i < inorder.length; i++) {
            if (val == inorder[i]) {
                k = i;
                break;
            }
        }

        node.left = create(preorder, pre_start + 1, pre_start + (k - in_start), inorder, in_start, k - 1);
        node.right = create(preorder, pre_start + (k - in_start) + 1, pre_end, inorder, k + 1, in_end);

        return node;
    }
}
