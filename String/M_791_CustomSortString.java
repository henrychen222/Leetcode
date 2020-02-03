
/**
 * 1.27 morning on road https://leetcode.com/problems/custom-sort-string/
 */
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.stream.Collectors;

class M_791_CustomSortString {
    /**
     * Accepted --- 0ms 37.2 MB 100%
     * 
     * https://www.cnblogs.com/Dylan-Java-NYC/p/11980686.html
     * https://massivealgorithms.blogspot.com/2018/04/leetcode-791-custom-sort-string.html
     */
    public String customSortString(String S, String T) {

        if (T == null || T.length() == 0 || S == null || S.length() == 0) {
            return T;
        }

        int[] map = new int[26];
        for (char c : T.toCharArray()) {
            map[c - 'a']++;
        }

        StringBuilder sb = new StringBuilder(); // can use StringBuffer also
        for (char sc : S.toCharArray()) {
            while (map[sc - 'a'] > 0) {
                sb.append(sc);
                map[sc - 'a']--;
            }
        }

        for (char c = 'a'; c <= 'z'; c++) {
            while (map[c - 'a'] > 0) {
                sb.append(c);
                map[c - 'a']--;
            }
        }

        return sb.toString();
    }

    /**
     * Accepted --- 1ms 39.2 MB 63.10%
     * 
     * https://blog.csdn.net/huanghanqian/article/details/79368610
     */
    public String customSortString_same1(String S, String T) {
        char[] SC = S.toCharArray();
        char[] TC = T.toCharArray();
        int[] map = new int[26];

        // 把 T 放入 bucket;
        for (int i = 0; i < TC.length; i++) {
            int index = TC[i] - 'a';
            map[index]++;
        }

        // 扫描 S 中的字符，使用 bucket 来构造结果字符串。S
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < SC.length; i++) {
            int index = SC[i] - 'a';
            while (map[index] > 0) {
                sb.append(SC[i]);
                map[index]--;
            }
        }

        // 扫描 bucket，把不在 S 中的剩下的字符加到结果字符串上。
        for (int i = 0; i < 26; i++) {
            while (map[i] > 0) {
                sb.append((char) (i + 'a'));
                map[i]--;
            }
        }
        return sb.toString();
    }

    /**
     * Accepted --- 0ms 37.6 MB 100.00%
     * 
     * http://buttercola.blogspot.com/2018/04/leetcode-791-custom-sort-string.html
     */
    public String customSortString_same2(String S, String T) {
        // Step 1: count the freq of each char in T
        int[] freq = new int[26];

        for (int i = 0; i < T.length(); i++) {
            char c = T.charAt(i);
            freq[c - 'a']++;
        }

        // step 2: scan the string S and print the number of chars in T
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            while (freq[c - 'a'] > 0) {
                sb.append(c);
                freq[c - 'a']--;
            }
        }

        // step 3: scan the freq again and append anything not zero
        for (int i = 0; i < freq.length; i++) {
            while (freq[i] > 0) {
                sb.append((char) (i + 'a'));
                freq[i]--;
            }
        }

        return sb.toString();
    }

    /**
     * Accepted --- 4ms 38.2 MB 20.67%
     * 
     * https://joejztang.github.io/2019/08/23/code/791-Custom-Sort-String/
     */
    public String customSortString_map_priorityQueue(String S, String T) {
        // char -> index
        Map<Character, Integer> reg = new HashMap<>();
        for (int i = 0; i < S.length(); i++) {
            reg.put(S.charAt(i), i);
        }

        // customized comparator
        PriorityQueue<Character> pq = new PriorityQueue<>(new Comparator<Character>() {
            @Override
            public int compare(Character a, Character b) {
                int idxa = -1;
                int idxb = -1;
                if (reg.containsKey(a))
                    idxa = reg.get(a);
                if (reg.containsKey(b))
                    idxb = reg.get(b);
                if (idxa != -1 && idxb != -1) {
                    return idxa - idxb;
                } else if (idxa == -1) {
                    return 1;
                } else { // idxb == -1
                    return -1;
                }
            }
        });

        for (int i = 0; i < T.length(); i++) {
            pq.offer(T.charAt(i));
        }

        StringBuilder sb = new StringBuilder();
        while (!pq.isEmpty()) {
            sb.append(pq.poll());
        }

        return sb.toString();
    }

    /**
     * Accepted --- 6 ms 38.4 MB
     * 
     * https://massivealgorithms.blogspot.com/2018/04/leetcode-791-custom-sort-string.html
     */
    public String customSortString_map(String S, String T) {
        if (S == null || T == null) {
            return T;
        }

        Map<Character, Long> freqs = getFreq(T);
        StringBuilder sb = new StringBuilder();
        for (Character ch : S.toCharArray()) {
            if (freqs.containsKey(ch)) {
                append(sb, ch, freqs.get(ch));
                freqs.remove(ch);
            }
        }

        for (Entry<Character, Long> entry : freqs.entrySet()) {
            append(sb, entry.getKey(), entry.getValue());
        }

        return sb.toString();
    }

    private void append(StringBuilder sb, Character ch, long count) {
        for (int i = 0; i < count; i++) {
            sb.append(ch);
        }
    }

    private Map<Character, Long> getFreq(String T) {
        return T.chars().mapToObj(ch -> (char) ch)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    }

    public static void main(String[] args) {
        M_791_CustomSortString test = new M_791_CustomSortString();
        String S = "cba";
        String T = "abcd";
        System.out.println(test.customSortString(S, T));
        System.out.println(test.customSortString_same1(S, T));
        System.out.println(test.customSortString_same2(S, T));
        System.out.println(test.customSortString_map_priorityQueue(S, T));
        System.out.println(test.customSortString_map(S, T));

    }
}