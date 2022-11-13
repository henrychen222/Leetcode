/**
 * 07/10/21 evening
 * https://leetcode.com/contest/weekly-contest-249/problems/painting-a-grid-with-three-different-colors/
 */

const pr = console.log;

// Accepted --- 412ms
const mod = 1e9 + 7;
const colorTheGrid = (m, n) => {
    let valid = [];
    let a = Array(m).fill(0);
    // pr(a);
    outer:
    do { // get initial valid cases 6 ways
        for (let i = 0; i < m - 1; i++) {
            if (a[i] == a[i + 1]) continue outer;
        }
        valid.push([...a]);
    } while (ok(a, 3));
    pr(valid)
    let vn = valid.length;
    let dp = Array(vn).fill(1);
    pr(dp);
    for (let i = 0; i < n - 1; i++) {
        let ndp = Array(vn).fill(0);
        for (let j = 0; j < vn; j++) {
            mark:
            for (let k = 0; k < vn; k++) {
                let [aj, ak] = [valid[j], valid[k]];
                for (let l = 0; l < m; l++) {
                    if (aj[l] == ak[l]) continue mark;
                }
                ndp[k] += dp[j];
                ndp[k] %= mod;
            }
        }
        for (let j = 0; j < vn; j++) ndp[j] % mod;
        dp = ndp;
        // pr(dp);
    }
    // pr(dp);
    let res = 0;
    for (const e of dp) {
        res += e;
        if (res >= mod) res -= mod;
    }
    return res;
};

const ok = (a, base) => {
    // pr(a, base)
    let n = a.length;
    let i;
    for (i = n - 1; ~i && a[i] == base - 1; i--);
    if (i == -1) return false;
    a[i]++;
    for (let k = i + 1; k < n; k++) a[k] = 0;
    return true;
};

const main = () => {
    let m = 1, n = 1;
    let m2 = 1, n2 = 2;
    let m3 = 5, n3 = 5;
    let m_debug1 = 2, n_debug1 = 37;
    pr(colorTheGrid(m, n));
    pr(colorTheGrid(m2, n2));
    pr(colorTheGrid(m3, n3));
    pr(colorTheGrid(m_debug1, n_debug1));
};

main()