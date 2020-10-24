// 10.19 morning
const combination = (m, n) => {
    return factorial(m, n) / factorial(n, n); // return BigInt
}

const factorial = (m, n) => {
    let num = BigInt(1);
    let cnt = 0;
    for (let i = BigInt(m); i > 0; i--) {
        if (cnt == n) break;
        num = num * i;
        cnt++;
    }
    return num;
};