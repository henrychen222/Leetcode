/**
 * 05/13/21 morning
 * https://leetcode.com/problems/online-majority-element-in-subarray/
 * 
 * read:
 * https://leetcode.com/problems/online-majority-element-in-subarray/discuss/356227/C%2B%2B-Codes-of-different-approaches-(Random-Pick-Trade-off-Segment-Tree-Bucket)
 * https://leetcode.com/problems/online-majority-element-in-subarray/discuss/355848/Python-Binary-Search-%2B-Find-the-Majority-Element
 */


function Bisect() {
    return {
        insort_right,
        insort_left,
        bisect_left,
        bisect_right
    }

    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }

    function bisect_right(a, x, lo = 0, hi = null) {
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

    function bisect_left(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function SegmentTreeRQ(m, A, n) {
    /*
       Accepted --- 872ms 66.67%
       let h = Math.ceil(Math.log2(n));
       const MAX = 2 * 2 ** h - 1;
     */
    let bisect = new Bisect();
    const MAX = 4 * n;
    let tree = Array(MAX).fill(-1);
    let a = [...A];
    build(1, 0, n - 1);
    pr("after build", tree) // -1 1 1 1 1 2 -1 1 1 1 -1 -1 2 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 
    return {
        query
    }

    function build(vi, tl, tr) {
        if (tl == tr) {
            tree[vi] = a[tl];
            return;
        }
        let mid = getMid(tl, tr);
        build(vi * 2, tl, mid);
        build(vi * 2 + 1, mid + 1, tr);
        if (tree[vi * 2] != -1 && get_occurrence(tree[vi * 2], tl, tr) * 2 > tr - tl + 1) {
            tree[vi] = tree[vi * 2];
        } else if (tree[vi * 2 + 1] != -1 && get_occurrence(tree[vi * 2 + 1], tl, tr) * 2 > tr - tl + 1) {
            tree[vi] = tree[vi * 2 + 1];
        }
    }

    function query(vi, l, r, tl, tr) {
        if (l > tr || r < tl) {
            return {
                first: -1,
                second: -1
            };
        }
        if (tl <= l && r <= tr) {
            if (tree[vi] == -1) return {
                first: -1,
                second: -1
            };
            let occ = get_occurrence(tree[vi], tl, tr);
            // pr("occ", occ)
            if (occ * 2 > tr - tl + 1) {
                return {
                    first: tree[vi],
                    second: occ
                };
            } else {
                return {
                    first: -1,
                    second: -1
                };
            }
        }
        let mid = getMid(l, r);
        let resL = query(vi * 2, l, mid, tl, tr);
        if (resL.first > -1) return resL;
        let resR = query(vi * 2 + 1, mid + 1, r, tl, tr);
        if (resR.first > -1) return resR;
        return {
            first: -1,
            second: -1
        };
    }

    // 05/17/21 evening 
    // Accepted --- 260ms
    // Accepyed --- 272ms use another MAX
    function get_occurrence(num, l, r) {
        if (!m.has(num)) return 0;
        let a = m.get(num);
        let lbv = bisect.bisect_left(a, l);
        if (lbv == a.length) return 0;
        let ubv = bisect.bisect_right(a, r);
        return ubv - lbv;
    }

    function get_occurrence1(num, l, r) {
        if (!m.has(num)) return 0;
        let a = m.get(num);
        let lbv = lower_bound(a, l);
        if (lbv == a.length) return 0;
        let ubv = upper_bound(a, r);
        // pr(ubv - lbv);
        return ubv - lbv;
    }

    // still have bugs, won't work in lc 911 https://leetcode.com/submissions/detail/494673981/
    function lower_bound(a, t) { // replace lower_bound Accepted --- 860ms 66.67%
        let low = 0;
        let n = a.length;
        let high = n - 1;
        while (low < high) {
            let mid = getMid(low, high);
            if (a[mid] < t) {
                low = mid + 1;
            } else if (a[mid] > t) {
                high = mid;
            } else {
                return mid;
            }
        }
        return high;
    }

    function upper_bound(a, t) { // issue
        let low = 0;
        let n = a.length;
        let high = n - 1;
        while (low < high) {
            let mid = getMid(low, high);
            if (a[mid] < t) {
                low = mid + 1;
            } else if (a[mid] > t) {
                high = mid - 1;
            } else {
                high = mid;
            }
        }
        return high + 1;
    }

    // Accepted --- 1188ms 66.67%
    // function lower_bound1(a, t) {
    //     let n = a.length;
    //     for (let i = 0; i < n; i++) {
    //         if (a[i] >= t) return i;
    //     }
    //     return n;
    // }

    // function upper_bound1(a, t) {
    //     let n = a.length;
    //     for (let i = 0; i < n; i++) {
    //         if (a[i] > t) return i;
    //     }
    //     return n;
    // }

    function getMid(low, high) {
        return low + (high - low >> 1);
    }
}

function MajorityChecker(a) {
    let m = new Map();
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(a[i])) m.set(a[i], []);
        m.get(a[i]).push(i);
    }
    let st = new SegmentTreeRQ(m, a, n);
    return {
        query
    }

    function query(left, right, threshold) {
        let res = st.query(1, 0, n - 1, left, right);
        pr("res", res);
        if (res.second >= threshold) {
            return res.first;
        }
        return -1;
    }
}

// Accepted --- 2704ms 33.33%
/**
 * https://leetcode.com/contest/weekly-contest-149/ranking nevergiveup
 * https://leetcode.com/problems/online-majority-element-in-subarray/discuss/356127/Java-moore's-voting-O(n)
 * https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
 * https://leetcode.com/problems/online-majority-element-in-subarray/discuss/356227/C%2B%2B-Codes-of-different-approaches-(Random-Pick-Trade-off-Segment-Tree-Bucket)
 */

function MajorityChecker3(a) {
    function Pair(value, cnt) {
        this.value = value;
        this.cnt = cnt;
    }

    function Range(from, to) {
        this.from = from;
        this.to = to;
    }
    let m = new Map();
    return {
        query
    }

    function query(left, right, threshold) {
        let res = cal(left, right);
        // pr(res);
        if (res.value >= 0 && res.cnt >= threshold) return res.value;
        return -1;
    }
}

// Accepted --- 6964ms 33.33%
// reference: https://leetcode.com/contest/weekly-contest-149/ranking aruba1
function MajorityChecker2(a) {
    return {
        query
    }

    function query(left, right, threshold) {
        let cnt = Array(20000).fill(0);
        for (let i = left; i <= right; i++) {
            if (++cnt[a[i]] == threshold) return a[i];
        }
        return -1;
    }
}

// TLE 28/29
function MajorityChecker1(a) {
    return {
        query
    }

    function query(left, right, threshold) {
        let p = a.slice(left, right + 1);
        let n = right - left + 1;
        let m = new Map();
        for (let i = 0; i < n; i++) m.set(p[i], m.get(p[i]) + 1 || 1);
        m = new Map([...m].sort((x, y) => y[1] - x[1]));
        let fk = m.keys().next().value;
        let fv = m.get(fk);
        if (fv < threshold) return -1;
        let i = 0;
        // pr(m, fv);
        if (m.size == 1) return fk;
        for (const [k, v] of m) {
            if (i == 1) {
                if (fv > v) {
                    return fk;
                } else {
                    return -1;
                }
            }
            i++;
        }
        // return -1;
    }
}

const pr = console.log;
const main = () => {
    let majorityChecker = new MajorityChecker([1, 1, 2, 2, 1, 1]);
    pr(majorityChecker.query(0, 5, 4)); // 1
    pr(majorityChecker.query(0, 3, 3)); // -1
    pr(majorityChecker.query(2, 3, 2)); // 2

    pr()
    let debug1 = new MajorityChecker([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1]);
    pr(debug1.query(3, 12, 6)); // 2
};

main()