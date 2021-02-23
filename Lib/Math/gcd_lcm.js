// 2/2/21 afternoon  2/21/21 modified

const lcm = (a, b) => (a / gcd(a, b)) * b;
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);