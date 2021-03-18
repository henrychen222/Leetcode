/**
 * 03/17/21 evening
 * https://leetcode.com/problems/generate-random-point-in-a-circle/
 */

// Accepted --- 164ms 100%
// reference: https://leetcode.com/problems/generate-random-point-in-a-circle/discuss/1114771/javascript-164ms-100
class Solution {
    constructor(radius, x_center, y_center) {
        this.r = radius;
        this.x = x_center;
        this.y = y_center;
    }

    randPoint() {
        let len = Math.sqrt(Math.random()) * this.r;
        let deg = Math.random() * 2 * Math.PI;
        let x = this.x + len * Math.cos(deg);
        let y = this.y + len * Math.sin(deg);
        return [x, y];
    }
}

const main = () => {
    let s = new Solution(1, 0, 0);
    console.log(s.randPoint());
    console.log(s.randPoint());
    console.log(s.randPoint());
};

main()