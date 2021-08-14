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
            // let mid = lo + hi >> 1; // 408ms
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted --- 520ms
const longestObstacleCourseAtEachPosition = (a) => {
    let i, n = a.length, bi = new Bisect();
    let dp = Array(n).fill(1 << 30);
    let res = Array(n).fill(0);
    for (i = 0; i < n; i++) {
        res[i] = bi.bisect_left(dp, a[i] + 1);
        pr(bi.bisect_left(dp, a[i] + 1), dp)
        dp[res[i]] = a[i];
        res[i]++;
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

