/**
 * 7.16 night
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/
 */

// don't know
const minIncrementForUnique = (A) => {
    let element = [...new Set(A)];
    let duplicates = [];
    for (const e of element) {
        if (getFrequency(A, e) > 1) {
            duplicates.push(e);
        }
    }
    console.log(duplicates)
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let A = [1, 2, 2];
    let A2 = [3, 2, 1, 2, 1, 7];
    console.log(minIncrementForUnique(A));
    console.log(minIncrementForUnique(A2));
};

main()