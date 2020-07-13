/**
 * 7.12 evening
 * https://leetcode.com/problems/counting-bits/
 */

// Accepted --- 188ms 49MB 5.25%
const countBits = (num) => {
    let res = [];
    for (let i = 0; i <= num; i++) {
        res.push(getFrequency(i.toString(2).split(""), '1'));
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

// Accepted --- 328ms 48.7MB 5.25%
const countBits2 = (num) => {
    let res = [];
    for (let i = 0; i <= num; i++) {
        let arr = i.toString(2).split("");
        arr.sort((a, b) => b - a);
        let cnt = 0;
        for (const i of arr) {
            if (i == '1') cnt++;
        }
        res.push(cnt);
    }
    return res;
};

// Accepted --- 460ms 47.9MB 5.25%
const countBits3 = (num) => {
    let res = [];
    for (let i = 0; i <= num; i++) {
        let arr = i.toString(2).split("");
        arr.sort((a, b) => b - a);
        let cnt = 0;
        if (arr.indexOf('0') == -1) {
            cnt = arr.length;
        } else {
            cnt = arr.indexOf('0');
        }
        res.push(cnt);
    }
    return res;
};

const main = () => {
    let num = 2;
    let num2 = 5;
    console.log(countBits(num));
    console.log(countBits(num2));

    console.log(countBits2(num));
    console.log(countBits2(num2));

    console.log(countBits3(num));
    console.log(countBits3(num2));
};

main()