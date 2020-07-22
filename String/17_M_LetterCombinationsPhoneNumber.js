/**
 * 7.21 night
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

// Accepted --- 72ms 36.6MB 44.06%
const letterCombinations_refine = (digits) => {
    if (digits.length == 0) return [];
    let two = ['a', 'b', 'c'];
    let three = ['d', 'e', 'f'];
    let four = ['g', 'h', 'i'];
    let five = ['j', 'k', 'l'];
    let six = ['m', 'n', 'o'];
    let seven = ['p', 'q', 'r', 's'];
    let eight = ['t', 'u', 'v'];
    let nine = ['w', 'x', 'y', 'z'];
    let data = [];
    for (const d of digits) {
        if (d == '2') {
            data.push(two);
        } else if (d == '3') {
            data.push(three);
        } else if (d == '4') {
            data.push(four);
        } else if (d == '4') {
            data.push(four);
        } else if (d == '5') {
            data.push(five);
        } else if (d == '6') {
            data.push(six);
        } else if (d == '7') {
            data.push(seven);
        } else if (d == '8') {
            data.push(eight);
        } else {
            data.push(nine);
        }
    }
    if (data.length == 1) return data[0];
    return data.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), [])).map(x => x.join(""));
};

// Accepted --- 84ms 37MB 22.39%
const letterCombinations = (digits) => {
    if (digits.length == 0) return [];
    let two = ['a', 'b', 'c'];
    let three = ['d', 'e', 'f'];
    let four = ['g', 'h', 'i'];
    let five = ['j', 'k', 'l'];
    let six = ['m', 'n', 'o'];
    let seven = ['p', 'q', 'r', 's'];
    let eight = ['t', 'u', 'v'];
    let nine = ['w', 'x', 'y', 'z'];
    let data = [];
    for (const d of digits) {
        if (d == '2') {
            data.push(two);
        } else if (d == '3') {
            data.push(three);
        } else if (d == '4') {
            data.push(four);
        } else if (d == '4') {
            data.push(four);
        } else if (d == '5') {
            data.push(five);
        } else if (d == '6') {
            data.push(six);
        } else if (d == '7') {
            data.push(seven);
        } else if (d == '8') {
            data.push(eight);
        } else {
            data.push(nine);
        }
    }
    if (data.length == 1) return data[0];
    return getCombinationsMultiArr(data);
};

const getCombinationsMultiArr = (arr) => {
    let res = arr.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
    return res.map(x => x.join(""));
};

const main = () => {
    let digits = "23";
    let debug1 = "";
    let debug2 = "2";
    console.log(letterCombinations(digits));
    console.log(letterCombinations(debug1));
    console.log(letterCombinations(debug2)); // ["a","b","c"]

    console.log("");
    console.log(letterCombinations_refine(digits));
    console.log(letterCombinations_refine(debug1));
    console.log(letterCombinations_refine(debug2));
};

main()