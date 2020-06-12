/**
 * 6.11 evening
 * https://leetcode.com/problems/sum-of-square-numbers/
 */

// Accepted --- 76ms 36.6MB 35.90%
const judgeSquareSum = (c) => {
    let map = new Map();
    for (let a = 0; a <= c - a ** 2; a++) {
        let bSquare = c - a ** 2;
        let b = Math.sqrt(bSquare);
        if (bSquare >= 0 && b == Math.floor(b)) {
            map.set(a ** 2, c - a ** 2);
        }
    }
    if (map.size == 0) {
        return false;
    }
    // console.log(map);
    return true;
};

// Time limit exceed  103/124
const judgeSquareSum3 = (c) => {
    let map = new Map();
    for (let a = 0; a <= c >> 1; a++) {
        let bSquare = c - a ** 2;
        let b = Math.sqrt(bSquare);
        if (bSquare >= 0 && b == Math.floor(b)) {
            map.set(a ** 2, c - a ** 2);
        }
        if (map.size > 0) {
            break;
        }
    }
    if (map.size > 0) {
        return true;
    }
    return false;
};

// Time limit exceed  123/124
const judgeSquareSum2 = (c) => {
    let map = new Map();
    for (let a = 0; a <= c >> 1; a++) {
        let bSquare = c - a ** 2;
        let b = Math.sqrt(bSquare);
        if (bSquare >= 0 && b == Math.floor(b)) {
            map.set(a ** 2, c - a ** 2);
        }
    }
    if (map.size == 0) {
        return false;
    }
    return true;
};

const judgeSquareSum1 = (c) => {
    for (let a = 0; a <= c; a++) {
        for (let b = a; b <= c - a ** 2; b++) {
            if (a ** 2 + b ** 2 == c) {
                return true;
            }
            // if ((a + b) ** 2 - 2 * a * b == c) {
            //     return true;
            // }
            // if ((a + b) == Math.sqrt(c + 2 * a * b)) {
            //     return true;
            // }
        }
    }
    return false;
};

const main = () => {
    let c = 5;
    let c2 = 3;
    let c3 = 1000;
    let debug1 = 2;
    let debug2 = 1000000000;
    let debug3 = 2147483644;
    let debug4 = 2098862653;
    let debug5 = 2147483643;
    console.log(judgeSquareSum(c)); // true 
    console.log(judgeSquareSum(c2)); // false
    console.log(judgeSquareSum(c3)); // true 
    console.log(judgeSquareSum(debug1)); // true
    console.log(judgeSquareSum(debug2)); // true
    console.log(judgeSquareSum(debug3)); // false
    console.log(judgeSquareSum(debug4)); // true
    console.log(judgeSquareSum(debug5)); // false
};

main()