/*
 * 07/08/23 evening
 * https://leetcode.com/contest/weekly-contest-353/problems/maximum-number-of-jumps-to-reach-the-last-index/
 */

const pr = console.log;

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
const maximumJumps = (a, t) => {
    let n = a.length, g = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(a[i] - a[j]) <= t) {
                if (!g.has(i)) g.set(i, new Set());
                g.get(i).add(j);
            }
        }
    }
    let q = new Deque(), dis = Array(n).fill(Number.MIN_SAFE_INTEGER);
    dis[0] = 0;
    q.push(0);
    while (q.size()) {
        let cur = q.shift();
        let d = g.get(cur) || [];
        for (const next of d) {
            if (next > cur) {
                if (dis[next] < dis[cur] + 1) {
                    dis[next] = dis[cur] + 1;
                    q.push(next);
                }
            }
        }
    }
    // pr(dis);
    return dis[n - 1] == Number.MIN_SAFE_INTEGER ? -1 : dis[n - 1];
};

const main = () => {
    let a = [1, 3, 6, 4, 1, 2], t = 2;
    let a2 = [1, 3, 6, 4, 1, 2], t2 = 3;
    let a3 = [1, 3, 6, 4, 1, 2], t3 = 0;
    pr(maximumJumps(a, t))
    pr(maximumJumps(a2, t2))
    pr(maximumJumps(a3, t3))
};

main()