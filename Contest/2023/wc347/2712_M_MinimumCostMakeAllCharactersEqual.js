/*
 * 05/27/23 evening
 * https://leetcode.com/contest/weekly-contest-347/problems/minimum-cost-to-make-all-characters-equal/
 */

const pr = console.log;

// Accepted Tlatoani
const minimumCost = (s) => {
    let n = s.length, res = 0;
    for (let i = 1; i < n; i++) {
        if (s[i - 1] != s[i]) res += Math.min(i, n - i);
    }
    return res;
};

// Wrong
const minimumCost1 = (s) => {
    let res1 = go(s, '0', '1'), res2 = go(s, '1', '0');
    pr(res1, res2)
    return Math.min(res1, res2);
};

const go = (s, a, b) => {
    let n = s.length, l = 0, r = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == a) {
            l += i + 1;
        }
        if (s[i] == b) {
            r += n - i;
        }
    }
    pr(l, r)
    return Math.min(l, r);
};

const main = () => {
    let s = "0011";
    let s2 = "010101";
    pr(minimumCost(s))
    pr(minimumCost(s2))
}
main()