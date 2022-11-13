/**
 * 05/28/22 evening
 * https://leetcode.com/contest/weekly-contest-295/problems/steps-to-make-array-non-decreasing/
 */

const pr = console.log;


// Accepted
// reference: nyu_ldf + https://leetcode.com/problems/steps-to-make-array-non-decreasing/discuss/2085864/JavaC%2B%2BPython-Stack-%2B-DP-%2B-Explanation
const totalSteps = (a) => MonotonicStack(a);

const MonotonicStack = (a) => {
    let n = a.length, st = [], dp = Array(n).fill(0), res = 0;
    for (let i = n - 1; ~i; i--) {
        // pr("\nbefore", st, "dp", dp);
        while (st.length && a[i] > a[st[st.length - 1]]) {
            let last = st.pop();
            dp[i] = Math.max(dp[i] + 1, dp[last]);
        }
        // pr("pop", st,  "dp", dp);
        st.push(i);
        res = Math.max(res, dp[i]);
    }
    return res;
};

// don't know
const totalSteps3 = (a) => {
    let res = 0, ia = [];
    for (let i = 0; i < a.length; i++) ia.push(i);
    // for (let j = 0; j < 5; j++) {
    while (1) {
        let t = [], find = false;
        for (let i = 1; i < ia.length; i++) {
            let cur = ia[i - 1], next = ia[i];
            if (a[cur] > a[next]) {
                pr(a[cur], a[next])
                t.push(cur);
                find = true;
            }
        }
        if (!find) break;
        let diff = ia.length - t.length;
        ia = t;
        let add = maxDiff(ia);
        pr("ia", ia, "add", add, diff);
        show(a, ia);
        res += add == Number.MIN_SAFE_INTEGER ? diff : add;
    }
    return res;
};

const maxDiff = (a) => {
    let n = a.length, res = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < n; i++) res = Math.max(res, a[i] - a[i - 1] - 1);
    return res;
}

const show = (a, d) => {
    let res = [];
    for (const i of d) res.push(a[i]);
    pr("a", res);
};

////////////////////////////////////////////////////////////////
// WA
const totalSteps2 = (a) => {
    let d = [], n = a.length, start = -1;
    for (let i = 1; i < n; i++) {
        if (a[i - 1] > a[i]) {
            start = i - 1;
            break;
        }
    }
    if (start == -1) return 0;
    d.push(a[start]);
    pr("d", d);
    let cnt = 0, res = 0;
    for (let i = start + 1; i < n; i++) {
        if (a[i] >= d[d.length - 1]) {
            d.push(a[i]);
            pr("cnt", cnt);
            res = Math.max(res, cnt);
            cnt = 0;
        } else {
            cnt++;
        }
    }
    pr(d, cnt);
    return res;
};

// TLE
const totalSteps1 = (a) => {
    let res = 0;
    while (1) {
        let remove = new Set();
        for (let i = 1; i < a.length; i++) {
            if (a[i - 1] > a[i]) {
                remove.add(i);
            }
        }
        if (remove.size == 0) break;
        let b = [];
        for (let i = 0; i < a.length; i++) {
            if (!remove.has(i)) b.push(a[i]);
        }
        a = b;
        res++;
        pr("a", a)
    }
    pr(a);
    return res;
};

const main = () => {
    let a = [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11];
    let a2 = [4, 5, 7, 7, 13];
    let a_debug1 = [10, 1, 2, 3, 4, 5, 6, 1, 2, 3];
    pr(totalSteps(a))
    // pr(totalSteps(a2))
    // pr(totalSteps(a_debug1)) // 6
};

main()