/**
 * 12/18/21 evening
 * https://leetcode.com/contest/weekly-contest-272/problems/minimum-operations-to-make-the-array-k-increasing/
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

// Accepted 401ms
const kIncreasing = (A, k) => { // this part is correct
    let n = A.length;
    let res = 0, t = Math.ceil(n / k);
    // pr(n, k, "t", t);
    let d = [];
    for (let start = 0; start < k; start++) {
        let re = [], i;
        for (i = start; i + k < n; i += k) re.push(A[i]);
        re.push(A[i])
        d.push(re);
    }
    // pr(d);
    for (const a of d) res += LIS(a);  // here is LIS not cal()
    return n - res;
};

// wifi
const LIS = (a) => {
    // pr(a);
    let bi = new Bisect(), dp = [], n = a.length;
    for (const x of a) {
        let idx = bi.bisect_right(dp, x);
        if (idx == n) {
            dp.push(x);
        } else {
            dp[idx] = x;
        }
    }
    // pr(dp);
    return dp.length;
};

//////////////////////////////////////////////////////////////////////////
// WA
const cal = (a) => {
    let n = a.length, res = 0, i = 0;
    for (; i + 1 < n;) {
        if (a[i] > a[i + 1]) {
            // pr("ops", a[i], a[i + 1])
            // let step = 0;
            // for (let j = i; j < n; j++) {
            //     if (a[i] + step <= a[j]) {
            //         res += j - i;
            //         // pr("j", j, j - i);
            //         i = j;
            //         break;
            //     }
            //     step++;
            // }
            if (i + 2 < n && a[i + 2] - a[i] < 2) {
                res += 2;
                i += 2;
                continue;
            }
            res++;
        }
        i++;
    }
    return res;
};

// WA
const cal2 = (a) => {
    let n = a.length;
    let res = 0;
    for (let i = 1; i < n; i++) {
        if (a[i - 1] > a[i]) {
            a[i] = a[i - 1];
            res++;
        }
    }
    // pr(a);
    return res;
};

const main = () => {
    let a = [5, 4, 3, 2, 1], k = 1;
    let a2 = [4, 1, 5, 2, 6, 2], k2 = 2;
    let a3 = [4, 1, 5, 2, 6, 2], k3 = 3;
    let a_debug1 = [12, 6, 12, 6, 14, 2, 13, 17, 3, 8, 11, 7, 4, 11, 18, 8, 8, 3], k_debug1 = 1;
    let a_debug2 = [11, 11, 11, 11, 11, 1, 5, 5, 2, 12, 12, 12], k_debug2 = 1;
    pr(kIncreasing(a, k))
    pr(kIncreasing(a2, k2))
    pr(kIncreasing(a3, k3))
    pr(kIncreasing(a_debug1, k_debug1)) // 12
    pr(kIncreasing(a_debug2, k_debug2)) // 4
};

main()