/**
 * 6.19 evening
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists/
 */

// Accepted --- 112ms 43.3MB 52.66%
const findRestaurant = (list1, list2) => {
    if (list1.length >= list2.length) {
        return check(list2, list1);
    } else {
        return check(list1, list2);
    }
};

const check = (short, long) => {
    let idxSum = Number.MAX_VALUE;
    let map = new Map();
    for (let i = 0; i < short.length; i++) {
        if (long.includes(short[i])) {
            map.set(short[i], i + long.indexOf(short[i]));
            idxSum = Math.min(idxSum, i + long.indexOf(short[i]));
        }
    }
    let res = [];
    for (const k of map.keys()) {
        if (map.get(k) == idxSum) {
            res.push(k);
        }
    }
    return res;
};

const main = () => {
    let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
    let list1_2 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        list2_2 = ["KFC", "Shogun", "Burger King"];
    let list1_debug1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        list1_debug2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"];
    console.log(findRestaurant(list1, list2));
    console.log(findRestaurant(list1_2, list2_2));
    console.log(findRestaurant(list1_debug1, list1_debug2)); // ["KFC","Burger King","Tapioca Express","Shogun"]
};

main()