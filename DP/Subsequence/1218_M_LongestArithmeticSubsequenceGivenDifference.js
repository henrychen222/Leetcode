/**
 * 12.18 noon 12.18 evening
 * https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
 */

// Accepted --- 120ms 97.06%
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1218-longest-arithmetic-subsequence-of-given-difference/
const longestSubsequence = (arr, difference) => {
    let dp = new Map();
    let res = 0;
    for (const item of arr) {
        let tmp = (dp.get(item - difference) + 1) || 1;
        dp.set(item, tmp);
        res = Math.max(res, tmp);
    }
    return res;
};

// TLE 34/38
const longestSubsequence2 = (arr, difference) => {
    let n = arr.length;
    let res = 1;
    for (let i = 0; i < n; i++) {
        if (difference > 0) {
            for (let j = i + 1; j < n; j++) {
                if (arr[j] > arr[i]) {
                    let diff = arr[j] - arr[i];
                    if (diff == difference) {
                        let cnt = 2;
                        let last = arr[j];
                        for (let k = j + 1; k < n; k++) {
                            if (arr[k] > last) {
                                let diff2 = arr[k] - last;
                                if (diff2 == difference) {
                                    cnt++;
                                    last = arr[k];
                                }
                            }
                        }
                        res = Math.max(res, cnt);
                    }
                }
            }
        } else if (difference < 0) {
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[i]) {
                    let diff = arr[j] - arr[i];
                    if (diff == difference) {
                        let cnt = 2;
                        let last = arr[j];
                        for (let k = j + 1; k < n; k++) {
                            if (arr[k] < last) {
                                let diff2 = arr[k] - last;
                                if (diff2 == difference) {
                                    cnt++;
                                    last = arr[k];
                                }
                            }
                        }
                        res = Math.max(res, cnt);
                    }
                }
            }
        } else {
            let cnt = 1;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] == arr[i]) cnt++;
            }
            res = Math.max(res, cnt);
        }

    }
    return res;
};

// TLE 34/38
const longestSubsequence1 = (arr, difference) => {
    let n = arr.length;
    let res = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let diff = arr[j] - arr[i];
            if (diff == difference) {
                let cnt = 2;
                let last = arr[j];
                for (let k = j + 1; k < n; k++) {
                    let diff2 = arr[k] - last;
                    if (diff2 == difference) {
                        cnt++;
                        last = arr[k];
                    }
                }
                res = Math.max(res, cnt);
            }
        }
    }
    return res;
};

const main = () => {
    let arr = [1, 2, 3, 4],
        difference = 1;
    let arr2 = [1, 3, 5, 7],
        difference2 = 1;
    let arr3 = [1, 5, 7, 8, 5, 3, 4, 2, 1],
        difference3 = -2;
    console.log(longestSubsequence(arr, difference));
    console.log(longestSubsequence(arr2, difference2));
    console.log(longestSubsequence(arr3, difference3));
};

main()