/**
 * 8.6 night
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 */

// Accepted --- 128ms 44.9MB 75.88%	
const sumEvenAfterQueries_refine2 = (A, queries) => {
    let sum = A.reduce((acc, cur) => {
        if (cur % 2 == 0) return acc + cur;
        return acc;
    }, 0);
    let res = [];
    for (const q of queries) {
        let before = A[q[1]];
        A[q[1]] += q[0];
        let after = A[q[1]];
        if (before % 2 == 0) {
            if (after % 2 == 0) {
                sum = sum - before + after;
                res.push(sum);
            } else {
                sum -= before;
                res.push(sum);
            }
        } else {
            if (after % 2 == 0) {
                sum += after;
                res.push(sum);
            } else {
                res.push(sum);
            }
        }
    }
    return res;
};

// Accepted --- 132ms 44.8MB 72.94%
const sumEvenAfterQueries_refine = (A, queries) => {
    let sum = getEvenSum(A);
    let res = [];
    for (const q of queries) {
        let before = A[q[1]];
        A[q[1]] += q[0];
        let after = A[q[1]];
        if (before % 2 == 0) {
            if (after % 2 == 0) {
                sum = sum - before + after;
                res.push(sum);
            } else {
                sum -= before;
                res.push(sum);
            }
        } else {
            if (after % 2 == 0) {
                sum += after;
                res.push(sum);
            } else {
                res.push(sum);
            }
        }
    }
    return res;
};

// Accepted --- 9252ms 44.7MB 5.30%
const sumEvenAfterQueries = (A, queries) => {
    let res = [];
    for (const q of queries) {
        A[q[1]] += q[0];
        res.push(getEvenSum(A));
    }
    return res;
};

const getEvenSum = (arr) => {
    let sum = 0;
    for (const i of arr) {
        if (i % 2 == 0) sum += i;
    }
    return sum;
};

const main = () => {
    let A = [1, 2, 3, 4],
        queries = [
            [1, 0],
            [-3, 1],
            [-4, 0],
            [2, 3]
        ];
    console.log(sumEvenAfterQueries([...A], queries));
    console.log(sumEvenAfterQueries_refine([...A], queries));
    console.log(sumEvenAfterQueries_refine2([...A], queries));
};

main()