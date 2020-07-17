/**
 * 7.16 evening
 * https://leetcode.com/problems/maximum-width-ramp/
 */

// Accepted --- 6564ms 39.2MB 9.30%
const maxWidthRamp_rewrite = (A) => {
    let max = Number.MIN_VALUE;
    let i = 0;
    while (i < A.length) {
        let j = i + 1;
        while (j < A.length) {
            if (A[i] <= A[j]) {
                max = Math.max(max, j - i);
            }
            j++;
        }
        i++;
    }
    if (max == Number.MIN_VALUE) return 0;
    return max;
};

// Accepted --- 8600ms 38.9MB 6.98%
const maxWidthRamp = (A) => {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] <= A[j]) {
                max = Math.max(max, j - i);
            }
        }
    }
    if (max == Number.MIN_VALUE) return 0;
    return max;
};

const main = () => {
    let A = [6, 0, 8, 2, 1, 5];
    let A2 = [9, 8, 1, 0, 1, 9, 4, 0, 4, 1];
    console.log(maxWidthRamp(A));
    console.log(maxWidthRamp(A2));

    console.log(maxWidthRamp_rewrite(A));
    console.log(maxWidthRamp_rewrite(A2));
};

main()