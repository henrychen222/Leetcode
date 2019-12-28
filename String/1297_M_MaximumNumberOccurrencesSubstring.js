/**
 * 12.22 night
 * https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
 * give up, not working
 */
const Dict = require("collections/dict");

// not work
const maxFreq = (s, maxLetters, minSize, maxSize) => {
    // let result = new Dict();
    let result = new Map();
    let count = 0;

    if (minSize > s.length) {
        return 0;
    }

    for (let i = 0; i < s.length; i++) {
        // let map = new Dict();
        let map = new Map();
        let disNum = 0;
        for (let j = 0; j < maxSize; j++) {
            if (i + j >= s.length) {
                break;
            }

            // map.set(s.charAt(i + j), map.get(s.charAt(i + j)) + 1);
            // map.set(s.charAt(i + j), getDefault(map, map.get(s.charAt(i + j))) + 1);

            //map.set(s.charAt(i + j), map.get(s.charAt(i + j), 0) + 1);
            map.set(s.charAt(i + j), getOrDefault(map, s.charAt(i + j), 0) + 1);

            if (map.get(s.charAt(i + j)) == 1) {
                disNum++;
            }
            if (disNum > maxLetters) {
                break;
            }
            if (j >= minSize - 1) {
                // result.set(s.substring(i, i + j + 1), result.get(s.substring(i, i + j + 1)) + 1);
                // result.set(s.substring(i, i + j + 1), getDefault(result, result.get(s.substring(i, i + j + 1))) + 1);

                // result.set(s.substring(i, i + j + 1), result.get(s.substring(i, i + j + 1), 0) + 1);
                result.set(s.substring(i, i + j + 1), getOrDefault(map, s.substring(i, i + j + 1), 0) + 1);

            }
        }
    }

    Object.keys(result).forEach(x => {
        if (result.get(x) > count) {
            count = result.get(x);
        }
    });

    return count;
}

const getDefault = (map, k) => {
    // if ((map.get(k) != null) || (k in map)) {
    //     return map.get(k)
    // } else {
    //     return k;
    // }
    return (map.get(k) != null) || (k in map) ? map.get(k) : k;
}

const getOrDefault = (map, k, defaultValue) => {
    if (map.get(k) === undefined) {
        return defaultValue;

    } else {
        return map.get(k);
    }
}

const main = () => {
    s1 = "aababcaab";
    let maxLetters1 = 2;
    let minSize1 = 3;
    let maxSize1 = 4;
    console.log(maxFreq(s1, maxLetters1, minSize1, maxSize1));

    s2 = "aaaa";
    let maxLetters2 = 1;
    let minSize2 = 3;
    let maxSize2 = 3;
    console.log(maxFreq(s2, maxLetters2, minSize2, maxSize2));

    s3 = "aabcabcab";
    let maxLetters3 = 2;
    let minSize3 = 2;
    let maxSize3 = 3;
    console.log(maxFreq(s3, maxLetters3, minSize3, maxSize3));

    s4 = "abcde";
    let maxLetters4 = 2;
    let minSize4 = 3;
    let maxSize4 = 3;
    console.log(maxFreq(s4, maxLetters4, minSize4, maxSize4));
}

main();
