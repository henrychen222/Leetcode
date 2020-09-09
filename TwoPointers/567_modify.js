// 9.8 morning

// Accepted --- 1160ms 15.17%
let map1 = new Map();
const checkInclusion = (s1, s2) => {
    let n1 = s1.length;
    let n2 = s2.length;
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let unique1 = [...new Set(arr1)];
    for (const e of unique1) {
        map1.set(e, getFrequency(arr1, e));
    }
    for (let i = 0; i < n2; i++) {
        let tmp2 = arr2.slice(i, i + n1);
        if (tmp2.length == n1) {
            let unique2 = [...new Set(tmp2)];
            if (unique2.length == unique1.length) {
                if (checkElements(unique1, unique2)) {
                    if (checkFreq(unique2, tmp2)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};

const checkElements = (unique1, unique2) => {
    for (const c2 of unique2) {
        if (unique1.indexOf(c2) == -1) return false;
    }
    return true;
};

const checkFreq = (unique2, tmp2) => {
    for (const c2 of unique2) {
        if (getFrequency(tmp2, c2) != map1.get(c2)) return false;
    }
    return true;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s1 = "ab",
        s2 = "eidbaooo";
    let s1_2 = "ab",
        s2_2 = "eidboaoo";
    let s1_debug1 = "abc",
        s2_debug1 = "ccccbbbbaaaa";
    let s1_debug2 = "ccc",
        s2_debug2 = "cbac";
    let s1_debug3 = "prosperity",
        s2_debug3 = "properties";
    let s1_debug4 = "hello",
        s2_debug4 = "ooolleoooleh";
    console.log(checkInclusion(s1, s2)); // true
    console.log(checkInclusion(s1_2, s2_2)); // false
    console.log(checkInclusion(s1_debug1, s2_debug1)); // false
    console.log(checkInclusion(s1_debug2, s2_debug2)); // false
    console.log(checkInclusion(s1_debug3, s2_debug3)); // false
    console.log(checkInclusion(s1_debug4, s2_debug4)); // false
};

main()