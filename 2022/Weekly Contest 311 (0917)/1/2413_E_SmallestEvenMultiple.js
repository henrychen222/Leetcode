/*
* 09/17/22 evening
* https://leetcode.com/contest/weekly-contest-311/problems/smallest-even-multiple/
*/

const pr = console.log;

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a / gcd(a, b)) * b;

// Accepted
const smallestEvenMultiple = (n) => lcm(2, n)

const main = () => {
    let n = 5;
    let n2 = 6;
    pr(smallestEvenMultiple(n))
    pr(smallestEvenMultiple(n2))
};

main()