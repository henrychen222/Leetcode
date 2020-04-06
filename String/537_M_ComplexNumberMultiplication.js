/**
 * 4.5 evening
 * https://leetcode.com/problems/complex-number-multiplication/
 */

/**
 * https://leetcode.com/articles/complex-number-multiplication/#
 * https://www.geeksforgeeks.org/multiplication-two-complex-numbers-given-strings/
 * https://knarfeh.com/2014/03/11/leetcode/Algorithms/leetcode-537-Complex-Number-Multiplication/
 * 
 * Accepted --- 44ms 33.9 MB 100%
 */
const complexNumberMultiply = (a, b) => {
    let x = a.split("+");
    let y = b.split("+");
    // console.log(x);
    // console.log(y);

    let a_real = Number(x[0]);
    let b_real = Number(y[0]);
    let a_imaginary = Number(x[1].substring(0, x[1].length - 1));
    let b_imaginary = Number(y[1].substring(0, y[1].length - 1));

    // let a_imaginary = 0;
    // let b_imaginary = 0;
    // if (x[1].substring(0, 1) == "-") {
    //     a_imaginary = Number(x[1].substring(0, 2);
    // } else {
    //     a_imaginary = Number(x[1].substring(0, 1));
    // }
    // if (y[1].substring(0, 1) == "-") {
    //     b_imaginary = Number(y[1].substring(0, 2));
    // } else {
    //     b_imaginary = Number(y[1].substring(0, 1));
    // }

    // console.log(a_real);
    // console.log(b_real);
    // console.log(a_imaginary);
    // console.log(b_imaginary);

    return (a_real * b_real - a_imaginary * b_imaginary) + "+" + (a_real * b_imaginary + a_imaginary * b_real) + "i";
};

/**
 * https://www.cnblogs.com/grandyang/p/6660437.html
 * Accepted --- 52ms 33.8 MB 70.37%
 */
const complexNumberMultiply2 = (a, b) => {
    let p1 = a.lastIndexOf("+");
    let p2 = b.lastIndexOf("+");
    // console.log(p1);
    // console.log(p2);

    let a1 = Number(a.substring(0, p1)); // a实部
    let b1 = Number(b.substring(0, p2)); // b实部
    let a2 = Number(a.substring(p1 + 1, a.length - 1)); // a虚部
    let b2 = Number(b.substring(p2 + 1, b.length - 1)); // b虚部

    // console.log("a1: ", a1);
    // console.log("b1: ", b1);
    // console.log("a2: ", a2);
    // console.log("b2: ", b2);

    let result1 = a1 * b1 - a2 * b2;
    let result2 = a1 * b2 + a2 * b1;

    return result1.toString() + "+" + result2.toString() + "i";
};

const main = () => {
    let a = "1+1i";
    let b = "1+1i";

    let a2 = "1+-1i";
    let b2 = "1+-1i";

    let a3 = "78+-76i";
    let b3 = "-86+72i";

    console.log(complexNumberMultiply(a, b))
    console.log(complexNumberMultiply(a2, b2))
    console.log(complexNumberMultiply(a3, b3))
    console.log("")

    // console.log(a.substring(2,1)); // this is different from c++ substr(2,1)
    console.log(complexNumberMultiply2(a, b)) // "0+2i"
    console.log(complexNumberMultiply2(a2, b2)) // "0+-2i"
    console.log(complexNumberMultiply2(a3, b3)) // -1236+12152i
};

main()