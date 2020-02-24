/**
 * 2.11 morning on road
 * https://leetcode.com/problems/count-different-palindromic-subsequences/
 */
class H_730_CountDifferentPalindromicSubsequences {

    /**
     * Accepted --- 47ms 46.8 MB 62.81%
     * 
     * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-730-count-different-palindromic-subsequences/
     */
    private int[][] m_;
    private static final int kMod = 1000000007;

    public int countPalindromicSubsequences_recursion_memorization(String S) {
        int n = S.length();
        m_ = new int[n][n];
        return count(S.toCharArray(), 0, n - 1);
    }

    private int count(char[] s, int i, int j) {
        if (i > j)
            return 0;
        if (i == j)
            return 1;
        if (m_[i][j] > 0)
            return m_[i][j];

        long ans = 0;

        if (s[i] == s[j]) {
            ans += count(s, i + 1, j - 1) * 2;
            int l = i + 1;
            int r = j - 1;
            while (l <= r && s[l] != s[i])
                ++l;
            while (l <= r && s[r] != s[i])
                --r;
            if (l > r)
                ans += 2;
            else if (l == r)
                ans += 1;
            else
                ans -= count(s, l + 1, r - 1);
        } else {
            ans = count(s, i, j - 1) + count(s, i + 1, j) - count(s, i + 1, j - 1);
        }

        m_[i][j] = (int) ((ans + kMod) % kMod);
        return m_[i][j];
    }

    /**
     * Accepted --- 96ms 57.7 MB 26.50%
     * 
     * https://cheonhyangzhang.gitbooks.io/leetcode-solutions/730-count-different-palindromic-subsequences.html
     */
    public int countPalindromicSubsequences_DP(String S) {
        int base = 1000000007;
        long[][] dp = new long[S.length()][S.length()];
        for (int l = 1; l <= S.length(); l++) {
            for (int i = 0; i + l - 1 < S.length(); i++) {
                int j = i + l - 1;
                if (l == 1) {
                    dp[i][j] = 1;
                    continue;
                }
                if (l == 2) {
                    dp[i][j] = 2;
                    continue;
                }
                if (S.charAt(i) == S.charAt(j)) {
                    int left = i + 1, right = j - 1;
                    while (left <= right && S.charAt(left) != S.charAt(i)) {
                        left++;
                    }
                    while (left <= right && S.charAt(right) != S.charAt(i)) {
                        right--;
                    }
                    if (left > right) {
                        dp[i][j] = dp[i + 1][j - 1] * 2 + 2;
                    } else if (left == right) {
                        dp[i][j] = dp[i + 1][j - 1] * 2 + 1;
                    } else {
                        dp[i][j] = dp[i + 1][j - 1] * 2 - dp[left + 1][right - 1];
                    }
                } else {
                    dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
                }
                dp[i][j] = dp[i][j] < 0 ? dp[i][j] + base : dp[i][j] % base;
            }
        }
        return (int) dp[0][S.length() - 1];
    }

    public static void main(String[] args) {
        H_730_CountDifferentPalindromicSubsequences test = new H_730_CountDifferentPalindromicSubsequences();

        String S = "bccb";
        String S2 = "abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba";

        System.out.println(test.countPalindromicSubsequences_recursion_memorization(S)); // 6
        System.out.println(test.countPalindromicSubsequences_recursion_memorization(S2)); // 104860361

        System.out.println(test.countPalindromicSubsequences_DP(S));
        System.out.println(test.countPalindromicSubsequences_DP(S2));

    }
}