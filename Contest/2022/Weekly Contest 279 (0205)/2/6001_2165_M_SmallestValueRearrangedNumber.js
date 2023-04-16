/**
 * 02/05/21 evening
 * https://leetcode.com/contest/weekly-contest-279/problems/smallest-value-of-the-rearranged-number/
 */

const pr = console.log;

// Accepted
const smallestNumber = (num) => {
    if (num == 0) return 0;
    let s = num + '', d = [], zero = 0, res = '';
    if (num < 0) {
        s = s.slice(1);
        res += '-';
    }
    for (const c of s) {
        let x = c - '0';
        x != 0 ? d.push(x) : zero++;
    }
    // pr(d, zero)
    if (num < 0) {
        d.sort((x, y) => y - x);
        for (let i = 0; i < d.length; i++) res += d[i] + '';
        while(zero--) res += '0';
    } else {
        d.sort((x, y) => x - y);
        res += d[0] + ''
        while(zero--) res += '0';
        for (let i = 1; i < d.length; i++) res += d[i] + '';
    }
    return res;
};

const main = () => {
    let num = 310;
    let num2 = -7605;
    let test1 = 0;
    pr(smallestNumber(num))
    pr(smallestNumber(num2))
    pr(smallestNumber(test1))
};

main()