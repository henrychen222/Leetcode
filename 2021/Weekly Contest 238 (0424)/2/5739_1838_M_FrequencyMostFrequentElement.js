
/**
 * 04/24/21 evening
 * https://leetcode.com/contest/weekly-contest-238/problems/frequency-of-the-most-frequent-element/
 */

const pr = console.log;

// WA
const maxFrequency = (a, k) => {
    let m = counter(a);
    // pr(m);
    let fn = m.keys().next().value;
    let res = m.values().next().value;
    // pr(fn, res)
    m.delete(fn);
    while (1) {
        let num = m.keys().next().value;
        let occ = m.get(num);
        let diff = fn - num;
        // pr(m, k, diff, occ)
        if (k > diff * occ) {
            k -= diff * occ;
            res += occ;
            m.delete(num);
        } else if (k == diff * occ) {
            res += occ;
            break;
        } else {
            res += k / diff >> 0;
            break;
        }
    }
    return res;
};

const counter = (a_or_s) => {
    let map = new Map();
    for (const i of a_or_s)
        map.set(i, map.get(i) + 1 || 1);
    map = sortMap(map);
    return map;
};

const sortMap = (map) => {
    return new Map([...map].sort((a, b) => {
        if (b[1] == a[1]) return b[0] - a[0];
        return b[1] - a[1];
    }));
};

const main = () => {
    let nums = [1, 2, 4], k = 5;
    let nums2 = [1, 4, 8, 13], k2 = 5;
    let nums3 = [3, 9, 6], k3 = 2;
    let nums_debug1 = [9930, 9923, 9983, 9997, 9934, 9952, 9945, 9914, 9985, 9982, 9970, 9932, 9985, 9902, 9975, 9990, 9922, 9990, 9994, 9937, 9996, 9964, 9943, 9963, 9911, 9925, 9935, 9945, 9933, 9916, 9930, 9938, 10000, 9916, 9911, 9959, 9957, 9907, 9913, 9916, 9993, 9930, 9975, 9924, 9988, 9923, 9910, 9925, 9977, 9981, 9927, 9930, 9927, 9925, 9923, 9904, 9928, 9928, 9986, 9903, 9985, 9954, 9938, 9911, 9952, 9974, 9926, 9920, 9972, 9983, 9973, 9917, 9995, 9973, 9977, 9947, 9936, 9975, 9954, 9932, 9964, 9972, 9935, 9946, 9966],
        k_debug1 = 3056;
    pr(maxFrequency(nums, k));
    pr(maxFrequency(nums2, k2));
    pr(maxFrequency(nums3, k3));
    pr(maxFrequency(nums_debug1, k_debug1)); // 73
};

main()
