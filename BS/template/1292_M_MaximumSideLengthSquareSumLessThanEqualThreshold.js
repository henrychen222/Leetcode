/**
 * 03/31/22 evening
 * https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
 */

const pr = console.log;

// Accepted --- 2508ms 6.67%
let g, n, m, limit;
const maxSideLength = (mat, threshold) => {
    g = mat, n = g.length, m = g[0].length, limit = threshold;
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
    return high;
};

const possible = (side) => {
    // pr("side", side)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i + side - 1 < n && j + side - 1 < m) {
                let sum = 0;
                for (let x = i; x <= i + side - 1; x++) {
                    for (let y = j; y <= j + side - 1; y++) {
                        sum += g[x][y];
                    }
                }
                // pr("sum", sum)
                if (sum <= limit) return true;
            }
        }
    }
    return false;
};

const main = () => {
    let mat = [
            [1, 1, 3, 2, 4, 3, 2],
            [1, 1, 3, 2, 4, 3, 2],
            [1, 1, 3, 2, 4, 3, 2]
        ],
        threshold = 4;
    let mat2 = [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2]
        ],
        threshold2 = 1;
    pr(maxSideLength(mat, threshold))
    pr(maxSideLength(mat2, threshold2))
};

main()