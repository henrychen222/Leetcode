// 1.13 evening

// TLE
let arr;
const maximumGain = (s, x, y) => {
    arr = s.split("");
    if (x > y) return dfs('a', 'b') * x + dfs('b', 'a') * y;
    return dfs('b', 'a') * y + dfs('a', 'b') * x;
};

const dfs = (a, b) => {
    let res = 0;
    let q = [];
    for (const c of arr) {
        if (q.length > 0 && q[0] == a && c == b) {
            q.shift();
            res++;
        } else {
            q.unshift(c);
        }
        // console.log(q.join(""))
    }
    arr = q.reverse();
    return res;
};

const main = () => {
    let s = "cdbcbbaaabab", x = 4, y = 5;
    let s2 = "aabbaaxybbaabb", x2 = 5, y2 = 4;
    console.log(maximumGain(s, x, y));
    console.log(maximumGain(s2, x2, y2));
};

main()