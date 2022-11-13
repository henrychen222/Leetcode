/*
 * 11/03/22 evneing
 * https://leetcode.com/problems/smallest-good-base/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/6620351.html
 */

const pr = console.log;

// Accepted --- 352ms
const ll = BigInt;
let n, res;
const smallestGoodBase = (N) => {
    n = ll(N);
    res = n - 1n;
    // return test().toString();
    let max = 2;
    for (let i = 1; 2 ** i <= n + 1n; i++) max = Math.max(max, i);
    // pr(max);
    for (let len = max; len >= 2; len--) {
        let low = 2n, t = Math.ceil(1 / (len - 1)), high = n ** ll(t);
        // pr(len, low, high)
        if (BinarySearch(low, high, len)) return res.toString();
    }
    return res.toString();
};

const BinarySearch = (low, high, len) => {
    while (low <= high) {
        let mid = low + high >> 1n;
        let sum = compute(mid, len);
        if (sum == n) {
            res = mid;
            return true;
        } else if (sum < n) {
            low = mid + 1n;
        } else {
            high = mid - 1n;
        }
    }
    return false;
};

const compute = (base, len) => GeometricProgression_Sn(1n, base, ll(len));

// const BinarySearch = (low, high, len) => {
//     while (high - low > 1) {
//         let mid = low + high >> 1n;
//         if (!possible(mid, len)) {
//             low = mid;
//         } else {
//             high = mid;
//         }
//         // pr('low', low, 'high', high)
//     }
//     pr('low', low, 'high', high)
// };

/*
111 base 3
3 ^ 2 + 3 ^ 1 + 3 ^ 0 = 13
*/

const GeometricProgression_Sn = (a1, q, n) => q != 1n ? a1 * (1n - q ** n) / (1n - q) : -1;

// const possible = (base) => {
//     for (let len = 1; ; len++) {
//         let sum = GeometricProgression_Sn(1n, base, ll(len));
//         // pr("base", base, "len", len, "sum", sum, n)
//         if (sum == n) {
//             return true;
//         } else if (sum > n) {
//             break;
//         }
//     }
//     return false;
// };


const test = () => {
    let d = [];
    let end = n - 1n;
    if (end > 1e5) end = 1e5;
    for (let base = 2n; base <= end; base++) {
        if (possible(base)) d.push(base);
    }
    // if (d.length > 1) {
    //     pr(d);
    // }
    // pr(d);
    return d[0] || (n - 1n);
};

const main = () => {
    let n = "13";
    let n2 = "4681";
    let n3 = "1000000000000000000"
    let n4 = "100000"
    let n_debug1 = "2251799813685247";
    let n_debug2 = "470988884881403701";
    pr(smallestGoodBase(n))
    pr(smallestGoodBase(n2))
    pr(smallestGoodBase(n3))
    pr(smallestGoodBase(n4))
    pr(smallestGoodBase(n_debug1)) // 2
    pr(smallestGoodBase(n_debug2)) // "686286299"

    // for (let i = 3; i <=100000; i++) {
    //     smallestGoodBase(i+'');
    // }
};

main()

// pr(GeometricProgression_Sn(1n, 3n, 3n))


// pr(GeometricProgression_Sn(1n, 2, 3n))