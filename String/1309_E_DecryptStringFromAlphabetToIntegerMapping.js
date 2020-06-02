/**
 * 6.1 night
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 */

// Accepted --- 84ms 40.4MB 13.33%
const freqAlphabets = (s) => {
    let map = new Map();
    for (let i = 1; i <= 9; i++) {
        map.set(i, String.fromCharCode('a'.charCodeAt() + i - 1));
    }
    for (let i = 10; i <= 26; i++) {
        map.set(i + '#', String.fromCharCode('a'.charCodeAt() + i - 1));
    }
    // console.log(map);
    for (const k of map.keys()) {
        for (let i = 0; i < s.length - 1; i++) { // fixed here: should be s.length - 1, otherwise 18#8 will have problems
            let target2 = s.slice(i, i + 3);
            if (target2 == k) {
                s = s.replace(target2, map.get(k));
            }
        }
    }
    // console.log(s);
    for (const k of map.keys()) {
        for (let i = 0; i < s.length; i++) {
            let target1 = s.slice(i, i + 1);
            if (target1 == k) {
                s = s.replace(target1, map.get(k));
            }
        }
    }
    return s;
};

const main = () => {
    let s = "10#11#12";
    let s2 = "1326#";
    let s3 = "25#";
    let s4 = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#";
    console.log(freqAlphabets(s));
    console.log(freqAlphabets(s2));
    console.log(freqAlphabets(s3));
    console.log(freqAlphabets(s4));

    let s_debug1 = "21#523#12#22#611#71910#721#18#8"; // u5wlv6k719j7ur8 -> uewlvfkgaijgurh
    console.log(freqAlphabets(s_debug1));
};

main()