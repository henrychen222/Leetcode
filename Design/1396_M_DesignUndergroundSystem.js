/**
 * 03/20/21 evening
 * https://leetcode.com/problems/design-underground-system/
 */

/*
WA 48/52 
wrong: because, the same id may have multiple check in and checkout, save with id in key will only have one record
see this test case: 
["UndergroundSystem","checkIn","checkOut","checkIn","checkOut","getAverageTime"]
[[],[45,"Leyton",3],[45,"Waterloo",15],[45,"Waterloo",20],[45,"Leyton",30], ["Leyton","Waterloo"]]

so have to save with path: startStation + ' ' + endStation;
*/
class UndergroundSystem1 {
    constructor() {
        this.m = new Map();
    }

    checkIn(id, stationName, t) {
        this.m.set(id, [stationName, t]);
    }

    checkOut(id, stationName, t) {
        this.m.get(id).push(stationName, t);
    }

    getAverageTime(startStation, endStation) {
        let sum = 0;
        let cnt = 0;
        for (const [, v] of this.m) {
            if (v[0] == startStation && v[2] == endStation) {
                sum += v[3] - v[1];
                cnt++;
            }
        }
        return sum / cnt;
    }
}

// Accepted --- 532ms 5.12%
class UndergroundSystem2 {
    constructor() {
        this.m = new Map();
        this.ms = new Map();
    }

    checkIn(id, stationName, t) {
        this.ms.set(id, {
            start: stationName,
            st: t
        });
    }

    // clean: Accepted --- 524ms 5.12%
    // checkOut(id, stationName, t) {
    //     let cur = this.ms.get(id);
    //     let ke = cur.start + ' ' + stationName;
    //     let e = {
    //         st: cur.st,
    //         et: t
    //     }
    //     if (!this.m.has(ke)) this.m.set(ke, []);
    //     this.m.get(ke).push(e);
    // }

    checkOut(id, stationName, t) {
        let cur = this.ms.get(id);
        cur['end'] = stationName;
        cur['et'] = t;
        let ke = cur.start + ' ' + stationName;
        let e = {
            id: id,
            st: cur.st,
            et: t
        }
        if (!this.m.has(ke)) this.m.set(ke, []);
        this.m.get(ke).push(e);
    }

    getAverageTime(startStation, endStation) {
        let sum = 0;
        let cnt = 0;
        let target = startStation + ' ' + endStation;
        for (const [k, a] of this.m) {
            if (k == target) {
                for (const v of a) {
                    sum += v.et - v.st;
                    cnt++;
                }
            }
        }
        return sum / cnt;
    }
}

// Accepted --- 560ms 5.12%
class UndergroundSystem {
    constructor() {
        this.m = new Map();
        this.ms = new Map();
    }

    checkIn(id, stationName, t) {
        this.ms.set(id, [stationName, t]);
    }

    checkOut(id, stationName, t) {
        let cur = this.ms.get(id);
        let ke = cur[0] + ' ' + stationName;
        let e = [cur[1], t];
        if (!this.m.has(ke)) this.m.set(ke, []);
        this.m.get(ke).push(e);
    }

    getAverageTime(startStation, endStation) {
        let sum = 0;
        let cnt = 0;
        let target = startStation + ' ' + endStation;
        for (const [k, a] of this.m) {
            if (k == target) {
                for (const v of a) {
                    sum += v[1] - v[0];
                    cnt++;
                }
            }
        }
        return sum / cnt;
    }
}

const pr = console.log;
const main = () => {
    let undergroundSystem = new UndergroundSystem();
    undergroundSystem.checkIn(45, "Leyton", 3);
    undergroundSystem.checkIn(32, "Paradise", 8);
    undergroundSystem.checkIn(27, "Leyton", 10);
    undergroundSystem.checkOut(45, "Waterloo", 15);
    undergroundSystem.checkOut(27, "Waterloo", 20);
    undergroundSystem.checkOut(32, "Cambridge", 22);
    pr(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // return 14.00000
    pr(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 11.00000
    undergroundSystem.checkIn(10, "Leyton", 24);
    pr(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 11.00000
    undergroundSystem.checkOut(10, "Waterloo", 38);
    pr(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 12.00000
};

main()