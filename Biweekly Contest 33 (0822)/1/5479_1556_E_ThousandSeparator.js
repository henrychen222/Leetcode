/**
 * 8.22 morning
 * https://leetcode.com/contest/biweekly-contest-33/problems/thousand-separator/
 */

// Accepted
const thousandSeparator = (n) => {
    let s = n.toString();
    if (s.length < 3) {
        return s;
    }
    let data = [];
    let len = s.length - 1;
    for (let i = len; i >= 0; i -= 3) {
        let tmp = s.slice(i - 2, i + 1);
        if (tmp.length != 0) {
            data.unshift(tmp);
        }
    }
    let sAfter = data.join("");
    // console.log(sAfter, s)
    if (sAfter.length < s.length) {
        data.unshift(s.slice(0, s.length - sAfter.length));
    }
    // console.log(data)
    let res = data[0];
    for (let i = 1; i < data.length; i++) {
        res += '.';
        res += data[i];
    }
    return res;
};

const main = () => {
    let n = 987;
    let n2 = 1234;
    let n3 = 123456789
    let n4 = 0;
    let n5 = 123
    let debug1 = 23;
    console.log(thousandSeparator(n));
    console.log(thousandSeparator(n2));
    console.log(thousandSeparator(n3));
    console.log(thousandSeparator(n4));
    console.log(thousandSeparator(n5));
    console.log(thousandSeparator(debug1));
};

main()