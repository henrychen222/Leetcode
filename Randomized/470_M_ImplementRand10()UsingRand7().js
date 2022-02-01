/**
 * 01/31/22 evening
 * https://leetcode.com/problems/implement-rand10-using-rand7/
 */

// Accepted --- 183ms 24.32%
// reference: https://www.cnblogs.com/grandyang/p/9727206.html
const rand101 = () => {
    while (1) {
        let x = (rand7() - 1) * 7 + rand7();
        if (x <= 40) return x % 10 + 1;
    }
};


// Accepted --- 217ms  5.41%
const rand10 = () => randN(10);
const randN = (n) => parseInt(Math.random() * n) + 1;