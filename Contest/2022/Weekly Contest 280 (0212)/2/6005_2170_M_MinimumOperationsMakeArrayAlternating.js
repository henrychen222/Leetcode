/**
 * 02/12/22 evening
 * https://leetcode.com/contest/weekly-contest-280/problems/minimum-operations-to-make-the-array-alternating/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const stmvalue_de = (m) => new Map([...m].sort((x, y) => y[1] - x[1]));

// Accepted
const minimumOperations = (a) => {
    let n = a.length, even = [], odd = [], res = 0;
    for (let i = 0; i < n; i++) i & 1 ? even.push(a[i]) : odd.push(a[i]);
    // pr(odd)
    // pr(even)
    let m1 = counter(odd), m2 = counter(even);
    m1 = stmvalue_de(m1);
    m2 = stmvalue_de(m2);
    let v1 = m1.keys().next().value, v2 = m2.keys().next().value;
    // pr(m1, m2, v1, v2);
    if (v1 != v2) {
       res = cal(odd, even, v1, v2);
    } else {
        let pre = v2;
        v2 = -1;
        for (const [x, ] of m2) {
            if (x != v1) {
                v2 = x;
                break;
            }
        }
        let res1 = cal(odd, even, v1, v2);
        v2 = pre;
        v1 = -1;
        for (const [x, ] of m1) {
            if (x != v2) {
                v1 = x;
                break;
            }
        }
        let res2 = cal(odd, even, v1, v2);
        // pr(res1, res2);
        res = Math.min(res1, res2);
    }
    return res;
};

const cal = (odd, even, v1, v2) => {
    let res = 0;
    for (const e of odd) {
        if (e != v1) res++;
    }
    for (const e of even) {
        if (e != v2) res++;
    }
    return res;
};

const main = () => {
    let nums = [3, 1, 3, 2, 4, 3];
    let nums2 = [1, 2, 2, 2, 2];
    pr(minimumOperations(nums))
    pr(minimumOperations(nums2))
};

main()