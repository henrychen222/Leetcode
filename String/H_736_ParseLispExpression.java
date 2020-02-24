
/**
 * 2.5 morning on road  2.7 afternoon
 * https://leetcode.com/problems/parse-lisp-expression/
 */
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

class H_736_ParseLispExpression {

    /**
     * Accepted --- 5ms 41.6 MB 62.35%
     * 
     * https://leetcode.com/articles/parse-lisp-expression/#
     */
    ArrayList<Map<String, Integer>> scope;

    public H_736_ParseLispExpression() {
        scope = new ArrayList<Map<String, Integer>>();
        scope.add(new HashMap<String, Integer>());
    }

    public int evaluate(String expression) {
        scope.add(new HashMap<String, Integer>());
        int ans = evaluate_inner(expression);
        scope.remove(scope.size() - 1);
        return ans;
    }

    public int evaluate_inner(String expression) {
        if (expression.charAt(0) != '(') {
            if (Character.isDigit(expression.charAt(0)) || expression.charAt(0) == '-')
                return Integer.parseInt(expression);
            for (int i = scope.size() - 1; i >= 0; --i) {
                if (scope.get(i).containsKey(expression))
                    return scope.get(i).get(expression);
            }
        }

        List<String> tokens = parse(expression.substring(expression.charAt(1) == 'm' ? 6 : 5, expression.length() - 1));
        if (expression.startsWith("add", 1)) {
            return evaluate(tokens.get(0)) + evaluate(tokens.get(1));
        } else if (expression.startsWith("mult", 1)) {
            return evaluate(tokens.get(0)) * evaluate(tokens.get(1));
        } else {
            for (int j = 1; j < tokens.size(); j += 2) {
                scope.get(scope.size() - 1).put(tokens.get(j - 1), evaluate(tokens.get(j)));
            }
            return evaluate(tokens.get(tokens.size() - 1));
        }
    }

    public List<String> parse(String expression) {
        List<String> ans = new ArrayList<String>();
        int bal = 0;
        StringBuilder buf = new StringBuilder();
        for (String token : expression.split(" ")) {
            for (char c : token.toCharArray()) {
                if (c == '(')
                    bal++;
                if (c == ')')
                    bal--;
            }
            if (buf.length() > 0)
                buf.append(" ");
            buf.append(token);
            if (bal == 0) {
                ans.add(new String(buf));
                buf = new StringBuilder();
            }
        }
        if (buf.length() > 0)
            ans.add(new String(buf));

        return ans;
    }

    /**
     * Accepted --- 2ms 38.8 MB 100.00%
     * 
     * https://github.com/jashion/Leetcode-1/blob/master/736%20-%20Parse%20Lisp%20Expression.java
     */
    int pos;
    LinkedList<Map<String, Integer>> scopes;

    public int evaluate2(String expression) {
        pos = 0;
        scopes = new LinkedList<>();
        return eval(expression);
    }

    private int eval(String s) {
        scopes.addFirst(new HashMap<>());

        int value = 0;
        if (pos < s.length() && s.charAt(pos) == '(') {
            pos += 1;
        }

        String token = getToken(s);

        if (token.equals("add")) {
            // " exp1 exp2)"
            pos += 1;
            int v1 = eval(s);
            pos += 1;
            int v2 = eval(s);
            value = v1 + v2;
        } else if (token.equals("mult")) {
            // " exp1 exp2)"
            pos += 1;
            int v1 = eval(s);
            pos += 1;
            int v2 = eval(s);
            value = v1 * v2;
        } else if (token.equals("let")) {
            // " x1 v1 x2 v2 x3 v3 ... exp)"
            String var = new String();
            while (s.charAt(pos) != ')') {
                pos += 1;
                // exp
                if (s.charAt(pos) == '(') {
                    pos += 1;
                    value = eval(s);
                    break;
                }

                var = getToken(s);
                if (s.charAt(pos) == ')') {
                    if (Character.isLetter(var.charAt(0))) {
                        // x1 x2 x3
                        value = getValue(var);
                    } else {
                        // v1 v2 v3
                        value = Integer.valueOf(var);
                    }
                    break;
                }

                pos += 1;
                value = eval(s);
                scopes.getFirst().put(var, value);
            }
        } else if (Character.isLetter(token.charAt(0))) {
            value = getValue(token);
        } else {
            value = Integer.valueOf(token);
        }

        if (pos < s.length() && s.charAt(pos) == ')') {
            pos += 1;
        }
        scopes.removeFirst();
        return value;
    }

    private int getValue(String var) {
        for (int i = 0; i < scopes.size(); i++) {
            if (scopes.get(i).containsKey(var)) {
                return scopes.get(i).get(var);
            }
        }
        return 0;
    }

    private String getToken(String s) {
        StringBuilder sb = new StringBuilder();
        while (pos < s.length()) {
            if (s.charAt(pos) == ')' || s.charAt(pos) == ' ') {
                break;
            }
            sb.append(s.charAt(pos));
            pos += 1;
        }
        return sb.toString();
    }

    /**
     * Accepted --- 3ms 38.6 MB 99.38%
     *
     * https://www.cnblogs.com/ruruozhenhao/p/10776148.html
     */
    public int evaluate3(String expression) {
        return evaluate_cnblogs(expression, new HashMap<>());
    }

    private int evaluate_cnblogs(String e, Map<String, Deque<Integer>> map) {
        char c = e.charAt(1); // the expression must start with "(add " or "(mult " or "(let ".
        if (c == 'a')
            return evaluateAdd(e, map); // "add" expression
        else if (c == 'm')
            return evaluateMult(e, map); // "mult" expression
        else if (c == 'l')
            return evaluateLet(e, map); // "let" expression
        else
            return 0; // illegal expression so return 0
    }

    private int evaluateAdd(String e, Map<String, Deque<Integer>> map) {
        int offset = 5; // the expression starts with "(add ", so offset starts at 5.
        String o1 = getOperand(e, offset); // first operand

        offset += o1.length() + 1;
        String o2 = getOperand(e, offset); // second operand

        return evaluateOperand(o1, map) + evaluateOperand(o2, map);
    }

    private int evaluateMult(String e, Map<String, Deque<Integer>> map) {
        int offset = 6;
        String o1 = getOperand(e, offset);

        offset += o1.length() + 1;
        String o2 = getOperand(e, offset);

        return evaluateOperand(o1, map) * evaluateOperand(o2, map);
    }

    private int evaluateLet(String e, Map<String, Deque<Integer>> map) {
        List<String> variables = new ArrayList<>(); // list of variables assigned in this "let" expression
        int res = 0; // the result of this "let" expression
        int offset = 5; // the expression starts with "(let ", so offset starts at 5.

        while (offset < e.length()) {
            String o1 = getOperand(e, offset);
            offset += o1.length() + 1;

            String o2 = getOperand(e, offset);

            if (o2 == null) { // if second operand is null, we reached the last operand
                res = evaluateOperand(o1, map);
                break;
            }

            offset += o2.length() + 1;

            variables.add(o1); // record the variable

            if (!map.containsKey(o1))
                map.put(o1, new ArrayDeque<>());

            map.get(o1).offerFirst(evaluateOperand(o2, map)); // do the assignment
        }

        // pop out assigned values before returning from this "let" expression
        for (int i = variables.size() - 1; i >= 0; --i) {
            String variable = variables.get(i);
            Deque<Integer> stack = map.get(variable);
            stack.pollFirst();
            if (stack.isEmpty())
                map.remove(variable);
        }

        return res;
    }

    private String getOperand(String e, int offset) {
        if (offset >= e.length())
            return null; // invalid offset

        char c = e.charAt(offset);
        int start = offset;

        if (c == '-' || Character.isDigit(c)) { // operand is an integer
            if (c == '-')
                offset++;
            while (offset < e.length() && Character.isDigit(e.charAt(offset)))
                offset++;
        } else if (Character.isLowerCase(c)) { // operand is a variable
            while (offset < e.length() && Character.isLetterOrDigit(e.charAt(offset)))
                offset++;
        } else { // operand is another expression enclosed in parenthses
            for (int cnt = 0; offset < e.length();) {
                c = e.charAt(offset++);
                if (c == '(')
                    cnt++;
                if (c == ')')
                    cnt--;
                if (cnt == 0)
                    break;
            }
        }

        return e.substring(start, offset);
    }

    private int evaluateOperand(String e, Map<String, Deque<Integer>> map) {
        char c = e.charAt(0);

        if (c == '-' || Character.isDigit(c)) { // operand is an integer so parse it
            return Integer.parseInt(e);
        } else if (Character.isLowerCase(c)) { // operand is a variable so look it up
            return map.get(e).peekFirst();
        } else { // operand is another expression so evaluate it recursively
            return evaluate_cnblogs(e, map);
        }
    }

    /**
     * Accepted --- 12ms 42.3 MB 17.90%
     * 
     * https://cloud.tencent.com/developer/article/1010169
     */
    public int evaluate4(String expression) {
        return evaluate(expression, new HashMap<>());
    }

    public int evaluate(String expression, Map<String, Integer> kv) {
        if (expression.charAt(0) == '(') {
            String nstr = expression.substring(1, expression.length() - 1);
            String[] data = nstr.split(" ");
            if (data[0].equals("let")) {
                List<String> splits = process(expression);
                int n = splits.size();
                for (int i = 0; i < n - 1; i += 2) {
                    kv.put(splits.get(i), evaluate(splits.get(i + 1), clone(kv)));
                }
                return evaluate(splits.get(n - 1), clone(kv));
            } else if (data[0].equals("add")) {
                List<String> splits = process(expression);
                return evaluate(splits.get(0), clone(kv)) + evaluate(splits.get(1), clone(kv));
            } else {
                List<String> splits = process(expression);
                return evaluate(splits.get(0), clone(kv)) * evaluate(splits.get(1), clone(kv));
            }
        } else {
            if (Character.isDigit(expression.charAt(0)) || expression.charAt(0) == '-') {
                return Integer.parseInt(expression);
            } else {
                return kv.get(expression);
            }
        }
    }

    Map<String, Integer> clone(Map<String, Integer> map) {
        Map<String, Integer> clone = new HashMap<>();
        for (String key : map.keySet())
            clone.put(key, map.get(key));
        return clone;
    }

    List<String> process(String expression) {
        List<String> ans = new ArrayList<>();
        int n = expression.length() - 1;
        char[] exps = expression.toCharArray();
        int j = expression.substring(1, 4).equals("mul") ? 6 : 5;
        while (j < n) {
            if (exps[j] == '(') {
                int lf = 1;
                int i = j + 1;
                for (; i < n; ++i) {
                    if (exps[i] == '(')
                        lf++;
                    if (exps[i] == ')') {
                        lf--;
                        if (lf == 0) {
                            break;
                        }
                    }
                }
                ans.add(expression.substring(j, i + 1));
                j = i + 2;
            } else {
                StringBuilder sb = new StringBuilder();
                while (j < n && exps[j] != ' ') {
                    sb.append(exps[j]);
                    j++;
                }
                j++;
                ans.add(sb.toString());
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        H_736_ParseLispExpression test = new H_736_ParseLispExpression();

        String expression = "(add 1 2)";
        String expression2 = "(mult 3 (add 2 3))";
        String expression3 = "(let x 2 (mult x 5))";
        String expression4 = "(let x 2 (mult x (let x 3 y 4 (add x y))))";
        String expression5 = "(let x 3 x 2 x)";
        String expression6 = "(let x 1 y 2 x (add x y) (add x y))";
        String expression7 = "(let x 2 (add (let x 3 (let x 4 x)) x))";
        String expression8 = "(let a1 3 b2 (add a1 1) b2)";

        System.out.println(test.evaluate(expression)); // 3
        System.out.println(test.evaluate2(expression));
        System.out.println(test.evaluate3(expression));
        System.out.println(test.evaluate4(expression));

        System.out.println("");
        System.out.println(test.evaluate(expression2)); // 15
        System.out.println(test.evaluate2(expression2));
        System.out.println(test.evaluate3(expression2));
        System.out.println(test.evaluate4(expression2));

        System.out.println("");
        System.out.println(test.evaluate(expression3)); // 10
        System.out.println(test.evaluate2(expression3));
        System.out.println(test.evaluate3(expression3));
        System.out.println(test.evaluate4(expression3));

        System.out.println("");
        System.out.println(test.evaluate(expression4)); // 14
        System.out.println(test.evaluate2(expression4));
        System.out.println(test.evaluate3(expression4));
        System.out.println(test.evaluate4(expression4));

        System.out.println("");
        System.out.println(test.evaluate(expression5)); // 2
        System.out.println(test.evaluate2(expression5));
        System.out.println(test.evaluate3(expression5));
        System.out.println(test.evaluate4(expression5));

        System.out.println("");
        System.out.println(test.evaluate(expression6)); // 5
        System.out.println(test.evaluate2(expression6));
        System.out.println(test.evaluate3(expression6));
        System.out.println(test.evaluate4(expression6));

        System.out.println("");
        System.out.println(test.evaluate(expression7)); // 6
        System.out.println(test.evaluate2(expression7));
        System.out.println(test.evaluate3(expression7));
        System.out.println(test.evaluate4(expression7));

        System.out.println("");
        System.out.println(test.evaluate(expression8)); // 4
        System.out.println(test.evaluate2(expression8));
        System.out.println(test.evaluate3(expression8));
        System.out.println(test.evaluate4(expression8));

    }
}