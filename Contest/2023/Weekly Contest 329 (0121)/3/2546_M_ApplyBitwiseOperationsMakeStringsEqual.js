/*
 * 01/21/23 evening
 * https://leetcode.com/contest/weekly-contest-329/problems/apply-bitwise-operations-to-make-strings-equal/
 */

const pr = console.log;

/*
      |   ^
0 0   0   0
0 1   1   1         one++
1 0   1   1         one++
1 1   1   0 / 0 1   one--

*/

// reference: https://www.geeksforgeeks.org/string-transformation-using-xor-and-or/
const makeStringsEqual = (s, t) => {
    let flag1 = 0, flag2 = 0, n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') flag1 = 1;
        if (t[i] == '1') flag2 = 1;
        if (flag1 && flag2) return true;
    }
    if (!flag1 && !flag2) return true;
    return false;
};

const main = () => {
    let s = "1010", t = "0110";
    let s2 = "11", t2 = "00"
    pr(makeStringsEqual(s, t))
    pr(makeStringsEqual(s2, t2))
};

main()