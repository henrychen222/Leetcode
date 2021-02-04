/**
 * 2/2/21 morning
 * https://leetcode.com/problems/convert-to-base-2/
 */

// Accepted --- 72ms 100%
const baseNeg2 = (N) => {
    return ToNegabinary(BigInt(N));
};

const ToNegabinary = (num) => {
    let res = '';
    while (num != 0n) {
        let remainder = num % -2n;
        num /= -2n;
        if (remainder < 0n) {
            remainder += 2n;
            num++;
        }
        res = remainder.toString() + res;
    }
    return res.length == 0n ? '0' : res;
};

const main = () => {
    let N = 2;
    let N2 = 3;
    let N3 = 4;
    console.log(baseNeg2(N));
    console.log(baseNeg2(N2));
    console.log(baseNeg2(N3));
};

main()