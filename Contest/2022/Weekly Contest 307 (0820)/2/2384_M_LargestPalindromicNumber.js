/**
 * 08/20/22 evening
 * https://leetcode.com/contest/weekly-contest-307/problems/largest-palindromic-number/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };
const stmkey_de = (m) => new Map([...m].sort((x, y) => y[0] - x[0]));

// Accepted  11:05-11:31  26min
const largestPalindromic = (s) => {
    let m = counter(s), L = '', R = '';
    m = stmkey_de(m);
    // pr(m)
    for (const [c, occ] of m) {
        if (occ >= 2) {
            let use = occ & 1 ? occ - 1 : occ, cur = c.repeat(use / 2);
            // pr(c, use)
            if (L.length == 0 && c == '0') continue;
            L += cur;
            R = cur + R;
            removeOneOrManyMap(m, c, use);
        }
    }
    // pr("L", L, "R", R, m)
    if (m.size > 0) {
        let middle = m.keys().next().value;
        return L + middle + R;
    }
    return L + R;
};

const main = () => {
    let s = "444947137";
    let s2 = "00009";
    let test1 = '33333222219';
    let test2 = '0';
    let test3 = '000';
    let test4 = '123456';
    let test5 = "444247137";
    let test6 = "2211"
    pr(largestPalindromic(s))
    pr(largestPalindromic(s2))
    pr(largestPalindromic(test1))
    pr(largestPalindromic(test2))
    pr(largestPalindromic(test3))
    pr(largestPalindromic(test5))
    pr(largestPalindromic(test6))
};

main()