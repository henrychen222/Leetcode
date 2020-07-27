/**
 * 7.25 morning
 * https://leetcode.com/contest/biweekly-contest-31/problems/number-of-sub-arrays-with-odd-sum/
 */

// Accepted 
// reference: https://www.geeksforgeeks.org/number-of-subarrays-with-odd-sum/
const numOfSubarrays = (arr) => {
    let n = arr.length;
    let tmp = [1, 0];
    let res = 0, val = 0;
    for (let i = 0; i <= n - 1; i++) {
        val = ((val + arr[i]) % 2 + 2) % 2;
        tmp[val]++;
    }
    res = tmp[0] * tmp[1];
    return res % 1000000007;
};

const numOfSubarrays2 = (arr) => {
    let n = arr.length;
    let odd = 0;  // stores number of odd numbers upto ith index
    let cntOdd = 0; // stores number of odd sum subarrays starting at ith index 
    let res = 0;
    for (let i = 0; i < n; i++) {// First find number of odd sum subarrays starting at 0th index 
        if (arr[i] & 1) odd = !odd;
        if (odd) cntOdd++;
    }
    for (let i = 0; i < n; i++) {// Find number of odd sum subarrays starting at ith index and add to result  
        res += cntOdd;
        if (arr[i] & 1) cntOdd = n - i - cntOdd;
    }
    return res % 1000000007;
};

// Time Limit
const numOfSubarrays1 = (arr) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        let j = i + 1;
        while (j <= arr.length) {
            if (sum % 2 != 0) cnt++;
            sum += arr[j];
            j++;
        }
    }
    return cnt % 1000000007;
};

const main = () => {
    let arr = [1, 3, 5];
    let arr2 = [2, 4, 6];
    let arr3 = [1, 2, 3, 4, 5, 6, 7];
    let arr4 = [100, 100, 99, 99];
    let arr5 = [7];
    console.log(numOfSubarrays(arr)); // 4
    console.log(numOfSubarrays(arr2)); // 0
    console.log(numOfSubarrays(arr3)); // 16
    console.log(numOfSubarrays(arr4)); // 4
    console.log(numOfSubarrays(arr5)); // 1

    console.log("");
    console.log(numOfSubarrays2(arr)); // 4
    console.log(numOfSubarrays2(arr2)); // 0
    console.log(numOfSubarrays2(arr3)); // 16
    console.log(numOfSubarrays2(arr4)); // 4
    console.log(numOfSubarrays2(arr5)); // 1
};

main()