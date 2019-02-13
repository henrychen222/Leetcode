/* 1.26 morning
https://leetcode.com/problems/same-tree/
*/

package Tree;

public class SameTree_100 {
    public boolean isSameTree(TreeNode p, TreeNode q) {

        //structurally identical
        if (p == null && q == null) {
            return true;
        }
        if (p == null || q == null) {
            return false;
        }

        //p and q both not null, check if the nodes have the same value
        if (p.val == q.val) {
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        } else {
            return false;
        }

    }
}
