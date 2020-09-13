/**
 * 9.12 afternoon
 * https://leetcode.com/problems/permutations-ii/
 */


// Accepted --- 520ms 5.23%
let permArr = [];
let usedChars = [];
const permuteUnique = (nums) => {
    permArr = [];
    usedChars = [];
    let data = permute(nums);
    return removeDuplicatesMultiArray(data);
};

const permute = (input) => {
    let ch;
    for (let i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
};

const removeDuplicatesMultiArray = (arr) => {
    return arr.map(JSON.stringify).reverse().filter((item, index, arr) => {
        return arr.indexOf(item, index + 1) === -1;
    }).reverse().map(JSON.parse);
};

const main = () => {
    let nums = [1, 1, 2];
    let debug1 = [1];
    console.log(permuteUnique(nums));
    console.log(permuteUnique(debug1));
};

main()