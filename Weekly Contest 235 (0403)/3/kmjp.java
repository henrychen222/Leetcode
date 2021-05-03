// 04/04/21 night

import java.util.*;
import static java.lang.System.out;

public class kmjp {
	private final int MAX = Integer.MAX_VALUE;
	private final int MIN = Integer.MIN_VALUE;
	private final int MOD = 1000000007;

    // Accepted --- 188ms 60.00%
	public int minAbsoluteSumDiff(int[] a, int[] b) {
		TreeSet<Integer> se = new TreeSet<>(Arrays.asList(MAX, MIN));
		long res, sum;
		res = sum = 0;
		int n = a.length;
		for (int i = 0; i < n; i++) {
			se.add(a[i]);
			sum += Math.abs(a[i] - b[i]);
		}
		// out.println(se);
		res = sum;
		for (int i = 0; i < n; i++) {
			int it = lower_bound(se, b[i]);
			// out.println(it);
			res = Math.min(res, sum - Math.abs(a[i] - b[i]) + Math.abs(it - b[i]));
			it = se.lower(it);
			// out.println(it);
			res = Math.min(res, sum - Math.abs(a[i] - b[i]) + Math.abs(it - b[i]));
		}
		return (int) (res % MOD);
	}

	public int lower_bound(TreeSet<Integer> se, int t) {
		int res = -1;
		if (se.contains(t)) {
			res = t;
		} else {
			res = se.higher(t);
		}
		return res;
	};

	public static void main(String[] args) {
		int [] nums1 = {1, 7, 5};
		int [] nums2 = {2, 3, 5};
		int [] nums1_2 = {2, 4, 6, 8, 10};
		int [] nums2_2 = {2, 4, 6, 8, 10};
		int [] nums1_3 = {1, 10, 4, 4, 2, 7};
		int [] nums2_3 = {9, 3, 5, 1, 7, 4};
		kmjp t = new kmjp();
		// out.println(t.minAbsoluteSumDiff(nums1, nums2));
		// out.println(t.minAbsoluteSumDiff(nums1_2, nums2_2));
		// out.println(t.minAbsoluteSumDiff(nums1_3, nums2_3));

		// Testts
		TreeSet<Integer> ts = new TreeSet<>(Arrays.asList(1, 7, 5));
		out.println(ts.lower(-5));
        out.println(ts.lower(0));
		out.println(ts.lower(1));
		out.println(ts.lower(2));
		out.println(ts.lower(3));
		out.println(ts.lower(4));
		out.println(ts.lower(5));
		out.println(ts.lower(6));
		out.println(ts.lower(7));
		out.println(ts.lower(9));
		out.println(ts.lower(1000));
		out.println();
		out.println(ts.higher(-5));
		out.println(ts.higher(0));
		out.println(ts.higher(1));
		out.println(ts.higher(2));
		out.println(ts.higher(3));
		out.println(ts.higher(4));
		out.println(ts.higher(5));
		out.println(ts.higher(6));
		out.println(ts.higher(7));
		out.println(ts.higher(9));
		out.println(ts.higher(1000));
	}
}