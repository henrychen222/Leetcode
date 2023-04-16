/**
 * 1.9 morning
 * https://leetcode.com/contest/biweekly-contest-43/problems/construct-the-lexicographically-largest-valid-sequence/
 */

// don't know
const constructDistancedSequence = (n) => {
    let res = [1];
    for (let i = 2; i <= n; i++) {
        res.push(i);
        res.push(i);
    }
    console.log(res);
};

const main = () => {
   let n = 3;
   let n2 = 5;
   console.log(constructDistancedSequence(n));
   console.log(constructDistancedSequence(n2));
};

main()
