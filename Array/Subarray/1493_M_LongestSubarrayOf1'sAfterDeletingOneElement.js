/**
 * 7.19 afternoon
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 */

// need to fix
const longestSubarray = (nums) => {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        // let tmp = [...nums].splice(i, 1);
        let tmp = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
        console.log(tmp)
        for (let j = 0; j < tmp.length; j++) {
            if (tmp[j] == 1) {
                for (let k = j + 1; k < tmp.length; j++) {
                    // console.log("1111")
                    // console.log(tmp.slice(j, k));
                    // let one = [...new Set(tmp.slice(j, k))]
                    // if (one.length == 1 && one[0] == 1) {
                    //     max = Math.max(max, k - j + 1);
                    // }

                    if (tmp[k] == 0) {
                        console.log("1111")
                        max = Math.max(max, k - j + 1);
                        break;
                    }
                    
                }
            }
        }
    }
    return max;
};

const main = () => {
    let nums = [1, 1, 0, 1];
    let nums2 = [0, 1, 1, 1, 0, 1, 1, 0, 1];
    let nums3 = [1, 1, 1];
    console.log(longestSubarray(nums));
    // console.log(longestSubarray(nums2))
    // console.log(longestSubarray(nums3))
}

main()