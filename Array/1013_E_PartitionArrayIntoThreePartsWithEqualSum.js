/**
 * 6.8 evening
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 */

// need to fix
const canThreePartsEqualSum = (A) => {
    const total = calculate(A);
    let sum1 = 0;
    for (let i = 0; i < A.length; i++) {
        sum1 += A[i];
        console.log(A[i]);
        // console.log(sum1)
        for (let j = i + 1; j < A.length; j++) {
            let sum2 = 0;
            sum2 += A[j];
            // console.log(sum2);
            let sum3 = total - sum1 - sum2;
            if (i + 1 < j && sum1 == sum2 && sum2 == sum3) {
                return true;
            }
        }
    }
    return false;
};

// time limit exceed, 50/55 (76ms -> 60ms)
const canThreePartsEqualSum1 = (A) => {
    const total = calculate(A);
    for (let i = 0; i < A.length; i++) {
        let sum1 = calculate(A.slice(0, i + 1));
        for (let j = i + 1; j < A.length; j++) {
            let sum2 = calculate(A.slice(i + 1, j));
            if (i + 1 < j && sum1 == sum2) {
                // let sum3 = calculate(A.slice(j, A.length));
                sum3 = total - sum1 - sum2;
                if (sum2 == sum3) {
                    // console.log(sum1);
                    // console.log(sum2);
                    // console.log(sum3);
                    return true;
                }
            }
        }
    }
    return false;
};

const calculate = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    return sum;
};

const main = () => {
    let A = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
    let A2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
    let A3 = A = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4];
    let debug1 = [18, 12, -18, 18, -19, -1, 10, 10];
    console.log(canThreePartsEqualSum(A)); // true
    // console.log(canThreePartsEqualSum(A2)); // false
    // console.log(canThreePartsEqualSum(A3)); // true
    // console.log(canThreePartsEqualSum(debug1)); // true
};

main()