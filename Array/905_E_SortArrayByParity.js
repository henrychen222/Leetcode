/**
 * 6.3 night
 * https://leetcode.com/problems/sort-array-by-parity/
 */

// Accepted --- 92ms 39.5MB 30.37%
const sortArrayByParity = (A) => {
    let even = [];
    let odd = [];
    for (const i of A) {
        if (i % 2 == 0) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }
    return even.concat(odd);;
};

const main = () => {
    let A = [3, 1, 2, 4];
    console.log(sortArrayByParity(A));
};

main()