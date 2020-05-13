/**
 * 5.10 evening
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 */

/**
 * https://www.cnblogs.com/grandyang/p/11769067.html
 * Accepted --- 92ms 34.3 MB 7.21%
 */
const minAddToMakeValid_cnblog = (S) => {
    let left = 0;
    let right = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == "(") { // 遇到左括号，说明此时需要右括号，则right自增1
            right++;
        } else if (right > 0) { //遇到了右括号, right > 0，说明当前的右括号可以用来匹配之前的左括号，不需要另加右括号，所以此时right自减1
            right--;
        } else { //遇到了右括号, right = 0，说明当前的右括号前面没有左括号可以跟其匹配，则此时left自增1，表示需要额外的左括号
            left++;
        }
    }
    return left + right;
};

/**
 * Accepted --- 64ms 34.6MB 24.26%
 */
const minAddToMakeValid_cnblog2 = (S) => {
    let res = 0;
    let count = 0; //当前左括号的个数
    for (let i = 0; i < S.length; i++) {
        if (S[i] == "(") {
            if (count < 0) { //遇到左括号, 而此时为count负数时: 表示此时右括号是多余左括号的, 而当前遇到的左括号不能匹配之前的右括号
                res += Math.abs(count); // 所以将count的绝对值加到结果res中，表示需要这多么的左括号来匹配之前多出的右括号
                count = 0;
            }
            count++;  // 然后此时count自增1，因为当前遇到的是左括号
        } else {
            count--;  //若当前遇到右括号，则count自减1
        }
    }
    return res + Math.abs(count);
};

// // wrong
// const minAddToMakeValid = (S) => {
//     let countLeft = 0;
//     let countRight = 0;
//     for (let i = 0; i < S.length; i++) {
//         if (S[i] == "(") {
//             countLeft++
//         } else {
//             countRight++;
//         }
//     }
//     return Math.abs(countLeft - countRight);
// };

const main = () => {
    let S = "())";
    let S2 = "(((";
    let S3 = "()"
    let S4 = "()))((";

    // console.log(minAddToMakeValid(S));
    // console.log(minAddToMakeValid(S2));
    // console.log(minAddToMakeValid(S3));
    // console.log(minAddToMakeValid(S4));

    console.log(minAddToMakeValid_cnblog(S));
    console.log(minAddToMakeValid_cnblog(S2));
    console.log(minAddToMakeValid_cnblog(S3));
    console.log(minAddToMakeValid_cnblog(S4));

    console.log("");
    console.log(minAddToMakeValid_cnblog2(S));
    console.log(minAddToMakeValid_cnblog2(S2));
    console.log(minAddToMakeValid_cnblog2(S3));
    console.log(minAddToMakeValid_cnblog2(S4));


};

main()