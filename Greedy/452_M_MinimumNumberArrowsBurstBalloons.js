/**
 * 9.24 night
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 */

// issue
const findMinArrowShots = (points) => {
    let cnt = 0;
    if (points.length == 1) return 1;
    while (true) {
        if (points.length == 0) return cnt;
        let leftMin = [...points].sort((a, b) => a[0] - b[0])[0][0];
        let rightMax = [...points].sort((a, b) => b[1] - a[1])[0][1];
        // console.log(leftMin, rightMax);
        let max = 0;
        if (points.length == 1) {
            max = 1;
        } else {
            for (let i = leftMin; i <= rightMax; i++) {
                let tmp = points.filter(p => p[0] <= i && p[1] >= i);
                console.log(i, tmp);
                max = Math.max(max, tmp.length);
            }
        }
        console.log("max is:", max);
        let xArr = [];
        for (let i = leftMin; i <= rightMax; i++) {
            let tmp = points.filter(p => p[0] <= i && p[1] >= i);
            if (tmp.length == max) {
                xArr.push(i);
            }
        }
        console.log(xArr);
        let update = [];
        for (const x of xArr) {
            let tmp = points.filter(p => x < p[0] || x > p[1]);
            if (tmp.length < points.length) {
                console.log(x, tmp);
                update = tmp; // issue
            }
        }
        points = update;
        console.log(points);
        console.log("\n");
        cnt++;
    }
};

const main = () => {
    let points = [
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12]
    ];
    let debug1 = [
        [1, 2147483647]
    ];
    let debug2 = [
        [9, 17],
        [4, 12],
        [4, 8],
        [4, 8],
        [7, 13],
        [3, 4],
        [7, 12],
        [9, 15]
    ];
    let debug3 = [
        [3, 9],
        [7, 12],
        [3, 8],
        [6, 8],
        [9, 10],
        [2, 9],
        [0, 9],
        [3, 9],
        [0, 6],
        [2, 8]
    ];
    // console.log(findMinArrowShots(points));
    // console.log(findMinArrowShots(debug1));
    // console.log(findMinArrowShots(debug2)); // 2
    console.log(findMinArrowShots(debug3)); // 2
};

main()