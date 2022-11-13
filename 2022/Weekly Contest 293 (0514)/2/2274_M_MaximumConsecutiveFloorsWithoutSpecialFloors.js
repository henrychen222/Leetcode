/**
 * 05/14/22 evening
 * https://leetcode.com/contest/weekly-contest-293/problems/maximum-consecutive-floors-without-special-floors/
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


const maxDis = (a) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < a.length; i++) max = Math.max(max, a[i] - a[i - 1] - 1);
    return max;
};

// Accepted
const maxConsecutive = (bottom, top, special) => {
    special.sort((x, y) => x - y);
    let bi = new Bisect(), start = bi.bisect_left(special, bottom), end = bi.bisect_right(special, top) - 1;
    let a = special.slice(start, end + 1);
    a.unshift(bottom - 1);
    a.push(top + 1);
    // pr(start, end, a);
    let res = maxDis(a);
    return res;
};

const main = () => {
    let bottom = 2, top = 9, special = [4, 6];
    let bottom2 = 6, top2 = 8, special2 = [7, 6, 8];
    pr(maxConsecutive(bottom, top, special))
    pr(maxConsecutive(4, 9, special))
    pr(maxConsecutive(2, 6, special)) // 
    pr(maxConsecutive(4, 5, [4, 5])) // 0
    pr(maxConsecutive(bottom2, top2, special2)) // 0
};

main()