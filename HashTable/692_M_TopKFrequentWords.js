/**
 * 7.31 night
 * https://leetcode.com/problems/top-k-frequent-words/
 */

// Accepted --- 96ms 41.4MB 27.84%   {} slower than Map
const topKFrequent3 = (words, k) => {
    let element = [...new Set(words)];
    let map = {};
    for (const e of element) {
        map[e] = getFrequency(words, e);
    }
    element.sort((a, b) => {
        if (map[b] == map[a]) return a.localeCompare(b);
        return map[b] - map[a];
    });
    return element.slice(0, k);
};

// Accepted --- 96ms 41.4MB 46.74%   slice() and for loop same speed
const topKFrequent2 = (words, k) => {
    let element = [...new Set(words)];
    let map = new Map();
    for (const e of element) {
        map.set(e, getFrequency(words, e));
    }
    element.sort((a, b) => {
        if (map.get(b) == map.get(a)) return a.localeCompare(b);
        return map.get(b) - map.get(a);
    });
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(element[i]);
    }
    return res;
};

// Accepted --- 96ms 41.6MB 46.74%
const topKFrequent = (words, k) => {
    let element = [...new Set(words)];
    let map = new Map();
    for (const e of element) {
        map.set(e, getFrequency(words, e));
    }
    element.sort((a, b) => {
        if (map.get(b) == map.get(a)) return a.localeCompare(b);
        return map.get(b) - map.get(a);
    });
    // console.log(element);
    return element.slice(0, k);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let words = ["i", "love", "leetcode", "i", "love", "coding"],
        k = 2;
    let words2 = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
        k2 = 4;
    let words_debug1 = ["i", "love", "leetcode", "i", "love", "coding"],
        k_debug1 = 3;
    console.log(topKFrequent(words, k));
    console.log(topKFrequent(words2, k2));
    console.log(topKFrequent(words_debug1, k_debug1)); // ["i","love","coding"]

    console.log("");
    console.log(topKFrequent2(words, k));
    console.log(topKFrequent2(words2, k2));
    console.log(topKFrequent2(words_debug1, k_debug1));

    console.log("");
    console.log(topKFrequent3(words, k));
    console.log(topKFrequent3(words2, k2));
    console.log(topKFrequent3(words_debug1, k_debug1));
};

main()