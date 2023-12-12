/*
 * 12/2/23 night
 * https://leetcode.com/contest/weekly-contest-374/problems/count-complete-substrings/
 */

const pr = console.log;

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };
const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const ord = (c) => c.charCodeAt();

// Accepted
// reference: https://leetcode.cn/circle/discuss/XH8i1L/
const countCompleteSubstrings = (s, k) => {
    let l = 0, res = 0, n = s.length;
    for (let i = 1; i < n; i++) {
        if (Math.abs(ord(s[i]) - ord(s[i - 1])) > 2) {
            res += cal(s.slice(l, i), k);
            l = i;
        }
    }
    res += cal(s.slice(l), k);
    return res;
};


const cal = (s, k) => {
    let res = 0, n = s.length;
    for (let i = 1; i <= 26; i++) {
        if (i * k > n) break;
        let l = i * k, f = counter(s.slice(0, l)), ff = counter(f.values());
        // pr(f, "ff", ff, s.slice(0, l + 1))
        if (ff.get(k) == i) res++;
        for (let j = 0; j < n - l; j++) {
            removeOneOrManyMap(ff, f.get(s[j]));
            removeOneOrManyMap(f, s[j]);
            addOneOrManyMap(ff, f.get(s[j]));

            removeOneOrManyMap(ff, f.get(s[j + l]));
            addOneOrManyMap(f, s[j + l]);
            addOneOrManyMap(ff, f.get(s[j + l]));

            if (ff.get(k) == i) res++;
        }
    }
    return res;
};

const main = () => {
    let s = "igigee", k = 2
    let s2 = "aaabbbccc", k2 = 3
    pr(countCompleteSubstrings(s, k))
    pr(countCompleteSubstrings(s2, k2))
};

main()