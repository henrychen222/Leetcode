/*
 * 03/11/23 night
 * https://leetcode.com/contest/weekly-contest-336/problems/minimum-time-to-complete-all-tasks/
 */

const pr = console.log;


function SegmentTreeRSQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(0);
    return { update, query, rangeSum, tree }
    function update(pos, v) {
        a[n + pos] = v;
        for (let i = parent(n + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = a[left(i)] + a[right(i)];
    }
    function query(l, r) { // [L, R)
        let sum = 0;
        if (l >= r) return 0;
        l += n;
        r += n;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) sum += a[l++];
            if (r & 1) sum += a[--r];
        }
        return sum;
    }
    function rangeSum(l, r) {
        return query(0, r + 1) - query(0, l);
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

// Accepted --- 468ms
const findMinimumTime = (a) => {
    let st = new SegmentTreeRSQ(2005), f = Array(2005).fill(0);
    a.sort((x, y) => x[1] - y[1]);
    for (const [l, r, t] of a) {
        let curT = t;
        curT -= st.rangeSum(l, r);
        for (let i = r; curT > 0; i--) {
            if (st.rangeSum(0, i) == st.rangeSum(0, i - 1)) {
                st.update(i, ++f[i]);
                curT--;
            }
        }
    }
    return st.rangeSum(0, 2000);
};

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

// Accepted --- 263ms
// reference:
const findMinimumTime2 = (a) => {
    let fen = new Fenwick(2005);
    a.sort((x, y) => x[1] - y[1]);
    for (const [l, r, t] of a) {
        let curT = t;
        curT -= fen.rangeSum(l, r);
        for (let i = r; curT > 0; i--) {
            if (fen.rangeSum(0, i) == fen.rangeSum(0, i - 1)) {
                fen.update(i, 1);
                curT--;
            }
        }
    }
    return fen.rangeSum(0, 2000);
};

//////////////////////////////////////////////////////////
// Accepted --- 178ms
const findMinimumTime1 = (a) => {
    let on = Array(2005).fill(false), res = 0;
    a.sort((x, y) => x[1] - y[1]);
    for (const [l, r, t] of a) {
        let cur = 0;
        for (let i = l; i <= r; i++) cur += on[i];
        let curT = Math.max(0, t - cur);
        for (let i = r; i >= l; i--) {
            if (!on[i] && curT > 0) {
                on[i] = true;
                curT--;
                res++;
            }
        }
    }
    return res;
};

const main = () => {
    let a = [[2, 3, 1], [4, 5, 1], [1, 5, 2]];
    let a2 = [[1, 3, 2], [2, 5, 3], [5, 6, 2]];
    pr(findMinimumTime(a))
    pr(findMinimumTime(a2))
};

main()