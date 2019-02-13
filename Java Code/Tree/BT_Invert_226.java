/* 2.12 night 
 * https://leetcode.com/problems/invert-binary-tree/
 */
package Tree;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class BT_Invert_226 {

	public void recursion(TreeNode node) {
		if (node == null) {
			return;
		}

		//// switch left and right use root as a temp
		TreeNode temp;
		temp = node.left;
		node.left = node.right;
		node.right = temp;

		recursion(node.left);
		recursion(node.right);
	}

	public TreeNode LinkedList_iteration(TreeNode node) {
		LinkedList<TreeNode> lk = new LinkedList<TreeNode>();
		if (node != null) {
			lk.add(node);
		}

		while (!lk.isEmpty()) {
			TreeNode retrieve = lk.poll(); // Retrieves and removes the head (first element) of this list

			// add all left and right node to lk
			if (retrieve.left != null) {
				lk.add(retrieve.left);
			}
			if (retrieve.right != null) {
				lk.add(retrieve.right);
			}

			// swap left and right
			TreeNode temp = retrieve.left;
			retrieve.left = retrieve.right;
			retrieve.right = temp;
		}
		return node;
	}

	public TreeNode invertTree(TreeNode root) {
		// //Method 1 Recursion
		// recursion(root);

		// Method 2 Iteration
		LinkedList_iteration(root);
		return root;
	}

	public static void main(String[] args) {
		BT_Invert_226 test = new BT_Invert_226();

		// Create Tree [4,2,7,1,3,6,9]
		TreeNode root = new TreeNode(4);
		root.left = new TreeNode(2);
		root.right = new TreeNode(7);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(3);
		root.right.left = new TreeNode(6);
		root.right.right = new TreeNode(9);

		// check input
		root.printPreorder(root); // leetcode preorder wrong
		System.out.println();

		// check output
		TreeNode result_node = test.invertTree(root);
		root.printPreorder(result_node);
		System.out.println("  different from leetcode [4 7 2 9 6 3 1]\n");
		root.printInorder(result_node);
		System.out.println();
		root.printPostorder(result_node);
	}
}
