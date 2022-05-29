// 04/16/22 night

const pr = console.log;

// Accepted
const v = [20, 50, 100, 200, 500];
function ATM() {
    let d = [0, 0, 0, 0, 0];
    return { deposit, withdraw }
    function deposit(banknotesCount) {
        for (let i = 0; i < 5; i++) {
            d[i] += banknotesCount[i];
        }
        // pr("d", d);
    }
    function withdraw(amount) {
        let pre = amount, res = Array(5).fill(0);
        for (let i = 4; i >= 0; i--) {
            let used = Math.min(d[i], amount / v[i] >> 0);
            amount -= used * v[i];
        }
        if (amount != 0) return [-1];
        amount = pre;
        for (let i = 4; i >= 0; i--) {
            let used = Math.min(d[i], amount / v[i] >> 0);
            amount -= used * v[i];
            res[i] = used;
            d[i] -= used;
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
    pr(atm.withdraw(550)); //[0,1,0,0,1]
};

main()