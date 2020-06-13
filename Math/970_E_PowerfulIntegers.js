/**
 * 6.12 night
 * https://leetcode.com/problems/powerful-integers/
 */

// need to fix
const powerfulIntegers = (x, y, bound) => {
    let res = [];
    for (let num = 0; num <= bound; num++) {
        let i, j = 0;
        while (x <= num && y <= num) {
            if (x ** i + y ** j == num) {
                res.push(item);
            }
            i++;
            j++;
        }
    }
    return res;
};

const main = () => {
    let x = 2,
        y = 3,
        bound = 10;
    let x2 = 3,
        y2 = 5,
        bound2 = 15;
    console.log(powerfulIntegers(x, y, bound));
    console.log(powerfulIntegers(x2, y2, bound2));
};

main()