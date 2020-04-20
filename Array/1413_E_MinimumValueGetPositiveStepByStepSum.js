/**
 * 4.18 night
 * 4.19 night
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 */

// const minStartValue_self_write = (nums) => {
//     let startValue = 1; // an initial positive value
//     for (let i = 0; i< nums.length; i++) {
//         let next = startValue + nums[i];
//         if (next < 1) {
//            startValue++;
//            continue;
//         }
//     }
//     return startValue
// };

/**
 * https://zxi.mytechroad.com/blog/algorithms/array/leetcode-1413-minimum-value-to-get-positive-step-by-step-sum/
 * Find the minimum prefix sum, ans = – min(prefix_sum, 0) + 1
 * 
 * Accepted --- 88ms 33.7 MB 25.93%
 */
const minStartValue = (nums) => {
    let min_sum = 0;
    let sum = 0;
    for (const i of nums) {
        sum += i;  // each step
        min_sum = Math.min(min_sum, sum);
    }
    return -min_sum + 1;
};

/**
 * https://github.com/fishercoder1534/Leetcode/blob/master/src/main/java/com/fishercoder/solutions/_1413.java
 * 
 * Accepted --- 88ms 33.9 MB 25.93%
 */
const minStartValue2 = (nums) => {
    let min_sum = Number.MAX_VALUE;
    let sum = 0;
    for (const i of nums) {
        sum += i;
        min_sum = Math.min(min_sum, sum);
    }
    return min_sum > 0 ? 1 : Math.abs(min_sum) + 1;
};

const main = () => {
    let nums = [-3, 2, -3, 4, 2];
    let nums2 = [1, 2];
    let nums3 = [1, -2, -3]
    console.log(minStartValue(nums)); // 5
    console.log(minStartValue(nums2)); // 1
    console.log(minStartValue(nums3)); // 5

    console.log("")
    console.log(minStartValue2(nums));
    console.log(minStartValue2(nums2));
    console.log(minStartValue2(nums3));

    // console.log(minStartValue_self_write(nums))

};

main()