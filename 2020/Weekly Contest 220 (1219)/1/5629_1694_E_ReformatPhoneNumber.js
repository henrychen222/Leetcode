/**
 * 12.19 evening
 * https://leetcode.com/contest/weekly-contest-220/problems/reformat-phone-number/
 */

// Accepted
const reformatNumber = (number) => {
    let s = '';
    for (const i of number) {
        if (i != ' ' && i != '-') {
            s += i;
        }
    }
    // console.log(s);
    let res = '';
    let n = s.length;
    let lastIdx;
    for (let i = 0; ; i += 3) {
        if (i >= n - 4) {
            lastIdx = i;
            break;
        }
        let tmp = s.slice(i, i + 3);
        res += tmp;
        res += '-';
    }
    // res = res.slice(0, res.length - 1);
    let last = s.slice(lastIdx);
    // console.log(res, lastIdx, last);
    if (last.length == 2 || last.length == 3) {
        res += last;
        return res;
    } else if (last.length == 4) {
        res += last.slice(0, 2);
        res += '-';
        res += last.slice(2);
        return res;
    }
};

const main = () => {
    let number = "1-23-45 6";
    let number2 = "123 4-567";
    let number3 = "123 4-5678";
    let number4 = "12";
    let number5 = "--17-5 229 35-39475 "
    console.log(reformatNumber(number));
    console.log(reformatNumber(number2));
    console.log(reformatNumber(number3));
    console.log(reformatNumber(number4));
    console.log(reformatNumber(number5));
};

main()