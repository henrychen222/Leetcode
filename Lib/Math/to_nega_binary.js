// 2/2/21 afternoon

// convert to base -2
// reference: https://en.wikipedia.org/wiki/Negative_base#Calculation
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