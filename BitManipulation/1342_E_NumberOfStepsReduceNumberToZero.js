/**
 * 6.17 night
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */

// Accepted --- 72ms 35.4MB 37.47%
const numberOfSteps = (num) => {
    let cnt = 0;
    while (num != 0) {
        if (num % 2 == 0) {
            num /= 2;
            cnt++;
        } else {
            num -= 1;
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let num = 14;
    let num2 = 8;
    let num3 = 123;
    console.log(numberOfSteps(num));
    console.log(numberOfSteps(num2));
    console.log(numberOfSteps(num3));
};

main()