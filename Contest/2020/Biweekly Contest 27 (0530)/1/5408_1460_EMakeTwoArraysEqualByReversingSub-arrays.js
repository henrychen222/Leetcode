/**
 * https://leetcode.com/contest/biweekly-contest-27/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 * 5.30 morning 8min
 */
const canBeEqual = (target, arr) => {
    for (const i of arr) {
        if (!target.includes(i)) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let target = [1,2,3,4], arr = [2,4,1,3];
    let target2 = [7], arr2 = [7];
    let target3 = [1,12], arr3 = [12,1];
    let target4 = [3,7,9], arr4 = [3,7,11]
    let target5 = [1,1,1,1,1], arr5 = [1,1,1,1,1];

    console.log(canBeEqual(target, arr));
    console.log(canBeEqual(target2, arr2));
    console.log(canBeEqual(target3, arr3));
    console.log(canBeEqual(target4, arr4));
    console.log(canBeEqual(target5, arr5));
};

main()