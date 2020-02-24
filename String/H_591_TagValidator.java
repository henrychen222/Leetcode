
/**
 * 2.20 morning on road
 */
import java.util.Stack;
import java.util.regex.Pattern;

class H_591_TagValidator {

    /**
     * Accepted --- 1ms 37.7 MB 100.00%
     * 
     * https://leetcode.com/problems/tag-validator/discuss/103368/java-solution-use-startswith-and-indexof
     * https://massivealgorithms.blogspot.com/2017/07/leetcode-591-tag-validator.html
     * https://blog.csdn.net/u014688145/article/details/72859739
     * 
     */
    public boolean isValid_stack(String code) {
        Stack<String> stack = new Stack<>();
        for (int i = 0; i < code.length();) {
            // 检测 <TAG>.....</TAG>DSAJSA or 检测 DSAJSA<TAG>...</TAG>这两种情况
            if (i > 0 && stack.isEmpty())
                return false;
            if (code.startsWith("<![CDATA[", i)) {
                int j = i + 9;
                i = code.indexOf("]]>", j);
                if (i < 0)
                    return false;
                i += 3;
            } else if (code.startsWith("</", i)) {
                int j = i + 2;
                i = code.indexOf('>', j);
                if (i < 0 || i == j || i - j > 9)
                    return false;
                for (int k = j; k < i; k++) {
                    if (!Character.isUpperCase(code.charAt(k)))
                        return false;
                }
                String s = code.substring(j, i++);
                if (stack.isEmpty() || !stack.pop().equals(s))
                    return false;
            } else if (code.startsWith("<", i)) {
                int j = i + 1;
                i = code.indexOf('>', j);
                if (i < 0 || i == j || i - j > 9)
                    return false;
                for (int k = j; k < i; k++) {
                    if (!Character.isUpperCase(code.charAt(k)))
                        return false;
                }
                String s = code.substring(j, i++);
                stack.push(s);
            } else {
                i++; // normal data
            }
        }
        return stack.isEmpty();
    }

    /**
     * Accepted --- 22ms 40.9 MB 7.23%
     * 
     * https://massivealgorithms.blogspot.com/2017/07/leetcode-591-tag-validator.html
     */
    public boolean isValid_regular_expression(String code) {
        if (code.equals("t"))
            return false;
        code = code.replaceAll("<!\\[CDATA\\[.*?\\]\\]>", "c");

        String prev = "";
        while (!code.equals(prev)) {
            prev = code;
            code = code.replaceAll("<([A-Z]{1,9})>[^<]*</\\1>", "t");
        }

        return code.equals("t");
    }

    /**
     * Accepted --- 14ms 39.7 MB 7.23%
     * 
     * https://medium.com/@ChYuan/leetcode-no-591-tag-validator-%E5%BF%83%E5%BE%97-medium-1cf0d2693ccd
     */
    Stack<String> stack = new Stack<>();
    boolean contains_tag = false;

    public boolean isValid_stack_regular_expression(String code) {
        String regex = "<[A-Z]{0,9}>([^<]*(<((\\/?[A-Z]{1,9}>)|(!\\[CDATA\\[(.*?)]]>)))?)*";
        if (!Pattern.matches(regex, code))
            return false;
        for (int i = 0; i < code.length(); i++) {
            boolean ending = false;
            if (stack.isEmpty() && contains_tag)
                return false;
            if (code.charAt(i) == '<') {
                if (code.charAt(i + 1) == '!') {
                    i = code.indexOf("]]>", i + 1);
                    continue;
                }
                if (code.charAt(i + 1) == '/') {
                    i++;
                    ending = true;
                }
                int closeindex = code.indexOf('>', i + 1);
                if (closeindex < 0 || !isValidTagName(code.substring(i + 1, closeindex), ending))
                    return false;
                i = closeindex;
            }
        }
        return stack.isEmpty();
    }

    public boolean isValidTagName(String s, boolean ending) {
        if (ending) {
            if (!stack.isEmpty() && stack.peek().equals(s))
                stack.pop();
            else
                return false;
        } else {
            contains_tag = true;
            stack.push(s);
        }
        return true;
    }

    public static void main(String[] args) {
        H_591_TagValidator test = new H_591_TagValidator();

        String input = "<DIV>This is the first line <![CDATA[<div>]]></DIV>";
        String input2 = "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>";

        String input3 = "<A>  <B> </A>   </B>";
        String input4 = "<DIV>  div tag is not closed  <DIV>";
        String input5 = "<DIV>  unmatched <  </DIV>";
        String input6 = "<DIV> closed tags with invalid tag name  <b>123</b> </DIV>";
        String input7 = "<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>";
        String input8 = "<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>";

        System.out.println(test.isValid_stack(input)); // true
        System.out.println(test.isValid_stack(input2)); // true
        System.out.println(test.isValid_stack(input3)); // false
        System.out.println(test.isValid_stack(input4)); // false
        System.out.println(test.isValid_stack(input5)); // false
        System.out.println(test.isValid_stack(input6)); // false
        System.out.println(test.isValid_stack(input7)); // false
        System.out.println(test.isValid_stack(input8)); // false

        System.out.println("");
        System.out.println(test.isValid_regular_expression(input));
        System.out.println(test.isValid_regular_expression(input2));
        System.out.println(test.isValid_regular_expression(input3));
        System.out.println(test.isValid_regular_expression(input4));
        System.out.println(test.isValid_regular_expression(input5));
        System.out.println(test.isValid_regular_expression(input6));
        System.out.println(test.isValid_regular_expression(input7));
        System.out.println(test.isValid_regular_expression(input8));

        System.out.println("");
        System.out.println(test.isValid_stack_regular_expression(input));
        System.out.println(test.isValid_stack_regular_expression(input2));
        System.out.println(test.isValid_stack_regular_expression(input3));
        System.out.println(test.isValid_stack_regular_expression(input4));
        System.out.println(test.isValid_stack_regular_expression(input5));
        System.out.println(test.isValid_stack_regular_expression(input6));
        System.out.println(test.isValid_stack_regular_expression(input7));
        System.out.println(test.isValid_stack_regular_expression(input8));

    }
}