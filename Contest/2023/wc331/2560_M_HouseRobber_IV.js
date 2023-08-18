/*
 * 02/04/23 night
 * https://leetcode.com/contest/weekly-contest-331/problems/house-robber-iv/
 */

const pr = console.log;

// Accepted
// reference: uwi
let a, k;
const minCapability = (A, K) => {
    a = A, k = K;
    return BinarySearch(0, Math.max(...a))
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
    return low;
};

const possible = (v) => {
    let cnt = 0, isPick = false;
    for (const x of a) {
        if (x <= v && !isPick) {
            cnt++;
            isPick = true;
        } else {
            isPick = false;
        }
    }
    return cnt < k;
};

const main = () => {
    let a = [2, 3, 5, 9], k = 2;
    let a2 = [2, 7, 9, 3, 1], k2 = 2
    pr(minCapability(a, k))
    pr(minCapability(a2, k2))
};

main()