/*
 * 01/07/22 morning
 * https://leetcode.com/contest/biweekly-contest-95/problems/maximize-the-minimum-powered-city/
 */

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];



// WA
// let a, n, r, k, pre;
// const maxPower1 = (A, R, K) => {
//     a = A, r = R, k = K, n = a.length;
//     a.sort((x, y) => x - y);
//     let all = parseInt(k / n), rest = k % n;
//     a = a.map(x => x + all);
//     pr(all, rest, a);
//     for (let i = 0; rest > 0 && i < n; i++, rest--) a[i]++;
//     pre = preSum(a);
//     let p = compute(a);
//     pr(p)
//     return Math.min(...p);
// };

// Accepted
// reference: https://leetcode.cn/circle/discuss/tfOW0k/ 小羊肖恩
let a, n, r, k, pre, p;
const maxPower = (A, R, K) => {
    a = A, r = R, k = K, n = a.length, pre = preSum(a), p = compute();
    return BinarySearch(0, 2e10);
};

const compute = () => {
    let p = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let L = Math.max(0, i - r), R = Math.min(n - 1, i + r);
        let rangeSum = subArraySum(pre, L, R);
        p[i] = rangeSum;
    }
    return p;
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        // pr(low, high);
    }
    return high;
};

const cover = (r) => 2 * r + 1;

const possible = (v) => {
    let d = Array(n + 1).fill(0), cur = 0, sum = 0;
    for (let i = 0; i < n; i++) {
        cur += d[i];
        if (cur + p[i] < v) {
            let needPower = v - p[i] - cur;
            sum += needPower;
            let idx = Math.min(i + cover(r), n);
            d[idx] -= needPower;
            cur += needPower;
        }
    }
    // pr(sum)
    return sum <= k;
};


const main = () => {
    let a = [1, 2, 4, 5, 0], r = 1, k = 2;
    let a2 = [4, 4, 4, 4], r2 = 0, k2 = 3;
    pr(maxPower(a, r, k))
    pr(maxPower(a2, r2, k2))
};

main()
