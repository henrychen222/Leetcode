/**
 * 5.1 night
 * https://leetcode.com/problems/play-with-chips/
 */

/**
 * https://zxi.mytechroad.com/blog/math/leetcode-1217-play-with-chips/
 * Accepted --- 48ms 34MB 91.40%
 */
const minCostToMoveChips_huahua = (chips) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < chips.length; i++) {
        if (chips[i] % 2) {
            even++;
        } else {
            odd++;
        }
    }
    return Math.min(odd, even);
};

/**
 * https://www.cnblogs.com/seyjs/p/11646372.html
 * https://www.tutorialspoint.com/play-with-chips-in-cplusplus     same to huahua
 * 
 * Accepted --- 56ms 33.9MB 46.24%
 */
const minCostToMoveChips_cnblog = (chips) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < chips.length; i++) {
        if (chips[i] % 2 == 1) {
            odd++;
        } else {
            even++;
        }
    }
    return Math.min(odd, even);
};

/**
 * https://www.acwing.com/solution/LeetCode/content/5109/  same to csdn
 * Accepted --- 52ms 33.7MB 74.19%
 */
const minCostToMoveChips_acwing = (chips) => {
    let even = 0;
    for (let i = 0; i < chips.length; i++) {
        even += chips[i] % 2;
    }
    return Math.min(even, chips.length - even);
};

/**
 * https://blog.csdn.net/CSerwangjun/article/details/102434444  same to acwing
 * Accepted --- 52ms 33.7MB 74.19%
 */
const minCostToMoveChips_csdn = (chips) => {
    let even = 0;
    for (let i = 0; i < chips.length; i++) {
        if (chips[i] % 2) {
            even++;
        }
    }
    return Math.min(even, chips.length - even);
};

// wrong
const minCostToMoveChips = (chips) => {
    let j = 0; // position
    let sum = 0;
    for (let i = 0; i < chips.length; i++) {
        let unit = chips[i] - j;
        if (unit % 2 !== 0) {
            sum += 1;
        }
        j++;
    }
    return sum;
};

const main = () => {
    let chips = [1, 2, 3];
    let chips2 = [2, 2, 2, 3, 3];
    console.log(minCostToMoveChips(chips));
    console.log(minCostToMoveChips(chips2));

    /**********************************/
    console.log("")
    console.log(minCostToMoveChips_huahua(chips)); // 1
    console.log(minCostToMoveChips_huahua(chips2)); // 2

    console.log("")
    console.log(minCostToMoveChips_cnblog(chips));
    console.log(minCostToMoveChips_cnblog(chips2));

    console.log("")
    console.log(minCostToMoveChips_acwing(chips));
    console.log(minCostToMoveChips_acwing(chips2));

    console.log("")
    console.log(minCostToMoveChips_csdn(chips));
    console.log(minCostToMoveChips_csdn(chips2));
};

main()