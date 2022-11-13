// 2.6 night

// Accepted --- 156ms
const largestMerge = (word1, word2) => {
    let a1 = word1.split("");
    let a2 = word2.split("");
    let n = word1.length;
    let m = word2.length;
    let res = Array(n + m).fill(0);
    let i = j = cur = 0; // i and j for next append char of res of w1 w2
    while (i < n && j < m) {
        let k = i; // k, l for the first difference char of w1 w2
        let l = j;
        while (k < n && l < m && a1[k] == a2[l]) { // find the first diff
            k++;
            l++;
        }
        if (k >= n) { // first diff of w1 out of bound, append w2
            res[cur++] = a2[j++];
        } else if (l >= m) { // first diff of w2 out of bound, append w1
            res[cur++] = a1[i++];
        } else if (a1[k] > a2[l]) { // w1 fd > w2 fd, append w1
            res[cur++] = a1[i++];
        } else {                    // w1 fd <= w2 fd, append w2
            res[cur++] = a2[j++];
        }
    }
    // append rest chars
    while (i < n) res[cur++] = a1[i++];
    while (j < m) res[cur++] = a2[j++];
    return res.join("");
};

const main = () => {
    let word1 = "cabaa", word2 = "bcaaa";
    let word1_2 = "abcabc", word2_2 = "abdcaba";
    console.log(largestMerge(word1, word2)); // "cbcabaaaaa"
    console.log(largestMerge(word1_2, word2_2)); // "abdcabcabcaba"
};

main()