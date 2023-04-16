/**
 * 08/14/21 evening
 * https://leetcode.com/contest/weekly-contest-254/problems/array-with-elements-not-equal-to-average-of-neighbors/
 */

const pr = console.log;

// same problem https://codeforces.com/problemset/problem/1526/A
// Accepted
const stin = (a) => a.sort((x, y) => x - y);
const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]];
const rearrangeArray = (a) => {
    let n = a.length;
    stin(a);
    for (let i = 1; i + 1 < n; i += 2) {
        swap(a, i, i + 1);
    }
    // pr(test(a));
    return a;
};

const test = (a) => {
    let n = a.length;
    for (let i = 1; i + 1 < n; i++) {
        if (a[i - 1] + a[i + 1] >> 1 == a[i]) {
            pr(a[i - 1], a[i + 1], a[i - 1] + a[i + 1] >> 1, a[i])
            return false;
        }
    }
    return true;
}
    

const main = () => {
    let nums = [1, 2, 3, 4, 5];
    let nums2 = [6, 2, 0, 9, 7];
    pr(rearrangeArray(nums))
    pr(rearrangeArray(nums2))
};

main()