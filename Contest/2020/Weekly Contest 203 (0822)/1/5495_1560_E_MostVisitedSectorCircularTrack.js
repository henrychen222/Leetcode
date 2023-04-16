/**
 * 8.22 night
 * https://leetcode.com/contest/weekly-contest-203/problems/most-visited-sector-in-a-circular-track/
 */

// Accepted
const mostVisited = (n, rounds) => {
    let data = [];
    for (let i = 1; i < rounds.length; i++) {
        let start = rounds[i - 1];
        let end = rounds[i];
        let tmp = [];
        // console.log(start, end);
        if (start <= end) {
            for (let j = start; j <= end; j++) {
                tmp.push(j);
            }
        } else {
            for (let j = start; j <= n; j++) {
                tmp.push(j);
            }
            for (let j = 1; j <= end; j++) {
                tmp.push(j);
            }
        }
        // console.log(tmp);
        data.push(tmp);
    }
    // console.log(data)
    let res = [data[0]];
    for (let i = 1; i < data.length; i++) {
        res.push(data[i].slice(1));
    }
    // console.log(res)
    let newRes = [];
    for (const r of res) {
        newRes = newRes.concat(r);
    }
    // console.log(newRes);
    let map = new Map();
    let element = [...new Set(newRes)];
    for (const e of element) {
        map.set(e, getFrequency(newRes, e));
    }
    let arr = [...newRes].sort((a, b) => map.get(b) - map.get(a));
    let max = map.get(arr[0]);
    // console.log(map, arr, max)
    let ret = [];
    for (const k of map.keys()) {
        if (map.get(k) == max) {
            ret.push(k);
        }
    }
    ret.sort((a, b) => a - b);
    return ret;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let n = 4, rounds = [1, 3, 1, 2];
    let n2 = 2, rounds2 = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let n3 = 7, rounds3 = [1, 3, 5, 7];
    let n4 = 3, rounds4 = [3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 3, 1];
    console.log(mostVisited(n, rounds));
    console.log(mostVisited(n2, rounds2));
    console.log(mostVisited(n3, rounds3));
    console.log(mostVisited(n4, rounds4));
};

main()