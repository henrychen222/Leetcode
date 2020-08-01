/**
 * 7.29 evening 7.30 night
 * https://leetcode.com/problems/longest-word-in-dictionary/
 */

// issue
const longestWord = (words) => {
    words.sort((a, b) => b.length - a.length);
    console.log(words);
    let resoppo = [];
    let data  = [];
    for (const w of words) {
        let tmp = [];
        for (let i = 1; i < w.length; i++) {
            let each = w.slice(0, i);
            tmp.push(each);
        }
        data.push([w, tmp]);
    }
    console.log(data);
    for (const d of data) {
        console.log(typeof d[1])
        let k = d[0];
        let val = Object.values(d[1]);
        if (val.length > 0) {
            for (const v of val) {
                if (!words.includes(v) && !resoppo.includes(k)) {
                    resoppo.push(k);
                }
            }
        }
    }
    console.log(resoppo);
};


const main = () => {
    let words = ["w", "wo", "wor", "worl", "world"];
    let words2 = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
    // console.log(longestWord(words));
    console.log(longestWord(words2));

    // console.log('world'.includes('wor'));
    // console.log(check('world', words));
};

main()