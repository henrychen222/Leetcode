// 11.28 evenning

// TLE 75/85
const mostCompetitive = (nums, k) => {
    let n = nums.length;
    let res = [];
    let set = new Set();
    for (let i = 0; i + k < n; i++) {
        set.add([nums[i], i]);
    }
    // console.log(set);
    let last = -1;
    for (let i = n - k; i < n; i++) {
        set.add([nums[i], i]);
        // console.log(set);
        set = sortSet(set); // C++ set is sorted http://www.cplusplus.com/reference/set/set/insert/
        // console.log(set);
        while (set.size && set.values().next().value[1] < last) {
            set.delete(set.values().next().value);
        }
        let tmp = set.values().next().value;
        res.push(tmp[0]);
        last = tmp[1];
        set.delete(tmp);
    }
    return res;
};

const sortSet = (set) => {
    return new Set([...(new Set(set))].sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1];
        return a[0] - b[0];
    }));
};

const main = () => {
    let nums = [3, 5, 2, 6], k = 2;
    let nums2 = [2, 4, 3, 3, 5, 4, 9, 6], k2 = 4;
    let nums_debug1 = [84, 10, 71, 23, 66, 61, 62, 64, 34, 41, 80, 25, 91, 43, 4, 75, 65, 13, 37, 41, 46, 90, 55, 8, 85, 61, 95, 71], k_debug1 = 24;
    let nums_debug2 = [71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2], k_debug2 = 3;
    console.log(mostCompetitive(nums, k));
    console.log(mostCompetitive(nums2, k2));
    console.log(mostCompetitive(nums_debug1, k_debug1));
    console.log(mostCompetitive(nums_debug2, k_debug2)); // [8,80,2]
};

main()