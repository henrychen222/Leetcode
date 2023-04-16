// 06/26/21 night

const pr = console.log;

// Accepted --- 108ms
// read: https://leetcode.com/problems/number-of-wonderful-substrings/discuss/1299523/C%2B%2B-Bit-Vector-%2B-Prefix-Parities-(Similar-to-Prefix-Sums)
const asi = (c) => c.charCodeAt();
const wonderfulSubstrings = (s) => {
    let res = 0;
    let f = Array(2 ** 10).fill(0);
    f[0] = 1;
    let cur = res = 0;
    for (const c of s) {
        // pr(cur, res, f[cur])
        cur ^= 1 << asi(c) - 97; // get Hash (the set bit for a character.), update prefix parity 
        res += f[cur];
        for (let i = 0; i < 10; i++) { // a ~ j
            res += f[cur ^ 1 << i]; // 1 << i get Hash
        }
        f[cur]++;
    }
    return res;
};

const main = () => {
    let word = "aba";
    let word2 = "aabb";
    let word3 = "he";
    pr(wonderfulSubstrings(word))
    pr(wonderfulSubstrings(word2))
    pr(wonderfulSubstrings(word3))
};

main()