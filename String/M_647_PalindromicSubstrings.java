/**
 * 2.17 morning on road https://leetcode.com/problems/palindromic-substrings/
 */

class M_647_PalindromicSubstrings {

    /**
     * Accepted --- 3ms 37.8 MB 64.32%
     * 
     * https://jeffchern.gitbook.io/java-notes/string/647.-palindromic-substrings
     * https://linlaw0229.github.io/2018/08/13/647-Palindromic-Substrings/ (same)
     * https://linlaw0229.github.io/2018/08/13/647-Palindromic-Substrings/ (same)
     */
    int count;

    public int countSubstrings(String s) {
        if (s == null || s.length() == 0)
            return 0;

        for (int i = 0; i < s.length(); i++) {
            isPal(s, i, i);
            isPal(s, i, i + 1);
        }
        return count;
    }

    private void isPal(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
            count++;
        }
    }

    /**
     * Accepted --- 9ms 41.9 MB 36.00%
     * 
     * https://zhuhan0.blogspot.com/2017/11/leetcode-647-palindromic-substrings.html
     */
    public int countSubstrings_DP(String s) {
        int count = 0;
        int len = s.length();
        boolean[][] f = new boolean[len][len];

        for (int i = len - 1; i >= 0; i--) {
            for (int j = i; j < len; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    f[i][j] = j - i < 2 ? true : f[i + 1][j - 1];
                    if (f[i][j] == true) {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    /**
     * Accpeted --- 10ms 41.9 MB 32.20%
     * 
     * http://buttercola.blogspot.com/2018/10/leetcode-647-palindromic-substrings.html
     */
    public int countSubstrings_DP2(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        boolean[][] dp = new boolean[s.length()][s.length()];
        int count = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            for (int j = i; j < s.length(); j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i < 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    count++;
                }
            }
        }

        return count;
    }

    public static void main(String[] args) {
        M_647_PalindromicSubstrings test = new M_647_PalindromicSubstrings();

    }
}