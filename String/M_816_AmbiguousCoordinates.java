
/**
 * 1.21 morning on road   morning company
 * https://leetcode.com/problems/ambiguous-coordinates/
 */
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class M_816_AmbiguousCoordinates {

    /**
     * Accepted --- 17ms 46.1 MB 12.59%
     * 
     * https://leetcode.com/articles/ambiguous-coordinates/# Cartesian Product
     * https://gist.github.com/BiruLyu/3b27043bf49677e59e35b1bef82a68fd
     */
    public List<String> ambiguousCoordinates(String S) {
        List<String> ans = new ArrayList<String>();
        for (int i = 2; i < S.length() - 1; ++i)
            for (String left : make(S, 1, i))
                for (String right : make(S, i, S.length() - 1))
                    ans.add("(" + left + ", " + right + ")");
        return ans;
    }

    public List<String> make(String S, int i, int j) {
        // Make on S.substring(i, j)
        List<String> ans = new ArrayList<String>();
        for (int d = 1; d <= j - i; ++d) {
            String left = S.substring(i, i + d);
            String right = S.substring(i + d, j);
            if ((!left.startsWith("0") || left.equals("0")) && !right.endsWith("0"))
                ans.add(left + (d < j - i ? "." : "") + right);
        }
        return ans;
    }

    /**
     * Accepted --- 11ms 45.9 MB 14.81%
     * 
     * https://buttercola.blogspot.com/2018/04/leetcode-816-ambiguous-coordinates.html?m=0
     */
    public List<String> ambiguousCoordinates2(String S) {
        List<String> ans = new ArrayList<>();

        // step 1: split the string S into two halves, by inserting a comma
        for (int i = 2; i <= S.length() - 2; i++) {
            List<String> leftCoordinates = findAllValidCoordinates(S.substring(1, i));
            List<String> rightCoordinates = findAllValidCoordinates(S.substring(i, S.length() - 1));
            for (String left : leftCoordinates) {
                for (String right : rightCoordinates) {
                    String s = '(' + left + ", " + right + ')';
                    ans.add(s);
                }
            }
        }
        return ans;
    }

    private List<String> findAllValidCoordinates(String s) {
        List<String> ans = new ArrayList<>();
        for (int i = 1; i <= s.length(); i++) {
            String left = s.substring(0, i);
            String right = s.substring(i, s.length());
            if ((left.equals("0") || !left.startsWith("0")) && !right.endsWith("0")) {
                String validString = i == s.length() ? left : left + '.' + right;
                ans.add(validString);
            }
        }
        return ans;
    }

    /**
     * Accepted --- 10ms 45.9 MB 15.56%
     * 
     * https://www.cnblogs.com/ruruozhenhao/p/10786871.html
     * https://zhuanlan.zhihu.com/p/35711572
     */
    public List<String> ambiguousCoordinates3(String S) {
        List<String> ans = new ArrayList<>();
        int n = S.length();
        for (int i = 1; i < n - 1; ++i) {
            List<String> A = f(S.substring(1, i)), B = f(S.substring(i, n - 1));
            for (String a : A)
                for (String b : B)
                    ans.add("(" + a + ", " + b + ")");
        }
        return ans;
    }

    public List<String> f(String s) {
        int n = s.length();
        List<String> ret = new ArrayList<>();
        if (n == 0 || n > 1 && s.charAt(0) == '0' && s.charAt(n - 1) == '0')
            return ret;
        if (n > 1 && s.charAt(0) == '0') {
            ret.add("0." + s.substring(1));
            return ret;
        }
        ret.add(s);
        if (n == 1 || s.charAt(n - 1) == '0')
            return ret;
        for (int i = 1; i < n; ++i) {
            ret.add(s.substring(0, i) + "." + s.substring(i, n));
        }
        return ret;
    }

    /**
     * Accepted --- 14ms 46.9 MB 14.81%
     * 
     * https://gist.github.com/BiruLyu/3b27043bf49677e59e35b1bef82a68fd
     */
    public List<String> ambiguousCoordinates4(String S) {
        Set<String> res = new HashSet<>();
        int len = S.length();
        for (int i = 2; i < len - 1; i++) {
            List<String> left = addPoint(S.substring(1, i));
            List<String> right = addPoint(S.substring(i, len - 1));
            if (left.size() > 0 && right.size() > 0) {
                for (String l : left) {
                    for (String r : right) {
                        res.add("(" + l + ", " + r + ")");
                    }
                }
            }
        }
        List<String> ans = new ArrayList<>();
        for (String a : res) {
            ans.add(a);
        }
        return ans;
    }

    private List<String> addPoint(String input) {
        List<String> res = new ArrayList<>();
        int len = input.length();
        if (len < 1)
            return res;
        boolean nonZero = false;
        if (input.charAt(0) == '0' && len == 1) {
            res.add("0");
            return res;
        } else if (input.charAt(0) == '0') {
            for (int i = len - 1; i > 0; i--) {
                if (input.charAt(i) != '0') {
                    nonZero = true;
                }
            }
            if (nonZero && input.charAt(len - 1) != '0') {
                res.add(input.substring(0, 1) + "." + input.substring(1));
            }
            return res;
        } else {
            for (int i = len - 1; i > 0; i--) {
                if (nonZero && input.charAt(len - 1) != '0') {
                    res.add(input.substring(0, i) + "." + input.substring(i));
                }
                if (!nonZero && input.charAt(i) != '0' && input.charAt(len - 1) != '0') {
                    nonZero = true;
                    res.add(input.substring(0, i) + "." + input.substring(i));
                }
            }
            if (nonZero || input.charAt(0) != '0') {
                res.add(input);
            }
        }
        return res;
    }

    public static void main(String[] args) {
        M_816_AmbiguousCoordinates test = new M_816_AmbiguousCoordinates();

        String s1 = "(123)";
        String s2 = "(00011)";
        String s3 = "(0123)";
        String s4 = "(100)";

        System.out.println(test.ambiguousCoordinates(s1)); // ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
        System.out.println(test.ambiguousCoordinates(s2)); // ["(0.001, 1)", "(0, 0.011)"]
        System.out.println(test.ambiguousCoordinates(s3)); // ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)",
                                                           // "(0.1,2.3)", "(0.12, 3)"]
        System.out.println(test.ambiguousCoordinates(s4)); // [(10, 0)]

        System.out.println("");
        System.out.println(test.ambiguousCoordinates2(s1));
        System.out.println(test.ambiguousCoordinates2(s2));
        System.out.println(test.ambiguousCoordinates2(s3));
        System.out.println(test.ambiguousCoordinates2(s4));

        System.out.println("");
        System.out.println(test.ambiguousCoordinates3(s1));
        System.out.println(test.ambiguousCoordinates3(s2));
        System.out.println(test.ambiguousCoordinates3(s3));
        System.out.println(test.ambiguousCoordinates3(s4));

        System.out.println("");
        System.out.println(test.ambiguousCoordinates4(s1));
        System.out.println(test.ambiguousCoordinates4(s2));
        System.out.println(test.ambiguousCoordinates4(s3));
        System.out.println(test.ambiguousCoordinates4(s4));

    }
}