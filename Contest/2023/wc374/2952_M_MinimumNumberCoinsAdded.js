/*
 * 12/2/23 night
 * https://leetcode.com/contest/weekly-contest-374/problems/minimum-number-of-coins-to-be-added/
 */

const pr = console.log;

/*
[1, 4, 10]     [1, 2, 4, 10]
               [1, 2, 3, 4, 10]
  [3, 6]

[1, 4, 5, 7, 10, 19]   [1, 2, 4, 5, 7, 10, 19]
  [3, 1, 2, 3, 9]

  [1, 1, 1]      [1, 1, 1, 3]
                 [1, 1, 1, 3, 6]
                 [1, 1, 1, 3, 6, 12]
*/
const minimumAddedCoins1 = (a, target) => {
    a.push(target);
    let se = new Set(a), cur = 0, res = [];
    a.sort((x, y) => x - y);
    a.reverse();
    pr(a)
    while(a.length) {
        let x = a.pop();
        cur += x;
        pr(cur)
        if (!se.has(cur)) {
            se.add(cur);
            res.push(cur);
        }
    }
    // a.map(x => {
    //     cur += x;
    //     pr(cur)
    //     if (!se.has(cur) && cur < target) {
    //         se.add(cur);
    //         res.push(cur);
    //     }
    // })
    pr(res, res.length)
    // return res.length - n;
};

const minimumAddedCoins2 = (a, target) => {
    for(let i = 0;; i++) {
        let x = 1<<i;
        if(x>target) break;
    }
};


// Accepted chatGPT
function minimumAddedCoins(coins, target) {
    let maxReach = 0;  // Maximum reachable value using the coins encountered so far
    let coinsToAdd = 0;  // Minimum number of coins to add to make [1, target] obtainable
    
    coins.sort((a, b) => a - b);  // Sort coins in ascending order

    for (const coin of coins) {
        while (maxReach + 1 < coin) {
            maxReach += maxReach + 1;  // Add maxReach + 1 to the array
            coinsToAdd++;
            if (maxReach >= target) {
                return coinsToAdd;
            }
        }
        maxReach += coin;
        if (maxReach >= target) {
            return coinsToAdd;
        }
    }

    while (maxReach < target) {
        maxReach += maxReach + 1;
        coinsToAdd++;
    }

    return coinsToAdd;
}

const main = () => {
    let a = [1, 4, 10], target = 19;
    let a2 = [1, 4, 10, 5, 7, 19], target2 = 19;
    let a3 = [1,1,1], target3 = 20;
    pr(minimumAddedCoins(a, target))
    pr(minimumAddedCoins(a2, target2))
    pr(minimumAddedCoins(a3, target3))
};

main()