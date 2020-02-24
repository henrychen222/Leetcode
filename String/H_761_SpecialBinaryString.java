
/**
 * 2.4 morning Deli Boy Downtown, road
 */
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

class H_761_SpecialBinaryString {

    /**
     * Accepted --- 2ms 37.5 MB 88.46%
     * 
     * https://github.com/Cee/Leetcode/blob/master/761%20-%20Special%20Binary%20String.java
     */
    public String makeLargestSpecial_ArrayList(String S) {
        if (S.length() == 0) {
            return S;
        }
        int anchor = 0, balance = 0;
        List<String> res = new ArrayList<>();
        for (int i = 0; i < S.length(); ++i) {
            if (S.charAt(i) == '1') {
                balance += 1;
            } else {
                balance -= 1;
            }
            if (balance == 0) {
                res.add("1" + makeLargestSpecial_ArrayList(S.substring(anchor + 1, i)) + "0");
                anchor = i + 1;
            }
        }
        Collections.sort(res, Collections.reverseOrder());
        StringBuilder ans = new StringBuilder(); // get the result
        for (String a : res) {
            ans.append(a);
        }
        return ans.toString();
    }

    /**
     * Accpted --- 3ms 37.6 MB 61.54%
     * 
     * https://massivealgorithms.blogspot.com/2019/06/leetcode-761-special-binary-string.html
     */
    public String makeLargestSpecial_ArrayList_same(String S) {
        int balance = 0, archor = 0;
        List<String> res = new ArrayList<String>();
        for (int i = 0; i < S.length(); ++i) {
            if (S.charAt(i) == '1')
                balance++;
            else
                balance--;
            if (balance == 0) {
                res.add('1' + makeLargestSpecial_ArrayList_same(S.substring(archor + 1, i)) + '0');
                archor = i + 1;
            }
        }
        Collections.sort(res, Collections.reverseOrder());
        return String.join("", res);
    }

    /**
     * Accpted --- 3ms 37.9 MB 61.54%
     * 
     * https://massivealgorithms.blogspot.com/2019/06/leetcode-761-special-binary-string.html
     */
    public String makeLargestSpecial_LinkedList_same(String S) {
        int balance = 0, archor = 0;
        List<String> res = new LinkedList<String>();
        for (int i = 0; i < S.length(); i++) {
            if (S.charAt(i) == '0') {
                balance--;
            } else {
                balance++;
            }
            if (balance == 0) {
                res.add("1" + makeLargestSpecial_LinkedList_same(S.substring(archor + 1, i)) + "0");
                archor = i + 1;
            }
        }
        Collections.sort(res, Collections.reverseOrder());
        return String.join("", res);
    }

    public static void main(String[] args) {
        H_761_SpecialBinaryString test = new H_761_SpecialBinaryString();

        String S = "11011000";

        System.out.println(test.makeLargestSpecial_ArrayList(S)); // "11100100"
        System.out.println(test.makeLargestSpecial_ArrayList_same(S));
        System.out.println(test.makeLargestSpecial_LinkedList_same(S));

    }
}