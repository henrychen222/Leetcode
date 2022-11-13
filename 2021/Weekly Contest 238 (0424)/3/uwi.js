// 04/24/21 night
const pr = console.log;

// Accepted --- 172ms
const mx = Math.max;
const MIN = Number.MIN_SAFE_INTEGER;
const t = 'aeiou';
const longestBeautifulSubstring = (s) => {
    let n = s.length;
    let res = 0;
    let dp = Array(6).fill(MIN);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 5; j++) {
            if (s[i] == t[j]) {
                dp[j + 1] = mx(dp[j + 1] + 1, dp[j] + 1);
                for (let k = 1; k < 6; k++) {
                    if (k != j + 1) dp[k] = MIN;
                }
            }
        }
        // pr(dp);
        res = mx(res, dp[5]);
    }
    return res;
};


const main = () => {
    let word = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
    let word2 = "aeeeiiiioooauuuaeiou";
    let word3 = "a";
    pr(longestBeautifulSubstring(word));
    pr(longestBeautifulSubstring(word2));
    pr(longestBeautifulSubstring(word3));
};

main()