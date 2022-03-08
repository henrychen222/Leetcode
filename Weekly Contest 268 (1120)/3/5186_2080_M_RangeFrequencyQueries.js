/**
 * 11/20/21 evening
 * https://leetcode.com/contest/weekly-contest-268/problems/range-frequency-queries/
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

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted
function RangeFreqQuery(a) {
    let m = counter_value_in_indexA_in(a), memo = new Map(), bi = new Bisect();
    // pr(m);
    return { query }
    function query(l, r, x) {
        if (memo.has(x)) return memo.get(x);
        if (!m.has(x)) return 0;
        let a = m.get(x), len = a.length;
        let min = a[0], max = a[len - 1];
        if (l <= min && r >= max) return len;
        if (r < min || l > max) return 0;
        let lbs = bi.bisect_left(a, l); // lbs >= l
        let ubs = bi.bisect_right(a, r); // ubs <= r
        ubs--;
        // pr(x, a, lbs, ubs);
        return ubs - lbs + 1;
    }
}

const main = () => {
    let rangeFreqQuery = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 33]);
    pr(rangeFreqQuery.query(1, 2, 4)); // 1
    pr(rangeFreqQuery.query(0, 11, 33)); // 3
    pr(rangeFreqQuery.query(1, 11, 33)); // 3
    pr(rangeFreqQuery.query(0, 7, 33)); // 2

    pr()
    let rangeFreqQuery2 = new RangeFreqQuery([1, 1, 1, 2, 2]);
    pr(rangeFreqQuery2.query(0, 1, 2)); // 0
    pr(rangeFreqQuery2.query(0, 2, 1)); // 3
    pr(rangeFreqQuery2.query(3, 3, 2)); // 1
    pr(rangeFreqQuery2.query(2, 2, 1)); // 1


    pr()
    let rangeFreqQuery3 = new RangeFreqQuery([3,4,5,3,3,2,2,2,5,4]);
    pr(rangeFreqQuery3.query(2, 6, 3)); // 2
    pr(rangeFreqQuery3.query(5, 6, 5)); // 0
    pr(rangeFreqQuery3.query(1, 6, 2)); // 2
    pr(rangeFreqQuery3.query(0, 2, 3)); // 1
    pr(rangeFreqQuery3.query(5, 6, 4)); // 0


};

main()

/*
["RangeFreqQuery","query","query","query","query"]
[[[1,1,1,2,2]],[0,1,2],[0,2,1],[3,3,2],[2,2,1]]
--- [null,0,3,1,1]

["RangeFreqQuery","query","query","query","query","query"]
[[[3,4,5,3,3,2,2,2,5,4]],[2,6,3],[5,6,5],[1,6,2],[0,2,3],[5,6,4]]
--- [null,2,0,2,1,0]
*/