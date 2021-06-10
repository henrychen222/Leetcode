/**
 * 06/09/21 night
 * https://leetcode.com/problems/largest-component-size-by-common-factor/
 */

function DJSet(n) {
    let parent = Array(n).fill(-1);
    let size = Array(n).fill(0);
    return { find, union, updateS, getSize, getParent }
    function find(x) {
        // return parent[x] < 0 ? x : parent[x] = find(parent[x]); // Accepted --- 956ms 37.50%
        return parent[x] < 0 ? x : (parent[x] = find(parent[x]));
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            // if (parent[x] < parent[y])[x, y] = [y, x]; // Accepted --- 636ms  62.50%
            if (parent[y] < parent[x])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
            size[x] += size[y];
        }
        return x == y;
    }
    function updateS(idx, v) {
        size[idx] = v;
    }
    function getSize() {
        return size;
    }
    function getParent() {
        return parent;
    }
}

// reference: https://leetcode.com/contest/weekly-contest-113/ranking  uwi
// Accepted --- 556ms 62.50%
const MAX = 1e5;
const largestComponentSize = (a) => {
    let n = a.length;
    let lpf = lowestPrimeFactors(MAX + 1);
    // pr(lpf);
    let ds = new DJSet(MAX + 1);
    // pr(ds.getSize());
    for (const x of a) ds.updateS(x, 1);
    // pr(ds.getSize());
    for (const x of a) {
        let xx = x;
        while (xx > 1) {
            ds.union(x, lpf[xx]);
            xx = xx / lpf[xx] >> 0;
        }
    }
    let res = 0;
    for (let i = 1; i <= MAX; i++) {
        if (ds.getParent()[i] < 0) {
            // pr(ds.getSize()[i])
            res = Math.max(res, ds.getSize()[i]);
        }
    }
    return res;
};

const lowestPrimeFactors = (n) => {
    let tot = 0;
    let lpf = Array(n + 1).fill(0);
    let u = n + 32;
    let lu = Math.log(u);
    let divide = u / lu;
    let divideT = divide / lu;
    let len = divide + divideT * 1.5;
    let primes = Array(len >> 0).fill(0);
    for (let i = 2; i <= n; i++) lpf[i] = i;
    for (let p = 2; p <= n; p++) {
        if (lpf[p] == p) primes[tot++] = p;
        let tmp;
        for (let i = 0; i < tot && primes[i] <= lpf[p] && (tmp = primes[i] * p) <= n; i++) {
            lpf[tmp] = primes[i];
        }
    }
    return lpf;
};

const pr = console.log;
const main = () => {
    let nums = [4, 6, 15, 35];
    let nums2 = [20, 50, 9, 63];
    let nums3 = [2, 3, 6, 7, 4, 12, 21, 39];
    pr(largestComponentSize(nums))
    pr(largestComponentSize(nums2))
    pr(largestComponentSize(nums3))
};

main()