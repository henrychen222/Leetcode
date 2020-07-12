/**
 * 7.11 afternoon
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 */

// need to fix for large number
const numSteps = (s) => {
    let num = parseInt(s, 2);
    return step(num);
};

const step = (x) => {
    let cnt = 0;
    while (x != 1) {
        if (x % 2 == 0) {
            x = x >> 1;
            cnt++;
        } else {
            x++;
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let s = "1101";
    let s2 = "10";
    let s3 = "1";
    let debug1 = "1111011110000011100000110001011011110010111001010111110001";
    console.log(numSteps(s));
    console.log(numSteps(s2));
    console.log(numSteps(s3));
    console.log(numSteps(debug1)); // 85
};

main()