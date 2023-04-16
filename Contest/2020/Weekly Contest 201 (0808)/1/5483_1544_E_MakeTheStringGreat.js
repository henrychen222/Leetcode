/**
 * 8.8 night
 * https://leetcode.com/contest/weekly-contest-201/problems/make-the-string-great/
 */

// Accepted
const makeGood = function (s) {
    if (s.length == 1) return s;
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (stack.length == 0){
            stack.push(s[i]);
        }  else {
            let end = stack[stack.length - 1];
            if ((isUpperCase(end) && isLowerCase(s[i]) && isEqual(end, s[i])) || (isLowerCase(end) && isUpperCase(s[i]) && isEqual(end, s[i]))) {
                stack.pop();
                continue;
            }
            stack.push(s[i]);
        }
        // console.log(stack)
    }
    return stack.join("");
};


const isEqual = (s1, s2) => {
    if (s1.toLowerCase() == s2.toLowerCase()) {
        return true;
    }
    return false;
};

const isUpperCase = (character) => {
    if (character == character.toUpperCase()) {
        return true;
    }
    return false;
};

const isLowerCase = (character) => {
    if (character == character.toLowerCase()) {
        return true;
    }
    return false;
};

const main = () => {
    let s = "leEeetcode";
    let s2 = "abBAcC";
    let s3 = "s";
    let debug1 = "mC";
    console.log(makeGood(s));
    console.log(makeGood(s2));
    console.log(makeGood(s3));
    console.log(makeGood(debug1));
};

main()