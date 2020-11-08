// 11.7 night

// improve https://leetcode.com/problems/sort-array-by-increasing-frequency/discuss/917808/javascript-hashmap-96ms
// string
const getRecord2 = (s) => {
    let map = new Map();
    for (const i of s) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

// array
const getRecord2 = (arr) => {
    let map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};


/////////////////////////////////// Second Version //////////////////////////////
// string
const getRecord = (s) => {
    let map = new Map(); // Java Version
    for (const i of s) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    return map;
};

const getRecord = (s) => {
    let map = {};  // C++ version
    for (const i of s) {
        if (map.hasOwnProperty(i)) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    return map;
};

// array
const getRecord = (arr) => {
    let map = new Map();
    for (const i of arr) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    return map;
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

////////////////////////////////// Deprecated (Slow): First Version /////////////////////////////
const getRecord = (s) => {
    let map = new Map();
    let arr = s.split("");
    let element = [...new Set(arr)];
    for (const e of element) {
        map.set(e, getFrequency(arr, e));
    }
    return map;
};

const getRecord = (arr) => {
    let map = new Map();
    let element = [...new Set(arr)];
    for (const e of element) {
        map.set(e, getFrequency(arr, e));
    }
    return map;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};