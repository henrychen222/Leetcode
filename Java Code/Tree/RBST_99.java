/*
1.25 afternoon
https://leetcode.com/problems/unique-binary-search-trees-ii
*/
package Tree;

public class RBST_99 {
    //Initialize three node
    TreeNode first;
    TreeNode second;
    TreeNode prev;

    // 中序  左 根 右
    public void in_order(TreeNode root) {
        if (root == null)
            return;

        in_order(root.left);

        //???
        if (prev == null) {
            prev = root;
        } else {
            //???
            if (root.val < prev.val) {
                if (first == null) {
                    first = prev;
                }
                second = root;
            }
            prev = root;
        }

        in_order(root.right);
    }

    //Method 1 Correct
    public void recoverTree(TreeNode root) {
        if (root == null) return;

        in_order(root);

        if (first != null && second != null) {
            //swap
            int temp = first.val;
            first.val = second.val;
            second.val = temp;
        }
    }
}
