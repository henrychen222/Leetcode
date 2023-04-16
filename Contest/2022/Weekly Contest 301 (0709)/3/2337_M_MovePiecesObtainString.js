/**
 * 07/09/22 evening
 * https://leetcode.com/contest/weekly-contest-301/problems/move-pieces-to-obtain-a-string/
 */

const pr = console.log;

// Accepted
// reference: https://leetcode.cn/circle/discuss/5t4W96/
const canChange = (s, t) => {
    let d = op(s), d2 = op(t);
    if (d.length != d2.length) return false;
    for (let i = 0; i < d.length; i++) {
        let [cs, idx] = d[i], [ct, idx2] = d2[i];
        if (cs != ct) return false; // relative order of either L or R, should keep in pace(same) in s and t
        if (cs == 'L') { // 'L' in s can only move left, so idx >= idx2
            if (idx < idx2) return false;
        } else {
            if (idx > idx2) return false;
        }
    }
    return true;
};

const op = (s) => {
    let n = s.length, d = [];
    for (let i = 0; i < n; i++) {
        if (s[i] == 'L') {
            d.push(['L', i]);
        } else if (s[i] == 'R') {
            d.push(['R', i]);
        }
    }
    return d;
};


////////////////////////////////////////////////////////////////////////
const cutMaxConsecutive = (as) => { let d = [], l = 0, n = as.length; for (let i = 0; i + 1 < n; i++) { if (as[i + 1] != as[i]) { d.push(as.slice(l, i + 1)); l = i + 1; } } d.push(as.slice(l)); return d; };

const canChange1 = (s, t) => {
    s = s.split(""), t = t.split("")
    let d = cutMaxConsecutive(s), d2 = cutMaxConsecutive(t);
    // pr(d, d2)
    d = remove1(d);
    d2 = remove1(d2);
    // pr("d", d, 'd2', d2)
    return merge(d) == merge(d2);
};

const merge = (d) => {
    let res = '';
    for (const e of d) {
        if (e[0] == '_') {
            res += e[0];
        } else {
            for (const c of e) res += c;
        }
    }
    return res;
};

const remove1 = (d) => {
    let canRemove = new Set(), res = [];
    for (let i = 0; i < d.length; i++) {
        if (d[i][0] == 'L') {
            for (let j = i - 1; ~j; j--) { // eat left
                if (d[j][0] == '_') {
                    canRemove.add(j);
                } else {
                    break;
                }
            }
        } else if (d[i][0] == 'R') {
            for (let j = i + 1; j < d.length; j++) { // eat right
                if (d[j][0] == '_') {
                    canRemove.add(j);
                } else {
                    break;
                }
            }
        }
    }
    // pr("canRemove", canRemove)
    for (let i = 0; i < d.length; i++) {
        if (canRemove.has(i)) continue;
        res.push(d[i]);
    }
    // pr("change", res)
    return res;
};

const main = () => {
    let s = "_L__R__R_", t = "L______RR";
    let s2 = "R_L_", t2 = "__LR";
    let s3 = "_R", t3 = "R_"
    let s_debug1 = "_LL__R__R_", t_debug1 = "L___L___RR"; // "LL______RR"
    pr(canChange(s, t))
    pr(canChange(s2, t2))
    pr(canChange(s3, t3))
    pr(canChange(s_debug1, t_debug1)) // false
};

main()
