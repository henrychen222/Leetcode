/**
 * 6.5 evening
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 */

// not work
const addToArrayForm = (A, K) => {
    kArr = K.toString().split("").map(x => Number(x));
    // console.log(kArr);
    // console.log(A);
    let sum = 0;
    for (let i = A.length - 1; i >= kArr.length; i--) {
        // console.log(A[i]);
        // console.log(kArr[i - kArr.length]);
        let each = (A[i] + kArr[i - kArr.length]) * (10 ** (A.length - i - 1));
        // console.log(each);
        sum += each;
    }
    console.log(sum);
    for (let i = A.length - kArr.length - 1; i >= 0; i--) {
        let each = (A[i]) * (10 ** (A.length - i - 1));
        sum += each;
    }
    return sum;
};

// not work, length > 16 Number() will all round to 0
// https://stackoverflow.com/questions/1379934/large-numbers-erroneously-rounded-in-javascript
const addToArrayForm1 = (A, K) => {
    AStr = A.join("");
    console.log(AStr);
    ANumber = Number(AStr);
    console.log(ANumber);
    Aarr = ANumber.toString().split("").map(x => Number(x));
    console.log(Aarr);
    Aarr.splice(16, Aarr.length);
    console.log(Aarr);

    // return (Number(A.join("")) + Number(K)).toString().split("").map(x => Number(x));
};

const main = () => {
    let A = [1, 2, 0, 0],
        K = 34;
    let A2 = [2, 7, 4],
        K2 = 181;
    let A3 = [2, 1, 5],
        K3 = 806;
    let A4 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        K4 = 1;
    let A_debug1 = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
        K_debug1 = 516;
    console.log(addToArrayForm(A, K));
    // console.log(addToArrayForm(A2, K2));
    // console.log(addToArrayForm(A3, K3));
    // console.log(addToArrayForm(A4, K4));
    // console.log(addToArrayForm(A_debug1, K_debug1));
};

main()