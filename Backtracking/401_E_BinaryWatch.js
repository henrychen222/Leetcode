/**
 * 5.20 evening
 * https://leetcode.com/problems/binary-watch/
 */

/**
 * https://www.cnblogs.com/grandyang/p/5896454.html
 * Accepted --- 52ms 33.8MB 84.34%
 */
const readBinaryWatch_cnblog2 = (num) => {
    let res = [];
    let hour = [8, 4, 2, 1];
    let minute = [32, 16, 8, 4, 2, 1];
    for (let i = 0; i <= num; ++i) { //总共要取num个, 在小时集合里取i个求和，然后在分钟集合里去num-i个求和，如果两个都符合题意，加入结果中
        let hours = generate(hour, i);
        let minutes = generate(minute, num - i);
        for (const h of hours) {
            if (h > 11) continue;
            for (const m of minutes) {
                if (m > 59) continue;
                res.push(h + (m < 10 ? ":0" : ":") + m);
            }
        }
    }
    return res;
};

const generate = (nums, cnt) => {
    let res = [];
    helper(nums, cnt, 0, 0, res);
    return res;
};

const helper = (nums, cnt, pos, out, res) => {
    if (cnt == 0) {
        res.push(out);
        return;
    }
    for (let i = pos; i < nums.length; ++i) {
        helper(nums, cnt - 1, i + 1, out + nums[i], res);
    }
};

// Accepted --- 100ms 33.7MB 13.25%
const readBinaryWatch_cnblog3 = (num) => {
    // 列出二进制表所有72种情况. 采用跟上面那种解法相同的思路
    let hours = [
        [0],
        [1, 2, 4, 8],
        [3, 5, 9, 6, 10],
        [7, 11]
    ];
    let minutes = [
        [0],
        [1, 2, 4, 8, 16, 32],
        [3, 5, 9, 17, 33, 6, 10, 18, 34, 12, 20, 36, 24, 40, 48],
        [7, 11, 19, 35, 13, 21, 37, 25, 41, 49, 14, 22, 38, 26, 42, 50, 28, 44, 52, 56],
        [15, 23, 39, 27, 43, 51, 29, 45, 53, 57, 30, 46, 54, 58],
        [31, 47, 55, 59]
    ];
    let res = [];
    for (let k = 0; k <= num; ++k) {
        let t = num - k;
        if (k > 3 || t > 5) continue;
        for (let i = 0; i < hours[k].length; ++i) { //时针集合取k个
            for (let j = 0; j < minutes[t].length; ++j) { //分针集合取num-k个
                let str = minutes[t][j] < 10 ? "0" + minutes[t][j] : minutes[t][j];
                res.push(hours[k][i] + ":" + str);
            }
        }
    }
    return res;
};

/**
 * https://zxi.mytechroad.com/blog/bit/leetcode-401-binary-watch/
 * Accepted --- 92ms 34.7MB 14.46%
 */
const readBinaryWatch_huahua = (num) => {
    let ans = [];
    for (let i = 0; i <= num; ++i) {
        for (const h of nums(i, 12)) {
            for (const m of nums(num - i, 60)) {
                ans.push(h + (m < 10 ? ":0" : ":") + m);
            }
        }
    }
    return ans;
};

const nums = (b, r) => {
    let ans = [];
    for (let n = 0; n < r; ++n)
        if (bitCount(n) == b) ans.push(n); //in java use Integer.bitCount()
    return ans;
}

const bitCount = (n) => {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
}


const main = () => {
    let num = 1;
    console.log(readBinaryWatch_cnblog2(num));

    console.log("")
    console.log(readBinaryWatch_cnblog3(num));

    console.log("")
    console.log(readBinaryWatch_huahua(num));
};

main()