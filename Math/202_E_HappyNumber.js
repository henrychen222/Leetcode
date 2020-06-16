/**
 * 6.14 evening
 * https://leetcode.com/problems/happy-number/
 */

// need to fix
const isHappy = (n) => {
    let nArr = n.toString().split("");
    console.log(nArr);
    let sum = 0;
    for (let i = 0; i < nArr.length; i++) {
        sum += Number(nArr[i]) ** 2;
    }
    console.log(sum)
    console.log(sum == 1)
    if (sum == 1) {
        // console.log("11111")
        return true;
    }
    return isHappy(sum);
};

const main = () => {
    let n = 19;
    console.log(isHappy(n));
};

main()