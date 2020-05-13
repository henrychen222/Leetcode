/**
 * 5.12 night
 * https://leetcode.com/problems/score-after-flipping-matrix/
 */

/**
 * https://www.cnblogs.com/grandyang/p/10674440.html
 * Accepted --- 56ms 33.8MB 69.70%
 */
const matrixScore_cnblog = (A) => {
    let m = A.length; // row  m = 3
    let n = A[0].length; // col n = 4
    let res = (1 << (n - 1)) * m;
    for (let j = 1; j < n; j++) {
        let count = 0;
        for (let i = 0; i < m; i++) {
            count += (A[i][j] == A[i][0])
        }
        res += Math.max(count, m - count) * (1 << (n - 1 - j));
    }
    return res;
};

/**
 * https://blog.csdn.net/fuxuemingzhu/article/details/81118328
 * Accepted --- 52ms 33.9MB 90.91%
 */
const matrixScore_csdn = (A) => {
    let m = A.length;
    let n = A[0].length;
    for (let i = 0; i < m; i++)
        if (A[i][0]) {
            for (let j = 0; j < n; j++) {
                A[i][j] = 1 - A[i][j];
            }
        }
    let res = 0;
    for (let j = 0; j < n; j++) {
        let count = 0;
        for (let i = 0; i < m; i++) {
            if (A[i][j]) {
                count++;
            }
        }
        res += (1 << (n - 1 - j)) * Math.max(count, m - count);
    }
    return res;
};

/**
 * https://www.acwing.com/solution/LeetCode/content/807/
 * Accepted --- 44ms 34.8MB 100.00%
 */
const matrixScore_acwing = (A) => {
    let n = A.length;
    let m = A[0].length;
    for (let i = 0; i < n; i++)
        if (A[i][0] == 0) {
            for (let j = 0; j < m; j++) {
                A[i][j] = 1 - A[i][j];
            }
        }
    for (let j = 1; j < m; j++) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            count += A[i][j];
        }
        if (count <= n / 2) {
            for (let i = 0; i < n; i++) {
                A[i][j] = 1 - A[i][j];
            }
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++) {
            res += A[i][j] << (m - j - 1);
        }
    return res;
};

const main = () => {
    let A = [
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0]
    ];
    console.log(matrixScore_cnblog(A));
    console.log(matrixScore_csdn(A));
    console.log(matrixScore_acwing(A));

    console.log("\nTesting Bit wise << ")
    TestBitWise();
};

const TestBitWise = () => {
    console.log(9 << 2); // 1001 (9) -> 100100 (36)
    console.log(5 << 2) // 0101 (5) -> 10100 (20)
}

main()