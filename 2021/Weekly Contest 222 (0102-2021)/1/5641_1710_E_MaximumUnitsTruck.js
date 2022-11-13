/**
 * 1.2 evening
 * https://leetcode.com/contest/weekly-contest-222/problems/maximum-units-on-a-truck/
 */

// Accepted
const maximumUnits = (boxTypes, truckSize) => {
    let n = boxTypes.length;
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = curSize = 0;
    let lastIdx = n - 1;
    for (let i = 0; i < n; i++) {
        if (curSize >= truckSize) {
            lastIdx = i - 1;
            break;
        }
        let num = boxTypes[i][0];
        let units = boxTypes[i][1];
        curSize += num;
        res += units * num;
    }
    // console.log(res, curSize, boxTypes[lastIdx]);
    if (curSize == truckSize) return res;
    if (curSize > truckSize) {
        let units2 = boxTypes[lastIdx][1];
        res -= units2 * (curSize - truckSize);
    }
    return res;
};

const main = () => {
    let boxTypes = [[1, 3], [2, 2], [3, 1]], truckSize = 4;
    let boxTypes2 = [[5, 10], [2, 5], [4, 7], [3, 9]], truckSize2 = 10;
    console.log(maximumUnits(boxTypes, truckSize));
    console.log(maximumUnits(boxTypes2, truckSize2));
};

main()