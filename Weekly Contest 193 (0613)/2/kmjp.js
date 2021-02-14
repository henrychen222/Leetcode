// 02/13/21 afternoon

// Accepted --- 136ms  97.71%
const findLeastNumOfUniqueInts = (a, k) => {
    let m = getRecord2(a);
    let curFreq = [];
    for (const [, v] of m) {
        curFreq.push(v);
    }
    curFreq.sort((a, b) => a - b);
    let res = 0;
    for (let cf of curFreq) {
        let tmp = Math.min(k, cf);
        cf -= tmp;
        k -= tmp;
        if (cf > 0) res++;
    }
    return res;
};

const getRecord2 = (arr) => {
    let map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

const main = () => {
    let arr = [5, 5, 4], k = 1;
    let arr2 = [4, 3, 1, 1, 3, 3, 2], k2 = 3;
    let arr_debug1 = [1, 2, 3], k_debug1 = 3;
    let arr_debug2 = [1, 2, 2, 2, 2], k_debug2 = 2;
    let arr_debug3 = [2, 4, 1, 8, 3, 5, 1, 3], k_debug3 = 3;
    let arr_debug4 = [24, 119, 157, 446, 251, 117, 22, 168, 374, 373, 323, 311, 441, 213, 120, 412, 200, 236, 328, 24, 164, 104, 331, 32, 19, 223, 89, 114, 152, 82, 456, 381, 355, 343, 157, 245, 443, 368, 229, 49, 82, 16, 373, 142, 240, 125, 8],
        k_debug4 = 41;
    console.log(findLeastNumOfUniqueInts(arr, k));  // 1
    console.log(findLeastNumOfUniqueInts(arr2, k2)); // 2
    console.log(findLeastNumOfUniqueInts(arr_debug1, k_debug1)); // 0
    console.log(findLeastNumOfUniqueInts(arr_debug2, k_debug2)); // 1
    console.log(findLeastNumOfUniqueInts(arr_debug3, k_debug3)); // 3
    console.log(findLeastNumOfUniqueInts(arr_debug4, k_debug4)); // 3
};

main()