/**
 * 8.2 night  04/08/21 morning evening fix
 * https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
 */

const pr = console.log;

// Accepted --- 160ms 98.31%
const displayTable = (a) => {
    let fs = new Set();
    let tm = new Map();
    for (const e of a) {
        fs.add(e[2]);
        if (!tm.has(e[1])) tm.set(e[1], []);
        tm.get(e[1]).push(e[2]);
    }
    let food = [...fs];
    // food.sort((x, y) => x.localeCompare(y));
    // food = food.map(s => s.split(" ").join(""));
    food.sort((x, y) => {
        let nx = x.length;
        let ny = y.length;
        let n = Math.max(nx, ny);
        for (let i = 0; i < n; i++) {
            if (x[i] != y[i]) {
                if (x[i] == undefined) {
                    if (y[i] == undefined) {} else {
                        return -1;
                    }
                } else {
                    if (y[i] == undefined) {
                        return 1;
                    } else {
                        return x[i].charCodeAt() - y[i].charCodeAt();
                    }
                }
            }
        }
    });
    // pr(food);
    tm = new Map([...tm].sort((x, y) => x[0] - y[0]));
    let table = Array.from(tm.keys());
    // pr(tm);
    let row = tm.size;
    let col = fs.size;
    let res = initialize2DArrayNew(row + 1, col + 1);
    res[0][0] = 'Table';
    let fIdxM = new Map();
    let tIdxM = new Map();
    for (let j = 1; j <= col; j++) {
        fIdxM.set(food[j - 1], j);
        res[0][j] = food[j - 1];
    }
    for (let i = 1; i <= row; i++) {
        tIdxM.set(table[i - 1], i);
        res[i][0] = table[i - 1];
    }
    // pr(res, fIdxM, tIdxM);
    for (const [k, v] of tm) {
        let i = tIdxM.get(k);
        for (const e of v) {
            let j = fIdxM.get(e);
            res[i][j]++;
        }
    }
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            res[i][j] += '';
        }
    }
    return res;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let orders = [
        ["David", "3", "Ceviche"],
        ["Corina", "10", "Beef Burrito"],
        ["David", "3", "Fried Chicken"],
        ["Carla", "5", "Water"],
        ["Carla", "5", "Ceviche"],
        ["Rous", "3", "Ceviche"]
    ];
    let orders2 = [
        ["James", "12", "Fried Chicken"],
        ["Ratesh", "12", "Fried Chicken"],
        ["Amadeus", "12", "Fried Chicken"],
        ["Adam", "1", "Canadian Waffles"],
        ["Brianna", "1", "Canadian Waffles"]
    ];
    let orders3 = [
        ["Laura", "2", "Bean Burrito"],
        ["Jhon", "2", "Beef Burrito"],
        ["Melissa", "2", "Soda"]
    ];
    let debug1 = [
        ["pKKgO", "1", "qgGxK"],
        ["ZgW", "3", "XfuBe"]
    ];
    let debug2 = [
        ["ZmdDG", "16", "mrbRX"],
        ["pt", "1", "mrbRX"],
        ["Hl", "5", "qrzo"],
        ["jRyk", "12", "mrbRX"],
        [" sPzn", "8", "ijzu"],
        ["KHxC", "11", "JyY"],
        ["Qqox", "2", "iA"],
        ["aYWSw", "11", "ZHmJR"],
        ["onh", "5", "tGvXE"]
    ];
    pr(displayTable(orders));
    pr(displayTable(orders2));
    pr(displayTable(orders3));
    pr(displayTable(debug1));
    pr(displayTable(debug2)); // ["Table","JyY","ZHmJR","iA","ijzu","mrbRX","qrzo","tGvXE"]
};

main()

//////////////////// 8.2 night //////////////////////
// const displayTable = (orders) => {
//     let data = [];
//     orders.sort((a, b) => Number(a[1]) - Number(b[1]));
//     console.log(orders);
//     let tables = new Set();
//     let food = new Set();
//     for (const order of orders) {
//         tables.add(order[1]);
//         food.add(order[2]);
//     }
//     console.log(tables, food);
// };