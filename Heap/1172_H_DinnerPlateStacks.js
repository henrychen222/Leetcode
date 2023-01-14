/*
 * 12/07/22 night
 * https://leetcode.com/problems/dinner-plate-stacks/
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

// TLE
// reference: kmjp
function DinnerPlates(cap) {
    let n = 1e5, used = new TreeSet(), notfull = new TreeSet(), g = [];
    for (let i = 0; i < n; i++) {
        g.push([]);
        notfull.add(i);
    }
    return { push, pop, popAtStack }
    function push(v) {
        let idx = notfull.first();
        g[idx].push(v);
        used.add(idx);
        if (g[idx].length == cap) notfull.remove(idx);
    }
    function pop() {
        return used.size() == 0 ? -1 : popAtStack(used.last());
    }
    function popAtStack(idx) {
        if (g[idx].length == 0) return -1;
        let res = g[idx].pop();
        notfull.add(idx);
        if (g[idx].length == 0) used.remove(idx);
        return res;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
function SegmentTreeRMQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = new Int32Array(len).fill(0);
    h = 2 ** h;
    return { update, minx, firstle, lastle, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.min(a[left(i)], a[right(i)]);
    }
    function minx(l, r) {
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) min = Math.min(min, a[l++]);
            if (r & 1) min = Math.min(min, a[--r]);
        }
        return min;
    }
    function firstle(l, v) {
        if (l >= h) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = left(cur);
            } else {
                cur++;
                if ((cur & cur - 1) == 0) return -1;
                if (cur % 2 == 0) cur = parent(cur);
            }
        }
    }
    function lastle(l, v) {
        if (l < 0) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = right(cur);
            } else {
                if ((cur & cur - 1) == 0) return -1;
                cur--;
                if (cur % 2 != 0) cur = parent(cur);
            }
        }
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}

// Accepted --- 2052ms
// reference: https://leetcode.com/contest/weekly-contest-151/ranking uwi
function DinnerPlates2(cap) {
    let n = 1e5, st = new SegmentTreeRMQ(n + 5), rst = new SegmentTreeRMQ(n + 5), g = [];
    for (let i = 0; i < n; i++) g.push([]);
    return { push, pop, popAtStack }
    function push(v) {
        let idx = st.firstle(0, cap - 1);
        // pr("push", idx);
        if (idx != -1 && idx < n) {
            g[idx].push(v);
            update(idx);
        }
    }
    function pop() {
        let idx = rst.lastle(n - 1, -1);
        // pr("pop", idx);
        return idx == -1 ? -1 : op(idx);
    }
    function popAtStack(idx) {
        return g[idx].length == 0 ? -1 : op(idx);
    }
    function op(idx) {
        let res = g[idx].pop();
        update(idx);
        return res;
    }
    function update(idx) {
        st.update(idx, g[idx].length);
        rst.update(idx, -g[idx].length);
    }
}

////////////////////////////////////////////////////////////////////////////////////
// TLE 11/15
function DinnerPlates1(cap) {
    let g = [];
    return { push, pop, popAtStack }
    function push(v) {
        let add = false;
        for (let i = 0; i < g.length; i++) {
            if (g[i].length < cap) {
                g[i].push(v);
                add = true;
                break;
            }
        }
        if (!add) {
            let a = [v];
            g.push(a);
        }
    }
    function pop() {
        if (g.length == 0) return -1;
        for (let i = g.length - 1; ~i; i--) {
            if (g[i].length > 0) {
                return g[i].pop();
            }
        }
        return -1;
    }
    function popAtStack(idx) {
        return g[idx] ? g[idx].pop() || -1 : -1;
    }
}

const main = () => {
    let D = DinnerPlates(2);
    D.push(1);
    D.push(2);
    D.push(3);
    D.push(4);
    D.push(5);
    pr(D.popAtStack(0)); // 2
    D.push(20);
    D.push(21);
    pr(D.popAtStack(0)); // 20
    pr(D.popAtStack(2));   // 21
    pr(D.pop()) // 5
    pr(D.pop()) // 4
    pr(D.pop()) // 3
    pr(D.pop()) // 1
    pr(D.pop()) // -1

    pr("")
    let debug1 = DinnerPlates(1);
    debug1.push(1);
    debug1.push(2);
    debug1.push(3);
    pr(debug1.popAtStack(1)); // 2
    pr(debug1.pop()); // 3
    pr(debug1.pop()); // 1

    pr("");
    let debug2 = DinnerPlates(2);
    debug2.push(471);
    debug2.push(177);
    debug2.push(1);
    debug2.push(29);
    debug2.push(333);
    debug2.push(154);
    debug2.push(130);
    debug2.push(333);

    pr(debug2.popAtStack(1)); // 29
    pr(debug2.popAtStack(0)); // 177
    pr(debug2.popAtStack(2)); // 154
    pr(debug2.popAtStack(0)); // 471
    debug2.push(165);
    debug2.push(383);
    debug2.push(267);
    debug2.push(367);
    debug2.push(53);
    debug2.push(373);
    debug2.push(388);
    debug2.push(249);
    pr(debug2.pop());  // 249
    pr(debug2.pop());  // 388
    pr(debug2.pop());  // 373
    pr(debug2.pop());  // 53
};

main()

/*
["DinnerPlates","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack"]
[[2],[373],[86],[395],[306],[370],[94],[41],[17],[387],[403],[66],[82],[27],[335],[252],[6],[269],[231],[35],[346],[4],[6],[2],[5],[2],[2],[7],[9],[8],[1]]


*/