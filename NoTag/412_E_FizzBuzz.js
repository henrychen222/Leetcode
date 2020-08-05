/**
 * 8.4 night
 * https://leetcode.com/problems/fizz-buzz/
 */

// Accepted --- 84ms 39MB 42.35%
const fizzBuzz_refine = (n) => {
    let res = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                res.push('FizzBuzz');
            } else {
                res.push('Fizz');
            }
        } else {
            if (i % 5 == 0) {
                res.push('Buzz');
            } else {
                res.push(i + '');
            }
        }
    }
    return res;
};

// Accepted --- 128ms 39MB 5.71%
const fizzBuzz1 = (n) => {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let tmp = [i % 3, i % 5];
        if (tmp[0] == 0 && tmp[1] == 0) {
            res.push('FizzBuzz');
        } else if (tmp[0] == 0 && tmp[1] != 0) {
            res.push('Fizz');
        } else if (tmp[0] != 0 && tmp[1] == 0) {
            res.push('Buzz');
        } else {
            res.push(i + '');
        }
    }
    return res;
};

const main = () => {
    let n = 1;
    let n2 = 15;
    console.log(fizzBuzz(n));
    console.log(fizzBuzz(n2));
};

main()