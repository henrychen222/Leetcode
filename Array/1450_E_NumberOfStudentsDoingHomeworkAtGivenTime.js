/**
 * 6.10 night
 * https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 */

// Accepted --- 100ms 33.8MB 10.29%
const busyStudent = (startTime, endTime, queryTime) => {
    let cnt = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let startTime = [1, 2, 3],
        endTime = [3, 2, 7],
        queryTime = 4;
    let startTime2 = [4],
        endTime2 = [4],
        queryTime2 = 4;
    let startTime3 = [4],
        endTime3 = [4],
        queryTime3 = 5;
    let startTime4 = [1, 1, 1, 1],
        endTime4 = [1, 3, 2, 4],
        queryTime4 = 7;
    let startTime5 = [9, 8, 7, 6, 5, 4, 3, 2, 1],
        endTime5 = [10, 10, 10, 10, 10, 10, 10, 10, 10],
        queryTime5 = 5;
    console.log(busyStudent(startTime, endTime, queryTime));
    console.log(busyStudent(startTime2, endTime2, queryTime2));
    console.log(busyStudent(startTime3, endTime3, queryTime3));
    console.log(busyStudent(startTime4, endTime4, queryTime4));
    console.log(busyStudent(startTime5, endTime5, queryTime5));
};

main()