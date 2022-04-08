/*
Example Problems:
https://leetcode.com/problems/minimum-time-to-complete-trips/
https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
https://leetcode.com/problems/koko-eating-bananas/
https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/
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