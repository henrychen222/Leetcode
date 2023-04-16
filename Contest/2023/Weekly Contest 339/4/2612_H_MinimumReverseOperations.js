/*
 * 04/02/23 evening
 * https://leetcode.com/contest/weekly-contest-339/problems/minimum-reverse-operations/
 * 
 * reference: https://leetcode.cn/circle/discuss/K0dVcY/ TsReaper
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

// Accepted --- 4660ms
const minReverseOperations = (n, p, banned, k) => {
    let res = Array(n).fill(-1), evenOdd = [[], []], q = new Deque(), bi = new Bisect();
    if (k == 1) {
        res[p] = 0;
        return res;
    }
    banned = new Set(banned);
    for (let i = 0; i < n; i++) {
        if (i != p && !banned.has(i)) evenOdd[i % 2].push(i);
    }
    res[p] = 0;
    q.push(p);
    while (q.size()) {
        let cur = q.shift();
        let L = Math.max(-(k - 1), k - 1 - cur * 2), R = Math.min(k - 1, -(k - 1) + (n - cur - 1) * 2); // caculate the jump range
        let x = (cur + k - 1) % 2, idx = bi.bisect_left(evenOdd[x], cur + L);
        while (1) { // not reached position, can be jump from current position (cur -> next)
            let next = evenOdd[x][idx];
            if (next == undefined || next > cur + R) break;
            res[next] = res[cur] + 1;
            q.push(next);
            evenOdd[x].splice(idx, 1);
        }
    }
    return res;
};

// Accepted --- 5044ms
const minReverseOperations1 = (n, p, banned, k) => {
    let res = Array(n).fill(-1), evenOdd = [[], []], q = [p], bi = new Bisect();
    if (k == 1) {
        res[p] = 0;
        return res;
    }
    banned = new Set(banned);
    for (let i = 0; i < n; i++) {
        if (i != p && !banned.has(i)) evenOdd[i % 2].push(i);
    }
    res[p] = 0;
    while (q.length) {
        let cur = q.shift();
        let L = Math.max(-(k - 1), k - 1 - cur * 2), R = Math.min(k - 1, -(k - 1) + (n - cur - 1) * 2); // caculate the jump range
        let x = (cur + k - 1) % 2, idx = bi.bisect_left(evenOdd[x], cur + L);
        while (1) { // not reached position, can be jump from current position (cur -> next)
            let next = evenOdd[x][idx];
            // pr("next", next)
            if (next == undefined || next > cur + R) break;
            res[next] = res[cur] + 1;
            q.push(next);
            evenOdd[x].splice(idx, 1);
        }
    }
    return res;
};

const main = () => {
    let n = 4, p = 0, banned = [1, 2], k = 4;
    let n2 = 5, p2 = 0, banned2 = [2, 4], k2 = 3
    let n3 = 4, p3 = 2, banned3 = [0, 1, 3], k3 = 1
    let n_debug1 = 5, p_debug1 = 0, banned_debug1 = [], k_debug1 = 2;
    let n_debug2 = 3, p_debug2 = 1, banned_debug2 = [], k_debug2 = 2;
    pr(minReverseOperations(n, p, banned, k))
    pr(minReverseOperations(n2, p2, banned2, k2))
    pr(minReverseOperations(n3, p3, banned3, k3))
    pr(minReverseOperations(n_debug1, p_debug1, banned_debug1, k_debug1)) // [ 0, 1, 2, 3, 4 ]
    pr(minReverseOperations(n_debug2, p_debug2, banned_debug2, k_debug2)) // [1, 0, 1]
};

main()