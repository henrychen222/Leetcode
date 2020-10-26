/**
 * 10.25 afternoon
 * https://leetcode.com/problems/construct-the-rectangle/
 */

// Accepted --- 72ms 93.65%
// reference: https://leetcode.com/problems/construct-the-rectangle/discuss/97210/3-line-Clean-and-easy-understand-solution
const constructRectangle = (area) => {
    let w = Math.floor(Math.sqrt(area));
    // console.log(w);
    while (area % w != 0) {
        w--;
    }
    return [area / w, w];
};

// Time Limit 23/52
const constructRectangle2 = (area) => {
    let mid = Math.sqrt(area);
    // console.log(mid);
    for (let i = Math.floor(mid); i >= 1; i--) {
        for (let j = Math.ceil(mid); j <= area; j++) {
            if (i * j == area) {
                return [j, i];
            }
        }
    }
};

// Time Limit 22/52
const constructRectangle1 = (area) => {
    let res = [];
    if (area % 2 == 0) {
        for (let i = 1; i <= area; i++) {
            if (i % 2 == 0) {
                for (let j = area; j >= i; j--) { // even * even  even * odd
                    if (i * j == area) {
                        res.push([j, i]);
                    }
                }
            } else {
                for (let j = area; j >= i; j -= 2) { // odd * even
                    if (i * j == area) {
                        res.push([j, i]);
                    }
                }
            }
        }
    } else {
        for (let i = 1; i <= area; i++) {
            if (i % 2 == 1) { // odd * odd
                for (let j = area; j >= i; j -= 2) {
                    if (i * j == area) {
                        res.push([j, i]);
                    }
                }
            }
        }
    }
    return res[res.length - 1];
};

const main = () => {
    let area = 4;
    let area2 = 37;
    let area3 = 122122;
    let debug1 = 10000000;
    let debug2 = 9999999;
    console.log(constructRectangle(area));
    console.log(constructRectangle(area2));
    console.log(constructRectangle(area3));
    console.log(constructRectangle(debug1));
    console.log(constructRectangle(debug2));
};

main()