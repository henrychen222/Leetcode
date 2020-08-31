/**
 * 8.30 night
 * https://leetcode.com/problems/longest-well-performing-interval/
 */

// // the goal: find the longest subarray with positive sum.
// const longestWPI2 = (hours) => {
//     let n = hours.length;
//     let data = hours.map(x => x > 8 ? 1 : -1);
//     console.log(data);
//     let prefixSum = [data[0]];
//     for (let i = 0; i + 1 < n; i++) { //reference: https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/
//         prefixSum[i + 1] = prefixSum[i] + data[i + 1];
//     }
//     console.log(prefixSum);
// };

// Accepted --- 960ms 23.81%
// reference: https://leetcode.com/problems/longest-well-performing-interval/discuss/334575/996.icu
const longestWPI_brute_force = (hours) => {
    let n = hours.length;
    hours = hours.map(x => x > 8 ? 1 : -1);
    let res = 0;
    for (let i = 0; i < n; i++) {
        let prefixSum = 0;
        for (let j = i; j < n; j++) {
            prefixSum += hours[j];
            if (prefixSum > 0) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
};

// Accepted --- 92ms 90.48%
// reference: https://zxi.mytechroad.com/blog/uncategorized/leetcode-1124-longest-well-performing-interval/
const longestWPI_huahua = (hours) => {
    let n = hours.length;
    hours = hours.map(x => x > 8 ? 1 : -1);
    let prefixSum = 0;
    let idxMap = new Map();
    let res = 0;
    for (let i = 0; i < n; i++) {
        prefixSum += hours[i];
        if (prefixSum > 0) {
            res = i + 1;
        }
        if (!idxMap.has(prefixSum)) {
            idxMap.set(prefixSum, i);
        }
        if (idxMap.has(prefixSum - 1)) {
            res = Math.max(res, i - idxMap.get(prefixSum - 1));
        }
    }
    return res;
};

// Accepted --- 80ms 100.00%
// reference: https://leetcode.com/problems/longest-well-performing-interval/discuss/334565/JavaC%2B%2BPython-O(N)-Solution-Life-needs-996-and-669
const longestWPI_lee215 = (hours) => {
    let n = hours.length;
    let prefixSum = 0;
    let idxMap = new Map();
    let res = 0;
    for (let i = 0; i < n; i++) {
        prefixSum += hours[i] > 8 ? 1 : -1;
        if (prefixSum > 0) {
            res = i + 1;
        } else {
            if (!idxMap.has(prefixSum)) {
                idxMap.set(prefixSum, i);
            }
            if (idxMap.has(prefixSum - 1)) {
                res = Math.max(res, i - idxMap.get(prefixSum - 1));
            }
        }
    }
    return res;
};

const main = () => {
    let hours = [9, 9, 6, 0, 6, 6, 9];
    let debug1 = [6, 6, 9];
    // console.log(longestWPI(hours));
    // console.log(longestWPI(debug1)); // 1

    console.log(longestWPI_huahua(hours));
    console.log(longestWPI_huahua(debug1));

    console.log("")
    console.log(longestWPI_brute_force(hours));
    console.log(longestWPI_brute_force(debug1));

    console.log("")
    console.log(longestWPI_lee215(hours));
    console.log(longestWPI_lee215(debug1));
};

main()


// understand question wrong
// const longestWPI = (hours) => {
//     let t = 0;
//     let nt = 0;
//     let stack = [];
//     let res = 0;
//     for (const h of hours) {
//         if (h > 8) {
//             t++;
//         } else {
//             nt++;
//         }
//         stack.push(h);
//         console.log(stack, t, nt);
//         if (t > nt) res++;
//     }
//     return res;
// };