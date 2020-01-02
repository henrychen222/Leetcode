
/**
 * 12.31 morning
 * https://leetcode.com/problems/swap-for-longest-repeated-character-substring/
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Pair {
    char c;
    int f;

    public Pair(char c, int f) {
        this.c = c;
        this.f = f;
    }
}

class M_1156_SwapLongestRepeatedCharacterSubstring {
    /**
     * Accepted --- 3 ms 36.4 MB 96.77%
     * https://github.com/czahie/LeetCode/blob/master/1156%20Swap%20For%20Longest%20Repeated%20Character%20Substring/SwapForLongestRepeatedCharacterSubstring.java
     */
    public int maxRepOpt1(String text) {
        int res = 0;
        int[] count = new int[26];
        char[] t = text.toCharArray();
        for (int i = 0; i < t.length; i++) {
            count[t[i] - 'a']++;
        }
        for (int i = 0; i < t.length; i++) {
            char c = t[i];
            int cnt = 0;
            int diff = 0;
            int j = i;
            while (j < t.length && (c == t[j] || diff == 0) && cnt < count[c - 'a']) {
                if (c != t[j]) {
                    diff++;
                }
                cnt++;
                j++;
            }
            res = Math.max(res, cnt);
        }
        return res;
    }

    /**
     * Accepted --- 13 ms 36.3 MB 17.55%
     * http://xiongxoy.herokuapp.com/blog/2019/08/13/leetcode-1156/
     */
    public int maxRepOpt1_method2(String text) {
        HashMap<Character, Integer> characterCount = new HashMap<>();
        // 1. check count for char
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (characterCount.get(c) != null) {
                characterCount.put(c, characterCount.get(c) + 1);
            } else {
                characterCount.put(c, 1);
            }
        }

        // 2. find max possible length at the end of each seq
        Map<Integer, Integer> indexToAccumulatedLength = new HashMap<>();
        int maxResult = -1;
        int accumulatedLengthTemp = 0;
        for (int i = 0; i < text.length(); i++) {
            accumulatedLengthTemp++;
            if (i + 1 == text.length() || text.charAt(i) != text.charAt(i + 1)) { // end of seq
                int pre = i - accumulatedLengthTemp - 1;
                indexToAccumulatedLength.put(i, accumulatedLengthTemp);
                maxResult = getMaxResult(text, characterCount, indexToAccumulatedLength, maxResult,
                        accumulatedLengthTemp, i, pre);

                // reset temp accumulated length
                accumulatedLengthTemp = 0;
            }
        }

        // 3. return max char rep length
        return maxResult;
    }

    private int getMaxResult(String text, HashMap<Character, Integer> characterCount,
            Map<Integer, Integer> indexToAccumulatedLength, int maxResult, int accumulatedLengthTemp, int i, int pre) {
        int accumulatedLength;
        if (pre >= 0 && text.charAt(pre) == text.charAt(i)) {
            accumulatedLength = accumulatedLengthTemp + indexToAccumulatedLength.get(pre);
        } else {
            accumulatedLength = accumulatedLengthTemp;
        }

        if (accumulatedLength < characterCount.get(text.charAt(i))) {
            maxResult = Math.max(accumulatedLength + 1, maxResult);
        } else {
            maxResult = Math.max(accumulatedLength, maxResult);
        }
        return maxResult;
    }

    /**
     * Accepted --- 10 ms 35.6 MB 24.48%
     * https://www.cnblogs.com/Dylan-Java-NYC/p/12004508.html
     */
    public int maxRepOpt1_method3(String text) {
        if (text == null || text.length() == 0) {
            return 0;
        }

        int len = text.length();
        int[] map = new int[26];
        List<Pair> groupsList = new ArrayList<>();
        int i = 0;

        while (i < len) {
            char c = text.charAt(i);
            int f = 0;
            while (i < len && text.charAt(i) == c) {
                f++;
                i++;
            }

            groupsList.add(new Pair(c, f));
            map[c - 'a'] += f;
        }

        int max = 0;
        for (int j = 0; j < groupsList.size(); j++) {
            Pair cur = groupsList.get(j);

            // Single group
            max = Math.max(max, Math.min(cur.f + 1, map[cur.c - 'a']));

            // Two groups
            if (j < groupsList.size() - 2) {
                if (groupsList.get(j + 1).f == 1 && cur.c == groupsList.get(j + 2).c) {
                    max = Math.max(max, Math.min(cur.f + groupsList.get(j + 2).f + 1, map[cur.c - 'a']));
                }
            }
        }

        return max;
    }

    public static void main(String[] args) {
        M_1156_SwapLongestRepeatedCharacterSubstring s = new M_1156_SwapLongestRepeatedCharacterSubstring();
        String text1 = "ababa";
        String text2 = "aaabaaa";
        String text3 = "aaabbaaa";
        String text4 = "aaaaa";
        String text5 = "abcdef";

        System.out.println(s.maxRepOpt1(text1)); // 3
        System.out.println(s.maxRepOpt1(text2)); // 6
        System.out.println(s.maxRepOpt1(text3)); // 4
        System.out.println(s.maxRepOpt1(text4)); // 5
        System.out.println(s.maxRepOpt1(text5)); // 1

        System.out.println("");
        System.out.println(s.maxRepOpt1_method2(text1));
        System.out.println(s.maxRepOpt1_method2(text2));
        System.out.println(s.maxRepOpt1_method2(text3));
        System.out.println(s.maxRepOpt1_method2(text4));
        System.out.println(s.maxRepOpt1_method2(text5));

        System.out.println("");
        System.out.println(s.maxRepOpt1_method3(text1));
        System.out.println(s.maxRepOpt1_method3(text2));
        System.out.println(s.maxRepOpt1_method3(text3));
        System.out.println(s.maxRepOpt1_method3(text4));
        System.out.println(s.maxRepOpt1_method3(text5));

    }
}