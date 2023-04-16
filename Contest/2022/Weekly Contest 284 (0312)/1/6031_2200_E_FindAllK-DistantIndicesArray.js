/**
 * 03/12/22 evening
 * https://leetcode.com/contest/weekly-contest-284/problems/find-all-k-distant-indices-in-an-array/
 */

const pr = console.log;

// Accepted
const findKDistantIndices = (a, key, k) => {
    let n = a.length, res = [], d = [];
    for (let i = 0; i < n; i++) {
       if (a[i] == key) d.push(i);
    }
    // pr(d);
    for (let i = 0; i < n; i++) {
        for (const j of d) {
            if (Math.abs(i - j) <= k) {
                // pr("i", i + 1, "j", j + 1);
                res.push(i);
                break;
            }
        }
    }
    return res;
};

const main = () => {
    let a = [3,4,9,1,3,9,5], key = 9, k = 1;
    let a2 = [2,2,2,2,2], key2 = 2, k2 = 2;
    pr(findKDistantIndices(a, key, k))
    pr(findKDistantIndices(a2, key2, k2))
};

main()