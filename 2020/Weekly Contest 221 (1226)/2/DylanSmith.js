// 12.26 night
// https://github.com/somdipdey/JavaScript-implementation-of-java.util.TreeMap-Class/blob/master/treeMap.js

// Accepted --- 132ms
const N = 100000;
const eatenApples = (apples, days) => {
    let n = apples.length;
    let a = Array(N).fill(0);
    for (let i = 0; i < n; i++) {
        a[i] += apples[i];
        a[i + days[i]] -= apples[i];
    }
    // console.log(a);
    let cur = res = move = 0;
    for (let i = 0; i < N; i++) {
        while (a[i] < 0 && move > 0) {
            move--;
            a[i]++;
        }
        cur += a[i];
        if (cur > 0) {
            res++;
            move++;
            cur--;
        }
    }
    // console.log(a);
    return res;
};

const main = () => {
    let apples = [1, 2, 3, 5, 2], days = [3, 2, 1, 4, 2];
    let apples2 = [3, 0, 0, 0, 0, 2], days2 = [3, 0, 0, 0, 0, 2];
    let apples_debug1 = [1], days_debug2 = [2];
    console.log(eatenApples(apples, days));
    console.log(eatenApples(apples2, days2));
    console.log(eatenApples(apples_debug1, days_debug2)); // 1

};

main()