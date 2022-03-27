/*
Example Problems:
https://leetcode.com/problems/minimum-time-to-complete-trips/
*/

//////////////////////////// Binary Seach Template ///////////
const solve = () => {
    return BinarySearch(0, Number.MAX_SAFE_INTEGER)
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = () => {};