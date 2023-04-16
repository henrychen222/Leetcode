// 10.3 afternoon

// Accepted --- 196ms  100.00%
const alertNames = (keyName, keyTime) => {
    let n = keyName.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        // minutes with "11:11"
        let t = ((keyTime[i][0] - '1') * 10 + (keyTime[i][1] - '1') * 1) * 60 + ((keyTime[i][3] - '1') * 10 + (keyTime[i][4] - '1') * 1);
        // console.log(keyTime[i][0], keyTime[i][1], keyTime[i][3], keyTime[i][4]);
        // console.log((keyTime[i][0] - '1') * 10 + keyTime[i][1] - '1' * 1, (keyTime[i][3] - '1') * 10 + keyTime[i][4] - '1');
        if (map.has(keyName[i])) {
            map.get(keyName[i]).push(t);
        } else {
            map.set(keyName[i], [t]);
        }
    }
    console.log(map);
    let res = [];
    for (const k of map.keys()) {
        let flag = 0;
        let arr = map.get(k);
        arr.sort((a, b) => a - b);
        // console.log(arr);
        for (let i = 0; i + 2 < arr.length; i++) {
            if (arr[i + 2] - arr[i] <= 60) {
                flag = 1;
            }
        }
        if (flag == 1) res.push(k);
    }
    res.sort((a, b) => a.localeCompare(b));
    return res;
};


// Accepted --- 208ms 100.00%
const alertNames2 = (keyName, keyTime) => {
    let n = keyName.length;
    let map = {};
    for (let i = 0; i < n; i++) {
        let t = ((keyTime[i][0] - '1') * 10 + (keyTime[i][1] - '1') * 1) * 60 + ((keyTime[i][3] - '1') * 10 + (keyTime[i][4] - '1') * 1);
        if (map.hasOwnProperty(keyName[i])) {
            map[keyName[i]].push(t);
        } else {
            map[keyName[i]] = [t];
        }
    }
    let res = [];
    for (const k of Object.keys(map)) {
        let flag = 0;
        let arr = map[k];
        arr.sort((a, b) => a - b);
        for (let i = 0; i + 2 < arr.length; i++) {
            if (arr[i + 2] - arr[i] <= 60) {
                flag = 1;
            }
        }
        if (flag == 1) res.push(k);
    }
    res.sort((a, b) => a.localeCompare(b));
    return res;
};

const main = () => {
    let keyName = ["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], keyTime = ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"];
    let keyName2 = ["alice", "alice", "alice", "bob", "bob", "bob", "bob"], keyTime2 = ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"];
    let keyName3 = ["john", "john", "john"], keyTime3 = ["23:58", "23:59", "00:01"];
    let keyName4 = ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"], keyTime4 = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"];
    let keyName_debug1 = ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"],
        keyTime_debug1 = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"]
    console.log(alertNames(keyName, keyTime)); // ["daniel"]
    // console.log(alertNames(keyName2, keyTime2)); // ["bob"]
    // console.log(alertNames(keyName3, keyTime3)); // []
    // console.log(alertNames(keyName4, keyTime4)); // ["clare","leslie"]
    // console.log(alertNames(keyName_debug1, keyTime_debug1)); // ["clare","leslie"]

    // console.log('0' - '1', '4' - '1');
};

main()