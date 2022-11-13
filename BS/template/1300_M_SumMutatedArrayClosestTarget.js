/**
 * 03/31/22 evening
 * https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/
 */

const pr = console.log;

// Accepted --- 60ms 100.00%
let a, t
const findBestValue = (A, target) => {
    a = A, t = target;
    // let max = Math.ceil(target / a.length);
    // let max = Number.MAX_SAFE_INTEGER;
    let max = Math.max(...a);
    let [x, y] = BinarySearch(0, max);
    // pr(x, y);
    return Math.abs(cal(x) - t) <= Math.abs(cal(y) - t) ? x : y;
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        let sum = cal(mid);
        if (sum < t) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return [high, low];
};

const cal = (v) => {
    // pr('v', v);
    let sum = 0;
    for (const x of a) sum += x >= v ? v : x;
    // pr("sum", sum, "t", t);
    return sum;
};

const main = () => {
    let a = [4, 9, 3],
        target = 10;
    let a2 = [2, 3, 5],
        target2 = 10;
    let a3 = [60864, 25176, 27249, 21296, 20204],
        target3 = 56803;
    let a_debug1 = [2, 3, 5],
        target_debug1 = 11;
    let a_debug2 = [1547,83230,57084,93444,70879], 
        target_debug2 = 71237;
    pr(findBestValue(a, target))
    pr(findBestValue(a2, target2))
    pr(findBestValue(a3, target3))
    pr(findBestValue(a_debug1, target_debug1)) // 5
    pr(findBestValue(a_debug2, target_debug2)) // 17422
};

main()