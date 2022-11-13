/**
 * 01/22/22 evening
 * https://leetcode.com/contest/weekly-contest-277/problems/rearrange-array-elements-by-sign/
 */

const pr = console.log;

// Accepted
const rearrangeArray = (a) => {
    let n = a.length, m = n / 2, pos = [], neg = [], res = [], p = 0;
    for (const x of a) {
        if (x < 0) {
            neg.push(x);
        } else if (x > 0) {
            pos.push(x);
        }
    }
    while (res.length < n) {
        res.push(pos[p]);
        res.push(neg[p]);
        p++;
    }
    return res;
};

const main = () => {
    let nums = [3, 1, -2, -5, 2, -4];
    let nums2 = [-1, 1];
    pr(rearrangeArray(nums))
    pr(rearrangeArray(nums2))
};

main()