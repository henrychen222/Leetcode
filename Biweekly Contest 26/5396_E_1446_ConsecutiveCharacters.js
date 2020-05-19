/**
 * 5.16 morning
 * https://leetcode.com/contest/biweekly-contest-26/problems/consecutive-characters/
 */

// 128ms
const maxPower_skywalkert = (s) => {
    let mx = 0, las = 0, pos = 0;
    for (const ch of s) {
        if (ch != s[las]) {
            las = pos;
        }
        mx = Math.max(mx, pos - las + 1);
        ++pos;
    }
    return mx;
}

// 112 ms
const maxPower_huangyuyang = (s) => {
    let n = s.length;
    let ans = 1, cur = 1;
    for (let i = 1; i < n; i++) {
        if (s[i] == s[i - 1]) {
            cur++;
            ans = Math.max(cur, ans);
        } else {
            cur = 1;
        }
    }
    return ans;
}

// 92ms
const maxPower_JOHNKRAM = (s) => {
    let n = s.length, i, j, ans = 0;
    for (i = j = 0; i < n; i++)
        if (i + 1 < n && s[i] == s[i + 1]) {
            j++;
        }
        else {
            ans = Math.max(ans, j);
            j = 0;
        }
    return ans + 1;
}

// 60 ms
const maxPower_wzc1995 = (s) => {
    let n = s.length;
    let ans = 0;
    for (let i = 0, j = 0; i < n; i++) {
        while (s[j] != s[i]) {
            j++;
        }
        ans = Math.max(ans, i - j + 1);
    }
    return ans;
}

// Time limit exceed  213 / 333 test cases passed.
const maxPower = (s) => {
    let i, j, result = [];
    for (i = 0; i < s.length; i++) {
        for (j = i + 1; j < s.length + 1; j++) {
            let temp = s.slice(i, j);
            if (isIdentile(temp) == true) {
                result.push(temp);
            }
        }
    }
    //console.log(result);
    return getMax(result).length;
};

const getMax = (arr) => {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
};

const isIdentile = (string) => {
    const letters = string.split('');
    const unique = new Set(letters);
    return unique.size === 1 ? true : false;
}

const main = () => {
    let s = "leetcode";
    let s2 = "abbcccddddeeeeedcba";
    let s3 = "triplepillooooow";
    let s4 = "hooraaaaaaaaaaay";
    let s5 = "tourist";

    console.log(maxPower(s));
    console.log(maxPower(s2));
    console.log(maxPower(s3));
    console.log(maxPower(s4));
    console.log(maxPower(s5));

    console.log("")
    console.log(maxPower_skywalkert(s));
    console.log(maxPower_skywalkert(s2));
    console.log(maxPower_skywalkert(s3));
    console.log(maxPower_skywalkert(s4));
    console.log(maxPower_skywalkert(s5));

    console.log("")
    console.log(maxPower_huangyuyang(s));
    console.log(maxPower_huangyuyang(s2));
    console.log(maxPower_huangyuyang(s3));
    console.log(maxPower_huangyuyang(s4));
    console.log(maxPower_huangyuyang(s5));

    console.log("")
    console.log(maxPower_JOHNKRAM(s));
    console.log(maxPower_JOHNKRAM(s2));
    console.log(maxPower_JOHNKRAM(s3));
    console.log(maxPower_JOHNKRAM(s4));
    console.log(maxPower_JOHNKRAM(s5));

    console.log("")
    console.log(maxPower_wzc1995(s));
    console.log(maxPower_wzc1995(s2));
    console.log(maxPower_wzc1995(s3));
    console.log(maxPower_wzc1995(s4));
    console.log(maxPower_wzc1995(s5));


};

main()