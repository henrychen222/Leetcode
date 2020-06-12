/**
 * 6.11 night
 * https://leetcode.com/problems/largest-time-for-given-digits/
 */

// need to fix
const largestTimeFromDigits = (A) => {
    let hour = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let eachHour = A[i] + "" + A[j];
            if (Number(eachHour) < 24) {
                hour.push(eachHour);
            }
        }
    }
    console.log(hour);
    hour.sort((a, b) => b - a);
    let minute = [];
    for (let i = 0; i < hour.length; i++) {
        let hourItem = hour[i].split("");
        for (const a of A) {
            if (!hourItem.includes(a + "")) { // problem, what if A have same item
                minute.push([a + ""]);
            }
        }
    }
    console.log(minute);
    let res = [];
    for (let i = 0; i < hour.length; i++) {
        let eachMinute1 = minute[2 * i] + minute[2 * i + 1];
        let eachMinute2 = minute[2 * i + 1] + minute[2 * i];
        if (Number(eachMinute1) <= 59 && Number(eachMinute2) <= 59) {
            let eachRes = hour[i] + ":" + Math.max(Number(eachMinute1), Number(eachMinute2));
            res.push(eachRes);
        }
        if (Number(eachMinute1) <= 59 && Number(eachMinute2) > 59) {
            let eachRes1 = hour[i] + ":" + eachMinute1;
            res.push(eachRes1);
        }
        if (Number(eachMinute2) <= 59 && Number(eachMinute1) > 59) {
            let eachRes2 = hour[i] + ":" + eachMinute2;
            res.push(eachRes2);
        }
        if (Number(eachMinute2) > 59 && Number(eachMinute1) > 59) {
            // do nothing
        }
    }
    console.log(res);
    if (res.length == 0) {
        return "";
    }
    return res[0];
};

const main = () => {
    let A = [1, 2, 3, 4];
    let A2 = [5, 5, 5, 5];
    let debug1 = [0, 0, 0, 0];
    console.log(largestTimeFromDigits(A));
    console.log(largestTimeFromDigits(A2));
    console.log(largestTimeFromDigits(debug1));
};

main()