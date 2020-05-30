/**
 * 5.29 evening
 * https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
 */

/**
 * https://www.acwing.com/file_system/file/content/whole/index/content/490621/
 * Accepted --- 76ms 35.9MB 54.04%
 * 
 * 从尽可能大的斐波那契数字开始往下来凑k
 */
const findMinFibonacciNumbers_acwing = (k) => {
    let x = 1;
    let y = 1;
    while (x + y <= k) {
        let t = x + y;
        x = y;
        y = t;
    }
    let ans = 0;
    while (k > 0) {
        if (k >= y) {
            k -= y;
            ans++;
        }
        let t = y - x;
        y = x;
        x = t;
    }
    return ans;
};

/**
 * https://zxi.mytechroad.com/blog/greedy/leetcode-1414-find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
 * Accepted --- 72ms 35.8MB 60.10%
 */
const findMinFibonacciNumbers_huahua = (k) => {
    if (k == 0) return 0;
    let f1 = 1;
    let f2 = 1;
    while (f2 <= k) {
        let tmp = f1;
        f1 = f2;
        f2 = tmp;
        f2 += f1;
    }
    return 1 + findMinFibonacciNumbers_huahua(k - f1);
};

// Accepted --- 88ms 35.8MB 40.91%
const findMinFibonacciNumbers_huahua2 = (k) => {
    let f1 = 1;
    let f2 = 1;
    let ans = 1;
    while (f2 <= k) {
        // swap
        let tmp = f1;
        f1 = f2;
        f2 = tmp;
        f2 += f1;
    }
    k -= f1;
    while (k) {
        if (k >= f1) {
            k -= f1;
            ans += 1;
        }
        f2 -= f1;
        // swap
        let tmp = f1;
        f1 = f2;
        f2 = tmp;
    }
    return ans;
};

const main = () => {
    let k = 7;
    let k2 = 10;
    let k3 = 19;

    console.log(findMinFibonacciNumbers_acwing(k));
    console.log(findMinFibonacciNumbers_acwing(k2));
    console.log(findMinFibonacciNumbers_acwing(k3));

    console.log("");
    console.log(findMinFibonacciNumbers_huahua(k));
    console.log(findMinFibonacciNumbers_huahua(k2));
    console.log(findMinFibonacciNumbers_huahua(k3));

    console.log("");
    console.log(findMinFibonacciNumbers_huahua2(k));
    console.log(findMinFibonacciNumbers_huahua2(k2));
    console.log(findMinFibonacciNumbers_huahua2(k3));
};

main()