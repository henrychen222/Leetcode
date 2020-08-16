/**
 * 8.1 night
 * https://leetcode.com/contest/weekly-contest-200/problems/count-good-triplets/
 */

const countGoodTriplets = (arr, a, b, c) => {
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let x = Math.abs(arr[i] - arr[j]);
            for (let k = j + 1; k < arr.length; k++) {
                let y = Math.abs(arr[j] - arr[k]);
                let z = Math.abs(arr[i] - arr[k]);
                if (x <= a && y <= b && z <= c) cnt++;
            }
        }
    }
    return cnt;
};

const main = () => {
    let arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3;
    let arr2 = [1, 1, 2, 2, 3], a2 = 0, b2 = 0, c2 = 1;
    console.log(countGoodTriplets(arr, a, b, c));
    console.log(countGoodTriplets(arr2, a2, b2, c2));
};

main()