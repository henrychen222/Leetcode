/**
 * 06/11/22 morning
 * https://leetcode.com/contest/biweekly-contest-80/problems/successful-pairs-of-spells-and-potions/
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

// Accepted
const successfulPairs = (a, b, p) => {
    a = a.map((x, i) => [x, i]);
    b.sort((x, y) => x - y);
    let bi = new Bisect(), res = Array(a.length).fill(0);
    for (const [x, i] of a) {
        let min = Math.ceil(p / x), idx = bi.bisect_left(b, min), cnt = b.length - idx;
        res[i] = cnt;
    }
    return res;
};

const main = () => {
    let a = [5, 1, 3], b = [1, 2, 3, 4, 5], success = 7;
    let a2 = [3, 1, 2], b2 = [8, 5, 8], success2 = 16;
    pr(successfulPairs(a, b, success))
    pr(successfulPairs(a2, b2, success2))
};

main()