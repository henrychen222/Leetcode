/**
 * 03/26/22 evening
 * https://leetcode.com/contest/weekly-contest-286/problems/minimum-deletions-to-make-array-beautiful/
 */

const pr = console.log;

// Accepted
const minDeletion = (a) => {
    let n = a.length, pre, res = [];
    for (let i = 0; i < n; i++) {
        if (pre == undefined) {
            res.push(a[i]);
            pre = a[i];
        } else {
            // pr(i, a[i], pre)
            if (res.length % 2 != 0) {
                if (a[i] != pre) {
                    res.push(a[i]);
                    pre = a[i];
                }
            } else {
                res.push(a[i]);
                pre = a[i];
            }
        }
    }
    // pr(res);
    let len = res.length % 2 == 0 ? res.length : res.length - 1;
    return n - len;
};

const main = () => {
    let a = [1, 1, 2, 3, 5];
    let a2 = [1, 1, 2, 2, 3, 3];
    pr(minDeletion(a))
    pr(minDeletion(a2))
};

main()