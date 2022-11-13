// 04/24/21 night
const pr = console.log;

// Accepted --- 100ms
const mx = Math.max;
const t = 'aeiou';
const longestBeautifulSubstring = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        // pr(i)
        if (s[i] == 'a') { // longest one should start with 'a'
            let right = i;
            let flag = 1;
            for (let j = 0; j < 5; j++) {
                if (s[right] != t[j]) {
                    // pr("left", i, s[i], "right", right, s[right], t[j])
                    flag = 0;
                    break;
                }
                // pr("left", i, "right", right);
                while (right < n && s[right] == t[j]) right++;
                // pr("right", right);
            }
            // pr(flag, s.slice(i, right))
            if (flag) res = mx(res, right - i);
            i = right - 1;
        }
    }
    return res;
};


const main = () => {
    let word = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
    let word2 = "aeeeiiiioooauuuaeiou";
    let word3 = "a";
    pr(longestBeautifulSubstring(word));
    // pr(longestBeautifulSubstring(word2));
    // pr(longestBeautifulSubstring(word3));
};

main()