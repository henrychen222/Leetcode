/**
 * 5.26 night
 * https://leetcode.com/problems/car-pooling/
 */

/**
 * https://www.acwing.com/solution/LeetCode/content/2562/
 * Accepted --- 72ms 38.4MB 55.12%
 */
const carPooling_huahua2 = (trips, capacity) => {
    let d = [];
    fillArr(d, 1000);
    for (const trip of trips) {
        d[trip[1]] -= trip[0];
        d[trip[2]] += trip[0];
    }
    for (const c of d) {
        if ((capacity += c) < 0) return false;
    }
    return true;
};

/**
 * https://www.acwing.com/solution/LeetCode/content/2562/
 * Accepted --- 72ms 37.8MB 55.12%
 */
const carPooling_acwing = (trips, capacity) => {
    let seats = [];
    fillArr(seats, 1001);
    for (let i = 0; i < trips.length; i++) {
        seats[trips[i][1]] += trips[i][0];
        seats[trips[i][2]] -= trips[i][0];
    }
    if (seats[0] > capacity) return false;
    for (let i = 1; i <= 1000; i++) {
        seats[i] += seats[i - 1];
        if (seats[i] > capacity)
            return false;
    }
    return true;
};

const fillArr = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push(0);
    }
};

const main = () => {
    let trips = [
            [2, 1, 5],
            [3, 3, 7]
        ],
        capacity = 4;
    let trips2 = [
            [2, 1, 5],
            [3, 3, 7]
        ],
        capacity2 = 5;
    let trips3 = [
            [2, 1, 5],
            [3, 5, 7]
        ],
        capacity3 = 3;
    let trips4 = [
            [3, 2, 7],
            [3, 7, 9],
            [8, 3, 9]
        ],
        capacity4 = 11;

    console.log(carPooling_acwing(trips, capacity));
    console.log(carPooling_acwing(trips2, capacity2));
    console.log(carPooling_acwing(trips3, capacity3));
    console.log(carPooling_acwing(trips4, capacity4));

    console.log("")
    console.log(carPooling_huahua2(trips, capacity));
    console.log(carPooling_huahua2(trips2, capacity2));
    console.log(carPooling_huahua2(trips3, capacity3));
    console.log(carPooling_huahua2(trips4, capacity4));

};

main()