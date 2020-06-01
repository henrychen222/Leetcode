/**
 * 5.31 evening
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 */

// Accepted --- 136ms 44.8MB 15.37%
const sortArrayByParityII = (A) => {
    let odd = [];
    let even = [];
    for (const i of A) {
        if (i % 2 == 0) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }
    // console.log(odd);
    // console.log(even);
    for (let i = 0; i < odd.length; i++) {
        insert(even, 2 * i + 1, odd[i]);
    }
    // console.log(even);
    return even;
};

const insert = (arr, index, item) => {
    arr.splice(index, 0, item);
};

const main = () => {
    let A = [4, 2, 5, 7];
    console.log(sortArrayByParityII(A));
};

main()