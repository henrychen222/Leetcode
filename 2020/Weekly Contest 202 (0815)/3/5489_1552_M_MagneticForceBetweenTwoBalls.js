/**
 * 8.15 night
 * https://leetcode.com/contest/weekly-contest-202/problems/magnetic-force-between-two-balls/
 * 
 * // 任意选m个数从position组成arr, arr中任意两两求绝对值, 找出其中最小的. 所有arr中找出最大的
 */

/**
 * read:
 * https://leetcode.com/problems/magnetic-force-between-two-balls/discuss/794066/Java-or-Heavily-Commented-or-Simple-Explanation
 * https://leetcode.com/problems/magnetic-force-between-two-balls/discuss/794103/C%2B%2B-Binary-Search-with-explanation-(with-other-binary-answer-problems)
 * https://leetcode.com/problems/magnetic-force-between-two-balls/discuss/794070/Python-Binary-search-solution-with-explanation-and-similar-questions
 * https://leetcode.com/problems/magnetic-force-between-two-balls/discuss/794087/C%2B%2B-Binary-Search-minimum-distance-or-Explanations-or-O(n-logn)
 */
const maxDistance_uwi = (position, m) => {
    position.sort((a, b) => a - b);
    let low = 0;
    let high = 1000000000;
    while (high - low > 1) {
        let tmp = high + low >> 1;
        if (ok(position, tmp, m)) {
            low = tmp;
        } else {
            high = tmp;
        }
    }
    return low;
};

const ok = (position, high, m) => {
    let r = -1;
    let u = 0;
    for (const p of position) {
        if (r <= p) {
            r = p + high;
            u++;
        }
    }
    return u >= m;
};

const main = () => {
    let position = [1, 2, 3, 4, 7], m = 3;
    let position2 = [5, 4, 3, 2, 1, 1000000000], m2 = 2;
    console.log(maxDistance_uwi(position, m));
    console.log(maxDistance_uwi(position2, m2));
};

main()