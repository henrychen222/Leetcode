/**
 * 09/04/21 evening
 * https://leetcode.com/contest/weekly-contest-257/problems/count-special-quadruplets/
 */

const pr = console.log;

// Accepted
const countQuadruplets = (a) => {
    let n = a.length, res = 0;
    // a.sort((x, y) => x - y);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let m = k + 1; m < n; m++) {
                    if (a[i] + a[j] + a[k] == a[m]) {
                        // pr(i, j, k, m)
                        // pr(a[i], a[j], a[k], a[m])
                        res++;
                    }
                }
            }
        }
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 3, 6];
    let nums2 = [3, 3, 6, 4, 5];
    let nums3 = [1, 1, 1, 3, 5];
    let debug1 = [28, 8, 49, 85, 37, 90, 20, 8]
    pr(countQuadruplets(nums))
    pr(countQuadruplets(nums2))
    pr(countQuadruplets(nums3))
    pr(countQuadruplets(debug1)) // 1
};

main()