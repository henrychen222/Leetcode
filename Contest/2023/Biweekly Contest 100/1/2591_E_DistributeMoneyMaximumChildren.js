/*
 * 03/18/23 morning
 * https://leetcode.com/contest/biweekly-contest-100/problems/distribute-money-to-maximum-children/
 */

const pr = console.log;


const distMoney = (money, children) => {
    if (money < children) {
        return -1;
    } else {
        money -= children;
        let cnt = money / 7 >> 0, rest = money % 7;
        if (cnt == children && rest == 0) return children;
        if (cnt == children - 1 && rest == 3) return children - 2;
        return Math.min(children - 1, cnt);
    }
};

// WA
const distMoney1 = (money, children) => {
    if (money < children) {
        return -1;
    } else {
        let cnt = money / 8 >> 0, rest = money % 8;
        if (cnt >= children) return children;
        let lack = children - cnt;
        // pr("cnt", cnt, "rest", rest, 'lack', lack)
        if (rest < lack) {
            cnt -= lack;
        }
        if (rest == 4) cnt--;
        return Math.max(0, cnt);
    }
};

const main = () => {
    let money = 20, children = 3;
    let money2 = 16, children2 = 2;
    let money3 = 1, children3 = 5;
    let money4 = 4, children4 = 4;
    let money_debug1 = 8, children_debug1 = 2;
    let money_debug2 = 9, children_debug2 = 2;
    let money_debug3 = 12, children_debug3 = 3;
    pr(distMoney(money, children))
    pr(distMoney(money2, children2))
    pr(distMoney(money3, children3))
    pr(distMoney(money4, children4))
    pr(distMoney(money_debug1, children_debug1))
    pr(distMoney(money_debug2, children_debug2)) // 1
    pr(distMoney(money_debug3, children_debug3)) // 1
};

main()