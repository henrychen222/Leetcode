/**
 * 9.5 afternoon
 * https://leetcode.com/problems/online-stock-span/
 */


// Accepted --- 588ms 34.02%
function StockSpanner() {
    this.stock = [];
};

StockSpanner.prototype.next = function (price) {
    if (this.stock.length == 0) {
        this.stock.push(price);
        return 1;
    } else {
        this.stock.push(price);
        // console.log(this.stock)
        let n = this.stock.length;
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i - 1; j >= 0; j--) {
                // console.log(this.stock[i], this.stock[j])
                if (this.stock[j] > this.stock[i]) {
                    return i - j;
                }
                if (j == 0) return i + 1;
            }
        }
    }
};

// Accepted --- 660ms 29.92%
// StockSpanner.prototype.next = function (price) {
//     if (this.stock.length == 0) {
//         this.stock.push(price);
//         return 1;
//     } else {
//         this.stock.push(price);
//         let n = this.stock.length;
//         for (let i = n - 1; ~i; i--) {
//             for (let j = i - 1; ~j; j--) {
//                 if (this.stock[j] > this.stock[i]) {
//                     return i - j;
//                 }
//                 if (j == 0) return i + 1;
//             }
//         }
//     }
// };

const main = () => {
    let S = new StockSpanner();
    console.log(S.next(100));
    console.log(S.next(80));
    console.log(S.next(60));
    console.log(S.next(70));
    console.log(S.next(60));
    console.log(S.next(75));
    console.log(S.next(85));

    console.log("");
    let debug1 = new StockSpanner();
    console.log(debug1.next(31)); // 1
    console.log(debug1.next(41)); // 2
    console.log(debug1.next(48)); // 3
    console.log(debug1.next(59)); // 4
    console.log(debug1.next(79)); // 5
}

main()