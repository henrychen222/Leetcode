/**
 * 07/16/20 night  07/28/21 night complete
 * https://leetcode.com/problems/3sum-closest/
 */

// Accepted --- 84ms 72.96%
// reference: https://zxi.mytechroad.com/blog/two-pointers/leetcode-16-3sum-closest/
const threeSumClosest = (a, target) => {
    let n = a.length, minD = Number.MAX_SAFE_INTEGER, res = target;
    a.sort((x, y) => x - y);
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1, right = n - 1;
        while (left < right) {
            let sum = a[i] + a[left] + a[right];
            if (sum == target) return target;
            let diff = Math.abs(sum - target);
            if (diff < minD) {
                minD = diff;
                res = sum;
            }
            sum > target ? right-- : left++;
        }
    }
    return res;
};

///////////////////////////////////////////////////////////////////////
// Time limit 59/131
const threeSumClosest3 = (nums, target) => {
    let res = [];
    let i = 0;
    while (i < nums.length) {
        let j = i + 1;
        while (j < nums.length) {
            let k = j + 1
            while (k < nums.length) {
                let sum = nums[i] + nums[j] + nums[k];
                res.push([sum, sum - target]);
                ++k;
            }
            ++j;
        }
        ++i;
    }
    res.sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]));
    return res[0][0];
};

// wrong
const threeSumClosest2 = (nums, target) => {
    if (nums.length == 3) return nums[0] + nums[1] + nums[2];
    let small = [];
    let large = [];
    let equal = []
    for (const i of nums) {
        if (i < target) {
            small.push(i);
        } else if (i > target) {
            large.push(i);
        } else {
            equal.push(i);
        }
    }
    small.sort((a, b) => a - b);
    large.sort((a, b) => a - b);
    console.log(small, equal, large);
    /**
     * [...][...][...]  [...][][...]  [...][...][] [...][][]  
     * [][...][...]     [][][...]     [][...][] [][][] (does not exist)
     */
    if (small.length != 0 && equal.length != 0 && large.length != 0) {
        return small[small.length - 1] + large[0] + equal[0];
    } else if (small.length != 0 && equal.length == 0 && large.length != 0) {
        let a = small[small.length - 1] + large[0] + small[small.length - 2];
        let b = small[small.length - 1] + large[0] + large[1];
        if (Math.abs(a - target) < Math.abs(b - target)) {
            return a;
        } else {
            return b;
        }
    } else if (small.length != 0 && equal.length != 0 && large.length == 0) {
        return small[small.length - 2] + small[small.length - 1] + equal[0];
    } else if (small.length != 0 && equal.length == 0 && large.length == 0) {
        return small[small.length - 3] + small[small.length - 2] + small[small.length - 1];
    } else if (small.length == 0 && equal.length != 0 && large.length != 0) {
        return equal[0] + large[0] + large[1];
    } else if (small.length == 0 && equal.length == 0 && large.length != 0) {
        return large[0] + large[1] + large[2];
    } else if (small.length == 0 && equal.length != 0 && large.length == 0) {
        return equal[0] * 3;
    }
};

// Time Limit 59/131
const threeSumClosest1 = (nums, target) => {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                res.push([sum, Math.abs(sum - target)]);
            }
        }
    }
    res.sort((a, b) => a[1] - b[1]);
    return res[0][0];
};

const main = () => {
    let nums = [-1, 2, 1, -4],
        target = 1;
    let nums_debug1 = [0, 0, 0],
        target_debug1 = 1;
    let nums_debug2 = [1, 1, -1],
        target_debug2 = 1;
    let nums_debug3 = [0, 2, 1, -3],
        target_debug3 = 1;
    console.log(threeSumClosest(nums, target));
    console.log(threeSumClosest(nums_debug1, target_debug1)); // 0
    console.log(threeSumClosest(nums_debug2, target_debug2)); // 1
    console.log(threeSumClosest(nums_debug3, target_debug3)); // 0
};

main()