/**
 * 7.8 evening
 * https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/
 */

// Accepted --- 160ms 42MB 8.00%
const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) => {
    let newRes = [];
    if (veganFriendly == 1) {
        for (const r of restaurants) {
            if (r[2] == 1 && r[3] <= maxPrice && r[4] <= maxDistance) {
                newRes.push(r);
            }
        }
    } else {
        for (const r of restaurants) {
            if (r[3] <= maxPrice && r[4] <= maxDistance) {
                newRes.push(r);
            }
        }
    }
    newRes.sort((a, b) => {
        if (a[1] == b[1]) {
            return restaurants[restaurants.indexOf(b)][0] - restaurants[restaurants.indexOf(a)][0];
        }
        return b[1] - a[1];
    });
    let res = [];
    for (const i of newRes) {
        res.push(restaurants[restaurants.indexOf(i)][0]);
    }
    return res;
};

const main = () => {
    let restaurants = [
            [1, 4, 1, 40, 10],
            [2, 8, 0, 50, 5],
            [3, 8, 1, 30, 4],
            [4, 10, 0, 10, 3],
            [5, 1, 1, 15, 1]
        ],
        veganFriendly = 1,
        maxPrice = 50,
        maxDistance = 10;
    let restaurants2 = [
            [1, 4, 1, 40, 10],
            [2, 8, 0, 50, 5],
            [3, 8, 1, 30, 4],
            [4, 10, 0, 10, 3],
            [5, 1, 1, 15, 1]
        ],
        veganFriendly2 = 0,
        maxPrice2 = 50,
        maxDistance2 = 10;
    let restaurants3 = [
            [1, 4, 1, 40, 10],
            [2, 8, 0, 50, 5],
            [3, 8, 1, 30, 4],
            [4, 10, 0, 10, 3],
            [5, 1, 1, 15, 1]
        ],
        veganFriendly3 = 0,
        maxPrice3 = 30,
        maxDistance3 = 3;
    let restaurants_debug1 = [
            [33433, 15456, 1, 99741, 58916],
            [61899, 85406, 1, 27520, 12303],
            [63945, 3716, 1, 56724, 79619]
        ],
        veganFriendly3_debug1 = 0,
        maxPrice_debug1 = 91205,
        maxDistance_debug1 = 58378;
    let restaurants_debug2 = [
            [27201, 28375, 0, 71066, 26031],
            [25804, 28375, 1, 62790, 57571]
        ],
        veganFriendly3_debug2 = 0,
        maxPrice_debug2 = 96930,
        maxDistance_debug2 = 84142;
    console.log(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance));
    console.log(filterRestaurants(restaurants2, veganFriendly2, maxPrice2, maxDistance2));
    console.log(filterRestaurants(restaurants3, veganFriendly3, maxPrice3, maxDistance3));
    console.log(filterRestaurants(restaurants_debug1, veganFriendly3_debug1, maxPrice_debug1, maxDistance_debug1));
    console.log(filterRestaurants(restaurants_debug2, veganFriendly3_debug2, maxPrice_debug2, maxDistance_debug2));
};

main()