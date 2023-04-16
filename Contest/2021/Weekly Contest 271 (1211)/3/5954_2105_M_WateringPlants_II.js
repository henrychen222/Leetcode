/**
 * 12/11/21 evening
 * https://leetcode.com/contest/weekly-contest-271/problems/watering-plants-ii/
 */

const pr = console.log;

// Accepted
const minimumRefill = (plants, capacityA, capacityB) => {
    let res = 0, pn = plants.length, middle = pn >> 1, final = 0;
    let a = plants.slice(0, middle), b = plants.slice(middle);
    if (pn & 1) final = b.shift();
    let [cntA, curA] = wateringPlantsRefillCount(a, capacityA);
    let [cntB, curB] = wateringPlantsRefillCountReverse(b, capacityB); // fuck here, B is reverse forget
    res += cntA;
    res += cntB;
    pr("res", res, "cnt", cntA, cntB, "cur", curA, curB, "final", final);
    // let cur = Math.max(curA, curB);
    // if (cur < final) res++;
    if (curA < curB) {
        if (curB < final) res++;
    } else {
        if (curA < final) res++;
    }
    return res;
};

const wateringPlantsRefillCount = (a, capacity) => {
    let n = a.length, refill = 0, cur = capacity;
    for (let i = 0; i < n; i++) {
        if (cur - a[i] >= 0) {
            cur -= a[i];
        } else {
            cur = capacity;
            refill++;
            cur -= a[i];
        }
    }
    return [refill, cur];
};

const wateringPlantsRefillCountReverse = (a, capacity) => {
    let n = a.length, refill = 0, cur = capacity;
    for (let i = n - 1; ~i; i--) {
        if (cur - a[i] >= 0) {
            cur -= a[i];
        } else {
            cur = capacity;
            refill++;
            cur -= a[i];
        }
    }
    return [refill, cur];
};

const main = () => {
    let plants = [2, 2, 3, 3], capacityA = 5, capacityB = 5;
    let plants2 = [2, 2, 3, 3], capacityA2 = 3, capacityB2 = 4;
    let plants3 = [5], capacityA3 = 10, capacityB3 = 8;
    let plants4 = [1, 2, 4, 4, 5], capacityA4 = 6, capacityB4 = 5;
    let plants5 = [2, 2, 5, 2, 2], capacityA5 = 5, capacityB5 = 5;
    let plants_debug1 = [504,84,276,200,436,509,397,457,799,243,520,817,533,948,155,935,612,944,546,632,180,292,666,51,118], 
    capacityA_debug1 = 1343, capacityB_debug1 = 1050;
    let plants_debug2 =  [2,1,1], capacityA_debug2 = 2, capacityB_debug2 = 2;
    let plants_debug3 =  [2,3,3], capacityA_debug3 = 5, capacityB_debug3 = 5;
    // pr(minimumRefill(plants, capacityA, capacityB))
    // pr(minimumRefill(plants2, capacityA2, capacityB2))
    // pr(minimumRefill(plants3, capacityA3, capacityB3))
    // pr(minimumRefill(plants4, capacityA4, capacityB4))
    // pr(minimumRefill(plants5, capacityA5, capacityB5))
    pr(minimumRefill(plants_debug1, capacityA_debug1, capacityB_debug1)) // 13
    pr(minimumRefill(plants_debug2, capacityA_debug2, capacityB_debug2)) // 0
    pr(minimumRefill(plants_debug3, capacityA_debug3, capacityB_debug3)) // 0
};

main()