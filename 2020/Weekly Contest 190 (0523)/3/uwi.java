public class uwi {
    public int pseudoPalindromicPaths(TreeNode root) {
        dfs(root, 0);
        return ct;
    }

    int ct = 0;

    void dfs(TreeNode root, int ptn) {
        if (root == null)
            return;
        ptn ^= 1 << root.val;
        if ((ptn & ptn - 1) == 0 && root.left == null && root.right == null) {
            ct++;
        }
        dfs(root.left, ptn);
        dfs(root.right, ptn);
    }

    public static void main(String[] args) {
        // [2, 3, 1, 3, 1, null, 1];
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(3);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(1);
        root.right.right = new TreeNode(1);

        // [2, 1, 1, 1, 3, null, null, null, null, null, 1]
        TreeNode root2 = new TreeNode(2);
        root2.left = new TreeNode(1);
        root2.right = new TreeNode(1);
        root2.left.left = new TreeNode(1);
        root2.left.right = new TreeNode(3);
        root2.left.right.right = new TreeNode(1);

        // [9]
        TreeNode root3 = new TreeNode(9);

        uwi test = new uwi();
        System.out.println(test.pseudoPalindromicPaths(root));
        System.out.println(test.pseudoPalindromicPaths(root2));
        System.out.println(test.pseudoPalindromicPaths(root3));
    }
}