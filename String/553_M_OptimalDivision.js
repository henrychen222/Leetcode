/**
 * 4.2 evening
 * https://leetcode.com/problems/optimal-division/
 * 
 * https://www.cnblogs.com/grandyang/p/6886673.html
 * https://blog.csdn.net/u010150046/article/details/75091201
 */

// Accepted --- 52 ms 33.8 MB  80.95%  use +=
// Accepted --- 60 ms 33.7 MB  14.29%  use concat()
const optimalDivision = (nums) => {
    if (nums.length == 0) {
        return "";
    }

    // 只有一个数，直接返回
    if (nums.length == 1) {
        return nums[0].toString();
    }

    // 有两个数，第一个除以第二个返回
    if (nums.length == 2) {
        // return (nums[0] / nums[1]).toString();    // wrong
        return nums[0].toString() + "/" + nums[1].toString();
    }

    // [1000,100,10,2] 除了第一个除数之外，后面的数都可以转变为乘积: 1000/(100/10/2) == (1000*10*2)/(100)
    let result = nums[0] + "/";
    let temp = nums[1].toString();
    for (let i = 2; i < nums.length; i++) {
        // temp += "/" + nums[i];  // works
        temp = temp.concat("/").concat(nums[i]); // works
    }
    console.log(temp);
    result = result + "(" + temp + ")";
    return result;
};

const main = () => {
    input = [];
    input2 = [1000];
    input3 = [1000, 100];
    input4 = [1000, 100, 10, 2];
    wrong = [3, 2];
    console.log(optimalDivision(input));
    console.log(optimalDivision(input2));
    console.log(optimalDivision(input3));
    console.log(optimalDivision(wrong)); // "3/2"
    console.log(optimalDivision(input4)); // 1000/(100/10/2)

}


main();