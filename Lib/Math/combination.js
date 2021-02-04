// 10.19 morning   2/2/21 update

/**
 * reference: 
 * https://blog.csdn.net/qq_27682041/article/details/72868870
 * http://www.12988.net/www/tool/jsq/cp.htm
 */

const combination = (m, n) => {
    return factorial(m, n) / factorial(n, n); // return BigInt
}

const factorial = (m, n) => {
    let num = 1n;
    let cnt = 0;
    for (let i = BigInt(m); i > 0; i--) {
        if (cnt == n) break;
        num *= i;
        cnt++;
    }
    return num;
};

const main = () => {
    console.log(combination(5, 2)); // 10n
    console.log(combination(5, 3)); // 10n
    console.log(combination(6, 4)); // 15n
    console.log(combination(7, 4)); // 35n
    console.log(factorial(7, 4)); // 840n  Permutation
}

main();

// console.log(1 == 1n);
// console.log(3n > 2);