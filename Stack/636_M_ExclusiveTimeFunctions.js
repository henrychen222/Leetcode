/**
 * 9.2 evening  9.3 morning
 * https://leetcode.com/problems/exclusive-time-of-functions/
 */

// need to fix
const exclusiveTime = (n, logs) => {
    let data = [];
    let max = 0;
    for (const l of logs) {
        let idx = l.indexOf(':');
        let idx2 = l.lastIndexOf(':');
        let id = Number(l.slice(0, idx));
        let state = l.slice(idx + 1, idx2);
        let timestamp = Number(l.slice(idx2 + 1, l.length));
        max = Math.max(max, timestamp);
        if (state == 'start') {
            data.push([id, state, timestamp]);
        } else {
            let tmp = data.find(x => x[0] == id && x[1] == 'start' && x.length < 5);
            tmp.push(state, timestamp); // issue
        }
    }
    data.sort((a, b) => a[0] - b[0]);
    console.log(data, max);
    let stack = [];
    for (let i = 0; i <= max; i++) {
        let len = stack.length;
        let tmp = data.find(x => x[2] == i && x[1] == 'start');
        if (tmp != undefined) {
            stack.push(tmp[0]);
        } else {
            let tmp2 = data.find(x => x[4] == i && x[3] == 'end');
            if (tmp2 != undefined) {
                stack.push(tmp2[0]);
            }
        }
        if (stack.length == len) {
            stack.push(stack[stack.length - 1]);
        }
    }
    console.log(stack);
    let res = [];
    let element = [...new Set(stack)];
    element.sort((a, b) => a - b);
    for (const e of element) {
        res.push(getFrequency(stack, e));
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let n = 2,
        logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
    let n_debug1 = 2,
        logs_debug1 = ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"];
    let n_debug2 = 3,
        logs_debug2 = ["0:start:0", "0:end:5", "1:start:6", "1:end:6", "2:start:7", "2:end:9", "2:start:10", "2:end:13"]
    let n_debug3 = 8,
        logs_debug3 = ["0:start:0", "1:start:5", "2:start:6", "3:start:9", "4:start:11", "5:start:12", "6:start:14", "7:start:15", "1:start:24", "1:end:29", "7:end:34", "6:end:37", "5:end:39", "4:end:40", "3:end:45", "0:start:49", "0:end:54", "5:start:55", "5:end:59", "4:start:63", "4:end:66", "2:start:69", "2:end:70", "2:start:74", "6:start:78", "0:start:79", "0:end:80", "6:end:85", "1:start:89", "1:end:93", "2:end:96", "2:end:100", "1:end:102", "2:start:105", "2:end:109", "0:end:114"];
    // console.log(exclusiveTime(n, logs));
    // console.log(exclusiveTime(n_debug1, logs_debug1)); // [7,1]
    // console.log(exclusiveTime(n_debug2, logs_debug2)); // [6,1,7]
    console.log(exclusiveTime(n_debug3, logs_debug3)); // [20,14,35,7,6,9,10,14]
};

main()



// const exclusiveTime = (n, logs) => {
//     let map = new Map();
//     let max = 0;
//     for (const l of logs) {
//         let id = Number(l.slice(0, 1));
//         let timestamp = Number(l.slice(l.length - 1, l.length));
//         max = Math.max(max, timestamp);
//         if (map.has(id)) {
//             if (timestamp >= map.get(id)[0]) {
//                 map.get(id).push(timestamp);
//             } else {
//                 map.get(id).unshift(timestamp);
//             }
//         } else {
//             map.set(id, [timestamp]);
//         }
//     }
//     console.log(map, max);
//     let data = Array.from(map.values());
//     console.log(data)
//     let stack = [];
//     for (let i = 0; i <= max; i++) {
//         stack.push(i);

//     }
// };