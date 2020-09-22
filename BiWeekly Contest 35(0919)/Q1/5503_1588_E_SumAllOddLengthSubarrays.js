/**
 * 9.19 morning
 * https://leetcode.com/contest/biweekly-contest-35/problems/sum-of-all-odd-length-subarrays/
 */

// Accepted
const sumOddLengthSubarrays = (arr) => {
    let n = arr.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let tmp = 0;
        for (let j = i; j < n; j+=2) {
            let sub = arr.slice(i, j + 1);
            // console.log(sub);
            tmp+=sum(sub);
        }
        res+= tmp;
    }
    return res;
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

const main = () => {
    let arr = [1,4,2,5,3];
    let arr2 = [1,2];
    let arr3 = [10,11,12];
    console.log(sumOddLengthSubarrays(arr));
    console.log(sumOddLengthSubarrays(arr2));
    console.log(sumOddLengthSubarrays(arr3));
};

main()