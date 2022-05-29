/**
 * 04/09/22 evening
 * https://leetcode.com/contest/weekly-contest-288/problems/maximum-total-beauty-of-the-gardens/
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

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };

// Accepted --- 1532ms
// reference: uwi
let a, n, k, bi, pre;
const maximumBeauty = (flowers, newFlowers, target, full, partial) => {
    flowers.sort((x, y) => x - y);
    flowers = flowers.map(x => Math.min(x, target));
    // pr(flowers);
    a = flowers, n = a.length, k = newFlowers, pre = preSum(a), bi = new Bisect();
    // pr(pre);
    let res = 0;
    for (let i = 0; i <= n; i++) {
        if (i < n && a[n - 1 - i] == target) continue;
        let step = i * target - (pre[n] - pre[n - i]);
        if (step <= k) {
            let beauty;
            if (i == n) {
                beauty = i * full;
                // pr("beauty111", beauty)
            } else {
                let minPartial = BinarySearch(a[0], target, step, i);
                // pr(i, full, minPartial, partial)
                beauty = i * full + minPartial * partial;
                // pr("beauty222", beauty)
            }
            if (beauty > res) res = beauty;
        }
    }
    return res;
};

const BinarySearch = (low, high, step, i) => {
    // pr(low, high)
    while (low < high - 1) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid, step, i)) {
            low = mid;
        } else {
            high = mid;
        }
    }
    // pr(low, high)
    return low;
};

const possible = (m, step, i) => {
    let idx = bi.bisect_left(a, m, 0, n - i);
    let need = m * idx - pre[idx];
    // pr("mid", m, "idx", idx, pre[idx], "need", need, need <= k - step)
    return need <= k - step;
};

const main = () => {
    let flowers = [1, 3, 1, 1], newFlowers = 7, target = 6, full = 12, partial = 1;
    let flowers2 = [2, 4, 5, 3], newFlowers2 = 10, target2 = 5, full2 = 2, partial2 = 6;
    pr(maximumBeauty(flowers, newFlowers, target, full, partial))
    pr(maximumBeauty(flowers2, newFlowers2, target2, full2, partial2))
};

main()