/**
 * 6.24 evneing
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * 
 * refer 941
 */

// Accepted --- 68ms 36.5MB 44.44%
const peakIndexInMountainArray = (A) => {
    for (let i = 0; i < A.length; i++) {
        if (A[i - 1] > A[i - 2] && A[i - 1] > A[i]) {
            return i - 1;
        }
    }
};

const main = () => {
    let A = [0, 1, 0];
    let A2 = [0, 2, 1, 0];
    console.log(peakIndexInMountainArray(A));
    console.log(peakIndexInMountainArray(A2));
};

main()