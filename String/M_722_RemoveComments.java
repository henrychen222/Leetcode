
/**
 * 2.12 morning on road
 * https://leetcode.com/problems/remove-comments/
 */
import java.util.ArrayList;
import java.util.List;

class M_722_RemoveComments {

    /**
     * Accepted --- 0ms 38.4 MB 100.00%
     * 
     * 逐字判断
     * 
     * https://www.jianshu.com/p/e285a92dbdbc
     * https://blog.csdn.net/magicbean2/article/details/79330484
     */
    public List<String> removeComments(String[] source) {
        List<String> result = new ArrayList<>();
        boolean inBlock = false;
        StringBuilder sb = new StringBuilder();
        for (String s : source) {
            char[] line = s.toCharArray();
            int i = 0;
            while (i < line.length) {
                if (inBlock) {
                    if ((i + 1 < line.length) && line[i] == '*' && line[i + 1] == '/') { // look for */
                        i += 2;
                        inBlock = false;
                    } else {
                        i++;
                    }
                } else {
                    if (i + 1 < line.length && line[i] == '/' && line[i + 1] == '/') { // look for //
                        break;
                    } else if (i + 1 < line.length && line[i] == '/' && line[i + 1] == '*') { // look for /*
                        i += 2;
                        inBlock = true;
                    } else {
                        sb.append(line[i]);
                        i++;
                    }
                }
            }
            if (!inBlock && sb.length() > 0) {
                result.add(sb.toString());
                sb = new StringBuilder();
            }
        }
        return result;
    }

    /**
     * Accepted --- 0ms 38.4 MB 100.00%
     * 
     * http://reeestart.me/2018/12/26/LeetCode-722-Remove-Comments/
     */
    public List<String> removeComments_same(String[] source) {
        final List<String> result = new ArrayList<>();
        boolean inBlock = false;
        final StringBuilder sb = new StringBuilder();
        for (final String s : source) {
            if (s.isEmpty())
                continue;
            final char[] line = s.toCharArray();
            for (int i = 0; i < line.length; i++) {
                if (inBlock) {
                    if (line[i] == '*' && i != line.length - 1 && line[i + 1] == '/') { // look for */
                        inBlock = false;
                        i++;
                    }
                } else {
                    if (line[i] == '/' && i != line.length - 1 && line[i + 1] == '/') { // look for //
                        break;
                    } else if (line[i] == '/' && i != line.length - 1 && line[i + 1] == '*') { // look for /*
                        inBlock = true;
                        i++;
                    } else {
                        sb.append(line[i]);
                    }
                }
            }
            if (!inBlock && sb.length() > 0) {
                result.add(sb.toString());
                sb.setLength(0);
            }
        }

        return result;
    }

    /**
     * Accepted --- 1ms 40.1 MB 27.50%
     * 
     * https://github.com/DreamerYu/LeetCode/blob/master/722-Remove%20Comments.java
     */
    public List<String> removeComments_same2(String[] source) {
        boolean inBlock = false;
        StringBuilder newline = new StringBuilder();
        List<String> result = new ArrayList<>();
        for (String s : source) {
            int i = 0;
            char[] line = s.toCharArray();

            // little difference here
            if (!inBlock)
                newline = new StringBuilder();
            while (i < s.length()) {
                // judge inBlock in each case will make it slower, better to judge once as
                // nested if, will increase performance
                if (!inBlock && i + 1 < s.length() && line[i] == '/' && line[i + 1] == '*') { // look for /*
                    inBlock = true;
                    i++;
                } else if (inBlock && i + 1 < s.length() && line[i] == '*' && line[i + 1] == '/') { // look for */
                    inBlock = false;
                    i++;
                } else if (!inBlock && i + 1 < s.length() && line[i] == '/' && line[i + 1] == '/') { // look for //
                    break;
                } else if (!inBlock) {
                    newline.append(line[i]);
                }
                i++;
            }
            if (!inBlock && newline.length() > 0) {
                result.add(new String(newline));
            }
        }
        return result;
    }

    public static void main(String[] args) {
        M_722_RemoveComments test = new M_722_RemoveComments();

        String[] source = new String[] { "/*Test program */", "int main()", "{ ", "  // variable declaration ",
                "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;",
                "}" };

        String[] source2 = new String[] { "a/*comment", "line", "more_comment*/b" };

        System.out.println(test.removeComments(source)); // ["int main()","{ "," ","int a, b, c;","a = b + c;","}"]
        System.out.println(test.removeComments(source2)); // ["ab"]

        System.out.println("");
        System.out.println(test.removeComments_same(source));
        System.out.println(test.removeComments_same(source2));

        System.out.println("");
        System.out.println(test.removeComments_same2(source));
        System.out.println(test.removeComments_same2(source2));

    }
}