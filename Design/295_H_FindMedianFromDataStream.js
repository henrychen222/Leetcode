/**
 * 03/18/21 afternoon
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

const pr = console.log;

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

// Accepted --- 1658ms 11.23%
function MedianFinder() {
    let s = new MultiSet();
    return { addNum, findMedian }
    function addNum(x) {
        s.insert(x);
    }
    function findMedian() {
        let n = s.size(), m = n >> 1;
        return n & 1 ? s.get(m) : (s.get(m - 1) + s.get(m)) / 2;
    }
}

////////////////////////////////////////////////////////////////
// Accepted --- 4392ms 23.74%
class MedianFinder1 {
    constructor() {
        this.a = [];
    }

    addNum(num) {
        this.a.push(num);
    }

    findMedian() {
        this.a.sort((x, y) => x - y);
        let n = this.a.length;
        let m = n >> 1;
        return n & 1 ? this.a[m] : (this.a[m - 1] + this.a[m]) / 2;
    }
}


const {
    MinPriorityQueue
} = require('@datastructures-js/priority-queue');

// TLE
class MedianFinder2 {
    constructor() {
        this.pq = new MinPriorityQueue({
            priority: x => x[0]
        });
    }

    addNum(num) {
        this.pq.enqueue([num]);
    }

    findMedian() {
        let a = this.pq.toArray();
        let n = a.length;
        let m = n >> 1;
        return n & 1 ? a[m].element[0] : (a[m - 1].element[0] + a[m].element[0]) / 2;
    }
}

const main = () => {
    let medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    pr(medianFinder.findMedian()); // 1.5
    medianFinder.addNum(3);
    pr(medianFinder.findMedian()); // 2.0
};

main()