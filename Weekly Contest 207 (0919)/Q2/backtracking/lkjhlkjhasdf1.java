import java.util.*;

class lkjhlkjhasdf1 {
    public int maxUniqueSplit(String s) {
        return helper(s, new HashSet());
    }
    
    private int helper(String s, Set<String> set) {
        int max = 0;
        for(int i = 1; i <= s.length(); i++) {
            String candidate = s.substring(0, i);
            if(!set.contains(candidate)) {
                set.add(candidate);
                max = Math.max(max, 1 + helper(s.substring(i), set));
                set.remove(candidate); // backtrack and try other splits
            }
        }
        System.out.println(set.toString());
        return max;
    }

    public static void main(String[] args) {
        String s = "ababccc";
        String s2 = "aba";
        String s3 = "aa";
        String debug1 = "addbsd";
        lkjhlkjhasdf1 test = new lkjhlkjhasdf1();
        System.out.println(test.maxUniqueSplit(s));
        // System.out.println(test.maxUniqueSplit(s2));
        // System.out.println(test.maxUniqueSplit(s3));
    }
}