/**
 * 10/17/21 afternoon
 * https://leetcode.com/problems/count-the-repetitions/
 */

// Accepted --- 4228ms 20.00%
// reference: https://leetcode.com/problems/count-the-repetitions/discuss/95401/Ugly-Java-brute-force-solution-but-accepted.-1088ms.
const getMaxRepetitions = (s1, n1, s2, n2) => {
    let cnt1 = cnt2 = i = j = 0;
    while (cnt1 < n1) {
        if (s1[i] == s2[j]) {
            j++;
            if (j == s2.length) {
                j = 0;
                cnt2++;
            }
        }
        i++;
        if (i == s1.length) {
            i = 0;
            cnt1++;
        }
    }
    // pr(cnt1, cnt2)
    return cnt2 / n2 >> 0;
};

const pr = console.log;
const main = () => {
    let s1 = "acb",
        n1 = 4,
        s2 = "ab",
        n2 = 2;
    let s1_2 = "acb",
        n1_2 = 1,
        s2_2 = "acb",
        n2_2 = 1;
    let s1_debug1 = "niconiconi",
    n1_debug1 = 99981,
    s2_debug1 = "nico",
    n2_debug1 = 81;
    pr(getMaxRepetitions(s1, n1, s2, n2))
    pr(getMaxRepetitions(s1_2, n1_2, s2_2, n2_2))
    pr(getMaxRepetitions(s1_debug1, n1_debug1, s2_debug1, n2_debug1))
};

main()