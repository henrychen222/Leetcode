/**
 * 06/06/22 night
 * https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/
 */

const pr = console.log;

// Accepted --- 70ms 76.92%
const movesToMakeZigzag = (a) => {
    let b = [...a], n = a.length, oddDec = 0, evenDec = 0;
    for (let i = 1; i < n; i += 2) { // a[0] > a[1] < a[2]
        if (i == n - 1) {
            if (a[i] >= a[i - 1]) {
                let update = a[i - 1] - 1;
                // pr("n-1", i, update, a);
                let old = a[i];
                a[i] = update;
                oddDec += old - update;
            }
        } else {
            if (a[i] >= a[i - 1] || a[i] >= a[i + 1]) {
                update = Math.min(a[i - 1], a[i + 1]) - 1;
                // pr("update", update);
                let old = a[i];
                a[i] = update;
                oddDec += old - update;
                // pr(a);
            }
        }
    }
    // pr("change odd", oddDec, a);
    for (let i = 1; i < n; i += 2) { // b[0] < b[1] > b[2]
        if (i == n - 1) {
            if (b[i] <= b[i - 1]) {
                // pr(b[i], b[i-1])
                let update = b[i - 1] + 1;
                let old = b[i];
                b[i] = update;
                // pr(old, update)
                evenDec += update - old;
            }
        } else {
            if (b[i] <= b[i - 1] || b[i] <= b[i + 1]) {
                let update = b[i] - 1;
                if (b[i] <= b[i - 1]) {
                    let old = b[i - 1];
                    b[i - 1] = update;
                    evenDec += old - update;
                }
                if (b[i] <= b[i + 1]) {
                    let old = b[i + 1];
                    b[i + 1] = update;
                    evenDec += old - update;
                }
            }
        }
    }
    // pr("change even", evenDec, b);
    return Math.min(oddDec, evenDec);
};

const main = () => {
    let a = [1, 2, 3];
    let a2 = [9, 6, 1, 6, 2];
    let debug1 = [10, 4, 4, 10, 10, 6, 2, 3];
    let debug2 = [10, 1, 1, 6, 6, 6, 1, 8, 8, 5, 1, 2, 6, 6, 6, 4, 4, 8, 7, 1]
    pr(movesToMakeZigzag(a));
    pr(movesToMakeZigzag(a2));
    pr(movesToMakeZigzag(debug1)); // 13
    pr(movesToMakeZigzag(debug2)); // 32
};

main()