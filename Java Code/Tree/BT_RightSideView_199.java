/* 2.8 night
 * https://leetcode.com/problems/binary-tree-right-side-view
 * */

package Tree;

import java.util.ArrayList;
import java.util.List;
import java.util.LinkedList;

public class BT_RightSideView_199 {
	// Method 1  use LinkedList
	public List<Integer> rightSideView(TreeNode root) {

		ArrayList<Integer> result = new ArrayList<Integer>();

		if (root == null) {
			return result;
		}

		LinkedList<TreeNode> lk = new LinkedList<TreeNode>();
		lk.add(root);

		// exist
		while (lk.size() > 0) {
			int lk_constant_size = lk.size();

			// for (int i = 0; i < lk.size(); i++) {      wrong, lk.size() will change during each loop
			for (int i = 0; i < lk_constant_size; i++) {
				TreeNode top = lk.remove();
				// the first element in the linkedList (right-most of the tree)   ???
				if (i == 0) {
					result.add(top.val);
				}
				// add right first
				if (top.right != null) {
					lk.add(top.right);
				}
				// add left
				if (top.left != null) {
					lk.add(top.left);
				}
			}
		}
		return result;
	}

	// Method 2
}
