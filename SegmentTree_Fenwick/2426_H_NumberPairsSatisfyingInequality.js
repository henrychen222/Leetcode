/*
 * 01/12/23 afternoon evening
 * https://leetcode.com/problems/number-of-pairs-satisfying-inequality
 */

const pr = console.log;

function Fenwick(n) {
    let a = Array(n).fill(0);
    return { query, update, rangeSum, tree }
    function query(i) {
        let sum = 0;
        for (i++; i > 0; i = parent(i)) sum += a[i];
        return sum;
    }
    function update(i, v) {
        for (i++; i < n; i = next(i)) a[i] += v;
    }
    function rangeSum(l, r) {
        return query(r) - query(l - 1);
    }
    function parent(x) {
        return x - lowestOneBit(x);
    }
    function next(x) {
        return x + lowestOneBit(x);
    }
    function lowestOneBit(x) {
        return x & -x;
    }
    function tree() {
        return a;
    }
}

// Accepted --- 145ms 100%
// reference: https://leetcode.com/contest/biweekly-contest-88/ranking cpp_template
const numberOfPairs = (a, b, diff) => {
    let n = a.length, res = 0, st = new Fenwick(1e5), offset = 1e5 / 2;
    for (let i = 0; i < n; i++) {
        let x = a[i] - b[i], y = x + diff;
        res += st.rangeSum(0, y + offset);
        st.update(x + offset, 1)
    }
    return res;
};

//////////////////////////////////////////////////////////////////////
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

function MultiSet(elements) {
    let a = [], m = new Map(), bi = new Bisect();
    initialize();
    return { insert, first, last, get, search, poll, pollLast, lower_bound, upper_bound, findKth, eraseByIndex, eraseAll, contains, size, clear, show };
    function initialize() {
        if (elements) {
            for (const x of elements) {
                bi.insort_right(a, x);
                m.set(x, m.get(x) + 1 || 1);
            }
        }
    }
    function insert(x) {
        bi.insort_right(a, x);
        m.set(x, m.get(x) + 1 || 1);
    }
    function first() {
        return a[0];
    }
    function last() {
        return a[a.length - 1];
    }
    function get(i) {
        return a[i];
    }
    function poll() {
        let res = a[0];
        a.splice(0, 1);
        removeOneOrManyMap(m, res);
        return res;
    }
    function pollLast() {
        let res = a.pop();
        removeOneOrManyMap(m, res);
        return res;
    }
    function lower_bound(x) {
        return bi.bisect_left(a, x);
    }
    function upper_bound(x) {
        return bi.bisect_right(a, x);
    }
    function findKth(k) {
        return a[k - 1];
    }
    function search(x) {
        return lower_bound(x);
    }
    function eraseByIndex(idx) {
        removeOneOrManyMap(m, a[idx]);
        a.splice(idx, 1);
    }
    function eraseAll(x) {
        if (contains(x)) {
            let idx = search(x), occ = m.get(x);
            while (occ--) a.splice(idx, 1);
            m.delete(x);
        }
    }
    function removeOneOrManyMap(m, x, cnt = 1) {
        let occ = m.get(x);
        occ > cnt ? m.set(x, occ - cnt) : m.delete(x);
    }
    function contains(x) {
        return m.has(x);
    }
    function size() {
        return a.length;
    }
    function clear() {
        a = [];
        m.clear();
    }
    function show() {
        return a;
    }
}

// Accepted --- 515ms 28.57%
// Accepted --- 534ms (rewrite multiSet)  01/13/23 night
// reference: https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2646606/python-reverse-pairs/
const numberOfPairs2 = (a, b, diff) => {
    let s = new MultiSet(), n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        let v = a[i] - b[i] + diff, idx = s.upper_bound(v);
        // pr(v, s.show(), idx);
        res += idx;
        s.add(a[i] - b[i]);
    }
    return res;
};

/////////////////////////////////////////////////////////////////////////////////
// TLE 59/61
const numberOfPairs1 = (a, b, diff) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] - a[j] <= b[i] - b[j] + diff) res++;
        }
    }
    return res;
};

const main = () => {
    let a = [3, 2, 5], b = [2, 2, 1], diff = 1;
    let a2 = [3, -1], b2 = [-2, 2], diff2 = -1;
    pr(numberOfPairs(a, b, diff))
    pr(numberOfPairs(a2, b2, diff2))
};

main()