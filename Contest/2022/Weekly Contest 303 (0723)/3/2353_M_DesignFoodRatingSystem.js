/**
 * 07/23/22 evening
 * https://leetcode.com/contest/weekly-contest-303/problems/design-a-food-rating-system/
 */
const pr = console.log;

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')

// TLE 73/76
function FoodRatings(foods, cuisines, ratings) {
    let n = foods.length, cm = new Map(), fm = new Map(), maxRating = new Map();
    for (let i = 0; i < n; i++) {
        fm.set(foods[i], cuisines[i]);
        if (!cm.has(cuisines[i])) {
            cm.set(cuisines[i], []);
            maxRating.set(cuisines[i], ratings[i]);
        }
        cm.get(cuisines[i]).push([ratings[i], foods[i]]);
        maxRating.set(cuisines[i], Math.max(maxRating.get(cuisines[i]), ratings[i]))
    }
    pr("cuisines map", cm)
    pr("food map", fm);
    pr("maxing rating map", maxRating);
    return { changeRating, highestRated }
    function changeRating(food, newRating) {
        let cuisine = fm.get(food), d = cm.get(cuisine);
        for (let i = 0; i < d.length; i++) {
            if (d[i][1] == food) {
                d[i][0] = newRating;
                break;
            }
        }
        cm.set(cuisine, d);
    }
    function highestRated(cuisine) {
        let d = cm.get(cuisine);
        d.sort((x, y) => {
            if (x[0] != y[0]) return y[0] - x[0];
            return x[1].localeCompare(y[1]);
        });
        return d[0][1];
    }
}


// TLE  73/76
function FoodRatings(foods, cuisines, ratings) {
    let n = foods.length, cm = new Map(), fm = new Map();
    for (let i = 0; i < n; i++) {
        fm.set(foods[i], cuisines[i]);
        if (!cm.has(cuisines[i])) {
            let pq = new MaxPriorityQueue({
                compare: (x, y) => {
                    if (x[0] != y[0]) return y[0] - x[0];
                    return x[1].localeCompare(y[1]);
                }
            });
            cm.set(cuisines[i], pq);
        }
        cm.get(cuisines[i]).enqueue([ratings[i], foods[i]])
    }
    debug(cm)
    pr("food map", fm);
    return { changeRating, highestRated }
    function changeRating(food, newRating) {
        let cuisine = fm.get(food), pq = cm.get(cuisine), newPQ = new MaxPriorityQueue({
            compare: (x, y) => {
                if (x[0] != y[0]) return y[0] - x[0];
                return x[1].localeCompare(y[1]);
            }
        });
        while (pq.size()) {
            let cur = pq.dequeue();
            if (cur[1] == food) cur[0] = newRating;
            newPQ.enqueue(cur)
        }
        cm.set(cuisine, newPQ);
    }
    function highestRated(cuisine) {
       return cm.get(cuisine).front()[1];
    }
}

const debug = (m) => {
    let res = new Map();
    for (const [type, pq] of m) res.set(type, pq.toArray())
    pr(res)
};

const main = () => {
    let foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);
    pr(foodRatings.highestRated("korean")); // "kimchi"
    pr(foodRatings.highestRated("japanese")); // "ramen"
    foodRatings.changeRating("sushi", 16);
    pr(foodRatings.highestRated("japanese")); // "sushi"
    foodRatings.changeRating("ramen", 16);
    pr(foodRatings.highestRated("japanese")); // "ramen"
};

main()

