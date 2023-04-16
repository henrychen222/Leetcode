/*
 * 12/24/22 evening
 * https://leetcode.com/contest/weekly-contest-325/problems/maximum-tastiness-of-candy-basket/
 */

const pr = console.log;

// const maximumTastiness = (a, k) => {
//     let u = [...new Set(a)];
//     u.sort((x, y) => x - y);
//     let n = u.length, res = 0, d = [], pre = [];
//     for (let i = 1; i < n; i++) d.push(u[i]-u[i-1]);
// };

// Accepted
let a, k, n;
const maximumTastiness = (price, K) => {
    a = price, k = K, n = a.length;
    a.sort((x, y) => x - y);
    let max = Math.max(a[n - 1] - a[0]);
    return BinarySearch(0, max)
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        // pr(low, high)
    }
    return high;
};

const possible = (diff) => {
    let pick = 0, cur = Number.MIN_SAFE_INTEGER;
    for (const x of a) {
        if (x - diff >= cur) {
            cur = x;
            pick++;
        }
    }
    return pick >= k;
};

const main = () => {
    let a = [13, 5, 1, 8, 21, 2], k = 3;
    let a2 = [1, 3, 1], k2 = 2;
    let a3 = [7, 7, 7, 7], k3 = 2
    pr(maximumTastiness(a, k))
    pr(maximumTastiness(a2, k2))
    pr(maximumTastiness(a3, k3))
};

main()