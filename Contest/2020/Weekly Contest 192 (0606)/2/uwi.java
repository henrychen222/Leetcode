import java.util.Arrays;

class uwi {
    public int[] getStrongest(int[] a, int K) {
        Arrays.sort(a);
        int m = a[(a.length - 1) / 2];
        long[] ai = new long[a.length];
        System.out.println(Arrays.toString(ai));
        for (int i = 0; i < a.length; i++) {
            ai[i] = (long) Math.abs(a[i] - m) << 32 | a[i] + 100000;
        }
        System.out.println(Arrays.toString(ai));
        Arrays.sort(ai);
        System.out.println(Arrays.toString(ai));
        for (int i = 0; i < a.length; i++) {
            a[i] = ((int) ai[a.length - 1 - i]) - 100000;
        }
        System.out.println(Arrays.toString(a));
        return Arrays.copyOf(a, K);
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 1, 2, 3, 4, 5 };
        int k = 2;
        int[] arr2 = new int[] { 1, 1, 3, 5, 5 };
        int k2 = 2;
        int[] arr3 = new int[] { 6, 7, 11, 7, 6, 8 };
        int k3 = 5;
        int[] arr4 = new int[] { 6, -3, 7, 2, 11 };
        int k4 = 3;
        int[] arr5 = new int[] { -7, 22, 17, 3 };
        int k5 = 2;
        uwi test = new uwi();
        System.out.println(Arrays.toString(test.getStrongest(arr, k)));
        // System.out.println(Arrays.toString(test.getStrongest(arr2, k2)));
        // System.out.println(Arrays.toString(test.getStrongest(arr3, k3)));
        // System.out.println(Arrays.toString(test.getStrongest(arr4, k4)));
        // System.out.println(Arrays.toString(test.getStrongest(arr5, k5)));
    }
}