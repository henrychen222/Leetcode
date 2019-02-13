/* 2.7 evening  
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * */

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */

package Tree;

import java.util.Stack;

public class BST_Iterator_173 {
	Stack<TreeNode> stack = new Stack<TreeNode>();

	public BST_Iterator_173(TreeNode root) {
		// add root to stack and point to the left
		while (root != null) {
			stack.push(root);
			root = root.left;
		}

	}

	/** @return the next smallest number */
	public int next() {
		TreeNode node = stack.pop();
		int res = node.val;  // cannot return node.val directly, or will report null pointer exception
		// point to the right if exists followed the BST_Iterator, 
		if (node.right != null) {
			node = node.right; 
			//iterator over left leaves
			while (node != null) {
				stack.push(node);
				node = node.left;
			}
		}
		return res;
	}

	/** @return whether we have a next smallest number */
	public boolean hasNext() {
		if (!stack.isEmpty()) {
			return true;
		}
		return false;
		
//		return !stack.isEmpty();
	}

}
