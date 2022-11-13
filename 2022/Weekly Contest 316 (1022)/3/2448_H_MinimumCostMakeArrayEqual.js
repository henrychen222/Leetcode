/*
 * 10/22/22 evening
 * https://leetcode.com/contest/weekly-contest-316/problems/minimum-cost-to-make-array-equal/
 * 
 * reference:
 * https://www.geeksforgeeks.org/make-array-elements-equal-minimum-cost/
 */

const pr = console.log;

// fuck problem 3th submission is correct 
// AC in java long 

let a, b, n;
const minCost = (A, B) => {
    a = A, b = B, n = a.length;
    let low = Math.min(...a), high = Math.max(...a);
    // let low = ll(Math.min(...a)), high = ll(Math.max(...a));
    // a = a.map(x => ll(x))
    // b= b.map(x => ll(x))

    while ((high - low) > 2) {
        let mid1 = low + parseInt((high - low) / 3);
        let mid2 = high - parseInt((high - low) / 3);
        // let mid1 = low + (high - low) / 3n;
        // let mid2 = high - (high - low) / 3n;
        let cost1 = computeCost(mid1);
        let cost2 = computeCost(mid2);
        if (cost1 < cost2) {
            high = mid2;
        } else {
            low = mid1;
        }
    }
    let res = 10n ** 19n;
    // pr(res);
    for (let v = low; v <= high; v++) {
        let ct = computeCost(v);
        if (ct < res) res = ct;
    }
    return res;
};

const ll = BigInt;
const computeCost = (v) => {
    let res = 0n;
    for (let i = 0; i < n; i++) res += ll(Math.abs(a[i] - v)) * ll(b[i]);
    return res;
};

const test = () => {
    let min = Math.min(...a), max = Math.max(...a), res = Number.MAX_SAFE_INTEGER;
    for (let i = min; i <= max; i++) {
        let v = computeCost(i);
        // pr(i, v);
        res = Math.min(res, v);
    }
    return res;
}

const main = () => {
    let A = [1, 3, 5, 2], B = [2, 3, 1, 14];
    let A2 = [2, 2, 2, 2, 2], B2 = [4, 2, 8, 1, 3];
    let A_test = [1, 100, 101], B_test = [1, 1, 1];
    let A_debug1 = [1, 2], B_debug1 = [1, 100]
    let A_debug2 = [1, 2, 3, 4, 5, 15], B_debug2 = [2, 2, 2, 3, 4, 1000]
    pr(minCost(A, B))
    pr(minCost(A2, B2))
    pr(minCost(A_test, B_test))
    pr(minCost(A_debug1, B_debug1)) // 1
    pr(minCost(A_debug2, B_debug2)) // 151
};

main()


