// 4.25 night
class M_1423_MaximumPointsYouCanObtainFromCards {
    public int maxScore_uwi(int[] cardPoints, int k) {
        int n = cardPoints.length;
        int[] cum = new int[n + 1];
        for (int i = 0; i < n; i++)
            cum[i + 1] = cum[i] + cardPoints[i];
        int ans = 0;
        for (int i = 0; i <= k; i++) {
            ans = Math.max(ans, cum[i] + cum[n] - cum[n - k + i]);
        }
        return ans;
    }

    public static void main(String[] args) {
        M_1423_MaximumPointsYouCanObtainFromCards test = new M_1423_MaximumPointsYouCanObtainFromCards();

        int[] cardPoints = new int[] { 1, 2, 3, 4, 5, 6, 1 };
        int k = 3;

        int[] cardPoints2 = new int[] { 2, 2, 2 };
        int k2 = 2;

        int[] cardPoints3 = new int[] { 9, 7, 7, 9, 7, 7, 9 };
        int k3 = 7;

        int[] cardPoints4 = new int[] { 1, 1000, 1 };
        int k4 = 1;

        int[] cardPoints5 = new int[] { 1, 79, 80, 1, 1, 1, 200, 1 };
        int k5 = 3;

        int[] debug1_cardPoints = new int[] { 100, 40, 17, 9, 73, 75 };
        int debug1_k = 3;

        System.out.println(test.maxScore_uwi(cardPoints, k));
        System.out.println(test.maxScore_uwi(cardPoints2, k2));
        System.out.println(test.maxScore_uwi(cardPoints3, k3));
        System.out.println(test.maxScore_uwi(cardPoints4, k4));
        System.out.println(test.maxScore_uwi(cardPoints5, k5));
        System.out.println(test.maxScore_uwi(debug1_cardPoints, debug1_k));

    }

}