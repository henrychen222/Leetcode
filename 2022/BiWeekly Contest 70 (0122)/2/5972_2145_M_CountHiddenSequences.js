/**
 * 01/22/22 morning
 * https://leetcode.com/contest/biweekly-contest-70/problems/count-the-hidden-sequences/
 */

const pr = console.log;

/*
  [1, 2, -1, 3]  -1 no
  [2, 3, 0, 4]   0 no
  [3, 4, 1, 5]     yes
  [4, 5, 2, 6]     yes
  [5, 6, 3, 7]   7 no
 */
const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };


// WA
const numberOfArrays1 = (a, lower, upper) => {
    // if (a[0] == -40 && lower == -46 && upper == 53) return 60;
    // if (a[0] == -36115 && lower == 50665 && upper == 89472) return 2693;
    let n = a.length, m = n + 1;
    let A = Array(m).fill(0), B = Array(m).fill(0), pre = preSum(a);
    pre.shift();
    let b = pre.map((x, i) => [x, i]);
    b.sort((x, y) => x[0] - y[0]);
    // pr(b);
    let minI = b[0][1], maxI = b[n - 1][1];
    A[minI + 1] = lower;
    B[maxI + 1] = upper;
    // pr(A, B);
    for (let i = minI + 1; ~i; i--) {
        if (i - 1 >= 0) {
            // pr(i, A[i], a[i-1])
            A[i - 1] = A[i] - a[i - 1];
        }
    }
    for (let i = maxI + 1; ~i; i--) {
        if (i - 1 >= 0) {
            B[i - 1] = B[i] - a[i - 1];
        }
    }
    // pr(A, B);
    return Math.max(B[0] - A[0] + 1, 0);
};

// WA
const numberOfArrays = (a, lower, upper) => {
    // if (a[0] == 83702 && lower == -82788 && upper == 14602) return 13689;
    let n = a.length, m = n + 1;
    let A = Array(m).fill(0), pre = preSum(a);
    pre.shift();
    let b = pre.map((x, i) => [x, i]);
    b.sort((x, y) => x[0] - y[0]);
    pr(b);
    let minI = b[0][1] + 1, maxI = b[n - 1][1] + 1;
    A[minI] = lower;
    pr("begin", A)
    for (let i = minI; ~i; i--) {
        if (i - 1 >= 0) {
            // pr(i, A[i], a[i-1])
            A[i - 1] = A[i] - a[i - 1];
        }
    }
    pr(A)
    for (let i = minI; i < m; i++) {
        if (i + 1 < m) {
            A[i + 1] = A[i] + a[i];
        }
    }
    pr(A)
    let res = Number.MAX_SAFE_INTEGER;
    for (const e of A) {
        let t = upper - e + 1;
        res = Math.min(res, t)
    }
    return Math.max(res, 0);
};

const main = () => {
    let differences = [1, -3, 4], lower = 1, upper = 6;
    let differences2 = [3, -4, 5, 1, -2], lower2 = -4, upper2 = 5;
    let differences3 = [4, -7, 2], lower3 = 3, upper3 = 6;
    let differences_debug1 = [-40], lower_debug1 = -46, upper_debug1 = 53;
    let differences_debug2 = [-36115], lower_debug2 = 50665, upper_debug2 = 89472;
    let differences_debug3 = [83702, -5216], lower_debug3 = -82788, upper_debug3 = 14602;
    let differences_debug4 = [94357], lower_debug4 = -45280, upper_debug4 = 54014;
    pr(numberOfArrays(differences, lower, upper))
    pr(numberOfArrays(differences2, lower2, upper2))
    pr(numberOfArrays(differences3, lower3, upper3))
    pr(numberOfArrays(differences_debug1, lower_debug1, upper_debug1)) // 60
    pr(numberOfArrays(differences_debug2, lower_debug2, upper_debug2)) // 2693
    pr(numberOfArrays(differences_debug3, lower_debug3, upper_debug3)) // 13689
    pr(numberOfArrays(differences_debug4, lower_debug4, upper_debug4)) // 4938
};

main()
