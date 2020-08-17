/**
 * 8.16 night
 * https://leetcode.com/problems/reshape-the-matrix/
 */

// Accepted --- 104ms 41.6MB 68.28%
const matrixReshape = (nums, r, c) => {
    let m = nums.length;
    let n = nums[0].length;
    if (m * n != r * c) return nums;
    let rowTraverseData = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowTraverseData.push(nums[i][j]);
        }
    }
    // console.log(rowTraverseData);
    let res = [];
    for (let i = 1; i <= r * c; i += c) {
        // console.log(i - 1, i - 1 + c)
        let tmp = rowTraverseData.slice(i - 1, i - 1 + c);
        res.push(tmp);
    }
    return res;
};

// Accepted --- 104ms 41.8MB 68.28%
const matrixReshape2 = (nums, r, c) => {
    let m = nums.length;
    let n = nums[0].length;
    if (m * n != r * c) {
        return nums;
    } else {
        let rowTraverseData = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                rowTraverseData.push(nums[i][j]);
            }
        }
        let res = [];
        for (let i = 1; i <= r * c; i += c) {
            let tmp = rowTraverseData.slice(i - 1, i - 1 + c);
            res.push(tmp);
        }
        return res;
    }
};

const main = () => {
    let nums = [
            [1, 2],
            [3, 4]
        ],
        r = 1,
        c = 4;
    let nums2 = [
            [1, 2],
            [3, 4]
        ],
        r2 = 2,
        c2 = 4;
    let nums3 = [
            [1, 2],
            [3, 4],
            [5, 6]
        ],
        r3 = 2,
        c3 = 3;
    let num_debug1 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        r_debug1 = 3,
        c_debug1 = 3;
    console.log(matrixReshape(nums, r, c));
    console.log(matrixReshape(nums2, r2, c2));
    console.log(matrixReshape(nums3, r3, c3));
    console.log(matrixReshape(num_debug1, r_debug1, c_debug1)); // [[1,2,3],[4,5,6],[7,8,9]]
};

main()