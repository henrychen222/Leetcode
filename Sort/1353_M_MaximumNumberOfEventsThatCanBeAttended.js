/**
 * 7.9 evening
 * https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/
 */

// don't know
const maxEvents = (events) => {
    let startLast = [];
    events.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    // console.log(events);
    for (const e of events) {
        startLast.push([e[0], e[1] - e[0] + 1]);
    }
    console.log(startLast);

    // let cnt = events.length;
    // for (let i = 0; i < events.length; i++) {
    //     for (let j = i + 1; j < events.length; j++) {
    //         if (events[i][0] == events[i][1]) {
    //             let oneDayEvent = events[i][0];
    //             if ((oneDayEvent == events[j][0]) || (oneDayEvent == events[j][1])) {
    //                 cnt--;
    //             }
    //         }
    //     }
    // }
    // return cnt;
};

const main = () => {
    let events = [
        [1, 2],
        [2, 3],
        [3, 4]
    ];
    let events2 = [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 2]
    ];
    let events3 = [
        [1, 4],
        [4, 4],
        [2, 2],
        [3, 4],
        [1, 1]
    ];
    let events4 = [
        [1, 100000]
    ];
    let events5 = [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6],
        [1, 7]
    ];
    console.log(maxEvents(events));
    console.log(maxEvents(events2));
    console.log(maxEvents(events3));
    console.log(maxEvents(events4));
    console.log(maxEvents(events5));
};

main()