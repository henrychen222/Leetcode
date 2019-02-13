//1.25 afternoon

package Tree;

public class TreeNode {
	int val;
	TreeNode left;
	TreeNode right;

	TreeNode(int x) {
		val = x;
	}

	// 2.12 night
	// https://www.geeksforgeeks.org/print-level-order-traversal-line-line/ 2.12
	void printPreorder(TreeNode root) {
		if (root == null)
			return;
		// 根左右
		System.out.print(root.val + " ");
		printPreorder(root.left);
		printPreorder(root.right);
	}

	void printInorder(TreeNode root) {
		if (root == null)
			return;
		// 左根右
		printInorder(root.left);
		System.out.print(root.val + " ");
		printInorder(root.right);
	}

	void printPostorder(TreeNode root) {
		if (root == null)
			return;
		// 左右根
		printPostorder(root.left);
		printPostorder(root.right);
		System.out.print(root.val + " ");
	}

}
