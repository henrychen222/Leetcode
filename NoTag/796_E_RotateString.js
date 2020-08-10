/**
 * 8.9 night
 * https://leetcode.com/problems/rotate-string/
 */

// Accepted --- 76ms 38.6MB 53.85%
const rotateString_refine = (A, B) => {
    if (A.length == 0 && B.length == 0) return true;
    let n = A.length;
    let tmp = A.split("");
    for (let i = 1; i <= n; i++) {
        tmp.push(tmp[0]);
        tmp.shift();
        if (tmp.join("") == B) {
            return true;
        }
    }
    return false;
};

// Accepted --- 80ms 38.6MB 41.67%
const rotateString = (A, B) => {
    if (A.length == 0 && B.length == 0) return true;
    let n = A.length;
    let tmp = A.split("");
    let res;
    for (let i = 1; i <= n; i++) {
        tmp.push(tmp[0]);
        tmp.shift();
        if (tmp.join("") == B) {
            res = tmp.join("");
            break;
        }
    }
    if (res == B) return true;
    return false;
};

const main = () => {
    let A = 'abcde',
        B = 'cdeab';
    let A2 = 'abcde',
        B2 = 'abced';
    let A_debug1 = '',
        B_debug1 = '';
    console.log(rotateString(A, B));
    console.log(rotateString(A2, B2));
    console.log(rotateString(A_debug1, B_debug1)); // true

    console.log("");
    console.log(rotateString_refine(A, B));
    console.log(rotateString_refine(A2, B2));
    console.log(rotateString_refine(A_debug1, B_debug1));
};

main()