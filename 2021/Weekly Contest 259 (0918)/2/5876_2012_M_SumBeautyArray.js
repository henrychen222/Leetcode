/**
 * 09/18/21 evening
 * https://leetcode.com/contest/weekly-contest-259/problems/sum-of-beauty-in-the-array/
 */

const pr = console.log;

// Accepted
const sumOfBeauties = (a) => {
    let n = a.length;
    let left = Array(n).fill(true), right = Array(n).fill(true);
    let max = a[0];
    for (let i = 1; i < n - 1; i++) {
        left[i] = a[i] > max;
        max = Math.max(max, a[i]);
    }
    let min = a[n - 1];
    for (let i = n - 2; i >= 1; i--) {
        right[i] = a[i] < min;
        min = Math.min(min, a[i]);
    }
    // pr(left)
    // pr(right)
    let res = 0;
    for (let i = 1; i < n - 1; i++) {
        if (left[i] && right[i]) {
            res += 2;
            continue;
        }
        if (a[i] > a[i - 1] && a[i] < a[i + 1]) {
            res++;
            continue;
        }
    }
    return res;
};

// WA hidden case
const sumOfBeauties1 = (a) => {
    let n = a.length;
    let left = Array(n).fill(true), right = Array(n).fill(true);
    for (let i = 1; i < n - 1; i++) {
        if (!left[i - 1]) {
            left[i] = false;
        } else {
            left[i] = a[i] > a[i - 1];
        }
    }
    for (let i = n - 2; i >= 1; i--) {
        // pr("right", a[i], a[i + 1], right[i + 1])
        if (!right[i + 1]) {
            right[i] = false;
        } else {
            right[i] = a[i + 1] > a[i];
        }
    }
    // pr(left)
    // pr(right)
    let res = 0;
    for (let i = 1; i < n - 1; i++) {
        if (left[i] && right[i]) {
            res += 2;
            continue;
        }
        if (a[i] > a[i - 1] && a[i] < a[i + 1]) {
            res++;
            continue;
        }
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 3];
    let nums2 = [2, 4, 6, 4];
    let nums3 = [3, 2, 1];
    let test1 = [1, 1, 1];
    let test2 = [1, 2, 3, 4, 5];

    let test3 = [1, 3, 9, 3, 4, 5];
    pr(sumOfBeauties(nums))
    pr(sumOfBeauties(nums2))
    pr(sumOfBeauties(nums3))

    pr(sumOfBeauties(test1)) // 0
    pr(sumOfBeauties(test2)) // 6
    pr(sumOfBeauties(test3)) // 2
}

main()

pr(1e5 * 2)