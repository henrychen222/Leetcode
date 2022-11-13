/**
 * 02/20/21 evening
 * https://leetcode.com/contest/weekly-contest-229/problems/merge-strings-alternately/
 */

/////////////////////////////// pre-define /////////////////////////
const pr = console.log;
/////////////////////////////////////////////////////////////////////

// Accepted
const minOperations = (s) => {
    let n = s.length;
    let res = [];
    let oneIdx = [];
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') oneIdx.push(i);
    }
    // pr(oneIdx);
    for (let i = 0; i < n; i++) {
        let move = 0;
        for (const idx of oneIdx) {
            // pr(i, idx)
            idx >= i ? move += idx - i : move += i - idx;
        }
        res.push(move);
    }
    return res;
};

const main = () => {
    let boxes = "110";
    let boxes2 = "001011";
    pr(minOperations(boxes));
    pr(minOperations(boxes2));
};

main()