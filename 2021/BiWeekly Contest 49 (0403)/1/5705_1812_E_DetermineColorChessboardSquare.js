/**
 * 04/03/21 morning
 * https://leetcode.com/contest/biweekly-contest-49/problems/determine-color-of-a-chessboard-square/
 */


const pr = console.log;

// Accepted
const squareIsWhite = (c) => {
    let f = c[0].charCodeAt() - 96;
    // pr(f);
    let res;
    if (f & 1) {
        if (c[1] & 1) {
            res = 'b';
        } else {
            res = 'w';
        }
    } else {
        if (c[1] & 1) {
            res = 'w';
        } else {
            res = 'b';
        }
    }
    return res == 'w';
};

const main = () => {
    let coordinates = "a1";
    let coordinates2 = "h3";
    let coordinates3 = "c7";
    pr(squareIsWhite(coordinates));
    pr(squareIsWhite(coordinates2));
    pr(squareIsWhite(coordinates3));
};

main()