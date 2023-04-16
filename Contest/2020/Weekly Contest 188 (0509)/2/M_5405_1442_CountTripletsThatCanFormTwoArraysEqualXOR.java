/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * Array
 */

class M_5405_1442_CountTripletsThatCanFormTwoArraysEqualXOR {
    public int countTriplets_tian_tang_6(int[] arr) {
        int[] xor = new int[arr.length + 1];
        for (int i = 1; i <= arr.length; i++) {
            xor[i] = xor[i - 1] ^ arr[i - 1];
        }
        int n = arr.length;
        int ans = 0;
        for (int i = 1; i <= n; i++) {
            for (int k = i + 1; k <= n; k++) {
                int val = xor[k] ^ xor[i - 1];
                if (val != 0) {
                    continue;
                }
                ans += (k - i + 1) - 1;
            }
        }
        return ans;
    }

    public int countTriplets_uwi(int[] a) {
        int n = a.length;
        int[] cum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            cum[i + 1] = cum[i] ^ a[i];
        }
        int ct = 0;
        for (int i = 0; i <= n; i++) {
            for (int k = i + 2; k <= n; k++) {
                if (cum[i] == cum[k]) {
                    ct += k - i - 1;
                }
            }
        }
        return ct;
    }

    public static void main(String[] args) {
        System.out.println("\nJava Code Results: ");

        int[] arr = new int[] { 2, 3, 1, 6, 7 };
        int[] arr2 = new int[] { 1, 1, 1, 1, 1 };
        int[] arr3 = new int[] { 2, 3 };
        int[] arr4 = new int[] { 1, 3, 5, 7, 9 };
        int[] arr5 = new int[] { 7, 11, 12, 9, 5, 2, 7, 17, 22 };

        M_5405_1442_CountTripletsThatCanFormTwoArraysEqualXOR test = new M_5405_1442_CountTripletsThatCanFormTwoArraysEqualXOR();
        System.out.println(test.countTriplets_tian_tang_6(arr)); // 4
        System.out.println(test.countTriplets_tian_tang_6(arr2)); // 10
        System.out.println(test.countTriplets_tian_tang_6(arr3)); // 0
        System.out.println(test.countTriplets_tian_tang_6(arr4)); // 3
        System.out.println(test.countTriplets_tian_tang_6(arr5)); // 8

        System.out.println("");
        System.out.println(test.countTriplets_uwi(arr));
        System.out.println(test.countTriplets_uwi(arr2));
        System.out.println(test.countTriplets_uwi(arr3));
        System.out.println(test.countTriplets_uwi(arr4));
        System.out.println(test.countTriplets_uwi(arr5));

    }
}