/**
 * 08/28/21 evening
 * https://leetcode.com/contest/weekly-contest-256/problems/find-the-kth-largest-integer-in-the-array/
 */

const pr = console.log;

// Accepted
const ll = BigInt;
const kthLargestNumber = (a, k) => {
    a = a.map(ll);
    // pr(a);
    a.sort((x, y) => {
        if (x > y) {
            return -1;
        } else if (x < y) {
            return 1;
        } else {
            return 0;
        }
    });
    // pr(a);
    return a[k - 1].toString();
};

// WA hidden case
const kthLargestNumber1 = (a, k) => {
    a.sort((x, y) => y - x);
    // pr(a);
    return a[k - 1];
};

const main = () => {
    let nums = ["3", "6", "7", "10"], k = 4;
    let nums2 = ["2", "21", "12", "1"], k2 = 3;
    let nums3 = ["0", "0"], k3 = 2;
    pr(kthLargestNumber(nums, k))
    pr(kthLargestNumber(nums2, k2))
    pr(kthLargestNumber(nums3, k3))
};

main()


// let s = '1'.repeat(101);
// let x = BigInt(s);
// pr(x);