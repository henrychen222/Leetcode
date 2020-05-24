
/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
 */
import java.util.ArrayList;
import java.util.List;

class tian_tang_6 {
    public int minTime(int n, int[][] edges, List<Boolean> hasApple) {
        Node[] nodes = new Node[n];
        for (int i = 0; i < n; i++) {
            nodes[i] = new Node();
            nodes[i].hasApple = hasApple.get(i);
        }
        for (int[] e : edges) {
            Node a = nodes[e[0]];
            Node b = nodes[e[1]];
            a.next.add(b);
            b.next.add(a);
        }

        dfs(nodes[0], null);
        int ans = count(nodes[0], null);
        return ans;
    }

    public void dfs(Node root, Node p) {
        for (Node node : root.next) {
            if (node == p) {
                continue;
            }
            dfs(node, root);
            root.hasApple = root.hasApple || node.hasApple;
        }
    }

    public int count(Node root, Node p) {
        int ans = 0;
        if (root.hasApple && p != null) {
            ans += 2;
        }
        for (Node node : root.next) {
            if (node == p) {
                continue;
            }
            ans += count(node, root);
        }

        return ans;
    }

    public static void main(String[] args) {
        int n = 7;
        int[][] edges = new int[][] { { 0, 1 }, { 0, 2 }, { 1, 4 }, { 1, 5 }, { 2, 3 }, { 2, 6 } };
        List<Boolean> hasApple = new ArrayList<>();
        hasApple.add(false);
        hasApple.add(false);
        hasApple.add(true);
        hasApple.add(false);
        hasApple.add(true);
        hasApple.add(true);
        hasApple.add(false);
        List<Boolean> hasApple2 = new ArrayList<>();
        hasApple2.add(false);
        hasApple2.add(false);
        hasApple2.add(true);
        hasApple2.add(false);
        hasApple2.add(false);
        hasApple2.add(true);
        hasApple2.add(false);
        List<Boolean> hasApple3 = new ArrayList<>();
        hasApple3.add(false);
        hasApple3.add(false);
        hasApple3.add(false);
        hasApple3.add(false);
        hasApple3.add(false);
        hasApple3.add(false);
        hasApple3.add(false);

        tian_tang_6 test = new tian_tang_6();
        System.out.println(test.minTime(n, edges, hasApple)); // 8
        System.out.println(test.minTime(n, edges, hasApple2)); // 6
        System.out.println(test.minTime(n, edges, hasApple3)); // 0

    }
}

class Node {
    List<Node> next = new ArrayList<>();
    boolean hasApple;
}
