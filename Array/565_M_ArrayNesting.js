/**
 * 7.18 night
 * https://leetcode.com/problems/array-nesting/
 */

// Time Limit 853 / 856
const arrayNesting3 = (A) => {
    let data = [];
    for (let i = 0; i < A.length; i++) {
        let res = [];
        res.push(A[i]);
        let next = A[i];
        while (res.indexOf(A[next]) == -1) {
            res.push(A[next]);
            next = A[next];
        }
        data.push(res.length);
    }
    return data.sort((a, b) => b - a)[0];
};

// Time Limit 853 / 856
const arrayNesting2 = (A) => {
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        let res = [];
        res.push(A[i]);
        let next = A[i];
        while (res.indexOf(A[next]) == -1) {
            res.push(A[next]);
            next = A[next];
        }
        max = Math.max(max, res.length);
    }
    return max;
};

// Time Limit 853 / 856
const arrayNesting1 = (nums) => {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, getSet(nums, i).length);
    }
    return max;
};

const getSet = (A, idx) => {
    let res = [];
    res.push(A[idx]);
    let next = A[idx];
    while (res.indexOf(A[next]) == -1) {
        res.push(A[next]);
        next = A[next];
    }
    return res;
};

const main = () => {
    let nums = [5, 4, 0, 3, 1, 6, 2];
    console.log(arrayNesting(nums));
};

main()