/*
 * 06/03/23 night
 * https://leetcode.com/contest/weekly-contest-348/problems/count-of-integers/
 */

const pr = console.log;

const initialize4DArray = (n, m, p, q) => { let r = []; for (let i = 0; i < n; i++) { let a = []; for (let j = 0; j < m; j++) { let b = []; for (let k = 0; k < p; k++) { b.push(Array(q).fill(0)); } a.push(b); } r.push(a); } return r; };
const minus_mod = (x, y, mod) => ((x - y) % mod + mod) % mod;

// Accepted  digit DP
// reference: https://leetcode.cn/circle/discuss/p8kMMM/ liupengsay
const ll = BigInt, mod = 1e9 + 7;
const count = (s, t, l, r) => minus_mod(go(t, l, r), go((ll(s) - 1n).toString(), l, r), mod);

const go = (s, l, r) => {
    let n = s.length, f = initialize4DArray(n + 1, 2, 2, r + 1);
    // pr(n + 1, r + 1, f)
    for (let i = n; i >= 0; i--) {
        for (let isLimit = 1; isLimit >= 0; isLimit--) {
            for (let isNum = 1; isNum >= 0; isNum--) {
                for (let cnt = r; cnt >= 0; cnt--) {
                    if (i == n) {
                        f[i][isLimit][isNum][cnt] = isNum && l <= cnt && cnt <= r ? 1 : 0;
                        // pr(f[i][isLimit][isNum][cnt])
                        continue;
                    }
                    let res = 0;
                    if (!isNum) res += f[i + 1][0][0][0];
                    let L = isNum ? 0 : 1, R = isLimit ? s[i] - '0' : 9;
                    for (let digit = L; digit <= R; digit++) {
                        if (cnt + digit <= r) {
                            res += f[i + 1][(isLimit && R == digit) ? 1 : 0][1][cnt + digit];
                            res %= mod;
                        }
                    }
                    f[i][isLimit][isNum][cnt] = res % mod;
                    // pr(f[i][isLimit][isNum][cnt])
                }
            }
        }
    }
    pr(f[0][1][0][0])
    return f[0][1][0][0];
};

const main = () => {
    let s = "1", t = "12", l = 1, r = 8;
    let s2 = "1", t2 = "5", l2 = 1, r2 = 5;
    let s_debug1 = "1000000007", t_debug1 = "2000000014", l_debug1 = 1, r_debug1 = 400;
    // pr(count(s, t, l, r))
    // pr(count(s2, t2, l2, r2))
    pr(count(s_debug1, t_debug1, l_debug1, r_debug1))
};

main()