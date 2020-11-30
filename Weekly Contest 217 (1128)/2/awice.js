// 11.28 evenning
// reference: https://leetcode.com/problems/find-the-most-competitive-subsequence/discuss/952786/JavaC%2B%2BPython-One-Pass-Stack-Solution

// Accepted --- 224ms
const mostCompetitive = (nums, k) => {
    let n = nums.length;
    let stack = [];
    let remove = n - k;
    for (const num of nums) {
        // console.log(stack, remove);
        while (num < stack[stack.length - 1] && remove) {
            remove--;
            stack.pop();
        }
        stack.push(num);
    }
    // console.log(stack);
    while (stack.length > k) {
        stack.pop();
    }
    return stack;
};

// Accepted --- 304ms
const mostCompetitive_origin = (nums, k) => {
    let n = nums.length;
    let stack = [];
    let remove = n - k;
    for (const num of nums) {
        while (stack && num < stack[stack.length - 1] && remove) {
            remove--;
            stack.pop();
        }
        stack.push(num);
    }
    while (stack.length > k) {
        stack.pop();
    }
    return stack;
};

const main = () => {
    let nums = [3, 5, 2, 6], k = 2;
    let nums2 = [2, 4, 3, 3, 5, 4, 9, 6], k2 = 4;
    let nums_debug1 = [84, 10, 71, 23, 66, 61, 62, 64, 34, 41, 80, 25, 91, 43, 4, 75, 65, 13, 37, 41, 46, 90, 55, 8, 85, 61, 95, 71], k_debug1 = 24;
    let nums_debug2 = [71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2], k_debug2 = 3;
    // console.log(mostCompetitive(nums, k));
    // console.log(mostCompetitive(nums2, k2));
    console.log(mostCompetitive(nums_debug1, k_debug1));
    // console.log(mostCompetitive(nums_debug2, k_debug2)); // [8,80,2]
};

main()