import java.util.*;

class uwi {
    public int maxSumRangeQuery(int[] nums, int[][] requests) {
        int n = nums.length;
        int[] f = new int[n+1];
        for(int[] r : requests){
            f[r[0]]++;
            f[r[1]+1]--;
        }
        // System.out.println(Arrays.toString(f));
        for(int i = 0;i < n;i++){
            f[i+1] += f[i];
        }
        // System.out.println(Arrays.toString(f));
        f = Arrays.copyOf(f, n);
        // System.out.println(Arrays.toString(f));
        Arrays.sort(f);
        Arrays.sort(nums);
        long ans = 0;
        int mod = 1000000007;
        for(int i = 0;i < n;i++){
            ans += (long)f[i] * nums[i];
            ans %= mod;
        }
        return (int)ans;
    }

    public static void main(String[] args) {
        uwi test = new uwi();

        int[] nums = new int[]{1, 2, 3, 4, 5};
        int[][] requests = new int[][] {{1, 3}, {0, 1}};
       
        int[] nums2 = new int[]{1, 2, 3, 4, 5, 6};
        int[][] requests2 = new int[][] {{0, 1}};

        int[] nums3 = new int[]{1, 2, 3, 4, 5, 10};
        int[][] requests3 = new int[][] {{0, 2}, {1, 3}, {1, 1}};

        System.out.println(test.maxSumRangeQuery(nums, requests));
        System.out.println(test.maxSumRangeQuery(nums2, requests2));
        System.out.println(test.maxSumRangeQuery(nums3, requests3));
    }
}