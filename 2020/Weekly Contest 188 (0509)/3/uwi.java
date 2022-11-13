
/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/  Tree
 */
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

class uwi {
    public int minTime(int n, int[][] edges, List<Boolean> hasApple) {
        int[][] g = packU(n, edges);
        int[][] pars = parents3(g, 0);
        int[] par = pars[0];
        boolean[] ved = new boolean[n];
        int ct = 0;
        for (int i = 0; i < n; i++) {
            if (hasApple.get(i).booleanValue()) {
                for (int j = i; j != -1; j = par[j]) {
                    if (ved[j])
                        break;
                    ved[j] = true;
                    ct++;
                }
            }
        }
        if (ct == 0)
            return 0;
        return 2 * (ct - 1);
    }

    public int[][] parents3(int[][] g, int root) {
        int n = g.length;
        int[] par = new int[n];
        Arrays.fill(par, -1);

        int[] depth = new int[n];
        depth[0] = 0;

        int[] q = new int[n];
        q[0] = root;
        for (int p = 0, r = 1; p < r; p++) {
            int cur = q[p];
            for (int nex : g[cur]) {
                if (par[cur] != nex) {
                    q[r++] = nex;
                    par[nex] = cur;
                    depth[nex] = depth[cur] + 1;
                }
            }
        }
        return new int[][] { par, q, depth };
    }

    public int[][] packU(int n, int[][] ft) {
        int[][] g = new int[n][];
        int[] p = new int[n];
        for (int[] u : ft) {
            p[u[0]]++;
            p[u[1]]++;
        }
        for (int i = 0; i < n; i++)
            g[i] = new int[p[i]];
        for (int[] u : ft) {
            g[u[0]][--p[u[0]]] = u[1];
            g[u[1]][--p[u[1]]] = u[0];
        }
        return g;
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

        uwi test = new uwi();
        System.out.println(test.minTime(n, edges, hasApple)); // 8
        System.out.println(test.minTime(n, edges, hasApple2)); // 6
        System.out.println(test.minTime(n, edges, hasApple3)); // 0

    }

}