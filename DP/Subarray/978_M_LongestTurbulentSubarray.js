/**
 * 11.22 night
 * https://leetcode.com/problems/longest-turbulent-subarray/
 */

// Accepted --- 100ms 42.86%
const maxTurbulenceSize_DP = (A) => {
    let res = 1;
    let n = A.length;
    let up = new Array(n).fill(1);
    let down = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (A[i] > A[i - 1]) up[i] = down[i - 1] + 1;
        if (A[i] < A[i - 1]) down[i] = up[i - 1] + 1;
        res = Math.max(res, Math.max(up[i], down[i]));
    }
    return res;
};

// Accepted --- 96ms 53.57%
// reference: https://leetcode.com/problems/longest-turbulent-subarray/discuss/221935/Java-O(N)-time-O(1)-space
const maxTurbulenceSize4 = (A) => {
    let inc = dec = res = 1;
    for (let i = 1; i < A.length; i++) {
        if (A[i] < A[i - 1]) {
            dec = inc + 1;
            inc = 1;
        } else if (A[i] > A[i - 1]) {
            inc = dec + 1;
            dec = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        res = Math.max(res, Math.max(dec, inc));
    }
    return res;
};

// Accepted --- 96ms 53.57% flip sign
// reference: https://leetcode.com/problems/longest-turbulent-subarray/discuss/221929/C%2B%2BJava-6-lines-flip-the-sign
const maxTurbulenceSize3 = (A) => {
    let res = 0;
    let n = A.length;
    for (let i = 0, cnt = 0; i + 1 < n; i++, cnt *= -1) {
        if (A[i] > A[i + 1]) {
            cnt > 0 ? cnt++ : cnt = 1;
        } else if (A[i] < A[i + 1]) {
            cnt < 0 ? cnt-- : cnt = -1;
        } else {
            cnt = 0;
        }
        res = Math.max(res, Math.abs(cnt));
    }
    return res + 1;
};

// Accepted --- 96ms 53.57%  sliding window
// reference: https://leetcode.com/problems/longest-turbulent-subarray/solution/
const maxTurbulenceSize2 = (A) => {
    let n = A.length;
    let res = 1;
    let left = 0;
    for (let i = 0; i < n; i++) {
        let c = compare(A[i - 1], A[i]);
        if (c == 0) {
            left = i;
        } else if (i == n - 1 || c * compare(A[i], A[i + 1]) != -1) {
            // console.log(i, left)
            res = Math.max(res, i - left + 1);
            left = i;
        }
    }
    return res;
};

const compare = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
};

// Accepted --- 520ms 7.14%
const maxTurbulenceSize = (A) => {
    let n = A.length;
    if (n == 1) return 1;
    let res = 0;
    for (let i = 0; i + 1 < n; i++) {
        let even = i % 2 == 0;
        if (A[i + 1] == A[i]) {
            // console.log('111', A[i])
            res = Math.max(res, 1);
            continue;
        } else if (A[i + 1] > A[i]) {
            // console.log('222', A[i])
            res = Math.max(res, 2);
            if (even) { // odd > even
                let endIdx = n - 1;
                for (let j = i + 1; j + 1 < n; j++) {
                    if (j % 2 == 0) {
                        if (A[j + 1] <= A[j]) {
                            // console.log("i even j even", j - i + 1);
                            endIdx = j;
                            break;
                        }
                    } else {
                        if (A[j] <= A[j + 1]) {
                            // console.log("i even j odd", j - i + 1);
                            endIdx = j;
                            break;
                        }
                    }
                }
                res = Math.max(res, endIdx - i + 1);
            } else { // even > odd
                let endIdx = n - 1;
                for (let j = i + 1; j + 1 < n; j++) {
                    if (j % 2 == 1) {
                        if (A[j + 1] <= A[j]) {
                            // console.log("i odd j odd", j - i + 1);
                            endIdx = j;
                            break;
                        }
                    } else {
                        if (A[j] <= A[j + 1]) {
                            // console.log("i odd j even", j - i + 1);
                            endIdx = j;
                            break;
                        }
                    }
                }
                res = Math.max(res, endIdx - i + 1);
            }
        } else {
            // console.log('333', A[i])
            res = Math.max(res, 2);
            if (even) { // odd < even
                let endIdx = n - 1;
                for (let j = i + 1; j + 1 < n; j++) {
                    if (j % 2 == 0) {
                        if (A[j + 1] >= A[j]) {
                            endIdx = j;
                            break;
                        }
                    } else {
                        if (A[j] >= A[j + 1]) {
                            endIdx = j;
                            break;
                        }
                    }
                }
                res = Math.max(res, endIdx - i + 1);
            } else { // even < odd
                let endIdx = n - 1;
                for (let j = i + 1; j + 1 < n; j++) {
                    if (j % 2 == 1) {
                        if (A[j + 1] >= A[j]) {
                            endIdx = j;
                            break;
                        }
                    } else {
                        if (A[j] >= A[j + 1]) {
                            endIdx = j;
                            break;
                        }
                    }
                }
                res = Math.max(res, endIdx - i + 1);
            }
        }
        // console.log(res);
    }
    return res;
};

const main = () => {
    let arr = [9, 4, 2, 10, 7, 8, 8, 1, 9];
    let arr2 = [4, 8, 12, 16];
    let arr3 = [100];
    let debug1 = [9, 9];
    let debug2 = [2, 0, 2, 4, 2, 5, 0, 1, 2, 3];
    let debug3 = [0, 8, 45, 88, 48, 68, 28, 55, 17, 24];
    console.log(maxTurbulenceSize(arr));
    console.log(maxTurbulenceSize(arr2));
    console.log(maxTurbulenceSize(arr3));
    console.log(maxTurbulenceSize(debug1)); // 1
    console.log(maxTurbulenceSize(debug2)); // 6
    console.log(maxTurbulenceSize(debug3)); // 8
};

main()