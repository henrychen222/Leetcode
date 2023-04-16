/**
 * 10/16/21 evening
 * https://leetcode.com/contest/weekly-contest-263/problems/simple-bank-system/
 */

const pr = console.log;

// Accepted
function Bank(a) {
    let n = a.length;
    return { transfer, deposit, withdraw }
    function transfer(account1, account2, money) {
        let i = account1 - 1, j = account2 - 1;
        if (i >= n || j >= n) return false;
        if (a[i] - money < 0) return false;
        a[i] -= money;
        a[j] += money;
        return true;
    }

    function deposit(account, money) {
        let idx = account - 1;
        if (idx >= n) return false;
        a[idx] += money;
        return true;
    }

    function withdraw(account, money) {
        let idx = account - 1;
        if (idx >= n) return false;
        if (a[idx] - money < 0) return false;
        a[idx] -= money;
        return true;
    }
}

const main = () => {
    let bank = new Bank([10, 100, 20, 50, 30]);
    pr(bank.withdraw(3, 10));    // true
    pr(bank.transfer(5, 1, 20)); //  true
    pr(bank.deposit(5, 20));     // true
    pr(bank.transfer(3, 4, 15)); // false
    pr(bank.withdraw(10, 50));   // false
};

main()