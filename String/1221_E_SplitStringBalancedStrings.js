/**
 * 122019 night
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 */
const expect = require('chai').expect;

const balancedStringSplit = (s) => {
    let count = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'L') {
            count++;
        } else {
            count--;
        }
        if (count == 0) {
            result++;
        }
    }
    return result;
}

s1 = "RLRRLLRLRL";
s2 = 'RLLLLRRRLR';
s3 = "LLLLRRRR";

console.log(balancedStringSplit(s1));
console.log(balancedStringSplit(s2));
console.log(balancedStringSplit(s3));

expect(balancedStringSplit(s1)).to.equal(4);
expect(balancedStringSplit(s2)).to.equal(3);
expect(balancedStringSplit(s3)).to.equal(1);


