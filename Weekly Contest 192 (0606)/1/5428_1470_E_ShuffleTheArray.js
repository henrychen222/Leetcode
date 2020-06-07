/**
 * 6.6 evening
 * https://leetcode.com/contest/weekly-contest-192/problems/shuffle-the-array/
 */
const shuffle = (nums, n) => {
    let x = [];
    let y = [];
    let res = [];
    for (let i = 0; i < n; i++) {
        x.push(nums[i]);
    }
    for (let i = n; i < nums.length; i++) {
       y.push(nums[i]);
    }
    // console.log(x);
    // console.log(y);
    for (let i = 0; i < x.length; i++) {
       res.push(x[i]);
       res.push(y[i]);
    }
    return res;
};


const main = () => {
   let nums = [2,5,1,3,4,7], n = 3;
   let nums2 = [1,2,3,4,4,3,2,1], n2 = 4;
   let nums3 = [1,1,2,2], n3 = 2;
   console.log(shuffle(nums, n));
   console.log(shuffle(nums2, n2));
   console.log(shuffle(nums3, n3));
};

main()