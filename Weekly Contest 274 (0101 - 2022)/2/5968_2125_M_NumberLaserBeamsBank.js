/**
 * 01/01/22 evening
 * https://leetcode.com/contest/weekly-contest-274/problems/number-of-laser-beams-in-a-bank/
 */

const pr = console.log;

// Accepted
const numberOfBeams = (a) => {
    // let n = a.length, m = a[0].length;
    let d = a.map(s => {
        let one = 0;
        for (const c of s) {
            if (c == '1') one++;
        }
        return one;
    });
    // pr(d);
    let res = 0, pre;
    for (const x of d) {
        // pr(x, res)
        if (pre != undefined) {
            if (x > 0) {
                res += x * pre;
                pre = x;
            }
        } else {
            if (x > 0) {
                pre = x;
            }
        }
    }
    return res;
};

const main = () => {
    let bank = ["011001", "000000", "010100", "001000"];
    let bank2 = ["000", "111", "000"];
    pr(numberOfBeams(bank))
    pr(numberOfBeams(bank2))
};

main()