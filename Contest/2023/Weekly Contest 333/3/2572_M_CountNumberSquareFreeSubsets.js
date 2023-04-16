/* 
 * 02/19/23 afternoon
 * https://leetcode.com/contest/weekly-contest-333/problems/count-the-number-of-square-free-subsets/
 */

const pr = console.log;

const ll = BigInt;
const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const minus_mod = (x, y, mod) => ((x - y) % mod + mod) % mod;

// Accepted --- reference: https://leetcode.cn/circle/discuss/YrMMXy/
// 02/20/23 night fix 43/44 passed
// 02/21/23 night finally fixed
const mod = 1e9 + 7, bmod = ll(mod);
const squareFreeSubsets = (a) => {
    let d = [2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30];
    let f = Array(31).fill(0), dp = new Map(), sum = 0;
    for (const x of a) f[x]++;
    dp.set(1, Number(powmod(2n, ll(f[1]), bmod)));
    for (const v of d) {
        for (const [x,] of dp) {
            if (gcd(v, x) == 1) {
                let occ = dp.get(x * v) || 0, occ2 = dp.get(x) || 0;
                dp.set(x * v, (occ + occ2 * f[v]) % mod);
            }
        }
    }
    for (const [, v] of dp) sum += v;
    return minus_mod(sum, 1, mod);
};

// TLE
const squareFreeSubsets1 = (a) => {
    // let tp = 1n;
    // for (const x of a) tp *= ll(x)
    // se = new Set();
    // for (let i = 2n; i * i <= tp; i++) se.add(i * i);
    let n = a.length, res = 0;
    for (let i = 0; i < 1 << n; i++) {
        let p = 1n;
        let sub = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sub.push(a[j]);
                p *= ll(a[j]);
            }
        }
        // pr(sub, p, isSquareFree(p), isSquareFree2(p));
        if (isSquareFree(p)) res++;
    }
    return res - 1;
};

const isSquareFree = (p) => {
    let factors = findAllFactors(p);
    // pr("\np", p, factors)
    for (const f of factors) {
        // pr(f, isSquare(f))
        if (isSquare(f)) return false;
    }
    return true;
};

const sqll = (v) => { if (v < 0n) throw 'negative input'; if (v < 2n) return v; const dfs = (n, x0) => { let x1 = ((n / x0) + x0) >> 1n; if (x0 === x1 || x0 === (x1 - 1n)) return x0; return dfs(n, x1); }; return dfs(v, 1n); }; // has >> 0

const isSquare = (x) => {
    if (x == 4n) return true;
    let sq = sqll(x);
    return sq * sq == x;
}

const findAllFactors = (n) => {
    let res = new Set();
    for (let i = 1n; i * i <= n; i++) {
        if (n % i == 0) {
            if (i == n / i) {
                res.add(i);
            } else {
                res.add(i);
                res.add(n / i);
            }
        }
    }
    res.delete(1n);
    return res;
};


let se;
const isSquareFree2 = (p) => {
    for (const d of se) {
        if (p % ll(d) == 0) return false;
    }
    return true;
};

const main = () => {
    let a = [3, 4, 4, 5];
    let a2 = [1];
    let a_debug1 = [11, 2, 19, 7, 9, 27];
    let a_debug2 = [8, 11, 17, 2, 25, 29, 21, 20, 4, 22];
    let a_debug3 = [22, 2, 5, 26, 28, 8, 4, 11, 12, 17, 11, 3, 19, 29, 19, 7, 24, 12, 22, 5, 8, 22];
    pr(squareFreeSubsets(a))
    pr(squareFreeSubsets(a2))
    pr(squareFreeSubsets(a_debug1)) // 15
    pr(squareFreeSubsets(a_debug2)) // 39
    pr(squareFreeSubsets(a_debug3)) // 1727

};

main()

// pr(isSquare(4n))