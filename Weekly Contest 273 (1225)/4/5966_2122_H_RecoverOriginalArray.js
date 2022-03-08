/**
 * 12/25/21 evening
 * https://leetcode.com/contest/weekly-contest-273/problems/recover-the-original-array/
 */

const pr = console.log;

// WA
const recoverArray = (a) => {
   let n = a.length, half = n / 2, res = [];
   a.sort((x, y) => x - y);
   // pr(a);
   for (let i = 0, j = half; i < half; i++, j++) {
       let mid = a[i] + a[j] >> 1;
       res.push(mid);
   }
   return res;
};

const main = () => {
    let nums = [2, 10, 6, 4, 8, 12];
    let nums2 = [1, 1, 3, 3];
    let nums3 = [5, 435];
    let debug1 = [11,6,3,4,8,7,8,7,9,8,9,10,10,2,1,9];
    pr(recoverArray(nums))
    pr(recoverArray(nums2))
    pr(recoverArray(nums3))
    pr(recoverArray(debug1)) // [2,3,7,8,8,9,9,10]
};

main()