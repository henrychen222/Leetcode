/*
 * 05/11/23 afernoon
 * https://leetcode.com/contest/biweekly-contest-103/problems/make-array-empty/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

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

// Accepted
const countOperationsToEmptyArray = (a) => {
    let n = a.length, st = new SegmentTreeRSQ(n + 3), res = n, pre = 0, f = Array(n + 1).fill(0);
    a = a.map((x, i) => [x, i + 1]).sort((x, y) => x[0] - y[0] || x[1] - y[1]);
    a.map(e => {
        let [, idx] = e;
        res += idx - 1 - st.rangeSum(0, idx - 1);
        if (pre < idx) {
            res -= pre - st.rangeSum(0, pre);
        } else {
            res += (n - pre) - (st.rangeSum(0, n) - st.rangeSum(0, pre));
        }
        pre = idx;
        st.update(idx, ++f[idx]);
    })
    return res;
};

//////////////////////////////////////////////////////////////////

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

// Accepted
// reference: https://leetcode.com/contest/biweekly-contest-103/ranking/1/ cuiaoxiang
const countOperationsToEmptyArray2 = (a) => {
    let n = a.length, fen = new Fenwick(n + 3), res = n, pre = 0;
    a = a.map((x, i) => [x, i + 1]).sort((x, y) => x[0] - y[0] || x[1] - y[1]);
    // pr(a)
    a.map(e => {
        let [x, idx] = e;
        res += idx - 1 - fen.rangeSum(0, idx - 1);
        // pr(fen.tree())
        // pr(fen.rangeSum(0, idx-1))
        if (pre < idx) {
            res -= pre - fen.rangeSum(0, pre);
        } else {
            res += (n - pre) - (fen.rangeSum(0, n) - fen.rangeSum(0, pre));
        }
        pre = idx;
        fen.update(idx, 1);
    })
    return res;
};

///////////////////////////////////////////////////////////////////////////////s
function Deque() {
    let m = {}, first = 0, last = -1;
    return { unshift, shift, push, pop, front, back, size, show }
    function push(...args) {
        let i = 0;
        if (size() == 0) {
            first = last = 0;
            m[first] = args[i++];
        }
        for (; i < args.length; i++) m[++last] = args[i];
    }
    function unshift(...args) {
        let i = 0;
        if (size() == 0) {
            first = last = 0;
            m[first] = args[i++];
        }
        for (; i < args.length; i++) m[--first] = args[i];
    }
    function pop() {
        let res = m[last];
        delete m[last];
        last--;
        return res;
    }
    function shift() {
        let res = m[first];
        delete m[first];
        first++;
        return res;
    }
    function front() {
        return m[first];
    }
    function back() {
        return m[last];
    }
    function size() {
        if (first > last) return 0;
        return last - first + 1;
    }
    function show() {
        let a = Object.keys(m), res = [];
        a.sort((x, y) => x - y);
        for (const k of a) res.push(m[k]);
        return res;
    }
}

// TLE
const countOperationsToEmptyArray1 = (a) => {
    let q = new Deque(), res = 0, pq = new MinPriorityQueue({ compare: (x, y) => x - y });
    a.map(x => {
        q.push(x);
        pq.enqueue(x);
    });
    while (q.size()) {
        // pr(q.show(), pq.front());
        let cur = q.shift();
        if (cur == pq.front()) {
            pq.dequeue();
        } else {
            q.push(cur);
        }
        res++;
    }
    return res;
};

const main = () => {
    let a = [3, 4, -1]
    let a2 = [1, 2, 4, 3]
    let a3 = [1, 2, 3];
    let debug1 = [-15, -19, 5];
    pr(countOperationsToEmptyArray(a))
    pr(countOperationsToEmptyArray(a2))
    pr(countOperationsToEmptyArray(a3))
    pr(countOperationsToEmptyArray(debug1)) // 5
};

main()