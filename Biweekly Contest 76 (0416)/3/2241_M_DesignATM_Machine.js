/**
 * 04/16/22 morning
 * https://leetcode.com/contest/biweekly-contest-76/problems/design-an-atm-machine/
 */

const pr = console.log;

// don't know
const v = [20, 50, 100, 200, 500];
function ATM() {
    let d = [0, 0, 0, 0, 0];
    return { deposit, withdraw }
    function deposit(banknotesCount) {
        for (let i = 0; i < 5; i++) {
            d[i] += banknotesCount[i];
        }
        pr("d", d);
    }
    function withdraw(amount) {
        let pre = [...d];
        let res = Array(5).fill(0);
        while (amount > 0) {
            pr(amount, "res", res, "d", d);
            for (let i = 4; i >= 0; i--) {
                let occ = d[i];
                if (occ > 0) {
                    if (amount % v[i] == 0) {
                        let need = amount / v[i];
                        if (d[i] >= need) {
                            amount = 0;
                            d[i] -= need;
                            res[i] += need;
                            return res;
                        }
                    } else {
                        if (amount < v[i]) {
                            continue;
                        }
                        let curMax = occ * v[i];
                        if (amount - curMax >= 0) {
                            // pr(">=")
                            let toStop = amount - curMax == 0;
                            amount -= curMax;
                            res[i] += occ;
                            d[i] -= occ;
                            if (toStop) break;
                        } else {
                            pr("<")
                            let used = parseInt(amount / v[i]);
                            res[i] += used;
                            d[i] -= used;
                            amount %= v[i];
                            break;
                        }
                    }
                }
            }
        }
        return res;
    }
}

const main = () => {
    let atm = new ATM();
    atm.deposit([0, 0, 1, 2, 1]);
    pr(atm.withdraw(600)); // [0,0,1,0,1]
    atm.deposit([0, 1, 0, 1, 1]); // [0,1,0,3,1]
    pr(atm.withdraw(600)); // [-1]
    // pr(atm.withdraw(550)); //[0,1,0,0,1]
};

main()