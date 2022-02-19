/**
 * 02/09/22 afternoon
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/
 */


const minOperations = (a) => {
    let res = 0;
    while (1) {
        if (new Set(a).size == 1 && a[0] == 0) break;
        let b = [];
        for (const x of a) {
            if (x & 1) {
                b.push(x - 1 >> 1);
                res++;
            } else {
                b.push(x >> 1);
            }
        }
        res++;
        a = b;
    }
    return Math.max(0, res - 1);
};

const pr = console.log;
const main = () => {
    let nums = [1,5];
    let nums2 = [2,2];
    let nums3 = [4,2,5];
    let debug1 = [0];
    pr(minOperations(nums))
    pr(minOperations(nums2))
    pr(minOperations(nums3))
    pr(minOperations(debug1))
};

main()