// 05/17/22 morning

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

function Fenwick(n) {
    let a = Array(n).fill(0);
    return { queryReverse, updateReverse, tree }
    function queryReverse(i) {
        let sum = 0;
        for (i++; i < n; i = next(i)) sum += a[i];
        return sum;
    }
    function updateReverse(i, v) {
        for (i++; i > 0; i = parent(i)) a[i] += v;
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

// Accepted --- 470ms 21.43%
const reversePairs = (a) => {
    let res = 0, n = a.length, fen = new Fenwick(n + 1), bi = new Bisect(), origin = [...a];
    a.sort((x, y) => x - y);
    for (const x of origin) {
        let idx = bi.bisect_left(a, 2 * x + 1), sum = fen.queryReverse(idx);
        // pr(idx, fen.tree(), sum);
        res += sum;
        let idx2 = bi.bisect_left(a, x);
        fen.updateReverse(idx2, 1);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [1, 3, 2, 3, 1];
    let nums2 = [2, 4, 3, 5, 1];
    let debug1 = [5, 4, 3, 2, 1];
    let debug2 = [1, 3, 2, 5, 6, 8];
    let debug3 = [1];
    pr(reversePairs(nums)); // 2
    pr(reversePairs(nums2)); // 3
    pr(reversePairs(debug1)); // 4
    pr(reversePairs(debug2)); // 0
    pr(reversePairs(debug3)); // 0
};

main()