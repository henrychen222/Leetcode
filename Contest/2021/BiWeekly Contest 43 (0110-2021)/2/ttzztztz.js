// 1.13 evening

// Accepted --- 188ms
let st, res, s, x, y;
const maximumGain = (S, X, Y) => {
    s = S;
    x = X;
    y = Y;
    res = 0;
    st = [];
    operate('a', 'b');
    // console.log(st.join(""));
    s = st.join("");
    st = [];
    operate('b', 'a');
    // console.log(st.join(""));
    return res;
};

const operate = (a, b) => {
    let tmp = a + b;
    for (const c of s) {
        if (x < y) {
            if (c == a && st.length > 0 && st[st.length - 1] == b) {
                st.pop();
                tmp == 'ab' ? res += y : res += x;
            } else {
                st.push(c);
            }
        } else {
            if (c == b && st.length > 0 && st[st.length - 1] == a) {
                st.pop();
                tmp == 'ba' ? res += y : res += x;
            } else {
                st.push(c);
            }
        }
    }
};

// 180ms
const maximumGain_origin = (s, x, y) => {
    let res = 0;
    let st = [];
    for (const c of s) {
        if (x < y) {
            if (c == 'a' && st.length > 0 && st[st.length - 1] == 'b') {
                st.pop();
                res += y;
            } else {
                st.push(c);
            }
        } else {
            if (c == 'b' && st.length > 0 && st[st.length - 1] == 'a') {
                st.pop();
                res += x;
            } else {
                st.push(c);
            }
        }
    }
    console.log(s, st.join(""));
    s = st.join("");
    st = [];
    for (const c of s) {
        if (x < y) {
            if (c == 'b' && st.length > 0 && st[st.length - 1] == 'a') {
                st.pop();
                res += x;
            } else {
                st.push(c);
            }
        } else {
            if (c == 'a' && st.length > 0 && st[st.length - 1] == 'b') {
                st.pop();
                res += y;
            } else {
                st.push(c);
            }
        }
    }
    console.log(st.join(""));
    return res;
};

const main = () => {
    let s = "cdbcbbaaabab", x = 4, y = 5;
    let s2 = "aabbaaxybbaabb", x2 = 5, y2 = 4;
    console.log(maximumGain(s, x, y));
    console.log(maximumGain(s2, x2, y2));
};

main()