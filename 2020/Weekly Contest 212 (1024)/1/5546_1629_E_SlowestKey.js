/**
 * 10.24 evening
 * https://leetcode.com/contest/weekly-contest-212/problems/slowest-key/
 */

// Accepted
const slowestKey = (releaseTimes, keysPressed) => {
    let n = releaseTimes.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        let tmp = 0;
        if (i == 0) {
            tmp = releaseTimes[0];
        } else {
            tmp = releaseTimes[i] - releaseTimes[i - 1];
        }
        if (map.has(keysPressed[i])) {
            let max = Math.max(tmp, map.get(keysPressed[i]));
            map.set(keysPressed[i], max);
        } else {
            map.set(keysPressed[i], tmp);
        }
    }
    // console.log(map);
    let resMap = sortMap(map);
    return resMap.entries().next().value[0];
};


const sortMap = (map) => {
    return new Map([...map].sort((a, b) => {
        if (a[1] == b[1]) return b[0].localeCompare(a[0]);
        return b[1] - a[1];
    }));
};

const main = () => {
    let releaseTimes = [9, 29, 49, 50], keysPressed = "cbcd";
    let releaseTimes2 = [12, 23, 36, 46, 62], keysPressed2 = "spuda"
    console.log(slowestKey(releaseTimes, keysPressed));
    console.log(slowestKey(releaseTimes2, keysPressed2));
};

main()