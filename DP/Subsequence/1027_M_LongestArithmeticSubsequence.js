/**
 * 12.2 afternoon
 * https://leetcode.com/problems/longest-arithmetic-subsequence/
 */

// Accepted --- 2028ms 22.73%
const longestArithSeqLength2 = (A) => {
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let diff = A[j] - A[i];
            let cnt = 2;
            let last = A[j];
            for (let k = j + 1; k < n; k++) {
                let diff2 = A[k] - last;
                if (diff2 == diff) {
                    cnt++;
                    last = A[k];
                }
            }
            res = Math.max(res, cnt);
        }
    }
    return res;
};

// Accepted --- 4020ms 5.68%
const longestArithSeqLength1 = (A) => {
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let diff = A[j] - A[i];
            let tmp = [A[i], A[j]];
            for (let k = j + 1; k < n; k++) {
                let diff2 = A[k] - tmp[tmp.length - 1];
                if (diff2 == diff) {
                    tmp.push(A[k]);
                }
            }
            // console.log(tmp);
            res = Math.max(res, tmp.length);
        }
    }
    return res;
};

const main = () => {
    let A = [3, 6, 9, 12];
    let A2 = [9, 4, 7, 2, 10];
    let A3 = [20, 1, 15, 3, 10, 5, 8];
    console.log(longestArithSeqLength(A));
    console.log(longestArithSeqLength(A2));
    console.log(longestArithSeqLength(A3));
};

main()