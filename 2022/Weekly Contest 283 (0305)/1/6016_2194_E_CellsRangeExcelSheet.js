
/**
 * 03/05/22 evening
 * https://leetcode.com/contest/weekly-contest-283/problems/cells-in-a-range-on-an-excel-sheet/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();

// Accepted
const cellsInRange = (s) => {
    let res = [];
    for (let i = ord(s[0]); i <= ord(s[3]); i++) {
        let c = String.fromCharCode(i);
        for (let j = s[1]; j <= s[4]; j++) {
            // pr(c, j);
            res.push(c + j);
        }
    }
    return res;
};

const main = () => {
    let s = "K1:L2";
    let s2 = "A1:F1";
    pr(cellsInRange(s))
    pr(cellsInRange(s2))
};

main()
