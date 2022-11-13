/**
 * 04/10/21 evening
 * https://leetcode.com/contest/weekly-contest-236/problems/sign-of-the-product-of-an-array/
 */

const pr = console.log;

// Accepted
const arraySign = (a) => {
    let neg = 0;
    for (const e of a) {
        if (e < 0) {
            neg++;
        } else if (e == 0) {
            return 0;
        }
    }
    return neg & 1 ? -1 : 1;
};

const main = () => {
    let nums = [-1, -2, -3, -4, 3, 2, 1];
    let nums2 = [1, 5, 0, 2, -3];
    let nums3 = [-1, 1, -1, 1, -1];
    pr(arraySign(nums))
    pr(arraySign(nums2))
    pr(arraySign(nums3))
};

main()