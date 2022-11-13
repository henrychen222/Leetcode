import java.util.*;

class uwi {
    public int findLatestStep(int[] arr, int m) {
        int n = arr.length;
        DJSet ds = new DJSet(n);
        boolean[] done = new boolean[n];
        int[] f = new int[n+1];
        int ret = -1;
        System.out.println(Arrays.toString(ds.upper));
        System.out.println(ds.root(0));
        for(int i = 0;i < n;i++){
            int cur = arr[i]-1;
            done[cur] = true;
            // System.out.println(Arrays.toString(done));
            if(cur-1 >= 0 && done[cur-1]){
                // System.out.println(cur-1);
                // System.out.println(ds.root(cur-1));
                f[-ds.upper[ds.root(cur-1)]]--;
                ds.union(cur-1, cur);
            }
            if(cur+1 < n && done[cur+1]){
                f[-ds.upper[ds.root(cur+1)]]--;
                ds.union(cur, cur+1);
            }
            int r = ds.root(cur);
            f[-ds.upper[r]]++;
            if(f[m] > 0){
                ret = i+1;
            }
        }
        return ret;
    }

    public static void main(String[] args) {
        int [] arr = new int[] {3, 5, 1, 2, 4};
        int m = 1;
        int [] arr2= new int[] {3, 1, 5, 4, 2};
        int m2 = 2;
        int [] arr3 = new int[] {1};
        int m3 = 1;
        int [] arr4 = new int[] {2, 1};
        int m4 = 2;

        uwi test = new uwi();
        System.out.println(test.findLatestStep(arr, m)); // 4 
        // System.out.println(test.findLatestStep(arr2, m2)); // -1
        // System.out.println(test.findLatestStep(arr3, m3)); // 1
        // System.out.println(test.findLatestStep(arr4, m4)); // 2
    }
    
    public class DJSet {
        public int[] upper;

        public DJSet(int n) {
            upper = new int[n];
            Arrays.fill(upper, -1);
        }

        public int root(int x) {
            System.out.println(Arrays.toString(upper));
            return upper[x] < 0 ? x : (upper[x] = root(upper[x]));
        }

        public boolean equiv(int x, int y) {
            return root(x) == root(y);
        }

        public boolean union(int x, int y) {
            x = root(x);
            y = root(y);
            if (x != y) {
                if (upper[y] < upper[x]) {
                    int d = x;
                    x = y;
                    y = d;
                }
                upper[x] += upper[y];
                upper[y] = x;
            }
            return x == y;
        }

        public int count() {
            int ct = 0;
            for (int u : upper)
                if (u < 0)
                    ct++;
            return ct;
        }
    }

}	