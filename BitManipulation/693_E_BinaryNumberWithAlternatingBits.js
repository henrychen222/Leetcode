/**
 * 6.17 evening
 * https://leetcode.com/problems/binary-number-with-alternating-bits/
 */

// Accepted --- 56ms 33.7MB 75.00%
const hasAlternatingBits = (n) => {
    let Nbin = n.toString(2);
    for (let i = 0; i < Nbin.length; i++) {
        if (Nbin[i] == Nbin[i + 1]) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let n = 5;
    let n2 = 7;
    let n3 = 11;
    let n4 = 10;
    console.log(hasAlternatingBits(n));
    console.log(hasAlternatingBits(n2));
    console.log(hasAlternatingBits(n3));
    console.log(hasAlternatingBits(n4));
};

main()