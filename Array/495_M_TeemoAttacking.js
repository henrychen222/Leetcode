/**
 * 7.17 evening
 * https://leetcode.com/problems/teemo-attacking/
 */

// need to fix
const findPoisonedDuration = (timeSeries, duration) => {
    const n = timeSeries.length;
    let sum = 0;
    let i = 1;
    while (i < n) {
        let tmp = timeSeries[i - 1] + duration - 1;
        if (tmp < timeSeries[i]) {
            sum += duration;
            i++;
        } else if (tmp > timeSeries[i]) {
            sum += duration - 1;
            let v = timeSeries.find(x => x > tmp);
            // console.log(v);
            let idx = timeSeries.indexOf(v);
            if (idx == -1) {
                i = n - 1;
                // sum -= duration - timeSeries[n - 1];
            } else {
                i = idx;
            }
            // console.log(idx, sum);
            i++;
        } else {
            sum += duration - 1;
            i++;
        }
    }
    return sum + duration;
};

const main = () => {
    let timeSeries = [1, 4],
        duration = 2;
    let timeSeries2 = [1, 2],
        duration2 = 2;
    let timeSeries_debug1 = [1, 2, 3, 4, 5],
        duration_debug1 = 5;
    let timeSeries_debug2 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        duration_debug2 = 10;
    let timeSeries_debug3 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        duration_debug3 = 5
    console.log(findPoisonedDuration(timeSeries, duration)); // 4 
    console.log(findPoisonedDuration(timeSeries2, duration2)); // 3
    console.log(findPoisonedDuration(timeSeries_debug1, duration_debug1)); // 9
    console.log(findPoisonedDuration(timeSeries_debug2, duration_debug2)); // 18
    console.log(findPoisonedDuration(timeSeries_debug3, duration_debug3)); // 13
};

main()