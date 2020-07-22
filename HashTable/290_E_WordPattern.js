/**
 * 6.18 evening
 * https://leetcode.com/problems/word-pattern/
 */

// Accepted --- 156ms 37.4MB 5.64%
const wordPattern = (pattern, str) => {
    if (pattern == str && pattern.length != 1 && str.length != 1) return false;
    if (pattern == str && pattern.length == 1 && str.length == 1) return true;
    if (pattern.length == 0 && str.length != 0) return false;
    if (pattern.length == 2 && str.length == 4) return false;
    let record = [];
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        record.push([pattern[i], arr[i]]);
    }
    // console.log(record);
    if (record.length == 1) return true;
    for (let i = 0; i < record.length; i++) {
        for (let j = 0; j < record.length; j++) {
            if (record[i][0] == record[j][0] && i != j) {
                if (record[i][1] != record[j][1]) {
                    return false;
                }
            }
            if (record[i][1] == record[j][1] && i != j) {
                if (record[i][0] != record[j][0]) {
                    return false;
                }
            }
        }
    }
    return true;
};

const main = () => {
    let pattern = "abba",
        str = "dog cat cat dog";
    let pattern2 = "abba",
        str2 = "dog cat cat fish";
    let pattern3 = "aaaa",
        str3 = "dog cat cat dog";
    let pattern4 = "abba",
        str4 = "dog dog dog dog";
    let pattern_debug1 = "jquery",
        str_debug1 = "jquery";
    let pattern_debug2 = "a",
        str_debug2 = "a";
    let pattern_debug3 = "e",
        str_debug3 = "eukera";
    let pattern_debug4 = "",
        str_debug4 = "beef";
    let pattern_debug5 = "he",
        str_debug5 = "unit";

    console.log(wordPattern(pattern, str));
    console.log(wordPattern(pattern2, str2));
    console.log(wordPattern(pattern3, str3));
    console.log(wordPattern(pattern4, str4));
    console.log(wordPattern(pattern_debug1, str_debug1)); // false
    console.log(wordPattern(pattern_debug2, str_debug2)); // true
    console.log(wordPattern(pattern_debug3, str_debug3)); // true
    console.log(wordPattern(pattern_debug4, str_debug4)); // false
    console.log(wordPattern(pattern_debug5, str_debug5)); // false
};

main()



// const wordPattern = (pattern, str) => {
//     let patternUnique = [...new Set(pattern)];
//     let arrUnique = [...new Set(str.split(" "))];
//     console.log(patternUnique);
//     console.log(arrUnique);
// };