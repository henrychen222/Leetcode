/**
 * 11/20/21 evening
 * https://leetcode.com/contest/weekly-contest-268/problems/watering-plants/
 */

const pr = console.log;

// Accepted
const wateringPlants = (a, capacity) => {
    let n = a.length, res = 0, cur = capacity;
    for (let i = 0; i < n; i++) {
        let add;
        if (cur - a[i] >= 0) {
            cur -= a[i];
            add = 1;
        } else {
            cur = capacity;
            add = (i + 1) * 2 - 1;
            cur -= a[i];
        }
        res += add;
        // pr(a[i], "res", res, "cur", cur, "add", add);
    }
    return res;
};

const main = () => {
    let plants = [2, 2, 3, 3], capacity = 5;
    let plants2 = [1, 1, 1, 4, 2, 3], capacity2 = 4;
    let plants3 = [7, 7, 7, 7, 7, 7, 7], capacity3 = 8;
    pr(wateringPlants(plants, capacity))
    pr(wateringPlants(plants2, capacity2))
    pr(wateringPlants(plants3, capacity3))
};

main()