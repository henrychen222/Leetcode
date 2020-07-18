/**
 * 7.17 afternoon
 * https://leetcode.com/problems/valid-triangle-number/
 */

// Accepted --- 1184ms 37.4MB 6.87%
const triangleNumber = (nums) => {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isTriangle(nums[i], nums[j], nums[k])) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

const isTriangle = (a, b, c) => {
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return true;
    }
    return false;
};


const main = () => {
    let nums = [2, 2, 3, 4];
    console.log(triangleNumber(nums));

};

main()