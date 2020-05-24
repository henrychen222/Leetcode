/**
 * 5.9 night
 * https://leetcode.com/contest/weekly-contest-188/problems/build-an-array-with-stack-operations/
 */
//target[target.length - 1]
const buildArray = (target, n) => {
    let res = [];
    let data = [];
    for (let t = 0; t < target.length; t++) {
        for (let i = 1; i <= n; i++) {
            if (target.includes(i) && data.length < target.length) {
                res.push("Push");
                data.push(i);
            }
            else if (!target.includes(i) && data.length < target.length) {
                res.push("Push");
                res.push("Pop");
            }
        }
    }
    // console.log(data);
    return res;
};

const main = () => {
    let target = [1, 3], n = 3;
    let target2 = [1, 2, 3], n2 = 3;
    let target3 = [1, 2], n3 = 4;
    let target4 = [2, 3, 4], n4 = 4;

    console.log(buildArray(target, n));
    console.log(buildArray(target2, n2));
    console.log(buildArray(target3, n3));
    console.log(buildArray(target4, n4));

};

main()