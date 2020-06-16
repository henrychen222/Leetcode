/**
 * 6.15 evening
 * https://leetcode.com/problems/smallest-range-i/
 */

// Accepted --- 84ms 37.9 MB 18.18%
const smallestRangeI = (A, K) => {
    if (A.length == 1) return 0;
    A.sort((a, b) => a - b);
    if (A[A.length - 1] - A[0] <= 2 * K) {
        return 0;
    } else {
        return A[A.length - 1] - A[0] - 2 * K;
    }
};

const main = () => {
    let A = [1],
        K = 0;
    let A2 = [0, 10],
        K2 = 2;
    let A3 = [1, 3, 6],
        K3 = 3;
    let A_debug1 = [2, 7, 2],
        K_debug1 = 1;
    console.log(smallestRangeI(A, K));
    console.log(smallestRangeI(A2, K2));
    console.log(smallestRangeI(A3, K3));
    console.log(smallestRangeI(A_debug1, K_debug1)); // 3
};

main()