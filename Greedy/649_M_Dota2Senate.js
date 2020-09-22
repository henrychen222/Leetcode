/**
 * 9.21 evening
 * https://leetcode.com/problems/dota2-senate/
 */

// Accepted --- 760ms 14.29%
const predictPartyVictory = (senate) => {
    while (true) {
        if ([...new Set(senate.split(""))].length == 1) break;
        let set = new Set();
        for (let i = 0; i < senate.length; i++) {
            if (!set.has(i)) {
                if (senate[i] == 'R') {
                    operate(set, senate, i, 'D');
                } else {
                    operate(set, senate, i, 'R');
                }
            }
        }
        senate = update(senate, set);
    }
    if (senate.length != 1) {
        return senate[0] == 'R' ? 'Radiant' : 'Dire';
    }
    return senate == 'R' ? 'Radiant' : 'Dire';
};

// Accepted --- 756ms 14.29%
const predictPartyVictory3 = (senate) => {
    let set = new Set();
    while (true) {
        if ([...new Set(senate.split(""))].length == 1) break;
        for (let i = 0; i < senate.length; i++) {
            if (!set.has(i)) {
                if (senate[i] == 'R') {
                    operate(set, senate, i, 'D');
                } else {
                    operate(set, senate, i, 'R');
                }
            }
        }
        senate = update(senate, set);
        set.clear();
    }
    if (senate.length != 1) {
        return senate[0] == 'R' ? 'Radiant' : 'Dire';
    }
    return senate == 'R' ? 'Radiant' : 'Dire';
};

// Accepted --- 760ms 14.29%
const predictPartyVictory2 = (senate) => {
    let set = new Set();
    while (true) {
        if ([...new Set(senate.split(""))].length == 1) break;
        for (let i = 0; i < senate.length; i++) {
            if (!set.has(i)) {
                if (senate[i] == 'R') {
                    operate(set, senate, i, 'D');
                } else {
                    operate(set, senate, i, 'R');
                }
            }
        }
        senate = update(senate, set);
        set.clear();
    }
    if (senate.length != 1) {
        senate = [...new Set(senate.split(""))].join("");
    }
    return senate == 'R' ? 'Radiant' : 'Dire';
};

const operate = (set, senate, currentIdx, enemy) => {
    let preLen = set.size;
    for (let r = currentIdx; r < senate.length; r++) {
        if (senate[r] == enemy && !set.has(r)) {
            set.add(r);
            break;
        }
    }
    if (set.size == preLen) {
        for (let l = currentIdx; ~l; l--) {
            if (senate[l] == enemy && !set.has(l)) {
                set.add(l);
                break;
            }
        }
    }
};

// Accepted --- 744ms 14.29%
const predictPartyVictory1 = (senate) => {
    let set = new Set();
    while (true) {
        if ([...new Set(senate.split(""))].length == 1) break;
        for (let i = 0; i < senate.length; i++) {
            if (!set.has(i)) {
                if (senate[i] == 'R') {
                    let preLen = set.size;
                    for (let r = i; r < senate.length; r++) {
                        if (senate[r] == 'D' && !set.has(r)) {
                            set.add(r);
                            break;
                        }
                    }
                    if (set.size == preLen) {
                        for (let l = i; ~l; l--) {
                            if (senate[l] == 'D' && !set.has(l)) {
                                set.add(l);
                                break;
                            }
                        }
                    }
                } else {
                    let preLen = set.size;
                    for (let r = i; r < senate.length; r++) {
                        if (senate[r] == 'R' && !set.has(r)) {
                            set.add(r);
                            break;
                        }
                    }
                    if (set.size == preLen) {
                        for (let l = i; ~l; l--) {
                            if (senate[l] == 'R' && !set.has(l)) {
                                set.add(l);
                                break;
                            }
                        }
                    }
                }
            }
        }
        // console.log(senate, set);
        senate = update(senate, set);
        set.clear();
    }
    // console.log(set, senate);
    if (senate.length != 1) {
        senate = [...new Set(senate.split(""))].join("");
    }
    return senate == 'R' ? 'Radiant' : 'Dire';
};

const update = (senate, set) => {
    let res = '';
    for (let i = 0; i < senate.length; i++) {
        if (!set.has(i)) res += senate[i];
    }
    return res;
};

const main = () => {
    let senate = "RD";
    let senate2 = "RDD";
    let debug1 = "RRR";
    let debug2 = "RDR";
    let debug3 = "RRDDD";
    console.log(predictPartyVictory(senate));
    console.log(predictPartyVictory(senate2));
    console.log(predictPartyVictory(debug1)); // "Radiant"
    console.log(predictPartyVictory(debug2)); // "Radiant"
    console.log(predictPartyVictory(debug3)); // "Radiant"
};

main()