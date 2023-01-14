/*
---- Example Problems
https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/
https://leetcode.com/problems/longest-substring-without-repeating-characters/
https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
https://leetcode.com/problems/maximum-erasure-value/
https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/
https://leetcode.com/problems/longest-nice-subarray/
https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
*/

// similar to Monotonic Stack template

const sliding_window = (a) => {
    let l = -1;
    for (let i = 0; i < n; i++) { // move right pointer
        while (l < i) { // move left pointer, condition depends
            // max or min result when L move
            l++;
        }
        // max or min result after L stop
    }
};