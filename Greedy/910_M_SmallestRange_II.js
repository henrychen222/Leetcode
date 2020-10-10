/**
 * 10.8 evening
 * https://leetcode.com/problems/smallest-range-ii/
 */

// reference: https://leetcode.com/problems/smallest-range-ii/discuss/173471/JAVA-solution-very-easy-to-understand-sliding-window
// Accepted --- 152ms 12.50%
const smallestRangeII3 = (A, K) => {
    let n = A.length;
    if (n < 2) return 0;
    let candidates = [];
    for (let i = 0; i < n; i++) {
        candidates.push([i, A[i] - K]);
        candidates.push([i, A[i] + K]);
    }
    candidates.sort((a, b) => a[1] - b[1]); // sliding window to let the window contains all indexes from A
    // console.log(candidates);
    let res = Number.MAX_VALUE;
    let map = new Map();
    let left = 0;
    let right = 0;
    while (right < candidates.length) {
        // console.log(map);
        while (right < candidates.length && map.size < n) { // move right until contains all indexes
            let idx = candidates[right][0];
            if (!map.has(idx)) {
                map.set(idx, 0);
            }
            map.set(idx, map.get(idx) + 1);
            right++;
        }
        // console.log(map);
        let newRight = right;
        right--;
        while (left < right && map.size >= n) { // move left until has space to move right
            res = Math.min(res, candidates[right][1] - candidates[left][1]);
            let idx = candidates[left][0];
            map.set(idx, map.get(idx) - 1);
            if (map.get(idx) == 0) {
                map.delete(idx);
            }
            left++;
        }
        right = newRight;
        // console.log(map);
    }
    return res;
};

/**
 * reference: 
 * https://leetcode.com/problems/smallest-range-ii/discuss/173389/simple-C%2B%2B-solution-with-explanation
 * https://leetcode.com/problems/smallest-range-ii/discuss/173505/Java-Solution-with-the-Picture-to-explain-it
 * https://leetcode.com/problems/smallest-range-ii/discuss/173495/Actual-explanation-for-people-who-don't-understand-(I-hope)
 */
// Accepted --- 96ms 62.50%
const smallestRangeII2 = (A, K) => {
    let n = A.length;
    A.sort((a, b) => a - b);
    let max = A[n - 1];
    let min = A[0];
    let res = max - min;
    for (let i = 0; i + 1 < n; i++) {
        max = Math.max(A[i] + K, A[n - 1] - K);
        min = Math.min(A[i + 1] - K, A[0] + K);
        res = Math.min(res, max - min);
    }
    return res;
};

// reference: https://leetcode.com/problems/smallest-range-ii/discuss/173377/C%2B%2BJavaPython-Add-0-or-2-*-K
// Accepted --- 100ms 50.00%
const smallestRangeII1 = (A, K) => {
    let n = A.length;
    A.sort((a, b) => a - b);
    let max = A[n - 1];
    let min = A[0];
    let res = max - min;
    for (let i = 0; i + 1 < n; i++) {
        max = Math.max(max, A[i] + 2 * K);
        min = Math.min(A[i + 1], A[0] + 2 * K);
        res = Math.min(res, max - min);
        // console.log(A, max, min);
    }
    return res;
};

const main = () => {
    let A = [1],
        K = 0;
    let A2 = [0, 10],
        K2 = 2;
    let A3 = [1, 3, 6],
        K3 = 3;
    let A_debug1 = [4, 7, 4],
        K_debug1 = 4;
    console.log(smallestRangeII(A, K));
    console.log(smallestRangeII(A2, K2));
    console.log(smallestRangeII(A3, K3));
    console.log(smallestRangeII(A_debug1, K_debug1)); // 3   [8 7 4] [0 7 4] -> [8,3,4][8,11,4][0,3,4][0,11,4] -> [8,3,0][8,3,8][8,11,8][8,11,0][0,3,8][0,3,0][0,11,8][0,11,0]
};

main()

// const smallestRangeII2 = (A, K) => {
//     let n = A.length;
//     let max = getMaxArr(A);
//     let min = getMinArr(A);
//     for (let i = 0; i < n; i++) {
//         let KArr = [...A];
//         let MKArr = [...A];
//         KArr[i] += K;
//         MKArr[i] += -K;
//         console.log(KArr, MKArr);
//         KArr.sort((a, b) => a - b);
//         MKArr.sort((a, b) => a - b);
//         let KDiff = KArr[n - 1] - KArr[0];
//         let MKDiff = MKArr[n - 1] - MKArr[0];
//         console.log(KDiff, MKDiff);
//         let x = (KDiff <= MKDiff ? K : -K); // greedy wrong
//         A[i] += x;
//         max = (x == K ? KArr[n - 1] : MKArr[n - 1]);
//         min = (x == K ? KArr[0] : MKArr[0]);
//     }
//     A.sort((a, b) => a - b);
//     return A[n - 1] - A[0];
// };

// // wrong  34/68
// const smallestRangeII1 = (A, K) => {
//     let n = A.length;
//     let max = getMaxArr(A);
//     let min = getMinArr(A);
//     for (let i = 0; i < n; i++) {
//         let tmp = A[i];
//         let KMax = Math.max(max, tmp + K);
//         let KMin = Math.min(min, tmp + K);
//         let MKMax = Math.max(max, tmp - K);
//         let MKMin = Math.min(min, tmp - K);
//         let KDiff = KMax - KMin;
//         let MKDiff = MKMax - MKMin;
//         let x = (KDiff <= MKDiff ? K : -K); // greedy wrong
//         A[i] += x;
//         max = (x == K ? KMax : MKMax);
//         min = (x == K ? KMin : MKMin);
//         // console.log(x, A, KDiff, MKDiff);
//     }
//     A.sort((a, b) => a - b);
//     return A[n - 1] - A[0];
// };

// const getMaxArr = (arr) => {
//     return Math.max.apply(Math, arr);
// };

// const getMinArr = (arr) => {
//     return Math.min.apply(Math, arr);
// };