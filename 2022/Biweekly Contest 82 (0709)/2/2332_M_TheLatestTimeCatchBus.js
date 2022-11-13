/**
 * 07/09/22 morning
 * https://leetcode.com/contest/biweekly-contest-82/problems/the-latest-time-to-catch-a-bus/
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


const sm = (a) => a.reduce(((x, y) => x + y), 0);
const sumOfRange = (l, r) => (l + r) * (r - l + 1) / 2;
const isRangeOfStep = (a) => sm(a) == sumOfRange(a[0], a[a.length - 1]);
const stmkey_in = (m) => new Map([...m].sort((x, y) => x[0] - y[0]));
const generateMapSet1 = (m, k, v, cap) => {
    if (!m.has(k)) m.set(k, new Set());
    if (m.get(k).size < cap) {
        m.get(k).add(v);
        return true;
    }
    return false;
};
const generateMapSet = (m, k, v) => { if (!m.has(k)) m.set(k, new Set()); m.get(k).add(v); };

// clean version
// Accepted --- 874ms
const latestTimeCatchTheBus = (a, b, capacity) => {
    let m = new Map(), bi = new Bisect();
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    for (const x of b) {
        let idx = bi.bisect_left(a, x);
        while ((m.get(a[idx]) || new Set()).size >= capacity) idx++;
        if (a[idx] != undefined) generateMapSet(m, a[idx], x, capacity);
    }
    for (const bus of a) {
        if (!m.has(bus)) m.set(bus, new Set())
    }
    m = stmkey_in(m);
    let buses = Array.from(m.keys()).reverse(), used = new Set(b);
    for (const bus of buses) {
        let se = m.get(bus), d = [...se], first = d[0], last = d[d.length - 1];
        if (d.length == 0) return bus;
        if (isRangeOfStep(d)) {
            if (last < bus && d.length < capacity) {
                res = Math.max(bus, last + 1);
                if (!used.has(res)) return res;
            } else {
                res = first - 1;
                if (!used.has(res)) return res;
            }
        } else {
            if (last < bus && d.length < capacity) {
                res = Math.max(bus, last + 1);
                if (!used.has(res)) return res;
            } else {
                for (let i = d.length - 1, expect = last; ~i; i--, expect--) {
                    if (d[i] != expect && !used.has(expect)) return expect;
                }
            }
        }
    }
    return a[0]
};

/*
[
  2,  3,  5,  7,  8,
  9, 12, 13, 18, 20
]
[
   2,  4,  5,  8, 10,
  12, 13, 14, 18, 19,
  30, 34
]

Map {
  2 => Set { 2 },
  5 => Set { 4 },
  7 => Set { 5 },
  8 => Set { 8 },
  12 => Set { 10 },
  13 => Set { 12 },
  18 => Set { 13 },
  20 => Set { 14 }
}
*/
// Accepted --- 762ms
const latestTimeCatchTheBus1 = (a, b, capacity) => {
    let m = new Map(), bi = new Bisect();
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    // pr(a);
    // pr(b);
    for (const x of b) {
        // pr("after", m)
        let idx = bi.bisect_left(a, x);
        while ((m.get(a[idx]) || new Set()).size >= capacity) idx++;
        if (a[idx] != undefined) {
            // pr(x, "bus", a[idx])
            let op = generateMapSet1(m, a[idx], x, capacity);
            if (!op) {
                while ((m.get(a[idx]) || new Set()).size >= capacity) idx++;
                // pr(x, "bus", a[idx])
                if (a[idx] != undefined) generateMapSet1(m, a[idx], x, capacity);
            }
        }
    }
    for (const bus of a) { // add empty bus
        if (!m.has(bus)) m.set(bus, new Set())
    }
    m = stmkey_in(m);
    // pr(m, "cap", capacity);
    let buses = Array.from(m.keys()).reverse(), used = new Set(b);
    // pr(buses)
    for (const bus of buses) {
        let se = m.get(bus), d = [...se], first = d[0], last = d[d.length - 1];
        if (d.length == 0) return bus;
        if (isRangeOfStep(d)) {
            if (last < bus && d.length < capacity) {
                // pr("111")
                res = Math.max(bus, last + 1);
                if (!used.has(res)) return res;
            } else {
                // pr("222")
                res = first - 1;
                if (!used.has(res)) return res;
            }
        } else {
            if (last < bus && d.length < capacity) {
                // pr("333")
                res = Math.max(bus, last + 1);
                if (!used.has(res)) return res;
            } else {
                // pr("444")
                for (let i = d.length - 1, expect = last; ~i; i--, expect--) {
                    if (d[i] != expect && !used.has(expect)) return expect;
                }
            }
        }
    }
    return a[0]
};


const main = () => {
    let buses = [10, 20], passengers = [2, 17, 18, 19], capacity = 2;
    let buses2 = [20, 30, 10], passengers2 = [19, 13, 26, 4, 25, 11, 21], capacity2 = 2;
    let a_debug1 = [3], b_debug1 = [2, 4], capcity_debug1 = 2;
    let a_debug2 = [2], b_debug2 = [2], capcity_debug2 = 2;
    let a_debug3 = [3], b_debug3 = [2], capcity_debug3 = 1;
    let a_debug4 = [3], b_debug4 = [4], capcity_debug4 = 1;
    let a_debug5 = [5], b_debug5 = [2, 3], capcity_debug5 = 10000;
    let a_debug6 = [18, 8, 3, 12, 9, 2, 7, 13, 20, 5], b_debug6 = [13, 10, 8, 4, 12, 14, 18, 19, 5, 2, 30, 34], capcity_debug6 = 1;
    let a_debug7 = [15, 16, 17, 7, 10, 20, 13, 12], b_debug7 = [18, 15, 11, 17, 12, 13, 14, 10, 19, 16], capcity_debug7 = 2;
    let a_debug8 = [6, 8, 18, 17], b_debug8 = [6, 8, 17], capcity_debug8 = 1;
    let a_debug9 = [681, 8843, 5710],
        b_debug9 = [185, 740, 625, 50],
        capcity_debug9 = 1;
    pr(latestTimeCatchTheBus(buses, passengers, capacity))
    pr(latestTimeCatchTheBus(buses2, passengers2, capacity2))
    pr(latestTimeCatchTheBus(a_debug1, b_debug1, capcity_debug1)) // 3
    pr(latestTimeCatchTheBus(a_debug2, b_debug2, capcity_debug2)) // 1
    pr(latestTimeCatchTheBus(a_debug3, b_debug3, capcity_debug3)) // 1
    pr(latestTimeCatchTheBus(a_debug4, b_debug4, capcity_debug4)) // 3
    pr(latestTimeCatchTheBus(a_debug5, b_debug5, capcity_debug5)) // 5
    pr(latestTimeCatchTheBus(a_debug6, b_debug6, capcity_debug6)) // 11
    pr(latestTimeCatchTheBus(a_debug7, b_debug7, capcity_debug7)) // 9
    pr(latestTimeCatchTheBus(a_debug8, b_debug8, capcity_debug8)) // 18
    pr(latestTimeCatchTheBus(a_debug9, b_debug9, capcity_debug9)) // 624
};

main()

    // if (m.size == 0) return lastbus;
    // let se = m.get(lastbus), d = [...se], first = d[0], last = d[d.length - 1];
    // if (isRangeOfStep(d)) {
    //     if (last < lastbus && d.length < capacity) {
    //         pr("111")
    //         return Math.max(lastbus, last + 1);
    //     } else {
    //         pr("222")
    //         return first - 1;
    //     }
    // } else {
    //     if (last < lastbus && d.length < capacity) {
    //         pr("333")
    //         return Math.max(lastbus, last + 1);
    //     } else {
    //         pr("444")
    //         for (let i = d.length - 1, expect = last; ~i; i--, expect--) {
    //             if (d[i] != expect) return expect;
    //         }
    //     }
    // }