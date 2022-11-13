/**
 * 05/28/22 morning
 * https://leetcode.com/contest/biweekly-contest-79/problems/booking-concert-tickets-in-groups/
 */

const pr = console.log;

// Accepted
function BookMyShow(n, m) {
    let used = Array(n).fill(0);
    return { gather, scatter }
    function gather(k, maxRow) {
        for (let i = 0; i <= maxRow; i++) {
            let seat = m - used[i];
            if (seat >= k) {
                let first = used[i];
                used[i] += k;
                return [i, first];
            }
        }
        return [];
    }
    function scatter(k, maxRow) {
        let totToMaxRow = 0;
        for (let i = 0; i <= maxRow; i++) totToMaxRow += m - used[i];
        if (totToMaxRow < k) return false;
        for (let i = 0; i <= maxRow; i++) {
            let seat = m - used[i];
            if (seat >= k) {
                used[i] += k;
                k = 0;
            } else {
                k -= seat;
                used[i] = m;
            }
        }
        return true;
    }
}


/*
    * * * * *
    * * * * *   
    
    book [4, 0]
    b b b b *
    * * * * *  
    
    scatter[5, 1]

    b b b b b
    b b b b *  
*/

// TLE 91/94
function BookMyShow1(n, m) {
    let pre = Array(n).fill(0); // [0, m]
    return { gather, scatter }
    function gather(k, maxRow) {
        let old = [...pre];
        for (let i = 0; i <= maxRow; i++) {
            let seat = m - pre[i];
            if (seat >= k) {
                let first = pre[i];
                pre[i] += k;
                return [i, first];
            }
        }
        pre = old;
        // pr("pre", pre);
        return [];
    }
    function scatter(k, maxRow) {
        let old = [...pre];
        for (let i = 0; i <= maxRow; i++) {
            let seat = m - pre[i];
            if (seat >= k) {
                pre[i] += k;
                k = 0;
            } else {
                k -= seat;
                pre[i] = m;
            }
        }
        // pr("pre", pre);
        if (k == 0) {
            return true;
        } else {
            pre = old;
            return false;
        }
    }
}

const main = () => {
    let bms = new BookMyShow(2, 5);
    pr(bms.gather(4, 0)); // [0, 0]
    pr(bms.gather(2, 0)); // []
    pr(bms.scatter(5, 1)); // true
    pr(bms.scatter(5, 1)); // false

    pr()
    let debug1 = new BookMyShow(3, 7);
    pr(debug1.scatter(9, 0)); // false
    pr(debug1.gather(2, 2)); // [0, 0]
    pr(debug1.gather(8, 2)); // []
}

main()