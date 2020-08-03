/**
 * 8.1 evening
 * https://leetcode.com/problems/4sum-ii/
 */

// Time Limit 46/48
const fourSumCount = (A, B, C, D) => {
    let cnt = 0;
    let ABSum = [];
    let CDSum = [];
    for (const i of A) {
        for (const j of B) {
            ABSum.push(i + j);
        }
    }
    for (const i of C) {
        for (const j of D) {
            CDSum.push(i + j);
        }
    }
    for (const i of ABSum) {
        for (const j of CDSum) {
            if (i + j == 0) cnt++;
        }
    }
    return cnt;
};

// Time Limit 46/48
const fourSumCount1 = (A, B, C, D) => {
    let cnt = 0;
    for (const i of A) {
        for (const j of B) {
            for (const k of C) {
                for (const l of D) {
                    if (i + j + k + l == 0) {
                        cnt++;
                    }
                }
            }
        }
    }
    return cnt;
};

const main = () => {
    let A = [1, 2],
        B = [-2, -1],
        C = [-1, 2],
        D = [0, 2];
    console.log(fourSumCount(A, B, C, D));
};

main()