/**
 * 06/06/22 night
 * https://leetcode.com/problems/super-ugly-number/
 * 
 * reference:
 * https://leetcode.com/problems/ugly-number-ii/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function TreeSet(elements) {
    let ts = [], se = new Set(), bisect = new Bisect();
    initialize();
    return { add, first, last, poll, pollLast, floor, ceiling, lower, higher, remove, contains, size, clear, show };
    function initialize() {
        if (elements) {
            for (const e of elements) {
                if (!se.has(e)) {
                    bisect.insort_right(ts, e);
                    se.add(e);
                }
            }
        }
    }
    function add(e) {
        if (!se.has(e)) {
            bisect.insort_right(ts, e);
            se.add(e);
        }
    }
    function first() {
        return ts[0];
    }
    function last() {
        return ts[ts.length - 1];
    }
    function poll() {
        let res = ts[0];
        ts.splice(0, 1);
        se.delete(res);
        return res;
    }
    function pollLast() {
        let res = ts.pop();
        se.delete(res);
        return res;
    }
    function ceiling(e) { // >= lower_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
        return res == undefined ? null : res;
    }
    function higher(e) { // > upper_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
        return res == undefined ? null : res;
    }
    function floor(e) { // <= 
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function lower(e) { // <
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function remove(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) ts.splice(idx, 1);
        se.delete(e);
    }
    function contains(e) {
        return se.has(e);
    }
    function size() {
        return ts.length;
    }
    function clear() {
        ts = [];
        se.clear();
    }
    function show() {
        return ts;
    }
}

///////////////////////////////////////////////////////////////////////////////
// Accepted --- 170ms 75.00%
const nthSuperUglyNumber = (n, primes) => {
    let res = [1], max = Math.max(...primes), cnt = Array(max + 1).fill(0);
    while (res.length < n) {
        let min = Number.MAX_SAFE_INTEGER;
        for (const x of primes) {
            let next = res[cnt[x]] * x;
            min = Math.min(min, next);
        }
        for (const x of primes) {
            let next = res[cnt[x]] * x;
            if (min == next) cnt[x]++;
        }
        res.push(min);
    }
    // pr(res);
    return res[n - 1];
};

// TLE 81/84
// Accepted in Java --- 1754ms 5%
const nthSuperUglyNumber3 = (n, primes) => {
    let ts = new TreeSet([1]);
    // pr(ts.show())
    for (let t = 1; t < n; t++) {
        let cur = ts.poll();
        // pr("cur", cur, pq.toArray());
        while (ts.size() && ts.first() == cur) {
            cur = ts.poll();
        }
        for (const x of primes) ts.add(cur * x);
    }
    return ts.first();
};

// RE 81/84, correct, but seems memory out
// Accepted in Java --- 758ms 18.27%
const nthSuperUglyNumber2 = (n, primes) => {
    let pq = new MinPriorityQueue();
    pq.enqueue(1);
    for (let t = 1; t < n; t++) {
        let cur = pq.dequeue().element;
        // pr("cur", cur, pq.toArray());
        while (!pq.isEmpty() && pq.front().element == cur) {
            cur = pq.dequeue().element;
        }
        for (const x of primes) pq.enqueue(cur * x);
    }
    return pq.front().element;
};

// TLE 77/84
const nthSuperUglyNumber1 = (n, primes) => {
    let se = new Set(primes), x, t;
    for (x = 1, t = 1; t <= n; x++) {
        let p = findAllPrimeFactors(x);
        if (isSuperUgly(p, se)) {
            t++;
            // pr(x, p, t);
        }
    }
    return x - 1;
};

const isSuperUgly = (p, se) => {
    for (const x of p) {
        if (!se.has(x)) return false;
    }
    return true;
};

const findAllPrimeFactors = (n) => {
    let res = new Set(),
        c = 2;
    while (n > 1) {
        if (n % c == 0) {
            res.add(c);
            n /= c;
        } else {
            c++;
        }
    }
    return res;
};

const main = () => {
    let n = 12,
        primes = [2, 7, 13, 19];
    let n2 = 1,
        primes2 = [2, 3, 5];
    let n_debug1 = 800,
        prime_debug1 = [37, 43, 59, 61, 67, 71, 79, 83, 89, 97, 101, 103, 113, 127, 131, 157, 163, 167, 173, 179, 191, 193, 197, 199, 211, 229, 233, 239, 251, 257];
    let n_debug2 = 100000
    prime_debug2 = [7, 19, 29, 37, 41, 47, 53, 59, 61, 79, 83, 89, 101, 103, 109, 127, 131, 137, 139, 157, 167, 179, 181, 199, 211, 229, 233, 239, 241, 251];
    pr(nthSuperUglyNumber(n, primes))
    pr(nthSuperUglyNumber(n2, primes2))
    pr(nthSuperUglyNumber(n_debug1, prime_debug1)) // 411811
    pr(nthSuperUglyNumber(n_debug2, prime_debug2)) // 1092889481
};

main()