/**
 * 03/28/22 evening
 * https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
 */

// Accepted --- 111ms 52.38%
let n, idx, limit;
const maxValue = (N, index, maxSum) => {
    n = N, idx = index, limit = maxSum;
    return BinarySearch(0, Number.MAX_SAFE_INTEGER);
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
};

const possible = (v) => { // if can build an array sum <= limit, a[idx] = v
    let ln = idx, rn = n - idx - 1, x = v - 1;
    let lsum = cal(x, ln), rsum = cal(x, rn);
    let sum = lsum + v + rsum;
    return sum <= limit;
};

const sumOfRange = (l, r) => (l + r) * (r - l + 1) / 2;

const cal = (start, len) => {
    let has = start; // start to 1
    if (has <= len) {
        let rest = len - has;
        return sumOfRange(1, start) + rest * 1;
    } else { // start to min
        let min = has - len + 1;
        return sumOfRange(min, start);
    }
};

const pr = console.log;
const main = () => {
    let n = 4,
        index = 2,
        maxSum = 6;
    let n2 = 6,
        index2 = 1,
        maxSum2 = 10;
    let n_debug1 = 6902762,
        index_debug1 = 4546965,
        maxSum_debug1 = 654121431;
    pr(maxValue(n, index, maxSum))
    pr(maxValue(n2, index2, maxSum2))
    pr(maxValue(n_debug1, index_debug1, maxSum_debug1))
};

main()