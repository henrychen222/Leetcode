/**
 * 5.16 morning
 * https://leetcode.com/contest/biweekly-contest-26/problems/consecutive-characters/
 */
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.TreeSet;

class E_5396_1446_ConsecutiveCharacters {

    // Time limit exceed   128 / 333 test cases passed.
    public int maxPower(String s) {
        int i, j;
        List<String> result = new ArrayList<>();
        for (i = 0; i < s.length(); i++) {
            for (j = i + 1; j < s.length() + 1; j++) {
                String temp = s.substring(i, j);
                if (isIdentile(temp) == true) {
                    result.add(temp);
                }
            }
        }
        Optional<String> max = getMax(result);
        // System.out.println(max.get());
        return max.get().length();
    }

    Optional<String> getMax(List<String> result) {
        return result.stream().reduce((a, b) -> a.length() > b.length() ? a : b);
    };

    boolean isIdentile(String string) {
        String[] letters = string.split("");
        TreeSet<String> unique = new TreeSet<String>();
        for (int i = 0; i < letters.length; i++) {
            unique.add(letters[i]);
        }
        return unique.size() == 1 ? true : false;
    }

    public static void main(String[] args) {
        String s = "leetcode";
        String s2 = "abbcccddddeeeeedcba";
        String s3 = "triplepillooooow";
        String s4 = "hooraaaaaaaaaaay";
        String s5 = "tourist";
        E_5396_1446_ConsecutiveCharacters test = new E_5396_1446_ConsecutiveCharacters();
        System.out.println(test.maxPower(s));
        System.out.println(test.maxPower(s2));
        System.out.println(test.maxPower(s3));
        System.out.println(test.maxPower(s4));
        System.out.println(test.maxPower(s5));
    }
}