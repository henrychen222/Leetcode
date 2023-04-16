/**
 * 02/26/22 evening
 * https://leetcode.com/contest/weekly-contest-282/problems/minimum-time-to-complete-trips/
 */

const pr = console.log;

// Accepted
let a, tot;
const ll = BigInt;
const minimumTime = (time, totalTrips) => {
    a = time,
    tot = totalTrips;
    let min = Math.min(...a);
    if (tot == 1) return min;
    return BinarySearch(0n, ll(1e14)); // 1e12 hidden case WA
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + high >> 1n;
        if (possible(mid)) {
            low = mid + 1n;
        } else {
            high = mid - 1n;
        }
        // pr("mid", mid, "low", low, "high", high);
    }
    // pr('final', low, high);
    return low;
};

const possible = (t) => {
    let sum = 0;
    for (const x of a) sum += parseInt(t / ll(x));
    // pr('sum', sum)
    return sum < tot;
};

const main = () => {
    let a = [1, 2, 3], tot = 5;
    let a2 = [2], tot2 = 1;
    let a_debug1 = [5, 10, 10], tot_debug1 = 9;
    pr(minimumTime(a, tot))
    pr(minimumTime(a2, tot2))
    pr(minimumTime(a_debug1, tot_debug1)) // 25
};

main()

