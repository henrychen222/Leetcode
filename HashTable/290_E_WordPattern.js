/**
 * 6.18 evening
 * https://leetcode.com/problems/word-pattern/
 */

const wordPattern = (pattern, str) => {
    let patternUnique = [...new Set(pattern)];
    let arrUnique = [...new Set(str.split(" "))];
    console.log(patternUnique);
    console.log(arrUnique);
    
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
    console.log(pattern, str);
    // console.log(pattern2, str2);
    // console.log(pattern3, str3);
    // console.log(pattern4, str4);
};

main()