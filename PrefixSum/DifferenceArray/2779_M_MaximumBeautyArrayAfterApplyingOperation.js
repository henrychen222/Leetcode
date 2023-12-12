/*
 * 07/15/23 evening
 * https://leetcode.com/contest/weekly-contest-354/problems/maximum-beauty-of-an-array-after-applying-operation/
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

// WA
const maximumBeauty1 = (a, k) => {
    a.sort((x, y) => x - y);
    let n = a.length;
    pr(a)
    if (n % 2 == 0) {
        let l = (n >> 1) - 1, r = n >> 1;
        let lcnt = go(a, a[l], k), rcnt = go(a, a[r], k);
        pr(a[l], a[r], lcnt, rcnt)
        return Math.max(lcnt, rcnt);
    } else {
        let m = n >> 1;
        pr(a[m])
        let cnt = go(a, a[m], k);
        return cnt;
    }
};

const go = (a, v, k) => {
    let l = v - k, r = v + k, bi = new Bisect();
    let ldx = bi.bisect_left(a, l); // >=l
    let rdx = bi.bisect_right(a, r) - 1 // <=r
    pr(v, [l, r], ldx, rdx)
    return rdx - ldx + 1;
};
/////////////////////////////////////////////////////
// WA
const maximumBeauty2 = (a, k) => {
    a.sort((x, y) => x - y);
    a = a.map(x => [x - k, x + k])
    pr(a)
    let b = mergeInterval(a);
    pr(b)
    return a.length - b.length + 1;
};

const mergeInterval = (a) => { // intersection: 交集
    a.sort((x, y) => x[0] - y[0]);
    let res = [[a[0][0], a[0][1]]], preEnd = a[0][1];
    for (const [start, end] of a) {
        if (start > preEnd) {
            res.push([start, end]);
            preEnd = end;
        } else {
            let pre = res.pop();
            let left = Math.max(pre[0], start); // 交集左边求大，右边求小
            let right = Math.min(pre[1], end);
            res.push([left, right]);
            preEnd = right;
        }
    }
    return res;
};

///////////////////////////////////////////////////
const maximumBeauty3 = (a, k) => diffArray(a, k)

// Accepted
// reference: https://leetcode.cn/circle/discuss/zRYtyk/
const diffArray = (a, k) => {
    let offset = k, max = Math.max(...a), d = Array(max + k + offset + 2).fill(0), cur = 0, res = 0;
    a.map(x => {
        d[x - k + offset]++;
        d[x + k + 1 + offset]--;
    })
    // pr(d)
    for (const e of d) {
        cur += e;
        res = Math.max(res, cur);
    }
    return res;
};


// Accepted --- https://leetcode.cn/circle/discuss/zRYtyk/ 我爱志方小姐
// https://labuladong.gitee.io/algo/di-yi-zhan-da78c/shou-ba-sh-48c1d/xiao-er-me-c304e/
function DiffArray(n) {
    let d = Array(n).fill(0);
    return { addRange, recover }
    function addRange(l, r, v) {
        d[l] += v;
        if (r + 1 < n) d[r + 1] -= v;
    }
    function recover() {
        let res = Array(n).fill(0);
        res[0] = d[0];
        for (let i = 1; i < n; i++) res[i] = res[i - 1] + d[i];
        return res;
    }
}

const maximumBeauty = (a, k) => {
    let min = Math.min(...a), max = Math.max(...a), da = new DiffArray(max + 1);
    a.map(x => {
        let l = Math.max(min, x - k), r = Math.min(max, x + k);
        da.addRange(l, r, 1);
    })
    let res = da.recover();
    // pr(res);
    return Math.max(...res);
};

const main = () => {
    let a = [4, 6, 1, 2], k = 2;
    let a2 = [1, 1, 1, 1], k2 = 10
    let a3 = [4, 6, 5, 1, 2];
    let a_debug1 = [49, 26], k_debug1 = 12;
    let a_debug2 = [50, 28, 30, 51], k_debug2 = 2;
    let a_debug3 = [76, 0], k_debug3 = 16;
    pr(maximumBeauty(a, k))
    pr(maximumBeauty(a2, k2))
    pr(maximumBeauty(a3, k))
    pr(maximumBeauty(a_debug1, k_debug1)) // 2  
    pr(maximumBeauty(a_debug2, k_debug2)) // 2
    pr(maximumBeauty(a_debug3, k_debug3)) // 1
};

main()