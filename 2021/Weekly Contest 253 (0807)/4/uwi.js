// 08/07/21 night

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
            let mid = lo + hi >> 1;
            x < a[mid] ? hi = mid : lo = mid + 1;
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

// TLE
const ll = BigInt;
const longestObstacleCourseAtEachPosition = (a) => {
    let n = a.length;
    let b = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        b[i] = ll(a[i]) << 32n | ll(i);
    }
    return LIS(b);
};

const MIN = Number.MIN_SAFE_INTEGER;
const LIS = (a) => {
    pr(a);
    let n = a.length, maxL = 0, bi = new Bisect();
    let midA = Array(n + 1).fill(MIN / 2);
    let res = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let part = midA.slice(0, maxL + 1);
        // pr(part, a[i])
        let idx = bi.bisect_left(part, a[i]);
        // pr(idx)
        if (part[idx] != a[i]) { // idx < 0 in java
            idx--;
            // pr(idx);
            midA[idx + 1] = a[i];
            if (idx >= maxL) maxL++;
        }
        // pr('\ncheck', midA)
        res[i] = idx + 1;
    }
    return res;
};

const main = () => {
    let obstacles = [1, 2, 3, 2];
    let obstacles2 = [2, 2, 1];
    let obstacles3 = [3, 1, 5, 6, 4, 2];
    // pr(longestObstacleCourseAtEachPosition(obstacles))
    // pr(longestObstacleCourseAtEachPosition(obstacles2))
    pr(longestObstacleCourseAtEachPosition(obstacles3))
};

main()


// pr(3 << 29, 3 << 30, 3n << 32n, 3 * (2 ** 32))