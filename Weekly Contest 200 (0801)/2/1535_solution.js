// 8.1 night

// Accepted --- 104ms 47.6MB 100.00%
const getWinner_uwi = (arr, k) => {
    let n = arr.length;
    k = Math.min(n, k);
    let a = arr[0];
    let winCnt = 0;
    for (let i = 1; ; i++) {
        let b = arr[i % n];
        if (a >= b) {
            winCnt++;
        } else {
            a = b;
            winCnt = 1;
        }
        if (winCnt == k) return a;
    }
};

// Accepted --- 96ms 47MB 100.00%  best
const getWinner_tmwilliamlin168 = (arr, k) => {
    for (let i = 1, winCnt = 0; i < arr.length && winCnt < k; i++) {
        if (arr[0] > arr[i]) {
            winCnt++;
        } else {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            winCnt = 1;
        }
        // console.log(arr);
    }
    return arr[0];
};

// Accepted --- 96ms 46.8MB 100.00%
//reference: https://leetcode.com/problems/find-the-winner-of-an-array-game/discuss/768007/JavaC%2B%2BPython-One-Pass-O(1)-Space
const getWinner_lee215 = (arr, k) => {
    let cur = arr[0];  // current winner, wich is the current biggest element
    let winCnt = 0;
    for (let i = 1; i < arr.length; i++) {
        // console.log(cur);
        if (arr[i] > cur) {
            cur = arr[i];
            winCnt = 0;
        }
        if (++winCnt == k) break;
    }
    return cur;
};

const main = () => {
    let arr = [2, 1, 3, 5, 4, 6, 7], k = 2;
    let arr2 = [3, 2, 1], k2 = 10;
    let arr3 = [1, 9, 8, 2, 3, 7, 6, 4, 5], k3 = 7;
    let arr4 = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99], k4 = 1000000000;
    let arr_debug1 = [1, 25, 35, 42, 68, 70]; k_debug1 = 1;
    console.log(getWinner_uwi(arr, k));
    console.log(getWinner_uwi(arr2, k2));
    console.log(getWinner_uwi(arr3, k3));
    console.log(getWinner_uwi(arr4, k4));
    console.log(getWinner_uwi(arr_debug1, k_debug1));

    console.log("");
    console.log(getWinner_tmwilliamlin168(arr, k));
    console.log(getWinner_tmwilliamlin168(arr2, k2));
    console.log(getWinner_tmwilliamlin168(arr3, k3));
    console.log(getWinner_tmwilliamlin168(arr4, k4));
    console.log(getWinner_tmwilliamlin168(arr_debug1, k_debug1));

    console.log("");
    console.log(getWinner_lee215(arr, k));
    console.log(getWinner_lee215(arr2, k2));
    console.log(getWinner_lee215(arr3, k3));
    console.log(getWinner_lee215(arr4, k4));
    console.log(getWinner_lee215(arr_debug1, k_debug1));
};

main()