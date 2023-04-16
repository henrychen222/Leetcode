/**
 * 05/28/22 evening
 * https://leetcode.com/contest/weekly-contest-295/problems/apply-discount-to-prices/
 */

const pr = console.log;

// Accepted
const discountPrices = (ss, discount) => {
    let a = ss.split(" "), n = a.length, res = Array(n).fill("");
    for (let i = 0; i < n; i++) {
        let s = a[i];
        if (valid(s)) {
            let x = s.slice(1) - '0';
            x *= (1 - discount / 100);
            x = x.toFixed(2);
            // pr(s, x);
            res[i] = '$' + x;
        } else {
            res[i] = s;
        }
    }
    return res.join(" ");
};

const ok = (c) => '.0123456789'.indexOf(c) != -1;
const valid = (s) => {
    if (s.length == 1) return false;
    if (s[0] != '$') return false;
    for (let i = 1; i < s.length; i++) {
        if (!ok(s[i])) return false;
    }
    return true;
};

const main = () => {
    let s = "there are $1 $2 and 5$ candies in the shop", discount = 50;
    let s2 = "1 2 $3 4 $5 $6 7 8$ $9 $10$", discount2 = 100;
    let s_debug1 = "$76111 ab $6 $", discount_debug1 = 48;

    let s_debug2 = "f32eir5f6hlmmtnlq$zno3zbl5pr26b1xmet6q3rjzs422zqzsezpgi4jqx3h0olb428pk95qndkfz8hereio$2ewx0cnqlvnb6nl$$8iny7t4aemhnqzz6971rnq7pha97e9lf16227j5l2033pnddk $3513024 $516863 $604 $9128265 $945728 $nbf 5az21pm0tj $", discount_debug2 = 26
    pr(discountPrices(s, discount))
    pr(discountPrices(s2, discount2))
    pr(discountPrices(s_debug1, discount_debug1)) // "$39577.72 ab $3.12 $"
    pr(discountPrices(s_debug2, discount_debug2)) // "f32eir5f6hlmmtnlq$zno3zbl5pr26b1xmet6q3rjzs422zqzsezpgi4jqx3h0olb428pk95qndkfz8hereio$2ewx0cnqlvnb6nl$$8iny7t4aemhnqzz6971rnq7pha97e9lf16227j5l2033pnddk $2599637.76 $382478.62 $446.96 $6754916.10 $699838.72 $nbf 5az21pm0tj $"
};

main()

// pr(valid("$nbf"))