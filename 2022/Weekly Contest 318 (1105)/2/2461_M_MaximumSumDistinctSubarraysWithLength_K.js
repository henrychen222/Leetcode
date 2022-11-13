/*
 * 11/05/22 evening
 * https://leetcode.com/contest/weekly-contest-318/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 */

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };

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

// Accepted
// reference: kmjp
const maximumSubarraySum = (a, k) => {
    let n = a.length, res = 0, m = new Map(), sum = 0;
    for (let i = 0; i < n; i++) {
        sum += a[i];
        addOneOrManyMap(m, a[i])
        if (i >= k) {
           sum -= a[i-k];
           removeOneOrManyMap(m, a[i-k]);
        }
        // pr(sum, m);
        if (m.size == k) res = Math.max(res, sum);
    }
    return res;
};

const maximumSubarraySum2 = (a, k) => {
    let n = a.length, res = 0, q = new Deque(), se = new Set(), sum = 0;
    for (let i = 0; i < k; i++) { // issue here don't know when has duplicates, when it recovers
        q.push(a[i]);
        se.add(a[i]);
        sum += a[i];
    }
    if (q.size() == se.size) res = sum;
    // pr("begin", q.show(), se)
    for (let i = k; i < n; i++) {
        let remove = q.shift();
        se.delete(remove);
        q.push(a[i]);
        // pr(q.show(), se)
        if (!se.has(a[i])) {
            se.add(a[i]);
            sum = sum - remove + a[i];
            res = Math.max(res, sum);
        }
    }
    return res;
};

// TLE
const maximumSubarraySum1 = (a, k) => {
    let n = a.length, res = 0, pre = preSum(a);
    for (let i = 0; i + k - 1 < n; i++) {
        let l = i, r = i + k - 1, sub = [], se = new Set();
        for (let j = l; j <= r; j++) {
            sub.push(a[j]);
            se.add(a[j]);
        }
        // pr(sub, se)
        if (se.size == sub.length) {
            let sum = subArraySum(pre, l, r);
            res = Math.max(res, sum);
        }
    }
    return res;
};

const main = () => {
    let a = [1, 5, 4, 2, 9, 9, 9], k = 3;
    let a2 = [4, 4, 4], k2 = 3;
    let a_debug1 = [1, 2, 2], k_debug1 = 2;
    let a_debug2 = [9, 9, 9, 1, 2, 3], k_debug2 = 3;
    pr(maximumSubarraySum(a, k))
    // pr(maximumSubarraySum(a2, k2))
    // pr(maximumSubarraySum(a_debug1, k_debug1)) // 3
    // pr(maximumSubarraySum(a_debug2, k_debug2)) // 12

};

main()
