/* 1.25 afternppn
https://leetcode.com/problems/recover-binary-search-tree/
*/
package Tree;

import java.util.List;
import java.util.ArrayList;

public class UBST_II_95 {

    //Method 1 Correct
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) {
            return new ArrayList<TreeNode>();
        }

        return helper(1, n);
    }

    public List<TreeNode> helper(int m, int n) {
        List<TreeNode> result = new ArrayList<TreeNode>();
        if (m > n) {
            result.add(null);
            return result;
        }

        for (int i = m; i <= n; i++) {
            List<TreeNode> ls = helper(m, i - 1);
            List<TreeNode> rs = helper(i + 1, n);
            for (TreeNode l : ls) {
                for (TreeNode r : rs) {
                    TreeNode curr = new TreeNode(i);
                    curr.left = l;
                    curr.right = r;
                    result.add(curr);
                }
            }
        }

        return result;
    }

    //Method 2
}
