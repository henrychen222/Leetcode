// 9.20 afternoon
import java.util.*;

class hobiter {
    public int maxUniqueSplit(String s) {
        Set<String> set = new HashSet<>();
        return dfs(set, 0, s);
    }
    
    private int dfs(Set<String> set, int idx, String s) {
        if (idx >= s.length()) return 0;
        int res = -1;
        for (int i = idx + 1; i <= s.length(); i++) {
            String sub = s.substring(idx, i);
            if (set.contains(sub)) continue;
            set.add(sub);
            int next = dfs(set, i, s);
            if (next >= 0) res = Math.max(res, next + 1);
            set.remove(sub);
        }
        return res;
    }

    public static void main(String[] args) {
        String s = "ababccc";
        String s2 = "aba";
        String s3 = "aa";
        String debug1 = "addbsd";
        hobiter test = new hobiter();
        System.out.println(test.maxUniqueSplit(s));
        System.out.println(test.maxUniqueSplit(s2));
        System.out.println(test.maxUniqueSplit(s3));
    }
}
