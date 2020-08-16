/**
 * 8.8 morning
 * https://leetcode.com/contest/biweekly-contest-32/problems/can-convert-string-in-k-moves/
 */

// Time Limit 144/154
const canConvertString = (s, t, k) => {
    if (s.length != t.length) return false;
    let data = [];
    let record = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] != t[i]) {
            let a = s[i].charCodeAt();
            let b = t[i].charCodeAt();
            let diff;
            if (s[i] < t[i]) {
                diff = b - a;
            } else {
                // console.log('z'.charCodeAt() - a, s[i], b - 'a'.charCodeAt(), t[i]);
                diff = 'z'.charCodeAt() - a + (b - 'a'.charCodeAt()) + 1;
            }
            data.push([s[i], t[i], diff]);
            record.push(diff);
        }
    }
    // console.log(data);
    // console.log(record);
    if ([...new Set(record)].length != record.length) {
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (data[i][2] == data[j][2]) {
                    data[j][2] = data[i][2] + 26;
                }
            }
        }
    }
    // console.log(data);
    for (const d of data) {
        if (d[2] > k) return false;
    }
    return true;
};


const main = () => {
    let s = "input", t = "ouput", k = 9;
    let s2 = "abc", t2 = "bcd", k2 = 10;
    let s3 = "aab", t3 = "bbb", k3 = 27;
    let s_debug1 = "abc", t_debug1 = "abcd", k_debug1 = 1000;
    let s_debug2 = "atmtxzjkz", t_debug2 = "tvbtjhvjd", k_debug2 = 35;
    let s_debug3 = "mpzzwh", t_debug3 = "kaeblv", k_debug3 = 24
    console.log(canConvertString(s, t, k)); // true
    console.log(canConvertString(s2, t2, k2)); // false
    console.log(canConvertString(s3, t3, k3)); // true
    console.log(canConvertString(s_debug1, t_debug1, k_debug1)); // false
    console.log(canConvertString(s_debug2, t_debug2, k_debug2)); // false
    console.log(canConvertString(s_debug3, t_debug3, k_debug3)); // true

    // console.log('m'.charCodeAt() - 'b'.charCodeAt());
};

main()