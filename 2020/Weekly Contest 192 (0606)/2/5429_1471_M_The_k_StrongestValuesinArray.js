/**
 * 6.6 evening
 * https://leetcode.com/contest/weekly-contest-192/problems/the-k-strongest-values-in-an-array/
 */

// Accepted --- 300ms 55.7MB 100.00%
const getStrongest_zqy1018 = (arr, k) => {
    let ans = [];
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let m = (n - 1) >> 1;
    let i = 0;
    let j = n - 1;
    while (k--) {
        let a = Math.abs(arr[i] - arr[m]);
        let b = Math.abs(arr[j] - arr[m]);
        if (a > b) {
            ans.push(arr[i]);
            ++i;
        } else {
            ans.push(arr[j]);
            --j;
        }
    }
    return ans;
};

// Accepted --- 336ms 58.2MB 100.00%
// https://leetcode.com/problems/the-k-strongest-values-in-an-array/discuss/674689/Javascript-Sorting-solution
const getStrongest_ridhi_gambhir = (arr, k) => {
    arr.sort((a, b) => a - b);
    let med = arr[Math.floor((arr.length - 1) / 2)];
    arr.sort((a, b) => {
        return Math.abs(a - med) - Math.abs(b - med);
    });
    arr.reverse();
    return arr.slice(0, k)
};

// Accepted --- 340ms 58MB 100.00%
const getStrongest_natsugiri = (arr, k) => {
    arr.sort((a, b) => a - b);
    // let med = arr[(arr.length - 1) / 2];
    let med = arr[Math.floor((arr.length - 1) / 2)]; // problem in js / is different from in c++ and java
    arr.sort((x, y) => { // problem: lc cannot use > and <, have to use -
        if (Math.abs(x - med) != Math.abs(y - med)) {
            return Math.abs(y - med) - Math.abs(x - med);
        }
        return y - x;
    });
    return arr.slice(0, k);
};

// Accepted --- 324ms 61.5MB 100.00%
const getStrongest_liouzhou_101 = (arr, k) => {
    let n = arr.length;
    let b = arr;
    b.sort((a, b) => a - b);
    let m = b[Math.floor((n - 1) / 2)];  // same problem /
    let p = [];
    for (let i = 0; i < n; ++i) p[i] = i;
    p.sort((i, j) => {
        return Math.abs(arr[j] - m) - Math.abs(arr[i] - m) || Math.abs(arr[i] - m) == Math.abs(arr[j] - m) && arr[j] - arr[i];
    });
    let ret = [];
    for (let i = 0; i < k; ++i) ret.push(arr[p[i]]);
    return ret;
};

// wrong
const getStrongest = (arr, k) => {
    let m = getMedian([...arr]);
    console.log(arr);
    arr.sort((i, j) => {
        let iDiff = Math.abs(i - m);
        let jDiff = Math.abs(j - m);
        console.log(iDiff);
        console.log(jDiff);
        if (iDiff > jDiff) {
            return 1;
        } else if (iDiff == jDiff) {
            if (i > j) {
                return 1;
            }
        }
    });
    console.log(arr);
    arr.reverse();
    console.log(arr);
    return arr.slice(0, k);
};

const getMedian = (arr) => {
    let n = arr.length;
    arr.sort((a, b) => a - b);
    // console.log(n);
    return arr[Math.floor((n - 1) / 2)];
};

const main = () => {
    let arr = [1, 2, 3, 4, 5], k = 2;
    let arr2 = [1, 1, 3, 5, 5], k2 = 2;
    let arr3 = [6, 7, 11, 7, 6, 8], k3 = 5;
    let arr4 = [6, -3, 7, 2, 11], k4 = 3;
    let arr5 = [-7, 22, 17, 3], k5 = 2;

    // console.log(getStrongest(arr, k));
    // console.log("")
    // console.log(getStrongest(arr2, k2));
    // console.log("")
    // console.log(getStrongest(arr3, k3));
    // console.log("")
    // console.log(getStrongest(arr4, k4));
    // console.log("")
    // console.log(getStrongest(arr5, k5));

    // console.log("");
    // let arrtest1 = [6, -3, 7, 2, 11];
    // let arr2test2 = [-7, 22, 17, 3];
    // console.log(getMedian(arrtest1)); // 6
    // console.log(getMedian(arr2test2)); // 3
    // console.log(getMedian(arr)); // 3
    // console.log(getMedian(arr2)); // 3
    // console.log(getMedian(arr3)); // 7
    // console.log(getMedian(arr4));
    // console.log(getMedian(arr5));


    /******************************** */
    console.log(getStrongest_zqy1018(arr, k));
    console.log(getStrongest_zqy1018(arr2, k2));
    console.log(getStrongest_zqy1018(arr3, k3));
    console.log(getStrongest_zqy1018(arr4, k4));
    console.log(getStrongest_zqy1018(arr5, k5));

    console.log("");
    console.log(getStrongest_ridhi_gambhir(arr, k));
    console.log(getStrongest_ridhi_gambhir(arr2, k2));
    console.log(getStrongest_ridhi_gambhir(arr3, k3));
    console.log(getStrongest_ridhi_gambhir(arr4, k4));
    console.log(getStrongest_ridhi_gambhir(arr5, k5));

    console.log("");
    console.log(getStrongest_natsugiri(arr, k));
    console.log(getStrongest_natsugiri(arr2, k2));
    console.log(getStrongest_natsugiri(arr3, k3));
    console.log(getStrongest_natsugiri(arr4, k4));
    console.log(getStrongest_natsugiri(arr5, k5));

    console.log("");
    console.log(getStrongest_liouzhou_101(arr, k));
    console.log(getStrongest_liouzhou_101(arr2, k2));
    console.log(getStrongest_liouzhou_101(arr3, k3));
    console.log(getStrongest_liouzhou_101(arr4, k4));
    console.log(getStrongest_liouzhou_101(arr5, k5));

};

main()