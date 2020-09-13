/**
 * 9.12 afternoon
 * https://leetcode.com/problems/permutations/
 */

// Accepted --- 92ms 67.75%
let permArr = [];
let usedChars = [];
const permute = function (nums) {
    permArr = [];
    usedChars = [];
    return helper(nums);
};

const helper = (input) => {
    let ch;
    for (let i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        helper(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
};

const main = () => {
    let nums = [1, 2, 3];
    console.log(permute(nums));
};

main()