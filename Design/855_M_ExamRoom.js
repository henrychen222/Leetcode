/**
 * 11/10/21 morning
 * https://leetcode.com/problems/exam-room/
 */

// Accepted --- 112ms 95.00%   11/10/21 afternoon fix
// reference https://leetcode.com/problems/exam-room/discuss/139862/C%2B%2BJavaPython-Straight-Forward
function ExamRoom(n) {
    let a = [];
    return { seat, leave }
    function seat() {
        // pr(a);
        if (a.length == 0) {
            a.push(0);
            return 0;
        }
        let dis = Math.max(a[0], n - 1 - a[a.length - 1]);
        for (let i = 1; i < a.length; i++) dis = Math.max(dis, a[i] - a[i - 1] >> 1);
        if (a[0] == dis) {
            a.unshift(0);
            return 0;
        }
        for (let i = 1; i < a.length; i++) {
            if (a[i] - a[i - 1] >> 1 == dis) {
                a.splice(i, 0, a[i] + a[i - 1] >> 1);
                return a[i];
            }
        }
        a.push(n - 1);
        return n - 1;
    }
    function leave(p) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] == p) {
                a.splice(i, 1);
                break;
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////// 
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
            x < a[mid] ? hi = mid : lo = mid + 1;
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
    let ts = [];
    let se = new Set();
    let bisect = new Bisect();
    if (elements) addAll(elements);
    return { add, floor, ceiling, lower, higher, remove, contains, size, clear, toArray };
    function addAll(elements) {
        for (const e of elements) {
            if (se.has(e)) continue;
            add(e);
            se.add(e);
        }
    }
    function add(e) {
        if (!se.has(e)) {
            bisect.insort_right(ts, e);
            se.add(e);
        }
    }
    function ceiling(e) { // >=  c++ set lower_bound
        let idx = bisect.bisect_right(ts, e);
        return ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
    }
    function floor(e) { // <= 
        let idx = bisect.bisect_left(ts, e);
        return ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
    }
    function lower(e) { // <
        let idx = bisect.bisect_left(ts, e);
        return ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
    }
    function higher(e) { // >  c++ set upper_bound
        let idx = bisect.bisect_right(ts, e);
        return ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
    }
    function remove(e) {
        let res = new Set(ts);
        res.delete(e);
        ts = [...res];
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
    }
    function toArray() {
        return ts;
    }
}

// thinking wrong
function ExamRoom1(n) {
    let ts = new TreeSet(), pre, l, r, midL, disL, midR, disR;
    return { seat, leave }
    function seat() {
        pr("\nset begin", ts.toArray())
        if (ts.size() == 0) {
            ts.add(0);
            return 0;
        } else if (ts.size() == 1) {
            x = ts.toArray()[0];
            let disL = x - 0,
                disR = n - 1 - x;
            let res = disL >= disR ? 0 : n - 1;
            pre = res;
            ts.add(res);
            return res;
        }
        l = ts.lower(pre), r = ts.higher(pre);
        midL = pre + l >> 1, disL = pre - midL;
        midR = pre + r >> 1, disR = midR - pre;
        pr("pre", pre, "l", l, "r", r, "set", ts.toArray(), "midL", midL, "midR", midR);
        if (l != undefined) {
            if (r != undefined) {
                let res;
                if (midL != l) {
                    if (midR != pre) {
                        res = disL >= disR ? midL : midR;
                    } else {
                        res = midL;
                    }
                } else {
                    res = midR;
                }
                pre = res; // didn't understand problems correctly
                ts.add(res);
                return res;
            } else {
                pre = midL;
                ts.add(midL);
                return midL;
            }
        } else {
            pre = midR;
            ts.add(midR);
            return midR;
        }
    }
    function leave(p) {
        pr('remove', ts.toArray())
        ts.remove(p);
    }
}

const pr = console.log;
const main = () => {
    let examRoom = new ExamRoom(10);
    pr(examRoom.seat()); // 0
    pr(examRoom.seat()); // 9
    pr(examRoom.seat()); // 4
    pr(examRoom.seat()); // 2
    examRoom.leave(4);
    pr(examRoom.seat()); // 5

    pr("")
    let debug1 = new ExamRoom(4);
    pr(debug1.seat()); // 0
    pr(debug1.seat()); // 3
    pr(debug1.seat()); // 1
    pr(debug1.seat()); // 2
    debug1.leave(1);
    debug1.leave(3);
    pr(debug1.seat()); // 1

    pr("")
    let debug2 = new ExamRoom(10);
    pr(debug2.seat()); // 0
    pr(debug2.seat()); // 9
    pr(debug2.seat()); // 4
    debug2.leave(0);
    debug2.leave(4);
    pr(debug2.seat()); // 0
    pr(debug2.seat()); // 4
    pr(debug2.seat()); // 2
    pr(debug2.seat()); // 6
    pr(debug2.seat()); // 1
    pr(debug2.seat()); // 3
    pr(debug2.seat()); // 5
    pr(debug2.seat()); // 7
    pr(debug2.seat()); // 8
    debug2.leave(0);
};

main()