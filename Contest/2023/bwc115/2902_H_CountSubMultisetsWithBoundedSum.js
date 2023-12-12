/*
 * 10/14/23 night
 * https://leetcode.com/contest/biweekly-contest-115/problems/count-of-sub-multisets-with-bounded-sum/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
// reference: https://leetcode.cn/circle/discuss/Lxqc1E/
const mod = 1e9 + 7;
const countSubMultisets = (a, l, r) => {
    let f = Array(r + 1).fill(0), m = counter(a), res = 0;
    f[0] = 1;
    for (const [x, occ] of m) {
        // pr(f)
        if (x == 0) {
            f = f.map(e => e * (occ + 1));
        } else {
            for (let i = x; i <= r; i++) {
                f[i] += f[i - x];
                f[i] %= mod;
            }
            for (let i = r; i >= (occ + 1) * x; i--) {
                // pr(i)
                f[i] -= f[i - (occ + 1) * x];
                f[i] %= mod;
            }
        }
    }
    // pr(f)
    for (let i = l; i <= r; i++) {
        res += f[i];
        res %= mod;
    }
    return (res + mod) % mod;
};

const main = () => {
    let a = [1, 2, 2, 3], l = 6, r = 6;
    let a2 = [2, 1, 4, 2, 7], l2 = 1, r2 = 5;
    let a3 = [1, 2, 1, 3, 5, 2], l3 = 3, r3 = 5;
    let a_debug1 = [23,54,2,21,43,41,5,9,27,6,41,27,18,20,9,12,8,9,57,13,31,25,33,11,30,12,34,19,1,12,13,40,28,40,22,4,36,8,11,5,9,11,34,13,20,20,25,14,9,19,89,5,37,4,6,32,44,1,2,28,6,15,26,9,60,2,9,4,11,36,63,18,6,79,6,1,8,37,22,15,16,0,15,1,54,6,11,11,4,5,36,27,17,33,30,19], 
    l_debug1 = 122, r_debug1 = 474;
    pr(countSubMultisets(a, l, r))
    pr(countSubMultisets(a2, l2, r2))
    pr(countSubMultisets(a3, l3, r3))
    pr(countSubMultisets(a_debug1, l_debug1, r_debug1)) // 391827978
};

main()