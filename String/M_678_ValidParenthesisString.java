/**
 * 2.13 afternoon home https://leetcode.com/problems/valid-parenthesis-string/
 */

class M_678_ValidParenthesisString {

    /**
     * Accepted --- 6ms 37.7 MB 24.90%
     * 
     * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-678-valid-parenthesis-string/
     */
    public boolean checkValidString_DP_BottomUp(String s) {
        int l = s.length();
        if (l == 0)
            return true;
        boolean[][] dp = new boolean[l][l];

        char[] ss = s.toCharArray();
        for (int i = 0; i < l; ++i)
            if (ss[i] == '*')
                dp[i][i] = true;
        for (int len = 2; len <= l; ++len)
            for (int i = 0; i + len <= l; ++i) {
                int j = i + len - 1;

                if ((ss[i] == '*' || ss[i] == '(') && (ss[j] == '*' || ss[j] == ')')) {
                    if (len == 2 || dp[i + 1][j - 1]) {
                        dp[i][j] = true;
                        continue;
                    }
                }

                for (int k = i; k < j; ++k)
                    if (dp[i][k] && dp[k + 1][j]) {
                        dp[i][j] = true;
                        break;
                    }
            }

        return dp[0][l - 1];
    }

    /**
     * Accepted --- 12ms 37.6 MB 22.41%
     * 
     * https://leetcode.com/problems/valid-parenthesis-string/solution/
     */
    public boolean checkValidString_DP2(String s) {
        int n = s.length();
        if (n == 0)
            return true;
        boolean[][] dp = new boolean[n][n];

        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '*')
                dp[i][i] = true;
            if (i < n - 1 && (s.charAt(i) == '(' || s.charAt(i) == '*')
                    && (s.charAt(i + 1) == ')' || s.charAt(i + 1) == '*')) {
                dp[i][i + 1] = true;
            }
        }

        for (int size = 2; size < n; size++) {
            for (int i = 0; i + size < n; i++) {
                if (s.charAt(i) == '*' && dp[i + 1][i + size] == true) {
                    dp[i][i + size] = true;
                } else if (s.charAt(i) == '(' || s.charAt(i) == '*') {
                    for (int k = i + 1; k <= i + size; k++) {
                        if ((s.charAt(k) == ')' || s.charAt(k) == '*') && (k == i + 1 || dp[i + 1][k - 1])
                                && (k == i + size || dp[k + 1][i + size])) {
                            dp[i][i + size] = true;
                        }
                    }
                }
            }
        }
        return dp[0][n - 1];
    }

    /**
     * Accepted --- 0ms 37.4 MB 100.00%
     * 
     * https://leetcode.com/problems/valid-parenthesis-string/solution/
     * https://github.com/Dagon0577/LeetCode/blob/master/Type/LeetCode_String/Medium/678.%20Valid%20Parenthesis%20String.java
     * (same)
     */
    public boolean checkValidString_Greedy(String s) {
        int lo = 0, hi = 0;
        for (char c : s.toCharArray()) {
            lo += c == '(' ? 1 : -1;
            hi += c != ')' ? 1 : -1;
            if (hi < 0)
                break;
            lo = Math.max(lo, 0);
        }
        return lo == 0;
    }

    /**
     * Accepted --- 0ms 37.4 MB 100.00%
     * 
     * http://buttercola.blogspot.com/2019/02/leetcode-678-valid-parenthesis-string.html
     * https://shibaili.blogspot.com/2019/01/678-valid-parenthesis-string.html
     */
    public boolean checkValidString_Greedy2(String s) {
        if (s == null || s.length() == 0) {
            return true;
        }

        int low = 0, hi = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(') {
                hi++;
                low++;
            } else if (c == ')') {
                if (low > 0) {
                    low--;
                }
                hi--;
            } else if (c == '*') {
                if (low > 0) {
                    low--;
                }
                hi++;
            }
            if (hi < 0)
                return false;
        }

        return low == 0;
    }

    public static void main(String[] args) {
        M_678_ValidParenthesisString test = new M_678_ValidParenthesisString();

        String s1 = "()";
        String s2 = "(*)";
        String s3 = "(*))";

        System.out.println("");
        System.out.println(test.checkValidString_DP_BottomUp(s1));
        System.out.println(test.checkValidString_DP_BottomUp(s2));
        System.out.println(test.checkValidString_DP_BottomUp(s3));

        System.out.println("");
        System.out.println(test.checkValidString_DP2(s1));
        System.out.println(test.checkValidString_DP2(s2));
        System.out.println(test.checkValidString_DP2(s3));

        System.out.println("");
        System.out.println(test.checkValidString_Greedy(s1));
        System.out.println(test.checkValidString_Greedy(s2));
        System.out.println(test.checkValidString_Greedy(s3));

        System.out.println("");
        System.out.println(test.checkValidString_Greedy2(s1));
        System.out.println(test.checkValidString_Greedy2(s2));
        System.out.println(test.checkValidString_Greedy2(s3));

    }
}