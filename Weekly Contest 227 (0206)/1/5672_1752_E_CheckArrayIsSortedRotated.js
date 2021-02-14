/**
 * 2.6 evening
 * https://leetcode.com/contest/weekly-contest-227/problems/check-if-array-is-sorted-and-rotated/
 */

// const check = (nums) => {
//     if (isAscending(nums)) return true;
//     let A = [...nums].sort((a, b) => a - b);
//     let n = A.length;
//     let i = 0;
//     while (i < n) {
//         let tmp = [...nums];
//         console.log("begin", tmp);
//         let x = i + 1;
//         tmp[i] = tmp[(i + x) % n];
//         console.log(tmp);
//         if (ok(tmp, A)) return true;
//         i++;
//     }
//     return false;
// };

// Accepted
const check = (nums) => {
    if (isAscending(nums)) return true;
    let A = [...nums].sort((a, b) => a - b);
    let n = A.length;
    for (let i = 0; i < n; i++) {
        let l = A.slice(0, i + 1);
        let r = A.slice(i + 1);
        let ro = r.concat(l);
        // console.log(l, r, ro);
        if (ok(ro, nums)) return true;
    }
    return false;
};

const ok = (a, b) => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x >= arr[i - 1];
    });
};

const main = () => {
    let nums = [3, 4, 5, 1, 2];
    let nums2 = [2, 1, 3, 4];
    let nums3 = [1, 2, 3];
    let nums4 = [1, 1, 1];
    let nums5 = [2, 1];
    console.log(check(nums));
    console.log(check(nums2));
    console.log(check(nums3));
    console.log(check(nums4));
    console.log(check(nums5));
};

main()
