// 9.20 afternoon

/**
 * read:
 * https://stackoverflow.com/questions/27696712/java-label-outer-middle-inner
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
 * https://www.geeksforgeeks.org/set-add-method-in-java-with-examples/
 */
// Accepted --- 84ms 100.00%
const maxUniqueSplit = (s) => {
    let n = s.length;
    let arr = s.split("");
    let max = 0;
    top:
    for (let i = 0; i < (1 << (n - 1)); i++) {
        let bc = bitCount(i) + 1;
        if (bc <= max) continue;
        let set = new Set();
        let tmp = '';
        tmp += arr[0];
        for (let j = 1; j < n; j++) {
            if (i << ~(j - 1) < 0) {
                if (set.has(tmp)) continue top;
                set.add(tmp);
                tmp = '';
            }
            tmp += arr[j];
        }
        if (set.has(tmp)) continue top;
        set.add(tmp);
        console.log(set);
        max = Math.max(max, bc);
    }
    return max;
};

// Accepted --- 92ms 100.00%
const maxUniqueSplit_modify = (s) => {
    let n = s.length;
    let arr = s.split("");
    let max = 0;
    for (let i = 0; i < (1 << (n - 1)); i++) {
        let bc = bitCount(i) + 1;
        if (bc <= max) continue;
        let set = new Set();
        let tmp = '';
        tmp += arr[0];
        for (let j = 1; j < n; j++) {
            if (i << ~(j - 1) < 0) {
                if (set.has(tmp)) break;
                set.add(tmp);
                tmp = '';
            }
            tmp += arr[j];
        }
        if (set.has(tmp)) continue;
        set.add(tmp);
        max = Math.max(max, bc);
    }
    return max;
};

const bitCount = (n) => {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
};

const main = () => {
    let s = "ababccc";
    let s2 = "aba";
    let s3 = "aa";
    let debug1 = "addbsd";
    console.log(maxUniqueSplit(s)); // 5
    console.log(maxUniqueSplit(s2)); // 2
    console.log(maxUniqueSplit(s3)); // 1
    console.log(maxUniqueSplit(debug1)); // 5
};

main()