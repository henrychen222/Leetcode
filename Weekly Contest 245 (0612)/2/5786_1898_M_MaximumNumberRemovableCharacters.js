/**
 * 06/12/21 evening
 * https://leetcode.com/contest/weekly-contest-245/problems/maximum-number-of-removable-characters/
 */

const pr = console.log;

const sef = (se) => se.values().next().value;
const stmkey_in = (m) => new Map([...m].sort((x, y) => x[0].charCodeAt() - y[0].charCodeAt()));

const maximumRemovals1 = (s, p, removable) => {
    let m = counter_value_in_indexA_in(s);
    let r = new Set(removable);
    // pr(m);
    let gen = '';
    let noNeedFromR = new Set();
    let needFromR = 0;
    outer:
    for (const c of p) {
        let store = m.get(c);
        if (store.size == 1) {
            pr("111");
            noNeedFromR.add(sef(store));
        } else {
            for (const idx of store) {
                if (!r.has(idx) && !noNeedFromR.has(idx)) {
                    pr(idx);
                    noNeedFromR.add(idx);
                    continue outer;
                }
            }
            needFromR++;
        }
    }
    pr(needFromR, noNeedFromR);
    return r.size - needFromR;
};


// don't know
const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };
const maximumRemovals2 = (s, p, removable) => {
    let ms = counter_value_in_indexA_in(s);
    let res = 0;
    let removed = new Set();
    // pr(ms);
    for (const i of removable) {
        // if (i >= s.length) continue;
        let c = s[i];
        pr(i, c, ms.get(c))
        let firstIdx = ms.get(c)[0];
        let tmp = s.slice(0, firstIdx) + s.slice(firstIdx + 1);
        // pr(tmp, p);
        if (isSubsequence(tmp, p) && !removed.has(c)) {
            // s = tmp;
            removed.add(c);
            res++;
        }
    }
    pr("final", s);
    return res;
};

const isSubsequence = (s, t) => {
    let st = [];
    let sn = s.length;
    let tn = t.length;
    for (let i = 0; i < tn; i++) st.push(t[i]);
    for (let i = sn - 1; ~i; i--) {
        if (st.length == 0) {
            return true;
        }
        if (s[i] == st[st.length - 1]) st.pop();
    }
    return st.length == 0;
};

////////////////////////// After Contest /////////////////////////////////////
// Accepted --- 756ms cuiaoxiang
const maximumRemovals = (s, p, removable) => {
    let rn = removable.length;
    let [low, high] = [0, rn];
    let n = s.length;
    while (low != high) {
        let mid = low + high + 1 >> 1;
        let rem = Array(n).fill(false);
        for (let i = 0; i < mid; i++) rem[removable[i]] = true;
        let cur = '';
        for (let i = 0; i < n; i++) {
            if (!rem[i]) cur += s[i];
        }
        !isSubsequence(cur, p) ? high = mid - 1 : low = mid;
    }
    return high;
};

const main = () => {
    let s = "abcacb", p = "ab", removable = [3, 1, 0]
    let s2 = "abcbddddd", p2 = "abcd", removable2 = [3, 2, 1, 4, 5, 6];
    let s3 = "abcab", p3 = "abc", removable3 = [0, 1, 2, 3, 4];
    let s_debug1 = "qobftgcueho", p_debug1 = "obue", removable_debug1 = [5, 3, 0, 6, 4, 9, 10, 7, 2, 8];
    pr(maximumRemovals(s, p, removable))
    pr(maximumRemovals(s2, p2, removable2))
    pr(maximumRemovals(s3, p3, removable3))
    pr(maximumRemovals(s_debug1, p_debug1, removable_debug1)) // 7
};

main()

// pr(isSubsequence('KOTTAYAM', 'KOTA'))