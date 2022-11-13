/**
 * 04/02/22 evening
 * https://leetcode.com/contest/weekly-contest-287/problems/maximum-candies-allocated-to-k-children/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
let a, k;
const maximumCandies = (A, K) => {
    a = A, k = K;
    let sum = sm(a);
    if (sum < k) {
        return 0;
    } else if (sum == k) {
        return 1;
    } else {
        let max = Math.max(...a);
        return Math.max(1, BinarySearch(0, max));
    }
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
    // pr(low, high)
    return high;
};

const possible = (each) => {
    let canHave = 0;
    for (const x of a) canHave += parseInt(x / each);
    // pr("canHave", canHave, k)
    return canHave >= k;
};

const main = () => {
    let a = [5, 8, 6], k = 3;
    let a2 = [2, 5], k2 = 11;
    let a3 = [2, 9];
    let a_debug1 = [1], k_debug1 = 1;
    let a_debug2 = [3102006,6279432,7216621,3628028,5711306,2292506,2107393], k_debug2 = 23626985
    pr(maximumCandies(a, k))
    pr(maximumCandies(a2, k2))
    pr(maximumCandies(a3, k2))
    pr(maximumCandies(a_debug1, k_debug1)) // 1
    pr(maximumCandies(a_debug2, k_debug2)) // 1
};

main()