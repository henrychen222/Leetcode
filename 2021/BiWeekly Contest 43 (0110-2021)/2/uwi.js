// 1.13 evening

// Accepted --- 284ms
let arr, n;
const maximumGain = (s, x, y) => {
    n = s.length;
    arr = s.split("");
    return Math.max(dfs(x, y, 'a', 'b'), dfs(y, x, 'b', 'a'));
};

const dfs = (x, y, a, b) => {
    let st = Array(n).fill("");
    let res = i = j = 0;
    for (const c of arr) { // ab
        if (i - 1 >= 0 && st[i - 1] == a && c == b) {
            res += x;
            i--;
        } else {
            st[i++] = c;
        }
    }
    // console.log("st", st);
    let st2 = Array(j).fill("");
    for (let k = 0; k < i; k++) { // ba
        let c = st[k];
        if (j - 1 >= 0 && st2[j - 1] == b && c == a) {
            res += y;
            j--;
        } else {
            st2[j++] = c;
        }
    }
    // console.log("st2", st2);
    return res;
};

const main = () => {
    let s = "cdbcbbaaabab", x = 4, y = 5;
    let s2 = "aabbaaxybbaabb", x2 = 5, y2 = 4;
    console.log(maximumGain(s, x, y));
    console.log(maximumGain(s2, x2, y2));
};

main()