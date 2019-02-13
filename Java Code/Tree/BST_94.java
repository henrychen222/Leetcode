/*
1.25 afternoon
https://leetcode.com/problems/binary-tree-inorder-traversal/
*/
package Tree;

import java.util.List;
import java.util.ArrayList;

public class BST_94 {

    public List<Integer> inorderTraversal(TreeNode root) {
        // Method 1 Correct
        List<Integer> rst = new ArrayList<>();
        if (root == null) {
            return rst;
        }
        if (root.left == null && root.right == null) {
            rst.add(root.val);
            return rst;
        }
        List<Integer> left = inorderTraversal(root.left);
        List<Integer> right = inorderTraversal(root.right);

        rst.addAll(left);
        rst.add(root.val);
        rst.addAll(right);
        return rst;
    }

}








