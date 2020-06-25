/**
 * 6.23 evening
 * https://leetcode.com/problems/heaters/
 */

// need to fix
const findRadius = (houses, heaters) => {
    // let merge = [...new Set(houses.concat(heaters))];
    // merge.sort((a, b) => a - b);
    // console.log(merge);

    let nonHeaters = [];
    for (const i of houses) {
        if (!heaters.includes(i)) {
            nonHeaters.push(i);
        }
    }
    console.log(nonHeaters);
    console.log(heaters);
    if (nonHeaters.length == 0) return 0;

    let max = Number.MIN_VALUE;
    if (heaters.length == 1) {
        for (const nh of nonHeaters) {
            max = Math.max(max, Math.abs(heaters[0] - nh));
        }
        return max;
    }

    let each = [];
    for (const he of heaters) {
        let min = Number.MAX_VALUE;
        for (const nh of nonHeaters) {
            min = Math.min(min, Math.abs(he - nh));
        }
        each.push(min);
    }
    console.log(each)
    each.sort((a, b) => b - a);
    return each[0];
};

const main = () => {
    let houses = [1, 2, 3],
        heaters = [2];
    let houses2 = [1, 2, 3, 4],
        heaters2 = [1, 4];
    let houses_debug1 = [1, 5],
        heaters_debug1 = [2];
    let houses_debug2 = [1, 5],
        heaters_debug2 = [10];
    let houses_debug3 = [1],
        heaters_debug3 = [1, 2, 3, 4];
    let houses_debug4 = [1, 2, 3, 5, 15],
        heaters_debug4 = [2, 30];
    console.log(findRadius(houses, heaters)); // 1
    console.log(findRadius(houses2, heaters2)); // 1
    console.log(findRadius(houses_debug1, heaters_debug1)); // 3
    console.log(findRadius(houses_debug2, heaters_debug2)); // 9
    console.log(findRadius(houses_debug3, heaters_debug3)); // 0
    console.log(findRadius(houses_debug4, heaters_debug4)); // 13
};

main()