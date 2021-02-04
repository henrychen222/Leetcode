/**
 * 2/2/21 afternoon
 * https://leetcode.com/problems/simplified-fractions/
 */

// Accepted --- 120ms 85.19%
const simplifiedFractions = (n) => {
    let res = [];
    for (let down = 1; down <= n; down++) {
        for (let top = 1; top < down; top++) {
            if (gcd(top, down) == 1) {
                res.push(top + '/' + down);
            }
        }
    }
    return res;
};

// Accepted --- 164ms 70.37%
const simplifiedFractions1 = (n) => {
    let res = [];
    for (let down = 1; down <= n; down++) {
        for (let top = 1; top < down; top++) {
            if (gcd(top, down) != 1) continue;
            res.push(top + '/' + down);
        }
    }
    return res;
};

// https://stackoverflow.com/questions/6618994/simplifying-fractions-in-java
const gcd = (a, b) => {
    return b == 0 ? a : gcd(b, a % b);
};

const main = () => {
    let n = 2;
    let n2 = 3;
    let n3 = 4;
    let n4 = 1;
    console.log(simplifiedFractions(n));
    console.log(simplifiedFractions(n2));
    console.log(simplifiedFractions(n3));
    console.log(simplifiedFractions(n4));
};

main()

// console.log(gcd(4, 6));
// console.log(gcd(27, 81));
// console.log(gcd(1, 4));
// console.log(gcd(3, 4));
// console.log(gcd(0, 5));
// console.log(gcd(5, 0));