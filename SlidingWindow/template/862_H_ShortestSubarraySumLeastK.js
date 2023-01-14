/*
 * 01/07/22 noon
 * https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
 */

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];

// Accepted --- 404ms 48.15%
const shortestSubarray = (a, k) => {
    let n = a.length, res = Number.MAX_SAFE_INTEGER, sum = 0, pq = new MinPriorityQueue({ compare: (x, y) => x[0] - y[0] });
    for (let i = 0; i < n; i++) {
        sum += a[i];
        if (sum >= k) res = Math.min(res, i + 1);
        while (pq.size() && sum - pq.front()[0] >= k) res = Math.min(res, i - pq.dequeue()[1]);
        pq.enqueue([sum, i]);
    }
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

////////////////////////////////////////////////////////////////////////////////////////
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

// Accepted --- 295ms 74.7%
const shortestSubarray3 = (a, k) => {
    let n = a.length, res = Number.MAX_SAFE_INTEGER, pre = preSum(a), q = new Deque();
    for (let i = 0; i <= n; i++) {
        while (q.size() && subArraySum(pre, q.front(), i - 1) >= k) res = Math.min(res, i - q.shift());
        while (q.size() && subArraySum(pre, q.back(), i - 1) <= 0) q.pop();
        q.push(i);
    }
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

// Accepted --- 290ms 74.7%
const shortestSubarray2 = (a, k) => {
    let n = a.length, res = Number.MAX_SAFE_INTEGER, pre = preSum(a), q = [];
    // pr(pre)
    for (let i = 0; i <= n; i++) {
        while (q.length && subArraySum(pre, q[0], i - 1) >= k) {
            // pr(i, q[0], subArraySum(pre, i, q[0] - 1));
            res = Math.min(res, i - q.shift());
        }
        while (q.length && subArraySum(pre, q[q.length - 1], i - 1) <= 0) q.pop();
        q.push(i);
        // pr(q);
    }
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

////////////////////////////////////////////////////////////////////////
// WA
const shortestSubarray1 = (a, k) => {
    let n = a.length, sum = 0, l = 0, res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        sum += a[i];
        while (sum > k && l < i) sum -= a[l++];
        if (sum >= k && i > l) {
            // pr(l, i, "len", i - l + 1, a[l], a[i], sum, "res", res)
            res = Math.min(res, i - l + 1);
        }
    }
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

const main = () => {
    let a = [1], k = 1;
    let a2 = [1, 2], k2 = 4;
    let a3 = [2, -1, 2], k3 = 3
    let a_debug1 = [77, 19, 35, 10, -14], k_debug1 = 3
    let a_debug2 = [17, 85, 93, -45, -21], k_debug2 = 150
    pr(shortestSubarray(a, k))
    pr(shortestSubarray(a2, k2))
    pr(shortestSubarray(a3, k3))
    pr(shortestSubarray(a_debug1, k_debug1)) // 1
    pr(shortestSubarray(a_debug2, k_debug2)) // 2
};

main()