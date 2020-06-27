/**
 * 6.26 night
 * https://leetcode.com/problems/excel-sheet-column-title/
 * reference: https://cwestblog.com/2013/09/05/javascript-snippet-convert-number-to-column-name/
 */

// Accepted --- 68ms 33.3MB 33.24%
const convertToTitle = (n) => {
    let res = "";
    let a = 1;
    let b = 26;
    while ((n -= a) >= 0) {
        res = String.fromCharCode(parseInt((n % b) / a) + 65) + res;
        a = b;
        b *= 26;
    }
    return res;
};

const main = () => {
    let n = 1;
    let n2 = 28;
    let n3 = 701;
    let n4 = 704;
    console.log(convertToTitle(n));
    console.log(convertToTitle(n2));
    console.log(convertToTitle(n3));
    console.log(convertToTitle(n4));
};

main()