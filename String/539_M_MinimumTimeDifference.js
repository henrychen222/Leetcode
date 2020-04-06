/**
 * 4.3 night
 * https://leetcode.com/problems/minimum-time-difference/
 * 
 * 4.4 night, reference to findMinDifference()
 */
// Accepted --- every time is different, don't know why
// 72ms 92.19%
// 76 ms 90.29% 
// 84ms 84.47% 
// 92ms 63.11% 
// 88 ms 71.84% 
const findMinDifference_self_write = (timePoints) => {
    // let min = 23 * 60 + 59;
    let min = Number.MAX_VALUE;
    let difference = 0;

    timePoints.sort();
    for (let i = 0; i < timePoints.length; i++) {
        // console.log(timePoints[i]);
        // console.log(timePoints[i + 1]);

        const hour = Number(timePoints[i].substring(0, 2));
        const minute = Number(timePoints[i].substring(3, 5));
        const hourNext = Number(timePoints[(i + 1) % timePoints.length].substring(0, 2));
        const minuteNext = Number(timePoints[(i + 1) % timePoints.length].substring(3, 5));
        // console.log("hour: ", hour);
        // console.log("minute: ", minute);
        // console.log("hourNext: ", hourNext);
        // console.log("minuteNext: ", minuteNext);

        difference = (hourNext - hour) * 60 + (minuteNext - minute);
        if (i == timePoints.length - 1) {
            difference += 24 * 60;
        }
        min = Math.min(min, difference);

        // eachTimetotalMinutes = Number(hour * 60 + minute);
        // eachTimetotalMinutesNext = Number(hourNext * 60 + minuteNext);
        // minuteDifference = Math.abs(eachTimetotalMinutes - eachTimetotalMinutesNext);

        // if (Math.abs(hour - hourNext) > 12) {
        //     minuteDifference = ((Math.abs(hour - hourNext)) - 12) * 60 + Math.abs(minute - minuteNext);
        // } else {
        //     minuteDifference = (Math.abs(hour - hourNext)) * 60 + Math.abs(minute - minuteNext);
        // }
    }
    return min;
};

/**
 * 4.4 night
 * https://www.cnblogs.com/grandyang/p/6568398.html
 * Accepted --- 
 * 84 ms 84.47% (comment the print)
 * 744ms 5.83% (keep the print)
 */
const findMinDifference = (timePoints) => {
    let result = Number.MAX_VALUE;
    let n = timePoints.length;
    let difference = 0;
    // Array.prototype.sort(timePoints); // not work
    timePoints.sort();
    console.log(timePoints);

    for (let i = 0; i < n; ++i) {
        let t1 = timePoints[i];
        let t2 = timePoints[(i + 1) % n];

        // console.log("t1 is: ", t1);
        // console.log("t2 is: ", t2);

        /** Need to transfer to int, other wise will do string compensation, not calculation */
        // let h1 = (t1[0] - '0') * 10 + t1[1] - '0';
        // let m1 = (t1[3] - '0') * 10 + t1[4] - '0';
        // let h2 = (t2[0] - '0') * 10 + t2[1] - '0';
        // let m2 = (t2[3] - '0') * 10 + t2[4] - '0';
        let h1 = Number((t1[0] - '0') * 10) + Number(t1[1] - '0');
        let m1 = Number((t1[3] - '0')) * 10 + Number(t1[4] - '0');
        let h2 = Number((t2[0] - '0') * 10) + Number(t2[1] - '0');
        let m2 = Number((t2[3] - '0') * 10) + Number(t2[4] - '0');

        // console.log("t2[0]", t2[0]);
        // console.log("t2[1]", t2[1]);
        // console.log("t2[3]", t2[3]);
        // console.log("t2[4]", t2[4]);

        // console.log("t2[0] - '0': ", t2[0] - '0');
        // console.log("t2[1] - '0': ", t2[1] - '0');
        // console.log("t2[3] - '0': ", t2[3] - '0');
        // console.log("t2[4] - '0': ", t2[4] - '0');

        // console.log("h1 is: ", h1);
        // console.log("m1 is: ", m1);
        // console.log("h2 is: ", h2);
        // console.log("m2 is: ", m2);

        difference = (h2 - h1) * 60 + (m2 - m1);
        if (i == n - 1) {
            difference += 24 * 60;
        }
        result = Math.min(result, difference);
    }
    return result;
};

const main = () => {
    const timePoints = ["23:59", "00:00"];
    const timePoints2 = ["23:59", "22:58"];

    console.log(findMinDifference(timePoints)); // 1
    console.log(findMinDifference(timePoints2)); // 61

    console.log("");
    console.log(findMinDifference_self_write(timePoints));
    console.log(findMinDifference_self_write(timePoints2));
};

main()