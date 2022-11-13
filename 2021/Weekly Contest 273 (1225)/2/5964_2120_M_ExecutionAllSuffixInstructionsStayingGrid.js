/**
 * 12/25/21 evening
 * https://leetcode.com/contest/weekly-contest-273/problems/execution-of-all-suffix-instructions-staying-in-a-grid/ 
 */

const pr = console.log;

// Accepted
const executeInstructions = (n, startPos, s) => {
    let res = [], m = s.length;
    for (let i = 0; i < m; i++) {
        let [x, y] = startPos;
        // pr("\nstart", x, y);
        let j;
        for (j = i; j < m; j++) {
            let c = s[j];
            if (c == 'U') {
                if (x - 1 >= 0) {
                    x--;
                } else {
                    break;
                }
            } else if (c == 'D') {
                if (x + 1 < n) {
                    x++;
                } else {
                    break;
                }
            } else if (c == 'L') {
                if (y - 1 >= 0) {
                    y--;
                } else {
                    break;
                }
            } else if (c == 'R') {
                if (y + 1 < n) {
                    y++;
                } else {
                    break;
                }
            }
            // pr(c, x, y);
        }
        // pr("check", i, s[i], j, s[j]);
        let step = j - i;
        res.push(step);
    }
    return res;
};

const main = () => {
    let n = 3, startPos = [0, 1], s = "RRDDLU";
    let n2 = 2, startPos2 = [1, 1], s2 = "LURD";
    let n3 = 1, startPos3 = [0, 0], s3 = "LRUD";
    pr(executeInstructions(n, startPos, s))
    pr(executeInstructions(n2, startPos2, s2))
    pr(executeInstructions(n3, startPos3, s3))
};

main()