/**
 * 10.31 evening
 * https://leetcode.com/contest/weekly-contest-213/problems/check-array-formation-through-concatenation/
 */

// Accepted
// reference: https://www.geeksforgeeks.org/check-if-concatenation-of-any-permutation-of-given-list-of-arrays-generates-the-given-array/
const canFormArray = (arr, pieces) => {
    let m = new Map();
    for (let i = 0; i < arr.length; i++) {
        m.set(arr[i], i);
    }
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].length == 1 && m.has(pieces[i][0])) {
            continue;
        } else if (pieces[i].length > 1 && m.has(pieces[i][0])) {
            let idx = m.get(pieces[i][0]);
            idx++;
            if (idx >= arr.length) return false;
            for (let j = 1; j < pieces[i].length; j++) {
                if (arr[idx] == pieces[i][j]) {
                    idx++;
                    if (idx >= arr.length && j < pieces[i].length - 1) return false;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    return true;
};


const main = () => {
    let arr = [85], pieces = [[85]];
    let arr2 = [15, 88], pieces2 = [[88], [15]];
    let arr3 = [49, 18, 16], pieces3 = [[16, 18, 49]];
    let arr4 = [91, 4, 64, 78], pieces4 = [[78], [4, 64], [91]];
    let arr5 = [1, 3, 5, 7], pieces5 = [[2, 4, 6, 8]];
    console.log(canFormArray(arr, pieces));
    console.log(canFormArray(arr2, pieces2));
    console.log(canFormArray(arr3, pieces3));
    console.log(canFormArray(arr4, pieces4));
    console.log(canFormArray(arr5, pieces5));
};

main()