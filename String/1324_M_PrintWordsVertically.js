/**
 * 7.23 evening
 * https://leetcode.com/problems/print-words-vertically/
 */

// Accepted --- 68ms 36.8MB 62.67%
const printVertically2 = (s) => {
    let arr = s.split(" ");
    let maxLen = Math.max.apply(Math, [...arr].map(x => x.length));
    let data = [];
    for (const a of arr) {
        let str = a;
        for (let i = 1; i <= maxLen - a.length; i++) {
            str += ' ';
        }
        data.push(str);
    }
    let res = [];
    for (let i = 0; i <= maxLen - 1; i++) {
        let vertical = '';
        for (const d of data) {
            vertical += d[i];
        }
        vertical = vertical.trimRight();
        res.push(vertical);
    }
    return res;
};

// Accepted --- 76ms 36.8MB 25.33%
const printVertically = (s) => {
    let arr = s.split(" ");
    // console.log(arr);
    let maxLen = Math.max.apply(Math, [...arr].map(x => x.length));
    let data = [];
    for (const a of arr) {
        let str = a;
        for (let i = 1; i <= maxLen - a.length; i++) {
            str += ' ';
        }
        data.push(str);
    }
    // console.log(data);
    let res = [];
    for (let i = 0; i <= maxLen - 1; i++) {
        let vertical = '';
        for (const d of data) {
            vertical += d[i];
        }
        vertical = vertical.replace(/\s+$/, '');
        res.push(vertical);
    }
    return res;
};

const main = () => {
    let s = "HOW ARE YOU";
    let s2 = "TO BE OR NOT TO BE";
    let s3 = "CONTEST IS COMING";
    console.log(printVertically(s));
    console.log(printVertically(s2));
    console.log(printVertically(s3));

    console.log("");
    console.log(printVertically2(s));
    console.log(printVertically2(s2));
    console.log(printVertically2(s3));
};

main()