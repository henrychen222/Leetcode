/**
 * 03/26/22 evening
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 */

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted --- 130ms 33.84%
let a, d;
const shipWithinDays = (weights, days) => {
    a = weights, d = days;
    let sum = sm(a);
    if (d == 1) return sum;
    if (sum % d == 0 && new Set(a).size == 1) return sum / d;
    return BinarySearch(Math.max(...a), Number.MAX_SAFE_INTEGER);
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

const possible = (cap) => {
    let needDays = 1, sum = 0;
    for (const x of a) {
        if (sum + x > cap) {
            sum = x;
            needDays++;
        } else if (sum + x == cap) {
            sum = 0;
            needDays++;
        } else {
            sum += x;
        }
    }
    // pr("cap", cap, "needDays", needDays)
    return needDays > d;
};

const pr = console.log;
const main = () => {
    let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        days = 5;
    let weights2 = [3, 2, 2, 4, 1, 4],
        days2 = 3;
    let weights3 = [1, 2, 3, 1, 1],
        days3 = 4;
    let weights_debug1 = [1,2,3,4,5,6,7,8,9,10],
        days_debug1 = 1;
    let weights_debug2 = [1,2,3,4,5,6,7,8,9,10],
        days_debug2 = 10;
    let weights_debug3 = [3,3,3,3,3,3],
        days_debug3 = 2;
    pr(shipWithinDays(weights, days))
    pr(shipWithinDays(weights2, days2))
    pr(shipWithinDays(weights3, days3))
    pr(shipWithinDays(weights_debug1, days_debug1)) // 55
    pr(shipWithinDays(weights_debug2, days_debug2)) // 10
    pr(shipWithinDays(weights_debug3, days_debug3)) // 9
};

main()