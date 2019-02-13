/*2.8 night 2.9 dawn
 * 
 * https://leetcode.com/problems/count-complete-tree-nodes/
 * https://www.jianshu.com/p/5cc3ff91331d  (create tree)
 * https://www.geeksforgeeks.org/binary-tree-set-1-introduction/ (create tree)
 * */

package Tree;

import java.lang.Math;

public class Count_CompleteTreeNodes_222 {

	public int countNodes(TreeNode root) {
		if (root == null) {
			return 0;
		}
		int left_heights = getLeftHeights(root);
		int right_heights = getRightHeights(root);

		// when left and right are equal, nodes = 2^h -1
		// when not equal, recursively get nodes from left&right sub-trees
		if (left_heights == right_heights) {
			return (int) (Math.pow(2, left_heights) - 1);
		} else {
			return countNodes(root.left) + countNodes(root.right) + 1;
		}
	}

	// get the height of left-most part
	public int getLeftHeights(TreeNode node) {
		if (node == null) {
			return 0;
		}
		int left_height = 1;
		while (node.left != null) {
			left_height++;
			node = node.left;
		}
		return left_height;
	}

	// get the height of right-most part
	public int getRightHeights(TreeNode node) {
		if (node == null) {
			return 0;
		}
		int right_height = 1;
		while (node.right != null) {
			right_height++;
			node = node.right;
		}
		return right_height;
	}
	
	public static void main(String[] args) {
		Count_CompleteTreeNodes_222 test = new Count_CompleteTreeNodes_222();
		
		//Create Tree
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        
        //count the Nodes
        System.out.println(test.countNodes(root));
    }

}
