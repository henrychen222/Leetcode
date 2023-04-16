/*
 * 12/24/22 evening
 * https://leetcode.com/contest/weekly-contest-325/problems/take-k-of-each-character-from-left-and-right/
 */

const pr = console.log;

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };
const ord = (c) => c.charCodeAt();


// Accepted sliding window use [l, i] instead of [i, r]
const takeCharacters3 = (s, k) => {
    let n = s.length, f = [0, 0, 0], res = Number.MAX_SAFE_INTEGER;
    for (const c of s) f[ord(c) - 97]++;
    if (f.some(occ => occ < k)) return -1;
    let l = -1;
    for (let i = 0; i < n; i++) {
        f[ord(s[i]) - 97]--; // current pick from right
        while (i > l && f.some(occ => occ < k)) { // pick from left until meet all >= k
            l++;
            f[ord(s[l]) - 97]++;
        }
        if (i >= l) {
            let lmove = l, rmove = n - i;
            res = Math.min(res, lmove + rmove);
        }
    }
    return res;
};

// reference: kmjp
const takeCharacters = (s, k) => {
    let n = s.length, f = [0, 0, 0], res = Number.MAX_SAFE_INTEGER;
    for (const c of s) f[ord(c) - 97]++;
    if (f.some(occ => occ < k)) return -1;
    let r = n;
    for (let i = n - 1; i >= 0; i--) {
        f[ord(s[i]) - 97]--;
        // pr(i, r, f);
        while (r > i && f.some(occ => occ < k)) {
            // pr(i, r);
            r--;
            f[ord(s[r]) - 97]++;
        }
        if (r >= i) {
            let lmove = i, rmove = n - r;
            // pr(lmove, rmove)
            res = Math.min(res, lmove + rmove);
        }
    }
    return res;
};

//////////////////////////////////////////////////////////////////////////////
let n, m, k;
const takeCharacters1 = (s, K) => {
    n = s.length, m = counter_value_in_indexA_in(s), k = K;
    if (k == 0) return 0;
    let lmax = Number.MIN_SAFE_INTEGER, rmax = Number.MIN_SAFE_INTEGER;
    // pr(n, m);
    if (!m.has('a') || !m.has('b') || !m.has('c')) return -1;
    for (const [c, a] of m) {
        if (a.length < k) return -1;
        let need = pickOne(c);
        for (const [dis, mark] of need) {
            if (mark == 'L') {
                lmax = Math.max(lmax, dis);
            } else {
                rmax = Math.max(rmax, dis);
            }
        }
    }
    let f = [0, 0, 0], allLeft = 0, allRight = 0, bothSide = (lmax == Number.MIN_SAFE_INTEGER ? 0 : lmax) + (rmax == Number.MIN_SAFE_INTEGER ? 0 : rmax);
    for (const c of s) {
        if (f.every(occ => occ >= k)) break;
        f[ord(c) - 97]++;
        allLeft++;
    }
    f = [0, 0, 0];
    for (let i = n - 1; ~i; i--) {
        if (f.every(occ => occ >= k)) break;
        f[ord(s[i]) - 97]++;
        allRight++;
    }
    pr(lmax, rmax, "bothSide", bothSide, "allLeft", allLeft, "allRight", allRight)
    return Math.min(allLeft, allRight, bothSide);
};

const pickOne = (c) => {
    let a = m.get(c), take = [];
    for (let i = 0; i < a.length; i++) {
        let takeFromLeft = a[i] + 1, takeFromRight = n - a[i];
        // pr(takeFromLeft, takeFromRight)
        take.push([takeFromLeft, 'L']);
        take.push([takeFromRight, 'R']);
    }
    take.sort((x, y) => x[0] - y[0]);
    let need = take.slice(0, k);
    pr(c, "take", take);
    pr(c, "need", need);
    return need;
};


const main = () => {
    let s1 = "aabaaaacaabc", k1 = 2;
    let s2 = "a", k2 = 1;
    let s_debug1 = "a", k_debug1 = 0;
    let s_debug2 = "acba", k_debug2 = 1;
    let s_debug3 = "ccbabcc", k_debug3 = 1;
    let s_debug4 = "caaababcaa", k_debug4 = 2;
    pr(takeCharacters(s1, k1))
    pr(takeCharacters(s2, k2))
    pr(takeCharacters(s_debug1, k_debug1)) // 0
    pr(takeCharacters(s_debug2, k_debug2)) // 3
    pr(takeCharacters(s_debug3, k_debug3)) // 4
    pr(takeCharacters(s_debug4, k_debug4)) // 7
};

main()