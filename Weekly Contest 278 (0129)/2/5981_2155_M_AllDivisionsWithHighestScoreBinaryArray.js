/**
 * 01/29/22 evening
 * https://leetcode.com/contest/weekly-contest-278/problems/all-divisions-with-the-highest-score-of-a-binary-array/
 */

const pr = console.log;

// Accepted
const maxScoreIndices = (a) => {
    let n = a.length, zero = new Set(), one = new Set();
    for (let i = 0; i < n; i++) a[i] == 0 ? zero.add(i) : one.add(i);
    let cntL = 0, cntR = one.size, res = [[0, cntL + cntR]], max = cntL + cntR;
    // pr(cntL, cntR);
    for (let i = 0; i < n; i++) {
        if (a[i] == 0) {
            cntL++;
        } else {
            cntR--;
        }
        // pr(cntL, cntR);
        max = Math.max(max, cntL + cntR);
        res.push([i + 1, cntL + cntR])
    }
    // pr(max, res);
    return res.filter(x => x[1] == max).map(x => x[0]);
};

const main = () => {
    let nums = [0, 0, 1, 0];
    let nums2 = [0, 0, 0];
    let nums3 = [1, 1];
    pr(maxScoreIndices(nums))
    pr(maxScoreIndices(nums2))
    pr(maxScoreIndices(nums3))
};

main()