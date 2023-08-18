/*
 * 03/18/23 afternoon
 * https://leetcode.com/contest/biweekly-contest-100/problems/minimum-time-to-repair-cars/
 */

const pr = console.log;


let a, k;
const repairCars = (A, K) => {
    a = A, k = K;
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
    return low;
};

const possible = (v) => {
    let t = 0;
    for (const x of a) t += parseInt(parseInt(v / x) ** 0.5);
    return t < k;
};

const main = () => {
    let ranks = [4, 2, 3, 1], cars = 10
    let ranks2 = [5, 1, 8], cars2 = 6
    pr(repairCars(ranks, cars))
    pr(repairCars(ranks2, cars2))
};

main()