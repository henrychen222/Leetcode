
/**
 * 2.3 afternoon company
 * https://leetcode.com/problems/reorganize-string/
 */
import java.util.Comparator;
import java.util.HashMap;
import java.util.PriorityQueue;

class Pair {
    char c;
    int count;

    public Pair(char c, int count) {
        this.c = c;
        this.count = count;
    }
}

class MyPairComparator implements Comparator<Pair> {
    @Override
    public int compare(Pair a, Pair b) {
        return b.count - a.count;
    }
}

class M_767_Reorganize_String {

    /**
     * Accepted --- 0ms 37.3 MB 100.00%
     * 
     * https://blog.csdn.net/xiaojie_570/article/details/80518988
     */
    public String reorganizeString(String S) {
        // 首先将给定的字符串按照字符存储在一个int的数组中，数组的下标为字符串中字符-‘a’，所以该数组将相同的字符的个数存储在数组中
        int[] arr = new int[26];
        if (S.length() == 1)
            return S;

        // 利用maxLength获得数组中元素最大的值，即字符串中重复出现的字符最多的字符个数
        int maxLength = 0;
        for (char a : S.toCharArray()) {
            if (maxLength < ++arr[a - 'a'])
                maxLength = arr[a - 'a'];
        }

        // 如果该个数 * 2 - 1大于字符串的长度，就说明相同的字符太多，其他字符已经不能将相同字符分割开
        if (maxLength * 2 - 1 > S.length())
            return "";

        // 将字符串中的字符按照奇数偶数放在新建的char数组中
        char[] ret = new char[S.length()];
        int odd = 0, even = 1;
        for (int i = 0; i < 26; i++) {
            // 将相同的字符个数小于字符串长度的一半的字符放在奇数下标位置，否则放在偶数下标位置。注意这里需要判断奇数位置是否大于字符串长度
            while (arr[i] > 0 && arr[i] < S.length() / 2 + 1 && even < S.length()) {
                ret[even] = (char) (i + 'a');
                arr[i]--;
                even += 2;
            }
            while (arr[i] > 0) {
                ret[odd] = (char) (i + 'a');
                arr[i]--;
                odd += 2;
            }
        }

        return new String(ret);
    }

    /**
     * Accpted --- 0ms 37.4 MB 100.00%
     * 
     * https://zhuanlan.zhihu.com/p/33231348
     */
    public String reorganizeString2(String S) {
        char ch[] = new char[26];
        int max = 0;
        for (char c : S.toCharArray()) {
            ch[c - 'a']++;
            if (ch[c - 'a'] > ch[max])
                max = c - 'a';
        }
        int len = S.length();
        if (len < 2 * ch[max] - 1)
            return "";
        int index = 0;
        char[] res = new char[len];
        for (int i = 0; i < ch[max]; i++) {
            res[index] = (char) (max + 'a');
            index += 2;
        }
        ch[max] = 0;
        for (int i = 0; i < 26; i++) {
            int count = ch[i];
            while (count > 0) {
                if (index >= len)
                    index = 1;
                res[index] = (char) (i + 'a');
                index += 2;
                count--;
            }
        }

        return new String(res);
    }

    /**
     * Runtime Error --- ConcurrentModificationException
     * 
     * https://github.com/asbhat10/LeetCode/blob/master/767.%20Reorganize%20String.java
     */
    public String reorganizeString_map(String S) {
        HashMap<Character, Integer> map = new HashMap<>();
        int max = 0;
        for (int i = 0; i < S.length(); i++) {
            map.put(S.charAt(i), map.getOrDefault(S.charAt(i), 0) + 1);
            max = Math.max(max, map.get(S.charAt(i)));
        }

        if (max > (S.length() + 1) / 2)
            return "";
        if (map.size() == S.length())
            return S;
        StringBuilder sb = new StringBuilder();
        while (map.size() > 0) {
            for (char c : map.keySet()) {
                sb.append(c + "");
                map.put(c, map.get(c) - 1);
                if (map.get(c) == 0)
                    map.remove(c);
            }
        }
        return sb.toString();
    }

    /**
     * Accepted --- 2ms 37.2 MB 75.31%
     * 
     * http://buttercola.blogspot.com/2019/03/leetcode-767-reorganize-string.html
     */
    public String reorganizeString_priority_queue(String S) {
        if (S == null || S.length() == 0) {
            return "";
        }

        // do the word count
        int[] counts = new int[26];
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            counts[c - 'a'] += 1;
        }

        // sort the word count
        PriorityQueue<Pair> pq = new PriorityQueue<>(new MyPairComparator());

        for (int i = 0; i < 26; i++) {
            if (counts[i] == 0) {
                continue;
            }
            Pair pair = new Pair((char) (i + 'a'), counts[i]);
            pq.offer(pair);
        }

        if (pq.peek().count > (S.length() + 1) / 2) {
            return "";
        }

        // construct the result
        StringBuilder ans = new StringBuilder();
        while (!pq.isEmpty()) {
            Pair top = pq.poll();
            if (ans.length() > 0 && top.c == ans.charAt(ans.length() - 1)) {
                Pair secondTop = pq.poll();
                pq.offer(top);
                top = secondTop;
            }

            ans.append(top.c);
            top.count -= 1;

            if (top.count > 0) {
                pq.offer(top);
            }
        }

        return ans.toString();
    }

    /**
     * Accepted --- 2ms 37.5 MB 75.31%
     * 
     * https://zhuanlan.zhihu.com/p/33231348
     */
    public String reorganizeString_priority_queue2(String S) {
        char[] alphabet = new char[26];
        for (char c : S.toCharArray()) {
            alphabet[c - 'a']++;
            if (alphabet[c - 'a'] > (S.length() + 1) / 2) {
                return "";
            }
        }
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        for (int i = 0; i < alphabet.length; i++) {
            if (alphabet[i] > 0) {
                pq.add(new int[] { i + 97, alphabet[i] });
            }
        }

        StringBuffer ans = new StringBuffer();
        while (!pq.isEmpty()) {
            int[] first = pq.poll();
            if (ans.length() == 0 || first[0] != ans.charAt(ans.length() - 1)) {
                ans.append((char) first[0]);
                if (--first[1] > 0) {
                    pq.add(first);
                }
            } else {
                int[] second = pq.poll();
                ans.append((char) second[0]);
                if (--second[1] > 0) {
                    pq.add(second);
                }
                pq.add(first);
            }
        }
        return ans.toString();
    }

    public static void main(String[] args) {
        M_767_Reorganize_String test = new M_767_Reorganize_String();

        String S = "aab";
        String S2 = "aaab";

        System.out.println(test.reorganizeString(S)); // "aba"
        System.out.println(test.reorganizeString(S2)); // ""

        System.out.println("");
        System.out.println(test.reorganizeString2(S));
        System.out.println(test.reorganizeString2(S2));

        System.out.println("");
        System.out.println(test.reorganizeString_map(S));
        System.out.println(test.reorganizeString_map(S2));

        System.out.println("");
        System.out.println(test.reorganizeString_priority_queue(S));
        System.out.println(test.reorganizeString_priority_queue(S2));

        System.out.println("");
        System.out.println(test.reorganizeString_priority_queue2(S));
        System.out.println(test.reorganizeString_priority_queue2(S2));

    }
}