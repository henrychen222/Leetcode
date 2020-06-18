/**
 * 6.17 night
 * https://leetcode.com/problems/backspace-string-compare/
 */

// need to fix
const backspaceCompare = (S, T) => {
    let resS = operate(S);
    console.log(resS);
    let resT = operate(T);
    console.log(resT);
};

const operate = (str) => {
    let strCopy = str;
    let res = "";
    for (let i = 0; i < strCopy.length; i++) {
        if (strCopy[i] != '#' && strCopy[i + 1] == '#') {
            res = strCopy.slice(0, i) + strCopy.slice(i + 2, strCopy.length);
            console.log(res)
        }
        strCopy = res;
    }
    // for (let i = str.length - 1; i >= 0; i--) {
    //     if (str[i] == '#' && str[i - 1] != '#') {
    //         str = str.slice(0, i - 1) + str.slice(i + 1, str.length);
    //     }
    // }
    return res;
};


const main = () => {
    let S = "ab#c",
        T = "ad#c";
    let S2 = "ab##",
        T2 = "c#d#";
    let S3 = "a##c",
        T3 = "#a#c"
    let S4 = "a#c",
        T4 = "b";
    // console.log(backspaceCompare(S, T));
    console.log(backspaceCompare(S2, T2));
    // console.log(backspaceCompare(S3, T3));
    // console.log(backspaceCompare(S4, T4));
};

main()