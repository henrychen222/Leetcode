// 01/13/23 night

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

// Accepted
// reference: https://leetcode.com/problems/finding-mk-average/solutions/1152724/c-balance-3-multisets/
function MKAverage(m, k) {
    let L = new MultiSet(), R = new MultiSet(), M = new MultiSet(), a = [], sum = 0, pos = 0, sz = m - 2 * k;
    return { addElement, calculateMKAverage }
    function addElement(x) {
        add(x);
        if (pos >= m) remove(a[pos % m]);
        a[pos++ % m] = x;
        // pr("L", L.show(), "R", R.show(),"M", M.show())
    }
    function calculateMKAverage() {
        if (pos < m) return -1;
        // pr("sum", sum)
        return sum / sz >> 0;
    }
    function add(x) {
        L.insert(x);
        if (L.size() > k) {
            let idx = L.size() - 1, v = L.get(idx);
            M.insert(v);
            sum += v;
            L.eraseByIndex(idx);
        }
        if (M.size() > sz) {
            let idx = M.size() - 1, v = M.get(idx);
            sum -= v;
            R.insert(v);
            M.eraseByIndex(idx);
        }
    }
    function remove(x) {
        if (x <= L.last()) {
            L.eraseByIndex(L.search(x));
        } else if (x <= M.last()) {
            let idx = M.search(x), v = M.get(idx);
            sum -= v;
            M.eraseByIndex(idx);
        } else {
            R.eraseByIndex(R.search(x));
        }
        if (L.size() < k) {
            let v = M.first();
            L.insert(v);
            sum -= v;
            M.poll();
        }
        if (M.size() < sz) {
            let v = R.first();
            M.insert(v);
            sum += v;
            R.poll();
        }
    }
}

const pr = console.log;
const main = () => {
    let obj = new MKAverage(3, 1);
    obj.addElement(3);
    obj.addElement(1);
    pr(obj.calculateMKAverage());
    obj.addElement(10);
    pr(obj.calculateMKAverage());
    obj.addElement(5);
    obj.addElement(5);
    obj.addElement(5);
    pr(obj.calculateMKAverage());

    pr("")
    let debug1 = new MKAverage(3, 1);
    debug1.addElement(17612);
    debug1.addElement(74607);
    pr(debug1.calculateMKAverage()); -1
    debug1.addElement(8272);
    debug1.addElement(33433);
    pr(debug1.calculateMKAverage()); // 33433
    debug1.addElement(15456);
    debug1.addElement(64938);
    pr(debug1.calculateMKAverage()); // 33433
    debug1.addElement(99741);

};

main()


