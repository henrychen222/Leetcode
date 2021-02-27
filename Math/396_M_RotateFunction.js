/**
 * 02/26/21 evening
 * https://leetcode.com/problems/rotate-function/
 */

const pr = console.log;

// Accepted --- 928ms 32.14%
const mx = Math.max;
const maxRotateFunction = (A) => {
    let n = A.length;
    if (n == 0) return 0;
    let res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        let idx = n - i;
        let sum = 0;
        while (cnt < n) {
            if (idx == n) {
                // pr("rotate", cnt, A[0]);
                sum += cnt * A[0];
                idx = 1;
                cnt++;
                continue;
            }
            // pr(cnt, A[idx]);
            sum += cnt * A[idx];
            idx++;
            cnt++;
        }
        // pr(sum);
        res = mx(res, sum);
    }
    return res;
};

const main = () => {
    let A = [4, 3, 2, 6];
    let A_debug1 = [-2147483648, -2147483648];
    let A_debug2 = [];
    pr(maxRotateFunction(A));
    pr(maxRotateFunction(A_debug1)); // -2147483648
    pr(maxRotateFunction(A_debug2)); // 0
};

main()