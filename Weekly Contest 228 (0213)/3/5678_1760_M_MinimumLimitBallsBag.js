/**
 * 2.13 evening
 * https://leetcode.com/contest/weekly-contest-228/problems/minimum-limit-of-balls-in-a-bag/
 */

// WA
const minimumSize = (a, mo) => {
    let n = a.length;
    if (n == 1) return a / (mo + 1);
    while (mo) {
        a.sort((x, y) => y - x);
        let mx = a[0];
        let smx = a[1];
        a.push(mx - smx);
        a[0] -= smx;
        mo--;
        console.log(a);
    }
    return Math.max.apply(Math, a);
};

const main = () => {
    let nums = [9], maxOperations = 2;
    let nums2 = [2, 4, 8, 2], maxOperations2 = 4;
    let nums3 = [7, 17], maxOperations3 = 2;
    // console.log(minimumSize(nums, maxOperations));
    // console.log(minimumSize(nums2, maxOperations2));
    console.log(minimumSize(nums3, maxOperations3));
};

main()