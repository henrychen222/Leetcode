/*
* 09/03/22 evening
* https://leetcode.com/contest/weekly-contest-309/problems/check-distances-between-same-letters/
*/

const pr = console.log;

const ord = (c) => c.charCodeAt();
const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted
const checkDistances = (s, d) => {
    let m = counter_value_in_indexA_in(s);
    for (const [c, a] of m) {
        let [i, j] = a, expectDis = j - i - 1;
        let dis = d[ord(c) - 97];
        if (dis != expectDis) return false;
    }
    return true;
};

const main = () => {
    let s = "abaccb", d = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let s2 = "aa", d2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let s_debug1 = "zz", d_debug1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    pr(checkDistances(s, d))
    pr(checkDistances(s2, d2))
    pr(checkDistances(s_debug1, d_debug1)) // false
};

main()