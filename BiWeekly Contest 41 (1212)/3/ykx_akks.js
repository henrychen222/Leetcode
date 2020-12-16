// 12.12 morning
// similar to Heltion

// Accepted --- 268ms
const stoneGameVI = (aliceValues, bobValues) => {
    let n = aliceValues.length;
    let resA = resB = 0;
    for (let i = 0; i < n; i++) {
        aliceValues[i] += bobValues[i];
        resB += bobValues[i];
    }
    aliceValues.sort((a, b) => a - b);
    let toAlice = true;
    for (let i = n - 1; ~i; i--) {
        if (toAlice) {
            resA += aliceValues[i];
        }
        toAlice = !toAlice;
    }
    // console.log(resA, resB, aliceValues, bobValues);
    if (resA > resB) {
        return 1;
    } else if (resA < resB) {
        return -1;
    } else {
        return 0;
    }
};

// Accepted --- 228ms
const stoneGameVI_1 = (aliceValues, bobValues) => {
    let a = aliceValues;
    let n = a.length;
    let resA = resB = 0;
    for (let i = 0; i < n; i++) {
        a[i] += bobValues[i];
        resB += bobValues[i];
    }
    a.sort((a, b) => a - b);
    let toAlice = true;
    for (let i = n - 1; ~i; i--) {
        if (toAlice) {
            resA += a[i];
        }
        toAlice = !toAlice;
    }
    if (resA > resB) {
        return 1;
    } else if (resA < resB) {
        return -1;
    } else {
        return 0;
    }
};

const main = () => {
    let aliceValues = [1, 3], bobValues = [2, 1];
    let aliceValues2 = [1, 2], bobValues2 = [3, 1];
    let aliceValues3 = [2, 4, 3], bobValues3 = [1, 6, 7];
    let aliceValues_debug1 = [2, 9, 1, 1, 1, 3, 5, 8, 8, 6, 8, 6, 2, 4], bobValues_debug1 = [1, 9, 7, 8, 3, 4, 2, 7, 8, 10, 1, 7, 10, 4]
    console.log(stoneGameVI(aliceValues, bobValues));
    console.log(stoneGameVI(aliceValues2, bobValues2));
    console.log(stoneGameVI(aliceValues3, bobValues3));
    console.log(stoneGameVI(aliceValues_debug1, bobValues_debug1)); // -1

};

main()