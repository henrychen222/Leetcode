// 07/23/22 night

const pr = console.log;

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')

function FoodRatings(foods, cuisines, ratings) {
    let n = foods.length, cm = new Map(), fm = new Map();
    for (let i = 0; i < n; i++) {
        fm.set(foods[i], [cuisines[i], ratings[i]]);
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
    // debug(cm)
    // pr("food map", fm);
    return { changeRating, highestRated }
    function changeRating(food, newRating) {
        let cur = fm.get(food), cuisine = cur[0];
        cur[1] = newRating;
        fm.set(food, cur);
        cm.get(cuisine).enqueue([newRating, food]);
    }
    function highestRated(cuisine) {
        let pq = cm.get(cuisine);
        // pr("before", pq.toArray());
        while (fm.get(pq.front()[1])[1] != pq.front()[0]) pq.dequeue();
        // pr("after lazy remove", pq.toArray());
        return pq.front()[1];
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

