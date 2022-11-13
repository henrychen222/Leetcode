// 5.2 night
import java.util.TreeMap;

class M_5402_LongestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit {

    // Accepted --- 63ms 59.5MB 22.58%
    public int longestSubarray_SaveVMK(int[] nums, int limit) {
        int n = nums.length;
        TreeMap<Integer, Integer> tm = new TreeMap<>();
        int max = 0;
        int a = 0;
        for (int i = 0; i < n; ++i) {
            if (!tm.containsKey(nums[i])) {
                tm.put(nums[i], 1);
            } else {
                tm.put(nums[i], tm.get(nums[i]) + 1);
            }
            while (tm.lastKey() - tm.firstKey() > limit) {
                tm.put(nums[a], tm.get(nums[a]) - 1);
                if (tm.get(nums[a]) == 0)
                    tm.remove(nums[a]);
                a++;
            }
            max = Math.max(max, i - a + 1);
        }
        return max;
    }

    //////////////////////////////////////////////////////////////////
    // Accepted --- 66ms 70.8MB 20.63%
    public int longestSubarray_uwi(int[] a, int limit) {
        int n = a.length;
        int low = 1, high = n + 1;
        int[][] st = build(a);
        int[] ra = new int[n];
        for (int i = 0; i < n; i++)
            ra[i] = -a[i];
        int[][] str = build(ra);
        while (high - low > 1) {
            int h = high + low >> 1;
            if (ok(h, a, limit, st, str)) {
                low = h;
            } else {
                high = h;
            }
        }
        return low;
    }

    boolean ok(int h, int[] a, int lim, int[][] st, int[][] str) {
        int n = a.length;
        for (int i = 0; i < n - h + 1; i++) {
            if (-rmq(str, i, i + h) - rmq(st, i, i + h) <= lim)
                return true;
        }
        return false;
    }

    public int[][] build(int[] a) {
        int n = a.length;
        int b = 32 - Integer.numberOfLeadingZeros(n);
        int[][] ret = new int[b][];
        for (int i = 0, l = 1; i < b; i++, l *= 2) {
            if (i == 0) {
                ret[i] = a;
            } else {
                ret[i] = new int[n - l + 1];
                for (int j = 0; j < n - l + 1; j++) {
                    ret[i][j] = Math.min(ret[i - 1][j], ret[i - 1][j + l / 2]);
                }
            }
        }
        return ret;
    }

    // [a,b)
    public int rmq(int[][] or, int l, int r) {
        assert l <= r;
        if (l >= r)
            return Integer.MAX_VALUE;
        // 1:0, 2:1, 3:1, 4:2, 5:2, 6:2, 7:2, 8:3
        int t = 31 - Integer.numberOfLeadingZeros(r - l);
        return Math.min(or[t][l], or[t][r - (1 << t)]);
    }

    //////////////////////////////////////////////////////////////////
    // Accepted --- 60 ms 58.7MB 24.83%
    public int longestSubarray_taran_1407(int[] nums, int limit) {
        MyTreeSet<Integer> set = new MyTreeSet<>();
        int ans = 1, ptr = 0;
        for (int i = 0; i < nums.length; i++) {
            set.add(nums[i]);
            while (ptr < i && set.last() - set.first() > limit) {
                set.remove(nums[ptr++]);
            }
            ans = Math.max(ans, i - ptr + 1);
        }
        return ans;
    }

    class MyTreeSet<T> {
        private int size;
        private TreeMap<T, Integer> map;

        public MyTreeSet() {
            size = 0;
            map = new TreeMap<>();
        }

        public int size() {
            return size;
        }

        public int dsize() {
            return map.size();
        }

        public boolean isEmpty() {
            return size == 0;
        }

        public void add(T t) {
            size++;
            map.put(t, map.getOrDefault(t, 0) + 1);
        }

        public boolean remove(T t) {
            if (!map.containsKey(t))
                return false;
            size--;
            int c = map.get(t);
            if (c == 1)
                map.remove(t);
            else
                map.put(t, c - 1);
            return true;
        }

        public int freq(T t) {
            return map.getOrDefault(t, 0);
        }

        public boolean contains(T t) {
            return map.getOrDefault(t, 0) > 0;
        }

        public T ceiling(T t) {
            return map.ceilingKey(t);
        }

        public T floor(T t) {
            return map.floorKey(t);
        }

        public T first() {
            return map.firstKey();
        }

        public T last() {
            return map.lastKey();
        }
    }

    public static void main(String[] args) {
        int[] nums = new int[] { 8, 2, 4, 7 };
        int limit = 4;
        int[] nums2 = new int[] { 10, 1, 2, 4, 7, 2 };
        int limit2 = 5;
        int[] nums3 = new int[] { 4, 2, 2, 2, 4, 4, 2, 2 };
        int limit3 = 0;

        M_5402_LongestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit test = new M_5402_LongestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit();
        System.out.println(test.longestSubarray_SaveVMK(nums, limit));
        System.out.println(test.longestSubarray_SaveVMK(nums2, limit2));
        System.out.println(test.longestSubarray_SaveVMK(nums3, limit3));

        System.out.println("");
        System.out.println(test.longestSubarray_uwi(nums, limit));
        System.out.println(test.longestSubarray_uwi(nums2, limit2));
        System.out.println(test.longestSubarray_uwi(nums3, limit3));

        System.out.println("");
        System.out.println(test.longestSubarray_taran_1407(nums, limit));
        System.out.println(test.longestSubarray_taran_1407(nums2, limit2));
        System.out.println(test.longestSubarray_taran_1407(nums3, limit3));
    }
}