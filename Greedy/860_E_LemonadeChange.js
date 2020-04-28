/**
 * https://leetcode.com/problems/lemonade-change/
 * 4.27 night
 */

/**
 * https://www.cnblogs.com/grandyang/p/10663469.html
 * https://www.codetd.com/en/article/9184485
 * https://doohwancho.tistory.com/510
 * 
 * Accepted --- 60ms 36.4 MB 70.54%
 */
const lemonadeChange = (bills) => {
    let five = 0;
    let ten = 0;
    for (const i of bills) {
        if (i == 5) { //5
            five++;
        } else if (i == 10) { //10
            five--;
            ten++;
        } else if (ten > 0) { //20，有10刀的钞票
            ten--;
            five--;
        } else { // 20, 没有10刀
            five -= 3;
        }

        if (five < 0) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let bills = [5, 5, 5, 10, 20];
    let bills2 = [5, 5, 10];
    let bills3 = [10, 10];
    let bills4 = [5, 5, 10, 10, 20];

    console.log(lemonadeChange(bills)); // true
    console.log(lemonadeChange(bills2)); // true
    console.log(lemonadeChange(bills3)); // false
    console.log(lemonadeChange(bills4)); // false
};

main()