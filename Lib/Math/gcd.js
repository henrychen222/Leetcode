// 2/2/21 afternoon

const gcd = (a, b) => {
    return b == 0 ? a : gcd(b, a % b);
};