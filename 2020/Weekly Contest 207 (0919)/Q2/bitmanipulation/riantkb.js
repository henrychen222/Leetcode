// 9.20 afternoon

// Accepted --- 352ms 100.00%
const maxUniqueSplit_modify = (s) => {
    let n = s.length;
    let res = 0;
    // for (let i = 0; i < 2 ** (n - 1); i++) {
    for (let i = 0; i < (1 << (n - 1)); i++) {
        let set = new Set();
        let tmp = '';
        for (let j = 0; j < n - 1; j++) {
            tmp += s[j];
            if ((1 & (i >> j)) == 1) {
                if (!set.has(tmp)) {
                    set.add(tmp);
                    res = Math.max(res, set.size);
                }
                tmp = '';
            }
        }
        tmp += s[s.length - 1];
        if (!set.has(tmp)) {
            set.add(tmp);
            res = Math.max(res, set.size);
        }
    }
    return res;
};

// Accepted --- 328ms 100.00%
const maxUniqueSplit = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < (1 << (n - 1)); i++) {
        let set = new Set();
        let tmp = '';
        let flag = 1;
        for (let j = 0; j < n - 1; j++) {
            tmp += s[j];
            if ((1 & (i >> j)) == 1) {
                if (!set.has(tmp)) {
                    set.add(tmp);
                    flag &= 1;
                } else {
                    flag &= 0;
                }
                tmp = '';
            }
        }
        tmp += s[s.length - 1];
        if (!set.has(tmp)) {
            set.add(tmp);
            flag &= 1;
        } else {
            flag &= 0;
        }
        // console.log(flag);
        if (flag == 1) {
            res = Math.max(res, set.size);
        }
        // console.log(set, res);
    }
    return res;
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

    // console.log(1 & 0); // 0
    // console.log(1 & 1); // 1

};

main()