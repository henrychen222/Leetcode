/**
 * 10.3 morning
 * https://leetcode.com/contest/biweekly-contest-36/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 */

const alertNames1 = (keyName, keyTime) => {
    let nMap = getRecord(keyName);
    let n = keyName.length;
    let map = new Map();
    let lastIdx;
    for (let i = 0; i + 1 < n; i++) {
        if (keyName[i] != keyName[i + 1]) {
            lastIdx = i;
            let name = keyName[i];
            let arr = keyTime.slice(i + 1 - nMap[name], i + 1);
            map.set(name, arr);
        }
    }
    // console.log(map, lastIdx);
    if (map.size == 0) {
        map.set(keyName[0], keyTime);
    } else {
        map.set(keyName[lastIdx + 1], keyTime.slice(n - nMap[keyName[lastIdx + 1]]));
    }
    console.log(map);
    let res = [];
    for (const k of map.keys()) {
        let v = map.get(k);
        if (check(v)) {
            res.push(k);
        }
    }
    res.sort((a, b) => a.localeCompare(b));
    return res;
};

const getRecord = (arr) => {
    let map = {};
    for (const i of arr) {
        if (map.hasOwnProperty(i)) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    return map;
};

const check = (arr) => {
    let n = arr.length;
    for (let i = 0; i + 2 < n; i++) {
        // let f = arr[i].indexOf(':');
        // // let fL = arr[i].slice(0, f);
        // let fR = arr[i].slice(f + 1);
        // let t = arr[i + 2].indexOf(':');
        // let tL = arr[i + 2].slice(0, t);
        // let tR = arr[i + 2].slice(t + 1);
        let d1 = new Date("January 30 2020" + " " + arr[i]);
        let d2 = new Date("January 30 2020" + " " + arr[i + 2]);;
        if (d1.getHours() == 23 && d2.getHours() == 0) {
            d2 = new Date("January 31 2020" + " " + arr[i + 2]);
        }
        let diff = (d2 - d1) / 1000 / 60;
        console.log(diff);
        if (diff >= 60) return true;
    }
    return false;
};

// const check = (arr) => {
//     let map = {};
//     for (const t of arr) {
//         let idx = t.indexOf(':');
//         let left = t.slice(0, idx);
//         let right = t.slice(idx + 1);
//         if (map.hasOwnProperty(left)) {
//             map[left]++;
//         } else {
//             map[left] = 1;
//         }
//         if (right == '00') {
//             if (left == '00') {
//                 if (map.hasOwnProperty('23')) {
//                     map['23']++;
//                 } else {
//                     map['23'] = 1;
//                 }
//             } else {
//                 let tmp = (Number(left) - 1).toString();
//                 if (map.hasOwnProperty(tmp)) {
//                     map[tmp]++;
//                 } else {
//                     map[tmp] = 1;
//                 }
//             }
//         }
//         console.log(map);
//     }
//     for (const v of Object.values(map)) {
//         if (v >= 3) return true;
//     }
//     return false;
// };


const main = () => {
    let keyName = ["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], keyTime = ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"];
    let keyName2 = ["alice", "alice", "alice", "bob", "bob", "bob", "bob"], keyTime2 = ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"];
    let keyName3 = ["john", "john", "john"], keyTime3 = ["23:58", "23:59", "00:01"];
    let keyName4 = ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"], keyTime4 = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"];
    let keyName_debug1 = ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"],
        keyTime_debug1 = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"]
    console.log(alertNames(keyName, keyTime)); // ["daniel"]
    console.log(alertNames(keyName2, keyTime2)); // ["bob"]
    console.log(alertNames(keyName3, keyTime3)); // []
    console.log(alertNames(keyName4, keyTime4)); // ["clare","leslie"]
    console.log(alertNames(keyName_debug1, keyTime_debug1)); // ["clare","leslie"]

    // console.log(Number('09'), Number('00'), Number('10'));
    // console.log(diff('18:51', '19:30'));

    // let d1 = new Date("January 30 1980 23:50");
    // let d2 = new Date("January 31 1980 00:01");
    // console.log((d2 - d1) / 1000 / 60);
};

main()