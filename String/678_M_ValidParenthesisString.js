// 2.13 afternoon home
// https://leetcode.com/problems/valid-parenthesis-string/

/**
 * Accepted --- 52ms 33.8 MB 85.54%
 * 
 * https://sangle7.com/2018/12/28/678.%20Valid%20Parenthesis%20String/
 */
const checkValidString_two_array = (s) => {
    const array = s.split("");
    let p = {
        leftArr: [],
        starArr: []
    };
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "*") {
            p.starArr.push(i);
        } else if (array[i] === ")") {
            if (p.leftArr.length === 0) {
                if (p.starArr.length === 0) {
                    return false;
                } else {
                    p.starArr.pop();
                }
            } else {
                p.leftArr.pop();
            }
        } else if (array[i] === "(") {
            p.leftArr.push(i);
        }
    }
    while (p.leftArr.length && p.starArr.length) {
        if (p.leftArr.pop() > p.starArr.pop()) {
            return false;
        }
    }
    return !p.leftArr.length;
};

/**
 * Accepted --- 52ms 33.8 MB 85.54%
 * 
 * https://sangle7.com/2018/12/28/678.%20Valid%20Parenthesis%20String/
 */
const checkValidString_one_array_iterateTwice = function (s) {
    const array = s.split("");
    let n = 0,
        m = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "*" || array[i] === "(") {
            n++;
        } else {
            n--;
        }
        if (n < 0) {
            return false;
        }
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === "*" || array[i] === ")") {
            m++;
        } else {
            m--;
        }
        if (m < 0) {
            return false;
        }
    }

    return true;
};

/**
 * Accepted --- 48ms 33.9 MB 92.77%
 * 
 * https://sangle7.com/2018/12/28/678.%20Valid%20Parenthesis%20String/
 */
const checkValidString_Greedy = function (s) {
    const array = s.split("");
    let low = 0,
        high = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "(") {
            low++;
            high++;
        } else if (array[i] === ")") {
            if (low > 0) {
                low--;
            }
            high--;
        } else {
            if (low > 0) {
                low--;
            }
            high++;
        }

        if (high < 0) {
            return false;
        }
    }

    return low === 0;
};

const main = () => {
    s1 = "()";
    s2 = "(*)";
    s3 = "(*))";

    console.log(checkValidString_two_array(s1)); // true
    console.log(checkValidString_two_array(s2)); // true
    console.log(checkValidString_two_array(s3)); // true

    console.log("");
    console.log(checkValidString_one_array_iterateTwice(s1));
    console.log(checkValidString_one_array_iterateTwice(s2));
    console.log(checkValidString_one_array_iterateTwice(s3));

    console.log("");
    console.log(checkValidString_Greedy(s1));
    console.log(checkValidString_Greedy(s2));
    console.log(checkValidString_Greedy(s3));
}

main();