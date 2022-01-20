/**
 * 01/20/21 afternoon
 * https://leetcode.com/problems/swap-adjacent-in-lr-string/
 */

const pr = console.log;

// Accepted --- 125ms 38.53%
// reference: https://leetcode.com/problems/swap-adjacent-in-lr-string/discuss/217070/Python-using-corresponding-position-
const canTransform = (s, t) => {
    let a = [], b = [], n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == 'L' || s[i] == 'R') {
            a.push([s[i], i]);
        }
        if (t[i] == 'L' || t[i] == 'R') {
            b.push([t[i], i]);
        }
    }
    // pr(a, b);
    let len = a.length;
    if (len != b.length) return false;
    for (let i = 0; i < len; i++) {
        let [ca, ci] = a[i], [ba, bi] = b[i];
        if (ca != ba) return false;
        if (ca == 'L' && ci < bi) return false;
        if (ca == 'R' && ci > bi) return false;
    }
    return true;
};

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// WA
const canTransform2 = (s, t) => {
    let ms = counter(s), mt = counter(t);
    // pr(ms, mt)
    if (!ms.has('X') && s != t) return false;
    for (const [c, occ] of mt) {
        if (!ms.has(c)) {
            return false;
        } else {
            if (occ != ms.get(c)) return false;
        }
    }
    return true;
};

// WA
const canTransform1 = (s, t) => {
    let n = s.length, res = '';
    for (let i = 0; i < n;) { // replace from 0
        if (s[i] != t[i]) {
            let ts = s.slice(i, i + 2), tt = t.slice(i, i + 2);
            if (ts == 'XL' && tt == 'LX') {
                res += 'LX';
                i += 2;
                continue;
            } else if (ts == 'RX' && tt == 'XR') {
                res += "XR";
                i += 2;
                continue;
            }
        }
        res += s[i];
        i++;
    }
    pr(res);
    return res == t;
};

const main = () => {
    let start = "RXXLRXRXL", end = "XRLXXRRLX";
    let start2 = "X", end2 = "L";
    let start_debug1 = "XXXXXLXXXX", end_debug1 = "LXXXXXXXXX"
    let start_debug2 = "RL", end_debug2 = "LR";
    let start_debug3 = "LXXLXRLXXL", end_debug3 = "XLLXRXLXLX";
    pr(canTransform(start, end));
    pr(canTransform(start2, end2))
    pr(canTransform(start_debug1, end_debug1)) // true
    pr(canTransform(start_debug2, end_debug2)) // false
    pr(canTransform(start_debug3, end_debug3)) // false
};

main()