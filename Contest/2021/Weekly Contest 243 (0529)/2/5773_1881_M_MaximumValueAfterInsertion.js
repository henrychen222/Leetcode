/**
 * 05/29/21 evening
 * https://leetcode.com/contest/weekly-contest-243/problems/maximum-value-after-insertion/
 */

const pr = console.log;


// TLE
const ll = BigInt;
const mxll = (...args) => args.reduce((m, e) => e > m ? e : m);
const mill = (...args) => args.reduce((m, e) => e < m ? e : m);
// const MIN = ll(Number.MIN_SAFE_INTEGER);
// const MAX = ll(Number.MAX_SAFE_INTEGER);
const MAX = ll('9'.repeat(10 ** 5));
const MIN = -MAX;
const maxValue1 = (s, x) => {
    let neg = false;
    if (s[0] == '-') {
        neg = true;
        s = s.slice(1);
    }
    // pr(s);
    let n = s.length;
    let [max, min] = [MIN, MAX];
    for (let i = 0; i <= n; i++) {
        let l = s.slice(0, i);
        let r = s.slice(i);
        // pr(l, r);
        let add = x + '';
        let tmp = l + add + r;
        let v = ll(tmp);
        max = mxll(max, v);
        min = mill(min, v);
    }
    // pr(max, min);
    let res = neg ? -min : max;
    return res + '';
};

// Accepted
const maxValue = (s, x) => {
    let neg = false;
    if (s[0] == '-') {
        neg = true;
        s = s.slice(1);
    }
    // pr(s);
    let xs = x + '';
    let n = s.length;
    if (neg) {
        for (let i = 0; i < n; i++) {
            if (xs < s[i]) {
                return '-' + s.slice(0, i) + xs + s.slice(i);
            }
        }
        return '-' + s + xs;
    } else {
        for (let i = 0; i < n; i++) {
            if (xs > s[i]) {
                return s.slice(0, i) + xs + s.slice(i);
            }
        }
        return s + xs;
    }
};

const main = () => {
    let n = "99", x = 9;
    let n2 = "-13", x2 = 2;
    let n3 = '99', x3 = 8;
    let n_debug1 = "-132", x_debug1 = 3;
    let n_debug2 = "962942516613939", x_debug2 = 3;
    let n_debug3 = "-2327779885511541", x_debug3 = 8;
    pr(maxValue(n, x))
    pr(maxValue(n2, x2))
    pr(maxValue(n3, x3))
    pr(maxValue(n_debug1, x_debug1)) // "-1323"
    pr(maxValue(n_debug2, x_debug2)) // "9632942516613939"
    pr(maxValue(n_debug3, x_debug3)) // "-23277789885511541"
};

main()


// let s = '1'.repeat(10 ** 5);
// pr(BigInt(s));

// pr('9' > '8', '0' < '1', '2' > '3')