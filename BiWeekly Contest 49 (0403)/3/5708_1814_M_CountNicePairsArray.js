/**
 * 04/03/21 morning
 * https://leetcode.com/contest/biweekly-contest-49/problems/count-nice-pairs-in-an-array/
 */

const pr = console.log;
const mi = Math.min;
const mx = Math.max;

const MOD = 1e9 + 7;

// const countNicePairs = (a) => {
//    pr(a);
//    let r = [];
//    for (const e of a) r.push(rev(e));
//    pr(r);
//    let n = a.length;
//    let sum1 = sum2 = [];
//    for (let i = 0; i < n; i++) sum1.push(a[i] + r[n - i - 1]);
//    for (let i = n - 1; ~i; i--) sum2.push(a[i] + r[n - i - 1]);
//    pr(sum1, sum2);
// };

// TLE 79/82
const countNicePairs1 = (a) => {
    let re = [];
    for (const e of a) re.push(rev(e));
    let n = a.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] + re[j] == a[j] + re[i]) res++;
        }
    }
    return res % MOD;
};

// TLE 64/82
const countNicePairs = (a) => {
    let m = new Map();
    for (const e of a) m.set(e, m.get(e) + 1 || 1);
    // pr(m);
    let r = new Map();
    for (const [k,] of m) {
        r.set(k, rev(k));
    }
    let u = Array.from(m.keys())
    let n = u.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let revi = r.get(u[i]);
        let occi = m.get(u[i]);
        for (let j = i + 1; j < n; j++) {
            let revj = r.get(u[j]);
            let occj = m.get(u[j]);
            if (u[i] + revj == u[j] + revi) {
                res += occi * occj;
            }
        }
    }
    return res % MOD;
};

const rev = (num) => {
    let s = num + '';
    let res = '';
    let n = s.length;
    for (let i = n - 1; ~i; i--)  res += s[i];
    return Number(res);
};

const main = () => {
    let nums = [42, 11, 1, 97];
    let nums2 = [13, 10, 35, 24, 76];
    pr(countNicePairs(nums));
    pr(countNicePairs(nums2));
};

main()

// pr(rev(123), rev(120));