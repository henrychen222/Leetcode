// 02/26/21 from fix 923

const combination = (m, n) => {
    return factorial(m, n) / factorial(n, n); // return number
};

const factorial = (m, n) => {
    let num = 1;
    let cnt = 0;
    for (let i = m; i > 0; i--) {
        if (cnt == n) break;
        num *= i;
        cnt++;
    }
    return num;
};

const main = () => {
    console.log(combination(5, 2)); // 10
    console.log(combination(5, 3)); // 10
    console.log(combination(6, 4)); // 15
    console.log(combination(7, 4)); // 35
    console.log(factorial(7, 4)); // 840 Permutation
}

main();