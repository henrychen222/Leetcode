/**
 * 12.31 afternoon
 * https://leetcode.com/problems/alphabet-board-path/
 */
class M_1138_AlphabetBoardPath {
    /**
     * Accepted --- 0ms, 34.5 MB, 100%
     * https://leetcode-cn.com/problems/alphabet-board-path/solution/javayou-zhu-shi-by-wei-lai-bi-you-yi-p76hwaze6d/
     */
    public String alphabetBoardPath(String target) {
        StringBuilder ans = new StringBuilder();
        int len = target.length();
        char[] tget = target.toCharArray();
        int r = 0, c = 0, i = 0;// i是字符位置，r，c是初始化board[0][0]='a'的位置
        while (i < len) {
            int tr = (tget[i] - 'a') / 5;// 目标行坐标
            int tc = (tget[i] - 'a') % 5;// 目标列坐标
            if (tr == r && tc == c) {// 命中目标
                ans.append("!");
                i++;
            } else {// LDUR的顺序不能改变，因为z行不能R，z-1行从第二列开始不能D
                while (tc < c) {// 循环来命中目标位置
                    c -= 1;
                    ans.append("L");
                }
                while (tr > r) {
                    r += 1;
                    ans.append("D");
                }
                while (tr < r) {
                    r -= 1;
                    ans.append("U");
                }
                while (tc > c) {
                    c += 1;
                    ans.append("R");
                }
            }
            r = tr;// 将board[r][c]改为上一个目标存在的位置，从该位置开始搜索下一个目标
            c = tc;
        }
        return ans.toString();

    }

    public static void main(String args[]) {
        M_1138_AlphabetBoardPath test = new M_1138_AlphabetBoardPath();

        String target1 = "leet";
        String target2 = "code";

        System.out.println(test.alphabetBoardPath(target1)); // "DDR!UURRR!!DDD!"
        System.out.println(test.alphabetBoardPath(target2)); // "RR!DDRR!UUL!R!"

    }
}