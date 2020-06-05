/**
 * 6.4 night (first time did in 08/2018)
 * https://leetcode.com/problems/merge-sorted-array/
 * 
 * NOTE: @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Accepted --- 72ms 34MB 22.62%
const merge = (nums1, m, nums2, n) => {
    let res = nums1.slice(0, m).concat(nums2.slice(0, n));
    res = res.sort((a, b) => a - b);
    nums1.splice(0, nums1.length);
    for (const i of res) {
        nums1.push(i);
    }
    console.log(nums1)
};

// wrong
const merge2 = (nums1, m, nums2, n) => {
    const a = nums1.length;
    const b = nums2.length;
    let res = nums1.concat(nums2);
    res = res.sort((a, b) => a - b);
    // console.log(res);

    let zeroToRemove = a + b - m - n;
    console.log(zeroToRemove);
    for (let i = 0; i < res.length; i++) {
        if (zeroToRemove == 0) break;
        if (res[i] == '0') {
            res.splice(i, 1);
            console.log(res);
            zeroToRemove--;
        }
    }

    // console.log(res);
    nums1.splice(0, nums1.length);
    for (const i of res) {
        nums1.push(res[i]);
    }
    // console.log(nums1)
};

// wrong 18 / 59 test cases passed
const merge1 = (nums1, m, nums2, n) => {
    let res = nums1.concat(nums2);
    res = res.sort((a, b) => a - b);
    res = res.slice(nums1.length + nums2.length - m - n, res.length);
    nums1.splice(0, nums1.length);
    for (let i = 0; i < res.length; i++) {
        nums1.push(res[i]);
    }
};

const main = () => {
    let nums1 = [1, 2, 3, 0, 0, 0],
        m = 3,
        nums2 = [2, 5, 6],
        n = 3
    let num1_debug1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
    m_debug1 = 6
    num2_debug1 = [1, 2, 2];
    n_debug1 = 3
    merge(nums1, m, nums2, n);
    console.log("")
    merge(num1_debug1, m_debug1, num2_debug1, n_debug1); // [-1,0,0,1,2,2,3,3,3]
};

main()