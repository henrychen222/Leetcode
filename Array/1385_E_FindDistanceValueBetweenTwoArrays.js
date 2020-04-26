/**
 * 4.25 night
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 */

// Accepted --- 68ms 36.3 MB 31.29%
const findTheDistanceValue = (arr1, arr2, d) => {
    let count = 0;
    for (const i of arr1) {
        let flag = true;
        for (const j of arr2) {
            if (Math.abs(i - j) <= d) {
                flag = false; // if any <=, this round i in arr1 won't count
                break;
            }
        }
        count += flag; // int + boolean??  https://zxi.mytechroad.com/blog/two-pointers/leetcode-1385-find-the-distance-value-between-two-arrays/
    }
    // console.log(count);
    return count;
};

// Accepted --- 140ms 35.7 MB 5.48%
// https://zxi.mytechroad.com/blog/two-pointers/leetcode-1385-find-the-distance-value-between-two-arrays/
const findTheDistanceValue_two_pointer = (arr1, arr2, d) => {
    arr1.sort((a, b) => a - b); // arr1 increasing order
    arr2.sort((a, b) => b - a); // work, arr2 in decreasing order 
    // arr2.reverse().sort((a, b) => b - a); // work    || 100ms 36.1MB 6.45%
    // arr2.reverse().sort();  // not work

    let ans = 0;
    for (const a of arr1) {
        while (arr2.length && arr2[arr2.length - 1] < a - d)
            arr2.pop();
        ans += (arr2.length == 0) || arr2[arr2.length - 1] > a + d;
    }
    return ans;
};

// const findTheDistanceValue_bs = (arr1, arr2, d) => {
//     arr2.sort((a, b) => a - b);
//     // console.log(arr2);
//     let count = 0;
//     for (const a of arr1) {
//         // let it1 = bs_lower_bound(arr2, arr2.length, a - d);
//         // let it2 = bs_upper_bound(arr2, arr2.length, a + d);
//         let it1 = lowerBound(arr2, arr2[0], arr2[arr2.length - 1], a - d);
//         let it2 = upperBound(arr2, arr2[0], arr2[arr2.length - 1], a + d);
//         if (it1 == it2) ++count;
//     }
//     return count;
// };

// const lowerBound = (arr, low, high, element) => {
//     while (low < high) {
//         let middle = low + (high - low) / 2;
//         if (element > arr[middle]) {
//             low = middle + 1;
//         } else {
//             high = middle;
//         }
//     }
//     return low;
// }

// const upperBound = (arr, low, high, element) => {
//     while (low < high) {
//         let middle = low + (high - low) / 2;
//         if (arr[middle] > element) {
//             high = middle;
//         } else {
//             low = middle + 1;
//         }
//     }
//     return low;
// }


// const bs_upper_bound = (a, n, x) => {
//     let l = 0;
//     let h = n;
//     while (l < h) {
//         let mid = l + (h - l) / 2;
//         if (x >= a[mid]) {
//             l = mid + 1;
//         } else {
//             h = mid;
//         }
//     }
//     return l;
// }

// const bs_lower_bound = (a, n, x) => {
//     let l = 0;
//     let h = n;
//     while (l < h) {
//         let mid = l + (h - l) / 2;
//         if (x <= a[mid]) {
//             h = mid;
//         } else {
//             l = mid + 1;
//         }
//     }
//     return l;
// }

const main = () => {
    const arr1 = [4, 5, 8],
        arr2 = [10, 9, 1, 8],
        d = 2;
    const arr1_example2 = [1, 4, 2, 3],
        arr2_example2 = [-4, -3, 6, 10, 20, 30],
        d_example2 = 3;
    const arr1_example3 = [2, 1, 100, 3],
        arr2_example3 = [-5, -2, 10, -3, 7],
        d_example3 = 6;
    const arr1_debug1 = [2, 6],
        arr2_debug1 = [-10, 9, 2, -1],
        d_debug1 = 2

    console.log(findTheDistanceValue(arr1, arr2, d)); // 2
    console.log(findTheDistanceValue(arr1_example2, arr2_example2, d_example2)); // 2
    console.log(findTheDistanceValue(arr1_example3, arr2_example3, d_example3)); // 1
    console.log(findTheDistanceValue(arr1_debug1, arr2_debug1, d_debug1)); // 1

    console.log("")
    console.log(findTheDistanceValue_two_pointer(arr1, arr2, d));
    console.log(findTheDistanceValue_two_pointer(arr1_example2, arr2_example2, d_example2));
    console.log(findTheDistanceValue_two_pointer(arr1_example3, arr2_example3, d_example3));
    console.log(findTheDistanceValue_two_pointer(arr1_debug1, arr2_debug1, d_debug1));

    // console.log("")
    // console.log(findTheDistanceValue_bs(arr1, arr2, d));
    // console.log(findTheDistanceValue_bs(arr1_example2, arr2_example2, d_example2));
    // console.log(findTheDistanceValue_bs(arr1_example3, arr2_example3, d_example3));
};

main()