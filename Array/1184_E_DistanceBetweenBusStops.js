/**
 * 6.8 night
 * https://leetcode.com/problems/distance-between-bus-stops/
 */

// Accepted --- 88ms 42.7MB 10.20%
const distanceBetweenBusStops = (distance, start, destination) => {
    const total = calculate(distance);
    let clockwise = [];
    for (let i = 0; i < distance.length; i++) {
        if (start < destination) {
            clockwise = distance.slice(start, destination);
        } else if (start > destination) {
            clockwise = distance.slice(destination, start);
        } else {
            clockwise = distance[start];
            return Math.min(clockwise, total - clockwise);
        }
    }
    return Math.min(calculate(clockwise), total - calculate(clockwise));
};

const calculate = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    return sum;
};

const main = () => {
    let distance = [1, 2, 3, 4],
        start = 0,
        destination = 1;
    let distance2 = [1, 2, 3, 4],
        start2 = 0,
        destination2 = 2;
    let distance3 = [1, 2, 3, 4],
        start3 = 0,
        destination3 = 3;
    console.log(distanceBetweenBusStops(distance, start, destination));
    console.log("");
    console.log(distanceBetweenBusStops(distance2, start2, destination2));
    console.log("");
    console.log(distanceBetweenBusStops(distance3, start3, destination3));
    console.log("");
    let distance_debug1 = [7, 6, 3, 0, 3],
        start_debug1 = 0,
        destination_debug1 = 4;
    let distance_debug2 = [7, 10, 1, 12, 11, 14, 5, 0],
        start_debug2 = 7,
        destination_debug2 = 2;
    console.log(distanceBetweenBusStops(distance_debug1, start_debug1, destination_debug1)); // 3
    console.log("");
    console.log(distanceBetweenBusStops(distance_debug2, start_debug2, destination_debug2)); // 17
};

main()