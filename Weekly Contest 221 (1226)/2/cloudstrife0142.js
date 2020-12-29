// 12.26 night
// https://github.com/somdipdey/JavaScript-implementation-of-java.util.TreeMap-Class/blob/master/treeMap.js

const isNumber = (input) => {
    return !isNaN(input);
}

const sortOnKeys = (dict) => {
    let sorted = [];
    for (let key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();
    let tempDict = {};
    for (let i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }
    return tempDict;
}

const allKeysAreNumeral = (dict) => {
    for (let key in dict) {
        if (!isNumber(key)) return false;
    }
    return true;
}

class TreeMap {
    constructor() {
        this.dict = {};
    }

    get(key) {
        return this.dict[key];
    }

    containsKey(key) {
        if (this.get(key) !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    put(key, value) {
        this.dict[key] = value;
        if (isNumber(key)) {
            if (allKeysAreNumeral(this.dict)) {
                this.dict = sortOnKeys(this.dict);
            }
        }
    }

    remove(key) {
        'use strict';
        delete this.dict[key];
    }

    clear() {
        this.dict = {};
    }

    forEach(callback) {
        let len = this.size();
        for (i = 0; i < len; i++) {
            let item = this.get(Object.keys(this.dict)[i]);
            callback(item);
        }
    }

    size() {
        return Object.keys(this.dict).length;
    }

    isEmpty() {
        return Object.keys(this.dict).length == 0;
    }

    floorKey(key) {
        if (!isNumber(key)) throw "Invalid Operation: key has to be an integer value";
        if (this.containsKey(key)) return this.get(key);
        return this.floorKey(key - 1);
    }

    ceilingKey(key) {
        if (!isNumber(key)) throw "Invalid Operation: key has to be an integer value";
        if (this.containsKey(key)) return this.get(key);
        return this.floorKey(key + 1);
    }

    clone() {
        return this.dict;
    }

    containsValue(value) {
        let len = this.size();
        for (i = 0; i < len; i++) {
            let item = this.get(Object.keys(this.dict)[i]);
            if (value === item) return true;
        }
        return false;
    }

    keySet() {
        let set = [];
        let len = this.size();
        for (i = 0; i < len; i++) {
            set.push(Object.keys(this.dict)[i]);
        }
        return set;
    }

    firstKey() {
        return Object.keys(this.dict)[0];
    }

    lastKey() {
        let len = this.size();
        return Object.keys(this.dict)[len - 1];
    }
}

// TLE TreeMap is not fast enough as Java
const eatenApples = (apples, days) => {
    let map = new TreeMap();
    let n = apples.length;
    let res = 0;
    for (let day = 0; day < n || map.size() > 0; day++) {
        if (day < n) {
            operate(map, day + days[day] - 1, apples[day], true);
        }
        while (map.size() > 0 && map.firstKey() < day) {
            map.remove(map.firstKey());
        }
        if (map.size() > 0) {
            res++;
            operate(map, map.firstKey(), 1, false);
        }
    }
    return res;
};

const operate = (map, key, amt, has) => {
    if (has) {
        map.put(key, (map.get(key) || 0) + amt);
    } else {
        let val = map.get(key);
        if (val == 1) {
            map.remove(key);
        } else {
            map.put(key, val - 1);
        }
    }
};

const main = () => {
    let apples = [1, 2, 3, 5, 2], days = [3, 2, 1, 4, 2];
    let apples2 = [3, 0, 0, 0, 0, 2], days2 = [3, 0, 0, 0, 0, 2];
    let apples_debug1 = [1], days_debug2 = [2];
    console.log(eatenApples(apples, days));
    console.log(eatenApples(apples2, days2));
    console.log(eatenApples(apples_debug1, days_debug2)); // 1

};

main()