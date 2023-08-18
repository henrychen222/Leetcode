/*
 * 06/24/23 evening
 * https://leetcode.com/contest/weekly-contest-351/problems/minimum-operations-to-make-the-integer-zero/
 */

const pr = console.log;

// issue bitCount1
const bitCount1 = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };
const bitCount = (n) => { let s = n.toString(2), res = 0; for (const c of s) { if (c == '1') res++; } return res; };

const makeTheIntegerZero2 = (x, y) => {
    for (let cnt = 0; cnt < 40; cnt++) {
        let sum = x - cnt * y;
        if (sum < 0) break;
        let min = bitCount(sum), max = sum
        pr(sum, min, max)
        if (min <= cnt && cnt <= max) return cnt;
    }
    return -1;
};

/////////////////////////////////////////////
/*
x - sum - cnt * y = 0;
sum = x - cnt * y

5 = 3 - 1 * (-2)    9 = 1 + 4 + 4
*/
const makeTheIntegerZero = (x, y) => {
    for (let cnt = 0; cnt < 40; cnt++) {
        let sum = x - cnt * y;
        if (sum < 0) break;
        let f = SumOfPower2Factorization(sum), min= f.size, max = sum;
        // pr(cnt, sum, f)
        if (min <= cnt && cnt <= max) return cnt;
    }
    return -1;
};

const SumOfPower2Factorization = (x) => {
    let i = 0, bit = 2 ** i, v = [], res = new Set(), cur = x;
    while (bit <= x) {
        v.push(bit);
        i++;
        bit = 2 ** i;
    }
    while (cur != 0) {
        let idx = v.findIndex((element) => element > cur);
        // pr(x, cur, idx, v)
        if (idx === -1) {
            idx = v.length - 1;
        } else {
            idx--;
        }
        res.add(idx);
        cur -= v[idx];
    }
    // pr(res, isSumOfPower2Factorization(res, x));
    return res;
};

const main = () => {
    let x = 3, y = -2;
    let x2 = 5, y2 = 7;
    let x_debug1 = 112577768, y_debug1 = -501662198;
    pr(makeTheIntegerZero(x, y))
    pr(makeTheIntegerZero(x2, y2))
    pr(makeTheIntegerZero(x_debug1, y_debug1)) // 16
};

const isSumOfPower2Factorization = (se, x) => {
    let sum = 0;
    for (const i of se) sum += 2 ** i;
    // pr(sum, x)
    return sum == x;
};

main()

// SumOfPower2Factorization(12345)
// SumOfPower2Factorization(71307);
// SumOfPower2Factorization(1213);
// SumOfPower2Factorization(29);
// SumOfPower2Factorization(100);
// SumOfPower2Factorization(99);

// for (let i = 1; i <= 50; i++) SumOfPower2Factorization(i)

// pr(bitCount1(7135848540), bitCount(7135848540)) // 14 15  answer is 15