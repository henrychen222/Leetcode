/**
 * 11.16 evening
 * https://leetcode.com/problems/ones-and-zeroes/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/6188893.html
 * https://leetcode.com/problems/ones-and-zeroes/discuss/95814/c-dp-solution-with-comments
 */

// Accepted --- 140ms 85.51%
/**
 * dp[i][j]: the max number of strings that can be formed with i 0's and j 1's
 */
const findMaxForm = (strs, m, n) => {
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (const s of strs) {
        let zero = one = 0;
        for (const c of s) {
            c == '0' ? zero++ : one++;
        }
        for (let i = m; i >= zero; i--) { // bottom right to top left
            for (let j = n; j >= one; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
            }
        }
    }
    // console.log(dp);
    return dp[m][n];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};


// TLE 20/69
const findMaxForm2 = (strs, m, n) => {
    let res = 0;
    let len = strs.length;
    let N = 2 ** len;
    for (let i = 0; i < N; i++) {
        let data = [];
        let zero = 0;
        let one = 0;
        loop:
            for (let j = 0; j < len; j++) {
                if (i & (1 << j)) {
                    let s = strs[j];
                    for (const c of s) {
                        c == '0' ? zero++ : one++;
                        if (zero > m || one > n) break loop;
                    }
                    data.push(s);
                }
            }
        // console.log(data);
        res = Math.max(res, data.length);
    }
    return res;
};

// TLE 20/69
const findMaxForm1 = (strs, m, n) => {
    let res = 0;
    let len = strs.length;
    let N = 2 ** len;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < len; j++) {
            if (i & (1 << j)) {
                data.push(strs[j]);
            }
        }
        // console.log(data);
        let zero = 0;
        let one = 0;
        let flag = true;
        loop:
            for (const s of data) {
                for (const c of s) {
                    c == '0' ? zero++ : one++;
                    if (zero > m || one > n) {
                        flag = false;
                        break loop;
                    }
                }
            }
        if (flag) {
            // console.log(data, zero, one);
            res = Math.max(res, data.length);
        }
    }
    return res;
};


const main = () => {
    let strs = ["10", "0001", "111001", "1", "0"],
        m = 5,
        n = 3;
    let strs2 = ["10", "0", "1"],
        m2 = 1,
        n2 = 1;
    let strs_debug1 = ["10", "0001", "111001", "1", "0"],
        m_debug1 = 4,
        n_debug1 = 3;
    let strs_debug2 = ["0", "11", "1000", "01", "0", "101", "1", "1", "1", "0", "0", "0", "0", "1", "0", "0110101", "0", "11", "01", "00", "01111", "0011", "1", "1000", "0", "11101", "1", "0", "10", "0111"],
        m_debug2 = 9,
        n_debug2 = 80;
    console.log(findMaxForm(strs, m, n));
    console.log(findMaxForm(strs2, m2, n2));
    console.log(findMaxForm(strs_debug1, m_debug1, n_debug1));
    console.log(findMaxForm(strs_debug2, m_debug2, n_debug2));
};

main()