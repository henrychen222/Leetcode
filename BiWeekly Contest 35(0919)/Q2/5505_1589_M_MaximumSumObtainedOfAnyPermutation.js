/**
 * 9.19 morning
 * https://leetcode.com/contest/biweekly-contest-35/problems/maximum-sum-obtained-of-any-permutation/
 */


// time limit
let permArr = [];
let usedChars = [];
const maxSumRangeQuery = (nums, requests) => {
    permArr = [];
    usedChars = [];
    let data = permute(nums);
    return operate(data, requests);
};

const operate = (data, requests) => {
    let max = 0;
    for (const d of data) {
        let res = 0;
        for (const r of requests) {
            let tmp = d.slice(r[0], r[1] + 1);
            let sum = getSum(tmp);
            res += sum;
        }
        max = Math.max(max, res);
    }
    return max;
};

const getSum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
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

const main = () => {
    let nums = [1, 2, 3, 4, 5], requests = [[1, 3], [0, 1]];
    let nums2 = [1, 2, 3, 4, 5, 6], requests2 = [[0, 1]];
    let nums3 = [1, 2, 3, 4, 5, 10], requests3 = [[0, 2], [1, 3], [1, 1]];
    console.log(maxSumRangeQuery(nums, requests));
    console.log(maxSumRangeQuery(nums2, requests2));
    console.log(maxSumRangeQuery(nums3, requests3));
};

main()

