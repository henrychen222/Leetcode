/**
 * 6.21 night
 * https://leetcode.com/problems/unique-number-of-occurrences/
 */

// Accpted --- 68ms	35.4MB 46.52%
const uniqueOccurrences = (arr) => {
    let element = [...new Set(arr)];
    let freq = [];
    for (const i of element) {
        let occ = getFrequency(arr, i);
        if (!freq.includes(occ)) {
            freq.push(occ);
        } else {
            return false;
        }
    }
    return true;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let arr = [1, 2, 2, 1, 1, 3];
    let arr2 = [1, 2];
    let arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
    console.log(uniqueOccurrences(arr));
    console.log(uniqueOccurrences(arr2));
    console.log(uniqueOccurrences(arr3));
};

main()