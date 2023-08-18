/**
 * 10/09/21 night
 * https://leetcode.com/contest/weekly-contest-262/problems/two-out-of-three/
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
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

const mi = Math.min, abs = Math.abs;
const minimumDifference = (nums) => {
    let m = nums.length, n = m >> 1;
    let a = initializeGraph(n + 1);
    let b = initializeGraph(n + 1);
    for (let i = 0; i < 1 << n; i++) {
        let sum = 0, cnt = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sum += nums[j];
                cnt++;
            } else {
                sum -= nums[j];
            }
        }
        a[cnt].push(sum);
        sum = 0, cnt = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sum += nums[n + j];
                cnt++;
            } else {
                sum -= nums[n + j];
            }
        }
        b[cnt].push(sum);
    }
    for (let i = 0; i < n; i++) {
        a[i].sort((x, y) => x - y);
        b[i].sort((x, y) => x - y);
    }
    // pr('a', a);
    // pr('b', b);
    let res = Number.MAX_SAFE_INTEGER;
    let bi = new Bisect();
    for (let i = 0; i <= n; i++) {
        for (const x of a[i]) {
            let idx = bi.bisect_left(b[n - i], -x);
            // pr(x, idx, b[n - i], b[n - i].length);
            if (idx != b[n - i].length) {
                // pr('it', idx)
                res = mi(res, abs(x + b[n - i][idx]));
            }
            // pr('res', res);
            if (idx != 0) {
                idx--;
                // pr('prev', idx)
                res = mi(res, abs(x + b[n - i][idx]));
            }
        }
    }
    return res;
};

const main = () => {
    let nums = [3, 9, 7, 3];
    let nums2 = [-36, 36];
    let nums3 = [2, -1, 0, 4, -2, -9];
    pr(minimumDifference(nums))
    pr(minimumDifference(nums2))
    pr(minimumDifference(nums3))
};

main()