/**
 * 07/16/22 evening
 * https://leetcode.com/contest/weekly-contest-302/problems/minimum-deletions-to-make-array-divisible/
 */

const pr = console.log

const factorization = (n) => {
    let m = new Map();
    for (let i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            n /= i;
            m.set(i, m.get(i) + 1 || 1);
        }
    }
    if (n > 1) m.set(n, m.get(n) + 1 || 1);
    return m;
};

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const gcdArray = (a) => { let res = 0; for (const x of a) { res = gcd(res, x); if (res == 1) return 1; } return res };

// brute force Accepted fuck
const minOperations = (a, b) => {
    a.sort((x, y) => x - y);
    let ma = counter(a);
    a = [...new Set(a)];
    pr(a, ma);
    for (const x of a) {
        if (b.every(y => y % x == 0)) {
            let remove = 0;
            for (const [e, occ] of ma) {
                if (e < x) remove += occ;
            }
            return remove;
        }
    }
    return -1;
};

const minOperations2 = (a, b) => {
    a.sort((x, y) => x - y);
    let ma = counter(a), u = new Set(b), f = [], common = new Set(), fmap = new Map(), res = [];
    for (const x of u) f.push(factorization(x));
    pr("f", f)
    f.map(m => {
        for (const [x,] of m) fmap.set(x, fmap.get(x) + 1 || 1);
    });
    pr("fmap", fmap);
    for (const [x, occ] of fmap) {
        if (occ == f.length) {
            common.add(x);
        }
    }
    pr("common", common, a)
    for (const com of common) {
        let remove = 0;
        for (const [x, occ] of ma) {
            if (x < com) remove += occ;
        }
        res.push(remove)
    }
    pr(res);
    return Math.min(...res);
};


 
// WA  35/39 passed
const minOperations1 = (a, b) => {
    let m = counter(a), g = gcdArray(b), res = 0;
    pr(m, g);
    if (!m.has(g)) return -1;
    for (const [x, occ] of m) {
        if (x < g) {
            pr(x, g);
            res += occ;
            m.delete(x);
        }
    }
    pr(m);
    return res;
};

const main = () => {
    let a = [2, 3, 2, 4, 3], b = [9, 6, 9, 3, 15];
    let a2 = [4, 3, 6], b2 = [8, 2, 6, 10];
    let a_debug1 = [3, 2, 6, 2, 35, 5, 35, 2, 5, 8, 7, 3, 4], b_debug1 = [105, 70, 70, 175, 105, 105, 105]
    let a_debug2 = [40, 38, 18, 19, 18, 18, 16], b_debug2 = [430222122, 345833946, 609158196, 173124594, 25468560, 990277596, 295095510, 354571344, 931500936, 636837210]
    pr(minOperations(a, b))
    pr(minOperations(a2, b2))
    pr(minOperations(a_debug1, b_debug1)) // 6
    pr(minOperations(a_debug2, b_debug2)) // 1
};

main()