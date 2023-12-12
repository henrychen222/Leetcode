/*
 * 09/02/23 evening
 * https://leetcode.com/contest/biweekly-contest-112/problems/check-if-strings-can-be-made-equal-with-operations-ii/
 */

const pr = console.log;

// Accepted
const checkStrings = (s, t) => {
    let n = s.length, sa = [], sb = [], ta = [], tb = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            sa.push(s[i]);
            ta.push(t[i]);
        } else {
            sb.push(s[i]);
            tb.push(t[i]);
        }
    }
    sa = sa.sort().join("");
    sb = sb.sort().join("");
    ta = ta.sort().join("");
    tb = tb.sort().join("");
    // pr(sa, sb, sa+sb, ta, tb, ta+tb)
    return sa + sb == ta + tb;
};

const main = () => {
    let s = "abcdba", t = "cabdab";
    let s2 = "abe", t2 = "bea";
    pr(checkStrings(s, t))
    pr(checkStrings(s2, t2))
};

main()