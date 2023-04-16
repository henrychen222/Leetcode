/**
 * 10/16/21 morning
 * https://leetcode.com/contest/biweekly-contest-63/problems/kth-smallest-product-of-two-sorted-arrays/
 */

const pr = console.log;

const ll = BigInt;

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

// const floorDiv = (x, d) => { let r = parseInt(x / d); if (r * d != x && (x ^ d) < 0) r--; return r; };  issue
const floorDiv = (x, d) => { let r = parseInt(x / d); if (r * d != x && (ll(x) ^ ll(d)) < 0) r--; return r; };

const floorDivll = (x, d) => { let r = x / d; if (r * d != x && (x ^ d) < 0) r--; return r; };

// reference: uwi
// Accepted --- 5064ms  use floorDiv
// Accepted --- 7672ms  use floorDivll
const kthSmallestProduct = (a, b, k) => {
    let bi = new Bisect(), bn = b.length;
    let low = -2e10, high = 2e10;
    while (high - low > 1) {
        let m = parseInt((low + high) / 2);
        // pr(low, high, m)
        let cnt = 0;
        for (const x of a) {
            if (x > 0) {
                // let t = floorDivll(ll(m), ll(x));
                let t = floorDiv(m, x);
                let idx = bi.bisect_left(b, t + 1);
                cnt += idx;
            } else if (x < 0) {
                // let t = floorDivll(ll(m) + ll(x) + 1n, ll(x))
                let t = floorDiv(m + x + 1, x)
                let idx = bi.bisect_left(b, t);
                cnt += bn - idx;
            } else {
                if (m >= 0) cnt += bn;
            }
        }
        cnt >= k ? high = m : low = m;
    }
    // pr(low, high);
    return high;
};

const main = () => {
    let nums1 = [2, 5], nums2 = [3, 4], k = 2;
    let nums1_2 = [-4, -2, 0, 3], nums2_2 = [2, 4], k2 = 6;
    let nums1_3 = [-2, -1, 0, 1, 2], nums2_3 = [-3, -1, 2, 4, 5], k3 = 3;
    let nums1_debug1 = [-100000, 100000], nums2_debug1 = [-100000, 100000], k_debug1 = 1;
    let nums1_debug2 = [-9, -6, -4, -2, -1, 5], nums2_debug2 = [-9, -7, -4, -2, 4, 4, 7, 9, 10, 10], k_debug2 = 1;

    pr(kthSmallestProduct(nums1, nums2, k));
    pr(kthSmallestProduct(nums1_2, nums2_2, k2));
    pr(kthSmallestProduct(nums1_3, nums2_3, k3));
    pr(kthSmallestProduct(nums1_debug1, nums2_debug1, k_debug1)); // -10000000000
    pr(kthSmallestProduct(nums1_debug2, nums2_debug2, k_debug2)); // -90
};

main()

// pr(floorDiv(5, 2), floorDiv(5, 3))


// pr(999999999 ^ 999999999); // wrong
// pr(ll(999999999) * ll(999999999))