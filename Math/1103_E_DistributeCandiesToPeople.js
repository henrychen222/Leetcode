/**
 * 6.14 night
 * https://leetcode.com/problems/distribute-candies-to-people/
 */

// don't know
const distributeCandies = (candies, num_people) => {
    let res = [];
    let sum = 0;
    for (let i = 1; i <=num_people; i++) {
        sum += i;
        if (candies - sum < i) {
            res.push(candies - sum);
        } else {
            res.push(i);
        }
    }
    console.log(sum)
    return res;
};

const main = () => {
    let candies = 7,
        num_people = 4;
    let candies2 = 10,
        num_people2 = 3;
    console.log(distributeCandies(candies, num_people));
    console.log(distributeCandies(candies2, num_people2));
};

main()