/**
 * 03/03/21 night
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * 
 * same to 424
 */

const pr = console.log;


// TLE 27/48
const longestOnes3 = (A, K) => {
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let m = new Map();
        for (let j = i; j < n; j++) {
            let sn = j - i + 1;
            m.set(A[j], m.get(A[j]) + 1 || 1);
            let flipZero = sn - (m.get(1) || 0);
            // let flipZero = sn - m.get(1);  fuck issue here
            if (flipZero <= K) {
                res = Math.max(res, sn);
            } else {
                break;
            }
        }
    }
    return res;
};

// Accepted --- 5252ms 5.28%
const longestOnes = (A, K) => {
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        // let m = new Map();
        let one = zero = 0;
        for (let j = i; j < n; j++) {
            let sn = j - i + 1;
            A[j] ? one++ : zero++;
            // m.set(A[j], m.get(A[j]) + 1 || 1);
            // pr(A.slice(i, j + 1), sn, {zero, one}, K);
            let flipZero = sn - one;
            if (flipZero <= K) {
                // pr(A.slice(i, j + 1))
                res = Math.max(res, sn);
            } else {
                break;
            }
        }
    }
    return res;
};

// TLE 25/48
const longestOnes1 = (A, K) => {
    let tmp = [...new Set(A)];
    // if (tmp.length == 1 && tmp[0] == 0 && K == 0) return 0;
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let m = new Map();
        let keep = A[i];
        let kocc = 1;
        for (let j = i; j < n; j++) {
            let sn = j - i + 1;
            let cur = m.get(A[j]);
            m.set(A[j], cur + 1 || 1);
            if (cur + 1 > kocc) {
                keep = A[j];
                kocc = cur + 1;
            }
            // let rest = sn - kocc; // issue is here, kocc may be is the 0's occ, we need to remove 0's (rest), so keep 1's, need to get(1);
            let rest = sn - (m.get(1) || 0);
            // pr(A.slice(i, j + 1), sn, {keep, kocc, rest}, m);
            if (rest <= K) {
                // pr(A.slice(i, j + 1))
                res = Math.max(res, sn);
            } else {
                break;
            }
        }
    }
    return res;
};

const main = () => {
    let A = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
        K = 2;
    let A2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        K2 = 3;
    let A_debug1 = [0, 0, 0, 0],
        K_debug1 = 0;
    let A_debug2 = [0, 0, 0, 1],
        K_debug2 = 4;
    let A_debug3 = [0, 0, 1, 1, 1, 0, 0],
        K_debug3 = 0;
    pr(longestOnes(A, K)); // 6
    pr(longestOnes(A2, K2)); // 10
    pr(longestOnes(A_debug1, K_debug1)); // 0
    pr(longestOnes(A_debug2, K_debug2)); // 4
    pr(longestOnes(A_debug3, K_debug3)); // 3
};

main()