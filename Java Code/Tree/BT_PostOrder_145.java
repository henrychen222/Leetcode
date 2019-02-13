/* 2.7 evening  
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * */

package Tree;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class BT_PostOrder_145 {

	public List<Integer> postorderTraversal(TreeNode root) {
		List<Integer> res = new ArrayList<Integer>();
		
		if (root == null) {
			return res;
		}
		
		Stack<TreeNode> stack = new Stack<TreeNode>();
		stack.push(root);

		while (!stack.isEmpty()) {
			TreeNode temp = stack.peek(); // top element first will be root

			/*
			 * if left and right are null, pop the stack and add to res, if any of them not
			 * null, add the elements to stack and then pop
			 */
			if (temp.left == null && temp.right == null) {
				res.add(stack.pop().val);
			} else {
				// if right leaves not null, add to stack, and empty it
				if (temp.right != null) {
					stack.push(temp.right);
					temp.right = null;
				}

				// if left leaves not null, add to stack, and empty it
				if (temp.left != null) {
					stack.push(temp.left);
					temp.left = null;
				}
			}

		}
		return res;
	}
}
