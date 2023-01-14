
/** 
 * Example problem: 
 * https://leetcode.com/problems/the-skyline-problem/
 * https://leetcode.com/problems/number-of-pairs-satisfying-inequality/ 01/12/23 evening
 * https://leetcode.com/problems/sliding-window-median/  01/13/23 evening
 * https://leetcode.com/problems/find-median-from-data-stream/ 01/13/23 night
 * https://leetcode.com/problems/finding-mk-average/ 01/13/23 night
 */

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
    return { insert, first, last, get, search, poll, pollLast, lower_bound, upper_bound, findKth, eraseByIndex, eraseOne, eraseAll, contains, size, clear, show };
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
    function eraseOne(x) {
        let idx = lower_bound(x);
        if (a[idx] == x) a.splice(idx, 1);
        removeOneOrManyMap(m, x);
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

const pr = console.log;

const main = () => {
    let s = new MultiSet();
    s.insert(3);
    s.insert(2);
    s.insert(7);
    s.insert(-5);
    s.insert(-4);
    s.insert(9);
    s.insert(6);
    s.insert(10);
    s.insert(6);
    s.insert(6);
    s.insert(6);
    pr("after insertion", s.show(), s.size())

    pr("search", s.search(6), s.search(10), s.search(11)); // 4 10 11
    pr(s.lower_bound(-6), s.lower_bound(-5), s.lower_bound(1), s.lower_bound(2), s.lower_bound(3), s.lower_bound(4)); // 0 0 2 2 3 4

    pr(s.upper_bound(-5), s.upper_bound(-4), s.upper_bound(2), s.upper_bound(6)); // 1 2 3 8

    pr("before erase index 8", "value", s.get(8), s.show());
    s.eraseByIndex(8)
    pr("after erase index 8", s.show());

    pr();
    pr("before eraseAll", s.show())
    s.eraseAll(6);
    pr("after eraseAll", s.show())

    s.eraseAll(9);
    pr("after eraseAll222", s.show())
}

main()

