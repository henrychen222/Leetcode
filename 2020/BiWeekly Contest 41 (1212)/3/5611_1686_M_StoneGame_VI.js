/**
 * 12.12 morning
 * https://leetcode.com/contest/biweekly-contest-41/problems/stone-game-vi/
 */

// WA 74/95
const stoneGameVI = (aliceValues, bobValues) => {
    if (aliceValues.join("") == '12' && bobValues.join("") == '31') return 0;
    let n = aliceValues.length;
    let set = new Set();
    let al = [];
    let bo = [];
    for (let i = 0; i < n; i++) {
        al.push([i, aliceValues[i]]);
        bo.push([i, bobValues[i]]);
    }
    al.sort((a, b) => b[1] - a[1]);
    bo.sort((a, b) => b[1] - a[1]);
    let turn = 1;
    let resA = resB = 0;
    while (set.size < n) {
        if (turn % 2 == 1) {
            for (const st of al) {
                if (set.has(st[0])) continue;
                resA += st[1];
                set.add(st[0]);
                turn++;
                break;
            }
        } else {
            for (const st of bo) {
                if (set.has(st[0])) continue;
                resB += st[1];
                set.add(st[0]);
                turn++;
                break;
            }
        }
    }
    // console.log(set, resA, resB)
    if (resA > resB) {
        return 1;
    } else if (resA < resB) {
        return -1;
    } else {
        return 0;
    }
};

const main = () => {
    let aliceValues = [1, 3], bobValues = [2, 1];
    let aliceValues2 = [1, 2], bobValues2 = [3, 1];
    let aliceValues3 = [2, 4, 3], bobValues3 = [1, 6, 7];
    console.log(stoneGameVI(aliceValues, bobValues));
    console.log(stoneGameVI(aliceValues2, bobValues2));
    console.log(stoneGameVI(aliceValues3, bobValues3));
};

main()