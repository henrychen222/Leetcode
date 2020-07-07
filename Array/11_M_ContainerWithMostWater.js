/**
 * 7.6 afternoon
 * https://leetcode.com/problems/container-with-most-water/
 */

// Accepted --- 1388ms 36.5MB 5.01%
const maxArea = (height) => {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        let y;
        for (let j = i + 1; j < height.length; j++) {
            let x = j - i;
            y = Math.min(height[i], height[j]);
            max = Math.max(max, x * y);
        }
    }
    return max;
};

const main = () => {
    let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log(maxArea(height));
};

main()