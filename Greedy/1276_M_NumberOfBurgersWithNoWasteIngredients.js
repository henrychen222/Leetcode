/**
 * 9.25 evening
 * https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/
 */

// Accepted --- 96ms 78.57%
const numOfBurgers3 = (tomatoSlices, cheeseSlices) => {
    let x = (tomatoSlices - 2 * cheeseSlices) / 2;
    let y = cheeseSlices - x;
    if (ok(x) && ok(y)) return [x, y];
    return [];
};

// Accepted --- 112ms 50.00%
const numOfBurgers2 = (tomatoSlices, cheeseSlices) => {
    let x = (tomatoSlices - 2 * cheeseSlices) / 2;
    if (!ok(x)) return [];
    let y = cheeseSlices - x;
    if (!ok(y)) return [];
    return [x, y];
};

// Accepted --- 80ms 85.71%
const numOfBurgers1 = (tomatoSlices, cheeseSlices) => {
    /**
     * linear equation in two unknowns
     * 4x + 2y = tomatoSlices
     * x + y = cheeseSlices;  => 2x + 2y = 2 * cheeseSlices;
     * 
     * 2x = tomatoSlices - 2 * cheeseSlices 
     *   => x = (tomatoSlices - 2 * cheeseSlices) / 2;
     *      y = cheeseSlices - x;
     */
    let x = (tomatoSlices - 2 * cheeseSlices) / 2;
    let y = cheeseSlices - x;
    // console.log(x, y);
    if (!ok(x) || !ok(y)) return [];
    return [x, y];
};

const ok = (n) => {
    if (n < 0) return false;
    let s = n + '';
    if (s.indexOf('.') != -1) return false;
    return true;
};

const main = () => {
    let tomatoSlices = 16,
        cheeseSlices = 7
    let tomatoSlices2 = 17,
        cheeseSlices2 = 4;
    let tomatoSlices3 = 4,
        cheeseSlices3 = 17;
    let tomatoSlices4 = 0,
        cheeseSlices4 = 0;
    let tomatoSlices5 = 2,
        cheeseSlices5 = 1;
    let t_debug1 = 3962,
        c_debug1 = 1205;
    console.log(numOfBurgers(tomatoSlices, cheeseSlices));
    console.log(numOfBurgers(tomatoSlices2, cheeseSlices2));
    console.log(numOfBurgers(tomatoSlices3, cheeseSlices3));
    console.log(numOfBurgers(tomatoSlices4, cheeseSlices4));
    console.log(numOfBurgers(tomatoSlices5, cheeseSlices5));
    console.log(numOfBurgers(t_debug1, c_debug1));
};

main()