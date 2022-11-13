// 8.23 evening
// Accepted --- 408ms 100.00%
const findLatestStep = (arr, m) => {
    let res = -1;
    let n = arr.length;
    let l = [];
    let r = [];
    let ok = new Array(n + 1).fill(0);
    let len = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        let p = arr[i];
        ok[p] = 1;
        l[p] = p;
        r[p] = p;
        if (p > 1 && ok[p - 1]) {
            l[p] = l[p - 1];
            len[r[p - 1] - l[p - 1] + 1]--;
            r[p - 1] = r[p];
        }
        if (p < n && ok[p + 1]) {
            r[p] = r[p + 1];
            len[r[p + 1] - l[p + 1] + 1]--;
            l[p + 1] = l[p];
        }
        r[l[p]] = r[p];
        l[r[p]] = l[p];
        len[r[p] - l[p] + 1]++;
        if (len[m]) res = i + 1;
    }
    return res;
};

const main = () => {
    let arr = [3, 5, 1, 2, 4], m = 1;
    let arr2 = [3, 1, 5, 4, 2], m2 = 2;
    let arr3 = [1], m3 = 1;
    let arr4 = [2, 1], m4 = 2;
    console.log(findLatestStep(arr, m));
    console.log(findLatestStep(arr2, m2));
    console.log(findLatestStep(arr3, m3));
    console.log(findLatestStep(arr4, m4));
};

main()