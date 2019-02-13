/*
1.27 afternoon
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

offer(): https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html#offer(E)
poll(): https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html#poll()
 */

package Tree;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

public class Zigzag_Level_Order_103 {
    //Method 1 Correct
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {

        List<List<Integer>> res = new LinkedList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        Stack<Integer> stack = new Stack<>();
        int count = 1;

//        //here is wrong should inside the while loop
////        int tmpCount = 0;
////        List<Integer> list = new LinkedList<>();

        queue.offer(root);
        boolean fromRightToLeft = false;

        while (!queue.isEmpty()) {
            int tmpCount = 0;
            List<Integer> list = new LinkedList<>();

            for (int i = 0; i < count; i++) {
                TreeNode node = queue.poll();
                if (node == null) {
                    continue;
                }
                //???
                if (fromRightToLeft) {
                    stack.push(node.val);
                } else {
                    list.add(node.val);
                }

                queue.offer(node.left);
                queue.offer(node.right);

                tmpCount += 2;
            }
            while (!stack.isEmpty()) {
                list.add(stack.pop());
            }
            if (!list.isEmpty()) {
                res.add(list);
            }
            //???
            fromRightToLeft = !fromRightToLeft;
            count = tmpCount;
        }
        return res;
    }

    /*Some other Methods
        http://www.cnblogs.com/springfor/p/3891393.html
        https://blog.csdn.net/linhuanmars/article/details/24509105
        https://github.com/awangdev/LintCode/blob/master/Java/Binary%20Tree%20Zigzag%20Level%20Order%20Traversal.java
        https://blog.csdn.net/crazy1235/article/details/51524241
    */
}
