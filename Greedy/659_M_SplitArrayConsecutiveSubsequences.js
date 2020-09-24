/**
 * 9.22 evening
 * https://leetcode.com/problems/split-array-into-consecutive-subsequences/
 */

// wrong 158/180   understand question wrong, split it into 1 or more subsequences (not 1 or 2)
const isPossible = (nums) => {
    let n = nums.length;
    if (check(nums) && n >= 3) return true;
    nums.sort((a, b) => a - b);
    let set = new Set();
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (set.size == n - 3) break;
        if (stack.length != 0) {
            let l = stack[stack.length - 1];
            let idx = nums.indexOf(l + 1);
            if (idx != -1 && !set.has(idx)) {
                stack.push(nums[idx]);
                set.add(idx);
            }
        } else {
            stack.push(nums[i]);
            set.add(i);
        }
    }
    if (set.size < 3) return false;
    let rest = nums.filter((x, i) => !set.has(i));
    console.log(stack, rest);
    if (rest.length < 3) return false;
    let idx = [];
    for (let i = 0; i + 1 < rest.length; i++) {
        if (rest[i] + 1 != rest[i + 1]) idx.push(rest[i]);
    }
    if (idx.length == 1) {
        let pos = stack.indexOf(idx[0]) + 1;
        let first = stack.slice(0, pos);
        if (first.length < 3) return false;
        let newRest = rest.concat(stack.slice(pos));
        newRest.sort((a, b) => a - b);
        // console.log(idx[0], stack.slice(pos), first, newRest);
        return check(newRest);
    }
    return check(rest);
};

const check = (arr) => {
    for (let i = 0; i + 1 < arr.length; i++) {
        if (arr[i] + 1 != arr[i + 1]) return false;
    }
    return true;
};

const main = () => {
    let nums = [1, 2, 3, 3, 4, 5];
    let nums2 = [1, 2, 3, 3, 4, 4, 5, 5];
    let nums3 = [1, 2, 3, 4, 4, 5];
    let debug1 = [1];
    let debug2 = [1, 2, 3];
    let debug3 = [4, 5, 6, 6, 7, 8, 9, 10, 10, 11];
    let debug4 = [1, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let debug5 = [4, 5, 6, 7, 7, 8, 8, 9, 10, 11];
    let debug6 = [3, 4, 4, 5, 6, 7, 8, 9, 10, 11];
    let debug7 = [14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28, 29, 29, 29, 30, 30, 30, 31, 31, 31, 32, 32, 32, 33, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36, 37, 37, 37, 38, 38, 38, 39, 39, 39, 40, 40, 40, 41, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 47, 48, 48, 48, 49, 49, 49, 50, 50, 50, 51, 51, 51, 52, 52, 52, 53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 56, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 60, 60, 61, 61, 61, 62, 62, 62, 62, 63, 63, 63, 63, 64, 64, 64, 64, 65, 65, 65, 65, 65, 66, 66, 66, 66, 66, 67, 67, 67, 67, 67, 68, 68, 68, 68, 68, 68, 69, 69, 69, 69, 69, 69, 70, 70, 70, 70, 70, 70, 71, 71, 71, 71, 71, 71, 72, 72, 72, 72, 72, 72, 73, 73, 73, 73, 73, 73, 74, 74, 74, 74, 74, 74, 75, 75, 75, 75, 75, 75, 76, 76, 76, 76, 76, 76, 77, 77, 77, 77, 77, 77, 78, 78, 78, 78, 78, 78, 79, 79, 79, 79, 79, 79, 80, 80, 80, 80, 80, 80, 80, 81, 81, 81, 81, 81, 81, 81, 82, 82, 82, 82, 82, 82, 82, 83, 83, 83, 83, 83, 83, 83, 84, 84, 84, 84, 84, 84, 84, 85, 85, 85, 85, 85, 85, 85, 86, 86, 86, 86, 86, 86, 86, 86, 87, 87, 87, 87, 87, 87, 87, 87, 88, 88, 88, 88, 88, 88, 88, 88, 89, 89, 89, 89, 89, 89, 89, 89, 90, 90, 90, 90, 90, 90, 90, 90, 91, 91, 91, 91, 91, 91, 91, 92, 92, 92, 92, 92, 92, 92, 93, 93, 93, 93, 93, 93, 93, 94, 94, 94, 94, 94, 94, 95, 95, 95, 95, 95, 95, 96, 96, 96, 96, 96, 96, 97, 97, 97, 97, 97, 97, 98, 98, 98, 98, 98, 98, 99, 99, 99, 99, 99, 99, 100, 100, 100, 100, 100, 101, 101, 101, 101, 101, 102, 102, 102, 102, 102, 103, 103, 103, 103, 103, 104, 104, 104, 104, 104, 105, 105, 105, 105, 105, 106, 106, 106, 106, 106, 107, 107, 107, 107, 107, 108, 108, 108, 108, 108, 109, 109, 109, 109, 109, 110, 110, 110, 110, 110, 111, 111, 111, 111, 111, 112, 112, 112, 113, 113, 113, 114, 114, 114, 115, 115, 115, 116, 116, 116, 117, 117, 117, 118, 118, 118, 119, 119, 119, 120, 120, 120, 121, 121, 121, 122, 122, 122, 123, 123, 123, 124, 124, 124, 125, 125, 125, 126, 126, 126, 127, 127, 127, 128, 128, 128, 129, 129, 129, 130, 130, 130, 131, 131, 131, 132, 132, 132, 133, 133, 133, 134, 134, 135, 135, 136, 136, 137, 137, 138, 138, 139, 139, 140, 140, 141, 141, 142, 142, 143, 143, 144, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170];
    // console.log(isPossible(nums));
    // console.log(isPossible(nums2));
    // console.log(isPossible(nums3));
    // console.log(isPossible(debug1)); // false
    // console.log(isPossible(debug2)); // true
    // console.log(isPossible(debug3)); // false
    // console.log(isPossible(debug4)); // false
    // console.log(isPossible(debug5)); // true
    // console.log(isPossible(debug6)); // false
    console.log(isPossible(debug7)); // true
};

main()

// const sortMapByKey = (map) => {
//     return new Map([...map].sort((a, b) => a[1] - b[1]));
// };