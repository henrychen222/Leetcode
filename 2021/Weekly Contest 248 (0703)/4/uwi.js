/**
 * 07/03/21 evening night
 * https://leetcode.com/contest/weekly-contest-248/problems/longest-common-subpath/
 */

const pr = console.log;

const ll = BigInt;
const int = parseInt;
const assert = (condition) => { if (!condition) throw new Error("Assertion failed"); }

// TLE 68/71
const longestCommonSubpath = (n, paths) => {
    let [low, high] = [0, 1e5 + 5];
    while (low + 1 < high) {
        let mid = low + high >> 1;
        ok(paths, mid) ? low = mid : high = mid;
    }
    return low;
};

const ok = (paths, h) => {
    let se;
    for (const p of paths) {
        let pn = p.length;
        let rh = new RollingHash61(ll(1e9 + 7), pn);
        for (const e of p) rh.add(ll(e));
        if (se) {
            let nset = new Set();
            for (let i = 0; i + h - 1 < pn; i++) {
                let tmp = rh.height(i, i + h);
                if (se.has(tmp)) {
                    nset.add(tmp);
                }
            }
            se = nset;
        } else {
            se = new Set();
            for (let i = 0; i + h - 1 < pn; i++)  se.add(rh.height(i, i + h));
        }
        if (se.size == 0) return false;
    }
    return true;
};

function RollingHash61(m, n) { // m: long  n: int
    const mod = (1n << 61n) - 1n;
    assert(m > 0);
    assert(n > 0);
    let pows = generate_pows(m, n);
    let hs = Array(n + 1).fill(0n);
    let hp = 0;
    return { height, add }
    function generate_pows(m, n) {
        let res = Array(n + 1).fill(0n);
        res[0] = 1n;
        for (let i = 1; i <= n; i++)res[i] = mul(res[i - 1], m);
        return res;
    }

    function add(x) { // x: long
        hs[hp + 1] = mul(hs[hp], m) + x;
        if (hs[hp + 1] >= mod) hs[hp + 1] -= mod;
        hp++;
    }

    function height(l, r) {
        assert(l <= r);
        return modd(hs[r] - mul(hs[l], pows[r - l]));
    }

    function mul(a, b) {
        let al = a & (1n << 31n) - 1n, ah = a >> 31n;
        let bl = b & (1n << 31n) - 1n, bh = b >> 31n;
        let low = al * bl;
        let mid = al * bh + bl * ah;
        let high = ah * bh + (mid >> 31n);
        let res = modd(modd(2n * high + low) + ((mid & (1n << 31n) - 1n) << 31n));
        return res;
    }

    function modd(a) {
        while (a >= mod) a -= mod;
        while (a < 0) a += mod;
        return a;
    }
}

const main = () => {
    let n = 5, paths = [[0, 1, 2, 3, 4], [2, 3, 4], [4, 0, 1, 2, 3]];
    let n2 = 3, paths2 = [[0], [1], [2]];
    let n3 = 5, paths3 = [[0, 1, 2, 3, 4], [4, 3, 2, 1, 0]];
    pr(longestCommonSubpath(n, paths))
    pr(longestCommonSubpath(n2, paths2))
    pr(longestCommonSubpath(n3, paths3))
};

main()

// pr(parseInt(1e10 / (2 ** 31)))
// pr(ll(1e10) >> 31n)


// pr(2 ** 61)
// pr(1n << 61n)

// pr(1n << 31n)
// pr(2 ** 31)

// pr(4n << 31n)
// pr(4 * 2 ** 31)