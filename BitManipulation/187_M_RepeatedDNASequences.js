/**
 * 7.10 evening   fixed 01/24/21
 * https://leetcode.com/problems/repeated-dna-sequences/
 */

// Accepted --- 96ms 90.77%
const findRepeatedDnaSequences = (s) => {
    let set = new Set();
    let res = new Set();
    for (let i = 10; i <= s.length; i++) {
        let str = s.slice(i - 10, i);
        if (set.has(str) && !res.has(str)) {
            res.add(str);
        } else {
            set.add(str);
        }
    }
    // return [...new Set(res)];
    return [...res]; // Accepted --- 84ms 99.49%
};

// Time Limit 31/32
const findRepeatedDnaSequences3 = (s) => {
    let data = [];
    let res = [];
    for (let i = 10; i <= s.length; i++) {
        let str = s.slice(i - 10, i);
        if (data.indexOf(str) != -1 && res.indexOf(str) == -1) {
            res.push(str);
        } else {
            data.push(str);
        }
    }
    return res;
};

// Time Limit 31/32
const findRepeatedDnaSequences2 = (s) => {
    let data = [];
    for (let i = 10; i <= s.length; i++) {
        let str = s.slice(i - 10, i);
        data.push(str);
    }
    let newData = [...new Set(data)];
    let res = [];
    for (const i of newData) {
        if (data.indexOf(i) != data.lastIndexOf(i)) {
            res.push(i);
        }
    }
    return res;
};

// Time Limit 31/32
const findRepeatedDnaSequences1 = (s) => {
    let data = [];
    for (let i = 10; i <= s.length; i++) {
        let str = s.slice(i - 10, i);
        // console.log(i-10, i, str)
        data.push(str);
    }
    // console.log(data)
    let res = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] == data[j] && res.indexOf(data[i]) == -1) {
                res.push(data[i]);
            }
        }
    }
    return res;
};

const main = () => {
    let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
    let debug1 = "AAAAAAAAAAA";
    let debug2 = "AAAAAAAAAAAA";
    console.log(findRepeatedDnaSequences(s));
    console.log(findRepeatedDnaSequences(debug1));
    console.log(findRepeatedDnaSequences(debug2));
};

main()