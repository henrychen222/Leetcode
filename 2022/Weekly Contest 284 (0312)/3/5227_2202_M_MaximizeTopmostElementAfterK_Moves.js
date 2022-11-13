/**
 * 03/12/22 evening
 * https://leetcode.com/contest/weekly-contest-284/problems/maximize-the-topmost-element-after-k-moves/
 */

const pr = console.log;

// After Contest Accepted
const maximumTop = (a, k) => {
    let n = a.length;
    if (n == 1) {
        if (k % 2 != 0) {
            return -1;
        } else {
           return a[0];
        }
    }
    if (n == 1 && k % 2 == 0) return -1;
    if (k > n) { // possible max in whole array
        // k %= n;  // Accepted --- 72ms
        let max = Math.max(...a);
        // pr(n, "k_rest", k, "max", max);
        return max;
    } else if (k < n) { // possible max in subarray [0, k]
        if (k == 0) return a[0];
        /*
          remove k - 1, max(k-1) element, add max to top
          remove k, currentTop
         */
        let d = a.slice(0, k - 1);
        let currentTop = a[k];
        // pr("d", d, currentTop)
        return Math.max(Math.max(...d), currentTop);
    } else { // forget to consider this in contest hidden case
        let max = Math.max(...a.slice(0, -1));
        return max;
    }
};

const main = () => {
    let a = [5, 2, 2, 4, 0, 6], k = 4;
    let a2 = [2], k2 = 1;
    let a_debug1 = [35, 43, 23, 86, 23, 45, 84, 2, 18, 83, 79, 28, 54, 81, 12, 94, 14, 0, 0, 29, 94, 12, 13, 1, 48, 85, 22, 95, 24, 5, 73, 10, 96, 97, 72, 41, 52, 1, 91, 3, 20, 22, 41, 98, 70, 20, 52, 48, 91, 84, 16, 30, 27, 35, 69, 33, 67, 18, 4, 53, 86, 78, 26, 83, 13, 96, 29, 15, 34, 80, 16, 49], k_debug1 = 15;
    let a_debug2 = [91, 98, 17, 79, 15, 55, 47, 86, 4, 5, 17, 79, 68, 60, 60, 31, 72, 85, 25, 77, 8, 78, 40, 96, 76, 69, 95, 2, 42, 87, 48, 72, 45, 25, 40, 60, 21, 91, 32, 79, 2, 87, 80, 97, 82, 94, 69, 43, 18, 19, 21, 36, 44, 81, 99], k_debug2 = 2
    let a_debug3 = [18], k_debug3 = 3
    let a_debug4 = [99, 95, 68, 24, 18], k_debug4 = 69;
    let a_debug5 = [94, 23, 58, 92, 3, 63, 68, 43, 8, 97, 54, 11, 63, 55, 73, 38, 22, 80, 45, 43, 25, 34, 67, 76, 80, 9, 30, 27, 50, 7, 57, 63, 63, 27, 46, 1, 50, 55, 99, 92, 73, 9, 57, 25, 59, 54, 100, 56, 64, 94, 99], k_debug5 = 79
    let a_debug6 = [17, 61, 5, 1, 44], k_debug6 = 100;
    let a_debug7 = [4, 6, 1, 0, 6, 2, 4], k_debug7 = 0;
    let a_final_fuck_hidden = [0,1,2], k_final_fuck_hidden = 3;
    let a_debug8 = [100,9,6,8,7], k_debug8 = 5;
    let a_debug9 = [73,63,62,16,95,92,93,52,89,36,75,79,67,60,42,93,93,74,94,73,35,86,96], k_debug9 = 59;
    let a_debug10 = [0], k_debug10 = 1000000000;
    pr(maximumTop(a, k))
    pr(maximumTop(a2, k2))
    pr(maximumTop(a_debug1, k_debug1)) // 94
    pr(maximumTop(a_debug2, k_debug2)) // 91
    pr(maximumTop(a_debug3, k_debug3)) // -1
    pr(maximumTop(a_debug4, k_debug4)) // 99
    pr(maximumTop(a_debug5, k_debug5)) // 100
    pr(maximumTop(a_debug6, k_debug6)) // 61
    pr(maximumTop(a_debug7, k_debug7)) // 4
    pr(maximumTop(a_final_fuck_hidden, k_final_fuck_hidden)) // 1
    pr(maximumTop(a_debug8, k_debug8)) // 100
    pr(maximumTop(a_debug9, k_debug9)) // 96
    pr(maximumTop(a_debug10, k_debug10)) // 0;
    // pr(maximumTop(a_debug11, k_debug11)) // 99999
};

main()