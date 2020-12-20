/**
 * 12.18 noon
 * https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
 * 
 * similar to 1027
 */

// Accepted --- 1516ms 9.09%
const lenLongestFibSubseq = (A) => {
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = A[i] + A[j];
            let cnt = 2;
            let last = A[j];
            let flag = false;
            for (let k = j + 1; k < n; k++) {
                if (A[k] == sum) {
                    flag = true;
                    cnt++;
                    sum = last + A[k];
                    last = A[k];
                }
            }
            if (flag) res = Math.max(res, cnt);
        }
    }
    return res;
};

const main = () => {
    let A = [1, 2, 3, 4, 5, 6, 7, 8];
    let A2 = [1, 3, 7, 11, 12, 14, 18];
    let A_debug1 = [1, 3, 5];
    console.log(lenLongestFibSubseq(A));
    console.log(lenLongestFibSubseq(A2));
    console.log(lenLongestFibSubseq(A_debug1));
};

main()